"use client"

import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import { tokens, fonts } from "@/lib/mui/theme"
import { SiteHeader, SiteFooter, Crumbs } from "@/components/mui/shared"
import { useLocale } from "@/components/LocaleProvider"

// Páginas legales con la cabecera y el pie de la web actual. El texto de cada
// página llega como children desde su page.tsx; aquí solo va el marco y la
// tipografía de la columna de lectura.
export default function LegalMui({ title, intro, updatedAt, children }: { title: string; intro: string; updatedAt: string; children: React.ReactNode }) {
  const locale = useLocale()
  return (
    <Box sx={{ bgcolor: tokens.paper, color: tokens.body, fontFamily: fonts.sans, minHeight: "100vh" }}>
      <SiteHeader />
      <Crumbs items={[{ label: title }]} />
      <Box component="main" sx={{ py: { xs: 6, md: 9 } }}>
        <Container sx={{ maxWidth: 760 }}>
          <Typography variant="h1" sx={{ fontSize: { xs: 32, md: 46 }, lineHeight: 1.08, color: tokens.ink, mb: 2 }}>{title}</Typography>
          <Typography variant="body1" sx={{ fontSize: { xs: 16, md: 18 }, color: tokens.body, mb: 1.5 }}>{intro}</Typography>
          <Typography sx={{ fontFamily: fonts.mono, fontSize: 12, color: tokens.muted, mb: { xs: 5, md: 7 } }}>{locale === "ca" ? "Darrera actualització" : "Última actualización"}: {updatedAt}</Typography>
          <Box
            sx={{
              fontSize: { xs: 15, md: 16 },
              lineHeight: 1.7,
              color: tokens.body,
              "& > * + *": { mt: 3 },
              "& h2": { fontFamily: fonts.serif, fontSize: { xs: 20, md: 24 }, fontWeight: 600, color: tokens.ink, lineHeight: 1.25, mt: 5, mb: 1.5 },
              "& p": { m: 0 },
              "& p + p": { mt: 1.5 },
              "& a": { color: tokens.petrol, textDecoration: "underline", textUnderlineOffset: "3px" },
              "& ul": { pl: 2.5, my: 1.5, listStyle: "disc" },
              "& li + li": { mt: 0.75 },
              "& strong": { color: tokens.ink },
            }}
          >
            {children}
          </Box>
        </Container>
      </Box>
      <SiteFooter />
    </Box>
  )
}
