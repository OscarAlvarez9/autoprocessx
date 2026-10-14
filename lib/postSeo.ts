// Title y meta description de los artículos del blog, escritos a mano. Por
// defecto el title es el título del post en Contentful más " | SEOscar", y la
// meta es su excerpt: en muchos casos pasaban de 60 caracteres, prometían de
// más o arrastraban la marca antigua. Lo que no esté aquí sigue con lo de
// Contentful.
//
// Los title van sin " | SEOscar": en un artículo la marca resta caracteres a
// la keyword y no aporta.

export const POST_SEO: Record<string, { title?: string; description?: string }> = {
  "seo-ecommerce": { title: "SEO para ecommerce: la guía para tiendas que ya venden" },
  "que-es-geo": {
    title: "Qué es GEO (Generative Engine Optimization) y cómo aplicarlo",
    description: "Qué es GEO, en qué se diferencia del SEO y qué hacer para que ChatGPT, Perplexity y Google AI citen tu web. Guía práctica con ejemplos de tiendas reales.",
  },
  "como-aparecer-en-chatgpt": { title: "Cómo aparecer en ChatGPT como empresa: guía práctica 2026" },
  "un-ano-ai-mode-espana": { title: "AI Mode de Google, un año en España: qué cambia en tiendas" },
  "agentic-commerce-tiendas": { title: "Agentic commerce en España: qué es real hoy y qué es humo" },
  "ai-act-chatbot-tienda-online": { title: "Artículo 50 del AI Act: qué debe hacer tu chatbot ya" },
  "ai-chatbot-empresa": {
    title: "AI chatbot vs chatbot tradicional: qué cambia en 2026",
    description: "Qué diferencia a un chatbot con IA conectado a tus datos de uno de guiones rígidos: cuándo compensa, qué cuesta mantenerlo y casos en web y WhatsApp.",
  },
  "aplicaciones-ia-corporativas": { title: "Aplicaciones IA corporativas: qué son y cuándo invertir" },
  "arquitectura-seo-por-que-tu-web-es-un-laberinto-sin-salida-y-como-arreglarlo": {
    title: "Arquitectura SEO: cómo arreglar una web que es un laberinto",
    description: "Tu arquitectura web decide qué posiciona y qué queda enterrado. Cómo detectar páginas huérfanas, profundidad excesiva y canibalizaciones en tu auditoría.",
  },
  // Sin el "ROI 6-8 meses" ni las "1000+ facturas/mes" de la meta de Contentful: no están respaldados.
  "automatizacion-facturas-ia": {
    title: "Automatizar facturas con IA: OCR, clasificación y ERP",
    description: "Cómo automatizar la gestión de facturas con IA: OCR, clasificación y envío al ERP con un pipeline de n8n, Claude y Supabase, paso a paso.",
  },
  "automatizaciones-black-friday": { title: "Black Friday 2026: 7 automatizaciones para tu tienda online" },
  "automatizaciones-ia-empresas": { title: "Automatizaciones IA en empresas: qué son y cuándo compensan" },
  // Sin el "72 % de conversión" de la meta de Contentful: no está demostrado.
  "chatbot-whatsapp-empresa": {
    title: "Chatbot WhatsApp para empresa: cómo montar uno que venda",
    description: "Guía para montar un chatbot de WhatsApp con IA que cualifique leads 24/7 en tu empresa: stack con n8n y Claude y cómo conectarlo a tu CRM.",
  },
  "chatgpt-ads-espana": { title: "ChatGPT Ads en España: qué es y qué significa para tu tienda" },
  "claude-seo-es-tan-bueno-como-parece-o-nos-va-a-quitar-el-trabajo": {
    title: "Claude para SEO: qué hace bien y dónde no llega",
    description: "¿Sirve Claude para el SEO de verdad? Lo probé: lo que hace bien, dónde falla y por qué no sustituye el criterio de un consultor SEO. Análisis sin humo.",
  },
  "eu-ai-act-empresas": { title: "EU AI Act 2026: qué exige y cómo afecta a tu empresa" },
  "google-universal-cart-ucp": { title: "Universal Cart de Google: qué es y cómo afecta a tu tienda" },
  "ia-empresas-espana-2026": {
    title: "IA en empresas españolas 2026: datos de adopción por sector",
    description: "Cuántas empresas españolas usan IA en 2026, en qué sectores y qué las frena: datos de McKinsey, Gartner y AMETIC, barreras y lo que cambia el AI Act.",
  },
  "multi-agent-systems": { title: "Multi-agent systems: cuándo necesitas más de un agente IA" },
  "n8n-vs-make-vs-zapier": { title: "n8n vs Make vs Zapier: comparativa honesta para 2026" },
  "que-es-rag": { title: "Qué es RAG (Retrieval-Augmented Generation) y para qué sirve" },
}
