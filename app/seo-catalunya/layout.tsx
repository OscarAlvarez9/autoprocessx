import type { Metadata } from "next"

export const metadata: Metadata = {
  title: { absolute: "Consultor SEO en Barcelona y toda Catalunya | SEOscar" },
  description:
    "Consultor SEO en Barcelona y Catalunya para tiendas online y negocios del Maresme, Vallès y Bages. Posicionamiento con datos. Diagnóstico gratis.",
  keywords: [
    "agencia SEO Maresme",
    "consultor SEO Catalunya",
    "SEO local Barcelona",
    "posicionamiento web Mataró",
    "SEO Manresa",
    "agencia SEO catalana",
    "consultor SEO Barcelona",
    "SEO local Catalunya",
  ],
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "SEOscar, agencia de ecommerce en Barcelona" }],
    title: "Consultor SEO en Barcelona y toda Catalunya | SEOscar",
    description:
      "Consultor SEO en Barcelona y Catalunya para tiendas online y negocios del Maresme, Vallès y Bages. Posicionamiento con datos. Diagnóstico gratis.",
    type: "website",
    locale: "es_ES",
    url: "https://www.seoscar.com/seo-catalunya",
  },
  alternates: {
    canonical: "https://www.seoscar.com/seo-catalunya",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
