import type { Metadata } from "next"
import { notFound } from "next/navigation"
import ThemeRegistry from "@/components/mui/ThemeRegistry"
import { blogCategories, getCategory, type CategorySlug } from "@/lib/blog"
import BlogMui from "@/components/mui/BlogMui"
import { getPostsByCategory } from "@/lib/contentful"
import { SITE_URL } from "@/lib/seo"

export const revalidate = 300

interface Params {
    params: Promise<{ slug: string }>
}

export function generateStaticParams() {
    return blogCategories.map((c) => ({ slug: c.slug }))
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
    const { slug } = await params
    const cat = getCategory(slug as CategorySlug)
    if (!cat) return {}
    return {
        title: `${cat.name} · Blog`,
        description: cat.description,
        alternates: { canonical: `${SITE_URL}/blog/categoria/${cat.slug}` },
        openGraph: {
            images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "SEOscar, agencia de ecommerce en Barcelona" }],
            title: `${cat.name} · Blog SEOscar`,
            description: cat.description,
            type: "website",
            url: `${SITE_URL}/blog/categoria/${cat.slug}`,
        },
    }
}

export default async function CategoryPage({ params }: Params) {
    const { slug } = await params
    const cat = getCategory(slug as CategorySlug)
    if (!cat) notFound()
    const posts = await getPostsByCategory(cat.slug)

    // Mismo componente que /blog: una sola maqueta de diario para el blog
    // entero. Antes la categoría tenía su propio diseño, heredado y distinto.
    return (
        <ThemeRegistry>
            <BlogMui posts={posts} categories={blogCategories} activeSlug={cat.slug} />
        </ThemeRegistry>
    )
}
