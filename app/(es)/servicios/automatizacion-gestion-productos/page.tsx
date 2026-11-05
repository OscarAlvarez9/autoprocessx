import ThemeRegistry from "@/components/mui/ThemeRegistry"
import GestionProductosMui from "@/components/mui/GestionProductosMui"
import JsonLd from "@/components/JsonLd"
import { ORG_ID, SITE_URL } from "@/lib/seo"
import { GESTION_PRODUCTOS_FAQS } from "@/lib/gestionProductosFaqs"

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${SITE_URL}/servicios/automatizacion-gestion-productos/#service`,
  name: "Sistema para automatizar la gestión de productos",
  description:
    "Sistema en n8n con código propio que automatiza el ciclo de vida del producto en un ecommerce: alta desde la hoja del proveedor, descripciones, fotos por EAN, categorías y filtros, variantes, stock y SEO de ficha. Los productos quedan en borrador para que el equipo los revise y apruebe.",
  serviceType: "Automatización de la gestión de productos",
  provider: { "@id": ORG_ID },
  areaServed: [{ "@type": "Country", name: "España" }],
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: GESTION_PRODUCTOS_FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
}

export default function AutomatizacionGestionProductosPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />
      <ThemeRegistry>
        <GestionProductosMui />
      </ThemeRegistry>
    </>
  )
}
