import type { Metadata } from "next"
import { i18nAlternates } from "@/lib/i18n"
import ThemeRegistry from "@/components/mui/ThemeRegistry"
import PremiaMui from "@/components/mui/PremiaMui"
import JsonLd from "@/components/JsonLd"
import { ORG_ID, SITE_URL } from "@/lib/seo"

const TITLE = "Consultor SEO en Premià de Mar: SEO local y web | SEOscar"
const DESCRIPTION =
  "Consultor SEO con base en Premià de Mar: posiciono negocios del Maresme en Google, en el mapa y en ChatGPT, con trato directo. Diagnóstico gratis."
const URL = `${SITE_URL}/consultor-seo-premia-de-mar`

// Publicada el 14-oct-2026 con el visto bueno de Óscar.
// Pendiente: cuando Óscar confirme dirección, teléfono y nombre de la ficha de Google,
// esta página pasa a llevar ProfessionalService con address y el mapa embebido.
export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  keywords: [
    "consultor seo premià de mar",
    "seo premià de mar",
    "agencia seo premià de mar",
    "posicionamiento web premià de mar",
    "seo local premià de mar",
  ],
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "SEOscar, consultor SEO en Premià de Mar" }],
    title: TITLE,
    description: DESCRIPTION,
    type: "website",
    locale: "es_ES",
    url: URL,
  },
  alternates: i18nAlternates("/consultor-seo-premia-de-mar", "es"),
}

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${URL}/#service`,
  name: "Consultor SEO en Premià de Mar",
  description:
    "SEO local, posicionamiento web y visibilidad en ChatGPT para autónomos y pequeños negocios de Premià de Mar y del Maresme, desde la base del consultor en el propio municipio.",
  serviceType: "Local SEO",
  provider: { "@id": ORG_ID },
  areaServed: [
    { "@type": "City", name: "Premià de Mar" },
    { "@type": "AdministrativeArea", name: "Maresme" },
  ],
  availableLanguage: ["Spanish", "Catalan"],
}

const FAQ_TEXT: [string, string][] = [
  [
    "Soy autónomo en Premià de Mar. ¿Tiene sentido que invierta en SEO?",
    "Depende de cómo te llegan los clientes. Si te buscan por internet antes de contactar, sí, y muchas veces lo que más rinde es lo más sencillo: una ficha de Google completa y bien cuidada y una web que explique con claridad qué haces.",
  ],
  [
    "¿Necesito tener web para empezar?",
    "No siempre. Con la ficha de Google Business ya se puede trabajar la visibilidad en el mapa. Pero si quieres salir en búsquedas más concretas o en ChatGPT, una web propia con una página por servicio marca la diferencia.",
  ],
  [
    "¿Qué recibo en el diagnóstico gratuito?",
    "Una revisión de tu web y de tu presencia en Google con lo que haría y en qué orden. Lo tienes en 24-48 h, y si después seguimos, el precio es cerrado tras el diagnóstico.",
  ],
  [
    "¿Puedo hablar contigo en catalán?",
    "Sí. Trabajo en castellano y en català, y los textos de tu web pueden ir en el idioma o idiomas en que te buscan tus clientes.",
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

export default function ConsultorSeoPremiaPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />
      <ThemeRegistry>
        <PremiaMui faqs={FAQ_TEXT} />
      </ThemeRegistry>
    </>
  )
}
