"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Terminal } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative pt-24 pb-16 md:pt-48 md:pb-32 overflow-hidden bg-transparent">
      <div className="container relative z-10 px-6 mx-auto">
        <div className="flex flex-col items-center text-center lg:text-left lg:flex-row lg:items-center gap-12 lg:gap-0">
            {/* Left Column: Authoritative Copy */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="w-full lg:w-[50%] z-20 flex flex-col items-center lg:items-start"
            >
                {/* Branding Status */}
                <div className="flex items-center gap-4 mb-8 md:mb-12">
                    <div className="h-[2px] w-8 md:w-12 bg-primary hidden md:block" />
                    <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] md:tracking-[0.5em] text-primary">Agencia IA · Barcelona</span>
                    <div className="h-[2px] w-8 bg-primary hidden md:block lg:hidden" />
                </div>

                {/* Dominant Headline */}
                <h1 className="text-5xl md:text-[86px] lg:text-[92px] font-black mb-6 md:mb-10 tracking-tighter leading-[0.9] text-foreground">
                    AutoProcessX<br />
                    <span className="text-primary italic">Agencia IA Barcelona.</span>
                </h1>

                {/* Technical Statement */}
                <p className="text-foreground/60 text-lg md:text-2xl font-medium mb-10 md:mb-16 italic max-w-2xl leading-relaxed">
                    Automatizamos procesos, desarrollamos aplicaciones de inteligencia artificial y desplegamos chatbots personalizados. Tu empresa crece sin aumentar el equipo.
                </p>

                {/* Structured 3-Layer Summary (Visual List) */}
                <div className="space-y-6 mb-12 md:mb-16 w-full max-w-md lg:max-w-none">
                    {[
                        { num: "01", label: "AI Chatbot & Marketing IA", sub: "WhatsApp · Web · Campañas" },
                        { num: "02", label: "Workflow Automation n8n", sub: "Flujos Inteligentes" },
                        { num: "03", label: "Aplicaciones IA (RAG)", sub: "Agentes · LLMs Privados" },
                    ].map((layer, j) => (
                        <div key={j} className="flex items-center justify-center lg:justify-start gap-4 md:gap-6 group cursor-default">
                            <span className="text-primary/20 group-hover:text-primary text-xl md:text-2xl font-black transition-colors duration-500 shrink-0">{layer.num}</span>
                            <div className="text-left">
                                <h2 className="text-xs md:text-sm font-black uppercase tracking-widest text-foreground">{layer.label}</h2>
                                <p className="text-[9px] md:text-[10px] font-bold text-foreground/30 uppercase tracking-widest">{layer.sub}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Actions: Centered on mobile */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 p-2 md:p-3 rounded-3xl md:rounded-[32px] bg-gray-50/50 border border-gray-100 backdrop-blur-sm w-full sm:w-auto self-center lg:self-start">
                    <Button 
                        size="lg" 
                        className="px-8 md:px-12 h-14 md:h-18 text-base md:text-lg font-black bg-primary text-white hover:bg-primary/90 transition-all rounded-2xl md:rounded-[24px] border-none shadow-xl shadow-primary/20 group w-full sm:w-auto"
                    >
                        <span className="flex items-center justify-center gap-3">
                            Auditoria
                            <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform duration-500" />
                        </span>
                    </Button>
                    <Link href="/tecnologia" className="w-full sm:w-auto">
                        <Button 
                            size="lg" 
                            variant="secondary"
                            className="px-8 md:px-12 h-14 md:h-18 text-base md:text-lg font-black bg-white text-foreground hover:bg-gray-50 transition-all rounded-2xl md:rounded-[24px] border border-gray-100 shadow-md w-full flex items-center justify-center gap-3 group"
                        >
                            <Terminal className="h-5 w-5 group-hover:scale-110 transition-transform duration-500" />
                            Servicios
                        </Button>
                    </Link>
                </div>
            </motion.div>

            {/* Visual Right: Hidden on mobile or properly scaled */}
            <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                className="w-full lg:w-[60%] lg:-mr-[5%] mt-8 lg:mt-0 relative"
            >
                <div className="relative aspect-square sm:aspect-video lg:aspect-[16/10]">
                    <Image 
                        src="/assets/logo_premium_v6.png"
                        alt="AutoProcessX Brand"
                        width={1200}
                        height={800}
                        priority
                        className="w-full h-full object-contain scale-110 md:scale-125 lg:scale-110 transition-all duration-700 mix-blend-multiply"
                    />
                </div>
            </motion.div>
        </div>
      </div>
    </section>
  )
}
