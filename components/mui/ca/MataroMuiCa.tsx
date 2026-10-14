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

// Font única de totes les xifres de la pàgina. Comprovades a l'API de
// l'Idescat (El municipi en xifres, codi 081213) el 14/10/2026.
const IDESCAT = "https://www.idescat.cat/emex/?id=081213&lang=ca"

// Afiliaciones al régimen general según ubicación de la cuenta de cotización,
// junio de 2026 (provisional). Total 43.950.
const SECTORES = [
  { label: "Serveis", value: 37610, pct: 85.6 },
  { label: "Indústria", value: 4425, pct: 10.1 },
  { label: "Construcció", value: 1890, pct: 4.3 },
  { label: "Agricultura", value: 25, pct: 0.1 },
]

const DATOS: { dato: string; valor: string; lectura: string }[] = [
  {
    dato: "Població (2025)",
    valor: "131.370",
    lectura: "Més d'una de cada quatre persones del Maresme viu a Mataró (el 27,5 % dels 477.375 habitants de la comarca).",
  },
  {
    dato: "Comptes de cotització (juny 2026, provisional)",
    valor: "3.643",
    lectura: "Són els ocupadors amb treballadors donats d'alta al règim general: gairebé el 30 % dels de tota la comarca. Molts negocis competint per les mateixes cerques amb el nom de la ciutat.",
  },
  {
    dato: "Autònoms (juny 2026, provisional)",
    valor: "9.015",
    lectura: "El 78 % treballa en serveis. És el perfil que més depèn que la seva fitxa de Google i el seu web facin d'aparador, perquè no té cap equip comercial al darrere.",
  },
  {
    dato: "Valor afegit del comerç (2023, provisional)",
    valor: "564,2 M€",
    lectura: "Una cinquena part del valor que generen els serveis de la ciutat surt del comerç. Botigues amb local i botigues en línia conviuen i competeixen al mateix cercador.",
  },
]

const FRENTES: [string, React.ReactNode][] = [
  [
    "Fitxa de Google Business i mapa",
    "Categories, serveis, horaris, fotos i respostes a ressenyes. És el que decideix si apareixes als tres resultats del mapa quan algú de Mataró busca el que fas.",
  ],
  [
    "Una pàgina per servei, no una per a tot",
    "Si fas cinc coses, Google necessita cinc pàgines que n'expliquin cadascuna. Una home que ho explica tot de passada rarament posiciona per a cap.",
  ],
  [
    "Web ràpid i que demani el contacte",
    <>Arribar al web no serveix de res si la persona se&apos;n va sense trucar. Reviso velocitat, mòbil i el camí fins al botó de contacte. Ho explico a l&apos;<Box component={Link} href="/servicios/auditoria-seo-geo" sx={linkSx}>auditoria SEO i GEO</Box>.</>,
  ],
  [
    "Que ChatGPT t'anomeni",
    <>Cada vegada més gent demana recomanacions a un assistent abans de buscar a Google. Treballar aquesta visibilitat s&apos;anomena <Box component={Link} href="/posicionamiento-geo" sx={linkSx}>GEO</Box> i comença per unes dades de negoci coherents a tot arreu.</>,
  ],
]

const REVISO = [
  "Quines cerques amb “Mataró” tenen volum real per al teu sector i quines són només soroll.",
  "Qui ocupa avui el mapa per a aquestes cerques i què té la seva fitxa que la teva no té.",
  "Si el teu web diu clarament en quina part de la ciutat ets i a quines zones dones servei.",
  "Si les teves dades de nom, adreça i telèfon coincideixen a Google, al teu web i als directoris.",
  "Quines pàgines et falten per cobrir cada servei que de debò vols vendre.",
]

function SectorBars() {
  return (
    <ArtifactWindow tag="mataró · ocupació per sector" ratio="4 / 3">
      <Box sx={{ height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", gap: 1.5 }}>
        <Box>
          <Typography sx={{ fontFamily: fonts.serif, fontSize: { xs: 18, md: 20 }, fontWeight: 600, color: tokens.ink, lineHeight: 1.2 }}>
            43.950 afiliacions a empreses de Mataró
          </Typography>
          <Typography sx={{ fontFamily: fonts.mono, fontSize: 10.5, color: tokens.muted, mt: 0.5 }}>règim general · juny 2026 (p)</Typography>
        </Box>
        <Stack spacing={1.4}>
          {SECTORES.map((s) => (
            <Box key={s.label}>
              <Stack direction="row" sx={{ justifyContent: "space-between", mb: 0.5 }}>
                <Typography sx={{ fontSize: 13, fontWeight: 600, color: tokens.ink }}>{s.label}</Typography>
                <Typography sx={{ fontFamily: fonts.mono, fontSize: 12, color: tokens.body }}>{s.pct.toLocaleString("ca-ES")} %</Typography>
              </Stack>
              <Box sx={{ height: 10, borderRadius: 999, bgcolor: tokens.surface, overflow: "hidden" }}>
                <Box sx={{ height: "100%", width: `${Math.max(s.pct, 0.8)}%`, bgcolor: s.label === "Serveis" ? tokens.petrol : `${tokens.petrol}66`, borderRadius: 999 }} />
              </Box>
            </Box>
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
        <Crumbs items={[{ label: "SEO al Maresme", href: "/agencia-seo-maresme" }, { label: "Consultor SEO a Mataró" }]} />
        <Container sx={{ pt: { xs: 3, md: 4 }, pb: { xs: 8, md: 11 } }}>
          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1.1fr 0.9fr" }, gap: { xs: 5, md: 8 }, alignItems: "center" }}>
            <HeroReveal>
              <Box>
                <Typography variant="h1" sx={{ fontSize: { xs: 34, sm: 46, md: 56 }, letterSpacing: "-0.025em", color: tokens.ink, mb: 3 }}>
                  Consultor SEO a <Box component="em" sx={{ fontStyle: "italic", color: tokens.petrol }}>Mataró</Box>
                </Typography>
                <Typography variant="body1" sx={{ fontSize: { xs: 16, md: 18 }, color: tokens.body, maxWidth: 540, mb: 2 }}>
                  Mataró és la capital del Maresme i concentra gairebé el 30 % dels ocupadors de la comarca. Això vol dir més gent buscant, però també més competència a cada cerca que porta el nom de la ciutat.
                </Typography>
                <Typography variant="body1" sx={{ fontSize: { xs: 16, md: 18 }, color: tokens.body, maxWidth: 540, mb: 3.5 }}>
                  Soc l&apos;Òscar i treballo des de Premià de Mar. M&apos;encarrego que el teu negoci surti a Google, al mapa i a les respostes de ChatGPT, i sempre parles amb mi.
                </Typography>
                <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ alignItems: { sm: "center" }, flexWrap: "wrap", rowGap: 1 }}>
                  <PrimaryCTA />
                  <Typography variant="body2" sx={{ color: tokens.muted }}>Gratuït i en 24-48 h.</Typography>
                </Stack>
              </Box>
            </HeroReveal>
            <Reveal delay={0.1}>
              <SectorBars />
            </Reveal>
          </Box>
        </Container>
      </Box>
    </Box>
  )
}

// Tabla editorial: dato, cifra y qué significa para el SEO.
function Datos() {
  return (
    <Box component="section" sx={{ py: { xs: 8, md: 12 }, borderBottom: `1px solid ${tokens.lineSoft}` }}>
      <Container>
        <Reveal>
          <Typography variant="h2" sx={{ fontSize: { xs: 28, md: 40 }, color: tokens.ink, mb: 2, maxWidth: 700 }}>
            Com és el teixit empresarial de Mataró
          </Typography>
          <Typography variant="body1" sx={{ fontSize: { xs: 16, md: 18 }, color: tokens.body, mb: { xs: 4, md: 6 }, maxWidth: 660 }}>
            Abans de proposar res miro amb quin mercat treballo. Aquestes són les xifres oficials que més pesen quan el negoci és de Mataró, i el que llegeixo en cadascuna.
          </Typography>
        </Reveal>
        <Box component="dl" sx={{ m: 0 }}>
          {DATOS.map((d, i) => (
            <Reveal key={d.dato} delay={i * 0.04}>
              <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "0.75fr 0.55fr 1.4fr" }, gap: { xs: 0.75, md: 4 }, py: { xs: 3, md: 3.5 }, borderTop: `1px solid ${tokens.lineSoft}`, alignItems: "baseline" }}>
                <Typography component="dt" sx={{ fontFamily: fonts.mono, fontSize: 12.5, color: tokens.muted }}>{d.dato}</Typography>
                <Typography component="dd" sx={{ m: 0, fontFamily: fonts.serif, fontSize: { xs: 30, md: 36 }, fontWeight: 600, color: tokens.ink, lineHeight: 1.1 }}>{d.valor}</Typography>
                <Typography component="dd" sx={{ m: 0, color: tokens.body }}>{d.lectura}</Typography>
              </Box>
            </Reveal>
          ))}
        </Box>
        <Typography variant="body2" sx={{ color: tokens.muted, mt: 3, borderTop: `1px solid ${tokens.lineSoft}`, pt: 2.5 }}>
          Font: <Box component="a" href={IDESCAT} target="_blank" rel="noopener" sx={linkSx}>Idescat, El municipi en xifres: Mataró</Box>. Les xifres marcades com a provisionals són les últimes que ha publicat l&apos;institut.
        </Typography>
      </Container>
    </Box>
  )
}

// Rejilla 2x2 con filete: familia distinta a la tabla anterior.
function Frentes() {
  return (
    <Box component="section" sx={{ py: { xs: 8, md: 12 }, borderBottom: `1px solid ${tokens.lineSoft}`, bgcolor: tokens.surface }}>
      <Container>
        <Reveal>
          <Typography variant="h2" sx={{ fontSize: { xs: 28, md: 40 }, color: tokens.ink, mb: { xs: 4, md: 6 }, maxWidth: 680 }}>
            Posicionament web per a un negoci de Mataró
          </Typography>
        </Reveal>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, columnGap: { md: 7 } }}>
          {FRENTES.map(([t, d], i) => (
            <Reveal key={t} delay={i * 0.05}>
              <Box sx={{ py: { xs: 3, md: 4 }, borderTop: `2px solid ${i < 2 ? tokens.petrol : tokens.line}` }}>
                <Typography component="h3" sx={{ fontFamily: fonts.serif, fontSize: { xs: 20, md: 23 }, fontWeight: 600, color: tokens.ink, mb: 1.25 }}>{t}</Typography>
                <Typography variant="body1" sx={{ color: tokens.body, maxWidth: 480 }}>{d}</Typography>
              </Box>
            </Reveal>
          ))}
        </Box>
      </Container>
    </Box>
  )
}

function Reviso() {
  return (
    <Box component="section" sx={{ py: { xs: 8, md: 12 }, borderBottom: `1px solid ${tokens.lineSoft}` }}>
      <Container sx={{ maxWidth: 900 }}>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "0.8fr 1.2fr" }, gap: { xs: 3, md: 7 } }}>
          <Reveal>
            <Typography variant="h2" sx={{ fontSize: { xs: 28, md: 36 }, color: tokens.ink, mb: 2 }}>
              El que miro a la cerca local de Mataró
            </Typography>
            <Typography variant="body1" sx={{ color: tokens.body }}>
              No et dic què surt avui al mapa sense haver-ho mirat per al teu sector. Això és el que reviso, cerca a cerca, al diagnòstic.
            </Typography>
          </Reveal>
          <Box component="ol" sx={{ listStyle: "none", p: 0, m: 0, counterReset: "rev" }}>
            {REVISO.map((r, i) => (
              <Reveal key={r} delay={i * 0.04}>
                <Box component="li" sx={{ display: "flex", gap: 2, py: 2, borderBottom: `1px solid ${tokens.lineSoft}` }}>
                  <Typography aria-hidden sx={{ fontFamily: fonts.mono, fontSize: 13, fontWeight: 700, color: tokens.petrol, minWidth: 22, pt: 0.3 }}>{i + 1}.</Typography>
                  <Typography variant="body1" sx={{ color: tokens.body }}>{r}</Typography>
                </Box>
              </Reveal>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

function Cerca() {
  return (
    <Box component="section" sx={{ py: { xs: 7, md: 10 }, borderBottom: `1px solid ${tokens.lineSoft}` }}>
      <Container sx={{ maxWidth: 760 }}>
        <Reveal>
          <Typography variant="h2" sx={{ fontSize: { xs: 26, md: 34 }, color: tokens.ink, mb: 2 }}>
            El teu negoci no és a Mataró?
          </Typography>
          <Typography variant="body1" sx={{ color: tokens.body }}>
            Si ets en un altre poble de la comarca, mira com treballo el <Box component={Link} href="/agencia-seo-maresme" sx={linkSx}>SEO al Maresme</Box>. Si ets al costat de la meva base, tens la pàgina de <Box component={Link} href="/consultor-seo-premia-de-mar" sx={linkSx}>consultor SEO a Premià de Mar</Box>. I si el teu mercat és la capital, la de <Box component={Link} href="/consultor-seo-barcelona" sx={linkSx}>consultor SEO a Barcelona</Box>.
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
            Preguntes sobre el SEO a Mataró
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

export default function MataroMuiCa({ faqs }: { faqs: [string, string][] }) {
  return (
    <Box sx={{ bgcolor: tokens.paper, color: tokens.body, fontFamily: fonts.sans }}>
      <SiteHeader />
      <Box component="main">
        <Hero />
        <Datos />
        <Frentes />
        <Reviso />
        <FeaturedCases
          title="Projectes que pots revisar"
          sub="La Clínica de la Ansiedad és a Canet de Mar, aquí al costat. Cada fitxa explica què vaig fer i quin resultat va tenir."
          slugs={["clinica-de-la-ansiedad", "marea-es"]}
        />
        <Cerca />
        <Faq faqs={faqs} />
        <DiagnosticoCTA />
      </Box>
      <SiteFooter />
    </Box>
  )
}
