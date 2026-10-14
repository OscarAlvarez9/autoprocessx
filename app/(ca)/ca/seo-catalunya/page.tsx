import type { Metadata } from "next"
import ThemeRegistry from "@/components/mui/ThemeRegistry"
import SeoCatalunyaMuiCa from "@/components/mui/ca/SeoCatalunyaMuiCa"
import JsonLd from "@/components/JsonLd"
import { ORG_ID, SITE_URL } from "@/lib/seo"
import { i18nAlternates } from "@/lib/i18n"

const TITLE = "Consultor SEO a Catalunya: Barcelona, Maresme i Vallès"
const DESCRIPTION =
  "Consultor SEO i posicionament web a Catalunya per a negocis i botigues de Barcelona, el Maresme i el Vallès: Google, mapa i ChatGPT. Diagnòstic gratuït."

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  keywords: [
    "agència SEO Maresme",
    "consultor SEO Catalunya",
    "SEO local Barcelona",
    "posicionament web Mataró",
    "SEO Manresa",
    "agència SEO catalana",
    "consultor SEO Barcelona",
    "posicionament SEO Catalunya",
  ],
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "SEOscar, consultor SEO a Catalunya" }],
    title: TITLE,
    description: DESCRIPTION,
    type: "website",
    locale: "ca_ES",
    url: `${SITE_URL}/ca/seo-catalunya`,
  },
  alternates: i18nAlternates("/seo-catalunya", "ca"),
}

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${SITE_URL}/ca/seo-catalunya/#service`,
  name: "SEO local a Catalunya",
  description:
    "Consultor SEO català per a negocis de Catalunya: Google Business i ressenyes, contingut orientat a les cerques de la teva comarca, SEO tècnic i de conversió, i el pont entre el local i l'ecommerce. Tracte directe amb el fundador, atenció en català i en castellà.",
  serviceType: "Local SEO",
  provider: { "@id": ORG_ID },
  areaServed: [
    { "@type": "AdministrativeArea", name: "Maresme" },
    { "@type": "AdministrativeArea", name: "Bages" },
    { "@type": "AdministrativeArea", name: "Vallès Oriental" },
    { "@type": "AdministrativeArea", name: "Barcelona" },
    { "@type": "AdministrativeArea", name: "Catalunya" },
  ],
  availableLanguage: ["Catalan", "Spanish"],
}

export default function SeoCatalunyaPageCa() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <ThemeRegistry>
        <SeoCatalunyaMuiCa />
      </ThemeRegistry>
    </>
  )
}
