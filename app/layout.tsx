import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ContactDrawerProvider } from "@/context/ContactDrawerContext";
import ContactDrawer from "@/components/ContactDrawer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "AutoProcessX",
  url: "https://www.autoprocessx.com",
  logo: "https://www.autoprocessx.com/assets/logo.png",
  description: "Agencia de inteligencia artificial en Barcelona. Automatización de procesos, aplicaciones IA personalizadas y chatbots para empresas.",
  sameAs: [],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    availableLanguage: "Spanish",
  },
  areaServed: "ES",
  knowsAbout: ["n8n", "automatización de procesos", "inteligencia artificial para empresas", "agentes autónomos", "RAG", "LLM", "aplicaciones IA", "workflow automation", "multi agent systems", "ia para empresas", "automatización inteligente"],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "AutoProcessX",
  url: "https://www.autoprocessx.com",
  description: "Agencia de inteligencia artificial y automatización con n8n en Barcelona. Agentes autónomos, arquitecturas RAG y flujos inteligentes para empresas.",
  inLanguage: "es-ES",
};

export const metadata: Metadata = {
  title: {
    default: "Agencia IA Barcelona | Automatización, Chatbot y Apps IA",
    template: "%s | AutoProcessX",
  },
  description: "Agencia de inteligencia artificial en Barcelona. Automatización de procesos, chatbots personalizados y aplicaciones IA para empresas.",
  keywords: ["agencia IA Barcelona", "agencia inteligencia artificial Barcelona", "ia para empresas", "inteligencia artificial para empresas", "automatización de procesos", "chatbot personalizado", "aplicaciones IA empresas", "n8n automatización"],
  openGraph: {
    title: "Agencia IA Barcelona | Automatización, Chatbot y Apps IA",
    description: "Agencia de inteligencia artificial en Barcelona. Automatización de procesos, chatbots personalizados y aplicaciones IA para empresas.",
    type: "website",
    locale: "es_ES",
    siteName: "AutoProcessX",
    url: "https://www.autoprocessx.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Agencia IA Barcelona | Automatización, Chatbot y Apps IA",
    description: "Agencia de inteligencia artificial en Barcelona. Automatización de procesos, chatbots personalizados y aplicaciones IA para empresas.",
  },
  alternates: {
    canonical: "https://www.autoprocessx.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
          suppressHydrationWarning
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
          suppressHydrationWarning
        />
      </head>
      <body suppressHydrationWarning className="min-h-full flex flex-col relative bg-background">
        <ContactDrawerProvider>
          {/* Global Flagship Background */}
          <div className="fixed inset-0 z-0 opacity-[0.4] pointer-events-none">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem]" />
            {/* Fading bottom edge to blend seamlessly if needed */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/80" />
          </div>

          <div className="relative z-10 flex flex-col min-h-full">
              {children}
          </div>

          <ContactDrawer />
        </ContactDrawerProvider>
      </body>
    </html>
  );
}
