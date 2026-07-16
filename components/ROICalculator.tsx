"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"
import { Calculator, Euro, Timer, Activity } from "lucide-react"

export default function ROICalculator() {
  const [hours, setHours] = useState([20])
  const [cost, setCost] = useState([40])
  const [autom, setAutom] = useState([65])

  // El ahorro real nunca es el 100% del coste manual: aplicamos una tasa de automatización.
  const yearlySavings = Math.round(hours[0] * cost[0] * 52 * (autom[0] / 100))
  const monthlySavings = (yearlySavings / 12).toFixed(0)

  return (
    <section className="py-16 md:py-20 bg-base text-ink-900 overflow-hidden relative">
      <div className="absolute top-0 left-1/4 w-1/2 h-[400px] bg-accent/5 blur-[120px] rounded-full -mt-40 z-0 opacity-40" />

      <div className="container relative z-10 px-6 mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left: Inputs */}
          <div className="flex flex-col items-start text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#FFFFFF] border border-[#E4E4E7] mb-5">
              <Calculator className="h-3 w-3 text-accent" />
              <span className="text-[9px] font-black uppercase tracking-[0.3em] text-zinc-500">Análisis de impacto</span>
            </div>
            <h2 className="text-2xl md:text-4xl font-black mb-3 tracking-tight leading-[1.05]">
              ¿Cuánto te cuesta <span className="text-accent">NO optimizar?</span>
            </h2>
            <p className="text-zinc-600 text-sm font-medium mb-8 leading-relaxed max-w-md">
              Calcula el retorno de mejorar tu tráfico y tu conversión. Sin humo: números sobre tu propio ecommerce.
            </p>

            <div className="space-y-4 w-full">
              {/* Hours */}
              <div className="p-5 rounded-2xl bg-[#FFFFFF] border border-[#E4E4E7]">
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center gap-2">
                    <Timer className="h-3.5 w-3.5 text-zinc-500" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Horas / semana</span>
                  </div>
                  <span className="text-xl font-black text-accent tabular-nums">{hours[0]}h</span>
                </div>
                <Slider
                  value={hours}
                  onValueChange={setHours}
                  max={100}
                  step={1}
                  className="[&_[role=slider]]:bg-accent [&_[role=slider]]:border-none [&_[role=slider]]:shadow-[0_0_12px_rgba(180,151,90,0.5)]"
                />
              </div>

              {/* Cost */}
              <div className="p-5 rounded-2xl bg-[#FFFFFF] border border-[#E4E4E7]">
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center gap-2">
                    <Euro className="h-3.5 w-3.5 text-zinc-500" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Coste / hora</span>
                  </div>
                  <span className="text-xl font-black text-accent tabular-nums">{cost[0]}€</span>
                </div>
                <Slider
                  value={cost}
                  onValueChange={setCost}
                  max={200}
                  step={5}
                  className="[&_[role=slider]]:bg-accent [&_[role=slider]]:border-none [&_[role=slider]]:shadow-[0_0_12px_rgba(180,151,90,0.5)]"
                />
              </div>

              {/* Tasa de automatización */}
              <div className="p-5 rounded-2xl bg-[#FFFFFF] border border-[#E4E4E7]">
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center gap-2">
                    <Activity className="h-3.5 w-3.5 text-zinc-500" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-zinc-500">% automatizable</span>
                  </div>
                  <span className="text-xl font-black text-accent tabular-nums">{autom[0]}%</span>
                </div>
                <Slider
                  value={autom}
                  onValueChange={setAutom}
                  min={20}
                  max={100}
                  step={5}
                  className="[&_[role=slider]]:bg-accent [&_[role=slider]]:border-none [&_[role=slider]]:shadow-[0_0_12px_rgba(180,151,90,0.5)]"
                />
                <p className="text-[10px] text-zinc-400 font-medium mt-3 leading-snug">La automatización no elimina el 100% del trabajo. Ajusta qué parte del proceso es realmente automatizable.</p>
              </div>
            </div>
          </div>

          {/* Right: Results */}
          <motion.div
            key={monthlySavings}
            initial={{ scale: 0.97, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="p-6 md:p-8 rounded-3xl bg-white border border-zinc-200 text-ink-900 shadow-[0_20px_60px_-25px_rgba(10,24,38,0.25)] relative overflow-hidden"
          >
            <div className="flex items-center gap-2 mb-4 text-oro-600">
              <Activity className="h-3 w-3 animate-pulse" />
              <span className="text-[9px] font-black uppercase tracking-[0.3em]">Proyección de ROI</span>
            </div>

            <div className="mb-6">
              <span className="text-5xl md:text-7xl font-black tracking-tight block leading-none mb-2 tabular-nums text-positive">{monthlySavings}€</span>
              <span className="text-[11px] font-black uppercase tracking-[0.2em] text-zinc-500">Ahorro mensual proyectado</span>
            </div>

            <div className="p-4 rounded-2xl bg-ink-50 border border-zinc-200 mb-4">
              <div className="flex items-baseline justify-between">
                <span className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Capital anual</span>
                <span className="text-xl font-black tabular-nums text-ink-900">{yearlySavings.toLocaleString("es-ES")}€</span>
              </div>
            </div>

            <Link href="/contacto">
              <Button className="w-full h-12 text-[11px] font-black uppercase tracking-[0.25em] bg-ink-600 text-white hover:bg-ink-700 rounded-xl border-none active:scale-95 transition-all">
                Solicita tu diagnóstico
              </Button>
            </Link>
            <p className="text-center text-[9px] font-bold uppercase tracking-widest text-zinc-400 mt-3">Cálculo sobre coste laboral × tasa de automatización estimada</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
