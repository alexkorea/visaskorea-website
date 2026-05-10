import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { PageHero } from "@/components/layout/page-hero";
import { i18nConfig, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { generatePageMetadata } from "@/lib/seo";
import { getAllPosts } from "@/lib/blog";
import { Calendar, ArrowRight } from "lucide-react";

export const revalidate = 60;

interface PageProps {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ category?: string }>;
}

const BLOG_SEO = {
  title: {
    ko: "비자·이민 전문 블로그 — 최신 가이드 모음",
    en: "Visa & Immigration Expert Blog — Latest Guides",
    zh: "签证·移民专业博客 — 最新指南合集",
    ja: "ビザ・移民専門ブログ — 最新ガイド一覧",
  },
  description: {
    ko: "한국 비자 신청·체류 연장·영주권·귀화·법인 설립에 관한 최신 정보와 행정사 전문 가이드를 한눈에 확인하세요. 비전행정사사무소가 직접 작성한 실무 중심 콘텐츠입니다.",
    en: "Stay up to date with expert guides on Korean visa applications, residence extensions, permanent residency, naturalization, and company formation. Written by licensed administrative attorneys at Vision Admin Office.",
    zh: "一站式获取韩国签证申请、居留延期、永久居留、归化及法人设立的最新专业指南。由飞展行政事务所持牌行政士亲自撰写，内容以实务操作为核心。",
    ja: "韓国ビザ申請・在留延長・永住権・帰化・法人設立に関する最新の専門ガイドをまとめてご確認いただけます。ビジョン行政書士事務所の有資格行政士が実務に基づいて執筆しています。",
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
  "투자비자": { ko: "투자비자", en: "Investment Visa", zh: "投资签证", ja: "投資ビザ" },
  "취업비자": { ko: "취업비자", en: "Employment Visa", zh: "就业签证", ja: "就労ビザ" },
  "체류자격": { ko: "체류자격", en: "Residence Status", zh: "居留资格", ja: "在留資格" },
  "법인설립": { ko: "법인설립", en: "Company Setup", zh: "法人设立", ja: "法人設立" },
};

export default async function BlogListPage({ params, searchParams }: PageProps) {
  const { locale } = await params;
  const { category } = await searchParams;
  const validLocale = (
    i18nConfig.locales.includes(locale as Locale) ? locale : "ko"
  ) as Locale;
  const dict = getDictionary(validLocale);

  const allPosts = await getAllPosts(validLocale);
  const posts = category
    ? allPosts.filter((p) => p.category === category)
    : allPosts;

  // Collect unique categories from posts
  const uniqueCategories = [...new Set(allPosts.map((p) => p.category))];

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
              {uniqueCategories.map((cat) => (
                <Link key={cat} href={`/${validLocale}/blog?category=${cat}`}>
                  <Badge
                    variant={category === cat ? "default" : "outline"}
                    className="cursor-pointer"
                  >
                    {categoryLabels[cat]?.[validLocale] ?? cat}
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
                      key={post.slug}
                      href={`/${validLocale}/blog/${post.slug}`}
                      className="group"
                    >
                      <Card className="h-full overflow-hidden transition-all hover:border-primary/50 hover:shadow-md">
                        {post.image && (
                          <div className="relative h-48 w-full overflow-hidden">
                            <Image
                              src={post.image}
                              alt={post.title}
                              fill
                              className="object-cover transition-transform group-hover:scale-105"
                            />
                          </div>
                        )}
                        <CardHeader>
                          <div className="flex items-center gap-2">
                            <Badge variant="secondary">
                              {categoryLabels[post.category]?.[validLocale] ??
                                post.category}
                            </Badge>
                          </div>
                          <CardTitle className="line-clamp-2 text-lg group-hover:text-primary">
                            {post.title}
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="line-clamp-3 text-sm text-muted-foreground">
                            {post.excerpt}
                          </p>
                          <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground">
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
