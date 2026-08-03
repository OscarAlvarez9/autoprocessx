import type { Metadata } from "next"

export const metadata: Metadata = {
  title: { absolute: "Consultor SEO en el Maresme: Mataró, Premià, Vilassar | SEOscar" },
  description:
    "Consultor SEO en el Maresme, desde Premià de Mar. Posiciono negocios de Mataró, Premià, Vilassar y toda la comarca en Google y en el mapa. Diagnóstico gratis.",
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
    title: "Consultor SEO en el Maresme: Mataró, Premià, Vilassar | SEOscar",
    description:
      "Consultor SEO en el Maresme, desde Premià de Mar. Posiciono negocios de Mataró, Premià, Vilassar y toda la comarca en Google y en el mapa. Diagnóstico gratis.",
    type: "website",
    locale: "es_ES",
    url: "https://www.seoscar.com/agencia-seo-maresme",
  },
  alternates: {
    canonical: "https://www.seoscar.com/agencia-seo-maresme",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
