"use client"

import { motion } from "framer-motion"
import { Cpu, ShieldCheck, Zap, Database, Globe, Layers, ArrowUpRight, Code2, GitBranch, TerminalSquare } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import FinalCTA from "@/components/FinalCTA"

const techCategories = [
  {
    title: "Orquestación Avanzada",
    icon: <Layers className="h-6 w-6 text-accent" />,
    description: "No hacemos 'workflows por hacer'. Diseñamos pipelines resilientes con control de errores avanzado y lógica condicional compleja.",
    technologies: [
      { name: "n8n", sub: "Instancias Dedicadas", badge: "Gold Partner" },
      { name: "Make", sub: "Enterprise Plans", badge: "Pro" },
      { name: "TypeScript Node", sub: "Custom Logic", badge: "Core" }
    ]
  },
  {
    title: "Cognición & LLMs",
    icon: <Cpu className="h-6 w-6 text-accent" />,
    description: "Dominamos el prompting sistemático, RAG y fine-tuning para que la IA entienda el contexto de tu negocio al 100%.",
    technologies: [
      { name: "Claude 3.5 Sonnet", sub: "Anthropic", badge: "Tier 4" },
      { name: "GPT-4o / O1", sub: "OpenAI", badge: "Tier 5" },
      { name: "Gemini 1.5 Pro", sub: "DeepMind", badge: "Scale" }
    ]
  },
  {
    title: "Datos & Cloud Infra",
    icon: <Database className="h-6 w-6 text-accent" />,
    description: "Programación pura y diseño de bases de datos relacionales/vectoriales para escalar sin cuellos de botella.",
    technologies: [
      { name: "PostgreSQL", sub: "Supabase Auth", badge: "Enterprise" },
      { name: "AWS", sub: "Arquitectura Cloud", badge: "Certified" },
      { name: "Pinecone", sub: "Bases Vectoriales", badge: "Scale" }
    ]
  }
]

export default function Tecnologia() {
  return (
    <div className="flex flex-col min-h-screen bg-background selection:bg-accent/20">
      <Navigation />
      {/* Hero Specs */}
      <div className="relative pt-40 pb-32 overflow-hidden bg-background">
        {/* Technical Grid Pattern */}
        <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40" />
        </div>
        
        <div className="container relative z-10 px-4 mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-16">
                {/* Copy Left */}
                <div className="w-full lg:w-1/2 text-left">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="h-[2px] w-8 bg-accent" />
                        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-accent">Workflow Automation · Multi Agent Systems · Barcelona</span>
                    </div>

                    <h1 className="text-6xl md:text-[80px] font-black tracking-tighter mb-8 text-foreground leading-[0.85]">
                        <span className="block text-[11px] font-black uppercase tracking-[0.45em] text-secondary/70 mb-4 leading-none">AutoProcessX</span>
                        Infraestructura de <br/> <span className="text-secondary italic">Misión Crítica.</span>
                    </h1>

                    <p className="text-xl text-foreground/50 max-w-2xl font-medium leading-relaxed italic mb-12">
                        Stack enterprise para <strong>workflow automation</strong> y sistemas multi-agente. Experiencia profunda en programación, estructuras de datos y LLM monitoring para resolver las integraciones más complejas de tu empresa.
                    </p>

                    <div className="flex flex-wrap items-center gap-8 md:gap-12 opacity-40 mt-10">
                        {/* n8n */}
                        <div className="flex items-center gap-2 cursor-default group">
                            <svg className="w-6 h-6 text-[#FF6C37]" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-13c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0 8c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"/>
                                <circle cx="12" cy="12" r="1"/>
                                <circle cx="12" cy="7" r="0.8"/>
                                <circle cx="12" cy="17" r="0.8"/>
                                <circle cx="7" cy="12" r="0.8"/>
                                <circle cx="17" cy="12" r="0.8"/>
                            </svg>
                            <span className="text-lg font-black tracking-tighter text-foreground/80 group-hover:text-foreground transition-colors">n8n</span>
                        </div>

                        {/* LLMs */}
                        <div className="flex items-center gap-2 cursor-default group">
                            <span className="text-2xl">🧠</span>
                            <span className="text-lg font-black tracking-tighter text-foreground/80 group-hover:text-foreground transition-colors">LLM's</span>
                        </div>

                        {/* PostgreSQL */}
                        <div className="flex items-center gap-2 cursor-default group">
                            <svg className="w-6 h-6 text-[#336791]" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M19.07,13.1c-0.12-1-0.34-2.02-0.65-3c-1.35-4.22-5.46-5.89-7.46-6.1c-1.89-0.2-3.83,0.34-5.26,1.48 C4.27,6.62,3.31,8.42,3.31,10.61c0,2.6,1.38,4.72,3.35,5.8c-0.23,0.37-0.45,0.73-0.67,1.08c-0.34,0.54-1.28,1-1.31,1.01H4.67 c-0.01,0-0.03,0-0.04,0h0c-1,0-1.81,0.8-1.81,1.79c0,0.48,0.2,0.94,0.56,1.26c0.33,0.3,0.76,0.46,1.22,0.46h6.73 c0.98,0,1.78-0.81,1.78-1.8c0-0.99-0.81-1.8-1.8-1.8h0h-1.6c0.05-0.06,0.1-0.13,0.15-0.19c1.9-2.31,3.48-5.38,3.95-8.48 c1.24,0.37,2.16,1.43,2.44,2.69c0.16,0.71,0.12,1.51-0.13,2.3c-0.11,0.37-0.37,0.7-0.78,0.84h0l-0.35,0.11 c-0.5,0.16-0.78,0.7-0.61,1.21c0.16,0.5,0.7,0.78,1.21,0.61h0l0.35-0.11c1.2-0.38,1.99-1.4,2.33-2.58 C19.26,16.29,19.34,14.67,19.07,13.1z M7.79,14.54c-1.3-0.71-2.22-2.11-2.22-3.93c0-1.54,0.67-2.8,1.69-3.6 c1-0.8,2.35-1.18,3.67-1.04c1.41,0.15,4.3,1.33,5.25,4.28c0.22,0.68,0.38,1.39,0.46,2.08C15.17,11.39,12.22,12.35,7.79,14.54z"/>
                            </svg>
                            <span className="text-lg font-black tracking-tighter text-foreground/80 group-hover:text-foreground transition-colors">PostgreSQL</span>
                        </div>

                        {/* Supabase */}
                        <div className="flex items-center gap-2 cursor-default group">
                            <svg className="w-6 h-6 text-[#3ECF8E]" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M21.35 11.1c0-.44-.31-.83-.74-.92l-3.32-.84V3.62c0-.35-.28-.62-.62-.62h-.53c-.35 0-.62.28-.62.62v3.13L6.15 15.69c-.07.1-.11.23-.11.36 0 .35.28.62.62.62h3.13v2.51c0 .33.25.6.58.62.33.02.63-.21.69-.53l2.16-5.84h3.33c.33 0 .6-.25.62-.58.02-.33-.21-.63-.53-.69l-3.32-.84V3.62c0-.35.28-.62.62-.62h3.13c.35 0 .62.28.62.62v7.5l2.43 1.1h.01c.42.19.6.7.41 1.12-.19.42-.7.6-1.12.41l-2.43-1.1v4.38c0 .35.28.62.62.62h3.13c.35 0 .62.28.62.62s-.28.62-.62.62h-3.13c-1.03 0-1.87-.84-1.87-1.87v-4.38h-.02l-2.43-1.1c-.42-.19-.6-.7-.41-1.12.19-.42.7-.6 1.12-.41l2.43 1.1V3.62h3.13V11.1h.41c.42 0 .74.34.74.74v.41h.41c.42 0 .74.34.74.74s-.32.74-.74.74h-.41v.41c0 .41-.32.74-.74.74s-.74-.33-.74-.74v-.41h-.41c-.42 0-.74-.34-.74-.74s.32-.74.74-.74h.41v-.41c0-.4-.32-.74-.74-.74s-.74.34-.74.74V11.1h.41z"/>
                            </svg>
                            <span className="text-lg font-black tracking-tighter text-foreground/80 group-hover:text-foreground transition-colors">Supabase</span>
                        </div>
                    </div>
                </div>

                {/* Visual Right (Sync with Home) */}
                <div className="w-full lg:w-1/2 relative group">
                    <div className="relative aspect-[4/3]">
                        <Image 
                            src="/assets/logo_premium_v6.png"
                            alt="Tech Stack Evolution"
                            width={1200}
                            height={900}
                            className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-[3000ms] ease-out mix-blend-multiply"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/10 via-transparent to-transparent" />
                    </div>
                </div>
            </div>
        </div>
      </div>

      {/* Philosophy Section */}
      <section className="py-24 bg-foreground text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent/10 blur-[150px] rounded-full pointer-events-none" />
          <div className="container relative z-10 px-4 mx-auto max-w-5xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                  <div>
                      <h2 className="text-4xl md:text-5xl font-black mb-8 tracking-tighter leading-tight">
                          Ingeniería estratégica, <br />
                          <span className="text-accent italic">no parches temporales.</span>
                      </h2>
                      <p className="text-lg text-white/60 mb-6 leading-relaxed">
                          La diferencia entre un sistema que colapsa al mes y uno que escala durante años radica en la base. Nos apasiona lo que hacemos y analizamos a fondo la estructura de datos ideal para tu negocio.
                      </p>
                      <p className="text-lg text-white/60 leading-relaxed font-bold italic">
                          "Nos encargamos de las integraciones odiosas con tecnologías de legacy para que tú no tengas que hacerlo."
                      </p>
                  </div>
                  <div className="space-y-6">
                      <div className="flex items-start gap-4 p-6 rounded-2xl bg-white/5 border border-white/10">
                          <TerminalSquare className="h-8 w-8 text-accent shrink-0 mt-1" />
                          <div>
                              <h4 className="font-black text-xl mb-2">Código a Medida</h4>
                              <p className="text-white/50 text-sm leading-relaxed">Desarrollamos nodos personalizados y scripts en Node.js/Python cuando las herramientas no-code se quedan cortas.</p>
                          </div>
                      </div>
                      <div className="flex items-start gap-4 p-6 rounded-2xl bg-accent/10 border border-accent/20">
                          <GitBranch className="h-8 w-8 text-accent shrink-0 mt-1" />
                          <div>
                              <h4 className="font-black text-xl mb-2 text-accent">Arquitectura de Datos</h4>
                              <p className="text-white/70 text-sm leading-relaxed">Diseñamos bases de datos relacionales sólidas antes de automatizar, garantizando que puedas escalar con nuevas tecnologías en el futuro.</p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      {/* Tech Grid */}
      <section className="py-32 bg-gray-50">
        <div className="container px-4 mx-auto max-w-6xl">
            <div className="text-center mb-20">
                <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-4 text-foreground">Stack Tecnológico Certificado</h2>
                <p className="text-foreground/50 font-medium max-w-2xl mx-auto">Nuestro arsenal de herramientas validado en más de 250 despliegues en producción.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {techCategories.map((category, i) => (
                    <motion.div 
                        key={i}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: i * 0.1 }}
                        className="p-10 rounded-[40px] bg-white border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(255,107,0,0.08)] hover:-translate-y-2 transition-all duration-500 group"
                    >
                        <div className="h-16 w-16 rounded-3xl bg-accent/10 flex items-center justify-center mb-8 group-hover:bg-accent group-hover:text-white transition-colors duration-500">
                            {category.icon}
                        </div>
                        <h3 className="text-2xl font-black mb-4 tracking-tight">{category.title}</h3>
                        <p className="text-foreground/60 font-medium mb-10 h-20 text-sm leading-relaxed">{category.description}</p>
                        
                        <div className="space-y-3">
                            {category.technologies.map((tech, j) => (
                                <div key={j} className="flex items-center justify-between p-4 rounded-2xl bg-gray-50 group-hover:bg-accent/5 transition-colors duration-300">
                                    <div>
                                        <h4 className="font-black text-foreground tracking-tight text-sm">{tech.name}</h4>
                                        <p className="text-[10px] uppercase font-bold text-foreground/40 tracking-widest">{tech.sub}</p>
                                    </div>
                                    <span className="px-3 py-1.5 bg-white text-accent border border-accent/10 text-[9px] font-black uppercase tracking-wider rounded-lg shadow-sm">
                                        {tech.badge}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
      </section>

      {/* Security & Standards */}
      <section className="py-24 bg-white border-t border-gray-100 overflow-hidden relative">
          <div className="container relative z-10 px-4 mx-auto max-w-4xl text-center">
              <ShieldCheck className="h-16 w-16 text-accent mx-auto mb-8" />
              <h2 className="text-4xl md:text-5xl font-black mb-8 tracking-tighter text-foreground">Estándares ISO y Privacidad Absoluta</h2>
              <p className="text-xl text-foreground/60 font-medium mb-12 max-w-3xl mx-auto">
                  Tus datos nunca entrenan modelos públicos. Firmamos NDAs estrictos y operamos bajo normativas GDPR y estándares ISO27001 para la gestión de la información técnica.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                  <div className="px-8 py-4 rounded-2xl border border-gray-200 bg-gray-50 font-black tracking-widest text-xs text-foreground/70 uppercase">
                      Zero Data Retention
                  </div>
                  <div className="px-8 py-4 rounded-2xl border border-gray-200 bg-gray-50 font-black tracking-widest text-xs text-foreground/70 uppercase">
                      End-to-End Encryption
                  </div>
                  <div className="px-8 py-4 rounded-2xl border border-gray-200 bg-gray-50 font-black tracking-widest text-xs text-foreground/70 uppercase">
                      GDPR Compliant Enterprise
                  </div>
              </div>
          </div>
      </section>

      {/* NLP, RAG, Vector Embedding & ML Section */}
      <section className="py-24 bg-muted/30">
          <div className="container px-4 mx-auto max-w-6xl">
              <div className="text-center mb-16">
                  <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-4 text-foreground">
                      Procesamiento de Lenguaje Natural, <span className="text-accent italic">RAG y Machine Learning</span>
                  </h2>
                  <p className="text-foreground/50 font-medium max-w-3xl mx-auto">
                      Dominamos las tecnologías de inteligencia artificial más avanzadas: desde procesamiento de lenguaje natural (NLP) hasta arquitecturas RAG con vector embedding y sistemas multi agent systems para empresas.
                  </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                      {
                          title: "Procesamiento Lenguaje Natural",
                          desc: "NLP aplicado a la extracción de información, clasificación de documentos y comprensión contextual para tus agentes de IA.",
                          tags: ["NLP · PLN", "LLM · Embedding Models"]
                      },
                      {
                          title: "Arquitectura RAG",
                          desc: "Retrieval-Augmented Generation con vector embedding y bases vectoriales Pinecone. RAG evaluation y semantic search optimization integrados.",
                          tags: ["RAG Evaluation", "Vector Embedding"]
                      },
                      {
                          title: "Machine Learning & Deep Learning",
                          desc: "Modelos de machine learning online, redes neuronales y deep learning aplicados a la automatización de decisiones empresariales complejas.",
                          tags: ["Machine Learning", "Knowledge Graphs AI"]
                      },
                      {
                          title: "LLM Monitoring & Multi Agent",
                          desc: "LLM monitoring en producción, prompt versioning y token optimization para sistemas multi agent systems de alto rendimiento.",
                          tags: ["LLM Monitoring", "Multi Agent Systems"]
                      }
                  ].map((item, i) => (
                      <div key={i} className="p-8 rounded-[40px] bg-white border border-gray-100 shadow-sm hover:shadow-lg transition-all">
                          <h3 className="text-xl font-black mb-3 tracking-tight">{item.title}</h3>
                          <p className="text-foreground/60 text-sm font-medium leading-relaxed mb-6">{item.desc}</p>
                          <div className="flex flex-wrap gap-2">
                              {item.tags.map((tag, j) => (
                                  <span key={j} className="text-[10px] font-black uppercase tracking-widest text-accent bg-accent/5 px-3 py-1 rounded-full border border-accent/10">{tag}</span>
                              ))}
                          </div>
                      </div>
                  ))}
              </div>
          </div>
      </section>

      <FinalCTA />
      <Footer />
    </div>
  )
}
