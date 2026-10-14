import type { Metadata } from "next"
import { i18nAlternates } from "@/lib/i18n"

export const metadata: Metadata = {
  title: { absolute: "Agencia Shopify: SEO, GEO y CRO sin migrar | SEOscar" },
  description: "Haz que tu Shopify venda más con el tráfico que ya tienes: SEO técnico, visibilidad en ChatGPT y Google, CRO y automatización. Diagnóstico gratis 24-48 h.",
  keywords: ["agencia Shopify", "SEO Shopify", "CRO Shopify", "optimizar tienda Shopify", "experto Shopify España", "Shopify Plus SEO", "GEO Shopify"],
  openGraph: {
            images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "SEOscar, agencia de ecommerce en Barcelona" }],
    title: "Agencia Shopify: SEO, GEO y CRO sin migrar | SEOscar",
    description: "Haz que tu Shopify venda más con el tráfico que ya tienes: SEO técnico, visibilidad en ChatGPT y Google, CRO y automatización. Diagnóstico gratis 24-48 h.",
    type: "website",
    locale: "es_ES",
    url: "https://www.seoscar.com/agencia-shopify",
  },
  alternates: i18nAlternates("/agencia-shopify", "es"),
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
