import type { Metadata } from "next"
import ThemeRegistry from "@/components/mui/ThemeRegistry"
import MaresmeMuiCa from "@/components/mui/ca/MaresmeMuiCa"
import JsonLd from "@/components/JsonLd"
import { ORG_ID, SITE_URL } from "@/lib/seo"
import { i18nAlternates } from "@/lib/i18n"

const TITLE = "Consultor SEO al Maresme: SEO local a la comarca | SEOscar"
const DESCRIPTION =
  "Consultor SEO al Maresme: posiciono negocis de tota la comarca, de Montgat a Malgrat de Mar, a Google, al mapa i a ChatGPT. Diagnòstic gratuït."

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  keywords: [
    "seo maresme",
    "agència seo maresme",
    "consultor seo maresme",
    "seo mataró",
    "posicionament web maresme",
    "seo premià de mar",
    "seo vilassar",
    "seo local maresme",
  ],
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "SEOscar, consultor SEO al Maresme" }],
    title: TITLE,
    description: DESCRIPTION,
    type: "website",
    locale: "ca_ES",
    url: `${SITE_URL}/ca/agencia-seo-maresme`,
  },
  alternates: i18nAlternates("/agencia-seo-maresme", "ca"),
}

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${SITE_URL}/ca/agencia-seo-maresme/#service`,
  name: "Consultor SEO al Maresme",
  description:
    "SEO local per a negocis del Maresme, des de Premià de Mar: Google Business i ressenyes, contingut orientat a les cerques del teu poble, SEO tècnic i de conversió, i el pont amb l'ecommerce. Tracte directe amb el fundador, atenció en català i en castellà.",
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
  availableLanguage: ["Catalan", "Spanish"],
}

// FAQ citable (GEO): les mateixes preguntes que respon la pàgina.
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  inLanguage: "ca",
  mainEntity: [
    {
      "@type": "Question",
      name: "Quant costa un consultor SEO al Maresme?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Depèn del negoci i del punt de partida. Una auditoria completa comença en 500 €, preu tancat que saps abans de començar. L'acompanyament continu s'ajusta a l'abast del teu cas, i la xifra exacta surt del diagnòstic gratuït, sense sorpreses per correu.",
      },
    },
    {
      "@type": "Question",
      name: "Treballes només amb botigues en línia?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. També treballo amb negoci local: comerços, serveis i professionals de la comarca. L'ecommerce és la meva especialitat, però el SEO local d'un negoci de Mataró o de Premià el faig igual de a fons.",
      },
    },
    {
      "@type": "Question",
      name: "En quant de temps es veuen resultats?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "En mesos, no en setmanes. El SEO no és un anunci que encens i apagues: els primers moviments es noten cap al segon o tercer mes i el que és sòlid arriba cap als sis, segons la competència del teu sector i d'on parteixis. Qui et prometi la primera posició en dues setmanes t'està mentint.",
      },
    },
    {
      "@type": "Question",
      name: "Ens podem veure en persona?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. Soc a Premià de Mar i em moc per la comarca, així que per al que és important ens veiem. I si ho prefereixes, tot per videotrucada, que el SEO no necessita cotxe.",
      },
    },
  ],
}

export default function AgenciaSeoMaresmePageCa() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />
      <ThemeRegistry>
        <MaresmeMuiCa />
      </ThemeRegistry>
    </>
  )
}
