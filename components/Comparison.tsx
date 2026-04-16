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
    <section id="tech" className="py-24 bg-background">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl font-black text-foreground md:text-5xl mb-16 text-center tracking-tight">
            Por qué <span className="text-primary underline decoration-primary/20 decoration-8 underline-offset-4">AutoProcessX</span> y no Zapier
        </h2>

        <div className="max-w-4xl mx-auto overflow-hidden rounded-[32px] border border-gray-100 bg-white shadow-2xl shadow-primary/5">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-muted/50 text-xs font-black uppercase tracking-widest text-foreground/40">
                <th className="p-8 border-b border-gray-100">Característica</th>
                <th className="p-8 border-b border-gray-100 relative overflow-hidden">
                    <div className="absolute inset-0 bg-primary/5 opacity-40 -z-10" />
                    <span className="text-primary tracking-[0.2em]">AutoProcessX (n8n)</span>
                </th>
                <th className="p-8 border-b border-gray-100 opacity-50">Zapier / Make</th>
              </tr>
            </thead>
            <tbody>
              {features.map((f, i) => (
                <tr key={i} className="border-b border-gray-50 last:border-0 hover:bg-muted/30 transition-colors group">
                  <td className="p-8 text-foreground/70 font-bold group-hover:text-primary transition-colors">{f.name}</td>
                  <td className="p-8 relative">
                    {/* Subtle column highlight */}
                    <div className="absolute inset-0 bg-primary/[0.02] border-x border-primary/[0.05]" />
                    <div className="relative flex items-center justify-center">
                        {f.ap === true ? (
                            <div className="w-10 h-10 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shadow-sm">
                                <Check className="h-6 w-6" strokeWidth={3} />
                            </div>
                        ) : (
                            <span className="text-sm font-black text-primary">{f.ap}</span>
                        )}
                    </div>
                  </td>
                  <td className="p-8">
                    <div className="flex items-center justify-center">
                        {f.others === true ? (
                            <Check className="h-6 w-6 text-foreground/20" />
                        ) : f.others === false ? (
                            <div className="w-10 h-10 rounded-2xl bg-red-50 text-red-400/50 flex items-center justify-center">
                                <X className="h-6 w-6" strokeWidth={3} />
                            </div>
                        ) : (
                            <span className="px-3 py-1 bg-amber-50 text-amber-500 text-[10px] font-black uppercase tracking-widest rounded-lg">
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
      </div>
    </section>
  )
}
