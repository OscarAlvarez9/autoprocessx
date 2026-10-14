"use client"

import { useState, useEffect } from "react"
import Link from "@/components/LocaleLink"
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
import { SiteHeader, SiteFooter, DiagnosticoCTA, ServiceHero, Reveal, ArtifactWindow, Crumbs } from "@/components/mui/shared"
import { BlockGlyph, type GlyphName } from "@/components/mui/landingGlyphs"
import { GEO_FAQS_CA } from "@/lib/geoFaqsCa"

const linkSx = { color: tokens.ink, fontWeight: 600, textDecoration: "underline", textDecorationColor: tokens.line, "&:hover": { textDecorationColor: tokens.petrol } } as const

/* ---------- artefacto: chequeo GEO de un dominio ---------- */

// Lista de comprobación ilustrativa: tres bots de IA contra el servidor, y las
// tres piezas de la web que deciden si una IA puede citarte. Un bot alterna
// entre bloqueado y abierto para contar el problema típico del WAF/CDN.
function GeoCheckArt() {
  const reduce = useReducedMotion()
  const [open, setOpen] = useState(false)
  useEffect(() => {
    if (reduce) return
    const t = setInterval(() => setOpen((o) => !o), 3000)
    return () => clearInterval(t)
  }, [reduce])
  const bots: [string, boolean][] = [["GPTBot", true], ["ClaudeBot", true], ["PerplexityBot", open]]
  const piezas: [string, string][] = [["llms.txt", "publicat"], ["schema", "Organization · Product · FAQPage"], ["contingut", "respostes directes"]]
  const rowSx = { display: "flex", alignItems: "center", justifyContent: "space-between", gap: 1, bgcolor: tokens.win, border: `1px solid ${tokens.lineSoft}`, borderRadius: 1.5, px: 1, py: 0.65 } as const
  return (
    <ArtifactWindow tag="revisió GEO · el teu domini" ratio="16 / 11">
      <Box sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
        <Typography sx={{ fontFamily: fonts.mono, fontSize: 9.5, color: tokens.muted, mb: 0.75 }}>accés de bots d&apos;IA · resposta del servidor</Typography>
        <Stack spacing={0.6}>
          {bots.map(([name, ok]) => (
            <Box key={name} sx={rowSx}>
              <Typography sx={{ fontFamily: fonts.mono, fontSize: { xs: 10, md: 11 }, fontWeight: 700, color: tokens.ink }}>{name}</Typography>
              <Box component={motion.div} key={ok ? "ok" : "ko"} initial={reduce ? false : { opacity: 0, y: 3 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}
                sx={{ display: "inline-flex", alignItems: "center", gap: 0.5, borderRadius: 999, px: 0.9, py: 0.2, bgcolor: ok ? `${tokens.teal}16` : `${tokens.red}14`, border: `1px solid ${ok ? `${tokens.teal}44` : `${tokens.red}44`}` }}>
                <Box sx={{ width: 5, height: 5, borderRadius: 999, bgcolor: ok ? tokens.teal : tokens.red }} />
                <Typography sx={{ fontFamily: fonts.mono, fontSize: 9.5, fontWeight: 700, color: ok ? tokens.teal : tokens.red }}>{ok ? "200 OK" : "403 WAF"}</Typography>
              </Box>
            </Box>
          ))}
        </Stack>
        <Typography sx={{ fontFamily: fonts.mono, fontSize: 9.5, color: tokens.muted, mt: 1.25, mb: 0.75 }}>el que la IA llegeix i pot citar</Typography>
        <Stack spacing={0.6}>
          {piezas.map(([k, v]) => (
            <Box key={k} sx={rowSx}>
              <Typography sx={{ fontFamily: fonts.mono, fontSize: { xs: 10, md: 11 }, fontWeight: 700, color: tokens.petrol }}>{k}</Typography>
              <Typography sx={{ fontFamily: fonts.mono, fontSize: 9.5, color: tokens.muted, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{v}</Typography>
            </Box>
          ))}
        </Stack>
        <Typography sx={{ fontFamily: fonts.mono, fontSize: 9, color: tokens.muted, mt: "auto", pt: 1 }}>
          esquema il·lustratiu · l&apos;estat real de la teva web surt del diagnòstic
        </Typography>
      </Box>
    </ArtifactWindow>
  )
}

/* ---------- datos ---------- */

const REVISO: readonly (readonly [string, string, GlyphName])[] = [
  ["Que els bots d'IA hi puguin entrar", "Verifico que GPTBot, ClaudeBot i PerplexityBot reben un 200 del teu servidor. Les proteccions anti-bot del hosting, del WAF o de Cloudflare sovint els bloquegen per defecte, i ningú no se n'assabenta. Si estan bloquejats, es deixa passar els bots legítims d'IA sense abaixar la guàrdia davant del scraping maliciós.", "bot-block"],
  ["llms.txt publicat", "Publico el teu llms.txt: un arxiu a l'arrel de la web que resumeix per a un model de llenguatge què fas i quines són les teves pàgines importants. És una peça més, no la que decideix, i per això va juntament amb la resta.", "code-theme"],
  ["Dades estructurades (schema)", "Reviso i completo el schema de marca, producte, servei i FAQ. Un schema bàsic o trencat et fa perdre resultats enriquits a Google i et resta citabilitat quan una IA busca què recomanar.", "schema"],
  ["Contingut citable", "Una IA cita allò que respon bé una pregunta. Estructuro les pàgines que importen amb respostes directes, FAQ reals, fitxes completes i categories clares, perquè siguin citables i no només indexables.", "ai-cite"],
]

const COMPARA: [string, string, string][] = [
  ["on apareixes", "llista de resultats de Google", "resposta de ChatGPT, Perplexity o els AI Overviews"],
  ["qui et llegeix", "Googlebot", "GPTBot, ClaudeBot, PerplexityBot i Google"],
  ["què s'hi guanya", "un clic des de la llista", "una menció o una cita amb enllaç"],
  ["què pesa més", "rellevància i autoritat", "accés, claredat i respostes citables"],
]

/* ---------- secciones ---------- */

function Hero() {
  return (
    <ServiceHero
      title="Posicionament GEO. Que ChatGPT i Google AI citin la teva marca."
      sub="Cada vegada més gent pregunta a ChatGPT, Perplexity o Google AI abans de comprar o de contractar. Treballo perquè la teva marca sigui en aquestes respostes: que els bots d'IA puguin llegir la teva web, que l'entenguin i que tinguin alguna cosa clara per citar."
      specs={[
        ["cercadors", "ChatGPT · Perplexity · Google AI"],
        ["què reviso", "bots · llms.txt · schema · contingut"],
        ["preu", "preu tancat després del diagnòstic"],
      ]}
      note="És posicionament a la IA: que et citin a tu, no a la teva competència."
      artifact={<GeoCheckArt />}
    />
  )
}

function QueEsGeo() {
  return (
    <Box component="section" sx={{ py: { xs: 8, md: 12 }, borderBottom: `1px solid ${tokens.lineSoft}` }}>
      <Container>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "0.95fr 1.05fr" }, gap: { xs: 5, md: 8 }, alignItems: "start" }}>
          <Reveal>
            <Box>
              <Typography variant="h2" sx={{ fontSize: { xs: 28, md: 40 }, color: tokens.ink, mb: 2 }}>
                Què és el GEO i en què es diferencia del SEO.
              </Typography>
              <Typography variant="body1" sx={{ fontSize: { xs: 16, md: 18 }, color: tokens.body, mb: 2 }}>
                GEO (Generative Engine Optimization) és el SEO per a IA: la feina perquè els assistents d&apos;IA que responen preguntes mencionin i enllacin la teva marca. El SEO et posa a la llista de resultats; el GEO et posa dins de la resposta.
              </Typography>
              <Typography variant="body1" sx={{ fontSize: { xs: 16, md: 18 }, color: tokens.body, mb: 2 }}>
                No substitueix el SEO, s&apos;hi recolza. Per això el treballo com a GEO SEO: mateixa base tècnica, més dues condicions pròpies de la IA. Que els seus bots puguin entrar a la teva web i que el teu contingut es pugui citar tal qual.
              </Typography>
              <Typography variant="body1" sx={{ color: tokens.body }}>
                Ho explico amb més calma a{" "}
                <Box component={Link} href="/blog/que-es-geo" sx={linkSx}>què és el GEO</Box>.
              </Typography>
            </Box>
          </Reveal>
          <Reveal delay={0.08}>
            <Box sx={{ border: `1px solid ${tokens.line}`, borderRadius: 3, bgcolor: tokens.win, overflow: "hidden" }}>
              <Box sx={{ display: "grid", gridTemplateColumns: "0.8fr 1fr 1fr", bgcolor: tokens.surface, borderBottom: `1px solid ${tokens.line}` }}>
                {["", "SEO", "GEO"].map((h, i) => (
                  <Typography key={i} sx={{ fontFamily: fonts.mono, fontSize: 12, fontWeight: 700, color: i === 2 ? tokens.petrol : tokens.ink, px: { xs: 1.25, md: 2 }, py: 1.25 }}>{h}</Typography>
                ))}
              </Box>
              {COMPARA.map(([k, seo, geo], i) => (
                <Box key={k} sx={{ display: "grid", gridTemplateColumns: "0.8fr 1fr 1fr", borderTop: i === 0 ? "none" : `1px solid ${tokens.lineSoft}` }}>
                  <Typography sx={{ fontFamily: fonts.mono, fontSize: 11, color: tokens.muted, px: { xs: 1.25, md: 2 }, py: 1.5 }}>{k}</Typography>
                  <Typography sx={{ fontSize: { xs: 13, md: 14 }, color: tokens.body, px: { xs: 1.25, md: 2 }, py: 1.5 }}>{seo}</Typography>
                  <Typography sx={{ fontSize: { xs: 13, md: 14 }, fontWeight: 600, color: tokens.ink, px: { xs: 1.25, md: 2 }, py: 1.5 }}>{geo}</Typography>
                </Box>
              ))}
            </Box>
          </Reveal>
        </Box>
      </Container>
    </Box>
  )
}

function QueReviso() {
  return (
    <Box component="section" sx={{ py: { xs: 8, md: 12 }, borderBottom: `1px solid ${tokens.lineSoft}` }}>
      <Container>
        <Reveal>
          <Box sx={{ maxWidth: 640, mb: { xs: 5, md: 7 } }}>
            <Typography variant="h2" sx={{ fontSize: { xs: 28, md: 40 }, color: tokens.ink, mb: 2 }}>Què reviso perquè la IA et citi.</Typography>
            <Typography variant="body1" sx={{ fontSize: { xs: 16, md: 18 }, color: tokens.body }}>
              Quatre fronts, en aquest ordre. Si els bots no hi poden entrar, la resta no serveix; si hi entren i no troben respostes clares, tampoc no et citen.
            </Typography>
          </Box>
        </Reveal>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap: { xs: 3, md: 4 } }}>
          {REVISO.map(([t, d, g], i) => (
            <Reveal key={t} delay={(i % 2) * 0.06}>
              <Box sx={{ borderTop: `2px solid ${tokens.line}`, pt: 2.5 }}>
                <Stack direction="row" spacing={1.5} sx={{ alignItems: "center", mb: 1.75 }}>
                  <BlockGlyph name={g} />
                  <Typography sx={{ fontFamily: fonts.mono, fontSize: 12, color: tokens.petrol }}>{`0${i + 1}`}</Typography>
                </Stack>
                <Typography variant="h3" sx={{ fontFamily: fonts.serif, fontSize: 21, fontWeight: 600, color: tokens.ink, mb: 1 }}>{t}</Typography>
                <Typography variant="body1" sx={{ color: tokens.body, maxWidth: 480 }}>{d}</Typography>
              </Box>
            </Reveal>
          ))}
        </Box>
        <Reveal delay={0.1}>
          <Typography variant="body2" sx={{ color: tokens.muted, mt: { xs: 6, md: 8 }, textAlign: "center", maxWidth: 640, mx: "auto" }}>
            Si vols el mapa complet, SEO i GEO junts en un únic document, això és l&apos;<Box component={Link} href="/servicios/auditoria-seo-geo" sx={linkSx}>auditoria SEO i GEO</Box>.
          </Typography>
        </Reveal>
      </Container>
    </Box>
  )
}

function ParaQuien() {
  const plataformas: [string, string][] = [
    ["Shopify", "/agencia-shopify"],
    ["WooCommerce", "/agencia-woocommerce"],
    ["Magento", "/agencia-magento"],
  ]
  const zonas: [string, string][] = [
    ["Maresme", "/agencia-seo-maresme"],
    ["Catalunya", "/seo-catalunya"],
  ]
  const chip = (label: string, href: string) => (
    <Box key={href} component={Link} href={href} sx={{ textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 0.5, border: `1px solid ${tokens.line}`, borderRadius: 999, px: 1.5, py: 0.6, bgcolor: tokens.win, "&:hover": { borderColor: tokens.petrol }, "&:hover .rel-arrow": { transform: "translate(2px,-2px)" } }}>
      <Typography sx={{ fontSize: 13.5, fontWeight: 600, color: tokens.ink }}>{label}</Typography>
      <Box className="rel-arrow" component="span" sx={{ color: tokens.petrol, fontFamily: fonts.mono, fontSize: 12, transition: "transform .2s", "@media (prefers-reduced-motion: reduce)": { transition: "none" } }}>↗</Box>
    </Box>
  )
  const cardSx = { p: { xs: 3, md: 3.5 }, borderRadius: 3, border: `1px solid ${tokens.line}`, bgcolor: tokens.win, height: "100%", display: "flex", flexDirection: "column" } as const
  return (
    <Box component="section" sx={{ py: { xs: 8, md: 12 }, borderBottom: `1px solid ${tokens.lineSoft}` }}>
      <Container>
        <Reveal>
          <Typography variant="h2" sx={{ fontSize: { xs: 28, md: 40 }, color: tokens.ink, mb: { xs: 5, md: 7 }, maxWidth: 620 }}>
            GEO per a botigues en línia i per a negocis locals.
          </Typography>
        </Reveal>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap: { xs: 3, md: 4 } }}>
          <Reveal>
            <Box sx={cardSx}>
              <Typography variant="h3" sx={{ fontFamily: fonts.serif, fontSize: 22, fontWeight: 600, color: tokens.ink, mb: 1.25 }}>Botigues en línia</Typography>
              <Typography variant="body1" sx={{ color: tokens.body, mb: 2 }}>
                Quan algú pregunta a una IA on comprar el que tu vens, la teva botiga ha de ser a la resposta. Aquí la feina es concentra en fitxes de producte, categories i FAQ que responguin preguntes de compra reals, amb el seu schema de producte complet.
              </Typography>
              <Typography variant="body1" sx={{ color: tokens.body, mb: 2.5 }}>
                Va inclòs al{" "}
                <Box component={Link} href="/servicios/crecimiento-ecommerce" sx={linkSx}>pack Creixement ecommerce</Box>, juntament amb el SEO tècnic i el CRO. Cada plataforma té les seves particularitats:
              </Typography>
              <Stack direction="row" sx={{ flexWrap: "wrap", gap: 1, mt: "auto" }}>
                {plataformas.map(([l, h]) => chip(l, h))}
              </Stack>
            </Box>
          </Reveal>
          <Reveal delay={0.08}>
            <Box sx={cardSx}>
              <Typography variant="h3" sx={{ fontFamily: fonts.serif, fontSize: 22, fontWeight: 600, color: tokens.ink, mb: 1.25 }}>Negocis locals</Typography>
              <Typography variant="body1" sx={{ color: tokens.body, mb: 2.5 }}>
                També es pregunta a la IA per un servei a prop de casa. Perquè et recomani, el teu negoci ha d&apos;estar descrit de manera clara i coherent: què fas, on i per a qui, amb el seu schema de negoci local i respostes al que els teus clients pregunten abans de trucar-te. Ho treballo juntament amb el SEO local.
              </Typography>
              <Stack direction="row" sx={{ flexWrap: "wrap", gap: 1, mt: "auto" }}>
                {zonas.map(([l, h]) => chip(l, h))}
              </Stack>
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
            Parles directament amb qui revisa i implementa, no amb un gestor de compte. Diagnòstic amb les teves dades, pla prioritzat per impacte i execució sobre la teva web.
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
            Preguntes freqüents sobre posicionament GEO.
          </Typography>
        </Reveal>
        {GEO_FAQS_CA.map((f, i) => (
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

export default function GeoMuiCa() {
  return (
    <Box sx={{ bgcolor: tokens.paper, color: tokens.body, fontFamily: fonts.sans }}>
      <SiteHeader />
      <Crumbs items={[{ label: "Serveis" }, { label: "Posicionament GEO" }]} />
      <Hero />
      <QueEsGeo />
      <QueReviso />
      <ParaQuien />
      <MetodoLink />
      <Faq />
      <DiagnosticoCTA />
      <SiteFooter />
    </Box>
  )
}
