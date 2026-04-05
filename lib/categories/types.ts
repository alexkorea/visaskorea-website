// Types for the category landing page system

export interface ServiceItem {
  id: string
  title: string
  description: string
  href: string
  icon?: string
  featured?: boolean
  tags?: string[]
}

export interface ServiceGroup {
  id: string
  title: string
  description?: string
  services: ServiceItem[]
}

export interface ProcessStep {
  step: number
  title: string
  description: string
  icon?: string
}

export interface FAQItem {
  question: string
  answer: string
}

export interface RelatedLink {
  title: string
  description?: string
  href: string
  type?: 'article' | 'guide' | 'case-study' | 'resource'
}

export interface CategoryCTA {
  title: string
  description: string
  primaryButton: {
    text: string
    href: string
  }
  secondaryButton?: {
    text: string
    href: string
  }
}

export interface CategoryData {
  id: string
  slug: string
  locale: string

  // Hero / Intro
  hero: {
    badge?: string
    title: string
    subtitle: string
    description: string
  }

  // Category Summary
  summary: {
    title: string
    content: string
    highlights?: string[]
  }

  // Service Groups
  serviceGroups: ServiceGroup[]

  // Process Overview
  process: {
    title: string
    subtitle?: string
    steps: ProcessStep[]
  }

  // FAQ Preview
  faq: {
    title: string
    subtitle?: string
    items: FAQItem[]
    viewAllHref?: string
  }

  // CTA Section
  cta: CategoryCTA

  // Related Content
  relatedContent: {
    title: string
    links: RelatedLink[]
  }

  // Breadcrumb
  breadcrumbs: {
    label: string
    href: string
  }[]

  // SEO
  seo: {
    title: string
    description: string
    keywords?: string[]
  }
}
