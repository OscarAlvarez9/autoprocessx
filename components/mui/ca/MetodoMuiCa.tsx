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
    label: "Diagnòstic",
    meta: "Setmana 1",
    title: "Diagnòstic",
    tag: "diagnòstic · eines",
    desc: "Analitzo la teva botiga amb les teves dades reals (GA4, Search Console, Clarity, el teu catàleg i el teu checkout). Busco on s'escapen les vendes: trànsit que no arriba, visites que no compren, hores que se'n van en operativa. En surts amb un pla clar, tant si continuem junts com si no.",
    artifact: <ToolsScatter />,
  },
  {
    label: "Estratègia",
    meta: "Setmana 1-2",
    title: "Estratègia de conversió",
    tag: "estratègia · customer journey",
    desc: "Dissenyo el customer journey complet: quines palanques tocar (SEO, agent, automatització), en quin ordre i per què. Cada acció va prioritzada per l'impacte esperat en vendes, no per moda. Decideixo amb tu, amb els teus números damunt la taula.",
    artifact: <StoreTemplate />,
  },
  {
    label: "Implementació",
    meta: "Setmana 2-5",
    title: "Implementació",
    tag: "implementació · sobre el teu stack",
    desc: "Construeixo sobre la teva plataforma actual, sense migrar: SEO tècnic, agent de vendes, automatització amb n8n i codi propi. Tot mesurable, traçable i de la teva propietat des del primer commit.",
    artifact: <N8nFlow />,
  },
  {
    label: "Seguiment",
    meta: "continu",
    title: "Seguiment",
    tag: "seguiment · resultats",
    desc: "Mesuro contra el pla amb les teves dades reals i ajusto mes a mes. L'informe arriba sol, amb el que ha passat i el que toca després. El sistema no s'atura i tu sempre saps per què.",
    artifact: <ConversionChart />,
  },
]

const ENTREGABLES: [string, string, string][] = [
  ["01", "Del diagnòstic", "Un informe amb els punts de fuga concrets i un pla prioritzat per impacte. És teu encara que no continuem junts."],
  ["02", "De l'estratègia", "El customer journey dissenyat i un backlog d'accions ordenat: què, quan i què espero de cadascuna."],
  ["03", "De la implementació", "Codi en producció funcionant sobre la teva botiga. Repositori de la teva propietat, documentat i sense lligams."],
  ["04", "Del seguiment", "Un informe mensual amb dades reals contra el pla, i les decisions del mes següent ja proposades."],
]

const DIAGNOSTICO_INCLUYE = [
  "Analítica de trànsit i conversió (GA4, Search Console, Clarity)",
  "Revisió de fitxes, cistella i checkout: on es perd la venda",
  "Visibilitat a Google, Maps i motors d'IA (ChatGPT, Perplexity)",
  "Mapa de l'operativa: quines tasques es mengen hores i es poden automatitzar",
  "Pla prioritzat per impacte, amb el que faria primer i per què",
]

const FAQS = [
  { q: "Quant dura el procés complet?", a: "El diagnòstic surt la primera setmana. La implementació típica va de la setmana 2 a la 5, segons l'abast que prioritzem junts. El seguiment és continu, mes a mes." },
  { q: "Què necessites de mi per començar?", a: "Accés de lectura a la teva analítica (GA4, Search Console) i a la teva plataforma. Amb això faig el diagnòstic amb dades reals, no amb suposicions. El teu temps: una trucada inicial i una altra per lliurar-te el pla." },
  { q: "I si el diagnòstic diu que no encaixem?", a: "T'ho dic i et quedes el pla igualment. Prefereixo perdre un projecte que prometre resultats que els teus números no sostenen. Només entren cinc projectes al mes precisament per això." },
  { q: "El codi i les dades són meus?", a: "Sí, des del primer dia. Repositori de la teva propietat, credencials teves, i si algun dia vols continuar amb un altre equip, t'ho emportes tot funcionant." },
  { q: "Treballes amb qualsevol plataforma?", a: "Shopify, WooCommerce, PrestaShop, Magento, BigCommerce o web pròpia. El mètode és el mateix; canvien els connectors. Mai no et faig migrar per treballar amb mi." },
]

/* ---------- secciones ---------- */

function Hero() {
  return (
    <ServiceHero
      title="Un mètode que comença per les teves dades i acaba en vendes."
      sub="Quatre etapes, un responsable i zero fum: diagnòstic amb dades reals, pla prioritzat, implementació sobre la teva botiga i seguiment mes a mes."
      specs={[
        ["comença per", "un diagnòstic amb les teves dades reals"],
        ["lliurament", "pla prioritzat + codi de la teva propietat"],
        ["ritme", "pla la setmana 1, producció des de la 2"],
      ]}
      note="El pla del diagnòstic és teu, tant si continuem com si no."
      artifact={
        <ArtifactWindow tag="diagnòstic · les teves eines" ratio="16 / 10">
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
      title="Les quatre etapes"
      subtitle="Així treballo de principi a fi. Fes clic en una etapa o baixa per veure-les."
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
            {"Què t'emportes de cada etapa."}
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
                El diagnòstic, en detall.
              </Typography>
              <Typography variant="body1" sx={{ fontSize: { xs: 16, md: 18 }, color: tokens.body, maxWidth: 460, mb: 3 }}>
                {"És la porta d'entrada a tot i per això és l'única cosa que et demano que reservis. No és una trucada comercial: és feina real sobre les teves dades, i el pla resultant és teu encara que decideixis no continuar amb mi."}
              </Typography>
              <Box sx={{ position: "relative", borderRadius: 3, overflow: "hidden", border: `1px solid ${tokens.line}`, aspectRatio: "16 / 9", maxWidth: 460 }}>
                <Image src="/assets/gen/photo-revision.png" alt="Sessió de diagnòstic revisant l'analítica d'una botiga" fill sizes="(max-width: 900px) 100vw, 44vw" style={{ objectFit: "cover" }} />
              </Box>
            </Box>
          </Reveal>
          <Reveal delay={0.1}>
            <Paper elevation={0} sx={{ bgcolor: tokens.win, border: `1px solid ${tokens.line}`, borderRadius: 3, p: { xs: 3, md: 4 } }}>
              <Typography sx={{ fontSize: 13, fontWeight: 700, color: tokens.ink, mb: 2 }}>Què inclou</Typography>
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
            Preguntes sobre el mètode.
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

export default function MetodoMuiCa() {
  return (
    <Box sx={{ bgcolor: tokens.paper, color: tokens.body, fontFamily: fonts.sans }}>
      <SiteHeader />
      <Crumbs items={[{ label: "Mètode" }]} />
      <Hero />
      <Etapas />
      <Entregables />
      <DiagnosticoDetalle />
      <FeaturedCases title="El mètode, aplicat." slugs={["totfinestra", "pelican-catchy-infraestructura-ia", "marea-es"]} />
      <StatementBand title="Enginyeria, no fum. Un mètode que pots auditar." photo="/assets/gen/photo-pizarra.png" />
      <Faq />
      <DiagnosticoCTA />
      <SiteFooter />
    </Box>
  )
}
