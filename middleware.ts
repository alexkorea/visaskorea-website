import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { i18nConfig, type Locale } from "@/lib/i18n/config";

// Get preferred locale from Accept-Language header
function getPreferredLocale(request: NextRequest): Locale {
  const acceptLanguage = request.headers.get("accept-language");

  if (!acceptLanguage) return i18nConfig.defaultLocale;

  // Parse Accept-Language header
  const languages = acceptLanguage
    .split(",")
    .map((lang) => {
      const [code, q = "1"] = lang.trim().split(";q=");
      return { code: code.split("-")[0].toLowerCase(), q: parseFloat(q) };
    })
    .sort((a, b) => b.q - a.q);

  // Find first matching locale
  for (const lang of languages) {
    const matchedLocale = i18nConfig.locales.find(
      (locale) => locale === lang.code
    );
    if (matchedLocale) return matchedLocale;
  }

  return i18nConfig.defaultLocale;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check if pathname starts with a locale
  const pathnameHasLocale = i18nConfig.locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) {
    // Set locale header for root layout to read
    const locale = i18nConfig.locales.find(
      (l) => pathname.startsWith(`/${l}/`) || pathname === `/${l}`
    ) || i18nConfig.defaultLocale;
    const response = NextResponse.next();
    response.headers.set('x-locale', locale);
    return response;
  }

  // Skip middleware for static files and API routes
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".") // static files
  ) {
    return NextResponse.next();
  }

  // Redirect to locale-prefixed path
  const locale = getPreferredLocale(request);
  const newUrl = new URL(`/${locale}${pathname}`, request.url);

  return NextResponse.redirect(newUrl);
}

export const config = {
  matcher: [
    // Skip all internal paths (_next, api)
    "/((?!_next|api|.*\\..*).*)",
  ],
};
