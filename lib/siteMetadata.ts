import type { Metadata } from "next";

export const baseMetadata: Metadata = {
  metadataBase: new URL("https://www.seoscar.com"),
  title: {
    default: "Consultor SEO para ecommerce · Barcelona y Maresme | SEOscar",
    template: "%s | SEOscar",
  },
  description: "Óscar Álvarez, consultor SEO para ecommerce en Barcelona y el Maresme. Tráfico que compra, CRO y automatización sobre tu propia tienda, sin migrar.",
  keywords: ["consultor SEO ecommerce", "consultor SEO Barcelona", "consultor SEO Maresme", "SEO ecommerce", "GEO AI Search", "agente de ventas IA", "automatización n8n", "CRO tienda online", "crecimiento ecommerce"],
  openGraph: {
    title: "Consultor SEO para ecommerce · Barcelona y Maresme | SEOscar",
    description: "Óscar Álvarez, consultor SEO para ecommerce en Barcelona y el Maresme. Tráfico que compra, CRO y automatización sobre tu propia tienda, sin migrar.",
    type: "website",
    locale: "es_ES",
    siteName: "SEOscar",
    url: "https://www.seoscar.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Consultor SEO para ecommerce · Barcelona y Maresme | SEOscar",
    description: "Óscar Álvarez, consultor SEO para ecommerce en Barcelona y el Maresme. Tráfico que compra, CRO y automatización sobre tu propia tienda, sin migrar.",
  },
  alternates: {
    canonical: "https://www.seoscar.com",
  },
  icons: {
    icon: "/faviconseoscar.jpg",
    apple: "/faviconseoscar.jpg",
    shortcut: "/faviconseoscar.jpg",
  },
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
    default: "Consultor SEO d'ecommerce · Barcelona i Maresme | SEOscar",
    template: "%s | SEOscar",
  },
  description: "Òscar Álvarez, consultor SEO per a ecommerce a Barcelona i el Maresme. Trànsit que compra, CRO i automatització sobre la teva botiga, sense migrar.",
  openGraph: {
    ...baseMetadata.openGraph,
    title: "Consultor SEO d'ecommerce · Barcelona i Maresme | SEOscar",
    description: "Òscar Álvarez, consultor SEO per a ecommerce a Barcelona i el Maresme. Trànsit que compra, CRO i automatització sobre la teva botiga, sense migrar.",
    locale: "ca_ES",
    url: "https://www.seoscar.com/ca",
  },
  twitter: {
    ...baseMetadata.twitter,
    title: "Consultor SEO d'ecommerce · Barcelona i Maresme | SEOscar",
    description: "Òscar Álvarez, consultor SEO per a ecommerce a Barcelona i el Maresme. Trànsit que compra, CRO i automatització sobre la teva botiga, sense migrar.",
  },
  alternates: {
    canonical: "https://www.seoscar.com/ca",
  },
}
