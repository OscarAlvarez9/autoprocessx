"use client"

import Link from "@/components/LocaleLink"
import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import Accordion from "@mui/material/Accordion"
import AccordionSummary from "@mui/material/AccordionSummary"
import AccordionDetails from "@mui/material/AccordionDetails"
import { tokens, fonts } from "@/lib/mui/theme"
import { SiteHeader, SiteFooter, DiagnosticoCTA, PrimaryCTA, Reveal, HeroReveal, Crumbs, Blueprint, ArtifactWindow } from "@/components/mui/shared"

const linkSx = { color: tokens.ink, fontWeight: 600, textDecoration: "underline", textDecorationColor: tokens.line, "&:hover": { textDecorationColor: tokens.petrol } } as const

// Fuente de todas las cifras: Idescat, El municipio en cifras, código 081727
// (Premià de Mar). Comprobadas en la API de Idescat el 14/10/2026.
const IDESCAT = "https://www.idescat.cat/emex/?id=081727&lang=ca"

// Densidad de población 2025, hab./km².
const DENSIDAD = [
  { label: "Premià de Mar", value: 13909, txt: "13.909" },
  { label: "Maresme", value: 1197.8, txt: "1.197,8" },
  { label: "Catalunya", value: 253, txt: "253" },
]

const CIFRAS: { n: string; t: string }[] = [
  { n: "29.348", t: "habitants el 2025" },
  { n: "2,11 km²", t: "de terme municipal" },
  { n: "1.900", t: "autònoms donats d'alta (juny 2026, provisional)" },
  { n: "47 %", t: "de l'ocupació assalariada és en comptes de fins a 9 treballadors" },
]

const PASOS: [string, string][] = [
  ["Diagnòstic", "Reviso el teu web, la teva fitxa de Google i les cerques que t'interessen. En 24-48 h tens què faria i en quin ordre."],
  ["Pla curt", "Poques accions, prioritzades pel que més pot moure els teus contactes. Amb preu tancat després del diagnòstic."],
  ["Feina feta", "Els canvis els faig jo sobre el teu web i la teva fitxa. Tu els veus aplicats i t'explico què ha canviat."],
]

function DensityChart() {
  const max = DENSIDAD[0].value
  return (
    <ArtifactWindow tag="habitants per km² · 2025" ratio="4 / 3">
      <Box sx={{ height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", gap: 2 }}>
        <Typography sx={{ fontFamily: fonts.serif, fontSize: { xs: 18, md: 20 }, fontWeight: 600, color: tokens.ink, lineHeight: 1.25 }}>
          Premià de Mar té gairebé dotze vegades la densitat mitjana del Maresme
        </Typography>
        <Box sx={{ display: "flex", alignItems: "flex-end", gap: { xs: 2, md: 3 }, flex: 1, minHeight: 120, borderBottom: `1px solid ${tokens.line}`, px: 1 }}>
          {DENSIDAD.map((d, i) => (
            <Box key={d.label} sx={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-end", height: "100%" }}>
              <Typography sx={{ fontFamily: fonts.mono, fontSize: 11.5, fontWeight: 700, color: i === 0 ? tokens.petrol : tokens.body, mb: 0.75 }}>{d.txt}</Typography>
              <Box sx={{ width: "70%", height: `${Math.max((d.value / max) * 100, 2.5)}%`, bgcolor: i === 0 ? tokens.petrol : `${tokens.petrol}55`, borderRadius: "6px 6px 0 0" }} />
            </Box>
          ))}
        </Box>
        <Stack direction="row" sx={{ gap: { xs: 2, md: 3 }, px: 1 }}>
          {DENSIDAD.map((d) => (
            <Typography key={d.label} sx={{ flex: 1, textAlign: "center", fontSize: 12, color: tokens.muted }}>{d.label}</Typography>
          ))}
        </Stack>
        <Typography component="a" href={IDESCAT} target="_blank" rel="noopener" sx={{ fontFamily: fonts.mono, fontSize: 10, color: tokens.muted, textDecoration: "underline", textDecorationColor: tokens.line }}>
          font: Idescat, El municipi en xifres
        </Typography>
      </Box>
    </ArtifactWindow>
  )
}

function Hero() {
  return (
    <Box component="section" sx={{ position: "relative", overflow: "hidden", borderBottom: `1px solid ${tokens.lineSoft}` }}>
      <Blueprint />
      <Box sx={{ position: "relative", zIndex: 1 }}>
        <Crumbs items={[{ label: "SEO al Maresme", href: "/agencia-seo-maresme" }, { label: "Consultor SEO a Premià de Mar" }]} />
        <Container sx={{ pt: { xs: 3, md: 4 }, pb: { xs: 8, md: 11 } }}>
          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "0.95fr 1.05fr" }, gap: { xs: 5, md: 8 }, alignItems: "center" }}>
            <HeroReveal>
              <Box>
                <Typography variant="h1" sx={{ fontSize: { xs: 34, sm: 46, md: 54 }, letterSpacing: "-0.025em", color: tokens.ink, mb: 3 }}>
                  Consultor SEO a <Box component="em" sx={{ fontStyle: "italic", color: tokens.petrol }}>Premià de Mar</Box>
                </Typography>
                <Typography variant="body1" sx={{ fontSize: { xs: 16, md: 18 }, color: tokens.body, maxWidth: 520, mb: 3.5 }}>
                  Premià de Mar és la meva base. Des d&apos;aquí ajudo autònoms, comerços i petites empreses perquè els trobin quan algú busca el que fan, a Google, al mapa i a ChatGPT. Sense intermediaris: la feina la faig jo.
                </Typography>
                <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ alignItems: { sm: "center" }, flexWrap: "wrap", rowGap: 1 }}>
                  <PrimaryCTA />
                  <Typography variant="body2" sx={{ color: tokens.muted }}>Sense compromís, resposta en 24-48 h.</Typography>
                </Stack>
              </Box>
            </HeroReveal>
            <Reveal delay={0.1}>
              <DensityChart />
            </Reveal>
          </Box>
        </Container>
      </Box>
    </Box>
  )
}

// Cifras grandes en fila: familia de layout distinta a las demás secciones.
function Cifras() {
  return (
    <Box component="section" sx={{ py: { xs: 8, md: 12 }, borderBottom: `1px solid ${tokens.lineSoft}` }}>
      <Container>
        <Reveal>
          <Typography variant="h2" sx={{ fontSize: { xs: 28, md: 40 }, color: tokens.ink, mb: 2, maxWidth: 700 }}>
            Un municipi petit, molt dens i de negoci petit
          </Typography>
          <Typography variant="body1" sx={{ fontSize: { xs: 16, md: 18 }, color: tokens.body, mb: { xs: 5, md: 7 }, maxWidth: 680 }}>
            A Premià de Mar gairebé no hi ha grans empreses: segons l&apos;Idescat, cap compte de cotització del municipi no té 250 treballadors o més. El que hi ha són autònoms i microempreses, la majoria de serveis, en molt poc territori.
          </Typography>
        </Reveal>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr 1fr", md: "repeat(4, 1fr)" }, gap: { xs: 3, md: 4 } }}>
          {CIFRAS.map((c, i) => (
            <Reveal key={c.t} delay={i * 0.05}>
              <Box sx={{ borderLeft: `2px solid ${tokens.petrol}`, pl: 2 }}>
                <Typography sx={{ fontFamily: fonts.serif, fontSize: { xs: 28, md: 38 }, fontWeight: 600, color: tokens.ink, lineHeight: 1.1, mb: 0.75 }}>{c.n}</Typography>
                <Typography variant="body2" sx={{ color: tokens.body }}>{c.t}</Typography>
              </Box>
            </Reveal>
          ))}
        </Box>
        <Typography variant="body2" sx={{ color: tokens.muted, mt: { xs: 4, md: 5 } }}>
          Dades de l&apos;<Box component="a" href={IDESCAT} target="_blank" rel="noopener" sx={linkSx}>Idescat, El municipi en xifres: Premià de Mar</Box>. Dels 2.800 llocs de treball assalariats en empreses del municipi, 2.435 són de serveis (87 %), i dels 1.900 autònoms, 1.545 (81 %).
        </Typography>
      </Container>
    </Box>
  )
}

function Pequeno() {
  return (
    <Box component="section" sx={{ py: { xs: 8, md: 12 }, borderBottom: `1px solid ${tokens.lineSoft}`, bgcolor: tokens.surface }}>
      <Container sx={{ maxWidth: 820 }}>
        <Reveal>
          <Typography variant="h2" sx={{ fontSize: { xs: 28, md: 40 }, color: tokens.ink, mb: 3 }}>
            Què vol dir això per al teu SEO
          </Typography>
        </Reveal>
        <Reveal delay={0.05}>
          <Typography variant="body1" sx={{ fontSize: { xs: 16, md: 18 }, color: tokens.body, mb: 2.5 }}>
            Quan un negoci és d&apos;una o dues persones, ningú no té temps d&apos;escriure articles cada setmana ni de barallar-se amb el web. Per això començo pel que dona més amb menys esforç: la fitxa de Google Business completa, amb les categories ben triades, fotos reals i resposta a cada ressenya.
          </Typography>
        </Reveal>
        <Reveal delay={0.1}>
          <Typography variant="body1" sx={{ fontSize: { xs: 16, md: 18 }, color: tokens.body, mb: 2.5 }}>
            Amb un terme municipal de 2,11 km², qui busca des de Premià també veu negocis dels pobles del costat. Al diagnòstic comprovo per a quines cerques hi apareixes tu i per a quines hi apareix un altre, i si el teu web deixa clar a quina zona dones servei.
          </Typography>
        </Reveal>
        <Reveal delay={0.15}>
          <Typography variant="body1" sx={{ fontSize: { xs: 16, md: 18 }, color: tokens.body }}>
            Si a més vens en línia, la feina canvia: fitxes de producte, categories i velocitat. És la meva especialitat, a <Box component={Link} href="/agencia-woocommerce" sx={linkSx}>WooCommerce</Box> i a <Box component={Link} href="/agencia-shopify" sx={linkSx}>Shopify</Box>.
          </Typography>
        </Reveal>
      </Container>
    </Box>
  )
}

function Cercano() {
  return (
    <Box component="section" sx={{ py: { xs: 8, md: 12 }, borderBottom: `1px solid ${tokens.lineSoft}` }}>
      <Container>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap: { xs: 3, md: 8 }, alignItems: "start" }}>
          <Reveal>
            <Typography variant="h2" sx={{ fontSize: { xs: 28, md: 38 }, color: tokens.ink }}>
              Un projecte d&apos;aquí al costat, a Canet de Mar
            </Typography>
          </Reveal>
          <Reveal delay={0.08}>
            <Box>
              <Typography variant="body1" sx={{ color: tokens.body, mb: 2 }}>
                La Clínica de la Ansiedad tenia un web que no portava pacients i que ni tan sols estava donat d&apos;alta a Search Console. Li vaig fer un web nou, pàgines pensades per al que busquen els pacients, un blog amb pla editorial i mesura de cada clic a Reservar i a WhatsApp.
              </Typography>
              <Typography variant="body1" sx={{ color: tokens.body, mb: 2.5 }}>
                El primer mes amb l&apos;estratègia assentada, 11 de 51 visitants van prémer Reservar.
              </Typography>
              <Box component={Link} href="/casos-de-exito/clinica-de-la-ansiedad" sx={linkSx}>Veure el cas complet</Box>
            </Box>
          </Reveal>
        </Box>
      </Container>
    </Box>
  )
}

function Pasos() {
  return (
    <Box component="section" sx={{ py: { xs: 8, md: 12 }, borderBottom: `1px solid ${tokens.lineSoft}` }}>
      <Container>
        <Reveal>
          <Typography variant="h2" sx={{ fontSize: { xs: 28, md: 40 }, color: tokens.ink, mb: { xs: 4, md: 6 }, maxWidth: 640 }}>
            Com comencem
          </Typography>
        </Reveal>
        <Box component="ol" sx={{ listStyle: "none", p: 0, m: 0, display: "grid", gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" }, gap: { xs: 3, md: 0 } }}>
          {PASOS.map(([t, d], i) => (
            <Reveal key={t} delay={i * 0.06}>
              <Box component="li" sx={{ pr: { md: 4 }, pl: { md: i === 0 ? 0 : 4 }, borderLeft: { md: i === 0 ? "none" : `1px solid ${tokens.lineSoft}` }, height: "100%" }}>
                <Typography aria-hidden sx={{ fontFamily: fonts.mono, fontSize: 12, fontWeight: 700, color: tokens.petrol, mb: 1 }}>{`pas ${i + 1}`}</Typography>
                <Typography component="h3" sx={{ fontFamily: fonts.serif, fontSize: { xs: 20, md: 22 }, fontWeight: 600, color: tokens.ink, mb: 1 }}>{t}</Typography>
                <Typography variant="body1" sx={{ color: tokens.body }}>{d}</Typography>
              </Box>
            </Reveal>
          ))}
        </Box>
      </Container>
    </Box>
  )
}

function Faq({ faqs }: { faqs: [string, string][] }) {
  return (
    <Box component="section" sx={{ py: { xs: 8, md: 12 }, borderBottom: `1px solid ${tokens.lineSoft}` }}>
      <Container sx={{ maxWidth: 760 }}>
        <Reveal>
          <Typography variant="h2" sx={{ fontSize: { xs: 28, md: 40 }, color: tokens.ink, mb: { xs: 4, md: 6 } }}>
            Dubtes habituals
          </Typography>
        </Reveal>
        {faqs.map(([q, a]) => (
          <Accordion key={q} disableGutters elevation={0} sx={{ bgcolor: "transparent", borderBottom: `1px solid ${tokens.lineSoft}`, "&:before": { display: "none" } }}>
            <AccordionSummary sx={{ px: 0 }}>
              <Typography component="h3" sx={{ fontFamily: fonts.serif, fontSize: { xs: 17, md: 19 }, fontWeight: 600, color: tokens.ink }}>{q}</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ px: 0, pb: 3 }}>
              <Typography variant="body1" sx={{ color: tokens.body }}>{a}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
        <Typography variant="body1" sx={{ color: tokens.body, mt: { xs: 5, md: 6 } }}>
          El teu negoci és en un altre municipi? Tinc pàgines per a <Box component={Link} href="/consultor-seo-mataro" sx={linkSx}>Mataró</Box>, per a la <Box component={Link} href="/agencia-seo-maresme" sx={linkSx}>resta del Maresme</Box> i per a <Box component={Link} href="/consultor-seo-barcelona" sx={linkSx}>Barcelona</Box>.
        </Typography>
      </Container>
    </Box>
  )
}

export default function PremiaMuiCa({ faqs }: { faqs: [string, string][] }) {
  return (
    <Box sx={{ bgcolor: tokens.paper, color: tokens.body, fontFamily: fonts.sans }}>
      <SiteHeader />
      <Box component="main">
        <Hero />
        <Cifras />
        <Pequeno />
        <Cercano />
        <Pasos />
        <Faq faqs={faqs} />
        <DiagnosticoCTA />
      </Box>
      <SiteFooter />
    </Box>
  )
}
