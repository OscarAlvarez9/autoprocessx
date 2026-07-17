import type { Metadata } from "next";

const techPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Stack Tecnológico · SEOscar",
  url: "https://www.seoscar.com/tecnologia",
  description: "El stack con el que hacemos crecer tiendas online: n8n, Claude 3.5 Sonnet, GPT-4o, Gemini, Next.js, PostgreSQL y bases vectoriales para RAG. Código propio, trazable y tuyo.",
  mainEntity: {
    "@type": "ItemList",
    name: "Stack para ecommerce: n8n, RAG y LLMs",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        item: {
          "@type": "SoftwareApplication",
          name: "n8n",
          applicationCategory: "Automatización de Flujos",
          description: "Orquestación avanzada de workflows con instancias dedicadas.",
        },
      },
      {
        "@type": "ListItem",
        position: 2,
        item: {
          "@type": "SoftwareApplication",
          name: "Claude 3.5 Sonnet",
          applicationCategory: "Modelo de Lenguaje (LLM)",
          description: "LLM de Anthropic para procesamiento de lenguaje natural y generación de contenido.",
        },
      },
      {
        "@type": "ListItem",
        position: 3,
        item: {
          "@type": "SoftwareApplication",
          name: "GPT-4o",
          applicationCategory: "Modelo de Lenguaje (LLM)",
          description: "Modelo multimodal de OpenAI para tareas de razonamiento y generación avanzada.",
        },
      },
      {
        "@type": "ListItem",
        position: 4,
        item: {
          "@type": "SoftwareApplication",
          name: "Pinecone",
          applicationCategory: "Base de Datos Vectorial",
          description: "Base vectorial para arquitecturas RAG de alta velocidad.",
        },
      },
      {
        "@type": "ListItem",
        position: 5,
        item: {
          "@type": "SoftwareApplication",
          name: "AWS",
          applicationCategory: "Cloud Infrastructure",
          description: "Arquitectura cloud para desplegar el stack que hace crecer tu tienda online.",
        },
      },
    ],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://www.seoscar.com" },
    { "@type": "ListItem", position: 2, name: "Tecnología", item: "https://www.seoscar.com/tecnologia" },
  ],
};

export const metadata: Metadata = {
  title: { absolute: "Tecnología: n8n, RAG y LLMs para ecommerce | SEOscar" },
  description: "El stack con el que trabajo: n8n self-hosted, arquitecturas RAG con fuente citada, LLMs de última generación, Next.js y PostgreSQL. Código propio, trazable y tuyo.",
  keywords: ["stack tecnológico ecommerce", "n8n self-hosted", "arquitectura RAG", "LLMs para tiendas online", "Next.js ecommerce", "PostgreSQL", "automatización para ecommerce"],
  openGraph: {
            images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "SEOscar, agencia de ecommerce en Barcelona" }],
    title: "Tecnología: n8n, RAG y LLMs para ecommerce | SEOscar",
    description: "El stack con el que trabajo: n8n self-hosted, arquitecturas RAG con fuente citada, LLMs de última generación, Next.js y PostgreSQL. Código propio, trazable y tuyo.",
    type: "website",
    locale: "es_ES",
    url: "https://www.seoscar.com/tecnologia",
  },
  alternates: {
    canonical: "https://www.seoscar.com/tecnologia",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(techPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {children}
    </>
  );
}
