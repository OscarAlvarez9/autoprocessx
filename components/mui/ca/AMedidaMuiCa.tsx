"use client"

import Link from "@/components/LocaleLink"
import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import Accordion from "@mui/material/Accordion"
import AccordionSummary from "@mui/material/AccordionSummary"
import AccordionDetails from "@mui/material/AccordionDetails"
import { tokens, fonts } from "@/lib/mui/theme"
import { SiteHeader, SiteFooter, DiagnosticoCTA, ServiceHero, Reveal, ArtifactWindow, Crumbs } from "@/components/mui/shared"
import { GroundingViz } from "@/components/mui/agentArtifacts"
import FeaturedCases from "@/components/mui/FeaturedCases"

const CUANDO = [
  ["El SaaS no encaixa", "El teu procés és diferent del que donen per fet les eines genèriques, i adaptar-t'hi et costa més que construir el teu."],
  ["Les teves dades no poden sortir", "Documentació interna, clients o normativa sensible: la plataforma viu a la teva infraestructura, no al servidor d'un tercer."],
  ["El coneixement és en documents", "Manuals, contractes, històrics: una plataforma RAG els converteix en respostes amb la font citada, no en carpetes mortes."],
  ["Pagues diversos SaaS que no es parlen", "CRM, tasques, informes i dades repartits en cinc subscripcions: una plataforma pròpia els uneix i elimina les quotes."],
] as const

const STACK = ["Next.js + TypeScript", "PostgreSQL + Prisma", "RAG amb citació de font", "n8n per a l'operativa", "Auth.js multiusuari", "Self-hosted o cloud propi"]

const FAQS = [
  { q: "Quan compensa construir a mida en lloc de contractar un SaaS?", a: "Quan el procés és realment teu, les dades no poden sortir o la suma de subscripcions ja fa mal. Si un SaaS estàndard t'ho resol, t'ho dic al diagnòstic i t'estalvies el projecte." },
  { q: "La IA s'inventa respostes?", a: "No. Les plataformes van ancorades als teus documents amb RAG: cada resposta cita la font d'on surt, i si la dada no existeix, ho diu. És el mateix principi del meu agent de vendes." },
  { q: "De qui és el codi?", a: "Teu des del primer commit: repositori de la teva propietat, documentat i desplegat a la teva infraestructura o a la meva, com prefereixis. Sense lock-in." },
  { q: "Qui la manté després?", a: "Jo en retainer si vols, o el teu equip: com que és codi estàndard (Next.js, PostgreSQL), qualsevol desenvolupador la pot continuar. Aquesta és la gràcia de no dependre d'un SaaS tancat." },
  { q: "Quant es triga?", a: "Depèn de l'abast: defineixo mòduls i fases al diagnòstic i començo pel que més valor t'aporta. Les meves pròpies plataformes (Business Suite, OpoAI) segueixen aquest mateix camí." },
]

function Hero() {
  return (
    <ServiceHero
      title="Plataformes a mida, quan l'estàndard no arriba."
      sub="Aplicacions internes i plataformes RAG ancorades als teus documents i a les teves dades: privades, amb la font citada i amb el codi de la teva propietat."
      specs={[
        ["enfocament", "RAG sobre els teus documents i dades"],
        ["stack", "Next.js, PostgreSQL i n8n"],
        ["propietat", "codi i dades, teus des del dia 1"],
      ]}
      note="Sota demanda: poques cada any, ben fetes."
      artifact={
        <ArtifactWindow tag="OpoAI · plataforma en producció" ratio="16 / 10">
          <Box component="img" src="/assets/opoai_tutor.png" alt="OpoAI, plataforma d'estudi construïda a mida, en producció" sx={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: 1, border: `1px solid ${tokens.lineSoft}` }} />
        </ArtifactWindow>
      }
    />
  )
}

function Cuando() {
  return (
    <Box component="section" sx={{ py: { xs: 8, md: 12 }, borderBottom: `1px solid ${tokens.lineSoft}` }}>
      <Container>
        <Reveal>
          <Typography variant="h2" sx={{ fontSize: { xs: 28, md: 40 }, color: tokens.ink, mb: { xs: 5, md: 7 }, maxWidth: 620 }}>
            Quan té sentit construir el teu.
          </Typography>
        </Reveal>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap: { xs: 3, md: 4 } }}>
          {CUANDO.map(([t, d], i) => (
            <Reveal key={t} delay={(i % 2) * 0.06}>
              <Box sx={{ borderTop: `2px solid ${tokens.line}`, pt: 2.5 }}>
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

function RagDetalle() {
  return (
    <Box component="section" sx={{ py: { xs: 8, md: 12 }, borderBottom: `1px solid ${tokens.lineSoft}` }}>
      <Container>
        <Reveal>
          <Box sx={{ maxWidth: 640, mb: { xs: 4, md: 6 } }}>
            <Typography variant="h2" sx={{ fontSize: { xs: 28, md: 40 }, color: tokens.ink, mb: 2 }}>
              Ancorada als teus documents, no a la imaginació del model.
            </Typography>
            <Typography variant="body1" sx={{ fontSize: { xs: 16, md: 18 }, color: tokens.body }}>
              Tota plataforma que construeixo respon només amb el que hi ha a les teves fonts i cita d&apos;on ho treu. Si la dada no existeix, ho reconeix. És una arquitectura RAG orquestrada amb n8n i codi propi sobre Next.js i PostgreSQL: el mateix principi que fa fiable el meu agent de vendes, aplicat al teu coneixement intern.
            </Typography>
          </Box>
        </Reveal>
        <Reveal delay={0.1}>
          <GroundingViz />
        </Reveal>
        <Reveal delay={0.15}>
          <Stack direction="row" sx={{ flexWrap: "wrap", gap: 1, mt: 4 }}>
            {STACK.map((s) => (
              <Box key={s} sx={{ border: `1px solid ${tokens.line}`, borderRadius: 2, px: 1.5, py: 0.75, bgcolor: tokens.win }}>
                <Typography sx={{ fontFamily: fonts.mono, fontSize: 12.5, color: tokens.ink }}>{s}</Typography>
              </Box>
            ))}
          </Stack>
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
            Mateix mètode, mateix responsable.
          </Typography>
          <Typography variant="body1" sx={{ color: tokens.body, mb: 3 }}>
            Diagnòstic amb les teves dades, pla per fases i mòduls, implementació i seguiment. Sense sorpreses d&apos;abast a mig projecte.
          </Typography>
          <Button component={Link} href="/metodo" sx={{ color: tokens.ink, fontWeight: 700, px: 0, "&:hover": { bgcolor: "transparent", color: tokens.petrol } }}>
            Veure el mètode complet <Box component="span" sx={{ color: tokens.petrol, ml: 0.5 }}>↗</Box>
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
            Preguntes freqüents.
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

export default function AMedidaMuiCa() {
  return (
    <Box sx={{ bgcolor: tokens.paper, color: tokens.body, fontFamily: fonts.sans }}>
      <SiteHeader />
      <Crumbs items={[{ label: "Serveis" }, { label: "Plataformes internes a mida" }]} />
      <Hero />
      <Cuando />
      <RagDetalle />
      <FeaturedCases title="Construïdes a mida, en producció." slugs={["seoscar-os-plataforma-propia", "opoai-plataforma-estudio-oposiciones"]} />
      <MetodoLink />
      <Faq />
      <DiagnosticoCTA />
      <SiteFooter />
    </Box>
  )
}
