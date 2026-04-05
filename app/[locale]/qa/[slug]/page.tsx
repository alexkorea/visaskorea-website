import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { PageHero } from "@/components/layout/page-hero";
import { i18nConfig, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { generateQnaMetadata } from "@/lib/seo";
import {
  qaItems,
  getQAItemBySlug,
  getRelatedQAItems,
} from "@/lib/content/qa";
import { ArrowLeft, ArrowRight, MessageCircle } from "lucide-react";

interface PageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export function generateStaticParams() {
  const params: { locale: string; slug: string }[] = [];
  for (const locale of i18nConfig.locales) {
    for (const item of qaItems) {
      params.push({ locale, slug: item.slug });
    }
  }
  return params;
}

const categoryLabels: Record<string, Record<Locale, string>> = {
  corporate: { ko: "기업", en: "Corporate", zh: "公司", ja: "企業" },
  immigration: { ko: "이민", en: "Immigration", zh: "移民", ja: "移民" },
  ip: { ko: "지적재산권", en: "IP", zh: "知识产权", ja: "知的財産権" },
  general: { ko: "일반", en: "General", zh: "一般", ja: "一般" },
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const validLocale = (
    i18nConfig.locales.includes(locale as Locale) ? locale : "ko"
  ) as Locale;
  const item = getQAItemBySlug(slug);

  if (!item) return {};

  return generateQnaMetadata(validLocale, {
    slug: item.slug,
    question: item.question[validLocale],
    answer: item.answer[validLocale].replace(/<[^>]*>/g, "").slice(0, 300),
  });
}

export default async function QADetailPage({ params }: PageProps) {
  const { locale, slug } = await params;
  const validLocale = (
    i18nConfig.locales.includes(locale as Locale) ? locale : "ko"
  ) as Locale;
  const dict = getDictionary(validLocale);

  const item = getQAItemBySlug(slug);
  if (!item) {
    notFound();
  }

  const relatedItems = getRelatedQAItems(slug, 3);

  return (
    <div className="flex min-h-screen flex-col">
      <Header locale={validLocale} dict={dict} />

      <main className="flex-1">
        {/* Hero */}
        <PageHero
          title={item.question[validLocale]}
          image="/slides/documents.jpg"
        />

        {/* Meta info */}
        <section className="border-b bg-muted/30 py-4">
          <div className="mx-auto max-w-4xl px-4">
            <div className="flex flex-wrap items-center gap-4">
              <Button asChild variant="ghost" size="sm" className="-ml-2">
                <Link href={`/${validLocale}/qa`}>
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  {dict.common.backToList}
                </Link>
              </Button>
              <Badge variant="secondary">
                {categoryLabels[item.category]?.[validLocale] ?? item.category}
              </Badge>
            </div>
          </div>
        </section>

        {/* Answer */}
        <section className="py-12 md:py-16">
          <div className="mx-auto max-w-4xl px-4">
            <article
              className="prose prose-neutral dark:prose-invert max-w-none prose-headings:font-semibold prose-headings:tracking-tight prose-h3:mt-8 prose-h3:text-lg prose-p:leading-relaxed prose-p:text-muted-foreground prose-li:text-muted-foreground prose-strong:text-foreground"
              dangerouslySetInnerHTML={{
                __html: item.answer[validLocale],
              }}
            />

            {/* CTA */}
            <Card className="mt-10 border-0 bg-muted/30 shadow-none">
              <CardContent className="flex flex-col items-center p-6 text-center sm:flex-row sm:text-left">
                <div className="flex-1">
                  <h3 className="font-semibold">
                    {validLocale === "ko"
                      ? "더 궁금한 점이 있으신가요?"
                      : "Have more questions?"}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {validLocale === "ko"
                      ? "전문 상담사에게 직접 문의하세요."
                      : "Contact our expert consultants directly."}
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

        {/* Related Questions */}
        {relatedItems.length > 0 && (
          <section className="border-t bg-muted/20 py-12 md:py-16">
            <div className="mx-auto max-w-4xl px-4">
              <h2 className="mb-6 text-xl font-semibold">
                {validLocale === "ko" ? "관련 질문" : "Related Questions"}
              </h2>
              <div className="space-y-4">
                {relatedItems.map((relatedItem) => (
                  <Link
                    key={relatedItem.id}
                    href={`/${validLocale}/qa/${relatedItem.slug}`}
                    className="group block"
                  >
                    <Card className="transition-all hover:border-primary/50">
                      <CardContent className="flex items-center justify-between p-5">
                        <div className="flex items-center gap-3">
                          <MessageCircle className="h-4 w-4 text-primary" />
                          <span className="font-medium group-hover:text-primary">
                            {relatedItem.question[validLocale]}
                          </span>
                        </div>
                        <ArrowRight className="h-4 w-4 text-muted-foreground" />
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer locale={validLocale} dict={dict} />
    </div>
  );
}
