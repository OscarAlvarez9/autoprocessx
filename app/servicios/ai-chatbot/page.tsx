"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { SalesConversionGraphic } from "@/components/Graphics"
import ChatbotHero from "@/components/ChatbotHero"
import FAQ from "@/components/FAQ"
import JsonLd from "@/components/JsonLd"
import { chatbotFaqs } from "@/lib/faqs"
import { buildServiceSchema } from "@/lib/seo"

const chatbotServiceSchema = buildServiceSchema({
    slug: "/servicios/ai-chatbot",
    name: "Chatbots con IA para web y WhatsApp",
    description: "Chatbots con inteligencia artificial para web y WhatsApp en España. Atención al cliente automatizada 24/7 con agentes IA entrenados con tu base de conocimiento mediante RAG semántico, sin alucinaciones y con escalado a humanos cuando es necesario.",
    serviceType: "Conversational AI",
    offers: [
        { name: "Chatbot vendedor con cualificación BANT y agendado de demos" },
        { name: "Chatbot Q&A con RAG sobre documentación oficial" },
        { name: "Widget conversacional embebido para web" },
        { name: "WhatsApp Business API con plantillas y respuestas inteligentes" },
        { name: "Chatbot omnicanal Web + WhatsApp + Instagram + Telegram" },
        { name: "Integración con CRM, calendario y sistemas internos" },
    ],
})
import { useContactDrawer } from "@/context/ContactDrawerContext"
import { gtagEvent } from "@/lib/gtag"
import {
  ChevronRight,
  MessageSquare,
  MessageCircle,
  Laptop,
  Smartphone,
  Headphones,
  UserPlus,
  Euro,
  Zap,
  ArrowRight,
  Activity,
  Terminal,
  CheckCircle2,
  Sparkles,
  ShieldCheck
} from "lucide-react"

const channels = [
  {
    icon: <Laptop className="h-6 w-6" />,
    title: "AI Online Chat para tu Web",
    description: "Convierte tráfico en revenue con un AI online chat diseñado para vender. Supera objeciones en tiempo real.",
    tag: "Widget Vendedor",
  },
  {
    icon: <MessageCircle className="h-6 w-6" />,
    title: "Chatbot WhatsApp Business",
    description: "Lleva tu CRM al bolsillo del cliente. Un chatbot de WhatsApp que cualifica y negocia 24/7.",
    tag: "WhatsApp Business",
  },
  {
    icon: <Headphones className="h-6 w-6" />,
    title: "Automatización Email IA",
    description: "Secuencias de email marketing que reaccionan al comportamiento real del prospecto.",
    tag: "Email IA",
  },
  {
    icon: <Smartphone className="h-6 w-6" />,
    title: "IA en Marketing Digital",
    description: "Agentes que generan copias, segmentan audiencias y optimizan campañas de forma autónoma.",
    tag: "Marketing IA",
  },
]

const capabilities = [
  {
    icon: <UserPlus className="h-6 w-6 text-accent" />,
    title: "Cualificación BANT",
    description: "Filtros automáticos que solo envían prospectos con presupuesto y autoridad a tu equipo.",
  },
  {
    icon: <Euro className="h-6 w-6 text-accent" />,
    title: "Venta Latente",
    description: "Cerrar pedidos y agendar llamadas mientras tu equipo técnico opera en otros frentes.",
  },
  {
    icon: <Zap className="h-6 w-6 text-accent" />,
    title: "Escalado High-Ticket",
    description: "Detección de intención de compra para transferencia inmediata de leads de alto valor.",
  },
]

export default function AIChatbotPage() {
  const { openDrawer } = useContactDrawer()
  return (
    <main className="min-h-screen bg-[#05070F] text-white selection:bg-primary/20">
      <Navigation />

      <JsonLd data={chatbotServiceSchema} />
      <ChatbotHero />

      {/* Two Chatbot Types — Sales vs Q&A */}
      <section id="canales" className="py-16 md:py-32 bg-[#05070F] relative overflow-hidden border-t border-white/5">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/[0.06] blur-[160px] rounded-full pointer-events-none" />

        <div className="container px-6 mx-auto relative z-10">
          {/* Header */}
          <div className="max-w-3xl mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[9px] font-black uppercase tracking-widest mb-6">
              <MessageCircle className="h-3 w-3" /> Dos arquitecturas · Un mismo motor
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-7xl font-black tracking-tighter leading-tight md:leading-[0.9] mb-4 md:mb-6">
              Dos chatbots <br/>
              <span className="text-primary italic">para dos misiones.</span>
            </h2>
            <p className="text-white/55 text-base md:text-lg font-medium leading-relaxed max-w-2xl">
              Ambos extraen el conocimiento de tu empresa y se ciñen a él. Disponibles con IA generativa para conversaciones libres o sin IA con flujos guiados predefinidos — tú decides el nivel de inteligencia y el coste.
            </p>
          </div>

          {/* Two cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 mb-12 md:mb-16">
            {/* Sales bot */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative p-6 md:p-10 rounded-3xl md:rounded-[40px] bg-gradient-to-br from-primary/[0.08] to-transparent border border-primary/30 overflow-hidden shadow-[0_0_60px_-20px_rgba(15,71,175,0.4)]"
            >
              <div className="absolute -top-20 -right-20 w-60 h-60 bg-primary/15 blur-[120px] rounded-full pointer-events-none" />
              <div className="relative">
                <div className="flex items-center justify-between mb-6">
                  <div className="h-12 w-12 md:h-14 md:w-14 rounded-2xl bg-primary/15 border border-primary/30 flex items-center justify-center text-primary">
                    <Euro className="h-6 w-6 md:h-7 md:w-7" />
                  </div>
                  <span className="text-[9px] font-black uppercase tracking-[0.3em] text-primary/70">01 · Sales Bot</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-black tracking-tight text-white mb-3">
                  Procesar Ventas
                </h3>
                <p className="text-[10px] font-black uppercase tracking-[0.25em] text-primary/80 mb-4">
                  Conversion · BANT · Lead Routing
                </p>
                <p className="text-white/55 text-sm md:text-base font-medium leading-relaxed mb-6">
                  Convierte tráfico en revenue. Cualifica al visitante, supera objeciones, agenda demos y transfiere leads de alto valor a tu equipo en tiempo real.
                </p>
                <ul className="space-y-2.5">
                  {[
                    "Cualificación BANT automática",
                    "Detección de intención de compra",
                    "Agenda directa en tu calendario",
                    "Handoff a humano en leads críticos",
                    "Tracking de conversión nativo",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-white/70">
                      <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <span className="font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Q&A / Support bot */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="relative p-6 md:p-10 rounded-3xl md:rounded-[40px] bg-gradient-to-br from-accent/[0.08] to-transparent border border-accent/30 overflow-hidden shadow-[0_0_60px_-20px_rgba(251,191,36,0.4)]"
            >
              <div className="absolute -top-20 -left-20 w-60 h-60 bg-accent/15 blur-[120px] rounded-full pointer-events-none" />
              <div className="relative">
                <div className="flex items-center justify-between mb-6">
                  <div className="h-12 w-12 md:h-14 md:w-14 rounded-2xl bg-accent/15 border border-accent/30 flex items-center justify-center text-accent">
                    <MessageSquare className="h-6 w-6 md:h-7 md:w-7" />
                  </div>
                  <span className="text-[9px] font-black uppercase tracking-[0.3em] text-accent/70">02 · Support Bot</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-black tracking-tight text-white mb-3">
                  Resolver Dudas
                </h3>
                <p className="text-[10px] font-black uppercase tracking-[0.25em] text-accent/80 mb-4">
                  Q&A · RAG · Knowledge Base
                </p>
                <p className="text-white/55 text-sm md:text-base font-medium leading-relaxed mb-6">
                  Asistente que responde cualquier pregunta sobre tu producto, servicio o documentación con precisión absoluta. Sin alucinaciones — todo basado en tu base de conocimiento.
                </p>
                <ul className="space-y-2.5">
                  {[
                    "Responde con citación de fuente",
                    "Vectoriza tu web, FAQs y docs",
                    "Soporte 24/7 sin saturación",
                    "Escalado a humano si no sabe",
                    "Aprende de cada conversación",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-white/70">
                      <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                      <span className="font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>

          {/* Comparison Table — Mobile cards */}
          <div className="md:hidden space-y-3">
            {[
              { feature: "Información de tu empresa", sales: "Sí · Vectorizada", qa: "Sí · Vectorizada" },
              { feature: "Modo sin IA (guiado)", sales: "Flujos BANT predefinidos", qa: "FAQs & árbol de decisión" },
              { feature: "Modo con IA generativa", sales: "Negociación dinámica", qa: "Respuesta libre con RAG" },
              { feature: "Memoria de conversación", sales: "Opcional · Por sesión o usuario", qa: "Opcional · Por sesión o usuario" },
              { feature: "Objetivo principal", sales: "Convertir lead → venta", qa: "Resolver duda 24/7" },
              { feature: "Handoff humano", sales: "En lead cualificado", qa: "Si no encuentra respuesta" },
              { feature: "Coste relativo", sales: "Medio · ROI directo", qa: "Bajo · Soporte escalable" },
            ].map((row, i) => (
              <div key={i} className="rounded-2xl border border-white/10 bg-white/[0.02] overflow-hidden">
                <div className="px-5 py-3 border-b border-white/5 text-[10px] font-black uppercase tracking-[0.25em] text-white/50">
                  {row.feature}
                </div>
                <div className="grid grid-cols-2 divide-x divide-white/5">
                  <div className="p-4 bg-primary/[0.04]">
                    <div className="text-[9px] font-black uppercase tracking-[0.25em] text-primary/80 mb-2 flex items-center gap-1.5">
                      <Euro className="h-3 w-3" /> Sales
                    </div>
                    <span className="text-white text-sm font-bold leading-tight">{row.sales}</span>
                  </div>
                  <div className="p-4 bg-accent/[0.04]">
                    <div className="text-[9px] font-black uppercase tracking-[0.25em] text-accent/80 mb-2 flex items-center gap-1.5">
                      <MessageSquare className="h-3 w-3" /> Support
                    </div>
                    <span className="text-white text-sm font-bold leading-tight">{row.qa}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Comparison Table — Desktop */}
          <div className="hidden md:block max-w-5xl mx-auto rounded-[32px] border border-white/10 bg-white/[0.02] overflow-hidden backdrop-blur-xl">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="text-[10px] font-black uppercase tracking-[0.3em]">
                  <th className="p-6 md:p-8 border-b border-white/10 text-white/40">Característica</th>
                  <th className="p-6 md:p-8 border-b border-white/10 text-primary relative">
                    <div className="absolute inset-0 bg-primary/5" />
                    <span className="relative z-10 flex items-center gap-2.5">
                      <Euro className="h-3.5 w-3.5" /> Sales Bot
                    </span>
                  </th>
                  <th className="p-6 md:p-8 border-b border-white/10 text-accent relative">
                    <div className="absolute inset-0 bg-accent/5" />
                    <span className="relative z-10 flex items-center gap-2.5">
                      <MessageSquare className="h-3.5 w-3.5" /> Support Bot
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: "Información de tu empresa", sales: "Sí · Vectorizada", qa: "Sí · Vectorizada" },
                  { feature: "Modo sin IA (guiado)", sales: "Flujos BANT predefinidos", qa: "FAQs & árbol de decisión" },
                  { feature: "Modo con IA generativa", sales: "Negociación dinámica", qa: "Respuesta libre con RAG" },
                  { feature: "Memoria de conversación", sales: "Opcional · Por sesión o usuario", qa: "Opcional · Por sesión o usuario" },
                  { feature: "Objetivo principal", sales: "Convertir lead → venta", qa: "Resolver duda 24/7" },
                  { feature: "Handoff humano", sales: "En lead cualificado", qa: "Si no encuentra respuesta" },
                  { feature: "Aprendizaje continuo", sales: "De objeciones cerradas", qa: "De preguntas reales" },
                  { feature: "Integraciones", sales: "CRM · Calendar · Email", qa: "Helpdesk · Docs · Slack" },
                  { feature: "Coste relativo", sales: "Medio · ROI directo", qa: "Bajo · Soporte escalable" },
                ].map((row, i) => (
                  <tr key={i} className="border-b border-white/5 last:border-0 hover:bg-white/[0.02] transition-colors group">
                    <td className="p-6 md:p-8 text-white/70 font-bold text-sm">{row.feature}</td>
                    <td className="p-6 md:p-8 relative">
                      <div className="absolute inset-0 bg-primary/[0.03] border-x border-primary/10" />
                      <div className="relative flex items-center gap-2.5">
                        <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                        <span className="text-white font-black tracking-tight text-sm md:text-base">
                          {row.sales}
                        </span>
                      </div>
                    </td>
                    <td className="p-6 md:p-8 relative">
                      <div className="absolute inset-0 bg-accent/[0.03] border-x border-accent/10" />
                      <div className="relative flex items-center gap-2.5">
                        <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />
                        <span className="text-white font-black tracking-tight text-sm md:text-base">
                          {row.qa}
                        </span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Note */}
          <div className="mt-10 md:mt-14 text-center">
            <p className="text-white/40 text-sm font-medium max-w-2xl mx-auto">
              <span className="text-accent font-black">Los dos pueden funcionar con o sin IA.</span> Si arrancas sin IA tienes un bot guiado más rápido y barato. Si activas IA, ganas conversación libre con RAG sobre tu empresa — sin perder el control de las respuestas.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Bot Demo */}
      <ChatbotDemoSection />

      {/* Pricing Section */}
      <section className="py-16 md:py-32 bg-[#05070F] relative overflow-hidden border-t border-white/5">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-accent/[0.06] blur-[160px] rounded-full pointer-events-none" />

        <div className="container px-6 mx-auto relative z-10">
          {/* Header */}
          <div className="max-w-3xl mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-[9px] font-black uppercase tracking-widest mb-6">
              <Euro className="h-3 w-3" /> Pricing · Setup + Mensualidad
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-7xl font-black tracking-tighter leading-tight md:leading-[0.9] mb-4 md:mb-6">
              Tarifas <span className="text-accent italic">transparentes.</span>
            </h2>
            <p className="text-white/55 text-base md:text-lg font-medium leading-relaxed max-w-2xl">
              Setup inicial cubre implementación, entrenamiento y conexión a tus herramientas. La cuota mensual cubre hosting, mantenimiento, mejora de prompts y costes de IA. Sin sorpresas.
            </p>
          </div>

          {/* Pricing grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {[
              {
                tier: "Básico Reglas",
                tag: "Sin IA · Soporte",
                tagColor: "text-white/50",
                setup: "490€",
                monthly: "39€",
                desc: "Bot guiado por FAQs y árbol de decisión. Ideal para resolver dudas básicas y CTA a soporte humano.",
                features: [
                  "Flujos predefinidos",
                  "FAQs ilimitadas",
                  "Captura de email/teléfono",
                  "Hosting + mantenimiento",
                  "Soporte por email",
                ],
                accent: "white/10",
                highlight: false,
              },
              {
                tier: "Ventas Reglas + Calendario",
                tag: "Sin IA · Ventas",
                tagColor: "text-primary",
                setup: "790€",
                monthly: "59€",
                desc: "Bot de ventas con flujos BANT y agenda directa en tu calendario. Cualifica y captura sin coste por conversación.",
                features: [
                  "Cualificación BANT guiada",
                  "Agenda en Google/Outlook",
                  "Notificaciones a equipo",
                  "Integración con CRM básica",
                  "Tracking de conversión",
                ],
                accent: "primary/30",
                highlight: false,
              },
              {
                tier: "Soporte IA",
                tag: "Con IA · RAG",
                tagColor: "text-accent",
                setup: "1.490€",
                monthly: "99€",
                desc: "Asistente con IA generativa que responde cualquier pregunta sobre tu empresa con memoria y citación de fuente.",
                features: [
                  "RAG sobre tu documentación",
                  "Memoria por sesión/usuario",
                  "Cita la fuente exacta",
                  "Escalado a humano si no sabe",
                  "Mejora de prompts mensual",
                ],
                accent: "accent/40",
                highlight: true,
              },
              {
                tier: "Ventas IA + Memoria + E-commerce",
                tag: "Con IA · Premium",
                tagColor: "text-accent",
                setup: "2.490€",
                monthly: "149€",
                desc: "Plataforma completa: negociación dinámica, agenda inteligente, integración e-commerce/CRM y memoria por usuario.",
                features: [
                  "Negociación con IA + RAG",
                  "Memoria persistente por usuario",
                  "Embeddings de catálogo/CRM",
                  "Agenda inteligente",
                  "Integraciones e-commerce",
                ],
                accent: "accent/40",
                highlight: false,
              },
            ].map((plan, i) => (
              <motion.div
                key={plan.tier}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className={`relative rounded-3xl p-6 md:p-8 border overflow-hidden flex flex-col ${
                  plan.highlight
                    ? "bg-gradient-to-br from-accent/[0.1] to-transparent border-accent/40 shadow-[0_0_60px_-15px_rgba(251,191,36,0.4)]"
                    : "bg-white/[0.02] border-white/10 hover:border-accent/20 transition-all"
                }`}
              >
                {plan.highlight && (
                  <>
                    <div className="absolute -top-20 -right-20 w-48 h-48 bg-accent/15 blur-[100px] rounded-full pointer-events-none" />
                    <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-accent text-black text-[9px] font-black uppercase tracking-widest">
                      Más popular
                    </div>
                  </>
                )}

                <div className="relative">
                  <div className={`text-[9px] font-black uppercase tracking-[0.25em] mb-3 ${plan.tagColor}`}>
                    {plan.tag}
                  </div>
                  <h3 className="text-lg md:text-xl font-black tracking-tight text-white mb-4 leading-tight min-h-[3rem]">
                    {plan.tier}
                  </h3>

                  {/* Price block */}
                  <div className="mb-5 pb-5 border-b border-white/5">
                    <div className="flex items-baseline gap-2 mb-1">
                      <span className="text-3xl md:text-4xl font-black text-white tracking-tighter">
                        {plan.setup}
                      </span>
                      <span className="text-[10px] font-black uppercase tracking-widest text-white/40">
                        Setup
                      </span>
                    </div>
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-xl md:text-2xl font-black text-accent tracking-tighter">
                        {plan.monthly}
                      </span>
                      <span className="text-xs font-bold text-white/40">/mes</span>
                    </div>
                  </div>

                  <p className="text-white/55 text-xs md:text-sm font-medium leading-relaxed mb-5 min-h-[3.5rem]">
                    {plan.desc}
                  </p>

                  <ul className="space-y-2 mb-6 flex-1">
                    {plan.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-2 text-xs text-white/70">
                        <CheckCircle2 className={`h-3.5 w-3.5 shrink-0 mt-0.5 ${plan.highlight ? "text-accent" : "text-white/40"}`} />
                        <span className="font-medium leading-snug">{feat}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => {
                      gtagEvent("click_cta_to_form", {
                        event_category: "pricing",
                        event_label: `chatbot_${plan.tier.toLowerCase().replace(/\s+/g, "_")}`,
                        location: "chatbot_pricing",
                      })
                      openDrawer()
                    }}
                    className={`mt-auto w-full h-11 rounded-xl font-black uppercase tracking-[0.2em] text-[10px] transition-all active:scale-95 flex items-center justify-center gap-2 group ${
                      plan.highlight
                        ? "bg-accent text-black hover:bg-white shadow-lg shadow-accent/20"
                        : "bg-white/5 text-white border border-white/10 hover:bg-white/10 hover:border-accent/30"
                    }`}
                  >
                    Solicitar este plan
                    <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Footnote */}
          <div className="mt-10 md:mt-14 grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { icon: <CheckCircle2 className="h-4 w-4" />, title: "Setup en 1-3 semanas", desc: "Implementación, entrenamiento sobre tu empresa y conexión a tus herramientas." },
              { icon: <ShieldCheck className="h-4 w-4" />, title: "Sin permanencia", desc: "Cancela cuando quieras. El código y los flujos quedan tuyos." },
              { icon: <Sparkles className="h-4 w-4" />, title: "Build a medida", desc: "¿Necesitas integraciones específicas? Cotizamos a medida sobre la misma base." },
            ].map((item) => (
              <div key={item.title} className="flex gap-3 p-5 rounded-2xl bg-white/[0.02] border border-white/5">
                <div className="h-9 w-9 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent shrink-0">
                  {item.icon}
                </div>
                <div>
                  <div className="text-sm font-black text-white mb-1">{item.title}</div>
                  <div className="text-xs text-white/45 font-medium leading-relaxed">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* High-Impact Final CTA — Chatbots */}
      <section className="relative overflow-hidden py-20 md:py-32 bg-[#05070F] border-t border-white/5">
        {/* Background ambient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-primary/[0.07] blur-[160px] rounded-full pointer-events-none" />
        <div className="absolute -top-40 right-0 w-[500px] h-[500px] bg-accent/10 blur-[140px] rounded-full pointer-events-none" />
        <div className="absolute -bottom-40 left-0 w-[500px] h-[500px] bg-primary/10 blur-[140px] rounded-full pointer-events-none" />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            maskImage: "radial-gradient(ellipse 60% 60% at 50% 50%, black 30%, transparent 100%)",
            WebkitMaskImage: "radial-gradient(ellipse 60% 60% at 50% 50%, black 30%, transparent 100%)",
          }}
        />

        {/* Animated message bubbles in background */}
        {[
          { x: "10%", y: "20%", delay: 0 },
          { x: "85%", y: "25%", delay: 1.5 },
          { x: "12%", y: "75%", delay: 2.5 },
          { x: "82%", y: "70%", delay: 0.8 },
        ].map((pos, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: [0, 0.4, 0.4, 0], y: [0, -8, -8, -16] }}
            transition={{ duration: 5, delay: pos.delay, repeat: Infinity, ease: "easeInOut" }}
            className="absolute pointer-events-none hidden md:block"
            style={{ left: pos.x, top: pos.y }}
          >
            <div className="rounded-2xl rounded-bl-sm bg-white/[0.04] border border-white/[0.08] backdrop-blur-sm px-3 py-2 w-20">
              <div className="space-y-1">
                <div className="h-1 rounded-full bg-white/15 w-full" />
                <div className="h-1 rounded-full bg-white/15 w-2/3" />
              </div>
            </div>
          </motion.div>
        ))}

        {/* Scanning beam */}
        <motion.div
          className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent pointer-events-none"
          animate={{ top: ["0%", "100%"] }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          style={{ boxShadow: "0 0 20px rgba(15, 71, 175, 0.4)" }}
        />

        <div className="container relative z-10 px-6 mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Eyebrow */}
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="h-[1px] w-12 bg-primary/40" />
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-[10px] font-black uppercase tracking-[0.3em] backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-75 animate-ping" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                </span>
                Bot Live · 24/7 desde día 1
              </div>
              <div className="h-[1px] w-12 bg-primary/40" />
            </div>

            {/* Massive headline */}
            <h2 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.85] text-center mb-6 md:mb-8">
              Tu chatbot. <br />
              <span className="text-primary italic">Vendiendo en 14 días.</span>
            </h2>

            <p className="text-white/55 text-base md:text-xl font-medium leading-relaxed text-center max-w-2xl mx-auto mb-10 md:mb-14">
              Te entregamos el bot listo, entrenado sobre tu empresa, conectado a tu CRM o calendario. Sales o Support — con o sin IA — y siempre con código y datos bajo tu control.
            </p>

            {/* Big stats row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-12 md:mb-16">
              {[
                { value: "490€", label: "Desde", icon: <Sparkles className="h-4 w-4" /> },
                { value: "1-3w", label: "Time to deploy", icon: <Zap className="h-4 w-4" /> },
                { value: "70%+", label: "Consultas absorbidas", icon: <MessageSquare className="h-4 w-4" /> },
                { value: "24/7", label: "Disponibilidad", icon: <Activity className="h-4 w-4" /> },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="relative rounded-2xl md:rounded-3xl bg-white/[0.02] border border-white/10 hover:border-primary/30 transition-all p-4 md:p-6 group overflow-hidden"
                >
                  <div className="absolute top-3 right-3 text-primary/30 group-hover:text-primary transition-colors">
                    {stat.icon}
                  </div>
                  <div className="text-2xl md:text-4xl lg:text-5xl font-black text-white tracking-tighter mb-1 md:mb-2 group-hover:text-primary transition-colors">
                    {stat.value}
                  </div>
                  <div className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.25em] text-white/40">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 md:gap-4 mb-10 md:mb-14">
              <Button
                onClick={() => {
                  gtagEvent("click_cta_to_form", {
                    event_category: "cta",
                    event_label: "chatbot_quiero_bot",
                    location: "chatbot_final_cta",
                  })
                  openDrawer()
                }}
                className="group relative h-14 md:h-16 px-8 md:px-10 text-sm font-black tracking-wide bg-primary text-white hover:bg-white hover:text-black transition-all rounded-2xl shadow-[0_0_40px_-5px_rgba(15,71,175,0.6)] hover:shadow-[0_0_50px_-5px_rgba(15,71,175,0.8)] active:scale-95 overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2 uppercase tracking-[0.2em] text-xs md:text-sm">
                  <MessageCircle className="h-4 w-4" />
                  Quiero mi chatbot
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>

              <Button
                onClick={() => {
                  gtagEvent("click_cta_to_form", {
                    event_category: "cta",
                    event_label: "chatbot_whatsapp",
                    location: "chatbot_final_cta",
                  })
                  openDrawer()
                }}
                variant="outline"
                className="h-14 md:h-16 px-8 md:px-10 text-xs md:text-sm font-black tracking-[0.2em] uppercase border border-white/15 text-white bg-white/[0.03] hover:bg-white/[0.08] backdrop-blur-md transition-all rounded-2xl active:scale-95 flex items-center justify-center gap-2.5"
              >
                <MessageSquare className="h-4 w-4 text-primary" />
                Hablar con ingeniería
              </Button>
            </div>

            {/* Trust strip */}
            <div className="flex flex-wrap items-center justify-center gap-x-6 md:gap-x-8 gap-y-3 pt-8 border-t border-white/5">
              {[
                { icon: <Sparkles className="h-3.5 w-3.5" />, label: "Con o sin IA" },
                { icon: <Activity className="h-3.5 w-3.5" />, label: "Memoria opcional" },
                { icon: <ShieldCheck className="h-3.5 w-3.5" />, label: "Datos privados" },
                { icon: <CheckCircle2 className="h-3.5 w-3.5" />, label: "Sin permanencia" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-2 text-white/45">
                  <div className="text-primary">{item.icon}</div>
                  <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em]">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <FAQ
        items={chatbotFaqs}
        eyebrow="Conversational AI · FAQ"
        title="Lo que preguntan antes de"
        titleAccent="desplegar un chatbot"
        description="Dudas frecuentes sobre canales, integraciones, RAG y coste operativo de los agentes conversacionales."
      />

      <Footer />
    </main>
  )
}

// ============================================================
// Interactive Chatbot Demo — Sales vs Support
// ============================================================

type ChatNode = {
  id: string
  bot: string
  options?: { label: string; next: string }[]
  end?: string // closing message when reached
  cta?: { label: string } // shows a CTA button that opens the contact drawer
}

const salesFlow: Record<string, ChatNode> = {
  start: {
    id: "start",
    bot: "¡Hola! 👋 Soy el asistente de ventas. ¿Qué te interesa más?",
    options: [
      { label: "Quiero una plataforma IA", next: "plataforma" },
      { label: "Automatizar mis procesos", next: "automatizar" },
      { label: "Solo estoy mirando", next: "mirando" },
    ],
  },
  plataforma: {
    id: "plataforma",
    bot: "Genial. ¿Qué tamaño tiene tu equipo? Esto me ayuda a recomendarte la mejor opción.",
    options: [
      { label: "1-10 personas", next: "small" },
      { label: "10-50 personas", next: "mid" },
      { label: "+50 personas", next: "large" },
    ],
  },
  automatizar: {
    id: "automatizar",
    bot: "Perfecto. ¿Qué proceso es el que más tiempo te consume hoy?",
    options: [
      { label: "Soporte/atención al cliente", next: "auto_support" },
      { label: "Generación de contenido SEO", next: "auto_seo" },
      { label: "Tareas administrativas", next: "auto_admin" },
    ],
  },
  mirando: {
    id: "mirando",
    bot: "Sin problema. Te dejo un resumen: empezamos desde 5.000€ con plataforma a medida y los planes de chatbot van desde 490€. ¿Te agendo 15 min con ingeniería sin compromiso?",
    options: [
      { label: "Sí, agendar demo", next: "demo" },
      { label: "No por ahora", next: "bye" },
    ],
  },
  small: {
    id: "small",
    bot: "Para tu tamaño te recomiendo el plan Soporte IA (1.490€ + 99€/mes). ¿Quieres que te lo enseñe en una demo?",
    options: [
      { label: "Sí, agendar demo", next: "demo" },
      { label: "Quiero ver casos reales", next: "casos" },
    ],
  },
  mid: {
    id: "mid",
    bot: "Para 10-50 personas el plan Ventas IA + E-commerce (2.490€ + 149€/mes) suele ser el ideal. ¿Te enseño cómo lo desplegamos?",
    options: [
      { label: "Sí, agendar demo", next: "demo" },
      { label: "Quiero ver casos reales", next: "casos" },
    ],
  },
  large: {
    id: "large",
    bot: "Para +50 personas vamos a build a medida. Te paso a un arquitecto senior — el primer audit es gratis. ¿Lo agendamos?",
    options: [
      { label: "Sí, contactar ingeniería", next: "demo" },
      { label: "Más info primero", next: "casos" },
    ],
  },
  auto_support: {
    id: "auto_support",
    bot: "Perfecto. Un Support Bot con IA puede absorber el 70-80% de las consultas. ¿Te agendo una demo?",
    options: [
      { label: "Sí, agendar demo", next: "demo" },
      { label: "Ver caso real", next: "casos" },
    ],
  },
  auto_seo: {
    id: "auto_seo",
    bot: "Tenemos un caso real: Farmacia García del Cerro — automatizamos su blog SEO con +40% tráfico orgánico. ¿Quieres ver el caso?",
    options: [
      { label: "Ver el caso", next: "casos" },
      { label: "Hablar con ingeniería", next: "demo" },
    ],
  },
  auto_admin: {
    id: "auto_admin",
    bot: "Tenemos plantillas para gestión de tareas, propuestas y reportes. Setup en 14 días. ¿Lo charlamos?",
    options: [
      { label: "Sí, agendar demo", next: "demo" },
      { label: "Ver portfolio", next: "casos" },
    ],
  },
  demo: {
    id: "demo",
    bot: "Perfecto. Te conecto con ingeniería ahora — un arquitecto te contacta en menos de 24h. 🚀",
    cta: { label: "Solicitar auditoría técnica" },
    end: "[ Lead capturado · Sales Bot · Demo solicitada ]",
  },
  casos: {
    id: "casos",
    bot: "Tienes los casos completos en /casos-de-exito. Si te interesa alguno en concreto, dímelo y te conecto con el ingeniero que lo construyó.",
    end: "[ Engagement · Sales Bot · Caso compartido ]",
  },
  bye: {
    id: "bye",
    bot: "Sin problema. Cuando quieras, pulsa el chat de WhatsApp o el botón principal. ¡Estamos aquí!",
    end: "[ Sesión cerrada amistosamente ]",
  },
}

const supportFlow: Record<string, ChatNode> = {
  start: {
    id: "start",
    bot: "¡Hola! Soy el asistente de soporte. Tengo acceso a toda la documentación de AutoProcessX. ¿En qué te ayudo?",
    options: [
      { label: "¿Qué precios tienen?", next: "precios" },
      { label: "¿Cuánto tarda el setup?", next: "setup" },
      { label: "¿Qué LLMs soportáis?", next: "llms" },
      { label: "¿Self-hosted?", next: "selfhost" },
    ],
  },
  precios: {
    id: "precios",
    bot: "Los chatbots van desde 490€ setup + 39€/mes (sin IA) hasta 2.490€ + 149€/mes (Ventas IA con e-commerce). Plataformas IA a medida desde 5.000€. 📚 Fuente: /servicios/ai-chatbot · sección Pricing",
    options: [
      { label: "Detalle por planes", next: "planes" },
      { label: "Otra pregunta", next: "start" },
    ],
  },
  setup: {
    id: "setup",
    bot: "Los chatbots se entregan en 1-3 semanas. Las plataformas IA a medida en 4-6 semanas. Las automatizaciones complejas en 14 días para el primer flujo en producción. 📚 Fuente: hero · sección Build a medida",
    options: [
      { label: "Más detalles", next: "planes" },
      { label: "Otra pregunta", next: "start" },
    ],
  },
  llms: {
    id: "llms",
    bot: "Soportamos Claude 3.5, GPT-4o, Gemini 2.0, Llama 3.3, Mistral Large y DeepSeek. Si quieres, los conectamos todos para que elijas el más rentable por tarea. 📚 Fuente: /servicios/aplicaciones-ia",
    options: [
      { label: "¿Multi-LLM real?", next: "multi" },
      { label: "Otra pregunta", next: "start" },
    ],
  },
  selfhost: {
    id: "selfhost",
    bot: "Sí. Desplegamos en tu cloud privado, on-premise o tu cuenta de AWS/GCP. Tus datos nunca salen del perímetro y el código fuente queda 100% tuyo. 📚 Fuente: stack · self-hosted",
    options: [
      { label: "¿Cifrado?", next: "cifrado" },
      { label: "Otra pregunta", next: "start" },
    ],
  },
  planes: {
    id: "planes",
    bot: "Tienes 4 planes: Básico Reglas (490€), Ventas Reglas (790€), Soporte IA (1.490€) y Ventas IA Premium (2.490€). El más popular es Soporte IA. ¿Te ayudo a elegir uno?",
    options: [
      { label: "Sí, ayúdame a elegir", next: "elegir" },
      { label: "Otra pregunta", next: "start" },
    ],
  },
  multi: {
    id: "multi",
    bot: "Sí, totalmente. Configuramos un router que elige el modelo en tiempo real según la tarea (precisión, coste, latencia). Tu equipo puede forzar uno concreto desde el panel admin.",
    end: "[ Pregunta resuelta · Fuente: docs internas ]",
  },
  cifrado: {
    id: "cifrado",
    bot: "AES-256 en reposo y TLS en tránsito. Backups diarios cifrados. Acceso por RBAC con auditoría completa. Si necesitas certificación específica (ISO 27001, SOC2), lo cotizamos.",
    end: "[ Pregunta resuelta · Compliance ]",
  },
  elegir: {
    id: "elegir",
    bot: "Para soporte 24/7 → Soporte IA. Para vender → Ventas IA Premium. Si quieres probar barato primero → Básico Reglas. ¿Agendamos 15 min con ingeniería para afinarlo?",
    cta: { label: "Agendar con ingeniería" },
    end: "[ Recomendación entregada · Sin alucinación ]",
  },
}

function ChatbotDemoSection() {
  const [activeBot, setActiveBot] = useState<"sales" | "support">("sales")
  const { openDrawer } = useContactDrawer()
  return (
    <section className="py-16 md:py-32 bg-[#05070F] relative overflow-hidden border-t border-white/5">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-primary/[0.05] blur-[160px] rounded-full pointer-events-none" />

      <div className="container px-6 mx-auto relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-10 md:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[9px] font-black uppercase tracking-widest mb-6">
            <Activity className="h-3 w-3 animate-pulse" /> Demo en vivo · Pruébalos ahora
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-7xl font-black tracking-tighter leading-tight md:leading-[0.9] mb-4 md:mb-6">
            La mejor forma de demostrarlo <br/>
            <span className="text-primary italic">es que lo pruebes tú mismo.</span>
          </h2>
          <p className="text-white/55 text-base md:text-lg font-medium leading-relaxed max-w-2xl">
            Dos simulaciones reales con flujos guiados. No son los bots reales en producción — son demos sandbox para que veas la lógica conversacional en acción.
          </p>
        </div>

        {/* Tab selector */}
        <div className="flex gap-2 md:gap-3 mb-6 max-w-md">
          <button
            onClick={() => setActiveBot("sales")}
            className={`flex-1 h-12 md:h-14 px-4 md:px-6 rounded-xl border font-black uppercase tracking-[0.15em] text-[10px] md:text-xs transition-all flex items-center justify-center gap-2 ${
              activeBot === "sales"
                ? "bg-primary/15 border-primary/40 text-primary shadow-[0_0_24px_-8px_rgba(15,71,175,0.6)]"
                : "bg-white/[0.02] border-white/10 text-white/40 hover:text-white/70 hover:border-white/20"
            }`}
          >
            <Euro className="h-4 w-4" />
            Sales Bot
          </button>
          <button
            onClick={() => setActiveBot("support")}
            className={`flex-1 h-12 md:h-14 px-4 md:px-6 rounded-xl border font-black uppercase tracking-[0.15em] text-[10px] md:text-xs transition-all flex items-center justify-center gap-2 ${
              activeBot === "support"
                ? "bg-accent/15 border-accent/40 text-accent shadow-[0_0_24px_-8px_rgba(251,191,36,0.6)]"
                : "bg-white/[0.02] border-white/10 text-white/40 hover:text-white/70 hover:border-white/20"
            }`}
          >
            <MessageSquare className="h-4 w-4" />
            Support Bot
          </button>
        </div>

        {/* Chat demo */}
        <ChatDemo
          key={activeBot}
          flow={activeBot === "sales" ? salesFlow : supportFlow}
          accent={activeBot === "sales" ? "primary" : "accent"}
          botName={activeBot === "sales" ? "Sales Bot" : "Support Bot"}
          onCta={(label) => {
            gtagEvent("click_cta_to_form", {
              event_category: "chatbot_demo",
              event_label: `${activeBot}_${label.toLowerCase().replace(/\s+/g, "_")}`,
              location: "chatbot_demo",
            })
            openDrawer()
          }}
        />

        {/* Authority note */}
        <div className="mt-8 md:mt-12 grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
          {[
            { icon: <Activity className="h-4 w-4" />, title: "Lógica determinista", desc: "Cada respuesta es predecible y auditable. Cero alucinaciones en este modo demo." },
            { icon: <Sparkles className="h-4 w-4" />, title: "Versión real con IA", desc: "En producción, los bots responden libre con RAG sobre tu empresa, no con flujos cerrados." },
            { icon: <ShieldCheck className="h-4 w-4" />, title: "Tus datos, tus reglas", desc: "Los bots reales se entrenan sobre tu documentación interna sin filtrar nada al exterior." },
          ].map((item) => (
            <div key={item.title} className="flex gap-3 p-4 md:p-5 rounded-2xl bg-white/[0.02] border border-white/5">
              <div className="h-8 w-8 md:h-9 md:w-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0">
                {item.icon}
              </div>
              <div>
                <div className="text-sm font-black text-white mb-1">{item.title}</div>
                <div className="text-xs text-white/45 font-medium leading-relaxed">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

type Msg = { from: "bot" | "user"; text: string }

function ChatDemo({ flow, accent, botName, onCta }: { flow: Record<string, ChatNode>; accent: "primary" | "accent"; botName: string; onCta: (label: string) => void }) {
  const [history, setHistory] = useState<Msg[]>([{ from: "bot", text: flow.start.bot }])
  const [currentNode, setCurrentNode] = useState<ChatNode>(flow.start)
  const [closed, setClosed] = useState<string | null>(null)

  const accentClasses = accent === "primary"
    ? { ring: "ring-primary/30", botBg: "bg-primary/10 border-primary/20", botText: "text-primary", chip: "bg-primary/10 hover:bg-primary/20 border-primary/30 text-primary", dot: "bg-primary", glow: "shadow-[0_0_60px_-15px_rgba(15,71,175,0.5)]" }
    : { ring: "ring-accent/30", botBg: "bg-accent/10 border-accent/20", botText: "text-accent", chip: "bg-accent/10 hover:bg-accent/20 border-accent/30 text-accent", dot: "bg-accent", glow: "shadow-[0_0_60px_-15px_rgba(251,191,36,0.5)]" }

  const pickOption = (label: string, next: string) => {
    if (closed) return
    setHistory((h) => [...h, { from: "user", text: label }])
    setTimeout(() => {
      const node = flow[next]
      if (!node) return
      setHistory((h) => [...h, { from: "bot", text: node.bot }])
      setCurrentNode(node)
      if (node.end) setClosed(node.end)
    }, 500)
  }

  const reset = () => {
    setHistory([{ from: "bot", text: flow.start.bot }])
    setCurrentNode(flow.start)
    setClosed(null)
  }

  return (
    <div className={`relative rounded-3xl md:rounded-[32px] border border-white/10 bg-white/[0.02] overflow-hidden backdrop-blur-xl ${accentClasses.glow}`}>
      {/* Header */}
      <div className="flex items-center justify-between px-5 md:px-6 py-3.5 border-b border-white/5 bg-black/30">
        <div className="flex items-center gap-3">
          <div className={`h-9 w-9 rounded-full ${accentClasses.botBg} border flex items-center justify-center`}>
            {accent === "primary" ? <Euro className={`h-4 w-4 ${accentClasses.botText}`} /> : <MessageSquare className={`h-4 w-4 ${accentClasses.botText}`} />}
          </div>
          <div>
            <div className="text-sm font-black text-white">{botName}</div>
            <div className="flex items-center gap-1.5 text-[10px] font-bold text-white/40">
              <span className={`h-1.5 w-1.5 rounded-full ${accentClasses.dot} animate-pulse`} />
              Online · Sandbox demo
            </div>
          </div>
        </div>
        <button
          onClick={reset}
          className="text-[10px] font-black uppercase tracking-widest text-white/40 hover:text-white transition-colors"
        >
          Reiniciar
        </button>
      </div>

      {/* Messages */}
      <div className="p-5 md:p-8 min-h-[360px] max-h-[460px] overflow-y-auto space-y-3">
        <AnimatePresence initial={false}>
          {history.map((msg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}
              className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
                  msg.from === "user"
                    ? "bg-white text-black rounded-br-sm font-medium"
                    : `${accentClasses.botBg} border ${accentClasses.botText} rounded-bl-sm font-medium`
                }`}
              >
                {msg.text}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {closed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="pt-3 border-t border-white/5 mt-4"
          >
            <div className="text-[10px] font-black uppercase tracking-[0.25em] text-white/30 text-center">
              {closed}
            </div>
          </motion.div>
        )}
      </div>

      {/* Quick replies / CTA */}
      <div className="px-5 md:px-6 py-4 border-t border-white/5 bg-black/20">
        {currentNode.cta ? (
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <button
              onClick={() => onCta(currentNode.cta!.label)}
              className={`flex-1 h-12 px-6 rounded-xl font-black uppercase tracking-[0.2em] text-[11px] transition-all active:scale-95 flex items-center justify-center gap-2 group ${
                accent === "primary"
                  ? "bg-primary text-white hover:bg-white hover:text-black shadow-[0_0_30px_-5px_rgba(15,71,175,0.6)]"
                  : "bg-accent text-black hover:bg-white shadow-[0_0_30px_-5px_rgba(251,191,36,0.6)]"
              }`}
            >
              {currentNode.cta.label}
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={reset}
              className="h-12 px-4 rounded-xl border border-white/10 text-white/60 hover:text-white hover:border-white/20 text-[10px] font-black uppercase tracking-widest transition-colors shrink-0"
            >
              Reiniciar
            </button>
          </div>
        ) : !closed && currentNode.options ? (
          <div className="flex flex-wrap gap-2">
            {currentNode.options.map((opt) => (
              <button
                key={opt.label}
                onClick={() => pickOption(opt.label, opt.next)}
                className={`px-4 py-2 rounded-full border text-xs font-bold transition-all active:scale-95 ${accentClasses.chip}`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        ) : (
          <div className="flex items-center justify-between gap-3">
            <span className="text-[10px] font-black uppercase tracking-widest text-white/30">
              Conversación finalizada
            </span>
            <button
              onClick={reset}
              className="text-[10px] font-black uppercase tracking-widest text-white/60 hover:text-white transition-colors"
            >
              Probar de nuevo →
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
