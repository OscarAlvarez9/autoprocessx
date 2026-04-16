import type { Metadata } from "next";

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Automatización de Procesos Empresariales con n8n",
  provider: {
    "@type": "Organization",
    name: "AutoProcessX",
    url: "https://www.autoprocessx.com",
  },
  description: "Diseñamos e implementamos automatizaciones empresariales con n8n y agentes de IA. Auditamos tus procesos, construimos pipelines robustos y desplegamos flujos inteligentes que eliminan el trabajo manual.",
  serviceType: "Automatización de Procesos con n8n",
  areaServed: "ES",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Servicios de Automatización n8n",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Auditoría de Procesos",
          description: "Análisis exhaustivo de la operativa actual para detectar cuellos de botella y fugas de rentabilidad.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Diseño de Flujos n8n",
          description: "Diseño de pipelines resilientes con n8n, control de errores avanzado y lógica condicional compleja.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Entrenamiento de Agentes de IA",
          description: "Agentes entrenados con el contexto de tu negocio que actúan como trabajadores autónomos y precisos.",
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
    { "@type": "ListItem", position: 3, name: "Automatizaciones", item: "https://www.autoprocessx.com/servicios/automatizaciones" },
  ],
};

export const metadata: Metadata = {
  title: "Automatización de Procesos Barcelona | n8n e IA",
  description: "Automatiza tu empresa con n8n e IA en Barcelona. Flujos inteligentes que eliminan tareas repetitivas y escalan tu operativa.",
  keywords: ["automatización de procesos", "automatización inteligente", "automatizacion de procesos empresariales", "workflow automation Barcelona", "n8n automatización", "automatización empresarial", "flujos de automatización", "automatizar tareas repetitivas"],
  openGraph: {
    title: "Automatización de Procesos Barcelona | n8n e IA | AutoProcessX",
    description: "Automatiza tu empresa con n8n e IA en Barcelona. Flujos inteligentes que eliminan tareas repetitivas y escalan tu operativa.",
    type: "website",
    locale: "es_ES",
    url: "https://www.autoprocessx.com/servicios/automatizaciones",
  },
  alternates: {
    canonical: "https://www.autoprocessx.com/servicios/automatizaciones",
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
