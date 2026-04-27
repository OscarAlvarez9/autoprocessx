import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ContactDrawerProvider } from "@/context/ContactDrawerContext";
import ContactDrawer from "@/components/ContactDrawer";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = "https://www.autoprocessx.com"
const ORG_ID = `${SITE_URL}/#organization`

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": ORG_ID,
  name: "AutoProcessX",
  alternateName: "AutoProcessX · Agencia IA Barcelona",
  url: SITE_URL,
  logo: {
    "@type": "ImageObject",
    url: `${SITE_URL}/assets/logo_premium_v6.png`,
    width: 512,
    height: 512,
  },
  description: "Agencia de inteligencia artificial en Barcelona. Automatización de procesos con n8n, plataformas IA con arquitectura RAG y chatbots para empresas — bajo tu propiedad, sin SaaS.",
  slogan: "Tu propia infraestructura IA. Sin SaaS.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Barcelona",
    addressRegion: "Cataluña",
    addressCountry: "ES",
  },
  areaServed: [
    { "@type": "Country", name: "España" },
    { "@type": "AdministrativeArea", name: "Unión Europea" },
  ],
  knowsLanguage: ["es", "en", "ca"],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    areaServed: ["ES", "EU"],
    availableLanguage: ["Spanish", "English"],
  },
  knowsAbout: [
    "automatización de procesos",
    "inteligencia artificial para empresas",
    "n8n workflow automation",
    "agentes autónomos IA",
    "arquitectura RAG",
    "Retrieval-Augmented Generation",
    "Claude 3.5 Sonnet",
    "GPT-4o",
    "chatbots IA web y WhatsApp",
    "plataformas IA empresariales",
    "ingeniería de plataformas",
    "DevOps IA",
    "vector databases",
    "LLM orchestration",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Servicios AutoProcessX",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Automatizaciones IA con n8n",
          url: `${SITE_URL}/servicios/automatizaciones`,
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Chatbots IA para web y WhatsApp",
          url: `${SITE_URL}/servicios/ai-chatbot`,
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Plataforma IA con arquitectura RAG",
          url: `${SITE_URL}/servicios/aplicaciones-ia`,
        },
      },
    ],
  },
  sameAs: [],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: "AutoProcessX",
  url: SITE_URL,
  description: "Agencia de inteligencia artificial y automatización con n8n en Barcelona. Agentes autónomos, arquitecturas RAG y flujos inteligentes para empresas.",
  inLanguage: "es-ES",
  publisher: { "@id": ORG_ID },
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
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
    shortcut: "/favicon.ico",
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
        {/* Google Tag Manager */}
        <Script id="gtm-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({'gtm.start': new Date().getTime(), event: 'gtm.js'});
          `}
        </Script>
        <Script 
          id="gtm-script" 
          src="https://www.googletagmanager.com/gtm.js?id=GTM-WD6GMRVN"
          strategy="afterInteractive" 
        />
        {/* End Google Tag Manager */}
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-TVHV4PRDNN"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-TVHV4PRDNN');
          `}
        </Script>
        {/* End Google Analytics */}
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
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WD6GMRVN"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <ContactDrawerProvider>
          <div className="relative z-10 flex flex-col min-h-full">
              {children}
          </div>

          <ContactDrawer />
        </ContactDrawerProvider>
      </body>
    </html>
  );
}
