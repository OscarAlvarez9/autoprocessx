"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Cpu, Database, GitBranch, Shield, Workflow, Zap } from "lucide-react"

const pillars = [
    {
        id: "L1",
        icon: Database,
        accent: "text-primary",
        hoverBorder: "hover:border-primary/30",
        label: "Layer · Infrastructure",
        title: "Infraestructura Base",
        stack: ["PostgreSQL", "AWS", "Docker", "Vercel"],
        desc: "Bases de datos relacionales, cloud enterprise y despliegue continuo — no SaaS de terceros.",
    },
    {
        id: "L2",
        icon: Workflow,
        accent: "text-secondary",
        hoverBorder: "hover:border-secondary/30",
        label: "Layer · Automation",
        title: "Motor de Automatización",
        stack: ["n8n self-hosted", "APIs nativas", "Webhooks", "Workers"],
        desc: "Orquestación propia sin límites de tareas ni suscripciones abusivas. Coste por ejecución: 0€.",
    },
    {
        id: "L3",
        icon: Cpu,
        accent: "text-cyan-500",
        hoverBorder: "hover:border-cyan-400/30",
        label: "Layer · Intelligence",
        title: "Capa de Inteligencia",
        stack: ["Claude 3.5", "Gemini 2.0", "RAG", "Vector DB"],
        desc: "LLMs razonadores + recuperación semántica con Zero-Hallucination sobre datos propios.",
    },
    {
        id: "L4",
        icon: GitBranch,
        accent: "text-accent",
        hoverBorder: "hover:border-accent/30",
        label: "Layer · Application",
        title: "Interfaz & Producto",
        stack: ["Next.js 15", "TypeScript", "Prisma", "Tailwind"],
        desc: "Plataformas completas, no plantillas. Agentes IA con acceso nativo a cada módulo.",
    },
]

const verticals = [
    {
        sector: "Agencias de Marketing",
        focus: "Ops anuales · Calendario editorial IA · Multi-cliente",
        ref: "VERT_MKT",
    },
    {
        sector: "Farmacia & Salud",
        focus: "Blog SEO autónomo · Contenido compliance",
        ref: "VERT_PHARMA",
    },
    {
        sector: "Consultoría & Legal",
        focus: "Análisis documental · RAG sobre normativa",
        ref: "VERT_LEGAL",
    },
    {
        sector: "SaaS & EdTech",
        focus: "Plataformas full-stack · Agentes autónomos",
        ref: "VERT_SAAS",
    },
]

export default function TechnicalSpecs() {
    const sectionRef = useRef<HTMLElement>(null)
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    })
    const progressWidth = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "100%"])

    return (
        <section
            ref={sectionRef}
            id="tech-specs"
            className="relative py-24 md:py-32 bg-white text-foreground overflow-hidden"
        >
            {/* Top signal bar */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-foreground/5">
                <motion.div
                    style={{ width: progressWidth }}
                    className="h-full bg-gradient-to-r from-primary via-secondary to-accent"
                />
            </div>

            <div className="container relative z-10 px-6 mx-auto">
                {/* Header */}
                <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-16 md:mb-24">
                    <div className="max-w-2xl">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="h-[2px] w-10 bg-primary" />
                            <span className="text-[10px] font-black uppercase tracking-[0.35em] text-primary">
                                Technical Specifications · v2.0
                            </span>
                        </div>
                        <h2 className="text-4xl md:text-5xl lg:text-[64px] font-black tracking-tighter leading-[0.95] mb-6">
                            Arquitectura en <span className="text-primary italic">4 capas</span>.<br />
                            Sin cajas negras.
                        </h2>
                        <p className="text-foreground/50 text-base md:text-lg font-medium leading-relaxed">
                            Toda nuestra ingeniería — de la base de datos al agente IA — desplegada, auditable y bajo tu control. No dependes de Zapier ni de ningún SaaS intermediario.
                        </p>
                    </div>

                    {/* Tech metric chip */}
                    <div className="w-full lg:w-auto grid grid-cols-3 gap-3 lg:gap-4">
                        <MetricChip value="12+" label="Deployments" />
                        <MetricChip value="4" label="Layers" />
                        <MetricChip value="0€" label="Cost/Task" />
                    </div>
                </div>

                {/* Pillars grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-20 md:mb-28">
                    {pillars.map((p, i) => (
                        <PillarCard key={p.id} pillar={p} index={i} />
                    ))}
                </div>

                {/* Vertical specialization */}
                <div className="border-t border-gray-100 pt-16 md:pt-20">
                    <div className="flex items-center gap-3 mb-8">
                        <Shield className="h-4 w-4 text-foreground/40" />
                        <span className="text-[10px] font-black uppercase tracking-[0.35em] text-foreground/40">
                            Vertical Specialization · Sector Focus
                        </span>
                    </div>

                    <h3 className="text-2xl md:text-4xl font-black tracking-tight leading-tight mb-10 md:mb-12 max-w-3xl">
                        Infraestructura IA adaptada a <span className="text-secondary italic">tu sector</span>.
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
                        {verticals.map((v) => (
                            <div
                                key={v.ref}
                                className="group p-6 rounded-2xl bg-muted border border-transparent hover:border-primary/20 transition-all"
                            >
                                <div className="flex items-center justify-between mb-4">
                                    <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                                    <span className="text-[9px] font-black uppercase tracking-[0.25em] text-foreground/30">
                                        {v.ref}
                                    </span>
                                </div>
                                <h4 className="font-black text-base tracking-tight mb-2 group-hover:text-primary transition-colors">
                                    {v.sector}
                                </h4>
                                <p className="text-[11px] font-bold text-foreground/50 leading-relaxed">
                                    {v.focus}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

function MetricChip({ value, label }: { value: string; label: string }) {
    return (
        <div className="p-4 md:p-5 rounded-2xl border border-gray-100 bg-white text-center">
            <div className="text-2xl md:text-3xl font-black tracking-tighter text-foreground">{value}</div>
            <div className="text-[9px] font-black uppercase tracking-[0.25em] text-foreground/40 mt-1">
                {label}
            </div>
        </div>
    )
}

function PillarCard({
    pillar,
    index,
}: {
    pillar: typeof pillars[0]
    index: number
}) {
    const Icon = pillar.icon
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className={`group relative p-8 md:p-10 rounded-[24px] md:rounded-[32px] bg-white border border-gray-100 ${pillar.hoverBorder} hover:shadow-xl hover:-translate-y-1 transition-all duration-500`}
        >
            {/* Layer tag */}
            <div className="flex items-start justify-between mb-8">
                <div className={`p-3 rounded-xl bg-gray-50 border border-gray-100 ${pillar.accent}`}>
                    <Icon className="h-5 w-5" strokeWidth={2.2} />
                </div>
                <span className={`text-[9px] font-black uppercase tracking-[0.3em] ${pillar.accent}`}>
                    {pillar.id}
                </span>
            </div>

            <div className="text-[10px] font-black uppercase tracking-[0.3em] text-foreground/40 mb-2">
                {pillar.label}
            </div>
            <h3 className="text-2xl md:text-3xl font-black tracking-tight mb-4">
                {pillar.title}
            </h3>
            <p className="text-foreground/60 text-sm md:text-base font-medium leading-relaxed mb-6">
                {pillar.desc}
            </p>

            <div className="pt-6 border-t border-gray-100">
                <div className="flex items-center gap-2 mb-3">
                    <Zap className="h-3 w-3 text-foreground/40" />
                    <span className="text-[9px] font-black uppercase tracking-[0.25em] text-foreground/40">
                        Stack
                    </span>
                </div>
                <div className="flex flex-wrap gap-2">
                    {pillar.stack.map((s) => (
                        <span
                            key={s}
                            className="px-2.5 py-1 rounded-md bg-gray-50 border border-gray-100 text-[10px] font-black text-foreground/70 tracking-tight"
                        >
                            {s}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    )
}
