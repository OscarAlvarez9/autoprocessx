import ThemeRegistry from "@/components/mui/ThemeRegistry"
import MaresmeMui from "@/components/mui/MaresmeMui"
import JsonLd from "@/components/JsonLd"
import { ORG_ID, SITE_URL } from "@/lib/seo"

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${SITE_URL}/agencia-seo-maresme/#service`,
  name: "Consultor SEO en el Maresme",
  description:
    "SEO local para negocios del Maresme, desde Premià de Mar: Google Business y reseñas, contenido orientado a las búsquedas de tu pueblo, SEO técnico y de conversión, y el puente con el ecommerce. Trato directo con el fundador, atención en castellano y català.",
  serviceType: "Local SEO",
  provider: { "@id": ORG_ID },
  areaServed: [
    { "@type": "AdministrativeArea", name: "Maresme" },
    { "@type": "City", name: "Mataró" },
    { "@type": "City", name: "Premià de Mar" },
    { "@type": "City", name: "Vilassar de Mar" },
    { "@type": "City", name: "Argentona" },
    { "@type": "City", name: "El Masnou" },
    { "@type": "City", name: "Arenys de Mar" },
  ],
  availableLanguage: ["Spanish", "Catalan"],
}

// FAQ citable (GEO): las mismas preguntas que responde la página.
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Cuánto cuesta un consultor SEO en el Maresme?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Depende del negocio y del punto de partida. Una auditoría completa empieza en 500€, precio cerrado que sabes antes de empezar. El acompañamiento continuo se ajusta al alcance de tu caso, y el número exacto sale del diagnóstico gratis, sin sorpresas por email.",
      },
    },
    {
      "@type": "Question",
      name: "¿Trabajas solo con tiendas online?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. También trabajo negocio local: comercios, servicios y profesionales de la comarca. El ecommerce es mi especialidad, pero el SEO local de un negocio de Mataró o Premià lo hago igual de a fondo.",
      },
    },
    {
      "@type": "Question",
      name: "¿En cuánto tiempo se ven resultados?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "En meses, no en semanas. El SEO no es un anuncio que enciendes y apagas: los primeros movimientos se notan hacia el segundo o tercer mes y lo sólido llega sobre los seis, según la competencia de tu sector y de dónde partas. Quien te prometa la primera posición en dos semanas, te está mintiendo.",
      },
    },
    {
      "@type": "Question",
      name: "¿Nos podemos ver en persona?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. Estoy en Premià de Mar y me muevo por la comarca, así que para lo importante nos vemos. Y si lo prefieres, todo por videollamada, que el SEO no necesita coche.",
      },
    },
  ],
}

export default function AgenciaSeoMaresmePage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />
      <ThemeRegistry>
        <MaresmeMui />
      </ThemeRegistry>
    </>
  )
}
