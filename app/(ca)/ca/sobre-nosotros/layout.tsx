import type { Metadata } from "next"
import { ORG_ID } from "@/lib/seo"
import { SITE_URL, i18nAlternates } from "@/lib/i18n"

const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "Sobre SEOscar",
  url: `${SITE_URL}/ca/sobre-nosotros`,
  inLanguage: "ca",
  description: "SEOscar és la consultoria SEO per a ecommerce d'Òscar Álvarez, a Barcelona i el Maresme. Faig que les botigues en línia venguin més amb SEO tècnic, GEO, CRO, agent de vendes IA i automatització, sobre la seva plataforma actual i amb el codi de la seva propietat.",
  // Una sola entitat Organization a tot el web: la del layout arrel. Aquí
  // només es referencia.
  mainEntity: { "@id": ORG_ID },
}

const TITLE = "Sobre SEOscar: Òscar Álvarez, consultor SEO ecommerce"
const DESCRIPTION = "Darrere de SEOscar hi soc jo, Òscar Álvarez, consultor SEO per a ecommerce a Premià de Mar. Sense intermediaris: parles amb qui fa la feina."

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  keywords: ["estudi IA ecommerce Barcelona", "consultor SEO ecommerce", "especialistes n8n", "sobre SEOscar", "sistemes d'IA botigues en línia", "Òscar Álvarez consultor SEO"],
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Òscar Álvarez, consultor SEO per a ecommerce · SEOscar" }],
    title: TITLE,
    description: DESCRIPTION,
    type: "website",
    locale: "ca_ES",
    url: `${SITE_URL}/ca/sobre-nosotros`,
  },
  alternates: i18nAlternates("/sobre-nosotros", "ca"),
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />
      {children}
    </>
  )
}
