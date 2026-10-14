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

// Fuente de todas las cifras: Idescat, El municipio en cifras, código 080961
// (Granollers). Comprobadas en la API de Idescat el 14/10/2026.
const IDESCAT = "https://www.idescat.cat/emex/?id=080961&lang=es"

// Afiliaciones al régimen general según tamaño de la cuenta de cotización,
// junio de 2026 (provisional). Total 31.670.
const TAMANO = [
  { label: "1 a 9", pct: 15.9 },
  { label: "10 a 49", pct: 24.7 },
  { label: "50 a 249", pct: 25.9 },
  { label: "250 o más", pct: 33.5 },
]

const PERFIL: { k: string; v: string; d: string }[] = [
  { k: "Habitantes (2025)", v: "65.123", d: "en 14,87 km², capital del Vallès Oriental" },
  { k: "Empleo asalariado en empresas de Granollers", v: "31.670", d: "afiliaciones al régimen general, junio 2026 (p): el 23,4 % de toda la comarca" },
  { k: "Peso de la industria en ese empleo", v: "21,3 %", d: "6.740 afiliaciones; servicios suma 23.530 (74,3 %)" },
  { k: "PIB por habitante (2024, p)", v: "45.970 €", d: "índice 116,3 sobre una media catalana de 100" },
  { k: "Valor añadido del comercio (2023, p)", v: "442,5 M€", d: "el 23,6 % del valor que generan los servicios de la ciudad" },
]

const DOS: { t: string; items: string[] }[] = [
  {
    t: "Si vendes a otras empresas",
    items: [
      "Una página por familia de producto y por aplicación, con el vocabulario técnico que usa tu comprador.",
      "Fichas técnicas en HTML, no solo en PDF, para que Google y los asistentes puedan leerlas.",
      "Formulario de presupuesto medido: saber qué páginas traen contactos y cuáles solo visitas.",
    ],
  },
  {
    t: "Si atiendes al público en Granollers",
    items: [
      "Ficha de Google Business con categorías, horarios y fotos al día, y reseñas respondidas.",
      "Páginas de servicio que mencionen la ciudad con naturalidad, sin repetir el nombre en cada frase.",
      "Datos de contacto idénticos en la web, en Google y en los directorios donde ya apareces.",
    ],
  },
]

const ARRANQUE: [string, string][] = [
  ["Mapa de búsquedas", "Separo lo que buscan tus clientes con “Granollers” de lo que buscan sin ciudad, porque piden trabajos distintos."],
  ["Revisión técnica", "Indexación, velocidad, estructura de URLs y datos estructurados: lo que impide que lo bueno de tu web cuente."],
  ["Plan priorizado", "Una lista corta ordenada por impacto. Te digo qué hago yo, en qué orden y el precio cerrado tras el diagnóstico."],
]

function SizeBar() {
  return (
    <ArtifactWindow tag="granollers · tamaño de empresa" ratio="4 / 3">
      <Box sx={{ height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", gap: 2 }}>
        <Box>
          <Typography sx={{ fontFamily: fonts.serif, fontSize: { xs: 18, md: 20 }, fontWeight: 600, color: tokens.ink, lineHeight: 1.25 }}>
            Uno de cada tres asalariados trabaja en una empresa de 250 personas o más
          </Typography>
          <Typography sx={{ fontFamily: fonts.mono, fontSize: 10.5, color: tokens.muted, mt: 0.5 }}>afiliaciones por tamaño de la cuenta · junio 2026 (p)</Typography>
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
                <Typography sx={{ fontFamily: fonts.mono, fontSize: 13, fontWeight: 700, color: tokens.ink }}>{t.pct.toLocaleString("es-ES")} %</Typography>
                <Typography sx={{ fontSize: 11.5, color: tokens.muted }}>{t.label} trab.</Typography>
              </Box>
            ))}
          </Box>
        </Box>
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
        <Crumbs items={[{ label: "SEO en el Vallès Oriental", href: "/consultor-seo-valles-oriental" }, { label: "Consultor SEO en Granollers" }]} />
        <Container sx={{ pt: { xs: 3, md: 4 }, pb: { xs: 8, md: 11 } }}>
          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1.05fr 0.95fr" }, gap: { xs: 5, md: 8 }, alignItems: "center" }}>
            <HeroReveal>
              <Box>
                <Typography variant="h1" sx={{ fontSize: { xs: 34, sm: 46, md: 56 }, letterSpacing: "-0.025em", color: tokens.ink, mb: 3 }}>
                  Consultor SEO en <Box component="em" sx={{ fontStyle: "italic", color: tokens.petrol }}>Granollers</Box>
                </Typography>
                <Typography variant="body1" sx={{ fontSize: { xs: 16, md: 18 }, color: tokens.body, maxWidth: 540, mb: 3.5 }}>
                  En Granollers conviven la empresa industrial que vende a otras empresas y la tienda del centro que vive de su barrio. Las dos necesitan Google, pero no de la misma forma. Te ayudo a salir en las búsquedas que te traen pedidos, en el mapa y en ChatGPT, con un plan priorizado y hablando siempre conmigo.
                </Typography>
                <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ alignItems: { sm: "center" }, flexWrap: "wrap", rowGap: 1 }}>
                  <PrimaryCTA />
                  <Typography variant="body2" sx={{ color: tokens.muted }}>Lo tienes en 24-48 h, gratis.</Typography>
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
                El perfil económico de Granollers
              </Typography>
              <Typography variant="body1" sx={{ color: tokens.body, mb: 2 }}>
                El 21,3 % del empleo asalariado está en la industria, frente al 14,6 % del conjunto de Cataluña, y el comercio pesa casi una cuarta parte de los servicios. Para el SEO eso significa que hay dos tipos de búsqueda muy distintos en la misma ciudad.
              </Typography>
              <Typography variant="body2" sx={{ color: tokens.muted }}>
                Fuente: <Box component="a" href={IDESCAT} target="_blank" rel="noopener" sx={linkSx}>Idescat, El municipio en cifras: Granollers</Box>. (p) = dato provisional.
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
            Dos formas de posicionar una empresa de Granollers
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
            Muchas empresas necesitan un poco de cada. En los dos casos añado el trabajo de <Box component={Link} href="/posicionamiento-geo" sx={linkSx}>GEO</Box> para que los asistentes como ChatGPT te tengan en cuenta, y si tienes tienda online, el <Box component={Link} href="/servicios/crecimiento-ecommerce" sx={linkSx}>SEO para ecommerce</Box>.
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
            Por dónde empiezo
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
            Si tu empresa está en otro municipio de la comarca, tienes la página de <Box component={Link} href="/consultor-seo-valles-oriental" sx={linkSx}>SEO en el Vallès Oriental</Box>. Si tu mercado principal es la capital, la de <Box component={Link} href="/consultor-seo-barcelona" sx={linkSx}>consultor SEO en Barcelona</Box>.
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
            Lo que suelen preguntar las empresas
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

export default function GranollersMui({ faqs }: { faqs: [string, string][] }) {
  return (
    <Box sx={{ bgcolor: tokens.paper, color: tokens.body, fontFamily: fonts.sans }}>
      <SiteHeader />
      <Box component="main">
        <Hero />
        <Perfil />
        <DosCaminos />
        <Arranque />
        <FeaturedCases
          title="Trabajo publicado, con su resultado"
          sub="Una web de ventanas a medida que capta presupuestos y una tienda online de farmacia. Cada ficha detalla qué hice."
          slugs={["totfinestra", "farmacia-garcia-del-cerro"]}
        />
        <Faq faqs={faqs} />
        <DiagnosticoCTA />
      </Box>
      <SiteFooter />
    </Box>
  )
}
