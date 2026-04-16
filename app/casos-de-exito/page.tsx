"use client"

import { motion } from "framer-motion"
import { ArrowUpRight, ActivitySquare, PlayCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import FinalCTA from "@/components/FinalCTA"
import { caseStudies } from "@/lib/cases"

export default function CasosDeExito() {
    const deployments = caseStudies;

    return (
        <div className="flex flex-col min-h-screen bg-background text-foreground selection:bg-primary/20">
            <Navigation />

            <section className="pt-40 pb-20 md:pt-48 md:pb-32 overflow-hidden">
                <div className="container px-4 mx-auto">
                    {/* Header matches the authoritative style */}
                    <div className="flex flex-col md:flex-row items-end justify-between gap-12 mb-32">
                        <div className="max-w-4xl">
                            <h1 className="text-6xl md:text-[88px] font-black tracking-tighter leading-[0.85] text-foreground mb-8">
                                <span className="block text-[11px] font-black uppercase tracking-[0.45em] text-secondary/70 mb-4 leading-none">AutoProcessX</span>
                                Ejemplos reales de IA <br />
                                <span className="text-secondary italic">en empresas.</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-foreground/40 font-medium italic max-w-2xl leading-relaxed">
                                Uso de la inteligencia artificial en empresas de Barcelona y España. Resultados tangibles: procesos más ágiles, menos carga operativa y ROI demostrado.
                            </p>
                        </div>

                        <div className="hidden md:flex p-6 rounded-3xl border border-gray-100 bg-white/50 backdrop-blur-xl shadow-xl items-center gap-6">
                            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                                <ActivitySquare className="h-5 w-5 text-secondary animate-pulse" />
                            </div>
                            <div>
                                <p className="text-[10px] font-black text-foreground/40 uppercase tracking-[0.2em] mb-1">System Tracking</p>
                                <p className="text-lg font-black tracking-tight text-foreground italic">Performance Active</p>
                            </div>
                        </div>
                    </div>

                    {/* Alternating Flow List */}
                    <div className="space-y-32 md:space-y-48">
                        {deployments.map((project, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                className={`flex flex-col lg:flex-row gap-16 lg:gap-24 items-center ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
                            >
                                {/* Content Block */}
                                <div className="w-full lg:w-[45%]">
                                    <div className="flex items-center gap-4 mb-4">
                                        <span className="text-primary/20 text-4xl font-black italic">{project.id}</span>
                                        <div className="flex-1 h-[1px] bg-gray-200" />
                                        <span className="px-3 py-1 bg-blue-50 text-primary text-[10px] font-black uppercase tracking-widest rounded-full">{project.client}</span>
                                    </div>

                                    <h3 className="text-4xl md:text-5xl font-black mb-6 tracking-tight leading-[0.9]">{project.title}</h3>
                                    <p className="text-foreground/60 mb-12 text-lg font-medium leading-relaxed italic">{project.desc}</p>

                                    {/* ROI Mini-Cards */}
                                    <div className="grid grid-cols-2 gap-4 mb-12">
                                        {project.metricsArray.map((metric, idx) => (
                                            <div key={idx} className="p-6 rounded-3xl bg-gray-50 border border-transparent hover:border-gray-200 transition-colors">
                                                <div className="flex items-center justify-between mb-4">
                                                    <div className="h-8 w-8 rounded-full bg-white shadow-sm flex items-center justify-center">
                                                        {metric.icon}
                                                    </div>
                                                </div>
                                                <p className="text-[10px] uppercase font-black tracking-widest text-foreground/30 mb-1">{metric.label}</p>
                                                <p className="text-2xl font-black tracking-tighter text-foreground">{metric.value}</p>
                                            </div>
                                        ))}
                                    </div>

                                    <Link href={`/casos-de-exito/${project.slug}`} className="inline-block mt-4">
                                        <Button variant="ghost" className="h-14 px-0 text-primary font-black hover:text-primary/80 group">
                                            <span className="flex items-center gap-3">
                                                Explorar Specs de Arquitectura
                                                <ArrowUpRight className="h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                            </span>
                                        </Button>
                                    </Link>
                                </div>

                                {/* Visual Card */}
                                <div className="w-full lg:w-[55%] relative group">
                                    <div className="absolute -inset-4 bg-gradient-to-br from-primary/5 to-transparent rounded-[64px] md:rounded-[80px] -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                                    <div className={`relative ${project.theme === 'dark' || project.image.includes('workflow') || project.image.includes('platform') ? 'aspect-auto min-h-[400px] bg-[#0a0a0a]' : 'aspect-[4/3] bg-white'} rounded-[40px] md:rounded-[64px] overflow-hidden border border-gray-100 shadow-xl group-hover:shadow-2xl transition-all duration-700 flex items-center justify-center`}>
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill={false}
                                            width={1400}
                                            height={800}
                                            className={`w-full h-auto ${project.image.includes('workflow') ? 'p-8 md:p-12' : 'object-cover'} group-hover:scale-[1.03] transition-transform duration-[2000ms] ease-out`}
                                        />

                                        {/* Technical Overlay */}
                                        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/20 to-transparent" />
                                        {project.result && (
                                            <div className="absolute top-10 right-10 flex flex-col items-end gap-3 font-black">
                                                <span className="text-7xl text-secondary tracking-tighter drop-shadow-[0_8px_30px_rgba(0,0,0,0.2)]">{project.result}</span>
                                                <span className="px-4 py-1.5 rounded-full bg-white text-[10px] text-primary uppercase tracking-[0.2em] shadow-xl border border-gray-100">{project.resultLabel}</span>
                                            </div>
                                        )}
                                    </div>

                                    {/* Action Button - No Orange Hover */}
                                    <Link href={`/casos-de-exito/${project.slug}`}>
                                        <motion.button
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="absolute -bottom-6 -left-6 md:-left-10 h-24 w-24 rounded-full bg-white shadow-2xl flex flex-col items-center justify-center border border-gray-100 group/btn z-20 hover:border-primary/20 transition-all"
                                        >
                                            <PlayCircle className="h-8 w-8 text-primary mb-1 group-hover/btn:text-primary transition-colors" />
                                            <span className="text-[8px] font-black uppercase tracking-widest text-foreground/40">Specs</span>
                                        </motion.button>
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Sectors Summary */}
                    <div className="mt-32 mb-16">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-4">
                                Uso de la inteligencia artificial en <span className="text-secondary italic">empresas de todos los sectores</span>
                            </h2>
                            <p className="text-foreground/50 font-medium max-w-2xl mx-auto">
                                Ejemplos reales de automatización de procesos empresariales, inteligencia artificial para marketing digital y aplicaciones IA corporativas desplegadas en producción.
                            </p>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {[
                                { sector: "E-commerce & Retail", tipo: "Automatización email marketing · IA en marketing digital" },
                                { sector: "Legal & Finanzas", tipo: "Automatización documental · Onboarding autónomo" },
                                { sector: "Salud & Farmacia", tipo: "Automatización de informes · Content IA" },
                                { sector: "SaaS & Agencias", tipo: "Workflow automation · Multi agent systems" },
                                { sector: "Marketing Digital", tipo: "IA en marketing · Automatización de ventas" },
                                { sector: "Consultoría", tipo: "Automatización procesos administrativos" },
                                { sector: "Inmobiliario", tipo: "AI chatbot · Cualificación leads IA" },
                                { sector: "Industria & Logística", tipo: "Automatización de procesos operativos" }
                            ].map((item, i) => (
                                <div key={i} className="p-6 rounded-[24px] bg-muted border border-gray-100 hover:border-primary/10 transition-all">
                                    <h4 className="font-black text-sm mb-2 tracking-tight">{item.sector}</h4>
                                    <p className="text-[11px] font-bold text-foreground/40 uppercase tracking-wider leading-relaxed">{item.tipo}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <FinalCTA />
                </div>
            </section>

            <Footer />
        </div>
    )
}
