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
import { AGENTE_FAQS_CA } from "@/lib/serviciosFaqsCa"
import { SiteHeader, SiteFooter, DiagnosticoCTA, ServiceHero, StatementBand, Reveal, Crumbs } from "@/components/mui/shared"
import FeaturedCases from "@/components/mui/FeaturedCases"
import {
  AgentChatSimulator, GroundingViz, DualChannel,
  CartRecovery, MissedSalesTimeline, IntegrationRail, AgentDemo,
} from "@/components/mui/agentArtifacts"

const BENEFICIOS = [
  { t: "Recomana i fa pujar el tiquet", d: "Creua el que busca el client amb el teu catàleg i proposa el producte correcte, amb upsell i packs quan encaixa." },
  { t: "Ven a les 3 de la matinada", d: "Atén 24/7 sense cost per hora. La venda no espera que obris." },
  { t: "Empeny cap al checkout", d: "No només informa: deixa el producte a la cistella i acompanya fins al pagament." },
  { t: "Recupera cistelles", d: "Detecta la cistella freda i envia el nudge a temps, amb la dada real d'estoc." },
]

const FAQS = AGENTE_FAQS_CA

/* ---------- secciones ---------- */

function Hero() {
  return (
    <ServiceHero
      title="Un agent de vendes IA que no dorm, no improvisa i tanca la venda."
      sub="Recomana producte i acompanya fins al checkout, ancorat al teu catàleg real. A la teva web i a WhatsApp, 24/7."
      specs={[
        ["àncora", "el teu catàleg real, via RAG"],
        ["canals", "web + WhatsApp · 24/7"],
        ["si no ho sap", "ho diu i deriva a una persona"],
      ]}
      note={`// ancorat al catàleg · si no sé l'estoc, ho dic, no me l'invento`}
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
                Cada missatge sense resposta és una venda que es refreda.
              </Typography>
              <Typography variant="body1" sx={{ fontSize: { xs: 16, md: 18 }, color: tokens.body, maxWidth: 460 }}>
                Preguntes a mitjanit, dubtes de talla o d&apos;estoc, cistelles a punt de comprar. Si ningú no contesta a temps, el client se&apos;n va a una altra pestanya i no torna. No és trànsit el que falta: és demanda que ja tens i que se t&apos;escapa.
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
                Per què no s&apos;ho inventa?
              </Typography>
              <Typography variant="body1" sx={{ fontSize: { xs: 16, md: 18 }, color: tokens.body }}>
                Cada resposta surt del teu catàleg real, no de la imaginació del model. Recupera la dada exacta abans de contestar i cita la fila que ha fet servir. I quan una cosa no és al catàleg, ho reconeix i deriva la conversa al teu equip. Això és el que separa un venedor fiable d&apos;un chatbot que promet el que no hi ha.
              </Typography>
            </Box>
          </Reveal>
          <Reveal delay={0.1}>
            <Box sx={{ position: "relative", borderRadius: 3, overflow: "hidden", border: `1px solid ${tokens.line}`, aspectRatio: "16 / 10" }}>
              <Image src="/assets/gen/photo-cliente.png" alt="Client comprant des del mòbil amb l'agent de la botiga" fill sizes="(max-width: 900px) 100vw, 44vw" style={{ objectFit: "cover" }} />
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
                A la teva web i com a chatbot de WhatsApp. El mateix agent.
              </Typography>
              <Typography variant="body1" sx={{ fontSize: { xs: 16, md: 18 }, color: tokens.body, maxWidth: 460 }}>
                Un sol cervell, dos canals. La mateixa base de coneixement respon al widget de la teva botiga i a WhatsApp, sense bots que es contradiuen. El client parla on li va bé; l&apos;agent manté el fil.
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
            El que fa per les teves vendes.
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
        {/* peça de tancament: un exemple real, la cistella recuperada al xat */}
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "0.9fr 1.1fr" }, gap: { xs: 4, md: 8 }, alignItems: "center" }}>
          <Reveal>
            <Box>
              <Typography variant="h3" sx={{ fontFamily: fonts.serif, fontSize: { xs: 24, md: 32 }, color: tokens.ink, mb: 2, maxWidth: 420 }}>
                Una cistella abandonada no és una venda perduda.
              </Typography>
              <Typography variant="body1" sx={{ fontSize: { xs: 16, md: 18 }, color: tokens.body, maxWidth: 440 }}>
                És una conversa a mitges. L&apos;agent la reprèn a temps, amb l&apos;estoc real, i la tanca al mateix xat. Sense descomptes a cegues ni recordatoris genèrics que ningú no obre.
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
                L&apos;agent d&apos;aquesta pàgina és el producte.
              </Typography>
              <Typography variant="body1" sx={{ fontSize: { xs: 16, md: 18 }, color: tokens.body, maxWidth: 440 }}>
                Fes-li una pregunta i mira com respon: amb producte, preu i estoc, o reconeixent el que no sap. A la teva botiga, es connecta al teu catàleg real.
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
            Objeccions, resoltes.
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

export default function AgenteMuiCa() {
  return (
    <Box sx={{ bgcolor: tokens.paper, color: tokens.body, fontFamily: fonts.sans }}>
      <SiteHeader />
      <Crumbs items={[{ label: "Serveis" }, { label: "Agent de vendes IA" }]} />
      <Hero />
      <Integraciones />
      <CosteDeNoTenerlo />
      <PorQueNoInventa />
      <Canales />
      <Ventas />
      <Pruebalo />
      <FeaturedCases
        title="La mateixa enginyeria, en producció."
        sub="El principi de l'agent (respondre només amb dades reals) ja funciona en aquests projectes."
        slugs={["opoai-plataforma-estudio-oposiciones", "seoscar-os-plataforma-propia"]}
      />
      <StatementBand as="p" title="Si no ho sap, ho diu. Per això el client li compra." photo="/assets/gen/photo-shopify.png" />
      <Faq />
      <DiagnosticoCTA />
      <SiteFooter />
    </Box>
  )
}
