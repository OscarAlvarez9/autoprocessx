import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import FinalCTA from "@/components/FinalCTA"
import BlogHero from "@/components/BlogHero"
import BlogCard from "@/components/BlogCard"
import JsonLd from "@/components/JsonLd"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { blogCategories } from "@/lib/blog"
import { getAllPosts } from "@/lib/contentful"
import { ORG_ID, SITE_URL } from "@/lib/seo"

export const revalidate = 300

export const metadata: Metadata = {
    title: "Blog · IA, Automatización y GEO",
    description:
        "Análisis técnico sobre inteligencia artificial, automatización con n8n, plataformas IA empresariales, chatbots y Generative Engine Optimization (GEO). Casos reales, arquitecturas y stack en producción.",
    alternates: {
        canonical: `${SITE_URL}/blog`,
    },
    openGraph: {
        title: "Blog · IA, Automatización y GEO | AutoProcessX",
        description:
            "Análisis técnico sobre IA, automatización, plataformas RAG y posicionamiento en motores generativos.",
        type: "website",
        url: `${SITE_URL}/blog`,
    },
}

const categoryAccentText: Record<string, string> = {
    pink: "text-pink-300 border-pink-400/40",
    emerald: "text-emerald-300 border-emerald-400/40",
    orange: "text-orange-300 border-orange-400/40",
    red: "text-red-300 border-red-400/40",
    blue: "text-blue-300 border-blue-400/40",
}

const categoryAccentDot: Record<string, string> = {
    pink: "bg-pink-400",
    emerald: "bg-emerald-400",
    orange: "bg-orange-400",
    red: "bg-red-400",
    blue: "bg-blue-400",
}

export default async function BlogIndex() {
    const posts = await getAllPosts()
    const [featured, ...rest] = posts

    const blogSchema = {
        "@context": "https://schema.org",
        "@type": "Blog",
        "@id": `${SITE_URL}/blog#blog`,
        name: "Blog AutoProcessX",
        url: `${SITE_URL}/blog`,
        description:
            "Análisis técnico sobre IA, automatización, plataformas RAG, chatbots y GEO.",
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
        <main className="min-h-screen bg-[#05070F] text-white selection:bg-amber-400/30">
            <Navigation />
            <JsonLd data={blogSchema} />

            <BlogHero posts={posts} />

            {/* Categories explainer */}
            <section className="relative pb-12 md:pb-16">
                <div className="container px-6 mx-auto max-w-6xl">
                    <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12">
                        <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-[10px] font-black uppercase tracking-[0.3em] mb-6">
                            Knowledge Tracks
                        </div>
                        <h2 className="text-3xl md:text-5xl font-black text-white mb-5 leading-[1.05] tracking-tight">
                            Cinco <span className="text-accent">verticales</span> de contenido.
                        </h2>
                        <p className="text-white/65 text-base font-medium leading-relaxed max-w-2xl mx-auto">
                            Cada categoría tiene su propio criterio editorial. Sin posts genéricos.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3 md:gap-4">
                        {blogCategories.map((cat) => (
                            <Card
                                key={cat.slug}
                                className={`h-full bg-[#0F1424] border-white/10 rounded-2xl shadow-none ${categoryAccentText[cat.accent]}`}
                            >
                                <CardContent className="p-5">
                                    <Badge
                                        variant="outline"
                                        className={`bg-transparent border-white/10 mb-3 gap-2 px-2 py-0.5 text-[9px] font-black uppercase tracking-[0.3em] ${categoryAccentText[cat.accent]}`}
                                    >
                                        <span className={`h-1.5 w-1.5 rounded-full ${categoryAccentDot[cat.accent]} animate-pulse`} />
                                        {cat.shortName}
                                    </Badge>
                                    <h3 className="text-base font-black tracking-tight mb-2 text-white">
                                        {cat.name}
                                    </h3>
                                    <p className="text-white/50 text-xs font-medium leading-snug">
                                        {cat.description}
                                    </p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    {/* Lateral nav — scrollable horizontal pills */}
                    <div className="mt-10 md:mt-12">
                        <div className="flex items-center gap-3 mb-4 px-1">
                            <span className="text-[10px] font-black uppercase tracking-[0.35em] text-white/40">
                                Navegar por sección
                            </span>
                            <div className="flex-1 h-[1px] bg-gradient-to-r from-white/10 to-transparent" />
                        </div>

                        <div className="relative -mx-6 px-6 md:mx-0 md:px-0">
                            <div className="flex items-center gap-2 md:gap-3 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden snap-x snap-mandatory">
                                <Link
                                    href="/blog"
                                    className="snap-start shrink-0 inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-amber-400/10 border border-amber-400/40 text-amber-200 hover:bg-amber-400/20 text-[10px] font-black uppercase tracking-[0.25em] transition-all"
                                >
                                    <span className="h-1.5 w-1.5 rounded-full bg-amber-400 animate-pulse" />
                                    Todos
                                </Link>
                                {blogCategories.map((cat) => (
                                    <Link
                                        key={cat.slug}
                                        href={`/blog/categoria/${cat.slug}`}
                                        className={`snap-start shrink-0 inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/[0.04] border border-white/10 hover:bg-white/[0.08] text-[10px] font-black uppercase tracking-[0.25em] transition-all ${categoryAccentText[cat.accent]}`}
                                    >
                                        <span className={`h-1.5 w-1.5 rounded-full ${categoryAccentDot[cat.accent]}`} />
                                        {cat.name}
                                        <ArrowRight className="h-3 w-3 opacity-60" />
                                    </Link>
                                ))}
                            </div>
                            {/* Edge fades for scroll affordance */}
                            <div className="pointer-events-none absolute left-0 top-0 bottom-2 w-6 md:w-8 bg-gradient-to-r from-[#05070F] to-transparent" />
                            <div className="pointer-events-none absolute right-0 top-0 bottom-2 w-6 md:w-8 bg-gradient-to-l from-[#05070F] to-transparent" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Posts grid */}
            <section className="relative pb-20 md:pb-28 border-t border-white/5 pt-16 md:pt-20">
                <div className="container px-6 mx-auto max-w-6xl">
                    <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12">
                        <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-[10px] font-black uppercase tracking-[0.3em] mb-6">
                            Latest Articles
                        </div>
                        <h2 className="text-3xl md:text-5xl font-black text-white mb-3 leading-[1.05] tracking-tight">
                            Últimos <span className="text-accent">artículos</span>.
                        </h2>
                    </div>

                    {posts.length === 0 ? (
                        <div className="text-center py-20">
                            <p className="text-white/50 text-sm font-medium">
                                Próximamente. Estamos escribiendo los primeros artículos.
                            </p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 auto-rows-fr">
                            {featured && <BlogCard post={featured} index={0} featured />}
                            {rest.map((post, i) => (
                                <BlogCard key={post.slug} post={post} index={i + 1} />
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
