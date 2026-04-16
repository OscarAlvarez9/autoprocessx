"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Terminal } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-transparent">
      <div className="container relative z-10 px-4 mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-0">
            {/* Left Column: Authoritative Copy */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="w-full lg:w-[45%] text-left z-20"
            >
                {/* Branding Status */}
                <div className="flex items-center gap-6 mb-12">
                    <div className="h-[2px] w-12 bg-primary" />
                    <span className="text-[10px] font-black uppercase tracking-[0.5em] text-primary">Agencia IA · Barcelona</span>
                </div>

                {/* Dominant Headline */}
                <h1 className="text-6xl md:text-[92px] font-black mb-10 tracking-tighter leading-[0.88] text-foreground">
                    AutoProcessX<br />
                    <span className="text-primary italic">Agencia IA Barcelona.</span>
                </h1>

                {/* Technical Statement */}
                <p className="text-foreground/50 text-xl md:text-2xl font-medium mb-16 italic max-w-xl leading-relaxed">
                    Automatizamos procesos, desarrollamos aplicaciones de inteligencia artificial y desplegamos chatbots personalizados. Tu empresa crece sin aumentar el equipo.
                </p>

                {/* Structured 3-Layer Summary (Visual List) */}
                <div className="space-y-6 mb-16">
                    {[
                        { num: "01", label: "AI Chatbot & Automatización Email Marketing", sub: "Web · WhatsApp · Campañas IA" },
                        { num: "02", label: "Workflow Automation con n8n", sub: "Flujos Inteligentes" },
                        { num: "03", label: "Aplicaciones IA para Empresas", sub: "RAG · Multi Agent Systems · LLMs" },
                    ].map((layer, j) => (
                        <div key={j} className="flex items-center gap-6 group cursor-default">
                            <span className="text-primary/20 group-hover:text-primary text-2xl font-black transition-colors duration-500">{layer.num}</span>
                            <div>
                                <h2 className="text-sm font-black uppercase tracking-widest text-foreground">{layer.label}</h2>
                                <p className="text-[10px] font-bold text-foreground/30 uppercase tracking-widest">{layer.sub}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Actions: Framed (Encuadrados) */}
                <div className="mt-16 inline-flex flex-col sm:flex-row items-center gap-4 p-3 rounded-[32px] bg-gray-50/50 border border-gray-100 backdrop-blur-sm self-start">
                    <Button 
                        size="lg" 
                        className="px-12 h-18 text-lg font-black bg-primary text-white hover:bg-primary/90 transition-all rounded-[24px] border-none shadow-xl shadow-primary/20 group w-full sm:w-auto"
                    >
                        <span className="flex items-center gap-3">
                            Auditoria Técnica
                            <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform duration-500" />
                        </span>
                    </Button>
                    <Link href="/tecnologia" className="w-full sm:w-auto">
                        <Button 
                            size="lg" 
                            className="px-12 h-18 text-lg font-black bg-secondary text-white hover:bg-secondary/90 transition-all rounded-[24px] border-none shadow-xl shadow-secondary/20 w-full flex items-center justify-center gap-4 group"
                        >
                            <Terminal className="h-5 w-5 group-hover:scale-110 transition-transform duration-500" />
                            Explorar servicios
                        </Button>
                    </Link>
                </div>
            </motion.div>

            {/* Visual Right (Sync with Home) */}
            <motion.div 
                initial={{ opacity: 0, scale: 0.9, x: 50 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="w-full lg:w-[65%] lg:-mr-[10%] relative"
            >
                <div className="relative aspect-[4/3] lg:aspect-[16/10]">
                    <Image 
                        src="/assets/logo_premium_v6.png"
                        alt="AutoProcessX Brand Evolution"
                        width={1920}
                        height={1080}
                        className="w-full h-full object-contain scale-110 group-hover:scale-105 transition-all duration-700 mix-blend-multiply"
                    />
                </div>
            </motion.div>
        </div>
      </div>
    </section>
  )
}
