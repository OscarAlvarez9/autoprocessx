import type { Metadata } from "next"
import { i18nAlternates } from "@/lib/i18n"
import ThemeRegistry from "@/components/mui/ThemeRegistry"
import MataroMuiCa from "@/components/mui/ca/MataroMuiCa"
import JsonLd from "@/components/JsonLd"
import { ORG_ID, SITE_URL } from "@/lib/seo"

const TITLE = "Consultor SEO a Mataró: més clients a Google | SEOscar"
const DESCRIPTION =
  "Consultor SEO a Mataró des de Premià de Mar: posicionament web del teu negoci a Google, al mapa i a ChatGPT, amb tracte directe. Diagnòstic gratuït."
const URL = `${SITE_URL}/ca/consultor-seo-mataro`

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  keywords: [
    "consultor seo mataró",
    "agència seo mataró",
    "agència màrqueting mataró",
    "seo mataró",
    "posicionament web mataró",
  ],
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "SEOscar, consultor SEO a Mataró" }],
    title: TITLE,
    description: DESCRIPTION,
    type: "website",
    locale: "ca_ES",
    url: URL,
  },
  alternates: i18nAlternates("/consultor-seo-mataro", "ca"),
}

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${URL}/#service`,
  name: "Consultor SEO a Mataró",
  description:
    "Posicionament web, SEO local i visibilitat a ChatGPT per a negocis de Mataró: fitxa de Google Business, pàgines per servei, SEO tècnic i conversió. Tracte directe amb el consultor que fa la feina.",
  serviceType: "SEO",
  provider: { "@id": ORG_ID },
  areaServed: [
    { "@type": "City", name: "Mataró" },
    { "@type": "AdministrativeArea", name: "Maresme" },
  ],
  availableLanguage: ["Catalan", "Spanish"],
}

// Les mateixes preguntes que es veuen a la pàgina (text pla, serveix per al JSON-LD i per a la UI).
const FAQ_TEXT: [string, string][] = [
  [
    "Què canvia entre contractar una agència SEO a Mataró i un consultor independent?",
    "Sobretot amb qui parles. En una agència sol haver-hi una persona comercial i una altra que executa. Jo treballo sol: la persona que revisa el teu web, decideix les prioritats i fa els canvis és la mateixa amb qui parles.",
  ],
  [
    "Quant costa el posicionament web a Mataró?",
    "No tinc tarifes de catàleg perquè no costa el mateix un web de cinc pàgines que una botiga amb milers de productes. Et dono un preu tancat després del diagnòstic, abans de començar.",
  ],
  [
    "El meu negoci només ven a Mataró. Em compensa el SEO?",
    "Si els teus clients et busquen al mòbil abans d'anar-hi o de trucar, sí. Per a un negoci de proximitat la feina se centra en la fitxa de Google Business, en les pàgines de cada servei i en les ressenyes, no a competir per cerques de tot Espanya.",
  ],
  [
    "Portes també el màrqueting digital del negoci?",
    "Em centro que et trobin a Google i a ChatGPT, que el web converteixi aquestes visites i en automatitzar el que és repetitiu. Al diagnòstic et dic amb franquesa si el teu problema és de SEO o d'una altra cosa.",
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

export default function ConsultorSeoMataroPageCa() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />
      <ThemeRegistry>
        <MataroMuiCa faqs={FAQ_TEXT} />
      </ThemeRegistry>
    </>
  )
}
