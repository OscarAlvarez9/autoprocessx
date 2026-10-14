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

// FAQ citable (GEO): mismas preguntas que responde la página. El precio y el
// plazo van en genérico (sin la cifra) porque en la web son huecos [[ ]] que
// Óscar rellena; si al publicar quieres el match exacto para rich results,
// copia aquí el número real.
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Es lo mismo que el diagnóstico gratuito?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. El diagnóstico es gratis y te dice dónde mirar: las tres o cuatro cosas que más ventas te están costando. La auditoría es el documento completo: todo lo que aplicar en tu tienda, en qué orden y por qué, con SEO y GEO de fichas y landing, fugas de conversión, diseño CRO y medición. El diagnóstico te orienta; la auditoría te da el plan entero.",
      },
    },
    {
      "@type": "Question",
      name: "¿Necesito contratar el pack Crecimiento después?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. El documento es tuyo y puedes ejecutarlo con tu equipo o con quien quieras. Si después decides contratar el pack, el plan ya está hecho y empiezas con ventaja.",
      },
    },
    {
      "@type": "Question",
      name: "¿Sobre qué plataformas trabajas?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Shopify, WooCommerce, PrestaShop, Magento y webs a medida. La auditoría se hace sobre tu tienda tal y como está, sin migrar nada.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuánto cuesta una auditoría SEO?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El precio es cerrado y lo sabes antes de empezar. Sube según tres cosas: el tamaño del catálogo, cuántas plataformas hay que auditar y cuántos idiomas o mercados. No cambia con el sector ni con la urgencia. El documento es tuyo lo apliques conmigo o por tu cuenta.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuánto tarda una auditoría SEO?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Unas dos semanas, 14 días, desde que tengo los accesos. El rastreo y el análisis de datos son la parte rápida; lo que lleva tiempo es revisar tu tienda como comprador y cruzar lo que veo con lo que dicen GA4 y Search Console. La sesión de entrega la agendamos al cerrar el documento.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué diferencia hay entre auditoría SEO y auditoría técnica?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La auditoría técnica es una parte de la auditoría SEO, no un sinónimo. Lo técnico cubre rastreo, indexación, velocidad, schema y errores de servidor: que Google pueda leer tu tienda. La auditoría completa añade lo que decide si vendes: intención de búsqueda de tus categorías, calidad de las fichas, visibilidad en los buscadores de IA, las fugas de conversión del funnel y la medición y tracking. Una tienda puede estar técnicamente perfecta y no vender nada.",
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
