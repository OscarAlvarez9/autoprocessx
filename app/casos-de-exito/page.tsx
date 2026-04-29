"use client"

import { motion } from "framer-motion"
import { ArrowUpRight, ActivitySquare, PlayCircle, ChevronRight, Terminal, Activity, ActivityIcon, Plus, ArrowRight, Sparkles } from "lucide-react"
import { useContactDrawer } from "@/context/ContactDrawerContext"
import { gtagEvent } from "@/lib/gtag"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import FinalCTA from "@/components/FinalCTA"
import Breadcrumbs from "@/components/Breadcrumbs"
import FAQ from "@/components/FAQ"
import { casesFaqs } from "@/lib/faqs"
import { caseStudies } from "@/lib/cases"

export default function CasosDeExito() {
    const deployments = caseStudies;
    const { openDrawer } = useContactDrawer()

    return (
        <div className="flex flex-col min-h-screen bg-[#05070F] text-white selection:bg-primary/20">
            <Navigation />

            {/* Hero: Engineering Context */}
            <div className="relative pt-28 pb-16 md:pt-40 md:pb-32 overflow-hidden border-b border-white/5">
              <motion.div 
                  animate={{ top: ['-20%', '120%'] }}
                  transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                  className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-accent/30 to-transparent z-10"
              />

              <div className="container relative z-10 px-6 mx-auto">
                <Breadcrumbs
                    items={[{ label: "Casos de Éxito" }]}
                    className="mb-8 md:mb-12"
                />

                <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 md:gap-12">
                    <div className="max-w-4xl">
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-4xl sm:text-6xl md:text-[88px] font-black tracking-tighter leading-tight md:leading-[0.85] text-white mb-6 md:mb-8"
                        >
                            <span className="block text-[11px] font-black uppercase tracking-[0.45em] text-accent mb-3 md:mb-4 leading-none">AutoProcessX Deployments</span>
                            Protocolos de IA <br />
                            <span className="text-accent italic">en Producción.</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/40 font-medium italic max-w-2xl leading-snug md:leading-tight"
                        >
                            Audit de arquitecturas desplegadas para empresas de Barcelona y España. Resultados validados mecánicamente: ROI, velocidad y escala.
                        </motion.p>
                    </div>

                    <div className="hidden md:flex p-6 rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl items-center gap-6">
                        <div className="h-12 w-12 rounded-full bg-accent/20 flex items-center justify-center">
                            <ActivitySquare className="h-5 w-5 text-accent animate-pulse" />
                        </div>
                        <div>
                            <p className="text-[10px] font-black text-white/40 uppercase tracking-[0.2em] mb-1">Status</p>
                            <p className="text-lg font-black tracking-tight text-white italic">Sistemas en producción</p>
                        </div>
                    </div>
                </div>
              </div>
            </div>

            <section className="py-12 md:py-32 bg-[#05070F]">
                <div className="container px-6 mx-auto">
                    {/* Alternating Flow List */}
                    <div className="space-y-20 md:space-y-48">
                        {deployments.map((project, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                className={`flex flex-col lg:flex-row gap-10 md:gap-16 lg:gap-32 items-center ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
                            >
                                {/* Content Block */}
                                <div className="w-full lg:w-[45%]">
                                    <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-8">
                                        <span className="text-accent/20 text-4xl md:text-5xl font-black italic">{project.id}</span>
                                        <div className="flex-1 h-[1px] bg-white/10" />
                                        <span className="px-3 md:px-4 py-1.5 bg-accent/10 text-accent text-[10px] font-black uppercase tracking-widest rounded-full border border-accent/20">{project.client}</span>
                                    </div>

                                    <h3 className="text-3xl sm:text-4xl md:text-6xl font-black mb-6 md:mb-8 tracking-tighter leading-tight md:leading-[0.85]">{project.title}</h3>
                                    <p className="text-white/40 mb-8 md:mb-12 text-base md:text-xl font-medium leading-snug md:leading-tight italic">{project.desc}</p>

                                    {/* ROI Mini-Cards: Technical Style */}
                                    <div className="grid grid-cols-2 gap-3 md:gap-4 mb-8 md:mb-12">
                                        {project.metricsArray.map((metric, idx) => (
                                            <div key={idx} className="p-5 md:p-8 rounded-3xl md:rounded-[40px] bg-white/5 border border-white/5 hover:border-accent/30 transition-all flex flex-col justify-between">
                                                <div className="flex items-center justify-between mb-4 md:mb-6">
                                                    <div className="h-8 w-8 rounded-xl bg-white/5 flex items-center justify-center text-accent">
                                                        {metric.icon}
                                                    </div>
                                                </div>
                                                <div>
                                                    <p className="text-[10px] uppercase font-black tracking-widest text-white/30 mb-1">{metric.label}</p>
                                                    <p className="text-2xl md:text-3xl font-black tracking-tighter text-white">{metric.value}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    <Link href={`/casos-de-exito/${project.slug}`} className="inline-block w-full sm:w-auto">
                                        <Button className="w-full sm:w-auto bg-white/5 hover:bg-accent hover:text-white text-white/60 h-14 md:h-16 px-6 md:px-10 rounded-2xl md:rounded-[28px] font-black text-base md:text-lg border border-white/10 transition-all flex items-center gap-4 group">
                                            <span>Full Architecture Specs</span>
                                            <ArrowUpRight className="h-5 w-5 md:h-6 md:w-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                        </Button>
                                    </Link>
                                </div>

                                {/* Visual Card */}
                                <div className="w-full lg:w-[55%] relative group">
                                    <div className="absolute -inset-10 bg-accent/20 blur-[100px] opacity-0 group-hover:opacity-20 transition-opacity duration-1000" />
                                    
                                    <div className={`relative ${project.theme === 'dark' || project.image.includes('workflow') || (project.image.includes('platform') && !project.image.includes('dashboard')) ? 'aspect-auto min-h-[300px] md:min-h-[500px]' : 'aspect-[4/3]'} rounded-3xl md:rounded-[64px] overflow-hidden border border-white/10 bg-black shadow-2xl transition-all duration-700`}>
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            width={1400}
                                            height={1000}
                                            sizes="(max-width: 768px) 100vw, 55vw"
                                            className={`w-full h-full ${project.image.includes('workflow') ? 'p-12 md:p-20' : 'object-cover'} group-hover:scale-[1.05] transition-transform duration-[3000ms] ease-out opacity-80 group-hover:opacity-100`}
                                        />
                                        
                                        {/* Technical Overlay */}
                                        <div className="absolute inset-x-0 bottom-0 h-60 bg-gradient-to-t from-black via-black/40 to-transparent" />
                                        
                                        {/* Scanning Beam effect on hover */}
                                        <motion.div 
                                            initial={{ top: "-100%" }}
                                            whileHover={{ top: "100%" }}
                                            transition={{ duration: 3, ease: "linear", repeat: Infinity }}
                                            className="absolute left-0 right-0 h-[2px] bg-accent/50 z-20 pointer-events-none blur-sm"
                                        />
                                    </div>

                                    {/* Abstract Specs Tag */}
                                    <div className="absolute -bottom-6 -right-6 md:-right-10 bg-[#05070F] p-6 rounded-[32px] border border-white/10 shadow-2xl z-20 group-hover:border-accent/50 transition-colors">
                                        <div className="flex items-center gap-3">
                                            <div className="h-2 w-2 rounded-full bg-accent animate-pulse" />
                                            <span className="text-[10px] font-black uppercase tracking-widest text-white">In Production</span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Sectors Summary: Industrial Grid */}
                    <div className="mt-24 md:mt-48">
                        <div className="flex items-center gap-3 md:gap-4 mb-12 md:mb-24 justify-center">
                            <div className="h-[1px] w-12 md:w-24 bg-white/10" />
                            <h2 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tighter text-center uppercase">
                                Cross-Industry <span className="text-accent italic">Protocols</span>
                            </h2>
                            <div className="h-[1px] w-12 md:w-24 bg-white/10" />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
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
                                <div key={i} className="p-6 md:p-8 rounded-3xl md:rounded-[40px] bg-white/[0.02] border border-white/5 hover:border-accent/20 transition-all group">
                                    <div className="text-accent/40 mb-4 md:mb-6 group-hover:text-accent transition-colors"><Plus className="h-4 w-4" /></div>
                                    <h4 className="font-black text-base md:text-lg mb-2 md:mb-3 tracking-tight uppercase group-hover:text-accent transition-colors">{item.sector}</h4>
                                    <p className="text-[10px] font-bold text-white/30 uppercase tracking-[.15em] leading-relaxed">{item.tipo}</p>
                                </div>
                            ))}
                        </div>

                        {/* Sector CTA */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="mt-10 md:mt-14 relative rounded-3xl md:rounded-[40px] overflow-hidden border border-amber-400/25 bg-gradient-to-br from-amber-400/[0.06] via-[#0F1424] to-[#0F1424] shadow-[0_0_60px_-20px_rgba(251,191,36,0.4)]"
                        >
                            <div className="absolute -top-20 -right-20 w-[400px] h-[400px] bg-amber-500/10 blur-[120px] rounded-full pointer-events-none" />
                            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-amber-400/60 to-transparent pointer-events-none" />

                            <div className="relative z-10 p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10">
                                <div className="flex-1">
                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/15 border border-amber-400/30 text-amber-200 text-[10px] font-black uppercase tracking-[0.3em] mb-4">
                                        <Sparkles className="h-3 w-3" />
                                        Tu sector no está en el grid
                                    </div>
                                    <h3 className="text-2xl md:text-4xl font-black text-white tracking-tight leading-[1.05] mb-3">
                                        Cualquier industria,{" "}
                                        <span className="bg-gradient-to-br from-amber-200 via-amber-300 to-amber-500 bg-clip-text text-transparent">
                                            misma arquitectura
                                        </span>.
                                    </h3>
                                    <p className="text-white/65 text-sm md:text-base font-medium leading-relaxed max-w-2xl">
                                        Si tu vertical no aparece arriba, no pasa nada — los protocolos son los mismos. Cuéntanos tu operativa en una llamada de 30 minutos y te enviamos un plan de despliegue en 48h.
                                    </p>
                                </div>

                                <div className="flex flex-col sm:flex-row md:flex-col gap-3 w-full md:w-auto shrink-0">
                                    <Button
                                        onClick={() => {
                                            gtagEvent("click_cta_to_form", {
                                                event_category: "cta",
                                                event_label: "cross_industry_cta",
                                                location: "casos_cross_industry",
                                            })
                                            openDrawer()
                                        }}
                                        className="group h-14 px-7 rounded-xl bg-amber-400 text-black hover:bg-amber-300 transition-all font-black uppercase tracking-[0.2em] text-[11px] shadow-[0_0_40px_-8px_rgba(251,191,36,0.7)] hover:shadow-[0_0_60px_-8px_rgba(251,191,36,0.9)] active:scale-95 flex items-center justify-center gap-2"
                                    >
                                        Auditar mi sector
                                        <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                                    </Button>
                                    <Link href="/servicios/automatizaciones" className="w-full md:w-auto">
                                        <Button className="w-full h-14 px-7 rounded-xl bg-white/[0.04] border border-white/15 hover:border-amber-400/40 hover:bg-amber-400/10 backdrop-blur-md text-white transition-all font-black uppercase tracking-[0.2em] text-[11px] active:scale-95 flex items-center justify-center gap-2">
                                            Explorar servicios
                                            <ArrowUpRight className="h-3.5 w-3.5" />
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </section>

            <FAQ
                items={casesFaqs}
                eyebrow="Registro · FAQ"
                title="Lo que preguntan sobre"
                titleAccent="los casos"
                description="Tipo de proyectos en producción, cómo se documentan y cómo replicarlos en tu empresa."
            />

            <FinalCTA />
            <Footer />
        </div>
    )
}
