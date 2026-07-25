"use client"

import Link from "next/link"
import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import { tokens, fonts } from "@/lib/mui/theme"
import { SiteHeader, SiteFooter, DiagnosticoCTA, Reveal, Crumbs, Blueprint, ArtifactWindow } from "@/components/mui/shared"

const linkSx = { color: tokens.ink, fontWeight: 600, textDecoration: "underline", textDecorationColor: tokens.line, "&:hover": { textDecorationColor: tokens.petrol } } as const

// Pines de las cuatro comarcas sobre un mapa estilizado (no geográfico exacto):
// costa al SE, tierra al NW. Numerados para casar con la leyenda de abajo.
const ZONAS = [
  { n: 1, comarca: "Maresme", ciudad: "Mataró y alrededores", x: 92, y: 60 },
  { n: 2, comarca: "Bages", ciudad: "Manresa", x: 40, y: 40 },
  { n: 3, comarca: "Vallès Oriental", ciudad: "Sant Celoni", x: 66, y: 52 },
  { n: 4, comarca: "Barcelona", ciudad: "área metropolitana", x: 74, y: 90 },
]

const TRUST = ["Consultor catalán", "Atiendo en català", "Sin intermediarios", "Diagnóstico gratis"]

const INCLUYE: [string, React.ReactNode][] = [
  ["Google Business y reseñas", "Ficha de Google Business optimizada y reseñas trabajadas: que aparezcas en el mapa y que lo que se ve invite a contactarte."],
  ["Contenido de tu zona", "Páginas y contenido orientados a las búsquedas reales de tu comarca, no a keywords genéricas de manual."],
  ["Técnico y conversión", "SEO técnico y de conversión, no solo aparecer: que quien te encuentra te acabe contratando."],
  ["Puente local y ecommerce", <>Y si tu negocio también vende online, el puente entre lo local y el <Box component={Link} href="/servicios/crecimiento-ecommerce" sx={linkSx}>ecommerce</Box>, sobre tu misma plataforma.</>],
]

function CatMap() {
  return (
    <ArtifactWindow tag="zonas · catalunya" ratio="1 / 1">
      <Box sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
        <Box sx={{ flex: 1, minHeight: 0, position: "relative" }}>
          <Box component="svg" viewBox="0 0 130 120" sx={{ width: "100%", height: "100%" }} aria-hidden>
            {/* tierra */}
            <path d="M22 34 Q14 60 26 86 Q40 108 66 108 Q92 104 104 78 Q110 60 96 42 Q78 24 48 26 Q30 26 22 34 Z" fill={tokens.surface} stroke={tokens.line} strokeWidth="1.4" strokeLinejoin="round" />
            {/* costa (SE), acento pino */}
            <path d="M104 78 Q86 100 66 108" fill="none" stroke={`${tokens.petrol}88`} strokeWidth="2" strokeLinecap="round" />
            <path d="M108 84 Q112 88 110 93 M114 90 Q118 94 116 99" fill="none" stroke={`${tokens.petrol}44`} strokeWidth="1.2" strokeLinecap="round" />
            {/* pines */}
            {ZONAS.map((z) => (
              <g key={z.n}>
                <circle cx={z.x} cy={z.y} r="8" fill="none" stroke={`${tokens.petrol}33`} strokeWidth="1.2" />
                <circle cx={z.x} cy={z.y} r="4.6" fill={tokens.petrol} />
                <text x={z.x} y={z.y + 3.1} textAnchor="middle" fill={tokens.paper} style={{ fontFamily: fonts.mono, fontSize: "7px", fontWeight: 700 }}>{z.n}</text>
              </g>
            ))}
          </Box>
        </Box>
        {/* leyenda */}
        <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 0.75, mt: 1, pt: 1, borderTop: `1px solid ${tokens.lineSoft}` }}>
          {ZONAS.map((z) => (
            <Stack key={z.n} direction="row" spacing={0.75} sx={{ alignItems: "center", minWidth: 0 }}>
              <Box sx={{ width: 15, height: 15, flexShrink: 0, borderRadius: 999, bgcolor: tokens.petrol, display: "grid", placeItems: "center" }}>
                <Typography sx={{ fontFamily: fonts.mono, fontSize: 8.5, fontWeight: 700, color: tokens.paper }}>{z.n}</Typography>
              </Box>
              <Box sx={{ minWidth: 0 }}>
                <Typography sx={{ fontSize: 11, fontWeight: 700, color: tokens.ink, lineHeight: 1.15, whiteSpace: "nowrap" }}>{z.comarca}</Typography>
                <Typography sx={{ fontFamily: fonts.mono, fontSize: 8.5, color: tokens.muted, lineHeight: 1.15, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{z.ciudad}</Typography>
              </Box>
            </Stack>
          ))}
        </Box>
      </Box>
    </ArtifactWindow>
  )
}

function Hero() {
  return (
    <Box component="section" sx={{ position: "relative", overflow: "hidden", borderBottom: `1px solid ${tokens.lineSoft}` }}>
      <Blueprint />
      <Container sx={{ position: "relative", zIndex: 1, pt: { xs: 5, md: 7 }, pb: { xs: 8, md: 11 } }}>
        <Crumbs items={[{ label: "SEO local en Catalunya" }]} />
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1.08fr 0.92fr" }, gap: { xs: 5, md: 8 }, alignItems: "center", mt: { xs: 2, md: 3 } }}>
          <Reveal>
            <Box>
              <Typography variant="h1" sx={{ fontSize: { xs: 32, sm: 44, md: 54 }, letterSpacing: "-0.025em", color: tokens.ink, mb: 3 }}>
                SEO local en Catalunya, de alguien que <Box component="em" sx={{ fontStyle: "italic", color: tokens.petrol }}>es de aquí</Box>.
              </Typography>
              <Typography variant="body1" sx={{ fontSize: { xs: 16, md: 18 }, color: tokens.body, maxWidth: 540, mb: 3.5 }}>
                Soy Oscar, consultor SEO catalán. Trabajo con negocios de toda Catalunya, del Maresme a Barcelona, y la diferencia de trabajar con alguien de la zona es simple: entiendo tu mercado, tu competencia local y a tu cliente, porque son los míos. Sin intermediarios y sin agencia de mil clientes: hablas conmigo, y si lo prefieres, en català.
              </Typography>
              <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ alignItems: { sm: "center" }, mb: 3.5 }}>
                <Button component={Link} href="/diagnostico" variant="contained" color="primary" sx={{ borderRadius: 2, width: { xs: "100%", sm: "auto" } }}>
                  Reserva tu diagnóstico gratis <Box component="span" sx={{ ml: 0.75 }}>→</Box>
                </Button>
              </Stack>
              <Stack direction="row" spacing={1} sx={{ flexWrap: "wrap", rowGap: 1 }}>
                {TRUST.map((t) => (
                  <Typography key={t} sx={{ fontFamily: fonts.mono, fontSize: 11.5, color: tokens.body, px: 1.25, py: 0.5, borderRadius: 999, border: `1px solid ${tokens.lineSoft}`, bgcolor: tokens.win }}>{t}</Typography>
                ))}
              </Stack>
            </Box>
          </Reveal>
          <Reveal delay={0.1}>
            <CatMap />
          </Reveal>
        </Box>
      </Container>
    </Box>
  )
}

function Zonas() {
  return (
    <Box component="section" sx={{ py: { xs: 8, md: 12 }, borderBottom: `1px solid ${tokens.lineSoft}` }}>
      <Container>
        <Reveal>
          <Typography variant="h2" sx={{ fontSize: { xs: 28, md: 40 }, color: tokens.ink, mb: 2, maxWidth: 620 }}>
            Zonas donde trabajo.
          </Typography>
          <Typography variant="body1" sx={{ fontSize: { xs: 16, md: 18 }, color: tokens.body, maxWidth: 720, mb: { xs: 5, md: 7 } }}>
            He ayudado a negocios del <Box component="span" sx={{ color: tokens.ink, fontWeight: 700 }}>Maresme</Box> (Mataró y alrededores), del <Box component="span" sx={{ color: tokens.ink, fontWeight: 700 }}>Bages</Box> (Manresa), del <Box component="span" sx={{ color: tokens.ink, fontWeight: 700 }}>Vallès Oriental</Box> (Sant Celoni) y del área de <Box component="span" sx={{ color: tokens.ink, fontWeight: 700 }}>Barcelona</Box> a aparecer donde su cliente los busca. Cada zona tiene su competencia y su intención de búsqueda propia (no es lo mismo posicionar un comercio en Mataró que un ecommerce que vende a toda España), y esa lectura local es la que marca la diferencia. Como hice con <Box component={Link} href="/casos-de-exito/totfinestra" sx={linkSx}>Totfinestra</Box>, carpintería de aluminio del área de Barcelona.
          </Typography>
        </Reveal>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "repeat(4, 1fr)" }, gap: { xs: 3, md: 3 } }}>
          {ZONAS.map((z, i) => (
            <Reveal key={z.n} delay={i * 0.06}>
              <Box sx={{ borderTop: `2px solid ${tokens.line}`, pt: 2.5 }}>
                <Typography sx={{ fontFamily: fonts.mono, fontSize: 12, color: tokens.petrol, mb: 1 }}>{`0${z.n}`}</Typography>
                <Typography component="h3" sx={{ fontFamily: fonts.serif, fontSize: 20, fontWeight: 600, color: tokens.ink, mb: 0.5 }}>{z.comarca}</Typography>
                <Typography sx={{ fontFamily: fonts.mono, fontSize: 12.5, color: tokens.muted }}>{z.ciudad}</Typography>
              </Box>
            </Reveal>
          ))}
        </Box>
      </Container>
    </Box>
  )
}

function Incluye() {
  return (
    <Box component="section" sx={{ py: { xs: 8, md: 12 }, borderBottom: `1px solid ${tokens.lineSoft}` }}>
      <Container>
        <Reveal>
          <Typography variant="h2" sx={{ fontSize: { xs: 28, md: 40 }, color: tokens.ink, mb: 2, maxWidth: 620 }}>
            Qué incluye el SEO local.
          </Typography>
          <Typography variant="body1" sx={{ fontSize: { xs: 16, md: 18 }, color: tokens.body, maxWidth: 620, mb: { xs: 5, md: 7 } }}>
            No es solo salir en el mapa. Es que el que te busca en tu zona te encuentre, se fíe y te contrate.
          </Typography>
        </Reveal>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap: { xs: 3, md: 4 } }}>
          {INCLUYE.map(([t, d], i) => (
            <Reveal key={t} delay={(i % 2) * 0.06}>
              <Box sx={{ borderTop: `2px solid ${tokens.line}`, pt: 2.5 }}>
                <Typography sx={{ fontFamily: fonts.mono, fontSize: 12, color: tokens.petrol, mb: 1 }}>{`0${i + 1}`}</Typography>
                <Typography component="h3" sx={{ fontFamily: fonts.serif, fontSize: 21, fontWeight: 600, color: tokens.ink, mb: 1 }}>{t}</Typography>
                <Typography variant="body1" sx={{ color: tokens.body, maxWidth: 480 }}>{d}</Typography>
              </Box>
            </Reveal>
          ))}
        </Box>
        <Reveal>
          <Typography variant="body2" sx={{ color: tokens.muted, mt: { xs: 4, md: 5 }, maxWidth: 640 }}>
            ¿Quieres el mapa completo antes de tocar nada? Es lo que te da una <Box component={Link} href="/servicios/auditoria-seo-geo" sx={linkSx}>auditoría SEO</Box> y GEO de tu tienda o tu web.
          </Typography>
        </Reveal>
      </Container>
    </Box>
  )
}

export default function SeoCatalunyaMui() {
  return (
    <Box sx={{ bgcolor: tokens.paper, color: tokens.body, fontFamily: fonts.sans }}>
      <SiteHeader />
      <Hero />
      <Zonas />
      <Incluye />
      <DiagnosticoCTA />
      <SiteFooter />
    </Box>
  )
}
