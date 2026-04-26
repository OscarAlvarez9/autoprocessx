"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"
import { Calculator, Euro, Timer, Activity } from "lucide-react"

export default function ROICalculator() {
  const [hours, setHours] = useState([20])
  const [cost, setCost] = useState([40])

  const yearlySavings = hours[0] * cost[0] * 52
  const monthlySavings = (yearlySavings / 12).toFixed(0)

  return (
    <section className="py-16 md:py-20 bg-[#05070F] text-white overflow-hidden relative">
      <div className="absolute top-0 left-1/4 w-1/2 h-[400px] bg-accent/5 blur-[120px] rounded-full -mt-40 z-0 opacity-40" />

      <div className="container relative z-10 px-6 mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left: Inputs */}
          <div className="flex flex-col items-start text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#0F1424] border border-white/5 mb-5">
              <Calculator className="h-3 w-3 text-accent" />
              <span className="text-[9px] font-black uppercase tracking-[0.3em] text-white/50">Impact Analysis</span>
            </div>
            <h2 className="text-2xl md:text-4xl font-black mb-3 tracking-tight leading-[1.05]">
              ¿Cuánto te cuesta el <span className="text-accent">trabajo manual?</span>
            </h2>
            <p className="text-white/55 text-sm font-medium mb-8 leading-relaxed max-w-md">
              Ajusta los parámetros para auditar el capital que pierdes en procesos sin IA.
            </p>

            <div className="space-y-4 w-full">
              {/* Hours */}
              <div className="p-5 rounded-2xl bg-[#0F1424] border border-white/5">
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center gap-2">
                    <Timer className="h-3.5 w-3.5 text-white/40" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-white/50">Horas / semana</span>
                  </div>
                  <span className="text-xl font-black text-accent tabular-nums">{hours[0]}h</span>
                </div>
                <Slider
                  value={hours}
                  onValueChange={setHours}
                  max={100}
                  step={1}
                  className="[&_[role=slider]]:bg-accent [&_[role=slider]]:border-none [&_[role=slider]]:shadow-[0_0_12px_rgba(251,191,36,0.5)]"
                />
              </div>

              {/* Cost */}
              <div className="p-5 rounded-2xl bg-[#0F1424] border border-white/5">
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center gap-2">
                    <Euro className="h-3.5 w-3.5 text-white/40" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-white/50">Coste / hora</span>
                  </div>
                  <span className="text-xl font-black text-accent tabular-nums">{cost[0]}€</span>
                </div>
                <Slider
                  value={cost}
                  onValueChange={setCost}
                  max={200}
                  step={5}
                  className="[&_[role=slider]]:bg-accent [&_[role=slider]]:border-none [&_[role=slider]]:shadow-[0_0_12px_rgba(251,191,36,0.5)]"
                />
              </div>
            </div>
          </div>

          {/* Right: Results */}
          <motion.div
            key={monthlySavings}
            initial={{ scale: 0.97, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="p-6 md:p-8 rounded-3xl bg-accent text-black shadow-[0_20px_60px_-20px_rgba(251,191,36,0.5)] relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-60 h-60 bg-white/20 rounded-full -mr-32 -mt-32 blur-3xl opacity-50" />

            <div className="flex items-center gap-2 mb-4 opacity-50">
              <Activity className="h-3 w-3 animate-pulse" />
              <span className="text-[9px] font-black uppercase tracking-[0.3em]">ROI Projection</span>
            </div>

            <div className="mb-6">
              <span className="text-5xl md:text-7xl font-black tracking-tight block leading-none mb-2 tabular-nums">{monthlySavings}€</span>
              <span className="text-[11px] font-black uppercase tracking-[0.2em] opacity-60">Ahorro mensual proyectado</span>
            </div>

            <div className="p-4 rounded-2xl bg-black/10 border border-black/5 mb-4">
              <div className="flex items-baseline justify-between">
                <span className="text-[10px] font-black uppercase tracking-widest opacity-50">Capital anual</span>
                <span className="text-xl font-black tabular-nums">{yearlySavings.toLocaleString()}€</span>
              </div>
            </div>

            <Button className="w-full h-12 text-[11px] font-black uppercase tracking-[0.25em] bg-black text-white hover:bg-white hover:text-black rounded-xl border-none active:scale-95 transition-all">
              Recuperar tiempo ahora
            </Button>
            <p className="text-center text-[9px] font-bold uppercase tracking-widest opacity-40 mt-3">Basado en modelos SOTA (GPT-4o · Claude)</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
