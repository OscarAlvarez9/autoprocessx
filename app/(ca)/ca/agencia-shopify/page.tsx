import type { Metadata } from "next"
import ThemeRegistry from "@/components/mui/ThemeRegistry"
import ShopifyCa from "@/components/mui/ca/ShopifyCa"
import JsonLd from "@/components/JsonLd"
import { ORG_ID, SITE_URL } from "@/lib/seo"
import { i18nAlternates } from "@/lib/i18n"

export const metadata: Metadata = {
  title: { absolute: "Agència Shopify: SEO, GEO i CRO sense migrar | SEOscar" },
  description: "Fes que el teu Shopify vengui més amb el trànsit que ja tens: SEO tècnic, visibilitat a ChatGPT i Google, CRO i automatització. Diagnòstic gratuït 24-48 h.",
  keywords: ["agència Shopify", "SEO Shopify", "CRO Shopify", "optimitzar botiga Shopify", "expert Shopify Espanya", "Shopify Plus SEO", "GEO Shopify"],
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "SEOscar, agència d'ecommerce a Barcelona" }],
    title: "Agència Shopify: SEO, GEO i CRO sense migrar | SEOscar",
    description: "Fes que el teu Shopify vengui més amb el trànsit que ja tens: SEO tècnic, visibilitat a ChatGPT i Google, CRO i automatització. Diagnòstic gratuït 24-48 h.",
    type: "website",
    locale: "ca_ES",
    url: `${SITE_URL}/ca/agencia-shopify`,
  },
  alternates: i18nAlternates("/agencia-shopify", "ca"),
}

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${SITE_URL}/ca/agencia-shopify/#service`,
  name: "Agència Shopify: SEO, GEO i CRO per a botigues Shopify",
  description:
    "Optimització de botigues Shopify i Shopify Plus: SEO tècnic sobre el tema, visibilitat en cercadors d'IA (GEO), optimització de conversió i automatització, sobre la plataforma actual i sense migrar.",
  serviceType: "Optimització de botigues Shopify",
  provider: { "@id": ORG_ID },
  areaServed: [{ "@type": "Country", name: "Espanya" }],
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Es pot fer SEO avançat a Shopify o està limitat?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Es pot. Shopify té límits coneguts (estructura d'URL fixa, robots parcialment editable), però el 90% del SEO que mou vendes (enllaçat intern, contingut de col·lecció, schema, velocitat, arquitectura) es treballa perfectament des del tema. La limitació real sol ser el tema, no la plataforma.",
      },
    },
    {
      "@type": "Question",
      name: "Les apps estan frenant la meva botiga?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Probablement alguna sí. Cada app afegeix pes i unes quantes deixen restes quan es desinstal·len. Al diagnòstic mesuro quant pesa cada script i què aporta cada app a la venda. El més habitual és poder eliminar-ne unes quantes sense perdre cap funció.",
      },
    },
    {
      "@type": "Question",
      name: "Necessito Shopify Plus per millorar la conversió?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Per a la majoria de botigues, no. Plus desbloqueja la personalització del checkout, però gairebé tot el marge de conversió és abans del checkout: fitxa, cistella, confiança i velocitat. Primer s'exprimeix això; Plus es planteja quan els números ho justifiquen.",
      },
    },
    {
      "@type": "Question",
      name: "Pot ChatGPT recomanar la meva botiga Shopify?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí, si la pot llegir i entendre. Shopify serveix HTML renderitzat, així que la base és bona. Falta garantir que cap firewall no bloquegi els bots d'IA, que les teves fitxes responguin preguntes reals i que la informació de la teva marca sigui consistent. Això és el que treballo a la part de GEO.",
      },
    },
    {
      "@type": "Question",
      name: "He de migrar de plataforma per créixer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Una migració és cara, arriscada per al SEO i gairebé mai és el coll d'ampolla. La meva feina és exactament la contrària: treure més vendes de la plataforma i el trànsit que ja tens.",
      },
    },
  ],
}

export default function AgenciaShopifyPageCa() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />
      <ThemeRegistry>
        <ShopifyCa />
      </ThemeRegistry>
    </>
  )
}
