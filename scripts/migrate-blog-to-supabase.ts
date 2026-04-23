// content/blog/*.md 파일을 읽어 Supabase visaskorea_blog_posts 테이블로 이전한다.
// 사용: npx tsx scripts/migrate-blog-to-supabase.ts [--dry]
//
// 파일 규칙: <slug>.md (ko), <slug>.en.md, <slug>.zh.md, <slug>.ja.md
// frontmatter: title, date, category, excerpt, image, slug

import { config as loadEnv } from 'dotenv'
loadEnv({ path: '.env.local' })
loadEnv()

import fs from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'
import { remark } from 'remark'
import remarkGfm from 'remark-gfm'
import html from 'remark-html'
import { createClient } from '@supabase/supabase-js'

type Locale = 'ko' | 'en' | 'zh' | 'ja'
const LOCALES: Locale[] = ['ko', 'en', 'zh', 'ja']

const DRY = process.argv.includes('--dry')
const BLOG_DIR = path.join(process.cwd(), 'content', 'blog')
const TABLE = 'visaskorea_blog_posts'

function mdToHtml(md: string): string {
  return remark().use(remarkGfm).use(html, { sanitize: false }).processSync(md).toString()
}

function readLocalized(slug: string, locale: Locale): matter.GrayMatterFile<string> | null {
  const filename = locale === 'ko' ? `${slug}.md` : `${slug}.${locale}.md`
  const p = path.join(BLOG_DIR, filename)
  if (!fs.existsSync(p)) return null
  return matter(fs.readFileSync(p, 'utf8'))
}

async function main() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const key = process.env.SUPABASE_SECRET_KEY
  if (!url || !key) throw new Error('Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SECRET_KEY')

  const supabase = createClient(url, key, {
    auth: { persistSession: false, autoRefreshToken: false },
  })

  if (!fs.existsSync(BLOG_DIR)) throw new Error(`blog dir not found: ${BLOG_DIR}`)

  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith('.md'))
  const slugs = new Set<string>()
  for (const f of files) {
    const m = f.match(/^(.+?)(?:\.(?:en|zh|ja))?\.md$/)
    if (m) slugs.add(m[1])
  }

  console.log(`found ${slugs.size} unique slugs across ${files.length} files`)

  const rows: Array<{
    slug: string
    locale: Locale
    title: string
    category: string | null
    excerpt: string | null
    image: string | null
    content: string
    post_date: string
    published: boolean
  }> = []

  for (const slug of slugs) {
    // Read the base (ko) file for fallback metadata
    const base = readLocalized(slug, 'ko')
    const baseDate = base?.data.date
      ? (typeof base.data.date === 'string'
          ? base.data.date.slice(0, 10)
          : new Date(base.data.date as unknown as string).toISOString().slice(0, 10))
      : new Date().toISOString().slice(0, 10)

    for (const locale of LOCALES) {
      const file = readLocalized(slug, locale)
      if (!file) continue

      const d = file.data.date
        ? (typeof file.data.date === 'string'
            ? file.data.date.slice(0, 10)
            : new Date(file.data.date as unknown as string).toISOString().slice(0, 10))
        : baseDate

      rows.push({
        slug,
        locale,
        title: String(file.data.title || slug),
        category: file.data.category ? String(file.data.category) : null,
        excerpt: file.data.excerpt ? String(file.data.excerpt) : null,
        image: file.data.image ? String(file.data.image) : '/slides/documents.jpg',
        content: mdToHtml(file.content),
        post_date: d,
        published: true,
      })
    }
  }

  console.log(`prepared ${rows.length} rows (expected ~${slugs.size * 4})`)

  if (DRY) {
    console.log('DRY run — not writing to DB')
    console.log('sample row:', JSON.stringify(
      { ...rows[0], content: (rows[0]?.content || '').slice(0, 120) + '...' },
      null,
      2
    ))
    return
  }

  // Batch upsert in chunks of 50
  let upserted = 0
  for (let i = 0; i < rows.length; i += 50) {
    const chunk = rows.slice(i, i + 50)
    const { error } = await supabase
      .from(TABLE)
      .upsert(chunk, { onConflict: 'slug,locale' })
    if (error) {
      console.error('upsert error:', error.message)
      throw error
    }
    upserted += chunk.length
    process.stdout.write(`\r  upserted ${upserted}/${rows.length}`)
  }
  console.log('\nDONE')
}

main().catch((e) => {
  console.error('FAIL:', e?.message || e)
  process.exit(1)
})
