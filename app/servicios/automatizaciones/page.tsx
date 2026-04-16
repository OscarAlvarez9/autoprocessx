"use client"

import { motion } from "framer-motion"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import { CheckCircle2, ChevronRight, ShieldCheck, BrainCircuit, Target, Zap, ArrowRight, Rocket } from "lucide-react"
import FinalCTA from "@/components/FinalCTA"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { AutomationHeroGraphic, InfrastructureGraphic } from "@/components/Graphics"

const methodSteps = [
    {
        title: "Auditoría de Procesos",
        desc: "Realizamos un análisis exhaustivo de la operativa actual de tu empresa para detectar cuellos de botella y fugas de rentabilidad."
    },
    {
        title: "Estudio de Arquitectura",
        desc: "No automatizamos el caos. Estudiamos la arquitectura de tus workflows para encontrar la manera más eficiente y robusta de construirlos."
    },
    {
        title: "Entrenamiento de Agentes",
        desc: "Entrenamos agentes de IA con todo el contexto de tu negocio para que actúen como un trabajador más, preciso y autónomo."
    },
    {
        title: "Foco en lo Importante",
        desc: "Liberamos a tu equipo de la carga operativa para que puedan centrarse en las decisiones estratégicas que hacen crecer el negocio."
    }
]

export default function AutomatizacionesPage() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary/20">
      <Navigation />
      <div className="relative pt-32 pb-32 overflow-hidden bg-background border-b border-gray-100">
        {/* Subtle Tech Grid */}
        <div className="absolute inset-0 z-0 opacity-[0.4]">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:3rem_3rem]" />
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/5 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />
        </div>

        <div className="container relative z-10 px-4 mx-auto">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs font-bold text-foreground/40 mb-12 uppercase tracking-[0.2em]">
              <Link href="/" className="hover:text-accent transition-colors">Home</Link>
              <ChevronRight className="h-3 w-3" />
              <span className="text-accent">Ingeniería de Automatización</span>
          </div>

          <div className="flex flex-col lg:flex-row gap-16 items-center">
            {/* Copy */}
            <div className="w-full lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-black uppercase tracking-widest mb-8"
              >
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                Automatización de Procesos Empresariales · Barcelona
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 }}
                className="text-5xl md:text-[80px] font-black tracking-tighter mb-8 leading-[0.88]"
              >
                <span className="block text-[11px] font-black uppercase tracking-[0.45em] text-accent/70 mb-4 leading-none">AutoProcessX</span>
                Automatización inteligente <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-orange-400 italic">para tu empresa.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-xl text-foreground/60 font-medium leading-relaxed mb-12 max-w-lg"
              >
                Servicios de automatización empresarial en Barcelona. Auditamos tus procesos, diseñamos workflows robustos y desplegamos agentes autónomos. De la <strong>automatización de tareas</strong> a la hiperautomatización.
              </motion.p>

              {/* Stat pills */}
              <div className="flex flex-wrap gap-4 mb-12">
                {[
                  { icon: <CheckCircle2 className="h-4 w-4" />, label: "Ahorro operativo", value: "+40h/mes" },
                  { icon: <Zap className="h-4 w-4" />, label: "Flujos Integrados", value: "Custom" },
                  { icon: <ShieldCheck className="h-4 w-4" />, label: "Seguridad", value: "24/7" },
                ].map((stat, i) => (
                  <div key={i} className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-muted border border-gray-100">
                    <span className="text-accent">{stat.icon}</span>
                    <div>
                      <div className="text-xs font-bold text-foreground/40 uppercase tracking-widest">{stat.label}</div>
                      <div className="text-lg font-black tracking-tight">{stat.value}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <Link href="https://booking.setmore.com/scheduleappointment/5502c3a5-1773-45a7-9388-f3da7aa86326">
                  <Button className="bg-accent hover:bg-accent/90 text-white h-14 px-10 rounded-2xl font-black text-base shadow-xl shadow-accent/20 border-none transition-all hover:scale-[1.02]">
                    <Rocket className="mr-2 h-5 w-5" />
                    Conseguir propuesta
                  </Button>
                </Link>
                <Link href="#masterpieces">
                  <Button variant="outline" className="h-14 px-10 rounded-2xl font-black text-base border-2 hover:bg-muted/50 transition-all flex items-center gap-2 group">
                    Ver arquitectura
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Visual */}
            <div className="w-full lg:w-1/2 relative group">
              <div className="absolute -inset-4 bg-gradient-to-br from-accent/15 to-orange-400/15 rounded-[64px] blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-1000" />
              <div className="relative aspect-[4/3] rounded-[56px] border border-white/5 shadow-2xl overflow-hidden flex items-center justify-center p-4 bg-[#0a0a0b]">
                <AutomationHeroGraphic />
              </div>
            </div>
          </div>

          {/* Partner Logos */}
          <div className="mt-20 pt-12 border-t border-gray-100 relative max-w-5xl mx-auto">
              <h3 className="absolute -top-3 left-1/2 -translate-x-1/2 bg-background px-6 text-[10px] font-black uppercase tracking-[0.25em] text-foreground/40">
                  Liderando el ecosistema tecnológico mundial
              </h3>
              <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 mt-10">
                  {/* n8n */}
                  <div className="flex items-center gap-3 cursor-default group">
                      <svg className="w-8 h-8 text-[#FF6C37]" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-13c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0 8c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"/>
                          <circle cx="12" cy="12" r="1.5"/>
                          <circle cx="12" cy="6" r="1"/>
                          <circle cx="12" cy="18" r="1"/>
                          <circle cx="6" cy="12" r="1"/>
                          <circle cx="18" cy="12" r="1"/>
                      </svg>
                      <span className="text-xl font-black tracking-tighter text-foreground/80 group-hover:text-foreground transition-colors">n8n</span>
                  </div>

                  {/* LLMs */}
                  <div className="flex items-center gap-3 cursor-default group">
                      <span className="text-2xl">🧠</span>
                      <span className="text-xl font-black tracking-tighter text-foreground/80 group-hover:text-foreground transition-colors">LLM's</span>
                  </div>

                  {/* PostgreSQL */}
                  <div className="flex items-center gap-3 cursor-default group">
                      <svg className="w-8 h-8 text-[#336791]" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M19.07,13.1c-0.12-1-0.34-2.02-0.65-3c-1.35-4.22-5.46-5.89-7.46-6.1c-1.89-0.2-3.83,0.34-5.26,1.48 C4.27,6.62,3.31,8.42,3.31,10.61c0,2.6,1.38,4.72,3.35,5.8c-0.23,0.37-0.45,0.73-0.67,1.08c-0.34,0.54-1.28,1-1.31,1.01H4.67 c-0.01,0-0.03,0-0.04,0h0c-1,0-1.81,0.8-1.81,1.79c0,0.48,0.2,0.94,0.56,1.26c0.33,0.3,0.76,0.46,1.22,0.46h6.73 c0.98,0,1.78-0.81,1.78-1.8c0-0.99-0.81-1.8-1.8-1.8h0h-1.6c0.05-0.06,0.1-0.13,0.15-0.19c1.9-2.31,3.48-5.38,3.95-8.48 c1.24,0.37,2.16,1.43,2.44,2.69c0.16,0.71,0.12,1.51-0.13,2.3c-0.11,0.37-0.37,0.7-0.78,0.84h0l-0.35,0.11 c-0.5,0.16-0.78,0.7-0.61,1.21c0.16,0.5,0.7,0.78,1.21,0.61h0l0.35-0.11c1.2-0.38,1.99-1.4,2.33-2.58 C19.26,16.29,19.34,14.67,19.07,13.1z M7.79,14.54c-1.3-0.71-2.22-2.11-2.22-3.93c0-1.54,0.67-2.8,1.69-3.6 c1-0.8,2.35-1.18,3.67-1.04c1.41,0.15,4.3,1.33,5.25,4.28c0.22,0.68,0.38,1.39,0.46,2.08C15.17,11.39,12.22,12.35,7.79,14.54z"/>
                      </svg>
                      <span className="text-xl font-black tracking-tighter text-foreground/80 group-hover:text-foreground transition-colors">PostgreSQL</span>
                  </div>

                  {/* Supabase */}
                  <div className="flex items-center gap-3 cursor-default group">
                      <svg className="w-8 h-8 text-[#3ECF8E]" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M21.35 11.1c0-.44-.31-.83-.74-.92l-3.32-.84V3.62c0-.35-.28-.62-.62-.62h-.53c-.35 0-.62.28-.62.62v3.13L6.15 15.69c-.07.1-.11.23-.11.36 0 .35.28.62.62.62h3.13v2.51c0 .33.25.6.58.62.33.02.63-.21.69-.53l2.16-5.84h3.33c.33 0 .6-.25.62-.58.02-.33-.21-.63-.53-.69l-3.32-.84V3.62c0-.35.28-.62.62-.62h3.13c.35 0 .62.28.62.62v7.5l2.43 1.1h.01c.42.19.6.7.41 1.12-.19.42-.7.6-1.12.41l-2.43-1.1v4.38c0 .35.28.62.62.62h3.13c.35 0 .62.28.62.62s-.28.62-.62.62h-3.13c-1.03 0-1.87-.84-1.87-1.87v-4.38h-.02l-2.43-1.1c-.42-.19-.6-.7-.41-1.12.19-.42.7-.6 1.12-.41l2.43 1.1V3.62h3.13V11.1h.41c.42 0 .74.34.74.74v.41h.41c.42 0 .74.34.74.74s-.32.74-.74.74h-.41v.41c0 .41-.32.74-.74.74s-.74-.33-.74-.74v-.41h-.41c-.42 0-.74-.34-.74-.74s.32-.74.74-.74h.41v-.41c0-.4-.32-.74-.74-.74s-.74.34-.74.74V11.1h.41z"/>
                      </svg>
                      <span className="text-xl font-black tracking-tighter text-foreground/80 group-hover:text-foreground transition-colors">Supabase</span>
                  </div>
              </div>
          </div>
        </div>
      </div>

      <div className="container px-4 mx-auto pb-24">
        {/* Method Section */}
        <div className="mb-32">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6">
              Nuestro método de <span className="text-accent italic">transformación.</span>
            </h2>
            <p className="text-xl text-foreground/50 font-medium">
              Un enfoque metódico para diseñar e implementar infraestructura lógica. No iteramos a ciegas, construimos sobre certezas.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {methodSteps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="p-8 px-10 rounded-[40px] bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:border-accent/20 transition-all group"
              >
                <span className="text-[64px] font-black text-foreground/5 group-hover:text-accent/20 transition-colors block mb-6 tracking-tighter leading-none">
                  0{i + 1}
                </span>
                <h3 className="text-2xl font-black mb-4 tracking-tight group-hover:text-accent transition-colors">{step.title}</h3>
                <p className="text-foreground/60 text-sm font-medium leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Dark: Core Capabilities */}
        <div className="mb-32 bg-[#0a0a0b] rounded-[64px] lg:rounded-[80px] overflow-hidden border border-white/5 shadow-[0_0_80px_-20px_rgba(255,107,0,0.1)]">
          <div className="flex flex-col lg:flex-row items-stretch">
            {/* Image side */}
            <div className="lg:w-1/2 relative min-h-[400px] bg-gradient-to-br from-accent/10 via-transparent to-transparent flex items-center justify-center p-12">
              <InfrastructureGraphic />
            </div>
            
            {/* Content side */}
            <div className="lg:w-1/2 p-12 lg:p-20 flex flex-col justify-center relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-[10px] font-black uppercase tracking-[0.2em] mb-8 w-fit">
                <ShieldCheck className="h-3.5 w-3.5" /> Standard Grado Enterprise
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-8 tracking-tighter leading-tight">
                Privacidad y control sobre tu <span className="text-accent italic">infraestructura.</span>
              </h2>
              <p className="text-white/50 text-lg mb-12 font-medium leading-relaxed">
                No confíes tus datos a plataformas multitenant públicas. Desplegamos tu motor de automatización en servidores privados (Europa), garantizando seguridad y trazabilidad.
              </p>
              
              <div className="space-y-8">
                <div className="flex gap-5 group">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent group-hover:border-accent group-hover:text-white text-white/50 transition-all">
                    <ShieldCheck className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-white font-black text-lg mb-2">Instancias Zero-Trust</h4>
                    <p className="text-white/40 font-medium leading-relaxed">Alojamiento privado de tu n8n con IPs estáticas para integraciones seguras bajo tu firewall corporativo.</p>
                  </div>
                </div>

                <div className="flex gap-5 group">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-orange-500 group-hover:border-orange-500 group-hover:text-white text-white/50 transition-all">
                    <BrainCircuit className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-white font-black text-lg mb-2">IA Local End-to-End</h4>
                    <p className="text-white/40 font-medium leading-relaxed">Inferencia de modelos de IA sin compartir context windows con terceros, procesando datos sensibles localmente.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Ready-to-Deploy Catalog */}
        <div className="mb-32">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <div className="flex items-center justify-center gap-4 mb-6">
                    <div className="h-[2px] w-8 bg-secondary" />
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-secondary">Workflows Core</span>
                    <div className="h-[2px] w-8 bg-secondary" />
                </div>
                <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight leading-tight">
                    Catálogo de Automatizaciones <span className="italic text-primary">Pre-construidas</span>.
                </h2>
                <p className="text-foreground/60 text-lg font-medium leading-relaxed">
                    Aceleramos la integración desplegando lógicas probadas. Ejemplos de arquitecturas que instalamos en días, no meses.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Featured Masterpiece Workflow */}
                <div className="col-span-1 md:col-span-2 p-10 md:p-12 rounded-[40px] bg-foreground text-background border border-gray-800 shadow-2xl flex flex-col lg:flex-row gap-12 group overflow-hidden relative">
                    {/* Content */}
                    <div className="w-full lg:w-[45%] flex flex-col relative z-10">
                        <div className="flex items-center gap-4 mb-6">
                            <Rocket className="h-6 w-6 text-accent group-hover:-translate-y-1 transition-transform" />
                            <h3 className="text-3xl md:text-4xl font-black tracking-tight text-white">Generador de Estrategia Anual (90 Págs)</h3>
                        </div>
                        <p className="text-white/60 leading-relaxed font-medium mb-8 text-lg">
                            Mega-arquitectura capaz de ingerir una transcripción de audio de una junta directiva, procesarla mediante un enjambre de LLMs, y redactar, estructurar y exportar un documento estratégico corporativo de 90 páginas directamente a Google Docs en minutos sin intervención humana.
                        </p>
                        <div className="flex flex-wrap gap-2 mt-auto">
                            {["Machine Transcription", "LLM Swarm", "n8n Advanced Routing", "Google Docs API"].map((tag, idx) => (
                                <span key={idx} className="px-3 py-1 bg-white/5 border border-white/10 text-white/50 text-[10px] uppercase font-black tracking-widest rounded-lg">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                    {/* Visual Interface */}
                    <div className="w-full lg:w-[55%] relative min-h-[300px] rounded-3xl overflow-hidden bg-[#1E1E1E] border border-white/10 group-hover:border-accent/40 transition-colors shadow-2xl">
                        <div className="absolute inset-0 bg-gradient-to-r from-foreground via-transparent to-transparent z-10 hidden lg:block opacity-80" />
                        <Image 
                            src="/assets/n8n_strategy_workflow.png" 
                            alt="n8n Strategy Generation Workflow" 
                            fill 
                            className="object-cover md:object-contain p-4 group-hover:scale-105 transition-transform duration-[1500ms] ease-out brightness-110"
                        />
                    </div>
                </div>

                {/* Featured Masterpiece Workflow 2: Asana/WhatsApp */}
                <div className="col-span-1 md:col-span-2 p-10 md:p-12 rounded-[40px] bg-foreground text-background border border-gray-800 shadow-2xl flex flex-col lg:flex-row-reverse gap-12 group overflow-hidden relative">
                    {/* Content */}
                    <div className="w-full lg:w-[45%] flex flex-col relative z-10">
                        <div className="flex items-center lg:justify-end gap-4 mb-6">
                            <h3 className="text-3xl md:text-4xl font-black tracking-tight text-white lg:text-right">Alertas Prioritarias Omnicanal</h3>
                            <Zap className="h-6 w-6 text-accent group-hover:-translate-y-1 transition-transform flex-shrink-0 hidden lg:block" />
                        </div>
                        <p className="text-white/60 leading-relaxed font-medium mb-8 text-lg lg:text-right">
                            Monitorizamos tu Gestor de Tareas corporativo en tiempo real. Un evaluador lógico asigna el SLA de cada tarea disparando notificaciones críticas directamente por WhatsApp a Managers, anulando los tiempos muertos y despistes del equipo.
                        </p>
                        <div className="flex flex-wrap lg:justify-end gap-2 mt-auto">
                            {["Asana / Jira API", "WhatsApp Cloud", "n8n Task Polling", "Smart SLAs"].map((tag, idx) => (
                                <span key={idx} className="px-3 py-1 bg-white/5 border border-white/10 text-white/50 text-[10px] uppercase font-black tracking-widest rounded-lg">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                    {/* Visual Interface */}
                    <div className="w-full lg:w-[55%] relative min-h-[300px] rounded-3xl overflow-hidden bg-[#1E1E1E] border border-white/10 group-hover:border-accent/40 transition-colors shadow-2xl">
                        <div className="absolute inset-0 bg-gradient-to-l from-foreground via-transparent to-transparent z-10 hidden lg:block opacity-80" />
                        <Image 
                            src="/assets/n8n_asana_whatsapp_alert.png" 
                            alt="n8n Asana WhatsApp Priority Alerts" 
                            fill 
                            className="object-cover md:object-contain p-4 group-hover:scale-105 transition-transform duration-[1500ms] ease-out brightness-110"
                        />
                    </div>
                </div>

                {/* Featured Masterpiece Workflow 3: Meeting Recap */}
                <div className="col-span-1 md:col-span-2 p-10 md:p-12 rounded-[40px] bg-foreground text-background border border-gray-800 shadow-2xl flex flex-col lg:flex-row gap-12 group overflow-hidden relative">
                    {/* Content */}
                    <div className="w-full lg:w-[45%] flex flex-col relative z-10">
                        <div className="flex items-center gap-4 mb-6">
                            <Rocket className="h-6 w-6 text-accent group-hover:-translate-y-1 transition-transform flex-shrink-0" />
                            <h3 className="text-3xl md:text-4xl font-black tracking-tight text-white">Delegación de Tareas Post-Reunión</h3>
                        </div>
                        <p className="text-white/60 leading-relaxed font-medium mb-8 text-lg">
                            Olvídate de tomar notas. La IA ingiere el audio de tus reuniones, genera un formato corporativo (Recap) y extrae action-items para delegarlos de forma autónoma a tu equipo en Asana con sus respectivas fechas límite y prioridad.
                        </p>
                        <div className="flex flex-wrap gap-2 mt-auto">
                            {["AssemblyAI", "LLM Claude 3.5", "Gmail / SMTP", "Asana API"].map((tag, idx) => (
                                <span key={idx} className="px-3 py-1 bg-white/5 border border-white/10 text-white/50 text-[10px] uppercase font-black tracking-widest rounded-lg">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                    {/* Visual Interface */}
                    <div className="w-full lg:w-[55%] relative min-h-[300px] rounded-3xl overflow-hidden bg-[#1E1E1E] border border-white/10 group-hover:border-accent/40 transition-colors shadow-2xl">
                        <div className="absolute inset-0 bg-gradient-to-r from-foreground via-transparent to-transparent z-10 hidden lg:block opacity-80" />
                        <Image 
                            src="/assets/n8n_meeting_recap.png" 
                            alt="n8n Meeting Recap to Asana Workflow" 
                            fill 
                            className="object-cover md:object-contain p-4 group-hover:scale-105 transition-transform duration-[1500ms] ease-out brightness-110"
                        />
                    </div>
                </div>

                {/* Featured Masterpiece Workflow 4: Smart Scheduling & Triage */}
                <div className="col-span-1 md:col-span-2 p-10 md:p-12 rounded-[40px] bg-foreground text-background border border-gray-800 shadow-2xl flex flex-col lg:flex-row-reverse gap-12 group overflow-hidden relative">
                    {/* Content */}
                    <div className="w-full lg:w-[45%] flex flex-col relative z-10">
                        <div className="flex items-center lg:justify-end gap-4 mb-6">
                            <h3 className="text-3xl md:text-4xl font-black tracking-tight text-white lg:text-right">Secretaría Autónoma & Triaje</h3>
                            <Rocket className="h-6 w-6 text-accent group-hover:-translate-y-1 transition-transform flex-shrink-0 hidden lg:block" />
                        </div>
                        <p className="text-white/60 leading-relaxed font-medium mb-8 text-lg lg:text-right">
                            Un agente LLM lee tu bandeja de entrada o CRM, clasifica en milisegundos la prioridad de cada caso basado en tus reglas de negocio, agenda automáticamente eventos en Google Calendar si la solicitud lo requiere y alerta por WhatsApp.
                        </p>
                        <div className="flex flex-wrap lg:justify-end gap-2 mt-auto">
                            {["Gmail Listener", "Claude 3.5 Routing", "Google Calendar API", "WhatsApp Alerting"].map((tag, idx) => (
                                <span key={idx} className="px-3 py-1 bg-white/5 border border-white/10 text-white/50 text-[10px] uppercase font-black tracking-widest rounded-lg">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                    {/* Visual Interface */}
                    <div className="w-full lg:w-[55%] relative min-h-[300px] rounded-3xl overflow-hidden bg-[#1E1E1E] border border-white/10 group-hover:border-accent/40 transition-colors shadow-2xl">
                        <div className="absolute inset-0 bg-gradient-to-l from-foreground via-transparent to-transparent z-10 hidden lg:block opacity-80" />
                        <Image 
                            src="/assets/n8n_calendar_routing.png" 
                            alt="n8n Email Triage and Calendar Scheduling" 
                            fill 
                            className="object-cover md:object-contain p-4 group-hover:scale-105 transition-transform duration-[1500ms] ease-out brightness-110"
                        />
                    </div>
                </div>

                {/* Featured Masterpiece Workflow 5: SEO Keyword Research */}
                <div className="col-span-1 md:col-span-2 p-10 md:p-12 rounded-[40px] bg-foreground text-background border border-gray-800 shadow-2xl flex flex-col lg:flex-row gap-12 group overflow-hidden relative">
                    {/* Content */}
                    <div className="w-full lg:w-[45%] flex flex-col relative z-10">
                        <div className="flex items-center gap-4 mb-6">
                            <Rocket className="h-6 w-6 text-accent group-hover:-translate-y-1 transition-transform flex-shrink-0" />
                            <h3 className="text-3xl md:text-4xl font-black tracking-tight text-white">Generador SEO & Data Enrichment</h3>
                        </div>
                        <p className="text-white/60 leading-relaxed font-medium mb-8 text-lg">
                            Dile adiós al Keyword Research manual. Esta arquitectura utiliza IA para idear cientos de keywords de nicho, extrae sus volúmenes de búsqueda reales usando DataForSEO, filtra el Top 50 más rentable y exporta tu estrategia completa a Excel automáticamente.
                        </p>
                        <div className="flex flex-wrap gap-2 mt-auto">
                            {["Anthropic Claude", "DataForSEO API", "Data Enrichment", "Excel Automation"].map((tag, idx) => (
                                <span key={idx} className="px-3 py-1 bg-white/5 border border-white/10 text-white/50 text-[10px] uppercase font-black tracking-widest rounded-lg">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                    {/* Visual Interface */}
                    <div className="w-full lg:w-[55%] relative min-h-[300px] rounded-3xl overflow-hidden bg-[#1E1E1E] border border-white/10 group-hover:border-accent/40 transition-colors shadow-2xl">
                        <div className="absolute inset-0 bg-gradient-to-r from-foreground via-transparent to-transparent z-10 hidden lg:block opacity-80" />
                        <Image 
                            src="/assets/n8n_seo_keywords.png" 
                            alt="n8n SEO Keyword Research Automation" 
                            fill 
                            className="object-cover md:object-contain p-4 group-hover:scale-105 transition-transform duration-[1500ms] ease-out brightness-110"
                        />
                    </div>
                </div>

                {/* Featured Masterpiece Workflow 6: SEO Monthly Report */}
                <div className="col-span-1 md:col-span-2 p-10 md:p-12 rounded-[40px] bg-foreground text-background border border-gray-800 shadow-2xl flex flex-col lg:flex-row-reverse gap-12 group overflow-hidden relative">
                    {/* Content */}
                    <div className="w-full lg:w-[45%] flex flex-col relative z-10">
                        <div className="flex items-center lg:justify-end gap-4 mb-6">
                            <h3 className="text-3xl md:text-4xl font-black tracking-tight text-white lg:text-right">Reporting SEO Autónomo</h3>
                            <Rocket className="h-6 w-6 text-accent group-hover:-translate-y-1 transition-transform flex-shrink-0 hidden lg:block" />
                        </div>
                        <p className="text-white/60 leading-relaxed font-medium mb-8 text-lg lg:text-right">
                            A final de mes, el sistema recorre tu base de clientes, extrae en tiempo real la analítica de sus dominios desde Google Search Console y GA4, y encomienda a una IA la redacción y envío de un informe ejecutivo 100% personalizado.
                        </p>
                        <div className="flex flex-wrap lg:justify-end gap-2 mt-auto">
                            {["GSC API", "GA4 API", "Claude Analysis", "HTML Generation"].map((tag, idx) => (
                                <span key={idx} className="px-3 py-1 bg-white/5 border border-white/10 text-white/50 text-[10px] uppercase font-black tracking-widest rounded-lg">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                    {/* Visual Interface */}
                    <div className="w-full lg:w-[55%] relative min-h-[300px] rounded-3xl overflow-hidden bg-[#1E1E1E] border border-white/10 group-hover:border-accent/40 transition-colors shadow-2xl">
                        <div className="absolute inset-0 bg-gradient-to-l from-foreground via-transparent to-transparent z-10 hidden lg:block opacity-80" />
                        <Image 
                            src="/assets/n8n_seo_report.png" 
                            alt="n8n Automated SEO Reporting Workflow" 
                            fill 
                            className="object-cover md:object-contain p-4 group-hover:scale-105 transition-transform duration-[1500ms] ease-out brightness-110"
                        />
                    </div>
                </div>

                {/* Featured Masterpiece Workflow 7: High-Volume SEO Strategy */}
                <div className="col-span-1 md:col-span-2 p-10 md:p-12 rounded-[40px] bg-foreground text-background border border-gray-800 shadow-2xl flex flex-col lg:flex-row gap-12 group overflow-hidden relative">
                    {/* Content */}
                    <div className="w-full lg:w-[45%] flex flex-col relative z-10">
                        <div className="flex items-center gap-4 mb-6">
                            <Rocket className="h-6 w-6 text-accent group-hover:-translate-y-1 transition-transform flex-shrink-0" />
                            <h3 className="text-3xl md:text-4xl font-black tracking-tight text-white">Mega-Estrategia SEO Full-Scale</h3>
                        </div>
                        <p className="text-white/60 leading-relaxed font-medium mb-8 text-lg">
                            El procesador definitivo para agencias. Un orquestador que ejecuta en paralelo 4 ramas: Análisis de Competidores (IA), Expansión Semántica, Extracción de Volúmenes (DataForSEO) y Análisis SERP, fusionando todo en un informe estratégico maestro totalmente automatizado.
                        </p>
                        <div className="flex flex-wrap gap-2 mt-auto">
                            {["Parallel Orchestration", "Competitor AI", "Global SERP Analysis", "Retry Managers"].map((tag, idx) => (
                                <span key={idx} className="px-3 py-1 bg-white/5 border border-white/10 text-white/50 text-[10px] uppercase font-black tracking-widest rounded-lg">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                    {/* Visual Interface */}
                    <div className="w-full lg:w-[55%] relative min-h-[300px] rounded-3xl overflow-hidden bg-[#1E1E1E] border border-white/10 group-hover:border-accent/40 transition-colors shadow-2xl">
                        <div className="absolute inset-0 bg-gradient-to-r from-foreground via-transparent to-transparent z-10 hidden lg:block opacity-80" />
                        <Image 
                            src="/assets/n8n_seo_strategy.png" 
                            alt="n8n High Volume SEO Strategy Automation" 
                            fill 
                            className="object-cover md:object-contain p-4 group-hover:scale-105 transition-transform duration-[1500ms] ease-out brightness-110"
                        />
                    </div>
                </div>

                {/* Featured Masterpiece Workflow 8: Omnichannel Content Creator */}
                <div className="col-span-1 md:col-span-2 p-10 md:p-12 rounded-[40px] bg-foreground text-background border border-gray-800 shadow-2xl flex flex-col lg:flex-row-reverse gap-12 group overflow-hidden relative mt-6">
                    {/* Content */}
                    <div className="w-full lg:w-[45%] flex flex-col relative z-10">
                        <div className="flex items-center lg:justify-end gap-4 mb-6">
                            <h3 className="text-3xl md:text-4xl font-black tracking-tight text-white lg:text-right">Creador Omnicanal Autónomo</h3>
                            <Rocket className="h-6 w-6 text-accent group-hover:-translate-y-1 transition-transform flex-shrink-0 hidden lg:block" />
                        </div>
                        <p className="text-white/60 leading-relaxed font-medium mb-8 text-lg lg:text-right">
                            Una red neuronal de creación de contenido. Genera copys persuasivos con Claude, sintetiza avatares hiperrealistas en vídeo con HeyGen y distribuye nativamente el contenido final a Instagram, TikTok, LinkedIn y Facebook en una sola ejecución.
                        </p>
                        <div className="flex flex-wrap lg:justify-end gap-2 mt-auto">
                            {["Claude 3.5 Sonnet", "HeyGen AI Video", "Social Router", "Omnichannel"].map((tag, idx) => (
                                <span key={idx} className="px-3 py-1 bg-white/5 border border-white/10 text-white/50 text-[10px] uppercase font-black tracking-widest rounded-lg">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                    {/* Visual Interface */}
                    <div className="w-full lg:w-[55%] relative min-h-[300px] rounded-3xl overflow-hidden bg-[#1E1E1E] border border-white/10 group-hover:border-accent/40 transition-colors shadow-2xl">
                        <div className="absolute inset-0 bg-gradient-to-l from-foreground via-transparent to-transparent z-10 hidden lg:block opacity-80" />
                        <Image 
                            src="/assets/n8n_omnichannel.png" 
                            alt="n8n Omnichannel Social Media Automation Workflow" 
                            fill 
                            className="object-cover md:object-contain p-4 group-hover:scale-105 transition-transform duration-[1500ms] ease-out brightness-110"
                        />
                    </div>
                </div>

                {/* Legacy Text Cards Removed: Catalog now purely visual Masterpieces */}
            </div>

            <div className="mt-12 text-center">
                <Button variant="ghost" className="h-14 px-8 text-primary font-black hover:text-primary/80 group">
                    Descargar Directorio de Casos de Uso (PDF)
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
            </div>
        </div>

        {/* Keyword Clusters: RPA, Hiperautomatización, Email Marketing */}
        <div className="mb-32 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
                {
                    title: "Automatización RPA e Hiperautomatización",
                    badge: "Automatización Robótica",
                    desc: "Vamos más allá del RPA clásico. Combinamos automatización robótica de procesos con agentes de IA para lograr hiperautomatización: sistemas que no solo ejecutan tareas, sino que deciden, aprenden y se adaptan a tus flujos de negocio.",
                    items: ["Automatización procesos RPA", "Hiperautomatización de procesos", "Robotización de procesos", "Herramientas RPA open source"]
                },
                {
                    title: "Automatización Email Marketing con IA",
                    badge: "Marketing Digital IA",
                    desc: "Configuramos flujos de automatización de email marketing impulsados por inteligencia artificial. Segmentación dinámica, personalización en tiempo real y secuencias de nurturing que reaccionan al comportamiento de cada contacto.",
                    items: ["Automatización email marketing", "Automatizar correos electrónicos", "IA en marketing digital", "Flujo de trabajo automatizado"]
                },
                {
                    title: "Automatización de Procesos Empresariales",
                    badge: "Empresa & Pyme",
                    desc: "Desde la automatización de procesos administrativos y financieros hasta la automatización de ventas y recursos humanos. Soluciones para pymes y empresas que quieren digitalizar y automatizar su operativa completa.",
                    items: ["Automatización de procesos empresariales", "Automatización para pymes", "Servicios de automatización", "Automatización empresarial Barcelona"]
                }
            ].map((cluster, i) => (
                <div key={i} className="p-10 rounded-[48px] bg-muted border border-transparent hover:border-primary/10 transition-all flex flex-col">
                    <span className="text-[10px] font-black uppercase tracking-widest text-accent bg-accent/5 px-3 py-1.5 rounded-full border border-accent/10 w-fit mb-6">{cluster.badge}</span>
                    <h3 className="text-2xl font-black mb-4 tracking-tight">{cluster.title}</h3>
                    <p className="text-foreground/60 font-medium leading-relaxed text-sm mb-8 flex-grow">{cluster.desc}</p>
                    <ul className="space-y-2">
                        {cluster.items.map((item, j) => (
                            <li key={j} className="flex items-center gap-2 text-xs font-bold text-foreground/40 uppercase tracking-wider">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary/30 flex-shrink-0" />
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>

        {/* Separation / Feature */}
        <FinalCTA />
      </div>
      <Footer />
    </main>
  )
}
