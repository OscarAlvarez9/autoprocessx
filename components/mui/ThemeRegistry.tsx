"use client"

import { ThemeProvider } from "@mui/material/styles"
import ScopedCssBaseline from "@mui/material/ScopedCssBaseline"
import { theme } from "@/lib/mui/theme"

// Aísla el baseline de MUI a este árbol (el resto del sitio sigue en Tailwind
// durante la migración). La emotion cache SSR la aporta AppRouterCacheProvider
// en app/layout.tsx.
export default function ThemeRegistry({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <ScopedCssBaseline sx={{ bgcolor: "background.default" }}>{children}</ScopedCssBaseline>
    </ThemeProvider>
  )
}
