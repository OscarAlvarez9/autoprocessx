"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Cpu, Database, Network, ShieldCheck, Sparkles, Activity } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import FinalCTA from "@/components/FinalCTA"
import Breadcrumbs from "@/components/Breadcrumbs"
import JsonLd from "@/components/JsonLd"
import { CaseStudy } from "@/lib/cases"
import { ORG_ID, SITE_URL } from "@/lib/seo"

const SERVICE_URL_MAP: Record<string, string> = {
    "automatizaciones": `${SITE_URL}/servicios/automatizaciones`,
    "aplicaciones-ia": `${SITE_URL}/servicios/a-medida`,
    "agente-ventas-ia": `${SITE_URL}/servicios/agente-ventas-ia`,
}

const platformModules = [
    {
        tag: "Dashboard & Pipeline",
        tagColor: "text-accent bg-accent/5 border-accent/10",
        title: "Control total por empresa",
        desc: "Cada empresa tiene su propio entorno independiente: clientes activos, leads en pipeline, tareas pendientes y propuestas abiertas en tiempo real desde Supabase.",
        image: "/assets/platform_dashboard.png",
        alt: "Business Suite Dashboard — SEOscar",
    },
    {
        tag: "Pipeline de Ventas",
        tagColor: "text-accent bg-accent/5 border-accent/10",
        title: "Kanban estilo Notion",
        desc: "Pipeline visual con columnas configurables: Nuevos Leads, Contactados, Reunión Agendada, Propuesta Enviada y Convertidos. Drag & drop nativo.",
        image: "/assets/platform_pipeline.png",
        alt: "Pipeline de Ventas Kanban — SEOscar",
    },
    {
        tag: "Cartera de Clientes",
        tagColor: "text-accent bg-accent/5 border-accent/10",
        title: "CRM integrado en la plataforma",
        desc: "Gestión de clientes con estado en tiempo real (Activo, Onboarding, En Riesgo, Mantenimiento), contacto principal y fecha de alta. Todo en una sola vista.",
        image: "/assets/platform_clientes.png",
        alt: "CRM Cartera de Clientes — SEOscar",
    },
    {
        tag: "Calendario",
        tagColor: "text-accent bg-accent/5 border-accent/10",
        title: "Sincronizado con Google Calendar",
        desc: "Las reuniones y eventos se sincronizan directamente con Google Calendar. Aparecen en el móvil y ordenador de cada miembro del equipo sin ninguna acción extra.",
        image: "/assets/platform_calendario.png",
        alt: "Calendario Google Calendar — SEOscar",
    },
    {
        tag: "Tareas & Operaciones",
        tagColor: "text-accent bg-accent/5 border-accent/10",
        title: "Gestión de tareas estilo Asana",
        desc: "Tareas con estados (Pendiente, En progreso, Completada) filtradas por empresa. Cada tarea puede enviarse al calendario del equipo con un clic.",
        image: "/assets/platform_tareas.png",
        alt: "Tareas y Operaciones — SEOscar",
    },
    {
        tag: "Generador de Propuestas",
        tagColor: "text-accent bg-accent/5 border-accent/10",
        title: "De formulario a .docx en un clic",
        desc: "Genera propuestas con tu plantilla corporativa, descárgalas como .docx o envíalas por email desde la plataforma. Cada envío queda registrado automáticamente en la base de datos.",
        image: "/assets/platform_propuestas.png",
        alt: "Generador de Propuestas — SEOscar",
    },
]

const opoaiModules = [
    {
        tag: "Dashboard Principal",
        tagColor: "text-accent bg-accent/5 border-accent/10",
        title: "Vista global del rendimiento",
        desc: "Panel central con resumen de progreso por bloque temático, últimas sesiones de estudio, simulacros pendientes y estadísticas de rendimiento en tiempo real.",
        image: "/assets/opoai_dashboard.png",
        alt: "OpoAI Dashboard Principal",
    },
    {
        tag: "Temario Oficial",
        tagColor: "text-accent bg-accent/5 border-accent/10",
        title: "Contenido estructurado por bloques",
        desc: "Todo el temario oficial organizado en bloques y temas navegables. Cada lección está vectorizada para que el tutor IA pueda referenciarla con precisión absoluta.",
        image: "/assets/opoai_temario.png",
        alt: "OpoAI Temario Oficial",
    },
    {
        tag: "Tutor IA",
        tagColor: "text-accent bg-accent/5 border-accent/10",
        title: "Tutor RAG con citación de fuentes",
        desc: "Entrenado sobre miles de páginas de temario oficial, el tutor responde con precisión absoluta sin inventar nada porque trabaja sobre documentación vectorizada real. Una infraestructura diseñada para despliegues masivos en firmas de consultoría y auditoría.",
        image: "/assets/opoai_tutor.png",
        alt: "OpoAI Tutor IA",
    },
    {
        tag: "Modo Estudio",
        tagColor: "text-accent bg-accent/5 border-accent/10",
        title: "Estudio activo con flashcards",
        desc: "Sistema de repaso con flashcards generadas automáticamente por IA a partir del temario. Repetición espaciada para maximizar la retención a largo plazo.",
        image: "/assets/opoai_flashcard.png",
        alt: "OpoAI Modo Estudio Flashcards",
    },
    {
        tag: "Opolingo",
        tagColor: "text-accent bg-accent/5 border-accent/10",
        title: "Gamificación del aprendizaje",
        desc: "Módulo tipo Duolingo para reforzar conceptos clave mediante retos diarios, streaks y recompensas. Convierte el estudio repetitivo en una experiencia motivadora.",
        image: "/assets/opoai_opolingo.png",
        alt: "OpoAI Opolingo",
    },
    {
        tag: "Simulacros Oficiales",
        tagColor: "text-accent bg-accent/5 border-accent/10",
        title: "Exámenes cronometrados reales",
        desc: "Simulacros generados con el mismo formato y nivel de dificultad que las pruebas oficiales. Temporizador, corrección automática e informe de errores por bloque.",
        image: "/assets/opoai_simulacro.png",
        alt: "OpoAI Simulacros",
    },
    {
        tag: "Progreso",
        tagColor: "text-accent bg-accent/5 border-accent/10",
        title: "Análisis de rendimiento detallado",
        desc: "Gráficas de evolución por semana, bloque y tipo de pregunta. Identifica automáticamente los temas con mayor margen de mejora y los prioriza en el plan de estudio.",
        image: "/assets/opoai_progreso.png",
        alt: "OpoAI Progreso",
    },
    {
        tag: "Ranking",
        tagColor: "text-accent bg-accent/5 border-accent/10",
        title: "Competición entre opositores",
        desc: "Clasificación en tiempo real entre todos los usuarios de la plataforma. El ranking por simulacros genera competitividad sana y mantiene la motivación alta.",
        image: "/assets/opoai_ranking.png",
        alt: "OpoAI Ranking",
    },
]

interface Props {
    caso: CaseStudy
}

export default function CaseSpecsContent({ caso }: Props) {
    const url = `${SITE_URL}/casos-de-exito/${caso.slug}`
    const serviceUrl = caso.serviceType ? SERVICE_URL_MAP[caso.serviceType] : undefined

    // Build article body for SEO — concatenated long-form sections
    const articleBody = [
        caso.clientContext,
        caso.previousState,
        caso.architecture,
        caso.verifiedMetrics,
        caso.lessonsLearned,
    ].filter(Boolean).join("\n\n")
    const wordCount = articleBody ? articleBody.trim().split(/\s+/).length : 0

    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "Article",
        "@id": `${url}#article`,
        headline: caso.title,
        description: caso.desc,
        url,
        image: `${SITE_URL}${caso.image}`,
        datePublished: caso.publishedAt ?? "2026-01-01",
        dateModified: caso.publishedAt ?? "2026-01-01",
        inLanguage: "es-ES",
        ...(articleBody ? { articleBody } : {}),
        ...(wordCount ? { wordCount } : {}),
        author: { "@id": ORG_ID },
        publisher: { "@id": ORG_ID },
        mainEntityOfPage: {
            "@type": "WebPage",
            "@id": url,
        },
        ...(serviceUrl
            ? {
                  about: {
                      "@type": "Service",
                      "@id": `${serviceUrl}#service`,
                      name: caso.title,
                      url: serviceUrl,
                      provider: { "@id": ORG_ID },
                  },
              }
            : {}),
        mentions: [
            {
                "@type": "Organization",
                name: caso.client,
                ...(caso.clientUrl ? { url: caso.clientUrl } : {}),
            },
        ],
        keywords: caso.tags.join(", "),
        articleSection: caso.sector,
    }

    return (
        <div className="flex flex-col min-h-screen bg-[#FAFAFA] text-[#09090B] selection:bg-primary/20">
            <JsonLd data={articleSchema} />
            <Navigation />

            {/* Hero: Technical Specification Header */}
            <div className="relative pt-32 pb-12 md:pt-40 md:pb-24 overflow-hidden border-b border-[#E4E4E7]">
              {/* Blueprint Grid Pattern */}
              <div className="absolute inset-0 z-0 opacity-20">
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
              </div>
              
              <motion.div 
                  animate={{ top: ['-20%', '120%'] }}
                  transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                  className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-accent/30 to-transparent z-10"
              />

              <div className="container relative z-10 px-6 mx-auto">
                <Breadcrumbs
                    items={[
                        { label: "Casos de Éxito", href: "/casos-de-exito" },
                        { label: caso.title },
                    ]}
                    className="mb-8 md:mb-12"
                />

                <div className="flex flex-col lg:flex-row justify-between items-start gap-10 md:gap-16">
                    <div className="max-w-4xl">
                        <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-6 md:mb-8">
                            <span className="px-3 py-1 bg-zinc-100 border border-[#E4E4E7] text-zinc-500 text-[10px] font-black uppercase tracking-widest rounded-full">Spec ID: {caso.id}</span>
                            <span className="px-3 py-1 bg-accent/10 border border-accent/20 text-accent text-[10px] font-black uppercase tracking-widest rounded-full flex items-center gap-2">
                                <Activity className="h-3 w-3" />
                                Live in Production
                            </span>
                        </div>
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-3xl sm:text-5xl md:text-[88px] font-black tracking-tighter leading-tight md:leading-[0.85] text-[#09090B] mb-6 md:mb-10"
                        >
                            Infrastructure <span className="text-accent italic">Report.</span><br />
                            {caso.title}
                        </motion.h1>
                        <p className="text-base sm:text-lg md:text-2xl text-zinc-500 font-medium italic leading-snug md:leading-tight max-w-2xl">
                            {caso.desc}
                        </p>
                    </div>

                    <div className="w-full lg:w-[380px] p-6 md:p-10 rounded-3xl md:rounded-[48px] bg-zinc-50 border border-[#E4E4E7] backdrop-blur-3xl">
                        <p className="text-[10px] font-black uppercase tracking-[0.3em] text-accent mb-6 md:mb-8">Base Technology Stack</p>
                        <div className="space-y-4 md:space-y-6">
                            {caso.stack.slice(0, 5).map((s, i) => (
                                <div key={i} className="flex items-center justify-between gap-4 border-b border-[#E4E4E7] pb-4 last:border-0 last:pb-0">
                                    <span className="font-black tracking-tight text-[#09090B]">{s.name}</span>
                                    <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">{s.role.split(' ')[0]}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
              </div>
            </div>

            {/* Bloque de impacto — el resultado va arriba (datos reales) */}
            <section className="py-12 md:py-16 bg-[#FAFAFA] border-b border-[#E4E4E7]">
                <div className="container px-6 mx-auto">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-[#E4E4E7] rounded-2xl overflow-hidden border border-[#E4E4E7]">
                        {caso.metricsArray.map((m, i) => (
                            <div key={i} className="bg-[#FFFFFF] p-6 md:p-8">
                                <p className="font-mono text-4xl md:text-5xl font-bold tracking-tight text-[#09090B] leading-none mb-2">{m.value}</p>
                                <p className="text-[11px] font-medium uppercase tracking-wide text-zinc-500">{m.label}</p>
                            </div>
                        ))}
                        {caso.highlightMetric && (
                            <div className="bg-primary/[0.06] p-6 md:p-8">
                                <p className="font-mono text-4xl md:text-5xl font-bold tracking-tight text-primary leading-none mb-2">{caso.highlightMetric.value}</p>
                                <p className="text-[11px] font-medium uppercase tracking-wide text-zinc-500">{caso.highlightMetric.label}</p>
                            </div>
                        )}
                    </div>
                    <p className="mt-4 flex items-center gap-2 text-xs font-mono text-zinc-500">
                        <ShieldCheck className="h-3.5 w-3.5 text-primary" />
                        Datos auditados internamente sobre la integración real con {caso.client}.
                    </p>
                </div>
            </section>

            {/* Architecture Visualization Section */}
            <section className="py-16 md:py-32 bg-[#FAFAFA] border-b border-[#E4E4E7]">
                <div className="container px-6 mx-auto">
                    <div className="grid lg:grid-cols-12 gap-12 md:gap-24 items-center">
                        <div className="lg:col-span-8">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className={`relative ${caso.theme === 'dark' || caso.image.includes('workflow') ? 'bg-black' : 'bg-zinc-100'} rounded-3xl md:rounded-[64px] overflow-hidden border border-[#E4E4E7] shadow-2xl p-4 md:p-12 group`}
                            >
                                <div className="absolute top-8 left-8 flex gap-2 z-10">
                                    <div className="w-3 h-3 rounded-full bg-zinc-100 border border-[#E4E4E7]" />
                                    <div className="w-3 h-3 rounded-full bg-zinc-100 border border-[#E4E4E7]" />
                                    <div className="w-3 h-3 rounded-full bg-zinc-100 border border-[#E4E4E7]" />
                                </div>
                                
                                <div className="relative aspect-[21/10] flex items-center justify-center">
                                    <Image
                                        src={caso.image}
                                        alt="Architecture Flow"
                                        fill
                                        className="object-contain p-4 group-hover:scale-105 transition-transform duration-[3000ms]"
                                    />
                                </div>
                                
                                <div className="absolute bottom-6 right-10 text-[10px] font-black uppercase tracking-[0.4em] text-zinc-400">
                                    Encrypted Topology · Live Deployment
                                </div>
                            </motion.div>
                        </div>

                        <div className="lg:col-span-4">
                            <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-8">
                                <div className="h-[2px] w-12 bg-accent opacity-50" />
                                <span className="text-[10px] font-black uppercase tracking-[0.5em] text-zinc-500">Core Logic Blocks</span>
                            </div>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter mb-8 md:mb-12 leading-tight md:leading-[0.9]">Arquitectura del <br /><span className="text-accent italic">Proceso.</span></h2>
                            <div className="space-y-6 md:space-y-10">
                                <div className="flex gap-4 md:gap-8 group">
                                    <div className="h-12 w-12 md:h-14 md:w-14 rounded-2xl md:rounded-[20px] bg-zinc-50 border border-[#E4E4E7] flex items-center justify-center shrink-0 group-hover:border-accent/50 transition-colors">
                                        <Network className="h-6 w-6 text-accent" />
                                    </div>
                                    <div>
                                        <h4 className="font-black text-lg md:text-xl mb-2 md:mb-3 tracking-tight">Orquestación de Procesos</h4>
                                        <p className="text-zinc-400 text-sm font-medium leading-relaxed">Pipeline automatizado en {caso.slug.includes('garcia') ? 'Make.com' : 'n8n'} con manejo de estados y redundancia nativa para asegurar el 100% de éxito del flujo.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 md:gap-8 group">
                                    <div className="h-12 w-12 md:h-14 md:w-14 rounded-2xl md:rounded-[20px] bg-zinc-50 border border-[#E4E4E7] flex items-center justify-center shrink-0 group-hover:border-accent/50 transition-colors">
                                        <Cpu className="h-6 w-6 text-accent" />
                                    </div>
                                    <div>
                                        <h4 className="font-black text-lg md:text-xl mb-2 md:mb-3 tracking-tight">Procesamiento de Lenguaje</h4>
                                        <p className="text-zinc-400 text-sm font-medium leading-relaxed">Integración con {caso.tags.find(t => t.includes('LLM') || t.includes('GPT') || t.includes('Claude')) || 'modelos SOTA'} para extracción de entidades y destilación de conocimiento dinámico.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 md:gap-8 group">
                                    <div className="h-12 w-12 md:h-14 md:w-14 rounded-2xl md:rounded-[20px] bg-zinc-50 border border-[#E4E4E7] flex items-center justify-center shrink-0 group-hover:border-accent/50 transition-colors">
                                        <Database className="h-6 w-6 text-accent" />
                                    </div>
                                    <div>
                                        <h4 className="font-black text-lg md:text-xl mb-2 md:mb-3 tracking-tight">Integridad de Sistemas</h4>
                                        <p className="text-zinc-400 text-sm font-medium leading-relaxed">Sincronización bidireccional con bases de datos vectoriales y APIs legacy, garantizando consistencia atómica de los datos.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Platform Module Showcase — Business Suite only */}
            {caso.slug === 'business-suite-ia-plataforma-corporativa' && (
                <section className="py-16 md:py-32 bg-[#FAFAFA] border-b border-[#E4E4E7]">
                    <div className="container px-6 mx-auto">
                        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 md:gap-12 mb-12 md:mb-24">
                            <div className="max-w-3xl">
                                <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-8">
                                    <div className="h-[2px] w-12 bg-accent" />
                                    <span className="text-[10px] font-black uppercase tracking-[0.5em] text-accent">Internal Ops Infrastructure</span>
                                </div>
                                <h2 className="text-3xl sm:text-5xl md:text-8xl font-black tracking-tighter leading-tight md:leading-[0.85] mb-6 md:mb-8">
                                    Desglose de <br /><span className="text-accent italic">la Plataforma.</span>
                                </h2>
                                <p className="text-base sm:text-lg md:text-2xl text-zinc-500 font-medium italic leading-snug md:leading-tight">
                                    Infraestructura modular interconectada por agentes IA que actúan de forma autónoma en cada nodo del sistema.
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                            {platformModules.map((mod, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.08 }}
                                    className="rounded-3xl md:rounded-[56px] bg-zinc-50 border border-[#E4E4E7] overflow-hidden hover:border-accent/30 transition-all group"
                                >
                                    <div className="p-6 md:p-12 pb-0">
                                        <span className={`text-[10px] font-black uppercase tracking-widest px-3 md:px-4 py-2 rounded-full border ${mod.tagColor}`}>{mod.tag}</span>
                                        <h3 className="text-2xl md:text-3xl font-black mt-6 md:mt-8 mb-3 md:mb-4 tracking-tighter">{mod.title}</h3>
                                        <p className="text-zinc-500 text-sm md:text-base font-medium leading-snug md:leading-tight mb-6 md:mb-10">{mod.desc}</p>
                                    </div>
                                    <div className="mx-4 md:mx-8 mb-4 md:mb-8 rounded-2xl md:rounded-[40px] overflow-hidden bg-black aspect-[16/9] border border-[#E4E4E7] shadow-2xl relative">
                                        <Image src={mod.image} alt={mod.alt} fill className="object-cover object-top group-hover:scale-110 transition-transform duration-[3000ms]" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="rounded-3xl md:rounded-[64px] bg-zinc-50 border border-[#E4E4E7] overflow-hidden hover:border-accent/30 transition-all group"
                        >
                            <div className="p-6 md:p-12 pb-0">
                                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 md:gap-12 mb-6 md:mb-10">
                                    <div className="flex-1">
                                        <span className="text-[10px] font-black uppercase tracking-widest text-accent bg-accent/5 px-3 md:px-4 py-2 rounded-full border border-accent/10">Multi-Agent Protocol</span>
                                        <h3 className="text-2xl md:text-4xl font-black mt-6 md:mt-8 mb-3 md:mb-4 tracking-tighter">Equipo de Agentes IA Autónomos</h3>
                                        <p className="text-zinc-500 text-base md:text-lg font-medium leading-snug md:leading-tight max-w-3xl">
                                            Orquestación de LLMs especializados (Claude, GPT y Gemini) comunicándose entre sí para procesar tareas complejas 24/7 sin latencia humana.
                                        </p>
                                    </div>
                                    <div className="flex flex-wrap gap-2 md:gap-3 md:justify-end">
                                        {["🧠 Multi-model", "🔗 Inter-Agent Comms", "📄 Context Aware", "🌙 Autonomous"].map((tag, i) => (
                                            <span key={i} className="px-3 md:px-4 py-2 rounded-full bg-zinc-100 text-[10px] font-black uppercase tracking-widest text-zinc-400 border border-[#E4E4E7] whitespace-nowrap">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="mx-4 md:mx-12 mb-4 md:mb-12 rounded-2xl md:rounded-[48px] overflow-hidden bg-black aspect-[16/6] border border-[#E4E4E7] shadow-2xl relative">
                                <Image src="/assets/platform_agents.png" alt="Agentes IA Autónomos — SEOscar" fill className="object-cover object-top group-hover:scale-105 transition-transform duration-[4000ms]" />
                            </div>
                        </motion.div>
                    </div>
                </section>
            )}

            {/* OpoAI Module Showcase */}
            {caso.slug === 'opoai-plataforma-estudio-oposiciones' && (
                <section className="py-16 md:py-32 bg-[#FAFAFA] border-b border-[#E4E4E7]">
                    <div className="container px-6 mx-auto">
                        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 md:gap-12 mb-12 md:mb-24">
                            <div className="max-w-3xl">
                                <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-8">
                                    <div className="h-[2px] w-12 bg-accent opacity-50" />
                                    <span className="text-[10px] font-black uppercase tracking-[0.5em] text-zinc-500">SaaS Product Architecture</span>
                                </div>
                                <h2 className="text-3xl sm:text-5xl md:text-8xl font-black tracking-tighter leading-tight md:leading-[0.85] mb-6 md:mb-8">
                                    Desglose del <br /><span className="text-accent italic">Producto OpoAI.</span>
                                </h2>
                                <p className="text-base sm:text-lg md:text-2xl text-zinc-500 font-medium italic leading-snug md:leading-tight">
                                    Diseño de plataforma centrado en la retención masiva de datos mediante algoritmos de repetición espaciada y tutores vectorizados.
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {opoaiModules.map((mod, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.07 }}
                                    className="rounded-3xl md:rounded-[56px] bg-zinc-50 border border-[#E4E4E7] overflow-hidden hover:border-accent/30 transition-all group"
                                >
                                    <div className="p-6 md:p-12 pb-0">
                                        <span className={`text-[10px] font-black uppercase tracking-widest px-3 md:px-4 py-2 rounded-full border ${mod.tagColor}`}>{mod.tag}</span>
                                        <h3 className="text-2xl md:text-3xl font-black mt-6 md:mt-8 mb-3 md:mb-4 tracking-tighter">{mod.title}</h3>
                                        <p className="text-zinc-500 text-sm md:text-base font-medium leading-snug md:leading-tight mb-6 md:mb-10">{mod.desc}</p>
                                    </div>
                                    <div className="mx-4 md:mx-8 mb-4 md:mb-8 rounded-2xl md:rounded-[40px] overflow-hidden bg-black aspect-[16/9] border border-[#E4E4E7] shadow-2xl relative">
                                        <Image src={mod.image} alt={mod.alt} fill className="object-cover object-top group-hover:scale-110 transition-transform duration-[3000ms]" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Implementation Roadmap */}
            <section className="py-16 md:py-32 bg-[#FAFAFA] border-b border-[#E4E4E7]">
                <div className="container px-6 mx-auto">
                    <div className="max-w-5xl mx-auto">
                        <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-8 justify-center">
                            <div className="h-[2px] w-8 md:w-12 bg-accent opacity-50" />
                            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-zinc-500">Deployment Roadmap</span>
                            <div className="h-[2px] w-8 md:w-12 bg-accent opacity-50" />
                        </div>
                        <h2 className="text-3xl sm:text-5xl md:text-7xl font-black tracking-tighter mb-12 md:mb-24 text-center leading-tight md:leading-[0.85]">Evolución del <span className="text-accent italic">Despliegue.</span></h2>

                        <div className="relative">
                            <div className="absolute left-[40px] md:left-1/2 top-0 bottom-0 w-[1px] bg-zinc-100 hidden md:block" />
                            <div className="space-y-10 md:space-y-16">
                                {caso.phases.map((phase, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 }}
                                        className={`relative flex flex-col md:flex-row gap-6 md:gap-12 items-start md:items-center ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
                                    >
                                        <div className="h-16 w-16 md:h-20 md:w-20 rounded-2xl md:rounded-[28px] bg-[#FAFAFA] border border-[#E4E4E7] flex items-center justify-center shrink-0 md:z-10 shadow-2xl text-xl md:text-2xl font-black italic text-accent group-hover:border-accent transition-colors">
                                            {phase.phase}
                                        </div>
                                        <div className={`flex-1 p-6 md:p-12 rounded-3xl md:rounded-[48px] bg-zinc-50 border border-[#E4E4E7] hover:border-accent/20 transition-all ${i % 2 !== 0 ? 'md:text-right' : 'md:text-left'}`}>
                                            <h3 className="text-xl md:text-2xl font-black mb-3 md:mb-4 tracking-tight text-[#09090B] uppercase">{phase.title}</h3>
                                            <p className="text-zinc-400 text-base md:text-lg font-medium leading-snug md:leading-tight italic">{phase.description}</p>
                                            {phase.image && (
                                                <div className="mt-6 md:mt-8 relative rounded-2xl md:rounded-3xl overflow-hidden border border-[#E4E4E7] bg-white">
                                                    <Image
                                                        src={phase.image}
                                                        alt={phase.title}
                                                        width={1200}
                                                        height={500}
                                                        className="w-full h-auto object-contain"
                                                    />
                                                </div>
                                            )}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Long-form narrative sections — SEO depth */}
            {(caso.clientContext || caso.previousState || caso.architecture || caso.verifiedMetrics || caso.lessonsLearned) && (
                <section className="py-16 md:py-32 bg-[#FAFAFA] border-t border-[#E4E4E7]">
                    <div className="container px-6 mx-auto max-w-4xl">
                        <div className="space-y-16 md:space-y-20">
                            {caso.clientContext && (
                                <article>
                                    <div className="flex items-center gap-3 mb-5">
                                        <span className="text-[10px] font-black uppercase tracking-[0.35em] text-accent tabular-nums">01</span>
                                        <div className="h-[1px] flex-1 max-w-[60px] bg-accent/30" />
                                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500">Contexto del cliente</span>
                                    </div>
                                    <h2 className="text-2xl md:text-4xl font-black text-[#09090B] tracking-tight leading-[1.1] mb-6">
                                        Sector, tamaño y <span className="text-accent">problema operativo</span>.
                                    </h2>
                                    <p className="text-zinc-600 text-base md:text-lg font-medium leading-relaxed">
                                        {caso.clientContext}
                                    </p>
                                </article>
                            )}

                            {caso.previousState && (
                                <article>
                                    <div className="flex items-center gap-3 mb-5">
                                        <span className="text-[10px] font-black uppercase tracking-[0.35em] text-accent tabular-nums">02</span>
                                        <div className="h-[1px] flex-1 max-w-[60px] bg-accent/30" />
                                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500">Estado previo</span>
                                    </div>
                                    <h2 className="text-2xl md:text-4xl font-black text-[#09090B] tracking-tight leading-[1.1] mb-6">
                                        Procesos manuales y <span className="text-accent">fricciones detectadas</span>.
                                    </h2>
                                    <p className="text-zinc-600 text-base md:text-lg font-medium leading-relaxed">
                                        {caso.previousState}
                                    </p>
                                </article>
                            )}

                            {caso.architecture && (
                                <article>
                                    <div className="flex items-center gap-3 mb-5">
                                        <span className="text-[10px] font-black uppercase tracking-[0.35em] text-accent tabular-nums">03</span>
                                        <div className="h-[1px] flex-1 max-w-[60px] bg-accent/30" />
                                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500">Arquitectura desplegada</span>
                                    </div>
                                    <h2 className="text-2xl md:text-4xl font-black text-[#09090B] tracking-tight leading-[1.1] mb-6">
                                        Stack concreto e <span className="text-accent">integraciones</span>.
                                    </h2>
                                    <p className="text-zinc-600 text-base md:text-lg font-medium leading-relaxed">
                                        {caso.architecture}
                                    </p>
                                </article>
                            )}

                            {caso.verifiedMetrics && (
                                <article>
                                    <div className="flex items-center gap-3 mb-5">
                                        <span className="text-[10px] font-black uppercase tracking-[0.35em] text-accent tabular-nums">04</span>
                                        <div className="h-[1px] flex-1 max-w-[60px] bg-accent/30" />
                                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500">Métricas verificables</span>
                                    </div>
                                    <h2 className="text-2xl md:text-4xl font-black text-[#09090B] tracking-tight leading-[1.1] mb-6">
                                        Datos reales <span className="text-accent">en producción</span>.
                                    </h2>
                                    <p className="text-zinc-600 text-base md:text-lg font-medium leading-relaxed mb-6">
                                        {caso.verifiedMetrics}
                                    </p>
                                    {caso.testimonial && (
                                        <blockquote className="mt-8 pl-6 border-l-2 border-accent">
                                            <p className="text-zinc-600 text-lg md:text-xl font-medium italic leading-relaxed mb-3">
                                                &ldquo;{caso.testimonial.quote}&rdquo;
                                            </p>
                                            <footer className="text-[10px] font-black uppercase tracking-[0.3em] text-accent">
                                                {caso.testimonial.author} · {caso.testimonial.role}
                                            </footer>
                                        </blockquote>
                                    )}
                                </article>
                            )}

                            {caso.lessonsLearned && (
                                <article>
                                    <div className="flex items-center gap-3 mb-5">
                                        <span className="text-[10px] font-black uppercase tracking-[0.35em] text-accent tabular-nums">05</span>
                                        <div className="h-[1px] flex-1 max-w-[60px] bg-accent/30" />
                                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500">Lecciones aprendidas</span>
                                    </div>
                                    <h2 className="text-2xl md:text-4xl font-black text-[#09090B] tracking-tight leading-[1.1] mb-6">
                                        Decisiones técnicas y <span className="text-accent">extensiones futuras</span>.
                                    </h2>
                                    <p className="text-zinc-600 text-base md:text-lg font-medium leading-relaxed">
                                        {caso.lessonsLearned}
                                    </p>
                                </article>
                            )}
                        </div>
                    </div>
                </section>
            )}

            <FinalCTA />
            <Footer />
        </div>
    )
}
