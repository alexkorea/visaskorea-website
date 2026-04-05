import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { PageHero } from "@/components/layout/page-hero";
import { Team } from "@/components/layout/team";
import { i18nConfig, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { generatePageMetadata } from "@/lib/seo";
import {
  ArrowRight,
  Award,
  Globe,
  Shield,
  Building2,
} from "lucide-react";

interface PageProps {
  params: Promise<{ locale: string }>;
}

const ABOUT_SEO = {
  title: {
    ko: "회사 소개",
    en: "About Us",
    zh: "关于我们",
    ja: "会社概要",
  },
  description: {
    ko: "비전행정사사무소는 8년 이상의 경험을 바탕으로 비자, 이민, 법인 설립 전문 컨설팅을 제공합니다.",
    en: "VISION Administrative Office provides expert visa, immigration, and company setup consulting with over 8 years of experience.",
    zh: "VISION行政士事务所凭借8年以上的经验，提供签证、移民和法人设立专业咨询服务。",
    ja: "VISION行政士事務所は8年以上の経験を基に、ビザ、移民、法人設立の専門コンサルティングを提供します。",
  },
} as const;

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const validLocale = (
    i18nConfig.locales.includes(locale as Locale) ? locale : "ko"
  ) as Locale;

  return generatePageMetadata({
    locale: validLocale,
    pathname: "/about",
    seo: {
      title: ABOUT_SEO.title[validLocale],
      description: ABOUT_SEO.description[validLocale],
    },
  });
}

export default async function AboutPage({ params }: PageProps) {
  const { locale } = await params;
  const validLocale = (
    i18nConfig.locales.includes(locale as Locale) ? locale : "ko"
  ) as Locale;
  const dict = getDictionary(validLocale);

  const isKo = validLocale === "ko";

  const strengths = [
    {
      icon: <Award className="h-6 w-6" />,
      title: isKo ? "8년+ 전문 경력" : validLocale === "zh" ? "8年以上专业经验" : validLocale === "ja" ? "8年以上の専門経歴" : "8+ Years of Expertise",
      description: isKo
        ? "출입국관리법 전문 행정사로서 수천 건의 성공 사례를 보유하고 있습니다."
        : validLocale === "zh"
          ? "作为出入境管理法专业行政士，拥有数千个成功案例。"
          : validLocale === "ja"
            ? "出入国管理法専門の行政士として数千件の成功事例を保有しています。"
            : "As specialized immigration administrative scriveners, we have thousands of successful cases.",
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: isKo ? "4개 국어 지원" : validLocale === "zh" ? "4种语言服务" : validLocale === "ja" ? "4か国語対応" : "4 Languages Supported",
      description: isKo
        ? "한국어, 영어, 중국어, 일본어로 상담이 가능합니다."
        : validLocale === "zh"
          ? "可用韩语、英语、中文、日语进行咨询。"
          : validLocale === "ja"
            ? "韓国語、英語、中国語、日本語でご相談いただけます。"
            : "Consultation available in Korean, English, Chinese, and Japanese.",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: isKo ? "98% 성공률" : validLocale === "zh" ? "98%成功率" : validLocale === "ja" ? "98%成功率" : "98% Success Rate",
      description: isKo
        ? "철저한 사전 분석과 맞춤형 전략으로 높은 승인률을 달성합니다."
        : validLocale === "zh"
          ? "通过彻底的事前分析和定制策略，实现高通过率。"
          : validLocale === "ja"
            ? "徹底した事前分析とカスタマイズ戦略で高い承認率を達成します。"
            : "We achieve high approval rates through thorough analysis and tailored strategies.",
    },
    {
      icon: <Building2 className="h-6 w-6" />,
      title: isKo ? "원스톱 서비스" : validLocale === "zh" ? "一站式服务" : validLocale === "ja" ? "ワンストップサービス" : "One-Stop Service",
      description: isKo
        ? "비자 신청부터 법인 설립, 사후 관리까지 모든 과정을 지원합니다."
        : validLocale === "zh"
          ? "从签证申请到法人设立、后续管理，支持全过程。"
          : validLocale === "ja"
            ? "ビザ申請から法人設立、アフターケアまで全過程をサポートします。"
            : "We support the entire process from visa application to company setup and aftercare.",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <Header locale={validLocale} dict={dict} />

      <main className="flex-1">
        {/* Hero */}
        <PageHero
          title={ABOUT_SEO.title[validLocale]}
          subtitle={ABOUT_SEO.description[validLocale]}
          image="/slides/consultation.jpg"
        />

        {/* Strengths */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {strengths.map((strength, index) => (
                <div key={index} className="text-center">
                  <div className="mx-auto mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    {strength.icon}
                  </div>
                  <h3 className="text-lg font-semibold">{strength.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {strength.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team - All 9 members (6 admins + 3 staff) */}
        <Team locale={validLocale} />

        {/* CTA */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-4xl px-4 text-center">
            <h2 className="text-3xl font-bold tracking-tight">
              {isKo ? "전문 상담을 시작하세요" : validLocale === "zh" ? "开始专业咨询" : validLocale === "ja" ? "専門相談を始めましょう" : "Start Your Consultation"}
            </h2>
            <p className="mt-4 text-muted-foreground">
              {isKo
                ? "비자, 법인 설립, 이민에 관한 모든 궁금증을 해결해 드립니다."
                : validLocale === "zh"
                  ? "解答您关于签证、法人设立、移民的所有疑问。"
                  : validLocale === "ja"
                    ? "ビザ、法人設立、移民に関するすべてのご質問にお答えします。"
                    : "We answer all your questions about visas, company setup, and immigration."}
            </p>
            <div className="mt-8">
              <Button size="lg" asChild>
                <Link href={`/${validLocale}/contact`}>
                  {dict.common.freeConsultation}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer locale={validLocale} dict={dict} />
    </div>
  );
}
