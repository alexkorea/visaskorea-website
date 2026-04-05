import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { i18nConfig, type Locale } from "@/lib/i18n/config";
import { LOCALE_HTML_LANG, DEFAULT_SEO, SITE_CONFIG } from "@/lib/seo/config";
import { BasePageSchema } from "@/components/seo/page-schema";

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

// Generate static params for all locales
export function generateStaticParams() {
  return i18nConfig.locales.map((locale) => ({ locale }));
}

// Generate metadata for the locale layout
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  if (!i18nConfig.locales.includes(locale as Locale)) {
    return {};
  }

  const validLocale = locale as Locale;
  const seo = DEFAULT_SEO[validLocale];

  return {
    title: {
      template: `%s | ${SITE_CONFIG.shortName}`,
      default: seo.title,
    },
    description: seo.description,
    keywords: seo.keywords,
    openGraph: {
      siteName: SITE_CONFIG.name,
      locale: LOCALE_HTML_LANG[validLocale],
    },
  };
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params;

  // Validate locale
  if (!i18nConfig.locales.includes(locale as Locale)) {
    notFound();
  }

  const validLocale = locale as Locale;

  return (
    <>
      {/* Base structured data for all pages */}
      <BasePageSchema locale={validLocale} />

      {/* Page content */}
      <div lang={LOCALE_HTML_LANG[validLocale]}>{children}</div>
    </>
  );
}
