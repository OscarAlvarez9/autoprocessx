"use client"

import { motion } from "framer-motion"
import { Search, Rocket, MessagesSquare, ChevronRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { serviceColors, type ServiceKey } from "@/lib/service-colors"
import DarkBackground from "@/components/DarkBackground"

const services: Array<{
    id: string
    serviceKey: ServiceKey
    title: string
    alias: string
    desc: string
    icon: React.ReactNode
    href: string
    tech: string[]
    features: string[]
}> = [
    {
        id: "01",
        serviceKey: "automation",
        title: "Platform Infrastructure",
        alias: "Automatización de Procesos",
        desc: "Diseñamos la estructura técnica que orquesta tus procesos internos. Despliegue de pipelines en n8n con manejo de estados y redundancia.",
        icon: <Rocket className="h-6 w-6" strokeWidth={2} />,
        href: "/servicios/automatizaciones",
        tech: ["n8n.io", "Make", "Webhooks"],
        features: ["Orquestación de workflows", "Sincronización de datos", "Pipelines de eventos"],
    },
    {
        id: "02",
        serviceKey: "ai-apps",
        title: "Cognitive Engineering",
        alias: "Aplicaciones IA Corporativas",
        desc: "Asistentes que conocen vuestros procedimientos mejor que cualquier empleado nuevo. Sistemas RAG Zero-Hallucination entrenados con vuestro capital intelectual.",
        icon: <Search className="h-6 w-6" strokeWidth={2} />,
        href: "/servicios/aplicaciones-ia",
        tech: ["Vector DBs", "Claude 3.5", "GPT-4o"],
        features: ["Arquitecturas RAG", "Multi-Agent Systems", "Análisis vectorial"],
    },
    {
        id: "03",
        serviceKey: "chatbot",
        title: "Autonomous Interfaces",
        alias: "AI Chatbot & Agents",
        desc: "Interfaces de conversación autónomas desplegadas en canales críticos. Atención técnica y cualificación de leads sin intervención humana.",
        icon: <MessagesSquare className="h-6 w-6" strokeWidth={2} />,
        href: "/servicios/ai-chatbot",
        tech: ["WhatsApp API", "Voice AI", "Lead Logic"],
        features: ["Agentes 24/7", "Cierre de ventas", "Integración omnicanal"],
    },
]

export default function Services() {
    return (
        <section id="servicios" className="py-24 md:py-32 text-white overflow-hidden relative">
            <DarkBackground accent="neutral" secondaryAccent="accent" intensity="soft" />

            <div className="container relative z-10 px-6 mx-auto">
                <div className="flex flex-col lg:flex-row items-end justify-between gap-10 mb-16 md:mb-24">
                    <div className="max-w-3xl">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="h-[2px] w-10 bg-white/40" />
                            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/50">Deployment Capabilities</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-black tracking-tight leading-[1.05] mb-5">
                            Nuestras <span className="italic text-white/70">Verticales</span>.
                        </h2>
                        <p className="text-base md:text-lg text-white/65 font-medium leading-relaxed max-w-2xl">
                            Tres líneas de servicio con arquitectura independiente. Cada una con su categoría, su stack operacional y su protocolo de despliegue.
                        </p>
                    </div>

                    {/* Color legend */}
                    <div className="hidden lg:flex flex-col gap-2 px-5 py-4 rounded-2xl bg-[#0F1424] border border-white/10 backdrop-blur-xl">
                        {(Object.keys(serviceColors) as ServiceKey[]).map((k) => {
                            const c = serviceColors[k]
                            return (
                                <div key={k} className="flex items-center gap-3">
                                    <div className={`h-2 w-2 rounded-full ${c.dot}`} />
                                    <span className="text-[9px] font-black uppercase tracking-[0.2em] text-white/60">{c.name}</span>
                                </div>
                            )
                        })}
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
                    {services.map((service, i) => {
                        const c = serviceColors[service.serviceKey]
                        return (
                            <motion.div
                                key={service.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className={`group relative flex flex-col p-8 md:p-10 rounded-[32px] md:rounded-[40px] bg-[#0F1424] border border-white/10 ${c.borderHover} transition-all duration-500 overflow-hidden`}
                            >
                                {/* Color accent bar - top */}
                                <div className={`absolute top-0 left-0 right-0 h-1 ${c.bg}`} />

                                {/* Hover Glow */}
                                <div className={`absolute -top-24 -right-24 w-64 h-64 ${c.glow} rounded-full blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />

                                <div className="relative flex justify-between items-start mb-8">
                                    <div className={`h-14 w-14 rounded-2xl ${c.bgSoft} border ${c.border} flex items-center justify-center ${c.text}`}>
                                        {service.icon}
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className={`text-[9px] font-black uppercase tracking-[0.25em] ${c.text}`}>
                                            SVC_{service.id}
                                        </span>
                                        <div className={`h-1.5 w-1.5 rounded-full ${c.dot} animate-pulse`} />
                                    </div>
                                </div>

                                <div className="relative mb-8">
                                    <span className={`text-[10px] font-black uppercase tracking-[0.3em] ${c.text} mb-3 block`}>
                                        {service.title}
                                    </span>
                                    <h3 className="text-2xl md:text-3xl font-black mb-5 tracking-tight leading-tight text-white">
                                        {service.alias}
                                    </h3>
                                    <p className="text-white/65 font-medium leading-relaxed text-base">
                                        {service.desc}
                                    </p>
                                </div>

                                <div className="relative mb-8 space-y-2.5">
                                    {service.features.map((feature, idx) => (
                                        <div key={idx} className="flex items-center gap-3">
                                            <div className={`h-1.5 w-1.5 rounded-full ${c.dot}`} />
                                            <span className="text-[11px] font-bold text-white/75 tracking-wide">
                                                {feature}
                                            </span>
                                        </div>
                                    ))}
                                </div>

                                <div className="relative mt-auto pt-6 border-t border-white/10">
                                    <div className="flex flex-wrap gap-1.5 mb-6">
                                        {service.tech.map((t, idx) => (
                                            <span
                                                key={idx}
                                                className={`px-2.5 py-1 rounded-md bg-[#0F1424] border border-white/10 text-[10px] font-black uppercase tracking-wider text-white/80 whitespace-nowrap`}
                                            >
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                    <Link href={service.href}>
                                        <Button
                                            className={`w-full bg-white/5 border border-white/15 text-white ${c.hoverBg} hover:text-black ${c.hoverBorder} h-14 rounded-xl font-black uppercase tracking-[0.25em] text-[10px] transition-all active:scale-95`}
                                        >
                                            Protocolo Spec
                                            <ChevronRight className="ml-2 h-4 w-4" />
                                        </Button>
                                    </Link>
                                </div>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
