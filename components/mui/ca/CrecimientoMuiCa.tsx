"use client"

import { useState } from "react"
import Link from "@/components/LocaleLink"
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
  { t: "SEO de producte i categoria", d: "Fitxes i categories que posicionen i venen: Schema de producte, contingut que respon a la intenció de compra i arquitectura de catàleg a escala." },
  { t: "GEO · AI Search", d: "Que ChatGPT, Perplexity i els AI Overviews citin la teva botiga quan algú pregunta què comprar. Dades de marca estructurades perquè et recomanin." },
  { t: "SEO tècnic per a la conversió", d: "Una botiga lenta perd vendes: optimitzo Core Web Vitals, indexació i enllaçat perquè la velocitat no et costi comandes." },
  { t: "Omnicanal i local", d: "Per a ecommerce amb punt físic: click-and-collect, recollida a botiga i fitxes de seu que capten la compra local a Google i Maps." },
]

const CONVERSION = [
  { n: "01", t: "Auditoria CRO", d: "Reviso fitxes, checkout i punts de fuga, i corregeixo on es perd la venda abans d'invertir en més trànsit." },
  { n: "02", t: "A/B testing", d: "Preu, fitxes i checkout: decideixo amb dades, no a ull. Prioritzo els tests per impacte potencial en vendes." },
  { n: "03", t: "Optimització del funnel", d: "Landing, cistella i checkout: trec fricció a cada pas perquè més visites acabin la compra." },
  { n: "04", t: "Automatització de venda", d: "Cistella abandonada, postcompra i upsell: seqüències que recuperen i repeteixen vendes soles." },
  { n: "05", t: "SEO de conversió", d: "Fitxes i contingut optimitzats per vendre, no només per posicionar: l'altra cara del SEO." },
]

const METODO = [
  { n: "01", t: "Diagnòstic", d: "Analitzo la teva botiga, el teu trànsit i els teus colls d'ampolla amb les teves dades reals (GA4, Search Console, Clarity). En surts amb un pla clar, tant si continuem com si no." },
  { n: "02", t: "Estratègia", d: "Dissenyo el customer journey: upsells, bundles i els punts de conversió prioritzats per impacte en vendes." },
  { n: "03", t: "Implementació", d: "Sobre la teva plataforma actual: SEO tècnic, CRO, agent de vendes i automatització. Codi net, mesurable i teu." },
  { n: "04", t: "Seguiment", d: "Mesuro i optimitzo amb dades reals, mes a mes. El sistema no s'atura." },
]

const FAQS = [
  {
    q: "Quina diferència hi ha entre el SEO tradicional i el posicionament GEO per a IA?",
    a: "El SEO treballa perquè Google et mostri als seus resultats; el GEO treballa perquè ChatGPT, Perplexity o Gemini et citin a les seves respostes. Comparteixen base tècnica (contingut llegible, dades estructurades, autoritat), però el GEO hi afegeix el seu: que els bots d'IA puguin accedir a la teva botiga, que les teves pàgines responguin preguntes completes i que la teva marca sigui coherent a tota la web. Al pack treballo els dos alhora perquè el client ja busca als dos llocs.",
  },
  {
    q: "Com gestiones catàlegs de milers de productes sense trencar la web?",
    a: "Amb automatització a nivell de servidor (Node.js i n8n): regles dinàmiques d'indexació, control de paginació i Schema de producte, evitant duplicats. Tot traçable i reversible.",
  },
  {
    q: "El CRO i l'A/B testing funcionen a la meva botiga?",
    a: "Sí, si hi ha prou trànsit per mesurar amb rigor. Començo per una auditoria dels teus punts de fuga i prioritzo els tests per impacte potencial en vendes: decideixo amb dades, no amb opinions. Si encara no hi ha volum, primer treballo el trànsit.",
  },
  {
    q: "Què és l'agent de vendes i com encaixa en el pack?",
    a: "És un assistent d'IA ancorat al teu catàleg real que recomana producte i acompanya fins al checkout sense inventar-se res. És el motor de conversió del pack i té la seva pròpia pàgina (Agent de vendes IA).",
  },
]

/* ---------- secciones ---------- */

function Hero() {
  return (
    <ServiceHero
      title="Creixement ecommerce: més trànsit que compra i més visites que converteixen"
      sub="Sóc l'Òscar i això és una consultoria de creixement per a botigues en línia que ja facturen: SEO tècnic i GEO que porten trànsit que compra, CRO i un agent de vendes IA que el converteixen, i automatització perquè l'operativa no et freni."
      specs={[
        ["palanques", "SEO · GEO/AI Search · CRO"],
        ["inclou", "agent de vendes + automatització"],
        ["base", "la teva plataforma, sense migrar"],
      ]}
      note="fet a mà, no generat"
      artifact={
        <ArtifactWindow tag="panell · conversió sobre la teva botiga" ratio="16 / 10">
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
                  No n&apos;hi ha prou que et trobin. Han de comprar.
                </Typography>
                <Typography variant="body1" sx={{ fontSize: { xs: 16, md: 18 }, color: tokens.body, maxWidth: 640 }}>
                  Els diners s&apos;escapen per les dues puntes: <Box component="span" sx={{ color: tokens.ink, fontWeight: 700 }}>visites que no arriben mai</Box> (no apareixes a Google, a Maps ni a la IA) i <Box component="span" sx={{ color: tokens.ink, fontWeight: 700 }}>visites que arriben i se&apos;n van sense comprar</Box> (fitxes confuses, checkout amb fricció, cistelles abandonades). Treballar només una meitat deixa l&apos;altra perdent vendes gota a gota. Per això aquest pack ataca les dues alhora.
                </Typography>
              </Box>
              <Box sx={{ position: "relative", minHeight: { xs: 220, md: "auto" }, borderLeft: { md: `1px solid ${tokens.line}` }, borderTop: { xs: `1px solid ${tokens.line}`, md: "none" } }}>
                <Image src="/assets/gen/photo-revision.png" alt="Revisant en equip l'analítica d'una botiga en línia" fill sizes="(max-width: 900px) 100vw, 38vw" style={{ objectFit: "cover" }} />
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
          <Typography variant="h3" sx={{ fontSize: { xs: 24, md: 32 }, color: tokens.ink }}>Més trànsit que compra</Typography>
        </Stack>
      </Reveal>
      <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "0.92fr 1.08fr" }, gap: { xs: 4, md: 7 }, alignItems: "center" }}>
        <Reveal>
          <Stack spacing={3}>
            <RankClimb />
            <ArtifactWindow tag="geo · et citen les IA" ratio="16 / 9">
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
          <Typography variant="h3" sx={{ fontSize: { xs: 24, md: 32 }, color: tokens.ink }}>Més visites que converteixen</Typography>
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
              <ArtifactWindow tag="agent · ancorat al teu catàleg" ratio="4 / 3">
                <AgentChatRich />
              </ArtifactWindow>
              <Box>
                <Typography variant="h3" sx={{ fontSize: { xs: 23, md: 30 }, color: tokens.ink, mb: 1.5 }}>
                  El motor estrella: un agent de vendes IA.
                </Typography>
                <Typography variant="body1" sx={{ color: tokens.body, mb: 3, maxWidth: 460 }}>
                  {"Recomana producte i acompanya fins al checkout, ancorat al teu catàleg real. No s'inventa preus ni estoc: si no ho sap, ho diu. La peça de conversió més potent del pack."}
                </Typography>
                <Button component={Link} href="/servicios/agente-ventas-ia" sx={{ color: tokens.ink, fontWeight: 700, px: 0, "&:hover": { bgcolor: "transparent", color: tokens.petrol } }}>
                  {"Veure l'agent de vendes"} <Box component="span" sx={{ color: tokens.petrol, ml: 0.5 }}>↗</Box>
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
            Dues palanques, un únic objectiu: que venguis més.
          </Typography>
          <Typography variant="body1" sx={{ color: tokens.body, maxWidth: 600, mb: { xs: 6, md: 9 } }}>
            {"Portar millor trànsit i convertir-lo millor. Les dues pesen igual: l'una sense l'altra deixa diners sobre la taula."}
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
                La enginyeria de dades que hi ha darrere.
              </Typography>
              <Typography variant="body1" sx={{ color: tokens.body, maxWidth: 480, mb: 3 }}>
                Les mateixes dades alimenten les dues palanques: intenció de cerca per al trànsit i comportament del funnel per a la conversió. Les processo a escala amb scripts propis i workflows.
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
                <Tab label="Pipeline de dades" />
                <Tab label="Auditoria contínua" />
              </Tabs>
              <Typography variant="body1" sx={{ color: tokens.body, maxWidth: 480, minHeight: { md: 116 } }}>
                {tab === 0
                  ? "Processo milers d'intencions de cerca i faig clustering de keywords amb scripts propis en Node.js orquestrats amb n8n. Cada keyword s'enriqueix amb dades reals (volum, dificultat, intenció de compra) abans de prioritzar-se per oportunitat de venda."
                  : "Workflows a n8n vigilen en segon pla si una URL crítica es desindexa o perd rendiment, i disparen alertes. L'auditoria no és un PDF anual: és un procés continu i traçable que protegeix el teu trànsit i la teva conversió."}
              </Typography>
            </Box>
          </Reveal>
          <Reveal delay={0.1}>
            <ArtifactWindow tag="n8n · orquestració de dades" ratio="4 / 3">
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
            Com treballo, pas a pas.
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
            Preguntes tècniques.
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

export default function CrecimientoMuiCa() {
  return (
    <Box sx={{ bgcolor: tokens.paper, color: tokens.body, fontFamily: fonts.sans }}>
      <SiteHeader />
      <Crumbs items={[{ label: "Serveis" }, { label: "Creixement ecommerce" }]} />
      <Hero />
      <Problem />
      <Levers />
      <AgenteHighlight />
      <Mecanismo />
      <StatementBand as="p" title="El trànsit que no converteix és només una factura de màrqueting." photo="/assets/gen/photo-analitica.png" />
      <Metodo />
      <FeaturedCases
        title="Botigues que ja creixen així."
        sub="Cada cas enllaça a la seva fitxa amb el que vaig fer i el resultat."
        slugs={["marea-es", "farmacia-garcia-del-cerro"]}
      />
      <Faq />
      <DiagnosticoCTA />
      <SiteFooter />
    </Box>
  )
}
