import ThemeRegistry from "@/components/mui/ThemeRegistry"
import AuditoriaMuiCa from "@/components/mui/ca/AuditoriaMuiCa"
import JsonLd from "@/components/JsonLd"
import { ORG_ID } from "@/lib/seo"
import { SITE_URL } from "@/lib/i18n"
import { AUDITORIA_FAQS_CA } from "@/lib/serviciosFaqsCa"

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${SITE_URL}/ca/servicios/auditoria-seo-geo/#service`,
  name: "Auditoria SEO/GEO + fugues de conversió per a ecommerce",
  description:
    "Auditoria completa de la botiga en línia consolidada en un únic document accionable: SEO i GEO de landing i fitxes de producte, fugues de conversió al funnel, revisió de disseny orientada a CRO i mesurament (GA4, esdeveniments i píxels), amb un pla prioritzat per impacte en vendes. Producte tancat, sense pack ni permanència.",
  serviceType: "Ecommerce SEO, GEO and CRO audit",
  provider: { "@id": ORG_ID },
  areaServed: [{ "@type": "Country", name: "Espanya" }],
}

// FAQ citable (GEO): les mateixes preguntes i respostes que es veuen a la pàgina.
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: AUDITORIA_FAQS_CA.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
}

export default function AuditoriaSeoGeoPageCa() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />
      <ThemeRegistry>
        <AuditoriaMuiCa />
      </ThemeRegistry>
    </>
  )
}
