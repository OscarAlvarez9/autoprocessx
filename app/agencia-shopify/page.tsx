import ThemeRegistry from "@/components/mui/ThemeRegistry"
import ShopifyMui from "@/components/mui/ShopifyMui"
import JsonLd from "@/components/JsonLd"
import { ORG_ID, SITE_URL } from "@/lib/seo"

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${SITE_URL}/agencia-shopify/#service`,
  name: "Agencia Shopify: SEO, GEO, CRO e IA para ecommerce",
  description:
    "Optimización de tiendas Shopify y Shopify Plus: SEO técnico sobre el tema, visibilidad en buscadores de IA (GEO), optimización de conversión y automatización, sobre la plataforma actual y sin migrar.",
  serviceType: "Optimización de tiendas Shopify",
  provider: { "@id": ORG_ID },
  areaServed: [{ "@type": "Country", name: "España" }],
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Se puede hacer SEO avanzado en Shopify o está limitado?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Se puede. Shopify tiene límites conocidos (estructura de URLs fija, robots parcialmente editable), pero el 90% del SEO que mueve ventas (enlazado interno, contenido de colección, schema, velocidad, arquitectura) se trabaja perfectamente desde el tema. La limitación real suele ser el tema, no la plataforma.",
      },
    },
    {
      "@type": "Question",
      name: "¿Las apps están frenando mi tienda?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Probablemente alguna sí. Cada app añade peso y varias dejan restos al desinstalarse. En el diagnóstico mido cuánto pesa cada script y qué aporta cada app a la venta. Lo habitual es poder eliminar varias sin perder ninguna función.",
      },
    },
    {
      "@type": "Question",
      name: "¿Necesito Shopify Plus para mejorar la conversión?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Para la mayoría de tiendas, no. Plus desbloquea la personalización del checkout, pero casi todo el margen de conversión está antes del checkout: ficha, carrito, confianza y velocidad. Primero se exprime eso; Plus se plantea cuando los números lo justifican.",
      },
    },
    {
      "@type": "Question",
      name: "¿Puede ChatGPT recomendar mi tienda Shopify?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí, si puede leerla y entenderla. Shopify sirve HTML renderizado, así que la base es buena. Falta que ningún firewall bloquee a los bots de IA, que tus fichas respondan preguntas reales y que la información de tu marca sea consistente. Eso es lo que trabajo en la parte de GEO.",
      },
    },
    {
      "@type": "Question",
      name: "¿Tengo que migrar de plataforma para crecer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Una migración es cara, arriesgada para el SEO y casi nunca es el cuello de botella. Mi trabajo es exactamente el contrario: sacar más ventas de la plataforma y el tráfico que ya tienes.",
      },
    },
  ],
}

export default function AgenciaShopifyPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />
      <ThemeRegistry>
        <ShopifyMui />
      </ThemeRegistry>
    </>
  )
}
