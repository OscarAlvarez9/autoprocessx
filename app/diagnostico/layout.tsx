import type { Metadata } from "next"

export const metadata: Metadata = {
  title: { absolute: "Diagnóstico de tu ecommerce sin compromiso | SEOscar" },
  description: "Cuatro respuestas rápidas y miramos tu tienda: dónde se te escapan las ventas y un plan de tráfico, conversión y automatización. Respuesta en 24h, sin compromiso.",
  keywords: ["diagnóstico ecommerce", "auditoría tienda online gratis", "análisis de conversión ecommerce", "diagnóstico SEO ecommerce", "consultoría ecommerce Barcelona"],
  openGraph: {
            images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "SEOscar, agencia de ecommerce en Barcelona" }],
    title: "Diagnóstico de tu ecommerce sin compromiso | SEOscar",
    description: "Cuatro respuestas rápidas y miramos tu tienda: dónde se te escapan las ventas y un plan de tráfico, conversión y automatización. Respuesta en 24h, sin compromiso.",
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
