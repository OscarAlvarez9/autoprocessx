"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    q: "¿Qué es la automatización inteligente de procesos?",
    a: "La automatización inteligente combina workflow automation (n8n, RPA) con inteligencia artificial para empresas. A diferencia de la automatización robótica de procesos clásica, los agentes IA entienden el contexto, toman decisiones y aprenden de tus datos en lugar de seguir reglas fijas."
  },
  {
    q: "¿Qué procesos se pueden automatizar con IA?",
    a: "Cualquier tarea repetitiva digital: automatización de procesos administrativos, email marketing, generación de informes, onboarding documental, gestión de CRM, cualificación de leads con AI chatbot, y análisis de documentos legales o técnicos con LLMs."
  },
  {
    q: "¿Cuánto cuesta implementar inteligencia artificial para mi empresa?",
    a: "Los proyectos de ia para empresas oscilan entre 2.500€ y 4.500€ según la complejidad. El mantenimiento recurrente (MRR) varía entre 500€ y 1.500€/mes para asegurar que tus agentes siempre estén optimizados."
  },
  {
    q: "¿Cuánto tarda estar en marcha la automatización?",
    a: "Un flujo de workflow automation crítico suele estar listo y testeado en 10 a 15 días laborales. Un sistema completo de aplicaciones IA con arquitectura RAG puede requerir entre 3 y 6 semanas."
  },
  {
    q: "¿Qué diferencia hay entre un AI chatbot y un chatbot convencional?",
    a: "Un AI chatbot usa procesamiento de lenguaje natural (NLP) e inteligencia artificial para entender la intención real del usuario, adaptarse al contexto y tomar decisiones. Un chatbot convencional solo sigue árboles de decisión fijos sin comprensión real."
  },
  {
    q: "¿Mis datos están seguros con vuestra IA empresarial?",
    a: "Totalmente. Usamos n8n en infraestructura propia y modelos LLM con privacidad empresarial (Zero Data Retention). Tus datos nunca se usan para entrenar modelos públicos. Cumplimos ISO 27001 y GDPR."
  }
]

export default function FAQ() {
  return (
    <section id="faq" className="py-24 bg-background">
      <div className="container px-4 mx-auto max-w-3xl">
        <h2 className="text-3xl font-black text-foreground md:text-5xl mb-16 text-center tracking-tight">
            Preguntas frecuentes sobre <span className="text-primary italic">IA para empresas</span>
        </h2>
        
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-gray-100 mb-4 px-6 rounded-3xl bg-muted/50 border overflow-hidden">
              <AccordionTrigger className="text-foreground hover:text-primary text-left font-bold py-8 transition-colors no-underline hover:no-underline">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-foreground/60 leading-relaxed pb-8 font-medium italic">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
