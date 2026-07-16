"use client"

import Link from "next/link"
import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import Paper from "@mui/material/Paper"
import { tokens, fonts } from "@/lib/mui/theme"
import { SiteHeader, SiteFooter, Blueprint, Reveal, PrimaryCTA } from "@/components/mui/shared"

const RUTAS = [
  { label: "Crecimiento ecommerce", tag: "el pack que lo une todo", href: "/servicios/crecimiento-ecommerce" },
  { label: "Agente de ventas IA", tag: "anclado a tu catálogo", href: "/servicios/agente-ventas-ia" },
  { label: "Automatización", tag: "n8n y código propio", href: "/servicios/automatizaciones" },
  { label: "Auditoría SEO/GEO", tag: "con fugas de conversión", href: "/servicios/auditoria-seo-geo" },
  { label: "Casos de éxito", tag: "tiendas creciendo", href: "/casos-de-exito" },
  { label: "Nuestro método", tag: "del diagnóstico a las ventas", href: "/metodo" },
]

// 404 con el chrome completo del sitio: nadie se queda en vía muerta. A la
// izquierda el mensaje y el CTA; a la derecha, las rutas que sí convierten.
export default function NotFoundMui() {
  return (
    <Box sx={{ bgcolor: tokens.paper, minHeight: "100dvh", display: "flex", flexDirection: "column" }}>
      <SiteHeader />
      <Box component="main" sx={{ position: "relative", overflow: "hidden", flex: 1, display: "flex", alignItems: "center" }}>
        <Blueprint />
        <Container sx={{ position: "relative", zIndex: 1, py: { xs: 10, md: 14 } }}>
          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1.1fr 0.9fr" }, gap: { xs: 6, md: 8 }, alignItems: "center" }}>
            <Reveal>
              <Box>
                <Typography variant="h1" sx={{ fontSize: { xs: 34, sm: 48, md: 60 }, letterSpacing: "-0.025em", color: tokens.ink, mb: 2.5 }}>
                  Esta página no <Box component="em" sx={{ fontStyle: "italic", color: tokens.petrol }}>existe</Box>.
                </Typography>
                <Typography variant="body1" sx={{ fontSize: { xs: 16, md: 18 }, color: tokens.body, maxWidth: 460, mb: 4 }}>
                  Puede que la URL haya cambiado con la web nueva o que tenga una errata. Lo que sí existe es un plan para que tu ecommerce venda más.
                </Typography>
                <Stack direction={{ xs: "column", sm: "row" }} spacing={2.5} sx={{ alignItems: { sm: "center" } }}>
                  <PrimaryCTA />
                  <Typography component={Link} href="/" sx={{ fontFamily: fonts.mono, fontSize: 13, fontWeight: 600, color: tokens.ink, textDecoration: "none", "&:hover": { color: tokens.petrol } }}>
                    Volver al inicio <Box component="span" sx={{ color: tokens.petrol }}>↗</Box>
                  </Typography>
                </Stack>
              </Box>
            </Reveal>
            <Reveal delay={0.08}>
              <Paper elevation={2} sx={{ borderRadius: 3, overflow: "hidden", border: `1px solid ${tokens.lineSoft}`, bgcolor: tokens.win }}>
                <Stack direction="row" spacing={1.25} sx={{ alignItems: "center", px: 2, py: 1.25, borderBottom: `1px solid ${tokens.lineSoft}` }}>
                  <Stack direction="row" spacing={0.75}>
                    {[0, 1, 2].map((d) => <Box key={d} sx={{ width: 9, height: 9, borderRadius: 999, bgcolor: "#D8DAD6" }} />)}
                  </Stack>
                  <Typography sx={{ fontFamily: fonts.mono, fontSize: 11.5, color: tokens.muted }}>error 404 · rutas que sí existen</Typography>
                </Stack>
                <Stack>
                  {RUTAS.map((r, i) => (
                    <Box
                      key={r.href}
                      component={Link}
                      href={r.href}
                      sx={{
                        display: "flex", alignItems: "baseline", gap: 1.5, px: 2.5, py: 1.75, textDecoration: "none",
                        borderTop: i > 0 ? `1px solid ${tokens.lineSoft}` : "none",
                        transition: "background-color .2s",
                        "&:hover": { bgcolor: tokens.surface },
                        "&:hover .nf-arrow": { transform: "translate(2px,-2px)" },
                      }}
                    >
                      <Typography sx={{ fontFamily: fonts.serif, fontSize: 17, fontWeight: 600, color: tokens.ink }}>{r.label}</Typography>
                      <Typography sx={{ fontSize: 12.5, color: tokens.muted, flex: 1, display: { xs: "none", sm: "block" } }}>{r.tag}</Typography>
                      <Box className="nf-arrow" component="span" sx={{ color: tokens.petrol, fontFamily: fonts.mono, fontSize: 13, transition: "transform .2s", flexShrink: 0 }}>↗</Box>
                    </Box>
                  ))}
                </Stack>
              </Paper>
            </Reveal>
          </Box>
        </Container>
      </Box>
      <SiteFooter />
    </Box>
  )
}
