import type { Metadata } from "next"
import ThemeRegistry from "@/components/mui/ThemeRegistry"
import MetodoMuiCa from "@/components/mui/ca/MetodoMuiCa"
import JsonLd from "@/components/JsonLd"
import { ORG_ID, SITE_URL } from "@/lib/seo"
import { i18nAlternates } from "@/lib/i18n"

const TITLE = "Mètode: del diagnòstic a vendre més, amb dades | SEOscar"
const DESCRIPTION =
  "Com treballo: diagnòstic amb dades reals, pla prioritzat per impacte en vendes, implementació sobre la teva botiga i seguiment mensual. El codi és teu."

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  keywords: ["mètode agència ecommerce", "diagnòstic ecommerce", "com treballem", "auditoria botiga en línia", "pla de creixement ecommerce"],
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "SEOscar, consultor SEO per a ecommerce a Barcelona" }],
    title: TITLE,
    description: DESCRIPTION,
    type: "website",
    locale: "ca_ES",
    url: `${SITE_URL}/ca/metodo`,
  },
  alternates: i18nAlternates("/metodo", "ca"),
}

// HowTo: les 4 etapes del mètode, citables per cercadors i motors d'IA.
const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "@id": `${SITE_URL}/ca/metodo#metodo`,
  name: "Mètode SEOscar per fer créixer un ecommerce",
  description:
    "Procés en quatre etapes: diagnòstic amb dades reals, estratègia de conversió prioritzada, implementació sobre la plataforma actual del client i seguiment continu amb dades.",
  inLanguage: "ca",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Diagnòstic",
      text: "Anàlisi de la botiga amb dades reals (GA4, Search Console, Clarity, catàleg i checkout) per localitzar on s'escapen les vendes. Lliurament: pla prioritzat per impacte.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Estratègia de conversió",
      text: "Disseny del customer journey i del backlog d'accions (SEO, agent de vendes IA, automatització) ordenat per l'impacte esperat en vendes.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Implementació",
      text: "Construcció sobre la plataforma actual, sense migrar: SEO tècnic, agent de vendes IA i automatització amb n8n i codi propi, propietat del client.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Seguiment",
      text: "Mesura mensual contra el pla amb dades reals, informe automàtic i ajust continu de les palanques.",
    },
  ],
  publisher: { "@id": ORG_ID },
}

export default function MetodoPageCa() {
  return (
    <>
      <JsonLd data={howToSchema} />
      <ThemeRegistry>
        <MetodoMuiCa />
      </ThemeRegistry>
    </>
  )
}
