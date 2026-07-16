"use client"

import Link from "next/link"
import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import Paper from "@mui/material/Paper"
import { tokens, fonts } from "@/lib/mui/theme"
import { SiteHeader, SiteFooter, DiagnosticoCTA, Blueprint, Reveal, PrimaryCTA, Crumbs } from "@/components/mui/shared"
import { MareaMock, ShopifyPhone, TotfinestraMock, StoreTemplate, GeoAnswer, RoasChart, ConversionChart, N8nFlow } from "@/components/mui/artifacts"
import BrandCaseCard from "@/components/mui/BrandCaseCard"
import { SERVICES, casesByService, casePhoto, caseVertical, type Caso, type ArtKey } from "@/lib/casesEcom"

function Artifact({ art }: { art: ArtKey }) {
  if (art === "geo") return <GeoAnswer />
  if (art === "roas") return <RoasChart />
  if (art === "conversion") return <ConversionChart />
  if (art === "n8n") return <N8nFlow />
  if (art === "shopify") return <Box sx={{ display: "grid", placeItems: "center", height: "100%" }}><Box sx={{ transform: "scale(.6)" }}><ShopifyPhone /></Box></Box>
  return <StoreTemplate />
}

export function CaseVisualBox({ caso }: { caso: Caso }) {
  if ("mock" in caso.visual) {
    if (caso.visual.mock === "marea") return <Box sx={{ width: "100%", height: "100%" }}><MareaMock /></Box>
    if (caso.visual.mock === "totfinestra") return <Box sx={{ width: "100%", height: "100%" }}><TotfinestraMock /></Box>
    return (
      <Box sx={{ width: "100%", height: "100%", display: "grid", placeItems: "center" }}>
        <Box sx={{ transform: "scale(.6)" }}><ShopifyPhone /></Box>
      </Box>
    )
  }
  if ("art" in caso.visual) {
    return <Box sx={{ width: "100%", height: "100%" }}><Artifact art={caso.visual.art} /></Box>
  }
  return (
    <Box sx={{ width: "100%", height: "100%", display: "grid", placeItems: "center", p: 3 }}>
      <Box
        component="img"
        src={caso.visual.logo}
        alt={caso.client}
        sx={{ maxWidth: "68%", maxHeight: "68%", objectFit: "contain", filter: "grayscale(0.15)" }}
      />
    </Box>
  )
}

function Hero() {
  return (
    <Box component="section" sx={{ position: "relative", overflow: "hidden", borderBottom: `1px solid ${tokens.lineSoft}` }}>
      <Blueprint />
      <Container sx={{ position: "relative", zIndex: 1, py: { xs: 7, md: 11 } }}>
        <Reveal>
          <Typography variant="h1" sx={{ fontSize: { xs: 34, sm: 44, lg: 54 }, color: tokens.ink, mb: 3, maxWidth: 760 }}>
            Trabajo en producción, por servicio.
          </Typography>
          <Typography variant="body1" sx={{ fontSize: { xs: 16, md: 18 }, color: tokens.body, maxWidth: 580 }}>
            Tiendas creciendo, operativas automatizadas y plataformas a medida. Publico cifras cuando el cliente las confirma.
          </Typography>
        </Reveal>
      </Container>
    </Box>
  )
}


function ServiceGroup({ serviceKey }: { serviceKey: (typeof SERVICES)[number] }) {
  const list = casesByService(serviceKey.key)
  if (list.length === 0) return null
  return (
    <Box component="section" sx={{ py: { xs: 7, md: 10 }, borderBottom: `1px solid ${tokens.lineSoft}` }}>
      <Container>
        <Reveal>
          <Stack direction={{ xs: "column", sm: "row" }} sx={{ justifyContent: "space-between", alignItems: { sm: "flex-end" }, gap: 2, mb: { xs: 4, md: 5 } }}>
            <Box>
              <Typography variant="h2" sx={{ fontSize: { xs: 26, md: 36 }, color: tokens.ink }}>{serviceKey.label}</Typography>
              <Typography variant="body1" sx={{ color: tokens.muted, mt: 1, maxWidth: 480 }}>{serviceKey.blurb}</Typography>
            </Box>
            <Typography component={Link} href={serviceKey.href} sx={{ fontFamily: fonts.mono, fontSize: 12.5, fontWeight: 600, color: tokens.ink, textDecoration: "none", whiteSpace: "nowrap", "&:hover": { color: tokens.petrol } }}>
              Ver el servicio <Box component="span" sx={{ color: tokens.petrol }}>↗</Box>
            </Typography>
          </Stack>
        </Reveal>
      </Container>
      {/* xs/sm: carrusel snap horizontal a sangre; md+: grid original de 3 columnas (ancho igual al Container via px calculado) */}
      <Box
        sx={{
          display: { xs: "flex", md: "grid" },
          gridTemplateColumns: { md: "repeat(3, 1fr)" },
          gap: { xs: 2, md: 2.5 },
          px: { xs: 3, md: "max(24px, calc((100vw - 1120px) / 2 + 24px))" },
          overflowX: { xs: "auto", md: "visible" },
          scrollSnapType: { xs: "x mandatory", md: "none" },
          pb: { xs: 1, md: 0 },
          scrollbarWidth: "none",
          "&::-webkit-scrollbar": { display: "none" },
        }}
      >
        {list.map((c, i) => (
          <Box key={c.slug} sx={{ scrollSnapAlign: "start", flexShrink: 0, width: { xs: "74vw", sm: 340, md: "auto" }, minWidth: { md: 0 }, flex: { md: "initial" } }}>
            <Reveal delay={(i % 3) * 0.07}>
              <BrandCaseCard name={c.client} vertical={caseVertical(c)} href={`/casos-de-exito/${c.slug}`} photo={casePhoto(c)} />
            </Reveal>
          </Box>
        ))}
      </Box>
    </Box>
  )
}

function Intro() {
  return (
    <Box component="section" sx={{ py: { xs: 8, md: 11 } }}>
      <Container sx={{ textAlign: "center", maxWidth: 680 }}>
        <Reveal>
          <Typography variant="h2" sx={{ fontSize: { xs: 24, md: 32 }, color: tokens.ink, mb: 2 }}>
            ¿Tu proyecto podría ser el próximo caso?
          </Typography>
          <Typography variant="body1" sx={{ color: tokens.body, mb: 4 }}>
            Empiezo siempre por un diagnóstico: dónde se te escapan las ventas o el tiempo, y qué palancas mueven la aguja.
          </Typography>
          <PrimaryCTA />
          <Box sx={{ mt: 6, borderRadius: 3, border: `1px dashed ${tokens.line}`, p: 4 }}>
            <Typography sx={{ fontFamily: fonts.mono, fontSize: 12, color: tokens.muted }}>
              {`// [[ testimonios reales: nombre · cargo · foto ]]`}
            </Typography>
          </Box>
        </Reveal>
      </Container>
    </Box>
  )
}

export default function CasosMui() {
  return (
    <Box sx={{ bgcolor: tokens.paper, color: tokens.body, fontFamily: fonts.sans }}>
      <SiteHeader />
      <Crumbs items={[{ label: "Casos de éxito" }]} />
      <Hero />
      {SERVICES.map((s) => <ServiceGroup key={s.key} serviceKey={s} />)}
      <Intro />
      <DiagnosticoCTA />
      <SiteFooter />
    </Box>
  )
}
