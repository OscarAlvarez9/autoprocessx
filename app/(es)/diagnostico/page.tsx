import ThemeRegistry from "@/components/mui/ThemeRegistry"
import DiagnosticoPageMui from "@/components/mui/DiagnosticoPageMui"
import JsonLd from "@/components/JsonLd"
import { ORG_ID, SITE_URL } from "@/lib/seo"

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${SITE_URL}/diagnostico/#service`,
  name: "Diagnóstico de ecommerce",
  description:
    "Diagnóstico inicial de una tienda online: revisamos tráfico, conversión y operativa y entregamos un plan priorizado por impacto en ventas, sobre la plataforma actual y sin compromiso.",
  serviceType: "Ecommerce diagnosis",
  provider: { "@id": ORG_ID },
  areaServed: [{ "@type": "Country", name: "España" }],
}

export default function DiagnosticoPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <ThemeRegistry>
        <DiagnosticoPageMui />
      </ThemeRegistry>
    </>
  )
}
