import { SITE_CONFIG, type Locale, LOCALE_HTML_LANG } from "./config";

// Types for structured data
export interface BreadcrumbItem {
  name: string;
  url: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ArticleData {
  title: string;
  description: string;
  url: string;
  image?: string;
  datePublished: string;
  dateModified?: string;
  author?: string;
}

/**
 * Generate Organization structured data
 */
export function generateOrganizationSchema() {
  const org = SITE_CONFIG.organization;

  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${org.url}/#organization`,
    name: org.name,
    legalName: org.legalName,
    url: org.url,
    logo: {
      "@type": "ImageObject",
      url: org.logo,
    },
    foundingDate: org.foundingDate,
    address: {
      "@type": "PostalAddress",
      streetAddress: org.address.streetAddress,
      addressLocality: org.address.addressLocality,
      addressRegion: org.address.addressRegion,
      postalCode: org.address.postalCode,
      addressCountry: org.address.addressCountry,
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: org.contactPoint.telephone,
      email: org.contactPoint.email,
      contactType: org.contactPoint.contactType,
      availableLanguage: org.contactPoint.availableLanguage,
    },
    sameAs: org.sameAs,
    areaServed: {
      "@type": "Country",
      name: "South Korea",
    },
    serviceType: [
      "Visa Consulting",
      "Immigration Services",
      "Corporate Establishment",
      "Foreign Investment Consulting",
    ],
  };
}

/**
 * Generate WebSite structured data with search action
 */
export function generateWebsiteSchema(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_CONFIG.domain}/#website`,
    url: SITE_CONFIG.domain,
    name: SITE_CONFIG.name,
    inLanguage: LOCALE_HTML_LANG[locale],
    publisher: {
      "@id": `${SITE_CONFIG.domain}/#organization`,
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_CONFIG.domain}/${locale}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

/**
 * Generate BreadcrumbList structured data
 */
export function generateBreadcrumbSchema(
  locale: Locale,
  items: BreadcrumbItem[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url.startsWith("http")
        ? item.url
        : `${SITE_CONFIG.domain}/${locale}${item.url}`,
    })),
  };
}

/**
 * Generate FAQPage structured data
 */
export function generateFAQSchema(items: FAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

/**
 * Generate Article structured data for blog posts
 */
export function generateArticleSchema(locale: Locale, article: ArticleData) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    url: article.url.startsWith("http")
      ? article.url
      : `${SITE_CONFIG.domain}/${locale}${article.url}`,
    image: article.image || `${SITE_CONFIG.domain}/og-default.jpg`,
    datePublished: article.datePublished,
    dateModified: article.dateModified || article.datePublished,
    author: {
      "@type": "Person",
      name: article.author || SITE_CONFIG.organization.name,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_CONFIG.organization.name,
      logo: {
        "@type": "ImageObject",
        url: SITE_CONFIG.organization.logo,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": article.url.startsWith("http")
        ? article.url
        : `${SITE_CONFIG.domain}/${locale}${article.url}`,
    },
    inLanguage: LOCALE_HTML_LANG[locale],
  };
}

/**
 * Generate Service structured data for visa/business services
 */
export function generateServiceSchema(
  locale: Locale,
  service: {
    name: string;
    description: string;
    url: string;
    category?: string;
    areaServed?: string;
  }
) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    url: service.url.startsWith("http")
      ? service.url
      : `${SITE_CONFIG.domain}/${locale}${service.url}`,
    provider: {
      "@id": `${SITE_CONFIG.domain}/#organization`,
    },
    serviceType: service.category || "Immigration Consulting",
    areaServed: {
      "@type": "Country",
      name: service.areaServed || "South Korea",
    },
    inLanguage: LOCALE_HTML_LANG[locale],
  };
}

/**
 * Generate HowTo structured data for process pages
 */
export function generateHowToSchema(
  locale: Locale,
  howTo: {
    name: string;
    description: string;
    steps: Array<{
      name: string;
      text: string;
      url?: string;
    }>;
    totalTime?: string;
  }
) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: howTo.name,
    description: howTo.description,
    totalTime: howTo.totalTime,
    step: howTo.steps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.name,
      text: step.text,
      url: step.url
        ? step.url.startsWith("http")
          ? step.url
          : `${SITE_CONFIG.domain}/${locale}${step.url}`
        : undefined,
    })),
    inLanguage: LOCALE_HTML_LANG[locale],
  };
}
