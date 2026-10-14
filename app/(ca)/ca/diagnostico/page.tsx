import type { Metadata } from "next"
import ThemeRegistry from "@/components/mui/ThemeRegistry"
import DiagnosticoPageMuiCa from "@/components/mui/ca/DiagnosticoPageMuiCa"
import JsonLd from "@/components/JsonLd"
import { ORG_ID, SITE_URL } from "@/lib/seo"
import { i18nAlternates } from "@/lib/i18n"

const TITLE = "Auditoria SEO gratuïta per a ecommerce en 24-48 h | SEOscar"
const DESCRIPTION =
  "Diagnòstic gratuït de la teva botiga: respons quatre preguntes, reviso la teva web i en 24-48 h et dic on se t'escapen les vendes. Sense compromís."

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  keywords: ["auditoria SEO gratuïta", "auditoria SEO gratuïta ecommerce", "auditoria botiga en línia gratuïta", "diagnòstic ecommerce", "diagnòstic SEO ecommerce", "anàlisi de conversió ecommerce"],
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "SEOscar, consultor SEO per a ecommerce a Barcelona" }],
    title: TITLE,
    description: DESCRIPTION,
    type: "website",
    locale: "ca_ES",
    url: `${SITE_URL}/ca/diagnostico`,
  },
  alternates: i18nAlternates("/diagnostico", "ca"),
}

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${SITE_URL}/ca/diagnostico/#service`,
  name: "Diagnòstic d'ecommerce",
  description:
    "Diagnòstic inicial d'una botiga en línia: revisem trànsit, conversió i operativa i lliurem un pla prioritzat per impacte en vendes, sobre la plataforma actual i sense compromís.",
  serviceType: "Ecommerce diagnosis",
  provider: { "@id": ORG_ID },
  areaServed: [{ "@type": "Country", name: "Espanya" }],
  inLanguage: "ca",
}

export default function DiagnosticoPageCa() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <ThemeRegistry>
        <DiagnosticoPageMuiCa />
      </ThemeRegistry>
    </>
  )
}
