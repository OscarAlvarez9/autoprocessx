"use client"

import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import FinalCTA from "@/components/FinalCTA"
import FAQ from "@/components/FAQ"
import { aboutFaqs } from "@/lib/faqs"
import { motion } from "framer-motion"
import { Activity, MapPin } from "lucide-react"
import Breadcrumbs from "@/components/Breadcrumbs"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const pillars = [
    { num: "01", title: "Ingeniería Directa", desc: "El arquitecto que diseña tu plataforma es el mismo que la despliega. Sin capas de gestión ni subcontratas opacas." },
    { num: "02", title: "Full Stack IA", desc: "Automatización, aplicaciones RAG y agentes autónomos. Infraestructura integral en manos de un equipo boutique." },
    { num: "03", title: "Producción Real", desc: "No vendemos prototipos ni prompts aislados. Desplegamos sistemas robustos que operan 24/7 sin intervención humana." },
    { num: "04", title: "Soberanía Técnica", desc: "Toda la propiedad intelectual y los datos permanecen bajo tu exclusivo control. Sin dependencias externas críticas." },
]

const evolution = [
    { tag: "Fase Alpha", title: "Lógica & Prompting", desc: "Nacimos dominando la orquestación visual y los límites del prompting avanzado para tareas de alta precisión." },
    { tag: "Fase Beta", title: "Data Architecture", desc: "Evolucionamos hacia la arquitectura profunda: Big Data, infraestructuras vectoriales y sistemas de monitoreo LLM." },
    { tag: "Fase Gamma", title: "Platform Engineering", desc: "Hoy construimos plataformas de IA empresariales completas, integrando seguridad, escala y redundancia nativa." },
]

export default function SobreNosotros() {
    return (
        <main className="min-h-screen bg-[#05070F] text-white selection:bg-primary/20">
            <Navigation />

            {/* Hero: Engineering Context */}
            <div className="relative pt-28 pb-16 md:pt-40 md:pb-32 overflow-hidden border-b border-white/5">
              <motion.div 
                  animate={{ top: ['-20%', '120%'] }}
                  transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                  className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-accent/30 to-transparent z-10"
              />

              <div className="container relative z-10 px-6 mx-auto">
                <Breadcrumbs items={[{ label: "Sobre Nosotros" }]} className="mb-8 md:mb-12" />

                <div className="max-w-6xl">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-accent text-[10px] font-black uppercase tracking-[0.3em] mb-6 md:mb-10"
                  >
                    <Activity className="h-3 w-3 animate-pulse" />
                    Boutique Infrastructure Engine · BCN
                  </motion.div>

                  <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 }}
                    className="text-4xl sm:text-6xl md:text-[100px] font-black tracking-tighter leading-tight md:leading-[0.85] mb-8 md:mb-16"
                  >
                    Ingeniería de IA <br />
                    <span className="text-accent italic text-3xl sm:text-5xl md:text-[80px]">desde el primer bit.</span>
                  </motion.h1>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 }}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 max-w-5xl"
                  >
                    <p className="text-base sm:text-lg md:text-2xl text-white font-medium leading-snug md:leading-tight">
                        Somos arquitectos de soluciones que construyen la infraestructura tecnológica que tu empresa necesita para escalar sin aumentar el headcount.
                    </p>
                    <p className="text-base sm:text-lg md:text-2xl text-white/40 font-medium leading-snug md:leading-tight">
                        Combinamos automatización de procesos, aplicaciones RAG y agentes autónomos bajo un mismo rigor: código limpio y sistemas en producción.
                    </p>
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Manifesto Section */}
            <section className="bg-[#05070F] py-16 md:py-48 overflow-hidden relative border-b border-white/5">
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent/5 blur-[150px] rounded-full pointer-events-none" />
                <div className="container px-6 mx-auto relative z-10 max-w-5xl">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-[10px] font-black uppercase tracking-[0.5em] text-accent mb-6 md:mb-12"
                    >
                        Engineering Mantra
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.05 }}
                        className="text-3xl sm:text-4xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter leading-tight md:leading-[0.85] mb-10 md:mb-20"
                    >
                        No somos consultores.<br />
                        <span className="text-accent italic">Somos los que ejecutan</span><br />
                        lo que otros PowerPointan.
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 border-t border-white/10 pt-8 md:pt-16"
                    >
                        <p className="text-white/50 text-base md:text-xl font-medium leading-snug md:leading-tight italic">
                            Cuando una gran consultora propone automatización, suele subcontratar la ejecución. Nosotros somos los que escribimos el código, orquestamos los flujos y mantenemos los servidores.
                        </p>
                        <p className="text-white/50 text-base md:text-xl font-medium leading-snug md:leading-tight">
                            Operamos con la agilidad de un equipo boutique y la profundidad técnica de arquitectos senior. El resultado no es un informe; es una plataforma operando en tu infraestructura.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Evolution Grid */}
            <section className="py-16 md:py-40 bg-[#05070F] border-b border-white/5">
                <div className="container px-6 mx-auto">
                    <div className="flex items-center gap-4 md:gap-6 mb-12 md:mb-24">
                        <div className="h-[2px] w-12 bg-accent opacity-50" />
                        <span className="text-[10px] font-black uppercase tracking-[0.5em] text-white/40">Technical Stack Evolution</span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                        {evolution.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="p-6 md:p-12 rounded-3xl md:rounded-[56px] bg-white/[0.02] border border-white/5 group hover:border-accent/20 transition-all"
                            >
                                <div className={`text-5xl md:text-[64px] font-black tracking-tighter leading-none mb-6 md:mb-8 select-none transition-colors text-white/5 group-hover:text-accent/20`}>
                                    F{i + 1}
                                </div>
                                <span className="text-[10px] font-black uppercase tracking-widest text-accent bg-accent/5 px-3 py-1.5 rounded-full border border-accent/10 mb-6 md:mb-8 inline-block">
                                    {item.tag}
                                </span>
                                <h3 className="text-xl md:text-2xl font-black tracking-tight mb-3 md:mb-4 leading-tight group-hover:text-accent transition-colors">{item.title}</h3>
                                <p className="text-white/30 font-medium leading-snug md:leading-tight text-sm">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pillars: Modular Units */}
            <section className="py-16 md:py-40 bg-[#05070F]">
                <div className="container px-6 mx-auto">
                    <div className="flex items-center gap-4 md:gap-6 mb-8 md:mb-12">
                        <div className="h-[2px] w-12 bg-accent" />
                        <span className="text-[10px] font-black uppercase tracking-[0.5em] text-accent">AutoProcessX Core Specs</span>
                    </div>
                    <h2 className="text-3xl sm:text-5xl md:text-8xl font-black text-white tracking-tighter leading-tight md:leading-[0.85] mb-12 md:mb-24 max-w-4xl">
                        Diferenciación por <span className="text-accent italic">Rigor Técnico.</span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {pillars.map((p, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.08 }}
                                className="p-6 md:p-10 rounded-3xl md:rounded-[48px] bg-white/[0.02] border border-white/5 hover:border-accent/30 transition-all group"
                            >
                                <span className="text-3xl md:text-4xl font-black text-white/10 group-hover:text-accent group-hover:scale-110 transition-all block mb-6 md:mb-8 tracking-tighter leading-none">{p.num}</span>
                                <h3 className="text-xl font-black text-white mb-3 md:mb-4 tracking-tight">{p.title}</h3>
                                <p className="text-white/30 text-xs font-medium leading-relaxed">{p.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Location section */}
            <section className="relative py-16 md:py-24 border-t border-white/5 bg-[#05070F] overflow-hidden">
                <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[400px] h-[400px] bg-amber-500/[0.05] blur-[140px] rounded-full pointer-events-none" />

                <div className="container px-6 mx-auto max-w-6xl relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
                        <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-[10px] font-black uppercase tracking-[0.3em] mb-6">
                            <MapPin className="h-3.5 w-3.5" />
                            Dónde estamos
                        </div>
                        <h2 className="text-3xl md:text-5xl font-black text-white mb-4 leading-[1.05] tracking-tight">
                            Premià de Mar, <span className="text-accent">Barcelona</span>.
                        </h2>
                        <p className="text-white/65 text-base font-medium leading-relaxed max-w-2xl mx-auto">
                            A 25 minutos del centro de Barcelona por la C-31. Operamos remoto en toda España y Europa, con desplazamiento on-site para discovery o despliegues críticos.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
                        {/* Map */}
                        <div className="lg:col-span-2">
                            <Card className="bg-[#0F1424] border-white/10 rounded-2xl shadow-none overflow-hidden p-0">
                                <div className="relative aspect-[16/10] md:aspect-[16/9]">
                                    <iframe
                                        src="https://www.google.com/maps?q=Premi%C3%A0+de+Mar,+Barcelona&output=embed"
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0, filter: "invert(0.92) hue-rotate(180deg) saturate(0.5) brightness(0.85)" }}
                                        loading="lazy"
                                        allowFullScreen
                                        referrerPolicy="no-referrer-when-downgrade"
                                        title="Ubicación AutoProcessX — Premià de Mar, Barcelona"
                                    />
                                </div>
                            </Card>
                        </div>

                        {/* Location details */}
                        <div className="flex flex-col gap-4">
                            <Card className="bg-[#0F1424] border-white/10 rounded-2xl shadow-none flex-1">
                                <CardContent className="p-6">
                                    <Badge
                                        variant="outline"
                                        className="bg-transparent border-white/10 text-white/60 mb-4 px-3 py-1 text-[10px] font-black uppercase tracking-[0.3em]"
                                    >
                                        Sede principal
                                    </Badge>
                                    <div className="space-y-3 text-sm">
                                        <div>
                                            <div className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40 mb-1">Localidad</div>
                                            <div className="text-white font-bold">Premià de Mar</div>
                                        </div>
                                        <div>
                                            <div className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40 mb-1">Provincia</div>
                                            <div className="text-white font-bold">Barcelona, Cataluña</div>
                                        </div>
                                        <div>
                                            <div className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40 mb-1">País</div>
                                            <div className="text-white font-bold">España</div>
                                        </div>
                                        <div>
                                            <div className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40 mb-1">Zona horaria</div>
                                            <div className="text-white font-bold">CET / CEST · UTC+1</div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            <a
                                href="https://www.google.com/maps?q=Premi%C3%A0+de+Mar,+Barcelona"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 h-12 rounded-xl bg-amber-400/10 border border-amber-400/40 hover:bg-amber-400/20 text-amber-200 hover:text-white font-black uppercase tracking-[0.2em] text-[11px] transition-all"
                            >
                                Abrir en Google Maps
                                <MapPin className="h-3.5 w-3.5" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <FAQ
                items={aboutFaqs}
                eyebrow="Quiénes somos · FAQ"
                title="Lo que preguntan sobre"
                titleAccent="el equipo"
                description="Cómo trabajamos, dónde estamos, con quién operamos y qué nos diferencia de una agencia tradicional."
            />
            <FinalCTA />
            <Footer />
        </main>
    )
}
