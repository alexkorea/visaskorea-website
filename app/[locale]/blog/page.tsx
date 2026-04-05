import type { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { i18nConfig, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { generatePageMetadata } from "@/lib/seo";
import { blogPosts, getBlogPostsByCategory } from "@/lib/content/blog";
import { Calendar, ArrowRight, User } from "lucide-react";

interface PageProps {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ category?: string }>;
}

const BLOG_SEO = {
  title: {
    ko: "블로그",
    en: "Blog",
    zh: "博客",
    ja: "ブログ",
  },
  description: {
    ko: "비자, 이민, 법인 설립에 관한 최신 정보와 전문가 가이드를 확인하세요.",
    en: "Check the latest information and expert guides on visas, immigration, and company setup.",
    zh: "查看关于签证、移民和法人设立的最新信息和专家指南。",
    ja: "ビザ、移民、法人設立に関する最新情報と専門家ガイドをご確認ください。",
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
    pathname: "/blog",
    seo: {
      title: BLOG_SEO.title[validLocale],
      description: BLOG_SEO.description[validLocale],
    },
  });
}

const categoryLabels: Record<string, Record<Locale, string>> = {
  corporate: { ko: "기업법", en: "Corporate Law", zh: "公司法", ja: "企業法" },
  immigration: { ko: "이민법", en: "Immigration", zh: "移民法", ja: "移民法" },
  ip: {
    ko: "지적재산권",
    en: "Intellectual Property",
    zh: "知识产权",
    ja: "知的財産権",
  },
  tax: { ko: "세금 및 금융", en: "Tax & Finance", zh: "税务与金融", ja: "税務・金融" },
};

export default async function BlogListPage({ params, searchParams }: PageProps) {
  const { locale } = await params;
  const { category } = await searchParams;
  const validLocale = (
    i18nConfig.locales.includes(locale as Locale) ? locale : "ko"
  ) as Locale;
  const dict = getDictionary(validLocale);

  const posts = category
    ? getBlogPostsByCategory(category)
    : blogPosts;

  return (
    <div className="flex min-h-screen flex-col">
      <Header locale={validLocale} dict={dict} />

      <main className="flex-1">
        {/* Hero */}
        <section className="border-b bg-muted/30 py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-balance text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
                {BLOG_SEO.title[validLocale]}
              </h1>
              <p className="mt-4 text-lg text-muted-foreground">
                {BLOG_SEO.description[validLocale]}
              </p>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="border-b py-4">
          <div className="mx-auto max-w-7xl px-4">
            <div className="flex flex-wrap gap-2">
              <Link href={`/${validLocale}/blog`}>
                <Badge
                  variant={!category ? "default" : "outline"}
                  className="cursor-pointer"
                >
                  {validLocale === "ko" ? "전체" : "All"}
                </Badge>
              </Link>
              {Object.entries(categoryLabels).map(([key, labels]) => (
                <Link key={key} href={`/${validLocale}/blog?category=${key}`}>
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

        {/* Posts Grid */}
        <section className="py-12 md:py-16">
          <div className="mx-auto max-w-7xl px-4">
            {posts.length > 0 ? (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {posts.map((post) => {
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

                  return (
                    <Link
                      key={post.id}
                      href={`/${validLocale}/blog/${post.slug}`}
                      className="group"
                    >
                      <Card className="h-full transition-all hover:border-primary/50 hover:shadow-md">
                        <CardHeader>
                          <div className="flex items-center gap-2">
                            <Badge variant="secondary">
                              {categoryLabels[post.category]?.[validLocale] ??
                                post.category}
                            </Badge>
                          </div>
                          <CardTitle className="line-clamp-2 text-lg group-hover:text-primary">
                            {post.title[validLocale]}
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="line-clamp-3 text-sm text-muted-foreground">
                            {post.excerpt[validLocale]}
                          </p>
                          <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <User className="h-3 w-3" />
                              {post.author.name}
                            </span>
                            <span className="flex items-center gap-1">
                              <Calendar className="h-3 w-3" />
                              {formattedDate}
                            </span>
                          </div>
                          <div className="mt-3 flex items-center text-sm font-medium text-primary">
                            {dict.common.readMore}
                            <ArrowRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-1" />
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  );
                })}
              </div>
            ) : (
              <div className="py-16 text-center text-muted-foreground">
                {validLocale === "ko"
                  ? "게시물이 없습니다."
                  : "No posts found."}
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer locale={validLocale} dict={dict} />
    </div>
  );
}
