import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { PageHero } from "@/components/layout/page-hero";
import { i18nConfig, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { generatePageMetadata } from "@/lib/seo";
import {
  ArrowRight,
  Award,
  Globe,
  Shield,
  Users,
  Building2,
  CheckCircle,
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
    ko: "5000Meter는 20년 이상의 경험을 바탕으로 비자, 이민, 법인 설립 전문 컨설팅을 제공합니다.",
    en: "5000Meter provides expert visa, immigration, and company setup consulting with over 20 years of experience.",
    zh: "5000Meter凭借20多年的经验，提供签证、移民和法人设立专业咨询服务。",
    ja: "5000Meterは20年以上の経験を基に、ビザ、移民、法人設立の専門コンサルティングを提供します。",
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

  const teamMembers = [
    {
      name: isKo ? "정혜정 행정사" : "Hyejeong Jung",
      role: isKo ? "대표 행정사" : "Chief Immigration Consultant",
      image: "/team/junghj.jpg",
      specialties: isKo
        ? ["투자비자", "법인설립", "영주권"]
        : ["Investment Visa", "Company Setup", "Permanent Residency"],
    },
    {
      name: isKo ? "김예지" : "Yeji Kim",
      role: isKo ? "비자 전문 상담사" : "Visa Consultant",
      image: "/team/kimyj.jpg",
      specialties: isKo
        ? ["취업비자", "체류연장", "자격변경"]
        : ["Employment Visa", "Extension", "Status Change"],
    },
    {
      name: isKo ? "이수진" : "Sujin Lee",
      role: isKo ? "법인설립 전문" : "Corporate Setup Specialist",
      image: "/team/leesj.jpg",
      specialties: isKo
        ? ["법인설립", "사업자등록", "외국인투자"]
        : ["Company Setup", "Business Registration", "Foreign Investment"],
    },
  ];

  const strengths = [
    {
      icon: <Award className="h-6 w-6" />,
      title: isKo ? "20년+ 전문 경력" : "20+ Years of Expertise",
      description: isKo
        ? "출입국관리법 전문 행정사로서 수천 건의 성공 사례를 보유하고 있습니다."
        : "As specialized immigration administrative scriveners, we have thousands of successful cases.",
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: isKo ? "4개 국어 지원" : "4 Languages Supported",
      description: isKo
        ? "한국어, 영어, 중국어, 일본어로 상담이 가능합니다."
        : "Consultation available in Korean, English, Chinese, and Japanese.",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: isKo ? "98% 성공률" : "98% Success Rate",
      description: isKo
        ? "철저한 사전 분석과 맞춤형 전략으로 높은 승인률을 달성합니다."
        : "We achieve high approval rates through thorough analysis and tailored strategies.",
    },
    {
      icon: <Building2 className="h-6 w-6" />,
      title: isKo ? "원스톱 서비스" : "One-Stop Service",
      description: isKo
        ? "비자 신청부터 법인 설립, 사후 관리까지 모든 과정을 지원합니다."
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

        {/* Team */}
        <section className="bg-muted/30 py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4">
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight">
                {isKo ? "전문가 팀" : "Our Expert Team"}
              </h2>
              <p className="mt-4 text-muted-foreground">
                {isKo
                  ? "풍부한 경험과 전문성을 갖춘 팀이 함께합니다."
                  : "A team with extensive experience and expertise."}
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              {teamMembers.map((member, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className="aspect-[3/4] relative bg-muted">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold">{member.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {member.role}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {member.specialties.map((s) => (
                        <span
                          key={s}
                          className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary"
                        >
                          <CheckCircle className="h-3 w-3" />
                          {s}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-4xl px-4 text-center">
            <h2 className="text-3xl font-bold tracking-tight">
              {isKo ? "전문 상담을 시작하세요" : "Start Your Consultation"}
            </h2>
            <p className="mt-4 text-muted-foreground">
              {isKo
                ? "비자, 법인 설립, 이민에 관한 모든 궁금증을 해결해 드립니다."
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
