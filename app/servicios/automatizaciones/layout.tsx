import type { Metadata } from "next";
import { ORG_ID } from "@/lib/seo";

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Automatización de la operativa de tu tienda con n8n",
  provider: { "@id": ORG_ID },
  description: "Diseñamos e implementamos automatizaciones para la operativa de tu ecommerce con n8n y agentes de IA. Auditamos tus procesos, construimos pipelines robustos y desplegamos flujos inteligentes que eliminan el trabajo manual.",
  serviceType: "Automatización de la operativa de ecommerce con n8n",
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
          name: "Indexado seguro (RAG) de agentes",
          description: "Agentes que consultan el contexto de tu negocio vía RAG con citación de fuente, sin fine-tuning con tus datos ni filtrado al exterior.",
        },
      },
    ],
  },
};


export const metadata: Metadata = {
  title: { absolute: "Automatización de ecommerce con n8n y código | SEOscar" },
  description: "Automatiza la operativa de tu tienda con n8n y código propio en Node y Python: pedidos, stock, carritos y reporting. Trazable, self-hosted y sin cuota por tarea.",
  keywords: ["automatización ecommerce", "automatización de procesos", "n8n automatización", "automatizar pedidos tienda online", "sincronización de stock", "workflow automation Barcelona", "automatizar tareas repetitivas", "n8n self-hosted"],
  openGraph: {
    title: "Automatización de ecommerce con n8n y código | SEOscar",
    description: "Automatiza la operativa de tu tienda con n8n y código propio en Node y Python: pedidos, stock, carritos y reporting. Trazable, self-hosted y sin cuota por tarea.",
    type: "website",
    locale: "es_ES",
    url: "https://www.seoscar.com/servicios/automatizaciones",
  },
  alternates: {
    canonical: "https://www.seoscar.com/servicios/automatizaciones",
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
