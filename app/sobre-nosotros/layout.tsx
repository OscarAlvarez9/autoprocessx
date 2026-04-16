import type { Metadata } from "next";

const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "Sobre AutoProcessX",
  url: "https://www.autoprocessx.com/sobre-nosotros",
  description: "AutoProcessX es una agencia especializada en automatización empresarial con IA y n8n. Combinamos Big Data, Machine Learning, LLMs y orquestación cloud para transformar la operativa de tu empresa.",
  mainEntity: {
    "@type": "Organization",
    name: "AutoProcessX",
    url: "https://www.autoprocessx.com",
    description: "Arquitectos de soluciones integrales de IA y automatización. Especializados en n8n, Claude, GPT-4o, arquitecturas RAG y despliegue enterprise.",
    foundingDate: "2023",
    areaServed: "ES",
    knowsAbout: [
      "n8n",
      "automatización de procesos",
      "inteligencia artificial",
      "Machine Learning",
      "Big Data",
      "arquitecturas RAG",
      "agentes autónomos",
      "LLMs",
      "infraestructura cloud AWS",
    ],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://www.autoprocessx.com" },
    { "@type": "ListItem", position: 2, name: "Sobre Nosotros", item: "https://www.autoprocessx.com/sobre-nosotros" },
  ],
};

export const metadata: Metadata = {
  title: "Expertos IA y Automatización Barcelona",
  description: "Somos arquitectos de soluciones IA y automatización en Barcelona. n8n, LLMs, Big Data y cloud para transformar la operativa de tu empresa.",
  keywords: ["consultoría de inteligencia artificial Barcelona", "empresas de inteligencia artificial", "empresa de ia", "expertos automatización IA", "ia empresarial Barcelona", "agencia automatización empresarial", "especialistas n8n", "ia en empresas"],
  openGraph: {
    title: "Expertos IA y Automatización Barcelona",
    description: "Arquitectos de soluciones IA y automatización en Barcelona. n8n, LLMs, Big Data y AWS.",
    type: "website",
    locale: "es_ES",
    url: "https://www.autoprocessx.com/sobre-nosotros",
  },
  alternates: {
    canonical: "https://www.autoprocessx.com/sobre-nosotros",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {children}
    </>
  );
}
