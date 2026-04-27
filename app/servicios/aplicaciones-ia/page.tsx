"use client"

import { motion } from "framer-motion"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import { CheckCircle2, ChevronRight, ShieldCheck, Zap, Sparkles, Database, Cpu, FileText, Globe, MessageSquare, Lock, Terminal, Activity, LayoutDashboard, Users, GitBranch, Calendar, ListChecks, FileSignature, Bot, BookOpen, Brain, Layers, Trophy, BarChart3, Search, KanbanSquare, GraduationCap, Rocket, ArrowRight, MessageCircle, Code2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import OwnProducts from "@/components/OwnProducts"
import AplicacionesHero from "@/components/AplicacionesHero"
import FAQ from "@/components/FAQ"
import JsonLd from "@/components/JsonLd"
import { platformFaqs } from "@/lib/faqs"
import { buildServiceSchema } from "@/lib/seo"

const platformServiceSchema = buildServiceSchema({
    slug: "/servicios/aplicaciones-ia",
    name: "Plataforma de inteligencia artificial con arquitectura RAG",
    description: "Desarrollo de plataformas IA empresariales con arquitectura RAG para empresas en España. Entorno corporativo unificado con CRM, pipeline, agentes autónomos y vector database — desplegado bajo tu firewall y bajo tu propiedad.",
    serviceType: "Enterprise AI Platform",
    offers: [
        { name: "Dashboard ejecutivo con KPIs en tiempo real" },
        { name: "CRM 360º con agentes IA integrados" },
        { name: "Pipeline kanban con actualización automática por agentes" },
        { name: "Tareas y calendario orquestados por IA" },
        { name: "Generador de propuestas con plantillas dinámicas" },
        { name: "Agentes autónomos con tool calling sobre módulos" },
        { name: "RAG semántico sobre documentación corporativa" },
        { name: "Despliegue on-premise o en cuenta cloud propia" },
    ],
})
import { useContactDrawer } from "@/context/ContactDrawerContext"
import { gtagEvent } from "@/lib/gtag"

const features = [
    {
      icon: <LayoutDashboard className="h-6 w-6" />,
      title: "Dashboard Corporativo",
      description: "Vista global con KPIs en tiempo real: clientes activos, leads en pipeline, tareas pendientes y revenue por empresa. Una pantalla, todo bajo control.",
      metric: "Real-Time KPIs"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "CRM Integrado",
      description: "Cartera de clientes con estado en vivo (Activo, Onboarding, En Riesgo, Mantenimiento), contacto principal, histórico y notas de IA.",
      metric: "360º Cliente"
    },
    {
      icon: <KanbanSquare className="h-6 w-6" />,
      title: "Pipeline de Ventas Kanban",
      description: "Tablero estilo Notion con columnas configurables: Nuevos Leads, Contactados, Reunión Agendada, Propuesta Enviada y Convertidos. Drag & drop nativo.",
      metric: "Pipeline Visual"
    },
    {
      icon: <Calendar className="h-6 w-6" />,
      title: "Calendario Sincronizado",
      description: "Sincronización bidireccional con Google Calendar. Reuniones y eventos aparecen automáticamente en el móvil de cada miembro del equipo.",
      metric: "Google Sync"
    },
    {
      icon: <ListChecks className="h-6 w-6" />,
      title: "Gestión de Tareas",
      description: "Tareas estilo Asana con estados (Pendiente, En progreso, Completada) filtradas por empresa. Cada tarea puede mandarse al calendario con un clic.",
      metric: "Workflow Ops"
    },
    {
      icon: <FileSignature className="h-6 w-6" />,
      title: "Generador de Propuestas",
      description: "De formulario a .docx en un clic con tu plantilla corporativa. Descarga o envío por email desde la plataforma con registro automático en BD.",
      metric: "Auto-Docs"
    },
    {
      icon: <Bot className="h-6 w-6" />,
      title: "Agentes IA Autónomos",
      description: "Equipo de LLMs especializados (GPT-4o, Claude 3.5, Gemini 1.5) comunicándose entre sí para procesar tareas complejas 24/7 sin latencia humana.",
      metric: "Multi-Model"
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "RAG Engine · Vector DB",
      description: "Retrieval-Augmented Generation sobre tu base de datos vectorial. Tu IA consulta documentación interna en tiempo real antes de responder.",
      metric: "Cero Alucinaciones"
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Knowledge Base Clusters",
      description: "Ingesta segura de PDFs, Excels, Notion y bases de datos. Un cerebro digital que conoce cada coma de tu empresa con búsqueda semántica.",
      metric: "Soberanía de Datos"
    },
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Temario / Documentación",
      description: "Contenido estructurado por bloques navegables. Cada documento se vectoriza para que los agentes lo referencien con precisión absoluta.",
      metric: "Vectorizado"
    },
    {
      icon: <Brain className="h-6 w-6" />,
      title: "Tutor IA / Asistente Experto",
      description: "Asistente entrenado sobre miles de páginas de tu documentación. Responde con precisión sin inventar, citando la fuente exacta.",
      metric: "Zero-Hallucination"
    },
    {
      icon: <Layers className="h-6 w-6" />,
      title: "Flashcards & Modo Estudio",
      description: "Tarjetas generadas automáticamente por IA a partir de tu temario. Repetición espaciada para maximizar retención a largo plazo.",
      metric: "Spaced Repetition"
    },
    {
      icon: <GraduationCap className="h-6 w-6" />,
      title: "Simulacros & Tests",
      description: "Exámenes cronometrados con el formato y nivel de dificultad reales. Temporizador, corrección automática e informe de errores por bloque.",
      metric: "Eval Engine"
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Analytics & Progreso",
      description: "Gráficas de evolución por semana, bloque y tipo de pregunta. La IA identifica los temas con mayor margen de mejora y los prioriza.",
      metric: "Predictive"
    },
    {
      icon: <Trophy className="h-6 w-6" />,
      title: "Ranking & Gamificación",
      description: "Clasificación en tiempo real entre usuarios, streaks, retos diarios y recompensas. Convierte la operativa repetitiva en motivadora.",
      metric: "Engagement"
    },
    {
      icon: <Cpu className="h-6 w-6" />,
      title: "Multi-Agent Orchestration",
      description: "No solo responden; ejecutan. Orquestamos enjambres de agentes que crean tareas, actualizan el CRM, generan propuestas y reportan al calendario.",
      metric: "Autonomous Ops"
    }
]

const steps = [
    {
        num: "01",
        title: "Ingesta & Sanitización",
        desc: "Conectamos tus fuentes de información (Notion, SharePoint, PDF) mediante túneles seguros."
    },
    {
        num: "02",
        title: "Vector Embedding",
        desc: "Convertimos tu conocimiento en una base vectorial de alta velocidad procesada en servidores privados."
    },
    {
        num: "03",
        title: "Despliegue de Protocolo",
        desc: "Activamos interfaces personalizadas para que tu equipo opere con la IA bajo tu firewall."
    }
]

export default function AplicacionesIAPage() {
  const { openDrawer } = useContactDrawer()
  return (
    <main className="min-h-screen bg-[#05070F] text-white selection:bg-primary/20">
      <Navigation />
      
      <JsonLd data={platformServiceSchema} />
      <AplicacionesHero />

      {/* Industrial Grid Section: Components */}
      <section id="modulos" className="py-16 md:py-48 bg-[#05070F] border-b border-white/5">
        <div className="container px-6 mx-auto">
            <div className="max-w-3xl mb-12 md:mb-24">
                <h2 className="text-3xl sm:text-4xl md:text-7xl font-black tracking-tighter leading-tight md:leading-none mb-4 md:mb-8">
                   Todas las funcionalidades que puede tener <span className="text-accent italic">tu plataforma IA.</span>
                </h2>
                <p className="text-white/40 text-base md:text-xl font-medium leading-snug md:leading-tight max-w-2xl">
                    CRM, pipeline, tareas, calendario, propuestas, agentes IA, RAG sobre tu documentación, simulacros, analytics y gamificación — los mismos módulos que desplegamos en Business Suite IA y OpoAI, adaptados a tu operativa.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {features.map((f, i) => (
                <motion.div
                  key={i}
                  className="bg-white/[0.02] p-6 md:p-10 rounded-3xl md:rounded-[48px] border border-white/5 hover:border-accent/20 transition-all group relative overflow-hidden h-full"
                >
                  <div className="text-accent mb-6 md:mb-8 group-hover:scale-110 transition-transform">{f.icon}</div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-accent/60 mb-2">{f.metric}</div>
                  <h3 className="text-xl md:text-2xl font-black mb-3 md:mb-4 tracking-tight group-hover:text-accent transition-colors">{f.title}</h3>
                  <p className="text-white/30 text-xs leading-relaxed font-medium">{f.description}</p>
                </motion.div>
              ))}
            </div>
        </div>
      </section>

      {/* Architecture Stack Block */}
      <section className="py-16 md:py-32 bg-[#05070F] relative overflow-hidden border-t border-white/5">
          <div className="container px-6 mx-auto relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-12 md:gap-20">
                {/* Stack visual */}
                <div className="w-full lg:w-1/2 relative">
                    <div className="absolute -inset-10 bg-accent/10 blur-[120px] rounded-full pointer-events-none" />
                    <div className="relative rounded-3xl md:rounded-[40px] bg-white/[0.02] border border-white/10 p-6 md:p-10 backdrop-blur-xl">
                        <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center gap-1.5">
                                <div className="h-2 w-2 rounded-full bg-red-500/40" />
                                <div className="h-2 w-2 rounded-full bg-amber-500/40" />
                                <div className="h-2 w-2 rounded-full bg-emerald-500/40" />
                            </div>
                            <span className="text-[9px] font-black uppercase tracking-[0.3em] text-white/30">tu_infraestructura</span>
                            <div className="flex items-center gap-1.5">
                                <div className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                                <span className="text-[9px] font-black uppercase tracking-widest text-accent">Private</span>
                            </div>
                        </div>

                        <div className="space-y-3">
                            {[
                                { layer: "L1", name: "Frontend · Next.js 15", desc: "Interfaz responsive, App Router, RSC", icon: <Globe className="h-4 w-4" /> },
                                { layer: "L2", name: "API & Agentes", desc: "Node.js · Webhooks · n8n self-hosted", icon: <Cpu className="h-4 w-4" /> },
                                { layer: "L3", name: "Cognición LLM", desc: "Claude 3.5 · GPT-4o · Gemini 2.0", icon: <Brain className="h-4 w-4" /> },
                                { layer: "L4", name: "Vector DB", desc: "pgvector · Pinecone · embeddings propios", icon: <Database className="h-4 w-4" /> },
                                { layer: "L5", name: "Storage cifrado", desc: "PostgreSQL · AES-256 · backups diarios", icon: <Lock className="h-4 w-4" /> },
                            ].map((row, i) => (
                                <motion.div
                                    key={row.layer}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.08 }}
                                    className="flex items-center gap-3 md:gap-4 p-3 md:p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-accent/30 transition-all"
                                >
                                    <span className="text-[9px] font-black uppercase tracking-widest text-accent/70 shrink-0 w-6">{row.layer}</span>
                                    <div className="h-8 w-8 md:h-9 md:w-9 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent shrink-0">
                                        {row.icon}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="text-xs md:text-sm font-black text-white truncate">{row.name}</div>
                                        <div className="text-[10px] font-medium text-white/40 truncate">{row.desc}</div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Border-out indicator */}
                        <div className="mt-6 flex items-center justify-center gap-2 text-[9px] font-black uppercase tracking-[0.3em] text-white/30">
                            <Lock className="h-3 w-3 text-accent" />
                            Nada sale de tu perímetro
                        </div>
                    </div>
                </div>

                {/* Copy */}
                <div className="w-full lg:w-1/2">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-accent text-[9px] font-black uppercase tracking-widest mb-6 md:mb-8">
                      <Terminal className="h-3 w-3" /> Stack Arquitectónico · Self-Hosted
                    </div>
                    <h2 className="text-3xl sm:text-5xl lg:text-7xl font-black text-white mb-6 md:mb-8 tracking-tighter leading-tight md:leading-[0.9]">
                        Tu plataforma. <br/>
                        <span className="text-accent italic">Tu servidor.</span>
                    </h2>
                    <p className="text-white/50 text-base md:text-lg font-medium leading-relaxed mb-8 md:mb-10">
                        Desplegamos cada capa en infraestructura bajo tu control: cloud privado, on-premise o tu cuenta de AWS/GCP. Sin SaaS intermediarios, sin caja negra, sin entrenamiento sobre tus datos.
                    </p>
                    <div className="grid grid-cols-2 gap-4 md:gap-5">
                        {[
                            { title: "Código fuente", desc: "100% propiedad cliente", icon: <FileText className="h-4 w-4" /> },
                            { title: "Cifrado", desc: "AES-256 en reposo y tránsito", icon: <Lock className="h-4 w-4" /> },
                            { title: "Datos privados", desc: "Cero entrenamiento público", icon: <ShieldCheck className="h-4 w-4" /> },
                            { title: "Acceso granular", desc: "RBAC + auditoría completa", icon: <CheckCircle2 className="h-4 w-4" /> },
                        ].map((p) => (
                            <div key={p.title} className="flex gap-3 group">
                                <div className="w-9 h-9 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent shrink-0 group-hover:bg-accent/20 transition-all">
                                    {p.icon}
                                </div>
                                <div className="min-w-0">
                                    <h4 className="text-white font-black text-xs uppercase tracking-wider mb-0.5">{p.title}</h4>
                                    <p className="text-white/40 text-[10px] font-medium leading-tight">{p.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
          </div>
      </section>

      {/* Own Products Showcase */}
      <OwnProducts />

      {/* LLM-Agnostic & Custom-Build Section */}
      <section className="py-16 md:py-32 bg-[#05070F] relative overflow-hidden border-t border-white/5">
        {/* Ambient background */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent/[0.06] blur-[160px] rounded-full pointer-events-none" />

        <div className="container px-6 mx-auto relative z-10 max-w-6xl">
          {/* Header */}
          <div className="max-w-3xl mb-12 md:mb-20">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-[9px] font-black uppercase tracking-widest mb-6">
              <Brain className="h-3 w-3" /> LLM-Agnostic · Multi-Modelo
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-7xl font-black tracking-tighter leading-tight md:leading-[0.9] mb-4 md:mb-6">
              Cualquier modelo. <br/>
              <span className="text-accent italic">El que mejor te encaje.</span>
            </h2>
            <p className="text-white/55 text-base md:text-lg font-medium leading-relaxed max-w-2xl">
              Integramos Claude, GPT, Gemini, Llama, Mistral y modelos open-source en tu plataforma. Si quieres, los conectamos todos para que tu equipo elija el más rentable y preciso para cada tarea — sin atarte a un solo proveedor.
            </p>
          </div>

          {/* LLM grid showcase */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4 mb-16 md:mb-24">
            {[
              { name: "Claude 3.5", provider: "Anthropic", strength: "Razonamiento", color: "#D97757" },
              { name: "GPT-4o", provider: "OpenAI", strength: "Multi-modal", color: "#10A37F" },
              { name: "Gemini 2.0", provider: "Google", strength: "Contexto largo", color: "#4285F4" },
              { name: "Llama 3.3", provider: "Meta · Open", strength: "Self-hosted", color: "#0866FF" },
              { name: "Mistral Large", provider: "Mistral · EU", strength: "Compliance EU", color: "#FF7000" },
              { name: "DeepSeek", provider: "Open-source", strength: "Coste mínimo", color: "#5B6CFF" },
            ].map((llm, i) => (
              <motion.div
                key={llm.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="relative p-4 md:p-5 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-accent/30 transition-all group overflow-hidden"
              >
                <div
                  className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at top right, ${llm.color}25, transparent 70%)`,
                  }}
                />
                <div className="relative">
                  <div
                    className="h-2 w-2 rounded-full mb-3"
                    style={{ backgroundColor: llm.color, boxShadow: `0 0 10px ${llm.color}` }}
                  />
                  <div className="text-sm md:text-base font-black text-white tracking-tight mb-1">
                    {llm.name}
                  </div>
                  <div className="text-[9px] font-black uppercase tracking-widest text-white/40 mb-2">
                    {llm.provider}
                  </div>
                  <div className="text-[10px] font-bold text-accent/70">
                    {llm.strength}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Cost vs Custom split */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 mb-12 md:mb-16">
            {/* Multinational column */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative p-6 md:p-10 rounded-3xl bg-white/[0.02] border border-white/10 overflow-hidden"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="text-[9px] font-black uppercase tracking-[0.3em] text-white/40">
                  Multinacional / SaaS
                </div>
                <div className="px-2.5 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-[9px] font-black uppercase tracking-widest">
                  Caro · Rígido
                </div>
              </div>
              <div className="text-3xl md:text-4xl font-black text-white/40 mb-2 line-through decoration-red-500/40 decoration-2">
                90.000€+ /año
              </div>
              <div className="text-xs font-medium text-white/30 mb-6">Licencias enterprise + integradores + setup</div>
              <ul className="space-y-3">
                {[
                  "Pipeline de funcionalidades genérico",
                  "Roadmap fuera de tu control",
                  "Datos en cloud multi-tenant",
                  "Lock-in a un único modelo de IA",
                  "6-18 meses de implementación",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-white/50">
                    <span className="text-red-400 mt-0.5 shrink-0">✕</span>
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Custom build column */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative p-6 md:p-10 rounded-3xl bg-gradient-to-br from-accent/[0.08] to-transparent border border-accent/30 overflow-hidden shadow-[0_0_60px_-15px_rgba(251,191,36,0.3)]"
            >
              <div className="absolute -top-20 -right-20 w-60 h-60 bg-accent/15 blur-[120px] rounded-full pointer-events-none" />
              <div className="relative">
                <div className="flex items-center justify-between mb-6">
                  <div className="text-[9px] font-black uppercase tracking-[0.3em] text-accent">
                    AutoProcessX · Custom
                  </div>
                  <div className="px-2.5 py-1 rounded-full bg-accent/15 border border-accent/30 text-accent text-[9px] font-black uppercase tracking-widest flex items-center gap-1.5">
                    <Sparkles className="h-3 w-3" />
                    Tu medida
                  </div>
                </div>
                <div className="text-3xl md:text-5xl font-black text-accent mb-2 tracking-tighter">
                  Desde 5.000€
                </div>
                <div className="text-xs font-medium text-white/50 mb-6">Plataforma completa entregada y desplegada</div>
                <ul className="space-y-3">
                  {[
                    "Funcionalidades exactas que pides — nada más",
                    "Roadmap dirigido por tu negocio",
                    "Hosted en tu servidor o cloud privado",
                    "Multi-LLM: cambias de modelo cuando quieras",
                    "Despliegue en 4-6 semanas en producción",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-white">
                      <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                      <span className="font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>

          {/* Closing punchline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl md:rounded-[40px] bg-white/[0.02] border border-white/10 p-6 md:p-12 backdrop-blur-xl text-center"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[9px] font-black uppercase tracking-widest text-white/50 mb-5">
              <Sparkles className="h-3 w-3 text-accent" /> 100% A medida
            </div>
            <h3 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tighter leading-tight md:leading-[1.05] text-white mb-4 md:mb-5 max-w-4xl mx-auto">
              La plataforma exacta que necesitas, <span className="text-accent italic">a una fracción del coste</span> de un Salesforce o un HubSpot.
            </h3>
            <p className="text-white/50 text-sm md:text-base font-medium leading-relaxed max-w-2xl mx-auto">
              No pagas funcionalidades que nunca usarás. No te atas a un solo modelo de IA. No subes tus datos a un cloud compartido. Construimos solo lo que tu operativa necesita — y queda en tu infraestructura para siempre.
            </p>
          </motion.div>
        </div>
      </section>

      {/* High-Impact Final CTA — Aplicaciones IA */}
      <section className="relative overflow-hidden py-20 md:py-32 bg-[#05070F] border-t border-white/5">
        {/* Background ambient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-accent/[0.07] blur-[160px] rounded-full pointer-events-none" />
        <div className="absolute -top-40 left-0 w-[500px] h-[500px] bg-accent/10 blur-[140px] rounded-full pointer-events-none" />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            maskImage: "radial-gradient(ellipse 60% 60% at 50% 50%, black 30%, transparent 100%)",
            WebkitMaskImage: "radial-gradient(ellipse 60% 60% at 50% 50%, black 30%, transparent 100%)",
          }}
        />

        {/* Scanning beam */}
        <motion.div
          className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-accent/50 to-transparent pointer-events-none"
          animate={{ top: ["0%", "100%"] }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          style={{ boxShadow: "0 0 20px rgba(251, 191, 36, 0.4)" }}
        />

        <div className="container relative z-10 px-6 mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Eyebrow */}
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="h-[1px] w-12 bg-accent/40" />
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/30 text-accent text-[10px] font-black uppercase tracking-[0.3em] backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-accent opacity-75 animate-ping" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                </span>
                Build Slot · Disponible
              </div>
              <div className="h-[1px] w-12 bg-accent/40" />
            </div>

            {/* Massive headline */}
            <h2 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.85] text-center mb-6 md:mb-8">
              Tu plataforma IA. <br />
              <span className="text-accent italic">Hecha a medida.</span>
            </h2>

            <p className="text-white/55 text-base md:text-xl font-medium leading-relaxed text-center max-w-2xl mx-auto mb-10 md:mb-14">
              Cuéntanos qué módulos necesitas. Te entregamos un prototipo navegable en una semana y la plataforma completa desplegada en 4-6 semanas — con tu propio LLM, tus datos y tu marca.
            </p>

            {/* Big stats row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-12 md:mb-16">
              {[
                { value: "5.000€", label: "Desde", icon: <Sparkles className="h-4 w-4" /> },
                { value: "4-6w", label: "Time to deploy", icon: <Calendar className="h-4 w-4" /> },
                { value: "100%", label: "Código tuyo", icon: <Code2 className="h-4 w-4" /> },
                { value: "6+", label: "LLMs soportados", icon: <Brain className="h-4 w-4" /> },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="relative rounded-2xl md:rounded-3xl bg-white/[0.02] border border-white/10 hover:border-accent/30 transition-all p-4 md:p-6 group overflow-hidden"
                >
                  <div className="absolute top-3 right-3 text-accent/30 group-hover:text-accent transition-colors">
                    {stat.icon}
                  </div>
                  <div className="text-2xl md:text-4xl lg:text-5xl font-black text-white tracking-tighter mb-1 md:mb-2 group-hover:text-accent transition-colors">
                    {stat.value}
                  </div>
                  <div className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.25em] text-white/40">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 md:gap-4 mb-10 md:mb-14">
              <Button
                onClick={() => {
                  gtagEvent("click_cta_to_form", {
                    event_category: "cta",
                    event_label: "aplicaciones_ia_brief",
                    location: "aplicaciones_ia_final_cta",
                  })
                  openDrawer()
                }}
                className="group relative h-14 md:h-16 px-8 md:px-10 text-sm font-black tracking-wide bg-accent text-black hover:bg-white transition-all rounded-2xl shadow-[0_0_40px_-5px_rgba(251,191,36,0.5)] hover:shadow-[0_0_50px_-5px_rgba(251,191,36,0.7)] active:scale-95 overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2 uppercase tracking-[0.2em] text-xs md:text-sm">
                  <Rocket className="h-4 w-4" />
                  Pedir mi prototipo
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>

              <Button
                onClick={() => {
                  gtagEvent("click_cta_to_form", {
                    event_category: "cta",
                    event_label: "aplicaciones_ia_whatsapp",
                    location: "aplicaciones_ia_final_cta",
                  })
                  openDrawer()
                }}
                variant="outline"
                className="h-14 md:h-16 px-8 md:px-10 text-xs md:text-sm font-black tracking-[0.2em] uppercase border border-white/15 text-white bg-white/[0.03] hover:bg-white/[0.08] backdrop-blur-md transition-all rounded-2xl active:scale-95 flex items-center justify-center gap-2.5"
              >
                <MessageCircle className="h-4 w-4 text-accent" />
                Hablar con ingeniería
              </Button>
            </div>

            {/* Trust strip */}
            <div className="flex flex-wrap items-center justify-center gap-x-6 md:gap-x-8 gap-y-3 pt-8 border-t border-white/5">
              {[
                { icon: <Sparkles className="h-3.5 w-3.5" />, label: "100% A medida" },
                { icon: <Brain className="h-3.5 w-3.5" />, label: "Multi-LLM" },
                { icon: <Lock className="h-3.5 w-3.5" />, label: "Self-hosted" },
                { icon: <ShieldCheck className="h-3.5 w-3.5" />, label: "Datos privados" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-2 text-white/45">
                  <div className="text-accent">{item.icon}</div>
                  <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em]">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <FAQ
        items={platformFaqs}
        eyebrow="Platform Engineering · FAQ"
        title="Lo que preguntan antes de"
        titleAccent="construir su plataforma"
        description="Dudas frecuentes sobre módulos, agentes IA, hosting y propiedad de tu plataforma corporativa."
      />

      <Footer />
    </main>
  )
}
