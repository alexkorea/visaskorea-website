import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import remarkGfm from 'remark-gfm'
import html from 'remark-html'

const postsDirectory = path.join(process.cwd(), 'content/blog')

export interface BlogPost {
  slug: string
  title: string
  date: string
  category: string
  excerpt: string
  image: string
  content: string
  locale: string
}

export function getPostSlugs(): string[] {
  if (!fs.existsSync(postsDirectory)) return []
  return fs
    .readdirSync(postsDirectory)
    .filter(f => f.endsWith('.md') && !f.match(/\.(en|zh|ja)\.md$/))
    .map(f => f.replace('.md', ''))
}

export function getPostBySlug(slug: string, locale: string = 'ko'): BlogPost {
  // Try locale-specific file first, then fall back to default
  const localePath = path.join(postsDirectory, `${slug}.${locale}.md`)
  const defaultPath = path.join(postsDirectory, `${slug}.md`)
  const fullPath = locale !== 'ko' && fs.existsSync(localePath) ? localePath : defaultPath

  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)
  const processedContent = remark().use(remarkGfm).use(html, { sanitize: false }).processSync(content)
  const contentHtml = processedContent.toString()
    .replace(/<table/g, '<div style="overflow-x:auto;-webkit-overflow-scrolling:touch;margin:1.5rem 0"><table')
    .replace(/<\/table>/g, '</table></div>')

  return {
    slug: data.slug || slug,
    title: data.title,
    date: typeof data.date === 'string' ? data.date : new Date(data.date).toISOString().slice(0, 10),
    category: data.category,
    excerpt: data.excerpt,
    image: data.image || '/slides/documents.jpg',
    content: contentHtml,
    locale,
  }
}

export function getAllPosts(locale: string = 'ko'): BlogPost[] {
  const slugs = getPostSlugs()
  return slugs
    .map(slug => {
      try { return getPostBySlug(slug, locale) }
      catch { return null }
    })
    .filter((p): p is BlogPost => p !== null)
    .sort((a, b) => (a.date > b.date ? -1 : 1))
}
