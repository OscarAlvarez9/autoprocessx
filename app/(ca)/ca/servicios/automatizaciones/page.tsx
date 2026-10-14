import ThemeRegistry from "@/components/mui/ThemeRegistry"
import AutomatizacionMuiCa from "@/components/mui/ca/AutomatizacionMuiCa"
import JsonLd from "@/components/JsonLd"
import { AUTOMATIZACION_FAQS_CA } from "@/lib/serviciosFaqsCa"

// FAQ citable (GEO): les mateixes preguntes i respostes que es veuen a la pàgina.
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: AUTOMATIZACION_FAQS_CA.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
}

export default function AutomatizacionesPageCa() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <ThemeRegistry>
        <AutomatizacionMuiCa />
      </ThemeRegistry>
    </>
  )
}
