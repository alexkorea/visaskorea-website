import type { Metadata } from "next";
import Link from "next/link";
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
import {
  blogPosts,
  getBlogPostBySlug,
  getRelatedPosts,
} from "@/lib/content/blog";
import { ArrowLeft, ArrowRight, Calendar, User } from "lucide-react";

interface PageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export function generateStaticParams() {
  const params: { locale: string; slug: string }[] = [];
  for (const locale of i18nConfig.locales) {
    for (const post of blogPosts) {
      params.push({ locale, slug: post.slug });
    }
  }
  return params;
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

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const validLocale = (
    i18nConfig.locales.includes(locale as Locale) ? locale : "ko"
  ) as Locale;
  const post = getBlogPostBySlug(slug);

  if (!post) return {};

  return generateBlogMetadata(validLocale, {
    slug: post.slug,
    title: post.title[validLocale],
    description: post.excerpt[validLocale],
    publishedAt: post.date,
  });
}

export default async function BlogDetailPage({ params }: PageProps) {
  const { locale, slug } = await params;
  const validLocale = (
    i18nConfig.locales.includes(locale as Locale) ? locale : "ko"
  ) as Locale;
  const dict = getDictionary(validLocale);

  const post = getBlogPostBySlug(slug);
  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(slug, 3);

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
    <div className="flex min-h-screen flex-col">
      <Header locale={validLocale} dict={dict} />

      <main className="flex-1">
        {/* Hero */}
        <PageHero
          title={post.title[validLocale]}
          subtitle={post.excerpt[validLocale]}
          image="/slides/documents.jpg"
        />

        {/* Meta info */}
        <section className="border-b bg-muted/30 py-4">
          <div className="mx-auto max-w-4xl px-4">
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
                <User className="h-4 w-4" />
                {post.author.name}, {post.author.role}
              </span>
              <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
                <Calendar className="h-4 w-4" />
                {dict.blog.publishedOn} {formattedDate}
              </span>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 md:py-16">
          <div className="mx-auto max-w-4xl px-4">
            <article
              className="prose prose-neutral dark:prose-invert max-w-none prose-headings:font-semibold prose-headings:tracking-tight prose-h2:mt-10 prose-h2:text-xl prose-p:leading-relaxed prose-p:text-muted-foreground prose-li:text-muted-foreground prose-strong:text-foreground"
              dangerouslySetInnerHTML={{
                __html: post.content[validLocale],
              }}
            />
          </div>
        </section>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="border-t bg-muted/20 py-12 md:py-16">
            <div className="mx-auto max-w-7xl px-4">
              <h2 className="mb-8 text-xl font-semibold">
                {dict.common.relatedPosts}
              </h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {relatedPosts.map((relatedPost) => (
                  <Link
                    key={relatedPost.id}
                    href={`/${validLocale}/blog/${relatedPost.slug}`}
                    className="group"
                  >
                    <Card className="h-full transition-all hover:border-primary/50">
                      <CardHeader>
                        <CardTitle className="line-clamp-2 text-base group-hover:text-primary">
                          {relatedPost.title[validLocale]}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="line-clamp-2 text-sm text-muted-foreground">
                          {relatedPost.excerpt[validLocale]}
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
