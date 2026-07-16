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
import { tokens, fonts } from "@/lib/mui/theme"
import { SiteHeader, SiteFooter, DiagnosticoCTA, ServiceHero, Reveal, ArtifactWindow, Crumbs } from "@/components/mui/shared"
import { GroundingViz } from "@/components/mui/agentArtifacts"
import FeaturedCases from "@/components/mui/FeaturedCases"

const CUANDO = [
  ["El SaaS no encaja", "Tu proceso es distinto al que asumen las herramientas genéricas, y adaptarte a ellas te cuesta más que construir lo tuyo."],
  ["Tus datos no pueden salir", "Documentación interna, clientes o normativa sensible: la plataforma vive en tu infraestructura, no en el servidor de un tercero."],
  ["El conocimiento está en documentos", "Manuales, contratos, históricos: una plataforma RAG los convierte en respuestas con fuente citada, no en carpetas muertas."],
  ["Pagas varios SaaS que no se hablan", "CRM, tareas, informes y datos repartidos en cinco suscripciones: una plataforma propia los une y elimina las cuotas."],
] as const

const STACK = ["Next.js + TypeScript", "PostgreSQL + Prisma", "RAG con citación de fuente", "n8n para la operativa", "Auth.js multiusuario", "Self-hosted o cloud propio"]

const FAQS = [
  { q: "¿Cuándo compensa construir a medida en vez de contratar un SaaS?", a: "Cuando el proceso es tuyo de verdad, los datos no pueden salir o la suma de suscripciones ya duele. Si un SaaS estándar te resuelve, te lo digo en el diagnóstico y te ahorras el proyecto." },
  { q: "¿La IA se inventa respuestas?", a: "No. Las plataformas van ancladas a tus documentos con RAG: cada respuesta cita la fuente de la que sale, y si el dato no existe, lo dice. Es el mismo principio de mi agente de ventas." },
  { q: "¿De quién es el código?", a: "Tuyo desde el primer commit: repositorio en tu propiedad, documentado, y desplegado en tu infraestructura o en la mía, como prefieras. Sin lock-in." },
  { q: "¿Quién la mantiene después?", a: "Yo en retainer si quieres, o tu equipo: al ser código estándar (Next.js, PostgreSQL) cualquier desarrollador puede continuarla. Esa es la gracia de no depender de un SaaS cerrado." },
  { q: "¿Cuánto se tarda?", a: "Depende del alcance: defino módulos y fases en el diagnóstico y empiezo por el que más valor te da. Mis propias plataformas (Business Suite, OpoAI) siguen ese mismo camino." },
]

function Hero() {
  return (
    <ServiceHero
      title="Plataformas a medida, cuando el estándar no llega."
      sub="Aplicaciones internas y plataformas RAG ancladas a tus documentos y a tus datos: privadas, con fuente citada y con el código en tu propiedad."
      specs={[
        ["enfoque", "RAG sobre tus documentos y datos"],
        ["stack", "Next.js, PostgreSQL y n8n"],
        ["propiedad", "código y datos, tuyos desde el día 1"],
      ]}
      note="Bajo demanda: pocas al año, bien hechas."
      artifact={
        <ArtifactWindow tag="OpoAI · plataforma en producción" ratio="16 / 10">
          <Box component="img" src="/assets/opoai_tutor.png" alt="OpoAI, plataforma de estudio construida a medida, en producción" sx={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: 1, border: `1px solid ${tokens.lineSoft}` }} />
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
            Cuándo tiene sentido construir lo tuyo.
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
              Anclada a tus documentos, no a la imaginación del modelo.
            </Typography>
            <Typography variant="body1" sx={{ fontSize: { xs: 16, md: 18 }, color: tokens.body }}>
              Toda plataforma que construyo responde solo con lo que hay en tus fuentes y cita de dónde lo saca. Si el dato no existe, lo reconoce. Es una arquitectura RAG orquestada con n8n y código propio sobre Next.js y PostgreSQL: el mismo principio que hace fiable a mi agente de ventas, aplicado a tu conocimiento interno.
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
            Mismo método, mismo responsable.
          </Typography>
          <Typography variant="body1" sx={{ color: tokens.body, mb: 3 }}>
            Diagnóstico con tus datos, plan por fases y módulos, implementación y seguimiento. Sin sorpresas de alcance a mitad de proyecto.
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

export default function AMedidaMui() {
  return (
    <Box sx={{ bgcolor: tokens.paper, color: tokens.body, fontFamily: fonts.sans }}>
      <SiteHeader />
      <Crumbs items={[{ label: "Servicios" }, { label: "Plataformas a medida" }]} />
      <Hero />
      <Cuando />
      <RagDetalle />
      <FeaturedCases title="Construidas a medida, en producción." slugs={["business-suite-ia-plataforma-corporativa", "opoai-plataforma-estudio-oposiciones"]} />
      <MetodoLink />
      <Faq />
      <DiagnosticoCTA />
      <SiteFooter />
    </Box>
  )
}
