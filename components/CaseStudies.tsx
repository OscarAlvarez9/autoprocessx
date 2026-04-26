"use client"

import { motion } from "framer-motion"
import { ArrowUpRight, Globe, Activity } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

import { caseStudies } from "@/lib/cases"
import DarkBackground from "@/components/DarkBackground"

export default function CaseStudies() {
    return (
        <section id="casos" className="py-24 md:py-28 text-white overflow-hidden relative">
            <DarkBackground accent="neutral" secondaryAccent="accent" intensity="soft" />

            <div className="container relative z-10 px-6 mx-auto">
                {/* Header */}
                <div className="flex flex-col lg:flex-row items-end justify-between mb-16 md:mb-20 gap-8">
                    <div className="max-w-3xl">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="h-[2px] w-10 bg-accent opacity-50" />
                            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40">
                                Active Deployment Registry
                            </span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-[1.05] mb-5">
                            Modelos de <span className="text-accent">producción</span>.
                        </h2>
                        <p className="text-base md:text-lg text-white/65 font-medium leading-relaxed max-w-2xl">
                            Infraestructuras críticas desplegadas y operativas. Registros técnicos de optimización y retorno sobre capital.
                        </p>
                    </div>

                    <div className="hidden lg:flex items-center gap-4 px-5 py-3 rounded-2xl bg-[#0F1424] border border-white/10 backdrop-blur-xl">
                        <Activity className="h-3.5 w-3.5 text-accent animate-pulse" />
                        <div>
                            <div className="text-[9px] font-black uppercase tracking-[0.3em] text-white/40 mb-0.5">
                                Telemetry Active
                            </div>
                            <div className="text-sm font-black text-white tracking-tight">SLA 99.9% Verified</div>
                        </div>
                    </div>
                </div>

                {/* Cases — compact grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 max-w-5xl mx-auto">
                    {caseStudies.map((project, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.08 }}
                            className="group flex flex-col rounded-2xl overflow-hidden bg-[#0F1424] border border-white/10 hover:border-accent/30 transition-all"
                        >
                            {/* Visual */}
                            <div
                                className={`relative ${project.theme === "dark" || project.logo.includes("workflow") ? "bg-[#0F1424]" : "bg-white"} aspect-[16/10] overflow-hidden`}
                            >
                                <Image
                                    src={project.logo}
                                    alt={project.title}
                                    fill={true}
                                    className={`${project.logo.includes("platform") || project.logo.includes("dashboard") ? "object-cover" : "object-contain p-8 md:p-10"} group-hover:scale-105 transition-transform duration-700 ease-out`}
                                />

                                {/* Telemetry badge */}
                                <div className="absolute top-3 right-3 bg-black/80 backdrop-blur-xl border border-white/10 px-2.5 py-1 rounded-md text-white font-mono text-[9px] z-20">
                                    <div className="flex items-center gap-1.5">
                                        <div className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                                        <span className="font-black uppercase tracking-[0.2em]">
                                            APX-{project.id}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="flex flex-col p-5 md:p-6">
                                <div className="flex items-center gap-2 mb-3">
                                    <div className="px-2 py-0.5 rounded-md bg-[#0F1424] text-white/60 text-[9px] font-black uppercase tracking-[0.25em] border border-white/10">
                                        {project.client}
                                    </div>
                                </div>

                                <h3 className="text-lg md:text-xl font-black mb-2 tracking-tight leading-tight">
                                    {project.title}
                                </h3>
                                <p className="text-white/55 mb-4 text-sm font-medium leading-relaxed line-clamp-3">
                                    {project.desc}
                                </p>

                                <div className="flex flex-wrap gap-1.5 mb-4">
                                    {project.tags?.slice(0, 3).map((tag: string, idx: number) => (
                                        <span
                                            key={idx}
                                            className="px-2 py-0.5 rounded bg-[#0F1424] text-[9px] font-black uppercase tracking-[0.2em] text-white/50 border border-white/10"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="mt-auto pt-4 border-t border-white/10">
                                    <Link href={`/casos-de-exito/${project.slug}`}>
                                        <Button className="w-full h-10 rounded-lg bg-transparent border border-white/15 text-white hover:bg-accent hover:text-black hover:border-accent transition-all font-black uppercase tracking-[0.25em] text-[10px] active:scale-95">
                                            Auditar arquitectura
                                            <ArrowUpRight className="ml-2 h-3.5 w-3.5" />
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Registry CTA */}
                <div className="mt-16 md:mt-20 text-center">
                    <Link href="/casos-de-exito">
                        <Button className="h-14 px-8 rounded-xl bg-accent text-black hover:bg-white text-sm font-black tracking-wide shadow-lg shadow-accent/20 transition-all active:scale-95">
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
