"use client"

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { ArrowUpRight, Layers, Terminal, ShieldCheck } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import DarkBackground from "@/components/DarkBackground"

type ProductAccent = {
    text: string
    dot: string
    border: string
    glow: string
    hoverBtn: string
}

const products: Array<{
    id: string
    name: string
    tagline: string
    slug: string
    description: string
    image: string
    logoOverlay?: string
    modules: string[]
    stack: string[]
    badge: string
    category: string
    accent: ProductAccent
}> = [
    {
        id: "01",
        name: "Business Suite IA",
        tagline: "CRM · Pipeline · Multi-Agent Orchestration",
        slug: "business-suite-ia-plataforma-corporativa",
        description: "Arquitectura corporativa full-stack orquestada por agentes autónomos. 7 módulos críticos en producción real.",
        image: "/assets/platform_dashboard.png",
        modules: ["Dashboard", "CRM", "Pipeline", "Calendario", "Tareas", "Propuestas", "Agentes"],
        stack: ["Next.js", "PostgreSQL", "n8n", "Claude 3.5", "AWS"],
        badge: "REF_BSIA",
        category: "Core Platform · Orchestration",
        accent: {
            text: "text-accent",
            dot: "bg-accent",
            border: "border-accent/30",
            glow: "bg-accent/10",
            hoverBtn: "hover:bg-accent",
        },
    },
    {
        id: "02",
        name: "OpoAI",
        tagline: "RAG Engine · Zero-Hallucination · Semantic Tutor",
        slug: "opoai-plataforma-estudio-oposiciones",
        description: "Tutor IA entrenado sobre miles de páginas de temario oficial que responde sin inventar mediante RAG semántico y documentación vectorizada real.",
        image: "/assets/opoai_logo.png",
        modules: ["Dashboard", "Temario", "Tutor IA", "Flashcards", "Simulacros", "Ranking"],
        stack: ["Next.js", "Claude 3.5", "PostgreSQL", "Vector DB"],
        badge: "REF_OPOAI",
        category: "AI · RAG · Semantic Retrieval",
        accent: {
            text: "text-cyan-400",
            dot: "bg-cyan-400",
            border: "border-cyan-400/30",
            glow: "bg-cyan-400/10",
            hoverBtn: "hover:bg-cyan-400",
        },
    },
]

export default function OwnProducts() {
    return (
        <section
            id="products"
            className="relative py-16 md:py-20 text-white overflow-hidden"
        >
            <DarkBackground accent="accent" secondaryAccent="cyan" intensity="medium" />

            <div className="container relative z-10 px-6 mx-auto max-w-6xl">
                {/* Header — compact */}
                <div className="mb-12 md:mb-16 max-w-3xl">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="h-[2px] w-8 bg-accent" />
                        <span className="text-[10px] font-black uppercase tracking-[0.35em] text-accent">In-House Deployment</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-black tracking-tight leading-[1.05] mb-3">
                        No conectamos apps. <span className="text-accent">Construimos plataformas.</span>
                    </h2>
                    <p className="text-sm md:text-base text-white/60 font-medium leading-relaxed max-w-2xl">
                        Zapier y Make son intermediarios superficiales. Desplegamos infraestructuras corporativas completas — agentes IA nativos, datos propios, control total.
                    </p>
                </div>

                {/* Products */}
                <div className="space-y-12 md:space-y-16">
                    {products.map((product, i) => (
                        <ProductCard key={product.id} product={product} index={i} />
                    ))}
                </div>

                {/* Pledge */}
                <div className="mt-16 text-center">
                    <div className="inline-flex flex-col sm:flex-row items-center gap-4 px-5 py-3 rounded-2xl border border-white/10 bg-[#0F1424]">
                        <div className="flex items-center gap-2.5">
                            <ShieldCheck className="h-4 w-4 text-accent" />
                            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/60">
                                Demostrado en producción
                            </span>
                        </div>
                        <div className="hidden sm:block h-4 w-[1px] bg-white/15" />
                        <p className="text-sm font-medium text-white/80">
                            Si lo construimos para nosotros, podemos construirlo para ti.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

function ProductCard({ product, index }: { product: typeof products[0]; index: number }) {
    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)
    const springConfig = { damping: 40, stiffness: 200 }
    const tiltX = useSpring(useTransform(mouseY, [-0.5, 0.5], [4, -4]), springConfig)
    const tiltY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-4, 4]), springConfig)

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect()
        mouseX.set((e.clientX - rect.left) / rect.width - 0.5)
        mouseY.set((e.clientY - rect.top) / rect.height - 0.5)
    }
    const handleMouseLeave = () => {
        mouseX.set(0)
        mouseY.set(0)
    }

    const isReversed = index % 2 !== 0
    const a = product.accent

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className={`flex flex-col ${isReversed ? "lg:flex-row-reverse" : "lg:flex-row"} gap-8 lg:gap-12 items-center`}
        >
            {/* Visual */}
            <motion.div
                style={{ perspective: 1800 }}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                className="w-full lg:w-[58%]"
            >
                <motion.div
                    style={{ rotateX: tiltX, rotateY: tiltY, transformStyle: "preserve-3d" }}
                    className="relative group transition-all duration-500"
                >
                    <div className={`absolute -inset-6 ${a.glow} rounded-[40px] blur-2xl opacity-30 group-hover:opacity-60 transition-opacity duration-700`} />

                    <div className="relative rounded-2xl md:rounded-[24px] overflow-hidden border border-white/10 bg-[#0F1424] shadow-xl">
                        <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/5 bg-black/40">
                            <div className="flex items-center gap-1.5">
                                <div className="h-2 w-2 rounded-full bg-red-500/40" />
                                <div className="h-2 w-2 rounded-full bg-amber-500/40" />
                                <div className="h-2 w-2 rounded-full bg-emerald-500/40" />
                            </div>
                            <span className="text-[9px] font-black uppercase tracking-[0.3em] text-white/30">
                                {product.badge}
                            </span>
                            <div className="flex items-center gap-1.5">
                                <div className={`h-1.5 w-1.5 rounded-full ${a.dot} animate-pulse`} />
                                <span className={`text-[9px] font-black uppercase tracking-widest ${a.text}`}>Live</span>
                            </div>
                        </div>

                        <div className="relative aspect-[16/9] bg-white">
                            <Image
                                src={product.image}
                                alt={product.name}
                                fill
                                sizes="(max-width: 1024px) 100vw, 58vw"
                                className={`${product.image.includes("dashboard") || product.image.includes("platform") ? "object-cover object-top" : "object-contain p-10 md:p-12"} group-hover:scale-[1.02] transition-transform duration-[1200ms] ease-out`}
                            />
                        </div>
                    </div>
                </motion.div>
            </motion.div>

            {/* Content */}
            <div className="w-full lg:w-[42%] flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                    <span className={`${a.text} text-2xl font-black leading-none opacity-40`}>{product.id}</span>
                    <div className="h-[1px] flex-grow bg-white/10" />
                    <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#0F1424] border ${a.border}`}>
                        <div className={`h-1 w-1 rounded-full ${a.dot} animate-pulse`} />
                        <span className={`text-[9px] font-black uppercase tracking-[0.25em] ${a.text}`}>Deployed</span>
                    </div>
                </div>

                <div className={`text-[10px] font-black uppercase tracking-[0.3em] ${a.text} mb-2.5`}>
                    {product.category}
                </div>

                <h3 className="text-2xl md:text-3xl lg:text-4xl font-black tracking-tight leading-[1] mb-2">
                    {product.name}
                </h3>

                <p className="text-[10px] font-black uppercase tracking-[0.25em] text-white/40 mb-4">
                    {product.tagline}
                </p>

                <p className="text-white/60 text-sm font-medium leading-relaxed mb-5">
                    {product.description}
                </p>

                {/* Modules */}
                <div className="mb-4">
                    <div className="flex items-center gap-2 mb-2">
                        <Layers className={`h-3 w-3 ${a.text}`} />
                        <span className="text-[9px] font-black uppercase tracking-[0.3em] text-white/40">Modular Units</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                        {product.modules.map((m) => (
                            <span
                                key={m}
                                className="px-2 py-1 rounded-md bg-[#0F1424] border border-white/10 text-[10px] font-bold text-white/70"
                            >
                                {m}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Stack */}
                <div className="mb-6">
                    <div className="flex items-center gap-2 mb-2">
                        <Terminal className={`h-3 w-3 ${a.text}`} />
                        <span className="text-[9px] font-black uppercase tracking-[0.3em] text-white/40">Stack</span>
                    </div>
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                        {product.stack.map((s, idx) => (
                            <span key={s} className="inline-flex items-center gap-2 text-xs font-black text-white/85">
                                {s}
                                {idx < product.stack.length - 1 && <span className={`${a.text} opacity-40`}>·</span>}
                            </span>
                        ))}
                    </div>
                </div>

                <Link href={`/casos-de-exito/${product.slug}`} className="self-start">
                    <Button className={`group h-11 px-5 rounded-xl bg-white text-[#0a0a0a] ${a.hoverBtn} hover:text-black transition-all font-black uppercase tracking-[0.2em] text-[10px] active:scale-95`}>
                        Auditar Arquitectura
                        <ArrowUpRight className="ml-2 h-3.5 w-3.5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </Button>
                </Link>
            </div>
        </motion.div>
    )
}
