"use client"

import { useEffect, useState } from "react"
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
import BrandCaseCard from "@/components/mui/BrandCaseCard"
import { getCase, casePhoto, caseVertical } from "@/lib/casesEcom"
import { SiteHeader, SiteFooter, DiagnosticoCTA, ServiceHero, StatementBand, Reveal, ArtifactWindow, Crumbs } from "@/components/mui/shared"
import { BlockGlyph, EsNoMark, type GlyphName } from "@/components/mui/landingGlyphs"
import { FrenosSection } from "@/components/mui/landingSections"
import { UnnecessaryApps, AuditFindings } from "@/components/mui/artifacts"

/* ---------- artefacto: peso de plugins antes/después + velocidad ---------- */

function PluginWeight() {
  const reduce = useReducedMotion()
  const [after, setAfter] = useState(reduce)
  useEffect(() => {
    if (reduce) return
    const t = setInterval(() => setAfter((a) => !a), 2600)
    return () => clearInterval(t)
  }, [reduce])
  const pesoW = after ? 42 : 100
  const velW = after ? 90 : 34
  return (
    <ArtifactWindow tag="plugins · abans ↔ després" ratio="16 / 10">
      <Box sx={{ height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", gap: 2 }}>
        <Box sx={{ alignSelf: "flex-start", borderRadius: 999, px: 1.25, py: 0.35, bgcolor: after ? `${tokens.teal}22` : `${tokens.red}22` }}>
          <Typography sx={{ fontFamily: fonts.mono, fontSize: 11.5, fontWeight: 700, color: after ? tokens.teal : tokens.red }}>{after ? "després · el que suma" : "abans · tot acumulat"}</Typography>
        </Box>
        <Box>
          <Stack direction="row" sx={{ justifyContent: "space-between", mb: 0.5 }}>
            <Typography sx={{ fontSize: 12, fontWeight: 600, color: tokens.ink }}>Pes dels plugins</Typography>
            <Typography sx={{ fontFamily: fonts.mono, fontSize: 11, color: tokens.muted }}>{after ? "només els que venen" : "anys acumulats"}</Typography>
          </Stack>
          <Box sx={{ height: 12, borderRadius: 999, bgcolor: tokens.surface, overflow: "hidden" }}>
            <Box component={motion.div} animate={{ width: `${pesoW}%` }} transition={{ duration: reduce ? 0 : 0.8, ease: [0.22, 1, 0.36, 1] }}
              sx={{ height: "100%", borderRadius: 999, bgcolor: after ? tokens.teal : `${tokens.red}99` }} />
          </Box>
        </Box>
        <Box>
          <Stack direction="row" sx={{ justifyContent: "space-between", mb: 0.5 }}>
            <Typography sx={{ fontSize: 12, fontWeight: 600, color: tokens.ink }}>Velocitat mòbil</Typography>
            <Typography sx={{ fontFamily: fonts.mono, fontSize: 11, fontWeight: 700, color: after ? tokens.teal : tokens.muted }}>{after ? "ràpida" : "lenta"}</Typography>
          </Stack>
          <Box sx={{ height: 12, borderRadius: 999, bgcolor: tokens.surface, overflow: "hidden" }}>
            <Box component={motion.div} animate={{ width: `${velW}%` }} transition={{ duration: reduce ? 0 : 0.8, ease: [0.22, 1, 0.36, 1] }}
              sx={{ height: "100%", borderRadius: 999, bgcolor: after ? tokens.teal : tokens.line }} />
          </Box>
        </Box>
        <Typography sx={{ fontFamily: fonts.mono, fontSize: 9.5, color: tokens.muted }}>
          esquema il·lustratiu · inventari, staging i mesura abans i després
        </Typography>
      </Box>
    </ArtifactWindow>
  )
}

/* ---------- artefacto: acceso de los bots de IA a través del WAF ---------- */

// Conector que cambia de color/estilo según el estado (neutro, bloqueado, ok).
// Horizontal en desktop, vertical al apilar en móvil.
function BotConn({ state }: { state: "neutral" | "blocked" | "open" }) {
  const col = state === "blocked" ? tokens.red : state === "open" ? tokens.teal : tokens.line
  const style = state === "blocked" ? "dashed" : "solid"
  return (
    <>
      <Box sx={{ display: { xs: "none", sm: "block" }, flex: 1, minWidth: 12, height: 0, borderTop: `2px ${style} ${col}`, alignSelf: "center" }} />
      <Box sx={{ display: { xs: "block", sm: "none" }, width: 0, height: 12, borderLeft: `2px ${style} ${col}`, mx: "auto" }} />
    </>
  )
}

function BotAccessArt() {
  const reduce = useReducedMotion()
  const [open, setOpen] = useState(false)
  useEffect(() => {
    if (reduce) return
    const t = setInterval(() => setOpen((o) => !o), 3000)
    return () => clearInterval(t)
  }, [reduce])
  const blocked = !open
  return (
    <ArtifactWindow tag="accés IA · WAF" ratio="16 / 11">
      <Box sx={{ height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", gap: 1.75 }}>
        <Stack direction={{ xs: "column", sm: "row" }} spacing={{ xs: 0.5, sm: 1 }} sx={{ alignItems: "center" }}>
          <Stack sx={{ alignItems: "center", flexShrink: 0 }}>
            <Box sx={{ bgcolor: `${tokens.petrol}10`, border: `1px solid ${tokens.petrol}33`, borderRadius: 1.5, px: 1.1, py: 0.5 }}>
              <Typography sx={{ fontFamily: fonts.mono, fontSize: 11, fontWeight: 700, color: tokens.petrol }}>GPTBot</Typography>
            </Box>
            <Typography sx={{ fontFamily: fonts.mono, fontSize: 8, color: tokens.muted, mt: 0.4 }}>ClaudeBot · PerplexityBot</Typography>
          </Stack>
          <BotConn state="neutral" />
          <Box sx={{ flexShrink: 0, textAlign: "center", bgcolor: tokens.win, border: `1px solid ${tokens.lineSoft}`, borderRadius: 1.5, px: 1.2, py: 0.6 }}>
            <Typography sx={{ fontFamily: fonts.mono, fontSize: 8, color: tokens.muted }}>CDN</Typography>
            <Typography sx={{ fontFamily: fonts.mono, fontSize: 10.5, fontWeight: 700, color: tokens.ink }}>firewall</Typography>
          </Box>
          <BotConn state={blocked ? "blocked" : "open"} />
          <Box component={motion.div} animate={{ opacity: blocked ? 0.34 : 1 }} transition={{ duration: reduce ? 0 : 0.5 }} sx={{ flexShrink: 0, display: "flex", flexDirection: "column", alignItems: "center", gap: 0.3 }}>
            <Box sx={{ width: 30, height: 30, borderRadius: 1.5, border: `1px solid ${tokens.lineSoft}`, bgcolor: tokens.win, display: "grid", placeItems: "center" }}>
              <Box component="svg" viewBox="0 0 24 24" sx={{ width: 17, height: 17 }} fill="none" stroke={blocked ? tokens.muted : tokens.teal} strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M4 8l1-3h14l1 3M4 8h16l-1 3H5zM5 11v8h14v-8" /></Box>
            </Box>
            <Typography sx={{ fontFamily: fonts.mono, fontSize: 8, color: tokens.muted }}>la teva botiga</Typography>
          </Box>
        </Stack>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Box component={motion.div} key={blocked ? "b" : "o"} initial={reduce ? false : { opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}
            sx={{ display: "inline-flex", alignItems: "center", gap: 0.6, borderRadius: 999, px: 1.1, py: 0.35, bgcolor: blocked ? `${tokens.red}14` : `${tokens.teal}16`, border: `1px solid ${blocked ? `${tokens.red}44` : `${tokens.teal}44`}` }}>
            <Box sx={{ width: 6, height: 6, borderRadius: 999, bgcolor: blocked ? tokens.red : tokens.teal }} />
            <Typography sx={{ fontFamily: fonts.mono, fontSize: 11, fontWeight: 700, color: blocked ? tokens.red : tokens.teal }}>{blocked ? "403 bloquejat" : "200 OK"}</Typography>
          </Box>
        </Box>
        <Typography sx={{ fontFamily: fonts.mono, fontSize: 9, color: tokens.muted, textAlign: "center" }}>verificat contra el teu domini real al diagnòstic</Typography>
      </Box>
    </ArtifactWindow>
  )
}

// Reutiliza el artefacto de apps de la Home, en versión plugins de Woo.
function PluginsArtifact() {
  return (
    <ArtifactWindow tag="plugins · pes real" ratio="4 / 3">
      <Box sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
        <Box sx={{ flex: 1, minHeight: 0 }}>
          <UnnecessaryApps bare
            tag="plugins actius · 38"
            items={[
              { n: "Maquetador visual", meta: "+1,2s", c: "#C77D48" },
              { n: "Slider Revolution", meta: "+0,8s", c: "#4C7FBF" },
              { n: "Reviews i base de dades", meta: "32 consultes", c: "#2A9D8F" },
            ]}
            more="+ 35 més…"
            loadTag="càrrega lenta"
            total="+3,4s"
          />
        </Box>
        <Typography sx={{ fontFamily: fonts.mono, fontSize: 9, color: tokens.muted, mt: 1 }}>exemple il·lustratiu · el pes real de cada plugin surt del diagnòstic</Typography>
      </Box>
    </ArtifactWindow>
  )
}

const AUDIT_FINDINGS: { t: string; tag: string; red?: boolean }[] = [
  { t: "GPTBot bloquejat pel WAF", tag: "alt", red: true },
  { t: "TTFB 1,8s al mòbil", tag: "alt", red: true },
  { t: "Facetes indexables sense control", tag: "mitjà" },
  { t: "Autoload de base de dades", tag: "mitjà" },
]

/* ---------- dades ---------- */

const FRENOS: readonly (readonly [string, string, GlyphName])[] = [
  ["Plugins acumulats que ningú no revisa", "Cada funció resolta amb un plugin suma consultes a la base de dades, scripts i risc de conflicte. Amb els anys se n'acumulen vint, trenta, quaranta. La botiga no en necessita la meitat, però ningú no s'atreveix a tocar-los. Jo sí, amb inventari, staging i mesura abans i després.", "apps-weight"],
  ["Maquetadors que castiguen el mòbil", "Els page builders generen un DOM enorme i fulls d'estil que el mòbil paga cars. No sempre cal treure'ls: cal saber què costa cada secció en velocitat i decidir amb dades.", "builder-mobile"],
  ["Navegació per filtres que multiplica URL", "Els filtres per atribut generen combinacions infinites d'URL amb paràmetres que Google rastreja i de vegades indexa. Sense una estratègia de facetes (què s'indexa, què es canonicalitza, què es bloqueja), el rastreig se'n va a les escombraries i les categories importants perden força.", "facets"],
  ["Un hosting que s'ha quedat petit", "A WooCommerce el servidor és part del producte. Un TTFB alt enfonsa alhora el teu SEO i la teva conversió, i cap plugin de memòria cau no ho arregla del tot. Reviso hosting, memòria cau i base de dades (opcions autocarregades incloses) perquè sol ser aquí on hi ha el segon que sobra.", "server-ttfb"],
  ["Un CDN que t'amaga de la IA", "Cada vegada veig més botigues amb Cloudflare o un altre firewall que bloqueja per defecte els bots de ChatGPT, Claude o Perplexity. La botiga existeix per a Google i és invisible per a la IA. Es comprova en minuts i s'arregla en una tarda.", "bot-block"],
]

const TRABAJO: readonly (readonly [string, string, GlyphName])[] = [
  ["SEO a WooCommerce de debò, no un altre plugin", "L'auditoria entra on els plugins de SEO no arriben: arquitectura de categories i facetes, enllaçat intern, schema de producte complet i validat, neteja de base de dades, Core Web Vitals i estratègia de rastreig. Cada canvi va al child theme o a codi propi documentat, no a un plugin més.", "code-theme"],
  ["Que la IA et citi (GEO)", "Verifico que GPTBot, ClaudeBot i PerplexityBot reben un 200 del teu servidor (amb Cloudflare això falla més del que et penses), publico el teu llms.txt, i estructuro fitxes, categories i FAQ perquè responguin preguntes de compra reals. L'objectiu és que quan algú pregunti a una IA on comprar el que tu vens, la teva botiga sigui a la resposta.", "ai-cite"],
  ["CRO amb llibertat total", "A WooCommerce no hi ha checkout intocable: es pot optimitzar tot l'embut, del llistat al pagament. Fricció de formularis, passarel·les, confiança, fitxa de producte i cistella. Hipòtesis mesurables sobre les teves dades d'analítica, canvis en propietat teva.", "cro-funnel"],
  ["Agent de vendes IA i automatització", "L'agent es connecta al teu catàleg real, respon dubtes, recomana producte i acompanya fins al pagament. Els processos repetitius (factures, avisos d'estoc, cistelles abandonades, sincronització amb el teu email marketing) passen a fluxos automatitzats que funcionen sols i queden al teu servidor, no al meu.", "agent-flow"],
]

const FAQS = [
  { q: "WooCommerce és pitjor per al SEO que Shopify?", a: "No. Ben configurat, WooCommerce dona més control SEO que cap altra plataforma: URL, schema, rastreig, tot és editable. La fama de pitjor ve d'instal·lacions descuidades, no de la plataforma. La contrapartida és que aquest control s'ha d'exercir amb criteri." },
  { q: "Per què la meva botiga WooCommerce va lenta?", a: "Gairebé sempre per una combinació de hosting just, plugins acumulats, un tema o maquetador pesat i una base de dades sense manteniment. Al diagnòstic mesuro cada capa per separat i et dic quina pesa més en el teu cas concret, amb números." },
  { q: "Quants plugins són massa?", a: "No és qüestió de nombre sinó de cost: hi ha plugins lleugers i plugins que enfonsen la botiga ells sols. La pregunta correcta és què aporta cadascun a la venda i quant costa en rendiment. Aquesta taula surt de l'auditoria." },
  { q: "Faig servir Cloudflare. Pot estar bloquejant ChatGPT?", a: "Pot ser, i passa sovint: les proteccions anti-bot bloquegen per defecte els rastrejadors d'IA. Ho verifico contra el teu domini real i, si estan bloquejats, es deixa passar els bots legítims d'IA sense abaixar la guàrdia davant l'scraping maliciós." },
  { q: "He de migrar de WooCommerce per créixer?", a: "No. Si la teva botiga ja factura amb Woo, migrar és el camí llarg i car. El curt és afinar el que tens: velocitat, rastreig, conversió i visibilitat en IA sobre la teva instal·lació actual." },
]

/* ---------- seccions ---------- */

function Hero() {
  return (
    <ServiceHero
      title="Consultor SEO per a WordPress i WooCommerce. Més vendes sense tocar la teva web."
      sub="Treballo botigues WooCommerce que ja facturen i en volen més, sobre la teva instal·lació actual. Sense migrar ni refer la web, i amb un avantatge que cap altra plataforma no et dona: el codi ja és 100% teu."
      specs={[
        ["plataforma", "WooCommerce sobre el teu WordPress"],
        ["enfocament", "SEO tècnic · GEO · CRO"],
        ["propietat", "el teu codi, el teu servidor, teu"],
      ]}
      note="La plataforma més flexible que existeix, i també la més fàcil d'espatllar."
      artifact={<PluginWeight />}
    />
  )
}

function Bloques({ title, intro, items, numbered, closing }: { title: string; intro?: string; items: readonly (readonly [string, string, GlyphName])[]; numbered?: boolean; closing?: React.ReactNode }) {
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
          {items.map(([t, d, g], i) => (
            <Reveal key={t} delay={(i % 2) * 0.06}>
              <Box sx={{ borderTop: `2px solid ${tokens.line}`, pt: 2.5 }}>
                <Stack direction="row" spacing={1.5} sx={{ alignItems: "center", mb: 1.75 }}>
                  <BlockGlyph name={g} />
                  {numbered && <Typography sx={{ fontFamily: fonts.mono, fontSize: 12, color: tokens.petrol }}>{`0${i + 1}`}</Typography>}
                </Stack>
                <Typography sx={{ fontFamily: fonts.serif, fontSize: 21, fontWeight: 600, color: tokens.ink, mb: 1 }}>{t}</Typography>
                <Typography variant="body1" sx={{ color: tokens.body, maxWidth: 480 }}>{d}</Typography>
              </Box>
            </Reveal>
          ))}
        </Box>
        {closing && (
          <Reveal delay={0.1}>
            <Box sx={{ mt: { xs: 6, md: 9 }, maxWidth: 680, mx: "auto" }}>{closing}</Box>
          </Reveal>
        )}
      </Container>
    </Box>
  )
}

function Relacionados() {
  const items = [
    ["Automatització", "/servicios/automatizaciones"],
    ["Agent de vendes IA", "/servicios/agente-ventas-ia"],
    ["Auditoria SEO/GEO", "/servicios/auditoria-seo-geo"],
  ]
  return (
    <Box component="section" sx={{ py: { xs: 4, md: 5 }, borderBottom: `1px solid ${tokens.lineSoft}` }}>
      <Container>
        <Stack direction="row" sx={{ alignItems: "center", flexWrap: "wrap", gap: { xs: 1.5, md: 2.5 } }}>
          <Typography sx={{ fontFamily: fonts.mono, fontSize: 12, color: tokens.muted }}>També per separat:</Typography>
          {items.map(([label, href]) => (
            <Box key={href} component={Link} href={href} sx={{ textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 0.5, "&:hover .rel-arrow": { transform: "translate(2px,-2px)" } }}>
              <Typography sx={{ fontSize: 14, fontWeight: 600, color: tokens.ink }}>{label}</Typography>
              <Box className="rel-arrow" component="span" sx={{ color: tokens.petrol, fontFamily: fonts.mono, fontSize: 13, transition: "transform .2s" }}>↗</Box>
            </Box>
          ))}
        </Stack>
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
                WooCommerce ja et dona la propietat del codi; la meva feina la respecta. Tot es versiona, tot es documenta, i no depens de mi per a res del que construeixo. Si un dia vols continuar pel teu compte, t&apos;emportes la casa sencera.
              </Typography>
            </Box>
          </Reveal>
          <Reveal delay={0.1}>
            <Box sx={{ position: "relative", borderRadius: 3, overflow: "hidden", border: `1px solid ${tokens.line}`, aspectRatio: "16 / 11" }}>
              <Image src="/assets/gen/photo-codigo.png" alt="Treballant el codi d'una botiga WooCommerce sobre el seu propi WordPress" fill sizes="(max-width: 900px) 100vw, 44vw" style={{ objectFit: "cover" }} />
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
              <Stack direction="row" spacing={1} sx={{ alignItems: "center", mb: 1.5 }}>
                <EsNoMark ok />
                <Typography sx={{ fontFamily: fonts.mono, fontSize: 12, fontWeight: 700, color: tokens.teal }}>és per a tu si</Typography>
              </Stack>
              <Typography variant="body1" sx={{ color: tokens.body }}>
                El teu WooCommerce ja factura però la botiga va lenta, el WordPress acumula anys de pedaços i sospites que estàs perdent vendes per coses que ningú no ha mesurat. També si el teu desenvolupador de confiança manté la web però el SEO, la conversió i la IA se li escapen.
              </Typography>
            </Box>
          </Reveal>
          <Reveal delay={0.08}>
            <Box sx={{ p: { xs: 3, md: 3.5 }, borderRadius: 3, border: `1px solid ${tokens.line}`, bgcolor: tokens.win, height: "100%" }}>
              <Stack direction="row" spacing={1} sx={{ alignItems: "center", mb: 1.5 }}>
                <EsNoMark ok={false} />
                <Typography sx={{ fontFamily: fonts.mono, fontSize: 12, fontWeight: 700, color: tokens.muted }}>no és per a tu si</Typography>
              </Stack>
              <Typography variant="body1" sx={{ color: tokens.body }}>
                La botiga està per muntar, busques el plugin màgic que ho arregli tot o no estàs disposat a tocar hosting i plugins quan les dades diguin que el problema és allà. Prefereixo dir-t&apos;ho aquí que a la tercera reunió.
              </Typography>
            </Box>
          </Reveal>
        </Box>
      </Container>
    </Box>
  )
}

// Caso real de WooCommerce con sus cifras confirmadas. Antes había dos cajas
// de marcador de posición con "[[ caso WooCommerce ]]" dentro.
function Resultados() {
  const caso = getCase("marea-es", "ca")
  if (!caso) return null
  const cifras = caso.metrics.filter((m) => m.value)
  return (
    <Box component="section" sx={{ py: { xs: 8, md: 12 }, borderBottom: `1px solid ${tokens.lineSoft}` }}>
      <Container>
        <Reveal>
          <Typography variant="h2" sx={{ fontSize: { xs: 28, md: 40 }, color: tokens.ink, mb: { xs: 4, md: 6 }, maxWidth: 560 }}>
            Resultats en botigues com la teva.
          </Typography>
        </Reveal>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "0.85fr 1.15fr" }, gap: { xs: 4, md: 6 }, alignItems: "center" }}>
          <Reveal>
            <BrandCaseCard name={caso.client} vertical={caseVertical(caso, "ca")} href={`/casos-de-exito/${caso.slug}`} photo={casePhoto(caso)} ratio="4 / 3" />
          </Reveal>
          <Reveal delay={0.08}>
            <Box>
              <Typography variant="body1" sx={{ fontSize: { xs: 16, md: 18 }, color: tokens.body, mb: { xs: 3.5, md: 4.5 }, maxWidth: 520 }}>
                {caso.summary}
              </Typography>
              <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: `repeat(${Math.min(cifras.length, 2)}, 1fr)` }, gap: { xs: 3, sm: 0 } }}>
                {cifras.map((m, i) => (
                  <Box key={m.label} sx={{ pl: { sm: i === 0 ? 0 : 3 }, borderLeft: { xs: "none", sm: i === 0 ? "none" : `1px solid ${tokens.lineSoft}` } }}>
                    <Typography sx={{ fontFamily: fonts.serif, fontSize: { xs: 38, md: 48 }, fontWeight: 600, lineHeight: 1, color: tokens.petrol }}>{m.value}</Typography>
                    <Typography sx={{ fontSize: 14.5, fontWeight: 700, color: tokens.ink, mt: 1 }}>{m.label}</Typography>
                    <Typography sx={{ fontFamily: fonts.mono, fontSize: 11, color: tokens.muted, mt: 0.4 }}>{m.note}</Typography>
                  </Box>
                ))}
              </Box>
              <Button component={Link} href={`/casos-de-exito/${caso.slug}`} sx={{ color: tokens.ink, fontWeight: 700, px: 0, mt: { xs: 3, md: 4 }, "&:hover": { bgcolor: "transparent", color: tokens.petrol } }}>
                El detall és al cas complet <Box component="span" sx={{ color: tokens.petrol, ml: 0.5 }}>↗</Box>
              </Button>
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
            A cada projecte parles directament amb l&apos;expert en WooCommerce que implementa, no amb un gestor de compte. Diagnòstic amb les teves dades reals, pla prioritzat per impacte i execució sobre el teu WordPress.
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
            Preguntes freqüents sobre SEO i CRO a WooCommerce.
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

export default function WooCa() {
  return (
    <Box sx={{ bgcolor: tokens.paper, color: tokens.body, fontFamily: fonts.sans }}>
      <SiteHeader />
      <Crumbs items={[{ label: "Agència WooCommerce" }]} />
      <Hero />
      <FrenosSection
        title="El que sol frenar les vendes a WooCommerce."
        intro="WooCommerce no és lent ni dolent per al SEO. El que hi ha a sobre de moltes instal·lacions, sí. Aquests són els patrons que més es repeteixen."
        rows={[
          { t: FRENOS[4][0], d: FRENOS[4][1], artifact: <BotAccessArt /> },
          { t: FRENOS[0][0], d: FRENOS[0][1], artifact: <PluginsArtifact /> },
        ]}
        pair={[
          { t: FRENOS[1][0], d: FRENOS[1][1], g: FRENOS[1][2] },
          { t: FRENOS[2][0], d: FRENOS[2][1], g: FRENOS[2][2] },
        ]}
        closing={{ t: FRENOS[3][0], d: FRENOS[3][1] }}
      />
      <Bloques title="Com optimitzo la teva botiga WooCommerce." intro="El Pack Creixement ecommerce aplicat a Woo aprofita el millor de la plataforma: control total." items={TRABAJO} numbered
        closing={
          <Box>
            <AuditFindings tag="auditoria WooCommerce · exemple" findings={AUDIT_FINDINGS} foot="troballes d'exemple · TTFB il·lustratiu · les teves surten del diagnòstic" />
            <Typography variant="body2" sx={{ color: tokens.muted, mt: 2.5, textAlign: "center" }}>
              El mapa complet de la teva botiga surt d&apos;una <Box component={Link} href="/servicios/auditoria-seo-geo" sx={{ color: tokens.ink, fontWeight: 600, textDecoration: "underline", textDecorationColor: tokens.line, "&:hover": { textDecorationColor: tokens.petrol } }}>auditoria SEO</Box> i GEO completa.
            </Typography>
          </Box>
        } />
      <Relacionados />
      <SinMigrar />
      <ParaQuien />
      <StatementBand title="WooCommerce no és pitjor per al SEO. Dona més control que cap altra plataforma, si s'exerceix amb criteri." photo="/assets/gen/photo-pizarra.png" />
      <Resultados />
      <MetodoLink />
      <Faq />
      <DiagnosticoCTA />
      <SiteFooter />
    </Box>
  )
}
