"use client"

import { Sparkles, Search as SearchIcon } from "lucide-react"
import Link from "next/link"
import Breadcrumbs from "@/components/Breadcrumbs"
import { blogCategories, formatDate, type BlogPost } from "@/lib/blog"

const accentDot: Record<string, string> = {
    pink: "bg-pink-500",
    emerald: "bg-emerald-500",
    orange: "bg-orange-500",
    red: "bg-red-500",
    blue: "bg-blue-500",
}
const accentText: Record<string, string> = {
    pink: "text-pink-600",
    emerald: "text-emerald-600",
    orange: "text-orange-600",
    red: "text-red-600",
    blue: "text-blue-600",
}

export default function BlogHero({ posts, query = "", activeCat }: { posts: BlogPost[]; query?: string; activeCat?: string }) {
    const total = posts.length
    const latest = posts[0]

    return (
        <section className="relative pt-32 pb-12 md:pt-40 md:pb-16 border-b border-[#E4E4E7] overflow-hidden">
            {/* un único glow champagne sutil, sin fuegos artificiales */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[420px] bg-[#B4975A]/[0.06] blur-[160px] rounded-full pointer-events-none" aria-hidden />

            <div className="container relative z-10 px-6 mx-auto max-w-4xl">
                <Breadcrumbs items={[{ label: "Blog" }]} className="mb-8 md:mb-10" />

                <div className="max-w-3xl">
                    {/* Eyebrow */}
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#B4975A]/30 bg-white text-[11px] font-mono font-medium uppercase tracking-wide text-[#09090B] mb-6">
                        <Sparkles className="h-3 w-3 text-[#B4975A]" aria-hidden />
                        Apuntes de ingeniería · IA · GEO
                    </span>

                    {/* Headline — limpio, sin sombras de tema oscuro */}
                    <h1 className="text-[clamp(2.25rem,6vw,4rem)] font-black tracking-tighter leading-[1.02] text-balance mb-5">
                        Sistemas de IA reales, <span className="text-[#B4975A]">no noticias genéricas.</span>
                    </h1>

                    <p className="text-zinc-600 text-base md:text-lg font-normal leading-relaxed max-w-2xl mb-8">
                        Arquitecturas, código y métricas de lo que desplegamos en producción: automatización con n8n, plataformas RAG, chatbots y GEO. Para equipos técnicos que quieren el cómo, no el hype.
                    </p>

                    {/* Buscador (server-side: GET → /blog?q=) */}
                    <form action="/blog" method="get" role="search" className="max-w-xl flex items-center gap-2 rounded-2xl border border-[#E4E4E7] bg-white p-1.5 shadow-sm focus-within:border-[#B4975A]/40 focus-within:ring-2 focus-within:ring-[#B4975A]/20 transition-all">
                        <label htmlFor="blog-q" className="sr-only">Buscar en el blog</label>
                        <span className="pl-3 text-zinc-400" aria-hidden><SearchIcon className="h-4 w-4" /></span>
                        <input
                            id="blog-q"
                            type="search"
                            name="q"
                            defaultValue={query}
                            enterKeyHint="search"
                            placeholder="Busca: RAG, n8n, GEO, chatbots…"
                            className="flex-1 h-10 bg-transparent text-base text-[#09090B] placeholder:text-zinc-400 focus:outline-none"
                        />
                        <button type="submit" className="h-10 px-5 rounded-xl bg-[#B4975A] text-[#09090B] text-xs font-bold uppercase tracking-wide hover:bg-[#a3854a] transition-colors shrink-0">
                            Buscar
                        </button>
                    </form>

                    {/* Caminos por vertical + meta */}
                    <div className="mt-8 flex flex-wrap items-center gap-x-2 gap-y-2">
                        <span className="text-[11px] font-mono uppercase tracking-wide text-zinc-400 mr-1">Explora:</span>
                        {blogCategories.map((cat) => {
                            const active = activeCat === cat.slug
                            return (
                                <Link
                                    key={cat.slug}
                                    href={`/blog/categoria/${cat.slug}`}
                                    className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 border text-[10px] font-black uppercase tracking-[0.2em] transition-colors ${active ? "border-[#B4975A]/40 bg-[#B4975A]/10" : "border-[#E4E4E7] bg-white hover:border-[#B4975A]/40"}`}
                                >
                                    <span className={`h-1.5 w-1.5 rounded-full ${accentDot[cat.accent]}`} aria-hidden />
                                    <span className={accentText[cat.accent]}>{cat.shortName}</span>
                                </Link>
                            )
                        })}
                    </div>

                    {/* Meta line */}
                    <p className="mt-6 font-mono text-xs text-zinc-400">
                        {String(total).padStart(2, "0")} artículos · {blogCategories.length} verticales{latest && <> · última actualización {formatDate(latest.date)}</>}
                    </p>
                </div>
            </div>
        </section>
    )
}
