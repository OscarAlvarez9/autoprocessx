import type { Metadata } from "next"

// Página personal de Óscar Álvarez para usar como enlace único en la sección
// "Featured" de LinkedIn. No es contenido comercial de SEOscar: no debe
// indexarse ni competir por keywords con el resto del sitio. El noindex va en
// metadata (no en robots.txt) para que Google pueda rastrearla, ver la
// directiva y excluirla de verdad, en vez de indexar la URL pelada por el
// backlink de LinkedIn.
export const metadata: Metadata = {
  title: { absolute: "Óscar Álvarez · Portfolio" },
  description: "Consultor SEO 360: SEO, GEO, automatizaciones, fugas de conversión y estrategias de marketing. Portfolio personal de Óscar Álvarez, fundador de SEOscar.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Óscar Álvarez · Consultor SEO 360" }],
    title: "Óscar Álvarez · Portfolio",
    description: "Consultor SEO 360: SEO, GEO, automatizaciones, fugas de conversión y estrategias de marketing. Portfolio personal de Óscar Álvarez, fundador de SEOscar.",
    type: "profile",
    locale: "es_ES",
    url: "https://www.seoscar.com/portfolio-oscar-alvarez",
  },
  alternates: {
    canonical: "https://www.seoscar.com/portfolio-oscar-alvarez",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
