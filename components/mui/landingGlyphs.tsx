"use client"

// Glifos SVG hechos a mano para las landings de plataforma (Shopify, WooCommerce).
// Line-art en la lengua de marca: trazo petrol, acentos teal/muted, viewBox 24.
// No son iconos de librería: cada uno dibuja el concepto del bloque al que
// acompaña. Estáticos a propósito (nada que romper con prefers-reduced-motion).

import Box from "@mui/material/Box"
import { tokens } from "@/lib/mui/theme"

export type GlyphName =
  | "fork-urls" | "apps-weight" | "schema" | "thin-pages" | "checkout-lock"
  | "code-theme" | "ai-cite" | "cro-funnel" | "agent-flow"
  | "builder-mobile" | "facets" | "server-ttfb" | "bot-block"

const P = tokens.petrol
const T = tokens.teal
const M = tokens.muted

function Paths({ name }: { name: GlyphName }) {
  switch (name) {
    // URLs duplicadas: una fuente que se bifurca en dos destinos.
    case "fork-urls":
      return (
        <>
          <circle cx="4" cy="12" r="1.5" fill={P} stroke="none" />
          <path d="M5.5 12H10" />
          <path d="M10 12l5-4.5M10 12l5 4.5" />
          <circle cx="10" cy="12" r="1.3" fill={P} stroke="none" />
          <circle cx="16.6" cy="7.2" r="1.9" />
          <circle cx="16.6" cy="16.8" r="1.9" />
        </>
      )
    // Apps/plugins acumulados que pesan: bloques apilados y flecha que hunde.
    case "apps-weight":
      return (
        <>
          <rect x="4.5" y="4.5" width="11" height="3.4" rx="1.2" />
          <rect x="4.5" y="10.3" width="11" height="3.4" rx="1.2" />
          <rect x="4.5" y="16.1" width="11" height="3.4" rx="1.2" />
          <path d="M19.5 6v9" stroke={M} />
          <path d="M17.5 13l2 2 2-2" stroke={M} />
        </>
      )
    // Datos estructurados: brackets de marcado con la barra en teal.
    case "schema":
      return (
        <>
          <path d="M9 8l-4 4 4 4" />
          <path d="M15 8l4 4-4 4" />
          <path d="M13.4 6.6l-3 10.8" stroke={T} />
        </>
      )
    // Páginas thin: una hoja con poco contenido y un hueco vacío.
    case "thin-pages":
      return (
        <>
          <rect x="6" y="4" width="12" height="16" rx="1.6" />
          <path d="M9 9h6" />
          <path d="M9 12.5h4" stroke={M} />
          <path d="M9 16h6" stroke={M} strokeDasharray="1.6 2.2" />
        </>
      )
    // Checkout intocable: candado cerrado.
    case "checkout-lock":
      return (
        <>
          <rect x="5.5" y="10.5" width="13" height="9" rx="1.9" />
          <path d="M8.5 10.5V8a3.5 3.5 0 017 0v2.5" />
          <circle cx="12" cy="14.4" r="1.1" fill={P} stroke="none" />
          <path d="M12 15.3v2.1" />
        </>
      )
    // SEO sobre el tema: llaves de plantilla (Liquid / child theme).
    case "code-theme":
      return (
        <>
          <path d="M9 6c-2.2 0-1.4 4-3.6 6C7.6 14 6.8 18 9 18" />
          <path d="M15 6c2.2 0 1.4 4 3.6 6C16.4 14 17.2 18 15 18" />
          <path d="M13 7l-2 10" stroke={T} />
        </>
      )
    // GEO: burbuja de respuesta con check citado y destello de IA.
    case "ai-cite":
      return (
        <>
          <rect x="4" y="5" width="15" height="11" rx="2.6" />
          <path d="M9 16l-1.2 3 4-3" />
          <path d="M8.4 10.2l2 2 4-4" stroke={T} />
          <path d="M20 3l.6 1.6 1.6.6-1.6.6L20 8l-.6-1.6L17.8 5.8l1.6-.6z" fill={T} stroke="none" />
        </>
      )
    // CRO: embudo de conversión con salida en teal.
    case "cro-funnel":
      return (
        <>
          <path d="M5 6h14l-5 6v6l-4-2v-4z" />
          <path d="M10.4 15.5h3.2" stroke={T} />
        </>
      )
    // Agente + automatización: nodo de chat conectado a un nodo que corre solo.
    case "agent-flow":
      return (
        <>
          <rect x="3.5" y="8.5" width="7" height="6" rx="1.6" />
          <circle cx="7" cy="11.5" r="0.9" fill={P} stroke="none" />
          <path d="M10.5 11.5h3.4" />
          <circle cx="17.6" cy="11.5" r="3.3" />
          <path d="M16.1 11.5l1.2 1.2 2.3-2.4" stroke={T} />
        </>
      )
    // Maquetador que castiga el móvil: teléfono con DOM denso.
    case "builder-mobile":
      return (
        <>
          <rect x="7.5" y="3" width="9" height="18" rx="2" />
          <path d="M9.5 6.5h5M9.5 9h5M9.5 11.5h5M9.5 14h5" stroke={M} />
          <path d="M10.8 18.4h2.4" />
        </>
      )
    // Facetas: filtros que multiplican combinaciones de URL.
    case "facets":
      return (
        <>
          <path d="M4 8h9" /><path d="M17.5 8h2.5" /><circle cx="15.2" cy="8" r="1.7" />
          <path d="M4 12h3.5" /><path d="M12 12h8" /><circle cx="9.7" cy="12" r="1.7" />
          <path d="M4 16h10" /><path d="M18.5 16h1.5" /><circle cx="16.2" cy="16" r="1.7" />
        </>
      )
    // Hosting justo: base de datos con reloj de latencia (TTFB).
    case "server-ttfb":
      return (
        <>
          <path d="M4 6.5c0 1 2.7 1.8 6 1.8s6-.8 6-1.8S13.3 4.7 10 4.7 4 5.5 4 6.5z" />
          <path d="M4 6.5v9c0 1 2.7 1.8 6 1.8s6-.8 6-1.8v-9" />
          <path d="M4 11c0 1 2.7 1.8 6 1.8s6-.8 6-1.8" />
          <circle cx="18" cy="17.2" r="3.3" stroke={M} />
          <path d="M18 15.4v1.8l1.2 .9" stroke={M} />
        </>
      )
    // CDN que bloquea a la IA: escudo con carita de bot y tachado.
    case "bot-block":
      return (
        <>
          <path d="M12 3l7 2.5v5.4c0 4.4-3 7.1-7 8.4-4-1.3-7-4-7-8.4V5.5z" />
          <path d="M12 6.4v1.4" />
          <circle cx="10" cy="10.4" r="0.9" fill={P} stroke="none" />
          <circle cx="14" cy="10.4" r="0.9" fill={P} stroke="none" />
          <path d="M9.6 13.4h4.8" />
          <path d="M6.6 6.2l10.8 10.8" stroke={M} />
        </>
      )
  }
}

// Glifo dentro de un tile cuadrado, para anclar visualmente cada bloque.
export function BlockGlyph({ name }: { name: GlyphName }) {
  return (
    <Box sx={{ width: 46, height: 46, borderRadius: 2, border: `1px solid ${tokens.lineSoft}`, bgcolor: tokens.surface, display: "grid", placeItems: "center", flexShrink: 0 }}>
      <Box component="svg" viewBox="0 0 24 24" sx={{ width: 27, height: 27 }} fill="none" stroke={P} strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <Paths name={name} />
      </Box>
    </Box>
  )
}

// Marca es/no para las tarjetas "para quién es": check teal / aspa muted.
export function EsNoMark({ ok }: { ok: boolean }) {
  return (
    <Box sx={{ width: 24, height: 24, borderRadius: 999, display: "grid", placeItems: "center", flexShrink: 0, bgcolor: ok ? `${T}1A` : `${M}18`, border: `1px solid ${ok ? `${T}44` : `${M}33`}` }}>
      <Box component="svg" viewBox="0 0 24 24" sx={{ width: 15, height: 15 }} fill="none" stroke={ok ? T : M} strokeWidth={2.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        {ok ? <path d="M5 12.5l4 4L19 7" /> : <path d="M7 7l10 10M17 7L7 17" />}
      </Box>
    </Box>
  )
}
