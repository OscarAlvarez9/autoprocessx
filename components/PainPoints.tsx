"use client"

import { motion } from "framer-motion"
import { AlertCircle, Clock, Users, TrendingDown } from "lucide-react"

const pains = [
  {
    icon: <Clock className="h-6 w-6 text-red-400" />,
    title: "Horas perdidas",
    description: "Cada miembro de tu equipo directivo gasta una semana al mes en tareas mecánicas.",
    sector: "General"
  },
  {
    icon: <AlertCircle className="h-6 w-6 text-red-400" />,
    title: "Cuellos de Botella",
    description: "Analizar un caso legal o técnico toma días de lectura cuando podría tomar segundos.",
    sector: "Abogados / Consultoría"
  },
  {
    icon: <TrendingDown className="h-6 w-6 text-red-400" />,
    title: "Error Humano Caro",
    description: "Un error en la transcripción o en el CRM puede costar miles de euros y tu reputación.",
    sector: "Healthcare / Inmobiliario"
  },
  {
    icon: <Users className="h-6 w-6 text-red-400" />,
    title: "Escalabilidad Cero",
    description: "No puedes aceptar más clientes porque tu equipo de operaciones está al límite físico.",
    sector: "SaaS / Servicios"
  }
]

export default function PainPoints() {
  return (
    <section id="pains" className="py-24 bg-white text-foreground">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-20 max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-8">
            El coste oculto de <span className="text-primary">no automatizar</span>.
          </h2>
          <p className="max-w-2xl mx-auto text-foreground/60 text-xl font-medium leading-relaxed">
            Si tu empresa sigue con procesos manuales mientras la competencia usa inteligencia artificial para empresas, estás perdiendo competitividad cada semana.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pains.map((pain, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-10 rounded-[32px] bg-muted border border-transparent hover:border-primary/20 transition-all group"
            >
              <div className="mb-6 p-4 rounded-2xl bg-white shadow-md text-primary w-fit group-hover:scale-110 transition-transform">
                {pain.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 tracking-tight">{pain.title}</h3>
              <p className="text-foreground/60 text-sm mb-6 leading-relaxed font-medium">
                {pain.description}
              </p>
              <span className="text-[10px] font-black uppercase tracking-[0.1em] text-primary bg-primary/5 px-3 py-1.5 rounded-full border border-primary/10">
                Sector: {pain.sector}
              </span>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 p-10 rounded-[40px] bg-muted border border-gray-100 text-center">
            <p className="text-foreground text-xl font-bold">
                <span className="text-primary">Dato Real:</span> Recuperamos una media de <span className="text-3xl font-black tracking-tighter text-secondary">1.200€</span> en costes operativos por empleado <span className="text-foreground/50"> cada mes</span>.
            </p>
        </div>
      </div>
    </section>
  )
}
