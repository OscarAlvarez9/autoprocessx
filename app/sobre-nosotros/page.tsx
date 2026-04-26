"use client"

import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import FinalCTA from "@/components/FinalCTA"
import { motion } from "framer-motion"
import Link from "next/link"
import { ChevronRight, Activity } from "lucide-react"

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
            <div className="relative pt-40 pb-32 overflow-hidden border-b border-white/5">
              <motion.div 
                  animate={{ top: ['-20%', '120%'] }}
                  transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                  className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-accent/30 to-transparent z-10"
              />

              <div className="container relative z-10 px-6 mx-auto">
                <div className="flex items-center gap-2 text-[10px] font-black text-white/40 mb-12 uppercase tracking-[0.4em]">
                  <Link href="/" className="hover:text-accent transition-colors">Core</Link>
                  <ChevronRight className="h-3 w-3" />
                  <span className="text-white">Engineering Evolution Story</span>
                </div>

                <div className="max-w-6xl">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-accent text-[10px] font-black uppercase tracking-[0.3em] mb-10"
                  >
                    <Activity className="h-3 w-3 animate-pulse" />
                    Boutique Infrastructure Engine · BCN
                  </motion.div>

                  <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 }}
                    className="text-6xl md:text-[100px] font-black tracking-tighter leading-[0.85] mb-16"
                  >
                    Ingeniería de IA <br />
                    <span className="text-accent italic text-5xl md:text-[80px]">desde el primer bit.</span>
                  </motion.h1>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 }}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl"
                  >
                    <p className="text-2xl text-white font-medium leading-tight">
                        Somos arquitectos de soluciones que construyen la infraestructura tecnológica que tu empresa necesita para escalar sin aumentar el headcount.
                    </p>
                    <p className="text-2xl text-white/40 font-medium leading-tight">
                        Combinamos automatización de procesos, aplicaciones RAG y agentes autónomos bajo un mismo rigor: código limpio y sistemas en producción.
                    </p>
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Manifesto Section */}
            <section className="bg-[#0F1424] py-32 md:py-48 overflow-hidden relative border-b border-white/5">
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent/5 blur-[150px] rounded-full pointer-events-none" />
                <div className="container px-6 mx-auto relative z-10 max-w-5xl">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-[10px] font-black uppercase tracking-[0.5em] text-accent mb-12"
                    >
                        Engineering Mantra
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.05 }}
                        className="text-4xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter leading-[0.85] mb-20"
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
                        className="grid grid-cols-1 md:grid-cols-2 gap-16 border-t border-white/10 pt-16"
                    >
                        <p className="text-white/50 text-xl font-medium leading-tight italic">
                            Cuando una gran consultora propone automatización, suele subcontratar la ejecución. Nosotros somos los que escribimos el código, orquestamos los flujos y mantenemos los servidores.
                        </p>
                        <p className="text-white/50 text-xl font-medium leading-tight">
                            Operamos con la agilidad de un equipo boutique y la profundidad técnica de arquitectos senior. El resultado no es un informe; es una plataforma operando en tu infraestructura.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Evolution Grid */}
            <section className="py-24 md:py-40 bg-[#05070F] border-b border-white/5">
                <div className="container px-6 mx-auto">
                    <div className="flex items-center gap-6 mb-24">
                        <div className="h-[2px] w-12 bg-accent opacity-50" />
                        <span className="text-[10px] font-black uppercase tracking-[0.5em] text-white/40">Technical Stack Evolution</span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {evolution.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="p-12 rounded-[56px] bg-white/[0.02] border border-white/5 group hover:border-accent/20 transition-all"
                            >
                                <div className={`text-[64px] font-black tracking-tighter leading-none mb-8 select-none transition-colors text-white/5 group-hover:text-accent/20`}>
                                    F{i + 1}
                                </div>
                                <span className="text-[10px] font-black uppercase tracking-widest text-accent bg-accent/5 px-3 py-1.5 rounded-full border border-accent/10 mb-8 inline-block">
                                    {item.tag}
                                </span>
                                <h3 className="text-2xl font-black tracking-tight mb-4 leading-tight group-hover:text-accent transition-colors">{item.title}</h3>
                                <p className="text-white/30 font-medium leading-tight text-sm">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pillars: Modular Units */}
            <section className="py-24 md:py-40 bg-[#0F1424]">
                <div className="container px-6 mx-auto">
                    <div className="flex items-center gap-6 mb-12">
                        <div className="h-[2px] w-12 bg-accent" />
                        <span className="text-[10px] font-black uppercase tracking-[0.5em] text-accent">AutoProcessX Core Specs</span>
                    </div>
                    <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter leading-[0.85] mb-24 max-w-4xl">
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
                                className="p-10 rounded-[48px] bg-white/[0.02] border border-white/5 hover:border-accent/30 transition-all group"
                            >
                                <span className="text-4xl font-black text-white/10 group-hover:text-accent group-hover:scale-110 transition-all block mb-8 tracking-tighter leading-none">{p.num}</span>
                                <h3 className="text-xl font-black text-white mb-4 tracking-tight">{p.title}</h3>
                                <p className="text-white/30 text-xs font-medium leading-relaxed">{p.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <FinalCTA />
            <Footer />
        </main>
    )
}
