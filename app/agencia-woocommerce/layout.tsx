import type { Metadata } from "next"

export const metadata: Metadata = {
  title: { absolute: "Agencia WooCommerce: SEO, CRO e IA para tu tienda | SEOscar" },
  description: "Hago que tu WooCommerce venda más con el tráfico que ya tienes: SEO técnico, visibilidad en IA, CRO y automatización. Sin migrar nada. Reserva tu diagnóstico.",
  keywords: ["agencia WooCommerce", "SEO WooCommerce", "optimizar WooCommerce", "WooCommerce lento", "experto WooCommerce", "WordPress ecommerce SEO", "CRO WooCommerce"],
  openGraph: {
            images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "SEOscar, agencia de ecommerce en Barcelona" }],
    title: "Agencia WooCommerce: SEO, CRO e IA para tu tienda | SEOscar",
    description: "Hago que tu WooCommerce venda más con el tráfico que ya tienes: SEO técnico, visibilidad en IA, CRO y automatización. Sin migrar nada. Reserva tu diagnóstico.",
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
