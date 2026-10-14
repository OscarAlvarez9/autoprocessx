import type { Metadata } from "next"
import { i18nAlternates } from "@/lib/i18n"
import ThemeRegistry from "@/components/mui/ThemeRegistry"
import VallesMuiCa from "@/components/mui/ca/VallesMuiCa"
import JsonLd from "@/components/JsonLd"
import { ORG_ID, SITE_URL } from "@/lib/seo"

const TITLE = "Consultor SEO al Vallès Oriental | SEOscar"
const DESCRIPTION =
  "Consultor SEO per a negocis del Vallès Oriental: Mollet, Sant Celoni, Cardedeu, la Garriga i tota la comarca, a Google, al mapa i a ChatGPT."
const URL = `${SITE_URL}/ca/consultor-seo-valles-oriental`

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  keywords: [
    "consultor seo vallès oriental",
    "seo vallès oriental",
    "agència seo vallès oriental",
    "seo granollers",
    "consultor seo granollers",
    "seo mollet del vallès",
    "seo sant celoni",
    "posicionament web vallès",
  ],
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "SEOscar, consultor SEO al Vallès Oriental" }],
    title: TITLE,
    description: DESCRIPTION,
    type: "website",
    locale: "ca_ES",
    url: URL,
  },
  alternates: i18nAlternates("/consultor-seo-valles-oriental", "ca"),
}

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${URL}/#service`,
  name: "Consultor SEO al Vallès Oriental",
  description:
    "SEO per a negocis i botigues en línia del Vallès Oriental: Google Business i ressenyes, posicionament a Google i al mapa, visibilitat a ChatGPT i SEO per a ecommerce. Tracte directe amb el consultor que fa la feina.",
  serviceType: "SEO",
  provider: { "@id": ORG_ID },
  areaServed: { "@type": "AdministrativeArea", name: "Vallès Oriental" },
  availableLanguage: ["Catalan", "Spanish"],
}

export default function ConsultorSeoVallesOrientalPageCa() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <ThemeRegistry>
        <VallesMuiCa />
      </ThemeRegistry>
    </>
  )
}
