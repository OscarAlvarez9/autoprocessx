import ThemeRegistry from "@/components/mui/ThemeRegistry"
import GeoMui from "@/components/mui/GeoMui"
import JsonLd from "@/components/JsonLd"
import { ORG_ID, SITE_URL } from "@/lib/seo"
import { GEO_FAQS } from "@/lib/geoFaqs"

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${SITE_URL}/posicionamiento-geo/#service`,
  name: "Posicionamiento GEO: visibilidad en ChatGPT, Perplexity y Google AI",
  description:
    "Posicionamiento en buscadores de IA (GEO): verificación del acceso de GPTBot, ClaudeBot y PerplexityBot, publicación de llms.txt, datos estructurados y contenido citable para que ChatGPT, Perplexity y los AI Overviews de Google mencionen la marca.",
  serviceType: "Generative Engine Optimization (GEO)",
  provider: { "@id": ORG_ID },
  areaServed: [{ "@type": "Country", name: "España" }],
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: GEO_FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
}

export default function PosicionamientoGeoPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />
      <ThemeRegistry>
        <GeoMui />
      </ThemeRegistry>
    </>
  )
}
