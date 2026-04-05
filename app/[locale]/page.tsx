import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { CTABanner } from "@/components/layout/related-services";
import { HeroSlider } from "@/components/layout/hero-slider";
import { Messenger } from "@/components/layout/messenger";
import { Team } from "@/components/layout/team";
import { i18nConfig, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { generatePageMetadata, SITE_CONFIG, DEFAULT_SEO } from "@/lib/seo";
import {
  ArrowRight,
  Building2,
  FileCheck,
  Globe,
  Shield,
  Users,
  Briefcase,
} from "lucide-react";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const validLocale = (
    i18nConfig.locales.includes(locale as Locale) ? locale : "ko"
  ) as Locale;

  return generatePageMetadata({
    locale: validLocale,
    pathname: "/",
    seo: {
      title: DEFAULT_SEO[validLocale].title,
      description: DEFAULT_SEO[validLocale].description,
      keywords: DEFAULT_SEO[validLocale].keywords,
    },
  });
}

export default async function HomePage({ params }: PageProps) {
  const { locale } = await params;
  const validLocale = (
    i18nConfig.locales.includes(locale as Locale) ? locale : "ko"
  ) as Locale;
  const dict = getDictionary(validLocale);

  // Hero content by locale
  const heroContent = {
    ko: {
      title: "전문 비자 및 이민 컨설팅",
      subtitle:
        "D-8 투자비자부터 영주권까지, 20년 경력의 전문가가 함께합니다.",
      cta: "무료 상담 신청",
    },
    en: {
      title: "Professional Visa & Immigration",
      subtitle:
        "From D-8 investment visa to permanent residency, 20 years of expertise.",
      cta: "Free Consultation",
    },
    zh: {
      title: "专业签证及移民咨询",
      subtitle: "从D-8投资签证到永住权，20年专业经验为您服务。",
      cta: "免费咨询",
    },
    ja: {
      title: "専門ビザ・移民コンサルティング",
      subtitle: "D-8投資ビザから永住権まで、20年の経験がサポートします。",
      cta: "無料相談",
    },
  };

  // Services - 3 categories
  const services = [
    {
      icon: <FileCheck className="h-6 w-6" />,
      title: locale === "ko" ? "비자 컨설팅" : locale === "zh" ? "签证咨询" : locale === "ja" ? "ビザコンサルティング" : "Visa Consulting",
      description:
        locale === "ko"
          ? "D-8 기업투자, E-7 취업, F-5 영주권, F-2 거주, F-4 재외동포 등 모든 비자 유형에 대한 전문 컨설팅"
          : locale === "zh" ? "D-8企业投资、E-7就业、F-5永住权等所有签证类型的专业咨询" : locale === "ja" ? "D-8企業投資、E-7就労、F-5永住権など全ビザタイプの専門コンサルティング" : "Expert consulting for all visa types: D-8 investment, E-7 employment, F-5 PR, F-2 residence, F-4 overseas Korean",
      href: "/visa",
    },
    {
      icon: <Building2 className="h-6 w-6" />,
      title: locale === "ko" ? "투자 및 법인설립" : locale === "zh" ? "投资及法人设立" : locale === "ja" ? "投資・法人設立" : "Investment & Company Setup",
      description:
        locale === "ko"
          ? "외국인투자기업 설립, 지사 설치, 연락사무소 설치 원스톱 서비스"
          : locale === "zh" ? "外国投资企业设立、分公司设置、联络处设置一站式服务" : locale === "ja" ? "外国人投資企業設立、支社設置、連絡事務所設置ワンストップサービス" : "One-stop service for FDI company, branch office, and liaison office setup",
      href: "/services/foreign-invested-company",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: locale === "ko" ? "사범심사" : locale === "zh" ? "犯罪审查" : locale === "ja" ? "犯罪審査" : "Criminal Review",
      description:
        locale === "ko"
          ? "범죄경력, 입국금지, 입국제한 등 복잡한 사안에 대한 전문 심사 대응"
          : locale === "zh" ? "犯罪记录、入境禁止等复杂事案的专业审查应对" : locale === "ja" ? "犯罪経歴、入国禁止等複雑な事案の専門審査対応" : "Expert handling of criminal records, entry bans, and complex immigration cases",
      href: "/visa/criminal-review",
    },
  ];

  // Featured visas for internal linking
  const featuredVisas = [
    {
      slug: "d-8",
      title: locale === "ko" ? "D-8 기업투자비자" : "D-8 Investment Visa",
      badge: locale === "ko" ? "인기" : "Popular",
    },
    {
      slug: "e-7",
      title: locale === "ko" ? "E-7 특정활동비자" : "E-7 Work Visa",
      badge: locale === "ko" ? "취업" : "Employment",
    },
    {
      slug: "f-5",
      title: locale === "ko" ? "F-5 영주권" : "F-5 Permanent Residency",
      badge: locale === "ko" ? "영주" : "PR",
    },
    {
      slug: "f-2-7",
      title: locale === "ko" ? "F-2-7 점수제비자" : "F-2-7 Points Visa",
      badge: locale === "ko" ? "우수인재" : "Talent",
    },
  ];

  // Stats
  const stats = [
    { value: "8+", label: locale === "ko" ? "년 경력" : locale === "zh" ? "年经验" : locale === "ja" ? "年の経験" : "Years Experience" },
    { value: "1,000+", label: locale === "ko" ? "성공 사례" : locale === "zh" ? "成功案例" : locale === "ja" ? "成功事例" : "Successful Cases" },
    { value: "98%", label: locale === "ko" ? "성공률" : locale === "zh" ? "成功率" : locale === "ja" ? "成功率" : "Success Rate" },
    { value: "4", label: locale === "ko" ? "개 언어 지원" : locale === "zh" ? "种语言支持" : locale === "ja" ? "言語対応" : "Languages Supported" },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <Header locale={validLocale} dict={dict} />

      <main className="flex-1">
        {/* Hero Slider */}
        <HeroSlider locale={validLocale} />

        {/* Messenger QR */}
        <Messenger locale={validLocale} />

        {/* Team */}
        <Team locale={validLocale} />

        {/* Stats Section */}
        <section className="border-y bg-slate-900 py-12">
          <div className="mx-auto max-w-7xl px-4">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-blue-400 md:text-4xl">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-sm text-slate-300">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4">
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-slate-800">
                {locale === "ko" ? "전문 서비스" : "Our Services"}
              </h2>
              <p className="mt-4 text-slate-600">
                {locale === "ko"
                  ? "비자 신청부터 법인 설립까지, 한국 진출의 모든 과정을 지원합니다."
                  : "From visa applications to company setup, we support your entire journey to Korea."}
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {services.map((service, index) => (
                <Link
                  key={index}
                  href={`/${validLocale}${service.href}`}
                  className="group"
                >
                  <Card className="h-full border-blue-200 transition-all hover:border-blue-400 hover:shadow-lg hover:shadow-blue-100/50">
                    <CardHeader>
                      <div className="mb-2 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                        {service.icon}
                      </div>
                      <CardTitle className="text-slate-800 group-hover:text-blue-600">
                        {service.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-slate-600">
                        {service.description}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Visas - Internal Linking */}
        <section className="bg-blue-50/50 py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4">
            <div className="mb-12 flex items-center justify-between">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-slate-800">
                  {locale === "ko" ? "주요 비자 안내" : "Featured Visas"}
                </h2>
                <p className="mt-2 text-slate-600">
                  {locale === "ko"
                    ? "가장 많이 문의하시는 비자 유형입니다."
                    : "Most frequently inquired visa types."}
                </p>
              </div>
              <Button variant="outline" asChild className="hidden md:flex border-blue-200 text-blue-600 hover:bg-blue-50 hover:text-blue-700">
                <Link href={`/${validLocale}/visa`}>
                  {dict.common.viewAll}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {featuredVisas.map((visa) => (
                <Link
                  key={visa.slug}
                  href={`/${validLocale}/visa/${visa.slug}`}
                  className="group"
                >
                  <Card className="border-blue-200 transition-all hover:border-blue-400 hover:shadow-lg hover:shadow-blue-100/50">
                    <CardContent className="flex items-center justify-between p-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50">
                          <Briefcase className="h-5 w-5 text-blue-600" />
                        </div>
                        <div>
                          <p className="font-medium text-slate-800 group-hover:text-blue-600">
                            {visa.title}
                          </p>
                          <span className="inline-block text-xs bg-blue-50 text-blue-700 border border-blue-200 rounded-full px-2 py-0.5">
                            {visa.badge}
                          </span>
                        </div>
                      </div>
                      <ArrowRight className="h-4 w-4 text-slate-500 transition-transform group-hover:translate-x-1 group-hover:text-blue-600" />
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
            <div className="mt-6 text-center md:hidden">
              <Button variant="outline" asChild>
                <Link href={`/${validLocale}/visa`}>
                  {dict.common.viewAll}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-slate-800">
                  {locale === "ko"
                    ? "왜 비전행정사사무소인가요?"
                    : "Why Choose VISION?"}
                </h2>
                <p className="mt-4 text-slate-600">
                  {locale === "ko"
                    ? "8년 이상의 경험과 전문성으로 고객의 성공적인 한국 정착을 돕습니다."
                    : "With over 8 years of experience, we help our clients successfully settle in Korea."}
                </p>
                <ul className="mt-8 space-y-4">
                  {[
                    {
                      icon: <Users className="h-5 w-5" />,
                      title:
                        locale === "ko" ? "전문 컨설턴트 팀" : "Expert Team",
                      desc:
                        locale === "ko"
                          ? "출입국관리법 전문 변호사 및 행정사 보유"
                          : "Immigration lawyers and administrative scriveners",
                    },
                    {
                      icon: <Globe className="h-5 w-5" />,
                      title:
                        locale === "ko"
                          ? "다국어 서비스"
                          : "Multilingual Service",
                      desc:
                        locale === "ko"
                          ? "한국어, 영어, 중국어, 일본어 지원"
                          : "Korean, English, Chinese, Japanese support",
                    },
                    {
                      icon: <Shield className="h-5 w-5" />,
                      title:
                        locale === "ko"
                          ? "높은 성공률"
                          : "High Success Rate",
                      desc:
                        locale === "ko"
                          ? "98% 이상의 비자 승인률 달성"
                          : "Over 98% visa approval rate",
                    },
                  ].map((item, index) => (
                    <li key={index} className="flex gap-4">
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-800">{item.title}</h3>
                        <p className="text-sm text-slate-600">
                          {item.desc}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border border-blue-200 bg-blue-50/50 p-8">
                <blockquote className="text-lg italic text-slate-600">
                  {locale === "ko"
                    ? '"비전행정사사무소 덕분에 복잡한 D-8 비자 과정을 순조롭게 마칠 수 있었습니다. 전문적인 상담과 꼼꼼한 서류 준비에 감사드립니다."'
                    : '"Thanks to 비전행정사사무소, I was able to smoothly complete the complex D-8 visa process. Thank you for the professional consultation and thorough document preparation."'}
                </blockquote>
                <div className="mt-4">
                  <p className="font-semibold text-slate-800">
                    {locale === "ko" ? "김민수" : "James Kim"}
                  </p>
                  <p className="text-sm text-slate-500">
                    {locale === "ko"
                      ? "스타트업 창업자, 미국"
                      : "Startup Founder, USA"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-4xl px-4">
            <CTABanner
              locale={validLocale}
              dict={dict}
              title={
                locale === "ko"
                  ? "전문 상담이 필요하신가요?"
                  : "Need Expert Consultation?"
              }
              description={
                locale === "ko"
                  ? "비자, 법인 설립, 이민에 관한 모든 궁금증을 해결해 드립니다. 무료 상담을 신청하세요."
                  : "We answer all your questions about visas, company setup, and immigration. Request a free consultation."
              }
            />
          </div>
        </section>
      </main>

      <Footer locale={validLocale} dict={dict} />
    </div>
  );
}
