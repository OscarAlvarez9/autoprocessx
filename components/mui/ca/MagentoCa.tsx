"use client"

import Link from "@/components/LocaleLink"
import Image from "next/image"
import { motion, useReducedMotion } from "motion/react"
import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import Accordion from "@mui/material/Accordion"
import AccordionSummary from "@mui/material/AccordionSummary"
import AccordionDetails from "@mui/material/AccordionDetails"
import { tokens, fonts } from "@/lib/mui/theme"
import { SiteHeader, SiteFooter, DiagnosticoCTA, ServiceHero, StatementBand, Reveal, ArtifactWindow, Crumbs } from "@/components/mui/shared"

/* ---------- artefacto: facetas del catálogo pasando por el embudo ---------- */

function FacetFunnel() {
  const reduce = useReducedMotion()
  const inRows = Array.from({ length: 9 }, (_, i) => 18 + i * 18)
  const outRows = [86, 96, 106]
  return (
    <ArtifactWindow tag="rastreig · facetes del catàleg" ratio="16 / 10">
      <Box sx={{ position: "relative", height: "100%", display: "flex", flexDirection: "column" }}>
        <Box component="svg" viewBox="0 0 320 176" sx={{ width: "100%", flex: 1, minHeight: 0 }}>
          {/* miles de URLs de filtro entrando */}
          {inRows.map((y, i) => (
            <line key={`in${i}`} x1="6" y1={y} x2="70" y2={y} stroke={tokens.line} strokeWidth={i % 3 === 0 ? 2 : 1.2} />
          ))}
          {/* embudo */}
          <path d="M78,10 L182,74 L182,102 L78,166 Z" fill={`${tokens.petrol}0D`} stroke={`${tokens.petrol}44`} strokeWidth="1.2" />
          <line x1="182" y1="74" x2="230" y2="86" stroke={`${tokens.petrol}44`} strokeWidth="1.2" />
          <line x1="182" y1="102" x2="230" y2="106" stroke={`${tokens.petrol}44`} strokeWidth="1.2" />
          {/* las que indexan, saliendo */}
          {outRows.map((y, i) => (
            <g key={`out${i}`}>
              <line x1="238" y1={y} x2="300" y2={y} stroke={tokens.teal} strokeWidth="2.2" />
              <path d={`M304,${y - 3} l2.5,2.5 l4,-5`} fill="none" stroke={tokens.teal} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </g>
          ))}
          {/* pulso que recorre el embudo */}
          {!reduce && (
            <motion.circle r="3.2" fill={tokens.teal}
              animate={{ cx: [70, 182, 300], cy: [88, 88, 96], opacity: [0, 1, 1, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, repeatDelay: 0.6, ease: "easeInOut" }} />
          )}
        </Box>
        <Stack direction="row" sx={{ justifyContent: "space-between", alignItems: "flex-end", mt: 1 }}>
          <Box>
            <Typography sx={{ fontFamily: fonts.mono, fontSize: 10.5, fontWeight: 700, color: tokens.ink }}>URL de filtre</Typography>
            <Typography sx={{ fontFamily: fonts.mono, fontSize: 9.5, color: tokens.muted }}>milers, la majoria buides</Typography>
          </Box>
          <Box sx={{ textAlign: "right" }}>
            <Typography sx={{ fontFamily: fonts.mono, fontSize: 10.5, fontWeight: 700, color: tokens.teal }}>categories i fitxes que venen</Typography>
            <Typography sx={{ fontFamily: fonts.mono, fontSize: 9.5, color: tokens.muted }}>el que indexa</Typography>
          </Box>
        </Stack>
        <Typography sx={{ fontFamily: fonts.mono, fontSize: 9.5, color: tokens.muted, mt: 1 }}>
          esquema il·lustratiu · què s&apos;indexa ho decideix el diagnòstic
        </Typography>
      </Box>
    </ArtifactWindow>
  )
}

/* ---------- dades ---------- */

const FRENOS = [
  ["La navegació per capes descontrolada", "Amb un catàleg gran, els filtres per atribut generen desenes de milers de combinacions d'URL. Sense estratègia de facetes, Google gasta el rastreig en filtres buits mentre les teves categories de diners fan cua. És el problema de SEO número u de Magento i el de més recorregut."],
  ["Metadades impossibles de mantenir a mà", "Ningú no escriu títols i descripcions per a milers de referències una a una. Magento permet plantilles i regles per atribut per generar-los amb lògica; la majoria de botigues no les aprofita i conviu amb metes duplicades o buides a escala."],
  ["Rendiment que depèn de tota la màquina", "Memòria cau de pàgina completa, indexadors, crons, cercador i base de dades: a Magento la velocitat és un sistema, no un plugin. Un frontend pesat sobre una infraestructura justa dona botigues lentes on més fa mal: el mòbil."],
  ["Manteniment que es menja el pressupost", "Pedaços, actualitzacions de versió, mòduls de pagament que es renoven cada any. És el cost de la plataforma, però quan tot el pressupost se'n va a mantenir, no queda res per créixer. La meva feina és que la part de créixer torni a existir."],
] as const

const TRABAJO = [
  ["SEO tècnic a escala de catàleg", "L'auditoria defineix l'estratègia de facetes (què s'indexa, què es canonicalitza, què es bloqueja), plantilles de metadades per regles, schema de producte complet, arquitectura de categories i un pla de rendiment per capes: frontend, memòria cau, indexadors i infraestructura. Prioritat per impacte en vendes."],
  ["Que la IA et citi (GEO)", "Verifico que GPTBot, ClaudeBot i PerplexityBot reben resposta del teu servidor (els WAF corporatius els bloquegen sovint), publico el teu llms.txt i faig citables les pàgines que importen: categories de diners, fitxes clau i FAQ. En catàlegs B2B això val el doble: les IA ja responen cerques de proveïdor."],
  ["CRO sobre el teu tema actual", "La conversió a Magento es treballa a la fitxa, el llistat, la cistella i un checkout la fricció del qual sí que és configurable. Hipòtesis mesurables sobre les teves dades, canvis quirúrgics, res de refer el frontend tret que els números ho demanin."],
  ["Agent de vendes IA i automatització", "L'agent es connecta al catàleg real (atributs inclosos) i fa el que un cercador intern no fa: entendre la pregunta, recomanar i acompanyar fins a la comanda. I els processos feixucs d'operar Magento (estoc, preus, exports, avisos) passen a fluxos automàtics documentats i en propietat teva."],
] as const

const FAQS = [
  { q: "Magento és massa plataforma per a la meva botiga?", a: "Si el teu catàleg és petit i la teva operativa és simple, probablement sí i t'ho diré. Però si ja estàs a Magento facturant, la pregunta útil no és aquesta sinó quant més pot donar el que ja tens. Gairebé sempre és força." },
  { q: "Per què el meu Magento va lent?", a: "Perquè a Magento la velocitat depèn de tot el sistema: tema, memòria cau de pàgina completa, indexadors, base de dades i infraestructura. Al diagnòstic mesuro capa per capa i et dic on és el coll d'ampolla real abans de tocar res." },
  { q: "Com es fa SEO amb milers de referències?", a: "Amb regles, no a mà: estratègia de facetes per al rastreig, plantilles de metadades per atribut, schema generat des del catàleg i prioritat absoluta a les categories que venen. El SEO de Magento és un problema d'enginyeria, i això és una bona notícia." },
  { q: "Treballes amb Adobe Commerce i amb Magento Open Source?", a: "Amb tots dos. La base tècnica és comuna i l'enfocament també: la diferència és en quines funcions vénen de sèrie i quines es resolen amb desenvolupament o automatització." },
  { q: "Pot una IA recomanar la meva botiga si soc B2B?", a: "Sí, i és on abans es nota. Les cerques de proveïdor i de producte tècnic ja es fan a ChatGPT i Perplexity. Si el teu catàleg és llegible per als seus bots i les teves pàgines responen preguntes reals, la teva botiga competeix en aquestes respostes; si no, ni hi apareixes." },
]

/* ---------- seccions ---------- */

function Hero() {
  return (
    <ServiceHero
      title="Agència Magento: més vendes d'un catàleg que ja pesa."
      sub="Treballo botigues Magento i Adobe Commerce que ja facturen i volen créixer sense canviar de plataforma ni dependre de pressupostos d'integrador per a cada ajust."
      specs={[
        ["plataforma", "Magento i Adobe Commerce"],
        ["enfocament", "SEO tècnic a escala · GEO · CRO"],
        ["propietat", "tot documentat i teu"],
      ]}
      note="Enginyeria de creixement sobre el que ja tens, no una fàbrica de projectes d'un any."
      artifact={<FacetFunnel />}
    />
  )
}

function Bloques({ title, intro, items, numbered }: { title: string; intro?: string; items: readonly (readonly [string, string])[]; numbered?: boolean }) {
  return (
    <Box component="section" sx={{ py: { xs: 8, md: 12 }, borderBottom: `1px solid ${tokens.lineSoft}` }}>
      <Container>
        <Reveal>
          <Box sx={{ maxWidth: 620, mb: { xs: 5, md: 7 } }}>
            <Typography variant="h2" sx={{ fontSize: { xs: 28, md: 40 }, color: tokens.ink, mb: intro ? 2 : 0 }}>{title}</Typography>
            {intro && <Typography variant="body1" sx={{ fontSize: { xs: 16, md: 18 }, color: tokens.body }}>{intro}</Typography>}
          </Box>
        </Reveal>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap: { xs: 3, md: 4 } }}>
          {items.map(([t, d], i) => (
            <Reveal key={t} delay={(i % 2) * 0.06}>
              <Box sx={{ borderTop: `2px solid ${tokens.line}`, pt: 2.5 }}>
                {numbered && <Typography sx={{ fontFamily: fonts.mono, fontSize: 12, color: tokens.petrol, mb: 1 }}>{`0${i + 1}`}</Typography>}
                <Typography sx={{ fontFamily: fonts.serif, fontSize: 21, fontWeight: 600, color: tokens.ink, mb: 1 }}>{t}</Typography>
                <Typography variant="body1" sx={{ color: tokens.body, maxWidth: 480 }}>{d}</Typography>
              </Box>
            </Reveal>
          ))}
        </Box>
      </Container>
    </Box>
  )
}

function SinMigrar() {
  return (
    <Box component="section" sx={{ py: { xs: 8, md: 12 }, borderBottom: `1px solid ${tokens.lineSoft}` }}>
      <Container>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1.05fr 0.95fr" }, gap: { xs: 4, md: 7 }, alignItems: "center" }}>
          <Reveal>
            <Box>
              <Typography variant="h2" sx={{ fontSize: { xs: 28, md: 40 }, color: tokens.ink, mb: 2 }}>
                Sense migrar i amb el codi en propietat teva.
              </Typography>
              <Typography variant="body1" sx={{ fontSize: { xs: 16, md: 18 }, color: tokens.body, maxWidth: 520 }}>
                Si el teu catàleg viu bé a Magento, migrar és un projecte d&apos;un any per tornar al punt de partida. La meva proposta és la contrària: exprimir la plataforma que ja domines. Tot canvi va versionat i documentat; no construeixo dependència, construeixo actius teus.
              </Typography>
            </Box>
          </Reveal>
          <Reveal delay={0.1}>
            <Box sx={{ position: "relative", borderRadius: 3, overflow: "hidden", border: `1px solid ${tokens.line}`, aspectRatio: "16 / 11" }}>
              <Image src="/assets/gen/photo-codigo.png" alt="Treballant el codi d'una botiga Magento sobre la seva pròpia plataforma" fill sizes="(max-width: 900px) 100vw, 44vw" style={{ objectFit: "cover" }} />
            </Box>
          </Reveal>
        </Box>
      </Container>
    </Box>
  )
}

function ParaQuien() {
  return (
    <Box component="section" sx={{ py: { xs: 8, md: 12 }, borderBottom: `1px solid ${tokens.lineSoft}` }}>
      <Container>
        <Reveal>
          <Typography variant="h2" sx={{ fontSize: { xs: 28, md: 40 }, color: tokens.ink, mb: { xs: 5, md: 7 }, maxWidth: 560 }}>
            Per a qui és, i per a qui no.
          </Typography>
        </Reveal>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap: { xs: 3, md: 4 } }}>
          <Reveal>
            <Box sx={{ p: { xs: 3, md: 3.5 }, borderRadius: 3, border: `1px solid ${tokens.teal}44`, bgcolor: `${tokens.teal}0A`, height: "100%" }}>
              <Typography sx={{ fontFamily: fonts.mono, fontSize: 12, fontWeight: 700, color: tokens.teal, mb: 1.5 }}>és per a tu si</Typography>
              <Typography variant="body1" sx={{ color: tokens.body }}>
                Gestiones un catàleg gran a Magento o Adobe Commerce, el manteniment es menja el pressupost i fa temps que ningú no treballa el creixement: rastreig, metadades a escala, conversió i visibilitat en IA. També si ets B2B i els teus clients ja pregunten a ChatGPT per proveïdors.
              </Typography>
            </Box>
          </Reveal>
          <Reveal delay={0.08}>
            <Box sx={{ p: { xs: 3, md: 3.5 }, borderRadius: 3, border: `1px solid ${tokens.line}`, bgcolor: tokens.win, height: "100%" }}>
              <Typography sx={{ fontFamily: fonts.mono, fontSize: 12, fontWeight: 700, color: tokens.muted, mb: 1.5 }}>no és per a tu si</Typography>
              <Typography variant="body1" sx={{ color: tokens.body }}>
                El teu catàleg cap en una botiga més simple i el que busques és justificar la plataforma, o si necessites un integrador per a un desenvolupament estructural enorme. Soc enginyeria de creixement sobre el que ja tens, no una fàbrica de projectes d&apos;un any. Si el que necessites és una plataforma nova a mida, això és{" "}
                <Box component={Link} href="/servicios/a-medida" sx={{ color: tokens.ink, fontWeight: 600, textDecoration: "underline", textDecorationColor: tokens.line }}>una altra cosa</Box>.
              </Typography>
            </Box>
          </Reveal>
        </Box>
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
            Diagnòstic amb les teves dades, pla prioritzat per impacte, implementació sobre el teu Magento i seguiment. Sense sorpreses d&apos;abast a mig projecte.
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
            Preguntes freqüents sobre SEO i CRO a Magento.
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

export default function MagentoCa() {
  return (
    <Box sx={{ bgcolor: tokens.paper, color: tokens.body, fontFamily: fonts.sans }}>
      <SiteHeader />
      <Crumbs items={[{ label: "Agència Magento" }]} />
      <Hero />
      <Bloques title="El que sol frenar les vendes a Magento." intro="Magento fa bé les coses difícils i en complica algunes de fàcils. Aquests són els frens que més es repeteixen a les auditories." items={FRENOS} />
      <Bloques title="Com treballo la teva botiga Magento." intro="El Pack Creixement ecommerce aplicat a Magento està pensat per a catàlegs grans: el que es fa, es fa a escala." items={TRABAJO} numbered />
      <SinMigrar />
      <ParaQuien />
      <StatementBand title="El SEO de Magento és un problema d'enginyeria. Aquesta és la bona notícia." photo="/assets/gen/photo-pizarra.png" />
      <MetodoLink />
      <Faq />
      <DiagnosticoCTA />
      <SiteFooter />
    </Box>
  )
}
