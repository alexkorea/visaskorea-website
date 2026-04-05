import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Locale } from "@/lib/seo";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import { ArrowRight } from "lucide-react";

interface ServiceLink {
  slug: string;
  title: string;
  description?: string;
  badge?: string;
  type: "visa" | "business";
}

interface RelatedServicesProps {
  locale: Locale;
  dict: Dictionary;
  services: ServiceLink[];
  title?: string;
  className?: string;
}

/**
 * Related Services Component for Internal Linking
 * Used to boost SEO through contextual internal links
 */
export function RelatedServices({
  locale,
  dict,
  services,
  title,
  className = "",
}: RelatedServicesProps) {
  if (services.length === 0) return null;

  return (
    <section className={className} aria-labelledby="related-services">
      <h2
        id="related-services"
        className="mb-6 text-2xl font-bold tracking-tight"
      >
        {title || dict.common.relatedServices}
      </h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <Link
            key={`${service.type}-${service.slug}`}
            href={`/${locale}/${service.type}/${service.slug}`}
            className="group"
          >
            <Card className="h-full transition-all hover:border-primary/50 hover:shadow-sm">
              <CardHeader className="pb-2">
                <div className="flex items-start justify-between gap-2">
                  <CardTitle className="text-base group-hover:text-primary">
                    {service.title}
                  </CardTitle>
                  {service.badge && (
                    <Badge variant="secondary" className="flex-shrink-0 text-xs">
                      {service.badge}
                    </Badge>
                  )}
                </div>
              </CardHeader>
              {service.description && (
                <CardContent>
                  <p className="line-clamp-2 text-sm text-muted-foreground">
                    {service.description}
                  </p>
                  <span className="mt-2 inline-flex items-center gap-1 text-sm font-medium text-primary">
                    {dict.common.learnMore}
                    <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                  </span>
                </CardContent>
              )}
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}

/**
 * Inline Link Component for Content Internal Linking
 */
interface InlineLinkProps {
  locale: Locale;
  href: string;
  children: React.ReactNode;
  className?: string;
}

export function InlineLink({
  locale,
  href,
  children,
  className = "",
}: InlineLinkProps) {
  const fullHref = href.startsWith("/") ? `/${locale}${href}` : href;

  return (
    <Link
      href={fullHref}
      className={`font-medium text-primary underline-offset-4 hover:underline ${className}`}
    >
      {children}
    </Link>
  );
}

/**
 * CTA Banner Component for Bottom of Pages
 */
interface CTABannerProps {
  locale: Locale;
  dict: Dictionary;
  title: string;
  description: string;
  ctaText?: string;
  ctaHref?: string;
}

export function CTABanner({
  locale,
  dict,
  title,
  description,
  ctaText,
  ctaHref = "/contact",
}: CTABannerProps) {
  return (
    <section className="rounded-xl bg-primary/5 p-8 text-center">
      <h2 className="text-2xl font-bold tracking-tight">{title}</h2>
      <p className="mx-auto mt-2 max-w-xl text-muted-foreground">
        {description}
      </p>
      <Link
        href={`/${locale}${ctaHref}`}
        className="mt-6 inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-medium text-primary-foreground transition-colors hover:bg-primary/90"
      >
        {ctaText || dict.common.freeConsultation}
        <ArrowRight className="h-4 w-4" />
      </Link>
    </section>
  );
}
