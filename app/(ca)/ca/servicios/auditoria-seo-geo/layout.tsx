import type { Metadata } from "next"
import { SITE_URL, i18nAlternates } from "@/lib/i18n"

const TITLE = "Auditoria SEO per a ecommerce: SEO, GEO i CRO | SEOscar"
const DESCRIPTION =
  "Auditoria SEO tècnica, GEO i CRO de la teva botiga: pla prioritzat per impacte en vendes i sessió de lliurament en directe. Preu tancat abans de començar."

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  keywords: [
    "auditoria SEO",
    "auditoria SEO ecommerce",
    "preu auditoria SEO",
    "auditoria SEO professional",
    "auditoria GEO",
    "auditoria tècnica SEO",
    "auditoria SEO botiga en línia",
    "fugues de conversió",
  ],
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "SEOscar, agència d'ecommerce a Barcelona" }],
    title: TITLE,
    description: DESCRIPTION,
    type: "website",
    locale: "ca_ES",
    url: `${SITE_URL}/ca/servicios/auditoria-seo-geo`,
  },
  alternates: i18nAlternates("/servicios/auditoria-seo-geo", "ca"),
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
