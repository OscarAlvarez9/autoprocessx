"use client"

import { motion } from "framer-motion"
import DarkBackground from "@/components/DarkBackground"

export default function ManifestoDivider() {
    return (
        <section className="relative py-24 md:py-28 text-white overflow-hidden">
            <DarkBackground accent="primary" secondaryAccent="accent" intensity="medium" grid={false} />

            <div className="container px-6 mx-auto relative z-20">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-[0.3em] mb-10"
                    >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                        Infrastructure Manifesto · v2
                    </motion.div>

                    <h2 className="text-3xl md:text-5xl font-black text-white leading-[1.05] tracking-tight mb-6">
                        Tu empresa. <span className="text-primary">Tu código. Tu control.</span>
                    </h2>

                    <p className="text-white/65 text-base md:text-lg font-medium max-w-2xl mx-auto leading-relaxed mb-10">
                        Dejamos las soluciones superficiales para los demás. Desplegamos ingeniería real — auditable, escalable y sin dependencias ocultas — sobre tu propia infraestructura.
                    </p>

                    {/* Manifesto pillars */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 max-w-3xl mx-auto">
                        {[
                            { label: "Código Abierto", value: "100%" },
                            { label: "Coste por Tarea", value: "0€" },
                            { label: "SLA Producción", value: "24/7" },
                        ].map((item) => (
                            <div key={item.label} className="p-5 rounded-2xl bg-[#0F1424] border border-white/10 backdrop-blur-xl">
                                <div className="text-2xl md:text-3xl font-black tracking-tighter text-white mb-1">{item.value}</div>
                                <div className="text-[9px] font-black uppercase tracking-[0.25em] text-white/40">{item.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
