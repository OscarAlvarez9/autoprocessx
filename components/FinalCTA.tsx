"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { MessageCircle, ArrowRight, Sparkles, Clock } from "lucide-react"
import { useContactDrawer } from "@/context/ContactDrawerContext"
import { gtagEvent } from "@/lib/gtag"

export default function FinalCTA() {
    const { openDrawer } = useContactDrawer()

    return (
        <section className="relative z-10 px-4 py-20 md:py-28 md:px-8 overflow-hidden bg-[#05070F]">
            {/* Ambient outer glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-amber-500/[0.07] blur-[140px] rounded-full pointer-events-none" />
            <div className="absolute top-1/3 right-[10%] w-[260px] h-[260px] bg-amber-300/[0.08] blur-[100px] rounded-full pointer-events-none" />

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="max-w-5xl mx-auto relative"
            >
                {/* Glowing border halo */}
                <div className="absolute -inset-[2px] rounded-[34px] md:rounded-[50px] bg-gradient-to-br from-amber-300/40 via-amber-500/10 to-amber-400/40 blur-md opacity-60 pointer-events-none" />

                <div className="relative py-16 md:py-24 bg-gradient-to-br from-[#0B0E1A] via-[#0a0d18] to-[#0B0E1A] border border-amber-400/20 rounded-[32px] md:rounded-[48px] overflow-hidden shadow-[0_30px_120px_-20px_rgba(251,191,36,0.25)]">

                    {/* Internal radial spotlight */}
                    <div className="absolute inset-0 [background:radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(251,191,36,0.18),transparent_70%)] pointer-events-none" />

                    {/* Animated scanning beam */}
                    <motion.div
                        animate={{ x: ["-30%", "130%"] }}
                        transition={{ duration: 4.5, repeat: Infinity, ease: "linear" }}
                        className="absolute top-0 h-[2px] w-1/3 bg-gradient-to-r from-transparent via-amber-300 to-transparent shadow-[0_0_20px_rgba(251,191,36,0.8)] pointer-events-none"
                    />

                    {/* Grid texture */}
                    <div
                        className="absolute inset-0 opacity-[0.06] pointer-events-none"
                        style={{
                            backgroundImage:
                                "linear-gradient(to right, #FBBF24 1px, transparent 1px), linear-gradient(to bottom, #FBBF24 1px, transparent 1px)",
                            backgroundSize: "48px 48px",
                            maskImage:
                                "radial-gradient(ellipse 70% 60% at 50% 50%, black 30%, transparent 100%)",
                            WebkitMaskImage:
                                "radial-gradient(ellipse 70% 60% at 50% 50%, black 30%, transparent 100%)",
                        }}
                    />

                    {/* Floating amber particles */}
                    <div className="absolute inset-0 pointer-events-none overflow-hidden">
                        {Array.from({ length: 8 }).map((_, i) => (
                            <motion.span
                                key={i}
                                className="absolute h-[3px] w-[3px] rounded-full bg-amber-300"
                                style={{
                                    left: `${10 + i * 11}%`,
                                    top: `${(i * 13) % 90}%`,
                                    boxShadow: "0 0 10px rgba(251,191,36,0.9)",
                                }}
                                animate={{ y: [-15, -120], opacity: [0, 1, 0] }}
                                transition={{
                                    duration: 6 + (i % 3),
                                    repeat: Infinity,
                                    ease: "linear",
                                    delay: i * 0.6,
                                }}
                            />
                        ))}
                    </div>

                    <div className="relative z-10 px-6 md:px-12 text-center max-w-3xl mx-auto">
                        {/* Urgency pill */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.92 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/40 backdrop-blur-md mb-8"
                        >
                            <span className="relative flex h-2 w-2">
                                <span className="absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75 animate-ping" />
                                <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-400" />
                            </span>
                            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-amber-200">
                                Plazas limitadas · 3 nuevos clientes / mes
                            </span>
                        </motion.div>

                        {/* Headline — bigger, sharper */}
                        <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-[-0.025em] leading-[0.95] mb-6">
                            Tu competencia ya está{" "}
                            <span className="relative inline-block">
                                <span
                                    className="relative z-10 bg-gradient-to-br from-amber-200 via-amber-300 to-amber-500 bg-clip-text text-transparent"
                                    style={{ filter: "drop-shadow(0 0 24px rgba(251,191,36,0.4))" }}
                                >
                                    automatizada
                                </span>
                                <span className="absolute -bottom-1 left-0 right-0 h-2 md:h-3 bg-amber-400/40 origin-left blur-[4px]" />
                            </span>
                            .
                        </h2>

                        <p className="text-white/70 text-base md:text-lg font-medium leading-relaxed mb-10 max-w-2xl mx-auto">
                            Auditamos tu operativa en <span className="text-amber-300 font-black">48h</span>, te entregamos un plan de despliegue y empezamos a construir.
                            <br className="hidden md:block" />
                            Sin compromisos. Sin SaaS. Tu propia infraestructura IA.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-10">
                            <Button
                                size="lg"
                                onClick={() => {
                                    gtagEvent("click_cta_to_form", {
                                        event_category: "cta",
                                        event_label: "auditoria_gratuita",
                                        location: "final_cta_section",
                                    })
                                    openDrawer()
                                }}
                                className="group h-16 px-10 text-base font-black tracking-wide bg-amber-400 text-black hover:bg-amber-300 transition-all rounded-2xl shadow-[0_0_50px_-8px_rgba(251,191,36,0.7)] hover:shadow-[0_0_70px_-8px_rgba(251,191,36,0.9)] w-full sm:w-auto active:scale-95"
                            >
                                <Sparkles className="mr-2 h-4 w-4" />
                                Auditar mi empresa gratis
                                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                onClick={() => {
                                    gtagEvent("click_cta_to_form", {
                                        event_category: "cta",
                                        event_label: "whatsapp_directo",
                                        location: "final_cta_section",
                                    })
                                    openDrawer()
                                }}
                                className="h-16 px-8 text-base font-black tracking-wide border border-white/20 text-white bg-white/[0.04] hover:bg-white/10 backdrop-blur-md transition-all rounded-2xl w-full sm:w-auto flex items-center justify-center gap-2.5 active:scale-95"
                            >
                                <MessageCircle className="h-4 w-4 text-amber-300" />
                                Hablar con ingeniería
                            </Button>
                        </div>

                        {/* Reassurance row */}
                        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-white/55 font-medium">
                            <div className="flex items-center gap-2">
                                <Clock className="h-3.5 w-3.5 text-amber-400" />
                                <span>Respuesta en 24h</span>
                            </div>
                            <span className="hidden md:inline-block h-3 w-[1px] bg-white/15" />
                            <div className="flex items-center gap-2">
                                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                                <span>Sin compromiso</span>
                            </div>
                            <span className="hidden md:inline-block h-3 w-[1px] bg-white/15" />
                            <div className="flex items-center gap-2">
                                <span className="text-amber-300 font-black">100%</span>
                                <span>tu propiedad</span>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    )
}
