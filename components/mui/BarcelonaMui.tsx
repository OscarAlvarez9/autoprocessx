"use client"

import Link from "next/link"
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
import { SiteHeader, SiteFooter, StatementBand, DiagnosticoCTA, Reveal, HeroReveal, Crumbs, Blueprint, ArtifactWindow, PrimaryCTA } from "@/components/mui/shared"
import FeaturedCases from "@/components/mui/FeaturedCases"

const linkSx = { color: tokens.ink, fontWeight: 600, textDecoration: "underline", textDecorationColor: tokens.line, "&:hover": { textDecorationColor: tokens.petrol } } as const

// Mock ilustrativo del pack local: sin valoraciones ni distancias inventadas.
const PACK = [
  { name: "Tu negocio", meta: "ficha completa · reseñas respondidas", rank: "1º", top: true },
  { name: "La competencia", meta: "ficha a medias", rank: "2º", top: false },
  { name: "Otro del sector", meta: "sin fotos ni horario", rank: "3º", top: false },
]

const DIFERENCIA: [string, string][] = [
  [
    "Hablas con quien hace el trabajo",
    "Trabajo solo. No hay cuenta comercial que te venda el proyecto y luego lo pase a otra persona: quien te escucha en la primera llamada es quien analiza tu web y hace los cambios.",
  ],
  [
    "Decides con datos, no con un informe estándar",
    "Miro tu Search Console, tu analítica y tu competencia real en Barcelona. Cada propuesta llega con el porqué y con lo que espero de ella, para que decidas tú con los números delante.",
  ],
  [
    "Sin paquetes cerrados",
    "No te vendo horas ni un plan igual para todos. Empiezo por lo que más mueve la aguja en tu negocio, y si algo no tiene sentido para ti, te lo digo antes de cobrarlo.",
  ],
]

const SERVICIOS: { t: string; d: string; href: string; cta: string }[] = [
  {
    t: "SEO para ecommerce",
    d: "Mi especialidad. Categorías y fichas de producto que posicionan y venden, SEO técnico de la tienda y contenido que responde a lo que busca tu cliente.",
    href: "/servicios/crecimiento-ecommerce",
    cta: "Crecimiento ecommerce",
  },
  {
    t: "Auditoría SEO y GEO",
    d: "El mapa completo antes de tocar nada: qué frena tu web en Google y en los asistentes de IA, y en qué orden lo arreglaría.",
    href: "/servicios/auditoria-seo-geo",
    cta: "Auditoría SEO y GEO",
  },
  {
    t: "Posicionamiento en ChatGPT y Google AI",
    d: "Cada vez más gente pregunta a ChatGPT o Perplexity a quién contratar o qué comprar. Trabajo para que tu marca aparezca también en esas respuestas.",
    href: "/posicionamiento-geo",
    cta: "Posicionamiento GEO",
  },
  {
    t: "Shopify y WooCommerce",
    d: "Trabajo sobre la plataforma que ya tienes, sin migrar. Conozco cómo posiciona cada una y dónde suele perder ventas.",
    href: "/agencia-shopify",
    cta: "Shopify",
  },
]

const LOCAL: [string, string][] = [
  ["Google Business Profile", "Categorías, servicios, horarios, fotos y publicaciones bien trabajados, para que tu ficha sea la que inspira confianza."],
  ["Reseñas", "Un sistema sencillo para pedirlas y responderlas, porque en el mapa pesan tanto para Google como para quien elige."],
  ["Páginas de barrio y de servicio", "Contenido en tu web que conecta lo que haces con dónde lo haces, sin páginas clonadas que Google ignora."],
  ["Datos de negocio coherentes", "El mismo nombre, dirección y teléfono en tu web, tu ficha y los directorios, para que Google no dude de quién eres."],
]

const METODO: [string, string][] = [
  ["Diagnóstico", "Analizo tu web con tus datos reales y te digo dónde se te escapan clientes. Lo tienes en 24-48 h."],
  ["Estrategia", "Qué tocar, en qué orden y por qué, priorizado por impacto en tu negocio."],
  ["Implementación", "Los cambios los hago yo, sobre tu web y tu plataforma actual."],
  ["Seguimiento", "Mido con tus datos contra el plan y ajusto mes a mes."],
]

const FAQS: [string, React.ReactNode][] = [
  [
    "¿Cuánto cuesta un consultor SEO en Barcelona?",
    "Depende de tu web, de tu sector y de dónde partas, así que no trabajo con tarifas de catálogo. Trabajo con precio cerrado tras el diagnóstico: sabes lo que pagas antes de empezar, sin sorpresas a mitad de proyecto.",
  ],
  [
    "¿Qué diferencia hay entre un consultor SEO y una agencia SEO en Barcelona?",
    "Con una agencia sueles hablar con una cuenta comercial y el trabajo lo hace otra persona. Conmigo hablas con quien analiza tu web y hace los cambios, porque trabajo solo. Las decisiones se toman con tus datos encima de la mesa, no con un informe estándar.",
  ],
  [
    "¿Trabajas solo con tiendas online?",
    "No. El ecommerce es mi especialidad, pero también trabajo el SEO de negocios locales, servicios y profesionales de Barcelona, incluido el SEO local en Google Maps.",
  ],
  [
    "¿Cuánto tarda el diagnóstico?",
    <>Lo tienes en 24-48 h. Es gratis y te digo qué haría con tu web y en qué orden, sigamos juntos o no. <Box component={Link} href="/diagnostico" sx={linkSx}>Resérvalo aquí</Box>.</>,
  ],
  [
    "¿También me puedes ayudar a salir en ChatGPT?",
    <>Sí. Es lo que se llama <Box component={Link} href="/posicionamiento-geo" sx={linkSx}>GEO</Box>: trabajar tu web y tu marca para que los asistentes como ChatGPT, Perplexity o las respuestas con IA de Google te mencionen cuando alguien pregunta por lo que vendes.</>,
  ],
]

function Pin() {
  return (
    <Box component="svg" viewBox="0 0 24 24" sx={{ width: 13, height: 13, flexShrink: 0 }} fill="none" stroke={tokens.petrol} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M12 21s-6-5.6-6-10.5a6 6 0 1 1 12 0C18 15.4 12 21 12 21z" /><circle cx="12" cy="10.5" r="2.2" />
    </Box>
  )
}

// Pack local de Google en Barcelona: tu negocio arriba cuando te buscan cerca.
function LocalPack() {
  const reduce = useReducedMotion()
  return (
    <ArtifactWindow tag="google maps · barcelona" ratio="4 / 3">
      <Box sx={{ height: "100%", display: "flex", flexDirection: "column", gap: 1.25 }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1, border: `1px solid ${tokens.line}`, borderRadius: 999, bgcolor: tokens.win, px: 1.5, py: 0.9 }}>
          <Box component="svg" viewBox="0 0 24 24" sx={{ width: 14, height: 14, flexShrink: 0 }} fill="none" stroke={tokens.muted} strokeWidth={2} strokeLinecap="round" aria-hidden>
            <circle cx="10.5" cy="10.5" r="6.5" /><path d="M20 20l-4.5-4.5" />
          </Box>
          <Typography sx={{ fontSize: 13, color: tokens.body }}>fisioterapeuta cerca de mí</Typography>
        </Box>
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
                  {r.top && <Pin />}
                  <Typography sx={{ fontFamily: fonts.mono, fontSize: 10.5, color: tokens.muted, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{r.meta}</Typography>
                </Stack>
              </Box>
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
        <Crumbs items={[{ label: "SEO en Catalunya", href: "/seo-catalunya" }, { label: "Consultor SEO en Barcelona" }]} />
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1.08fr 0.92fr" }, gap: { xs: 5, md: 8 }, alignItems: "center", mt: { xs: 2, md: 3 } }}>
          <HeroReveal>
            <Box>
              <Typography variant="h1" sx={{ fontSize: { xs: 34, sm: 46, md: 56 }, letterSpacing: "-0.025em", color: tokens.ink, mb: 3 }}>
                Consultor SEO en <Box component="em" sx={{ fontStyle: "italic", color: tokens.petrol }}>Barcelona</Box>
              </Typography>
              <Typography variant="body1" sx={{ fontSize: { xs: 16, md: 18 }, color: tokens.body, maxWidth: 530, mb: 3.5 }}>
                Soy Óscar, consultor SEO freelance. Ayudo a tiendas online y negocios de Barcelona a conseguir más clientes desde Google y a aparecer también en ChatGPT. Sin intermediarios: hablas conmigo, el trabajo lo hago yo y decides con datos reales.
              </Typography>
              <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ alignItems: { sm: "center" }, flexWrap: "wrap", rowGap: 1 }}>
                <Button component={Link} href="/diagnostico" variant="contained" color="primary" sx={{ borderRadius: 2, width: { xs: "100%", sm: "auto" } }}>
                  Reserva tu diagnóstico <Box component="span" sx={{ ml: 0.75 }}>→</Box>
                </Button>
                <Typography variant="body2" sx={{ color: tokens.muted }}>Gratis, en 24-48 h.</Typography>
              </Stack>
            </Box>
          </HeroReveal>
          <Reveal delay={0.1}>
            <LocalPack />
          </Reveal>
        </Box>
      </Container>
    </Box>
  )
}

// Consultor frente a agencia: filas editoriales con hairline.
function Diferencia() {
  return (
    <Box component="section" sx={{ py: { xs: 8, md: 12 }, borderBottom: `1px solid ${tokens.lineSoft}` }}>
      <Container sx={{ maxWidth: 860 }}>
        <Reveal>
          <Typography variant="h2" sx={{ fontSize: { xs: 28, md: 40 }, color: tokens.ink, mb: 2, maxWidth: 680 }}>
            Qué cambia con un consultor y no con una agencia SEO en Barcelona.
          </Typography>
          <Typography variant="body1" sx={{ fontSize: { xs: 16, md: 18 }, color: tokens.body, mb: { xs: 4, md: 6 }, maxWidth: 640 }}>
            En Barcelona hay muchas agencias de SEO, y algunas lo hacen muy bien. Lo que yo ofrezco es otra forma de trabajar: un experto SEO que lleva tu proyecto de principio a fin.
          </Typography>
        </Reveal>
        <Stack>
          {DIFERENCIA.map(([t, d], i) => (
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

// Servicios en rejilla 2x2 con enlace a cada página.
function Servicios() {
  return (
    <Box component="section" sx={{ py: { xs: 8, md: 12 }, borderBottom: `1px solid ${tokens.lineSoft}` }}>
      <Container>
        <Reveal>
          <Typography variant="h2" sx={{ fontSize: { xs: 28, md: 40 }, color: tokens.ink, mb: 2, maxWidth: 640 }}>
            Posicionamiento SEO en Barcelona: en qué te ayudo.
          </Typography>
          <Typography variant="body1" sx={{ fontSize: { xs: 16, md: 18 }, color: tokens.body, maxWidth: 620, mb: { xs: 5, md: 7 } }}>
            Cuatro frentes con un mismo objetivo: que te encuentren quienes ya buscan lo que vendes, y que acaben comprando o llamando.
          </Typography>
        </Reveal>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap: { xs: 4, md: 5 } }}>
          {SERVICIOS.map((s, i) => (
            <Reveal key={s.t} delay={(i % 2) * 0.06}>
              <Box sx={{ borderTop: `2px solid ${tokens.line}`, pt: 2.5 }}>
                <Typography sx={{ fontFamily: fonts.mono, fontSize: 12, color: tokens.petrol, mb: 1 }}>{`0${i + 1}`}</Typography>
                <Typography component="h3" sx={{ fontFamily: fonts.serif, fontSize: 21, fontWeight: 600, color: tokens.ink, mb: 1 }}>{s.t}</Typography>
                <Typography variant="body1" sx={{ color: tokens.body, maxWidth: 480, mb: 1.5 }}>{s.d}</Typography>
                {s.href === "/agencia-shopify" ? (
                  <Typography variant="body2">
                    <Box component={Link} href="/agencia-shopify" sx={linkSx}>Shopify</Box>
                    <Box component="span" sx={{ color: tokens.muted }}> · </Box>
                    <Box component={Link} href="/agencia-woocommerce" sx={linkSx}>WooCommerce</Box>
                  </Typography>
                ) : (
                  <Typography variant="body2">
                    <Box component={Link} href={s.href} sx={linkSx}>{s.cta}</Box>
                  </Typography>
                )}
              </Box>
            </Reveal>
          ))}
        </Box>
      </Container>
    </Box>
  )
}

function Local() {
  return (
    <Box component="section" sx={{ py: { xs: 8, md: 12 }, borderBottom: `1px solid ${tokens.lineSoft}` }}>
      <Container sx={{ maxWidth: 860 }}>
        <Reveal>
          <Typography variant="h2" sx={{ fontSize: { xs: 28, md: 40 }, color: tokens.ink, mb: 2, maxWidth: 640 }}>
            SEO local en Barcelona: salir en Google Maps.
          </Typography>
          <Typography variant="body1" sx={{ fontSize: { xs: 16, md: 18 }, color: tokens.body, mb: { xs: 4, md: 6 }, maxWidth: 640 }}>
            Si tienes un negocio con clientes en la ciudad, buena parte de las llamadas se decide en el mapa, antes de que nadie entre en tu web. En una ciudad con tanta competencia por barrio, no basta con tener la ficha: hay que trabajarla.
          </Typography>
        </Reveal>
        <Stack>
          {LOCAL.map(([t, d], i) => (
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

// Resumen del método: índice numerado, enlaza a /metodo para el detalle.
function Metodo() {
  return (
    <Box component="section" sx={{ py: { xs: 8, md: 12 }, borderBottom: `1px solid ${tokens.lineSoft}` }}>
      <Container>
        <Reveal>
          <Typography variant="h2" sx={{ fontSize: { xs: 28, md: 40 }, color: tokens.ink, mb: 2, maxWidth: 620 }}>
            Cómo trabajo.
          </Typography>
          <Typography variant="body1" sx={{ fontSize: { xs: 16, md: 18 }, color: tokens.body, mb: { xs: 5, md: 7 }, maxWidth: 620 }}>
            Cuatro fases, siempre con tus datos reales. Tienes el detalle de cada una en <Box component={Link} href="/metodo" sx={linkSx}>mi método de trabajo</Box>.
          </Typography>
        </Reveal>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "repeat(4, 1fr)" }, gap: { xs: 4, md: 4 } }}>
          {METODO.map(([t, d], i) => (
            <Reveal key={t} delay={i * 0.07}>
              <Box>
                <Typography aria-hidden sx={{ fontFamily: fonts.serif, fontStyle: "italic", fontSize: { xs: 34, md: 44 }, lineHeight: 1, color: tokens.petrol, opacity: 0.85, mb: 1.5 }}>{`0${i + 1}`}</Typography>
                <Typography component="h3" sx={{ fontFamily: fonts.serif, fontSize: { xs: 20, md: 22 }, fontWeight: 600, color: tokens.ink, mb: 1 }}>{t}</Typography>
                <Typography variant="body1" sx={{ color: tokens.body }}>{d}</Typography>
              </Box>
            </Reveal>
          ))}
        </Box>
        <Box sx={{ mt: { xs: 5, md: 6 } }}>
          <PrimaryCTA variant="text" />
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

export default function BarcelonaMui() {
  return (
    <Box sx={{ bgcolor: tokens.paper, color: tokens.body, fontFamily: fonts.sans }}>
      <SiteHeader />
      <Hero />
      <Diferencia />
      <Servicios />
      <Local />
      <StatementBand as="p" title="Cuando alguien en Barcelona busca lo que vendes, o sales tú o sale tu competencia." photo="/assets/gen/photo-catalunya.png" />
      <FeaturedCases
        title="Casos reales."
        sub="Proyectos con lo que hice y su resultado. Cada uno enlaza a su ficha."
        slugs={["marea-es", "farmacia-garcia-del-cerro", "clinica-de-la-ansiedad"]}
      />
      <Metodo />
      <Faq />
      <DiagnosticoCTA />
      <SiteFooter />
    </Box>
  )
}
