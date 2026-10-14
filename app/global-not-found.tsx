import type { Metadata } from "next"
import RootShell from "@/components/RootShell"
import ThemeRegistry from "@/components/mui/ThemeRegistry"
import NotFoundMui from "@/components/mui/NotFoundMui"

// Con dos layouts raíz (app/(es) y app/(ca)) no hay uno común desde el que
// componer el 404 de una URL que no existe: Next usa este archivo. Las rutas
// que llaman a notFound() dentro de cada idioma usan su propio not-found.tsx.
export const metadata: Metadata = {
  title: { absolute: "Página no encontrada, volvamos al inicio | SEOscar" },
  description: "La página que buscas no existe o ha cambiado de dirección. Vuelve al inicio de SEOscar o mira los servicios y los casos de éxito.",
  robots: { index: false, follow: false },
}

export default function GlobalNotFound() {
  return (
    <RootShell lang="es">
      <ThemeRegistry>
        <NotFoundMui />
      </ThemeRegistry>
    </RootShell>
  )
}
