import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SEOBreadcrumb } from "@/components/seo/seo-breadcrumb";
import { SEOFAQ } from "@/components/seo/seo-faq";
import { ArticlePageSchema } from "@/components/seo/page-schema";
import type { Locale } from "@/lib/seo";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import type { FAQItem } from "@/lib/seo/structured-data";
import { Calendar, User, Clock, ArrowRight, Tag } from "lucide-react";

export interface TableOfContentsItem {
  id: string;
  title: string;
  level: 2 | 3;
}

export interface BlogDetailData {
  slug: string;
  title: string;
  description: string;
  content: React.ReactNode;
  publishedAt: string;
  updatedAt?: string;
  author: string;
  category: string;
  tags: string[];
  readTime: number;
  tableOfContents?: TableOfContentsItem[];
  faqs?: FAQItem[];
  relatedPosts: Array<{ slug: string; title: string; category: string }>;
  relatedServices?: Array<{ slug: string; title: string; type: "visa" | "business" }>;
}

interface BlogDetailTemplateProps {
  locale: Locale;
  dict: Dictionary;
  post: BlogDetailData;
  categoryTitle: string;
}

function formatDate(date: string, locale: Locale): string {
  return new Date(date).toLocaleDateString(
    locale === "ko" ? "ko-KR" : locale === "ja" ? "ja-JP" : locale === "zh" ? "zh-CN" : "en-US",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  );
}

export function BlogDetailTemplate({
  locale,
  dict,
  post,
  categoryTitle,
}: BlogDetailTemplateProps) {
  return (
    <>
      {/* Structured Data */}
      <ArticlePageSchema
        locale={locale}
        article={{
          title: post.title,
          description: post.description,
          url: `/blog/${post.slug}`,
          datePublished: post.publishedAt,
          dateModified: post.updatedAt,
          author: post.author,
        }}
      />

      <article className="min-h-screen bg-background">
        {/* Breadcrumb */}
        <div className="border-b bg-muted/30">
          <div className="mx-auto max-w-4xl px-4 py-3">
            <SEOBreadcrumb
              locale={locale}
              items={[
                { name: categoryTitle, href: "/blog" },
                { name: post.title, href: `/blog/${post.slug}` },
              ]}
              homeLabel={dict.common.home}
            />
          </div>
        </div>

        {/* Hero Section */}
        <header className="border-b py-12 md:py-16">
          <div className="mx-auto max-w-4xl px-4">
            {/* Category Badge */}
            <Badge variant="secondary" className="mb-4">
              {post.category}
            </Badge>

            {/* Title */}
            <h1 className="text-balance text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
              {post.title}
            </h1>

            {/* Description */}
            <p className="mt-4 text-pretty text-lg text-muted-foreground">
              {post.description}
            </p>

            {/* Meta Info */}
            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1.5">
                <User className="h-4 w-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4" />
                <time dateTime={post.publishedAt}>
                  {formatDate(post.publishedAt, locale)}
                </time>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" />
                <span>
                  {post.readTime} {dict.blog.minutes}
                </span>
              </div>
            </div>

            {/* Tags */}
            {post.tags.length > 0 && (
              <div className="mt-4 flex flex-wrap items-center gap-2">
                <Tag className="h-4 w-4 text-muted-foreground" />
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            )}
          </div>
        </header>

        {/* Main Content */}
        <div className="mx-auto max-w-4xl px-4 py-12">
          <div className="grid gap-12 lg:grid-cols-[1fr_240px]">
            {/* Main Column */}
            <main className="min-w-0">
              {/* Table of Contents */}
              {post.tableOfContents && post.tableOfContents.length > 0 && (
                <nav
                  aria-label="Table of contents"
                  className="mb-8 rounded-lg border bg-muted/30 p-4"
                >
                  <h2 className="mb-3 font-semibold">
                    {dict.common.tableOfContents}
                  </h2>
                  <ul className="space-y-2 text-sm">
                    {post.tableOfContents.map((item) => (
                      <li
                        key={item.id}
                        className={item.level === 3 ? "ml-4" : ""}
                      >
                        <a
                          href={`#${item.id}`}
                          className="text-muted-foreground transition-colors hover:text-foreground"
                        >
                          {item.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              )}

              {/* Article Content */}
              <div className="prose prose-neutral dark:prose-invert max-w-none">
                {post.content}
              </div>

              {/* FAQ Section */}
              {post.faqs && post.faqs.length > 0 && (
                <div className="mt-12 border-t pt-8">
                  <SEOFAQ items={post.faqs} title={dict.common.faq} />
                </div>
              )}

              {/* Related Services CTA */}
              {post.relatedServices && post.relatedServices.length > 0 && (
                <div className="mt-12 rounded-lg border bg-muted/30 p-6">
                  <h2 className="mb-4 text-lg font-semibold">
                    {dict.common.relatedServices}
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {post.relatedServices.map((service) => (
                      <Link
                        key={service.slug}
                        href={`/${locale}/${service.type}/${service.slug}`}
                        className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary transition-colors hover:bg-primary/20"
                      >
                        {service.title}
                        <ArrowRight className="h-3 w-3" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </main>

            {/* Sidebar */}
            <aside className="space-y-6">
              {/* Related Posts */}
              {post.relatedPosts.length > 0 && (
                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">
                      {dict.common.relatedPosts}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {post.relatedPosts.map((related) => (
                        <li key={related.slug}>
                          <Link
                            href={`/${locale}/blog/${related.slug}`}
                            className="group block"
                          >
                            <span className="text-xs text-muted-foreground">
                              {related.category}
                            </span>
                            <p className="text-sm font-medium leading-snug transition-colors group-hover:text-primary">
                              {related.title}
                            </p>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )}
            </aside>
          </div>
        </div>
      </article>
    </>
  );
}
