import type { MetadataRoute } from 'next'
import { SITE } from '@/lib/constants'
import { blogPosts } from '@/data/blogPosts'

const lastModified = new Date('2026-05-29')

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${SITE.url}/`, lastModified, changeFrequency: 'weekly', priority: 1 },
    { url: `${SITE.url}/hakkimizda`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE.url}/egitimler`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE.url}/atlarimiz`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE.url}/tesisimiz`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE.url}/galeri`, lastModified, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${SITE.url}/blog`, lastModified, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${SITE.url}/iletisim`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
  ]

  const blogRoutes: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${SITE.url}/blog/${post.slug}`,
    lastModified: new Date(post.publishedAt),
    changeFrequency: 'yearly',
    priority: 0.5,
  }))

  return [...staticRoutes, ...blogRoutes]
}
