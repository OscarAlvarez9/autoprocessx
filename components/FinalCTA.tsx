"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { MessageCircle, Zap, ShieldCheck, Activity, Terminal } from "lucide-react"
import { useContactDrawer } from "@/context/ContactDrawerContext"
import { gtagEvent } from "@/lib/gtag"
import DarkBackground from "@/components/DarkBackground"

export default function FinalCTA() {
    const { openDrawer } = useContactDrawer()

    return (
        <section className="relative z-10 px-4 py-20 md:py-28 md:px-8 overflow-hidden">
            <DarkBackground accent="accent" intensity="medium" />

            <div className="max-w-5xl mx-auto py-16 md:py-20 bg-[#0F1424] border border-white/10 rounded-[32px] md:rounded-[48px] overflow-hidden relative shadow-2xl backdrop-blur-xl">
                {/* Soft accent glow */}
                <div className="absolute top-0 right-0 w-1/2 h-full bg-accent/15 blur-[120px] rounded-full -mr-40 pointer-events-none" />

                <div className="container relative z-10 px-6 md:px-10 mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-3xl mx-auto"
                    >
                        <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8">
                            <Activity className="h-3.5 w-3.5 text-accent animate-pulse" />
                            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/70">
                                Deployment Protocol
                            </span>
                        </div>

                        <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-[1.05] mb-6">
                            Construye tu <span className="text-accent">infraestructura IA</span>.
                        </h2>

                        <p className="text-white/65 text-base md:text-lg font-medium leading-relaxed mb-10 max-w-2xl mx-auto">
                            Auditamos tu stack, orquestamos tus procesos y escalamos tu capacidad operativa con ingeniería de plataformas.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-12">
                            <Button
                                size="lg"
                                onClick={() => {
                                    gtagEvent('click_cta_to_form', {
                                        event_category: 'cta',
                                        event_label: 'auditoria_gratuita',
                                        location: 'final_cta_section',
                                    })
                                    openDrawer()
                                }}
                                className="h-14 px-8 text-sm font-black tracking-wide bg-accent text-black hover:bg-white transition-all rounded-xl shadow-lg shadow-accent/20 w-full sm:w-auto active:scale-95"
                            >
                                Solicitar auditoría técnica
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                onClick={() => {
                                    gtagEvent('click_cta_to_form', {
                                        event_category: 'cta',
                                        event_label: 'whatsapp_directo',
                                        location: 'final_cta_section',
                                    })
                                    openDrawer()
                                }}
                                className="h-14 px-8 text-sm font-black tracking-wide border border-white/15 text-white bg-white/5 hover:bg-white/10 transition-all rounded-xl w-full sm:w-auto flex items-center justify-center gap-2.5 active:scale-95"
                            >
                                <MessageCircle className="h-4 w-4 text-accent" />
                                Hablar con ingeniería
                            </Button>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-white/10">
                            {[
                                { icon: <ShieldCheck className="h-3.5 w-3.5" />, label: "Security First" },
                                { icon: <Activity className="h-3.5 w-3.5" />, label: "99.9% Uptime" },
                                { icon: <Terminal className="h-3.5 w-3.5" />, label: "Production Ready" },
                                { icon: <Zap className="h-3.5 w-3.5" />, label: "SLA Garantizado" },
                            ].map((item, i) => (
                                <div key={i} className="flex items-center justify-center gap-2 text-white/50">
                                    <div className="text-accent">{item.icon}</div>
                                    <span className="text-[10px] font-black uppercase tracking-[0.2em]">
                                        {item.label}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
