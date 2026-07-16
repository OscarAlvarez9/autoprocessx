import type { Metadata } from "next";
import { ORG_ID } from "@/lib/seo";

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Plataformas internas a medida con IA y RAG",
  provider: { "@id": ORG_ID },
  description: "Desarrollamos plataformas internas y aplicaciones a medida con arquitecturas RAG, agentes autónomos y LLMs anclados a los documentos de tu negocio. Privado, preciso y con citación de fuentes.",
  serviceType: "Desarrollo de plataformas a medida con IA",
  areaServed: "ES",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Plataformas a medida con IA",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Arquitectura RAG",
          description: "Retrieval-Augmented Generation: tu IA consulta tus documentos en tiempo real antes de responder, garantizando precisión absoluta.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Agentes Autónomos",
          description: "Agentes de IA que ejecutan tareas, redactan informes y actualizan tu CRM basándose en el conocimiento de tu negocio.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Entrenamiento Específico con LLMs",
          description: "Anclamos los modelos a tus PDFs, Excels, Notion y bases de datos para una IA que conoce cada detalle de tu negocio.",
        },
      },
    ],
  },
};

export const metadata: Metadata = {
  title: { absolute: "Plataformas internas a medida con IA y RAG | SEOscar" },
  description: "Plataformas internas y aplicaciones RAG a medida, ancladas a tus documentos y con la fuente citada. Next.js, PostgreSQL y n8n. El código es tuyo desde el día uno.",
  keywords: ["plataformas a medida con IA", "aplicaciones RAG a medida", "software a medida ecommerce", "arquitectura RAG para negocio", "agentes autónomos IA", "desarrollo a medida Barcelona", "IA para tu negocio", "aplicaciones internas con IA"],
  openGraph: {
    title: "Plataformas internas a medida con IA y RAG | SEOscar",
    description: "Plataformas internas y aplicaciones RAG a medida, ancladas a tus documentos y con la fuente citada. Next.js, PostgreSQL y n8n. El código es tuyo desde el día uno.",
    type: "website",
    locale: "es_ES",
    url: "https://www.seoscar.com/servicios/a-medida",
  },
  alternates: {
    canonical: "https://www.seoscar.com/servicios/a-medida",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      {children}
    </>
  );
}
