import type { Metadata } from "next"
import { ORG_ID } from "@/lib/seo"
import { SITE_URL, i18nAlternates } from "@/lib/i18n"

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Plataformes internes a mida amb IA i RAG",
  provider: { "@id": ORG_ID },
  description: "Desenvolupem plataformes internes i aplicacions a mida amb arquitectures RAG, agents autònoms i LLM ancorats als documents del teu negoci. Privat, precís i amb citació de fonts.",
  serviceType: "Desenvolupament de plataformes a mida amb IA",
  areaServed: "ES",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Plataformes a mida amb IA",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Arquitectura RAG",
          description: "Retrieval-Augmented Generation: la teva IA consulta els teus documents en temps real abans de respondre, garantint una precisió absoluta.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Agents autònoms",
          description: "Agents d'IA que executen tasques, redacten informes i actualitzen el teu CRM basant-se en el coneixement del teu negoci.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Entrenament específic amb LLM",
          description: "Ancorem els models als teus PDF, Excel, Notion i bases de dades per tenir una IA que coneix cada detall del teu negoci.",
        },
      },
    ],
  },
}

const TITLE = "Plataformes internes a mida amb IA i RAG | SEOscar"
const DESCRIPTION = "Plataformes internes i aplicacions RAG a mida que responen amb els teus documents i citen la font. Next.js, PostgreSQL i n8n. El codi és teu."

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  keywords: ["plataformes a mida amb IA", "aplicacions RAG a mida", "programari a mida ecommerce", "arquitectura RAG per a negocis", "agents autònoms IA", "desenvolupament a mida Barcelona", "IA per al teu negoci", "aplicacions internes amb IA"],
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "SEOscar, agència d'ecommerce a Barcelona" }],
    title: TITLE,
    description: DESCRIPTION,
    type: "website",
    locale: "ca_ES",
    url: `${SITE_URL}/ca/servicios/a-medida`,
  },
  alternates: i18nAlternates("/servicios/a-medida", "ca"),
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
