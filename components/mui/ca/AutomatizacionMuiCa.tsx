"use client"

import Link from "@/components/LocaleLink"
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
import { AUTOMATIZACION_FAQS_CA } from "@/lib/serviciosFaqsCa"
import { SiteHeader, SiteFooter, DiagnosticoCTA, ServiceHero, StatementBand, Reveal, Crumbs } from "@/components/mui/shared"
import FeaturedCases from "@/components/mui/FeaturedCases"
import { CartRecovery } from "@/components/mui/agentArtifacts"
import {
  FlowRunSimulator, ManualOpsStrip, CodeNodeReveal, StockSyncDiff, FeedBuilder,
  PostPurchaseFlow, ReportSnippet, RunLogConsole, AutomationRail, BulkProductSim,
} from "@/components/mui/autoArtifacts"

const USE_CASES = [
  { title: "Sincronització d'estoc i comandes", desc: "ERP i botiga sempre quadrats, sense sobrevenda ni fitxes desfasades.", el: <StockSyncDiff /> },
  { title: "Recuperació de cistella", desc: "El nudge surt a temps i amb l'estoc real, no quan ja és tard.", el: <CartRecovery /> },
  { title: "Feeds de producte", desc: "Catàleg formatat per a cada destinació (Google, Meta, marketplaces).", el: <FeedBuilder /> },
  { title: "Alta massiva de productes", desc: "Pujo el catàleg sencer de cop, amb descripcions generades i estoc real. Sense carregar fitxa a fitxa a mà.", el: <BulkProductSim /> },
  { title: "Postcompra", desc: "Confirmació, seguiment i ressenya surten sols, en el moment que toca.", el: <PostPurchaseFlow /> },
  { title: "Reporting", desc: "L'informe setmanal de vendes i estoc arriba fet, sense obrir l'Excel.", el: <ReportSnippet /> },
]

const FAQS = AUTOMATIZACION_FAQS_CA

/* ---------- secciones ---------- */

function Hero() {
  return (
    <ServiceHero
      title="Automatització del teu ecommerce: l'operativa funciona sola mentre tu vens"
      sub="Cistella, estoc, feeds, postcompra i reporting orquestrats amb n8n i codi propi. Menys hores a mà, zero desquadraments, vendes que no s'escapen."
      specs={[
        ["motor", "n8n + codi propi (Node/Python)"],
        ["cobreix", "comandes · estoc · feeds · reporting"],
        ["desplegament", "self-hosted · sense quota per tasca"],
      ]}
      note={`// sota demanda · començo pel que més temps et treu`}
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
                Les hores que se&apos;n van en tasques que no venen.
              </Typography>
              <Typography variant="body1" sx={{ fontSize: { xs: 16, md: 18 }, color: tokens.body, maxWidth: 460 }}>
                Copiar comandes entre eines, quadrar l&apos;estoc a mà, muntar l&apos;informe del diumenge, corregir un desquadrament a les 23:00. No és feina que faci créixer la teva botiga: és un peatge operatiu que pagues cada setmana.
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
                No només connecto nodes. Escric el codi.
              </Typography>
              <Typography variant="body1" sx={{ fontSize: { xs: 16, md: 18 }, color: tokens.body }}>
                La majoria d&apos;agències d&apos;automatització no escriuen ni una línia de codi: arrosseguen caixes i es queden a mig camí tan bon punt hi ha una regla de negoci real. Aquí la lògica viu en Node i Python dins del mateix flux. Mira-ho:
              </Typography>
            </Box>
          </Reveal>
          <Reveal delay={0.1}>
            <Box sx={{ position: "relative", borderRadius: 3, overflow: "hidden", border: `1px solid ${tokens.line}`, aspectRatio: "16 / 10" }}>
              <Image src="/assets/gen/photo-pizarra.png" alt="Dissenyant el flux d'una automatització a la pissarra" fill sizes="(max-width: 900px) 100vw, 44vw" style={{ objectFit: "cover" }} />
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
            <Typography variant="h2" sx={{ fontSize: { xs: 28, md: 40 }, color: tokens.ink, mb: 2 }}>Què automatitzo.</Typography>
            <Typography variant="body1" sx={{ fontSize: { xs: 16, md: 18 }, color: tokens.body }}>
              Exemples que ja funcionen en producció. Començo pel que més et cou.
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
                Els fluxos fallen. La diferència és assabentar-te&apos;n a l&apos;instant.
              </Typography>
              <Typography variant="body1" sx={{ fontSize: { xs: 16, md: 18 }, color: tokens.body, maxWidth: 460 }}>
                Un timeout de l&apos;ERP, una API que no respon. Els fluxos ho tornen a provar sols i, si no es resol, t&apos;avisen a l&apos;instant per Slack o WhatsApp. T&apos;assabentes al moment, no al tancament de mes amb un desquadrament.
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
          <Typography variant="h2" sx={{ fontSize: { xs: 28, md: 40 }, color: tokens.ink, mb: { xs: 4, md: 6 } }}>Objeccions, resoltes.</Typography>
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

export default function AutomatizacionMuiCa() {
  return (
    <Box sx={{ bgcolor: tokens.paper, color: tokens.body, fontFamily: fonts.sans }}>
      <SiteHeader />
      <Crumbs items={[{ label: "Serveis" }, { label: "Automatització" }]} />
      <Hero />
      <Rail />
      <Horas />
      <Diferenciador />
      <QueAutomatizamos />
      <Fiabilidad />
      <StatementBand title="L'operativa funciona sola. Tu tornes a vendre." photo="/assets/gen/photo-codigo.png" />
      <FeaturedCases title="Automatització funcionant en botigues reals." slugs={["pelican-catchy-infraestructura-ia", "marea-es"]} />
      <Faq />
      <DiagnosticoCTA />
      <SiteFooter />
    </Box>
  )
}
