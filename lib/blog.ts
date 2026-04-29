export type CategorySlug =
    | "ia-news"
    | "plataformas-ia"
    | "automatizaciones"
    | "chatbots"
    | "geo"

export interface BlogCategory {
    slug: CategorySlug
    name: string
    shortName: string
    description: string
    accent: "pink" | "emerald" | "orange" | "red" | "blue"
}

export const blogCategories: BlogCategory[] = [
    {
        slug: "ia-news",
        name: "IA News",
        shortName: "News",
        description: "Análisis del estado del arte: nuevos modelos, releases, benchmarks y movimientos de mercado en IA.",
        accent: "pink",
    },
    {
        slug: "plataformas-ia",
        name: "Plataformas IA",
        shortName: "Plataformas",
        description: "Cómo se diseñan plataformas IA empresariales: RAG, agentes, módulos integrados y arquitecturas en producción.",
        accent: "emerald",
    },
    {
        slug: "automatizaciones",
        name: "Automatizaciones",
        shortName: "Automation",
        description: "Workflows reales con n8n, Claude y APIs externas. Ingeniería de orquestación con código.",
        accent: "orange",
    },
    {
        slug: "chatbots",
        name: "Chatbots",
        shortName: "Chatbots",
        description: "Agentes conversacionales con RAG, integración omnicanal y sistemas que cierran sin intervención humana.",
        accent: "red",
    },
    {
        slug: "geo",
        name: "GEO",
        shortName: "GEO",
        description: "Generative Engine Optimization. Cómo aparecer citado en ChatGPT, Perplexity y AI Overviews de Google.",
        accent: "blue",
    },
]

export const getCategory = (slug: CategorySlug): BlogCategory | undefined =>
    blogCategories.find((c) => c.slug === slug)

export interface BlogPost {
    slug: string
    title: string
    excerpt: string
    category: CategorySlug
    date: string // ISO yyyy-mm-dd
    readingMinutes: number
    cover?: string
    tags: string[]
    author: string
    /** Optional pre-rendered HTML used by static seed posts. Live Contentful posts use rich-text rendered separately. */
    content?: string
}

/**
 * Local seed posts — used as fallback when Contentful returns 0 entries (e.g. while you populate the CMS).
 * Once you have real entries, the Contentful client returns those instead and these are skipped.
 */

export const blogPosts: BlogPost[] = [
    {
        slug: "claude-4-7-y-el-fin-del-prompting-frágil",
        title: "Claude 4.7 y el fin del prompting frágil",
        excerpt: "El nuevo modelo de Anthropic redefine la fiabilidad en producción. Análisis de cambios reales que afectan a las arquitecturas RAG y a los agentes con tool calling.",
        category: "ia-news",
        date: "2026-04-22",
        readingMinutes: 6,
        tags: ["Claude", "Anthropic", "LLM", "Producción"],
        author: "AutoProcessX",
    },
    {
        slug: "ai-overviews-2026-cambios-criticos",
        title: "AI Overviews en 2026: los cambios críticos que rompen tu SEO",
        excerpt: "Google ha extendido AI Overviews al 100% de queries competitivas. Cómo se reorganiza la visibilidad orgánica y qué señales priorizan ahora los modelos generativos.",
        category: "ia-news",
        date: "2026-04-10",
        readingMinutes: 8,
        tags: ["Google", "AI Overviews", "SGE", "SEO"],
        author: "AutoProcessX",
    },
    {
        slug: "rag-en-produccion-arquitectura-real",
        title: "RAG en producción: arquitectura real, no demo de notebook",
        excerpt: "Lo que separa un RAG de juguete de uno empresarial: chunking semántico, re-ranking, guardrails y observabilidad. Stack completo con pgvector y Claude.",
        category: "plataformas-ia",
        date: "2026-04-18",
        readingMinutes: 12,
        tags: ["RAG", "pgvector", "Vector DB", "Arquitectura"],
        author: "AutoProcessX",
    },
    {
        slug: "agentes-autonomos-con-tool-calling",
        title: "Agentes autónomos con tool calling: del prompt al sistema",
        excerpt: "Cómo construir agentes que crean tareas, actualizan el CRM y generan propuestas sin intervención humana. Patrones, errores comunes y observabilidad.",
        category: "plataformas-ia",
        date: "2026-04-05",
        readingMinutes: 10,
        tags: ["Agentes", "Tool Calling", "Claude", "n8n"],
        author: "AutoProcessX",
    },
    {
        slug: "n8n-vs-zapier-make-comparativa-real",
        title: "n8n vs Zapier vs Make: comparativa real en 2026",
        excerpt: "Por qué cobran por ejecución, qué se rompe a escala y cuándo realmente te conviene autohospedar. Sin marketing, con números.",
        category: "automatizaciones",
        date: "2026-04-20",
        readingMinutes: 9,
        tags: ["n8n", "Zapier", "Make", "Comparativa"],
        author: "AutoProcessX",
    },
    {
        slug: "reporting-seo-autonomo-gsc-claude",
        title: "Reporting SEO autónomo con GSC, GA4 y Claude",
        excerpt: "Cómo automatizar el informe ejecutivo mensual de toda tu cartera de clientes. Workflow real con n8n, APIs de Google y generación HTML lista para enviar.",
        category: "automatizaciones",
        date: "2026-04-08",
        readingMinutes: 11,
        tags: ["SEO", "GSC", "GA4", "n8n"],
        author: "AutoProcessX",
    },
    {
        slug: "chatbot-whatsapp-business-rag",
        title: "Chatbot de WhatsApp Business con RAG: arquitectura completa",
        excerpt: "Stack para un chatbot que resuelve consultas con RAG semántico y escala a humanos cuando hace falta. Plantillas oficiales, contexto y latencia bajo control.",
        category: "chatbots",
        date: "2026-04-15",
        readingMinutes: 9,
        tags: ["WhatsApp", "RAG", "Chatbot", "Claude"],
        author: "AutoProcessX",
    },
    {
        slug: "como-evitar-alucinaciones-en-chatbots",
        title: "Cómo evitar alucinaciones en chatbots empresariales",
        excerpt: "Guardrails, RAG estricto, reranking y validación con tools. Las técnicas que hacen que un agente no se invente respuestas en producción.",
        category: "chatbots",
        date: "2026-04-02",
        readingMinutes: 7,
        tags: ["Guardrails", "RAG", "Hallucinations"],
        author: "AutoProcessX",
    },
    {
        slug: "aparecer-citado-en-chatgpt-y-perplexity",
        title: "Cómo aparecer citado en ChatGPT y Perplexity (GEO 2026)",
        excerpt: "El nuevo SEO B2B no es Google, es ser citado por las IAs. Señales de citabilidad, llms.txt, schema y estructura de contenido que los modelos premian.",
        category: "geo",
        date: "2026-04-25",
        readingMinutes: 10,
        tags: ["GEO", "Perplexity", "ChatGPT", "AI Search"],
        author: "AutoProcessX",
    },
    {
        slug: "llms-txt-guia-implementacion",
        title: "llms.txt: la nueva guía para que las IAs entiendan tu sitio",
        excerpt: "Cómo se estructura, qué incluir, ejemplos reales y por qué los crawlers de OpenAI, Anthropic y Perplexity lo están priorizando frente a robots.txt.",
        category: "geo",
        date: "2026-04-12",
        readingMinutes: 6,
        tags: ["llms.txt", "AI Crawlers", "GEO"],
        author: "AutoProcessX",
    },
]

/** Synchronous seed accessors — only use as fallback when CMS unavailable. */
export const getPostsByCategorySeed = (slug: CategorySlug) =>
    blogPosts
        .filter((p) => p.category === slug)
        .sort((a, b) => b.date.localeCompare(a.date))

export const getPostSeed = (slug: string) =>
    blogPosts.find((p) => p.slug === slug)

export const sortedSeedPosts = () =>
    [...blogPosts].sort((a, b) => b.date.localeCompare(a.date))

export const formatDate = (iso: string) => {
    const d = new Date(iso)
    return d.toLocaleDateString("es-ES", {
        day: "2-digit",
        month: "short",
        year: "numeric",
    })
}
