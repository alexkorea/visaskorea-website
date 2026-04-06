import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { PageHero } from "@/components/layout/page-hero";
import { i18nConfig, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { generatePageMetadata } from "@/lib/seo";
import { qaItems, getQAItemsByCategory } from "@/lib/content/qa";
import { ArrowRight, MessageCircle } from "lucide-react";

interface PageProps {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ category?: string }>;
}

const QA_SEO = {
  title: {
    ko: "자주 묻는 질문",
    en: "Frequently Asked Questions",
    zh: "常见问题",
    ja: "よくある質問",
  },
  description: {
    ko: "비자, 이민, 법인 설립에 관한 자주 묻는 질문과 답변을 확인하세요.",
    en: "Check frequently asked questions and answers about visas, immigration, and company setup.",
    zh: "查看关于签证、移民和法人设立的常见问题和答案。",
    ja: "ビザ、移民、法人設立に関するよくある質問と回答をご確認ください。",
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
    pathname: "/qa",
    seo: {
      title: QA_SEO.title[validLocale],
      description: QA_SEO.description[validLocale],
    },
  });
}

const categoryLabels: Record<string, Record<Locale, string>> = {
  corporate: { ko: "기업", en: "Corporate", zh: "公司", ja: "企業" },
  immigration: { ko: "이민", en: "Immigration", zh: "移民", ja: "移民" },
  ip: { ko: "지적재산권", en: "IP", zh: "知识产权", ja: "知的財産権" },
  general: { ko: "일반", en: "General", zh: "一般", ja: "一般" },
};

export default async function QAListPage({
  params,
  searchParams,
}: PageProps) {
  const { locale } = await params;
  const { category } = await searchParams;
  const validLocale = (
    i18nConfig.locales.includes(locale as Locale) ? locale : "ko"
  ) as Locale;
  const dict = getDictionary(validLocale);

  const items = category ? getQAItemsByCategory(category) : qaItems;

  return (
    <div className="flex min-h-screen flex-col">
      <Header locale={validLocale} dict={dict} />

      <main className="flex-1">
        {/* Hero */}
        <PageHero
          title={QA_SEO.title[validLocale]}
          subtitle={QA_SEO.description[validLocale]}
          image="/slides/documents.jpg"
        />

        {/* Category Filter */}
        <section className="border-b py-4">
          <div className="mx-auto max-w-4xl px-4">
            <div className="flex flex-wrap gap-2">
              <Link href={`/${validLocale}/qa`}>
                <Badge
                  variant={!category ? "default" : "outline"}
                  className="cursor-pointer"
                >
                  {{ ko: "전체", en: "All", zh: "全部", ja: "全て" }[validLocale]}
                </Badge>
              </Link>
              {Object.entries(categoryLabels).map(([key, labels]) => (
                <Link key={key} href={`/${validLocale}/qa?category=${key}`}>
                  <Badge
                    variant={category === key ? "default" : "outline"}
                    className="cursor-pointer"
                  >
                    {labels[validLocale]}
                  </Badge>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Questions */}
        <section className="py-12 md:py-16">
          <div className="mx-auto max-w-4xl px-4">
            {items.length > 0 ? (
              <div className="space-y-4">
                {items.map((item) => (
                  <Link
                    key={item.id}
                    href={`/${validLocale}/qa/${item.slug}`}
                    className="group block"
                  >
                    <Card className="transition-all hover:border-primary/50 hover:shadow-sm">
                      <CardContent className="flex items-center justify-between p-5">
                        <div className="flex items-start gap-3">
                          <div className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                            <MessageCircle className="h-4 w-4 text-primary" />
                          </div>
                          <div>
                            <Badge variant="secondary" className="mb-2">
                              {categoryLabels[item.category]?.[validLocale] ??
                                item.category}
                            </Badge>
                            <h3 className="font-medium group-hover:text-primary">
                              {item.question[validLocale]}
                            </h3>
                          </div>
                        </div>
                        <ArrowRight className="h-4 w-4 flex-shrink-0 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary" />
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="py-16 text-center text-muted-foreground">
                {{ ko: "질문이 없습니다.", en: "No questions found.", zh: "暂无问题。", ja: "質問がありません。" }[validLocale]}
              </div>
            )}

            {/* CTA */}
            <Card className="mt-12 border-0 bg-muted/30 shadow-none">
              <CardContent className="flex flex-col items-center p-8 text-center sm:flex-row sm:text-left">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold">
                    {{ ko: "궁금한 점이 있으신가요?", en: "Have a question?", zh: "有疑问吗？", ja: "ご質問がありますか？" }[validLocale]}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {{ ko: "찾으시는 답변이 없다면 직접 문의해 주세요.", en: "If you can't find your answer, contact us directly.", zh: "如果找不到答案，请直接联系我们。", ja: "お探しの回答が見つからない場合は、直接お問い合わせください。" }[validLocale]}
                  </p>
                </div>
                <Button asChild className="mt-4 sm:mt-0">
                  <Link href={`/${validLocale}/contact`}>
                    {dict.common.contact}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer locale={validLocale} dict={dict} />
    </div>
  );
}
