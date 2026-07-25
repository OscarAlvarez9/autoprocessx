"use client"

import Link from "next/link"
import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import Paper from "@mui/material/Paper"
import { tokens, fonts } from "@/lib/mui/theme"
import { SiteHeader, SiteFooter, Blueprint, Reveal, DiagnosticoFlow, Crumbs } from "@/components/mui/shared"

const linkSx = { color: tokens.ink, fontWeight: 600, textDecoration: "underline", textDecorationColor: tokens.line, "&:hover": { textDecorationColor: tokens.petrol } } as const

function Check() {
  return (
    <Box component="svg" viewBox="0 0 24 24" sx={{ width: 18, height: 18, flexShrink: 0, mt: "1px" }} aria-hidden>
      <circle cx="12" cy="12" r="11" fill={`${tokens.teal}18`} />
      <path d="M7 12.5l3.2 3.2L17 9" fill="none" stroke={tokens.teal} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </Box>
  )
}

const LLEVAS = [
  "Dónde se te escapan las ventas hoy, con nombre y apellido.",
  "Un plan ordenado por impacto en ventas, no una lista genérica.",
  "Sobre tu plataforma actual. No te hago migrar.",
  "Respuesta humana en menos de 24h, mirando tu tienda de verdad.",
]

const TRUST = ["Sobre tu plataforma, sin migrar", "El código es tuyo", "Sin permanencia", "Sin promesas de precio por email"]

const PASOS = [
  { n: "01", t: "Miro tu tienda", d: "Antes de escribirte reviso tu web de verdad. No es una respuesta automática." },
  { n: "02", t: "Te escribo en 24h", d: "Con las primeras señales de por dónde se te están escapando las ventas." },
  { n: "03", t: "Llamada de diagnóstico", d: "Repaso contigo tráfico, conversión y operativa. Sin compromiso." },
  { n: "04", t: "Plan priorizado", d: "Te queda un plan ordenado por impacto. Lo ejecutes conmigo o por tu cuenta." },
]

// Página dedicada del diagnóstico: el flujo conversacional como pieza central,
// con contexto de marca alrededor. Es a donde lleva el CTA de todo el sitio.
export default function DiagnosticoPageMui() {
  return (
    <Box sx={{ bgcolor: tokens.paper, minHeight: "100dvh", display: "flex", flexDirection: "column" }}>
      <SiteHeader />
      <Box component="main" sx={{ flex: 1 }}>
        <Box component="section" sx={{ position: "relative", overflow: "hidden", pt: { xs: 4, md: 6 }, pb: { xs: 8, md: 12 } }}>
          <Blueprint />
          <Container sx={{ position: "relative", zIndex: 1 }}>
            <Crumbs items={[{ label: "Diagnóstico" }]} />
            <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1.02fr 0.98fr" }, gap: { xs: 5, md: 8 }, alignItems: "center", mt: { xs: 2, md: 3 } }}>
              <Reveal>
                <Box>
                  <Typography variant="h1" sx={{ fontSize: { xs: 32, sm: 44, md: 54 }, letterSpacing: "-0.025em", color: tokens.ink, mb: 2.5 }}>
                    Reserva tu <Box component="em" sx={{ fontStyle: "italic", color: tokens.petrol }}>diagnóstico</Box> de ecommerce.
                  </Typography>
                  <Typography variant="body1" sx={{ fontSize: { xs: 16, md: 18 }, color: tokens.body, maxWidth: 480, mb: 3.5 }}>
                    Cuatro respuestas rápidas, a un clic. Con eso miro tu tienda y te digo dónde se te escapan las ventas, con un plan claro de tráfico, conversión y automatización.
                  </Typography>
                  <Stack spacing={1.5} sx={{ mb: 4 }}>
                    {LLEVAS.map((l) => (
                      <Stack key={l} direction="row" spacing={1.25} sx={{ alignItems: "flex-start" }}>
                        <Check />
                        <Typography sx={{ fontSize: 15, color: tokens.ink }}>{l}</Typography>
                      </Stack>
                    ))}
                  </Stack>
                  <Stack direction="row" spacing={1} sx={{ flexWrap: "wrap", rowGap: 1 }}>
                    {TRUST.map((t) => (
                      <Typography key={t} sx={{ fontFamily: fonts.mono, fontSize: 11.5, color: tokens.body, px: 1.25, py: 0.5, borderRadius: 999, border: `1px solid ${tokens.lineSoft}`, bgcolor: tokens.win }}>{t}</Typography>
                    ))}
                  </Stack>
                </Box>
              </Reveal>
              <Reveal delay={0.1}>
                <DiagnosticoFlow />
              </Reveal>
            </Box>
          </Container>
        </Box>

        <Box component="section" sx={{ borderTop: `1px solid ${tokens.lineSoft}`, py: { xs: 8, md: 11 } }}>
          <Container>
            <Reveal>
              <Typography variant="h2" sx={{ fontSize: { xs: 26, md: 36 }, color: tokens.ink, mb: { xs: 4, md: 6 }, maxWidth: 620 }}>
                Qué pasa cuando lo envías.
              </Typography>
            </Reveal>
            <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "repeat(4, 1fr)" }, gap: { xs: 3, md: 3.5 } }}>
              {PASOS.map((p, i) => (
                <Reveal key={p.n} delay={i * 0.07}>
                  <Box sx={{ borderTop: `2px solid ${tokens.petrol}`, pt: 2 }}>
                    <Typography sx={{ fontFamily: fonts.mono, fontSize: 12, color: tokens.petrol, mb: 1 }}>{p.n}</Typography>
                    <Typography variant="h3" sx={{ fontFamily: fonts.serif, fontSize: 19, color: tokens.ink, mb: 1 }}>{p.t}</Typography>
                    <Typography sx={{ fontSize: 14.5, color: tokens.body }}>{p.d}</Typography>
                  </Box>
                </Reveal>
              ))}
            </Box>
          </Container>
        </Box>

        {/* Puente del embudo: captura "auditoría SEO gratis" y encauza al
            diagnóstico; el enlace de vuelta cierra el ciclo gratis -> pago. */}
        <Box component="section" sx={{ borderTop: `1px solid ${tokens.lineSoft}`, py: { xs: 8, md: 11 } }}>
          <Container sx={{ maxWidth: 820 }}>
            <Reveal>
              <Paper elevation={0} sx={{ bgcolor: tokens.surface, border: `1px solid ${tokens.line}`, borderRadius: 4, p: { xs: 4, md: 6 } }}>
                <Typography variant="h2" sx={{ fontSize: { xs: 24, md: 32 }, color: tokens.ink, mb: 2, maxWidth: 620 }}>
                  ¿Buscas una auditoría SEO gratis?
                </Typography>
                <Typography variant="body1" sx={{ fontSize: { xs: 16, md: 18 }, color: tokens.body, mb: 2.5, maxWidth: 640 }}>
                  Empieza por aquí. El diagnóstico es justo eso: respondes cuatro preguntas, miro tu tienda a mano y en 24 a 48 horas te digo las tres o cuatro cosas que más ventas te están costando ahora mismo. Gratis, sin compromiso y sin volcados automáticos de herramienta.
                </Typography>
                <Typography variant="body1" sx={{ fontSize: { xs: 16, md: 18 }, color: tokens.body, maxWidth: 640 }}>
                  ¿Necesitas la auditoría completa? El diagnóstico te orienta; la{" "}
                  <Box component={Link} href="/servicios/auditoria-seo-geo" sx={linkSx}>auditoría SEO y GEO</Box>{" "}
                  es el documento entero, con todo lo que aplicar en tu tienda priorizado por impacto en ventas.
                </Typography>
              </Paper>
            </Reveal>
          </Container>
        </Box>
      </Box>
      <SiteFooter />
    </Box>
  )
}
