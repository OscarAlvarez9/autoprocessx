"use client"

import Image from "next/image"
import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import Paper from "@mui/material/Paper"
import Accordion from "@mui/material/Accordion"
import AccordionSummary from "@mui/material/AccordionSummary"
import AccordionDetails from "@mui/material/AccordionDetails"
import { tokens, fonts } from "@/lib/mui/theme"
import { SiteHeader, SiteFooter, DiagnosticoCTA, ServiceHero, StatementBand, Reveal, Crumbs } from "@/components/mui/shared"
import FeaturedCases from "@/components/mui/FeaturedCases"
import {
  AgentChatSimulator, GroundingViz, DualChannel,
  CartRecovery, MissedSalesTimeline, IntegrationRail, AgentDemo,
} from "@/components/mui/agentArtifacts"

const BENEFICIOS = [
  { t: "Recomienda y sube el ticket", d: "Cruza lo que busca el cliente con tu catálogo y propone el producto correcto, con upsell y packs cuando encaja." },
  { t: "Vende a las 3 de la madrugada", d: "Atiende 24/7 sin coste por hora. La venta no espera a que abras." },
  { t: "Empuja al checkout", d: "No solo informa: deja el producto en el carrito y acompaña hasta el pago." },
  { t: "Recupera carritos", d: "Detecta el carrito frío y manda el nudge a tiempo, con el dato real de stock." },
]

const FAQS = [
  { q: "¿Puedo contratar solo el agente, sin el pack?", a: "Sí. El agente se contrata suelto y es la entrada más rápida: se conecta a tu catálogo y empieza a vender. Si luego quieres tráfico y conversión, el pack Crecimiento lo une todo." },
  { q: "¿El agente se inventa productos o precios?", a: "No. Está anclado a tu catálogo real mediante RAG: responde con tus productos, precios y stock. Si un dato no lo tiene, lo dice y deriva a una persona en vez de improvisar." },
  { q: "¿Usa mi catálogo de verdad?", a: "Sí. Sincronizo tu catálogo y tu documentación (envíos, devoluciones, tallaje) en una base vectorial. Cuando cambias un precio o un stock, el agente responde con el dato nuevo al momento." },
  { q: "¿En qué se diferencia de un chatbot normal?", a: "Un chatbot normal sigue un guion: si la pregunta se sale, se rompe o se inventa la respuesta. Este agente está anclado a tu catálogo real por RAG: responde con tus productos, tus precios y tu stock, en tu web y como chatbot de WhatsApp. Y cuando no sabe algo, lo dice y escala a un humano en lugar de improvisar." },
  { q: "¿En qué idiomas atiende?", a: "Responde en el idioma en que le escribe el cliente. Útil si vendes fuera o tienes público en varios idiomas." },
  { q: "¿Necesito cambiar de plataforma? ¿Cuánto tarda?", a: "No se migra nada: se conecta sobre tu tienda actual (Shopify, WooCommerce, PrestaShop o Magento) y sobre WhatsApp. El tiempo de puesta en marcha depende de tu catálogo; lo concretamos en el diagnóstico." },
  { q: "¿Y si una consulta es delicada?", a: "El agente detecta cuándo escalar (devoluciones complejas, incidencias o dudas fuera de catálogo) y pasa la conversación a tu equipo con el contexto de lo hablado." },
]

/* ---------- secciones ---------- */

function Hero() {
  return (
    <ServiceHero
      title="Un agente de ventas IA que no duerme, no improvisa y cierra."
      sub="Recomienda producto y acompaña al checkout, anclado a tu catálogo real. En tu web y en WhatsApp, 24/7."
      specs={[
        ["ancla", "tu catálogo real, vía RAG"],
        ["canales", "web + WhatsApp · 24/7"],
        ["si no lo sabe", "lo dice y deriva a humano"],
      ]}
      note={`// anclado al catálogo · si no sé el stock, lo digo, no lo invento`}
      artifact={<AgentChatSimulator />}
    />
  )
}

function Integraciones() {
  return (
    <Box component="section" sx={{ py: { xs: 5, md: 6 }, borderBottom: `1px solid ${tokens.lineSoft}` }}>
      <Container>
        <Reveal>
          <IntegrationRail />
        </Reveal>
      </Container>
    </Box>
  )
}

function CosteDeNoTenerlo() {
  return (
    <Box component="section" sx={{ py: { xs: 8, md: 12 }, borderBottom: `1px solid ${tokens.lineSoft}` }}>
      <Container>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap: { xs: 5, md: 8 }, alignItems: "center" }}>
          <Reveal>
            <Box>
              <Typography variant="h2" sx={{ fontSize: { xs: 26, md: 38 }, color: tokens.ink, mb: 2, maxWidth: 460 }}>
                Cada mensaje sin responder es una venta que se enfría.
              </Typography>
              <Typography variant="body1" sx={{ fontSize: { xs: 16, md: 18 }, color: tokens.body, maxWidth: 460 }}>
                Preguntas a medianoche, dudas de talla o stock, carritos a punto de comprar. Si nadie contesta a tiempo, el cliente se va a otra pestaña y no vuelve. No es tráfico que falta: es demanda que ya tienes y se escapa.
              </Typography>
            </Box>
          </Reveal>
          <Reveal delay={0.1}>
            <MissedSalesTimeline />
          </Reveal>
        </Box>
      </Container>
    </Box>
  )
}

function PorQueNoInventa() {
  return (
    <Box component="section" sx={{ py: { xs: 8, md: 12 }, borderBottom: `1px solid ${tokens.lineSoft}` }}>
      <Container>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1.1fr 0.9fr" }, gap: { xs: 4, md: 7 }, alignItems: "center", mb: { xs: 4, md: 6 } }}>
          <Reveal>
            <Box sx={{ maxWidth: 640 }}>
              <Typography variant="h2" sx={{ fontSize: { xs: 28, md: 40 }, color: tokens.ink, mb: 2 }}>
                ¿Por qué no se lo inventa?
              </Typography>
              <Typography variant="body1" sx={{ fontSize: { xs: 16, md: 18 }, color: tokens.body }}>
                Cada respuesta sale de tu catálogo real, no de la imaginación del modelo. Recupera el dato exacto antes de contestar y cita la fila que usó. Y cuando algo no está en catálogo, lo reconoce y deriva a tu equipo. Esto es lo que separa un vendedor fiable de un chatbot que promete lo que no hay.
              </Typography>
            </Box>
          </Reveal>
          <Reveal delay={0.1}>
            <Box sx={{ position: "relative", borderRadius: 3, overflow: "hidden", border: `1px solid ${tokens.line}`, aspectRatio: "16 / 10" }}>
              <Image src="/assets/gen/photo-cliente.png" alt="Cliente comprando desde el móvil con el agente de la tienda" fill sizes="(max-width: 900px) 100vw, 44vw" style={{ objectFit: "cover" }} />
            </Box>
          </Reveal>
        </Box>
        <Reveal delay={0.1}>
          <GroundingViz />
        </Reveal>
      </Container>
    </Box>
  )
}

function Canales() {
  return (
    <Box component="section" sx={{ py: { xs: 8, md: 12 }, borderBottom: `1px solid ${tokens.lineSoft}` }}>
      <Container>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "0.92fr 1.08fr" }, gap: { xs: 5, md: 8 }, alignItems: "center" }}>
          <Reveal>
            <Box>
              <Typography variant="h2" sx={{ fontSize: { xs: 26, md: 38 }, color: tokens.ink, mb: 2, maxWidth: 440 }}>
                En tu web y como chatbot de WhatsApp. El mismo agente.
              </Typography>
              <Typography variant="body1" sx={{ fontSize: { xs: 16, md: 18 }, color: tokens.body, maxWidth: 460 }}>
                Un solo cerebro, dos canales. La misma base de conocimiento responde en el widget de tu tienda y en WhatsApp, sin bots que se contradicen. El cliente habla donde le viene bien; el agente mantiene el hilo.
              </Typography>
            </Box>
          </Reveal>
          <Reveal delay={0.1}>
            <DualChannel />
          </Reveal>
        </Box>
      </Container>
    </Box>
  )
}

function Ventas() {
  return (
    <Box component="section" sx={{ py: { xs: 8, md: 12 }, borderBottom: `1px solid ${tokens.lineSoft}` }}>
      <Container>
        <Reveal>
          <Typography variant="h2" sx={{ fontSize: { xs: 28, md: 40 }, color: tokens.ink, mb: { xs: 5, md: 7 }, maxWidth: 560 }}>
            Lo que hace por tus ventas.
          </Typography>
        </Reveal>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" }, gap: 2.5, mb: { xs: 6, md: 9 } }}>
          {BENEFICIOS.map((b, i) => (
            <Reveal key={b.t} delay={i * 0.05}>
              <Paper elevation={0} sx={{ height: "100%", bgcolor: tokens.win, border: `1px solid ${tokens.line}`, borderRadius: 3, p: { xs: 3, md: 3.5 } }}>
                <Typography sx={{ fontFamily: fonts.mono, fontSize: 12, color: tokens.petrol, mb: 1.5 }}>{`0${i + 1}`}</Typography>
                <Typography sx={{ fontFamily: fonts.serif, fontSize: 20, fontWeight: 600, color: tokens.ink, mb: 1 }}>{b.t}</Typography>
                <Typography variant="body2" sx={{ color: tokens.body }}>{b.d}</Typography>
              </Paper>
            </Reveal>
          ))}
        </Box>
        {/* pieza de cierre: un ejemplo real, el carrito recuperado en el chat */}
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "0.9fr 1.1fr" }, gap: { xs: 4, md: 8 }, alignItems: "center" }}>
          <Reveal>
            <Box>
              <Typography variant="h3" sx={{ fontFamily: fonts.serif, fontSize: { xs: 24, md: 32 }, color: tokens.ink, mb: 2, maxWidth: 420 }}>
                Un carrito abandonado no es una venta perdida.
              </Typography>
              <Typography variant="body1" sx={{ fontSize: { xs: 16, md: 18 }, color: tokens.body, maxWidth: 440 }}>
                Es una conversación a medias. El agente la retoma a tiempo, con el stock real, y la cierra en el mismo chat. Sin descuentos a ciegas ni recordatorios genéricos que nadie abre.
              </Typography>
            </Box>
          </Reveal>
          <Reveal delay={0.1}>
            <CartRecovery />
          </Reveal>
        </Box>
      </Container>
    </Box>
  )
}

function Pruebalo() {
  return (
    <Box component="section" sx={{ py: { xs: 8, md: 12 }, borderBottom: `1px solid ${tokens.lineSoft}` }}>
      <Container>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "0.9fr 1.1fr" }, gap: { xs: 5, md: 8 }, alignItems: "center" }}>
          <Reveal>
            <Box>
              <Typography variant="h2" sx={{ fontSize: { xs: 26, md: 38 }, color: tokens.ink, mb: 2, maxWidth: 420 }}>
                El agente de esta página es el producto.
              </Typography>
              <Typography variant="body1" sx={{ fontSize: { xs: 16, md: 18 }, color: tokens.body, maxWidth: 440 }}>
                Lánzale una pregunta y mira cómo responde: con producto, precio y stock, o reconociendo lo que no sabe. En tu tienda, se conecta a tu catálogo real.
              </Typography>
            </Box>
          </Reveal>
          <Reveal delay={0.1}>
            <AgentDemo />
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
            Objeciones, resueltas.
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

export default function AgenteMui() {
  return (
    <Box sx={{ bgcolor: tokens.paper, color: tokens.body, fontFamily: fonts.sans }}>
      <SiteHeader />
      <Crumbs items={[{ label: "Servicios" }, { label: "Agente de ventas IA" }]} />
      <Hero />
      <Integraciones />
      <CosteDeNoTenerlo />
      <PorQueNoInventa />
      <Canales />
      <Ventas />
      <Pruebalo />
      <FeaturedCases
        title="La misma ingeniería, en producción."
        sub="El principio del agente (responder solo con datos reales) ya funciona en estos proyectos."
        slugs={["opoai-plataforma-estudio-oposiciones", "marea-es"]}
      />
      <StatementBand as="p" title="Si no lo sabe, lo dice. Por eso el cliente le compra." photo="/assets/gen/photo-shopify.png" />
      <Faq />
      <DiagnosticoCTA />
      <SiteFooter />
    </Box>
  )
}
