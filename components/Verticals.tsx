"use client"

import { motion } from "framer-motion"
import { Building2, Stethoscope, ShoppingBag, ArrowRight, Activity, Terminal } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import DarkBackground from "@/components/DarkBackground"

const sectors = [
    {
        title: "Marketing Intelligence",
        alias: "Agencias & Media",
        icon: <Building2 className="h-6 w-6 text-accent" />,
        anchor: "System ID: PELICAN-CATCHY",
        description: "Infraestructura de reporting autónomo y orquestación de tareas en Asana para escalar el margen operativo sin aumentar headcount.",
        features: [
            "Reporting dinámico en WhatsApp",
            "Generador de activos SEO",
            "Orquestación Asana-IA",
            "Auditorías PPC en tiempo real"
        ],
        cta: "Analizar Protocolo",
        href: "/servicios/automatizaciones",
        color: "accent"
    },
    {
        title: "Clinical Infrastructure",
        alias: "Salud & Pharma",
        icon: <Stethoscope className="h-6 w-6 text-accent" />,
        anchor: "System ID: GARCIA-CERRO",
        description: "Motor de contenido clínico y gestión de expedientes mediante RAG, garantizando autoridad digital y cumplimiento técnico.",
        features: [
            "Motor SEO Clínico Autónomo",
            "Triaje inteligente de pacientes",
            "Análisis de Feedback Vectorial",
            "Sincronización Local SEO"
        ],
        cta: "Analizar Protocolo",
        href: "/servicios/aplicaciones-ia",
        color: "accent"
    },
    {
        title: "Product Ecosystems",
        alias: "SaaS & Real Estate",
        icon: <ShoppingBag className="h-6 w-6 text-accent" />,
        anchor: "System ID: OPOAI-CORP",
        description: "Despliegue de portales de cliente con agentes IA embebidos y pipelines predictivos para optimizar el ciclo de venta.",
        features: [
            "Portales con Agentes Llama/GPT",
            "Predictive Sales Pipeline",
            "Soporte Autónomo On-Chain",
            "Generación masiva de propuestas"
        ],
        cta: "Analizar Protocolo",
        href: "/tecnologia",
        color: "accent"
    }
]

export default function Verticals() {
    return (
        <section className="py-24 md:py-32 text-white overflow-hidden relative">
            <DarkBackground accent="accent" secondaryAccent="primary" intensity="soft" />

            <div className="container px-6 mx-auto relative z-10">
                <div className="flex flex-col lg:flex-row items-end justify-between mb-20 md:mb-24 gap-12">
                    <div className="max-w-3xl">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="h-[2px] w-10 bg-accent opacity-50" />
                            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40">Multi-Sector Deployment</span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-[1.05] mb-5">
                            Protocolos por <span className="text-accent">vertical</span>.
                        </h2>
                        <p className="text-base md:text-lg text-white/65 font-medium leading-relaxed max-w-2xl">
                            Infraestructuras replicables validadas en entornos de producción real. Despliegue de alta fidelidad sin periodos de prueba.
                        </p>
                    </div>

                    <div className="hidden lg:flex items-center gap-4 px-6 py-4 rounded-2xl bg-[#0F1424] border border-white/10 backdrop-blur-xl">
                        <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                        <div>
                            <div className="text-[9px] font-black uppercase tracking-[0.3em] text-white/40 mb-0.5">Sector Coverage</div>
                            <div className="text-sm font-black text-white tracking-tight">3 Protocolos · 8+ Despliegues</div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
                    {sectors.map((sector, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="p-8 md:p-10 rounded-[32px] md:rounded-[40px] bg-[#0F1424] border border-white/5 flex flex-col items-start hover:border-accent/30 transition-all group overflow-hidden relative"
                        >
                            <div className="absolute top-0 right-0 p-6 text-white/[0.03] group-hover:text-accent/10 transition-colors">
                                <Terminal className="h-8 w-8" />
                            </div>

                            <div className="mb-8 p-4 rounded-2xl bg-[#0F1424] border border-white/10 flex items-center justify-center text-accent group-hover:border-accent/50 transition-colors">
                                {sector.icon}
                            </div>

                            <div className="text-[9px] font-black uppercase tracking-[0.3em] text-white/40 mb-3 flex items-center gap-2.5">
                                <Activity className="h-3 w-3 text-accent animate-pulse" />
                                {sector.anchor}
                            </div>

                            <h3 className="text-2xl md:text-3xl font-black mb-1.5 tracking-tight leading-tight">{sector.title}</h3>
                            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-accent mb-5">{sector.alias}</p>

                            <p className="text-white/55 text-sm md:text-base font-medium leading-relaxed mb-8">
                                {sector.description}
                            </p>

                            <ul className="space-y-3 mb-10 w-full border-l border-white/10 pl-5">
                                {sector.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-center gap-3 text-[10px] font-black text-white/40 uppercase tracking-[0.15em] group-hover:text-white/70 transition-colors">
                                        <div className="h-1 w-1 rounded-full bg-accent/40" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-auto w-full pt-6 border-t border-white/5">
                                <Link href={sector.href} className="w-full">
                                    <Button className="w-full h-12 rounded-xl bg-transparent border border-white/10 text-white hover:bg-accent hover:text-black transition-all font-black uppercase tracking-[0.25em] text-[10px] active:scale-95">
                                        {sector.cta}
                                        <ArrowRight className="ml-3 h-4 w-4" />
                                    </Button>
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
