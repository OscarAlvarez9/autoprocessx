import type { Metadata } from "next"
import ThemeRegistry from "@/components/mui/ThemeRegistry"
import HomeMuiCa from "@/components/mui/ca/HomeMuiCa"
import JsonLd from "@/components/JsonLd"
import { ORG_ID, SITE_URL } from "@/lib/seo"
import { i18nAlternates } from "@/lib/i18n"

const TITLE = "Consultor SEO d'ecommerce · Barcelona i Maresme | SEOscar"
const DESCRIPTION =
  "Òscar Álvarez, consultor SEO per a ecommerce. SEO i GEO que porten trànsit que compra, CRO que el converteix i automatització que t'estalvia hores."

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "SEOscar, consultor SEO per a ecommerce a Barcelona" }],
    title: TITLE,
    description: DESCRIPTION,
    type: "website",
    locale: "ca_ES",
    siteName: "SEOscar",
    url: `${SITE_URL}/ca`,
  },
  alternates: i18nAlternates("/", "ca"),
}

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${SITE_URL}/ca/#service-home`,
  name: "Creixement ecommerce: SEO, GEO i CRO",
  description:
    "SEO tècnic i GEO/AI Search, optimització de la conversió (CRO), agent de vendes IA ancorat al catàleg i automatització amb n8n per a botigues en línia.",
  serviceType: "Ecommerce growth engineering",
  provider: { "@id": ORG_ID },
  areaServed: [{ "@type": "Country", name: "Espanya" }],
  inLanguage: "ca",
}

export default function HomeCa() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <ThemeRegistry>
        <HomeMuiCa />
      </ThemeRegistry>
    </>
  )
}
