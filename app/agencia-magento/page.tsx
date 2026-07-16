import ThemeRegistry from "@/components/mui/ThemeRegistry"
import MagentoMui from "@/components/mui/MagentoMui"
import JsonLd from "@/components/JsonLd"
import { ORG_ID, SITE_URL } from "@/lib/seo"

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${SITE_URL}/agencia-magento/#service`,
  name: "Agencia Magento: SEO, GEO, CRO e IA para ecommerce",
  description:
    "Ingeniería de crecimiento para tiendas Magento y Adobe Commerce: SEO técnico a escala de catálogo, visibilidad en buscadores de IA (GEO), optimización de conversión y automatización, sobre la plataforma actual y sin migrar.",
  serviceType: "Magento ecommerce growth engineering",
  provider: { "@id": ORG_ID },
  areaServed: [{ "@type": "Country", name: "España" }],
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Magento es demasiada plataforma para mi tienda?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Si tu catálogo es pequeño y tu operativa simple, probablemente sí y te lo diré. Pero si ya estás en Magento facturando, la pregunta útil no es esa sino cuánto más puede dar lo que ya tienes. Casi siempre es bastante.",
      },
    },
    {
      "@type": "Question",
      name: "¿Por qué mi Magento va lento?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Porque en Magento la velocidad depende de todo el sistema: tema, caché de página completa, indexadores, base de datos e infraestructura. En el diagnóstico mido capa por capa y te digo dónde está el cuello de botella real antes de tocar nada.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cómo se hace SEO con miles de referencias?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Con reglas, no a mano: estrategia de facetas para el rastreo, plantillas de metadatos por atributo, schema generado desde el catálogo y prioridad absoluta a las categorías que venden. El SEO de Magento es un problema de ingeniería, y eso es una buena noticia.",
      },
    },
    {
      "@type": "Question",
      name: "¿Trabajas con Adobe Commerce y con Magento Open Source?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Con los dos. La base técnica es común y el enfoque también: la diferencia está en qué funciones vienen de serie y cuáles se resuelven con desarrollo o automatización.",
      },
    },
    {
      "@type": "Question",
      name: "¿Puede una IA recomendar mi tienda si soy B2B?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí, y es donde antes se nota. Las búsquedas de proveedor y producto técnico ya se hacen en ChatGPT y Perplexity. Si tu catálogo es legible para sus bots y tus páginas responden preguntas reales, tu tienda compite en esas respuestas; si no, ni apareces.",
      },
    },
  ],
}

export default function AgenciaMagentoPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />
      <ThemeRegistry>
        <MagentoMui />
      </ThemeRegistry>
    </>
  )
}
