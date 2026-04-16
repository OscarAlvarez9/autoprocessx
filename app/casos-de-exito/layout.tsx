import type { Metadata } from "next";

const caseStudiesSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Casos de Éxito en Automatización IA y n8n",
  description: "Resultados reales de empresas que han automatizado sus procesos con IA y n8n usando AutoProcessX.",
  url: "https://www.autoprocessx.com/casos-de-exito",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "Article",
        name: "Farmacia Garcia del Cerro — Automatización de Blog con n8n",
        description: "Implementación de automatización de blog con calendario editorial personalizado para todo el año en Shopify mediante n8n y LLMs.",
        author: { "@type": "Organization", name: "AutoProcessX" },
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "Article",
        name: "Pelican Catchy — Infraestructura de Automatizaciones IA",
        description: "Arquitectura de 8 procesos paralelos: estrategia anual de marketing, descripciones SEO, automatización en Asana y notificaciones WhatsApp.",
        author: { "@type": "Organization", name: "AutoProcessX" },
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://www.autoprocessx.com" },
    { "@type": "ListItem", position: 2, name: "Casos de Éxito", item: "https://www.autoprocessx.com/casos-de-exito" },
  ],
};

export const metadata: Metadata = {
  title: "AutoProcessX | Casos de Éxito · Agencia IA Barcelona",
  description: "Ejemplos reales de inteligencia artificial en empresas de Barcelona. Automatización de procesos, aplicaciones IA y chatbots personalizados con resultados demostrables.",
  keywords: ["ejemplos de inteligencia artificial en empresas", "uso de inteligencia artificial en las empresas", "ia en empresas Barcelona", "casos de éxito automatización IA", "inteligencia artificial en negocios", "automatización empresarial resultados"],
  openGraph: {
    title: "AutoProcessX | Casos de Éxito · Agencia IA Barcelona",
    description: "Ejemplos reales de IA en empresas de Barcelona. Automatización de procesos, aplicaciones IA y chatbots personalizados con resultados demostrables.",
    type: "website",
    locale: "es_ES",
    url: "https://www.autoprocessx.com/casos-de-exito",
  },
  alternates: {
    canonical: "https://www.autoprocessx.com/casos-de-exito",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(caseStudiesSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {children}
    </>
  );
}
