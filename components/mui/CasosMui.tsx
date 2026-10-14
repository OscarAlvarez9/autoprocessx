"use client"

import Link from "@/components/LocaleLink"
import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import Paper from "@mui/material/Paper"
import { tokens, fonts } from "@/lib/mui/theme"
import { SiteHeader, SiteFooter, DiagnosticoCTA, Blueprint, Reveal, HeroReveal, PrimaryCTA, Crumbs } from "@/components/mui/shared"
import { MareaMock, ShopifyPhone, TotfinestraMock, StoreTemplate, GeoAnswer, RoasChart, ConversionChart, N8nFlow } from "@/components/mui/artifacts"
import BrandCaseCard from "@/components/mui/BrandCaseCard"
import { useLocale } from "@/components/LocaleProvider"
import { servicesFor, casesByService, casePhoto, caseVertical, type Caso, type ArtKey } from "@/lib/casesEcom"

const T = {
  es: {
    h1: "Trabajo en producción, por servicio.",
    lead: "Tiendas creciendo, operativas automatizadas y plataformas a medida. Publico cifras cuando el cliente las confirma.",
    verServicio: "Ver el servicio",
    introTitle: "¿Tu proyecto podría ser el próximo caso?",
    introBody: "Empiezo siempre por un diagnóstico: dónde se te escapan las ventas o el tiempo, y qué palancas mueven la aguja.",
    crumb: "Casos de éxito",
  },
  ca: {
    h1: "Feina en producció, per servei.",
    lead: "Botigues que creixen, operatives automatitzades i plataformes a mida. Publico xifres quan el client les confirma.",
    verServicio: "Veure el servei",
    introTitle: "El teu projecte podria ser el pròxim cas?",
    introBody: "Començo sempre per un diagnòstic: on se t'escapen les vendes o el temps, i quines palanques mouen l'agulla.",
    crumb: "Casos d'èxit",
  },
}

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
  const t = T[useLocale()]
  return (
    <Box component="section" sx={{ position: "relative", overflow: "hidden", borderBottom: `1px solid ${tokens.lineSoft}` }}>
      <Blueprint />
      <Container sx={{ position: "relative", zIndex: 1, py: { xs: 7, md: 11 } }}>
        <HeroReveal>
          <Typography variant="h1" sx={{ fontSize: { xs: 34, sm: 44, lg: 54 }, color: tokens.ink, mb: 3, maxWidth: 760 }}>
            {t.h1}
          </Typography>
          <Typography variant="body1" sx={{ fontSize: { xs: 16, md: 18 }, color: tokens.body, maxWidth: 580 }}>
            {t.lead}
          </Typography>
        </HeroReveal>
      </Container>
    </Box>
  )
}


function ServiceGroup({ serviceKey }: { serviceKey: ReturnType<typeof servicesFor>[number] }) {
  const locale = useLocale()
  const t = T[locale]
  const list = casesByService(serviceKey.key, locale)
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
              {t.verServicio} <Box component="span" sx={{ color: tokens.petrol }}>↗</Box>
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
              <BrandCaseCard name={c.client} vertical={caseVertical(c, locale)} href={`/casos-de-exito/${c.slug}`} photo={casePhoto(c)} />
            </Reveal>
          </Box>
        ))}
      </Box>
    </Box>
  )
}

function Intro() {
  const t = T[useLocale()]
  return (
    <Box component="section" sx={{ py: { xs: 8, md: 11 } }}>
      <Container sx={{ textAlign: "center", maxWidth: 680 }}>
        <Reveal>
          <Typography variant="h2" sx={{ fontSize: { xs: 24, md: 32 }, color: tokens.ink, mb: 2 }}>
            {t.introTitle}
          </Typography>
          <Typography variant="body1" sx={{ color: tokens.body, mb: 4 }}>
            {t.introBody}
          </Typography>
          <PrimaryCTA />
        </Reveal>
      </Container>
    </Box>
  )
}

export default function CasosMui() {
  const locale = useLocale()
  return (
    <Box sx={{ bgcolor: tokens.paper, color: tokens.body, fontFamily: fonts.sans }}>
      <SiteHeader />
      <Crumbs items={[{ label: T[locale].crumb }]} />
      <Hero />
      {servicesFor(locale).map((s) => <ServiceGroup key={s.key} serviceKey={s} />)}
      <Intro />
      <DiagnosticoCTA />
      <SiteFooter />
    </Box>
  )
}
