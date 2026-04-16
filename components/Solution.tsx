"use client"

import { motion } from "framer-motion"
import { Database, Zap, Cpu, Search, CheckCircle2 } from "lucide-react"

const stack = [
  {
    icon: <Database className="h-5 w-5 text-blue-400" />,
    name: "n8n",
    label: "Motor Central",
    desc: "El cerebro que conecta más de 400 herramientas sin límites de tareas ni licencias abusivas."
  },
  {
    icon: <Cpu className="h-5 w-5 text-purple-400" />,
    name: "Claude & Gemini",
    label: "IA Cognitiva",
    desc: "Análisis crítico de documentos legales, médicos y técnicos con razonamiento humano."
  },
  {
    icon: <Search className="h-5 w-5 text-green-400" />,
    name: "Perplexity",
    label: "Búsqueda RTS",
    desc: "Informa tus procesos con datos extraídos de la web en tiempo real y fuentes citadas."
  }
]

export default function Solution() {
  return (
    <section id="soluciones" className="py-20 md:py-24 bg-white relative overflow-hidden text-foreground">
        {/* Subtle Glow Effects */}
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/5 rounded-full blur-[100px]" />
        
      <div className="container px-6 mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-3xl md:text-6xl font-black mb-6 md:mb-8 leading-[1.1] tracking-tight">
              La empresa de IA en Barcelona que acompaña tu <span className="text-secondary">crecimiento 24/7</span>.
            </h2>

            <div className="space-y-6 mb-10 md:mb-12 text-foreground/70 text-lg leading-relaxed font-medium max-w-2xl mx-auto lg:mx-0">
                <p>
                    En <strong>AutoProcessX</strong> somos especialistas en <strong>inteligencia artificial para empresas</strong> en Barcelona. Combinamos automatización de procesos, aplicaciones IA corporativas y chatbots personalizados.
                </p>
                <p>
                    Analizamos tus procesos para implementar la solución más efectiva: desde <strong>workflow automation con n8n</strong> hasta <strong>sistemas multi agent systems</strong> entrenados con tus propios datos.
                </p>
            </div>

            <ul className="space-y-6 md:space-y-8 mb-10 md:mb-12 text-left w-full max-w-2xl mx-auto lg:mx-0">
                {[
                    {
                        title: "Automatización de Procesos",
                        desc: "Diseñamos sistemas de workflow automation que eliminan el 80% de tareas repetitivas."
                    },
                    {
                        title: "IA para Empresas a Medida",
                        desc: "Desarrollamos aplicaciones empresariales con arquitectura RAG y LLMs entrenados con tus datos."
                    },
                    {
                        title: "AI Chatbot & Marketing",
                        desc: "Implementamos chatbots inteligentes para WhatsApp y web que cualifican prospectos 24/7."
                    }
                ].map((item, i) => (
                    <li key={i} className="flex items-start gap-4">
                        <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                        <div>
                            <span className="font-bold text-foreground block mb-1 text-lg">{item.title}</span>
                            <span className="text-foreground/60 text-base font-medium leading-relaxed">{item.desc}</span>
                        </div>
                    </li>
                ))}
            </ul>
          </div>

          <div className="flex-1 w-full grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            {stack.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`p-8 md:p-10 rounded-[32px] md:rounded-[40px] bg-muted border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col items-center text-center sm:items-start sm:text-left ${index === 1 ? 'sm:mt-12' : ''}`}
              >
                <div className="mb-6 p-4 rounded-2xl bg-white shadow-sm text-primary w-fit">
                    {item.icon}
                </div>
                <div className="mb-2 text-[10px] font-black tracking-[0.15em] text-foreground/40 uppercase">{item.label}</div>
                <div className="mb-4 text-2xl font-black text-foreground tracking-tight">{item.name}</div>
                <p className="text-foreground/60 text-sm leading-relaxed font-medium">
                    {item.desc}
                </p>
              </motion.div>
            ))}
            <div className="p-8 md:p-10 rounded-[32px] md:rounded-[40px] bg-primary text-white flex flex-col justify-center items-center text-center shadow-lg shadow-primary/20">
                <Zap className="h-10 w-10 text-white mb-6" />
                <div className="text-white/80 font-bold mb-2 uppercase tracking-widest text-xs">Resultado Final</div>
                <div className="text-3xl md:text-4xl font-black tracking-tighter">Impacto Real</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
