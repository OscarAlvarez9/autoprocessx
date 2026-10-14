import type { Metadata } from "next"
import { i18nAlternates } from "@/lib/i18n"
import ThemeRegistry from "@/components/mui/ThemeRegistry"
import BarcelonaMuiCa from "@/components/mui/ca/BarcelonaMuiCa"
import JsonLd from "@/components/JsonLd"
import { ORG_ID, SITE_URL } from "@/lib/seo"

const TITLE = "Consultor SEO a Barcelona: més clients a Google | SEOscar"
const DESCRIPTION =
  "Consultor SEO a Barcelona, l'alternativa a una agència SEO: posicionament SEO a Google i a ChatGPT, amb qui fa la feina i dades reals. Diagnòstic gratuït."
const URL = `${SITE_URL}/ca/consultor-seo-barcelona`

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  keywords: [
    "consultor seo barcelona",
    "agència seo barcelona",
    "seo barcelona",
    "posicionament seo barcelona",
    "posicionament web barcelona",
    "expert seo barcelona",
    "seo local barcelona",
  ],
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "SEOscar, consultor SEO a Barcelona" }],
    title: TITLE,
    description: DESCRIPTION,
    type: "website",
    locale: "ca_ES",
    url: URL,
  },
  alternates: i18nAlternates("/consultor-seo-barcelona", "ca"),
}

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${URL}/#service`,
  name: "Consultor SEO a Barcelona",
  description:
    "Consultoria SEO i GEO per a negocis i botigues en línia de Barcelona: SEO per a ecommerce, auditoria SEO i GEO, visibilitat a ChatGPT i Google, SEO local i Google Business Profile. Tracte directe amb el consultor que fa la feina.",
  serviceType: "SEO",
  provider: { "@id": ORG_ID },
  areaServed: { "@type": "City", name: "Barcelona" },
  availableLanguage: ["Catalan", "Spanish"],
}

// Les mateixes preguntes i respostes que es veuen a la pàgina (text pla).
const FAQ_TEXT: [string, string][] = [
  [
    "Quant costa un consultor SEO a Barcelona?",
    "Depèn del teu web, del teu sector i d'on parteixis, així que no treballo amb tarifes de catàleg. Treballo amb preu tancat després del diagnòstic: saps què pagues abans de començar, sense sorpreses a mig projecte.",
  ],
  [
    "Quina diferència hi ha entre un consultor SEO i una agència SEO a Barcelona?",
    "Amb una agència sols parlar amb un comercial i la feina la fa una altra persona. Amb mi parles amb qui analitza el teu web i fa els canvis, perquè treballo sol. Les decisions es prenen amb les teves dades damunt la taula, no amb un informe estàndard.",
  ],
  [
    "Treballes només amb botigues en línia?",
    "No. L'ecommerce és la meva especialitat, però també treballo el SEO de negocis locals, serveis i professionals de Barcelona, inclòs el SEO local a Google Maps.",
  ],
  [
    "Quant triga el diagnòstic?",
    "El tens en 24-48 h. És gratuït i et dic què faria amb el teu web i en quin ordre, tant si continuem junts com si no.",
  ],
  [
    "També em pots ajudar a sortir a ChatGPT?",
    "Sí. És el que s'anomena GEO: treballar el teu web i la teva marca perquè els assistents com ChatGPT, Perplexity o les respostes amb IA de Google et mencionin quan algú pregunta pel que vens.",
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

export default function ConsultorSeoBarcelonaPageCa() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />
      <ThemeRegistry>
        <BarcelonaMuiCa />
      </ThemeRegistry>
    </>
  )
}
