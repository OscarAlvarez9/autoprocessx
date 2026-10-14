import type { Metadata } from "next"
import ThemeRegistry from "@/components/mui/ThemeRegistry"
import MagentoCa from "@/components/mui/ca/MagentoCa"
import JsonLd from "@/components/JsonLd"
import { ORG_ID, SITE_URL } from "@/lib/seo"
import { i18nAlternates } from "@/lib/i18n"

export const metadata: Metadata = {
  title: { absolute: "Agència Magento: SEO, GEO i CRO a escala | SEOscar" },
  description: "Fes que el teu Magento vengui més sense migrar: SEO tècnic a escala, visibilitat a ChatGPT i Google, CRO i automatització. Diagnòstic gratuït en 24-48 h.",
  keywords: ["agència Magento", "SEO Magento", "optimitzar Magento", "Magento lent", "consultor Magento Espanya", "Adobe Commerce SEO", "CRO Magento"],
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "SEOscar, agència d'ecommerce a Barcelona" }],
    title: "Agència Magento: SEO, GEO i CRO a escala | SEOscar",
    description: "Fes que el teu Magento vengui més sense migrar: SEO tècnic a escala, visibilitat a ChatGPT i Google, CRO i automatització. Diagnòstic gratuït en 24-48 h.",
    type: "website",
    locale: "ca_ES",
    url: `${SITE_URL}/ca/agencia-magento`,
  },
  alternates: i18nAlternates("/agencia-magento", "ca"),
}

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${SITE_URL}/ca/agencia-magento/#service`,
  name: "Agència Magento: SEO, GEO i CRO per a botigues Magento",
  description:
    "Enginyeria de creixement per a botigues Magento i Adobe Commerce: SEO tècnic a escala de catàleg, visibilitat en cercadors d'IA (GEO), optimització de conversió i automatització, sobre la plataforma actual i sense migrar.",
  serviceType: "Magento ecommerce growth engineering",
  provider: { "@id": ORG_ID },
  areaServed: [{ "@type": "Country", name: "Espanya" }],
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Magento és massa plataforma per a la meva botiga?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Si el teu catàleg és petit i la teva operativa és simple, probablement sí i t'ho diré. Però si ja estàs a Magento facturant, la pregunta útil no és aquesta sinó quant més pot donar el que ja tens. Gairebé sempre és força.",
      },
    },
    {
      "@type": "Question",
      name: "Per què el meu Magento va lent?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Perquè a Magento la velocitat depèn de tot el sistema: tema, memòria cau de pàgina completa, indexadors, base de dades i infraestructura. Al diagnòstic mesuro capa per capa i et dic on és el coll d'ampolla real abans de tocar res.",
      },
    },
    {
      "@type": "Question",
      name: "Com es fa SEO amb milers de referències?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Amb regles, no a mà: estratègia de facetes per al rastreig, plantilles de metadades per atribut, schema generat des del catàleg i prioritat absoluta a les categories que venen. El SEO de Magento és un problema d'enginyeria, i això és una bona notícia.",
      },
    },
    {
      "@type": "Question",
      name: "Treballes amb Adobe Commerce i amb Magento Open Source?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Amb tots dos. La base tècnica és comuna i l'enfocament també: la diferència és en quines funcions vénen de sèrie i quines es resolen amb desenvolupament o automatització.",
      },
    },
    {
      "@type": "Question",
      name: "Pot una IA recomanar la meva botiga si soc B2B?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí, i és on abans es nota. Les cerques de proveïdor i de producte tècnic ja es fan a ChatGPT i Perplexity. Si el teu catàleg és llegible per als seus bots i les teves pàgines responen preguntes reals, la teva botiga competeix en aquestes respostes; si no, ni hi apareixes.",
      },
    },
  ],
}

export default function AgenciaMagentoPageCa() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />
      <ThemeRegistry>
        <MagentoCa />
      </ThemeRegistry>
    </>
  )
}
