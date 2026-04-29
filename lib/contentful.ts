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
    categoria?: string
    fecha?: string
    imagen?: { fields?: { file?: { url?: string } } }
    /** May be Rich Text (Document) or plain Long Text (string) depending on Contentful field type. */
    texto?: Document | string
    /** Optional extras if you ever add them */
    tags?: string[]
    autor?: string
    minutosLectura?: number
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

const normalizeCategory = (raw?: string): CategorySlug => {
    if (!raw) return "ia-news"
    const slug = raw.trim().toLowerCase().replace(/\s+/g, "-")
    return (VALID_CATEGORIES.includes(slug as CategorySlug) ? slug : "ia-news") as CategorySlug
}

const mapEntry = (entry: RawEntry): BlogPost => {
    const f = entry.fields
    const words = countWords(f.texto)
    const minutes = f.minutosLectura ?? Math.max(1, Math.round(words / 220))
    return {
        slug: f.slug ?? "",
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
        return res.items.map(mapEntry)
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
        const entry = res.items[0]
        if (!entry) return null
        return {
            post: mapEntry(entry),
            body: entry.fields.texto,
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
        return res.items.map((i) => i.fields.slug).filter((s): s is string => Boolean(s))
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
    return fetchPostsByCategory(category)
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
