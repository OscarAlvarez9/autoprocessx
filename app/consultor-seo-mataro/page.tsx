import type { Metadata } from "next"
import ThemeRegistry from "@/components/mui/ThemeRegistry"
import MataroMui from "@/components/mui/MataroMui"
import JsonLd from "@/components/JsonLd"
import { ORG_ID, SITE_URL } from "@/lib/seo"

const TITLE = "Consultor SEO en Mataró: más clientes en Google | SEOscar"
const DESCRIPTION =
  "Consultor SEO en Mataró desde Premià de Mar. Posiciono tu negocio en Google, en el mapa y en ChatGPT, con trato directo. Diagnóstico gratis."
const URL = `${SITE_URL}/consultor-seo-mataro`

// BORRADOR: noindex, fuera del sitemap y sin enlaces entrantes hasta que Óscar la apruebe.
export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  keywords: [
    "consultor seo mataró",
    "agencia seo mataro",
    "agencia marketing mataro",
    "seo mataro",
    "posicionamiento web mataro",
  ],
  robots: { index: false, follow: false },
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "SEOscar, consultor SEO en Mataró" }],
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
  name: "Consultor SEO en Mataró",
  description:
    "Posicionamiento web, SEO local y visibilidad en ChatGPT para negocios de Mataró: ficha de Google Business, páginas por servicio, SEO técnico y conversión. Trato directo con el consultor que hace el trabajo.",
  serviceType: "SEO",
  provider: { "@id": ORG_ID },
  areaServed: [
    { "@type": "City", name: "Mataró" },
    { "@type": "AdministrativeArea", name: "Maresme" },
  ],
  availableLanguage: ["Spanish", "Catalan"],
}

// Las mismas preguntas que se ven en la página (texto plano, sirve para el JSON-LD y para la UI).
const FAQ_TEXT: [string, string][] = [
  [
    "¿Qué cambia entre contratar una agencia SEO en Mataró y un consultor independiente?",
    "Sobre todo con quién hablas. En una agencia suele haber una persona comercial y otra que ejecuta. Yo trabajo solo: la persona que revisa tu web, decide las prioridades y hace los cambios es la misma con la que hablas.",
  ],
  [
    "¿Cuánto cuesta el posicionamiento web en Mataró?",
    "No tengo tarifas de catálogo porque no cuesta lo mismo una web de cinco páginas que una tienda con miles de productos. Te doy un precio cerrado tras el diagnóstico, antes de empezar.",
  ],
  [
    "Mi negocio solo vende en Mataró. ¿Me compensa el SEO?",
    "Si tus clientes te buscan en el móvil antes de ir o de llamar, sí. Para un negocio de proximidad el trabajo se centra en la ficha de Google Business, en las páginas de cada servicio y en las reseñas, no en competir por búsquedas de toda España.",
  ],
  [
    "¿Llevas también el marketing digital del negocio?",
    "Me centro en que te encuentren en Google y en ChatGPT, en que la web convierta esas visitas y en automatizar lo repetitivo. En el diagnóstico te digo con franqueza si tu problema es de SEO o de otra cosa.",
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

export default function ConsultorSeoMataroPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />
      <ThemeRegistry>
        <MataroMui faqs={FAQ_TEXT} />
      </ThemeRegistry>
    </>
  )
}
