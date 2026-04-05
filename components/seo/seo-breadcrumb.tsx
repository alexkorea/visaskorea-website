"use client";

import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { JsonLd } from "./json-ld";
import { generateBreadcrumbSchema, type Locale } from "@/lib/seo";

export interface BreadcrumbItem {
  name: string;
  href: string;
}

interface SEOBreadcrumbProps {
  locale: Locale;
  items: BreadcrumbItem[];
  homeLabel?: string;
  className?: string;
}

/**
 * SEO-optimized breadcrumb component with structured data
 */
export function SEOBreadcrumb({
  locale,
  items,
  homeLabel = "Home",
  className = "",
}: SEOBreadcrumbProps) {
  // Prepare items with home
  const allItems: BreadcrumbItem[] = [
    { name: homeLabel, href: `/${locale}` },
    ...items.map((item) => ({
      ...item,
      href: item.href.startsWith(`/${locale}`)
        ? item.href
        : `/${locale}${item.href}`,
    })),
  ];

  // Generate schema data
  const schemaItems = allItems.map((item) => ({
    name: item.name,
    url: item.href,
  }));

  return (
    <>
      {/* Structured Data */}
      <JsonLd data={generateBreadcrumbSchema(locale, schemaItems)} />

      {/* Visual Breadcrumb */}
      <nav
        aria-label="Breadcrumb"
        className={`flex items-center text-sm text-muted-foreground ${className}`}
      >
        <ol className="flex items-center gap-1.5">
          {allItems.map((item, index) => {
            const isLast = index === allItems.length - 1;
            const isFirst = index === 0;

            return (
              <li key={item.href} className="flex items-center gap-1.5">
                {isLast ? (
                  <span
                    className="font-medium text-foreground"
                    aria-current="page"
                  >
                    {isFirst ? (
                      <span className="flex items-center gap-1">
                        <Home className="h-4 w-4" aria-hidden="true" />
                        <span className="sr-only">{item.name}</span>
                      </span>
                    ) : (
                      item.name
                    )}
                  </span>
                ) : (
                  <>
                    <Link
                      href={item.href}
                      className="transition-colors hover:text-foreground"
                    >
                      {isFirst ? (
                        <span className="flex items-center gap-1">
                          <Home className="h-4 w-4" aria-hidden="true" />
                          <span className="sr-only">{item.name}</span>
                        </span>
                      ) : (
                        item.name
                      )}
                    </Link>
                    <ChevronRight
                      className="h-4 w-4 flex-shrink-0"
                      aria-hidden="true"
                    />
                  </>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
