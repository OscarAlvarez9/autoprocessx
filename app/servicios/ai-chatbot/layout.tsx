import type { Metadata } from "next";

const chatbotSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "AI Chatbot y Asistente de Ventas con Inteligencia Artificial",
  provider: {
    "@type": "Organization",
    name: "AutoProcessX",
    url: "https://www.autoprocessx.com",
  },
  description: "Desarrollamos chatbots con IA personalizados para empresas en Barcelona. AI online chat para web y WhatsApp que cualifica prospectos, automatiza ventas y atiende clientes 24/7.",
  serviceType: "Desarrollo de Chatbot con IA",
  areaServed: "ES",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Servicios de AI Chatbot",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "AI Chatbot Web",
          description: "Widget de AI online chat para tu web que convierte visitantes en clientes cualificados las 24 horas.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Chatbot WhatsApp Business",
          description: "Chatbot personalizado para WhatsApp que cualifica prospectos y cierra ventas de forma autónoma.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Automatización Email Marketing con IA",
          description: "Flujos de email marketing automatizados con inteligencia artificial para nutrir leads y aumentar conversiones.",
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
    { "@type": "ListItem", position: 3, name: "AI Chatbot", item: "https://www.autoprocessx.com/servicios/ai-chatbot" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Qué es un AI chatbot para empresas?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Un AI chatbot es un asistente virtual impulsado por inteligencia artificial que atiende a clientes, cualifica prospectos y automatiza ventas en tu web o WhatsApp las 24 horas del día, sin intervención humana.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuánto cuesta implementar un chatbot personalizado?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Los proyectos de chatbot personalizado oscilan entre 2.500€ y 4.500€ según la complejidad de los flujos de conversación y las integraciones con tu CRM, email marketing y sistemas internos.",
      },
    },
  ],
};

export const metadata: Metadata = {
  title: "AI Chatbot Barcelona | Chatbot Personalizado para Empresas",
  description: "AI chatbot personalizado para empresas en Barcelona. AI online chat en web y WhatsApp que cualifica prospectos y cierra ventas 24/7. Automatización email marketing incluida.",
  keywords: ["ai chatbot", "chatbot personalizado", "ai online chat", "chat ai online", "chatbot empresas Barcelona", "automatización email marketing", "ia en marketing", "inteligencia artificial marketing", "bot ventas whatsapp", "asistente virtual ia"],
  openGraph: {
    title: "AI Chatbot Barcelona | Chatbot Personalizado para Empresas | AutoProcessX",
    description: "AI chatbot personalizado para empresas en Barcelona. AI online chat para web y WhatsApp. Cualifica prospectos y cierra ventas 24/7.",
    type: "website",
    locale: "es_ES",
    url: "https://www.autoprocessx.com/servicios/ai-chatbot",
  },
  alternates: {
    canonical: "https://www.autoprocessx.com/servicios/ai-chatbot",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(chatbotSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {children}
    </>
  );
}
