import type { CategoryData } from './types'
import { investmentCategoryKo } from './data/investment'
import { employmentCategoryKo } from './data/employment'
import { residenceCategoryKo } from './data/residence'
import { criminalCategoryKo } from './data/criminal'

export * from './types'

// Category data registry by locale and slug
const categoryRegistry: Record<string, Record<string, CategoryData>> = {
  ko: {
    investment: investmentCategoryKo,
    employment: employmentCategoryKo,
    residence: residenceCategoryKo,
    criminal: criminalCategoryKo,
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
  employmentCategoryKo,
  residenceCategoryKo,
  criminalCategoryKo,
}
