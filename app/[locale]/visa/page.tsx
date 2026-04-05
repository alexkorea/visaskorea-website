import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { CategoryListTemplate } from "@/components/templates/category-list-template";
import { i18nConfig, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { generateListMetadata } from "@/lib/seo";
import { getVisaListItems } from "@/lib/content/visas";
import { FileCheck } from "lucide-react";

interface PageProps {
  params: Promise<{ locale: string }>;
}

const VISA_CATEGORY_SEO = {
  title: {
    ko: "비자 서비스",
    en: "Visa Services",
    zh: "签证服务",
    ja: "ビザサービス",
  },
  description: {
    ko: "D-8 기업투자비자, E-7 취업비자, F-5 영주권 등 대한민국 모든 비자 유형에 대한 전문 컨설팅을 제공합니다.",
    en: "Professional consulting for all Korean visa types including D-8 investment, E-7 employment, and F-5 permanent residency.",
    zh: "提供D-8企业投资签证、E-7就业签证、F-5永住权等所有韩国签证类型的专业咨询。",
    ja: "D-8企業投資ビザ、E-7就労ビザ、F-5永住権など、すべての韓国ビザタイプの専門コンサルティングを提供します。",
  },
  keywords: {
    ko: ["비자 서비스", "한국 비자", "비자 컨설팅", "체류자격"],
    en: ["visa services", "Korea visa", "visa consulting", "residence status"],
    zh: ["签证服务", "韩国签证", "签证咨询", "居留资格"],
    ja: ["ビザサービス", "韓国ビザ", "ビザコンサルティング", "在留資格"],
  },
} as const;

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const validLocale = (
    i18nConfig.locales.includes(locale as Locale) ? locale : "ko"
  ) as Locale;

  return generateListMetadata(validLocale, {
    type: "visa",
    title: VISA_CATEGORY_SEO.title,
    description: VISA_CATEGORY_SEO.description,
    keywords: VISA_CATEGORY_SEO.keywords,
  });
}

export default async function VisaListPage({ params }: PageProps) {
  const { locale } = await params;
  const validLocale = (
    i18nConfig.locales.includes(locale as Locale) ? locale : "ko"
  ) as Locale;
  const dict = getDictionary(validLocale);

  // Get visa items with icons
  const items = getVisaListItems(validLocale).map((item) => ({
    ...item,
    icon: <FileCheck className="h-5 w-5 text-primary" />,
  }));

  return (
    <div className="flex min-h-screen flex-col">
      <Header locale={validLocale} dict={dict} />

      <main className="flex-1">
        <CategoryListTemplate
          locale={validLocale}
          dict={dict}
          title={VISA_CATEGORY_SEO.title[validLocale]}
          description={VISA_CATEGORY_SEO.description[validLocale]}
          items={items}
          basePath="/visa"
        />
      </main>

      <Footer locale={validLocale} dict={dict} />
    </div>
  );
}
