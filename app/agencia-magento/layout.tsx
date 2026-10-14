import type { Metadata } from "next"

export const metadata: Metadata = {
  title: { absolute: "Agencia Magento: SEO, GEO y CRO a escala | SEOscar" },
  description: "Haz que tu Magento venda más sin migrar: SEO técnico a escala, visibilidad en ChatGPT y Google, CRO y automatización. Diagnóstico gratis en 24-48 h.",
  keywords: ["agencia Magento", "SEO Magento", "optimizar Magento", "Magento lento", "consultor Magento España", "Adobe Commerce SEO", "CRO Magento"],
  openGraph: {
            images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "SEOscar, agencia de ecommerce en Barcelona" }],
    title: "Agencia Magento: SEO, GEO y CRO a escala | SEOscar",
    description: "Haz que tu Magento venda más sin migrar: SEO técnico a escala, visibilidad en ChatGPT y Google, CRO y automatización. Diagnóstico gratis en 24-48 h.",
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
