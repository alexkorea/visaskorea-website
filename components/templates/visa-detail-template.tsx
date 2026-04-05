import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SEOBreadcrumb } from "@/components/seo/seo-breadcrumb";
import { SEOFAQ } from "@/components/seo/seo-faq";
import { ServicePageSchema } from "@/components/seo/page-schema";
import { PageHero } from "@/components/layout/page-hero";
import type { Locale } from "@/lib/seo";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import type { FAQItem } from "@/lib/seo/structured-data";
import {
  FileText,
  Users,
  CheckCircle,
  Clock,
  AlertTriangle,
  ArrowRight,
  Phone,
} from "lucide-react";

export interface VisaDetailData {
  slug: string;
  title: string;
  subtitle?: string;
  overview: string;
  targetApplicants: string[];
  eligibility: string[];
  requiredDocuments: string[];
  process: Array<{ step: number; title: string; description: string }>;
  processingTime?: string;
  importantNotes: string[];
  faqs: FAQItem[];
  relatedVisas: Array<{ slug: string; title: string }>;
}

interface VisaDetailTemplateProps {
  locale: Locale;
  dict: Dictionary;
  visa: VisaDetailData;
  categoryTitle: string;
  heroImage?: string;
}

export function VisaDetailTemplate({
  locale,
  dict,
  visa,
  categoryTitle,
  heroImage,
}: VisaDetailTemplateProps) {
  return (
    <>
      {/* Structured Data */}
      <ServicePageSchema
        locale={locale}
        service={{
          name: visa.title,
          description: visa.overview,
          url: `/visa/${visa.slug}`,
          category: "Visa Consulting",
        }}
      />

      <article className="min-h-screen bg-background">
        {/* Breadcrumb */}
        <div className="border-b bg-muted/30">
          <div className="mx-auto max-w-5xl px-4 py-3">
            <SEOBreadcrumb
              locale={locale}
              items={[
                { name: categoryTitle, href: "/visa" },
                { name: visa.title, href: `/visa/${visa.slug}` },
              ]}
              homeLabel={dict.common.home}
            />
          </div>
        </div>

        {/* Hero Section */}
        {heroImage ? (
          <PageHero
            title={visa.title}
            subtitle={visa.subtitle}
            image={heroImage}
          />
        ) : (
          <header className="border-b bg-gradient-to-b from-muted/50 to-background py-12 md:py-16">
            <div className="mx-auto max-w-5xl px-4">
              <h1 className="text-balance text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
                {visa.title}
              </h1>
              {visa.subtitle && (
                <p className="mt-4 text-pretty text-lg text-muted-foreground md:text-xl">
                  {visa.subtitle}
                </p>
              )}
              <div className="mt-6 flex flex-wrap gap-3">
                <Button size="lg" asChild>
                  <Link href={`/${locale}/contact`}>
                    <Phone className="mr-2 h-4 w-4" />
                    {dict.common.freeConsultation}
                  </Link>
                </Button>
              </div>
            </div>
          </header>
        )}

        {/* Main Content */}
        <div className="mx-auto max-w-5xl px-4 py-12">
          <div className="grid gap-12 lg:grid-cols-[1fr_300px]">
            {/* Main Column */}
            <main className="space-y-12">
              {/* Overview Section */}
              <section aria-labelledby="overview-heading">
                <h2
                  id="overview-heading"
                  className="mb-4 flex items-center gap-2 text-2xl font-bold"
                >
                  <FileText className="h-6 w-6 text-primary" />
                  {dict.visa.overview}
                </h2>
                <p className="text-pretty leading-relaxed text-muted-foreground">
                  {visa.overview}
                </p>
              </section>

              {/* Target Applicants */}
              <section aria-labelledby="target-heading">
                <h2
                  id="target-heading"
                  className="mb-4 flex items-center gap-2 text-2xl font-bold"
                >
                  <Users className="h-6 w-6 text-primary" />
                  {dict.visa.targetApplicants}
                </h2>
                <ul className="space-y-2">
                  {visa.targetApplicants.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Eligibility Requirements */}
              <section aria-labelledby="eligibility-heading">
                <h2
                  id="eligibility-heading"
                  className="mb-4 flex items-center gap-2 text-2xl font-bold"
                >
                  <CheckCircle className="h-6 w-6 text-primary" />
                  {dict.visa.eligibility}
                </h2>
                <ul className="space-y-2">
                  {visa.eligibility.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-medium text-primary">
                        {index + 1}
                      </span>
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Required Documents */}
              <section aria-labelledby="documents-heading">
                <h2
                  id="documents-heading"
                  className="mb-4 flex items-center gap-2 text-2xl font-bold"
                >
                  <FileText className="h-6 w-6 text-primary" />
                  {dict.visa.requiredDocuments}
                </h2>
                <Card>
                  <CardContent className="pt-6">
                    <ul className="grid gap-2 sm:grid-cols-2">
                      {visa.requiredDocuments.map((doc, index) => (
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
                  <Clock className="h-6 w-6 text-primary" />
                  {dict.visa.process}
                </h2>
                {visa.processingTime && (
                  <p className="mb-4 text-sm text-muted-foreground">
                    {dict.visa.processingTime}: {visa.processingTime}
                  </p>
                )}
                <div className="space-y-4">
                  {visa.process.map((step) => (
                    <div
                      key={step.step}
                      className="flex gap-4 rounded-lg border p-4"
                    >
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
              </section>

              {/* Important Notes */}
              <section aria-labelledby="notes-heading">
                <h2
                  id="notes-heading"
                  className="mb-4 flex items-center gap-2 text-2xl font-bold"
                >
                  <AlertTriangle className="h-6 w-6 text-amber-500" />
                  {dict.visa.importantNotes}
                </h2>
                <Card className="border-amber-200 bg-amber-50 dark:border-amber-900 dark:bg-amber-950/20">
                  <CardContent className="pt-6">
                    <ul className="space-y-2">
                      {visa.importantNotes.map((note, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-2 text-sm"
                        >
                          <span className="text-amber-600">•</span>
                          <span className="text-amber-800 dark:text-amber-200">
                            {note}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </section>

              {/* FAQ Section */}
              {visa.faqs.length > 0 && (
                <SEOFAQ
                  items={visa.faqs}
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
                    {dict.common.consultation}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    {locale === "ko" &&
                      "전문 컨설턴트가 귀하의 비자 신청을 도와드립니다."}
                    {locale === "en" &&
                      "Our expert consultants will assist you with your visa application."}
                    {locale === "zh" &&
                      "我们的专业顾问将协助您办理签证申请。"}
                    {locale === "ja" &&
                      "専門コンサルタントがビザ申請をサポートいたします。"}
                  </p>
                  <Button className="w-full" asChild>
                    <Link href={`/${locale}/contact`}>
                      {dict.common.freeConsultation}
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Related Visas */}
              {visa.relatedVisas.length > 0 && (
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">
                      {dict.visa.relatedVisa}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {visa.relatedVisas.map((related) => (
                        <li key={related.slug}>
                          <Link
                            href={`/${locale}/visa/${related.slug}`}
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
