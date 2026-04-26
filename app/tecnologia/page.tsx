"use client"

import { motion } from "framer-motion"
import { Cpu, ShieldCheck, Zap, Database, Globe, Layers, ArrowUpRight, Code2, GitBranch, TerminalSquare, Terminal, Activity, Monitor, ChevronRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import FinalCTA from "@/components/FinalCTA"

const techCategories = [
  {
    title: "Orquestación Lógica",
    icon: <Layers className="h-6 w-6" />,
    description: "Diseñamos pipelines lógicos con control de errores avanzado y redundancia sistémica para máxima resiliencia.",
    technologies: [
      { name: "n8n Dedicated", sub: "Engine Orquestador", badge: "Core" },
      { name: "Node.js Custom", sub: "Lógica de Negocio", badge: "Native" },
      { name: "TypeScript 5.0", sub: "Tipado Estricto", badge: "Scale" }
    ]
  },
  {
    title: "Cognición & LLMs",
    icon: <Cpu className="h-6 w-6" />,
    description: "Prompting sistemático, arquitecturas RAG y control de temperatura para una IA coherente y determinista.",
    technologies: [
      { name: "Claude 3.5 Sonnet", sub: "Modelado Contextual", badge: "Anthropic" },
      { name: "GPT-4o Multi", sub: "Razonamiento Complejo", badge: "OpenAI" },
      { name: "Gemini 1.5 Pro", sub: "Ventanas de Contexto", badge: "DeepMind" }
    ]
  },
  {
    title: "Data Architecture",
    icon: <Database className="h-6 w-6" />,
    description: "Bases de datos vectoriales y relacionales diseñadas para la persistencia y recuperación eficiente de conocimiento.",
    technologies: [
      { name: "PostgreSQL", sub: "Cerebro Relacional", badge: "Supabase" },
      { name: "Pinecone / Vector", sub: "Indexación Semántica", badge: "Embedding" },
      { name: "Storage Bucket", sub: "Data Persistence", badge: "Cloud" }
    ]
  }
]

export default function Tecnologia() {
  return (
    <main className="min-h-screen bg-[#05070F] text-white selection:bg-primary/20">
      <Navigation />

      {/* Hero: Engineering Context */}
      <div className="relative pt-40 pb-32 overflow-hidden border-b border-white/5">
        <motion.div 
            animate={{ top: ['-20%', '120%'] }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-accent/30 to-transparent z-10"
        />

        <div className="container relative z-10 px-6 mx-auto">
          <div className="flex items-center gap-2 text-[10px] font-black text-white/40 mb-12 uppercase tracking-[0.4em]">
            <Link href="/" className="hover:text-accent transition-colors">Core</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-white">System Architecture Specs</span>
          </div>

          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="w-full lg:w-3/5">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-accent text-[10px] font-black uppercase tracking-[0.3em] mb-10"
              >
                <Monitor className="h-3 w-3 animate-pulse" />
                Full Stack Verification: STABLE
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-6xl md:text-[100px] font-black tracking-tighter mb-10 leading-[0.85]"
              >
                Infraestructura de <br />
                <span className="text-accent italic">Misión Crítica.</span>
              </motion.h1>

              <motion.p
                className="text-xl md:text-2xl text-white/50 font-medium leading-tight mb-14 max-w-2xl"
              >
                Stack tecnológico de grado industrial para la orquestación de sistemas multi-agente y flujos de datos complejos. Sin parches temporales.
              </motion.p>

              <div className="flex flex-wrap gap-4">
                <Link href="https://booking.setmore.com/scheduleappointment/5502c3a5-1773-45a7-9388-f3da7aa86326">
                  <Button className="bg-accent hover:bg-accent/90 text-white h-16 px-12 rounded-2xl font-black text-lg border-none shadow-2xl shadow-accent/20 hover:scale-105 transition-all">
                    Descargar Tech Stack PDF
                  </Button>
                </Link>
              </div>
            </div>

            <div className="w-full lg:w-2/5 relative">
                <div className="absolute -inset-10 bg-accent/20 blur-[100px] opacity-30 rounded-full" />
                <div className="relative p-1 bg-white/5 rounded-[48px] border border-white/10 overflow-hidden aspect-square flex items-center justify-center grayscale opacity-50 contrast-125">
                    <Image 
                        src="/assets/logo_premium_v6.png"
                        alt="Infrastructure Graphic"
                        width={800}
                        height={800}
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
          </div>
        </div>
      </div>

      {/* Philosophy Section: Manifesto style */}
      <section className="py-24 md:py-48 bg-[#0F1424] border-b border-white/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="container px-6 mx-auto relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
                <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/40 text-[9px] font-black uppercase tracking-widest mb-10">
                      <Terminal className="h-3 w-3" /> Core Engineering Philosophy
                    </div>
                    <h2 className="text-4xl md:text-7xl font-black tracking-tighter leading-none mb-12">
                        Ingeniería, <br/>
                        <span className="text-accent italic">no parches.</span>
                    </h2>
                    <p className="text-white/40 text-xl font-medium leading-tight max-w-2xl mb-12">
                        La robustez de un sistema se mide por su capacidad de escalar bajo estrés. Diseñamos arquitecturas modulares que evolucionan con tu revenue.
                    </p>
                    <div className="flex items-start gap-4 p-8 rounded-3xl bg-white/[0.02] border border-white/5 decoration-accent decoration-2 italic font-medium text-white/60">
                        "Nos encargamos de la complejidad técnica para que tú te encargues del crecimiento exponencial."
                    </div>
                </div>
                
                <div className="space-y-6">
                    <div className="flex items-start gap-6 p-10 rounded-[40px] bg-white/[0.02] border border-white/5 hover:border-accent/20 transition-all">
                        <TerminalSquare className="h-8 w-8 text-accent shrink-0" />
                        <div>
                            <h4 className="font-black text-xl mb-2 uppercase tracking-tight">Code-First Logic</h4>
                            <p className="text-white/30 text-xs font-medium leading-relaxed">Nodos personalizados en TypeScript y Python cuando las herramientas no-code alcanzan su límite técnico.</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-6 p-10 rounded-[40px] bg-accent/10 border border-accent/20">
                        <GitBranch className="h-8 w-8 text-accent shrink-0" />
                        <div>
                            <h4 className="font-black text-xl mb-2 uppercase tracking-tight text-accent">Data-Driven Pipelines</h4>
                            <p className="text-white/60 text-xs font-medium leading-relaxed">Saneamiento y normalización de datos antes de cualquier automatización. Integridad absoluta de la información.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Tech Grid: Modular Units */}
      <section className="py-24 md:py-48 bg-[#05070F]">
        <div className="container px-6 mx-auto">
            <div className="mb-24">
                <h2 className="text-4xl md:text-7xl font-black tracking-tighter leading-none mb-4">Stack <span className="text-accent italic">Certificado</span></h2>
                <p className="text-white/40 text-lg font-medium">Arquitecturas validadas en más de 250 despliegues en producción.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {techCategories.map((cat, i) => (
                    <motion.div 
                        key={i}
                        className="p-12 rounded-[56px] bg-white/[0.02] border border-white/5 hover:border-accent/30 transition-all group relative overflow-hidden"
                    >
                        <div className="h-14 w-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-10 group-hover:bg-accent group-hover:text-white transition-all text-accent">
                            {cat.icon}
                        </div>
                        <h3 className="text-3xl font-black mb-4 tracking-tight">{cat.title}</h3>
                        <p className="text-white/30 font-medium mb-12 text-sm leading-tight h-16">{cat.description}</p>
                        
                        <div className="space-y-3">
                            {cat.technologies.map((tech, j) => (
                                <div key={j} className="flex items-center justify-between p-5 rounded-3xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.05] transition-all">
                                    <div>
                                        <h4 className="font-black text-white tracking-tight text-xs">{tech.name}</h4>
                                        <p className="text-[9px] uppercase font-bold text-white/30 tracking-widest leading-none mt-1">{tech.sub}</p>
                                    </div>
                                    <span className="px-3 py-1 bg-white/5 text-accent border border-white/10 text-[8px] font-black uppercase tracking-widest rounded-lg">
                                        {tech.badge}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
      </section>

      {/* Security: Final block */}
      <section className="py-24 bg-[#0F1424] border-t border-white/5">
          <div className="container px-6 mx-auto text-center max-w-4xl">
              <ShieldCheck className="h-16 w-16 text-accent mx-auto mb-12" />
              <h2 className="text-5xl md:text-8xl font-black mb-12 tracking-tighter leading-[0.85]">Seguridad grado <br/><span className="text-accent italic">Industrial.</span></h2>
              <p className="text-xl text-white/40 font-medium mb-16 leading-relaxed">
                  Operamos bajo estándares ISO27001 para la gestión de infraestructura. Cifrado dinámico, NDAs estrictos y soberanía absoluta de datos para el ecosistema corporativo.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                  {["Zero Data Retention", "AES-256 bits", "GDPR Enterprise", "SOC2 Architecture"].map((stat, i) => (
                      <div key={i} className="px-10 py-5 rounded-3xl border border-white/10 bg-white/5 font-black tracking-[0.2em] text-[10px] text-white/60 uppercase">
                          {stat}
                      </div>
                  ))}
              </div>
          </div>
      </section>

      <FinalCTA />
      <Footer />
    </main>
  )
}
