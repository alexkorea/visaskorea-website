/**
 * Content Type Definitions
 *
 * Shared types for all content entities: services, blog posts, Q&A, team, etc.
 */

import type { Locale } from "@/lib/i18n/config";

// =============================================================================
// BLOG TYPES
// =============================================================================

export interface BlogPost {
  id: string;
  slug: string;
  category: string;
  date: string;
  author: {
    name: string;
    role: string;
  };
  image?: string;
  title: Record<Locale, string>;
  excerpt: Record<Locale, string>;
  content: Record<Locale, string>;
}

// =============================================================================
// Q&A / FAQ TYPES
// =============================================================================

export interface QAItem {
  id: string;
  slug: string;
  category: string;
  question: Record<Locale, string>;
  answer: Record<Locale, string>;
}

// =============================================================================
// FAQ TYPES (for structured FAQ data)
// =============================================================================

export interface FaqItem {
  id: string;
  categorySlug: string;
  order: number;
  translations: Record<
    Locale,
    {
      question: string;
      answer: string;
    }
  >;
}

export interface FaqCategory {
  slug: string;
  translations: Record<Locale, { name: string }>;
}
