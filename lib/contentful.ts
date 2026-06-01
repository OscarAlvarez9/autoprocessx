import { createClient } from "contentful"
import type { Document } from "@contentful/rich-text-types"
import {
    blogPosts as seedPosts,
    getPostSeed,
    getPostsByCategorySeed,
    sortedSeedPosts,
    type BlogPost,
    type CategorySlug,
} from "./blog"

const SPACE_ID = process.env.CONTENTFUL_SPACE_ID
const DELIVERY_TOKEN = process.env.CONTENTFUL_DELIVERY_TOKEN
const PREVIEW_TOKEN = process.env.CONTENTFUL_PREVIEW_TOKEN
const ENVIRONMENT = process.env.CONTENTFUL_ENVIRONMENT ?? "master"
const CONTENT_TYPE = process.env.CONTENTFUL_CONTENT_TYPE ?? "articulo"

const isConfigured = Boolean(SPACE_ID && DELIVERY_TOKEN)

export const contentfulConfigured = isConfigured

const deliveryClient = isConfigured
    ? createClient({
          space: SPACE_ID!,
          accessToken: DELIVERY_TOKEN!,
          environment: ENVIRONMENT,
      })
    : null

const previewClient =
    isConfigured && PREVIEW_TOKEN
        ? createClient({
              space: SPACE_ID!,
              accessToken: PREVIEW_TOKEN,
              environment: ENVIRONMENT,
              host: "preview.contentful.com",
          })
        : null

const getClient = (preview = false) => {
    if (preview && previewClient) return previewClient
    return deliveryClient
}

/**
 * Contentful content type (default ID: `articulo`, override via CONTENTFUL_CONTENT_TYPE env).
 *
 * Field IDs (Spanish):
 *  - titulo          (Short text · required)
 *  - slug            (Short text · required · unique)
 *  - fecha           (Date · required)
 *  - categoria       (Short text · required · valid values: "ia-news" | "plataformas-ia" | "automatizaciones" | "chatbots" | "geo")
 *  - imagen          (Media · single asset · optional)
 *  - metadescripcion (Long text · required · used as excerpt and meta description)
 *  - texto           (Rich Text · required · article body)
 *
 * Optional/derived: tags & author default; readingMinutes auto-calculated from `texto`.
 */
interface RawFields {
    titulo?: string
    slug?: string
    metadescripcion?: string
    categoria?: unknown
    fecha?: string
    imagen?: { fields?: { file?: { url?: string } } }
    /** May be Rich Text (Document) or plain Long Text (string) depending on Contentful field type. */
    texto?: Document | string
    /** Common alternative field names — tried as fallback if `texto` is empty */
    cuerpo?: Document | string
    contenido?: Document | string
    body?: Document | string
    content?: Document | string
    descripcion?: Document | string
    /** Optional extras if you ever add them */
    tags?: string[]
    autor?: string
    minutosLectura?: number
    [key: string]: unknown
}

const extractBody = (fields: RawFields): Document | string | undefined => {
    return (
        fields.texto ??
        fields.cuerpo ??
        fields.contenido ??
        fields.body ??
        fields.content ??
        fields.descripcion
    )
}

interface RawEntry {
    fields: RawFields
}

interface RawCollection {
    items: RawEntry[]
}

const buildCoverUrl = (asset?: RawFields["imagen"]): string | undefined => {
    const url = asset?.fields?.file?.url
    if (!url || typeof url !== "string") return undefined
    return url.startsWith("//") ? `https:${url}` : url
}

/** Walk a Rich Text Document or plain string and return total word count. */
const countWords = (input?: Document | string): number => {
    if (!input) return 0
    if (typeof input === "string") {
        return input.trim().split(/\s+/).filter(Boolean).length
    }
    let count = 0
    const walk = (node: unknown) => {
        if (!node || typeof node !== "object") return
        const n = node as { nodeType?: string; value?: string; content?: unknown[] }
        if (n.nodeType === "text" && typeof n.value === "string") {
            count += n.value.trim().split(/\s+/).filter(Boolean).length
        }
        if (Array.isArray(n.content)) n.content.forEach(walk)
    }
    walk(input)
    return count
}

const VALID_CATEGORIES: CategorySlug[] = [
    "ia-news",
    "plataformas-ia",
    "automatizaciones",
    "chatbots",
    "geo",
]

// Keys must be in slugified form (lowercase, no accents, hyphen-separated)
// because normalizeCategory() runs slugify() before looking them up.
const CATEGORY_ALIASES: Record<string, CategorySlug> = {
    "plataforma-ia": "plataformas-ia",
    "plataformas": "plataformas-ia",
    "ia-news": "ia-news",
    "noticias": "ia-news",
    "news": "ia-news",
    "automatizacion": "automatizaciones",
    "automation": "automatizaciones",
    "chatbot": "chatbots",
}

/**
 * Normalize any string into a URL-safe slug:
 * lowercases, strips accents/diacritics (á→a, ñ→n), and collapses
 * any run of non-alphanumeric chars into a single hyphen.
 */
const slugify = (raw?: string): string =>
    (raw ?? "")
        .normalize("NFD")
        .replace(/[̀-ͯ]/g, "")
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "")

const extractCategoryString = (raw: unknown): string | undefined => {
    if (!raw) return undefined
    if (typeof raw === "string") return raw
    if (Array.isArray(raw)) return extractCategoryString(raw[0])
    if (typeof raw === "object") {
        const o = raw as Record<string, unknown>
        // Reference entry: { fields: { slug, name } }
        const fields = o.fields as Record<string, unknown> | undefined
        if (fields?.slug && typeof fields.slug === "string") return fields.slug
        if (fields?.name && typeof fields.name === "string") return fields.name
        // Tag reference: { sys: { id } }
        const sys = o.sys as Record<string, unknown> | undefined
        if (sys?.id && typeof sys.id === "string") return sys.id
    }
    return undefined
}

const normalizeCategory = (raw: unknown): CategorySlug => {
    const value = extractCategoryString(raw)
    if (!value) return "ia-news"
    const slug = slugify(value)
    if (VALID_CATEGORIES.includes(slug as CategorySlug)) return slug as CategorySlug
    if (slug in CATEGORY_ALIASES) return CATEGORY_ALIASES[slug]
    return "ia-news"
}

const cleanSlug = (raw?: string) => slugify(raw)

const mapEntry = (entry: RawEntry): BlogPost => {
    const f = entry.fields
    const body = extractBody(f)
    const words = countWords(body)
    const minutes = f.minutosLectura ?? Math.max(1, Math.round(words / 220))
    return {
        slug: cleanSlug(f.slug),
        title: f.titulo ?? "",
        excerpt: f.metadescripcion ?? "",
        category: normalizeCategory(f.categoria),
        date:
            typeof f.fecha === "string"
                ? f.fecha.slice(0, 10)
                : new Date().toISOString().slice(0, 10),
        readingMinutes: minutes,
        tags: f.tags ?? [],
        author: f.autor ?? "AutoProcessX",
        cover: buildCoverUrl(f.imagen),
    }
}

export async function fetchAllPosts({ preview = false }: { preview?: boolean } = {}): Promise<BlogPost[]> {
    const client = getClient(preview)
    if (!client) return []
    try {
        const res = (await client.getEntries({
            content_type: CONTENT_TYPE,
            order: ["-fields.fecha"],
            limit: 100,
        } as never)) as unknown as RawCollection
        const posts = res.items.map(mapEntry)
        // DEV diagnostic: see how each post's raw `categoria` field maps to a slug.
        // If an "Automatizaciones" post shows category "ia-news" here, the raw value
        // didn't match — copy the raw value printed and add it to CATEGORY_ALIASES.
        if (process.env.NODE_ENV !== "production") {
            console.log(
                "[contentful] category mapping:",
                res.items.map((e, i) => ({
                    slug: posts[i].slug,
                    rawCategoria: e.fields.categoria,
                    normalized: posts[i].category,
                }))
            )
        }
        return posts
    } catch (err) {
        console.error("[contentful] fetchAllPosts failed:", err)
        return []
    }
}

export async function fetchPostsByCategory(
    category: CategorySlug,
    { preview = false }: { preview?: boolean } = {}
): Promise<BlogPost[]> {
    const client = getClient(preview)
    if (!client) return []
    try {
        const res = (await client.getEntries({
            content_type: CONTENT_TYPE,
            "fields.categoria": category,
            order: ["-fields.fecha"],
            limit: 100,
        } as never)) as unknown as RawCollection
        return res.items.map(mapEntry)
    } catch (err) {
        console.error("[contentful] fetchPostsByCategory failed:", err)
        return []
    }
}

export async function fetchPostBySlug(
    slug: string,
    { preview = false }: { preview?: boolean } = {}
): Promise<{ post: BlogPost; body?: Document | string } | null> {
    const client = getClient(preview)
    if (!client) return null
    try {
        const res = (await client.getEntries({
            content_type: CONTENT_TYPE,
            "fields.slug": slug,
            limit: 1,
        } as never)) as unknown as RawCollection
        let entry = res.items[0]
        // Fallback: the stored slug may contain accents/casing that differ from
        // the normalized URL slug, so an exact field match can miss. Scan all
        // entries and match on the slugified value.
        if (!entry) {
            const all = (await client.getEntries({
                content_type: CONTENT_TYPE,
                limit: 100,
            } as never)) as unknown as RawCollection
            entry = all.items.find((e) => cleanSlug(e.fields.slug) === slug) as RawEntry
        }
        if (!entry) return null
        // DEBUG: log fields received so you can see what Contentful is returning
        if (process.env.NODE_ENV !== "production") {
            const keys = Object.keys(entry.fields)
            const types = Object.fromEntries(
                keys.map((k) => {
                    const v = (entry.fields as Record<string, unknown>)[k]
                    return [k, typeof v === "object" && v !== null ? (Array.isArray(v) ? "array" : (v as { nodeType?: string }).nodeType ?? "object") : typeof v]
                })
            )
            console.log(`[contentful] post "${slug}" fields:`, types)
        }
        return {
            post: mapEntry(entry),
            body: extractBody(entry.fields),
        }
    } catch (err) {
        console.error("[contentful] fetchPostBySlug failed:", err)
        return null
    }
}

export async function fetchAllSlugs(): Promise<string[]> {
    const client = getClient(false)
    if (!client) return []
    try {
        const res = (await client.getEntries({
            content_type: CONTENT_TYPE,
            select: ["fields.slug"],
            limit: 200,
        } as never)) as unknown as RawCollection
        return res.items.map((i) => cleanSlug(i.fields.slug)).filter(Boolean)
    } catch (err) {
        console.error("[contentful] fetchAllSlugs failed:", err)
        return []
    }
}

/* ------------------------------------------------------------------ */
/*  Unified getters                                                   */
/*  - If Contentful is configured (env vars set) → only Contentful.   */
/*  - If NOT configured → fall back to local seed posts.              */
/* ------------------------------------------------------------------ */

export async function getAllPosts(): Promise<BlogPost[]> {
    if (!isConfigured) return sortedSeedPosts()
    return fetchAllPosts()
}

export async function getPostsByCategory(category: CategorySlug): Promise<BlogPost[]> {
    if (!isConfigured) return getPostsByCategorySeed(category)
    const all = await fetchAllPosts()
    return all.filter((p) => p.category === category)
}

export async function getPostWithBody(
    slug: string
): Promise<{ post: BlogPost; body?: Document | string } | null> {
    if (!isConfigured) {
        const seed = getPostSeed(slug)
        return seed ? { post: seed } : null
    }
    return fetchPostBySlug(slug)
}

export async function getAllPostSlugs(): Promise<string[]> {
    if (!isConfigured) return seedPosts.map((p) => p.slug)
    return fetchAllSlugs()
}

/** Debug helper: returns raw Contentful fields for a slug (dev only). */
export async function debugFetchRaw(slug: string): Promise<Record<string, unknown> | null> {
    const client = getClient(false)
    if (!client) return null
    try {
        const res = (await client.getEntries({
            content_type: CONTENT_TYPE,
            "fields.slug": slug,
            limit: 1,
        } as never)) as unknown as RawCollection
        const entry = res.items[0]
        if (!entry) return null
        const summary: Record<string, unknown> = {}
        for (const [k, v] of Object.entries(entry.fields)) {
            if (v && typeof v === "object") {
                if (Array.isArray((v as { content?: unknown[] }).content) && (v as { nodeType?: string }).nodeType === "document") {
                    summary[k] = `[Rich Text Document · ${(v as { content: unknown[] }).content.length} blocks]`
                } else if ("fields" in (v as object) && "sys" in (v as object)) {
                    summary[k] = `[Asset/Entry reference]`
                } else if (Array.isArray(v)) {
                    summary[k] = `[Array · ${v.length} items]`
                } else {
                    summary[k] = `[Object: ${Object.keys(v).join(", ")}]`
                }
            } else if (typeof v === "string") {
                summary[k] = v.length > 80 ? `${v.slice(0, 80)}… (${v.length} chars)` : v
            } else {
                summary[k] = v
            }
        }
        return summary
    } catch (err) {
        console.error("[contentful] debugFetchRaw failed:", err)
        return null
    }
}
