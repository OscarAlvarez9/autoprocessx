import type { Metadata } from "next"
import { SITE_URL, i18nAlternates } from "@/lib/i18n"

const TITLE = "Sistema de gestió de catàleg per a WooCommerce | SEOscar"
const DESCRIPTION =
  "Gestor de catàleg per xat que llança automatitzacions al teu WooCommerce: altes, fotos, variants i categories. Ja l'utilitza una empresa de 2.300 referències."

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  keywords: [
    "automatitzar gestió de productes",
    "automatització gestió de productes",
    "automatitzar catàleg ecommerce",
    "càrrega massiva de productes",
    "automatitzar alta de productes",
    "sincronitzar estoc proveïdor",
    "PIM ecommerce",
    "n8n WooCommerce productes",
  ],
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "SEOscar, agència d'ecommerce a Barcelona" }],
    title: TITLE,
    description: DESCRIPTION,
    type: "website",
    locale: "ca_ES",
    url: `${SITE_URL}/ca/servicios/automatizacion-gestion-productos`,
  },
  alternates: i18nAlternates("/servicios/automatizacion-gestion-productos", "ca"),
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
