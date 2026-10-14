import type { Metadata } from "next"
import ThemeRegistry from "@/components/mui/ThemeRegistry"
import CasosMui from "@/components/mui/CasosMui"
import JsonLd from "@/components/JsonLd"
import { SITE_URL } from "@/lib/seo"
import { i18nAlternates } from "@/lib/i18n"
import { servicesFor, casesByService, caseDescription } from "@/lib/casesEcom"

const TITLE = "Casos d'èxit SEO i ecommerce: resultats reals"
const DESCRIPTION = "Casos reals a Shopify, WooCommerce i web a mida: SEO que porta trànsit que compra, CRO, automatització i chatbot de vendes. El codi, del client."

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  keywords: ["casos d'èxit ecommerce", "creixement botiga en línia", "agent de vendes IA cas", "SEO ecommerce resultats", "CRO botiga en línia", "casos IA ecommerce Barcelona"],
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "SEOscar, agència d'ecommerce a Barcelona" }],
    title: TITLE,
    description: DESCRIPTION,
    type: "website",
    locale: "ca_ES",
    url: `${SITE_URL}/ca/casos-de-exito`,
  },
  alternates: i18nAlternates("/casos-de-exito", "ca"),
}

// Mismo ItemList que la versión castellana, con los textos en catalán.
const casos = servicesFor("ca").flatMap((s) => casesByService(s.key, "ca"))

const caseListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Casos d'èxit SEO i ecommerce de SEOscar",
  url: `${SITE_URL}/ca/casos-de-exito`,
  inLanguage: "ca",
  numberOfItems: casos.length,
  itemListElement: casos.map((c, i) => ({
    "@type": "ListItem",
    position: i + 1,
    url: `${SITE_URL}/ca/casos-de-exito/${c.slug}`,
    name: c.client,
    description: caseDescription(c, "ca"),
  })),
}

export default function CasosDeExitoPageCa() {
  return (
    <>
      <JsonLd data={caseListSchema} />
      <ThemeRegistry>
        <CasosMui />
      </ThemeRegistry>
    </>
  )
}
