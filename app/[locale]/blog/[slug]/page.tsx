import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { PageHero } from "@/components/layout/page-hero";
import { i18nConfig, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { generateBlogMetadata } from "@/lib/seo";
import { getPostBySlug, getPostSlugs, getAllPosts } from "@/lib/blog";
import { ArrowLeft, ArrowRight, Calendar } from "lucide-react";

interface PageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export function generateStaticParams() {
  const slugs = getPostSlugs();
  const params: { locale: string; slug: string }[] = [];
  for (const locale of i18nConfig.locales) {
    for (const slug of slugs) {
      params.push({ locale, slug });
    }
  }
  return params;
}

const categoryLabels: Record<string, Record<Locale, string>> = {
  employment: { ko: "취업비자", en: "Employment Visa", zh: "就业签证", ja: "就労ビザ" },
  residence: { ko: "체류/영주", en: "Residence/PR", zh: "居留/永住", ja: "滞在/永住" },
  corporate: { ko: "법인설립", en: "Company Setup", zh: "法人设立", ja: "法人設立" },
  investment: { ko: "투자이민", en: "Investment", zh: "投资移民", ja: "投資移民" },
  "투자비자": { ko: "투자비자", en: "Investment Visa", zh: "投资签证", ja: "投資ビザ" },
  "취업비자": { ko: "취업비자", en: "Employment Visa", zh: "就业签证", ja: "就労ビザ" },
  "체류자격": { ko: "체류자격", en: "Residence Status", zh: "居留资格", ja: "在留資格" },
  "법인설립": { ko: "법인설립", en: "Company Setup", zh: "法人设立", ja: "法人設立" },
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const validLocale = (
    i18nConfig.locales.includes(locale as Locale) ? locale : "ko"
  ) as Locale;

  try {
    const post = getPostBySlug(slug, validLocale);
    return generateBlogMetadata(validLocale, {
      slug: post.slug,
      title: post.title,
      description: post.excerpt,
      publishedAt: post.date,
    });
  } catch {
    return {};
  }
}

export default async function BlogDetailPage({ params }: PageProps) {
  const { locale, slug } = await params;
  const validLocale = (
    i18nConfig.locales.includes(locale as Locale) ? locale : "ko"
  ) as Locale;
  const dict = getDictionary(validLocale);

  let post;
  try {
    post = getPostBySlug(slug, validLocale);
  } catch {
    notFound();
  }

  // Get related posts (same category, excluding current)
  const allPosts = getAllPosts(validLocale);
  const relatedPosts = allPosts
    .filter((p) => p.slug !== slug && p.category === post.category)
    .slice(0, 3);

  const formattedDate = new Date(post.date).toLocaleDateString(
    validLocale === "ko"
      ? "ko-KR"
      : validLocale === "zh"
        ? "zh-CN"
        : validLocale === "ja"
          ? "ja-JP"
          : "en-US",
    { year: "numeric", month: "long", day: "numeric" }
  );

  const contactLabel = {
    ko: "무료 상담 신청",
    en: "Free Consultation",
    zh: "免费咨询",
    ja: "無料相談",
  }[validLocale];

  const qrTitle = {
    ko: "메신저로 상담하기",
    en: "Chat with us",
    zh: "通过聊天咨询",
    ja: "メッセンジャーで相談",
  }[validLocale];

  return (
    <div className="flex min-h-screen flex-col">
      <Header locale={validLocale} dict={dict} />

      <main className="flex-1">
        {/* Hero */}
        <PageHero
          title={post.title}
          subtitle={post.excerpt}
          image={post.image || "/slides/documents.jpg"}
        />

        {/* Meta info */}
        <section className="border-b bg-muted/30 py-4">
          <div className="mx-auto max-w-7xl px-4">
            <div className="flex flex-wrap items-center gap-4">
              <Button asChild variant="ghost" size="sm" className="-ml-2">
                <Link href={`/${validLocale}/blog`}>
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  {dict.common.backToList}
                </Link>
              </Button>
              <Badge variant="secondary">
                {categoryLabels[post.category]?.[validLocale] ?? post.category}
              </Badge>
              <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
                <Calendar className="h-4 w-4" />
                {dict.blog.publishedOn} {formattedDate}
              </span>
            </div>
          </div>
        </section>

        {/* Content + Sidebar */}
        <section className="py-12 md:py-16">
          <div className="mx-auto max-w-7xl px-4">
            <div className="flex flex-col gap-10 lg:flex-row">
              {/* Main Content */}
              <article
                className="min-w-0 flex-1 prose prose-neutral dark:prose-invert max-w-none prose-headings:font-semibold prose-headings:tracking-tight prose-h2:mt-10 prose-h2:text-xl prose-p:leading-relaxed prose-p:text-muted-foreground prose-li:text-muted-foreground prose-strong:text-foreground prose-table:text-sm prose-th:bg-muted prose-th:px-4 prose-th:py-2 prose-td:px-4 prose-td:py-2 prose-td:border prose-th:border"
                dangerouslySetInnerHTML={{
                  __html: post.content,
                }}
              />

              {/* Sidebar */}
              <aside className="w-full shrink-0 lg:w-72">
                <div className="sticky top-24 space-y-6">
                  {/* CTA */}
                  <Card>
                    <CardContent className="p-5">
                      <Button asChild className="w-full">
                        <Link href={`/${validLocale}/contact`}>
                          {contactLabel}
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>

                  {/* QR Codes */}
                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-sm font-medium">
                        {qrTitle}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="grid grid-cols-2 gap-3 p-5 pt-0">
                      {[
                        { name: "KakaoTalk", src: "/qr/kakao.jpg" },
                        { name: "WhatsApp", src: "/qr/whatsapp.jpg" },
                        { name: "WeChat", src: "/qr/wechat.jpg" },
                        { name: "LINE", src: "/qr/line.jpg" },
                      ].map((qr) => (
                        <div key={qr.name} className="text-center">
                          <Image
                            src={qr.src}
                            alt={qr.name}
                            width={100}
                            height={100}
                            className="mx-auto rounded border"
                          />
                          <p className="mt-1 text-xs text-muted-foreground">
                            {qr.name}
                          </p>
                        </div>
                      ))}
                    </CardContent>
                  </Card>

                  {/* Related Posts */}
                  {relatedPosts.length > 0 && (
                    <Card>
                      <CardHeader className="pb-3">
                        <CardTitle className="text-sm font-medium">
                          {dict.common.relatedPosts}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-3 p-5 pt-0">
                        {relatedPosts.map((rp) => (
                          <Link
                            key={rp.slug}
                            href={`/${validLocale}/blog/${rp.slug}`}
                            className="group block"
                          >
                            <p className="line-clamp-2 text-sm font-medium group-hover:text-primary">
                              {rp.title}
                            </p>
                            <p className="mt-0.5 text-xs text-muted-foreground">
                              {new Date(rp.date).toLocaleDateString(
                                validLocale === "ko" ? "ko-KR" : "en-US",
                                { year: "numeric", month: "short", day: "numeric" }
                              )}
                            </p>
                          </Link>
                        ))}
                      </CardContent>
                    </Card>
                  )}
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* Bottom Related Posts (full width) */}
        {relatedPosts.length > 0 && (
          <section className="border-t bg-muted/20 py-12 md:py-16">
            <div className="mx-auto max-w-7xl px-4">
              <h2 className="mb-8 text-xl font-semibold">
                {dict.common.relatedPosts}
              </h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {relatedPosts.map((relatedPost) => (
                  <Link
                    key={relatedPost.slug}
                    href={`/${validLocale}/blog/${relatedPost.slug}`}
                    className="group"
                  >
                    <Card className="h-full transition-all hover:border-primary/50">
                      <CardHeader>
                        <CardTitle className="line-clamp-2 text-base group-hover:text-primary">
                          {relatedPost.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="line-clamp-2 text-sm text-muted-foreground">
                          {relatedPost.excerpt}
                        </p>
                        <div className="mt-3 flex items-center text-sm font-medium text-primary">
                          {dict.common.readMore}
                          <ArrowRight className="ml-1 h-3 w-3" />
                        </div>
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
