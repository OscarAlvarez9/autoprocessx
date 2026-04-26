"use client"

import { motion } from "framer-motion"
import { AlertTriangle, Clock, Activity, TrendingDown, ShieldAlert } from "lucide-react"
import DarkBackground from "@/components/DarkBackground"

const pains = [
    {
        icon: <Clock className="h-5 w-5 text-accent" />,
        title: "Latencia Operativa",
        description: "Cada directivo consume +40h mensuales en tareas mecánicas que no generan valor.",
        metric: "40h/mes",
    },
    {
        icon: <AlertTriangle className="h-5 w-5 text-accent" />,
        title: "Silo de Datos",
        description: "La información crítica está fragmentada, impidiendo la toma de decisiones basada en hechos.",
        metric: "Critical",
    },
    {
        icon: <TrendingDown className="h-5 w-5 text-accent" />,
        title: "Fuga de Rentabilidad",
        description: "Errores humanos y procesos manuales erosionan el margen operativo hasta un 25%.",
        metric: "-25% Margin",
    },
    {
        icon: <ShieldAlert className="h-5 w-5 text-accent" />,
        title: "Techo de Cristal",
        description: "La imposibilidad de escalar operaciones bloquea el crecimiento de nuevos clientes.",
        metric: "Zero Scalability",
    },
]

export default function PainPoints() {
    return (
        <section id="pains" className="py-24 md:py-28 text-white relative overflow-hidden">
            <DarkBackground accent="accent" secondaryAccent="neutral" intensity="soft" />

            <div className="container px-6 mx-auto relative z-10">
                <div className="max-w-3xl mb-16 md:mb-20">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-[10px] font-black uppercase tracking-[0.3em] mb-8">
                        <Activity className="h-3 w-3 animate-pulse" /> Diagnostic · Critical Gaps
                    </div>
                    <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-[1.05] mb-5">
                        El coste de <span className="text-accent">operar manualmente</span>.
                    </h2>
                    <p className="max-w-2xl text-white/65 text-base md:text-lg font-medium leading-relaxed">
                        Ignorar la automatización de infraestructuras no es neutro; es una pérdida de capital y competitividad en tiempo real.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                    {pains.map((pain, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.08 }}
                            className="p-6 md:p-7 rounded-2xl bg-[#0F1424] border border-white/10 hover:border-accent/30 transition-all group relative overflow-hidden"
                        >
                            <div className="mb-6 p-3 rounded-xl bg-accent/10 text-accent w-fit border border-accent/20 group-hover:scale-105 transition-transform">
                                {pain.icon}
                            </div>
                            <div className="text-[9px] font-black text-accent uppercase tracking-[0.3em] mb-3 flex items-center gap-2">
                                <Activity className="h-3 w-3 animate-pulse" />
                                {pain.metric}
                            </div>
                            <h3 className="text-lg md:text-xl font-black mb-3 tracking-tight text-white leading-tight">
                                {pain.title}
                            </h3>
                            <p className="text-white/55 text-sm leading-relaxed font-medium">
                                {pain.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12 md:mt-16 p-6 md:p-8 rounded-2xl bg-accent/5 border border-accent/15 backdrop-blur-xl relative overflow-hidden">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left relative z-10">
                        <div>
                            <p className="text-accent text-[9px] font-black uppercase tracking-[0.3em] mb-2">
                                Operational Impact Analysis
                            </p>
                            <p className="text-white text-lg md:text-2xl font-black tracking-tight leading-tight">
                                Pérdida crítica de eficiencia
                            </p>
                        </div>
                        <div className="flex flex-col items-center md:items-end">
                            <span className="text-3xl md:text-4xl font-black tracking-tight text-white leading-none">
                                +1.200€
                            </span>
                            <span className="text-white/40 text-[9px] font-black uppercase tracking-[0.3em] mt-2">
                                / empleado / mes
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
