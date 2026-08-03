"use client"

import Link from "next/link"
import Image from "next/image"
import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import Accordion from "@mui/material/Accordion"
import AccordionSummary from "@mui/material/AccordionSummary"
import AccordionDetails from "@mui/material/AccordionDetails"
import { motion, useReducedMotion } from "motion/react"
import { tokens, fonts } from "@/lib/mui/theme"
import { SiteHeader, SiteFooter, StatementBand, DiagnosticoCTA, Reveal, Crumbs, Blueprint, ArtifactWindow } from "@/components/mui/shared"
import FeaturedCases from "@/components/mui/FeaturedCases"

const linkSx = { color: tokens.ink, fontWeight: 600, textDecoration: "underline", textDecorationColor: tokens.line, "&:hover": { textDecorationColor: tokens.petrol } } as const

const PACK = [
  { name: "Tu negocio", meta: "a 400 m · abierto ahora", rating: "4,9", rank: "1º", top: true },
  { name: "La competencia", meta: "a 1,3 km", rating: null, rank: "2º", top: false },
  { name: "Otro del sector", meta: "a 2,1 km", rating: null, rank: "3º", top: false },
]

const HAGO: [string, React.ReactNode][] = [
  [
    "SEO local: que te encuentren en tu pueblo",
    "Ficha de Google Business optimizada, las búsquedas de “cerca de mí” y las reseñas trabajadas, para que salgas tú cuando alguien busca lo tuyo en tu pueblo, no el de la calle de al lado.",
  ],
  [
    "SEO para tiendas online",
    <>Mi especialidad: <Box component={Link} href="/agencia-woocommerce" sx={linkSx}>WooCommerce</Box> y <Box component={Link} href="/agencia-shopify" sx={linkSx}>Shopify</Box>, fichas de producto y categorías que posicionan y venden, no solo que existen.</>,
  ],
  [
    "Aparecer también en ChatGPT y las IA",
    <>Cada vez más gente pregunta a ChatGPT o Perplexity qué comprar o a quién contratar. Trabajo para que ahí también aparezcas tú: es lo que llamo <Box component={Link} href="/blog/que-es-geo" sx={linkSx}>GEO, y te lo explico aquí</Box>.</>,
  ],
]

const TRABAJO: [string, React.ReactNode][] = [
  [
    "Primero auditoría, después propuesta",
    <>Empiezo mirando tu web de verdad, con capturas y datos concretos, no una plantilla. De ahí sale qué haría y en qué orden. Es una <Box component={Link} href="/servicios/auditoria-seo-geo" sx={linkSx}>auditoría real</Box>, no un informe genérico.</>,
  ],
  [
    "Trabajo dentro de tu web, no desde fuera",
    "No te entrego un PDF de recomendaciones para que las apliques tú. Los cambios los hago yo, sobre tu web, y los ves hechos.",
  ],
  [
    "Sin permanencia y sin jerga",
    "Contratos claros, sin ataduras, y todo explicado para dueños de negocio, no para SEOs. Si algo no se entiende, es que lo he explicado mal.",
  ],
]

const FAQS: [string, React.ReactNode][] = [
  [
    "¿Cuánto cuesta un consultor SEO en el Maresme?",
    <>Depende del negocio y del punto de partida. Una <Box component={Link} href="/servicios/auditoria-seo-geo" sx={linkSx}>auditoría completa</Box> empieza en 500€, precio cerrado que sabes antes de empezar. El acompañamiento continuo se ajusta al alcance de tu caso, y el número exacto sale del diagnóstico gratis, sin sorpresas por email.</>,
  ],
  [
    "¿Trabajas solo con tiendas online?",
    "No. También trabajo negocio local: comercios, servicios y profesionales de la comarca. El ecommerce es mi especialidad, pero el SEO local de un negocio de Mataró o Premià lo hago igual de a fondo.",
  ],
  [
    "¿En cuánto tiempo se ven resultados?",
    "En meses, no en semanas. El SEO no es un anuncio que enciendes y apagas: los primeros movimientos se notan hacia el segundo o tercer mes y lo sólido llega sobre los seis, según la competencia de tu sector y de dónde partas. Quien te prometa la primera posición en dos semanas, te está mintiendo.",
  ],
  [
    "¿Nos podemos ver en persona?",
    "Sí. Estoy en Premià de Mar y me muevo por la comarca, así que para lo importante nos vemos. Y si lo prefieres, todo por videollamada, que el SEO no necesita coche.",
  ],
]

function Star() {
  return (
    <Box component="svg" viewBox="0 0 12 12" sx={{ width: 11, height: 11, flexShrink: 0 }} aria-hidden>
      <path d="M6 1 L7.4 4.4 L11 4.7 L8.2 7.1 L9.1 10.6 L6 8.7 L2.9 10.6 L3.8 7.1 L1 4.7 L4.6 4.4 Z" fill={tokens.petrol} />
    </Box>
  )
}

// Mock del pack local de Google: tu negocio el primero cuando te buscan cerca.
// Mismo lenguaje que el resto de artefactos del sitio (chat del agente, tienda).
function LocalPack() {
  const reduce = useReducedMotion()
  return (
    <ArtifactWindow tag="google · resultados locales" ratio="4 / 3">
      <Box sx={{ height: "100%", display: "flex", flexDirection: "column", gap: 1.25 }}>
        {/* barra de búsqueda */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1, border: `1px solid ${tokens.line}`, borderRadius: 999, bgcolor: tokens.win, px: 1.5, py: 0.9 }}>
          <Box component="svg" viewBox="0 0 24 24" sx={{ width: 14, height: 14, flexShrink: 0 }} fill="none" stroke={tokens.muted} strokeWidth={2} strokeLinecap="round" aria-hidden>
            <circle cx="10.5" cy="10.5" r="6.5" /><path d="M20 20l-4.5-4.5" />
          </Box>
          <Typography sx={{ fontSize: 13, color: tokens.body }}>reformas en el Maresme</Typography>
        </Box>
        {/* pack de 3 resultados; el primero, tu negocio */}
        <Stack spacing={1} sx={{ flex: 1, minHeight: 0 }}>
          {PACK.map((r, i) => (
            <Box key={r.name} component={motion.div}
              initial={reduce ? false : { opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 + i * 0.12, duration: 0.35 }}
              sx={{ display: "flex", alignItems: "center", gap: 1.25, borderRadius: 2, px: 1.25, py: 1, border: `1px solid ${r.top ? `${tokens.petrol}44` : tokens.lineSoft}`, bgcolor: r.top ? `${tokens.petrol}0d` : tokens.win }}>
              <Box sx={{ width: 30, height: 30, flexShrink: 0, borderRadius: 1.25, bgcolor: r.top ? tokens.petrol : tokens.surface, display: "grid", placeItems: "center" }}>
                <Typography sx={{ fontFamily: fonts.mono, fontSize: 12, fontWeight: 700, color: r.top ? tokens.paper : tokens.muted }}>{r.rank}</Typography>
              </Box>
              <Box sx={{ flex: 1, minWidth: 0 }}>
                <Typography sx={{ fontSize: 13, fontWeight: r.top ? 700 : 600, color: tokens.ink, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{r.name}</Typography>
                <Stack direction="row" spacing={0.6} sx={{ alignItems: "center", mt: 0.15 }}>
                  {r.rating && <Star />}
                  <Typography sx={{ fontFamily: fonts.mono, fontSize: 10.5, color: tokens.muted, whiteSpace: "nowrap" }}>{r.rating ? `${r.rating} · ${r.meta}` : r.meta}</Typography>
                </Stack>
              </Box>
              {r.top && (
                <Box sx={{ flexShrink: 0, bgcolor: `${tokens.petrol}14`, border: `1px solid ${tokens.petrol}33`, borderRadius: 999, px: 1, py: 0.3 }}>
                  <Typography sx={{ fontFamily: fonts.mono, fontSize: 9.5, fontWeight: 700, color: tokens.petrol }}>en el mapa</Typography>
                </Box>
              )}
            </Box>
          ))}
        </Stack>
        <Typography sx={{ fontFamily: fonts.mono, fontSize: 9.5, color: tokens.muted }}>el pack local de Google · donde se decide la llamada</Typography>
      </Box>
    </ArtifactWindow>
  )
}

function Hero() {
  return (
    <Box component="section" sx={{ position: "relative", overflow: "hidden", borderBottom: `1px solid ${tokens.lineSoft}` }}>
      <Blueprint />
      <Container sx={{ position: "relative", zIndex: 1, pt: { xs: 5, md: 6 }, pb: { xs: 8, md: 11 } }}>
        <Crumbs items={[{ label: "SEO local en Catalunya", href: "/seo-catalunya" }, { label: "Maresme" }]} />
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1.08fr 0.92fr" }, gap: { xs: 5, md: 8 }, alignItems: "center", mt: { xs: 2, md: 3 } }}>
          <Reveal>
            <Box>
              <Typography variant="h1" sx={{ fontSize: { xs: 34, sm: 46, md: 56 }, letterSpacing: "-0.025em", color: tokens.ink, mb: 3 }}>
                Consultor SEO en el <Box component="em" sx={{ fontStyle: "italic", color: tokens.petrol }}>Maresme</Box>.
              </Typography>
              <Typography variant="body1" sx={{ fontSize: { xs: 16, md: 18 }, color: tokens.body, maxWidth: 520, mb: 3.5 }}>
                Soy Óscar, consultor SEO independiente. Vivo y trabajo en el Maresme. Ayudo a negocios y tiendas online de la comarca a salir en Google y a vender más. Sin intermediarios: hablas conmigo y el trabajo lo hago yo.
              </Typography>
              <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ alignItems: { sm: "center" }, flexWrap: "wrap", rowGap: 1 }}>
                <Button component={Link} href="/diagnostico" variant="contained" color="primary" sx={{ borderRadius: 2, width: { xs: "100%", sm: "auto" } }}>
                  Reserva tu diagnóstico <Box component="span" sx={{ ml: 0.75 }}>→</Box>
                </Button>
                <Typography variant="body2" sx={{ color: tokens.muted }}>Gratis, y te digo qué haría con tu web.</Typography>
              </Stack>
            </Box>
          </Reveal>
          <Reveal delay={0.1}>
            <LocalPack />
          </Reveal>
        </Box>
      </Container>
    </Box>
  )
}

// Sección editorial de filas con hairline: NO tres tarjetas iguales.
function Hago() {
  return (
    <Box component="section" sx={{ py: { xs: 8, md: 12 }, borderBottom: `1px solid ${tokens.lineSoft}` }}>
      <Container sx={{ maxWidth: 860 }}>
        <Reveal>
          <Typography variant="h2" sx={{ fontSize: { xs: 28, md: 40 }, color: tokens.ink, mb: 2, maxWidth: 620 }}>
            Qué hago por los negocios del Maresme.
          </Typography>
          <Typography variant="body1" sx={{ fontSize: { xs: 16, md: 18 }, color: tokens.body, mb: { xs: 4, md: 6 }, maxWidth: 620 }}>
            Tres frentes, un objetivo: que te encuentren y que te contraten. Sin paquetes cerrados, empiezo por lo que más mueve la aguja en tu negocio.
          </Typography>
        </Reveal>
        <Stack>
          {HAGO.map(([t, d], i) => (
            <Reveal key={t} delay={i * 0.05}>
              <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "0.9fr 1.1fr" }, gap: { xs: 1, sm: 4 }, py: { xs: 3, md: 3.5 }, borderTop: i === 0 ? "none" : `1px solid ${tokens.lineSoft}` }}>
                <Typography component="h3" sx={{ fontFamily: fonts.serif, fontSize: { xs: 20, md: 23 }, fontWeight: 600, color: tokens.ink }}>{t}</Typography>
                <Typography variant="body1" sx={{ color: tokens.body }}>{d}</Typography>
              </Box>
            </Reveal>
          ))}
        </Stack>
      </Container>
    </Box>
  )
}

// Índice numerado grande: familia de layout distinta a la anterior.
function Trabajo() {
  return (
    <Box component="section" sx={{ py: { xs: 8, md: 12 }, borderBottom: `1px solid ${tokens.lineSoft}` }}>
      <Container>
        <Reveal>
          <Typography variant="h2" sx={{ fontSize: { xs: 28, md: 40 }, color: tokens.ink, mb: 2, maxWidth: 620 }}>
            Cómo trabajo.
          </Typography>
          <Typography variant="body1" sx={{ fontSize: { xs: 16, md: 18 }, color: tokens.body, mb: { xs: 5, md: 7 }, maxWidth: 620 }}>
            Nada de humo ni de informes que acaban en un cajón. Así es trabajar conmigo, de principio a fin.
          </Typography>
        </Reveal>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr 1fr" }, gap: { xs: 4, md: 5 } }}>
          {TRABAJO.map(([t, d], i) => (
            <Reveal key={t} delay={i * 0.07}>
              <Box>
                <Typography aria-hidden sx={{ fontFamily: fonts.serif, fontStyle: "italic", fontSize: { xs: 34, md: 44 }, lineHeight: 1, color: tokens.petrol, opacity: 0.85, mb: 1.5 }}>{`0${i + 1}`}</Typography>
                <Typography component="h3" sx={{ fontFamily: fonts.serif, fontSize: { xs: 20, md: 22 }, fontWeight: 600, color: tokens.ink, mb: 1 }}>{t}</Typography>
                <Typography variant="body1" sx={{ color: tokens.body, maxWidth: 420 }}>{d}</Typography>
              </Box>
            </Reveal>
          ))}
        </Box>
      </Container>
    </Box>
  )
}

function Comarca() {
  return (
    <Box component="section" sx={{ py: { xs: 8, md: 12 }, borderBottom: `1px solid ${tokens.lineSoft}` }}>
      <Container>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1.05fr 0.95fr" }, gap: { xs: 4, md: 7 }, alignItems: "center" }}>
          <Reveal>
            <Box>
              <Typography variant="h2" sx={{ fontSize: { xs: 28, md: 40 }, color: tokens.ink, mb: 2.5, maxWidth: 560 }}>
                Trabajo en todo el Maresme.
              </Typography>
              <Typography variant="body1" sx={{ fontSize: { xs: 16, md: 18 }, color: tokens.body, mb: 2.5, maxWidth: 520 }}>
                Vivir aquí no es un detalle de marketing: es saber cómo compra la gente de la comarca, qué busca y a quién ya conoce. Esa ventaja se nota en cada proyecto, tengas una tienda a pie de calle en Mataró o vendas a toda España desde un local en Vilassar.
              </Typography>
              <Typography variant="body1" sx={{ fontSize: { xs: 16, md: 18 }, color: tokens.body, maxWidth: 520 }}>
                Estoy en la comarca y me muevo por ella: Mataró, Premià de Mar, Vilassar de Mar, Sant Celoni, Canet, Arenys, Pineda. Y si lo prefieres, todo por videollamada, que el SEO no necesita coche.
              </Typography>
            </Box>
          </Reveal>
          <Reveal delay={0.1}>
            <Box sx={{ position: "relative", borderRadius: 3, overflow: "hidden", border: `1px solid ${tokens.line}`, aspectRatio: "4 / 3" }}>
              <Image src="/assets/gen/photo-maresme-negocio.png" alt="Dueño de un pequeño negocio del Maresme en la puerta de su tienda" fill sizes="(max-width: 900px) 100vw, 44vw" style={{ objectFit: "cover" }} />
            </Box>
          </Reveal>
        </Box>
      </Container>
    </Box>
  )
}

function Faq() {
  return (
    <Box component="section" sx={{ py: { xs: 8, md: 12 }, borderBottom: `1px solid ${tokens.lineSoft}` }}>
      <Container sx={{ maxWidth: 760 }}>
        <Reveal>
          <Typography variant="h2" sx={{ fontSize: { xs: 28, md: 40 }, color: tokens.ink, mb: { xs: 4, md: 6 } }}>
            Preguntas frecuentes.
          </Typography>
        </Reveal>
        {FAQS.map(([q, a], i) => (
          <Accordion key={i} disableGutters elevation={0} sx={{ bgcolor: "transparent", borderBottom: `1px solid ${tokens.lineSoft}`, "&:before": { display: "none" } }}>
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

export default function MaresmeMui() {
  return (
    <Box sx={{ bgcolor: tokens.paper, color: tokens.body, fontFamily: fonts.sans }}>
      <SiteHeader />
      <Hero />
      <Hago />
      <Trabajo />
      <StatementBand as="p" title="Cuando alguien de tu zona busca lo que vendes, o sales tú o sale tu competencia." photo="/assets/gen/photo-maresme.png" />
      <FeaturedCases
        title="Casos reales de la comarca."
        sub="Proyectos con lo que hice y su resultado. Cada uno enlaza a su ficha."
        slugs={["totfinestra", "marea-es"]}
      />
      <Comarca />
      <Faq />
      <DiagnosticoCTA />
      <SiteFooter />
    </Box>
  )
}
