import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import FinalCTA from "@/components/FinalCTA"
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
            title: `${cat.name} · Blog AutoProcessX`,
            description: cat.description,
            type: "website",
            url: `${SITE_URL}/blog/categoria/${cat.slug}`,
        },
    }
}

const accentText: Record<string, string> = {
    pink: "text-pink-300",
    emerald: "text-emerald-300",
    orange: "text-orange-300",
    red: "text-red-300",
    blue: "text-blue-300",
}

const accentBg: Record<string, string> = {
    pink: "bg-pink-400/10 border-pink-400/30",
    emerald: "bg-emerald-400/10 border-emerald-400/30",
    orange: "bg-orange-400/10 border-orange-400/30",
    red: "bg-red-400/10 border-red-400/30",
    blue: "bg-blue-400/10 border-blue-400/30",
}

const accentDot: Record<string, string> = {
    pink: "bg-pink-400",
    emerald: "bg-emerald-400",
    orange: "bg-orange-400",
    red: "bg-red-400",
    blue: "bg-blue-400",
}

export default async function CategoryPage({ params }: Params) {
    const { slug } = await params
    const cat = getCategory(slug as CategorySlug)
    if (!cat) notFound()
    const posts = await getPostsByCategory(cat.slug)

    return (
        <main className="min-h-screen bg-[#05070F] text-white selection:bg-amber-400/30">
            <Navigation />

            {/* Hero */}
            <section className="relative pt-28 pb-12 md:pt-36 md:pb-20 overflow-hidden">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-500/[0.07] blur-[160px] rounded-full pointer-events-none" />

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

                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-[-0.025em] leading-[1] mb-6">
                            <span
                                className="relative inline-block bg-gradient-to-br from-amber-200 via-amber-300 to-amber-500 bg-clip-text text-transparent"
                                style={{ filter: "drop-shadow(0 0 24px rgba(251,191,36,0.35))" }}
                            >
                                {cat.name}
                            </span>
                        </h1>

                        <p className="text-base md:text-lg text-white/65 font-medium leading-relaxed max-w-2xl mx-auto">
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
                            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-white/[0.04] border border-white/10 hover:bg-white/[0.06] text-white/70 hover:text-white text-[10px] font-black uppercase tracking-[0.25em] transition-all"
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
                                            : "bg-white/[0.04] border border-white/10 text-white/70 hover:bg-white/[0.06]"
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

            {/* Posts */}
            <section className="relative pb-20 md:pb-28">
                <div className="container px-6 mx-auto max-w-6xl">
                    {posts.length === 0 ? (
                        <div className="text-center py-20">
                            <p className="text-white/50 text-sm font-medium">
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

            <FinalCTA />
            <Footer />
        </main>
    )
}
