"use client"

import { motion } from "framer-motion"
import { Sparkles, Activity, Terminal } from "lucide-react"
import Breadcrumbs from "@/components/Breadcrumbs"
import { blogCategories, formatDate, type BlogPost } from "@/lib/blog"

const categoryAccentDot: Record<string, string> = {
    pink: "bg-pink-400",
    emerald: "bg-emerald-400",
    orange: "bg-orange-400",
    red: "bg-red-400",
    blue: "bg-blue-400",
}

const categoryAccentText: Record<string, string> = {
    pink: "text-pink-300",
    emerald: "text-emerald-300",
    orange: "text-orange-300",
    red: "text-red-300",
    blue: "text-blue-300",
}

export default function BlogHero({ posts }: { posts: BlogPost[] }) {
    const total = posts.length
    const latest = posts[0]

    return (
        <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
            {/* Layered ambient background */}
            <div className="absolute inset-0 pointer-events-none">
                {/* base gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#05070F] via-[#070A18] to-[#05070F]" />

                {/* large amber glow top-right */}
                <motion.div
                    initial={{ opacity: 0.5, scale: 0.95 }}
                    animate={{ opacity: [0.5, 0.7, 0.5], scale: [0.95, 1.05, 0.95] }}
                    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-0 right-0 w-[800px] h-[700px] bg-amber-500/[0.09] blur-[180px] rounded-full"
                    style={{ transform: "translate(20%, -30%)" }}
                />
                {/* secondary glow bottom-left */}
                <motion.div
                    initial={{ opacity: 0.3, scale: 1 }}
                    animate={{ opacity: [0.3, 0.5, 0.3], scale: [1, 1.1, 1] }}
                    transition={{ duration: 16, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                    className="absolute bottom-0 left-0 w-[600px] h-[500px] bg-amber-300/[0.06] blur-[160px] rounded-full"
                    style={{ transform: "translate(-25%, 25%)" }}
                />

                {/* fine grid with radial mask */}
                <div
                    className="absolute inset-0 opacity-[0.07]"
                    style={{
                        backgroundImage:
                            "linear-gradient(to right, #FBBF24 1px, transparent 1px), linear-gradient(to bottom, #FBBF24 1px, transparent 1px)",
                        backgroundSize: "56px 56px",
                        maskImage:
                            "radial-gradient(ellipse 70% 60% at 50% 45%, black 30%, transparent 100%)",
                        WebkitMaskImage:
                            "radial-gradient(ellipse 70% 60% at 50% 45%, black 30%, transparent 100%)",
                    }}
                />

                {/* horizontal scanning beam */}
                <motion.div
                    animate={{ top: ["10%", "90%"] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-amber-400/50 to-transparent shadow-[0_0_30px_rgba(251,191,36,0.5)]"
                />

                {/* floating amber particles */}
                {Array.from({ length: 10 }).map((_, i) => (
                    <motion.span
                        key={i}
                        className="absolute h-[3px] w-[3px] rounded-full bg-amber-300"
                        style={{
                            left: `${8 + i * 9}%`,
                            top: `${(i * 13) % 90}%`,
                            boxShadow: "0 0 10px rgba(251,191,36,0.9)",
                        }}
                        animate={{ y: [-10, -180], opacity: [0, 1, 0] }}
                        transition={{
                            duration: 8 + (i % 4),
                            repeat: Infinity,
                            ease: "linear",
                            delay: i * 0.7,
                        }}
                    />
                ))}

                {/* SVG noise grain */}
                <div
                    className="absolute inset-0 opacity-[0.04] mix-blend-overlay"
                    style={{
                        backgroundImage:
                            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
                    }}
                />
            </div>

            <div className="container relative z-10 px-6 mx-auto max-w-6xl">
                <Breadcrumbs items={[{ label: "Blog" }]} className="mb-10 md:mb-14" />

                {/* Status console */}
                <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mx-auto mb-8 md:mb-10 max-w-xl flex items-center gap-3 px-4 py-2 rounded-full bg-black/60 border border-white/10 backdrop-blur-md"
                >
                    <Terminal className="h-3.5 w-3.5 text-amber-300 shrink-0" />
                    <div className="flex-1 flex items-center gap-2 text-[10px] font-mono text-white/50 truncate">
                        <span className="text-amber-300">$</span>
                        <span>blog.feed --status=live</span>
                        <span className="hidden sm:inline text-white/30">·</span>
                        <span className="hidden sm:inline">
                            {total} artículos · última actualización {latest && formatDate(latest.date)}
                        </span>
                    </div>
                    <span className="relative flex h-2 w-2 shrink-0">
                        <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                    </span>
                </motion.div>

                <div className="text-center max-w-4xl mx-auto">
                    {/* Eyebrow */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.05 }}
                        className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/40 backdrop-blur-md mb-7"
                    >
                        <Sparkles className="h-3.5 w-3.5 text-amber-300" />
                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-amber-200">
                            Engineering Notes · IA · GEO · Stack Real
                        </span>
                    </motion.div>

                    {/* Headline */}
                    <motion.h1
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                        className="text-5xl md:text-7xl lg:text-[88px] font-black text-white tracking-[-0.03em] leading-[0.95] mb-7"
                        style={{ textShadow: "0 4px 60px rgba(0,0,0,0.6)" }}
                    >
                        Apuntes de{" "}
                        <span className="relative inline-block">
                            <span
                                className="relative z-10 bg-gradient-to-br from-amber-200 via-amber-300 to-amber-500 bg-clip-text text-transparent"
                                style={{ filter: "drop-shadow(0 0 32px rgba(251,191,36,0.45))" }}
                            >
                                ingeniería
                            </span>
                            <motion.span
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: 1 }}
                                transition={{ delay: 0.9, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                                className="absolute -bottom-1 left-0 right-0 h-2 md:h-3 bg-amber-400/40 origin-left blur-[5px]"
                            />
                        </span>
                        .
                    </motion.h1>

                    {/* Sub */}
                    <motion.p
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.25 }}
                        className="text-base md:text-lg text-white/65 font-medium leading-relaxed max-w-2xl mx-auto mb-10"
                    >
                        Análisis técnico sobre IA, automatización con n8n, plataformas RAG, chatbots y GEO. Sin marketing, con stack, código y métricas reales.
                    </motion.p>

                    {/* Stats strip */}
                    <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="flex flex-wrap items-center justify-center gap-6 md:gap-10 mb-12"
                    >
                        <div className="flex items-center gap-2.5">
                            <span className="text-3xl md:text-4xl font-black text-white tabular-nums tracking-tight">
                                {String(total).padStart(2, "0")}
                            </span>
                            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40 leading-tight">
                                Artículos
                                <br />
                                publicados
                            </span>
                        </div>

                        <div className="hidden sm:block h-10 w-[1px] bg-gradient-to-b from-transparent via-white/15 to-transparent" />

                        <div className="flex items-center gap-2.5">
                            <span className="text-3xl md:text-4xl font-black text-amber-300 tabular-nums tracking-tight">
                                {String(blogCategories.length).padStart(2, "0")}
                            </span>
                            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40 leading-tight">
                                Verticales
                                <br />
                                de contenido
                            </span>
                        </div>

                        <div className="hidden sm:block h-10 w-[1px] bg-gradient-to-b from-transparent via-white/15 to-transparent" />

                        <div className="flex items-center gap-2.5">
                            <Activity className="h-4 w-4 text-emerald-400 animate-pulse" />
                            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40 leading-tight">
                                Updated
                                <br />
                                weekly
                            </span>
                        </div>
                    </motion.div>

                    {/* Category dots quick legend */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.55 }}
                        className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2"
                    >
                        {blogCategories.map((cat) => (
                            <div key={cat.slug} className="flex items-center gap-2">
                                <span className={`h-1.5 w-1.5 rounded-full ${categoryAccentDot[cat.accent]} animate-pulse`} />
                                <span className={`text-[10px] font-black uppercase tracking-[0.25em] ${categoryAccentText[cat.accent]}`}>
                                    {cat.shortName}
                                </span>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
