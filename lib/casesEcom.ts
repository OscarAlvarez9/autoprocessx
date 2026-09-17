// Casos de éxito, agrupados por servicio. Honestidad primero: NO publicamos
// métricas ni testimonios inventados. Los datos duros van como `[[ dato real ]]`
// hasta que el cliente confirma la cifra. La narrativa (reto, solución, qué
// hice, stack) describe trabajo real prestado. Voz en primera persona del
// singular: los casos los firma Óscar, no un "nosotros" de agencia.

import { projects, type Project } from "./projects"

export type EcomCaseMock = "marea" | "farmacia" | "totfinestra"
export type ArtKey = "store" | "geo" | "roas" | "conversion" | "n8n" | "shopify"
export type ServiceKey = "crecimiento" | "seo" | "automatizacion" | "amedida"
export type CaseVisual = { mock: EcomCaseMock } | { art: ArtKey } | { logo: string }

export interface Caso {
  slug: string
  client: string
  sector: string
  platform: string
  service: ServiceKey
  visual: CaseVisual
  summary: string
  reto: string
  solucion: string
  did: string[]
  /** Igual que `did` pero con la explicación de cada paso, cuando existe. */
  didDetail?: { title: string; text: string }[]
  stack: string[]
  /** Métricas: si no hay `value` confirmado, se muestra el hueco `[[ dato ]]`. */
  metrics: { value?: string; label: string; note: string }[]
  publishedAt: string
}

// Servicios en el orden en que se agrupan en el listado.
export const SERVICES: { key: ServiceKey; label: string; href: string; blurb: string }[] = [
  { key: "crecimiento", label: "Crecimiento ecommerce", href: "/servicios/crecimiento-ecommerce", blurb: "Más tráfico que compra y más visitas que convierten." },
  { key: "seo", label: "SEO y posicionamiento", href: "/servicios/crecimiento-ecommerce", blurb: "Tráfico orgánico y visibilidad que traen clientes que compran." },
  { key: "automatizacion", label: "Automatización", href: "/servicios/automatizaciones", blurb: "n8n orquestando la operativa que te come el día." },
  { key: "amedida", label: "Aplicaciones a medida", href: "/servicios/a-medida", blurb: "Plataformas propias cuando el stack estándar no llega." },
]

export const cases: Caso[] = [
  // ---------- Crecimiento ecommerce ----------
  {
    slug: "marea-es",
    client: "marea.es",
    sector: "Relojería · ecommerce",
    platform: "WooCommerce",
    service: "crecimiento",
    visual: { mock: "marea" },
    summary: "Automatización del catálogo completo y SEO técnico sobre WooCommerce: 2.293 referencias que ahora llegan solas del proveedor a la tienda.",
    reto: "Un catálogo de más de 2.200 referencias gestionado a mano desde hojas de cálculo del proveedor. Las fichas se creaban una a una y las fotos se subían a mano, así que los datos que producto mantenía en el sheet nunca llegaban a la tienda. Además, los diez filtros de la barra lateral no funcionaban: WooCommerce solo filtra por atributos globales y todo el catálogo los tenía como locales.",
    solucion: "Un ecosistema de 19 automatizaciones en n8n que cubre el ciclo de vida completo del producto, desde el alta con descripción y meta generadas con IA hasta las fotos, el stock y la publicación controlada. En paralelo, migración de atributos a globales con normalización de vocabulario para dejar los filtros operativos, y trabajo de estructura y diseño sobre la propia tienda.",
    did: [
      "19 automatizaciones en n8n: alta de producto, imágenes, stock, nombres, categorías y variantes.",
      "Descripción larga y meta description generadas con IA a partir del sheet del proveedor.",
      "Migración de atributos locales a globales con normalización de vocabulario: filtros operativos por fin.",
      "Estructura y diseño de la tienda, y saneado de slugs para cortar la canibalización.",
    ],
    stack: ["WooCommerce", "n8n", "Claude", "Rank Math", "Google Sheets", "Dropbox"],
    metrics: [
      { value: "3.060", label: "clics desde Google", note: "primera semana en producción" },
      { value: "13,6 %", label: "CTR medio en Search Console", note: "posición media 5,6" },
    ],
    publishedAt: "2026-03-01",
  },
  {
    slug: "farmacia-garcia-del-cerro",
    client: "Farmacia García del Cerro",
    sector: "Salud y parafarmacia · ecommerce",
    platform: "Shopify",
    service: "crecimiento",
    visual: { mock: "farmacia" },
    summary: "Motor de contenido SEO automatizado sobre Shopify para captar tráfico orgánico que llega a comprar.",
    reto: "Una farmacia con equipo asistencial a tiempo completo y sin departamento de marketing. El contenido digital era esporádico, sin plan editorial ni keywords objetivo, y el tráfico orgánico no crecía.",
    solucion: "Construí un motor de contenido autónomo que investiga temas con volumen real, redacta con tono profesional sanitario y publica en el CMS con los campos SEO listos. El equipo solo revisa antes de publicar, manteniendo el control editorial.",
    did: [
      "Calendario editorial SEO anual orientado a intención de compra.",
      "Pipeline de contenido con LLM anclado a datos reales de búsqueda.",
      "Publicación automatizada en el CMS con Schema y meta listos.",
      "Monitorización continua de posiciones con Search Console.",
    ],
    stack: ["Shopify", "n8n", "Claude", "Contentful", "Search Console"],
    metrics: [
      { value: "TOP 20", label: "farmacias de España", note: "visibilidad orgánica" },
      { value: "+5.000", label: "referencias en catálogo", note: "alcance nacional" },
    ],
    publishedAt: "2025-09-15",
  },
  {
    slug: "totfinestra",
    client: "Totfinestra",
    sector: "Ventanas de aluminio a medida · B2C",
    platform: "Web nativa",
    service: "crecimiento",
    visual: { mock: "totfinestra" },
    summary: "Web de ventanas a medida enfocada a captar y cualificar solicitudes de presupuesto.",
    reto: "Un negocio de ventanas a medida donde la venta no es un carrito, sino un presupuesto. La web tenía que transmitir oficio y convertir la visita en una solicitud cualificada.",
    solucion: "Rehice la web para dejar clara la propuesta (ventanas de aluminio a medida) y guiar hacia el presupuesto, con SEO local para captar la demanda de la zona. Todo sobre una base rápida y medible.",
    did: [
      "Web enfocada a la solicitud de presupuesto como conversión principal.",
      "SEO local para captar demanda de proximidad.",
      "Base técnica rápida y medible (Core Web Vitals en verde).",
    ],
    stack: ["Web nativa", "SEO local", "CRO", "Core Web Vitals"],
    metrics: [
      { value: "+70 %", label: "clientes potenciales", note: "captación desde la web" },
      { value: "+10 %", label: "facturación anual", note: "primer año con la web nueva" },
    ],
    publishedAt: "2025-12-01",
  },

  // ---------- Automatización ----------
  {
    slug: "pelican-catchy-infraestructura-ia",
    client: "Pelican Catchy",
    sector: "Marketing digital · agencia",
    platform: "n8n self-hosted",
    service: "automatizacion",
    visual: { logo: "/assets/pelican_catchy_logo.png" },
    summary: "Arquitectura multi-agente que automatiza 8 procesos de marketing en paralelo: estrategia, SEO, publicación, tareas y reporting.",
    reto: "Ocho procesos manuales desconectados entre sí, con datos duplicados, retrasos en la distribución de tareas y un equipo saturado de trabajo operativo de bajo valor.",
    solucion: "Arquitectura de agentes paralelos en n8n que procesan a la vez estrategia de contenido, descripciones SEO, publicación en redes, gestión de tareas en Asana y notificaciones de estado al equipo.",
    did: [
      "Mapeo de los 8 procesos manuales y sus dependencias.",
      "Arquitectura multi-agente con flujos independientes que se sincronizan en puntos de control.",
      "Integración de Metricool, Asana y WhatsApp con los modelos LLM.",
      "Dashboard de estado con alertas automáticas ante fallos o retrasos.",
    ],
    stack: ["n8n", "Claude", "Metricool API", "Asana API", "WhatsApp Business API"],
    metrics: [
      { value: "187", label: "nodos en producción", note: "8 workflows, 5 sistemas" },
      { value: "122", label: "páginas de estrategia por ejecución", note: "de la transcripción al Google Doc" },
    ],
    publishedAt: "2025-11-10",
  },
  // ---------- Aplicaciones a medida ----------
  {
    slug: "business-suite-ia-plataforma-corporativa",
    client: "Business Suite IA",
    sector: "Producto propio · SaaS",
    platform: "Next.js + n8n",
    service: "amedida",
    visual: { logo: "/assets/businessoslogo.jpeg" },
    summary: "Plataforma corporativa sobre agentes IA: CRM, pipeline, tareas, calendario, propuestas y agentes autónomos en un solo entorno.",
    reto: "Las herramientas SaaS genéricas no están diseñadas para operar con agentes IA de forma nativa. Cada integración requería middleware costoso y los datos quedaban fragmentados entre plataformas.",
    solucion: "Arquitectura full-stack propia con Next.js, PostgreSQL y n8n como motor de orquestación. Los agentes IA acceden a todos los módulos: crean tareas, actualizan el CRM y generan propuestas sin intervención humana.",
    did: [
      "Esquema de datos unificado que conecta CRM, pipeline, tareas y calendario.",
      "Módulos core de gestión de clientes y pipeline de ventas.",
      "Motor de agentes autónomos con tool calling sobre la base de datos.",
      "Despliegue enterprise en AWS con CI/CD.",
    ],
    stack: ["Next.js", "PostgreSQL + Prisma", "n8n", "Claude", "AWS"],
    metrics: [
      { label: "Módulos en producción", note: "un solo entorno" },
      { label: "Suscripciones SaaS sustituidas", note: "coste recurrente" },
    ],
    publishedAt: "2026-01-20",
  },
  {
    slug: "opoai-plataforma-estudio-oposiciones",
    client: "OpoAI",
    sector: "EdTech · legal",
    platform: "Next.js + RAG",
    service: "amedida",
    visual: { logo: "/assets/opoai_logo.png" },
    summary: "Plataforma SaaS de oposiciones de Justicia con tutor jurídico que cita el BOE, y la estrategia de contenido y GEO que la está sacando de depender de su propia marca.",
    reto: "Una categoría que pasó de dos actores a veinte en un año, todos con la misma propuesta y la misma estética. Tras migrar de dominio en junio, Google empezaba de cero y el 95 % de los clics venían de buscar la marca: la web era una landing de producto, sin nada que capturase lo que busca un opositor.",
    solucion: "Plataforma full-stack con RAG sobre el temario oficial y tutor que cita la fuente en cada respuesta, más una arquitectura de contenido paralela organizada por cuerpo e intención de búsqueda (41 URLs), anclada al BOE y preparada para que la citen los modelos de lenguaje.",
    did: [
      "Ingesta y vectorización del temario oficial: 133.889 fragmentos de 131 temas.",
      "Tutor IA conversacional anclado, con citación obligatoria del artículo.",
      "Arquitectura de contenido por cuerpo e intención, con 41 URLs en sitemap.",
      "Trabajo de GEO: llms.txt, datos estructurados y rastreo de IA sin bloquear.",
    ],
    stack: ["Next.js", "Claude", "PostgreSQL + pgvector", "n8n", "RAG", "Search Console", "Stripe"],
    metrics: [
      { value: "+209 %", label: "impresiones en un mes", note: "de 1.314 a 4.066" },
      { value: "765", label: "impresiones en AI Search", note: "en 28 días" },
    ],
    publishedAt: "2025-12-05",
  },
]

/* ---------- Casos SEO / web (adaptados de lib/projects) ---------- */

// Proyectos ya representados como caso propio arriba (evitar duplicado).
const SEO_SKIP = new Set(["marea-es", "totfinestra", "garcia-del-cerro"])
// Artefactos rotados para dar variedad visual al grupo SEO.
const ART_ROTATION: ArtKey[] = ["store", "geo", "roas", "conversion"]

function projectToCaso(p: Project, i: number): Caso {
  return {
    slug: p.slug,
    client: p.client,
    sector: p.tags[0] ? `${p.tags[0]} · posicionamiento` : "SEO y posicionamiento",
    platform: p.tech_stack[0] ?? "Web",
    service: "seo",
    visual: { art: ART_ROTATION[i % ART_ROTATION.length] },
    summary: p.summary,
    reto: p.about.challenge,
    solucion: `${p.strategy.title}. ${p.strategy.steps[0]?.text ?? ""}`.trim(),
    did: p.strategy.steps.map((s) => s.title),
    didDetail: p.strategy.steps.map((s) => ({ title: s.title, text: s.text })),
    stack: p.tech_stack,
    metrics: p.results.metrics.slice(0, 2).map((m) => ({ value: m.value, label: m.label, note: m.note })),
    publishedAt: "2025-06-01",
  }
}

export function seoCases(): Caso[] {
  return projects.filter((p) => !SEO_SKIP.has(p.slug)).map((p, i) => projectToCaso(p, i))
}

export function casesByService(key: ServiceKey): Caso[] {
  if (key === "seo") return seoCases()
  return cases.filter((c) => c.service === key)
}

export function getCase(slug: string): Caso | undefined {
  const hand = cases.find((c) => c.slug === slug)
  if (hand) return hand
  const p = projects.find((pr) => pr.slug === slug && !SEO_SKIP.has(pr.slug))
  return p ? projectToCaso(p, 0) : undefined
}

export function allCaseSlugs(): string[] {
  return [...cases.map((c) => c.slug), ...seoCases().map((c) => c.slug)]
}

/** Foto de ambiente de marca por convención de slug (public/assets/gen). */
export function casePhoto(caso: Caso): string {
  return `/assets/gen/brand-${caso.slug}.png`
}

/** Etiqueta corta para el pie de la card: "relojería · WooCommerce". */
export function caseVertical(caso: Caso): string {
  const sector = caso.sector.split("·")[0].trim().toLowerCase()
  return `${sector} · ${caso.platform}`
}
