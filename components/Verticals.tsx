"use client"

import { motion } from "framer-motion"
import { ShieldAlert, Lock, Infinity as InfinityIcon, Server, TrendingDown, Check, X } from "lucide-react"
import DarkBackground from "@/components/DarkBackground"

const advantages = [
    {
        icon: <Lock className="h-5 w-5" />,
        title: "Propiedad total",
        desc: "El código, los datos y los agentes son tuyos. Sin licencias mensuales que se acumulan ni dependencia de un proveedor externo.",
    },
    {
        icon: <Server className="h-5 w-5" />,
        title: "Bajo tu firewall",
        desc: "Despliegue on-premise o en tu propia cuenta cloud. Tu información no viaja a servidores compartidos en otro continente.",
    },
    {
        icon: <InfinityIcon className="h-5 w-5" />,
        title: "Sin techo de uso",
        desc: "Automatizaciones, plataformas y chatbots que escalan sin coste por tarea, por usuario ni por workflow.",
    },
    {
        icon: <TrendingDown className="h-5 w-5" />,
        title: "Coste decreciente",
        desc: "Pago único + hosting predecible. Cuanto más usas el sistema, más rentable se vuelve. Lo opuesto a un SaaS.",
    },
]

const saasRows = [
    "Suscripción mensual por usuario",
    "Datos en cloud compartido",
    "Funciones limitadas por plan",
    "Cero propiedad — alquiler perpetuo",
    "Coste crece con cada nuevo empleado",
]

const ownedRows = [
    "Pago único + hosting bajo control",
    "Servidor propio · datos privados",
    "Funcionalidad sin límites",
    "Código y agentes 100% tuyos",
    "Coste estable aunque crezca el equipo",
]

export default function Verticals() {
    return (
        <section id="ventajas" className="py-20 md:py-28 text-white overflow-hidden relative">
            <DarkBackground accent="accent" secondaryAccent="primary" intensity="soft" />

            <div className="container px-6 mx-auto relative z-10 max-w-6xl">
                {/* Header */}
                <div className="text-center mb-14 md:mb-20 max-w-3xl mx-auto">
                    <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-[10px] font-black uppercase tracking-[0.3em] mb-6">
                        <ShieldAlert className="h-3.5 w-3.5" />
                        Tu infraestructura · Tus reglas
                    </div>
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-5 leading-[1.05] tracking-tight">
                        Deja de alquilar software. <br className="hidden md:block" />
                        <span className="text-accent">Empieza a tener el tuyo.</span>
                    </h2>
                    <p className="text-white/65 text-base md:text-lg font-medium leading-relaxed max-w-2xl mx-auto">
                        Automatizaciones, plataformas con agentes y chatbots desplegados como sistema unificado. Una vez. Bajo tu propiedad. Sin pagar otra suscripción nunca más.
                    </p>
                </div>

                {/* Cost comparison split */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 mb-14 md:mb-20">
                    {/* SaaS — pain side */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="relative p-6 md:p-8 rounded-2xl border border-white/10 bg-[#0F1424] overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-40 h-40 bg-red-500/[0.04] blur-[60px] rounded-full -mr-10 -mt-10 pointer-events-none" />
                        <div className="relative">
                            <div className="flex items-center gap-2 mb-5">
                                <span className="text-[9px] font-black uppercase tracking-[0.3em] text-red-400/70">
                                    Modelo SaaS multinacional
                                </span>
                            </div>
                            <div className="mb-6">
                                <div className="text-[10px] font-black uppercase tracking-[0.25em] text-white/40 mb-1">
                                    Empresa 50 personas
                                </div>
                                <div className="flex items-baseline gap-2">
                                    <span className="text-3xl md:text-4xl font-black text-white/80 line-through decoration-red-500/50 decoration-2">
                                        2.400€
                                    </span>
                                    <span className="text-sm font-bold text-white/40">/ mes</span>
                                </div>
                                <div className="text-xs font-bold text-red-400/80 mt-1">
                                    ≈ 28.800€/año · y nada es tuyo
                                </div>
                            </div>
                            <ul className="space-y-2.5">
                                {saasRows.map((row) => (
                                    <li key={row} className="flex items-start gap-2.5">
                                        <X className="h-4 w-4 text-red-400/70 shrink-0 mt-0.5" />
                                        <span className="text-sm text-white/55 font-medium leading-snug">{row}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>

                    {/* Owned — solution side */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="relative p-6 md:p-8 rounded-2xl border border-accent/30 bg-gradient-to-br from-accent/[0.06] to-transparent overflow-hidden shadow-[0_0_40px_-12px_rgba(251,191,36,0.3)]"
                    >
                        <div className="absolute top-0 right-0 w-40 h-40 bg-accent/15 blur-[60px] rounded-full -mr-10 -mt-10 pointer-events-none" />
                        <div className="relative">
                            <div className="flex items-center gap-2 mb-5">
                                <div className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                                <span className="text-[9px] font-black uppercase tracking-[0.3em] text-accent">
                                    Infraestructura AutoProcessX
                                </span>
                            </div>
                            <div className="mb-6">
                                <div className="text-[10px] font-black uppercase tracking-[0.25em] text-white/40 mb-1">
                                    Mismo equipo · misma capacidad
                                </div>
                                <div className="flex items-baseline gap-2">
                                    <span className="text-3xl md:text-4xl font-black text-accent">
                                        Pago único
                                    </span>
                                </div>
                                <div className="text-xs font-bold text-accent/80 mt-1">
                                    + hosting propio · ROI sin coste por usuario
                                </div>
                            </div>
                            <ul className="space-y-2.5">
                                {ownedRows.map((row) => (
                                    <li key={row} className="flex items-start gap-2.5">
                                        <Check className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                                        <span className="text-sm text-white/85 font-medium leading-snug">{row}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                </div>

                {/* Advantages grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
                    {advantages.map((a, i) => (
                        <motion.div
                            key={a.title}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.06 }}
                            className="p-5 md:p-6 rounded-2xl bg-[#0F1424] border border-white/10 hover:border-accent/30 transition-all"
                        >
                            <div className="h-10 w-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent mb-4">
                                {a.icon}
                            </div>
                            <h3 className="text-base md:text-lg font-black tracking-tight text-white mb-2">
                                {a.title}
                            </h3>
                            <p className="text-white/55 text-xs md:text-sm font-medium leading-relaxed">
                                {a.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
