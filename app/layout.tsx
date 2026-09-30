import type { Metadata } from "next";
import { Geist, Geist_Mono, Fraunces, IBM_Plex_Mono, Inter } from "next/font/google";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v16-appRouter";
import "./globals.css";
import { ContactDrawerProvider } from "@/context/ContactDrawerContext";
import ContactDrawer from "@/components/ContactDrawer";
// import ChatWidget from "@/components/ChatWidget"; // desactivado temporalmente
import CookieConsent from "@/components/CookieConsent";
import { FOUNDER_ID, ORG_PROFILES, founderSchema } from "@/lib/seo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Sistema tipográfico (paleta v3): serif editorial (Fraunces) + mono (IBM Plex) + Inter.
const fraunces = Fraunces({ variable: "--font-fraunces", subsets: ["latin"], display: "swap" });
const plexMono = IBM_Plex_Mono({ variable: "--font-mono-plex", weight: ["400", "500", "600"], subsets: ["latin"], display: "swap" });
const inter = Inter({ variable: "--font-sans-body", subsets: ["latin"], display: "swap" });

const SITE_URL = "https://www.seoscar.com"
const ORG_ID = `${SITE_URL}/#organization`

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "ProfessionalService"],
  "@id": ORG_ID,
  name: "SEOscar",
  alternateName: "SEOscar · Óscar Álvarez, consultor SEO para ecommerce",
  // Existe otra "SEOscar" (un SaaS en inglés, registrado once meses después).
  // disambiguatingDescription es la propiedad de schema.org pensada justo para
  // esto: decirle al buscador qué entidad es esta sin nombrar a la otra.
  disambiguatingDescription: "Consultoría SEO para tiendas online en España, de Óscar Álvarez. No está relacionada con ninguna plataforma de software del mismo nombre.",
  foundingDate: "2025",
  url: SITE_URL,
  logo: {
    "@type": "ImageObject",
    url: `${SITE_URL}/logo-square.png`,
    width: 512,
    height: 512,
  },
  description: "Consultoría SEO para ecommerce de Óscar Álvarez, en Barcelona y el Maresme. SEO y GEO que traen tráfico que compra, CRO, agente de ventas IA y automatización de procesos. Sobre tu plataforma actual, sin migrar.",
  slogan: "Más tráfico que compra. Más visitas que convierten.",
  // Antes era un array vacío, que afirma "no tengo perfiles". Ahora va la
  // ficha de Google, que es la señal local más fuerte para un negocio con
  // dirección. TODO Oscar: añadir LinkedIn de empresa cuando exista.
  sameAs: ORG_PROFILES,
  // Enlaza la marca con la persona. "SEOscar" lo puede registrar cualquiera;
  // "Óscar Álvarez" no, así que es la entidad que conviene consolidar.
  founder: { "@id": FOUNDER_ID },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Premià de Mar",
    addressRegion: "Barcelona, Cataluña",
    addressCountry: "ES",
  },
  email: "contacta@seoscar.com",
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
    "SEO para ecommerce",
    "GEO / AI Search",
    "CRO / optimización de conversión",
    "agente de ventas IA",
    "Shopify",
    "WooCommerce",
    "automatización de procesos con n8n",
    "arquitectura RAG",
    "crecimiento de tiendas online",
    "tráfico orgánico que compra",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Servicios de SEOscar",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Crecimiento ecommerce (SEO, GEO y CRO)",
          url: `${SITE_URL}/servicios/crecimiento-ecommerce`,
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Agente de ventas IA",
          url: `${SITE_URL}/servicios/agente-ventas-ia`,
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Automatización de procesos con n8n",
          url: `${SITE_URL}/servicios/automatizaciones`,
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Auditoría SEO, GEO y CRO",
          url: `${SITE_URL}/servicios/auditoria-seo-geo`,
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Plataformas internas a medida con IA",
          url: `${SITE_URL}/servicios/a-medida`,
        },
      },
    ],
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: "SEOscar",
  url: SITE_URL,
  description: "Agencia de inteligencia artificial y automatización con n8n en Barcelona. Agentes autónomos, arquitecturas RAG y flujos inteligentes para empresas.",
  inLanguage: "es-ES",
  publisher: { "@id": ORG_ID },
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.seoscar.com"),
  title: {
    default: "Consultor SEO para ecommerce · Barcelona y Maresme | SEOscar",
    template: "%s | SEOscar",
  },
  description: "Óscar Álvarez, consultor SEO para ecommerce en Barcelona y el Maresme. Tráfico que compra, CRO y automatización sobre tu propia tienda, sin migrar.",
  keywords: ["consultor SEO ecommerce", "consultor SEO Barcelona", "consultor SEO Maresme", "SEO ecommerce", "GEO AI Search", "agente de ventas IA", "automatización n8n", "CRO tienda online", "crecimiento ecommerce"],
  openGraph: {
    title: "Consultor SEO para ecommerce · Barcelona y Maresme | SEOscar",
    description: "Óscar Álvarez, consultor SEO para ecommerce en Barcelona y el Maresme. Tráfico que compra, CRO y automatización sobre tu propia tienda, sin migrar.",
    type: "website",
    locale: "es_ES",
    siteName: "SEOscar",
    url: "https://www.seoscar.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Consultor SEO para ecommerce · Barcelona y Maresme | SEOscar",
    description: "Óscar Álvarez, consultor SEO para ecommerce en Barcelona y el Maresme. Tráfico que compra, CRO y automatización sobre tu propia tienda, sin migrar.",
  },
  alternates: {
    canonical: "https://www.seoscar.com",
  },
  icons: {
    icon: "/faviconseoscar.jpg",
    apple: "/faviconseoscar.jpg",
    shortcut: "/faviconseoscar.jpg",
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
      className={`${geistSans.variable} ${geistMono.variable} ${fraunces.variable} ${plexMono.variable} ${inter.variable} h-full antialiased`}
    >
      <head suppressHydrationWarning>
        {/* Analytics (GTM + GA) are loaded by <CookieConsent /> only after the
            user grants consent, see components/CookieConsent.tsx (RGPD). */}
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(founderSchema) }}
          suppressHydrationWarning
        />
      </head>
      <body suppressHydrationWarning className="min-h-full flex flex-col relative bg-background">
        {/* Single root wrapper, protects React reconciliation against third-party DOM mutations
            (browser extensions, GTM-injected scripts, Calendly widget, etc.) */}
        <div suppressHydrationWarning className="contents">
          <AppRouterCacheProvider options={{ key: "mui" }}>
            <ContactDrawerProvider>
              <div className="relative z-10 flex flex-col min-h-full">
                  {children}
              </div>

              <ContactDrawer />
            </ContactDrawerProvider>
            {/* Chatbot desactivado temporalmente hasta actualizar su contenido. */}
            {/* <ChatWidget /> */}
            <CookieConsent />
          </AppRouterCacheProvider>
        </div>
      </body>
    </html>
  );
}
