import ThemeRegistry from "@/components/mui/ThemeRegistry"
import CasosMui from "@/components/mui/CasosMui"
import JsonLd from "@/components/JsonLd"
import { SITE_URL } from "@/lib/seo"
import { SERVICES, casesByService, caseDescription } from "@/lib/casesEcom"

// Lista de los casos publicados, en el orden del listado. Se genera de los
// datos para que no se quede atrás cuando entra o sale un caso.
const casos = SERVICES.flatMap((s) => casesByService(s.key))

const caseListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Casos de éxito SEO y ecommerce de SEOscar",
  url: `${SITE_URL}/casos-de-exito`,
  numberOfItems: casos.length,
  itemListElement: casos.map((c, i) => ({
    "@type": "ListItem",
    position: i + 1,
    url: `${SITE_URL}/casos-de-exito/${c.slug}`,
    name: c.client,
    description: caseDescription(c),
  })),
}

export default function CasosDeExitoPage() {
  return (
    <>
      <JsonLd data={caseListSchema} />
      <ThemeRegistry>
        <CasosMui />
      </ThemeRegistry>
    </>
  )
}
