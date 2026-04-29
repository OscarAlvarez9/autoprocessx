"use client"

import { motion } from "framer-motion"
import {
    Workflow,
    MessageCircle,
    Layers,
    ShieldCheck,
    Cpu,
    Database,
    GitBranch,
    Server,
    Lock,
    Activity,
    Sparkles,
    Code2,
    ArrowRight,
} from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import FinalCTA from "@/components/FinalCTA"
import Breadcrumbs from "@/components/Breadcrumbs"
import FAQ from "@/components/FAQ"
import { techFaqs } from "@/lib/faqs"

type StackItem = { name: string; role: string }

interface ServiceStack {
    id: string
    title: string
    href: string
    icon: React.ReactNode
    eyebrow: string
    summary: string
    layers: { label: string; icon: React.ReactNode; items: StackItem[] }[]
}

const serviceStacks: ServiceStack[] = [
    {
        id: "automatizaciones",
        title: "Automatizaciones",
        href: "/servicios/automatizaciones",
        icon: <Workflow className="h-5 w-5" />,
        eyebrow: "Workflow Engineering",
        summary: "Pipelines resilientes orquestados con n8n, agentes IA y conectores nativos. Coste 0€ por tarea, escalable bajo tu firewall.",
        layers: [
            {
                label: "Orquestación",
                icon: <Workflow className="h-3.5 w-3.5" />,
                items: [
                    { name: "n8n self-hosted", role: "Motor de workflows con código custom y conectores nativos" },
                    { name: "Node.js + TypeScript", role: "Lógica de negocio en nodos personalizados" },
                    { name: "Webhooks + Cron", role: "Triggers basados en eventos y ejecuciones programadas" },
                ],
            },
            {
                label: "Inteligencia",
                icon: <Sparkles className="h-3.5 w-3.5" />,
                items: [
                    { name: "Claude 3.5 Sonnet", role: "Razonamiento, redacción y clasificación de tareas" },
                    { name: "GPT-4o", role: "Tareas multimodales y procesamiento de imagen/voz" },
                    { name: "DataForSEO API", role: "Datos reales de SERP y keywords para SEO" },
                ],
            },
            {
                label: "Datos & Storage",
                icon: <Database className="h-3.5 w-3.5" />,
                items: [
                    { name: "Google Sheets / Excel", role: "Capa de exportación y reporting ejecutivo" },
                    { name: "PostgreSQL", role: "Persistencia de estados y trazabilidad de ejecuciones" },
                    { name: "S3 / Storage Bucket", role: "Almacenamiento de assets y resultados" },
                ],
            },
            {
                label: "Integraciones",
                icon: <GitBranch className="h-3.5 w-3.5" />,
                items: [
                    { name: "WhatsApp Business / Slack", role: "Notificaciones de estado y alertas en producción" },
                    { name: "Google Workspace", role: "Gmail, Calendar, Drive, Sheets, Docs" },
                    { name: "GSC + GA4", role: "Reporting SEO autónomo por dominio" },
                ],
            },
        ],
    },
    {
        id: "chatbots",
        title: "Chatbots IA",
        href: "/servicios/ai-chatbot",
        icon: <MessageCircle className="h-5 w-5" />,
        eyebrow: "Conversational AI",
        summary: "Agentes conversacionales con RAG sobre tu base de conocimiento. Web, WhatsApp, Instagram, Telegram — un agente unificado por canal.",
        layers: [
            {
                label: "Modelos",
                icon: <Cpu className="h-3.5 w-3.5" />,
                items: [
                    { name: "Claude 3.5 Sonnet", role: "Tono, razonamiento y baja tasa de alucinación" },
                    { name: "GPT-4o mini", role: "Latencia mínima para respuestas rápidas" },
                    { name: "Llama 3 / Mistral", role: "Modelos open-source en servidor propio sin APIs externas" },
                ],
            },
            {
                label: "RAG & Recuperación",
                icon: <Layers className="h-3.5 w-3.5" />,
                items: [
                    { name: "pgvector / Pinecone", role: "Vector DB para búsqueda semántica de documentos" },
                    { name: "OpenAI text-embedding-3", role: "Embeddings de tu documentación oficial" },
                    { name: "Cross-encoder re-ranking", role: "Re-ordenado de resultados para máxima relevancia" },
                ],
            },
            {
                label: "Canales",
                icon: <MessageCircle className="h-3.5 w-3.5" />,
                items: [
                    { name: "Widget Web (React)", role: "Componente embebible en cualquier site" },
                    { name: "WhatsApp Business API", role: "Conversaciones nativas con plantillas aprobadas" },
                    { name: "Instagram / Telegram", role: "DMs gestionados desde la misma capa de orquestación" },
                ],
            },
            {
                label: "Backend",
                icon: <Server className="h-3.5 w-3.5" />,
                items: [
                    { name: "Next.js API Routes", role: "Endpoints serverless para sesiones y memoria" },
                    { name: "PostgreSQL + Prisma", role: "Histórico conversacional y CRM integrado" },
                    { name: "Redis", role: "Caché de embeddings y rate-limiting" },
                ],
            },
        ],
    },
    {
        id: "plataformas",
        title: "Plataformas IA",
        href: "/servicios/aplicaciones-ia",
        icon: <Layers className="h-5 w-5" />,
        eyebrow: "Platform Engineering",
        summary: "Entorno corporativo unificado: CRM, pipeline, tareas, propuestas, agentes autónomos y RAG sobre tus datos. Bajo tu firewall.",
        layers: [
            {
                label: "Frontend",
                icon: <Code2 className="h-3.5 w-3.5" />,
                items: [
                    { name: "Next.js 16 App Router", role: "Server Components, streaming y rendering híbrido" },
                    { name: "TypeScript estricto", role: "Tipado end-to-end con Zod en boundaries" },
                    { name: "Tailwind v4 + shadcn/ui", role: "Sistema de diseño consistente y accesible" },
                ],
            },
            {
                label: "Backend",
                icon: <Server className="h-3.5 w-3.5" />,
                items: [
                    { name: "Next.js Route Handlers", role: "API REST + Server Actions para mutaciones" },
                    { name: "Prisma + PostgreSQL", role: "ORM con migraciones versionadas y schema relacional" },
                    { name: "n8n", role: "Motor de orquestación para flujos asíncronos" },
                ],
            },
            {
                label: "IA & Agentes",
                icon: <Sparkles className="h-3.5 w-3.5" />,
                items: [
                    { name: "Claude 3.5 Sonnet", role: "Agentes con acceso a módulos vía tool calling" },
                    { name: "Vector DB (pgvector)", role: "RAG sobre documentación corporativa" },
                    { name: "OpenAI Embeddings", role: "Indexación semántica de bases de conocimiento" },
                ],
            },
            {
                label: "Infra & DevOps",
                icon: <GitBranch className="h-3.5 w-3.5" />,
                items: [
                    { name: "AWS / GCP / On-Premise", role: "Despliegue en tu cuenta cloud o servidor propio" },
                    { name: "Docker + GitHub Actions", role: "CI/CD con builds reproducibles" },
                    { name: "Sentry + Logtail", role: "Observabilidad y alertas ante fallos críticos" },
                ],
            },
        ],
    },
]

const principles = [
    {
        icon: <Lock className="h-5 w-5" />,
        title: "Soberanía técnica",
        desc: "Código fuente, datos y agentes en tu repositorio. Sin licencias por usuario ni dependencia de proveedores externos críticos.",
    },
    {
        icon: <Server className="h-5 w-5" />,
        title: "On-Premise opcional",
        desc: "Desplegamos toda la stack en tu servidor sin conexión a APIs externas si lo requiere tu cumplimiento.",
    },
    {
        icon: <Activity className="h-5 w-5" />,
        title: "Producción real",
        desc: "Sistemas en operación 24/7 con retries, alertas y observabilidad completa documentada por proyecto.",
    },
    {
        icon: <ShieldCheck className="h-5 w-5" />,
        title: "Zero Retention",
        desc: "Acuerdos con proveedores LLM para que tus datos no se usen en entrenamiento. Cifrado AES-256 en reposo.",
    },
]

const security = [
    "Zero Data Retention",
    "AES-256 cifrado",
    "TLS 1.3 en tránsito",
    "RGPD compliant",
    "ISO 27001 ready",
    "On-Premise capable",
]

export default function Tecnologia() {
    return (
        <main className="min-h-screen bg-[#05070F] text-white selection:bg-amber-400/30">
            <Navigation />

            {/* Hero */}
            <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
                <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-amber-500/[0.07] blur-[180px] rounded-full pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-amber-300/[0.05] blur-[140px] rounded-full pointer-events-none" />

                <motion.div
                    animate={{ top: ["-20%", "120%"] }}
                    transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                    className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-amber-400/30 to-transparent z-10"
                />

                <div className="container relative z-10 px-6 mx-auto max-w-6xl">
                    <Breadcrumbs items={[{ label: "Tecnología" }]} className="mb-10 md:mb-14" />

                    <div className="text-center max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.92 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/30 backdrop-blur-md mb-7"
                        >
                            <span className="relative flex h-2 w-2">
                                <span className="absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75 animate-ping" />
                                <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-400" />
                            </span>
                            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-amber-200">
                                Stack & Architecture · In Production
                            </span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 24 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-[-0.025em] leading-[1] mb-6"
                        >
                            Un stack.{" "}
                            <span className="relative inline-block">
                                <span
                                    className="relative z-10 bg-gradient-to-br from-amber-200 via-amber-300 to-amber-500 bg-clip-text text-transparent"
                                    style={{ filter: "drop-shadow(0 0 24px rgba(251,191,36,0.35))" }}
                                >
                                    Tres servicios
                                </span>
                            </span>
                            .
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-base md:text-lg text-white/65 font-medium leading-relaxed max-w-2xl mx-auto mb-10"
                        >
                            Misma filosofía técnica desplegada en automatizaciones, chatbots y plataformas. Sin SaaS de terceros — todo bajo tu control.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="flex flex-wrap justify-center gap-2"
                        >
                            {serviceStacks.map((s) => (
                                <a
                                    key={s.id}
                                    href={`#${s.id}`}
                                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-white/[0.04] border border-white/10 hover:border-amber-400/40 hover:bg-amber-400/[0.06] transition-all group"
                                >
                                    <span className="text-amber-300">{s.icon}</span>
                                    <span className="text-[11px] font-black uppercase tracking-[0.2em] text-white/85 group-hover:text-white">
                                        {s.title}
                                    </span>
                                </a>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Service stacks */}
            <section className="py-16 md:py-20 bg-[#05070F]">
                <div className="container px-6 mx-auto max-w-6xl space-y-16 md:space-y-24">
                    {serviceStacks.map((service, i) => (
                        <motion.div
                            key={service.id}
                            id={service.id}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{ duration: 0.6 }}
                            className="scroll-mt-24"
                        >
                            {/* Service header */}
                            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8 md:mb-10">
                                <div className="max-w-2xl">
                                    <div className="flex items-center gap-3 mb-3">
                                        <span className="text-[10px] font-black uppercase tracking-[0.35em] text-amber-400 tabular-nums">
                                            0{i + 1}
                                        </span>
                                        <div className="h-[1px] flex-1 max-w-[60px] bg-amber-400/30" />
                                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40">
                                            {service.eyebrow}
                                        </span>
                                    </div>
                                    <h2 className="text-3xl md:text-5xl font-black text-white leading-[1.05] tracking-tight mb-3">
                                        Stack para <span className="text-accent">{service.title}</span>
                                    </h2>
                                    <p className="text-white/60 text-sm md:text-base font-medium leading-relaxed">
                                        {service.summary}
                                    </p>
                                </div>

                                <Link href={service.href}>
                                    <Button className="h-11 px-5 rounded-xl bg-white/[0.04] border border-white/15 hover:border-amber-400/50 hover:bg-amber-400/10 text-white text-xs font-black uppercase tracking-[0.2em] transition-all flex items-center gap-2">
                                        Ver servicio
                                        <ArrowRight className="h-3.5 w-3.5" />
                                    </Button>
                                </Link>
                            </div>

                            {/* Layers grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                                {service.layers.map((layer) => (
                                    <div
                                        key={layer.label}
                                        className="rounded-2xl border border-white/10 bg-[#0F1424] hover:border-amber-400/25 transition-colors overflow-hidden"
                                    >
                                        {/* Layer header */}
                                        <div className="flex items-center gap-2.5 px-5 md:px-6 py-3.5 border-b border-white/10 bg-white/[0.02]">
                                            <span className="h-7 w-7 rounded-lg bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-300">
                                                {layer.icon}
                                            </span>
                                            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/85">
                                                {layer.label}
                                            </span>
                                            <div className="ml-auto h-1.5 w-1.5 rounded-full bg-amber-400 animate-pulse" />
                                        </div>

                                        {/* Items */}
                                        <ul className="divide-y divide-white/5">
                                            {layer.items.map((item) => (
                                                <li
                                                    key={item.name}
                                                    className="px-5 md:px-6 py-3.5 hover:bg-white/[0.02] transition-colors"
                                                >
                                                    <div className="flex items-baseline gap-3">
                                                        <span className="text-sm font-black text-white tracking-tight shrink-0">
                                                            {item.name}
                                                        </span>
                                                        <span className="h-[1px] flex-1 bg-white/5 translate-y-[-2px]" />
                                                    </div>
                                                    <p className="text-xs text-white/50 font-medium leading-snug mt-1">
                                                        {item.role}
                                                    </p>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Principles */}
            <section className="py-16 md:py-24 bg-[#05070F] border-t border-white/5 relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-amber-500/[0.05] blur-[160px] rounded-full pointer-events-none" />
                <div className="container px-6 mx-auto max-w-6xl relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
                        <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-[10px] font-black uppercase tracking-[0.3em] mb-6">
                            <ShieldCheck className="h-3.5 w-3.5" />
                            Engineering Principles
                        </div>
                        <h2 className="text-3xl md:text-5xl font-black text-white mb-5 leading-[1.05] tracking-tight">
                            Cuatro reglas <span className="text-accent">no negociables</span>.
                        </h2>
                        <p className="text-white/65 text-base md:text-lg font-medium leading-relaxed max-w-2xl mx-auto">
                            Cómo construimos cada sistema para que opere 24/7 sin nuestra intervención.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {principles.map((p, i) => (
                            <motion.div
                                key={p.title}
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.06 }}
                                className="p-6 rounded-2xl bg-[#0F1424] border border-white/10 hover:border-amber-400/30 transition-all"
                            >
                                <div className="h-10 w-10 rounded-xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-300 mb-4">
                                    {p.icon}
                                </div>
                                <h3 className="text-base md:text-lg font-black text-white tracking-tight mb-2">
                                    {p.title}
                                </h3>
                                <p className="text-white/55 text-xs md:text-sm font-medium leading-relaxed">
                                    {p.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Security badges */}
                    <div className="mt-12 md:mt-16 flex flex-wrap justify-center gap-2 md:gap-3">
                        {security.map((s) => (
                            <span
                                key={s}
                                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full border border-white/10 bg-white/[0.03] text-[10px] font-black uppercase tracking-[0.25em] text-white/60"
                            >
                                <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                                {s}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            <FAQ
                items={techFaqs}
                eyebrow="Stack & Architecture · FAQ"
                title="Dudas técnicas sobre"
                titleAccent="nuestro stack"
                description="LLMs, RAG, seguridad, hosting on-premise y monitorización en producción — sin marketing."
            />
            <FinalCTA />
            <Footer />
        </main>
    )
}
