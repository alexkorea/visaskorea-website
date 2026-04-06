import type { CategoryData } from './types'
import { investmentCategoryKo, investmentCategoryEn, investmentCategoryZh, investmentCategoryJa } from './data/investment'
import { employmentCategoryKo, employmentCategoryEn, employmentCategoryZh, employmentCategoryJa } from './data/employment'
import { residenceCategoryKo, residenceCategoryEn, residenceCategoryZh, residenceCategoryJa } from './data/residence'
import { criminalCategoryKo, criminalCategoryEn, criminalCategoryZh, criminalCategoryJa } from './data/criminal'

export * from './types'

// Category data registry by locale and slug
const categoryRegistry: Record<string, Record<string, CategoryData>> = {
  ko: {
    investment: investmentCategoryKo,
    employment: employmentCategoryKo,
    residence: residenceCategoryKo,
    criminal: criminalCategoryKo,
  },
  en: {
    investment: investmentCategoryEn,
    employment: employmentCategoryEn,
    residence: residenceCategoryEn,
    criminal: criminalCategoryEn,
  },
  zh: {
    investment: investmentCategoryZh,
    employment: employmentCategoryZh,
    residence: residenceCategoryZh,
    criminal: criminalCategoryZh,
  },
  ja: {
    investment: investmentCategoryJa,
    employment: employmentCategoryJa,
    residence: residenceCategoryJa,
    criminal: criminalCategoryJa,
  },
}

/**
 * Get category data by locale and slug
 */
export function getCategoryData(locale: string, slug: string): CategoryData | null {
  return categoryRegistry[locale]?.[slug] ?? null
}

/**
 * Get all category slugs for a locale
 */
export function getCategorySlugs(locale: string): string[] {
  return Object.keys(categoryRegistry[locale] ?? {})
}

/**
 * Get all categories for a locale
 */
export function getAllCategories(locale: string): CategoryData[] {
  const localeData = categoryRegistry[locale]
  if (!localeData) return []
  return Object.values(localeData)
}

/**
 * Check if a category exists
 */
export function categoryExists(locale: string, slug: string): boolean {
  return !!categoryRegistry[locale]?.[slug]
}

export {
  investmentCategoryKo,
  investmentCategoryEn,
  investmentCategoryZh,
  investmentCategoryJa,
  employmentCategoryKo,
  employmentCategoryEn,
  employmentCategoryZh,
  employmentCategoryJa,
  residenceCategoryKo,
  residenceCategoryEn,
  residenceCategoryZh,
  residenceCategoryJa,
  criminalCategoryKo,
  criminalCategoryEn,
  criminalCategoryZh,
  criminalCategoryJa,
}
