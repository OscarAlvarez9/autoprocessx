"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Cpu, Database, Network, ShieldCheck, Sparkles, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import { CaseStudy } from "@/lib/cases"

const platformModules = [
    {
        tag: "Dashboard & Pipeline",
        tagColor: "text-primary bg-primary/5 border-primary/10",
        title: "Control total por empresa",
        desc: "Cada empresa tiene su propio entorno independiente: clientes activos, leads en pipeline, tareas pendientes y propuestas abiertas en tiempo real desde Supabase.",
        image: "/assets/platform_dashboard.png",
        alt: "Business Suite Dashboard — AutoProcessX",
    },
    {
        tag: "Pipeline de Ventas",
        tagColor: "text-secondary bg-secondary/5 border-secondary/10",
        title: "Kanban estilo Notion",
        desc: "Pipeline visual con columnas configurables: Nuevos Leads, Contactados, Reunión Agendada, Propuesta Enviada y Convertidos. Drag & drop nativo.",
        image: "/assets/platform_pipeline.png",
        alt: "Pipeline de Ventas Kanban — AutoProcessX",
    },
    {
        tag: "Cartera de Clientes",
        tagColor: "text-accent bg-accent/5 border-accent/10",
        title: "CRM integrado en la plataforma",
        desc: "Gestión de clientes con estado en tiempo real (Activo, Onboarding, En Riesgo, Mantenimiento), contacto principal y fecha de alta. Todo en una sola vista.",
        image: "/assets/platform_clientes.png",
        alt: "CRM Cartera de Clientes — AutoProcessX",
    },
    {
        tag: "Calendario",
        tagColor: "text-secondary bg-secondary/5 border-secondary/10",
        title: "Sincronizado con Google Calendar",
        desc: "Las reuniones y eventos se sincronizan directamente con Google Calendar. Aparecen en el móvil y ordenador de cada miembro del equipo sin ninguna acción extra.",
        image: "/assets/platform_calendario.png",
        alt: "Calendario Google Calendar — AutoProcessX",
    },
    {
        tag: "Tareas & Operaciones",
        tagColor: "text-primary bg-primary/5 border-primary/10",
        title: "Gestión de tareas estilo Asana",
        desc: "Tareas con estados (Pendiente, En progreso, Completada) filtradas por empresa. Cada tarea puede enviarse al calendario del equipo con un clic.",
        image: "/assets/platform_tareas.png",
        alt: "Tareas y Operaciones — AutoProcessX",
    },
    {
        tag: "Generador de Propuestas",
        tagColor: "text-accent bg-accent/5 border-accent/10",
        title: "De formulario a .docx en un clic",
        desc: "Genera propuestas con tu plantilla corporativa, descárgalas como .docx o envíalas por email desde la plataforma. Cada envío queda registrado automáticamente en la base de datos.",
        image: "/assets/platform_propuestas.png",
        alt: "Generador de Propuestas — AutoProcessX",
    },
]

const opoaiModules = [
    {
        tag: "Dashboard Principal",
        tagColor: "text-primary bg-primary/5 border-primary/10",
        title: "Vista global del rendimiento",
        desc: "Panel central con resumen de progreso por bloque temático, últimas sesiones de estudio, simulacros pendientes y estadísticas de rendimiento en tiempo real.",
        image: "/assets/opoai_dashboard.png",
        alt: "OpoAI Dashboard Principal",
    },
    {
        tag: "Temario Oficial",
        tagColor: "text-secondary bg-secondary/5 border-secondary/10",
        title: "Contenido estructurado por bloques",
        desc: "Todo el temario oficial organizado en bloques y temas navegables. Cada lección está vectorizada para que el tutor IA pueda referenciarla con precisión absoluta.",
        image: "/assets/opoai_temario.png",
        alt: "OpoAI Temario Oficial",
    },
    {
        tag: "Tutor IA",
        tagColor: "text-accent bg-accent/5 border-accent/10",
        title: "Claude entrenado con el temario",
        desc: "Tutor conversacional que responde dudas específicas del temario, explica conceptos con ejemplos prácticos y adapta el nivel de profundidad al historial del opositor.",
        image: "/assets/opoai_tutor.png",
        alt: "OpoAI Tutor IA",
    },
    {
        tag: "Modo Estudio",
        tagColor: "text-secondary bg-secondary/5 border-secondary/10",
        title: "Estudio activo con flashcards",
        desc: "Sistema de repaso con flashcards generadas automáticamente por IA a partir del temario. Repetición espaciada para maximizar la retención a largo plazo.",
        image: "/assets/opoai_flashcard.png",
        alt: "OpoAI Modo Estudio Flashcards",
    },
    {
        tag: "Opolingo",
        tagColor: "text-primary bg-primary/5 border-primary/10",
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
        tagColor: "text-secondary bg-secondary/5 border-secondary/10",
        title: "Análisis de rendimiento detallado",
        desc: "Gráficas de evolución por semana, bloque y tipo de pregunta. Identifica automáticamente los temas con mayor margen de mejora y los prioriza en el plan de estudio.",
        image: "/assets/opoai_progreso.png",
        alt: "OpoAI Progreso",
    },
    {
        tag: "Ranking",
        tagColor: "text-primary bg-primary/5 border-primary/10",
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
    return (
        <div className="flex flex-col min-h-screen bg-background text-foreground selection:bg-primary/20">
            <Navigation />

            {/* Technical Header */}
            <section className="pt-40 pb-20 md:pt-48 md:pb-28 bg-[#fafafa] border-b border-gray-100">
                <div className="container px-4 mx-auto">
                    <Link href="/casos-de-exito" className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-foreground/30 hover:text-primary transition-colors mb-12">
                        <ArrowLeft className="h-3 w-3" />
                        Volver a Casos
                    </Link>

                    <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-16">
                        <div className="max-w-3xl">
                            <div className="flex items-center gap-3 mb-6">
                                <span className="px-3 py-1 bg-white border border-gray-200 text-foreground/40 text-[10px] font-black uppercase tracking-widest rounded-md">Project Ref: {caso.id}</span>
                                <span className="px-3 py-1 bg-primary/5 text-primary text-[10px] font-black uppercase tracking-widest rounded-md">Status: Deployed</span>
                            </div>
                            <motion.h1 
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.9] text-foreground mb-8 italic"
                            >
                                Technical <span className="text-primary italic">Specs.</span><br />
                                {caso.title}
                            </motion.h1>
                            <p className="text-xl text-foreground/50 font-medium italic leading-relaxed max-w-xl">
                                {caso.desc}
                            </p>
                        </div>

                        <div className="w-full lg:w-auto flex flex-col gap-4">
                             <div className="p-8 rounded-3xl bg-white border border-gray-200 shadow-sm min-w-[300px]">
                                <p className="text-[10px] font-black uppercase tracking-widest text-foreground/30 mb-4 underline decoration-primary/30 underline-offset-4">Core Technology Stack</p>
                                <div className="space-y-3">
                                    {caso.stack.slice(0, 4).map((s, i) => (
                                        <div key={i} className="flex items-center justify-between gap-4">
                                            <span className="text-sm font-black">{s.name}</span>
                                            <span className="text-[10px] font-bold text-foreground/30 uppercase tracking-widest">{s.role.split(' ')[0]}</span>
                                        </div>
                                    ))}
                                </div>
                             </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Architecture Visualization Section */}
            <section className="py-24 bg-white">
                <div className="container px-4 mx-auto">
                    <div className="grid lg:grid-cols-12 gap-16 items-center">
                        <div className="lg:col-span-8">
                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className={`relative ${caso.theme === 'dark' || caso.image.includes('workflow') ? 'bg-[#0a0a0a]' : 'bg-gray-50'} rounded-[32px] md:rounded-[48px] overflow-hidden border border-gray-100 shadow-2xl p-4 md:p-8`}
                            >
                                <div className="absolute top-4 left-4 flex gap-1.5 z-10">
                                    <div className="w-2.5 h-2.5 rounded-full bg-red-400/20" />
                                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/20" />
                                    <div className="w-2.5 h-2.5 rounded-full bg-green-400/20" />
                                </div>
                                <div className="relative aspect-[21/9] flex items-center justify-center">
                                    <Image
                                        src={caso.image}
                                        alt="Architecture Flow"
                                        fill
                                        className="object-contain p-2 md:p-4"
                                    />
                                </div>
                                {/* Legend */}
                                <div className="absolute bottom-4 right-6 text-[8px] font-black uppercase tracking-widest text-white/20">
                                    Verified Live Deployment Architecture
                                </div>
                            </motion.div>
                        </div>
                        <div className="lg:col-span-4">
                            <h2 className="text-3xl font-black tracking-tight mb-8 leading-tight">Arquitectura del <span className="text-primary italic">Proceso</span></h2>
                            <div className="space-y-8">
                                <div className="flex gap-6">
                                    <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                                        <Network className="h-6 w-6 text-primary" />
                                    </div>
                                    <div>
                                        <h4 className="font-black text-lg mb-2">Orquestación de Procesos</h4>
                                        <p className="text-foreground/50 text-sm font-medium leading-relaxed">Pipeline automatizado en {caso.slug.includes('garcia') ? 'Make.com' : 'n8n'} con manejo de estados y lógica condicional avanzada para asegurar el 100% de éxito en la ejecución.</p>
                                    </div>
                                </div>
                                <div className="flex gap-6">
                                    <div className="h-12 w-12 rounded-2xl bg-secondary/10 flex items-center justify-center shrink-0">
                                        <Cpu className="h-6 w-6 text-secondary" />
                                    </div>
                                    <div>
                                        <h4 className="font-black text-lg mb-2">Procesamiento de Lenguaje</h4>
                                        <p className="text-foreground/50 text-sm font-medium leading-relaxed">Integración con {caso.tags.find(t => t.includes('LLM') || t.includes('GPT') || t.includes('Claude')) || 'modelos SOTA'} para extracción de entidades y generación de contexto.</p>
                                    </div>
                                </div>
                                <div className="flex gap-6">
                                    <div className="h-12 w-12 rounded-2xl bg-blue-100 flex items-center justify-center shrink-0">
                                        <Database className="h-6 w-6 text-blue-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-black text-lg mb-2">Integridad de Datos</h4>
                                        <p className="text-foreground/50 text-sm font-medium leading-relaxed">Sincronización en tiempo real con bases de datos y APIs externas, garantizando consistencia en todo el ecosistema.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Platform Module Showcase — Business Suite only */}
            {caso.slug === 'business-suite-ia-plataforma-corporativa' && (
                <section className="py-24 bg-[#fafafa] border-y border-gray-100">
                    <div className="container px-4 mx-auto">
                        <div className="text-center mb-20 max-w-3xl mx-auto">
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-[10px] font-black uppercase tracking-widest mb-8">
                                <Sparkles className="h-3.5 w-3.5" /> Módulos en producción
                            </div>
                            <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-6">
                                Desglose completo de la <span className="text-primary italic">plataforma.</span>
                            </h2>
                            <p className="text-foreground/60 text-lg font-medium leading-relaxed">
                                Cada módulo está conectado al mismo núcleo de datos y orquestado por agentes IA que actúan de forma autónoma entre secciones.
                            </p>
                        </div>

                        {/* 6 module grid */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                            {platformModules.map((mod, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.08 }}
                                    className="rounded-[48px] bg-white border border-gray-100 shadow-sm overflow-hidden hover:shadow-xl transition-all"
                                >
                                    <div className="p-8 pb-0">
                                        <span className={`text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full border ${mod.tagColor}`}>{mod.tag}</span>
                                        <h3 className="text-2xl font-black mt-4 mb-2 tracking-tight">{mod.title}</h3>
                                        <p className="text-foreground/60 text-sm font-medium leading-relaxed mb-6">{mod.desc}</p>
                                    </div>
                                    <div className="mx-6 mb-6 rounded-[28px] overflow-hidden bg-muted aspect-[16/9] border border-gray-100">
                                        <Image src={mod.image} alt={mod.alt} width={800} height={450} className="w-full h-full object-cover object-top" />
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Agentes IA — full width */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="rounded-[48px] bg-white border border-gray-100 shadow-sm overflow-hidden hover:shadow-xl transition-all"
                        >
                            <div className="p-8 pb-0">
                                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-6">
                                    <div className="flex-1">
                                        <span className="text-[10px] font-black uppercase tracking-widest text-primary bg-primary/5 px-3 py-1.5 rounded-full border border-primary/10">Agentes IA Autónomos</span>
                                        <h3 className="text-2xl font-black mt-4 mb-2 tracking-tight">Tu equipo de IA que nunca para</h3>
                                        <p className="text-foreground/60 text-sm font-medium leading-relaxed max-w-2xl">
                                            Despliega tantos agentes como necesites, entrenados con la documentación y prompting de cada empresa. Escogen el modelo más eficiente por tarea, se hablan entre ellos y trabajan de forma autónoma cuando tú no estás.
                                        </p>
                                    </div>
                                    <div className="flex flex-wrap gap-3 md:justify-end">
                                        {["🧠 Multi-modelo", "🔗 Comunicación entre agentes", "📄 Entrenados con tus docs", "🌙 Autónomos 24/7"].map((tag, i) => (
                                            <span key={i} className="px-3 py-1.5 rounded-full bg-muted text-[10px] font-black uppercase tracking-widest text-foreground/50 border border-gray-100 whitespace-nowrap">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="mx-6 mb-6 rounded-[28px] overflow-hidden bg-muted aspect-[16/6] border border-gray-100">
                                <Image src="/assets/platform_agents.png" alt="Agentes IA Autónomos — AutoProcessX" width={1600} height={600} className="w-full h-full object-cover object-top" />
                            </div>
                        </motion.div>
                    </div>
                </section>
            )}

            {/* OpoAI Module Showcase */}
            {caso.slug === 'opoai-plataforma-estudio-oposiciones' && (
                <section className="py-24 bg-[#fafafa] border-y border-gray-100">
                    <div className="container px-4 mx-auto">
                        <div className="text-center mb-20 max-w-3xl mx-auto">
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-[10px] font-black uppercase tracking-widest mb-8">
                                <Sparkles className="h-3.5 w-3.5" /> 8 módulos en producción
                            </div>
                            <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-6">
                                Desglose completo de <span className="text-primary italic">OpoAI.</span>
                            </h2>
                            <p className="text-foreground/60 text-lg font-medium leading-relaxed">
                                Cada módulo está interconectado: el tutor IA sabe en qué tema fallaste en el simulacro, el progreso actualiza el ranking y el plan de estudio se adapta automáticamente.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {opoaiModules.map((mod, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.07 }}
                                    className="rounded-[48px] bg-white border border-gray-100 shadow-sm overflow-hidden hover:shadow-xl transition-all"
                                >
                                    <div className="p-8 pb-0">
                                        <span className={`text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full border ${mod.tagColor}`}>{mod.tag}</span>
                                        <h3 className="text-2xl font-black mt-4 mb-2 tracking-tight">{mod.title}</h3>
                                        <p className="text-foreground/60 text-sm font-medium leading-relaxed mb-6">{mod.desc}</p>
                                    </div>
                                    <div className="mx-6 mb-6 rounded-[28px] overflow-hidden bg-muted aspect-[16/9] border border-gray-100">
                                        <Image src={mod.image} alt={mod.alt} width={800} height={450} className="w-full h-full object-cover object-top" />
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Implementation Roadmap */}
            <section className="py-24 bg-[#fafafa] border-y border-gray-100">
                <div className="container px-4 mx-auto">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-4xl font-black tracking-tighter mb-16 text-center italic">Hoja de Ruta del <span className="text-primary">Despliegue</span></h2>
                        <div className="relative">
                            <div className="absolute left-8 top-0 bottom-0 w-[1px] bg-gray-200 hidden md:block" />
                            <div className="space-y-12">
                                {caso.phases.map((phase, i) => (
                                    <motion.div 
                                        key={i} 
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 }}
                                        className="relative flex flex-col md:flex-row gap-8 items-start"
                                    >
                                        <div className="h-16 w-16 rounded-full bg-white border border-gray-200 flex items-center justify-center shrink-0 md:z-10 shadow-sm text-xl font-black italic text-primary">
                                            {phase.phase}
                                        </div>
                                        <div className="flex-1 p-8 rounded-[32px] bg-white border border-gray-100 shadow-sm hover:border-primary/20 transition-all">
                                            <h3 className="text-xl font-black mb-4 tracking-tight">{phase.title}</h3>
                                            <p className="text-foreground/50 font-medium leading-relaxed">{phase.description}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Performance Metrics */}
            <section className="py-24 bg-white border-b border-gray-100">
                <div className="container px-4 mx-auto">
                    <h2 className="text-3xl font-black tracking-tight mb-16 text-center">KPIs de <span className="text-primary italic">Rendimiento Técnico</span></h2>
                    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {caso.metricsArray.map((m, i) => (
                            <motion.div 
                                key={i} 
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="p-10 rounded-[40px] border border-gray-100 text-center hover:bg-primary/5 transition-all group"
                            >
                                <div className="h-14 w-14 rounded-full bg-gray-50 flex items-center justify-center mx-auto mb-6 group-hover:bg-white transition-all shadow-sm">
                                    {m.icon}
                                </div>
                                <p className="text-5xl font-black tracking-tighter mb-2">{m.value}</p>
                                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-foreground/30">{m.label}</p>
                            </motion.div>
                        ))}
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="p-10 rounded-[40px] border border-transparent bg-primary text-white text-center shadow-xl shadow-primary/20"
                        >
                            <div className="h-14 w-14 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-6 backdrop-blur-md">
                                <Zap className="h-7 w-7 text-white" />
                            </div>
                            <p className="text-3xl font-black tracking-tight mb-2 leading-none">ROI Estimado</p>
                            <p className="text-5xl font-black tracking-tighter text-secondary">{caso.secondaryMetric.split(' ')[1]}</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Combined Technical Trust & Final CTA Section */}
            <section className="pb-24 pt-24 bg-white">
                <div className="container px-4 mx-auto">
                    <div className="max-w-6xl mx-auto rounded-[48px] bg-[#0a0a0a] p-8 md:p-20 relative overflow-hidden group border border-white/5 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.5)]">
                        {/* High-Fidelity Background Gradients */}
                        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/20 blur-[130px] rounded-full -mr-40 group-hover:bg-primary/25 transition-all duration-1000" />
                        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-blue-600/10 blur-[100px] rounded-full -ml-20" />
                        
                        <div className="relative z-10 flex flex-col items-center text-center">
                            {/* Enterprise Trust Badge */}
                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                className="flex items-center gap-4 mb-12 px-6 py-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl"
                            >
                                <ShieldCheck className="h-5 w-5 text-primary" />
                                <span className="text-[10px] font-black uppercase tracking-[0.25em] text-white/70">Seguridad & Infraestructura Enterprise-Grade</span>
                            </motion.div> 

                            <h2 className="text-4xl md:text-7xl font-black text-white italic tracking-tighter mb-8 max-w-4xl leading-[0.9]">
                                Despliega tu propia <br />
                                <span className="text-primary italic">Infraestructura IA.</span>
                            </h2>
                            
                            <p className="text-white/40 text-lg md:text-xl font-medium italic mb-16 max-w-2xl leading-relaxed">
                                Escalamos tu operativa con integraciones robustas, procesos seguros y orquestación 100% autónoma diseñada para el largo plazo.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-6 mb-20">
                                <Link href="https://booking.setmore.com/scheduleappointment/5502c3a5-1773-45a7-9388-f3da7aa86326">
                                    <Button size="lg" className="bg-primary hover:bg-primary/90 text-[11px] font-black uppercase tracking-widest px-12 h-18 rounded-2xl shadow-2xl shadow-primary/30 transition-all hover:scale-105 active:scale-95">
                                        Solicitar Auditoría Técnica
                                    </Button>
                                </Link>
                                <Link href="/casos-de-exito">
                                    <Button size="lg" className="bg-white/10 border border-white/20 text-white hover:bg-white/20 text-[11px] font-black uppercase tracking-widest px-12 h-18 rounded-2xl transition-all">
                                        Ver Más Casos
                                    </Button>
                                </Link>
                            </div>

                            {/* Compliance Grid */}
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-4xl pt-12 border-t border-white/5">
                                {[
                                    { label: 'Cloud Native', sub: 'Make / n8n / AWS' },
                                    { label: 'Data Security', sub: 'Encryption At Rest' },
                                    { label: 'GDPR Ready', sub: 'Privacy Compliant' },
                                    { label: 'Custom LLMs', sub: 'Claude / GPT / Llama' }
                                ].map((item, i) => (
                                    <div key={i} className="flex flex-col items-center">
                                        <div className="text-[10px] font-black uppercase tracking-[0.2em] text-white mb-1">{item.label}</div>
                                        <div className="text-[8px] font-bold uppercase tracking-[0.1em] text-white/20">{item.sub}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}
