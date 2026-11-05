import ThemeRegistry from "@/components/mui/ThemeRegistry"
import GestionProductosMuiCa from "@/components/mui/ca/GestionProductosMuiCa"
import JsonLd from "@/components/JsonLd"
import { ORG_ID } from "@/lib/seo"
import { SITE_URL } from "@/lib/i18n"
import { GESTION_PRODUCTOS_FAQS_CA } from "@/lib/gestionProductosFaqsCa"

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${SITE_URL}/ca/servicios/automatizacion-gestion-productos/#service`,
  name: "Sistema per automatitzar la gestió de productes",
  description:
    "Sistema a n8n amb codi propi que automatitza el cicle de vida del producte en un ecommerce: alta des del full del proveïdor, descripcions, fotos per EAN, categories i filtres, variants, estoc i SEO de fitxa. Els productes queden en esborrany perquè l'equip els revisi i els aprovi.",
  serviceType: "Automatització de la gestió de productes",
  provider: { "@id": ORG_ID },
  areaServed: [{ "@type": "Country", name: "Espanya" }],
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: GESTION_PRODUCTOS_FAQS_CA.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
}

export default function AutomatizacionGestionProductosPageCa() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />
      <ThemeRegistry>
        <GestionProductosMuiCa />
      </ThemeRegistry>
    </>
  )
}
