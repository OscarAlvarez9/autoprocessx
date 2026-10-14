import ThemeRegistry from "@/components/mui/ThemeRegistry"
import GeoMuiCa from "@/components/mui/ca/GeoMuiCa"
import JsonLd from "@/components/JsonLd"
import { ORG_ID } from "@/lib/seo"
import { SITE_URL } from "@/lib/i18n"
import { GEO_FAQS_CA } from "@/lib/geoFaqsCa"

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${SITE_URL}/ca/posicionamiento-geo/#service`,
  name: "Posicionament GEO: visibilitat a ChatGPT, Perplexity i Google AI",
  description:
    "Posicionament als cercadors d'IA (GEO): verificació de l'accés de GPTBot, ClaudeBot i PerplexityBot, publicació de llms.txt, dades estructurades i contingut citable perquè ChatGPT, Perplexity i els AI Overviews de Google mencionin la marca.",
  serviceType: "Generative Engine Optimization (GEO)",
  provider: { "@id": ORG_ID },
  areaServed: [{ "@type": "Country", name: "Espanya" }],
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: GEO_FAQS_CA.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
}

export default function PosicionamientoGeoPageCa() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />
      <ThemeRegistry>
        <GeoMuiCa />
      </ThemeRegistry>
    </>
  )
}
