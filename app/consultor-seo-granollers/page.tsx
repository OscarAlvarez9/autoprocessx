import type { Metadata } from "next"
import ThemeRegistry from "@/components/mui/ThemeRegistry"
import GranollersMui from "@/components/mui/GranollersMui"
import JsonLd from "@/components/JsonLd"
import { ORG_ID, SITE_URL } from "@/lib/seo"

const TITLE = "Consultor SEO en Granollers: más clientes en Google"
const DESCRIPTION =
  "Consultor SEO en Granollers: posiciono tu negocio en Google, en el mapa y en ChatGPT, con un plan priorizado y trato directo. Diagnóstico gratis."
const URL = `${SITE_URL}/consultor-seo-granollers`

// BORRADOR: noindex, fuera del sitemap y sin enlaces entrantes hasta que Óscar la apruebe.
export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  keywords: [
    "consultor seo granollers",
    "agencia seo granollers",
    "seo granollers",
    "posicionamiento web granollers",
    "seo industrial vallès oriental",
  ],
  robots: { index: false, follow: false },
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "SEOscar, consultor SEO en Granollers" }],
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
  name: "Consultor SEO en Granollers",
  description:
    "SEO para empresas industriales, B2B, comercios y servicios de Granollers: arquitectura web por producto y aplicación, SEO local, SEO técnico y visibilidad en ChatGPT. Trato directo con el consultor que hace el trabajo.",
  serviceType: "SEO",
  provider: { "@id": ORG_ID },
  areaServed: [
    { "@type": "City", name: "Granollers" },
    { "@type": "AdministrativeArea", name: "Vallès Oriental" },
  ],
  availableLanguage: ["Spanish", "Catalan"],
}

const FAQ_TEXT: [string, string][] = [
  [
    "¿Trabajas el SEO de empresas industriales y B2B?",
    "Sí. En B2B quien busca suele usar el nombre técnico del producto, el material o la norma, no tu marca. El trabajo pasa por ordenar la web por producto y por aplicación, con fichas técnicas que Google pueda leer y que un comprador pueda comparar.",
  ],
  [
    "Vendo a toda España desde Granollers. ¿Me interesa el SEO local?",
    "Te interesa tener la ficha de Google Business bien hecha porque es lo primero que ven muchos clientes al buscar tu nombre, pero el grueso del trabajo será el SEO de producto y de categoría, que no depende de la ciudad.",
  ],
  [
    "¿Cuánto cuesta un consultor SEO en Granollers?",
    "Depende del tamaño de la web y de lo que haya que arreglar. No publico tarifas: te doy un precio cerrado tras el diagnóstico, antes de que decidas nada.",
  ],
  [
    "¿Puedo salir en ChatGPT cuando alguien busca un proveedor?",
    "Se puede trabajar. Los asistentes recomiendan a quien tiene información clara, coherente y citable en su web y fuera de ella. A eso se le llama GEO, y lo incluyo en el plan cuando tiene sentido para tu sector.",
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

export default function ConsultorSeoGranollersPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />
      <ThemeRegistry>
        <GranollersMui faqs={FAQ_TEXT} />
      </ThemeRegistry>
    </>
  )
}
