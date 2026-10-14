"use client"

import Link from "@/components/LocaleLink"
import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import { tokens, fonts } from "@/lib/mui/theme"
import { Blueprint, Reveal, HeroReveal } from "@/components/mui/shared"
import BrandCaseCard from "@/components/mui/BrandCaseCard"
import { casesByService, casePhoto, caseVertical, type Caso } from "@/lib/casesEcom"

const LINKEDIN = "https://www.linkedin.com/in/oscar-alvarez-romani-7882302b3"
const EMAIL = "contacta@seoscar.com"
const linkSx = { color: tokens.ink, fontWeight: 600, textDecoration: "underline", textDecorationColor: tokens.line, "&:hover": { textDecorationColor: tokens.petrol } } as const

const FORTALEZAS: [string, React.ReactNode][] = [
  [
    "SEO i GEO",
    "Més de 4 anys treballant el posicionament, en paral·lel amb un màster de Big Data. Visibilitat a Google i als cercadors d'IA: fitxes que posicionen, botigues que les IA citen.",
  ],
  [
    "Dades, no intuïció",
    "Tot ho baso en dades: mai no invento rutes. Cada decisió surt d'analítica real, i si la dada no existeix, primer la mesuro i després toco.",
  ],
  [
    "Estratègia de producte i marca",
    "Estudis paral·lels de màrqueting digital i xarxes socials. Baixo l'estratègia al detall: productes específics, campanyes de marca des de zero o potenciar les que ja funcionen.",
  ],
  [
    "Desenvolupament d'intel·ligència artificial",
    "Machine learning, prompting i arquitectura d'agents des que va sortir ChatGPT. No em quedo en la teoria: tinc productes propis d'IA en producció.",
  ],
]

// "Producto propio" primero a propósito: es el grupo de plataformas propias,
// y es lo que se pidió que liderara la página.
const GRUPOS: { key: Parameters<typeof casesByService>[0]; title: string; sub: string }[] = [
  { key: "amedida", title: "Producte propi", sub: "Plataformes pròpies construïdes des de zero, de la idea a producció." },
  { key: "crecimiento", title: "Ecommerce", sub: "Botigues en línia: trànsit, conversió i agents de vendes." },
  { key: "automatizacion", title: "Automatització", sub: "Arquitectures d'agents que substitueixen feina operativa." },
  { key: "seo", title: "SEO i posicionament", sub: "Projectes centrats en visibilitat orgànica i captació." },
]

const FLAGSHIP_SLUG = "marea-es"

function allCases(): Caso[] {
  return GRUPOS.flatMap((g) => casesByService(g.key))
}

function Nav() {
  return (
    <Box component="header" sx={{ borderBottom: `1px solid ${tokens.lineSoft}` }}>
      <Container sx={{ py: 2.5, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 2 }}>
        <Typography sx={{ fontFamily: fonts.serif, fontWeight: 700, fontSize: 18, color: tokens.ink }}>
          Òscar Álvarez
        </Typography>
        <Stack direction="row" spacing={1.5} sx={{ alignItems: "center" }}>
          <Typography component={Link} href="https://www.seoscar.com" target="_blank" rel="noopener noreferrer" sx={{ fontFamily: fonts.mono, fontSize: 11.5, fontWeight: 600, color: tokens.muted, textDecoration: "none", px: 1.25, py: 0.5, border: `1px solid ${tokens.lineSoft}`, borderRadius: 999, "&:hover": { color: tokens.petrol, borderColor: tokens.petrol } }}>
            SEOscar ↗
          </Typography>
          <Typography component="a" href={LINKEDIN} target="_blank" rel="noopener noreferrer" sx={{ fontFamily: fonts.mono, fontSize: 12.5, fontWeight: 600, color: tokens.ink, textDecoration: "none", "&:hover": { color: tokens.petrol } }}>
            LinkedIn <Box component="span" sx={{ color: tokens.petrol }}>↗</Box>
          </Typography>
        </Stack>
      </Container>
    </Box>
  )
}

// Hero asimétrico: texto a la izquierda, a la derecha un caso real (foto de
// marca real, no inventada). Las cifras del strip son reales, calculadas de
// los proyectos de abajo. La IA es herramienta de trabajo (datos,
// automatizaciones), no quien firma el proyecto: eso no se sugiere en ningún
// texto de esta página.
function Hero() {
  const cases = allCases()
  const total = cases.length
  const stackCount = new Set(cases.flatMap((c) => c.stack)).size
  const flagship = cases.find((c) => c.slug === FLAGSHIP_SLUG) ?? cases[0]
  const stats = [`${total} projectes reals`, "SEO i GEO · 4+ anys", "Màster Big Data", `${stackCount} tecnologies`]
  return (
    <Box component="section" sx={{ position: "relative", overflow: "hidden", borderBottom: `1px solid ${tokens.lineSoft}` }}>
      <Blueprint />
      <Container sx={{ position: "relative", zIndex: 1, pt: { xs: 6, md: 8 }, pb: { xs: 7, md: 10 } }}>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1.1fr 0.9fr" }, gap: { xs: 5, md: 7 }, alignItems: "center" }}>
          <HeroReveal>
            <Box>
              <Typography sx={{ fontFamily: fonts.mono, fontSize: 12.5, color: tokens.petrol, mb: 2 }}>seo · geo · automatització</Typography>
              <Typography variant="h1" sx={{ fontSize: { xs: 34, sm: 46, md: 56 }, letterSpacing: "-0.025em", lineHeight: 1.1, color: tokens.ink, mb: 3, maxWidth: 620 }}>
                Consultor SEO <Box component="em" sx={{ fontStyle: "italic", color: tokens.petrol }}>360</Box>.
              </Typography>
              <Typography variant="body1" sx={{ fontSize: { xs: 16, md: 18 }, color: tokens.body, maxWidth: 480, mb: 4 }}>
                SEO, GEO, automatitzacions, fugues de conversió i estratègies de màrqueting per millorar el rendiment de la teva empresa.
              </Typography>
              <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ alignItems: { sm: "center" }, mb: 4 }}>
                <Button component="a" href={LINKEDIN} target="_blank" rel="noopener noreferrer" variant="contained" color="primary" sx={{ borderRadius: 2, width: { xs: "100%", sm: "auto" } }}>
                  Veure a LinkedIn <Box component="span" sx={{ ml: 0.75 }}>↗</Box>
                </Button>
                <Button component="a" href={`mailto:${EMAIL}`} variant="outlined" sx={{ borderRadius: 2, width: { xs: "100%", sm: "auto" }, borderColor: tokens.line, color: tokens.ink, "&:hover": { borderColor: tokens.petrol, bgcolor: "transparent" } }}>
                  Escriu-me
                </Button>
              </Stack>
              <Stack direction="row" spacing={1} sx={{ flexWrap: "wrap", rowGap: 1 }}>
                {stats.map((t) => (
                  <Typography key={t} sx={{ fontFamily: fonts.mono, fontSize: 11.5, fontWeight: 600, color: tokens.ink, px: 1.25, py: 0.5, borderRadius: 999, border: `1px solid ${tokens.line}`, bgcolor: tokens.win }}>{t}</Typography>
                ))}
              </Stack>
            </Box>
          </HeroReveal>
          {flagship && (
            <Reveal delay={0.12}>
              <Box>
                <Typography sx={{ fontFamily: fonts.mono, fontSize: 11.5, color: tokens.muted, mb: 1.25 }}>cas destacat</Typography>
                <BrandCaseCard name={flagship.client} vertical={caseVertical(flagship, "ca")} href={`/casos-de-exito/${flagship.slug}`} photo={casePhoto(flagship)} ratio="3 / 4" />
              </Box>
            </Reveal>
          )}
        </Box>
      </Container>
    </Box>
  )
}

// Todas las tarjetas al mismo tamaño y ratio: con grupos de 2-3 casos, el
// bento asimétrico no tenía suficientes celdas para leerse como composición
// y se veía descuadrado. La jerarquía "flagship" ya la lleva el caso
// destacado del hero.
function GrupoProyectos({ title, sub, casos }: { title: string; sub: string; casos: Caso[] }) {
  if (casos.length === 0) return null
  return (
    <Box sx={{ mb: { xs: 6, md: 9 }, "&:last-of-type": { mb: 0 } }}>
      <Reveal>
        <Typography component="h3" sx={{ fontFamily: fonts.serif, fontSize: { xs: 20, md: 24 }, fontWeight: 600, color: tokens.ink, mb: 0.5 }}>{title}</Typography>
        <Typography variant="body2" sx={{ color: tokens.muted, mb: { xs: 2.5, md: 3 } }}>{sub}</Typography>
      </Reveal>
      <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "repeat(3, 1fr)" }, gap: { xs: 2, md: 2.5 } }}>
        {casos.map((c, i) => (
          <Reveal key={c.slug} delay={(i % 3) * 0.06}>
            <BrandCaseCard name={c.client} vertical={caseVertical(c, "ca")} href={`/casos-de-exito/${c.slug}`} photo={casePhoto(c)} ratio="4 / 5" />
          </Reveal>
        ))}
      </Box>
    </Box>
  )
}

function Proyectos() {
  return (
    <Box component="section" sx={{ py: { xs: 7, md: 11 }, borderBottom: `1px solid ${tokens.lineSoft}` }}>
      <Container>
        <Reveal>
          <Typography variant="h2" sx={{ fontSize: { xs: 26, md: 38 }, color: tokens.ink, mb: 1.5, maxWidth: 620 }}>
            Projectes.
          </Typography>
          <Typography variant="body1" sx={{ color: tokens.body, maxWidth: 640, mb: { xs: 5, md: 7 } }}>
            Començo per les plataformes pròpies: són l&apos;exemple més complet del que construeixo, de la idea a producció. Cada targeta enllaça a la seva fitxa amb repte, solució i stack.
          </Typography>
        </Reveal>
        {GRUPOS.map((g) => (
          <GrupoProyectos key={g.key} title={g.title} sub={g.sub} casos={casesByService(g.key)} />
        ))}
      </Container>
    </Box>
  )
}

function QuienSoy() {
  return (
    <Box component="section" sx={{ py: { xs: 7, md: 11 }, borderBottom: `1px solid ${tokens.lineSoft}` }}>
      <Container sx={{ maxWidth: 820 }}>
        <Reveal>
          <Typography component="p" sx={{ fontFamily: fonts.serif, fontSize: { xs: 21, md: 28 }, lineHeight: 1.4, color: tokens.ink, mb: 2.5, letterSpacing: "-0.01em" }}>
            Vaig muntar SEOscar perquè em vaig cansar de veure negocis pagant un SaaS que no controlen i agències que prometen números que no poden sostenir.
          </Typography>
          <Typography variant="body1" sx={{ fontSize: { xs: 16, md: 18 }, color: tokens.body, maxWidth: 680 }}>
            Treballo al revés del que és habitual: prefereixo ensenyar un flux funcionant que un PDF amb promeses. Construeixo sobre la plataforma del client, deixo el codi en les seves mans i mesuro amb dades reals. Si hi ha alguna cosa que no sé, ho dic. Si no tinc una dada, no me la invento. Darrere de cada projecte hi ha enginyeria real: codi propi en Node i Python, fluxos n8n i agents ancorats a dades, no una capa de màrqueting sobre una eina de tercers.
          </Typography>
        </Reveal>
      </Container>
    </Box>
  )
}

function Fortalezas() {
  return (
    <Box component="section" sx={{ py: { xs: 7, md: 11 }, borderBottom: `1px solid ${tokens.lineSoft}` }}>
      <Container>
        <Reveal>
          <Typography variant="h2" sx={{ fontSize: { xs: 26, md: 38 }, color: tokens.ink, mb: { xs: 4, md: 6 }, maxWidth: 620 }}>
            En què soc fort.
          </Typography>
        </Reveal>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap: { xs: 3, md: 4 } }}>
          {FORTALEZAS.map(([t, d], i) => (
            <Reveal key={t} delay={(i % 2) * 0.06}>
              <Box sx={{ borderTop: `2px solid ${tokens.line}`, pt: 2.5 }}>
                <Typography sx={{ fontFamily: fonts.mono, fontSize: 12, color: tokens.petrol, mb: 1 }}>{`0${i + 1}`}</Typography>
                <Typography component="h3" sx={{ fontFamily: fonts.serif, fontSize: 21, fontWeight: 600, color: tokens.ink, mb: 1 }}>{t}</Typography>
                <Typography variant="body1" sx={{ color: tokens.body, maxWidth: 480 }}>{d}</Typography>
              </Box>
            </Reveal>
          ))}
        </Box>
      </Container>
    </Box>
  )
}

function Formacion() {
  return (
    <Box component="section" sx={{ py: { xs: 7, md: 10 }, borderBottom: `1px solid ${tokens.lineSoft}` }}>
      <Container sx={{ maxWidth: 820 }}>
        <Reveal>
          <Typography variant="h2" sx={{ fontSize: { xs: 26, md: 38 }, color: tokens.ink, mb: { xs: 4, md: 5 }, maxWidth: 620 }}>
            Formació.
          </Typography>
          <Stack spacing={3}>
            <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "0.32fr 0.68fr" }, gap: { xs: 0.5, sm: 3 }, py: 2.5, borderTop: `1px solid ${tokens.lineSoft}` }}>
              <Typography sx={{ fontFamily: fonts.mono, fontSize: 12.5, color: tokens.muted }}>màster</Typography>
              <Typography variant="body1" sx={{ color: tokens.body, fontWeight: 600 }}>Big Data, en paral·lel als anys de SEO i GEO en actiu.</Typography>
            </Box>
            <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "0.32fr 0.68fr" }, gap: { xs: 0.5, sm: 3 }, py: 2.5, borderTop: `1px solid ${tokens.lineSoft}` }}>
              <Typography sx={{ fontFamily: fonts.mono, fontSize: 12.5, color: tokens.muted }}>estudis</Typography>
              <Typography variant="body1" sx={{ color: tokens.body, fontWeight: 600 }}>Màrqueting digital i xarxes socials, per baixar l&apos;estratègia al detall de producte i de marca.</Typography>
            </Box>
            <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "0.32fr 0.68fr" }, gap: { xs: 0.5, sm: 3 }, py: 2.5, borderTop: `1px solid ${tokens.lineSoft}`, borderBottom: `1px solid ${tokens.lineSoft}` }}>
              <Typography sx={{ fontFamily: fonts.mono, fontSize: 12.5, color: tokens.muted }}>autodidacte</Typography>
              <Typography variant="body1" sx={{ color: tokens.body, fontWeight: 600 }}>Machine learning, prompting i arquitectura d&apos;agents, estudiats i aplicats des que va sortir ChatGPT.</Typography>
            </Box>
          </Stack>
        </Reveal>
      </Container>
    </Box>
  )
}

function StackTecnico() {
  const stack = Array.from(new Set(allCases().flatMap((c) => c.stack))).sort()
  return (
    <Box component="section" sx={{ py: { xs: 7, md: 10 }, borderBottom: `1px solid ${tokens.lineSoft}` }}>
      <Container>
        <Reveal>
          <Typography variant="h2" sx={{ fontSize: { xs: 26, md: 38 }, color: tokens.ink, mb: { xs: 3, md: 4 }, maxWidth: 620 }}>
            Stack.
          </Typography>
          <Stack direction="row" spacing={1} sx={{ flexWrap: "wrap", rowGap: 1 }}>
            {stack.map((s) => (
              <Typography key={s} sx={{ fontFamily: fonts.mono, fontSize: 12.5, color: tokens.body, px: 1.5, py: 0.6, borderRadius: 999, border: `1px solid ${tokens.line}`, bgcolor: tokens.win }}>{s}</Typography>
            ))}
          </Stack>
        </Reveal>
      </Container>
    </Box>
  )
}

function CierreFooter() {
  return (
    <Box component="footer" sx={{ py: { xs: 8, md: 12 } }}>
      <Container sx={{ maxWidth: 720, textAlign: { xs: "left", md: "center" } }}>
        <Reveal>
          <Typography variant="h2" sx={{ fontSize: { xs: 26, md: 36 }, color: tokens.ink, mb: 2.5 }}>
            Parlem del teu projecte.
          </Typography>
          <Typography variant="body1" sx={{ color: tokens.body, mb: 4, maxWidth: 560, mx: { md: "auto" } }}>
            La feina comercial (serveis, casos i diagnòstic gratuït) és a{" "}
            <Box component={Link} href="https://www.seoscar.com" target="_blank" rel="noopener noreferrer" sx={linkSx}>seoscar.com</Box>. Aquest portfolio és personal, pensat per a LinkedIn.
          </Typography>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ alignItems: "center", justifyContent: { md: "center" } }}>
            <Button component="a" href={LINKEDIN} target="_blank" rel="noopener noreferrer" variant="contained" color="primary" sx={{ borderRadius: 2, width: { xs: "100%", sm: "auto" } }}>
              Connecta a LinkedIn <Box component="span" sx={{ ml: 0.75 }}>↗</Box>
            </Button>
            <Typography component="a" href={`mailto:${EMAIL}`} sx={{ fontFamily: fonts.mono, fontSize: 14, color: tokens.body, textDecoration: "none", "&:hover": { color: tokens.petrol } }}>{EMAIL}</Typography>
          </Stack>
        </Reveal>
        <Typography sx={{ fontFamily: fonts.mono, fontSize: 10.5, color: tokens.muted, mt: { xs: 6, md: 8 } }}>
          Òscar Álvarez · Premià de Mar, Barcelona · portfolio personal, no indexat
        </Typography>
      </Container>
    </Box>
  )
}

export default function PortfolioOscarMuiCa() {
  return (
    <Box sx={{ bgcolor: tokens.paper, color: tokens.body, fontFamily: fonts.sans }}>
      <Nav />
      <Hero />
      <Proyectos />
      <QuienSoy />
      <Fortalezas />
      <Formacion />
      <StackTecnico />
      <CierreFooter />
    </Box>
  )
}
