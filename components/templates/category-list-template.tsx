import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SEOBreadcrumb } from "@/components/seo/seo-breadcrumb";
import { PageHero } from "@/components/layout/page-hero";
import type { Locale } from "@/lib/seo";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import { ArrowRight } from "lucide-react";

export interface CategoryItem {
  slug: string;
  title: string;
  description: string;
  badge?: string;
  icon?: React.ReactNode;
}

interface CategoryListTemplateProps {
  locale: Locale;
  dict: Dictionary;
  title: string;
  description: string;
  items: CategoryItem[];
  basePath: string; // e.g., "/visa" or "/business"
  heroImage?: string;
}

export function CategoryListTemplate({
  locale,
  dict,
  title,
  description,
  items,
  basePath,
  heroImage,
}: CategoryListTemplateProps) {
  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumb */}
      <div className="border-b bg-muted/30">
        <div className="mx-auto max-w-6xl px-4 py-3">
          <SEOBreadcrumb
            locale={locale}
            items={[{ name: title, href: basePath }]}
            homeLabel={dict.common.home}
          />
        </div>
      </div>

      {/* Hero Section */}
      {heroImage ? (
        <PageHero title={title} subtitle={description} image={heroImage} />
      ) : (
        <header className="border-b bg-gradient-to-b from-muted/50 to-background py-12 md:py-16">
          <div className="mx-auto max-w-6xl px-4 text-center">
            <h1 className="text-balance text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
              {title}
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg text-muted-foreground">
              {description}
            </p>
          </div>
        </header>
      )}

      {/* Items Grid */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item) => (
              <Link
                key={item.slug}
                href={`/${locale}${basePath}/${item.slug}`}
                className="group"
              >
                <Card className="h-full transition-all hover:border-primary/50 hover:shadow-md">
                  <CardHeader>
                    <div className="flex items-start justify-between gap-2">
                      <CardTitle className="flex items-center gap-2 text-lg group-hover:text-primary">
                        {item.icon}
                        {item.title}
                      </CardTitle>
                      {item.badge && (
                        <Badge variant="secondary" className="flex-shrink-0">
                          {item.badge}
                        </Badge>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4 line-clamp-2 text-sm text-muted-foreground">
                      {item.description}
                    </p>
                    <span className="inline-flex items-center gap-1 text-sm font-medium text-primary">
                      {dict.common.learnMore}
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
