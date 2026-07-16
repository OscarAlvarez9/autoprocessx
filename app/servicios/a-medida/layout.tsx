import type { Metadata } from "next";

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Aplicaciones de Inteligencia Artificial para Empresas",
  provider: {
    "@type": "Organization",
    name: "AutoProcessX",
    url: "https://www.autoprocessx.com",
  },
  description: "Desarrollamos aplicaciones de IA empresarial con arquitecturas RAG, agentes autónomos y LLMs entrenados con los documentos de tu empresa. Privado, preciso y sin alucinaciones.",
  serviceType: "Desarrollo de Aplicaciones de IA",
  areaServed: "ES",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Servicios de IA",
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
          description: "Agentes de IA que ejecutan tareas, redactan informes y actualizan tu CRM basándose en el conocimiento de tu empresa.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Entrenamiento Específico con LLMs",
          description: "Entrenamos modelos con tus PDFs, Excels, Notion y bases de datos para una IA que conoce cada detalle de tu negocio.",
        },
      },
    ],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://www.autoprocessx.com" },
    { "@type": "ListItem", position: 2, name: "Servicios", item: "https://www.autoprocessx.com/servicios" },
    { "@type": "ListItem", position: 3, name: "Aplicaciones IA", item: "https://www.autoprocessx.com/servicios/aplicaciones-ia" },
  ],
};

export const metadata: Metadata = {
  title: "Aplicaciones IA Empresas Barcelona | RAG y Agentes",
  description: "Aplicaciones IA para empresas en Barcelona. RAG, agentes autónomos y LLMs entrenados con tus documentos. Privada, precisa y sin alucinaciones.",
  keywords: ["inteligencia artificial para empresas", "ia empresas Barcelona", "aplicaciones IA corporativa", "arquitectura RAG empresarial", "agentes autónomos IA", "LLM empresarial", "ia para empresas", "consultoría de inteligencia artificial"],
  openGraph: {
    title: "Aplicaciones IA Empresas Barcelona | RAG y Agentes | AutoProcessX",
    description: "Aplicaciones IA para empresas en Barcelona. RAG, agentes autónomos y LLMs entrenados con tus documentos. Sin alucinaciones.",
    type: "website",
    locale: "es_ES",
    url: "https://www.autoprocessx.com/servicios/aplicaciones-ia",
  },
  alternates: {
    canonical: "https://www.autoprocessx.com/servicios/aplicaciones-ia",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {children}
    </>
  );
}
