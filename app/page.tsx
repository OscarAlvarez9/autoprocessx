import type { Metadata } from "next"
import ThemeRegistry from "@/components/mui/ThemeRegistry"
import HomeMui from "@/components/mui/HomeMui"
import JsonLd from "@/components/JsonLd"
import { ORG_ID, SITE_URL } from "@/lib/seo"

export const metadata: Metadata = {
  title: {
    absolute: "Consultor SEO para ecommerce · Barcelona y Maresme | SEOscar",
  },
  description:
    "Óscar Álvarez, consultor SEO para ecommerce. SEO y GEO que traen tráfico que compra, CRO que lo convierte y automatización que te ahorra horas.",
  alternates: { canonical: SITE_URL },
}

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${SITE_URL}/#service-home`,
  name: "Crecimiento de ecommerce con IA",
  description:
    "SEO técnico y GEO/AI Search, optimización de conversión (CRO), agente de ventas IA anclado al catálogo y automatización con n8n para tiendas online.",
  serviceType: "Ecommerce growth engineering",
  provider: { "@id": ORG_ID },
  areaServed: [{ "@type": "Country", name: "España" }],
}

export default function Home() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <ThemeRegistry>
        <HomeMui />
      </ThemeRegistry>
    </>
  )
}
