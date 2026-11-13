import type { Metadata } from "next"
import { i18nAlternates } from "@/lib/i18n"
import ThemeRegistry from "@/components/mui/ThemeRegistry"
import HomeMui from "@/components/mui/HomeMui"
import JsonLd from "@/components/JsonLd"
import { ORG_ID, SITE_URL } from "@/lib/seo"

export const metadata: Metadata = {
  title: {
    absolute: "Consultor SEO E-commerce | SEOscar",
  },
  description:
    "Óscar Álvarez, analista de datos y consultor SEO de ecommerce. Posicionamiento, conversión y catálogo de tu tienda, del diagnóstico a la implementación.",
  alternates: i18nAlternates("/", "es"),
}

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${SITE_URL}/#service-home`,
  name: "SEO y optimización para tiendas online",
  description:
    "SEO técnico, arquitectura y contenidos, analítica y optimización de la conversión, y gestión y automatización del catálogo para tiendas online, del diagnóstico a la implementación.",
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
