import { SITE_CONFIG, type Locale } from "@/lib/seo/config";

export const i18nConfig = {
  defaultLocale: SITE_CONFIG.defaultLocale,
  locales: SITE_CONFIG.locales,
} as const;

export type { Locale };

/**
 * Get locale from pathname
 */
export function getLocaleFromPathname(pathname: string): Locale {
  const segments = pathname.split("/").filter(Boolean);
  const maybeLocale = segments[0] as Locale;

  if (i18nConfig.locales.includes(maybeLocale)) {
    return maybeLocale;
  }

  return i18nConfig.defaultLocale;
}

/**
 * Remove locale prefix from pathname
 */
export function removeLocaleFromPathname(pathname: string): string {
  const segments = pathname.split("/").filter(Boolean);
  const maybeLocale = segments[0] as Locale;

  if (i18nConfig.locales.includes(maybeLocale)) {
    return "/" + segments.slice(1).join("/") || "/";
  }

  return pathname;
}

/**
 * Add locale prefix to pathname
 */
export function addLocaleToPathname(pathname: string, locale: Locale): string {
  const cleanPath = removeLocaleFromPathname(pathname);
  return `/${locale}${cleanPath === "/" ? "" : cleanPath}`;
}

/**
 * Generate all locale variants for a pathname (for static generation)
 */
export function generateLocaleVariants(pathname: string): { locale: Locale }[] {
  return i18nConfig.locales.map((locale) => ({ locale }));
}
