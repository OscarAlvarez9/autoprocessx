import type { Metadata } from "next"
import ThemeRegistry from "@/components/mui/ThemeRegistry"
import NotFoundMui from "@/components/mui/NotFoundMui"

export const metadata: Metadata = {
  title: { absolute: "Pàgina no trobada, tornem a l'inici | SEOscar" },
  description: "La pàgina que busques no existeix o ha canviat d'adreça. Torna a l'inici de SEOscar o mira els serveis i els casos d'èxit.",
  robots: { index: false, follow: false },
}

export default function NotFoundCa() {
  return (
    <ThemeRegistry>
      <NotFoundMui />
    </ThemeRegistry>
  )
}
