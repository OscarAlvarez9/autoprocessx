import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import ThemeRegistry from "@/components/mui/ThemeRegistry"
import { SiteHeader, SiteFooter, DiagnosticoCTA } from "@/components/mui/shared"
import Breadcrumbs from "@/components/Breadcrumbs"
import BlogCard from "@/components/BlogCard"
import { blogCategories, getCategory, type CategorySlug } from "@/lib/blog"
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

const accentText: Record<string, string> = {
    pink: "text-[#013E37]",
    emerald: "text-[#013E37]",
    orange: "text-[#013E37]",
    red: "text-[#013E37]",
    blue: "text-[#013E37]",
}

const accentBg: Record<string, string> = {
    pink: "bg-[#013E37]/10 border-[#013E37]/25",
    emerald: "bg-[#013E37]/10 border-[#013E37]/25",
    orange: "bg-[#013E37]/10 border-[#013E37]/25",
    red: "bg-[#013E37]/10 border-[#013E37]/25",
    blue: "bg-[#013E37]/10 border-[#013E37]/25",
}

const accentDot: Record<string, string> = {
    pink: "bg-[#013E37]",
    emerald: "bg-[#013E37]",
    orange: "bg-[#013E37]",
    red: "bg-[#013E37]",
    blue: "bg-[#013E37]",
}

export default async function CategoryPage({ params }: Params) {
    const { slug } = await params
    const cat = getCategory(slug as CategorySlug)
    if (!cat) notFound()
    const posts = await getPostsByCategory(cat.slug)
    // Subtemas reales = tags distintos de los posts de la vertical (gateway mini-landing)
    const subtopics = Array.from(new Set(posts.flatMap((p) => p.tags ?? []))).slice(0, 10)

    return (
        <ThemeRegistry>
        <main className="min-h-screen bg-[#FAF8F0] text-[#14201D]">
            <SiteHeader />

            {/* Hero */}
            <section className="relative pt-10 pb-12 md:pt-14 md:pb-20 overflow-hidden">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#013E37]/[0.07] blur-[160px] rounded-full pointer-events-none" />

                <div className="container relative z-10 px-6 mx-auto max-w-6xl">
                    <Breadcrumbs
                        items={[
                            { label: "Blog", href: "/blog" },
                            { label: cat.name },
                        ]}
                        className="mb-10 md:mb-14"
                    />

                    <div className="text-center max-w-3xl mx-auto">
                        <div className={`inline-flex items-center gap-3 px-4 py-1.5 rounded-full backdrop-blur-md mb-7 ${accentBg[cat.accent]}`}>
                            <span className={`h-2 w-2 rounded-full ${accentDot[cat.accent]} animate-pulse`} />
                            <span className={`text-[10px] font-black uppercase tracking-[0.3em] ${accentText[cat.accent]}`}>
                                Categoría · {cat.shortName}
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-[family-name:var(--font-fraunces)] font-semibold text-[#14201D] tracking-[-0.025em] leading-[1] mb-6">
                            <span
                                className="relative inline-block bg-gradient-to-br from-[#013E37] via-[#013E37] to-[#013E37] bg-clip-text text-transparent"
                                style={{ filter: "drop-shadow(0 0 24px rgba(1,62,55,0.16))" }}
                            >
                                {cat.name}
                            </span>
                        </h1>

                        <p className="text-base md:text-lg text-[#26332F] font-medium leading-relaxed max-w-2xl mx-auto">
                            {cat.description}
                        </p>
                    </div>
                </div>
            </section>

            {/* Tabs */}
            <section className="relative pb-10 md:pb-14">
                <div className="container px-6 mx-auto max-w-6xl">
                    <div className="flex flex-wrap justify-center gap-2 md:gap-3">
                        <Link
                            href="/blog"
                            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#F1EEE1] border border-[#E1DCCB] hover:bg-[#F1EEE1] text-[#26332F] hover:text-[#14201D] text-[10px] font-black uppercase tracking-[0.25em] transition-all"
                        >
                            ← Todos
                        </Link>
                        {blogCategories.map((c) => {
                            const active = c.slug === cat.slug
                            return (
                                <Link
                                    key={c.slug}
                                    href={`/blog/categoria/${c.slug}`}
                                    className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.25em] transition-all ${
                                        active
                                            ? `${accentBg[c.accent]} ${accentText[c.accent]}`
                                            : "bg-[#F1EEE1] border border-[#E1DCCB] text-[#26332F] hover:bg-[#F1EEE1]"
                                    }`}
                                >
                                    <span className={`h-1.5 w-1.5 rounded-full ${accentDot[c.accent]} ${active ? "animate-pulse" : ""}`} />
                                    {c.name}
                                </Link>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* Subtemas (gateway) */}
            {subtopics.length > 0 && (
                <section className="relative pb-10 md:pb-12">
                    <div className="container px-6 mx-auto max-w-6xl">
                        <div className="rounded-2xl border border-[#E1DCCB] bg-[#FEFDF9] p-5 md:p-6">
                            <div className="flex items-center gap-2 mb-4">
                                <span className={`h-1.5 w-1.5 rounded-full ${accentDot[cat.accent]}`} aria-hidden />
                                <span className={`text-[11px] font-mono font-medium uppercase tracking-wide ${accentText[cat.accent]}`}>Qué cubre esta vertical</span>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {subtopics.map((t) => (
                                    <span key={t} className="inline-flex items-center rounded-lg bg-[#F1EEE1] border border-[#E1DCCB] px-3 py-1.5 text-xs font-mono text-[#26332F]">
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* Posts */}
            <section className="relative pb-20 md:pb-28">
                <div className="container px-6 mx-auto max-w-6xl">
                    {posts.length === 0 ? (
                        <div className="text-center py-20">
                            <p className="text-[#5E6B63] text-sm font-medium">
                                Aún no hay artículos publicados en esta categoría.
                            </p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 auto-rows-fr">
                            {posts.map((post, i) => (
                                <BlogCard key={post.slug} post={post} index={i} />
                            ))}
                        </div>
                    )}
                </div>
            </section>

            <DiagnosticoCTA />
            <SiteFooter />
        </main>
        </ThemeRegistry>
    )
}
