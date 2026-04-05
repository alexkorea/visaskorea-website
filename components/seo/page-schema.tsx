import { MultiJsonLd } from "./json-ld";
import {
  generateOrganizationSchema,
  generateWebsiteSchema,
  generateArticleSchema,
  generateServiceSchema,
  type Locale,
  type ArticleData,
} from "@/lib/seo";

interface BasePageSchemaProps {
  locale: Locale;
  includeOrganization?: boolean;
  includeWebsite?: boolean;
}

/**
 * Base schema for all pages (Organization + Website)
 */
export function BasePageSchema({
  locale,
  includeOrganization = true,
  includeWebsite = true,
}: BasePageSchemaProps) {
  const schemas = [];

  if (includeOrganization) {
    schemas.push(generateOrganizationSchema());
  }

  if (includeWebsite) {
    schemas.push(generateWebsiteSchema(locale));
  }

  if (schemas.length === 0) return null;

  return <MultiJsonLd schemas={schemas} />;
}

interface ArticlePageSchemaProps {
  locale: Locale;
  article: ArticleData;
}

/**
 * Schema for article/blog pages
 */
export function ArticlePageSchema({ locale, article }: ArticlePageSchemaProps) {
  return (
    <>
      <BasePageSchema locale={locale} />
      <MultiJsonLd schemas={[generateArticleSchema(locale, article)]} />
    </>
  );
}

interface ServicePageSchemaProps {
  locale: Locale;
  service: {
    name: string;
    description: string;
    url: string;
    category?: string;
    areaServed?: string;
  };
}

/**
 * Schema for service pages (visa, business setup, etc.)
 */
export function ServicePageSchema({
  locale,
  service,
}: ServicePageSchemaProps) {
  return (
    <>
      <BasePageSchema locale={locale} />
      <MultiJsonLd schemas={[generateServiceSchema(locale, service)]} />
    </>
  );
}
