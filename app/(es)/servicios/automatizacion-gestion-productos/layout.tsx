import type { Metadata } from "next"
import { i18nAlternates } from "@/lib/i18n"

const TITLE = "Sistema de gestión de catálogo para WooCommerce | SEOscar"
const DESCRIPTION =
  "Gestor de catálogo por chat que lanza automatizaciones en tu WooCommerce: altas, fotos, variantes y categorías. Ya lo usa una empresa de 2.300 referencias."
const URL = "https://www.seoscar.com/servicios/automatizacion-gestion-productos"

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  keywords: [
    "automatizar gestión de productos",
    "automatización gestión de productos",
    "automatizar catálogo ecommerce",
    "carga masiva de productos",
    "automatizar alta de productos",
    "sincronizar stock proveedor",
    "PIM ecommerce",
    "n8n WooCommerce productos",
  ],
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "SEOscar, agencia de ecommerce en Barcelona" }],
    title: TITLE,
    description: DESCRIPTION,
    type: "website",
    locale: "es_ES",
    url: URL,
  },
  alternates: i18nAlternates("/servicios/automatizacion-gestion-productos", "es"),
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
