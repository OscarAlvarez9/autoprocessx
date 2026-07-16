"use client"

import Link from "next/link"
import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import { tokens, fonts } from "@/lib/mui/theme"
import { SiteHeader, SiteFooter, DiagnosticoCTA, Blueprint, Reveal, ArtifactWindow, Crumbs } from "@/components/mui/shared"
import { CaseVisualBox } from "@/components/mui/CasosMui"
import type { Caso } from "@/lib/casesEcom"

function Hero({ c }: { c: Caso }) {
  return (
    <Box component="section" sx={{ position: "relative", overflow: "hidden", borderBottom: `1px solid ${tokens.lineSoft}` }}>
      <Blueprint />
      <Container sx={{ position: "relative", zIndex: 1, py: { xs: 6, md: 10 } }}>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", lg: "1fr 1fr" }, gap: { xs: 5, lg: 9 }, alignItems: "center" }}>
          <Box>
            <Reveal>
              <Typography variant="h1" sx={{ fontSize: { xs: 36, sm: 46, lg: 54 }, color: tokens.ink, mb: 2 }}>{c.client}</Typography>
              <Typography variant="body1" sx={{ fontSize: { xs: 16, md: 18 }, color: tokens.body, maxWidth: 500, mb: 3 }}>{c.summary}</Typography>
              <Stack direction="row" spacing={1} sx={{ flexWrap: "wrap", gap: 1 }}>
                <Box sx={{ border: `1px solid ${tokens.petrol}44`, borderRadius: 999, px: 1.5, py: 0.4 }}>
                  <Typography sx={{ fontFamily: fonts.mono, fontSize: 11.5, color: tokens.petrol }}>{c.platform}</Typography>
                </Box>
              </Stack>
            </Reveal>
          </Box>
          <Reveal delay={0.1}>
            <ArtifactWindow tag={`${c.client} · en producción`} ratio="4 / 3">
              <CaseVisualBox caso={c} />
            </ArtifactWindow>
          </Reveal>
        </Box>
      </Container>
    </Box>
  )
}

function RetoSolucion({ c }: { c: Caso }) {
  return (
    <Box component="section" sx={{ py: { xs: 8, md: 12 }, borderBottom: `1px solid ${tokens.lineSoft}` }}>
      <Container>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap: { xs: 5, md: 8 } }}>
          <Reveal>
            <Box>
              <Typography sx={{ fontFamily: fonts.mono, fontSize: 12, color: tokens.petrol, mb: 1.5 }}>{`// el reto`}</Typography>
              <Typography variant="body1" sx={{ fontSize: { xs: 16, md: 18 }, color: tokens.ink }}>{c.reto}</Typography>
            </Box>
          </Reveal>
          <Reveal delay={0.08}>
            <Box>
              <Typography sx={{ fontFamily: fonts.mono, fontSize: 12, color: tokens.petrol, mb: 1.5 }}>{`// la solución`}</Typography>
              <Typography variant="body1" sx={{ fontSize: { xs: 16, md: 18 }, color: tokens.ink }}>{c.solucion}</Typography>
            </Box>
          </Reveal>
        </Box>
      </Container>
    </Box>
  )
}

function Detalle({ c }: { c: Caso }) {
  return (
    <Box component="section" sx={{ py: { xs: 8, md: 12 }, borderBottom: `1px solid ${tokens.lineSoft}` }}>
      <Container>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1.1fr 0.9fr" }, gap: { xs: 5, md: 8 } }}>
          <Reveal>
            <Box>
              <Typography variant="h2" sx={{ fontSize: { xs: 24, md: 32 }, color: tokens.ink, mb: 3 }}>Qué hicimos</Typography>
              <Stack>
                {c.did.map((d, i) => (
                  <Stack key={d} direction="row" spacing={2} sx={{ py: 2, borderTop: i === 0 ? "none" : `1px solid ${tokens.lineSoft}`, alignItems: "flex-start" }}>
                    <Typography sx={{ fontFamily: fonts.mono, fontSize: 12, color: tokens.petrol, pt: 0.4, width: 22, flexShrink: 0 }}>{`0${i + 1}`}</Typography>
                    <Typography variant="body1" sx={{ color: tokens.body }}>{d}</Typography>
                  </Stack>
                ))}
              </Stack>
            </Box>
          </Reveal>
          <Reveal delay={0.08}>
            <Box>
              <Typography variant="h2" sx={{ fontSize: { xs: 24, md: 32 }, color: tokens.ink, mb: 3 }}>Stack</Typography>
              <Stack direction="row" sx={{ flexWrap: "wrap", gap: 1 }}>
                {c.stack.map((s) => (
                  <Box key={s} sx={{ border: `1px solid ${tokens.line}`, borderRadius: 2, px: 1.5, py: 0.75 }}>
                    <Typography sx={{ fontFamily: fonts.mono, fontSize: 12.5, color: tokens.ink }}>{s}</Typography>
                  </Box>
                ))}
              </Stack>
              {/* Métricas honestas: hueco hasta confirmación del cliente */}
              <Typography variant="h2" sx={{ fontSize: { xs: 24, md: 32 }, color: tokens.ink, mt: 6, mb: 3 }}>Resultados</Typography>
              <Stack spacing={2.5}>
                {c.metrics.map((m) => (
                  <Box key={m.label}>
                    <Typography sx={{ fontFamily: fonts.serif, fontSize: 34, fontWeight: 600, color: tokens.ink, lineHeight: 1 }}>{m.value ?? "[[ dato real ]]"}</Typography>
                    <Typography variant="body2" sx={{ color: tokens.ink, fontWeight: 600, mt: 0.5 }}>{m.label}</Typography>
                    <Typography sx={{ fontFamily: fonts.mono, fontSize: 11, color: tokens.muted }}>{m.note}</Typography>
                  </Box>
                ))}
              </Stack>
              {c.metrics.some((m) => !m.value) && (
                <Typography sx={{ fontFamily: fonts.mono, fontSize: 11, color: tokens.muted, mt: 3 }}>
                  {`// publicamos la cifra cuando ${c.client} la confirma, no antes`}
                </Typography>
              )}
            </Box>
          </Reveal>
        </Box>
      </Container>
    </Box>
  )
}

function CrossLinks() {
  return (
    <Box component="section" sx={{ py: { xs: 8, md: 11 } }}>
      <Container sx={{ textAlign: "center", maxWidth: 680 }}>
        <Reveal>
          <Typography variant="h2" sx={{ fontSize: { xs: 24, md: 32 }, color: tokens.ink, mb: 2 }}>
            Esto es el pack Crecimiento en acción.
          </Typography>
          <Typography variant="body1" sx={{ color: tokens.body, mb: 4 }}>
            Más tráfico que compra y más visitas que convierten, sobre tu propia plataforma.
          </Typography>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ justifyContent: "center" }}>
            <Button component={Link} href="/servicios/crecimiento-ecommerce" variant="outlined" sx={{ borderRadius: 2, borderColor: tokens.line, color: tokens.ink, fontWeight: 700, "&:hover": { borderColor: tokens.petrol, bgcolor: "transparent" } }}>
              Ver el pack Crecimiento <Box component="span" sx={{ color: tokens.petrol, ml: 0.75 }}>↗</Box>
            </Button>
            <Button component={Link} href="/casos-de-exito" sx={{ color: tokens.ink, fontWeight: 700, "&:hover": { bgcolor: "transparent", color: tokens.petrol } }}>
              Ver más casos
            </Button>
          </Stack>
        </Reveal>
      </Container>
    </Box>
  )
}

export default function CasoDetalleMui({ caso }: { caso: Caso }) {
  return (
    <Box sx={{ bgcolor: tokens.paper, color: tokens.body, fontFamily: fonts.sans }}>
      <SiteHeader />
      <Crumbs items={[{ label: "Casos de éxito", href: "/casos-de-exito" }, { label: caso.client }]} />
      <Hero c={caso} />
      <RetoSolucion c={caso} />
      <Detalle c={caso} />
      <CrossLinks />
      <DiagnosticoCTA />
      <SiteFooter />
    </Box>
  )
}
