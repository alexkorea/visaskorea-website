import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { CTABanner } from "@/components/layout/related-services";
import { VisaDetailTemplate } from "@/components/templates/visa-detail-template";
import { i18nConfig, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { generatePageMetadata } from "@/lib/seo";
import {
  VISA_SEO,
  getVisaDetail,
  getAllVisaSlugs,
} from "@/lib/content/visas";

interface PageProps {
  params: Promise<{ locale: string; slug: string }>;
}

// Generate static params for all visa pages
export function generateStaticParams() {
  const slugs = getAllVisaSlugs();
  const params: { locale: string; slug: string }[] = [];

  for (const locale of i18nConfig.locales) {
    for (const slug of slugs) {
      params.push({ locale, slug });
    }
  }

  return params;
}

// Generate metadata
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const validLocale = (
    i18nConfig.locales.includes(locale as Locale) ? locale : "ko"
  ) as Locale;

  const seoData = VISA_SEO[slug];
  if (!seoData) {
    return {};
  }

  return generatePageMetadata({
    locale: validLocale,
    pathname: `/visa/${slug}`,
    seo: {
      title: seoData.title[validLocale],
      description: seoData.description[validLocale],
      keywords: seoData.keywords[validLocale],
    },
  });
}

export default async function VisaDetailPage({ params }: PageProps) {
  const { locale, slug } = await params;
  const validLocale = (
    i18nConfig.locales.includes(locale as Locale) ? locale : "ko"
  ) as Locale;
  const dict = getDictionary(validLocale);

  // Get visa data
  const visa = getVisaDetail(slug, validLocale);

  if (!visa) {
    notFound();
  }

  const categoryTitle = dict.common.visa;

  return (
    <div className="flex min-h-screen flex-col">
      <Header locale={validLocale} dict={dict} />

      <main className="flex-1">
        <VisaDetailTemplate
          locale={validLocale}
          dict={dict}
          visa={visa}
          categoryTitle={categoryTitle}
          heroImage="/slides/passport.jpg"
        />

        {/* CTA Section */}
        <section className="py-16">
          <div className="mx-auto max-w-4xl px-4">
            <CTABanner
              locale={validLocale}
              dict={dict}
              title={
                validLocale === "ko"
                  ? "비자 신청, 전문가와 함께하세요"
                  : "Apply with Expert Guidance"
              }
              description={
                validLocale === "ko"
                  ? "복잡한 비자 절차, 경험 많은 전문가가 처음부터 끝까지 함께합니다."
                  : "Our experienced team guides you through the entire visa process."
              }
            />
          </div>
        </section>
      </main>

      <Footer locale={validLocale} dict={dict} />
    </div>
  );
}
