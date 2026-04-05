import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { PageHero } from "@/components/layout/page-hero";
import { i18nConfig, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { generateListMetadata } from "@/lib/seo";
import { Briefcase, Home, Award, Shield, Building2, ArrowRight, Flag, Globe } from "lucide-react";

interface PageProps {
  params: Promise<{ locale: string }>;
}

const VISA_CATEGORY_SEO = {
  title: { ko: "비자 서비스", en: "Visa Services", zh: "签证服务", ja: "ビザサービス" },
  description: {
    ko: "D-8 기업투자비자, E-7 취업비자, F-5 영주권 등 대한민국 모든 비자 유형에 대한 전문 컨설팅을 제공합니다.",
    en: "Professional consulting for all Korean visa types including D-8 investment, E-7 employment, and F-5 permanent residency.",
    zh: "提供D-8企业投资签证、E-7就业签证、F-5永住权等所有韩国签证类型的专业咨询。",
    ja: "D-8企業投資ビザ、E-7就労ビザ、F-5永住権など、すべての韓国ビザタイプの専門コンサルティングを提供します。",
  },
  keywords: {
    ko: ["비자 서비스", "한국 비자", "비자 컨설팅"],
    en: ["visa services", "Korea visa", "visa consulting"],
    zh: ["签证服务", "韩国签证", "签证咨询"],
    ja: ["ビザサービス", "韓国ビザ", "ビザコンサルティング"],
  },
} as const;

const categories: Record<string, { icon: typeof Briefcase; title: Record<string, string>; desc: Record<string, string>; items: { slug: string; label: string }[] }> = {
  work: {
    icon: Briefcase,
    title: { ko: "취업 비자", en: "Work Visas", zh: "就业签证", ja: "就労ビザ" },
    desc: { ko: "한국에서 취업 및 사업 활동을 위한 비자", en: "Visas for employment and business activities in Korea", zh: "在韩国就业和商业活动的签证", ja: "韓国での就労・事業活動のためのビザ" },
    items: [
      { slug: "e-7", label: "E-7 특정활동" },
      { slug: "e-6", label: "E-6 예술흥행" },
      { slug: "d-7", label: "D-7 주재원" },
      { slug: "d-8-executive", label: "D-8 임원파견" },
      { slug: "d-8-individual", label: "D-8 개인투자" },
      { slug: "d-8", label: "D-8 기업투자" },
      { slug: "d-9", label: "D-9 무역경영" },
    ],
  },
  residence: {
    icon: Home,
    title: { ko: "체류 비자", en: "Residence Visas", zh: "居留签证", ja: "在留ビザ" },
    desc: { ko: "한국에서의 체류 및 거주를 위한 비자", en: "Visas for stay and residence in Korea", zh: "在韩国居留的签证", ja: "韓国での滞在・居住のためのビザ" },
    items: [
      { slug: "f-1-digital-nomad", label: "F-1 디지털노마드" },
      { slug: "f-1-visit", label: "F-1 방문동거" },
      { slug: "f-2-points", label: "F-2 점수제" },
      { slug: "f-2-public-interest", label: "F-2 공익사업투자" },
      { slug: "f-2-real-estate", label: "F-2 부동산투자" },
      { slug: "f-4", label: "F-4 거소증" },
      { slug: "f-6", label: "F-6 결혼비자" },
    ],
  },
  permanent: {
    icon: Award,
    title: { ko: "F-5 영주권", en: "F-5 Permanent Residency", zh: "F-5 永住权", ja: "F-5 永住権" },
    desc: { ko: "한국 영주권의 다양한 취득 경로", en: "Various pathways to Korean permanent residency", zh: "韩国永住权的各种取得途径", ja: "韓国永住権の様々な取得経路" },
    items: [
      { slug: "f-5", label: "F-5 영주권 개요" },
      { slug: "f-5-1", label: "F-5-1 일반영주" },
      { slug: "f-5-2", label: "F-5-2 국민 배우자" },
      { slug: "f-5-5", label: "F-5-5 고액투자자" },
      { slug: "f-5-6", label: "F-5-6 재외동포" },
      { slug: "f-5-8", label: "F-5-8 재한화교" },
      { slug: "f-5-9", label: "F-5-9 첨단분야 박사" },
      { slug: "f-5-10", label: "F-5-10 학사·석사" },
      { slug: "f-5-11", label: "F-5-11 특정분야" },
      { slug: "f-5-16", label: "F-5-16 점수제" },
      { slug: "f-5-17", label: "F-5-17 부동산투자" },
      { slug: "f-5-21", label: "F-5-21 공익사업" },
      { slug: "f-5-24", label: "F-5-24 기술창업" },
      { slug: "f-5-25", label: "F-5-25 조건부" },
    ],
  },
  criminal: {
    icon: Shield,
    title: { ko: "사범심사", en: "Criminal Review", zh: "犯罪审查", ja: "犯罪審査" },
    desc: { ko: "입국제한·범죄경력 심사 전문 서비스", en: "Expert services for entry restriction and criminal record review", zh: "入境限制·犯罪记录审查专业服务", ja: "入国制限・犯罪経歴審査専門サービス" },
    items: [
      { slug: "criminal-review", label: "사범심사 안내" },
    ],
  },
  immigration: {
    icon: Globe,
    title: { ko: "이민", en: "Immigration", zh: "移民", ja: "移民" },
    desc: { ko: "투자를 통한 한국 이민 전문 상담", en: "Immigration to Korea through investment", zh: "通过投资移民韩国专业咨询", ja: "投資による韓国移民専門相談" },
    items: [
      { slug: "f-2-public-interest", label: "공익사업투자 이민" },
      { slug: "f-2-real-estate", label: "부동산투자 이민" },
      { slug: "f-5-16", label: "점수제 영주권" },
      { slug: "f-5-25", label: "은퇴이민 (조건부)" },
    ],
  },
  naturalization: {
    icon: Flag,
    title: { ko: "귀화 / 국적회복", en: "Naturalization / Nationality Recovery", zh: "归化 / 国籍恢复", ja: "帰化 / 国籍回復" },
    desc: { ko: "대한민국 국적 취득 및 회복 절차", en: "Korean nationality acquisition and recovery procedures", zh: "韩国国籍取得及恢复手续", ja: "韓国国籍取得・回復手続き" },
    items: [
      { slug: "naturalization", label: "귀화 신청" },
      { slug: "nationality-recovery", label: "국적회복" },
    ],
  },
  business: {
    icon: Building2,
    title: { ko: "법인설립", en: "Company Formation", zh: "法人设立", ja: "法人設立" },
    desc: { ko: "외국인투자기업, 지사, 연락사무소 설립", en: "FDI company, branch office, liaison office setup", zh: "外国投资企业、分公司、联络处设立", ja: "外国人投資企業、支社、連絡事務所設立" },
    items: [
      { slug: "investment", label: "외국인투자기업설립 / 지사설치 / 연락사무소" },
    ],
  },
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const validLocale = (i18nConfig.locales.includes(locale as Locale) ? locale : "ko") as Locale;
  return generateListMetadata(validLocale, {
    type: "visa",
    title: VISA_CATEGORY_SEO.title,
    description: VISA_CATEGORY_SEO.description,
    keywords: VISA_CATEGORY_SEO.keywords,
  });
}

export default async function VisaListPage({ params }: PageProps) {
  const { locale } = await params;
  const validLocale = (i18nConfig.locales.includes(locale as Locale) ? locale : "ko") as Locale;
  const dict = getDictionary(validLocale);

  return (
    <div className="flex min-h-screen flex-col">
      <Header locale={validLocale} dict={dict} />
      <main className="flex-1">
        <PageHero
          title={VISA_CATEGORY_SEO.title[validLocale]}
          subtitle={VISA_CATEGORY_SEO.description[validLocale]}
          image="/slides/passport.jpg"
        />

        <section className="py-12">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {Object.entries(categories).map(([key, cat]) => {
                const Icon = cat.icon;
                const basePath = key === "business" ? "/services" : "/visa";
                return (
                  <div key={key} className="rounded-2xl border border-blue-200 bg-white p-6 hover:border-blue-400 hover:shadow-lg transition-shadow">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                        <Icon className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <h2 className="text-lg font-bold text-slate-800">{cat.title[validLocale] || cat.title.ko}</h2>
                        <p className="text-xs text-slate-500">{cat.desc[validLocale] || cat.desc.ko}</p>
                      </div>
                    </div>
                    <ul className="space-y-1">
                      {cat.items.map((item) => (
                        <li key={item.slug}>
                          <Link
                            href={`/${validLocale}${basePath}/${item.slug}`}
                            className="flex items-center justify-between py-2 px-3 rounded-lg text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-700 transition-colors group"
                          >
                            <span>{item.label}</span>
                            <ArrowRight className="h-3.5 w-3.5 text-slate-400 group-hover:text-blue-600 transition-colors" />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer locale={validLocale} dict={dict} />
    </div>
  );
}
