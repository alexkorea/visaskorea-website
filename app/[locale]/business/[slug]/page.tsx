import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { BusinessDetailTemplate } from "@/components/templates/business-detail-template";
import { i18nConfig, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { generatePageMetadata } from "@/lib/seo";
import { getBusinessDetail, getAllBusinessSlugs, BUSINESS_SEO } from "@/lib/content/business";

interface PageProps {
  params: Promise<{ locale: string; slug: string }>;
}

const BUSINESS_SLUGS = ["foreign-invested-company", "branch-office", "liaison-office"];

export function generateStaticParams() {
  const params: { locale: string; slug: string }[] = [];
  for (const locale of i18nConfig.locales) {
    for (const slug of BUSINESS_SLUGS) {
      params.push({ locale, slug });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const validLocale = (
    i18nConfig.locales.includes(locale as Locale) ? locale : "ko"
  ) as Locale;

  const seoData = BUSINESS_SEO[slug];
  if (!seoData) return {};

  return generatePageMetadata({
    locale: validLocale,
    pathname: `/business/${slug}`,
    seo: {
      title: seoData.title[validLocale],
      description: seoData.description[validLocale],
      keywords: seoData.keywords[validLocale],
    },
  });
}

export default async function BusinessDetailPage({ params }: PageProps) {
  const { locale, slug } = await params;
  const validLocale = (
    i18nConfig.locales.includes(locale as Locale) ? locale : "ko"
  ) as Locale;
  const dict = getDictionary(validLocale);

  // Try requested locale, fall back to ko
  const service = getBusinessDetail(slug, validLocale) || getBusinessDetail(slug, "ko");
  if (!service) {
    notFound();
  }

  const categoryTitle = dict.common.business;

  return (
    <div className="flex min-h-screen flex-col">
      <Header locale={validLocale} dict={dict} />
      <main className="flex-1">
        <BusinessDetailTemplate
          locale={validLocale}
          dict={dict}
          service={service}
          categoryTitle={categoryTitle}
        />
      </main>
      <Footer locale={validLocale} dict={dict} />
    </div>
  );
}
