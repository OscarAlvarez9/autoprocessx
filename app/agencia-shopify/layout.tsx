import type { Metadata } from "next"

export const metadata: Metadata = {
  title: { absolute: "Agencia Shopify: SEO, GEO, CRO e IA para tu tienda | SEOscar" },
  description: "Hago que tu tienda Shopify venda más con el tráfico que ya tienes: SEO técnico, visibilidad en IA, CRO y automatización. Sin migrar nada. Reserva tu diagnóstico.",
  keywords: ["agencia Shopify", "SEO Shopify", "CRO Shopify", "optimizar tienda Shopify", "experto Shopify España", "Shopify Plus SEO", "GEO Shopify"],
  openGraph: {
            images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "SEOscar, agencia de ecommerce en Barcelona" }],
    title: "Agencia Shopify: SEO, GEO, CRO e IA para tu tienda | SEOscar",
    description: "Hago que tu tienda Shopify venda más con el tráfico que ya tienes: SEO técnico, visibilidad en IA, CRO y automatización. Sin migrar nada. Reserva tu diagnóstico.",
    type: "website",
    locale: "es_ES",
    url: "https://www.seoscar.com/agencia-shopify",
  },
  alternates: {
    canonical: "https://www.seoscar.com/agencia-shopify",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
