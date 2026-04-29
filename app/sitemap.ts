import type { MetadataRoute } from 'next'
import { caseStudies } from '@/lib/cases'
import { blogCategories } from '@/lib/blog'
import { getAllPosts } from '@/lib/contentful'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const blogPosts = await getAllPosts()
  const baseUrl = 'https://www.autoprocessx.com'
  const lastModified = new Date()

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/`, lastModified, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${baseUrl}/servicios/automatizaciones`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/servicios/aplicaciones-ia`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/servicios/ai-chatbot`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/casos-de-exito`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/tecnologia`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/sobre-nosotros`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/contacto`, lastModified, changeFrequency: 'yearly', priority: 0.7 },
    { url: `${baseUrl}/blog`, lastModified, changeFrequency: 'weekly', priority: 0.9 },
  ]

  const caseRoutes: MetadataRoute.Sitemap = caseStudies.map((c) => ({
    url: `${baseUrl}/casos-de-exito/${c.slug}`,
    lastModified,
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  const blogCategoryRoutes: MetadataRoute.Sitemap = blogCategories.map((c) => ({
    url: `${baseUrl}/blog/categoria/${c.slug}`,
    lastModified,
    changeFrequency: 'weekly',
    priority: 0.6,
  }))

  const blogPostRoutes: MetadataRoute.Sitemap = blogPosts.map((p) => ({
    url: `${baseUrl}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: 'monthly',
    priority: 0.6,
  }))

  return [...staticRoutes, ...caseRoutes, ...blogCategoryRoutes, ...blogPostRoutes]
}
