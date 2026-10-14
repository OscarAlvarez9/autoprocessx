import type { Metadata } from "next"
import { ORG_ID } from "@/lib/seo"
import { SITE_URL, i18nAlternates } from "@/lib/i18n"

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Automatització de l'operativa de la teva botiga amb n8n",
  provider: { "@id": ORG_ID },
  description: "Dissenyem i implementem automatitzacions per a l'operativa del teu ecommerce amb n8n i agents d'IA. Auditem els teus processos, construïm pipelines robustos i despleguem fluxos intel·ligents que eliminen la feina manual.",
  serviceType: "Automatització de l'operativa d'ecommerce amb n8n",
  areaServed: "ES",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Serveis d'automatització n8n",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Auditoria de processos",
          description: "Anàlisi exhaustiva de l'operativa actual per detectar colls d'ampolla i fugues de rendibilitat.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Disseny de fluxos n8n",
          description: "Disseny de pipelines resilients amb n8n, control d'errors avançat i lògica condicional complexa.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Indexació segura (RAG) d'agents",
          description: "Agents que consulten el context del teu negoci via RAG amb citació de la font, sense fine-tuning amb les teves dades ni filtracions a l'exterior.",
        },
      },
    ],
  },
}

const TITLE = "Automatització ecommerce amb n8n: comandes i estoc | SEOscar"
const DESCRIPTION = "Automatitza comandes, estoc, cistelles i reporting de la teva botiga amb n8n i codi propi en Node i Python. Self-hosted, traçable i sense quota per tasca."

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  keywords: ["automatització ecommerce", "automatització de processos", "automatització n8n", "automatitzar comandes botiga en línia", "sincronització d'estoc", "workflow automation Barcelona", "automatitzar tasques repetitives", "n8n self-hosted"],
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "SEOscar, agència d'ecommerce a Barcelona" }],
    title: TITLE,
    description: DESCRIPTION,
    type: "website",
    locale: "ca_ES",
    url: `${SITE_URL}/ca/servicios/automatizaciones`,
  },
  alternates: i18nAlternates("/servicios/automatizaciones", "ca"),
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      {children}
    </>
  )
}
