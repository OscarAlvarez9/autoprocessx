"use client"

import { motion } from "framer-motion"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import { CheckCircle2, ChevronRight, ShieldCheck, BrainCircuit, Zap, ArrowRight, Rocket, Terminal, Activity, Cpu } from "lucide-react"
import FinalCTA from "@/components/FinalCTA"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { AutomationHeroGraphic, InfrastructureGraphic } from "@/components/Graphics"
import OwnProducts from "@/components/OwnProducts"

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
  return (
    <main className="min-h-screen bg-[#050505] text-white selection:bg-primary/20">
      <Navigation />

      {/* Hero: Engineering Context */}
      <div className="relative pt-40 pb-32 overflow-hidden border-b border-white/5">
        {/* Refined Atmospheric Glow */}
        <div className="absolute top-0 right-0 w-1/2 h-[600px] bg-accent/5 blur-[120px] rounded-full -mr-40 -mt-40 z-0 opacity-40" />
        
        <motion.div 
            animate={{ top: ['-20%', '120%'] }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-accent/30 to-transparent z-10"
        />

        <div className="container relative z-10 px-6 mx-auto">
          <div className="flex items-center gap-2 text-[10px] font-black text-white/40 mb-12 uppercase tracking-[0.4em]">
            <Link href="/" className="hover:text-accent transition-colors">Core</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-white">Workflow Engineering</span>
          </div>

          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="w-full lg:w-3/5">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-accent text-[10px] font-black uppercase tracking-[0.3em] mb-10"
              >
                <Cpu className="h-3 w-3 animate-pulse" />
                Hyper-Automation Engine Active
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-5xl md:text-7xl font-black tracking-tighter mb-10 leading-[0.9] uppercase italic"
              >
                Ingeniería de <br />
                <span className="text-accent italic">Automatización.</span>
              </motion.h1>

              <motion.p
                className="text-2xl text-white/50 font-medium leading-tight mb-14 max-w-2xl italic"
              >
                Auditamos, diseñamos y desplegamos infraestructuras lógicas que eliminan la carga operativa. <strong>Hiperautomatización empresarial</strong> orientada a rentabilidad.
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
                    <AutomationHeroGraphic />
                </div>
            </div>
          </div>
        </div>
      </div>

      {/* Industrial Grid Section: Method */}
      <section className="py-24 md:py-48 bg-[#0a0a0b] border-b border-white/5">
        <div className="container px-6 mx-auto">
            <div className="max-w-3xl mb-24">
                <h2 className="text-4xl md:text-7xl font-black tracking-tighter leading-none mb-8">
                   Arquitectura de <br/>
                   <span className="text-accent italic">Transformación Digital</span>
                </h2>
                <p className="text-white/40 text-lg md:text-xl font-medium leading-tight max-w-2xl">
                    Un proceso de ingeniería rigorosa diseñado para construir sistemas escalables, no parches rápidos.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {methodSteps.map((step, i) => (
                <motion.div
                  key={i}
                  className="bg-white/[0.02] p-10 rounded-[48px] border border-white/5 hover:border-accent/20 transition-all group relative overflow-hidden h-full"
                >
                  <div className="text-5xl font-black text-white/5 group-hover:text-accent/20 transition-colors block mb-8 tracking-tighter leading-none">0{i+1}</div>
                  <h3 className="text-2xl font-black mb-4 tracking-tight group-hover:text-accent transition-colors">{step.title}</h3>
                  <p className="text-white/30 text-xs leading-relaxed font-medium">{step.desc}</p>
                </motion.div>
              ))}
            </div>
        </div>
      </section>

      {/* Dark Capability Block: Infrastructure */}
      <section className="py-24 md:py-48 bg-[#050505] relative overflow-hidden">
          <div className="container px-6 mx-auto relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-24 lg:gap-32">
                <div className="lg:w-1/2 p-2 rounded-[56px] bg-white/5 border border-white/10 aspect-video flex items-center justify-center overflow-hidden">
                    <InfrastructureGraphic />
                </div>
                
                <div className="lg:w-1/2">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/40 text-[9px] font-black uppercase tracking-widest mb-10">
                      <Terminal className="h-3 w-3" /> Infrastructure Deployment
                    </div>
                    <h2 className="text-5xl lg:text-8xl font-black text-white mb-10 tracking-tighter leading-none">
                        Privacidad Grado <br/>
                        <span className="text-accent italic">Enterprise.</span>
                    </h2>
                    <p className="text-white/40 text-xl md:text-2xl font-medium leading-tight mb-14 italic">
                        "Desplegamos tu motor de automatización en servidores privados, garantizando seguridad y soberanía absoluta de tus datos."
                    </p>
                    <div className="space-y-10">
                        <div className="flex gap-6 group">
                            <div className="w-14 h-14 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 group-hover:border-accent/40 transition-all duration-500 text-accent">
                                <ShieldCheck className="h-6 w-6" />
                            </div>
                            <div>
                                <h4 className="text-white font-black text-base uppercase tracking-tight mb-2">Instancias Zero-Trust</h4>
                                <p className="text-white/30 text-sm font-medium leading-relaxed max-w-sm">Alojamiento privado bajo tu propio dominio e infraestructura cloud corporativa.</p>
                            </div>
                        </div>

                        <div className="flex gap-6 group">
                            <div className="w-14 h-14 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 group-hover:border-accent/40 transition-all duration-500 text-accent">
                                <BrainCircuit className="h-6 w-6" />
                            </div>
                            <div>
                                <h4 className="text-white font-black text-base uppercase tracking-tight mb-2">IA Local End-to-End</h4>
                                <p className="text-white/30 text-sm font-medium leading-relaxed max-w-sm">Privacidad absoluta en el procesamiento de datos sensibles mediante despliegues on-premise.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
      </section>

      {/* Own Products Showcase (Aligned with dark theme) */}
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
