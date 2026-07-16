"use client"

import Link from "next/link"
import Image from "next/image"
import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import Paper from "@mui/material/Paper"
import Accordion from "@mui/material/Accordion"
import AccordionSummary from "@mui/material/AccordionSummary"
import AccordionDetails from "@mui/material/AccordionDetails"
import { tokens, fonts } from "@/lib/mui/theme"
import { SiteHeader, SiteFooter, DiagnosticoCTA, ServiceHero, StatementBand, Reveal, ArtifactWindow, Crumbs } from "@/components/mui/shared"
import FeaturedCases from "@/components/mui/FeaturedCases"
import { GeoAnswer, Gauge, StoreTemplate, DatosIntuicion } from "@/components/mui/artifacts"
import { RankClimb, FunnelLeakFix } from "@/components/mui/growthArtifacts"

/* ---------- datos ---------- */

const SEO_GEO = [
  { t: "Landing y categorías", d: "Cómo indexan y rankean tus páginas de aterrizaje y categorías: arquitectura, contenido e intención de búsqueda. Qué páginas sobran, cuáles faltan y cuáles se pisan entre sí." },
  { t: "Fichas de producto", d: "Título, contenido, Schema de producto y señales de compra. Que la ficha rankee y venda, no solo una de las dos cosas." },
  { t: "GEO · AI Search", d: "Si ChatGPT, Perplexity o los AI Overviews citan tu tienda cuando alguien pregunta qué comprar, y qué te falta para que lo hagan: datos de marca estructurados y contenido citable." },
]

const FUNNEL = [
  { n: "01", t: "Ficha de producto", d: "Dudas sin responder, fotos que no venden, botón de compra que no se ve. La venta empieza a perderse aquí." },
  { n: "02", t: "Carrito", d: "Costes sorpresa, pasos de más, distracciones que sacan al comprador del camino." },
  { n: "03", t: "Checkout", d: "Formularios eternos, métodos de pago que faltan, errores que nadie está vigilando." },
]

const TRACKING = [
  { t: "Eventos y conversiones en GA4", d: "Qué se mide, qué se mide dos veces y qué no se mide en absoluto." },
  { t: "Píxeles de campañas", d: "Que cada euro invertido en publicidad se pueda atribuir a algo real." },
  { t: "Embudo medible de punta a punta", d: "De la ficha a la compra, cada paso con su dato. Sin eso, todo lo demás es opinión." },
]

const ENTREGABLES = [
  { n: "01", t: "El documento completo", d: "Todo lo encontrado en las cuatro áreas, explicado en claro y con ejemplos de tu propia tienda. Nada de volcados de herramienta." },
  { n: "02", t: "Plan priorizado por impacto", d: "Cada mejora ordenada por lo que aporta a la venta, no por lo fácil que es. Sabes por dónde empezar y por qué." },
  { n: "03", t: "Revisión de diseño accionable", d: "Recomendaciones concretas de jerarquía, fricción y confianza, listas para pasar a quien toque tu tienda." },
  { n: "04", t: "Sesión de entrega", d: "Te lo explico en directo y resuelvo dudas, para que el documento no se quede en un PDF sin abrir." },
]

const FAQS = [
  {
    q: "¿Es lo mismo que el diagnóstico gratuito?",
    a: "No. El diagnóstico es gratis y te dice dónde mirar: las tres o cuatro cosas que más ventas te están costando. La auditoría es el documento completo: todo lo que aplicar en tu tienda, en qué orden y por qué, con SEO y GEO de fichas y landing, fugas de conversión, diseño CRO y medición. El diagnóstico te orienta; la auditoría te da el plan entero.",
  },
  {
    q: "¿Necesito contratar el pack Crecimiento después?",
    a: "No. El documento es tuyo y puedes ejecutarlo con tu equipo o con quien quieras. Si después decides contratar el pack, el plan ya está hecho y empiezas con ventaja.",
  },
  {
    q: "¿Sobre qué plataformas trabajas?",
    a: "Shopify, WooCommerce, PrestaShop, Magento y webs a medida. La auditoría se hace sobre tu tienda tal y como está, sin migrar nada.",
  },
  {
    q: "¿Cuánto cuesta la auditoría?",
    a: "Depende del tamaño del catálogo y de las plataformas que haya que auditar, así que el precio exacto sale del diagnóstico, que es gratis y sin compromiso. Lo que sí te adelanto: es un precio cerrado, lo sabes antes de empezar, y el documento es tuyo lo apliques conmigo o por tu cuenta.",
  },
]

/* ---------- secciones ---------- */

function Hero() {
  return (
    <ServiceHero
      title={
        <>
          Auditoría SEO/GEO de tu ecommerce + <Box component="em" sx={{ fontStyle: "italic", color: tokens.petrol }}>fugas</Box> de conversión
        </>
      }
      sub="Analizo tu tienda a fondo, de la búsqueda al checkout, y te entrego un único documento con todo lo que hay que aplicar y mejorar, ordenado por impacto en ventas."
      specs={[
        ["alcance", "SEO/GEO + CRO + diseño + medición"],
        ["entregable", "un documento con todo lo que aplicar y mejorar"],
        ["formato", "producto cerrado, sin pack ni permanencia"],
      ]}
      note="Si después contratas el pack Crecimiento, el plan ya está hecho."
      artifact={
        <ArtifactWindow tag="auditoría · estado real de la tienda" ratio="16 / 10">
          <Gauge />
        </ArtifactWindow>
      }
    />
  )
}

// El concepto central: un único documento accionable, no una lista de errores.
function Documento() {
  return (
    <Box component="section" sx={{ py: { xs: 8, md: 12 }, borderBottom: `1px solid ${tokens.lineSoft}` }}>
      <Container>
        <Reveal>
          <Paper elevation={0} sx={{ bgcolor: tokens.surface, border: `1px solid ${tokens.line}`, borderRadius: 4, overflow: "hidden" }}>
            <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1.15fr 0.85fr" }, alignItems: "stretch" }}>
              <Box sx={{ p: { xs: 4, md: 7 } }}>
                <Typography variant="h2" sx={{ fontSize: { xs: 26, md: 36 }, color: tokens.ink, mb: 3, maxWidth: 620 }}>
                  Todo en un documento. Nada en el aire.
                </Typography>
                <Typography variant="body1" sx={{ fontSize: { xs: 16, md: 18 }, color: tokens.body, maxWidth: 640 }}>
                  El resultado no es una lista de errores ni un volcado de herramienta. Es <Box component="span" sx={{ color: tokens.ink, fontWeight: 700 }}>un único documento con todo lo que hay que aplicar y mejorar en tu ecommerce</Box>, explicado en claro y ordenado por impacto en ventas: qué corregir primero, por qué y cómo. Lo ejecutas conmigo, con tu equipo o con quien quieras.
                </Typography>
              </Box>
              <Box sx={{ position: "relative", minHeight: { xs: 220, md: "auto" }, borderLeft: { md: `1px solid ${tokens.line}` }, borderTop: { xs: `1px solid ${tokens.line}`, md: "none" } }}>
                <Image src="/assets/gen/photo-pizarra.png" alt="Plan de trabajo de una tienda online esquematizado en una pizarra" fill sizes="(max-width: 900px) 100vw, 38vw" style={{ objectFit: "cover" }} />
              </Box>
            </Box>
          </Paper>
        </Reveal>
      </Container>
    </Box>
  )
}

function BlockHead({ num, title }: { num: string; title: string }) {
  return (
    <Reveal>
      <Stack direction="row" spacing={2.5} sx={{ alignItems: "baseline", mb: 4 }}>
        <Typography aria-hidden sx={{ fontFamily: fonts.serif, fontSize: { xs: 40, md: 52 }, lineHeight: 1, color: `${tokens.petrol}66` }}>{num}</Typography>
        <Typography variant="h3" sx={{ fontSize: { xs: 24, md: 32 }, color: tokens.ink }}>{title}</Typography>
      </Stack>
    </Reveal>
  )
}

// Bloque 1: artefactos apilados a la izquierda, lista entre hairlines a la derecha.
function BlockSeoGeo() {
  return (
    <Box sx={{ mb: { xs: 8, md: 12 } }}>
      <BlockHead num="01" title="SEO/GEO de landing y fichas de producto" />
      <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "0.92fr 1.08fr" }, gap: { xs: 4, md: 7 }, alignItems: "center" }}>
        <Reveal>
          <Stack spacing={3}>
            <RankClimb />
            <ArtifactWindow tag="geo · te citan las IAs" ratio="16 / 9">
              <GeoAnswer />
            </ArtifactWindow>
          </Stack>
        </Reveal>
        <Reveal delay={0.08}>
          <Stack>
            {SEO_GEO.map((s, i) => (
              <Box key={s.t} sx={{ py: 2.5, borderTop: i === 0 ? "none" : `1px solid ${tokens.lineSoft}` }}>
                <Typography component="h4" sx={{ fontFamily: fonts.serif, fontSize: 19, fontWeight: 600, color: tokens.ink, mb: 0.75 }}>{s.t}</Typography>
                <Typography variant="body2" sx={{ color: tokens.body, maxWidth: 460 }}>{s.d}</Typography>
              </Box>
            ))}
          </Stack>
        </Reveal>
      </Box>
    </Box>
  )
}

// Bloque 2: timeline del recorrido de compra + funnel animado que sella la fuga.
function BlockFugas() {
  return (
    <Box sx={{ mb: { xs: 8, md: 12 } }}>
      <BlockHead num="02" title="Fugas de conversión en el funnel" />
      <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1.05fr 0.95fr" }, gap: { xs: 4, md: 7 }, alignItems: "center" }}>
        <Box>
          <Reveal>
            <Typography variant="body1" sx={{ color: tokens.body, maxWidth: 520, mb: 4 }}>
              Seguimos el recorrido completo de una compra en tu tienda y anotamos dónde se cae la gente. Cada fuga entra en el documento con su causa y su corrección.
            </Typography>
          </Reveal>
          {FUNNEL.map((p, i) => (
            <Reveal key={p.n} delay={i * 0.05}>
              <Stack direction="row" spacing={{ xs: 2, md: 3 }} sx={{ pb: i === FUNNEL.length - 1 ? 0 : 4 }}>
                <Stack sx={{ alignItems: "center" }}>
                  <Box sx={{ width: 40, height: 40, flexShrink: 0, borderRadius: 999, border: `1px solid ${tokens.line}`, bgcolor: tokens.win, display: "grid", placeItems: "center" }}>
                    <Typography sx={{ fontFamily: fonts.mono, fontSize: 13, fontWeight: 600, color: tokens.petrol }}>{p.n}</Typography>
                  </Box>
                  {i !== FUNNEL.length - 1 && <Box sx={{ flex: 1, width: "1px", bgcolor: tokens.lineSoft, mt: 1 }} />}
                </Stack>
                <Box sx={{ pt: 0.5 }}>
                  <Typography component="h4" sx={{ fontFamily: fonts.serif, fontSize: 19, fontWeight: 600, color: tokens.ink, mb: 0.5 }}>{p.t}</Typography>
                  <Typography variant="body2" sx={{ color: tokens.body }}>{p.d}</Typography>
                </Box>
              </Stack>
            </Reveal>
          ))}
        </Box>
        <Reveal delay={0.1}>
          <FunnelLeakFix />
        </Reveal>
      </Box>
    </Box>
  )
}

// Bloque 3: panel entintado a todo ancho, mock de tienda + texto.
function BlockDiseno() {
  return (
    <Box sx={{ mb: { xs: 8, md: 12 } }}>
      <BlockHead num="03" title="Landing y diseño orientado a CRO" />
      <Reveal>
        <Paper elevation={0} sx={{ bgcolor: `${tokens.petrol}0D`, border: `1px solid ${tokens.petrol}33`, borderRadius: 4, p: { xs: 3, md: 5 } }}>
          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "0.95fr 1.05fr" }, gap: { xs: 4, md: 7 }, alignItems: "center" }}>
            <ArtifactWindow tag="ux · revisión de la tienda" ratio="4 / 3">
              <StoreTemplate />
            </ArtifactWindow>
            <Box>
              <Typography variant="body1" sx={{ color: tokens.body, mb: 2.5, maxWidth: 520 }}>
                Revisión UX/UI de la tienda con ojos de comprador: <Box component="span" sx={{ color: tokens.ink, fontWeight: 700 }}>jerarquía</Box> (qué se ve primero y si es lo que vende), <Box component="span" sx={{ color: tokens.ink, fontWeight: 700 }}>fricción</Box> (qué pasos y clics sobran) y <Box component="span" sx={{ color: tokens.ink, fontWeight: 700 }}>confianza</Box> (las señales que hacen que alguien deje su tarjeta).
              </Typography>
              <Typography variant="body1" sx={{ color: tokens.body, maxWidth: 520 }}>
                Cada hallazgo va al documento como una recomendación concreta de diseño, no como una opinión. Lista para pasar a quien toque tu tienda.
              </Typography>
            </Box>
          </Box>
        </Paper>
      </Reveal>
    </Box>
  )
}

// Bloque 4: texto a la izquierda, artefacto datos vs intuición a la derecha.
function BlockMedicion() {
  return (
    <Box>
      <BlockHead num="04" title="Medición y tracking" />
      <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1.05fr 0.95fr" }, gap: { xs: 4, md: 7 }, alignItems: "center" }}>
        <Reveal>
          <Box>
            <Typography variant="body1" sx={{ color: tokens.body, maxWidth: 520, mb: 3 }}>
              No puedes optimizar lo que mides mal. Audito tu analítica para que las decisiones que tomes después, conmigo o sin mí, salgan de datos y no de intuición.
            </Typography>
            <Stack>
              {TRACKING.map((s, i) => (
                <Box key={s.t} sx={{ py: 2, borderTop: i === 0 ? "none" : `1px solid ${tokens.lineSoft}` }}>
                  <Typography component="h4" sx={{ fontFamily: fonts.serif, fontSize: 18, fontWeight: 600, color: tokens.ink, mb: 0.5 }}>{s.t}</Typography>
                  <Typography variant="body2" sx={{ color: tokens.body, maxWidth: 460 }}>{s.d}</Typography>
                </Box>
              ))}
            </Stack>
          </Box>
        </Reveal>
        <Reveal delay={0.1}>
          <ArtifactWindow tag="analítica · datos, no intuición" ratio="16 / 10">
            <DatosIntuicion />
          </ArtifactWindow>
        </Reveal>
      </Box>
    </Box>
  )
}

function QueAuditamos() {
  return (
    <Box component="section" sx={{ py: { xs: 8, md: 12 }, borderBottom: `1px solid ${tokens.lineSoft}` }}>
      <Container>
        <Reveal>
          <Typography variant="h2" sx={{ fontSize: { xs: 28, md: 40 }, color: tokens.ink, mb: 2, maxWidth: 640 }}>
            Qué audito.
          </Typography>
          <Typography variant="body1" sx={{ color: tokens.body, maxWidth: 600, mb: { xs: 6, md: 9 } }}>
            Cuatro áreas, un mismo objetivo: encontrar todo lo que te está costando ventas y consolidarlo en el documento, ordenado por impacto.
          </Typography>
        </Reveal>
        <BlockSeoGeo />
        <BlockFugas />
        <BlockDiseno />
        <BlockMedicion />
      </Container>
    </Box>
  )
}

function QueTeLlevas() {
  return (
    <Box component="section" sx={{ py: { xs: 8, md: 12 }, borderBottom: `1px solid ${tokens.lineSoft}` }}>
      <Container>
        <Reveal>
          <Typography variant="h2" sx={{ fontSize: { xs: 28, md: 40 }, color: tokens.ink, mb: { xs: 5, md: 8 }, maxWidth: 560 }}>
            Qué te llevas.
          </Typography>
        </Reveal>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "repeat(4, 1fr)" }, gap: { xs: 4, md: 3 } }}>
          {ENTREGABLES.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.06}>
              <Box sx={{ position: "relative", pt: 3, borderTop: `2px solid ${tokens.line}` }}>
                <Box aria-hidden sx={{ position: "absolute", top: "-5px", left: 0, width: 8, height: 8, borderRadius: 999, bgcolor: tokens.petrol }} />
                <Typography sx={{ fontFamily: fonts.mono, fontSize: 12, color: tokens.petrol, mb: 1 }}>{s.n}</Typography>
                <Typography component="h3" sx={{ fontFamily: fonts.serif, fontSize: 20, fontWeight: 600, color: tokens.ink, mb: 1 }}>{s.t}</Typography>
                <Typography variant="body2" sx={{ color: tokens.body }}>{s.d}</Typography>
              </Box>
            </Reveal>
          ))}
        </Box>
        <Reveal delay={0.2}>
          <Typography sx={{ fontFamily: fonts.mono, fontSize: 12, color: tokens.muted, mt: { xs: 4, md: 6 } }}>
            El documento es tuyo. Lo ejecutas conmigo, con tu equipo o con quien quieras.
          </Typography>
        </Reveal>
      </Container>
    </Box>
  )
}

function MetodoLink() {
  return (
    <Box component="section" sx={{ py: { xs: 7, md: 10 }, borderBottom: `1px solid ${tokens.lineSoft}` }}>
      <Container sx={{ textAlign: "center", maxWidth: 680 }}>
        <Reveal>
          <Typography variant="h2" sx={{ fontSize: { xs: 24, md: 32 }, color: tokens.ink, mb: 2 }}>
            Mismo método, mismo responsable.
          </Typography>
          <Typography variant="body1" sx={{ color: tokens.body, mb: 3 }}>
            La auditoría sigue el mismo método que todo lo demás: datos reales de tu tienda, alcance cerrado antes de empezar y entregables que se entienden.
          </Typography>
          <Button component={Link} href="/metodo" sx={{ color: tokens.ink, fontWeight: 700, px: 0, "&:hover": { bgcolor: "transparent", color: tokens.petrol } }}>
            Ver el método completo <Box component="span" sx={{ color: tokens.petrol, ml: 0.5 }}>↗</Box>
          </Button>
        </Reveal>
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
        {FAQS.map((f, i) => (
          <Accordion key={i} disableGutters elevation={0} sx={{ bgcolor: "transparent", borderBottom: `1px solid ${tokens.lineSoft}`, "&:before": { display: "none" } }}>
            <AccordionSummary sx={{ px: 0 }}>
              <Typography component="h3" sx={{ fontFamily: fonts.serif, fontSize: { xs: 17, md: 19 }, fontWeight: 600, color: tokens.ink }}>{f.q}</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ px: 0, pb: 3 }}>
              <Typography variant="body1" sx={{ color: tokens.body }}>{f.a}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Container>
    </Box>
  )
}

export default function AuditoriaMui() {
  return (
    <Box sx={{ bgcolor: tokens.paper, color: tokens.body, fontFamily: fonts.sans }}>
      <SiteHeader />
      <Crumbs items={[{ label: "Servicios" }, { label: "Auditoría SEO/GEO" }]} />
      <Hero />
      <Documento />
      <QueAuditamos />
      <StatementBand as="p" title="No puedes arreglar lo que no has medido." photo="/assets/gen/photo-analitica.png" />
      <QueTeLlevas />
      <MetodoLink />
      <FeaturedCases
        title="Tiendas que ya han pasado por aquí."
        sub="Cada caso enlaza a su ficha con lo que hice y su resultado."
        slugs={["marea-es", "totfinestra", "farmacia-garcia-del-cerro"]}
      />
      <Faq />
      <DiagnosticoCTA />
      <SiteFooter />
    </Box>
  )
}
