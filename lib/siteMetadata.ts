import type { Metadata } from "next";

export const baseMetadata: Metadata = {
  metadataBase: new URL("https://www.seoscar.com"),
  title: {
    default: "Consultor SEO E-commerce | SEOscar",
    template: "%s | SEOscar",
  },
  description: "Óscar Álvarez, analista de datos y consultor SEO de ecommerce. Posicionamiento, conversión y catálogo de tu tienda, del diagnóstico a la implementación.",
  keywords: ["consultor SEO ecommerce", "consultor SEO Barcelona", "consultor SEO Maresme", "SEO ecommerce", "GEO AI Search", "agente de ventas IA", "automatización n8n", "CRO tienda online", "crecimiento ecommerce"],
  openGraph: {
    title: "Consultor SEO E-commerce | SEOscar",
    description: "Óscar Álvarez, analista de datos y consultor SEO de ecommerce. Posicionamiento, conversión y catálogo de tu tienda, del diagnóstico a la implementación.",
    type: "website",
    locale: "es_ES",
    siteName: "SEOscar",
    url: "https://www.seoscar.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Consultor SEO E-commerce | SEOscar",
    description: "Óscar Álvarez, analista de datos y consultor SEO de ecommerce. Posicionamiento, conversión y catálogo de tu tienda, del diagnóstico a la implementación.",
  },
  alternates: {
    canonical: "https://www.seoscar.com",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon.ico",
  },
  manifest: "/site.webmanifest",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

/** Metadatos base de la versión en catalán (app/(ca)). Cada página pone los suyos. */
export const caMetadata: Metadata = {
  ...baseMetadata,
  title: {
    default: "Consultor SEO E-commerce | SEOscar",
    template: "%s | SEOscar",
  },
  description: "Òscar Álvarez, analista de dades i consultor SEO d'ecommerce. Posicionament, conversió i catàleg de la teva botiga, del diagnòstic a la implementació.",
  openGraph: {
    ...baseMetadata.openGraph,
    title: "Consultor SEO E-commerce | SEOscar",
    description: "Òscar Álvarez, analista de dades i consultor SEO d'ecommerce. Posicionament, conversió i catàleg de la teva botiga, del diagnòstic a la implementació.",
    locale: "ca_ES",
    url: "https://www.seoscar.com/ca",
  },
  twitter: {
    ...baseMetadata.twitter,
    title: "Consultor SEO E-commerce | SEOscar",
    description: "Òscar Álvarez, analista de dades i consultor SEO d'ecommerce. Posicionament, conversió i catàleg de la teva botiga, del diagnòstic a la implementació.",
  },
  alternates: {
    canonical: "https://www.seoscar.com/ca",
  },
}
