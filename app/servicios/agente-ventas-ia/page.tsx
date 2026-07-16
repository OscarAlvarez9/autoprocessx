import type { Metadata } from "next"
import ThemeRegistry from "@/components/mui/ThemeRegistry"
import AgenteMui from "@/components/mui/AgenteMui"
import JsonLd from "@/components/JsonLd"
import { ORG_ID, SITE_URL } from "@/lib/seo"

export const metadata: Metadata = {
  title: { absolute: "Agente de ventas IA para ecommerce y WhatsApp | SEOscar" },
  description:
    "Agente de ventas IA anclado a tu catálogo real: recomienda producto, resuelve dudas y acompaña al checkout en tu web y WhatsApp 24/7. No inventa precios ni stock.",
  keywords: ["agente de ventas IA", "chatbot ecommerce", "asistente de ventas IA", "chatbot WhatsApp tienda", "IA para ecommerce", "RAG catálogo", "agente IA Shopify WooCommerce"],
  openGraph: {
    title: "Agente de ventas IA para ecommerce y WhatsApp | SEOscar",
    description:
      "Agente de ventas IA anclado a tu catálogo real: recomienda producto, resuelve dudas y acompaña al checkout en tu web y WhatsApp 24/7. No inventa precios ni stock.",
    type: "website",
    locale: "es_ES",
    url: `${SITE_URL}/servicios/agente-ventas-ia`,
  },
  alternates: { canonical: `${SITE_URL}/servicios/agente-ventas-ia` },
}

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${SITE_URL}/servicios/agente-ventas-ia/#service`,
  name: "Agente de ventas IA para ecommerce",
  description:
    "Asistente de IA anclado al catálogo real de la tienda que recomienda producto, resuelve dudas y acompaña al checkout, en web y WhatsApp, con escalado a humano y sin inventar stock ni precios.",
  serviceType: "AI sales agent",
  provider: { "@id": ORG_ID },
  areaServed: [{ "@type": "Country", name: "España" }],
}

// FAQ citable (GEO): las mismas objeciones que responde la página.
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Se puede contratar el agente de ventas IA suelto, sin el pack Crecimiento?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. El agente de ventas IA se contrata suelto y es la entrada más rápida: se conecta al catálogo de la tienda y empieza a vender. El pack Crecimiento lo incluye junto a SEO, conversión y automatización.",
      },
    },
    {
      "@type": "Question",
      name: "¿El agente de ventas IA se inventa productos o precios?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Está anclado al catálogo real mediante RAG: responde con productos, precios y stock reales. Si un dato no lo tiene, lo dice y deriva a una persona en vez de improvisar.",
      },
    },
    {
      "@type": "Question",
      name: "¿En qué se diferencia de un chatbot normal?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Un chatbot genérico responde con lo que el modelo cree recordar y alucina cuando no sabe. El agente de ventas IA solo responde con datos recuperados del catálogo real de la tienda y cita la fuente.",
      },
    },
    {
      "@type": "Question",
      name: "¿En qué canales funciona el agente de ventas IA?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "En la web de la tienda (widget) y en WhatsApp, con la misma base de conocimiento y disponible 24/7. Se conecta sobre la plataforma actual (Shopify, WooCommerce, PrestaShop o Magento) sin migrar.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué pasa si el agente no sabe la respuesta?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Lo reconoce y deriva la conversación a una persona del equipo con el contexto de lo hablado, en lugar de inventar un dato de stock o de envío.",
      },
    },
  ],
}

export default function AgenteVentasIAPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />
      <ThemeRegistry>
        <AgenteMui />
      </ThemeRegistry>
    </>
  )
}
