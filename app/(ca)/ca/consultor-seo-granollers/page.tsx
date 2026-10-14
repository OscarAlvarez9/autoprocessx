import type { Metadata } from "next"
import { i18nAlternates } from "@/lib/i18n"
import ThemeRegistry from "@/components/mui/ThemeRegistry"
import GranollersMuiCa from "@/components/mui/ca/GranollersMuiCa"
import JsonLd from "@/components/JsonLd"
import { ORG_ID, SITE_URL } from "@/lib/seo"

const TITLE = "Consultor SEO a Granollers: més clients a Google"
const DESCRIPTION =
  "Consultor SEO a Granollers: posicionament web del teu negoci a Google, al mapa i a ChatGPT, amb un pla prioritzat i tracte directe. Diagnòstic gratuït."
const URL = `${SITE_URL}/ca/consultor-seo-granollers`

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  keywords: [
    "consultor seo granollers",
    "agència seo granollers",
    "seo granollers",
    "posicionament web granollers",
    "seo industrial vallès oriental",
  ],
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "SEOscar, consultor SEO a Granollers" }],
    title: TITLE,
    description: DESCRIPTION,
    type: "website",
    locale: "ca_ES",
    url: URL,
  },
  alternates: i18nAlternates("/consultor-seo-granollers", "ca"),
}

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${URL}/#service`,
  name: "Consultor SEO a Granollers",
  description:
    "SEO per a empreses industrials, B2B, comerços i serveis de Granollers: arquitectura web per producte i aplicació, SEO local, SEO tècnic i visibilitat a ChatGPT. Tracte directe amb el consultor que fa la feina.",
  serviceType: "SEO",
  provider: { "@id": ORG_ID },
  areaServed: [
    { "@type": "City", name: "Granollers" },
    { "@type": "AdministrativeArea", name: "Vallès Oriental" },
  ],
  availableLanguage: ["Catalan", "Spanish"],
}

const FAQ_TEXT: [string, string][] = [
  [
    "Treballes el SEO d'empreses industrials i B2B?",
    "Sí. En B2B qui busca sol fer servir el nom tècnic del producte, el material o la norma, no la teva marca. La feina passa per ordenar el web per producte i per aplicació, amb fitxes tècniques que Google pugui llegir i que un comprador pugui comparar.",
  ],
  [
    "Venc a tot Espanya des de Granollers. M'interessa el SEO local?",
    "T'interessa tenir la fitxa de Google Business ben feta perquè és el primer que veuen molts clients quan busquen el teu nom, però el gruix de la feina serà el SEO de producte i de categoria, que no depèn de la ciutat.",
  ],
  [
    "Quant costa un consultor SEO a Granollers?",
    "Depèn de la mida del web i del que calgui arreglar. No publico tarifes: et dono un preu tancat després del diagnòstic, abans que decideixis res.",
  ],
  [
    "Puc sortir a ChatGPT quan algú busca un proveïdor?",
    "Es pot treballar. Els assistents recomanen qui té informació clara, coherent i citable al seu web i fora d'ell. Això s'anomena GEO, i ho incloc al pla quan té sentit per al teu sector.",
  ],
]

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  inLanguage: "ca",
  mainEntity: FAQ_TEXT.map(([q, a]) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
}

export default function ConsultorSeoGranollersPageCa() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />
      <ThemeRegistry>
        <GranollersMuiCa faqs={FAQ_TEXT} />
      </ThemeRegistry>
    </>
  )
}
