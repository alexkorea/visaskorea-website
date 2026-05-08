import type { Metadata, Viewport } from "next";
import {
  SITE_CONFIG,
  DEFAULT_SEO,
  LOCALE_HTML_LANG,
  type Locale,
} from "./config";

export interface PageSEO {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  ogType?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  noIndex?: boolean;
  noFollow?: boolean;
}

export interface GenerateMetadataOptions {
  locale: Locale;
  pathname: string;
  seo: PageSEO;
  alternateLocales?: Partial<Record<Locale, PageSEO>>;
}

/**
 * Generate complete metadata for a page with multilingual support
 */
export function generatePageMetadata({
  locale,
  pathname,
  seo,
  alternateLocales,
}: GenerateMetadataOptions): Metadata {
  const baseUrl = SITE_CONFIG.domain;
  const canonicalUrl = `${baseUrl}/${locale}${pathname === "/" ? "" : pathname}`;

  // Generate alternate language links
  const languages: Record<string, string> = {};
  SITE_CONFIG.locales.forEach((loc) => {
    languages[LOCALE_HTML_LANG[loc]] = `${baseUrl}/${loc}${pathname === "/" ? "" : pathname}`;
  });
  languages["x-default"] = `${baseUrl}/${SITE_CONFIG.defaultLocale}${pathname === "/" ? "" : pathname}`;

  // Combine with site title (use absolute to prevent layout template duplication)
  const fullTitle =
    seo.title === DEFAULT_SEO[locale].title
      ? seo.title
      : `${seo.title} | ${SITE_CONFIG.shortName}`;

  const metadata: Metadata = {
    title: { absolute: fullTitle },
    description: seo.description,
    keywords: seo.keywords || DEFAULT_SEO[locale].keywords,
    authors: seo.author ? [{ name: seo.author }] : undefined,
    creator: SITE_CONFIG.organization.name,
    publisher: SITE_CONFIG.organization.name,

    // Canonical & alternates
    alternates: {
      canonical: canonicalUrl,
      languages,
    },

    // Open Graph
    openGraph: {
      title: fullTitle,
      description: seo.description,
      url: canonicalUrl,
      siteName: SITE_CONFIG.name,
      locale: LOCALE_HTML_LANG[locale],
      alternateLocale: SITE_CONFIG.locales
        .filter((l) => l !== locale)
        .map((l) => LOCALE_HTML_LANG[l]),
      type: seo.ogType || "website",
      images: seo.ogImage
        ? [
            {
              url: seo.ogImage,
              width: 1200,
              height: 630,
              alt: seo.title,
            },
          ]
        : [
            {
              url: `${baseUrl}/og-default.jpg`,
              width: 1200,
              height: 630,
              alt: SITE_CONFIG.name,
            },
          ],
      ...(seo.ogType === "article" && {
        publishedTime: seo.publishedTime,
        modifiedTime: seo.modifiedTime,
        authors: seo.author ? [seo.author] : undefined,
      }),
    },

    // Twitter
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: seo.description,
      images: seo.ogImage ? [seo.ogImage] : [`${baseUrl}/og-default.jpg`],
    },

    // Robots
    robots: {
      index: !seo.noIndex,
      follow: !seo.noFollow,
      googleBot: {
        index: !seo.noIndex,
        follow: !seo.noFollow,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },

    // Other
    metadataBase: new URL(baseUrl),
  };

  return metadata;
}

/**
 * Generate viewport settings
 */
export function generateViewport(): Viewport {
  return {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
    themeColor: [
      { media: "(prefers-color-scheme: light)", color: "#ffffff" },
      { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
    ],
  };
}

/**
 * Generate metadata for visa detail pages
 */
export function generateVisaMetadata(
  locale: Locale,
  visa: {
    slug: string;
    title: Record<Locale, string>;
    description: Record<Locale, string>;
    keywords?: Record<Locale, string[]>;
  }
): Metadata {
  return generatePageMetadata({
    locale,
    pathname: `/visa/${visa.slug}`,
    seo: {
      title: visa.title[locale],
      description: visa.description[locale],
      keywords: visa.keywords?.[locale],
    },
  });
}

/**
 * Generate metadata for business/office setup pages
 */
export function generateBusinessMetadata(
  locale: Locale,
  service: {
    slug: string;
    title: Record<Locale, string>;
    description: Record<Locale, string>;
    keywords?: Record<Locale, string[]>;
  }
): Metadata {
  return generatePageMetadata({
    locale,
    pathname: `/business/${service.slug}`,
    seo: {
      title: service.title[locale],
      description: service.description[locale],
      keywords: service.keywords?.[locale],
    },
  });
}

/**
 * Generate metadata for blog posts
 */
export function generateBlogMetadata(
  locale: Locale,
  post: {
    slug: string;
    title: string;
    description: string;
    publishedAt: string;
    updatedAt?: string;
    author?: string;
    ogImage?: string;
    keywords?: string[];
  }
): Metadata {
  return generatePageMetadata({
    locale,
    pathname: `/blog/${post.slug}`,
    seo: {
      title: post.title,
      description: post.description,
      keywords: post.keywords,
      ogType: "article",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      author: post.author,
      ogImage: post.ogImage,
    },
  });
}

/**
 * Generate metadata for Q&A pages
 */
export function generateQnaMetadata(
  locale: Locale,
  qna: {
    slug: string;
    question: string;
    answer: string;
    keywords?: string[];
  }
): Metadata {
  return generatePageMetadata({
    locale,
    pathname: `/qa/${qna.slug}`,
    seo: {
      title: qna.question,
      description:
        qna.answer.slice(0, 160) + (qna.answer.length > 160 ? "..." : ""),
      keywords: qna.keywords,
    },
  });
}

/**
 * Generate category/list page metadata
 */
export function generateListMetadata(
  locale: Locale,
  category: {
    type: "visa" | "business" | "blog" | "qna";
    title: Record<Locale, string>;
    description: Record<Locale, string>;
    keywords?: Record<Locale, string[]>;
  }
): Metadata {
  return generatePageMetadata({
    locale,
    pathname: `/${category.type}`,
    seo: {
      title: category.title[locale],
      description: category.description[locale],
      keywords: category.keywords?.[locale],
    },
  });
}
