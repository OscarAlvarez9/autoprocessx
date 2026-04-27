"use client"

import { motion } from "framer-motion"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import { CheckCircle2, ChevronRight, ShieldCheck, BrainCircuit, Zap, ArrowRight, Rocket, Terminal, Activity, Cpu, Server, Lock, Workflow, Database, GitBranch, Boxes, Network, Calendar, MessageCircle, TrendingUp, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { useContactDrawer } from "@/context/ContactDrawerContext"
import { gtagEvent } from "@/lib/gtag"
import AutomatizacionesHero from "@/components/AutomatizacionesHero"
import FAQ from "@/components/FAQ"
import JsonLd from "@/components/JsonLd"
import { automationsFaqs } from "@/lib/faqs"
import { buildServiceSchema } from "@/lib/seo"

const automationsServiceSchema = buildServiceSchema({
    slug: "/servicios/automatizaciones",
    name: "Automatización de procesos con n8n e IA",
    description: "Diseño y despliegue de workflows en n8n con agentes IA para empresas en España. Pipelines resilientes que conectan tus herramientas y eliminan tareas repetitivas, alojados bajo tu propio firewall sin coste por tarea.",
    serviceType: "Workflow Automation",
    offers: [
        { name: "Generador SEO & Data Enrichment con DataForSEO" },
        { name: "Reporting SEO autónomo con GSC y GA4" },
        { name: "Mega-Estrategia SEO Full-Scale orquestada en paralelo" },
        { name: "Secretaría autónoma con triaje inteligente de email" },
        { name: "Automatización omnicanal de redes sociales" },
        { name: "Integración CRM/ERP con agentes Claude" },
    ],
})

const methodSteps = [
    {
        title: "Auditoría de Sistemas",
        desc: "Análisis forense de la operativa actual para detectar fugas de rentabilidad y redundancias lógicas."
    },
    {
        title: "Arquitectura de Workflows",
        desc: "No configuramos apps, diseñamos pipelines resilientes con control de errores avanzado."
    },
    {
        title: "Despliegue Multi-Agente",
        desc: "Inyeccion de IA con contexto corporativo para toma de decisiones autónomas en la cadena de valor."
    },
    {
        title: "Escalabilidad Vertical",
        desc: "Optimización continua y monitoreo de tokens para asegurar que el sistema crezca con tu revenue."
    }
]

export default function AutomatizacionesPage() {
  const { openDrawer } = useContactDrawer()
  return (
    <main className="min-h-screen bg-[#05070F] text-white selection:bg-primary/20">
      <Navigation />

      <JsonLd data={automationsServiceSchema} />
      <AutomatizacionesHero />

      {/* Industrial Grid Section: Method */}
      <section id="metodo" className="py-16 md:py-48 bg-[#05070F] border-b border-white/5">
        <div className="container px-6 mx-auto">
            <div className="max-w-3xl mb-12 md:mb-24">
                <h2 className="text-3xl sm:text-4xl md:text-7xl font-black tracking-tighter leading-tight md:leading-none mb-4 md:mb-8">
                   Arquitectura de <br/>
                   <span className="text-accent italic">Transformación Digital</span>
                </h2>
                <p className="text-white/40 text-base md:text-xl font-medium leading-snug md:leading-tight max-w-2xl">
                    Un proceso de ingeniería rigorosa diseñado para construir sistemas escalables, no parches rápidos.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {methodSteps.map((step, i) => (
                <motion.div
                  key={i}
                  className="bg-white/[0.02] p-6 md:p-10 rounded-3xl md:rounded-[48px] border border-accent/30 hover:border-accent/60 shadow-[0_0_40px_-12px_rgba(251,191,36,0.35)] hover:shadow-[0_0_50px_-8px_rgba(251,191,36,0.5)] transition-all group relative overflow-hidden h-full"
                >
                  <div className="text-4xl md:text-5xl font-black text-accent group-hover:text-accent transition-colors block mb-6 md:mb-8 tracking-tighter leading-none">0{i+1}</div>
                  <h3 className="text-xl md:text-2xl font-black mb-3 md:mb-4 tracking-tight group-hover:text-accent transition-colors">{step.title}</h3>
                  <p className="text-white/30 text-xs leading-relaxed font-medium">{step.desc}</p>
                </motion.div>
              ))}
            </div>
        </div>
      </section>

      {/* Local Server + Agent Training Block */}
      <section className="py-16 md:py-32 bg-[#05070F] relative overflow-hidden border-t border-white/5">
          <div className="container px-6 mx-auto relative z-10">
            {/* Header */}
            <div className="max-w-3xl mb-12 md:mb-20">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-[9px] font-black uppercase tracking-widest mb-6">
                    <Server className="h-3 w-3" /> On-Premise · Self-Hosted
                </div>
                <h2 className="text-3xl sm:text-5xl md:text-7xl font-black text-white mb-5 md:mb-8 tracking-tighter leading-tight md:leading-[0.9]">
                    Servidor local. <br/>
                    <span className="text-accent italic">Agentes que aprenden tu empresa.</span>
                </h2>
                <p className="text-white/50 text-base md:text-lg font-medium leading-relaxed max-w-2xl">
                    Desplegamos un servidor dedicado en tu red. Entrenamos los agentes con tus procesos reales de forma segura y construimos flujos escalables que crecen con tu operativa — sin enviar datos a terceros.
                </p>
            </div>

            {/* 3 columns: Server / Training / Scale */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6 mb-10 md:mb-16">
                {/* Local Server */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative p-6 md:p-8 rounded-3xl bg-gradient-to-br from-accent/[0.06] to-transparent border border-accent/20 overflow-hidden"
                >
                    <div className="absolute top-0 right-0 -mr-10 -mt-10 w-40 h-40 bg-accent/10 blur-[60px] rounded-full pointer-events-none" />
                    <div className="relative">
                        <div className="flex items-center justify-between mb-5">
                            <div className="h-12 w-12 rounded-xl bg-accent/15 border border-accent/30 flex items-center justify-center text-accent">
                                <Server className="h-6 w-6" />
                            </div>
                            <span className="text-[9px] font-black uppercase tracking-widest text-accent/70">01 · Infra</span>
                        </div>
                        <h3 className="text-xl md:text-2xl font-black text-white mb-3 tracking-tight">Servidor local dedicado</h3>
                        <p className="text-white/50 text-sm font-medium leading-relaxed mb-5">
                            Un nodo bajo tu firewall corre n8n, vector DB y orquestador. Tus datos nunca salen del perímetro.
                        </p>
                        <div className="space-y-2">
                            {[
                                "On-prem o tu cuenta cloud",
                                "Backups cifrados AES-256",
                                "Acceso SSH bajo control",
                                "0€ coste por ejecución",
                            ].map((item) => (
                                <div key={item} className="flex items-center gap-2">
                                    <CheckCircle2 className="h-3.5 w-3.5 text-accent shrink-0" />
                                    <span className="text-[11px] font-bold text-white/70">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Agent Training */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="relative p-6 md:p-8 rounded-3xl bg-white/[0.02] border border-white/10 overflow-hidden hover:border-accent/30 transition-all"
                >
                    <div className="flex items-center justify-between mb-5">
                        <div className="h-12 w-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-accent">
                            <BrainCircuit className="h-6 w-6" />
                        </div>
                        <span className="text-[9px] font-black uppercase tracking-widest text-white/40">02 · Training</span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-black text-white mb-3 tracking-tight">Entrenamiento seguro de agentes</h3>
                    <p className="text-white/50 text-sm font-medium leading-relaxed mb-5">
                        Vectorizamos tus SOPs, emails y documentación. Los agentes aprenden el contexto real sin filtrar nada al exterior.
                    </p>
                    <div className="space-y-2">
                        {[
                            "Embeddings sobre tu BD",
                            "RAG con citación de fuente",
                            "Cero entrenamiento público",
                            "Versionado de prompts",
                        ].map((item) => (
                            <div key={item} className="flex items-center gap-2">
                                <CheckCircle2 className="h-3.5 w-3.5 text-accent shrink-0" />
                                <span className="text-[11px] font-bold text-white/70">{item}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Scalable workflows */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="relative p-6 md:p-8 rounded-3xl bg-white/[0.02] border border-white/10 overflow-hidden hover:border-accent/30 transition-all"
                >
                    <div className="flex items-center justify-between mb-5">
                        <div className="h-12 w-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-accent">
                            <Workflow className="h-6 w-6" />
                        </div>
                        <span className="text-[9px] font-black uppercase tracking-widest text-white/40">03 · Scale</span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-black text-white mb-3 tracking-tight">Flujos escalables sin límites</h3>
                    <p className="text-white/50 text-sm font-medium leading-relaxed mb-5">
                        Pipelines paralelos con control de errores y reintentos. Crece de 100 a 100.000 ejecuciones sin pagar por tarea.
                    </p>
                    <div className="space-y-2">
                        {[
                            "Workers horizontales",
                            "Retry + dead-letter queue",
                            "Observabilidad nativa",
                            "Tokens y costes monitorizados",
                        ].map((item) => (
                            <div key={item} className="flex items-center gap-2">
                                <CheckCircle2 className="h-3.5 w-3.5 text-accent shrink-0" />
                                <span className="text-[11px] font-bold text-white/70">{item}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Flow strip — visual confirmation */}
            <div className="rounded-3xl bg-white/[0.02] border border-white/10 p-5 md:p-6 backdrop-blur-xl">
                <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 md:gap-2">
                    {[
                        { label: "Tu BD", icon: <Database className="h-4 w-4" /> },
                        { label: "Embeddings", icon: <Boxes className="h-4 w-4" /> },
                        { label: "Servidor local", icon: <Server className="h-4 w-4" /> },
                        { label: "Agentes IA", icon: <BrainCircuit className="h-4 w-4" /> },
                        { label: "Workflows", icon: <Workflow className="h-4 w-4" /> },
                        { label: "Tu equipo", icon: <Network className="h-4 w-4" /> },
                    ].map((step, i, arr) => (
                        <div key={step.label} className="flex items-center gap-3 flex-1">
                            <div className="flex items-center gap-2.5 px-3 py-2 rounded-xl bg-accent/[0.06] border border-accent/20 text-accent flex-1 md:flex-initial">
                                {step.icon}
                                <span className="text-[10px] font-black uppercase tracking-wider whitespace-nowrap">{step.label}</span>
                            </div>
                            {i < arr.length - 1 && (
                                <div className="hidden md:block flex-1 h-[1px] bg-gradient-to-r from-accent/30 to-accent/10" />
                            )}
                        </div>
                    ))}
                </div>
            </div>
          </div>
      </section>

      {/* Pre-built Workflows Catalog */}
      <section className="py-16 md:py-32 bg-[#05070F] relative overflow-hidden border-t border-white/5">
        <div className="container px-6 mx-auto relative z-10">
          {/* Header */}
          <div className="max-w-3xl mb-12 md:mb-20">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-[9px] font-black uppercase tracking-widest mb-6">
              <Workflow className="h-3 w-3" /> Catálogo de Workflows
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-7xl font-black tracking-tighter leading-tight md:leading-[0.9] mb-4 md:mb-6">
              Automatizaciones <br/>
              <span className="text-accent italic">listas para desplegar.</span>
            </h2>
            <p className="text-white/50 text-base md:text-lg font-medium leading-relaxed max-w-2xl">
              Arquitecturas validadas en producción. Las instalamos en días — no meses — y las adaptamos a tu stack.
            </p>
          </div>

          {/* Catalog grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {[
              {
                title: "Generador de Estrategia Anual (90 págs)",
                desc: "Ingiere audio de juntas directivas, lo procesa con un enjambre de LLMs y exporta un documento estratégico de 90 páginas a Google Docs sin intervención humana.",
                tags: ["Transcription", "LLM Swarm", "n8n Routing", "Google Docs API"],
                image: "/assets/n8n_strategy_workflow.png",
              },
              {
                title: "Alertas Prioritarias Omnicanal",
                desc: "Monitoriza tu gestor de tareas en tiempo real. Un evaluador asigna SLA y dispara notificaciones críticas por WhatsApp a Managers.",
                tags: ["Asana / Jira", "WhatsApp Cloud", "Task Polling", "Smart SLAs"],
                image: "/assets/n8n_asana_whatsapp_alert.png",
              },
              {
                title: "Delegación de Tareas Post-Reunión",
                desc: "La IA ingiere el audio de tus reuniones, genera un recap corporativo y delega action-items a tu equipo en Asana con fechas y prioridad.",
                tags: ["AssemblyAI", "Claude 3.5", "Gmail / SMTP", "Asana API"],
                image: "/assets/n8n_meeting_recap.png",
              },
              {
                title: "Secretaría Autónoma & Triaje",
                desc: "Un agente lee tu bandeja, clasifica prioridad por reglas de negocio, agenda en Google Calendar si procede y alerta por WhatsApp.",
                tags: ["Gmail Listener", "Claude Routing", "Google Calendar", "WhatsApp"],
                image: "/assets/n8n_calendar_routing.png",
              },
              {
                title: "Generador SEO & Data Enrichment",
                desc: "Idea cientos de keywords de nicho, extrae volúmenes reales con DataForSEO, filtra el Top 50 más rentable y exporta a Excel automáticamente.",
                tags: ["Anthropic Claude", "DataForSEO", "Enrichment", "Excel"],
                image: "/assets/n8n_seo_keywords.png",
              },
              {
                title: "Reporting SEO Autónomo",
                desc: "A fin de mes recorre tu cartera de clientes, extrae analítica de GSC y GA4, y genera un informe ejecutivo personalizado por dominio.",
                tags: ["GSC API", "GA4 API", "Claude", "HTML Generation"],
                image: "/assets/n8n_seo_report.png",
              },
              {
                title: "Mega-Estrategia SEO Full-Scale",
                desc: "Orquestador en paralelo: Análisis de Competidores, Expansión Semántica, Volúmenes y SERP — fusionados en un informe maestro.",
                tags: ["Parallel Orchestration", "Competitor AI", "SERP", "Retry"],
                image: "/assets/n8n_seo_strategy.png",
              },
              {
                title: "Creador Omnicanal Autónomo",
                desc: "Genera copys con Claude, sintetiza vídeo hiperrealista con HeyGen y publica nativo en Instagram, TikTok, LinkedIn y Facebook.",
                tags: ["Claude 3.5", "HeyGen", "Social Router", "Omnichannel"],
                image: "/assets/n8n_omnichannel.png",
              },
            ].map((wf, i) => (
              <motion.div
                key={wf.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: (i % 2) * 0.05, duration: 0.5 }}
                className="rounded-3xl md:rounded-[32px] bg-white/[0.02] border border-white/10 hover:border-accent/30 transition-all overflow-hidden group flex flex-col"
              >
                {/* Image */}
                <div className="relative aspect-video bg-[#0B0E1A] overflow-hidden border-b border-white/5">
                  <Image
                    src={wf.image}
                    alt={wf.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-contain p-6 group-hover:scale-105 transition-transform duration-[1500ms] ease-out"
                  />
                  <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/40 border border-white/10 backdrop-blur-md">
                    <div className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                    <span className="text-[9px] font-black uppercase tracking-widest text-accent">n8n · Live</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 md:p-8 flex flex-col flex-1">
                  <h3 className="text-lg md:text-xl font-black tracking-tight text-white mb-3 group-hover:text-accent transition-colors">
                    {wf.title}
                  </h3>
                  <p className="text-white/50 text-sm font-medium leading-relaxed mb-5 flex-1">
                    {wf.desc}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {wf.tags.map((t) => (
                      <span key={t} className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-[9px] font-black uppercase tracking-widest text-white/50">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 md:mt-14 text-center">
            <p className="text-white/40 text-sm font-medium">
              ¿Tienes un proceso que no está aquí? Lo construimos a medida sobre la misma arquitectura.
            </p>
          </div>

          {/* Custom build callout */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 md:mt-20 relative overflow-hidden rounded-3xl md:rounded-[40px] border border-accent/30 bg-gradient-to-br from-accent/[0.08] via-accent/[0.03] to-transparent p-6 md:p-12"
          >
            <div className="absolute -top-24 -right-24 w-72 h-72 bg-accent/15 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute -bottom-32 -left-16 w-72 h-72 bg-accent/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="relative flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10">
              <div className="flex items-center justify-center h-14 w-14 md:h-20 md:w-20 rounded-2xl md:rounded-3xl bg-accent/15 border border-accent/30 text-accent shrink-0">
                <Rocket className="h-7 w-7 md:h-10 md:w-10" />
              </div>

              <div className="flex-1 min-w-0">
                <div className="text-[10px] font-black uppercase tracking-[0.3em] text-accent mb-2 md:mb-3">
                  Build a medida
                </div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight leading-tight md:leading-[1.05] text-white mb-3 md:mb-4">
                  A parte de estas, creamos <span className="text-accent italic">cualquier flujo o plataforma</span> de automatización a medida para tu empresa.
                </h3>
                <p className="text-white/55 text-sm md:text-base font-medium leading-relaxed max-w-2xl">
                  Auditamos tu operativa, diseñamos la arquitectura y la desplegamos en tu infraestructura. Sin templates rígidos — cada proceso construido sobre las mismas garantías de servidor local, agentes seguros y escalado horizontal.
                </p>
              </div>

              <Link href="https://booking.setmore.com/scheduleappointment/5502c3a5-1773-45a7-9388-f3da7aa86326" className="w-full md:w-auto shrink-0">
                <Button className="w-full md:w-auto h-12 md:h-14 px-6 md:px-8 rounded-xl md:rounded-2xl bg-accent text-black hover:bg-white transition-all font-black uppercase tracking-[0.2em] text-[11px] shadow-lg shadow-accent/20 active:scale-95 flex items-center gap-2 group">
                  Hablar con ingeniería
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Latest Case Studies */}
      <section className="py-16 md:py-32 bg-[#05070F] relative overflow-hidden border-t border-white/5">
        <div className="container px-6 mx-auto relative z-10">
          <div className="max-w-3xl mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-[9px] font-black uppercase tracking-widest mb-6">
              <Activity className="h-3 w-3 animate-pulse" /> Últimos despliegues
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-black tracking-tighter leading-tight md:leading-[0.95] mb-4 md:mb-6">
              Nuestros últimos <br/>
              <span className="text-accent italic">casos de éxito.</span>
            </h2>
            <p className="text-white/50 text-base md:text-lg font-medium leading-relaxed max-w-2xl">
              Dos despliegues recientes en producción — automatización de contenido SEO y arquitectura multi-proceso para agencia.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
            {[
              {
                slug: "farmacia-garcia-del-cerro",
                client: "Farmacia García del Cerro",
                sector: "Salud & Farmacia",
                title: "Auto-Blog Engine SEO",
                desc: "Motor autónomo en Make.com que genera, programa y publica artículos SEO optimizados directamente en Contentful con calendario editorial anual completo.",
                image: "/assets/farmacia_garcia_del_cerro_logo.png",
                metrics: [
                  { label: "Crecimiento orgánico", value: "+40%" },
                  { label: "Reducción tiempo", value: "-73%" },
                  { label: "ROI 3 meses", value: "4.2x" },
                ],
                tags: ["Make.com", "Claude 3.5", "GPT-4o", "Contentful"],
              },
              {
                slug: "pelican-catchy-infraestructura-ia",
                client: "Pelican Catchy",
                sector: "Marketing Digital & SaaS",
                title: "Infraestructura Multi-Proceso",
                desc: "Arquitectura multi-agente en n8n que automatiza 8 procesos en paralelo: estrategia, SEO, redes sociales, Asana y reportes WhatsApp.",
                image: "/assets/pelican_catchy_logo.png",
                metrics: [
                  { label: "Eficiencia operativa", value: "+160%" },
                  { label: "Procesos automatizados", value: "8" },
                  { label: "Ahorro mensual", value: "45k€" },
                ],
                tags: ["n8n", "Claude 3.5", "Metricool", "Asana", "WhatsApp"],
              },
            ].map((caso, i) => (
              <motion.div
                key={caso.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.1 }}
                className="rounded-3xl md:rounded-[32px] bg-white/[0.02] border border-white/10 hover:border-accent/30 transition-all overflow-hidden group flex flex-col"
              >
                {/* Image */}
                <div className="relative aspect-video bg-[#0B0E1A] overflow-hidden border-b border-white/5">
                  <Image
                    src={caso.image}
                    alt={caso.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-contain p-6 md:p-10 group-hover:scale-105 transition-transform duration-[1500ms] ease-out"
                  />
                  <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/40 border border-white/10 backdrop-blur-md">
                    <div className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[9px] font-black uppercase tracking-widest text-emerald-400">In production</span>
                  </div>
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-accent/10 border border-accent/20 backdrop-blur-md">
                    <span className="text-[9px] font-black uppercase tracking-widest text-accent">{caso.sector}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 md:p-8 flex flex-col flex-1">
                  <div className="text-[10px] font-black uppercase tracking-[0.3em] text-accent mb-2">
                    {caso.client}
                  </div>
                  <h3 className="text-xl md:text-2xl font-black tracking-tight text-white mb-3 md:mb-4 group-hover:text-accent transition-colors">
                    {caso.title}
                  </h3>
                  <p className="text-white/50 text-sm font-medium leading-relaxed mb-5 md:mb-6 flex-1">
                    {caso.desc}
                  </p>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-2 md:gap-3 mb-5 md:mb-6">
                    {caso.metrics.map((m) => (
                      <div key={m.label} className="rounded-xl bg-white/[0.03] border border-white/5 p-3 text-center">
                        <div className="text-base md:text-lg font-black text-accent tracking-tighter mb-0.5">{m.value}</div>
                        <div className="text-[8px] font-black uppercase tracking-widest text-white/40 leading-tight">{m.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5 md:mb-6">
                    {caso.tags.map((t) => (
                      <span key={t} className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-[9px] font-black uppercase tracking-widest text-white/50">
                        {t}
                      </span>
                    ))}
                  </div>

                  <Link href={`/casos-de-exito/${caso.slug}`} className="mt-auto">
                    <Button className="w-full h-12 rounded-xl bg-white/5 hover:bg-accent hover:text-black border border-white/10 text-white transition-all font-black uppercase tracking-[0.2em] text-[10px] flex items-center justify-center gap-2 group/btn">
                      Ver caso completo
                      <ArrowRight className="h-3.5 w-3.5 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 md:mt-14 text-center">
            <Link href="/casos-de-exito">
              <Button variant="ghost" className="h-12 md:h-14 px-6 md:px-8 text-white/60 hover:text-accent font-black uppercase tracking-[0.2em] text-[10px] flex items-center gap-2 group mx-auto">
                Ver todos los casos
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* High-Impact Final CTA */}
      <section className="relative overflow-hidden py-20 md:py-32 bg-[#05070F] border-t border-white/5">
        {/* Background ambient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-accent/[0.07] blur-[160px] rounded-full pointer-events-none" />
        <div className="absolute -top-40 right-0 w-[500px] h-[500px] bg-accent/10 blur-[140px] rounded-full pointer-events-none" />

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
                Deploy Window · Open
              </div>
              <div className="h-[1px] w-12 bg-accent/40" />
            </div>

            {/* Massive headline */}
            <h2 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.85] text-center mb-6 md:mb-8">
              De 0 a producción <br />
              <span className="text-accent italic">en 14 días.</span>
            </h2>

            <p className="text-white/55 text-base md:text-xl font-medium leading-relaxed text-center max-w-2xl mx-auto mb-10 md:mb-14">
              Un sprint focalizado: auditamos, diseñamos y desplegamos tu primer flujo de automatización en producción. Sin retainers indefinidos, sin powerpoint, sin SaaS intermediarios.
            </p>

            {/* Big stats row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-12 md:mb-16">
              {[
                { value: "14d", label: "Time to deploy", icon: <Calendar className="h-4 w-4" /> },
                { value: "4.8x", label: "ROI promedio", icon: <TrendingUp className="h-4 w-4" /> },
                { value: "0€", label: "Coste por tarea", icon: <Zap className="h-4 w-4" /> },
                { value: "250+", label: "Despliegues activos", icon: <Server className="h-4 w-4" /> },
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
                  <div className="text-3xl md:text-5xl font-black text-white tracking-tighter mb-1 md:mb-2 group-hover:text-accent transition-colors">
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
                    event_label: "automatizaciones_auditoria",
                    location: "automatizaciones_final_cta",
                  })
                  openDrawer()
                }}
                className="group relative h-14 md:h-16 px-8 md:px-10 text-sm font-black tracking-wide bg-accent text-black hover:bg-white transition-all rounded-2xl shadow-[0_0_40px_-5px_rgba(251,191,36,0.5)] hover:shadow-[0_0_50px_-5px_rgba(251,191,36,0.7)] active:scale-95 overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2 uppercase tracking-[0.2em] text-xs md:text-sm">
                  <Rocket className="h-4 w-4" />
                  Solicitar auditoría gratis
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>

              <Button
                onClick={() => {
                  gtagEvent("click_cta_to_form", {
                    event_category: "cta",
                    event_label: "automatizaciones_whatsapp",
                    location: "automatizaciones_final_cta",
                  })
                  openDrawer()
                }}
                variant="outline"
                className="h-14 md:h-16 px-8 md:px-10 text-xs md:text-sm font-black tracking-[0.2em] uppercase border border-white/15 text-white bg-white/[0.03] hover:bg-white/[0.08] backdrop-blur-md transition-all rounded-2xl active:scale-95 flex items-center justify-center gap-2.5"
              >
                <MessageCircle className="h-4 w-4 text-accent" />
                Hablar por WhatsApp
              </Button>
            </div>

            {/* Trust strip */}
            <div className="flex flex-wrap items-center justify-center gap-x-6 md:gap-x-8 gap-y-3 pt-8 border-t border-white/5">
              {[
                { icon: <ShieldCheck className="h-3.5 w-3.5" />, label: "Sin retainers" },
                { icon: <Lock className="h-3.5 w-3.5" />, label: "Self-hosted" },
                { icon: <Sparkles className="h-3.5 w-3.5" />, label: "Código 100% tuyo" },
                { icon: <Activity className="h-3.5 w-3.5" />, label: "SLA garantizado" },
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
        items={automationsFaqs}
        eyebrow="Workflow Engineering · FAQ"
        title="Lo que preguntan antes de"
        titleAccent="automatizar"
        description="Dudas frecuentes sobre n8n, despliegue, costes y arquitectura de automatizaciones IA."
      />

      <Footer />
    </main>
  )
}
