import type { MetadataRoute } from 'next'
import { allCaseSlugs } from '@/lib/casesEcom'
import { blogCategories } from '@/lib/blog'
import { getAllPosts } from '@/lib/contentful'

// Sin esto el sitemap se genera solo en build y los posts nuevos de Contentful
// no entran hasta el siguiente deploy. Con revalidate se refresca como el blog.
export const revalidate = 300

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const blogPosts = await getAllPosts()
  const baseUrl = 'https://www.seoscar.com'
  const lastModified = new Date()

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/`, lastModified, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${baseUrl}/diagnostico`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/servicios/automatizaciones`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/servicios/a-medida`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/servicios/crecimiento-ecommerce`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/servicios/agente-ventas-ia`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/servicios/auditoria-seo-geo`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/agencia-magento`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/agencia-shopify`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/agencia-woocommerce`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/casos-de-exito`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/metodo`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/tecnologia`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/sobre-nosotros`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/seo-catalunya`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/contacto`, lastModified, changeFrequency: 'yearly', priority: 0.7 },
    { url: `${baseUrl}/blog`, lastModified, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/aviso-legal`, lastModified, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/privacidad`, lastModified, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/cookies`, lastModified, changeFrequency: 'yearly', priority: 0.3 },
  ]

  const caseRoutes: MetadataRoute.Sitemap = allCaseSlugs().map((slug) => ({
    url: `${baseUrl}/casos-de-exito/${slug}`,
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
