import ThemeRegistry from "@/components/mui/ThemeRegistry"
import SeoCatalunyaMui from "@/components/mui/SeoCatalunyaMui"
import JsonLd from "@/components/JsonLd"
import { ORG_ID, SITE_URL } from "@/lib/seo"

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${SITE_URL}/seo-catalunya/#service`,
  name: "SEO local en Catalunya",
  description:
    "Consultor SEO catalán para negocios de Catalunya: Google Business y reseñas, contenido orientado a las búsquedas de tu comarca, SEO técnico y de conversión, y el puente entre lo local y el ecommerce. Trato directo con el fundador, atención en castellano y català.",
  serviceType: "Local SEO",
  provider: { "@id": ORG_ID },
  areaServed: [
    { "@type": "AdministrativeArea", name: "Maresme" },
    { "@type": "AdministrativeArea", name: "Bages" },
    { "@type": "AdministrativeArea", name: "Vallès Oriental" },
    { "@type": "AdministrativeArea", name: "Barcelona" },
    { "@type": "AdministrativeArea", name: "Catalunya" },
  ],
  availableLanguage: ["Spanish", "Catalan"],
}

export default function SeoCatalunyaPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <ThemeRegistry>
        <SeoCatalunyaMui />
      </ThemeRegistry>
    </>
  )
}
