import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { Clock, ArrowLeft, ArrowRight } from "lucide-react"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import FinalCTA from "@/components/FinalCTA"
import Breadcrumbs from "@/components/Breadcrumbs"
import JsonLd from "@/components/JsonLd"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { formatDate, getCategory } from "@/lib/blog"
import {
    debugFetchRaw,
    getAllPostSlugs,
    getPostWithBody,
    getPostsByCategory,
} from "@/lib/contentful"
import { ORG_ID, SITE_URL } from "@/lib/seo"
import RichText from "@/components/RichText"

export const revalidate = 300

interface Params {
    params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
    const slugs = await getAllPostSlugs()
    return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
    const { slug } = await params
    const result = await getPostWithBody(slug)
    if (!result) return {}
    const post = result.post
    return {
        title: post.title,
        description: post.excerpt,
        alternates: { canonical: `${SITE_URL}/blog/${post.slug}` },
        openGraph: {
            title: post.title,
            description: post.excerpt,
            type: "article",
            url: `${SITE_URL}/blog/${post.slug}`,
            publishedTime: post.date,
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

export default async function BlogPostPage({ params }: Params) {
    const { slug } = await params
    const result = await getPostWithBody(slug)
    if (!result) notFound()
    const { post, body } = result

    const cat = getCategory(post.category)!
    const related = (await getPostsByCategory(post.category))
        .filter((p) => p.slug !== post.slug)
        .slice(0, 3)

    // Debug — only in dev when body is missing, to identify which Contentful field has the content
    const showDebug = process.env.NODE_ENV !== "production" && !body
    const debugFields = showDebug ? await debugFetchRaw(slug) : null

    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "@id": `${SITE_URL}/blog/${post.slug}#article`,
        headline: post.title,
        description: post.excerpt,
        url: `${SITE_URL}/blog/${post.slug}`,
        datePublished: post.date,
        dateModified: post.date,
        articleSection: cat.name,
        keywords: post.tags.join(", "),
        author: { "@type": "Organization", name: post.author, "@id": ORG_ID },
        publisher: { "@id": ORG_ID },
        mainEntityOfPage: {
            "@type": "WebPage",
            "@id": `${SITE_URL}/blog/${post.slug}`,
        },
        inLanguage: "es-ES",
    }

    return (
        <main className="min-h-screen bg-[#05070F] text-white selection:bg-amber-400/30">
            <Navigation />
            <JsonLd data={articleSchema} />

            <article className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-500/[0.05] blur-[160px] rounded-full pointer-events-none" />

                <div className="container relative z-10 px-6 mx-auto max-w-3xl">
                    <Breadcrumbs
                        items={[
                            { label: "Blog", href: "/blog" },
                            { label: cat.name, href: `/blog/categoria/${cat.slug}` },
                            { label: post.title },
                        ]}
                        className="mb-10 md:mb-12"
                    />

                    {/* Category & meta */}
                    <div className="flex flex-wrap items-center gap-3 mb-6 text-[10px] font-black uppercase tracking-[0.3em] text-white/40">
                        <Link
                            href={`/blog/categoria/${cat.slug}`}
                            className={`inline-flex items-center gap-2 px-3 py-1 rounded-full backdrop-blur-md ${accentBg[cat.accent]} ${accentText[cat.accent]}`}
                        >
                            <span className={`h-1.5 w-1.5 rounded-full ${accentDot[cat.accent]} animate-pulse`} />
                            {cat.name}
                        </Link>
                        <time dateTime={post.date}>{formatDate(post.date)}</time>
                        <span className="flex items-center gap-1.5">
                            <Clock className="h-3 w-3" />
                            {post.readingMinutes} min
                        </span>
                    </div>

                    {/* Title */}
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-[-0.025em] leading-[1.05] text-white mb-6">
                        {post.title}
                    </h1>

                    {/* Excerpt */}
                    <p className="text-lg md:text-xl text-white/65 font-medium leading-relaxed mb-10 max-w-2xl">
                        {post.excerpt}
                    </p>

                    {/* Tags */}
                    {post.tags.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 mb-12">
                            {post.tags.map((tag) => (
                                <Badge
                                    key={tag}
                                    variant="outline"
                                    className="bg-white/[0.04] border-white/10 text-white/55 px-2.5 py-1 rounded text-[9px] font-black uppercase tracking-[0.2em]"
                                >
                                    {tag}
                                </Badge>
                            ))}
                        </div>
                    )}

                    {/* Cover image */}
                    {post.cover && (
                        <div className="mb-10 rounded-2xl md:rounded-3xl overflow-hidden border border-white/10 bg-[#0F1424]">
                            <Image
                                src={post.cover}
                                alt={post.title}
                                width={1600}
                                height={900}
                                className="w-full h-auto object-cover"
                                priority
                            />
                        </div>
                    )}

                    {/* Body — Contentful rich text or long text or seed HTML or placeholder */}
                    <div className="max-w-none">
                        {body && typeof body === "object" && Array.isArray((body as { content?: unknown[] }).content) ? (
                            // eslint-disable-next-line @typescript-eslint/no-explicit-any
                            <RichText document={body as any} />
                        ) : typeof body === "string" && body.trim() ? (
                            <div className="space-y-5">
                                {body.split(/\n{2,}/).map((para, i) => (
                                    <p
                                        key={i}
                                        className="text-white/70 text-base md:text-lg font-medium leading-relaxed whitespace-pre-line"
                                    >
                                        {para}
                                    </p>
                                ))}
                            </div>
                        ) : post.content ? (
                            <div
                                className="prose prose-invert max-w-none prose-p:text-white/70 prose-p:leading-relaxed prose-headings:text-white prose-headings:font-black prose-strong:text-white prose-a:text-amber-300 prose-a:no-underline hover:prose-a:underline"
                                dangerouslySetInnerHTML={{ __html: post.content }}
                            />
                        ) : (
                            <div className="rounded-2xl border border-amber-400/20 bg-amber-400/[0.04] p-6 md:p-8">
                                <p className="text-amber-200 text-sm font-black uppercase tracking-[0.3em] mb-3">
                                    Artículo en preparación
                                </p>
                                <p className="text-white/65 text-base font-medium leading-relaxed">
                                    El contenido completo se publica próximamente. Si quieres ser notificado cuando esté disponible o necesitas el material técnico antes, contáctanos.
                                </p>
                            </div>
                        )}

                        {/* DEV-ONLY debug panel — shows what Contentful actually returned */}
                        {debugFields && (
                            <div className="mt-8 rounded-2xl border border-red-500/30 bg-red-500/5 p-5 md:p-6">
                                <p className="text-red-300 text-[10px] font-black uppercase tracking-[0.3em] mb-3">
                                    🔧 Debug · Fields recibidos de Contentful (solo en dev)
                                </p>
                                <p className="text-white/60 text-xs mb-4">
                                    El cuerpo del artículo no se encontró en ninguno de los fields esperados. Estos son los fields que devuelve tu entry:
                                </p>
                                <pre className="text-[11px] text-white/80 bg-black/40 p-4 rounded-lg overflow-auto font-mono leading-relaxed">
{JSON.stringify(debugFields, null, 2)}
                                </pre>
                                <p className="text-white/60 text-xs mt-4">
                                    Busca el field que dice <code className="text-amber-300">[Rich Text Document]</code> o el string largo. Si su API ID no es uno de:{" "}
                                    <code className="text-amber-300">texto, cuerpo, contenido, body, content, descripcion</code> — dime cuál es y lo añado.
                                </p>
                            </div>
                        )}
                    </div>

                    {/* Footer nav */}
                    <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row gap-3 justify-between">
                        <Link href={`/blog/categoria/${cat.slug}`}>
                            <Button className="h-11 px-5 rounded-xl bg-white/[0.04] border border-white/15 hover:border-amber-400/40 hover:bg-amber-400/10 text-white text-xs font-black uppercase tracking-[0.2em] flex items-center gap-2">
                                <ArrowLeft className="h-3.5 w-3.5" />
                                Más en {cat.name}
                            </Button>
                        </Link>
                        <Link href="/blog">
                            <Button className="h-11 px-5 rounded-xl bg-amber-400/10 border border-amber-400/40 hover:bg-amber-400/20 text-amber-200 text-xs font-black uppercase tracking-[0.2em] flex items-center gap-2">
                                Todos los artículos
                                <ArrowRight className="h-3.5 w-3.5" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </article>

            {/* Related */}
            {related.length > 0 && (
                <section className="relative py-16 md:py-20 border-t border-white/5">
                    <div className="container px-6 mx-auto max-w-6xl">
                        <div className="text-center max-w-3xl mx-auto mb-10">
                            <div className={`inline-flex items-center gap-3 px-4 py-1.5 rounded-full backdrop-blur-md mb-5 ${accentBg[cat.accent]}`}>
                                <span className={`h-2 w-2 rounded-full ${accentDot[cat.accent]} animate-pulse`} />
                                <span className={`text-[10px] font-black uppercase tracking-[0.3em] ${accentText[cat.accent]}`}>
                                    Más en {cat.name}
                                </span>
                            </div>
                            <h2 className="text-2xl md:text-4xl font-black text-white leading-[1.05] tracking-tight">
                                Sigue leyendo.
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {related.map((p) => (
                                <Link key={p.slug} href={`/blog/${p.slug}`} className="group">
                                    <Card className="h-full bg-[#0F1424] border-white/10 hover:bg-[#11162A] hover:border-amber-400/30 rounded-2xl shadow-none transition-all">
                                        <CardHeader className="space-y-3 pt-5 px-5 pb-0">
                                            <div className="flex items-center gap-2 text-[9px] font-black uppercase tracking-[0.25em] text-white/40">
                                                <time dateTime={p.date}>{formatDate(p.date)}</time>
                                                <span className="h-1 w-1 rounded-full bg-white/20" />
                                                <span>{p.readingMinutes} min</span>
                                            </div>
                                            <CardTitle className="text-base font-black tracking-tight leading-snug text-white group-hover:text-amber-300 transition-colors">
                                                {p.title}
                                            </CardTitle>
                                        </CardHeader>
                                        <CardContent className="px-5 pb-5">
                                            <p className="text-white/55 text-xs font-medium leading-relaxed line-clamp-3">
                                                {p.excerpt}
                                            </p>
                                        </CardContent>
                                    </Card>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            <FinalCTA />
            <Footer />
        </main>
    )
}
