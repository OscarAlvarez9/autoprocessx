import type { Metadata } from "next"

export const metadata: Metadata = {
  title: { absolute: "Auditoría SEO gratis de tu ecommerce: el diagnóstico | SEOscar" },
  description: "¿Buscas una auditoría SEO gratis? Empieza por el diagnóstico: respondes cuatro preguntas, miro tu tienda y en 24 a 48h te digo dónde se te escapan las ventas. Sin compromiso.",
  keywords: ["auditoría SEO gratis", "auditoría SEO gratis ecommerce", "auditoría tienda online gratis", "diagnóstico ecommerce", "diagnóstico SEO ecommerce", "análisis de conversión ecommerce"],
  openGraph: {
            images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "SEOscar, agencia de ecommerce en Barcelona" }],
    title: "Auditoría SEO gratis de tu ecommerce: el diagnóstico | SEOscar",
    description: "¿Buscas una auditoría SEO gratis? Empieza por el diagnóstico: respondes cuatro preguntas, miro tu tienda y en 24 a 48h te digo dónde se te escapan las ventas. Sin compromiso.",
    type: "website",
    locale: "es_ES",
    url: "https://www.seoscar.com/diagnostico",
  },
  alternates: {
    canonical: "https://www.seoscar.com/diagnostico",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
