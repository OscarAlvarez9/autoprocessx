import type { Metadata } from "next"
import ThemeRegistry from "@/components/mui/ThemeRegistry"
import BarcelonaMui from "@/components/mui/BarcelonaMui"
import JsonLd from "@/components/JsonLd"
import { ORG_ID, SITE_URL } from "@/lib/seo"

const TITLE = "Consultor SEO en Barcelona: más clientes en Google | SEOscar"
const DESCRIPTION =
  "Consultor SEO en Barcelona: posiciono tu web en Google y en ChatGPT. Hablas con quien hace el trabajo y decides con datos reales. Diagnóstico gratis."
const URL = `${SITE_URL}/consultor-seo-barcelona`

// BORRADOR: noindex, fuera del sitemap y sin enlaces entrantes hasta que Óscar la apruebe.
export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  keywords: [
    "consultor seo barcelona",
    "agencia seo barcelona",
    "seo barcelona",
    "posicionamiento seo barcelona",
    "experto seo barcelona",
    "consultor seo freelance barcelona",
    "seo local barcelona",
  ],
  robots: { index: false, follow: false },
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "SEOscar, consultor SEO en Barcelona" }],
    title: TITLE,
    description: DESCRIPTION,
    type: "website",
    locale: "es_ES",
    url: URL,
  },
  alternates: { canonical: URL },
}

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${URL}/#service`,
  name: "Consultor SEO en Barcelona",
  description:
    "Consultoría SEO y GEO para negocios y tiendas online de Barcelona: SEO para ecommerce, auditoría SEO y GEO, visibilidad en ChatGPT y Google, SEO local y Google Business Profile. Trato directo con el consultor que hace el trabajo.",
  serviceType: "SEO",
  provider: { "@id": ORG_ID },
  areaServed: { "@type": "City", name: "Barcelona" },
  availableLanguage: ["Spanish", "Catalan"],
}

// Las mismas preguntas y respuestas que se ven en la página (texto plano).
const FAQ_TEXT: [string, string][] = [
  [
    "¿Cuánto cuesta un consultor SEO en Barcelona?",
    "Depende de tu web, de tu sector y de dónde partas, así que no trabajo con tarifas de catálogo. Trabajo con precio cerrado tras el diagnóstico: sabes lo que pagas antes de empezar, sin sorpresas a mitad de proyecto.",
  ],
  [
    "¿Qué diferencia hay entre un consultor SEO y una agencia SEO en Barcelona?",
    "Con una agencia sueles hablar con una cuenta comercial y el trabajo lo hace otra persona. Conmigo hablas con quien analiza tu web y hace los cambios, porque trabajo solo. Las decisiones se toman con tus datos encima de la mesa, no con un informe estándar.",
  ],
  [
    "¿Trabajas solo con tiendas online?",
    "No. El ecommerce es mi especialidad, pero también trabajo el SEO de negocios locales, servicios y profesionales de Barcelona, incluido el SEO local en Google Maps.",
  ],
  [
    "¿Cuánto tarda el diagnóstico?",
    "Lo tienes en 24-48 h. Es gratis y te digo qué haría con tu web y en qué orden, sigamos juntos o no.",
  ],
  [
    "¿También me puedes ayudar a salir en ChatGPT?",
    "Sí. Es lo que se llama GEO: trabajar tu web y tu marca para que los asistentes como ChatGPT, Perplexity o las respuestas con IA de Google te mencionen cuando alguien pregunta por lo que vendes.",
  ],
]

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_TEXT.map(([q, a]) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
}

export default function ConsultorSeoBarcelonaPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />
      <ThemeRegistry>
        <BarcelonaMui />
      </ThemeRegistry>
    </>
  )
}
