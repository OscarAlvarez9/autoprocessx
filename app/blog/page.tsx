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
    title: { absolute: "Blog de SEO, GEO y CRO para tiendas online | SEOscar" },
    description:
        "SEO y GEO para tiendas online: cómo posicionar en Google y ChatGPT, CRO y automatización, explicado por quien lo implementa. Casos y datos reales.",
    alternates: { canonical: `${SITE_URL}/blog` },
    openGraph: {
            images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "SEOscar, agencia de ecommerce en Barcelona" }],
        title: "Blog de SEO, GEO y CRO para tiendas online | SEOscar",
        description: "SEO y GEO para tiendas online: cómo posicionar en Google y ChatGPT, CRO y automatización, explicado por quien lo implementa. Casos y datos reales.",
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
        description: "SEO para ecommerce, GEO, automatizaciones, agentes de IA e IA para empresas, con casos reales.",
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
