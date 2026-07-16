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
import { tokens, fonts } from "@/lib/mui/theme"
import { SiteHeader, SiteFooter, DiagnosticoCTA, ServiceHero, StatementBand, Reveal, Crumbs } from "@/components/mui/shared"
import FeaturedCases from "@/components/mui/FeaturedCases"
import { CartRecovery } from "@/components/mui/agentArtifacts"
import {
  FlowRunSimulator, ManualOpsStrip, CodeNodeReveal, StockSyncDiff, FeedBuilder,
  PostPurchaseFlow, ReportSnippet, RunLogConsole, AutomationRail, BulkProductSim,
} from "@/components/mui/autoArtifacts"

const USE_CASES = [
  { title: "Sync de stock y pedidos", desc: "ERP y tienda siempre cuadrados, sin sobreventa ni fichas viejas.", el: <StockSyncDiff /> },
  { title: "Recuperación de carrito", desc: "El nudge sale a tiempo y con el stock real, no cuando ya es tarde.", el: <CartRecovery /> },
  { title: "Feeds de producto", desc: "Catálogo formateado para cada destino (Google, Meta, marketplaces).", el: <FeedBuilder /> },
  { title: "Alta de productos en masa", desc: "Subo el catálogo entero de golpe, con descripciones generadas y stock real. Sin cargar ficha a ficha a mano.", el: <BulkProductSim /> },
  { title: "Post-compra", desc: "Confirmación, seguimiento y reseña salen solos, en su momento.", el: <PostPurchaseFlow /> },
  { title: "Reporting", desc: "El informe semanal de ventas y stock llega hecho, sin abrir Excel.", el: <ReportSnippet /> },
]

const FAQS = [
  { q: "¿Por qué n8n y no Make o Zapier?", a: "Por tres razones que se notan en la factura y en el control. Una: n8n corre self-hosted en tu servidor, así que tus pedidos y tus clientes no pasan por la nube de un tercero. Dos: no pagas cuota por tarea; con el volumen de un ecommerce, Make y Zapier se vuelven caros justo cuando más vendes. Y tres: cuando el nodo no llega, escribo el código en Node o Python dentro del propio flujo, cosa que en las alternativas cerradas no puedes hacer. Dicho con la misma honestidad: para automatizaciones personales sencillas, Make o Zapier valen; para la operativa de una tienda, no los recomiendo." },
  { q: "¿Puedo contratar solo la automatización, sin el pack?", a: "Sí. La automatización se contrata suelta: empiezo por el proceso que más tiempo te come y crecemos desde ahí. Si luego quieres tráfico y conversión, el pack Crecimiento lo une todo." },
  { q: "¿Se rompe si cambio de ERP o de plataforma?", a: "No te ato a un proveedor. La lógica vive en código propio dentro de n8n; si cambias de ERP, adapto los conectores sin rehacer todo. Sin lock-in." },
  { q: "¿Quién lo mantiene?", a: "Yo, en retainer. No trabajo solo: Roger levanta la infraestructura y hay flujos que corren por su cuenta. Los vigilo, ajusto y amplío según evoluciona tu tienda. Y te dejo el código, para que no dependas de nadie." },
  { q: "¿Dónde vive n8n?", a: "Self-hosted en tu infraestructura o en la mía. Sin cuota por ejecución que se dispara al escalar, y sin que tus datos salgan a un SaaS de terceros." },
  { q: "¿Cuánto tarda ponerlo en marcha?", a: "Depende de los procesos. Empiezo por el que más tiempo te come para que el ahorro se note pronto; lo concretamos en el diagnóstico." },
  { q: "¿Y si mi caso no está en la lista?", a: "La lista son ejemplos, no límites. Si es repetitivo, tiene reglas y toca tus sistemas, casi seguro que se automatiza. Lo vemos en el diagnóstico." },
]

/* ---------- secciones ---------- */

function Hero() {
  return (
    <ServiceHero
      title="Automatización de tu ecommerce: la operación corre sola mientras tú vendes"
      sub="Carrito, stock, feeds, post-compra y reporting orquestados con n8n y código propio. Menos horas a mano, cero descuadres, ventas que no se escapan."
      specs={[
        ["motor", "n8n + código propio (Node/Python)"],
        ["cubre", "pedidos · stock · feeds · reporting"],
        ["despliegue", "self-hosted · sin cuota por tarea"],
      ]}
      note={`// bajo demanda · empiezo por lo que más tiempo te quita`}
      artifact={<FlowRunSimulator />}
    />
  )
}

function Rail() {
  return (
    <Box component="section" sx={{ py: { xs: 5, md: 6 }, borderBottom: `1px solid ${tokens.lineSoft}` }}>
      <Container>
        <Reveal>
          <AutomationRail />
        </Reveal>
      </Container>
    </Box>
  )
}

function Horas() {
  return (
    <Box component="section" sx={{ py: { xs: 8, md: 12 }, borderBottom: `1px solid ${tokens.lineSoft}` }}>
      <Container>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap: { xs: 5, md: 8 }, alignItems: "center" }}>
          <Reveal>
            <Box>
              <Typography variant="h2" sx={{ fontSize: { xs: 26, md: 38 }, color: tokens.ink, mb: 2, maxWidth: 460 }}>
                Las horas que se van en tareas que no venden.
              </Typography>
              <Typography variant="body1" sx={{ fontSize: { xs: 16, md: 18 }, color: tokens.body, maxWidth: 460 }}>
                Copiar pedidos entre herramientas, cuadrar el stock a mano, montar el informe del domingo, corregir un descuadre a las 23:00. No es trabajo que crezca tu tienda: es peaje operativo que pagas cada semana.
              </Typography>
            </Box>
          </Reveal>
          <Reveal delay={0.1}>
            <ManualOpsStrip />
          </Reveal>
        </Box>
      </Container>
    </Box>
  )
}

function Diferenciador() {
  return (
    <Box component="section" sx={{ py: { xs: 8, md: 12 }, borderBottom: `1px solid ${tokens.lineSoft}` }}>
      <Container>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1.1fr 0.9fr" }, gap: { xs: 4, md: 7 }, alignItems: "center", mb: { xs: 4, md: 6 } }}>
          <Reveal>
            <Box sx={{ maxWidth: 640 }}>
              <Typography variant="h2" sx={{ fontSize: { xs: 28, md: 40 }, color: tokens.ink, mb: 2 }}>
                No solo conecto nodos. Escribo el código.
              </Typography>
              <Typography variant="body1" sx={{ fontSize: { xs: 16, md: 18 }, color: tokens.body }}>
                La mayoría de agencias de automatización no escriben una línea de código: arrastran cajas y se quedan a medias en cuanto hay una regla de negocio real. Aquí la lógica vive en Node y Python dentro del propio flujo. Míralo:
              </Typography>
            </Box>
          </Reveal>
          <Reveal delay={0.1}>
            <Box sx={{ position: "relative", borderRadius: 3, overflow: "hidden", border: `1px solid ${tokens.line}`, aspectRatio: "16 / 10" }}>
              <Image src="/assets/gen/photo-pizarra.png" alt="Diseñando el flujo de una automatización en la pizarra" fill sizes="(max-width: 900px) 100vw, 44vw" style={{ objectFit: "cover" }} />
            </Box>
          </Reveal>
        </Box>
        <Reveal delay={0.1}>
          <CodeNodeReveal />
        </Reveal>
      </Container>
    </Box>
  )
}

function QueAutomatizamos() {
  return (
    <Box component="section" sx={{ py: { xs: 8, md: 12 }, borderBottom: `1px solid ${tokens.lineSoft}` }}>
      <Container>
        <Reveal>
          <Box sx={{ maxWidth: 620, mb: { xs: 5, md: 7 } }}>
            <Typography variant="h2" sx={{ fontSize: { xs: 28, md: 40 }, color: tokens.ink, mb: 2 }}>Qué automatizo.</Typography>
            <Typography variant="body1" sx={{ fontSize: { xs: 16, md: 18 }, color: tokens.body }}>
              Ejemplos que ya corren en producción. Empiezo por el que más te duele.
            </Typography>
          </Box>
        </Reveal>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap: { xs: 2.5, md: 3 }, alignItems: "stretch" }}>
          {USE_CASES.map((u, i) => (
            <Reveal key={u.title} delay={(i % 2) * 0.06}>
              <Box sx={{ height: "100%", display: "flex", flexDirection: "column", borderRadius: 3, border: `1px solid ${tokens.line}`, bgcolor: tokens.win, overflow: "hidden" }}>
                <Box sx={{ p: { xs: 2.5, md: 3 } }}>
                  <Typography sx={{ fontFamily: fonts.serif, fontSize: 20, fontWeight: 600, color: tokens.ink, mb: 0.5 }}>{u.title}</Typography>
                  <Typography variant="body2" sx={{ color: tokens.body, maxWidth: 420 }}>{u.desc}</Typography>
                </Box>
                <Box sx={{ mt: "auto", p: { xs: 2, md: 2.5 }, pt: 0, minWidth: 0 }}>
                  <Box sx={{ minWidth: 0, "& > *": { width: "100%" } }}>{u.el}</Box>
                </Box>
              </Box>
            </Reveal>
          ))}
        </Box>
      </Container>
    </Box>
  )
}

function Fiabilidad() {
  return (
    <Box component="section" sx={{ py: { xs: 8, md: 12 }, borderBottom: `1px solid ${tokens.lineSoft}` }}>
      <Container>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1.05fr 0.95fr" }, gap: { xs: 5, md: 8 }, alignItems: "center" }}>
          <Reveal delay={0.1}>
            <RunLogConsole />
          </Reveal>
          <Reveal>
            <Box>
              <Typography variant="h2" component="p" sx={{ fontSize: { xs: 26, md: 38 }, color: tokens.ink, mb: 2, maxWidth: 440 }}>
                Los flujos fallan. La diferencia es enterarte al segundo.
              </Typography>
              <Typography variant="body1" sx={{ fontSize: { xs: 16, md: 18 }, color: tokens.body, maxWidth: 460 }}>
                Un timeout del ERP, una API que no responde. Los flujos reintentan solos y, si no se resuelve, te avisan al momento por Slack o WhatsApp. Te enteras al segundo, no al cierre de mes con un descuadre.
              </Typography>
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
          <Typography variant="h2" sx={{ fontSize: { xs: 28, md: 40 }, color: tokens.ink, mb: { xs: 4, md: 6 } }}>Objeciones, resueltas.</Typography>
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

export default function AutomatizacionMui() {
  return (
    <Box sx={{ bgcolor: tokens.paper, color: tokens.body, fontFamily: fonts.sans }}>
      <SiteHeader />
      <Crumbs items={[{ label: "Servicios" }, { label: "Automatización" }]} />
      <Hero />
      <Rail />
      <Horas />
      <Diferenciador />
      <QueAutomatizamos />
      <Fiabilidad />
      <StatementBand title="La operativa corre sola. Tú vuelves a vender." photo="/assets/gen/photo-codigo.png" />
      <FeaturedCases title="Automatización funcionando en tiendas reales." slugs={["pelican-catchy-infraestructura-ia", "marea-es"]} />
      <Faq />
      <DiagnosticoCTA />
      <SiteFooter />
    </Box>
  )
}
