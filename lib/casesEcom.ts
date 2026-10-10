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
    summary: "Automatización del catálogo completo y Estrategia SEO de venta sobre WooCommerce: 2.293 referencias que ahora llegan solas del proveedor a la tienda.",
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
    summary: "Tienda construida desde cero sobre Shopify que hoy vende de forma independiente, sostenida por la estrategia SEO y un motor de contenido automatizado.",
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
  {
    slug: "clinica-de-la-ansiedad-blog-automatizado",
    client: "Clínica de la Ansiedad",
    sector: "Automatización · blog",
    platform: "n8n",
    service: "automatizacion",
    visual: { art: "n8n" },
    summary: "Una fila del calendario editorial entra y sale un artículo completo en Contentful: texto revisado, imagen de cabecera, metadatos SEO, categoría y autor.",
    reto: "Una consulta pequeña no tiene tiempo para escribir, y en salud mental el contenido es lo que hace crecer la web. El plan editorial tenía 96 artículos para 48 semanas: imposible de sostener a mano sin quitarle horas a la clínica.",
    solucion: "Un workflow en n8n que lee el calendario de Google Sheets, encarga el artículo a un redactor (Claude Opus), lo pasa por un editor (Claude Sonnet), genera la imagen, lo monta en el formato de Contentful con sus FAQ en datos estructurados y marca la fila como hecha. El calendario es el único estado del sistema: se puede relanzar las veces que haga falta y nunca duplica.",
    did: [
      "Calendario editorial en Google Sheets como única fuente de verdad: tema, keywords, estructura y URL.",
      "Dos modelos con papeles distintos: Claude Opus redacta y Claude Sonnet revisa.",
      "Imagen de cabecera con gpt-image-1 y subida a Contentful en cinco pasos, con espera de procesado.",
      "Rich Text de Contentful, FAQPage en JSON-LD y meta description ajustada a su rango.",
    ],
    stack: ["n8n", "Claude", "OpenAI", "Contentful", "Google Sheets", "Schema.org"],
    metrics: [
      { value: "27", label: "nodos en el workflow", note: "del calendario a la entrada en Contentful" },
      { value: "~3 min", label: "por artículo", note: "redacción, revisión, imagen y publicación" },
    ],
    publishedAt: "2026-10-10",
  },
  // ---------- Aplicaciones a medida ----------
  {
    slug: "seoscar-os-plataforma-propia",
    client: "SEOscar OS",
    sector: "Producto propio · SaaS interno",
    platform: "Next.js + Supabase",
    service: "amedida",
    visual: { logo: "/assets/businessoslogo.jpeg" },
    summary: "Plataforma propia que cubre el ciclo completo de un consultor SEO independiente y sustituye ocho suscripciones de 521 $ al mes.",
    reto: "Un consultor que trabaja tiendas online necesita ocho herramientas para operar: investigación SEO, rastreador, medición de visibilidad en IA, prospección, CRM, facturación española y un sitio donde escribir. Son 521,20 $ al mes, pero el problema de fondo era peor: los datos vivían en ocho sitios que no se hablan entre sí, así que la misma tienda existía por duplicado en cada herramienta.",
    solucion: "Una plataforma interna con diez secciones organizadas por el ciclo del negocio, no por tipo de archivo: captar, entregar y herramientas. Cada empresa tiene una sola ficha identificada por su dominio, que reúne la búsqueda que la encontró, su cualificación con evidencia, los rastreos, los correos y sus facturas.",
    did: [
      "Motor de cualificación de leads en tres capas, con evidencia verificable y umbrales editables.",
      "Rastreador propio, analizador de keywords y medidor de visibilidad en respuestas de IA.",
      "Ocho asistentes de IA especializados sobre una sola pasarela, con herramientas reales de Search Console.",
      "CRM, agenda y facturación española con PDF y exportación trimestral.",
    ],
    stack: ["Next.js", "PostgreSQL + Prisma", "Supabase", "Claude", "n8n", "Vercel"],
    metrics: [
      { value: "521 $/mes", label: "en suscripciones sustituidas", note: "ocho herramientas, 6.254 $ al año" },
      { value: "20.805", label: "líneas de código propio", note: "con 496 tests automáticos" },
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
  {
    slug: "clinica-de-la-ansiedad",
    client: "Clínica de la Ansiedad",
    sector: "Salud mental · consulta privada",
    platform: "Next.js",
    service: "seo",
    visual: { art: "geo" },
    summary: "1 de cada 5 visitantes pide cita en el primer mes de la nueva estrategia. Web nueva, contenido, blog automatizado y medición de conversiones desde cero.",
    reto: "La clínica tenía una web en WordPress que no funcionaba como canal. No estaba dada de alta en Search Console, no tenía analítica y no le llegaban pacientes por ahí. Para Google, la clínica casi no existía.",
    solucion: "Web nueva en React, rehecha desde cero y diseñada para convertir, con la reserva y el WhatsApp siempre a mano. Encima, una estrategia de contenido completa con un blog que publica solo y medición de cada clic en \"Reservar\" y en WhatsApp. En el primer mes con la estrategia asentada, 11 de los 51 visitantes pulsaron \"Reservar\". Y solo lleva mes y medio con la estrategia acabada: lo esperable es que siga creciendo en los próximos meses.",
    did: [
      "Web nueva en React, más rápida y con la reserva y el WhatsApp siempre a mano.",
      "Páginas de servicio orientadas a lo que buscan los pacientes y blog con plan editorial propio.",
      "Blog automatizado que publica de forma constante sin quitarle tiempo a la clínica.",
      "Search Console y medición de conversiones: cada clic en Reservar y en WhatsApp queda registrado.",
    ],
    stack: ["Next.js", "React", "Vercel", "Search Console", "GA4", "Schema.org", "SEO local"],
    metrics: [
      { value: "1 de cada 5", label: "visitantes pulsa Reservar", note: "11 de 51 usuarios en el primer mes con la estrategia asentada. GA4, septiembre a octubre de 2026" },
      { value: "17", label: "clics para pedir cita en un mes", note: "15 en Reservar y 2 en WhatsApp, en una web que antes no traía pacientes" },
    ],
    publishedAt: "2026-10-05",
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
  // Los casos de SEO salían solo de lib/projects. Un caso escrito a mano con
  // service "seo" quedaba fuera del listado sin avisar; ahora van los dos,
  // primero los escritos a mano.
  if (key === "seo") return [...cases.filter((c) => c.service === "seo"), ...seoCases()]
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


/**
 * Title de cada ficha, escrito a mano. La fórmula automática
 * ("Caso {cliente} · {plataforma}") describía el stack en vez del trabajo y se
 * pasaba de los 60 caracteres en varios casos. Estos se quedan por debajo.
 */
export const CASE_TITLES: Record<string, string> = {
  "bebubbleibiza": "Caso BebubbleIbiza: SEO local para lujo en Ibiza | SEOscar",
  "quad-studios": "Caso Quad Studios: SEO local con Google Business | SEOscar",
  "peritando-es": "Caso Peritando.es: SEO para el sector pericial | SEOscar",
  "diomento-homelift": "Caso Diomento Homelift: SEO para ascensores | SEOscar",
  "growmybiss": "Caso GrowMyBiss: web y SEO para términos de IA | SEOscar",
  "opoai-plataforma-estudio-oposiciones": "Caso OpoAI: SaaS de oposiciones con IA y GEO | SEOscar",
  "marea-es": "Caso marea.es: Pack Crecimiento ecommerce | SEOscar",
  "salvador-mendoza": "Caso Salvador Mendoza: SEO de marca personal | SEOscar",
  "regalalo-io": "Caso Regalalo.io: recomendador de regalos con IA | SEOscar",
  "seoscar-os-plataforma-propia": "Caso SEOscar OS: 8 herramientas SEO en una plataforma",
  "farmacia-garcia-del-cerro": "Caso Farmacia García del Cerro: Shopify desde cero",
  "pelican-catchy-infraestructura-ia": "Caso Pelican Catchy: marketing con multi-agente IA | SEOscar",
  "totfinestra": "Caso Totfinestra: web de ventanas a medida | SEOscar",
  "controltemp": "Caso ControlTemp: SEO B2B industrial | SEOscar",
  "clinica-de-la-ansiedad": "Clínica de la Ansiedad: 1 de cada 5 visitas pide cita | SEOscar",
  "clinica-de-la-ansiedad-blog-automatizado": "Clínica de la Ansiedad: blog automatizado con IA | SEOscar",
}

/** Title de una ficha: el escrito a mano, y si no, la fórmula anterior. */
export function caseTitle(caso: Caso): string {
  return CASE_TITLES[caso.slug] ?? `Caso ${caso.client} · ${caso.platform} | SEOscar`
}


/**
 * Meta description de cada ficha, escrita a mano. Por defecto se usaba
 * `summary`, que está escrito para leerse dentro de la página y no siempre
 * funciona como reclamo en resultados. Las que no tengan entrada aquí siguen
 * usando el resumen.
 */
export const CASE_DESCRIPTIONS: Record<string, string> = {
  "marea-es": "Pack Crecimiento ecommerce sobre WooCommerce: estrategia SEO de venta y catálogo de 2.293 referencias que llegan solas del proveedor a la tienda.",
  "opoai-plataforma-estudio-oposiciones": "SaaS de oposiciones de Justicia con tutor jurídico que cita el BOE, y la estrategia de contenido y GEO para que deje de depender de su propia marca.",
  "quad-studios": "SEO local para Quad Studios: creación y optimización avanzada de su ficha de Google Business Profile para captar clientes de su zona.",
  "growmybiss": "Web completa, arquitectura y estrategia SEO para posicionar a GrowMyBiss en búsquedas de IA y Growth Marketing.",
  "regalalo-io": "Digitalización y lanzamiento de un recomendador de regalos basado en IA, con estrategia de pre-lanzamiento y posicionamiento desde el primer día.",
  "totfinestra": "Web de ventanas de aluminio a medida diseñada para captar y cualificar solicitudes de presupuesto.",
  "clinica-de-la-ansiedad": "De una web que no traía pacientes a una en la que 1 de cada 5 visitantes pulsa Reservar en el primer mes. Web nueva, contenido y medición.",
  "clinica-de-la-ansiedad-blog-automatizado": "Workflow en n8n que convierte una fila del calendario editorial en un artículo completo en Contentful: texto revisado, imagen, SEO y autor.",
}

/** Meta description de una ficha: la escrita a mano, y si no, el resumen. */
export function caseDescription(caso: Caso): string {
  return CASE_DESCRIPTIONS[caso.slug] ?? caso.summary
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
