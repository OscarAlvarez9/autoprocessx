// Idiomas de la web. El castellano va sin prefijo (/servicios/...) y el
// catalán con /ca delante (/ca/servicios/...). Las rutas son las mismas en los
// dos idiomas: solo cambia el prefijo. El blog solo existe en castellano.

export type Locale = "es" | "ca"

export const SITE_URL = "https://www.seoscar.com"

/** Rutas que NO tienen versión en catalán. */
const ONLY_ES = [/^\/blog(\/|$)/]

export function hasCatalan(path: string): boolean {
  return !ONLY_ES.some((r) => r.test(path))
}

/** Quita el prefijo de idioma: "/ca/metodo" → "/metodo", "/ca" → "/". */
export function stripLocale(path: string): string {
  if (path === "/ca") return "/"
  return path.startsWith("/ca/") ? path.slice(3) : path
}

/**
 * Ruta en el idioma pedido. Los enlaces externos, anclas y rutas sin versión
 * catalana se devuelven tal cual (un enlace al blog desde /ca va al blog en
 * castellano).
 */
export function localizePath(path: string, locale: Locale): string {
  if (!path.startsWith("/") || path.startsWith("//")) return path
  const base = stripLocale(path)
  if (locale === "es" || !hasCatalan(base.split(/[?#]/)[0])) return base
  return base === "/" ? "/ca" : `/ca${base}`
}

/**
 * alternates para generateMetadata/metadata: canonical a la propia versión y
 * hreflang es, ca y x-default (castellano). `path` es la ruta sin prefijo.
 */
export function i18nAlternates(path: string, locale: Locale) {
  const es = `${SITE_URL}${path === "/" ? "" : path}`
  const ca = `${SITE_URL}${localizePath(path, "ca")}`
  return {
    canonical: locale === "ca" ? ca : es,
    languages: { es, ca, "x-default": es },
  }
}
