import type { Metadata } from "next";

const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "Sobre SEOscar",
  url: "https://www.seoscar.com/sobre-nosotros",
  description: "SEOscar es una agencia de ecommerce en Barcelona. Hago que las tiendas online vendan más con SEO técnico, GEO, CRO, agente de ventas IA y automatización, sobre su plataforma actual y con el código en su propiedad.",
  mainEntity: {
    "@type": "Organization",
    name: "SEOscar",
    url: "https://www.seoscar.com",
    description: "Agencia de ecommerce en Barcelona. SEO técnico y GEO que traen tráfico que compra, CRO, agente de ventas IA anclado al catálogo y automatización con n8n.",
    founder: { "@type": "Person", name: "Oscar Álvarez" },
    address: { "@type": "PostalAddress", addressLocality: "Premià de Mar", addressRegion: "Barcelona", addressCountry: "ES" },
    areaServed: "ES",
    knowsAbout: [
      "crecimiento de ecommerce",
      "SEO y GEO",
      "optimización de conversión (CRO)",
      "agente de ventas IA",
      "arquitecturas RAG",
      "automatización con n8n",
      "Shopify",
      "WooCommerce",
    ],
  },
};


export const metadata: Metadata = {
  title: { absolute: "Quién hay detrás: Óscar, Roger y Sam, ecommerce | SEOscar" },
  description: "Detrás de SEOscar: Óscar, Roger y Sam, en Barcelona. Hago que las tiendas online vendan más con SEO, agente de ventas IA y automatización. El código es tuyo.",
  keywords: ["estudio IA ecommerce Barcelona", "agencia crecimiento ecommerce", "especialistas n8n", "sobre SEOscar", "sistemas de IA tiendas online", "agencia ecommerce Barcelona"],
  openGraph: {
            images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "SEOscar, agencia de ecommerce en Barcelona" }],
    title: "Quién hay detrás: Óscar, Roger y Sam, ecommerce | SEOscar",
    description: "Detrás de SEOscar: Óscar, Roger y Sam, en Barcelona. Hago que las tiendas online vendan más con SEO, agente de ventas IA y automatización. El código es tuyo.",
    type: "website",
    locale: "es_ES",
    url: "https://www.seoscar.com/sobre-nosotros",
  },
  alternates: {
    canonical: "https://www.seoscar.com/sobre-nosotros",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />
      {children}
    </>
  );
}
