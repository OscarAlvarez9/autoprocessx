import type { Metadata } from "next"
import ThemeRegistry from "@/components/mui/ThemeRegistry"
import NotFoundMui from "@/components/mui/NotFoundMui"

export const metadata: Metadata = {
  title: { absolute: "Página no encontrada, volvamos al inicio | SEOscar" },
  description: "La página que buscas no existe o ha cambiado de dirección. Vuelve al inicio de SEOscar o mira los servicios y los casos de éxito.",
  robots: { index: false, follow: false },
}

export default function NotFound() {
  return (
    <ThemeRegistry>
      <NotFoundMui />
    </ThemeRegistry>
  )
}
