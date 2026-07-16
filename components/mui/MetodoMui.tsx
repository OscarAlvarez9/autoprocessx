"use client"

import Image from "next/image"
import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import Paper from "@mui/material/Paper"
import Accordion from "@mui/material/Accordion"
import AccordionSummary from "@mui/material/AccordionSummary"
import AccordionDetails from "@mui/material/AccordionDetails"
import { tokens, fonts } from "@/lib/mui/theme"
import { SiteHeader, SiteFooter, DiagnosticoCTA, ServiceHero, StatementBand, Reveal, ArtifactWindow, Crumbs } from "@/components/mui/shared"
import ScrollSteps, { type ScrollStep } from "@/components/mui/ScrollSteps"
import FeaturedCases from "@/components/mui/FeaturedCases"
import { ToolsScatter, StoreTemplate, N8nFlow, ConversionChart } from "@/components/mui/artifacts"

const STEPS: ScrollStep[] = [
  {
    label: "Diagnóstico",
    meta: "Semana 1",
    title: "Diagnóstico",
    tag: "diagnóstico · herramientas",
    desc: "Analizo tu tienda con tus datos reales (GA4, Search Console, Clarity, tu catálogo y tu checkout). Busco dónde se escapan las ventas: tráfico que no llega, visitas que no compran, horas que se van en operativa. Sales con un plan claro, sigamos juntos o no.",
    artifact: <ToolsScatter />,
  },
  {
    label: "Estrategia",
    meta: "Semana 1-2",
    title: "Estrategia de conversión",
    tag: "estrategia · customer journey",
    desc: "Diseño el customer journey completo: qué palancas tocar (SEO, agente, automatización), en qué orden y por qué. Cada acción va priorizada por impacto esperado en ventas, no por moda. Decido contigo, con tus números encima de la mesa.",
    artifact: <StoreTemplate />,
  },
  {
    label: "Implementación",
    meta: "Semana 2-5",
    title: "Implementación",
    tag: "implementación · sobre tu stack",
    desc: "Construyo sobre tu plataforma actual, sin migrar: SEO técnico, agente de ventas, automatización con n8n y código propio. Todo medible, trazable y en tu propiedad desde el primer commit.",
    artifact: <N8nFlow />,
  },
  {
    label: "Seguimiento",
    meta: "continuo",
    title: "Seguimiento",
    tag: "seguimiento · resultados",
    desc: "Mido contra el plan con tus datos reales y ajusto mes a mes. El informe llega solo, con lo que ha pasado y lo que toca después. El sistema no se queda quieto y tú siempre sabes por qué.",
    artifact: <ConversionChart />,
  },
]

const ENTREGABLES: [string, string, string][] = [
  ["01", "Del diagnóstico", "Un informe con los puntos de fuga concretos y un plan priorizado por impacto. Es tuyo aunque no sigamos juntos."],
  ["02", "De la estrategia", "El customer journey diseñado y un backlog de acciones ordenado: qué, cuándo y qué espero de cada una."],
  ["03", "De la implementación", "Código en producción funcionando sobre tu tienda. Repositorio en tu propiedad, documentado y sin ataduras."],
  ["04", "Del seguimiento", "Un informe mensual con datos reales contra el plan, y las decisiones del mes siguiente ya propuestas."],
]

const DIAGNOSTICO_INCLUYE = [
  "Analítica de tráfico y conversión (GA4, Search Console, Clarity)",
  "Revisión de fichas, carrito y checkout: dónde se pierde la venta",
  "Visibilidad en Google, Maps y motores de IA (ChatGPT, Perplexity)",
  "Mapa de la operativa: qué tareas se comen horas y se pueden automatizar",
  "Plan priorizado por impacto, con lo que haría primero y por qué",
]

const FAQS = [
  { q: "¿Cuánto dura el proceso completo?", a: "El diagnóstico sale en la primera semana. La implementación típica va de la semana 2 a la 5, según el alcance que prioricemos juntos. El seguimiento es continuo, mes a mes." },
  { q: "¿Qué necesitas de mí para empezar?", a: "Acceso de lectura a tu analítica (GA4, Search Console) y a tu plataforma. Con eso hago el diagnóstico con datos reales, no con suposiciones. Tu tiempo: una llamada inicial y otra para entregarte el plan." },
  { q: "¿Y si el diagnóstico dice que no encajamos?", a: "Te lo digo y te quedas el plan igualmente. Prefiero perder un proyecto que prometer resultados que tus números no sostienen. Solo entran cinco proyectos al mes precisamente por esto." },
  { q: "¿El código y los datos son míos?", a: "Sí, desde el primer día. Repositorio en tu propiedad, credenciales tuyas, y si algún día quieres seguir con otro equipo, te lo llevas todo funcionando." },
  { q: "¿Trabajas con cualquier plataforma?", a: "Shopify, WooCommerce, PrestaShop, Magento, BigCommerce o web propia. El método es el mismo; cambian los conectores. Nunca te hago migrar para trabajar conmigo." },
]

/* ---------- secciones ---------- */

function Hero() {
  return (
    <ServiceHero
      title="Un método que empieza por tus datos y acaba en ventas."
      sub="Cuatro etapas, un responsable y cero humo: diagnóstico con datos reales, plan priorizado, implementación sobre tu tienda y seguimiento mes a mes."
      specs={[
        ["empieza por", "un diagnóstico con tus datos reales"],
        ["entrega", "plan priorizado + código en tu propiedad"],
        ["ritmo", "plan en la semana 1, producción desde la 2"],
      ]}
      note="El plan del diagnóstico es tuyo, sigamos o no."
      artifact={
        <ArtifactWindow tag="diagnóstico · tus herramientas" ratio="16 / 10">
          <ToolsScatter />
        </ArtifactWindow>
      }
    />
  )
}

function Etapas() {
  return (
    <ScrollSteps
      id="etapas"
      title="Las cuatro etapas"
      subtitle="Así trabajo de principio a fin. Haz clic en una etapa o baja para verlas."
      steps={STEPS}
    />
  )
}

function Entregables() {
  return (
    <Box component="section" sx={{ py: { xs: 8, md: 12 }, borderBottom: `1px solid ${tokens.lineSoft}` }}>
      <Container>
        <Reveal>
          <Typography variant="h2" sx={{ fontSize: { xs: 28, md: 40 }, color: tokens.ink, mb: { xs: 5, md: 7 }, maxWidth: 560 }}>
            Qué te llevas de cada etapa.
          </Typography>
        </Reveal>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap: { xs: 3, md: 4 } }}>
          {ENTREGABLES.map(([n, t, d], i) => (
            <Reveal key={n} delay={(i % 2) * 0.06}>
              <Box sx={{ borderTop: `2px solid ${tokens.line}`, pt: 2.5 }}>
                <Typography sx={{ fontFamily: fonts.mono, fontSize: 12, color: tokens.petrol, mb: 1 }}>{n}</Typography>
                <Typography sx={{ fontFamily: fonts.serif, fontSize: 22, fontWeight: 600, color: tokens.ink, mb: 1 }}>{t}</Typography>
                <Typography variant="body1" sx={{ color: tokens.body, maxWidth: 460 }}>{d}</Typography>
              </Box>
            </Reveal>
          ))}
        </Box>
      </Container>
    </Box>
  )
}

function DiagnosticoDetalle() {
  return (
    <Box component="section" id="auditoria" sx={{ py: { xs: 8, md: 12 }, borderBottom: `1px solid ${tokens.lineSoft}`, scrollMarginTop: 72 }}>
      <Container>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "0.95fr 1.05fr" }, gap: { xs: 5, md: 8 }, alignItems: "center" }}>
          <Reveal>
            <Box>
              <Typography variant="h2" sx={{ fontSize: { xs: 26, md: 38 }, color: tokens.ink, mb: 2, maxWidth: 440 }}>
                El diagnóstico, en detalle.
              </Typography>
              <Typography variant="body1" sx={{ fontSize: { xs: 16, md: 18 }, color: tokens.body, maxWidth: 460, mb: 3 }}>
                Es la puerta de entrada a todo y por eso es lo único que te pido que reserves. No es una llamada comercial: es trabajo real sobre tus datos, y el plan resultante es tuyo aunque decidas no seguir conmigo.
              </Typography>
              <Box sx={{ position: "relative", borderRadius: 3, overflow: "hidden", border: `1px solid ${tokens.line}`, aspectRatio: "16 / 9", maxWidth: 460 }}>
                <Image src="/assets/gen/photo-revision.png" alt="Sesión de diagnóstico revisando la analítica de una tienda" fill sizes="(max-width: 900px) 100vw, 44vw" style={{ objectFit: "cover" }} />
              </Box>
            </Box>
          </Reveal>
          <Reveal delay={0.1}>
            <Paper elevation={0} sx={{ bgcolor: tokens.win, border: `1px solid ${tokens.line}`, borderRadius: 3, p: { xs: 3, md: 4 } }}>
              <Typography sx={{ fontSize: 13, fontWeight: 700, color: tokens.ink, mb: 2 }}>Qué incluye</Typography>
              <Stack>
                {DIAGNOSTICO_INCLUYE.map((item, i) => (
                  <Stack key={item} direction="row" spacing={1.5} sx={{ py: 1.25, borderTop: i === 0 ? "none" : `1px solid ${tokens.lineSoft}`, alignItems: "flex-start" }}>
                    <Box component="span" sx={{ color: tokens.petrol, fontWeight: 800, lineHeight: 1.5, flexShrink: 0 }}>✓</Box>
                    <Typography variant="body2" sx={{ color: tokens.body }}>{item}</Typography>
                  </Stack>
                ))}
              </Stack>
            </Paper>
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
            Preguntas sobre el método.
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

export default function MetodoMui() {
  return (
    <Box sx={{ bgcolor: tokens.paper, color: tokens.body, fontFamily: fonts.sans }}>
      <SiteHeader />
      <Crumbs items={[{ label: "Método" }]} />
      <Hero />
      <Etapas />
      <Entregables />
      <DiagnosticoDetalle />
      <FeaturedCases title="El método, aplicado." slugs={["totfinestra", "pelican-catchy-infraestructura-ia", "marea-es"]} />
      <StatementBand title="Ingeniería, no humo. Un método que puedes auditar." photo="/assets/gen/photo-pizarra.png" />
      <Faq />
      <DiagnosticoCTA />
      <SiteFooter />
    </Box>
  )
}
