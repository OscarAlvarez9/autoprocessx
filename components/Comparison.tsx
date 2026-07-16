"use client"

import { Check, X, ShieldAlert, Cpu } from "lucide-react"
import DarkBackground from "@/components/DarkBackground"

const features = [
    { name: "Alcance del servicio", ap: "Automatizaciones + Plataforma + Chatbots", others: "Producto único, modular extra" },
    { name: "Propiedad del sistema", ap: "100% del cliente", others: "Licencia mensual sin propiedad" },
    { name: "Coste operativo", ap: "Pago único + hosting", others: "Suscripción por usuario · €€€" },
    { name: "Datos y privacidad", ap: "Servidor propio · bajo tu firewall", others: "Cloud compartido multinacional" },
    { name: "IA y RAG sobre tu data", ap: "Agentes entrenados con tu negocio", others: "Chatbots genéricos sin contexto" },
    { name: "Escalabilidad", ap: "Sin techo · sin coste por tarea", others: "Planes con límites artificiales" },
]

export default function Comparison() {
    return (
        <section id="tech-benchmarking" className="py-24 md:py-28 relative overflow-hidden">
            <DarkBackground accent="neutral" secondaryAccent="accent" intensity="soft" />

            <div className="container relative z-10 px-6 mx-auto">
                <div className="text-center mb-16 md:mb-20 max-w-3xl mx-auto">
                    <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-[10px] font-black uppercase tracking-[0.3em] mb-8">
                        <ShieldAlert className="h-3.5 w-3.5" />
                        Una agencia · Tres capacidades · Cero SaaS
                    </div>
                    <h2 className="text-3xl md:text-5xl font-black text-[#09090B] mb-5 leading-[1.05] tracking-tight">
                        SaaS multinacional es alquiler. <br className="hidden md:block" />
                        <span className="text-accent">Tu propia infraestructura IA.</span>
                    </h2>
                    <p className="text-zinc-600 text-base md:text-lg font-medium leading-relaxed max-w-2xl mx-auto">
                        Automatizaciones, plataformas corporativas y chatbots desplegados como un sistema unificado — al coste de un SaaS, bajo tu propiedad, sin licencias por usuario ni techos artificiales.
                    </p>
                </div>

                {/* Mobile card layout */}
                <div className="md:hidden max-w-md mx-auto space-y-3">
                    {features.map((f, i) => (
                        <div key={i} className="rounded-2xl border border-[#E4E4E7] bg-[#FFFFFF] overflow-hidden">
                            <div className="px-5 py-3 border-b border-[#E4E4E7] text-[10px] font-black uppercase tracking-[0.25em] text-zinc-500">
                                {f.name}
                            </div>
                            <div className="grid grid-cols-2 divide-x divide-white/5">
                                <div className="p-4 bg-accent/[0.04]">
                                    <div className="text-[9px] font-black uppercase tracking-[0.25em] text-accent/80 mb-2 flex items-center gap-1.5">
                                        <Cpu className="h-3 w-3" /> SEOscar
                                    </div>
                                    <div className="flex items-start gap-2">
                                        <Check className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                                        <span className="text-[#09090B] font-black tracking-tight text-sm leading-tight">
                                            {f.ap}
                                        </span>
                                    </div>
                                </div>
                                <div className="p-4">
                                    <div className="text-[9px] font-black uppercase tracking-[0.25em] text-zinc-400 mb-2">
                                        SaaS
                                    </div>
                                    <div className="flex items-start gap-2">
                                        <X className="h-4 w-4 text-zinc-400 shrink-0 mt-0.5" />
                                        <span className="text-zinc-500 text-sm font-medium leading-tight">
                                            {f.others}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Desktop table layout */}
                <div className="hidden md:block max-w-5xl mx-auto overflow-hidden rounded-[32px] border border-[#E4E4E7] bg-[#FFFFFF] shadow-2xl backdrop-blur-xl">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-[#FFFFFF] text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500">
                                <th className="p-8 border-b border-[#E4E4E7]">Característica</th>
                                <th className="p-8 border-b border-[#E4E4E7] text-accent relative">
                                    <div className="absolute inset-0 bg-accent/5" />
                                    <span className="relative z-10 flex items-center gap-2.5">
                                        <Cpu className="h-3.5 w-3.5" /> SEOscar
                                    </span>
                                </th>
                                <th className="p-8 border-b border-[#E4E4E7] opacity-50">SaaS multinacional</th>
                            </tr>
                        </thead>
                        <tbody>
                            {features.map((f, i) => (
                                <tr key={i} className="border-b border-[#E4E4E7] last:border-0 hover:bg-zinc-50 transition-colors group">
                                    <td className="p-8 text-zinc-600 font-bold text-sm">{f.name}</td>
                                    <td className="p-8 relative">
                                        <div className="absolute inset-0 bg-accent/[0.03] border-x border-accent/10" />
                                        <div className="relative flex items-center gap-2.5">
                                            <Check className="h-4 w-4 text-accent shrink-0" />
                                            <span className="text-[#09090B] font-black tracking-tight text-base group-hover:text-accent transition-colors">
                                                {f.ap}
                                            </span>
                                        </div>
                                    </td>
                                    <td className="p-8">
                                        <div className="flex items-center gap-2.5">
                                            <X className="h-4 w-4 text-zinc-400 shrink-0" />
                                            <span className="text-zinc-500 text-sm font-medium group-hover:text-zinc-600 transition-colors">
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
