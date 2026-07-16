"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import Paper from "@mui/material/Paper"
import Tabs from "@mui/material/Tabs"
import Tab from "@mui/material/Tab"
import Accordion from "@mui/material/Accordion"
import AccordionSummary from "@mui/material/AccordionSummary"
import AccordionDetails from "@mui/material/AccordionDetails"
import { tokens, fonts } from "@/lib/mui/theme"
import { SiteHeader, SiteFooter, DiagnosticoCTA, ServiceHero, StatementBand, Reveal, ArtifactWindow, Crumbs } from "@/components/mui/shared"
import FeaturedCases from "@/components/mui/FeaturedCases"
import { GeoAnswer, ConversionChart, N8nFlow, AgentChatRich } from "@/components/mui/artifacts"
import { RankClimb, FunnelLeakFix } from "@/components/mui/growthArtifacts"

/* ---------- datos ---------- */

const TRAFICO = [
  { t: "SEO de producto y categoría", d: "Fichas y categorías que rankean y venden: Schema de producto, contenido que responde a la intención de compra y arquitectura de catálogo a escala." },
  { t: "GEO · AI Search", d: "Que ChatGPT, Perplexity y los AI Overviews citen tu tienda cuando alguien pregunta qué comprar. Datos de marca estructurados para que te recomienden." },
  { t: "SEO técnico para conversión", d: "Una tienda lenta pierde ventas: optimizo Core Web Vitals, indexación y enlazado para que la velocidad no te cueste pedidos." },
  { t: "Omnicanal y local", d: "Para ecommerce con punto físico: click-and-collect, recogida en tienda y fichas de sede que captan la compra local en Google y Maps." },
]

const CONVERSION = [
  { n: "01", t: "Auditoría CRO", d: "Reviso fichas, checkout y puntos de fuga, y corrijo dónde se pierde la venta antes de invertir en más tráfico." },
  { n: "02", t: "A/B testing", d: "Precio, fichas y checkout: decido con datos, no a ojo. Priorizo los tests por impacto potencial en ventas." },
  { n: "03", t: "Optimización del funnel", d: "Landing, carrito y checkout: quito fricción en cada paso para que más visitas terminen la compra." },
  { n: "04", t: "Automatización de venta", d: "Carrito abandonado, post-compra y upsell: secuencias que recuperan y repiten ventas solas." },
  { n: "05", t: "SEO de conversión", d: "Fichas y contenido optimizados para vender, no solo para rankear: la otra cara del SEO." },
]

const METODO = [
  { n: "01", t: "Diagnóstico", d: "Analizo tu tienda, tu tráfico y tus cuellos de botella con tus datos reales (GA4, Search Console, Clarity). Sales con un plan claro, sigamos o no." },
  { n: "02", t: "Estrategia", d: "Diseño el customer journey: upsells, bundles y los puntos de conversión priorizados por impacto en ventas." },
  { n: "03", t: "Implementación", d: "Sobre tu plataforma actual: SEO técnico, CRO, agente de ventas y automatización. Código limpio, medible y tuyo." },
  { n: "04", t: "Seguimiento", d: "Mido y optimizo con datos reales, mes a mes. El sistema no se queda quieto." },
]

const FAQS = [
  {
    q: "¿Qué diferencia hay entre el SEO tradicional y el posicionamiento GEO para IAs?",
    a: "El SEO trabaja para que Google te muestre en sus resultados; el GEO trabaja para que ChatGPT, Perplexity o Gemini te citen en sus respuestas. Comparten base técnica (contenido legible, datos estructurados, autoridad), pero el GEO añade lo suyo: que los bots de IA puedan acceder a tu tienda, que tus páginas respondan preguntas completas y que tu marca sea consistente en toda la web. En el pack trabajo los dos a la vez porque el cliente ya busca en los dos sitios.",
  },
  {
    q: "¿Cómo gestionas catálogos de miles de productos sin romper la web?",
    a: "Con automatización a nivel de servidor (Node.js y n8n): reglas dinámicas de indexación, control de paginación y Schema de producto, evitando duplicados. Todo trazable y reversible.",
  },
  {
    q: "¿El CRO y el A/B testing funcionan en mi tienda?",
    a: "Sí, si hay tráfico suficiente para medir con rigor. Empiezo por una auditoría de tus puntos de fuga y priorizo los tests por impacto potencial en ventas: decido con datos, no con opiniones. Si aún no hay volumen, primero trabajo el tráfico.",
  },
  {
    q: "¿Qué es el agente de ventas y cómo encaja en el pack?",
    a: "Es un asistente de IA anclado a tu catálogo real que recomienda producto y acompaña al checkout sin inventarse nada. Es el motor de conversión del pack y tiene su propia página (Agente de ventas IA).",
  },
]

/* ---------- secciones ---------- */

function Hero() {
  return (
    <ServiceHero
      title="Crecimiento ecommerce: más tráfico que compra y más visitas que convierten"
      sub="Soy Óscar y esto es una consultoría de crecimiento para tiendas online que ya facturan: SEO técnico y GEO que traen tráfico que compra, CRO y un agente de ventas IA que lo convierten, y automatización para que la operativa no te frene."
      specs={[
        ["palancas", "SEO · GEO/AI Search · CRO"],
        ["incluye", "agente de ventas + automatización"],
        ["base", "tu plataforma, sin migrar"],
      ]}
      note="hecho a mano, no generado"
      artifact={
        <ArtifactWindow tag="panel · conversión sobre tu tienda" ratio="16 / 10">
          <ConversionChart />
        </ArtifactWindow>
      }
    />
  )
}

function Problem() {
  return (
    <Box component="section" sx={{ py: { xs: 8, md: 12 }, borderBottom: `1px solid ${tokens.lineSoft}` }}>
      <Container>
        <Reveal>
          <Paper elevation={0} sx={{ bgcolor: tokens.surface, border: `1px solid ${tokens.line}`, borderRadius: 4, overflow: "hidden" }}>
            <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1.15fr 0.85fr" }, alignItems: "stretch" }}>
              <Box sx={{ p: { xs: 4, md: 7 } }}>
                <Typography variant="h2" sx={{ fontSize: { xs: 26, md: 36 }, color: tokens.ink, mb: 3, maxWidth: 620 }}>
                  No basta con que te encuentren. Tienen que comprar.
                </Typography>
                <Typography variant="body1" sx={{ fontSize: { xs: 16, md: 18 }, color: tokens.body, maxWidth: 640 }}>
                  El dinero se escapa por las dos puntas: <Box component="span" sx={{ color: tokens.ink, fontWeight: 700 }}>visitas que nunca llegan</Box> (no apareces en Google, Maps ni en la IA) y <Box component="span" sx={{ color: tokens.ink, fontWeight: 700 }}>visitas que llegan y se van sin comprar</Box> (fichas confusas, checkout con fricción, carritos abandonados). Trabajar solo una mitad deja la otra goteando ventas. Por eso este pack ataca las dos a la vez.
                </Typography>
              </Box>
              <Box sx={{ position: "relative", minHeight: { xs: 220, md: "auto" }, borderLeft: { md: `1px solid ${tokens.line}` }, borderTop: { xs: `1px solid ${tokens.line}`, md: "none" } }}>
                <Image src="/assets/gen/photo-revision.png" alt="Revisando la analítica de una tienda online en equipo" fill sizes="(max-width: 900px) 100vw, 38vw" style={{ objectFit: "cover" }} />
              </Box>
            </Box>
          </Paper>
        </Reveal>
      </Container>
    </Box>
  )
}

function LeverTrafico() {
  return (
    <Box sx={{ mb: { xs: 8, md: 12 } }}>
      <Reveal>
        <Stack direction="row" spacing={2.5} sx={{ alignItems: "baseline", mb: 4 }}>
          <Typography aria-hidden sx={{ fontFamily: fonts.serif, fontSize: { xs: 40, md: 52 }, lineHeight: 1, color: `${tokens.petrol}66` }}>01</Typography>
          <Typography variant="h3" sx={{ fontSize: { xs: 24, md: 32 }, color: tokens.ink }}>Más tráfico que compra</Typography>
        </Stack>
      </Reveal>
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
            {TRAFICO.map((s, i) => (
              <Box key={s.t} sx={{ py: 2.5, borderTop: i === 0 ? "none" : `1px solid ${tokens.lineSoft}` }}>
                <Typography sx={{ fontFamily: fonts.serif, fontSize: 19, fontWeight: 600, color: tokens.ink, mb: 0.75 }}>{s.t}</Typography>
                <Typography variant="body2" sx={{ color: tokens.body, maxWidth: 460 }}>{s.d}</Typography>
              </Box>
            ))}
          </Stack>
        </Reveal>
      </Box>
    </Box>
  )
}

function LeverConversion() {
  return (
    <Box>
      <Reveal>
        <Stack direction="row" spacing={2.5} sx={{ alignItems: "baseline", mb: 4 }}>
          <Typography aria-hidden sx={{ fontFamily: fonts.serif, fontSize: { xs: 40, md: 52 }, lineHeight: 1, color: `${tokens.petrol}66` }}>02</Typography>
          <Typography variant="h3" sx={{ fontSize: { xs: 24, md: 32 }, color: tokens.ink }}>Más visitas que convierten</Typography>
        </Stack>
      </Reveal>
      {/* Timeline vertical + funnel animado: la fuga que el CRO sella */}
      <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1.05fr 0.95fr" }, gap: { xs: 4, md: 7 }, alignItems: "center" }}>
        <Box>
          {CONVERSION.map((p, i) => (
            <Reveal key={p.n} delay={i * 0.05}>
              <Stack direction="row" spacing={{ xs: 2, md: 3 }} sx={{ pb: i === CONVERSION.length - 1 ? 0 : 4 }}>
                <Stack sx={{ alignItems: "center" }}>
                  <Box sx={{ width: 40, height: 40, flexShrink: 0, borderRadius: 999, border: `1px solid ${tokens.line}`, bgcolor: tokens.win, display: "grid", placeItems: "center" }}>
                    <Typography sx={{ fontFamily: fonts.mono, fontSize: 13, fontWeight: 600, color: tokens.petrol }}>{p.n}</Typography>
                  </Box>
                  {i !== CONVERSION.length - 1 && <Box sx={{ flex: 1, width: "1px", bgcolor: tokens.lineSoft, mt: 1 }} />}
                </Stack>
                <Box sx={{ pt: 0.5 }}>
                  <Typography sx={{ fontFamily: fonts.serif, fontSize: 19, fontWeight: 600, color: tokens.ink, mb: 0.5 }}>{p.t}</Typography>
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

function AgenteHighlight() {
  return (
    <Box component="section" sx={{ py: { xs: 8, md: 12 }, borderBottom: `1px solid ${tokens.lineSoft}` }}>
      <Container>
        <Reveal>
          <Paper elevation={0} sx={{ bgcolor: `${tokens.petrol}0D`, border: `1px solid ${tokens.petrol}33`, borderRadius: 4, p: { xs: 3, md: 5 } }}>
            <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "0.95fr 1.05fr" }, gap: { xs: 4, md: 7 }, alignItems: "center" }}>
              <ArtifactWindow tag="agente · anclado a tu catálogo" ratio="4 / 3">
                <AgentChatRich />
              </ArtifactWindow>
              <Box>
                <Typography variant="h3" sx={{ fontSize: { xs: 23, md: 30 }, color: tokens.ink, mb: 1.5 }}>
                  El motor estrella: un agente de ventas IA.
                </Typography>
                <Typography variant="body1" sx={{ color: tokens.body, mb: 3, maxWidth: 460 }}>
                  Recomienda producto y acompaña al checkout, anclado a tu catálogo real. No se inventa precios ni stock: si no lo sabe, lo dice. La pieza de conversión más potente del pack.
                </Typography>
                <Button component={Link} href="/servicios/agente-ventas-ia" sx={{ color: tokens.ink, fontWeight: 700, px: 0, "&:hover": { bgcolor: "transparent", color: tokens.petrol } }}>
                  Ver el agente de ventas <Box component="span" sx={{ color: tokens.petrol, ml: 0.5 }}>↗</Box>
                </Button>
              </Box>
            </Box>
          </Paper>
        </Reveal>
      </Container>
    </Box>
  )
}

function Levers() {
  return (
    <Box component="section" sx={{ py: { xs: 8, md: 12 }, borderBottom: `1px solid ${tokens.lineSoft}` }}>
      <Container>
        <Reveal>
          <Typography variant="h2" sx={{ fontSize: { xs: 28, md: 40 }, color: tokens.ink, mb: 2, maxWidth: 640 }}>
            Dos palancas, un único objetivo: que vendas más.
          </Typography>
          <Typography variant="body1" sx={{ color: tokens.body, maxWidth: 600, mb: { xs: 6, md: 9 } }}>
            Traer mejor tráfico y convertirlo mejor. Las dos pesan igual: una sin la otra deja dinero sobre la mesa.
          </Typography>
        </Reveal>
        <LeverTrafico />
        <LeverConversion />
      </Container>
    </Box>
  )
}

function Mecanismo() {
  const [tab, setTab] = useState(0)
  return (
    <Box component="section" sx={{ py: { xs: 8, md: 12 }, borderBottom: `1px solid ${tokens.lineSoft}` }}>
      <Container>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "0.95fr 1.05fr" }, gap: { xs: 5, md: 8 }, alignItems: "center" }}>
          <Reveal>
            <Box>
              <Typography variant="h2" sx={{ fontSize: { xs: 26, md: 36 }, color: tokens.ink, mb: 2, maxWidth: 460 }}>
                La ingeniería de datos detrás.
              </Typography>
              <Typography variant="body1" sx={{ color: tokens.body, maxWidth: 480, mb: 3 }}>
                Los mismos datos alimentan las dos palancas: intención de búsqueda para el tráfico y comportamiento del funnel para la conversión. Los proceso a escala con scripts propios y workflows.
              </Typography>
              <Tabs
                value={tab}
                onChange={(_, v) => setTab(v)}
                sx={{
                  minHeight: 0, mb: 3,
                  "& .MuiTab-root": { textTransform: "none", fontFamily: fonts.mono, fontSize: 12.5, fontWeight: 600, minHeight: 0, py: 1, px: 0, mr: 4, color: tokens.muted },
                  "& .Mui-selected": { color: `${tokens.ink} !important` },
                  "& .MuiTabs-indicator": { bgcolor: tokens.petrol, height: 2 },
                }}
              >
                <Tab label="Pipeline de datos" />
                <Tab label="Auditoría continua" />
              </Tabs>
              <Typography variant="body1" sx={{ color: tokens.body, maxWidth: 480, minHeight: { md: 116 } }}>
                {tab === 0
                  ? "Proceso miles de intenciones de búsqueda y hago clustering de keywords con scripts propios en Node.js orquestados en n8n. Cada keyword se enriquece con datos reales (volumen, dificultad, intención de compra) antes de priorizarse por oportunidad de venta."
                  : "Workflows en n8n vigilan en segundo plano si una URL crítica se desindexa o pierde rendimiento, y disparan alertas. La auditoría no es un PDF anual: es un proceso continuo y trazable que protege tu tráfico y tu conversión."}
              </Typography>
            </Box>
          </Reveal>
          <Reveal delay={0.1}>
            <ArtifactWindow tag="n8n · orquestación de datos" ratio="4 / 3">
              <N8nFlow />
            </ArtifactWindow>
          </Reveal>
        </Box>
      </Container>
    </Box>
  )
}

function Metodo() {
  return (
    <Box component="section" sx={{ py: { xs: 8, md: 12 }, borderBottom: `1px solid ${tokens.lineSoft}` }}>
      <Container>
        <Reveal>
          <Typography variant="h2" sx={{ fontSize: { xs: 28, md: 40 }, color: tokens.ink, mb: { xs: 5, md: 8 }, maxWidth: 560 }}>
            Cómo trabajo, paso a paso.
          </Typography>
        </Reveal>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "repeat(4, 1fr)" }, gap: { xs: 4, md: 3 } }}>
          {METODO.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.06}>
              <Box sx={{ position: "relative", pt: 3, borderTop: `2px solid ${tokens.line}` }}>
                <Box aria-hidden sx={{ position: "absolute", top: "-5px", left: 0, width: 8, height: 8, borderRadius: 999, bgcolor: tokens.petrol }} />
                <Typography sx={{ fontFamily: fonts.mono, fontSize: 12, color: tokens.petrol, mb: 1 }}>{s.n}</Typography>
                <Typography sx={{ fontFamily: fonts.serif, fontSize: 20, fontWeight: 600, color: tokens.ink, mb: 1 }}>{s.t}</Typography>
                <Typography variant="body2" sx={{ color: tokens.body }}>{s.d}</Typography>
              </Box>
            </Reveal>
          ))}
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
            Preguntas técnicas.
          </Typography>
        </Reveal>
        {FAQS.map((f, i) => (
          <Accordion key={i} disableGutters elevation={0} sx={{ bgcolor: "transparent", borderBottom: `1px solid ${tokens.lineSoft}`, "&:before": { display: "none" } }}>
            <AccordionSummary sx={{ px: 0 }}>
              <Typography sx={{ fontFamily: fonts.serif, fontSize: { xs: 17, md: 19 }, fontWeight: 600, color: tokens.ink }}>{f.q}</Typography>
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

export default function CrecimientoMui() {
  return (
    <Box sx={{ bgcolor: tokens.paper, color: tokens.body, fontFamily: fonts.sans }}>
      <SiteHeader />
      <Crumbs items={[{ label: "Servicios" }, { label: "Crecimiento ecommerce" }]} />
      <Hero />
      <Problem />
      <Levers />
      <AgenteHighlight />
      <Mecanismo />
      <StatementBand as="p" title="El tráfico que no convierte es solo una factura de marketing." photo="/assets/gen/photo-analitica.png" />
      <Metodo />
      <FeaturedCases
        title="Tiendas que ya crecen así."
        sub="Cada caso enlaza a su ficha con lo que hice y su resultado."
        slugs={["totfinestra", "farmacia-garcia-del-cerro"]}
      />
      <Faq />
      <DiagnosticoCTA />
      <SiteFooter />
    </Box>
  )
}
