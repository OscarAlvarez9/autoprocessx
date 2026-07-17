import type { Metadata } from "next";

const caseStudiesSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Casos de éxito en crecimiento de ecommerce con IA",
  description: "Tiendas online creciendo sobre su propia plataforma con SEO, conversión y agente de ventas IA de SEOscar.",
  url: "https://www.seoscar.com/casos-de-exito",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "Article",
        name: "marea.es — agente de ventas IA y conversión sobre WooCommerce",
        description: "Tienda de relojes con un agente de ventas IA anclado al catálogo y optimización de conversión, sin migrar de plataforma.",
        author: { "@type": "Organization", name: "SEOscar" },
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "Article",
        name: "Farmacia García del Cerro — contenido SEO automatizado sobre Shopify",
        description: "Motor de contenido SEO autónomo para captar tráfico orgánico que llega a comprar, sobre Shopify.",
        author: { "@type": "Organization", name: "SEOscar" },
      },
    },
    {
      "@type": "ListItem",
      position: 3,
      item: {
        "@type": "Article",
        name: "Totfinestra — web de ventanas a medida orientada a presupuesto",
        description: "Web enfocada a captar y cualificar solicitudes de presupuesto de ventanas de aluminio a medida, con SEO local.",
        author: { "@type": "Organization", name: "SEOscar" },
      },
    },
  ],
};


export const metadata: Metadata = {
  title: { absolute: "Casos de éxito: ecommerce creciendo con IA | SEOscar" },
  description: "Casos reales de tiendas sobre Shopify, WooCommerce y web nativa: agente de ventas IA, SEO que trae tráfico que compra y CRO. Sin migrar y con el código contigo.",
  keywords: ["casos de éxito ecommerce", "crecimiento tienda online", "agente de ventas IA caso", "SEO ecommerce resultados", "CRO tienda online", "casos IA ecommerce Barcelona"],
  openGraph: {
            images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "SEOscar, agencia de ecommerce en Barcelona" }],
    title: "Casos de éxito: ecommerce creciendo con IA | SEOscar",
    description: "Casos reales de tiendas sobre Shopify, WooCommerce y web nativa: agente de ventas IA, SEO que trae tráfico que compra y CRO. Sin migrar y con el código contigo.",
    type: "website",
    locale: "es_ES",
    url: "https://www.seoscar.com/casos-de-exito",
  },
  alternates: {
    canonical: "https://www.seoscar.com/casos-de-exito",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(caseStudiesSchema) }}
      />
      {children}
    </>
  );
}
