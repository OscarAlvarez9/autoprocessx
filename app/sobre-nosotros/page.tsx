"use client"

import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import FinalCTA from "@/components/FinalCTA"
import { motion } from "framer-motion"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

const pillars = [
    { num: "01", title: "Sin intermediarios", desc: "El arquitecto que diseña tu solución es el mismo que la despliega. Sin subcontratas, sin capas de gestión." },
    { num: "02", title: "Tres disciplinas en uno", desc: "Automatización de procesos, aplicaciones IA corporativas y chatbots. Pocas agencias en Barcelona dominan las tres." },
    { num: "03", title: "Sistemas en producción", desc: "No somos consultores de presentaciones. Desplegamos infraestructura real que funciona cuando tú no estás." },
    { num: "04", title: "Privacidad por diseño", desc: "Tu conocimiento corporativo se queda en tu infraestructura. Sin APIs externas que entrenen con tus datos." },
]

const evolution = [
    { tag: "Origen", title: "Automatización visual y prompting avanzado", desc: "Comenzamos dominando la lógica de automatización con Make y los límites del prompting. Servicios de imagen generativa que nos enseñaron a predecir comportamientos de modelos." },
    { tag: "Evolución", title: "Big Data, BI y Machine Learning", desc: "Arquitectura profunda. Formación intensiva en Big Data e infraestructuras de bases de datos complejas. Agentes autónomos y plataformas de IA completamente monitorizadas." },
    { tag: "Hoy", title: "Infraestructura enterprise en producción", desc: "Arquitectos de soluciones integrales. Orquestación de extremo a extremo con proyectos de infraestructura empresarial activos y en producción." },
]

export default function SobreNosotros() {
    return (
        <main className="min-h-screen bg-background text-foreground">
            <Navigation />

            {/* Hero */}
            <section className="pt-36 pb-32 border-b border-gray-100">
                <div className="container px-4 mx-auto">
                    <div className="flex items-center gap-2 text-xs font-bold text-foreground/40 mb-16 uppercase tracking-widest">
                        <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                        <ChevronRight className="h-3 w-3" />
                        <span className="text-primary">Sobre Nosotros</span>
                    </div>

                    <div className="max-w-6xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-[10px] font-black uppercase tracking-widest mb-12"
                        >
                            Agencia IA · Barcelona
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.05 }}
                            className="text-6xl md:text-[88px] lg:text-[120px] font-black tracking-tighter leading-[0.85] mb-16"
                        >
                            <span className="block text-[11px] font-black uppercase tracking-[0.45em] text-secondary/70 mb-6 leading-none">AutoProcessX</span>
                            Empresa de IA <br />
                            <span className="text-secondary italic">en Barcelona.</span>
                        </motion.h1>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.15 }}
                            className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl"
                        >
                            <p className="text-2xl text-foreground/60 font-medium leading-relaxed">
                                Somos una <strong className="text-foreground">empresa de inteligencia artificial</strong> en Barcelona que construye la infraestructura tecnológica que tu empresa necesita para escalar sin aumentar el equipo.
                            </p>
                            <p className="text-2xl text-foreground/40 font-medium leading-relaxed">
                                Automatización de procesos, aplicaciones IA corporativas y chatbots personalizados — tres disciplinas que muy pocas agencias dominan juntas.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Manifesto — dark */}
            <section className="bg-[#0a0a0b] py-32 overflow-hidden relative">
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-secondary/5 blur-[150px] rounded-full pointer-events-none" />
                <div className="container px-4 mx-auto relative z-10 max-w-5xl">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-[10px] font-black uppercase tracking-[0.5em] text-secondary mb-12"
                    >
                        Lo que creemos
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.05 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-tighter leading-[0.9] mb-16"
                    >
                        No somos una consultora.<br />
                        <span className="text-secondary italic">Somos los que ejecutan</span><br />
                        lo que otras subcontratan.
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-white/10 pt-16"
                    >
                        <p className="text-white/50 text-lg font-medium leading-relaxed">
                            Cuando una gran consultora — Accenture, IBM, SAP — te propone automatización con IA, suele subcontratar la ejecución. Nosotros somos los que ejecutan. El código lo escribimos nosotros. Los sistemas los desplegamos nosotros.
                        </p>
                        <p className="text-white/50 text-lg font-medium leading-relaxed">
                            Operamos con la agilidad de un equipo boutique y la profundidad técnica de arquitectos especializados en IA para empresas desde el primer día. El resultado es completamente tuyo.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Evolución */}
            <section className="py-40 bg-white border-b border-gray-100">
                <div className="container px-4 mx-auto">
                    <div className="flex items-center gap-6 mb-24">
                        <div className="h-[2px] w-12 bg-secondary" />
                        <span className="text-[10px] font-black uppercase tracking-[0.5em] text-secondary">Nuestra evolución técnica</span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-100">
                        {evolution.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="px-10 py-12 first:pl-0 last:pr-0 group"
                            >
                                <div className={`text-[96px] font-black tracking-tighter leading-none mb-8 select-none transition-colors ${i === 0 ? "text-primary/15 group-hover:text-primary/25" : i === 1 ? "text-secondary/15 group-hover:text-secondary/25" : "text-accent/15 group-hover:text-accent/25"}`}>
                                    0{i + 1}
                                </div>
                                <span className="text-[10px] font-black uppercase tracking-widest text-secondary bg-secondary/5 px-3 py-1.5 rounded-full border border-secondary/10 mb-6 inline-block">
                                    {item.tag}
                                </span>
                                <h3 className="text-2xl font-black tracking-tight mb-4 leading-tight">{item.title}</h3>
                                <p className="text-foreground/50 font-medium leading-relaxed text-sm">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Por qué — pillars dark */}
            <section className="py-32 bg-[#0a0a0b]">
                <div className="container px-4 mx-auto">
                    <div className="flex items-center gap-6 mb-8">
                        <div className="h-[2px] w-12 bg-primary" />
                        <span className="text-[10px] font-black uppercase tracking-[0.5em] text-primary">Por qué AutoProcessX</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-tight mb-24 max-w-xl">
                        Lo que nos diferencia <span className="text-primary italic">de verdad.</span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5">
                        {pillars.map((p, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.08 }}
                                className="p-10 bg-[#0a0a0b] hover:bg-white/[0.03] transition-colors group"
                            >
                                <span className="text-[64px] font-black text-white/5 group-hover:text-primary/20 transition-colors block mb-8 tracking-tighter leading-none select-none">{p.num}</span>
                                <h3 className="text-xl font-black text-white mb-4 tracking-tight">{p.title}</h3>
                                <p className="text-white/40 text-sm font-medium leading-relaxed">{p.desc}</p>
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
