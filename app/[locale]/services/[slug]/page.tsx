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
import { generatePageMetadata } from "@/lib/seo";
import {
  getCategoryData,
  getCategorySlugs,
} from "@/lib/categories";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle,
  HelpCircle,
} from "lucide-react";

interface PageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export function generateStaticParams() {
  const params: { locale: string; slug: string }[] = [];
  // Currently only ko locale has category data
  const slugs = getCategorySlugs("ko");
  for (const locale of i18nConfig.locales) {
    for (const slug of slugs) {
      params.push({ locale, slug });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const validLocale = (
    i18nConfig.locales.includes(locale as Locale) ? locale : "ko"
  ) as Locale;

  // Use ko data as fallback since we only have ko category data
  const data = getCategoryData(validLocale, slug) || getCategoryData("ko", slug);
  if (!data) return {};

  return generatePageMetadata({
    locale: validLocale,
    pathname: `/services/${slug}`,
    seo: {
      title: data.seo.title,
      description: data.seo.description,
      keywords: data.seo.keywords,
    },
  });
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { locale, slug } = await params;
  const validLocale = (
    i18nConfig.locales.includes(locale as Locale) ? locale : "ko"
  ) as Locale;
  const dict = getDictionary(validLocale);

  // Use ko data as fallback
  const data = getCategoryData(validLocale, slug) || getCategoryData("ko", slug);
  if (!data) {
    notFound();
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header locale={validLocale} dict={dict} />

      <main className="flex-1">
        {/* Breadcrumb */}
        <div className="border-b bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 py-3">
            <nav className="flex items-center gap-2 text-sm text-muted-foreground">
              {data.breadcrumbs.map((crumb, index) => (
                <span key={crumb.href} className="flex items-center gap-2">
                  {index > 0 && <span>/</span>}
                  {index < data.breadcrumbs.length - 1 ? (
                    <Link href={crumb.href} className="hover:text-primary">
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-foreground">{crumb.label}</span>
                  )}
                </span>
              ))}
            </nav>
          </div>
        </div>

        {/* Hero */}
        <PageHero
          title={data.hero.title}
          subtitle={data.hero.subtitle}
          image={
            slug === "investment"
              ? "/slides/business.jpg"
              : slug === "employment"
                ? "/slides/city.jpg"
                : slug === "residence"
                  ? "/slides/family.jpg"
                  : "/slides/documents.jpg"
          }
        />

        {/* Summary */}
        <section className="py-12 md:py-16">
          <div className="mx-auto max-w-4xl px-4">
            <h2 className="text-2xl font-bold tracking-tight">
              {data.summary.title}
            </h2>
            <p className="mt-4 text-muted-foreground">{data.summary.content}</p>
            {data.summary.highlights && (
              <ul className="mt-6 space-y-3">
                {data.summary.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>

        {/* Service Groups */}
        {data.serviceGroups.map((group) => (
          <section
            key={group.id}
            className="border-t py-12 md:py-16"
          >
            <div className="mx-auto max-w-7xl px-4">
              <h2 className="text-2xl font-bold tracking-tight">
                {group.title}
              </h2>
              {group.description && (
                <p className="mt-2 text-muted-foreground">
                  {group.description}
                </p>
              )}
              <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {group.services.map((service) => (
                  <Card
                    key={service.id}
                    className={`transition-all hover:shadow-md ${
                      service.featured ? "border-primary/30" : ""
                    }`}
                  >
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-base">
                          {service.title}
                        </CardTitle>
                        {service.featured && (
                          <Badge variant="default" className="text-xs">
                            Featured
                          </Badge>
                        )}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        {service.description}
                      </p>
                      {service.tags && (
                        <div className="mt-3 flex flex-wrap gap-1">
                          {service.tags.map((tag) => (
                            <Badge
                              key={tag}
                              variant="outline"
                              className="text-xs font-normal"
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* Process */}
        <section className="border-t bg-muted/30 py-12 md:py-16">
          <div className="mx-auto max-w-4xl px-4">
            <h2 className="text-2xl font-bold tracking-tight">
              {data.process.title}
            </h2>
            {data.process.subtitle && (
              <p className="mt-2 text-muted-foreground">
                {data.process.subtitle}
              </p>
            )}
            <div className="mt-8 space-y-6">
              {data.process.steps.map((step) => (
                <div key={step.step} className="flex gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                    {step.step}
                  </div>
                  <div>
                    <h3 className="font-semibold">{step.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-12 md:py-16">
          <div className="mx-auto max-w-4xl px-4">
            <h2 className="text-2xl font-bold tracking-tight">
              {data.faq.title}
            </h2>
            {data.faq.subtitle && (
              <p className="mt-2 text-muted-foreground">{data.faq.subtitle}</p>
            )}
            <div className="mt-8 space-y-4">
              {data.faq.items.map((faqItem, index) => (
                <Card key={index}>
                  <CardContent className="p-5">
                    <div className="flex items-start gap-3">
                      <HelpCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                      <div>
                        <h3 className="font-semibold">{faqItem.question}</h3>
                        <p className="mt-2 text-sm text-muted-foreground">
                          {faqItem.answer}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t bg-muted/30 py-12 md:py-16">
          <div className="mx-auto max-w-2xl px-4 text-center">
            <h2 className="text-2xl font-bold tracking-tight">
              {data.cta.title}
            </h2>
            <p className="mt-4 text-muted-foreground">
              {data.cta.description}
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild>
                <Link href={data.cta.primaryButton.href}>
                  {data.cta.primaryButton.text}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              {data.cta.secondaryButton && (
                <Button size="lg" variant="outline" asChild>
                  <Link href={data.cta.secondaryButton.href}>
                    {data.cta.secondaryButton.text}
                  </Link>
                </Button>
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer locale={validLocale} dict={dict} />
    </div>
  );
}
