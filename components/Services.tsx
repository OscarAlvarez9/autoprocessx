"use client"

import { motion } from "framer-motion"
import { Search, Rocket, GraduationCap, CheckCircle2 } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"


export default function Services() {
  return (
    <section id="servicios" className="py-32 bg-white text-foreground overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-24 max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-7xl font-black mb-8 tracking-tighter leading-none">Servicios de <span className="text-secondary italic">IA para Empresas</span>.</h2>
            <p className="text-foreground/50 text-xl font-medium leading-relaxed">Tres líneas de servicio complementarias: automatización de procesos, aplicaciones IA corporativas y chatbots con inteligencia artificial. Todo para escalar tu empresa sin escalar el equipo.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Servicio 01: Automatización */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group relative p-12 rounded-[56px] bg-secondary text-white transition-all flex flex-col items-center text-center shadow-2xl hover:-translate-y-2 border border-white/10"
            >
                <div className="mb-10 p-6 rounded-3xl bg-white/10 text-white shadow-xl group-hover:scale-110 transition-all duration-500">
                    <Rocket className="h-10 w-10 text-white" />
                </div>
                <div className="px-4 py-1.5 rounded-full bg-white/20 text-white text-[10px] font-black uppercase tracking-widest mb-6 border border-white/10">Servicio 01</div>
                <h3 className="text-2xl font-black mb-6 tracking-tight">Automatización de Procesos</h3>
                <p className="text-white/70 mb-10 font-medium leading-relaxed text-sm">
                    Workflow automation con n8n. Diseñamos sistemas que eliminan tareas repetitivas, automatizan email marketing y conectan todos tus procesos empresariales.
                </p>
                <ul className="space-y-4 text-left w-full mb-12">
                    {["Automatización inteligente de procesos", "Workflow automation n8n", "Automatización email marketing"].map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-white/90 text-sm font-bold">
                            <CheckCircle2 className="h-4 w-4 text-white/60" /> {item}
                        </li>
                    ))}
                </ul>
                <div className="mt-auto w-full">
                    <Link href="/servicios/automatizaciones">
                        <Button className="w-full bg-white text-secondary hover:text-secondary/80 hover:bg-white/90 h-14 rounded-2xl font-black transition-all border-none shadow-xl">Ver Automatizaciones</Button>
                    </Link>
                </div>
            </motion.div>

            {/* Servicio 02: Aplicaciones IA */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 }}
                className="group relative p-12 rounded-[56px] bg-slate-900 text-white transition-all flex flex-col items-center text-center shadow-sm hover:shadow-2xl hover:-translate-y-2 border border-white/10"
            >
                <div className="mb-10 p-6 rounded-3xl bg-white/10 text-white shadow-xl group-hover:scale-110 transition-all duration-500">
                    <Search className="h-10 w-10 text-white" />
                </div>
                <div className="px-4 py-1.5 rounded-full bg-white/20 text-white text-[10px] font-black uppercase tracking-widest mb-6 border border-white/10">Servicio 02</div>
                <h3 className="text-2xl font-black mb-6 tracking-tight">Aplicaciones IA para Empresas</h3>
                <p className="text-white/70 mb-10 font-medium leading-relaxed text-sm">
                    Inteligencia artificial para empresas con arquitectura RAG. Agentes autónomos entrenados con tus documentos. Multi agent systems y LLMs privados.
                </p>
                <ul className="space-y-4 text-left w-full mb-12">
                    {["Arquitectura RAG empresarial", "Multi agent systems", "LLMs entrenados con tus datos"].map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-white/90 text-sm font-bold">
                            <CheckCircle2 className="h-4 w-4 text-white/60" /> {item}
                        </li>
                    ))}
                </ul>
                <div className="mt-auto w-full">
                    <Link href="/servicios/aplicaciones-ia">
                        <Button className="w-full bg-white text-slate-900 hover:text-slate-900/80 hover:bg-white/90 h-14 rounded-2xl font-black transition-all border-none shadow-xl">Ver Aplicaciones IA</Button>
                    </Link>
                </div>
            </motion.div>

            {/* Servicio 03: AI Chatbot */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="group relative p-12 rounded-[56px] bg-primary text-white transition-all flex flex-col items-center text-center shadow-sm hover:shadow-2xl hover:-translate-y-2 border border-white/10"
            >
                <div className="mb-10 p-6 rounded-3xl bg-white/10 text-white shadow-xl group-hover:scale-110 transition-all duration-500">
                    <GraduationCap className="h-10 w-10 text-white" />
                </div>
                <div className="px-4 py-1.5 rounded-full bg-white/20 text-white text-[10px] font-black uppercase tracking-widest mb-6 border border-white/10">Servicio 03</div>
                <h3 className="text-2xl font-black mb-6 tracking-tight">AI Chatbot Personalizado</h3>
                <p className="text-white/70 mb-10 font-medium leading-relaxed text-sm">
                    AI chatbot para web y WhatsApp que cualifica prospectos y cierra ventas 24/7. Automatización email marketing e IA en marketing digital integrados.
                </p>
                <ul className="space-y-4 text-left w-full mb-12">
                    {["AI online chat para tu web", "Chatbot WhatsApp personalizado", "IA en marketing y email"].map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-white/90 text-sm font-bold">
                            <CheckCircle2 className="h-4 w-4 text-white/60" /> {item}
                        </li>
                    ))}
                </ul>
                <div className="mt-auto w-full">
                    <Link href="/servicios/ai-chatbot">
                        <Button className="w-full bg-white text-primary hover:text-primary/80 hover:bg-white/90 h-14 rounded-2xl font-black transition-all border-none shadow-xl">Ver AI Chatbot</Button>
                    </Link>
                </div>
            </motion.div>
        </div>
      </div>
    </section>
  )
}
