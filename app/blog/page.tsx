import type { Metadata } from "next"
import JsonLd from "@/components/JsonLd"
import ThemeRegistry from "@/components/mui/ThemeRegistry"
import BlogMui from "@/components/mui/BlogMui"
import { blogCategories } from "@/lib/blog"
import { getAllPosts } from "@/lib/contentful"
import { ORG_ID, SITE_URL } from "@/lib/seo"

export const revalidate = 300

// TODO Oscar: pieza destacada editorial (tu mejor artículo técnico, no el más reciente).
const FEATURED_SLUG = "rag-en-produccion-arquitectura-real"

export const metadata: Metadata = {
    title: { absolute: "Blog de IA para ecommerce: SEO, GEO y n8n | SEOscar" },
    description:
        "Análisis técnico de ecommerce: SEO y GEO para los motores generativos, automatización de procesos, arquitecturas RAG y agentes de ventas reales en producción.",
    alternates: { canonical: `${SITE_URL}/blog` },
    openGraph: {
        title: "Blog de IA para ecommerce: SEO, GEO y n8n | SEOscar",
        description: "Análisis técnico de ecommerce: SEO y GEO para los motores generativos, automatización de procesos, arquitecturas RAG y agentes de ventas reales en producción.",
        type: "website",
        url: `${SITE_URL}/blog`,
    },
}

export default async function BlogIndex() {
    const posts = await getAllPosts()

    const blogSchema = {
        "@context": "https://schema.org",
        "@type": "Blog",
        "@id": `${SITE_URL}/blog#blog`,
        name: "Blog SEOscar",
        url: `${SITE_URL}/blog`,
        description: "Análisis técnico sobre IA, automatización, plataformas RAG, chatbots y GEO.",
        publisher: { "@id": ORG_ID },
        blogPost: posts.map((p) => ({
            "@type": "BlogPosting",
            headline: p.title,
            url: `${SITE_URL}/blog/${p.slug}`,
            datePublished: p.date,
            articleSection: p.category,
            author: { "@type": "Organization", name: p.author },
        })),
    }

    return (
        <>
            <JsonLd data={blogSchema} />
            <ThemeRegistry>
                <BlogMui posts={posts} categories={blogCategories} featuredSlug={FEATURED_SLUG} />
            </ThemeRegistry>
        </>
    )
}
