import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SEOBreadcrumb } from "@/components/seo/seo-breadcrumb";
import { SEOFAQ } from "@/components/seo/seo-faq";
import { ServicePageSchema } from "@/components/seo/page-schema";
import type { Locale } from "@/lib/seo";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import type { FAQItem } from "@/lib/seo/structured-data";
import {
  Briefcase,
  Building2,
  FileText,
  ListOrdered,
  Search,
  ArrowRight,
  Phone,
  MessageSquare,
} from "lucide-react";

export interface BusinessDetailData {
  slug: string;
  title: string;
  subtitle?: string;
  serviceIntro: string;
  targetCompanies: string[];
  requiredDocuments: string[];
  processSteps: Array<{ step: number; title: string; description: string }>;
  considerations: string[];
  faqs: FAQItem[];
  relatedServices: Array<{ slug: string; title: string }>;
}

interface BusinessDetailTemplateProps {
  locale: Locale;
  dict: Dictionary;
  service: BusinessDetailData;
  categoryTitle: string;
}

export function BusinessDetailTemplate({
  locale,
  dict,
  service,
  categoryTitle,
}: BusinessDetailTemplateProps) {
  return (
    <>
      {/* Structured Data */}
      <ServicePageSchema
        locale={locale}
        service={{
          name: service.title,
          description: service.serviceIntro,
          url: `/business/${service.slug}`,
          category: "Business Consulting",
        }}
      />

      <article className="min-h-screen bg-background">
        {/* Breadcrumb */}
        <div className="border-b bg-muted/30">
          <div className="mx-auto max-w-5xl px-4 py-3">
            <SEOBreadcrumb
              locale={locale}
              items={[
                { name: categoryTitle, href: "/business" },
                { name: service.title, href: `/business/${service.slug}` },
              ]}
              homeLabel={dict.common.home}
            />
          </div>
        </div>

        {/* Hero Section */}
        <header className="border-b bg-gradient-to-b from-muted/50 to-background py-12 md:py-16">
          <div className="mx-auto max-w-5xl px-4">
            <h1 className="text-balance text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
              {service.title}
            </h1>
            {service.subtitle && (
              <p className="mt-4 text-pretty text-lg text-muted-foreground md:text-xl">
                {service.subtitle}
              </p>
            )}
            <div className="mt-6 flex flex-wrap gap-3">
              <Button size="lg" asChild>
                <Link href={`/${locale}/contact`}>
                  <Phone className="mr-2 h-4 w-4" />
                  {dict.common.freeConsultation}
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href={`/${locale}/contact`}>
                  <MessageSquare className="mr-2 h-4 w-4" />
                  {dict.common.submitInquiry}
                </Link>
              </Button>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <div className="mx-auto max-w-5xl px-4 py-12">
          <div className="grid gap-12 lg:grid-cols-[1fr_300px]">
            {/* Main Column */}
            <main className="space-y-12">
              {/* Service Introduction */}
              <section aria-labelledby="intro-heading">
                <h2
                  id="intro-heading"
                  className="mb-4 flex items-center gap-2 text-2xl font-bold"
                >
                  <Briefcase className="h-6 w-6 text-primary" />
                  {dict.business.serviceIntro}
                </h2>
                <p className="text-pretty leading-relaxed text-muted-foreground">
                  {service.serviceIntro}
                </p>
              </section>

              {/* Target Companies */}
              <section aria-labelledby="target-heading">
                <h2
                  id="target-heading"
                  className="mb-4 flex items-center gap-2 text-2xl font-bold"
                >
                  <Building2 className="h-6 w-6 text-primary" />
                  {dict.business.targetCompanies}
                </h2>
                <div className="grid gap-3 sm:grid-cols-2">
                  {service.targetCompanies.map((company, index) => (
                    <Card key={index} className="p-4">
                      <p className="flex items-center gap-2 text-sm">
                        <span className="h-2 w-2 rounded-full bg-primary" />
                        {company}
                      </p>
                    </Card>
                  ))}
                </div>
              </section>

              {/* Required Documents */}
              <section aria-labelledby="documents-heading">
                <h2
                  id="documents-heading"
                  className="mb-4 flex items-center gap-2 text-2xl font-bold"
                >
                  <FileText className="h-6 w-6 text-primary" />
                  {dict.business.requiredDocuments}
                </h2>
                <Card>
                  <CardContent className="pt-6">
                    <ul className="grid gap-2 sm:grid-cols-2">
                      {service.requiredDocuments.map((doc, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                          <span className="text-sm text-muted-foreground">
                            {doc}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </section>

              {/* Process Steps */}
              <section aria-labelledby="process-heading">
                <h2
                  id="process-heading"
                  className="mb-4 flex items-center gap-2 text-2xl font-bold"
                >
                  <ListOrdered className="h-6 w-6 text-primary" />
                  {dict.business.processSteps}
                </h2>
                <div className="relative">
                  {/* Timeline line */}
                  <div className="absolute left-5 top-0 h-full w-0.5 bg-border" />
                  <div className="space-y-6">
                    {service.processSteps.map((step) => (
                      <div key={step.step} className="relative flex gap-4 pl-2">
                        <div className="relative z-10 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border-2 border-primary bg-background text-sm font-bold text-primary">
                          {step.step}
                        </div>
                        <div className="pb-6">
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

              {/* Key Considerations */}
              <section aria-labelledby="considerations-heading">
                <h2
                  id="considerations-heading"
                  className="mb-4 flex items-center gap-2 text-2xl font-bold"
                >
                  <Search className="h-6 w-6 text-primary" />
                  {dict.business.considerations}
                </h2>
                <Card className="border-blue-200 bg-blue-50 dark:border-blue-900 dark:bg-blue-950/20">
                  <CardContent className="pt-6">
                    <ul className="space-y-3">
                      {service.considerations.map((item, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-3 text-sm"
                        >
                          <span className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded bg-blue-200 text-xs font-medium text-blue-700 dark:bg-blue-900 dark:text-blue-200">
                            {index + 1}
                          </span>
                          <span className="text-blue-800 dark:text-blue-200">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </section>

              {/* FAQ Section */}
              {service.faqs.length > 0 && (
                <SEOFAQ
                  items={service.faqs}
                  title={dict.common.faq}
                  className="pt-4"
                />
              )}
            </main>

            {/* Sidebar */}
            <aside className="space-y-6">
              {/* CTA Card */}
              <Card className="sticky top-6 border-primary/20 bg-primary/5">
                <CardHeader>
                  <CardTitle className="text-lg">
                    {dict.business.contactCTA}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    {locale === "ko" &&
                      "귀사의 성공적인 한국 진출을 전문 컨설턴트가 함께 합니다."}
                    {locale === "en" &&
                      "Our experts will guide your successful entry into the Korean market."}
                    {locale === "zh" &&
                      "我们的专家将指导您成功进入韩国市场。"}
                    {locale === "ja" &&
                      "専門コンサルタントが韓国進出を成功に導きます。"}
                  </p>
                  <Button className="w-full" asChild>
                    <Link href={`/${locale}/contact`}>
                      {dict.common.freeConsultation}
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Related Services */}
              {service.relatedServices.length > 0 && (
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">
                      {dict.common.relatedServices}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.relatedServices.map((related) => (
                        <li key={related.slug}>
                          <Link
                            href={`/${locale}/business/${related.slug}`}
                            className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
                          >
                            <ArrowRight className="h-4 w-4" />
                            {related.title}
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
