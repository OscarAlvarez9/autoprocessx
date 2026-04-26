"use client"

import { motion } from "framer-motion"
import { Database, Zap, Cpu, Search, CheckCircle2, LayoutPanelLeft } from "lucide-react"

const stack = [
  {
    icon: <Database className="h-5 w-5 text-primary" />,
    name: "n8n Core",
    label: "Orquestador Real-Time",
    desc: "Infraestructura robusta sin límites de tareas ni costes ocultos por ejecución."
  },
  {
    icon: <Cpu className="h-5 w-5 text-secondary" />,
    name: "Custom Agentic AI",
    label: "Cerebro Cognitivo",
    desc: "Sistemas multi-agente que razonan, deciden y operan sobre tus propios datos."
  },
  {
    icon: <Search className="h-5 w-5 text-accent" />,
    name: "Blueprint Architect",
    label: "Diseño Estructural",
    desc: "No configuramos herramientas; diseñamos la arquitectura técnica de tu negocio."
  }
]

export default function Solution() {
  return (
    <section id="soluciones" className="py-24 md:py-40 bg-[#0F1424] relative overflow-hidden text-white">
        {/* Blueprint Grid Overlay */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)', backgroundSize: '50px 50px' }} />
        
        {/* Subtle Glows */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px] -z-10" />

      <div className="container px-6 mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-32 items-center">
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/40 text-[9px] font-black uppercase tracking-widest mb-8">
              <LayoutPanelLeft className="h-3 w-3" /> System Architecture
            </div>
            
            <h2 className="text-4xl md:text-7xl font-black mb-8 leading-[0.9] tracking-tighter">
              Acompañamiento técnico para <span className="text-primary italic">líderes de mercado.</span>
            </h2>

            <p className="text-white/50 text-lg md:text-xl font-medium mb-12 max-w-2xl leading-tight">
                Diseñamos ecosistemas digitales donde la IA no es un plugin, es el sistema operativo. <span className="text-white">Ingeniería pura aplicada a la rentabilidad.</span>
            </p>

            <div className="grid grid-cols-1 gap-6 mb-12">
                {[
                    {
                        title: "Infraestructuras Escalables",
                        desc: "Nuestros sistemas están preparados para procesar millones de datos sin degradación."
                    },
                    {
                        title: "Gobierno de Datos & Privacidad",
                        desc: "Tu información nunca sale de tu infraestructura controlada. Tú eres el dueño."
                    }
                ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4 p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm">
                        <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                        <div>
                            <span className="font-black text-white block mb-1 text-base uppercase tracking-tight">{item.title}</span>
                            <span className="text-white/40 text-sm font-medium leading-relaxed">{item.desc}</span>
                        </div>
                    </div>
                ))}
            </div>
          </div>

          <div className="flex-1 w-full grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            {stack.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`p-10 rounded-[48px] bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-all duration-500 group ${index === 1 ? 'sm:mt-12' : ''}`}
              >
                <div className="mb-6 p-4 rounded-3xl bg-white/10 text-white shadow-xl group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-500 w-fit">
                    {item.icon}
                </div>
                <div className="mb-2 text-[9px] font-black tracking-[0.2em] text-white/30 uppercase">{item.label}</div>
                <div className="mb-4 text-2xl font-black text-white tracking-tight">{item.name}</div>
                <p className="text-white/40 text-xs leading-relaxed font-medium">
                    {item.desc}
                </p>
              </motion.div>
            ))}
            <div className="p-10 rounded-[48px] bg-primary text-white flex flex-col justify-center items-center text-center shadow-2xl shadow-primary/20 group relative overflow-hidden">
                <motion.div 
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 opacity-10 bg-[radial-gradient(circle,rgba(255,255,255,0.2)_1px,transparent_1px)] bg-[size:20px_20px]" 
                />
                <Zap className="h-10 w-10 text-white mb-6 relative z-10" />
                <div className="text-white/60 font-black mb-2 uppercase tracking-widest text-[9px] relative z-10">Status: Optimized</div>
                <div className="text-3xl font-black tracking-tighter relative z-10">Crecimiento Técnico</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
