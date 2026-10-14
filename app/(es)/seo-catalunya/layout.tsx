import type { Metadata } from "next"
import { i18nAlternates } from "@/lib/i18n"

export const metadata: Metadata = {
  title: { absolute: "Consultor SEO en Catalunya: SEO local y ecommerce | SEOscar" },
  description:
    "Consultor SEO en Catalunya para negocios locales y tiendas online: posicionamiento en Google, en el mapa y en ChatGPT, con datos. Diagnóstico gratis.",
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
    title: "Consultor SEO en Catalunya: SEO local y ecommerce | SEOscar",
    description:
      "Consultor SEO en Catalunya para negocios locales y tiendas online: posicionamiento en Google, en el mapa y en ChatGPT, con datos. Diagnóstico gratis.",
    type: "website",
    locale: "es_ES",
    url: "https://www.seoscar.com/seo-catalunya",
  },
  alternates: i18nAlternates("/seo-catalunya", "es"),
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
