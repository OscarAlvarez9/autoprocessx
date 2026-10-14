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
import FeaturedCases from "@/components/mui/FeaturedCases"

const linkSx = { color: tokens.ink, fontWeight: 600, textDecoration: "underline", textDecorationColor: tokens.line, "&:hover": { textDecorationColor: tokens.petrol } } as const

// Fuente de todas las cifras: Idescat, El municipio en cifras, código 080961
// (Granollers). Comprobadas en la API de Idescat el 14/10/2026.
const IDESCAT = "https://www.idescat.cat/emex/?id=080961&lang=ca"

// Afiliaciones al régimen general según tamaño de la cuenta de cotización,
// junio de 2026 (provisional). Total 31.670.
const TAMANO = [
  { label: "1 a 9", pct: 15.9 },
  { label: "10 a 49", pct: 24.7 },
  { label: "50 a 249", pct: 25.9 },
  { label: "250 o més", pct: 33.5 },
]

const PERFIL: { k: string; v: string; d: string }[] = [
  { k: "Habitants (2025)", v: "65.123", d: "en 14,87 km², capital del Vallès Oriental" },
  { k: "Ocupació assalariada en empreses de Granollers", v: "31.670", d: "afiliacions al règim general, juny 2026 (p): el 23,4 % de tota la comarca" },
  { k: "Pes de la indústria en aquesta ocupació", v: "21,3 %", d: "6.740 afiliacions; els serveis en sumen 23.530 (74,3 %)" },
  { k: "PIB per habitant (2024, p)", v: "45.970 €", d: "índex 116,3 sobre una mitjana catalana de 100" },
  { k: "Valor afegit del comerç (2023, p)", v: "442,5 M€", d: "el 23,6 % del valor que generen els serveis de la ciutat" },
]

const DOS: { t: string; items: string[] }[] = [
  {
    t: "Si vens a altres empreses",
    items: [
      "Una pàgina per família de producte i per aplicació, amb el vocabulari tècnic que fa servir el teu comprador.",
      "Fitxes tècniques en HTML, no només en PDF, perquè Google i els assistents les puguin llegir.",
      "Formulari de pressupost mesurat: saber quines pàgines porten contactes i quines només visites.",
    ],
  },
  {
    t: "Si atens el públic a Granollers",
    items: [
      "Fitxa de Google Business amb categories, horaris i fotos al dia, i ressenyes respostes.",
      "Pàgines de servei que esmentin la ciutat amb naturalitat, sense repetir el nom a cada frase.",
      "Dades de contacte idèntiques al web, a Google i als directoris on ja surts.",
    ],
  },
]

const ARRANQUE: [string, string][] = [
  ["Mapa de cerques", "Separo el que busquen els teus clients amb “Granollers” del que busquen sense ciutat, perquè demanen feines diferents."],
  ["Revisió tècnica", "Indexació, velocitat, estructura d'URL i dades estructurades: el que impedeix que el que és bo del teu web compti."],
  ["Pla prioritzat", "Una llista curta ordenada per impacte. Et dic què faig jo, en quin ordre i el preu tancat després del diagnòstic."],
]

function SizeBar() {
  return (
    <ArtifactWindow tag="granollers · mida d'empresa" ratio="4 / 3">
      <Box sx={{ height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", gap: 2 }}>
        <Box>
          <Typography sx={{ fontFamily: fonts.serif, fontSize: { xs: 18, md: 20 }, fontWeight: 600, color: tokens.ink, lineHeight: 1.25 }}>
            Un de cada tres assalariats treballa en una empresa de 250 persones o més
          </Typography>
          <Typography sx={{ fontFamily: fonts.mono, fontSize: 10.5, color: tokens.muted, mt: 0.5 }}>afiliacions per mida del compte · juny 2026 (p)</Typography>
        </Box>
        <Box>
          <Box sx={{ display: "flex", height: 34, borderRadius: 1.5, overflow: "hidden", border: `1px solid ${tokens.line}` }}>
            {TAMANO.map((t, i) => (
              <Box key={t.label} sx={{ width: `${t.pct}%`, bgcolor: tokens.petrol, opacity: 0.35 + i * 0.2, borderLeft: i === 0 ? "none" : `2px solid ${tokens.win}` }} />
            ))}
          </Box>
          <Box sx={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 1, mt: 1.5 }}>
            {TAMANO.map((t) => (
              <Box key={t.label}>
                <Typography sx={{ fontFamily: fonts.mono, fontSize: 13, fontWeight: 700, color: tokens.ink }}>{t.pct.toLocaleString("ca-ES")} %</Typography>
                <Typography sx={{ fontSize: 11.5, color: tokens.muted }}>{t.label} treb.</Typography>
              </Box>
            ))}
          </Box>
        </Box>
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
        <Crumbs items={[{ label: "SEO al Vallès Oriental", href: "/consultor-seo-valles-oriental" }, { label: "Consultor SEO a Granollers" }]} />
        <Container sx={{ pt: { xs: 3, md: 4 }, pb: { xs: 8, md: 11 } }}>
          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1.05fr 0.95fr" }, gap: { xs: 5, md: 8 }, alignItems: "center" }}>
            <HeroReveal>
              <Box>
                <Typography variant="h1" sx={{ fontSize: { xs: 34, sm: 46, md: 56 }, letterSpacing: "-0.025em", color: tokens.ink, mb: 3 }}>
                  Consultor SEO a <Box component="em" sx={{ fontStyle: "italic", color: tokens.petrol }}>Granollers</Box>
                </Typography>
                <Typography variant="body1" sx={{ fontSize: { xs: 16, md: 18 }, color: tokens.body, maxWidth: 540, mb: 3.5 }}>
                  A Granollers hi conviuen l&apos;empresa industrial que ven a altres empreses i la botiga del centre que viu del seu barri. Totes dues necessiten Google, però no de la mateixa manera. T&apos;ajudo a sortir a les cerques que et porten comandes, al mapa i a ChatGPT, amb un pla prioritzat i parlant sempre amb mi.
                </Typography>
                <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ alignItems: { sm: "center" }, flexWrap: "wrap", rowGap: 1 }}>
                  <PrimaryCTA />
                  <Typography variant="body2" sx={{ color: tokens.muted }}>El tens en 24-48 h, gratuït.</Typography>
                </Stack>
              </Box>
            </HeroReveal>
            <Reveal delay={0.1}>
              <SizeBar />
            </Reveal>
          </Box>
        </Container>
      </Box>
    </Box>
  )
}

// Lista de perfil a dos columnas (etiqueta / cifra + nota).
function Perfil() {
  return (
    <Box component="section" sx={{ py: { xs: 8, md: 12 }, borderBottom: `1px solid ${tokens.lineSoft}` }}>
      <Container>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "0.85fr 1.15fr" }, gap: { xs: 4, md: 8 } }}>
          <Reveal>
            <Box sx={{ position: { md: "sticky" }, top: { md: 96 } }}>
              <Typography variant="h2" sx={{ fontSize: { xs: 28, md: 40 }, color: tokens.ink, mb: 2 }}>
                El perfil econòmic de Granollers
              </Typography>
              <Typography variant="body1" sx={{ color: tokens.body, mb: 2 }}>
                El 21,3 % de l&apos;ocupació assalariada és a la indústria, davant del 14,6 % del conjunt de Catalunya, i el comerç pesa gairebé una quarta part dels serveis. Per al SEO, això vol dir que hi ha dos tipus de cerca molt diferents a la mateixa ciutat.
              </Typography>
              <Typography variant="body2" sx={{ color: tokens.muted }}>
                Font: <Box component="a" href={IDESCAT} target="_blank" rel="noopener" sx={linkSx}>Idescat, El municipi en xifres: Granollers</Box>. (p) = dada provisional.
              </Typography>
            </Box>
          </Reveal>
          <Box>
            {PERFIL.map((p, i) => (
              <Reveal key={p.k} delay={i * 0.04}>
                <Box sx={{ py: 2.75, borderTop: `1px solid ${tokens.lineSoft}` }}>
                  <Typography sx={{ fontSize: 13.5, color: tokens.muted, mb: 0.5 }}>{p.k}</Typography>
                  <Stack direction={{ xs: "column", sm: "row" }} sx={{ alignItems: { sm: "baseline" }, columnGap: 2.5 }}>
                    <Typography sx={{ fontFamily: fonts.mono, fontSize: { xs: 24, md: 28 }, fontWeight: 700, color: tokens.ink, whiteSpace: "nowrap" }}>{p.v}</Typography>
                    <Typography variant="body1" sx={{ color: tokens.body }}>{p.d}</Typography>
                  </Stack>
                </Box>
              </Reveal>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

function DosCaminos() {
  return (
    <Box component="section" sx={{ py: { xs: 8, md: 12 }, borderBottom: `1px solid ${tokens.lineSoft}`, bgcolor: tokens.surface }}>
      <Container>
        <Reveal>
          <Typography variant="h2" sx={{ fontSize: { xs: 28, md: 40 }, color: tokens.ink, mb: { xs: 4, md: 6 }, maxWidth: 720 }}>
            Dues maneres de posicionar una empresa de Granollers
          </Typography>
        </Reveal>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap: { xs: 3, md: 3 } }}>
          {DOS.map((col, i) => (
            <Reveal key={col.t} delay={i * 0.06}>
              <Box sx={{ bgcolor: tokens.win, border: `1px solid ${tokens.lineSoft}`, borderRadius: 3, p: { xs: 3, md: 4 }, height: "100%" }}>
                <Typography component="h3" sx={{ fontFamily: fonts.serif, fontSize: { xs: 21, md: 24 }, fontWeight: 600, color: tokens.ink, mb: 2 }}>{col.t}</Typography>
                <Box component="ul" sx={{ m: 0, pl: 2.5 }}>
                  {col.items.map((it) => (
                    <Typography key={it} component="li" variant="body1" sx={{ color: tokens.body, mb: 1.25 }}>{it}</Typography>
                  ))}
                </Box>
              </Box>
            </Reveal>
          ))}
        </Box>
        <Reveal delay={0.1}>
          <Typography variant="body1" sx={{ color: tokens.body, mt: { xs: 4, md: 5 }, maxWidth: 720 }}>
            Moltes empreses necessiten una mica de cada. En tots dos casos hi afegeixo la feina de <Box component={Link} href="/posicionamiento-geo" sx={linkSx}>GEO</Box> perquè els assistents com ChatGPT et tinguin en compte, i si tens botiga en línia, el <Box component={Link} href="/servicios/crecimiento-ecommerce" sx={linkSx}>SEO per a ecommerce</Box>.
          </Typography>
        </Reveal>
      </Container>
    </Box>
  )
}

function Arranque() {
  return (
    <Box component="section" sx={{ py: { xs: 8, md: 12 }, borderBottom: `1px solid ${tokens.lineSoft}` }}>
      <Container sx={{ maxWidth: 880 }}>
        <Reveal>
          <Typography variant="h2" sx={{ fontSize: { xs: 28, md: 40 }, color: tokens.ink, mb: { xs: 4, md: 5 } }}>
            Per on començo
          </Typography>
        </Reveal>
        {ARRANQUE.map(([t, d], i) => (
          <Reveal key={t} delay={i * 0.05}>
            <Box sx={{ display: "grid", gridTemplateColumns: { xs: "48px 1fr", md: "72px 1fr" }, gap: 2, py: 3, borderTop: `1px solid ${tokens.lineSoft}` }}>
              <Typography aria-hidden sx={{ fontFamily: fonts.serif, fontStyle: "italic", fontSize: { xs: 30, md: 40 }, lineHeight: 1, color: tokens.petrol }}>{String.fromCharCode(97 + i)}</Typography>
              <Box>
                <Typography component="h3" sx={{ fontFamily: fonts.serif, fontSize: { xs: 20, md: 22 }, fontWeight: 600, color: tokens.ink, mb: 0.75 }}>{t}</Typography>
                <Typography variant="body1" sx={{ color: tokens.body }}>{d}</Typography>
              </Box>
            </Box>
          </Reveal>
        ))}
        <Reveal delay={0.15}>
          <Typography variant="body1" sx={{ color: tokens.body, mt: 3 }}>
            Si la teva empresa és en un altre municipi de la comarca, tens la pàgina de <Box component={Link} href="/consultor-seo-valles-oriental" sx={linkSx}>SEO al Vallès Oriental</Box>. Si el teu mercat principal és la capital, la de <Box component={Link} href="/consultor-seo-barcelona" sx={linkSx}>consultor SEO a Barcelona</Box>.
          </Typography>
        </Reveal>
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
            El que solen preguntar les empreses
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
      </Container>
    </Box>
  )
}

export default function GranollersMuiCa({ faqs }: { faqs: [string, string][] }) {
  return (
    <Box sx={{ bgcolor: tokens.paper, color: tokens.body, fontFamily: fonts.sans }}>
      <SiteHeader />
      <Box component="main">
        <Hero />
        <Perfil />
        <DosCaminos />
        <Arranque />
        <FeaturedCases
          title="Feina publicada, amb el seu resultat"
          sub="Un web de finestres a mida que capta pressupostos i una botiga en línia de farmàcia. Cada fitxa detalla què vaig fer."
          slugs={["totfinestra", "farmacia-garcia-del-cerro"]}
        />
        <Faq faqs={faqs} />
        <DiagnosticoCTA />
      </Box>
      <SiteFooter />
    </Box>
  )
}
