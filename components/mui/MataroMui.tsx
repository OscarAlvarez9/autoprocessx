"use client"

import Link from "next/link"
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

// Fuente única de todas las cifras de la página. Comprobadas en la API de
// Idescat (El municipio en cifras, código 081213) el 14/10/2026.
const IDESCAT = "https://www.idescat.cat/emex/?id=081213&lang=es"

// Afiliaciones al régimen general según ubicación de la cuenta de cotización,
// junio de 2026 (provisional). Total 43.950.
const SECTORES = [
  { label: "Servicios", value: 37610, pct: 85.6 },
  { label: "Industria", value: 4425, pct: 10.1 },
  { label: "Construcción", value: 1890, pct: 4.3 },
  { label: "Agricultura", value: 25, pct: 0.1 },
]

const DATOS: { dato: string; valor: string; lectura: string }[] = [
  {
    dato: "Población (2025)",
    valor: "131.370",
    lectura: "Más de una de cada cuatro personas del Maresme vive en Mataró (el 27,5 % de los 477.375 habitantes de la comarca).",
  },
  {
    dato: "Cuentas de cotización (junio 2026, provisional)",
    valor: "3.643",
    lectura: "Son los empleadores con trabajadores dados de alta en el régimen general: casi el 30 % de los de toda la comarca. Muchos negocios compitiendo por las mismas búsquedas con el nombre de la ciudad.",
  },
  {
    dato: "Autónomos (junio 2026, provisional)",
    valor: "9.015",
    lectura: "El 78 % trabaja en servicios. Es el perfil que más depende de que su ficha de Google y su web hagan de escaparate, porque no tiene un equipo comercial detrás.",
  },
  {
    dato: "Valor añadido del comercio (2023, provisional)",
    valor: "564,2 M€",
    lectura: "Una quinta parte del valor que generan los servicios de la ciudad sale del comercio. Tiendas con local y tiendas online conviven y compiten en el mismo buscador.",
  },
]

const FRENTES: [string, React.ReactNode][] = [
  [
    "Ficha de Google Business y mapa",
    "Categorías, servicios, horarios, fotos y respuestas a reseñas. Es lo que decide si apareces en los tres resultados del mapa cuando alguien de Mataró busca lo que haces.",
  ],
  [
    "Una página por servicio, no una para todo",
    "Si haces cinco cosas, Google necesita cinco páginas que expliquen cada una. Una home que lo cuenta todo de pasada rara vez posiciona para ninguna.",
  ],
  [
    "Web rápida y que pida el contacto",
    <>Llegar a la web no sirve si la persona se va sin llamar. Reviso velocidad, móvil y el camino hasta el botón de contacto. Lo explico en la <Box component={Link} href="/servicios/auditoria-seo-geo" sx={linkSx}>auditoría SEO y GEO</Box>.</>,
  ],
  [
    "Que ChatGPT te nombre",
    <>Cada vez más gente pide recomendaciones a un asistente antes de buscar en Google. Trabajar esa visibilidad se llama <Box component={Link} href="/posicionamiento-geo" sx={linkSx}>GEO</Box> y empieza por datos de negocio coherentes en todas partes.</>,
  ],
]

const REVISO = [
  "Qué búsquedas con “Mataró” tienen volumen real para tu sector y cuáles son solo ruido.",
  "Quién ocupa hoy el mapa para esas búsquedas y qué tiene su ficha que la tuya no tiene.",
  "Si tu web dice claramente en qué parte de la ciudad estás y a qué zonas das servicio.",
  "Si tus datos de nombre, dirección y teléfono coinciden en Google, en tu web y en directorios.",
  "Qué páginas te faltan para cubrir cada servicio que de verdad quieres vender.",
]

function SectorBars() {
  return (
    <ArtifactWindow tag="mataró · empleo por sector" ratio="4 / 3">
      <Box sx={{ height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", gap: 1.5 }}>
        <Box>
          <Typography sx={{ fontFamily: fonts.serif, fontSize: { xs: 18, md: 20 }, fontWeight: 600, color: tokens.ink, lineHeight: 1.2 }}>
            43.950 afiliaciones en empresas de Mataró
          </Typography>
          <Typography sx={{ fontFamily: fonts.mono, fontSize: 10.5, color: tokens.muted, mt: 0.5 }}>régimen general · junio 2026 (p)</Typography>
        </Box>
        <Stack spacing={1.4}>
          {SECTORES.map((s) => (
            <Box key={s.label}>
              <Stack direction="row" sx={{ justifyContent: "space-between", mb: 0.5 }}>
                <Typography sx={{ fontSize: 13, fontWeight: 600, color: tokens.ink }}>{s.label}</Typography>
                <Typography sx={{ fontFamily: fonts.mono, fontSize: 12, color: tokens.body }}>{s.pct.toLocaleString("es-ES")} %</Typography>
              </Stack>
              <Box sx={{ height: 10, borderRadius: 999, bgcolor: tokens.surface, overflow: "hidden" }}>
                <Box sx={{ height: "100%", width: `${Math.max(s.pct, 0.8)}%`, bgcolor: s.label === "Servicios" ? tokens.petrol : `${tokens.petrol}66`, borderRadius: 999 }} />
              </Box>
            </Box>
          ))}
        </Stack>
        <Typography component="a" href={IDESCAT} target="_blank" rel="noopener" sx={{ fontFamily: fonts.mono, fontSize: 10, color: tokens.muted, textDecoration: "underline", textDecorationColor: tokens.line }}>
          fuente: Idescat, El municipio en cifras
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
        <Crumbs items={[{ label: "SEO en el Maresme", href: "/agencia-seo-maresme" }, { label: "Consultor SEO en Mataró" }]} />
        <Container sx={{ pt: { xs: 3, md: 4 }, pb: { xs: 8, md: 11 } }}>
          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1.1fr 0.9fr" }, gap: { xs: 5, md: 8 }, alignItems: "center" }}>
            <HeroReveal>
              <Box>
                <Typography variant="h1" sx={{ fontSize: { xs: 34, sm: 46, md: 56 }, letterSpacing: "-0.025em", color: tokens.ink, mb: 3 }}>
                  Consultor SEO en <Box component="em" sx={{ fontStyle: "italic", color: tokens.petrol }}>Mataró</Box>
                </Typography>
                <Typography variant="body1" sx={{ fontSize: { xs: 16, md: 18 }, color: tokens.body, maxWidth: 540, mb: 2 }}>
                  Mataró es la capital del Maresme y concentra casi el 30 % de los empleadores de la comarca. Eso quiere decir más gente buscando, pero también más competencia en cada búsqueda que lleva el nombre de la ciudad.
                </Typography>
                <Typography variant="body1" sx={{ fontSize: { xs: 16, md: 18 }, color: tokens.body, maxWidth: 540, mb: 3.5 }}>
                  Soy Óscar y trabajo desde Premià de Mar. Me encargo de que tu negocio salga en Google, en el mapa y en las respuestas de ChatGPT, y hablas siempre conmigo.
                </Typography>
                <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ alignItems: { sm: "center" }, flexWrap: "wrap", rowGap: 1 }}>
                  <PrimaryCTA />
                  <Typography variant="body2" sx={{ color: tokens.muted }}>Gratis y en 24-48 h.</Typography>
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
            Cómo es el tejido empresarial de Mataró
          </Typography>
          <Typography variant="body1" sx={{ fontSize: { xs: 16, md: 18 }, color: tokens.body, mb: { xs: 4, md: 6 }, maxWidth: 660 }}>
            Antes de proponer nada miro con qué mercado trabajo. Estas son las cifras oficiales que más pesan cuando el negocio es de Mataró, y lo que leo en cada una.
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
          Fuente: <Box component="a" href={IDESCAT} target="_blank" rel="noopener" sx={linkSx}>Idescat, El municipio en cifras: Mataró</Box>. Las cifras marcadas como provisionales son las últimas publicadas por el instituto.
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
            Posicionamiento web para un negocio de Mataró
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
              Lo que miro en la búsqueda local de Mataró
            </Typography>
            <Typography variant="body1" sx={{ color: tokens.body }}>
              No te digo qué sale hoy en el mapa sin haberlo mirado para tu sector. Esto es lo que reviso, búsqueda a búsqueda, en el diagnóstico.
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
            ¿Tu negocio no está en Mataró?
          </Typography>
          <Typography variant="body1" sx={{ color: tokens.body }}>
            Si estás en otro pueblo de la comarca, mira cómo trabajo el <Box component={Link} href="/agencia-seo-maresme" sx={linkSx}>SEO en el Maresme</Box>. Si estás al lado de mi base, tienes la página de <Box component={Link} href="/consultor-seo-premia-de-mar" sx={linkSx}>consultor SEO en Premià de Mar</Box>. Y si tu mercado es la capital, la de <Box component={Link} href="/consultor-seo-barcelona" sx={linkSx}>consultor SEO en Barcelona</Box>.
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
            Preguntas sobre el SEO en Mataró
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

export default function MataroMui({ faqs }: { faqs: [string, string][] }) {
  return (
    <Box sx={{ bgcolor: tokens.paper, color: tokens.body, fontFamily: fonts.sans }}>
      <SiteHeader />
      <Box component="main">
        <Hero />
        <Datos />
        <Frentes />
        <Reviso />
        <FeaturedCases
          title="Proyectos que puedes revisar"
          sub="La Clínica de la Ansiedad está en Canet de Mar, aquí al lado. Cada ficha cuenta qué hice y qué resultado tuvo."
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
