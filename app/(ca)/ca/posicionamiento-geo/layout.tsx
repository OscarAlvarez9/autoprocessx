import type { Metadata } from "next"
import { SITE_URL, i18nAlternates } from "@/lib/i18n"

const TITLE = "Posicionament GEO: apareix a ChatGPT i Google AI"
const DESCRIPTION =
  "Que ChatGPT, Perplexity i els AI Overviews de Google citin la teva marca: accés de bots, schema, llms.txt i contingut citable. Diagnòstic gratuït, 24-48 h."

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  keywords: ["posicionament geo", "geo seo", "seo geo", "seo ia", "seo per a ia", "agència geo", "visibilitat a ChatGPT", "AI Overviews"],
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "SEOscar, agència d'ecommerce a Barcelona" }],
    title: TITLE,
    description: DESCRIPTION,
    type: "website",
    locale: "ca_ES",
    url: `${SITE_URL}/ca/posicionamiento-geo`,
  },
  alternates: i18nAlternates("/posicionamiento-geo", "ca"),
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
