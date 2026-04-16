"use client"

import { motion } from "framer-motion"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import FinalCTA from "@/components/FinalCTA"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { ChatbotHeroGraphic, SalesConversionGraphic } from "@/components/Graphics"
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
} from "lucide-react"

const channels = [
  {
    icon: <Laptop className="h-6 w-6" />,
    title: "AI Online Chat para tu Web",
    description:
      "Convierte tráfico en revenue con un AI online chat diseñado para vender. Supera objeciones, presenta productos y recupera usuarios antes de que abandonen tu sitio.",
    tag: "Widget Vendedor",
  },
  {
    icon: <MessageCircle className="h-6 w-6" />,
    title: "Chatbot WhatsApp Business",
    description:
      "Lleva tu CRM al bolsillo del cliente. Un chatbot personalizado para WhatsApp que cualifica prospectos y negocia 24/7 sin involucrar a tu equipo hasta el cierre.",
    tag: "WhatsApp Business",
  },
  {
    icon: <Headphones className="h-6 w-6" />,
    title: "Automatización Email Marketing",
    description:
      "Flujos de email marketing automatizados con IA. Secuencias de nurturing personalizadas que reaccionan al comportamiento real del prospecto en tiempo real.",
    tag: "Email IA",
  },
  {
    icon: <Smartphone className="h-6 w-6" />,
    title: "IA en Marketing Digital",
    description:
      "Agentes de inteligencia artificial para marketing que generan copies, segmentan audiencias y optimizan campañas sin intervención humana constante.",
    tag: "Marketing IA",
  },
]

const capabilities = [
  {
    icon: <UserPlus className="h-6 w-6 text-primary" />,
    title: "Cualificación Automática",
    description:
      "El AI chatbot hace las preguntas de calificación BANT y solo envía prospectos con verdadero potencial a tu CRM. Sin filtros manuales.",
  },
  {
    icon: <Euro className="h-6 w-6 text-secondary" />,
    title: "Conversión 24/7",
    description:
      "Las ventas no entienden de horarios. El chatbot personalizado cierra pedidos y reserva llamadas de venta mientras tu equipo duerme.",
  },
  {
    icon: <Zap className="h-6 w-6 text-accent" />,
    title: "Escalado High-Ticket",
    description:
      "El chatbot de IA detecta la intención de compra, personaliza el discurso de venta y transfiere los leads de alto valor al comercial adecuado.",
  },
]

const useCases = [
  {
    sector: "E-commerce",
    title: "Recuperación de Carritos con IA",
    desc: "El AI chatbot detecta usuarios que abandonan el carrito y lanza secuencias automáticas por chat y email para recuperar la venta perdida.",
    tags: ["Abandono de carrito", "Secuencias email", "Chat proactivo"],
  },
  {
    sector: "Servicios B2B",
    title: "Cualificación de Leads Automática",
    desc: "El chatbot personalizado recibe visitas de tu web, cualifica al prospecto con preguntas BANT y agenda la reunión en el calendario de ventas.",
    tags: ["Calificación BANT", "Agenda automática", "CRM sync"],
  },
  {
    sector: "Marketing Digital",
    title: "Automatización Email Marketing IA",
    desc: "Secuencias de email marketing impulsadas por inteligencia artificial que adaptan el mensaje, el tono y el timing según el comportamiento de cada contacto.",
    tags: ["Nurturing personalizado", "Segmentación IA", "Timing inteligente"],
  },
]

const steps = [
  {
    num: "01",
    title: "Auditoría de Canales",
    desc: "Analizamos tus puntos de contacto actuales con el cliente y detectamos dónde pierde la conversión.",
  },
  {
    num: "02",
    title: "Diseño de Flujos",
    desc: "Construimos los árboles de conversación, integramos con tu CRM y configuramos los triggers de escalado.",
  },
  {
    num: "03",
    title: "Entrenamiento con tu Contexto",
    desc: "El AI chatbot aprende tu producto, tu tono y tus objeciones frecuentes para responder como tu mejor comercial.",
  },
  {
    num: "04",
    title: "Despliegue y Monitoreo",
    desc: "Activamos en web, WhatsApp y email. Monitorizamos las métricas de conversión en tiempo real.",
  },
]

export default function AIChatbotPage() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary/20">
      <Navigation />

      {/* Hero */}
      <div className="relative pt-32 pb-32 overflow-hidden bg-background border-b border-gray-100">
        <div className="absolute inset-0 z-0 opacity-[0.4]">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:3rem_3rem]" />
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
        </div>

        <div className="container relative z-10 px-4 mx-auto">
          <div className="flex items-center gap-2 text-xs font-bold text-foreground/40 mb-12 uppercase tracking-widest">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <Link href="/servicios/automatizaciones" className="hover:text-primary transition-colors">Servicios</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-primary">AI Chatbot</span>
          </div>

          <div className="flex flex-col lg:flex-row gap-16 items-center">
            {/* Copy */}
            <div className="w-full lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-black uppercase tracking-widest mb-8"
              >
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                AI Chatbot Personalizado · Barcelona
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 }}
                className="text-5xl md:text-[80px] font-black tracking-tighter mb-8 leading-[0.88]"
              >
                <span className="block text-[11px] font-black uppercase tracking-[0.45em] text-primary/70 mb-4 leading-none">AutoProcessX</span>
                AI Chatbot <br />
                <span className="text-primary italic">para tu empresa.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-xl text-foreground/60 font-medium leading-relaxed mb-12 max-w-lg"
              >
                Desarrollamos <strong>chatbots personalizados</strong> con inteligencia artificial para empresas en Barcelona. AI online chat para tu web, chatbot de WhatsApp Business y{" "}
                <strong>automatización de email marketing</strong> integrados en un solo sistema de ventas autónomo.
              </motion.p>

              {/* Feature pills */}
              <div className="flex flex-wrap gap-3 mb-12">
                {["Web · WhatsApp · Email", "Cualificación Automática", "Disponible 24/7", "CRM Integration"].map((tag, i) => (
                  <span key={i} className="px-4 py-2 rounded-full bg-muted border border-gray-100 text-xs font-black uppercase tracking-widest text-foreground/60">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <Button className="bg-primary hover:bg-primary/90 text-white h-14 px-10 rounded-2xl font-black text-base shadow-xl shadow-primary/20 border-none transition-all hover:scale-[1.02]">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Solicitar Demo
                </Button>
                <Link href="/casos-de-exito">
                  <Button variant="outline" className="h-14 px-10 rounded-2xl font-black text-base border-2 hover:bg-muted/50 transition-all flex items-center gap-2 group">
                    Ver Casos de Uso
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Visual */}
            <div className="w-full lg:w-1/2 relative group">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/15 to-secondary/15 rounded-[64px] blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-1000" />
              <div className="relative aspect-[4/3] rounded-[56px] bg-[#0f0f10] border border-white/5 shadow-2xl overflow-hidden flex items-center justify-center p-8">
                <ChatbotHeroGraphic />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container px-4 mx-auto pb-24">

        {/* Channels Grid */}
        <div className="py-24 mb-20 relative">
          <div className="absolute inset-0 bg-muted/40 rounded-[80px] -z-10" />
          <div className="max-w-5xl mx-auto px-8 py-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
                AI chatbot <span className="text-primary italic">omnicanal</span>
              </h2>
              <p className="text-foreground/60 text-lg font-medium max-w-2xl mx-auto">
                Inteligencia artificial para marketing y ventas en los canales donde tus prospectos toman decisiones. Web, WhatsApp y email automatizados desde un solo sistema.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {channels.map((ch, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="bg-white p-10 rounded-[44px] border border-gray-100 shadow-sm hover:shadow-xl transition-all group relative overflow-hidden"
                >
                  <div className="absolute top-10 right-10">
                    <span className="px-3 py-1.5 rounded-full bg-primary/5 text-primary text-[10px] uppercase font-black tracking-widest border border-primary/10">
                      {ch.tag}
                    </span>
                  </div>
                  <div className="w-14 h-14 rounded-[20px] bg-muted flex items-center justify-center text-foreground mb-8 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    {ch.icon}
                  </div>
                  <h3 className="text-2xl font-black mb-3 tracking-tight">{ch.title}</h3>
                  <p className="text-foreground/60 font-medium leading-relaxed text-sm">{ch.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Dark: Capabilities */}
        <div className="mb-20 bg-[#0a0a0b] rounded-[64px] lg:rounded-[80px] overflow-hidden border border-white/5 shadow-[0_0_80px_-20px_rgba(16,185,129,0.1)]">
          <div className="flex flex-col lg:flex-row items-stretch">
            {/* Image side */}
            <div className="lg:w-1/2 relative min-h-[360px] bg-gradient-to-br from-primary/10 via-transparent to-transparent flex items-center justify-center p-12">
              <SalesConversionGraphic />
            </div>
            {/* Content side */}
            <div className="lg:w-1/2 p-12 lg:p-20 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-[0.2em] mb-8 w-fit">
                <MessageSquare className="h-3.5 w-3.5" /> Más inteligencia que un bot convencional
              </div>
              <h2 className="text-4xl lg:text-5xl font-black text-white mb-8 tracking-tighter leading-tight">
                Diseñado para <span className="text-primary italic">vender,</span> no solo responder.
              </h2>
              <p className="text-white/50 text-lg mb-12 font-medium leading-relaxed">
                El AI chatbot interpreta la intención real del comprador y lo guía por embudos de conversación optimizados hacia el pago o agendamiento, sin reglas fijas.
              </p>
              <div className="space-y-6">
                {capabilities.map((cap, i) => (
                  <div key={i} className="flex gap-4 group">
                    <div className="w-11 h-11 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:border-primary transition-all">
                      {cap.icon}
                    </div>
                    <div>
                      <h4 className="text-white font-black text-sm uppercase tracking-wider mb-1">{cap.title}</h4>
                      <p className="text-white/40 text-sm font-medium leading-relaxed">{cap.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Process Steps */}
        <div className="mb-20">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6">
              De cero a chatbot activo <span className="text-primary italic">en 10 días.</span>
            </h2>
            <p className="text-xl text-foreground/50 font-medium">
              Nuestro proceso garantiza que tu AI chatbot esté entrenado, integrado y generando conversiones en tiempo récord.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="p-8 rounded-[40px] bg-muted border border-transparent hover:border-primary/10 transition-all group"
              >
                <span className="text-5xl font-black text-foreground/10 group-hover:text-primary/20 transition-colors block mb-6 tracking-tighter">{step.num}</span>
                <h3 className="text-xl font-black mb-3 tracking-tight">{step.title}</h3>
                <p className="text-foreground/60 text-sm font-medium leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Use Cases */}
        <div className="mb-20">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6">
              Casos de uso del <span className="text-primary italic">AI Chatbot</span>
            </h2>
            <p className="text-xl text-foreground/50 font-medium">
              Desde la automatización de email marketing hasta la cualificación B2B. La inteligencia artificial para marketing se adapta a cada sector.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {useCases.map((uc, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-10 rounded-[48px] bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all flex flex-col group"
              >
                <span className="text-[10px] font-black uppercase tracking-widest text-primary bg-primary/5 px-3 py-1.5 rounded-full border border-primary/10 w-fit mb-8">
                  {uc.sector}
                </span>
                <h3 className="text-2xl font-black mb-4 tracking-tight group-hover:text-primary transition-colors">{uc.title}</h3>
                <p className="text-foreground/60 font-medium leading-relaxed text-sm flex-grow mb-8">{uc.desc}</p>
                <div className="flex flex-wrap gap-2 pt-6 border-t border-gray-100">
                  {uc.tags.map((tag, j) => (
                    <span key={j} className="px-3 py-1.5 rounded-full bg-muted text-[10px] font-black uppercase tracking-widest text-foreground/50 border border-gray-100">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <FinalCTA />
      </div>

      <Footer />
    </main>
  )
}
