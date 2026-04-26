"use client"

import { motion } from "framer-motion"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import { CheckCircle2, ChevronRight, ShieldCheck, Zap, Sparkles, Database, Cpu, FileText, Globe, MessageSquare, Lock, Terminal, Activity } from "lucide-react"
import FinalCTA from "@/components/FinalCTA"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { RAGPipelineGraphic, SecurityShieldGraphic } from "@/components/Graphics"
import OwnProducts from "@/components/OwnProducts"

const features = [
    {
      icon: <Database className="h-6 w-6" />,
      title: "Arquitectura RAG Engine",
      description: "Retrieval-Augmented Generation: tu IA consulta tus documentos en tiempo real antes de responder, garantizando precisión absoluta.",
      metric: "Cero Alucinaciones"
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Knowledge Base Clusters",
      description: "Ingesta segura de PDFs, Excels, Notion y bases de datos. Un cerebro digital que conoce cada coma de tu empresa.",
      metric: "Soberanía de Datos"
    },
    {
      icon: <Cpu className="h-6 w-6" />,
      title: "Multi-Agent Systems",
      description: "No solo responden; ejecutan. Orquestamos enjambres de agentes para automatizar la cadena de valor de punta a punta.",
      metric: "+95% Capacidad"
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
  return (
    <main className="min-h-screen bg-[#050505] text-white selection:bg-primary/20">
      <Navigation />
      
      {/* Hero: Engineering Context */}
      <div className="relative pt-40 pb-32 overflow-hidden border-b border-white/5">
        {/* Refined Atmospheric Glow */}
        <div className="absolute top-0 right-0 w-1/2 h-[600px] bg-cyan-500/5 blur-[120px] rounded-full -mr-40 -mt-40 z-0 opacity-40" />
        
        <motion.div 
            animate={{ top: ['-20%', '120%'] }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent z-10"
        />

        <div className="container relative z-10 px-6 mx-auto">
          <div className="flex items-center gap-2 text-[10px] font-black text-white/40 mb-12 uppercase tracking-[0.4em]">
            <Link href="/" className="hover:text-cyan-400 transition-colors">Core</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-white">Enterprise AI Infrastructure</span>
          </div>

          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="w-full lg:w-3/5">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-cyan-400 text-[10px] font-black uppercase tracking-[0.3em] mb-10"
              >
                <Activity className="h-3 w-3 animate-pulse" />
                RAG Engine Online · Barcelona
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-5xl md:text-7xl font-black tracking-tighter mb-10 leading-[0.9] uppercase italic"
              >
                Inteligencia Artificial <br />
                <span className="text-cyan-400 italic">Empresarial.</span>
              </motion.h1>

              <motion.p
                className="text-2xl text-white/50 font-medium leading-tight mb-14 max-w-2xl italic"
              >
                No usamos herramientas genéricas. Construimos <strong>infraestructura de IA</strong> alimentada por el conocimiento privado de tu compañía. Precisión grado ingeniería.
              </motion.p>

              <div className="flex flex-wrap gap-4">
                <Link href="https://booking.setmore.com/scheduleappointment/5502c3a5-1773-45a7-9388-f3da7aa86326">
                  <Button className="w-full sm:w-auto h-20 px-12 rounded-[24px] bg-accent text-black hover:bg-white hover:text-black transition-all font-black uppercase tracking-[0.3em] text-[11px] shadow-2xl active:scale-95 border-none">
                    Protocolo de Iniciación
                    <ChevronRight className="ml-3 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>

            <div className="w-full lg:w-2/5 relative">
                <div className="absolute -inset-10 bg-accent/20 blur-[100px] opacity-30 rounded-full" />
                <div className="relative p-1 bg-white/5 rounded-[48px] border border-white/10 backdrop-blur-3xl overflow-hidden aspect-square flex items-center justify-center">
                    <RAGPipelineGraphic />
                </div>
            </div>
          </div>
        </div>
      </div>

      {/* Industrial Grid Section: Components */}
      <section className="py-24 md:py-48 bg-[#0a0a0b] border-b border-white/5">
        <div className="container px-6 mx-auto">
            <div className="max-w-3xl mb-24">
                <h2 className="text-4xl md:text-7xl font-black tracking-tighter leading-none mb-8">
                   Soberanía de <br/>
                   <span className="text-accent italic">Conocimiento</span>
                </h2>
                <p className="text-white/40 text-lg md:text-xl font-medium leading-tight max-w-2xl">
                    Desplegamos aplicaciones basadas en Retrieval-Augmented Generation (RAG) que garantizan respuestas veraces basadas exclusivamente en tu documentación interna.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {features.map((f, i) => (
                <motion.div
                  key={i}
                  className="bg-white/[0.02] p-10 rounded-[48px] border border-white/5 hover:border-accent/20 transition-all group relative overflow-hidden h-full"
                >
                  <div className="text-accent mb-8 group-hover:scale-110 transition-transform">{f.icon}</div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-accent/60 mb-2">{f.metric}</div>
                  <h3 className="text-2xl font-black mb-4 tracking-tight group-hover:text-accent transition-colors">{f.title}</h3>
                  <p className="text-white/30 text-xs leading-relaxed font-medium">{f.description}</p>
                </motion.div>
              ))}
            </div>
        </div>
      </section>

      {/* Dark Capability Block: Security */}
      <section className="py-24 md:py-48 bg-[#050505] relative overflow-hidden">
          <div className="container px-6 mx-auto relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-24 lg:gap-32">
                <div className="lg:w-1/2 p-2 rounded-[56px] bg-white/5 border border-white/10 aspect-video flex items-center justify-center overflow-hidden">
                    <SecurityShieldGraphic />
                </div>
                
                <div className="lg:w-1/2">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/40 text-[9px] font-black uppercase tracking-widest mb-10">
                      <Terminal className="h-3 w-3" /> Security Protocol Engine
                    </div>
                    <h2 className="text-5xl lg:text-8xl font-black text-white mb-10 tracking-tighter leading-none">
                        Privacidad grado <br/>
                        <span className="text-accent italic">Bancario.</span>
                    </h2>
                    <p className="text-white/40 text-xl md:text-2xl font-medium leading-tight mb-14 italic">
                        "Tus datos nunca entrenan modelos públicos. Tus secretos comerciales permanecen bajo tu exclusivo control."
                    </p>
                    <div className="grid grid-cols-2 gap-8">
                        {[
                            { title: "Aislamiento", desc: "Instancias dedicadas", icon: <Database className="h-5 w-5" /> },
                            { title: "Protección IP", desc: "Cero entrenamiento", icon: <Lock className="h-5 w-5" /> },
                            { title: "AES-256", desc: "Cifrado dinámico", icon: <Zap className="h-5 w-5" /> },
                            { title: "Control", desc: "Permisos granulares", icon: <CheckCircle2 className="h-5 w-5" /> }
                        ].map((p, i) => (
                            <div key={i} className="flex gap-4 group">
                                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-accent group-hover:bg-accent/20 transition-all shrink-0">
                                    {p.icon}
                                </div>
                                <div>
                                    <h4 className="text-white font-black text-xs uppercase tracking-wider mb-1">{p.title}</h4>
                                    <p className="text-white/40 text-[10px] font-medium">{p.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
          </div>
      </section>

      {/* Own Products Showcase */}
      <section className="bg-white">
        <OwnProducts />
      </section>

      <section className="bg-[#050505] py-24 border-t border-white/5">
        <FinalCTA />
      </section>
      
      <Footer />
    </main>
  )
}
