"use client"

import { Check, X, ShieldAlert, Cpu } from "lucide-react"
import DarkBackground from "@/components/DarkBackground"

const features = [
    { name: "SLA de Infraestructura", ap: "Garantizado", others: "N/A" },
    { name: "Propiedad del Código Source", ap: "100% Cliente", others: "Propiedad SaaS" },
    { name: "IA No-Determinística (RAG)", ap: "Arquitectura SOTA", others: "Chatbots Básicos" },
    { name: "Coste por Tarea", ap: "0€ (Scale-Out)", others: "Coste por Zap" },
    { name: "Escalabilidad de Pipeline", ap: "Infinita (n8n Engine)", others: "Límites de Plan" },
    { name: "Seguridad de Datos", ap: "Entorno Privado", others: "Cloud Compartido" },
]

export default function Comparison() {
    return (
        <section id="tech-benchmarking" className="py-24 md:py-28 relative overflow-hidden">
            <DarkBackground accent="neutral" secondaryAccent="accent" intensity="soft" />

            <div className="container relative z-10 px-6 mx-auto">
                <div className="text-center mb-16 md:mb-20 max-w-3xl mx-auto">
                    <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-500 text-[10px] font-black uppercase tracking-[0.3em] mb-8">
                        <ShieldAlert className="h-3.5 w-3.5" />
                        No construimos &quot;Zaps&quot;. Construimos sistemas.
                    </div>
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-5 leading-[1.05] tracking-tight">
                        Zapier y Make son parches. <br className="hidden md:block" />
                        <span className="text-accent">Nosotros, plataforma.</span>
                    </h2>
                    <p className="text-white/65 text-base md:text-lg font-medium leading-relaxed max-w-2xl mx-auto">
                        Desplegamos arquitectura de plataforma que orquesta tu empresa sin límites artificiales ni coste por tarea.
                    </p>
                </div>

                <div className="max-w-5xl mx-auto overflow-hidden rounded-[28px] md:rounded-[32px] border border-white/10 bg-[#0F1424] shadow-2xl backdrop-blur-xl">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-[#0F1424] text-[10px] font-black uppercase tracking-[0.3em] text-white/40">
                                <th className="p-6 md:p-8 border-b border-white/10">Protocol Spec</th>
                                <th className="p-6 md:p-8 border-b border-white/10 text-accent relative">
                                    <div className="absolute inset-0 bg-accent/5" />
                                    <span className="relative z-10 flex items-center gap-2.5">
                                        <Cpu className="h-3.5 w-3.5" /> AutoProcessX
                                    </span>
                                </th>
                                <th className="p-6 md:p-8 border-b border-white/10 opacity-50">Generic Automation</th>
                            </tr>
                        </thead>
                        <tbody>
                            {features.map((f, i) => (
                                <tr key={i} className="border-b border-white/5 last:border-0 hover:bg-white/[0.02] transition-colors group">
                                    <td className="p-6 md:p-8 text-white/70 font-bold text-sm">{f.name}</td>
                                    <td className="p-6 md:p-8 relative">
                                        <div className="absolute inset-0 bg-accent/[0.03] border-x border-accent/10" />
                                        <div className="relative flex items-center gap-2.5">
                                            <Check className="h-4 w-4 text-accent shrink-0" />
                                            <span className="text-white font-black tracking-tight text-sm md:text-base group-hover:text-accent transition-colors">
                                                {f.ap}
                                            </span>
                                        </div>
                                    </td>
                                    <td className="p-6 md:p-8">
                                        <div className="flex items-center gap-2.5">
                                            <X className="h-4 w-4 text-white/20 shrink-0" />
                                            <span className="text-white/40 text-sm font-medium group-hover:text-white/60 transition-colors">
                                                {f.others}
                                            </span>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    )
}
