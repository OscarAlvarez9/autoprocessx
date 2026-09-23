// Única fuente de verdad de las categorías del blog.
//
// La usa lib/contentful.ts para decidir en qué categoría cae cada entrada, y
// next.config.ts para generar las redirecciones 301 de los slugs antiguos.
// Antes vivían en dos sitios y se desincronizaron: el código entendía 13
// alias pero solo 3 tenían redirección, así que 10 URLs de categoría daban
// 404 en vez de redirigir. Si se añade un alias aquí, la redirección sale sola.
//
// Este fichero no debe importar nada: lo carga next.config al arrancar.

export const CATEGORIES = ["seo", "geo", "automatizaciones", "agentes-ia", "ia-empresas"] as const

export type CategorySlug = (typeof CATEGORIES)[number]

/**
 * Valores antiguos o alternativos que Contentful todavía puede devolver, y la
 * categoría real a la que resuelven. Las claves van en forma de slug
 * (minúsculas, sin acentos, con guiones) porque se comparan tras slugificar.
 */
export const CATEGORY_ALIASES: Record<string, CategorySlug> = {
    // El desplegable de Contentful aún ofrece estas tres, que ya no son
    // categorías propias del sitio.
    "plataforma-ia": "ia-empresas",
    "plataformas-ia": "ia-empresas",
    "ia-news": "ia-empresas",
    "chatbots": "agentes-ia",
    // Variantes sueltas vistas en entradas antiguas.
    "plataformas": "ia-empresas",
    "noticias": "ia-empresas",
    "news": "ia-empresas",
    "chatbot": "agentes-ia",
    "agentes": "agentes-ia",
    "seo-ecommerce": "seo",
    "ecommerce": "seo",
    "automatizacion": "automatizaciones",
    "automation": "automatizaciones",
}

/** Categoría a la que va una entrada sin categoría reconocible. */
export const CATEGORY_FALLBACK: CategorySlug = "ia-empresas"
