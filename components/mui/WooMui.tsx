"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
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
    <ArtifactWindow tag="plugins · antes ↔ después" ratio="16 / 10">
      <Box sx={{ height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", gap: 2 }}>
        <Box sx={{ alignSelf: "flex-start", borderRadius: 999, px: 1.25, py: 0.35, bgcolor: after ? `${tokens.teal}22` : `${tokens.red}22` }}>
          <Typography sx={{ fontFamily: fonts.mono, fontSize: 11.5, fontWeight: 700, color: after ? tokens.teal : tokens.red }}>{after ? "después · lo que suma" : "antes · todo acumulado"}</Typography>
        </Box>
        <Box>
          <Stack direction="row" sx={{ justifyContent: "space-between", mb: 0.5 }}>
            <Typography sx={{ fontSize: 12, fontWeight: 600, color: tokens.ink }}>Peso de plugins</Typography>
            <Typography sx={{ fontFamily: fonts.mono, fontSize: 11, color: tokens.muted }}>{after ? "solo los que venden" : "años acumulados"}</Typography>
          </Stack>
          <Box sx={{ height: 12, borderRadius: 999, bgcolor: tokens.surface, overflow: "hidden" }}>
            <Box component={motion.div} animate={{ width: `${pesoW}%` }} transition={{ duration: reduce ? 0 : 0.8, ease: [0.22, 1, 0.36, 1] }}
              sx={{ height: "100%", borderRadius: 999, bgcolor: after ? tokens.teal : `${tokens.red}99` }} />
          </Box>
        </Box>
        <Box>
          <Stack direction="row" sx={{ justifyContent: "space-between", mb: 0.5 }}>
            <Typography sx={{ fontSize: 12, fontWeight: 600, color: tokens.ink }}>Velocidad móvil</Typography>
            <Typography sx={{ fontFamily: fonts.mono, fontSize: 11, fontWeight: 700, color: after ? tokens.teal : tokens.muted }}>{after ? "rápida" : "lenta"}</Typography>
          </Stack>
          <Box sx={{ height: 12, borderRadius: 999, bgcolor: tokens.surface, overflow: "hidden" }}>
            <Box component={motion.div} animate={{ width: `${velW}%` }} transition={{ duration: reduce ? 0 : 0.8, ease: [0.22, 1, 0.36, 1] }}
              sx={{ height: "100%", borderRadius: 999, bgcolor: after ? tokens.teal : tokens.line }} />
          </Box>
        </Box>
        <Typography sx={{ fontFamily: fonts.mono, fontSize: 9.5, color: tokens.muted }}>
          esquema ilustrativo · inventario, staging y medición antes y después
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
    <ArtifactWindow tag="acceso IA · WAF" ratio="16 / 11">
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
            <Typography sx={{ fontFamily: fonts.mono, fontSize: 8, color: tokens.muted }}>tu tienda</Typography>
          </Box>
        </Stack>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Box component={motion.div} key={blocked ? "b" : "o"} initial={reduce ? false : { opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}
            sx={{ display: "inline-flex", alignItems: "center", gap: 0.6, borderRadius: 999, px: 1.1, py: 0.35, bgcolor: blocked ? `${tokens.red}14` : `${tokens.teal}16`, border: `1px solid ${blocked ? `${tokens.red}44` : `${tokens.teal}44`}` }}>
            <Box sx={{ width: 6, height: 6, borderRadius: 999, bgcolor: blocked ? tokens.red : tokens.teal }} />
            <Typography sx={{ fontFamily: fonts.mono, fontSize: 11, fontWeight: 700, color: blocked ? tokens.red : tokens.teal }}>{blocked ? "403 bloqueado" : "200 OK"}</Typography>
          </Box>
        </Box>
        <Typography sx={{ fontFamily: fonts.mono, fontSize: 9, color: tokens.muted, textAlign: "center" }}>verificado contra tu dominio real en el diagnóstico</Typography>
      </Box>
    </ArtifactWindow>
  )
}

// Reutiliza el artefacto de apps de la Home, en versión plugins de Woo.
function PluginsArtifact() {
  return (
    <ArtifactWindow tag="plugins · peso real" ratio="4 / 3">
      <Box sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
        <Box sx={{ flex: 1, minHeight: 0 }}>
          <UnnecessaryApps bare
            tag="plugins activos · [[ dato ]]"
            items={[
              { n: "Maquetador visual", meta: "+1,2s", c: "#C77D48" },
              { n: "Slider Revolution", meta: "+0,8s", c: "#4C7FBF" },
              { n: "Reviews y base de datos", meta: "32 consultas", c: "#2A9D8F" },
            ]}
            more="+ [[ dato ]] más…"
            loadTag="carga lenta"
            total="[[ dato ]]"
          />
        </Box>
        <Typography sx={{ fontFamily: fonts.mono, fontSize: 9, color: tokens.muted, mt: 1 }}>ejemplo ilustrativo · el peso real de cada plugin sale del diagnóstico</Typography>
      </Box>
    </ArtifactWindow>
  )
}

const AUDIT_FINDINGS: { t: string; tag: string; red?: boolean }[] = [
  { t: "GPTBot bloqueado por el WAF", tag: "alto", red: true },
  { t: "TTFB 1,8s en móvil", tag: "alto", red: true },
  { t: "Facetas indexables sin control", tag: "medio" },
  { t: "Autoload de base de datos", tag: "medio" },
]

/* ---------- datos ---------- */

const FRENOS: readonly (readonly [string, string, GlyphName])[] = [
  ["Plugins acumulados que nadie revisa", "Cada función resuelta con un plugin suma consultas a base de datos, scripts y riesgo de conflicto. Con los años se acumulan veinte, treinta, cuarenta. La tienda no necesita la mitad, pero nadie se atreve a tocarlos. Yo sí, con inventario, staging y medición antes y después.", "apps-weight"],
  ["Maquetadores que castigan el móvil", "Los page builders generan un DOM enorme y hojas de estilo que el móvil paga caras. No siempre hay que quitarlos: hay que saber qué cuesta cada sección en velocidad y decidir con datos.", "builder-mobile"],
  ["Navegación por filtros que multiplica URLs", "Los filtros por atributo generan combinaciones infinitas de URLs con parámetros que Google rastrea y a veces indexa. Sin una estrategia de facetas (qué se indexa, qué se canonicaliza, qué se bloquea), el rastreo se va a la basura y las categorías importantes pierden fuerza.", "facets"],
  ["Un hosting que se quedó pequeño", "En WooCommerce el servidor es parte del producto. Un TTFB alto hunde a la vez tu SEO y tu conversión, y ningún plugin de caché lo arregla del todo. Reviso hosting, caché y base de datos (opciones autocargadas incluidas) porque ahí suele estar el segundo que sobra.", "server-ttfb"],
  ["Un CDN que te esconde de la IA", "Cada vez veo más tiendas con Cloudflare u otro firewall bloqueando por defecto a los bots de ChatGPT, Claude o Perplexity. La tienda existe para Google y es invisible para la IA. Se comprueba en minutos y se arregla en una tarde.", "bot-block"],
]

const TRABAJO: readonly (readonly [string, string, GlyphName])[] = [
  ["SEO en WooCommerce de verdad, no otro plugin", "La auditoría entra donde los plugins de SEO no llegan: arquitectura de categorías y facetas, enlazado interno, schema de producto completo y validado, limpieza de base de datos, Core Web Vitals y estrategia de rastreo. Cada cambio va al child theme o a código propio documentado, no a otro plugin más.", "code-theme"],
  ["Que la IA te cite (GEO)", "Verifico que GPTBot, ClaudeBot y PerplexityBot reciben un 200 de tu servidor (con Cloudflare esto falla más de lo que crees), publico tu llms.txt, y estructuro fichas, categorías y FAQs para que respondan preguntas de compra reales. El objetivo es que cuando alguien pregunte a una IA dónde comprar lo tuyo, tu tienda esté en la respuesta.", "ai-cite"],
  ["CRO con libertad total", "En WooCommerce no hay checkout intocable: se puede optimizar todo el embudo, del listado al pago. Fricción de formularios, pasarelas, confianza, ficha de producto y carrito. Hipótesis medibles sobre tus datos de analítica, cambios en tu propiedad.", "cro-funnel"],
  ["Agente de ventas IA y automatización", "El agente se conecta a tu catálogo real, responde dudas, recomienda producto y acompaña al pago. Los procesos repetitivos (facturas, avisos de stock, carritos abandonados, sincronización con tu email marketing) pasan a flujos automatizados que corren solos y quedan en tu servidor, no en el mío.", "agent-flow"],
]

const FAQS = [
  { q: "¿WooCommerce es peor para el SEO que Shopify?", a: "No. Bien configurado, WooCommerce da más control SEO que ninguna otra plataforma: URLs, schema, rastreo, todo es editable. Su fama de peor viene de instalaciones descuidadas, no de la plataforma. La contrapartida es que ese control hay que ejercerlo con criterio." },
  { q: "¿Por qué mi tienda WooCommerce va lenta?", a: "Casi siempre por una combinación de hosting justo, plugins acumulados, un tema o maquetador pesado y una base de datos sin mantenimiento. En el diagnóstico mido cada capa por separado y te digo cuál pesa más en tu caso concreto, con números." },
  { q: "¿Cuántos plugins son demasiados?", a: "No es cuestión de número sino de coste: hay plugins ligeros y plugins que hunden la tienda ellos solos. La pregunta correcta es qué aporta cada uno a la venta y cuánto cuesta en rendimiento. Esa tabla sale de la auditoría." },
  { q: "Uso Cloudflare. ¿Puede estar bloqueando a ChatGPT?", a: "Puede, y pasa a menudo: las protecciones anti-bot bloquean por defecto a los rastreadores de IA. Lo verifico contra tu dominio real y, si están bloqueados, se permite el paso a los bots legítimos de IA sin bajar la guardia frente al scraping malicioso." },
  { q: "¿Tengo que migrar de WooCommerce para crecer?", a: "No. Si tu tienda ya factura en Woo, migrar es el camino largo y caro. El corto es afinar lo que tienes: velocidad, rastreo, conversión y visibilidad en IA sobre tu instalación actual." },
]

/* ---------- secciones ---------- */

function Hero() {
  return (
    <ServiceHero
      title="Agencia WooCommerce: más ventas sin tocar tu WordPress."
      sub="Trabajo tiendas WooCommerce que ya facturan y quieren más, sobre tu instalación actual. Sin migrar ni rehacer la web, y con una ventaja que ninguna otra plataforma te da: el código ya es 100% tuyo."
      specs={[
        ["plataforma", "WooCommerce sobre tu WordPress"],
        ["enfoque", "SEO técnico · GEO · CRO"],
        ["propiedad", "tu código, tu servidor, tuyo"],
      ]}
      note="La plataforma más flexible que existe, y también la más fácil de estropear."
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
    ["Automatización", "/servicios/automatizaciones"],
    ["Agente de ventas IA", "/servicios/agente-ventas-ia"],
    ["Auditoría SEO/GEO", "/servicios/auditoria-seo-geo"],
  ]
  return (
    <Box component="section" sx={{ py: { xs: 4, md: 5 }, borderBottom: `1px solid ${tokens.lineSoft}` }}>
      <Container>
        <Stack direction="row" sx={{ alignItems: "center", flexWrap: "wrap", gap: { xs: 1.5, md: 2.5 } }}>
          <Typography sx={{ fontFamily: fonts.mono, fontSize: 12, color: tokens.muted }}>También sueltos:</Typography>
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
                Sin migrar y con el código en tu propiedad.
              </Typography>
              <Typography variant="body1" sx={{ fontSize: { xs: 16, md: 18 }, color: tokens.body, maxWidth: 520 }}>
                WooCommerce ya te da la propiedad del código; mi trabajo la respeta. Todo se versiona, todo se documenta, y no dependes de mí para nada de lo que construyo. Si un día quieres seguir por tu cuenta, te llevas la casa entera.
              </Typography>
            </Box>
          </Reveal>
          <Reveal delay={0.1}>
            <Box sx={{ position: "relative", borderRadius: 3, overflow: "hidden", border: `1px solid ${tokens.line}`, aspectRatio: "16 / 11" }}>
              <Image src="/assets/gen/photo-codigo.png" alt="Trabajando el código de una tienda WooCommerce sobre su propio WordPress" fill sizes="(max-width: 900px) 100vw, 44vw" style={{ objectFit: "cover" }} />
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
            Para quién es, y para quién no.
          </Typography>
        </Reveal>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap: { xs: 3, md: 4 } }}>
          <Reveal>
            <Box sx={{ p: { xs: 3, md: 3.5 }, borderRadius: 3, border: `1px solid ${tokens.teal}44`, bgcolor: `${tokens.teal}0A`, height: "100%" }}>
              <Stack direction="row" spacing={1} sx={{ alignItems: "center", mb: 1.5 }}>
                <EsNoMark ok />
                <Typography sx={{ fontFamily: fonts.mono, fontSize: 12, fontWeight: 700, color: tokens.teal }}>es para ti si</Typography>
              </Stack>
              <Typography variant="body1" sx={{ color: tokens.body }}>
                Tu WooCommerce ya factura pero la tienda va lenta, el WordPress acumula años de parches y sospechas que estás perdiendo ventas por cosas que nadie ha medido. También si tu desarrollador de confianza mantiene la web pero el SEO, la conversión y la IA se le escapan.
              </Typography>
            </Box>
          </Reveal>
          <Reveal delay={0.08}>
            <Box sx={{ p: { xs: 3, md: 3.5 }, borderRadius: 3, border: `1px solid ${tokens.line}`, bgcolor: tokens.win, height: "100%" }}>
              <Stack direction="row" spacing={1} sx={{ alignItems: "center", mb: 1.5 }}>
                <EsNoMark ok={false} />
                <Typography sx={{ fontFamily: fonts.mono, fontSize: 12, fontWeight: 700, color: tokens.muted }}>no es para ti si</Typography>
              </Stack>
              <Typography variant="body1" sx={{ color: tokens.body }}>
                La tienda está por montar, buscas el plugin mágico que lo arregle todo o no estás dispuesto a tocar hosting y plugins cuando los datos digan que ahí está el problema. Prefiero decírtelo aquí que en la tercera reunión.
              </Typography>
            </Box>
          </Reveal>
        </Box>
      </Container>
    </Box>
  )
}

function Resultados() {
  return (
    <Box component="section" sx={{ py: { xs: 8, md: 12 }, borderBottom: `1px solid ${tokens.lineSoft}` }}>
      <Container>
        <Reveal>
          <Typography variant="h2" sx={{ fontSize: { xs: 28, md: 40 }, color: tokens.ink, mb: { xs: 5, md: 7 }, maxWidth: 560 }}>
            Resultados en tiendas como la tuya.
          </Typography>
        </Reveal>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" }, gap: { xs: 3, md: 4 }, mb: 4 }}>
          {[0, 1].map((i) => (
            <Reveal key={i} delay={i * 0.08}>
              <Box sx={{ aspectRatio: "16 / 9", borderRadius: 3, border: `1px dashed ${tokens.line}`, display: "grid", placeItems: "center", p: 3 }}>
                <Typography sx={{ fontFamily: fonts.mono, fontSize: 12.5, color: tokens.muted, textAlign: "center" }}>{`[[ caso WooCommerce: marca + métrica real confirmada ]]`}</Typography>
              </Box>
            </Reveal>
          ))}
        </Box>
        <Reveal>
          <Button component={Link} href="/casos-de-exito" sx={{ color: tokens.ink, fontWeight: 700, px: 0, "&:hover": { bgcolor: "transparent", color: tokens.petrol } }}>
            El detalle está en los casos de éxito <Box component="span" sx={{ color: tokens.petrol, ml: 0.5 }}>↗</Box>
          </Button>
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
            En cada proyecto hablas directamente con el experto en WooCommerce que implementa, no con un gestor de cuenta. Diagnóstico con tus datos reales, plan priorizado por impacto y ejecución sobre tu WordPress, con Roger en backend e infraestructura cuando el proyecto lo pide.
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
            Preguntas frecuentes sobre SEO y CRO en WooCommerce.
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

export default function WooMui() {
  return (
    <Box sx={{ bgcolor: tokens.paper, color: tokens.body, fontFamily: fonts.sans }}>
      <SiteHeader />
      <Crumbs items={[{ label: "Agencia WooCommerce" }]} />
      <Hero />
      <FrenosSection
        title="Lo que suele frenar las ventas en WooCommerce."
        intro="WooCommerce no es lento ni malo para el SEO. Lo que hay encima de muchas instalaciones, sí. Estos son los patrones que más se repiten."
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
      <Bloques title="Cómo optimizo tu tienda WooCommerce." intro="El Pack Crecimiento ecommerce aplicado a Woo aprovecha lo mejor de la plataforma: control total." items={TRABAJO} numbered
        closing={
          <Box>
            <AuditFindings tag="auditoría WooCommerce · ejemplo" findings={AUDIT_FINDINGS} foot="hallazgos de ejemplo · TTFB ilustrativo · los tuyos salen del diagnóstico" />
            <Typography variant="body2" sx={{ color: tokens.muted, mt: 2.5, textAlign: "center" }}>
              El mapa completo de tu tienda sale de una <Box component={Link} href="/servicios/auditoria-seo-geo" sx={{ color: tokens.ink, fontWeight: 600, textDecoration: "underline", textDecorationColor: tokens.line, "&:hover": { textDecorationColor: tokens.petrol } }}>auditoría SEO</Box> y GEO completa.
            </Typography>
          </Box>
        } />
      <Relacionados />
      <SinMigrar />
      <ParaQuien />
      <StatementBand title="WooCommerce no es peor para el SEO. Da más control que ninguna otra plataforma, si se ejerce con criterio." photo="/assets/gen/photo-pizarra.png" />
      <Resultados />
      <MetodoLink />
      <Faq />
      <DiagnosticoCTA />
      <SiteFooter />
    </Box>
  )
}
