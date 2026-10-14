import type { Metadata } from "next"
import { SITE_URL, i18nAlternates } from "@/lib/i18n"

// Versió catalana del portfolio personal d'Òscar Álvarez. Igual que la
// castellana: noindex a metadata, no a robots.txt.
const TITLE = "Òscar Álvarez · Portfolio"
const DESCRIPTION = "Consultor SEO 360: SEO, GEO, automatitzacions, fugues de conversió i estratègies de màrqueting. Portfolio personal d'Òscar Álvarez, fundador de SEOscar."

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Òscar Álvarez · Consultor SEO 360" }],
    title: TITLE,
    description: DESCRIPTION,
    type: "profile",
    locale: "ca_ES",
    url: `${SITE_URL}/ca/portfolio-oscar-alvarez`,
  },
  alternates: i18nAlternates("/portfolio-oscar-alvarez", "ca"),
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
