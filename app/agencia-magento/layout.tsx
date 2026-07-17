import type { Metadata } from "next"

export const metadata: Metadata = {
  title: { absolute: "Agencia Magento: SEO, GEO, CRO e IA para tu tienda | SEOscar" },
  description: "Hago que tu Magento venda más con el tráfico que ya tienes: SEO técnico a escala, visibilidad en IA, CRO y automatización. Sin migrar nada. Reserva tu diagnóstico.",
  keywords: ["agencia Magento", "SEO Magento", "optimizar Magento", "Magento lento", "consultor Magento España", "Adobe Commerce SEO", "CRO Magento"],
  openGraph: {
            images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "SEOscar, agencia de ecommerce en Barcelona" }],
    title: "Agencia Magento: SEO, GEO, CRO e IA para tu tienda | SEOscar",
    description: "Hago que tu Magento venda más con el tráfico que ya tienes: SEO técnico a escala, visibilidad en IA, CRO y automatización. Sin migrar nada. Reserva tu diagnóstico.",
    type: "website",
    locale: "es_ES",
    url: "https://www.seoscar.com/agencia-magento",
  },
  alternates: {
    canonical: "https://www.seoscar.com/agencia-magento",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
