"use client"

import { motion } from "framer-motion"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import FinalCTA from "@/components/FinalCTA"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ChatbotHeroGraphic, SalesConversionGraphic } from "@/components/Graphics"
import {
  ChevronRight,
  MessageSquare,
  MessageCircle,
  Laptop,
  Smartphone,
  Headphones,
  UserPlus,
  Euro,
  Zap,
  ArrowRight,
  Activity,
  Terminal
} from "lucide-react"

const channels = [
  {
    icon: <Laptop className="h-6 w-6" />,
    title: "AI Online Chat para tu Web",
    description: "Convierte tráfico en revenue con un AI online chat diseñado para vender. Supera objeciones en tiempo real.",
    tag: "Widget Vendedor",
  },
  {
    icon: <MessageCircle className="h-6 w-6" />,
    title: "Chatbot WhatsApp Business",
    description: "Lleva tu CRM al bolsillo del cliente. Un chatbot de WhatsApp que cualifica y negocia 24/7.",
    tag: "WhatsApp Business",
  },
  {
    icon: <Headphones className="h-6 w-6" />,
    title: "Automatización Email IA",
    description: "Secuencias de email marketing que reaccionan al comportamiento real del prospecto.",
    tag: "Email IA",
  },
  {
    icon: <Smartphone className="h-6 w-6" />,
    title: "IA en Marketing Digital",
    description: "Agentes que generan copias, segmentan audiencias y optimizan campañas de forma autónoma.",
    tag: "Marketing IA",
  },
]

const capabilities = [
  {
    icon: <UserPlus className="h-6 w-6 text-accent" />,
    title: "Cualificación BANT",
    description: "Filtros automáticos que solo envían prospectos con presupuesto y autoridad a tu equipo.",
  },
  {
    icon: <Euro className="h-6 w-6 text-accent" />,
    title: "Venta Latente",
    description: "Cerrar pedidos y agendar llamadas mientras tu equipo técnico opera en otros frentes.",
  },
  {
    icon: <Zap className="h-6 w-6 text-accent" />,
    title: "Escalado High-Ticket",
    description: "Detección de intención de compra para transferencia inmediata de leads de alto valor.",
  },
]

export default function AIChatbotPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white selection:bg-primary/20">
      <Navigation />

      {/* Hero: Engineering Context */}
      <div className="relative pt-40 pb-32 overflow-hidden border-b border-white/5">
        {/* Refined Atmospheric Glow */}
        <div className="absolute top-0 right-0 w-1/2 h-[600px] bg-primary/5 blur-[120px] rounded-full -mr-40 -mt-40 z-0 opacity-40" />
        
        {/* Scanning Beam */}
        <motion.div 
            animate={{ top: ['-20%', '120%'] }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent z-10"
        />

        <div className="container relative z-10 px-6 mx-auto">
          <div className="flex items-center gap-2 text-[10px] font-black text-white/40 mb-12 uppercase tracking-[0.4em]">
            <Link href="/" className="hover:text-primary transition-colors">Infrastructure</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-white">AI Chatbot Systems</span>
          </div>

          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="w-full lg:w-3/5">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-primary text-[10px] font-black uppercase tracking-[0.3em] mb-10"
              >
                <Activity className="h-3 w-3 animate-pulse" />
                Conversational Infrastructure Deployed
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-6xl md:text-[110px] font-black tracking-tighter mb-10 leading-[0.8] uppercase italic"
              >
                AI Chatbot <br />
                <span className="text-accent italic">Omnicanal.</span>
              </motion.h1>

              <motion.p
                className="text-2xl text-white/50 font-medium leading-tight mb-14 max-w-2xl italic"
              >
                No configuramos bots. Diseñamos <strong>infraestructuras conversacionales</strong> integradas que operan sobre tus datos corporativos en tiempo real.
              </motion.p>

              <div className="flex flex-wrap gap-4">
                  <Button className="w-full sm:w-auto h-20 px-12 rounded-[24px] bg-accent text-black hover:bg-white hover:text-black transition-all font-black uppercase tracking-[0.3em] text-[11px] shadow-2xl active:scale-95 border-none">
                    Protocolo de Despliegue
                    <ChevronRight className="ml-3 h-4 w-4" />
                  </Button>
                <Link href="/casos-de-exito">
                  <Button variant="ghost" className="h-20 px-10 rounded-[24px] font-black text-[10px] uppercase tracking-[0.3em] text-white/60 border border-white/5 hover:bg-white/5 transition-all flex items-center gap-3">
                    Arquitecturas Reales <ArrowRight className="h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>

            <div className="w-full lg:w-2/5 relative">
                <div className="absolute -inset-10 bg-primary/20 blur-[100px] opacity-50 rounded-full" />
                <div className="relative p-1 bg-white/5 rounded-[48px] border border-white/10 backdrop-blur-3xl overflow-hidden aspect-square flex items-center justify-center">
                    <ChatbotHeroGraphic />
                </div>
            </div>
          </div>
        </div>
      </div>

      {/* Industrial Grid Section */}
      <section className="py-24 md:py-48 bg-[#0a0a0b]">
        <div className="container px-6 mx-auto">
            <div className="flex flex-col lg:flex-row items-end justify-between mb-24 gap-8">
                <div className="max-w-3xl text-left">
                    <h2 className="text-4xl md:text-7xl font-black tracking-tighter leading-none mb-8">
                       Módulos de <br/>
                       <span className="text-primary italic">Despliegue Omnicanal</span>
                    </h2>
                    <p className="text-white/40 text-lg md:text-xl font-medium leading-tight max-w-2xl">
                        Un solo cerebro cognitivo operando en todos tus puntos de contacto. Coherencia absoluta, eficiencia extrema.
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {channels.map((ch, i) => (
                <motion.div
                  key={i}
                  className="bg-white/[0.02] p-10 rounded-[48px] border border-white/5 hover:border-primary/20 transition-all group relative overflow-hidden h-full"
                >
                  <div className="mb-8 p-4 rounded-3xl bg-white/5 text-primary w-fit group-hover:scale-110 group-hover:bg-primary/10 transition-all duration-500">
                    {ch.icon}
                  </div>
                  <div className="font-mono text-[9px] text-primary/50 uppercase tracking-widest mb-4">{ch.tag}</div>
                  <h3 className="text-2xl font-black mb-4 tracking-tight group-hover:text-primary transition-colors">{ch.title}</h3>
                  <p className="text-white/30 text-xs leading-relaxed font-medium">{ch.description}</p>
                </motion.div>
              ))}
            </div>
        </div>
      </section>

      {/* Dark Capability Block */}
      <section className="py-24 md:py-48 bg-[#050505] relative overflow-hidden">
          <div className="container px-6 mx-auto relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-24 lg:gap-32">
                <div className="lg:w-1/2 p-2 rounded-[56px] bg-white/5 border border-white/10 aspect-video flex items-center justify-center overflow-hidden">
                    <SalesConversionGraphic />
                </div>
                
                <div className="lg:w-1/2">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/40 text-[9px] font-black uppercase tracking-widest mb-10">
                      <Terminal className="h-3 w-3" /> System Strategy: Sales Logic
                    </div>
                    <h2 className="text-5xl lg:text-8xl font-black text-white mb-10 tracking-tighter leading-none">
                        Diseñado para <br/>
                        <span className="text-primary italic">Procesar Ventas.</span>
                    </h2>
                    <p className="text-white/40 text-xl md:text-2xl font-medium leading-tight mb-14 italic">
                        "El sistema interpreta la intención, no solo las palabras. Convierte el tráfico en infraestructura rentable de forma autónoma."
                    </p>
                    <div className="space-y-10">
                        {capabilities.map((cap, i) => (
                        <div key={i} className="flex gap-6 group">
                            <div className="w-14 h-14 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 group-hover:border-primary/40 transition-all duration-500">
                                {cap.icon}
                            </div>
                            <div>
                                <h4 className="text-white font-black text-base uppercase tracking-tight mb-2">{cap.title}</h4>
                                <p className="text-white/30 text-sm font-medium leading-relaxed max-w-sm">{cap.description}</p>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
            </div>
          </div>
      </section>

      <section className="bg-white">
        <FinalCTA />
      </section>
      
      <Footer />
    </main>
  )
}
