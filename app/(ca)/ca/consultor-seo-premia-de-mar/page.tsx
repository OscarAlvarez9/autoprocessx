import type { Metadata } from "next"
import { i18nAlternates } from "@/lib/i18n"
import ThemeRegistry from "@/components/mui/ThemeRegistry"
import PremiaMuiCa from "@/components/mui/ca/PremiaMuiCa"
import JsonLd from "@/components/JsonLd"
import { ORG_ID, SITE_URL } from "@/lib/seo"

const TITLE = "Consultor SEO a Premià de Mar: SEO local i web | SEOscar"
const DESCRIPTION =
  "Consultor SEO a Premià de Mar: posicionament web i SEO local per a negocis del Maresme a Google, al mapa i a ChatGPT. Tracte directe i diagnòstic gratuït."
const URL = `${SITE_URL}/ca/consultor-seo-premia-de-mar`

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  keywords: [
    "consultor seo premià de mar",
    "seo premià de mar",
    "agència seo premià de mar",
    "posicionament web premià de mar",
    "seo local premià de mar",
  ],
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "SEOscar, consultor SEO a Premià de Mar" }],
    title: TITLE,
    description: DESCRIPTION,
    type: "website",
    locale: "ca_ES",
    url: URL,
  },
  alternates: i18nAlternates("/consultor-seo-premia-de-mar", "ca"),
}

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${URL}/#service`,
  name: "Consultor SEO a Premià de Mar",
  description:
    "SEO local, posicionament web i visibilitat a ChatGPT per a autònoms i petits negocis de Premià de Mar i del Maresme, des de la base del consultor al mateix municipi.",
  serviceType: "Local SEO",
  provider: { "@id": ORG_ID },
  areaServed: [
    { "@type": "City", name: "Premià de Mar" },
    { "@type": "AdministrativeArea", name: "Maresme" },
  ],
  availableLanguage: ["Catalan", "Spanish"],
}

const FAQ_TEXT: [string, string][] = [
  [
    "Soc autònom a Premià de Mar. Té sentit que inverteixi en SEO?",
    "Depèn de com t'arriben els clients. Si et busquen per internet abans de contactar, sí, i moltes vegades el que més rendeix és el més senzill: una fitxa de Google completa i ben cuidada i un web que expliqui amb claredat què fas.",
  ],
  [
    "Necessito tenir web per començar?",
    "No sempre. Amb la fitxa de Google Business ja es pot treballar la visibilitat al mapa. Però si vols sortir en cerques més concretes o a ChatGPT, un web propi amb una pàgina per servei marca la diferència.",
  ],
  [
    "Què rebo al diagnòstic gratuït?",
    "Una revisió del teu web i de la teva presència a Google amb el que faria i en quin ordre. El tens en 24-48 h, i si després continuem, el preu és tancat després del diagnòstic.",
  ],
  [
    "Puc parlar amb tu en català?",
    "Sí. Treballo en català i en castellà, i els textos del teu web poden anar en l'idioma o els idiomes en què et busquen els teus clients.",
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

export default function ConsultorSeoPremiaPageCa() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />
      <ThemeRegistry>
        <PremiaMuiCa faqs={FAQ_TEXT} />
      </ThemeRegistry>
    </>
  )
}
