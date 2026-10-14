import type { Metadata } from "next"
import { i18nAlternates } from "@/lib/i18n"
import ThemeRegistry from "@/components/mui/ThemeRegistry"
import VallesMui from "@/components/mui/VallesMui"
import JsonLd from "@/components/JsonLd"
import { ORG_ID, SITE_URL } from "@/lib/seo"

const TITLE = "Consultor SEO en el Vallès Oriental y Granollers | SEOscar"
const DESCRIPTION =
  "Consultor SEO para negocios de Granollers, Mollet, Sant Celoni, Cardedeu y todo el Vallès Oriental: Google, mapa y ChatGPT. Diagnóstico gratis."
const URL = `${SITE_URL}/consultor-seo-valles-oriental`

// Publicada el 14-oct-2026 con el visto bueno de Óscar.
export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  keywords: [
    "consultor seo vallès oriental",
    "seo vallès oriental",
    "seo granollers",
    "consultor seo granollers",
    "seo mollet del vallès",
    "seo sant celoni",
    "seo local vallès",
  ],
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "SEOscar, consultor SEO en el Vallès Oriental" }],
    title: TITLE,
    description: DESCRIPTION,
    type: "website",
    locale: "es_ES",
    url: URL,
  },
  alternates: i18nAlternates("/consultor-seo-valles-oriental", "es"),
}

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${URL}/#service`,
  name: "Consultor SEO en el Vallès Oriental",
  description:
    "SEO para negocios y tiendas online del Vallès Oriental: Google Business y reseñas, posicionamiento en Google y en el mapa, visibilidad en ChatGPT y SEO para ecommerce. Trato directo con el consultor que hace el trabajo.",
  serviceType: "SEO",
  provider: { "@id": ORG_ID },
  areaServed: { "@type": "AdministrativeArea", name: "Vallès Oriental" },
  availableLanguage: ["Spanish", "Catalan"],
}

export default function ConsultorSeoVallesOrientalPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <ThemeRegistry>
        <VallesMui />
      </ThemeRegistry>
    </>
  )
}
