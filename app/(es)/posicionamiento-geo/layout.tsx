import type { Metadata } from "next"
import { i18nAlternates } from "@/lib/i18n"

const TITLE = "Posicionamiento GEO: aparece en ChatGPT y Google AI"
const DESCRIPTION =
  "Que ChatGPT, Perplexity y los AI Overviews de Google citen tu marca: acceso de bots, schema, llms.txt y contenido citable. Diagnóstico gratis en 24-48 h."
const URL = "https://www.seoscar.com/posicionamiento-geo"

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  keywords: ["posicionamiento geo", "geo seo", "seo geo", "seo ia", "seo para ia", "agencia geo", "visibilidad en ChatGPT", "AI Overviews"],
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "SEOscar, agencia de ecommerce en Barcelona" }],
    title: TITLE,
    description: DESCRIPTION,
    type: "website",
    locale: "es_ES",
    url: URL,
  },
  alternates: i18nAlternates("/posicionamiento-geo", "es"),
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
