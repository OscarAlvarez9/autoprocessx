"use client"

import { motion } from "framer-motion"
import { Check, X } from "lucide-react"

const features = [
  { name: "Cero límites de tareas", ap: true, others: false },
  { name: "IA Especializada (Claude/Gemini)", ap: true, others: false },
  { name: "Código Abierto & Privacidad", ap: true, others: false },
  { name: "Coste por ejecución $0", ap: true, others: false },
  { name: "Mantenimiento & Estrategia", ap: true, others: false },
  { name: "Escalabilidad Personalizada", ap: true, others: "Parcial" },
]

export default function Comparison() {
  return (
    <section id="tech" className="py-20 md:py-24 bg-background">
      <div className="container px-6 mx-auto">
        <h2 className="text-3xl font-black text-foreground md:text-5xl mb-12 md:mb-16 text-center tracking-tight">
            Por qué <span className="text-primary underline decoration-primary/20 decoration-8 underline-offset-4">AutoProcessX</span> y no Zapier
        </h2>

        <div className="max-w-4xl mx-auto overflow-x-auto rounded-[32px] border border-gray-100 bg-white shadow-2xl shadow-primary/5 scrollbar-hide">
          <table className="w-full text-left border-collapse min-w-[600px]">
            <thead>
              <tr className="bg-muted/50 text-[10px] md:text-xs font-black uppercase tracking-widest text-foreground/40">
                <th className="p-6 md:p-8 border-b border-gray-100">Característica</th>
                <th className="p-6 md:p-8 border-b border-gray-100 relative overflow-hidden">
                    <div className="absolute inset-0 bg-primary/5 opacity-40 -z-10" />
                    <span className="text-primary tracking-[0.2em] whitespace-nowrap">AutoProcessX (n8n)</span>
                </th>
                <th className="p-6 md:p-8 border-b border-gray-100 opacity-50 whitespace-nowrap">Zapier / Make</th>
              </tr>
            </thead>
            <tbody>
              {features.map((f, i) => (
                <tr key={i} className="border-b border-gray-50 last:border-0 hover:bg-muted/30 transition-colors group">
                  <td className="p-6 md:p-8 text-foreground/70 font-bold group-hover:text-primary transition-colors text-sm md:text-base">{f.name}</td>
                  <td className="p-6 md:p-8 relative">
                    {/* Subtle column highlight */}
                    <div className="absolute inset-0 bg-primary/[0.02] border-x border-primary/[0.05]" />
                    <div className="relative flex items-center justify-center">
                        {f.ap === true ? (
                            <div className="w-8 h-8 md:w-10 md:h-10 rounded-xl md:rounded-2xl bg-primary/10 text-primary flex items-center justify-center shadow-sm shrink-0">
                                <Check className="h-5 w-5 md:h-6 md:w-6" strokeWidth={3} />
                            </div>
                        ) : (
                            <span className="text-xs md:text-sm font-black text-primary">{f.ap}</span>
                        )}
                    </div>
                  </td>
                  <td className="p-6 md:p-8">
                    <div className="flex items-center justify-center">
                        {f.others === true ? (
                            <Check className="h-5 w-5 md:h-6 md:w-6 text-foreground/20" />
                        ) : f.others === false ? (
                            <div className="w-8 h-8 md:w-10 md:h-10 rounded-xl md:rounded-2xl bg-red-50 text-red-400/50 flex items-center justify-center shrink-0">
                                <X className="h-5 w-5 md:h-6 md:w-6" strokeWidth={3} />
                            </div>
                        ) : (
                            <span className="px-2 py-1 md:px-3 md:py-1 bg-amber-50 text-amber-500 text-[9px] md:text-[10px] font-black uppercase tracking-widest rounded-lg whitespace-nowrap">
                                {f.others}
                            </span>
                        )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-center mt-6 text-[10px] text-foreground/30 font-bold uppercase tracking-widest sm:hidden">Desliza para ver la tabla completa →</p>
      </div>
    </section>
  )
}
