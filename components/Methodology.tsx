/*
 * Metodología — proceso de trabajo. Reutilizable en páginas de servicio, con
 * presets por variante (pasos + acento propios). Estilo Flagship Light: tarjeta
 * blanca, número en mono, un único acento por sección (vía variable, no rainbow).
 */
import {
  Phone, Search, Workflow, Database, BookOpen, Lightbulb, ClipboardList,
  Rocket, Eye, TrendingUp, Activity, MessageCircle, Gauge,
} from "lucide-react"

type Icon = typeof Phone
type Step = { num: string; title: string; desc: string; Icon: Icon; soon?: boolean }
export type MethodologyVariant = "automatizaciones" | "aplicaciones" | "chatbot" | "conversion" | "crecimiento" | "seo"

type Preset = {
  accent: string
  eyebrow: string
  title: string
  titleAccent: string
  description: string
  steps: Step[]
}

const WHATSAPP: Step = { num: "08", title: "Soporte WhatsApp 24/7", desc: "Comunicación directa y fluida. Tu duda resuelta cuando la tienes.", Icon: MessageCircle }

const PRESETS: Record<MethodologyVariant, Preset> = {
  automatizaciones: {
    accent: "#B4975A",
    eyebrow: "Cómo trabajo",
    title: "Del proceso manual",
    titleAccent: "al flujo autónomo.",
    description: "Un proceso claro y transparente, del primer mapa de tareas al panel de operación en tiempo real.",
    steps: [
      { num: "01", title: "Llamada de objetivos", desc: "Entiendo tus procesos, volúmenes y herramientas para alinear expectativas.", Icon: Phone },
      { num: "02", title: "Mapa de procesos", desc: "Identifico tareas repetitivas y cuellos de botella automatizables.", Icon: Search },
      { num: "03", title: "Diseño del flujo", desc: "Defino la arquitectura: disparadores, lógica determinista y fallbacks.", Icon: Workflow },
      { num: "04", title: "Validación", desc: "Te enseño el flujo y los criterios de éxito antes de construir.", Icon: ClipboardList },
      { num: "05", title: "Implementación", desc: "Construyo en n8n + código, bajo tu firewall, con control de errores.", Icon: Rocket },
      { num: "06", title: "Transparencia total", desc: "Acceso a logs y ejecuciones. Sin cajas negras.", Icon: Eye },
      { num: "07", title: "Monitorización", desc: "Alertas, reintentos y observabilidad de cada ejecución.", Icon: Activity },
      WHATSAPP,
      { num: "09", title: "Dashboard de operación", desc: "Panel para ver ejecuciones y horas ahorradas en tiempo real.", Icon: Gauge, soon: true },
    ],
  },
  aplicaciones: {
    accent: "#6366F1",
    eyebrow: "Cómo trabajo",
    title: "De tus documentos",
    titleAccent: "a una plataforma RAG.",
    description: "Un proceso claro y transparente, del primer caso de uso al panel de la plataforma en tiempo real.",
    steps: [
      { num: "01", title: "Llamada de objetivos", desc: "Entiendo tu caso de uso, tus documentos y tus usuarios.", Icon: Phone },
      { num: "02", title: "Auditoría de datos", desc: "Reviso tus fuentes: documentos, bases de datos y permisos.", Icon: Database },
      { num: "03", title: "Arquitectura RAG", desc: "Diseño la indexación, el modelo de citación y los agentes.", Icon: Lightbulb },
      { num: "04", title: "Prototipo validado", desc: "Validamos respuestas y precisión sobre tu contexto antes de escalar.", Icon: ClipboardList },
      { num: "05", title: "Desarrollo", desc: "Construyo la plataforma nativa (Next.js) con RAG anclado a tu fuente.", Icon: Rocket },
      { num: "06", title: "Transparencia total", desc: "Trazabilidad de respuestas: cada salida cita su fuente.", Icon: Eye },
      { num: "07", title: "Evaluación continua", desc: "Métricas de calidad, control de coste y versionado de prompts.", Icon: TrendingUp },
      WHATSAPP,
      { num: "09", title: "Panel de la plataforma", desc: "Uso, costes y calidad de respuestas en tiempo real.", Icon: Gauge, soon: true },
    ],
  },
  chatbot: {
    accent: "#10B981",
    eyebrow: "Cómo trabajo",
    title: "De tu documentación",
    titleAccent: "a un agente 24/7.",
    description: "Un proceso claro y transparente, del primer canal al panel de conversaciones en tiempo real.",
    steps: [
      { num: "01", title: "Llamada de objetivos", desc: "Entiendo tus canales, tu volumen de consultas y tu tono de marca.", Icon: Phone },
      { num: "02", title: "Base de conocimiento", desc: "Reúno y depuro tu documentación para anclar el RAG.", Icon: BookOpen },
      { num: "03", title: "Diseño conversacional", desc: "Defino flujos, escalado a humano y los límites del bot.", Icon: Lightbulb },
      { num: "04", title: "Validación", desc: "Probamos respuestas y casos límite antes de publicar.", Icon: ClipboardList },
      { num: "05", title: "Despliegue", desc: "Integro en web y WhatsApp con RAG anclado a tu base.", Icon: Rocket },
      { num: "06", title: "Transparencia total", desc: "Revisas conversaciones y las fuentes que cita el agente.", Icon: Eye },
      { num: "07", title: "Mejora continua", desc: "Ajuste con conversaciones reales: no inventa, escala a humano.", Icon: TrendingUp },
      WHATSAPP,
      { num: "09", title: "Dashboard de conversaciones", desc: "Métricas, satisfacción y derivaciones en tiempo real.", Icon: Gauge, soon: true },
    ],
  },
  conversion: {
    accent: "#10B981",
    eyebrow: "Cómo trabajo",
    title: "De la visita que se va",
    titleAccent: "al pedido cerrado.",
    description: "Un proceso claro y transparente, del diagnóstico de fugas a la optimización continua de tu conversión.",
    steps: [
      { num: "01", title: "Llamada de objetivos", desc: "Entiendo tu tienda, tu catálogo y dónde se te escapan las ventas.", Icon: Phone },
      { num: "02", title: "Diagnóstico de fugas", desc: "Detecto los puntos donde el cliente abandona antes de comprar.", Icon: Search },
      { num: "03", title: "Diseño del flujo", desc: "Defino cómo recomienda, resuelve dudas y empuja al checkout.", Icon: Lightbulb },
      { num: "04", title: "Anclaje al catálogo", desc: "Conecto el agente a tu catálogo, precios y stock reales vía RAG.", Icon: Database },
      { num: "05", title: "Despliegue", desc: "Lo integro en web y WhatsApp, sobre tu plataforma actual.", Icon: Rocket },
      { num: "06", title: "Transparencia total", desc: "Revisas conversaciones y las fuentes que cita el agente.", Icon: Eye },
      { num: "07", title: "Medición", desc: "Conversión, recuperación de carrito y consultas resueltas, medidas.", Icon: TrendingUp },
      WHATSAPP,
      { num: "09", title: "Optimización continua", desc: "Ajuste con datos reales para vender un poco más cada mes.", Icon: Gauge },
    ],
  },
  crecimiento: {
    accent: "#3B82F6",
    eyebrow: "Cómo trabajo",
    title: "De la visita perdida",
    titleAccent: "al cliente que repite.",
    description: "Un proceso claro y transparente: atraigo tráfico que compra y lo convierto mejor sobre tu propia tienda, midiendo cada paso.",
    steps: [
      { num: "01", title: "Llamada de objetivos", desc: "Entiendo tu tienda, tu tráfico y dónde se te escapan las ventas.", Icon: Phone },
      { num: "02", title: "Auditoría 360º", desc: "Radiografía de tu visibilidad (SEO/GEO) y de tu conversión (funnel, fichas, checkout).", Icon: Search },
      { num: "03", title: "Estrategia de crecimiento", desc: "Plan priorizado por impacto en ventas: qué tráfico capto y qué fugas corrijo primero.", Icon: Lightbulb },
      { num: "04", title: "Presentación", desc: "Te explico el qué, el cómo y el cuándo antes de empezar a ejecutar.", Icon: ClipboardList },
      { num: "05", title: "Implementación", desc: "SEO técnico, AI Search, optimización de conversión y flujos de venta, sobre tu plataforma.", Icon: Rocket },
      { num: "06", title: "Transparencia total", desc: "Acceso a datos crudos. Sin cajas negras. Sabes en qué se invierte cada euro.", Icon: Eye },
      { num: "07", title: "Informes de negocio", desc: "KPIs claros: tráfico, conversión y ventas. Sin métricas de vanidad.", Icon: TrendingUp },
      WHATSAPP,
      { num: "09", title: "Optimización continua", desc: "Iteración mensual sobre datos reales para crecer de forma sostenida.", Icon: Gauge },
    ],
  },
  seo: {
    accent: "#3B82F6",
    eyebrow: "Cómo trabajo",
    title: "Mi metodología,",
    titleAccent: "paso a paso.",
    description: "Un proceso claro y transparente, de la primera llamada al dashboard de resultados en tiempo real.",
    steps: [
      { num: "01", title: "Llamada de objetivos", desc: "Entiendo tu negocio, tus metas y tus recursos para alinear expectativas.", Icon: Phone },
      { num: "02", title: "Auditoría profunda", desc: "Radiografía completa de tu web: técnica, contenidos y autoridad actual.", Icon: Search },
      { num: "03", title: "Creación de estrategia", desc: "Diseño el plan de acción detallado: keywords, arquitectura y calendario.", Icon: Lightbulb },
      { num: "04", title: "Presentación de estrategia", desc: "Te explico el qué, el cómo y el cuándo antes de empezar a ejecutar.", Icon: ClipboardList },
      { num: "05", title: "Implementación", desc: "Optimización técnica, creación de contenido y link building.", Icon: Rocket },
      { num: "06", title: "Transparencia total", desc: "Acceso a datos crudos. Sin cajas negras. Sabes en qué se invierte cada euro.", Icon: Eye },
      { num: "07", title: "Informes mensuales", desc: "KPIs claros: tráfico, rankings y conversiones. Sin relleno.", Icon: TrendingUp },
      WHATSAPP,
      { num: "09", title: "Dashboard inteligente", desc: "Tu panel para ver el crecimiento orgánico en tiempo real.", Icon: Gauge, soon: true },
    ],
  },
}

export default function Methodology({ variant = "seo", className = "" }: { variant?: MethodologyVariant; className?: string }) {
  const p = PRESETS[variant]
  const a = p.accent

  return (
    <section className={`relative py-16 md:py-24 bg-[#FAFAFA] border-t border-[#E4E4E7] overflow-hidden ${className}`}>
      <div className="absolute top-0 right-0 w-[500px] h-[360px] blur-[150px] rounded-full pointer-events-none" style={{ backgroundColor: `${a}0D` }} aria-hidden />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        {/* Header */}
        <div className="max-w-2xl mb-12 md:mb-16">
          <span className="text-[11px] font-mono font-medium uppercase tracking-wide" style={{ color: a }}>{p.eyebrow}</span>
          <h2 className="text-3xl md:text-4xl font-black tracking-tighter leading-tight mt-3">
            {p.title} <span style={{ color: a }}>{p.titleAccent}</span>
          </h2>
          <p className="text-zinc-600 text-base md:text-lg leading-relaxed mt-4">{p.description}</p>
        </div>

        {/* Grid de pasos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {p.steps.map((s) => (
            <div key={s.num} className="group relative rounded-2xl border border-[#E4E4E7] bg-white p-6 transition-shadow hover:shadow-[0_8px_30px_-18px_rgba(0,0,0,0.2)]">
              <div className="flex items-center justify-between mb-5">
                <span
                  className="h-10 w-10 rounded-xl flex items-center justify-center border"
                  style={{ backgroundColor: `${a}14`, borderColor: `${a}33`, color: a }}
                >
                  <s.Icon className="h-5 w-5" aria-hidden />
                </span>
                <div className="flex items-center gap-2">
                  {s.soon && (
                    <span className="inline-flex items-center rounded-full border border-[#E4E4E7] bg-zinc-50 px-2 py-0.5 text-[9px] font-mono font-medium uppercase tracking-wide text-zinc-500">
                      Pronto
                    </span>
                  )}
                  <span className="font-mono text-2xl font-bold tabular-nums" style={{ color: `${a}59` }}>
                    {s.num}
                  </span>
                </div>
              </div>
              <h3 className="text-lg font-bold tracking-tight text-[#09090B] mb-2">{s.title}</h3>
              <p className="text-zinc-600 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
