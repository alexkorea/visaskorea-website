import type { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { i18nConfig, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { generatePageMetadata } from "@/lib/seo";
import {
  ArrowRight,
  Briefcase,
  Users,
  Home,
  Shield,
} from "lucide-react";

interface PageProps {
  params: Promise<{ locale: string }>;
}

const SERVICES_SEO = {
  title: {
    ko: "서비스 안내",
    en: "Our Services",
    zh: "服务介绍",
    ja: "サービス案内",
  },
  description: {
    ko: "투자이민, 취업이민, 영주권/시민권, 범죄기록 심사 등 전문 이민법 서비스를 제공합니다.",
    en: "We provide professional immigration services including investment immigration, employment immigration, permanent residence, and criminal record review.",
    zh: "提供投资移民、就业移民、永住权/公民权、犯罪记录审查等专业移民法服务。",
    ja: "投資移民、就労移民、永住権/市民権、犯罪歴審査など専門的な移民法サービスを提供します。",
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
    pathname: "/services",
    seo: {
      title: SERVICES_SEO.title[validLocale],
      description: SERVICES_SEO.description[validLocale],
    },
  });
}

export default async function ServicesPage({ params }: PageProps) {
  const { locale } = await params;
  const validLocale = (
    i18nConfig.locales.includes(locale as Locale) ? locale : "ko"
  ) as Locale;
  const dict = getDictionary(validLocale);

  const isKo = validLocale === "ko";

  const categories = [
    {
      id: "investment",
      title: isKo ? "투자이민" : "Investment Immigration",
      description: isKo
        ? "D-8 투자비자, 외국인투자법인 설립, 투자 컨설팅 등 투자를 통한 이민 서비스"
        : "Immigration services through investment including D-8 visa, foreign investment company setup, and consulting",
      href: `/${validLocale}/services/investment`,
      icon: Briefcase,
      featured: isKo
        ? ["D-8 투자비자", "법인 설립", "투자 컨설팅"]
        : ["D-8 Investment Visa", "Company Setup", "Investment Consulting"],
      color: "text-emerald-600",
      bgColor: "bg-emerald-50",
    },
    {
      id: "employment",
      title: isKo ? "취업이민" : "Employment Immigration",
      description: isKo
        ? "E-7 전문직비자, 취업비자 변경, 노동허가 등 취업 기반 이민 서비스"
        : "Employment-based immigration including E-7 professional visa, work visa changes, and work permits",
      href: `/${validLocale}/services/employment`,
      icon: Users,
      featured: isKo
        ? ["E-7 전문직비자", "취업비자", "자격변경"]
        : ["E-7 Professional Visa", "Work Visa", "Status Change"],
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      id: "residence",
      title: isKo ? "영주권/시민권" : "Permanent Residence",
      description: isKo
        ? "F-5 영주권, F-2 거주비자, 가족초청, 귀화 등 장기체류 서비스"
        : "Long-term stay services including F-5 permanent residence, F-2 residence visa, family invitation, and naturalization",
      href: `/${validLocale}/services/residence`,
      icon: Home,
      featured: isKo
        ? ["F-5 영주권", "F-2 거주비자", "귀화"]
        : ["F-5 Permanent Residence", "F-2 Residence Visa", "Naturalization"],
      color: "text-amber-600",
      bgColor: "bg-amber-50",
    },
    {
      id: "criminal",
      title: isKo ? "범죄기록 심사" : "Criminal Record Review",
      description: isKo
        ? "입국금지 해제, 범죄기록 관련 비자 문제, 입국심사 대응 서비스"
        : "Entry ban removal, criminal record visa issues, and immigration review response services",
      href: `/${validLocale}/services/criminal`,
      icon: Shield,
      featured: isKo
        ? ["입국금지 해제", "범죄기록 심사", "입국심사 대응"]
        : ["Entry Ban Removal", "Criminal Review", "Immigration Response"],
      color: "text-rose-600",
      bgColor: "bg-rose-50",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <Header locale={validLocale} dict={dict} />

      <main className="flex-1">
        {/* Hero */}
        <section className="border-b bg-muted/30 py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-4">
            <div className="mx-auto max-w-3xl text-center">
              <Badge variant="secondary" className="mb-4">
                {SERVICES_SEO.title[validLocale]}
              </Badge>
              <h1 className="text-balance text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
                {isKo ? "전문 이민법 서비스" : "Professional Immigration Services"}
              </h1>
              <p className="mt-4 text-lg text-muted-foreground">
                {SERVICES_SEO.description[validLocale]}
              </p>
            </div>
          </div>
        </section>

        {/* Category Cards */}
        <section className="py-12 md:py-16">
          <div className="mx-auto max-w-5xl px-4">
            <div className="grid gap-6 md:grid-cols-2">
              {categories.map((category) => {
                const Icon = category.icon;

                return (
                  <Link
                    key={category.id}
                    href={category.href}
                    className="group block"
                  >
                    <Card className="h-full transition-all hover:border-primary/30 hover:shadow-lg">
                      <CardContent className="p-6 md:p-8">
                        <div
                          className={`inline-flex size-12 items-center justify-center rounded-xl ${category.bgColor} ${category.color}`}
                        >
                          <Icon className="size-6" />
                        </div>

                        <h2 className="mt-4 text-xl font-bold group-hover:text-primary md:text-2xl">
                          {category.title}
                        </h2>

                        <p className="mt-2 text-muted-foreground">
                          {category.description}
                        </p>

                        <div className="mt-4 flex flex-wrap gap-2">
                          {category.featured.map((item) => (
                            <Badge
                              key={item}
                              variant="outline"
                              className="font-normal"
                            >
                              {item}
                            </Badge>
                          ))}
                        </div>

                        <div className="mt-6 flex items-center font-medium text-primary">
                          <span>{dict.common.learnMore}</span>
                          <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t bg-muted/30 py-12 md:py-16">
          <div className="mx-auto max-w-2xl px-4 text-center">
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
              {isKo
                ? "어떤 서비스가 필요하신가요?"
                : "Which service do you need?"}
            </h2>
            <p className="mt-4 text-muted-foreground">
              {isKo
                ? "귀하의 상황에 맞는 최적의 전략을 제안해 드립니다."
                : "We will suggest the optimal strategy for your situation."}
            </p>
            <Link
              href={`/${validLocale}/contact`}
              className="mt-6 inline-flex items-center rounded-lg bg-primary px-6 py-3 font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              {dict.common.freeConsultation}
              <ArrowRight className="ml-2 size-4" />
            </Link>
          </div>
        </section>
      </main>

      <Footer locale={validLocale} dict={dict} />
    </div>
  );
}
