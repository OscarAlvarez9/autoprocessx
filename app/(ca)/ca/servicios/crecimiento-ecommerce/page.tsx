import type { Metadata } from "next"
import ThemeRegistry from "@/components/mui/ThemeRegistry"
import CrecimientoMuiCa from "@/components/mui/ca/CrecimientoMuiCa"
import JsonLd from "@/components/JsonLd"
import { ORG_ID, SITE_URL } from "@/lib/seo"
import { i18nAlternates } from "@/lib/i18n"

const TITLE = "Consultoria ecommerce: SEO, GEO i CRO que ven | SEOscar"
const DESCRIPTION =
  "La teva botiga té visites però no ven? SEO i GEO que porten trànsit que compra, CRO que el converteix i automatització, sense migrar. Diagnòstic gratuït."

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  keywords: ["creixement ecommerce", "SEO ecommerce", "GEO", "CRO ecommerce", "optimització de la conversió", "agent de vendes IA", "SEO Barcelona", "automatització n8n ecommerce"],
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "SEOscar, consultor SEO per a ecommerce a Barcelona" }],
    title: TITLE,
    description: DESCRIPTION,
    type: "website",
    locale: "ca_ES",
    url: `${SITE_URL}/ca/servicios/crecimiento-ecommerce`,
  },
  alternates: i18nAlternates("/servicios/crecimiento-ecommerce", "ca"),
}

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Pack Creixement ecommerce · més trànsit que compra i més visites que converteixen",
  provider: { "@id": ORG_ID },
  description: "Creixement d'ecommerce per les dues puntes: SEO i GEO/AI Search que porten trànsit qualificat, CRO i agent de vendes IA que converteixen millor, i automatització amb n8n. Sobre la teva plataforma actual, sense migrar.",
  serviceType: "Ecommerce growth engineering",
  areaServed: "ES",
  inLanguage: "ca",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Pack Creixement ecommerce",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "SEO i GEO per a ecommerce",
          description: "SEO de producte i categoria, GEO/AI Search i SEO tècnic perquè Google, Maps i les IA portin trànsit que compra.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Optimització de la conversió (CRO)",
          description: "Auditoria CRO, A/B testing i optimització del funnel perquè més visites acabin la compra.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Agent de vendes IA",
          description: "Assistent ancorat al catàleg real que recomana producte i acompanya fins al checkout sense inventar-se estoc ni preus.",
        },
      },
    ],
  },
}

export default function CrecimientoEcommercePageCa() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <ThemeRegistry>
        <CrecimientoMuiCa />
      </ThemeRegistry>
    </>
  )
}
