import type { Metadata } from "next";
import { ORG_ID } from "@/lib/seo";

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Pack Crecimiento ecommerce · más tráfico que compra y más visitas que convierten",
  provider: { "@id": ORG_ID },
  description: "Crecimiento de ecommerce por las dos puntas: SEO y GEO/AI Search que traen tráfico cualificado, CRO y agente de ventas IA que convierten mejor, y automatización con n8n. Sobre tu plataforma actual, sin migrar.",
  serviceType: "Ecommerce growth engineering",
  areaServed: "ES",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Pack Crecimiento ecommerce",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "SEO y GEO para ecommerce",
          description: "SEO de producto y categoría, GEO/AI Search y SEO técnico para que Google, Maps y las IAs traigan tráfico que compra.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Optimización de conversión (CRO)",
          description: "Auditoría CRO, A/B testing y optimización del funnel para que más visitas terminen la compra.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Agente de ventas IA",
          description: "Asistente anclado al catálogo real que recomienda producto y acompaña al checkout sin inventarse stock ni precios.",
        },
      },
    ],
  },
};


export const metadata: Metadata = {
  title: { absolute: "Crecimiento ecommerce: consultoría SEO, GEO y CRO | SEOscar" },
  description: "Pack Crecimiento ecommerce: SEO técnico y GEO que traen tráfico que compra, CRO y agente de ventas IA que lo convierten, y automatización. Sin migrar nada.",
  keywords: ["crecimiento ecommerce", "SEO ecommerce", "GEO", "CRO ecommerce", "optimización de conversión", "agente de ventas IA", "SEO Barcelona", "automatización n8n ecommerce"],
  openGraph: {
    title: "Crecimiento ecommerce: consultoría SEO, GEO y CRO | SEOscar",
    description: "Pack Crecimiento ecommerce: SEO técnico y GEO que traen tráfico que compra, CRO y agente de ventas IA que lo convierten, y automatización. Sin migrar nada.",
    type: "website",
    locale: "es_ES",
    url: "https://www.seoscar.com/servicios/crecimiento-ecommerce",
  },
  alternates: {
    canonical: "https://www.seoscar.com/servicios/crecimiento-ecommerce",
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
