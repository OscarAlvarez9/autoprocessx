"use client"

import { motion } from "framer-motion"
import { ArrowUpRight, Globe, Workflow, Layers } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

import { caseStudies, type CaseStudy } from "@/lib/cases"
import DarkBackground from "@/components/DarkBackground"

const automationSlugs = ["farmacia-garcia-del-cerro", "pelican-catchy-infraestructura-ia"]
const platformSlugs = ["business-suite-ia-plataforma-corporativa", "opoai-plataforma-estudio-oposiciones"]

const findBy = (slug: string) => caseStudies.find((c) => c.slug === slug)

const automations = automationSlugs.map(findBy).filter(Boolean) as CaseStudy[]
const platforms = platformSlugs.map(findBy).filter(Boolean) as CaseStudy[]

function CaseCard({ project, kind }: { project: CaseStudy; kind: "automation" | "platform" }) {
    const isPlatform = kind === "platform"
    const accentBorder = isPlatform ? "hover:border-cyan-400/40" : "hover:border-accent/40"
    const dot = isPlatform ? "bg-cyan-400" : "bg-accent"
    const tagColor = isPlatform ? "text-cyan-300" : "text-accent"
    const kindLabel = isPlatform ? "Plataforma IA" : "Automatización"

    return (
        <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={`group flex flex-row items-stretch h-full rounded-2xl overflow-hidden bg-[#0F1424] border border-white/10 ${accentBorder} transition-all`}
        >
            {/* Visual — small, square */}
            <div
                className={`relative shrink-0 w-28 md:w-36 ${project.theme === "dark" || project.logo.includes("workflow") ? "bg-[#0F1424]" : "bg-white"} overflow-hidden`}
            >
                <Image
                    src={project.logo}
                    alt={project.title}
                    fill={true}
                    sizes="144px"
                    className={`${project.logo.includes("platform") || project.logo.includes("dashboard") ? "object-cover" : "object-contain p-3 md:p-4"} group-hover:scale-105 transition-transform duration-500 ease-out`}
                />
            </div>

            {/* Content */}
            <div className="flex flex-col flex-1 min-w-0 p-4 md:p-5">
                <div className="flex items-center gap-2 mb-1.5">
                    <div className={`h-1.5 w-1.5 rounded-full ${dot} animate-pulse`} />
                    <span className={`text-[9px] font-black uppercase tracking-[0.25em] ${tagColor}`}>
                        {kindLabel}
                    </span>
                    <span className="text-white/20">·</span>
                    <span className="text-[9px] font-black uppercase tracking-[0.2em] text-white/40 truncate">
                        {project.client}
                    </span>
                </div>

                <h3 className="text-sm md:text-base font-black mb-1.5 tracking-tight leading-tight line-clamp-1">
                    {project.title}
                </h3>
                <p className="text-white/50 mb-3 text-xs font-medium leading-snug line-clamp-2">
                    {project.desc}
                </p>

                <div className="mt-auto">
                    <Link
                        href={`/casos-de-exito/${project.slug}`}
                        className={`inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-[0.25em] ${tagColor} hover:text-white transition-colors`}
                    >
                        Auditar
                        <ArrowUpRight className="h-3 w-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </Link>
                </div>
            </div>
        </motion.div>
    )
}

export default function CaseStudies() {
    return (
        <section id="casos" className="py-20 md:py-24 text-white overflow-hidden relative">
            <DarkBackground accent="neutral" secondaryAccent="accent" intensity="soft" />

            <div className="container relative z-10 px-6 mx-auto max-w-6xl">
                {/* Header — compact, centered like Comparison */}
                <div className="text-center mb-12 md:mb-16 max-w-3xl mx-auto">
                    <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-[10px] font-black uppercase tracking-[0.3em] mb-6">
                        <Globe className="h-3.5 w-3.5" />
                        Active Deployment Registry
                    </div>
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-4 leading-[1.05] tracking-tight">
                        Modelos de <span className="text-accent">producción</span>.
                    </h2>
                    <p className="text-white/65 text-sm md:text-base font-medium leading-relaxed max-w-2xl mx-auto">
                        Una vista rápida. Para la auditoría completa de cada arquitectura, accede al registro.
                    </p>
                </div>

                {/* Two columns: Automations vs Platforms */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
                    {/* Automations */}
                    <div>
                        <div className="flex items-center gap-2.5 mb-4">
                            <Workflow className="h-4 w-4 text-accent" />
                            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-accent">
                                Automatizaciones
                            </span>
                            <div className="flex-1 h-[1px] bg-gradient-to-r from-accent/30 to-transparent" />
                        </div>
                        <div className="space-y-3">
                            {automations.map((project) => (
                                <CaseCard key={project.slug} project={project} kind="automation" />
                            ))}
                        </div>
                    </div>

                    {/* Platforms */}
                    <div>
                        <div className="flex items-center gap-2.5 mb-4">
                            <Layers className="h-4 w-4 text-cyan-400" />
                            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-cyan-300">
                                Plataformas IA
                            </span>
                            <div className="flex-1 h-[1px] bg-gradient-to-r from-cyan-400/30 to-transparent" />
                        </div>
                        <div className="space-y-3">
                            {platforms.map((project) => (
                                <CaseCard key={project.slug} project={project} kind="platform" />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Registry CTA */}
                <div className="mt-12 md:mt-16 text-center">
                    <Link href="/casos-de-exito">
                        <Button className="h-12 px-7 rounded-xl bg-accent text-black hover:bg-white text-sm font-black tracking-wide shadow-lg shadow-accent/20 transition-all active:scale-95">
                            <span className="flex items-center gap-2">
                                Acceder al registro completo
                                <Globe className="h-4 w-4" />
                            </span>
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    )
}
