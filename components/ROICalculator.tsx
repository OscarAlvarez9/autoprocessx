"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"
import { Calculator, Euro, Timer } from "lucide-react"

export default function ROICalculator() {
  const [hours, setHours] = useState([20])
  const [cost, setCost] = useState([40])

  const yearlySavings = hours[0] * cost[0] * 52
  const monthlySavings = (yearlySavings / 12).toFixed(0)

  return (
    <section className="py-20 md:py-32 bg-white text-foreground overflow-hidden">
      <div className="container px-6 mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            {/* Left side: Inputs */}
            <div className="w-full lg:w-1/2 flex flex-col items-center text-center lg:items-start lg:text-left">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 mb-8">
                    <Calculator className="h-4 w-4 text-secondary" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-secondary">Calculadora de Impacto ROI</span>
                </div>
                <h2 className="text-3xl md:text-6xl font-black mb-6 md:mb-8 tracking-tighter leading-none">
                    ¿Cuánto te cuesta <br />el <span className="text-primary italic">trabajo manual</span>?
                </h2>
                <p className="text-foreground/50 text-lg md:text-xl font-medium mb-10 md:mb-12 leading-relaxed max-w-xl">
                    Ajusta los valores para ver cuánto dinero está perdiendo tu empresa por no tener una infraestructura IA escalable.
                </p>

                <div className="space-y-10 md:space-y-12 w-full max-w-md lg:max-w-none">
                    {/* Hours logic */}
                    <div className="space-y-6">
                        <div className="flex justify-between items-end">
                            <div className="flex items-center gap-3">
                                <Timer className="h-5 w-5 text-primary" />
                                <span className="font-black uppercase text-[10px] md:text-xs tracking-widest opacity-40">Horas manuales / sem</span>
                            </div>
                            <span className="text-2xl md:text-3xl font-black text-primary">{hours[0]}h</span>
                        </div>
                        <Slider 
                            value={hours} 
                            onValueChange={setHours} 
                            max={100} 
                            step={1} 
                            className="[&_[role=slider]]:bg-primary"
                        />
                    </div>

                    {/* Cost logic */}
                    <div className="space-y-6">
                        <div className="flex justify-between items-end">
                            <div className="flex items-center gap-3">
                                <Euro className="h-5 w-5 text-primary" />
                                <span className="font-black uppercase text-[10px] md:text-xs tracking-widest opacity-40">Coste operativo / h</span>
                            </div>
                            <span className="text-2xl md:text-3xl font-black text-primary">{cost[0]}€</span>
                        </div>
                        <Slider 
                            value={cost} 
                            onValueChange={setCost} 
                            max={200} 
                            step={5} 
                            className="[&_[role=slider]]:bg-primary"
                        />
                    </div>
                </div>
            </div>

            {/* Right side: Results */}
            <div className="w-full lg:w-1/2">
                <motion.div 
                    key={monthlySavings}
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="p-10 md:p-20 rounded-[40px] md:rounded-[80px] bg-primary text-white shadow-2xl shadow-primary/40 relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl opacity-50" />
                    
                    <p className="text-[10px] font-black uppercase tracking-[0.3em] md:tracking-[0.4em] mb-10 md:mb-12 opacity-50 text-center">Ahorro Potencial Estimado</p>
                    
                    <div className="text-center mb-10 md:mb-16">
                        <span className="text-7xl md:text-9xl font-black tracking-tighter block leading-none">{monthlySavings}€</span>
                        <span className="text-lg md:text-xl font-medium opacity-60">al mes / {yearlySavings.toLocaleString()}€ al año</span>
                    </div>

                    <div className="space-y-6">
                        <Button size="lg" className="w-full h-16 md:h-20 text-lg md:text-xl font-black bg-white text-primary hover:bg-white/90 rounded-2xl md:rounded-3xl border-none shadow-xl shadow-white/10 active:scale-95 transition-all">
                            Recuperar tiempo ahora
                        </Button>
                        <p className="text-center text-[9px] md:text-[10px] font-black uppercase tracking-widest opacity-30 italic">Basado en eficiencia IA del 95%</p>
                    </div>
                </motion.div>
            </div>
        </div>
      </div>
    </section>
  )
}
