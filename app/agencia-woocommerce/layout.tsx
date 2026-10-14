import type { Metadata } from "next"

export const metadata: Metadata = {
  title: { absolute: "Consultor SEO WordPress y WooCommerce, sin migrar | SEOscar" },
  description: "Haz que tu WooCommerce venda más sin rehacer tu WordPress: SEO técnico, visibilidad en ChatGPT y Google, CRO y automatización. Diagnóstico gratis 24-48 h.",
  keywords: ["agencia WooCommerce", "SEO WooCommerce", "optimizar WooCommerce", "WooCommerce lento", "experto WooCommerce", "WordPress ecommerce SEO", "CRO WooCommerce"],
  openGraph: {
            images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "SEOscar, agencia de ecommerce en Barcelona" }],
    title: "Consultor SEO WordPress y WooCommerce, sin migrar | SEOscar",
    description: "Haz que tu WooCommerce venda más sin rehacer tu WordPress: SEO técnico, visibilidad en ChatGPT y Google, CRO y automatización. Diagnóstico gratis 24-48 h.",
    type: "website",
    locale: "es_ES",
    url: "https://www.seoscar.com/agencia-woocommerce",
  },
  alternates: {
    canonical: "https://www.seoscar.com/agencia-woocommerce",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
