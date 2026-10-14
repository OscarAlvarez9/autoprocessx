import type { Metadata } from "next"
import ThemeRegistry from "@/components/mui/ThemeRegistry"
import WooCa from "@/components/mui/ca/WooCa"
import JsonLd from "@/components/JsonLd"
import { ORG_ID, SITE_URL } from "@/lib/seo"
import { i18nAlternates } from "@/lib/i18n"

export const metadata: Metadata = {
  title: { absolute: "Consultor SEO per a WordPress i WooCommerce | SEOscar" },
  description: "Fes vendre més el teu WooCommerce sense refer el WordPress: SEO tècnic, visibilitat a ChatGPT i Google, CRO i automatització. Diagnòstic gratuït 24-48 h.",
  keywords: ["agència WooCommerce", "SEO WooCommerce", "optimitzar WooCommerce", "WooCommerce lent", "expert WooCommerce", "WordPress ecommerce SEO", "CRO WooCommerce"],
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "SEOscar, agència d'ecommerce a Barcelona" }],
    title: "Consultor SEO per a WordPress i WooCommerce | SEOscar",
    description: "Fes vendre més el teu WooCommerce sense refer el WordPress: SEO tècnic, visibilitat a ChatGPT i Google, CRO i automatització. Diagnòstic gratuït 24-48 h.",
    type: "website",
    locale: "ca_ES",
    url: `${SITE_URL}/ca/agencia-woocommerce`,
  },
  alternates: i18nAlternates("/agencia-woocommerce", "ca"),
}

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${SITE_URL}/ca/agencia-woocommerce/#service`,
  name: "Consultor SEO per a WordPress i WooCommerce",
  description:
    "Optimització de botigues WooCommerce sobre WordPress: SEO tècnic, neteja de plugins i rendiment, visibilitat en cercadors d'IA (GEO), CRO i automatització, sobre la instal·lació actual i sense migrar.",
  serviceType: "Optimització de botigues WooCommerce",
  provider: { "@id": ORG_ID },
  areaServed: [{ "@type": "Country", name: "Espanya" }],
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "WooCommerce és pitjor per al SEO que Shopify?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Ben configurat, WooCommerce dona més control SEO que cap altra plataforma: URL, schema, rastreig, tot és editable. La fama de pitjor ve d'instal·lacions descuidades, no de la plataforma. La contrapartida és que aquest control s'ha d'exercir amb criteri.",
      },
    },
    {
      "@type": "Question",
      name: "Per què la meva botiga WooCommerce va lenta?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Gairebé sempre per una combinació de hosting just, plugins acumulats, un tema o maquetador pesat i una base de dades sense manteniment. Al diagnòstic mesuro cada capa per separat i et dic quina pesa més en el teu cas concret, amb números.",
      },
    },
    {
      "@type": "Question",
      name: "Quants plugins són massa?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No és qüestió de nombre sinó de cost: hi ha plugins lleugers i plugins que enfonsen la botiga ells sols. La pregunta correcta és què aporta cadascun a la venda i quant costa en rendiment. Aquesta taula surt de l'auditoria.",
      },
    },
    {
      "@type": "Question",
      name: "Faig servir Cloudflare. Pot estar bloquejant ChatGPT?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pot ser, i passa sovint: les proteccions anti-bot bloquegen per defecte els rastrejadors d'IA. Ho verifico contra el teu domini real i, si estan bloquejats, es deixa passar els bots legítims d'IA sense abaixar la guàrdia davant l'scraping maliciós.",
      },
    },
    {
      "@type": "Question",
      name: "He de migrar de WooCommerce per créixer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Si la teva botiga ja factura amb Woo, migrar és el camí llarg i car. El curt és afinar el que tens: velocitat, rastreig, conversió i visibilitat en IA sobre la teva instal·lació actual.",
      },
    },
  ],
}

export default function AgenciaWooCommercePageCa() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />
      <ThemeRegistry>
        <WooCa />
      </ThemeRegistry>
    </>
  )
}
