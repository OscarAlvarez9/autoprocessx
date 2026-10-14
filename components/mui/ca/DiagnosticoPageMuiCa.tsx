"use client"

import Link from "@/components/LocaleLink"
import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import Paper from "@mui/material/Paper"
import { tokens, fonts } from "@/lib/mui/theme"
import { SiteHeader, SiteFooter, Blueprint, Reveal, HeroReveal, DiagnosticoFlow, Crumbs } from "@/components/mui/shared"

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
  "On se t'escapen les vendes avui, amb noms i cognoms.",
  "Un pla ordenat per impacte en vendes, no una llista genèrica.",
  "Sobre la teva plataforma actual. No et faig migrar.",
  "Resposta humana en 24-48 h, mirant la teva botiga de debò.",
]

const TRUST = ["Sobre la teva plataforma, sense migrar", "El codi és teu", "Sense permanència", "Sense promeses de preu per correu"]

const PASOS = [
  { n: "01", t: "Miro la teva botiga", d: "Abans d'escriure't reviso la teva web de debò. No és una resposta automàtica." },
  { n: "02", t: "T'escric en 24-48 h", d: "Amb els primers senyals de per on se t'estan escapant les vendes." },
  { n: "03", t: "Trucada de diagnòstic", d: "Repasso amb tu trànsit, conversió i operativa. Sense compromís." },
  { n: "04", t: "Pla prioritzat", d: "Et queda un pla ordenat per impacte. L'executis amb mi o pel teu compte." },
]

// Página dedicada del diagnóstico: el flujo conversacional como pieza central,
// con contexto de marca alrededor. Es a donde lleva el CTA de todo el sitio.
export default function DiagnosticoPageMuiCa() {
  return (
    <Box sx={{ bgcolor: tokens.paper, minHeight: "100dvh", display: "flex", flexDirection: "column" }}>
      <SiteHeader />
      <Box component="main" sx={{ flex: 1 }}>
        <Box component="section" sx={{ position: "relative", overflow: "hidden", pt: { xs: 4, md: 6 }, pb: { xs: 8, md: 12 } }}>
          <Blueprint />
          <Container sx={{ position: "relative", zIndex: 1 }}>
            <Crumbs items={[{ label: "Diagnòstic" }]} />
            <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1.02fr 0.98fr" }, gap: { xs: 5, md: 8 }, alignItems: "center", mt: { xs: 2, md: 3 } }}>
              <HeroReveal>
                <Box>
                  <Typography variant="h1" sx={{ fontSize: { xs: 32, sm: 44, md: 54 }, letterSpacing: "-0.025em", color: tokens.ink, mb: 2.5 }}>
                    Reserva el teu <Box component="em" sx={{ fontStyle: "italic", color: tokens.petrol }}>diagnòstic</Box> {"d'ecommerce."}
                  </Typography>
                  <Typography variant="body1" sx={{ fontSize: { xs: 16, md: 18 }, color: tokens.body, maxWidth: 480, mb: 3.5 }}>
                    {"Quatre respostes ràpides, a un clic. Amb això miro la teva botiga i et dic on se t'escapen les vendes, amb un pla clar de trànsit, conversió i automatització."}
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
              </HeroReveal>
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
                Què passa quan ho envies.
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
                  Busques una auditoria SEO gratuïta?
                </Typography>
                <Typography variant="body1" sx={{ fontSize: { xs: 16, md: 18 }, color: tokens.body, mb: 2.5, maxWidth: 640 }}>
                  {"Comença per aquí. El diagnòstic és justament això: respons quatre preguntes, miro la teva botiga a mà i en 24-48 h et dic les tres o quatre coses que més vendes et costen ara mateix. Gratuït, sense compromís i sense bolcats automàtics d'eines."}
                </Typography>
                <Typography variant="body1" sx={{ fontSize: { xs: 16, md: 18 }, color: tokens.body, maxWidth: 640 }}>
                  {"Necessites l'auditoria completa? El diagnòstic t'orienta; l'"}
                  <Box component={Link} href="/servicios/auditoria-seo-geo" sx={linkSx}>auditoria SEO i GEO</Box>{" "}
                  és el document sencer, amb tot el que cal aplicar a la teva botiga prioritzat per impacte en vendes.
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
