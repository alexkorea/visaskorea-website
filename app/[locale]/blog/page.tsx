import type { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { PageHero } from "@/components/layout/page-hero";
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
  employment: { ko: "취업비자", en: "Employment Visa", zh: "就业签证", ja: "就労ビザ" },
  residence: { ko: "체류/영주", en: "Residence/PR", zh: "居留/永住", ja: "滞在/永住" },
  corporate: { ko: "법인설립", en: "Company Setup", zh: "法人设立", ja: "法人設立" },
  investment: { ko: "투자이민", en: "Investment", zh: "投资移民", ja: "投資移民" },
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
        <PageHero
          title={BLOG_SEO.title[validLocale]}
          subtitle={BLOG_SEO.description[validLocale]}
          image="/slides/documents.jpg"
        />

        {/* Category Filter */}
        <section className="border-b py-4">
          <div className="mx-auto max-w-7xl px-4">
            <div className="flex flex-wrap gap-2">
              <Link href={`/${validLocale}/blog`}>
                <Badge
                  variant={!category ? "default" : "outline"}
                  className="cursor-pointer"
                >
                  {{ ko: "전체", en: "All", zh: "全部", ja: "全て" }[validLocale]}
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
                {{ ko: "게시물이 없습니다.", en: "No posts found.", zh: "暂无文章。", ja: "投稿がありません。" }[validLocale]}
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer locale={validLocale} dict={dict} />
    </div>
  );
}
