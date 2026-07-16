import ThemeRegistry from "@/components/mui/ThemeRegistry"
import AuditoriaMui from "@/components/mui/AuditoriaMui"
import JsonLd from "@/components/JsonLd"
import { ORG_ID, SITE_URL } from "@/lib/seo"

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${SITE_URL}/servicios/auditoria-seo-geo/#service`,
  name: "Auditoría SEO/GEO + fugas de conversión para ecommerce",
  description:
    "Auditoría completa de la tienda online consolidada en un único documento accionable: SEO y GEO de landing y fichas de producto, fugas de conversión en el funnel, revisión de diseño orientada a CRO y medición (GA4, eventos y píxeles), con plan priorizado por impacto en ventas. Producto cerrado, sin pack ni permanencia.",
  serviceType: "Ecommerce SEO, GEO and CRO audit",
  provider: { "@id": ORG_ID },
  areaServed: [{ "@type": "Country", name: "España" }],
}

// FAQ citable (GEO): las mismas preguntas que responde la página.
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Es lo mismo que el diagnóstico gratuito?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. El diagnóstico es la primera toma de contacto: una revisión rápida para ver dónde estás y si tiene sentido trabajar juntos. La auditoría es el análisis completo en profundidad, con documento y plan accionable priorizado por impacto en ventas.",
      },
    },
    {
      "@type": "Question",
      name: "¿Necesito contratar el pack Crecimiento después?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. El documento es tuyo y puedes ejecutarlo con tu equipo o con quien quieras. Si después decides contratar el pack, el plan ya está hecho y empezamos con ventaja.",
      },
    },
    {
      "@type": "Question",
      name: "¿Sobre qué plataformas trabajáis?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Shopify, WooCommerce, PrestaShop, Magento y webs a medida. La auditoría se hace sobre tu tienda tal y como está, sin migrar nada.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuánto cuesta la auditoría?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No publicamos un precio cerrado porque cada tienda es distinta en catálogo, plataforma y estado. Se presupuesta tras la primera llamada, con alcance cerrado antes de empezar.",
      },
    },
  ],
}

export default function AuditoriaSeoGeoPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />
      <ThemeRegistry>
        <AuditoriaMui />
      </ThemeRegistry>
    </>
  )
}
