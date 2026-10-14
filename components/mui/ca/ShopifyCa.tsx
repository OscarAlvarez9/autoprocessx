"use client"

import { useState, useEffect } from "react"
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
import { siShopify } from "simple-icons"
import { tokens, fonts } from "@/lib/mui/theme"
import BrandCaseCard from "@/components/mui/BrandCaseCard"
import { getCase, casePhoto, caseVertical } from "@/lib/casesEcom"
import { SiteHeader, SiteFooter, DiagnosticoCTA, ServiceHero, StatementBand, Reveal, ArtifactWindow, Crumbs } from "@/components/mui/shared"
import { BlockGlyph, EsNoMark, type GlyphName } from "@/components/mui/landingGlyphs"
import { FrenosSection } from "@/components/mui/landingSections"
import { UnnecessaryApps, AuditFindings } from "@/components/mui/artifacts"

/* ---------- artefacto: ficha con schema en verde y velocidad ---------- */

function SchemaSpeed() {
  const reduce = useReducedMotion()
  const checks = [["preu", "12,90 €"], ["disponibilitat", "en estoc"], ["valoració", "4,8 / 5"]]
  return (
    <ArtifactWindow tag="fitxa · schema en verd + velocitat" ratio="16 / 10">
      <Box sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
        <Box sx={{ flex: 1, minHeight: 0, display: "grid", gridTemplateColumns: "0.9fr 1.1fr", gap: 1.5 }}>
          {/* fitxa de producte */}
          <Stack spacing={0.75} sx={{ border: `1px solid ${tokens.lineSoft}`, borderRadius: 2, bgcolor: tokens.win, p: 1.25, minWidth: 0 }}>
            <Box sx={{ aspectRatio: "4 / 3", borderRadius: 1.5, bgcolor: "#E7EAE6", display: "grid", placeItems: "center" }}>
              <Box component="svg" viewBox="0 0 24 24" sx={{ width: 26, height: 26 }} aria-hidden>
                <path d="M3 17l5-5 4 4 3-3 6 6M4 4h16v16H4z" fill="none" stroke={tokens.muted} strokeWidth="1.4" strokeLinejoin="round" />
              </Box>
            </Box>
            <Typography sx={{ fontSize: 12, fontWeight: 700, color: tokens.ink }}>Producte</Typography>
            <Typography sx={{ fontFamily: fonts.mono, fontSize: 12, fontWeight: 700, color: tokens.teal }}>12,90 €</Typography>
            <Box sx={{ mt: 0.25, textAlign: "center", borderRadius: 1.25, bgcolor: `#${siShopify.hex}`, py: 0.5 }}>
              <Typography sx={{ fontSize: 11, fontWeight: 700, color: "#fff" }}>Afegeix</Typography>
            </Box>
          </Stack>
          {/* schema validat + velocitat */}
          <Stack spacing={1} sx={{ minWidth: 0 }}>
            <Typography sx={{ fontFamily: fonts.mono, fontSize: 10, color: tokens.muted }}>dades estructurades</Typography>
            {checks.map(([k, v], i) => (
              <Stack key={k} direction="row" component={motion.div}
                initial={reduce ? false : { opacity: 0, x: 6 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12 }}
                spacing={0.75} sx={{ alignItems: "center", bgcolor: `${tokens.teal}0D`, border: `1px solid ${tokens.teal}22`, borderRadius: 1.25, px: 1, py: 0.5 }}>
                <Box component="svg" viewBox="0 0 24 24" sx={{ width: 13, height: 13, flexShrink: 0 }} aria-hidden>
                  <path d="M5 12.5l4 4L19 7" fill="none" stroke={tokens.teal} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                </Box>
                <Typography sx={{ fontFamily: fonts.mono, fontSize: 10.5, color: tokens.ink, flex: 1 }}>{k}</Typography>
                <Typography sx={{ fontFamily: fonts.mono, fontSize: 10.5, color: tokens.teal, fontWeight: 700 }}>{v}</Typography>
              </Stack>
            ))}
            <Box sx={{ mt: "auto", border: `1px solid ${tokens.lineSoft}`, borderRadius: 1.5, p: 1 }}>
              <Stack direction="row" sx={{ justifyContent: "space-between", alignItems: "baseline", mb: 0.5 }}>
                <Typography sx={{ fontFamily: fonts.mono, fontSize: 10, color: tokens.muted }}>velocitat mòbil</Typography>
                <Typography sx={{ fontFamily: fonts.mono, fontSize: 10.5, fontWeight: 700, color: tokens.teal }}>ràpida</Typography>
              </Stack>
              <Box sx={{ height: 6, borderRadius: 999, bgcolor: tokens.surface, overflow: "hidden" }}>
                <Box component={motion.div} initial={reduce ? { width: "88%" } : { width: 0 }} whileInView={{ width: "88%" }} viewport={{ once: true }} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                  sx={{ height: "100%", borderRadius: 999, bgcolor: tokens.teal }} />
              </Box>
            </Box>
          </Stack>
        </Box>
        <Typography sx={{ fontFamily: fonts.mono, fontSize: 9.5, color: tokens.muted, mt: 1 }}>
          esquema il·lustratiu · l&apos;estat real de la teva fitxa surt del diagnòstic
        </Typography>
      </Box>
    </ArtifactWindow>
  )
}

/* ---------- artefacto: URLs duplicadas y autoridad repartida ---------- */

function DuplicateUrlsArt() {
  const reduce = useReducedMotion()
  const [fixed, setFixed] = useState(false)
  useEffect(() => {
    if (reduce) return
    const t = setInterval(() => setFixed((f) => !f), 2800)
    return () => clearInterval(t)
  }, [reduce])
  const rowSx = { display: "flex", alignItems: "center", justifyContent: "space-between", gap: 1, bgcolor: tokens.win, border: `1px solid ${tokens.lineSoft}`, borderRadius: 1.5, px: 1, py: 0.7 } as const
  return (
    <ArtifactWindow tag="URL · autoritat repartida" ratio="16 / 11">
      <Box sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
        <Stack spacing={0.6}>
          <Box sx={rowSx}>
            <Typography sx={{ fontFamily: fonts.mono, fontSize: { xs: 9.5, md: 10.5 }, color: tokens.muted, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>/collections/rellotges/products/automatic-acer</Typography>
            <Typography sx={{ fontFamily: fonts.mono, fontSize: 8.5, color: tokens.muted, bgcolor: tokens.surface, borderRadius: 999, px: 0.7, py: 0.15, whiteSpace: "nowrap", flexShrink: 0 }}>enllaçada des del tema</Typography>
          </Box>
          <Stack direction="row" spacing={0.6} sx={{ alignItems: "center", pl: 0.5 }}>
            <Box component="svg" viewBox="0 0 24 24" sx={{ width: 13, height: 13 }} fill="none" stroke={tokens.petrol} strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M12 4v13M7 12l5 5 5-5" /></Box>
            <Typography sx={{ fontFamily: fonts.mono, fontSize: 8.5, color: tokens.petrol }}>canonical</Typography>
          </Stack>
          <Box sx={{ ...rowSx, borderColor: `${tokens.petrol}44` }}>
            <Typography sx={{ fontFamily: fonts.mono, fontSize: { xs: 9.5, md: 10.5 }, color: tokens.petrol, fontWeight: 700, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>/products/automatic-acer</Typography>
            <Typography sx={{ fontFamily: fonts.mono, fontSize: 8.5, color: tokens.petrol, bgcolor: `${tokens.petrol}12`, borderRadius: 999, px: 0.7, py: 0.15, whiteSpace: "nowrap", flexShrink: 0 }}>canònica</Typography>
          </Box>
        </Stack>
        <Box sx={{ mt: "auto", pt: 1.5 }}>
          <Stack direction="row" sx={{ justifyContent: "space-between", alignItems: "baseline", mb: 0.5 }}>
            <Typography sx={{ fontFamily: fonts.mono, fontSize: 9.5, color: tokens.muted }}>autoritat d&apos;enllaç</Typography>
            <Typography sx={{ fontFamily: fonts.mono, fontSize: 9.5, fontWeight: 700, color: fixed ? tokens.teal : tokens.muted }}>{fixed ? "consolidada" : "repartida"}</Typography>
          </Stack>
          <Box sx={{ display: "flex", gap: 0.5, height: 10, borderRadius: 999, bgcolor: tokens.surface, overflow: "hidden", p: "1px" }}>
            <Box component={motion.div} animate={{ width: fixed ? "0%" : "52%" }} transition={{ duration: reduce ? 0 : 0.7, ease: [0.22, 1, 0.36, 1] }} sx={{ height: "100%", borderRadius: 999, bgcolor: tokens.muted }} />
            <Box component={motion.div} animate={{ width: fixed ? "100%" : "40%" }} transition={{ duration: reduce ? 0 : 0.7, ease: [0.22, 1, 0.36, 1] }} sx={{ height: "100%", borderRadius: 999, bgcolor: tokens.petrol }} />
          </Box>
        </Box>
        <Typography sx={{ fontFamily: fonts.mono, fontSize: 9, color: tokens.muted, mt: 1.25 }}>el canonical apunta bé, l&apos;autoritat es reparteix igualment · es corregeix al tema</Typography>
      </Box>
    </ArtifactWindow>
  )
}

// Reutiliza el artefacto de apps de la Home con sus mismas cifras ilustrativas
// (14 apps, +11, 340€/mes) para que Home y landing cuenten la misma historia.
function AppsArtifact() {
  return (
    <ArtifactWindow tag="apps · cost real" ratio="4 / 3">
      <Box sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
        <Box sx={{ flex: 1, minHeight: 0 }}>
          <UnnecessaryApps bare tag="apps instal·lades · 14" more="+ 11 més…" loadTag="càrrega +2,4s" total="340€/mes" />
        </Box>
        <Typography sx={{ fontFamily: fonts.mono, fontSize: 9, color: tokens.muted, mt: 1 }}>exemple il·lustratiu · el cost i la càrrega reals surten del diagnòstic</Typography>
      </Box>
    </ArtifactWindow>
  )
}

const AUDIT_FINDINGS: { t: string; tag: string; red?: boolean }[] = [
  { t: "Enllaçat intern a URL de col·lecció", tag: "alt", red: true },
  { t: "Schema de producte sense offers", tag: "alt", red: true },
  { t: "Apps sense ús carregant JS", tag: "mitjà" },
  { t: "Col·leccions de tag indexades", tag: "mitjà" },
]

/* ---------- dades ---------- */

const FRENOS: readonly (readonly [string, string, GlyphName])[] = [
  ["URL duplicades de col·lecció i producte", "Shopify genera dues rutes per al mateix producte: la neta (/products/) i la que arrossega la col·lecció (/collections/.../products/). El canonical apunta bé, però l'enllaçat intern de la majoria de temes reparteix l'autoritat entre les dues versions. Es corregeix al tema, no amb una app.", "fork-urls"],
  ["Apps que s'acumulen i frenen la botiga", "Cada app injecta el seu JavaScript, i moltes deixen codi orfe quan es desinstal·len. El resultat és una botiga que carrega lenta al mòbil, just on passen la majoria de les teves visites. La solució no és un tema nou: és netejar el que sobra i mesurar el que queda.", "apps-weight"],
  ["Dades estructurades incompletes", "Molts temes porten un schema de producte bàsic o trencat: sense preu visible per a Google, sense disponibilitat, sense valoracions. Això et resta resultats enriquits a Google i et resta citabilitat quan una IA busca què recomanar.", "schema"],
  ["Pàgines de tag i col·leccions thin", "Les etiquetes de producte generen pàgines de col·lecció filtrada amb poc contingut que competeixen entre si. Ben gestionades són long-tail; sense gestionar són soroll que dilueix el rastreig.", "thin-pages"],
  ["Un checkout que no pots tocar, i el que sí que pots", "Als plans estàndard el checkout de Shopify no es personalitza a nivell de codi. La conversió es guanya abans: fitxa de producte, cistella, confiança, velocitat i un Shop Pay ben aprofitat. És aquí on el CRO té recorregut real.", "checkout-lock"],
]

const TRABAJO: readonly (readonly [string, string, GlyphName])[] = [
  ["SEO tècnic sobre el teu tema", "L'auditoria entra al Liquid del teu tema: enllaçat intern cap a URL canòniques, jerarquia de col·leccions, metafields per enriquir fitxes, robots.txt.liquid afinat, schema de producte complet i velocitat real al mòbil. Treballo sobre el teu tema actual i documento cada canvi.", "code-theme"],
  ["Que la IA et citi (GEO)", "Cada vegada més clients pregunten a ChatGPT o Perplexity on comprar. Shopify renderitza al servidor, així que els bots d'IA llegeixen la teva botiga sense problema si ningú no els bloqueja. Verifico l'accés de GPTBot, ClaudeBot i PerplexityBot, publico el teu llms.txt i estructuro fitxes i FAQ perquè siguin citables, no només indexables.", "ai-cite"],
  ["CRO on Shopify sí que ho permet", "La feina de conversió es concentra on tens control total: fitxa de producte, cistella, propostes de valor, senyals de confiança i fricció de formularis. Hipòtesis mesurables sobre les teves dades, no redissenys per gust.", "cro-funnel"],
  ["Agent de vendes IA i automatització", "L'agent respon dubtes de producte, recomana i acompanya fins al checkout, connectat al teu catàleg real de Shopify. I els processos que et mengen hores (avisos d'estoc, seguiment de cistelles, sincronització amb el teu CRM) passen a funcionar sols amb fluxos que queden en propietat teva.", "agent-flow"],
]

const FAQS = [
  { q: "Es pot fer SEO avançat a Shopify o està limitat?", a: "Es pot. Shopify té límits coneguts (estructura d'URL fixa, robots parcialment editable), però el 90% del SEO que mou vendes (enllaçat intern, contingut de col·lecció, schema, velocitat, arquitectura) es treballa perfectament des del tema. La limitació real sol ser el tema, no la plataforma." },
  { q: "Les apps estan frenant la meva botiga?", a: "Probablement alguna sí. Cada app afegeix pes i unes quantes deixen restes quan es desinstal·len. Al diagnòstic mesuro quant pesa cada script i què aporta cada app a la venda. El més habitual és poder eliminar-ne unes quantes sense perdre cap funció." },
  { q: "Necessito Shopify Plus per millorar la conversió?", a: "Per a la majoria de botigues, no. Plus desbloqueja la personalització del checkout, però gairebé tot el marge de conversió és abans del checkout: fitxa, cistella, confiança i velocitat. Primer s'exprimeix això; Plus es planteja quan els números ho justifiquen." },
  { q: "Pot ChatGPT recomanar la meva botiga Shopify?", a: "Sí, si la pot llegir i entendre. Shopify serveix HTML renderitzat, així que la base és bona. Falta garantir que cap firewall no bloquegi els bots d'IA, que les teves fitxes responguin preguntes reals i que la informació de la teva marca sigui consistent. Això és el que treballo a la part de GEO." },
  { q: "He de migrar de plataforma per créixer?", a: "No. Una migració és cara, arriscada per al SEO i gairebé mai és el coll d'ampolla. La meva feina és exactament la contrària: treure més vendes de la plataforma i el trànsit que ja tens." },
]

/* ---------- seccions ---------- */

function Hero() {
  return (
    <ServiceHero
      title="Agència Shopify: més vendes sobre la botiga que ja tens."
      sub="Treballo botigues Shopify que ja facturen i volen facturar més sense canviar de plataforma. Res de migracions ni de refer la botiga: SEO tècnic, IA, conversió i automatització sobre el teu tema actual."
      specs={[
        ["plataforma", "Shopify i Shopify Plus"],
        ["enfocament", "SEO tècnic · GEO · CRO"],
        ["propietat", "el teu tema i els teus fluxos, teus"],
      ]}
      note="El camí més curt no és migrar: és exprimir el que ja funciona."
      artifact={<SchemaSpeed />}
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
    ["Agent de vendes IA", "/servicios/agente-ventas-ia"],
    ["Automatització", "/servicios/automatizaciones"],
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
                No et proposaré sortir de Shopify. Si la teva botiga hi factura, el camí més curt és optimitzar el que ja funciona. Tot el que toco queda documentat i és teu: el tema, els fluxos d&apos;automatització i les dades. Si demà deixem de treballar junts, no perds res.
              </Typography>
            </Box>
          </Reveal>
          <Reveal delay={0.1}>
            <Box sx={{ position: "relative", borderRadius: 3, overflow: "hidden", border: `1px solid ${tokens.line}`, aspectRatio: "16 / 11" }}>
              <Image src="/assets/gen/photo-shopify.png" alt="Optimitzant una botiga Shopify sobre el seu tema actual" fill sizes="(max-width: 900px) 100vw, 44vw" style={{ objectFit: "cover" }} />
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
                La teva botiga Shopify ja ven i notes que el sostre no és el producte sinó l&apos;execució: trànsit que no converteix, fitxes que no posicionen, apps que ningú no controla. També si factures bé però cada millora depèn d&apos;un freelance diferent i res no queda documentat.
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
                Busques muntar la botiga des de zero, vols resultats en dues setmanes o el que necessites és més trànsit de pagament sense tocar la botiga. Per a això hi ha perfils millors que jo, i t&apos;ho diré al diagnòstic sense fer-te perdre el temps.
              </Typography>
            </Box>
          </Reveal>
        </Box>
      </Container>
    </Box>
  )
}

// Caso real de Shopify con sus cifras confirmadas. Antes eran dos cajas con
// "[[ caso Shopify ]]" dentro.
function Resultados() {
  const caso = getCase("farmacia-garcia-del-cerro", "ca")
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
            A cada projecte parles directament amb l&apos;expert en Shopify que implementa, no amb un gestor de compte. Diagnòstic amb les teves dades, pla prioritzat per impacte i execució sobre la teva botiga.
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
            Preguntes freqüents sobre SEO i CRO a Shopify.
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

export default function ShopifyCa() {
  return (
    <Box sx={{ bgcolor: tokens.paper, color: tokens.body, fontFamily: fonts.sans }}>
      <SiteHeader />
      <Crumbs items={[{ label: "Agència Shopify" }]} />
      <Hero />
      <FrenosSection
        title="El que sol frenar les vendes a Shopify."
        intro="Després d'auditar botigues Shopify es repeteixen els mateixos patrons. T'ho explico sense fum, perquè gairebé cap no es resol instal·lant una altra app."
        rows={[
          { t: FRENOS[0][0], d: FRENOS[0][1], artifact: <DuplicateUrlsArt /> },
          { t: FRENOS[1][0], d: FRENOS[1][1], artifact: <AppsArtifact /> },
        ]}
        pair={[
          { t: FRENOS[2][0], d: FRENOS[2][1], g: FRENOS[2][2] },
          { t: FRENOS[3][0], d: FRENOS[3][1], g: FRENOS[3][2] },
        ]}
        closing={{ t: FRENOS[4][0], d: FRENOS[4][1] }}
      />
      <Bloques title="Com optimitzo la teva botiga Shopify." intro="El Pack Creixement ecommerce aplicat a Shopify uneix quatre fronts. Cada peça funciona sola, juntes es multipliquen." items={TRABAJO} numbered
        closing={
          <Box>
            <AuditFindings tag="auditoria Shopify · exemple" findings={AUDIT_FINDINGS} foot="troballes d'exemple · les teves surten del diagnòstic" />
            <Typography variant="body2" sx={{ color: tokens.muted, mt: 2.5, textAlign: "center" }}>
              El mapa complet de la teva botiga surt d&apos;una <Box component={Link} href="/servicios/auditoria-seo-geo" sx={{ color: tokens.ink, fontWeight: 600, textDecoration: "underline", textDecorationColor: tokens.line, "&:hover": { textDecorationColor: tokens.petrol } }}>auditoria SEO</Box> i GEO completa.
            </Typography>
          </Box>
        } />
      <Relacionados />
      <SinMigrar />
      <ParaQuien />
      <StatementBand title="La limitació real gairebé mai no és Shopify. És el tema, les apps i que ningú no ho treballa." photo="/assets/gen/photo-shopify.png" />
      <Resultados />
      <MetodoLink />
      <Faq />
      <DiagnosticoCTA />
      <SiteFooter />
    </Box>
  )
}
