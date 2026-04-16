"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    q: "¿Qué es la automatización inteligente?",
    a: "La automatización inteligente combina workflow automation (n8n, RPA) con inteligencia artificial. Los agentes IA entienden el contexto, toman decisiones y aprenden de tus datos."
  },
  {
    q: "¿Qué procesos se pueden automatizar?",
    a: "Cualquier tarea digital repetitiva: administración, email marketing, generación de informes, CRM, cualificación de leads y análisis de documentos complejos."
  },
  {
    q: "¿Cuánto cuesta implementar IA?",
    a: "Los proyectos suelen oscilar entre 2.500€ y 4.500€. Ofrecemos mantenimiento experto para asegurar que tus sistemas sigan optimizados a medida que creces."
  },
  {
    q: "¿Cuánto tarda estar en marcha?",
    a: "Un flujo crítico suele estar listo en 10-15 días. Sistemas complejos con arquitectura RAG pueden requerir entre 3 y 6 semanas."
  },
  {
    q: "¿Mis datos están seguros?",
    a: "Totalmente. Usamos infraestructura propia y modelos con privacidad empresarial. Tus datos nunca se usan para entrenar modelos públicos y cumplimos con GDPR."
  }
]

export default function FAQ() {
  return (
    <section id="faq" className="py-20 md:py-24 bg-background">
      <div className="container px-6 mx-auto max-w-3xl">
        <h2 className="text-3xl font-black text-foreground md:text-5xl mb-12 md:mb-16 text-center tracking-tight">
            Preguntas frecuentes sobre <span className="text-primary italic">IA para empresas</span>
        </h2>
        
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-gray-100 mb-4 px-4 md:px-6 rounded-3xl bg-muted/50 border overflow-hidden">
              <AccordionTrigger className="text-foreground hover:text-primary text-left font-bold py-6 md:py-8 transition-colors no-underline hover:no-underline text-base md:text-lg">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-foreground/60 leading-relaxed pb-6 md:pb-8 font-medium italic text-sm md:text-base">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
