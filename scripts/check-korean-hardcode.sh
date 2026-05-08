#!/usr/bin/env bash
# check-korean-hardcode.sh — Detect hardcoded Korean text in .tsx files
# For visaskorea-project (uses app/[locale]/ routing)
# Exit code 1 = violations found, 0 = clean

set -euo pipefail

PROJECT_ROOT="$(cd "$(dirname "$0")/.." && pwd)"
VIOLATIONS=0
TOTAL_FILES=0

export LC_ALL=en_US.UTF-8

# Korean character pattern (Hangul syllables + Jamo)
KR='[가-힣ㄱ-ㅣ]'

# Helper: check if string contains Korean characters
has_korean() {
  echo "$1" | grep -q "$KR"
}

# Color output (disable if not a terminal)
if [ -t 1 ]; then
  RED='\033[0;31m'
  YELLOW='\033[1;33m'
  GREEN='\033[0;32m'
  BOLD='\033[1m'
  NC='\033[0m'
else
  RED='' YELLOW='' GREEN='' BOLD='' NC=''
fi

echo "${BOLD}=== Korean Hardcode Check (visaskorea) ===${NC}"
echo "Scanning: app/[locale]/ and components/ (.tsx files)"
echo ""

# Build list of .tsx files under app/[locale]/ and components/, excluding node_modules
SEARCH_DIRS=()
[ -d "$PROJECT_ROOT/app/[locale]" ] && SEARCH_DIRS+=("$PROJECT_ROOT/app/[locale]")
[ -d "$PROJECT_ROOT/components" ] && SEARCH_DIRS+=("$PROJECT_ROOT/components")

if [ ${#SEARCH_DIRS[@]} -eq 0 ]; then
  echo "No directories to scan."
  exit 0
fi

FILES=$(find "${SEARCH_DIRS[@]}" \
  -name '*.tsx' \
  -not -path '*/node_modules/*' \
  2>/dev/null | sort)

for FILE in $FILES; do
  REL_PATH="${FILE#$PROJECT_ROOT/}"
  TOTAL_FILES=$((TOTAL_FILES + 1))

  # Quick check: does file contain any Korean at all?
  if ! grep -q "$KR" "$FILE"; then
    continue
  fi

  # Read file line by line
  LINE_NUM=0
  while IFS= read -r LINE || [[ -n "$LINE" ]]; do
    LINE_NUM=$((LINE_NUM + 1))

    # Skip empty lines
    [[ -z "$LINE" ]] && continue

    # Check if line contains Korean characters
    if ! has_korean "$LINE"; then
      continue
    fi

    # --- Exclusion: comments ---
    TRIMMED="$(echo "$LINE" | sed 's/^[[:space:]]*//')"
    [[ "$TRIMMED" == //* ]] && continue
    [[ "$TRIMMED" == \** ]] && continue
    [[ "$TRIMMED" == /\** ]] && continue
    [[ "$TRIMMED" =~ ^\{/\*.*/\}\}?$ ]] && continue

    # --- Exclusion: import statements ---
    [[ "$TRIMMED" == import\ * ]] && continue
    [[ "$TRIMMED" == import\{* ]] && continue

    # --- Exclusion: type definitions ---
    [[ "$TRIMMED" == type\ * ]] && continue
    [[ "$TRIMMED" == interface\ * ]] && continue

    # --- Exclusion: t() translation function calls ---
    # Remove t("...") / t('...') calls then check if Korean remains
    CLEANED="$LINE"
    CLEANED=$(echo "$CLEANED" | sed -E "s/t\(['\"][^'\"]*['\"]\)//g")

    # --- Exclusion: fallback patterns (|| "한국어" or ?? "한국어") ---
    CLEANED=$(echo "$CLEANED" | sed -E "s/\|\|[[:space:]]*['\"][^'\"]*['\"]//g")
    CLEANED=$(echo "$CLEANED" | sed -E "s/\?\?[[:space:]]*['\"][^'\"]*['\"]//g")

    # After removing t() calls and fallbacks, check if Korean still remains
    if ! has_korean "$CLEANED"; then
      continue
    fi

    # --- Exclusion: alt="" attributes ---
    CLEANED2=$(echo "$CLEANED" | sed -E "s/alt=['\"][^'\"]*['\"]//g")
    if ! has_korean "$CLEANED2"; then
      continue
    fi

    # This is a violation
    if [ "$VIOLATIONS" -eq 0 ]; then
      echo "${RED}${BOLD}VIOLATIONS FOUND:${NC}"
      echo ""
    fi
    VIOLATIONS=$((VIOLATIONS + 1))
    echo "${YELLOW}${REL_PATH}:${LINE_NUM}${NC}"
    echo "  ${LINE}"
    echo ""

  done < "$FILE"
done

echo "---"
echo "Files scanned: $TOTAL_FILES"

if [ "$VIOLATIONS" -gt 0 ]; then
  echo "${RED}${BOLD}Found $VIOLATIONS line(s) with hardcoded Korean text.${NC}"
  exit 1
else
  echo "${GREEN}${BOLD}No hardcoded Korean text found. All clean!${NC}"
  exit 0
fi
