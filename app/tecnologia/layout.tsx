import type { Metadata } from "next";

const techPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Stack Tecnológico — AutoProcessX",
  url: "https://www.autoprocessx.com/tecnologia",
  description: "Stack tecnológico enterprise de AutoProcessX: n8n (Gold Partner), Claude 3.5 Sonnet, GPT-4o, Gemini 1.5 Pro, PostgreSQL, AWS y bases vectoriales Pinecone. Infraestructura de automatización IA para empresas.",
  mainEntity: {
    "@type": "ItemList",
    name: "Tecnologías de Automatización IA",
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
          description: "Arquitectura cloud enterprise para despliegue de soluciones de automatización IA.",
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
    { "@type": "ListItem", position: 2, name: "Tecnología", item: "https://www.autoprocessx.com/tecnologia" },
  ],
};

export const metadata: Metadata = {
  title: "Stack Tecnológico IA Barcelona | n8n, GPT-4o, AWS",
  description: "El stack tecnológico de AutoProcessX: automatización con n8n, LLMs de última generación y arquitecturas RAG para empresas en Barcelona. Agencia IA en Barcelona.",
  keywords: ["workflow automation", "vector embedding", "llm monitoring", "n8n Gold Partner Barcelona", "infraestructura IA empresa", "automatización de inteligencia artificial", "arquitectura RAG", "tecnología LLM empresarial"],
  openGraph: {
    title: "Stack Tecnológico IA Barcelona | n8n, GPT-4o, AWS | AutoProcessX",
    description: "Stack enterprise en Barcelona: Claude, GPT-4o, AWS y Pinecone. Infraestructura de automatización IA para empresas.",
    type: "website",
    locale: "es_ES",
    url: "https://www.autoprocessx.com/tecnologia",
  },
  alternates: {
    canonical: "https://www.autoprocessx.com/tecnologia",
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
