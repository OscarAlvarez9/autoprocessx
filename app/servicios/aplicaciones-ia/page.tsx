"use client"
 
import { motion } from "framer-motion"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import { CheckCircle2, ChevronRight, ShieldCheck, Zap, Sparkles, Database, Cpu, FileText, Globe, MessageSquare, Lock } from "lucide-react"
import FinalCTA from "@/components/FinalCTA"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { RAGPipelineGraphic, SecurityShieldGraphic } from "@/components/Graphics"

const features = [
    {
      icon: <Database className="h-6 w-6" />,
      title: "Arquitectura RAG",
      description: "Retrieval-Augmented Generation: tu IA consulta tus documentos en tiempo real antes de responder, garantizando precisión absoluta.",
      metric: "Cero Alucionaciones"
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Entrenamiento Específico",
      description: "Entrenamos el modelo con tus PDFs, Excels, Notion y bases de datos. Un cerebro digital que conoce cada coma de tu empresa.",
      metric: "Privacidad Total"
    },
    {
      icon: <Cpu className="h-6 w-6" />,
      title: "Agentes Autónomos",
      description: "No solo responden; ejecutan. Desde redactar informes técnicos hasta actualizar tu CRM basándose en el conocimiento adquirido.",
      metric: "+95% Eficiencia"
    }
]

const steps = [
    {
        num: "01",
        title: "Ingesta de Datos",
        desc: "Conectamos tus fuentes de información (Notion, SharePoint, PDF) de forma segura."
    },
    {
        num: "02",
        title: "Vectorización",
        desc: "Convertimos tu conocimiento en una base vectorial de alta velocidad (milésimas de segundo)."
    },
    {
        num: "03",
        title: "Despliegue de Agentes",
        desc: "Activamos interfaces en WhatsApp, Slack o Web para que tu equipo interactúe con la IA."
    }
]

export default function AplicacionesIAPage() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary/20">
      <Navigation />
      
      <div className="container px-4 mx-auto pt-32 pb-24">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-bold text-foreground/40 mb-12 uppercase tracking-widest">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-primary">Aplicaciones IA Corporativa</span>
        </div>

        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row gap-16 items-center mb-32">
            <div className="flex-1">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-xs font-black uppercase tracking-widest mb-6"
                >
                    CONSULTORÍA DE INTELIGENCIA ARTIFICIAL EN BARCELONA
                </motion.div>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-5xl md:text-8xl font-black tracking-tighter mb-8 leading-[0.95]"
                >
                    <span className="block text-[11px] font-black uppercase tracking-[0.45em] text-primary/70 mb-4 leading-none">AutoProcessX</span>
                    Inteligencia artificial <span className="text-primary italic block">para empresas.</span>
                </motion.h1>
                <p className="text-xl text-foreground/60 font-medium leading-relaxed mb-10 max-w-xl">
                    Deja de usar IAs genéricas. Construimos aplicaciones de <strong>inteligencia artificial para empresas</strong> alimentadas por tus propios documentos corporativos (RAG). Privada, precisa y 100% legal. IA para empresas en Barcelona.
                </p>
                <div className="flex flex-wrap gap-4">
                    <Button className="bg-primary hover:bg-primary/90 text-white h-16 px-10 rounded-2xl font-black text-lg shadow-xl shadow-primary/20 border-none transition-all hover:scale-[1.02]">
                        <Cpu className="mr-2 h-5 w-5" />
                        Crear mi IA
                    </Button>
                    <Button variant="outline" className="h-16 px-10 rounded-2xl font-black text-lg border-2 hover:bg-muted/50 transition-all">
                        Ver Demo RAG
                    </Button>
                </div>
            </div>
            <div className="flex-1 relative group">
                <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-[64px] blur-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-1000" />
                <div className="relative aspect-square rounded-[64px] bg-[#1a1a1a] border border-white/5 shadow-2xl overflow-hidden flex items-center justify-center p-8">
                    <RAGPipelineGraphic />
                </div>
            </div>
        </div>

        {/* The RAG Engine Section */}
        <div className="py-24 mb-32 relative">
            <div className="absolute inset-0 bg-muted/30 rounded-[80px] -z-10" />
            <div className="max-w-5xl mx-auto px-8">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">Arquitectura <span className="text-primary italic">RAG Engine</span></h2>
                    <p className="text-foreground/60 text-lg font-medium max-w-2xl mx-auto">
                        A diferencia de ChatGPT, nuestro sistema de <strong>ia para empresas</strong> no adivina. Consulta tu base de documentos corporativos en tiempo real. Cero alucinaciones, máxima precisión.
                    </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((f, i) => (
                        <motion.div 
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-white p-10 rounded-[48px] border border-gray-100 shadow-sm hover:shadow-xl transition-all group"
                        >
                            <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center text-primary mb-8 group-hover:scale-110 transition-transform">
                                {f.icon}
                            </div>
                            <div className="text-[10px] font-black uppercase tracking-widest text-secondary mb-3">{f.metric}</div>
                            <h3 className="text-2xl font-black mb-4 tracking-tight">{f.title}</h3>
                            <p className="text-foreground/60 font-medium text-sm leading-relaxed">{f.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>

        {/* Sources Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center mb-32">
            <div className="space-y-12">
                <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-tight">
                    Tus documentos son tu <span className="text-accent italic underline decoration-secondary decoration-4 underline-offset-8">ventaja competitiva en Barcelona.</span>
                </h2>
                <div className="grid grid-cols-2 gap-8">
                    {[
                        { icon: <FileText />, name: "PDFs & Docs" },
                        { icon: <Globe />, name: "Notion & Web" },
                        { icon: <Database />, name: "SQL & ERP" },
                        { icon: <MessageSquare />, name: "Slack & Email" }
                    ].map((source, i) => (
                        <div key={i} className="flex items-center gap-4 p-6 rounded-3xl bg-white border border-gray-100 shadow-sm">
                            <div className="text-primary">{source.icon}</div>
                            <span className="font-black text-sm uppercase tracking-wider">{source.name}</span>
                        </div>
                    ))}
                </div>
            </div>
            <div className="bg-secondary p-12 md:p-20 rounded-[80px] text-white">
                <h3 className="text-3xl font-black mb-8">Proceso de Vectorización</h3>
                <div className="space-y-10">
                    {steps.map((s, i) => (
                        <div key={i} className="flex gap-6">
                            <span className="text-white/20 font-black text-4xl">{s.num}</span>
                            <div>
                                <h4 className="text-xl font-black mb-2">{s.title}</h4>
                                <p className="text-white/70 font-medium text-sm leading-relaxed">{s.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

        {/* Advanced Privacy Section */}
        <div className="mb-32">
            <div className="bg-[#0a0a0b] rounded-[64px] lg:rounded-[100px] overflow-hidden border border-white/5 shadow-[0_0_100px_-20px_rgba(16,185,129,0.15)]">
                <div className="flex flex-col lg:flex-row items-stretch">
                    {/* Visual Side */}
                    <div className="lg:w-1/2 relative min-h-[400px] bg-gradient-to-br from-primary/20 via-transparent to-transparent flex items-center justify-center p-12">
                        <SecurityShieldGraphic />
                    </div>
                    
                    {/* Content Side */}
                    <div className="lg:w-1/2 p-12 lg:p-24 flex flex-col justify-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-[10px] font-black uppercase tracking-[0.2em] mb-8 w-fit">
                            <ShieldCheck className="h-3.5 w-3.5" /> Seguridad de Grado Bancario
                        </div>
                        <h2 className="text-4xl lg:text-7xl font-black text-white mb-8 tracking-tighter leading-none">
                            Privacidad por <span className="text-primary italic">Diseño e Ingeniería.</span>
                        </h2>
                        <p className="text-xl text-white/50 mb-12 font-medium leading-relaxed">
                            No solo prometemos privacidad; la codificamos. Implementamos perímetros de seguridad aislados donde tu conocimiento reside en servidores dedicados e inexpugnables.
                        </p>
                        
                        {/* Privacy Pillars Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {[
                                { title: "Aislamiento Total", desc: "Instancias dedicadas", icon: <Database /> },
                                { title: "Cero Entrenamiento", desc: "Protección de IP", icon: <Lock /> },
                                { title: "Cifrado Dinámico", desc: "AES-256 bits", icon: <Zap /> },
                                { title: "Control Granular", desc: "Roles y permisos", icon: <CheckCircle2 /> }
                            ].map((p, i) => (
                                <div key={i} className="flex gap-4 group">
                                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                                        {p.icon}
                                    </div>
                                    <div>
                                        <h4 className="text-white font-black text-sm uppercase tracking-wider mb-1">{p.title}</h4>
                                        <p className="text-white/40 text-xs font-medium">{p.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Compliance Badges */}
            <div className="px-12 py-10 flex flex-wrap justify-center items-center gap-12 transition-all duration-700">
                <span className="text-[10px] font-black uppercase tracking-[0.3em]">ISO 27001 Ready</span>
                <span className="text-[10px] font-black uppercase tracking-[0.3em]">GDPR Compliant</span>
                <span className="text-[10px] font-black uppercase tracking-[0.3em]">End-to-End Encryption</span>
                <span className="text-[10px] font-black uppercase tracking-[0.3em]">SOC2 Framework</span>
            </div>
        </div>

        {/* Business Suite Platform Showcase */}
        <div className="mb-32">
          {/* Header */}
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-[10px] font-black uppercase tracking-widest mb-8">
              <Sparkles className="h-3.5 w-3.5" /> Caso Real · Business Suite
            </div>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-6">
              Una plataforma para <span className="text-primary italic">todas tus empresas.</span>
            </h2>
            <p className="text-foreground/60 text-lg font-medium leading-relaxed">
              Desarrollamos un Business Suite personalizado que unifica la operativa de varias empresas en un solo entorno. Cada empresa tiene su propio dashboard, pipeline de ventas, gestión de clientes, calendario y generador de propuestas — con agentes de IA trabajando de fondo.
            </p>
          </div>

          {/* Module Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">

            {/* Dashboard + Pipeline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-[48px] bg-white border border-gray-100 shadow-sm overflow-hidden group hover:shadow-xl transition-all"
            >
              <div className="p-8 pb-0">
                <span className="text-[10px] font-black uppercase tracking-widest text-primary bg-primary/5 px-3 py-1.5 rounded-full border border-primary/10">Dashboard & Pipeline</span>
                <h3 className="text-2xl font-black mt-4 mb-2 tracking-tight">Control total por empresa</h3>
                <p className="text-foreground/60 text-sm font-medium leading-relaxed mb-6">
                  Cada empresa tiene su propio entorno independiente: clientes activos, leads en pipeline, tareas pendientes y propuestas abiertas en tiempo real desde Supabase.
                </p>
              </div>
              <div className="mx-6 mb-6 rounded-[28px] overflow-hidden bg-muted aspect-[16/9] flex items-center justify-center border border-gray-100">
                <Image
                  src="/assets/platform_dashboard.png"
                  alt="Business Suite Dashboard — AutoProcessX"
                  width={800}
                  height={450}
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </motion.div>

            {/* Pipeline Kanban */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 }}
              className="rounded-[48px] bg-white border border-gray-100 shadow-sm overflow-hidden group hover:shadow-xl transition-all"
            >
              <div className="p-8 pb-0">
                <span className="text-[10px] font-black uppercase tracking-widest text-secondary bg-secondary/5 px-3 py-1.5 rounded-full border border-secondary/10">Pipeline de Ventas</span>
                <h3 className="text-2xl font-black mt-4 mb-2 tracking-tight">Kanban estilo Notion</h3>
                <p className="text-foreground/60 text-sm font-medium leading-relaxed mb-6">
                  Pipeline visual con columnas configurables: Nuevos Leads, Contactados, Reunión Agendada, Propuesta Enviada y Convertidos. Drag & drop nativo.
                </p>
              </div>
              <div className="mx-6 mb-6 rounded-[28px] overflow-hidden bg-muted aspect-[16/9] flex items-center justify-center border border-gray-100">
                <Image
                  src="/assets/platform_pipeline.png"
                  alt="Pipeline de Ventas Kanban — AutoProcessX"
                  width={800}
                  height={450}
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </motion.div>

            {/* Clientes */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.12 }}
              className="rounded-[48px] bg-white border border-gray-100 shadow-sm overflow-hidden group hover:shadow-xl transition-all"
            >
              <div className="p-8 pb-0">
                <span className="text-[10px] font-black uppercase tracking-widest text-accent bg-accent/5 px-3 py-1.5 rounded-full border border-accent/10">Cartera de Clientes</span>
                <h3 className="text-2xl font-black mt-4 mb-2 tracking-tight">CRM integrado en la plataforma</h3>
                <p className="text-foreground/60 text-sm font-medium leading-relaxed mb-6">
                  Gestión de clientes con estado en tiempo real (Activo, Onboarding, En Riesgo, Mantenimiento), contacto principal y fecha de alta. Todo en una sola vista.
                </p>
              </div>
              <div className="mx-6 mb-6 rounded-[28px] overflow-hidden bg-muted aspect-[16/9] border border-gray-100">
                <Image src="/assets/platform_clientes.png" alt="CRM Cartera de Clientes — AutoProcessX" width={800} height={450} className="w-full h-full object-cover object-top" />
              </div>
            </motion.div>

            {/* Calendario */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.16 }}
              className="rounded-[48px] bg-white border border-gray-100 shadow-sm overflow-hidden group hover:shadow-xl transition-all"
            >
              <div className="p-8 pb-0">
                <span className="text-[10px] font-black uppercase tracking-widest text-secondary bg-secondary/5 px-3 py-1.5 rounded-full border border-secondary/10">Calendario</span>
                <h3 className="text-2xl font-black mt-4 mb-2 tracking-tight">Sincronizado con Google Calendar</h3>
                <p className="text-foreground/60 text-sm font-medium leading-relaxed mb-6">
                  Las reuniones y eventos se sincronizan directamente con Google Calendar. Aparecen en el móvil y ordenador de cada miembro del equipo sin ninguna acción extra.
                </p>
              </div>
              <div className="mx-6 mb-6 rounded-[28px] overflow-hidden bg-muted aspect-[16/9] border border-gray-100">
                <Image src="/assets/platform_calendario.png" alt="Calendario Google Calendar — AutoProcessX" width={800} height={450} className="w-full h-full object-cover object-top" />
              </div>
            </motion.div>

            {/* Tareas */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.20 }}
              className="rounded-[48px] bg-white border border-gray-100 shadow-sm overflow-hidden group hover:shadow-xl transition-all"
            >
              <div className="p-8 pb-0">
                <span className="text-[10px] font-black uppercase tracking-widest text-primary bg-primary/5 px-3 py-1.5 rounded-full border border-primary/10">Tareas & Operaciones</span>
                <h3 className="text-2xl font-black mt-4 mb-2 tracking-tight">Gestión de tareas estilo Asana</h3>
                <p className="text-foreground/60 text-sm font-medium leading-relaxed mb-6">
                  Tareas con estados (Pendiente, En progreso, Completada) filtradas por empresa. Cada tarea puede enviarse al calendario del equipo con un clic.
                </p>
              </div>
              <div className="mx-6 mb-6 rounded-[28px] overflow-hidden bg-muted aspect-[16/9] border border-gray-100">
                <Image src="/assets/platform_tareas.png" alt="Tareas y Operaciones — AutoProcessX" width={800} height={450} className="w-full h-full object-cover object-top" />
              </div>
            </motion.div>

            {/* Propuestas */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.24 }}
              className="rounded-[48px] bg-white border border-gray-100 shadow-sm overflow-hidden group hover:shadow-xl transition-all"
            >
              <div className="p-8 pb-0">
                <span className="text-[10px] font-black uppercase tracking-widest text-accent bg-accent/5 px-3 py-1.5 rounded-full border border-accent/10">Generador de Propuestas</span>
                <h3 className="text-2xl font-black mt-4 mb-2 tracking-tight">De formulario a .docx en un clic</h3>
                <p className="text-foreground/60 text-sm font-medium leading-relaxed mb-6">
                  Genera propuestas con tu plantilla corporativa, descárgalas como .docx o envíalas por email desde la plataforma. Cada envío queda registrado automáticamente en la base de datos.
                </p>
              </div>
              <div className="mx-6 mb-6 rounded-[28px] overflow-hidden bg-muted aspect-[16/9] border border-gray-100">
                <Image src="/assets/platform_propuestas.png" alt="Generador de Propuestas — AutoProcessX" width={800} height={450} className="w-full h-full object-cover object-top" />
              </div>
            </motion.div>
          </div>

          {/* Agentes IA — Full Width Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-[48px] bg-white border border-gray-100 shadow-sm overflow-hidden hover:shadow-xl transition-all"
          >
            <div className="p-8 pb-0">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-6">
                <div className="flex-1">
                  <span className="text-[10px] font-black uppercase tracking-widest text-primary bg-primary/5 px-3 py-1.5 rounded-full border border-primary/10">Agentes IA Autónomos</span>
                  <h3 className="text-2xl font-black mt-4 mb-2 tracking-tight">Tu equipo de IA que nunca para</h3>
                  <p className="text-foreground/60 text-sm font-medium leading-relaxed max-w-2xl">
                    Despliega tantos agentes como necesites, entrenados con la documentación y prompting de cada empresa. Escogen el modelo más eficiente por tarea, se hablan entre ellos y trabajan de forma autónoma cuando tú no estás.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3 md:justify-end">
                  {["🧠 Multi-modelo", "🔗 Comunicación entre agentes", "📄 Entrenados con tus docs", "🌙 Autónomos 24/7"].map((tag, i) => (
                    <span key={i} className="px-3 py-1.5 rounded-full bg-muted text-[10px] font-black uppercase tracking-widest text-foreground/50 border border-gray-100 whitespace-nowrap">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="mx-6 mb-6 rounded-[28px] overflow-hidden bg-muted aspect-[16/6] border border-gray-100">
              <Image src="/assets/platform_agents.png" alt="Agentes IA Autónomos — AutoProcessX" width={1600} height={600} className="w-full h-full object-cover object-top" />
            </div>
          </motion.div>
        </div>

        <FinalCTA />
      </div>
      <Footer />
    </main>
  )
}

