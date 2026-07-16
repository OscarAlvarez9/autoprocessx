"use client"

import { motion } from "framer-motion"
import { Clock, ArrowRight } from "lucide-react"
import ContactForm from "@/components/ContactForm"
import { useContactDrawer } from "@/context/ContactDrawerContext"

export default function FinalCTA() {
    const { openDrawer } = useContactDrawer()
    return (
        <section className="relative z-10 px-4 py-20 md:py-28 md:px-8 overflow-hidden bg-[#FAFAFA]">
            {/* Ambient outer glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-[#B4975A]/[0.07] blur-[140px] rounded-full pointer-events-none" />
            <div className="absolute top-1/3 right-[10%] w-[260px] h-[260px] bg-[#B4975A]/[0.08] blur-[100px] rounded-full pointer-events-none" />

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="max-w-5xl mx-auto relative"
            >
                {/* Glowing border halo */}
                <div className="absolute -inset-[2px] rounded-[34px] md:rounded-[50px] bg-gradient-to-br from-[#B4975A]/40 via-[#B4975A]/10 to-[#B4975A]/40 blur-md opacity-60 pointer-events-none" />

                <div className="relative pt-16 pb-10 md:pt-20 md:pb-14 bg-gradient-to-br from-[#FAFAFA] via-[#FAFAFA] to-[#FAFAFA] border border-[#B4975A]/20 rounded-[32px] md:rounded-[48px] overflow-hidden shadow-[0_30px_120px_-20px_rgba(180,151,90,0.25)]">

                    {/* Internal radial spotlight */}
                    <div className="absolute inset-0 [background:radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(180,151,90,0.18),transparent_70%)] pointer-events-none" />

                    {/* Animated scanning beam */}
                    <motion.div
                        animate={{ x: ["-30%", "130%"] }}
                        transition={{ duration: 4.5, repeat: Infinity, ease: "linear" }}
                        className="absolute top-0 h-[2px] w-1/3 bg-gradient-to-r from-transparent via-[#B4975A] to-transparent shadow-[0_0_20px_rgba(180,151,90,0.8)] pointer-events-none"
                    />

                    {/* Grid texture */}
                    <div
                        className="absolute inset-0 opacity-[0.06] pointer-events-none"
                        style={{
                            backgroundImage:
                                "linear-gradient(to right, #B4975A 1px, transparent 1px), linear-gradient(to bottom, #B4975A 1px, transparent 1px)",
                            backgroundSize: "48px 48px",
                            maskImage:
                                "radial-gradient(ellipse 70% 60% at 50% 50%, black 30%, transparent 100%)",
                            WebkitMaskImage:
                                "radial-gradient(ellipse 70% 60% at 50% 50%, black 30%, transparent 100%)",
                        }}
                    />

                    {/* Header */}
                    <div className="relative z-10 px-6 md:px-12 text-center max-w-3xl mx-auto mb-10 md:mb-12">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.92 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#B4975A]/10 border border-[#B4975A]/40 backdrop-blur-md mb-7"
                        >
                            <span className="relative flex h-2 w-2">
                                <span className="absolute inline-flex h-full w-full rounded-full bg-[#B4975A] opacity-75 animate-ping" />
                                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#B4975A]" />
                            </span>
                            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#B4975A]">
                                Respuesta en 24h · Sin compromiso
                            </span>
                        </motion.div>

                        <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-[#09090B] tracking-[-0.025em] leading-[0.95] mb-5">
                            Solicita tu{" "}
                            <span className="relative inline-block">
                                <span
                                    className="relative z-10 bg-gradient-to-br from-[#B4975A] via-[#B4975A] to-[#B4975A] bg-clip-text text-transparent"
                                    style={{ filter: "drop-shadow(0 0 24px rgba(180,151,90,0.4))" }}
                                >
                                    diagnóstico
                                </span>
                                <span className="absolute -bottom-1 left-0 right-0 h-2 md:h-3 bg-[#B4975A]/40 origin-left blur-[4px]" />
                            </span>
                            .
                        </h2>

                        <p className="text-zinc-600 text-sm md:text-base font-medium leading-relaxed max-w-2xl mx-auto">
                            Cuéntanos tu operativa y te respondemos con un diagnóstico concreto en menos de 24h. Sin compromiso, sin SaaS, sin promesas vacías.
                        </p>
                    </div>

                    {/* Formulario de contacto */}
                    <div className="relative z-10 px-5 sm:px-8 md:px-10">
                        <div className="max-w-xl mx-auto rounded-2xl border border-[#E4E4E7] bg-[#FFFFFF] p-6 md:p-8">
                            <ContactForm location="final_cta" />
                        </div>
                        <div className="text-center mt-5">
                            <button
                                onClick={() => openDrawer("calendar")}
                                className="inline-flex items-center gap-1.5 font-mono text-xs text-zinc-500 hover:text-[#B4975A] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B4975A]/40 rounded"
                            >
                                ¿Prefieres hablar? Agendar llamada
                                <ArrowRight className="h-3.5 w-3.5" aria-hidden />
                            </button>
                        </div>
                    </div>

                    {/* Reassurance row */}
                    <div className="relative z-10 mt-8 md:mt-10 px-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-zinc-600 font-medium">
                        <div className="flex items-center gap-2">
                            <Clock className="h-3.5 w-3.5 text-[#B4975A]" />
                            <span>Respuesta en 24h</span>
                        </div>
                        <span className="hidden md:inline-block h-3 w-[1px] bg-zinc-200" />
                        <div className="flex items-center gap-2">
                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                            <span>Sin compromiso</span>
                        </div>
                        <span className="hidden md:inline-block h-3 w-[1px] bg-zinc-200" />
                        <div className="flex items-center gap-2">
                            <span className="text-[#B4975A] font-black">100%</span>
                            <span>tu propiedad</span>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    )
}
