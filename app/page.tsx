import type { Metadata } from "next"
import ThemeRegistry from "@/components/mui/ThemeRegistry"
import HomeMui from "@/components/mui/HomeMui"
import JsonLd from "@/components/JsonLd"
import { ORG_ID, SITE_URL } from "@/lib/seo"

export const metadata: Metadata = {
  title: {
    absolute: "Agencia ecommerce en Barcelona: SEO, GEO, CRO e IA | SEOscar",
  },
  description:
    "Agencia de ecommerce en Barcelona. Hago que tu tienda venda más con SEO y GEO que traen tráfico que compra, agente de ventas IA y automatización. Sin migrar.",
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
