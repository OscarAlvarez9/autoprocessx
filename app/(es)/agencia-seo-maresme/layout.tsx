import type { Metadata } from "next"
import { i18nAlternates } from "@/lib/i18n"

export const metadata: Metadata = {
  title: { absolute: "Consultor SEO en el Maresme para toda la comarca | SEOscar" },
  description:
    "Consultor SEO en el Maresme: posiciono negocios de toda la comarca, de Montgat a Malgrat de Mar, en Google, en el mapa y en ChatGPT. Diagnóstico gratis.",
  keywords: [
    "seo maresme",
    "agencia seo maresme",
    "consultor seo maresme",
    "seo mataró",
    "posicionamiento web maresme",
    "seo premià de mar",
    "seo vilassar",
    "seo local maresme",
  ],
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "SEOscar, agencia de ecommerce en Barcelona" }],
    title: "Consultor SEO en el Maresme para toda la comarca | SEOscar",
    description:
      "Consultor SEO en el Maresme: posiciono negocios de toda la comarca, de Montgat a Malgrat de Mar, en Google, en el mapa y en ChatGPT. Diagnóstico gratis.",
    type: "website",
    locale: "es_ES",
    url: "https://www.seoscar.com/agencia-seo-maresme",
  },
  alternates: i18nAlternates("/agencia-seo-maresme", "es"),
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
