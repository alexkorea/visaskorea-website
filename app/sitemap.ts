import type { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/lib/seo/config";
import { i18nConfig } from "@/lib/i18n/config";
import { getAllVisaSlugs } from "@/lib/content/visas";
import { getAllBusinessSlugs } from "@/lib/content/business";
import { getPostSlugs } from "@/lib/blog";

export const revalidate = 60;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = SITE_CONFIG.domain;
  const locales = i18nConfig.locales;
  const now = new Date();

  const routes: MetadataRoute.Sitemap = [];

  // Static pages
  const staticPages = [
    { path: "", priority: 1.0, changeFrequency: "weekly" as const },
    { path: "/visa", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/business", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/blog", priority: 0.8, changeFrequency: "daily" as const },
    { path: "/qna", priority: 0.7, changeFrequency: "weekly" as const },
    { path: "/about", priority: 0.6, changeFrequency: "monthly" as const },
    { path: "/contact", priority: 0.8, changeFrequency: "monthly" as const },
  ];

  // Add static pages for each locale
  for (const locale of locales) {
    for (const page of staticPages) {
      routes.push({
        url: `${baseUrl}/${locale}${page.path}`,
        lastModified: now,
        changeFrequency: page.changeFrequency,
        priority: page.priority,
        alternates: {
          languages: Object.fromEntries(
            locales.map((l) => [l, `${baseUrl}/${l}${page.path}`])
          ),
        },
      });
    }
  }

  // Visa detail pages
  const visaSlugs = getAllVisaSlugs();
  for (const locale of locales) {
    for (const slug of visaSlugs) {
      routes.push({
        url: `${baseUrl}/${locale}/visa/${slug}`,
        lastModified: now,
        changeFrequency: "weekly",
        priority: 0.8,
        alternates: {
          languages: Object.fromEntries(
            locales.map((l) => [l, `${baseUrl}/${l}/visa/${slug}`])
          ),
        },
      });
    }
  }

  // Business detail pages
  const businessSlugs = getAllBusinessSlugs();
  for (const locale of locales) {
    for (const slug of businessSlugs) {
      routes.push({
        url: `${baseUrl}/${locale}/business/${slug}`,
        lastModified: now,
        changeFrequency: "weekly",
        priority: 0.8,
        alternates: {
          languages: Object.fromEntries(
            locales.map((l) => [l, `${baseUrl}/${l}/business/${slug}`])
          ),
        },
      });
    }
  }

  // Blog detail pages
  let blogSlugs: string[] = [];
  try { blogSlugs = await getPostSlugs(); } catch (e) { /* table may not exist yet */ }
  for (const locale of locales) {
    for (const slug of blogSlugs) {
      routes.push({
        url: `${baseUrl}/${locale}/blog/${slug}`,
        lastModified: now,
        changeFrequency: "weekly",
        priority: 0.7,
        alternates: {
          languages: Object.fromEntries(
            locales.map((l) => [l, `${baseUrl}/${l}/blog/${slug}`])
          ),
        },
      });
    }
  }

  return routes;
}
