"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { HelpCircle, Activity } from "lucide-react"

const faqs = [
  {
    q: "¿Qué es la ingeniería de plataformas aplicada?",
    a: "Es la evolución de la automatización simple. No solo conectamos apps; diseñamos la infraestructura técnica (pipelines, estados, redundancia) que orquesta tu empresa mediante n8n y arquitecturas IA personalizadas."
  },
  {
    q: "¿Qué nivel de seguridad ofrecen sus despliegues?",
    a: "Desplegamos en entornos controlados con privacidad empresarial de primer nivel. Tus datos nunca se usan para entrenamiento público (Zero Retention policies) y cumplimos con protocolos AES-256 de cifrado."
  },
  {
    q: "¿Cuál es el ROI esperado de una arquitectura RAG?",
    a: "Sistemas RAG (Retrieval-Augmented Generation) reducen los tiempos de respuesta técnica en un 70% y eliminan errores de alucinación, permitiendo que tu equipo se enfoque en decisiones de alto valor en lugar de búsqueda de datos."
  },
  {
    q: "¿Cuánto tarda el despliegue de un pipeline crítico?",
    a: "Un stack de producción estándar se despliega en 10-15 días. Sistemas multi-agente complejos requieren un ciclo de despliegue de 4 a 6 semanas, incluyendo fase de QA y ajuste fino."
  },
  {
    q: "¿Por qué n8n y no Zapier o Make?",
    a: "n8n permite control total sobre el código, autohospedaje para máxima privacidad, escalabilidad técnica sin límites de 'tareas' y una orquestación mucho más compleja y robusta que las herramientas 'no-code' superficiales."
  }
]

export default function FAQ() {
  return (
    <section id="faq" className="py-32 bg-[#0F1424] border-y border-white/5 relative overflow-hidden">
      <div className="container relative z-10 px-6 mx-auto max-w-4xl">
        <div className="flex flex-col items-center text-center mb-20">
          <div className="flex items-center gap-4 mb-8">
              <div className="h-[2px] w-12 bg-accent opacity-50" />
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-white/40">Knowledge Base</span>
          </div>
          <h2 className="text-4xl md:text-7xl font-black text-white mb-10 tracking-tighter uppercase leading-none italic">
                Soporte <br /><span className="text-accent">Ingeniería.</span>
          </h2>
          <p className="text-white/60 text-xl font-medium leading-[1.2] max-w-2xl italic">
            Documentación técnica sobre despliegue, seguridad y arquitectura de nuestras plataformas inteligentes.
          </p>
        </div>
        
        <Accordion type="single" collapsible className="w-full space-y-6">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-white/5 px-10 rounded-[32px] bg-[#0F1424] border transition-all group overflow-hidden hover:border-accent/30 shadow-2xl">
              <AccordionTrigger className="text-white hover:text-accent text-left font-black py-8 transition-colors no-underline hover:no-underline text-xl uppercase tracking-tighter flex gap-6 italic">
                <span className="text-accent/40 group-hover:text-accent transition-colors shrink-0">0{i+1}</span>
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-white/60 leading-[1.4] pb-10 font-medium italic text-lg border-t border-white/5 pt-8">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-20 flex justify-center items-center gap-6 opacity-10">
            <Activity className="h-6 w-6" />
            <div className="h-[1px] w-32 bg-white" />
            <HelpCircle className="h-6 w-6" />
            <div className="h-[1px] w-32 bg-white" />
            <Activity className="h-6 w-6" />
        </div>
      </div>
    </section>
  )
}
