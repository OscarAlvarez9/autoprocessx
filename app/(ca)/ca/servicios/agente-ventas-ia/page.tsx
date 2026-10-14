import type { Metadata } from "next"
import ThemeRegistry from "@/components/mui/ThemeRegistry"
import AgenteMuiCa from "@/components/mui/ca/AgenteMuiCa"
import JsonLd from "@/components/JsonLd"
import { ORG_ID } from "@/lib/seo"
import { SITE_URL, i18nAlternates } from "@/lib/i18n"
import { AGENTE_FAQS_CA } from "@/lib/serviciosFaqsCa"

const TITLE = "Chatbot de vendes per a ecommerce i WhatsApp 24/7 | SEOscar"
const DESCRIPTION =
  "Chatbot per a la teva botiga i WhatsApp que respon amb el teu catàleg real: no s'inventa preus ni estoc, recomana producte i acompanya al checkout 24/7."

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  keywords: ["agent de vendes IA", "chatbot ecommerce", "assistent de vendes IA", "chatbot WhatsApp botiga", "IA per a ecommerce", "RAG catàleg", "agent IA Shopify WooCommerce"],
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "SEOscar, agència d'ecommerce a Barcelona" }],
    title: TITLE,
    description: DESCRIPTION,
    type: "website",
    locale: "ca_ES",
    url: `${SITE_URL}/ca/servicios/agente-ventas-ia`,
  },
  alternates: i18nAlternates("/servicios/agente-ventas-ia", "ca"),
}

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${SITE_URL}/ca/servicios/agente-ventas-ia/#service`,
  name: "Agent de vendes IA per a ecommerce",
  description:
    "Assistent d'IA ancorat al catàleg real de la botiga que recomana producte, resol dubtes i acompanya fins al checkout, a la web i a WhatsApp, amb derivació a una persona i sense inventar estoc ni preus.",
  serviceType: "AI sales agent",
  provider: { "@id": ORG_ID },
  areaServed: [{ "@type": "Country", name: "Espanya" }],
}

// FAQ citable (GEO): les mateixes preguntes i respostes que es veuen a la pàgina.
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: AGENTE_FAQS_CA.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
}

export default function AgenteVentasIAPageCa() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />
      <ThemeRegistry>
        <AgenteMuiCa />
      </ThemeRegistry>
    </>
  )
}
