"use client"

import { useState, useRef } from "react"
import Link from "@/components/LocaleLink"
import Image from "next/image"
import { motion, useReducedMotion } from "motion/react"
import { siShopify, siWoocommerce } from "simple-icons"
import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import Paper from "@mui/material/Paper"
import Slider from "@mui/material/Slider"
import Accordion from "@mui/material/Accordion"
import AccordionSummary from "@mui/material/AccordionSummary"
import AccordionDetails from "@mui/material/AccordionDetails"
import { tokens, fonts } from "@/lib/mui/theme"
import { RoasChart, StoreTemplate, ShopifyPhone, Funnel, AovOrbit, Gauge, DatosIntuicion, StockDesync, N8nFlow, ConversionChart, GeoAnswer, UnnecessaryApps, PlatformsInteractive, AgentChatRich, ToolsScatter } from "@/components/mui/artifacts"
import { SiteHeader, SiteFooter, DiagnosticoCTA, Blueprint, StatementBand, Reveal, HeroReveal, PrimaryCTA, ArtifactWindow } from "@/components/mui/shared"
import ScrollSteps, { type ScrollStep } from "@/components/mui/ScrollSteps"
import ClientShowcase from "@/components/mui/ClientShowcase"
import FeaturedCases from "@/components/mui/FeaturedCases"


/* ---------- secciones ---------- */

function Hero() {
  return (
    <Box component="section" sx={{ position: "relative", overflow: "hidden" }}>
      <Blueprint />
      <Container sx={{ position: "relative", zIndex: 1, pt: { xs: 8, md: 12 }, pb: { xs: 6, md: 8 }, textAlign: "center" }}>
        <HeroReveal>
          <Typography variant="h1" sx={{ fontSize: { xs: 34, sm: 56, md: 72 }, letterSpacing: "-0.025em", color: tokens.ink, maxWidth: 980, mx: "auto", mb: 3, textWrap: "balance" }}>
            Consultor SEO per a <Box component="em" sx={{ fontStyle: "italic", color: tokens.petrol }}>botigues en línia</Box>. Més vendes amb el trànsit que ja tens.
          </Typography>
          <Typography variant="body1" sx={{ fontSize: { xs: 16, md: 18 }, color: tokens.body, maxWidth: 580, mx: "auto", mb: 4 }}>
            {"Sóc l'Òscar Álvarez, consultor SEO d'ecommerce. Treballo el SEO, la visibilitat a la IA, la conversió i l'automatització de botigues que ja facturen, sobre la teva plataforma actual i sense migrar res. Enginyeria, no fum."}
          </Typography>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={2.5} sx={{ alignItems: "center", justifyContent: "center" }}>
            <PrimaryCTA />
          </Stack>
        </HeroReveal>
      </Container>
    </Box>
  )
}

// Ventana compacta que LLENA la card (sin aspect-ratio fijo, por eso no se
// recorta). Barra con puntos, tag mono y slot derecho opcional.
function MiniWindow({ tag, right, children }: { tag: string; right?: React.ReactNode; children: React.ReactNode }) {
  return (
    <Box sx={{ height: "100%", minWidth: 0, display: "flex", flexDirection: "column", bgcolor: tokens.win, borderRadius: 2, border: `1px solid ${tokens.lineSoft}`, overflow: "hidden", boxShadow: "0 18px 40px -30px rgba(27,30,34,.4)" }}>
      <Stack direction="row" spacing={1} sx={{ alignItems: "center", px: 1.5, py: 0.9, borderBottom: `1px solid ${tokens.lineSoft}` }}>
        <Stack direction="row" spacing={0.55}>
          {[0, 1, 2].map((d) => <Box key={d} sx={{ width: 7, height: 7, borderRadius: 999, bgcolor: "#D8DAD6" }} />)}
        </Stack>
        <Typography sx={{ fontFamily: fonts.mono, fontSize: 10.5, color: tokens.muted, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{tag}</Typography>
        {right && <Box sx={{ ml: "auto", flexShrink: 0 }}>{right}</Box>}
      </Stack>
      <Box sx={{ flex: 1, minHeight: 0, p: 1.5, display: "flex", flexDirection: "column", justifyContent: "center", overflow: "hidden" }}>{children}</Box>
    </Box>
  )
}

// Reloj dibujado a mano, identidad de marea.es.
function WatchMini({ size = 22 }: { size?: number }) {
  return (
    <Box component="svg" viewBox="0 0 40 40" sx={{ width: size, height: size }} aria-hidden>
      <circle cx="20" cy="20" r="10" fill="#fff" stroke={tokens.ink} strokeWidth="2" />
      <rect x="17" y="4" width="6" height="4" rx="1" fill={tokens.muted} />
      <rect x="17" y="32" width="6" height="4" rx="1" fill={tokens.muted} />
      <line x1="20" y1="20" x2="20" y2="14" stroke={tokens.ink} strokeWidth="1.6" strokeLinecap="round" />
      <line x1="20" y1="20" x2="24" y2="22" stroke={tokens.bronze} strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="31" cy="20" r="1.6" fill={tokens.muted} />
    </Box>
  )
}

// Agente: una conversación que cierra la venta. El carrito marca 1 y aparece
// el "añadido al carrito".
function AgenteArt() {
  const reduce = useReducedMotion()
  const cartBadge = (
    <Stack direction="row" spacing={0.55} sx={{ alignItems: "center" }}>
      <Box component="span" sx={{ fontSize: 13 }}>🛒</Box>
      <Box component={motion.span} initial={reduce ? false : { scale: 0.3, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }} transition={{ type: "spring", stiffness: 420, damping: 15, delay: 0.55 }}
        sx={{ minWidth: 15, height: 15, px: 0.4, borderRadius: 999, bgcolor: tokens.red, color: "#fff", fontFamily: fonts.mono, fontSize: 9.5, fontWeight: 700, display: "grid", placeItems: "center" }}>1</Box>
    </Stack>
  )
  return (
    <MiniWindow tag="agent · catàleg real" right={cartBadge}>
      <Stack spacing={0.9} sx={{ width: "100%" }}>
        <Stack direction="row" spacing={0.7} sx={{ alignItems: "center" }}>
          <Box component={motion.span} animate={reduce ? {} : { opacity: [1, 0.4, 1] }} transition={{ duration: 1.6, repeat: Infinity }} sx={{ width: 6, height: 6, borderRadius: 999, bgcolor: tokens.teal }} />
          <Typography sx={{ fontFamily: fonts.mono, fontSize: 10, color: tokens.muted }}>en línia · web i WhatsApp</Typography>
        </Stack>
        <Box sx={{ alignSelf: "flex-end", maxWidth: "82%", bgcolor: "#EEF0EC", borderRadius: "13px 13px 4px 13px", px: 1.3, py: 0.8 }}>
          <Typography sx={{ fontSize: 12.5, color: tokens.ink }}>Busco un automàtic d&apos;uns 250€.</Typography>
        </Box>
        <Stack direction="row" spacing={1} sx={{ alignItems: "center", alignSelf: "flex-start", maxWidth: "94%", bgcolor: "#F4FAF7", border: `1px solid ${tokens.teal}22`, borderRadius: "13px 13px 13px 4px", px: 1, py: 0.8 }}>
          <Box sx={{ width: 30, height: 30, borderRadius: 1.5, bgcolor: "#E7EAE6", display: "grid", placeItems: "center", flexShrink: 0 }}><WatchMini size={21} /></Box>
          <Box sx={{ flex: 1, minWidth: 0 }}>
            <Typography sx={{ fontSize: 12.5, fontWeight: 700, color: tokens.ink, whiteSpace: "nowrap" }}>Automàtic Acer</Typography>
            <Typography sx={{ fontFamily: fonts.mono, fontSize: 9.5, color: tokens.muted, whiteSpace: "nowrap" }}>del catàleg, estoc real</Typography>
          </Box>
          <Typography sx={{ fontFamily: fonts.mono, fontSize: 12.5, fontWeight: 700, color: tokens.teal }}>249€</Typography>
        </Stack>
        <Box component={motion.div} initial={reduce ? false : { opacity: 0, y: 5 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.55, duration: 0.35 }}
          sx={{ alignSelf: "flex-start", display: "inline-flex", alignItems: "center", bgcolor: `${tokens.teal}14`, borderRadius: 999, px: 1.1, py: 0.35 }}>
          <Typography sx={{ fontFamily: fonts.mono, fontSize: 10.5, fontWeight: 700, color: tokens.teal }}>✓ afegit a la cistella</Typography>
        </Box>
      </Stack>
    </MiniWindow>
  )
}

// Diagrama del pack: las piezas dentro de un marco "Crecimiento ecommerce",
// cada una marcada con si se vende suelta o solo dentro del pack, y la suma
// apuntando a ventas. Explica el modelo comercial de un vistazo.
function PackDiagram() {
  const reduce = useReducedMotion()
  const PIEZAS = [
    { l: "Auditoria SEO/GEO + CRO", s: "també solta", suelta: true },
    { l: "SEO i disseny CRO en continu", s: "dins del pack", suelta: false },
    { l: "Agent de vendes IA", s: "també solt", suelta: true },
    { l: "Automatització", s: "també solta", suelta: true },
  ]
  return (
    <ArtifactWindow tag="creixement ecommerce · què inclou" ratio="2 / 1">
      <Stack sx={{ height: "100%" }} spacing={1.25}>
        <Box sx={{ position: "relative", flex: 1, border: `1.5px solid ${tokens.petrol}55`, borderRadius: 2, p: 1.5, pt: 1.75 }}>
          <Typography sx={{ position: "absolute", top: -9, left: 12, bgcolor: tokens.win, px: 0.75, fontFamily: fonts.mono, fontSize: 10, fontWeight: 700, color: tokens.petrol }}>
            el pack, tot a dins
          </Typography>
          <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 1, height: "100%" }}>
            {PIEZAS.map((p, i) => (
              <Box
                key={p.l}
                component={motion.div}
                initial={reduce ? false : { opacity: 0, y: 6 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.35 }}
                sx={{ border: `1px solid ${tokens.lineSoft}`, borderRadius: 1.5, px: 1.25, py: 0.9, bgcolor: tokens.win, display: "flex", flexDirection: "column", justifyContent: "center", minWidth: 0 }}
              >
                <Typography sx={{ fontSize: { xs: 10.5, md: 12 }, fontWeight: 700, color: tokens.ink, lineHeight: 1.25 }}>{p.l}</Typography>
                <Typography sx={{ fontFamily: fonts.mono, fontSize: { xs: 8.5, md: 9.5 }, color: p.suelta ? tokens.teal : tokens.muted, mt: 0.25 }}>{p.s}</Typography>
              </Box>
            ))}
          </Box>
        </Box>
        <Stack direction="row" spacing={1.25} sx={{ alignItems: "center" }}>
          <Box sx={{ flex: 1, height: 2, bgcolor: tokens.line, borderRadius: 999 }} />
          <Typography sx={{ fontFamily: fonts.mono, fontSize: { xs: 10.5, md: 11.5 }, fontWeight: 700, color: tokens.teal, bgcolor: `${tokens.teal}14`, borderRadius: 999, px: 1.25, py: 0.4, whiteSpace: "nowrap" }}>
            = més trànsit que compra i més conversió
          </Typography>
        </Stack>
      </Stack>
    </ArtifactWindow>
  )
}

// Automatización: un flujo que corre solo. Pipeline horizontal con logos
// oficiales, pulso viajando entre nodos y log de ejecución con checks.
function AutoArt() {
  const reduce = useReducedMotion()
  const NODES = [
    { path: siShopify.path, hex: siShopify.hex, label: "Shopify", sub: "comanda" },
    { path: null as string | null, hex: null as string | null, label: "codi", sub: "Node/Python" },
    { path: siWoocommerce.path, hex: siWoocommerce.hex, label: "WooCommerce", sub: "estoc" },
  ]
  const LOG = ["estoc sincronitzat a les dues botigues", "cistella recuperada, correu enviat"]
  return (
    <MiniWindow tag="n8n · operativa" right={
      <Stack direction="row" spacing={0.5} sx={{ alignItems: "center" }}>
        <Box component={motion.span} animate={reduce ? {} : { opacity: [1, 0.35, 1] }} transition={{ duration: 1.6, repeat: Infinity }} sx={{ width: 6, height: 6, borderRadius: 999, bgcolor: tokens.teal }} />
        <Typography sx={{ fontFamily: fonts.mono, fontSize: 10, color: tokens.muted }}>running</Typography>
      </Stack>
    }>
      <Stack spacing={1.25} sx={{ width: "100%" }}>
        <Stack direction="row" sx={{ alignItems: "center" }}>
          {NODES.map((n, i) => (
            <Stack key={n.label} direction="row" sx={{ alignItems: "center", flex: i === 1 ? "0 0 auto" : 1 }}>
              {i > 0 && (
                <Box sx={{ position: "relative", flex: 1, minWidth: 12, height: 2, bgcolor: tokens.line, borderRadius: 999, mx: 0.55 }}>
                  {!reduce && (
                    <Box component={motion.span} animate={{ left: ["0%", "90%"], opacity: [0, 1, 1, 0] }} transition={{ duration: 1.1, repeat: Infinity, repeatDelay: 1.2, delay: (i - 1) * 1.1, ease: "easeInOut" }}
                      sx={{ position: "absolute", top: -2.5, width: 7, height: 7, borderRadius: 999, bgcolor: tokens.teal }} />
                  )}
                </Box>
              )}
              <Stack spacing={0.35} sx={{ alignItems: "center", border: `1px solid ${tokens.lineSoft}`, borderRadius: 2, bgcolor: tokens.win, px: 1, py: 0.85, boxShadow: "0 8px 20px -16px rgba(27,30,34,.4)" }}>
                {n.path ? (
                  <Box component="svg" viewBox="0 0 24 24" sx={{ width: 19, height: 19 }} aria-hidden><path d={n.path} fill={`#${n.hex}`} /></Box>
                ) : (
                  <Typography sx={{ fontFamily: fonts.mono, fontSize: 13, fontWeight: 700, color: tokens.petrol, lineHeight: "19px" }}>{`</>`}</Typography>
                )}
                <Typography sx={{ fontSize: 10, fontWeight: 700, color: tokens.ink, whiteSpace: "nowrap" }}>{n.label}</Typography>
                <Typography sx={{ fontFamily: fonts.mono, fontSize: 8, color: tokens.muted, whiteSpace: "nowrap" }}>{n.sub}</Typography>
              </Stack>
            </Stack>
          ))}
        </Stack>
        <Stack spacing={0.5} sx={{ bgcolor: "#FBFBF9", border: `1px solid ${tokens.lineSoft}`, borderRadius: 2, p: 1.1 }}>
          {LOG.map((l) => (
            <Stack key={l} direction="row" spacing={0.6} sx={{ alignItems: "baseline" }}>
              <Typography sx={{ fontFamily: fonts.mono, fontSize: 10, fontWeight: 700, color: tokens.teal }}>✓</Typography>
              <Typography sx={{ fontFamily: fonts.mono, fontSize: 10, color: tokens.ink, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{l}</Typography>
            </Stack>
          ))}
        </Stack>
        <Typography sx={{ fontFamily: fonts.mono, fontSize: 9.5, color: tokens.muted }}>corre sol, el codi és teu</Typography>
      </Stack>
    </MiniWindow>
  )
}

// Auditoría: un informe con hallazgos priorizados por impacto. Rojo urgente,
// gris menor. Es la personalidad de "documento con todo lo que mejorar".
function AuditArt() {
  const reduce = useReducedMotion()
  const FINDINGS = [
    { t: "Fitxa de producte sense schema", tag: "alt", sev: tokens.red },
    { t: "Un pas de més al checkout", tag: "fuga", sev: tokens.red },
    { t: "Sense esdeveniments a la cistella", tag: "mitjà", sev: tokens.muted },
    { t: "Landing lenta al mòbil", tag: "mitjà", sev: tokens.muted },
  ]
  return (
    <MiniWindow tag="auditoria · informe" right={<Typography sx={{ fontFamily: fonts.mono, fontSize: 10, color: tokens.muted }}>prioritzat</Typography>}>
      <Stack spacing={0.6} sx={{ width: "100%" }}>
        <Typography sx={{ fontFamily: fonts.mono, fontSize: 9.5, color: tokens.muted }}>troballes per impacte en vendes</Typography>
        {FINDINGS.map((f, i) => (
          <Box key={f.t} component={motion.div} initial={reduce ? false : { opacity: 0, x: -8 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.09, duration: 0.3 }}
            sx={{ display: "flex", alignItems: "center", gap: 1, bgcolor: tokens.win, border: `1px solid ${tokens.lineSoft}`, borderRadius: 1.5, px: 1, py: 0.6 }}>
            <Box sx={{ width: 7, height: 7, borderRadius: 999, bgcolor: f.sev, flexShrink: 0 }} />
            <Typography sx={{ fontSize: 11.5, color: tokens.ink, flex: 1, minWidth: 0, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{f.t}</Typography>
            <Typography sx={{ fontFamily: fonts.mono, fontSize: 9, fontWeight: 700, color: f.sev, bgcolor: `${f.sev}18`, borderRadius: 999, px: 0.7, py: 0.15, flexShrink: 0 }}>{f.tag}</Typography>
          </Box>
        ))}
      </Stack>
    </MiniWindow>
  )
}

function CodeMini() {
  return (
    <Box sx={{ height: "100%", width: "100%", bgcolor: "#FBFBF9", borderRadius: 1.5, border: `1px solid ${tokens.lineSoft}`, p: 1.75, display: "flex", flexDirection: "column", justifyContent: "center", gap: 0.6 }}>
      <Typography sx={{ fontFamily: fonts.mono, fontSize: 11, color: tokens.muted }}>{`// a mida`}</Typography>
      <Typography sx={{ fontFamily: fonts.mono, fontSize: 12, color: tokens.ink }}><Box component="span" sx={{ color: tokens.bronze }}>const</Box> app = build(<Box component="span" sx={{ color: tokens.teal }}>el_teu_cas</Box>)</Typography>
      <Typography sx={{ fontFamily: fonts.mono, fontSize: 12, color: tokens.ink }}>app.<Box component="span" sx={{ color: tokens.teal }}>rag</Box>(docs).<Box component="span" sx={{ color: tokens.teal }}>deploy</Box>()</Typography>
    </Box>
  )
}
const SERVICES = [
  { tag: "Pack complet, ho uneix tot", badge: "Pack complet", result: "Creixement ecommerce", how: "SEO tècnic + GEO/AI Search + CRO, amb l'agent i l'automatització a dins. Més trànsit que compra i més visites que converteixen.", meta: "Sobre la teva plataforma actual · Shopify, WooCommerce, sense migrar", chips: ["SEO tècnic", "GEO/AI Search", "CRO", "Agent inclòs", "Automatització inclosa"], cta: "Veure el pack", href: "/servicios/crecimiento-ecommerce", artifact: <PackDiagram /> },
  { tag: "Punta de llança, també solt", badge: "També solt", result: "Agent de vendes IA", how: "Ancorat al teu catàleg real: recomana, resol i tanca, a la teva web i a WhatsApp. El xatbot que no s'inventa preus ni estoc, perquè no és un xatbot: és un agent connectat a les teves dades.", chips: ["RAG ancorat", "Web + WhatsApp", "Recomana", "Recupera la cistella"], cta: "Veure l'agent", href: "/servicios/agente-ventas-ia", artifact: <AgenteArt /> },
  { tag: "Operativa, també solta", badge: "També solta", result: "Automatització", how: "n8n orquestrant codi propi en Node i Python: comandes, estoc, cistelles i reporting. L'automatització del teu ecommerce corre sola i el codi és teu.", chips: ["n8n self-hosted", "Node/Python", "Feeds & APIs", "Reporting"], cta: "Veure l'automatització", href: "/servicios/automatizaciones", artifact: <AutoArt /> },
  { tag: "Per començar, també solta", badge: "Per començar", result: "Auditoria SEO/GEO + fugues de conversió", how: "Radiografia de la teva botiga: visibilitat a Google i a la IA, i on se t'escapa la conversió. Amb un pla prioritzat per impacte en vendes.", chips: ["SEO tècnic", "GEO/AI Search", "Fugues de conversió", "Pla prioritzat"], cta: "Veure l'auditoria", href: "/servicios/auditoria-seo-geo", artifact: <AuditArt /> },
  { tag: "A mida", badge: "A mida", result: "Plataformes internes", how: "RAG sobre els teus documents i apps internes quan l'stack estàndard no arriba.", chips: ["RAG", "Auth.js", "Prisma", "Sota demanda"], cta: "Veure'n més", href: "/servicios/a-medida", artifact: <CodeMini /> },
]
// Card de servicio: misma anatomía en todas, tamaño según jerarquía comercial.
function ServiceCard({ s, featured }: { s: (typeof SERVICES)[number]; featured?: boolean }) {
  return (
    <Paper component={Link} href={s.href} elevation={0}
      sx={{
        display: "block", textDecoration: "none", position: "relative", overflow: "hidden",
        height: "100%", borderRadius: 3,
        border: `1px solid ${featured ? `${tokens.paper}22` : tokens.line}`,
        bgcolor: featured ? tokens.petrol : tokens.win,
        transition: "transform .25s, box-shadow .25s, border-color .25s",
        "&:hover": { transform: "translateY(-4px)", boxShadow: "0 24px 50px -32px rgba(27,30,34,.35)", borderColor: featured ? `${tokens.paper}55` : `${tokens.petrol}66` },
        "&:hover .svc-arrow": { transform: "translateX(3px)" },
        "&:focus-visible": { outline: `2px solid ${featured ? tokens.paper : tokens.petrol}`, outlineOffset: 2 },
        ...(featured ? {} : {
          "&:before": { content: '""', position: "absolute", top: 0, left: 0, right: 0, height: 2, bgcolor: tokens.petrol, transform: "scaleX(0)", transformOrigin: "left", transition: "transform .3s" },
          "&:hover:before": { transform: "scaleX(1)" },
        }),
      }}
    >
      <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: featured ? "1fr 1.1fr" : "1fr" }, gridTemplateRows: featured ? undefined : { md: "1fr auto" }, height: "100%" }}>
        <Box sx={{ p: 3, display: "flex", flexDirection: "column" }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1.25, flexWrap: "wrap", mb: 1 }}>
            <Typography variant="h5" component="h3" sx={{ fontFamily: fonts.serif, fontSize: featured ? { xs: 24, md: 30 } : 22, color: featured ? tokens.paper : tokens.ink }}>{s.result}</Typography>
            <Box component="span" sx={{ fontFamily: fonts.mono, fontSize: 10.5, fontWeight: 700, letterSpacing: ".04em", textTransform: "uppercase", whiteSpace: "nowrap", borderRadius: 999, px: 1, py: 0.35, lineHeight: 1.4,
              ...(featured
                ? { color: tokens.petrol, bgcolor: tokens.accentSoft, border: `1px solid ${tokens.accentSoft}` }
                : { color: tokens.petrol, bgcolor: `${tokens.petrol}0f`, border: `1px solid ${tokens.petrol}33` }) }}>{s.badge}</Box>
          </Box>
          <Typography variant="body2" sx={{ color: featured ? tokens.onDarkMuted : tokens.body, mb: 2, maxWidth: 420 }}>{s.how}</Typography>
          <Typography sx={{ fontFamily: featured ? fonts.mono : undefined, fontSize: 12.5, color: featured ? tokens.onDarkMuted : tokens.muted, mb: 2.5 }}>{featured ? s.meta : s.chips.join(", ")}</Typography>
          <Stack direction="row" spacing={0.75} sx={{ alignItems: "center", color: featured ? tokens.paper : tokens.ink, mt: "auto" }}>
            <Typography sx={{ fontFamily: fonts.mono, fontSize: 12, fontWeight: 600 }}>{s.cta}</Typography>
            <Box className="svc-arrow" component="span" sx={{ color: featured ? tokens.paper : tokens.petrol, transition: "transform .2s" }}>→</Box>
          </Stack>
        </Box>
        <Box sx={{ p: featured ? { xs: 2, md: 2.5 } : "0 24px 24px", display: "grid", gridTemplateColumns: "minmax(0, 1fr)", alignItems: "end" }}>
          <Box sx={{ minWidth: 0, borderRadius: 2, border: `1px solid ${tokens.lineSoft}`, bgcolor: "#F3F4F1", ...(featured ? { aspectRatio: "16 / 10" } : { height: 244 }), overflow: "hidden", p: 1.5, display: "grid", gridTemplateColumns: "minmax(0, 1fr)", placeItems: "stretch" }}>
            <Box sx={{ width: "100%", height: "100%", minWidth: 0, minHeight: 0 }}>{s.artifact}</Box>
          </Box>
        </Box>
      </Box>
    </Paper>
  )
}

// Carrusel de las piezas sueltas SOLO en móvil: scroll-snap nativo, la card
// siguiente asoma para invitar a deslizar, con indicadores de posición en pino.
// En desktop no existe: allí se usa la fila de tres columnas.
function LooseCarousel({ items }: { items: React.ReactNode[] }) {
  const trackRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(0)
  const onScroll = () => {
    const el = trackRef.current
    if (!el) return
    const card = el.querySelector<HTMLElement>("[data-card]")
    const step = card ? card.offsetWidth + 16 : el.clientWidth
    setActive(Math.max(0, Math.min(items.length - 1, Math.round(el.scrollLeft / step))))
  }
  return (
    <Box sx={{ display: { xs: "block", sm: "none" } }}>
      <Box
        ref={trackRef}
        onScroll={onScroll}
        role="group"
        aria-label="Serveis que també es contracten per separat"
        sx={{
          display: "flex", alignItems: "stretch", gap: 2, overflowX: "auto", overscrollBehaviorX: "contain",
          scrollSnapType: "x mandatory", scrollPaddingLeft: "24px",
          // pt compensado con mt: el track recorta en vertical (overflow-x auto
          // implica clip en Y) y el translateY(-4px) del tap cortaba el borde
          // superior de la card. Con 8px de aire la elevación queda dentro.
          mx: -3, px: 3, pb: 1, pt: 1, mt: -1,
          WebkitOverflowScrolling: "touch", scrollbarWidth: "none", "&::-webkit-scrollbar": { display: "none" },
        }}
      >
        {items.map((it, i) => (
          <Box key={i} data-card sx={{ flex: "0 0 84%", scrollSnapAlign: "start" }}>{it}</Box>
        ))}
      </Box>
      <Stack direction="row" spacing={0.75} sx={{ justifyContent: "center", mt: 1.5 }} aria-hidden>
        {items.map((_, i) => (
          <Box key={i} sx={{ height: 6, width: i === active ? 18 : 6, borderRadius: 999, bgcolor: i === active ? tokens.petrol : `${tokens.petrol}33`, transition: "width .25s, background-color .25s" }} />
        ))}
      </Stack>
    </Box>
  )
}

function Services() {
  const [principal, agente, automatizacion, auditoria, amedida] = SERVICES
  return (
    <Box component="section" sx={{ py: { xs: 8, md: 12 }, borderBottom: `1px solid ${tokens.lineSoft}` }}>
      <Container>
        {/* Cabecera con foto: titular a la izquierda, estudio trabajando a la derecha */}
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1.1fr 0.9fr" }, gap: { xs: 4, md: 7 }, alignItems: "center", mb: { xs: 5, md: 7 } }}>
          <Reveal>
            <Box>
              <Typography variant="h2" sx={{ fontSize: { xs: 28, md: 40 }, color: tokens.ink, mb: 2 }}>
                Una sola enginyeria, al servei de fer que la teva botiga vengui més.
              </Typography>
              <Typography variant="body1" sx={{ color: tokens.body, maxWidth: 520 }}>
                {"El pack Creixement ho uneix tot. I si prefereixes anar peça a peça, sense pack, també es contracten per separat l'agent de vendes, l'automatització i l'auditoria SEO/GEO amb fugues de conversió."}
              </Typography>
            </Box>
          </Reveal>
          <Reveal delay={0.1}>
            <Box sx={{ position: "relative", borderRadius: 3, overflow: "hidden", border: `1px solid ${tokens.line}`, aspectRatio: "16 / 9" }}>
              <Image src="/assets/gen/photo-oficina.png" alt="L'agència treballant sobre botigues en línia" fill sizes="(max-width: 900px) 100vw, 44vw" style={{ objectFit: "cover" }} />
            </Box>
          </Reveal>
        </Box>

        {/* Jerarquía: pack principal a lo ancho → 2 palancas → a medida discreto */}
        <Stack spacing={2.5}>
          <Reveal><ServiceCard s={principal} featured /></Reveal>
          {/* Móvil: carrusel snap con las tres piezas sueltas. */}
          <Reveal delay={0.06}>
            <LooseCarousel items={[
              <ServiceCard key="agente" s={agente} />,
              <ServiceCard key="automatizacion" s={automatizacion} />,
              <ServiceCard key="auditoria" s={auditoria} />,
            ]} />
          </Reveal>
          {/* Desktop: fila de tres columnas. */}
          <Box sx={{ display: { xs: "none", sm: "grid" }, gridTemplateColumns: { sm: "1fr 1fr", md: "1fr 1fr 1fr" }, gap: 2.5 }}>
            <Reveal delay={0.06}><ServiceCard s={agente} /></Reveal>
            <Reveal delay={0.12}><ServiceCard s={automatizacion} /></Reveal>
            <Reveal delay={0.18}><ServiceCard s={auditoria} /></Reveal>
          </Box>
          <Reveal delay={0.16}>
            <Paper component={Link} href={amedida.href} elevation={0}
              sx={{
                display: "flex", flexWrap: "wrap", alignItems: "center", gap: 2, textDecoration: "none",
                px: 3, py: 2, borderRadius: 3, border: `1px dashed ${tokens.line}`, bgcolor: "transparent",
                transition: "border-color .2s", "&:hover": { borderColor: `${tokens.petrol}66` },
                "&:hover .svc-arrow": { transform: "translateX(3px)" },
              }}
            >
              <Typography sx={{ fontSize: 12.5, fontWeight: 600, color: tokens.petrol }}>{amedida.tag}</Typography>
              <Typography component="h3" sx={{ fontFamily: fonts.serif, fontSize: 18, fontWeight: 600, color: tokens.ink }}>{amedida.result}</Typography>
              <Typography variant="body2" sx={{ color: tokens.muted, flex: 1, minWidth: 220 }}>{amedida.how}</Typography>
              <Stack direction="row" spacing={0.75} sx={{ alignItems: "center", color: tokens.ink }}>
                <Typography sx={{ fontFamily: fonts.mono, fontSize: 12, fontWeight: 600 }}>{"Veure'n més"}</Typography>
                <Box className="svc-arrow" component="span" sx={{ color: tokens.petrol, transition: "transform .2s" }}>→</Box>
              </Stack>
            </Paper>
          </Reveal>
        </Stack>
      </Container>
    </Box>
  )
}

const METHOD_STEPS: ScrollStep[] = [
  { label: "Diagnòstic", meta: "Setmana 1", title: "Diagnòstic", tag: "diagnòstic · eines", desc: "Analitzo la teva botiga, el teu trànsit i els teus colls d'ampolla amb les teves dades reals (GA4, Search Console, Clarity…). En surts amb un pla clar, tant si continuem com si no.", artifact: <ToolsScatter /> },
  { label: "Estratègia", meta: "Setmana 1-2", title: "Estratègia de conversió", tag: "estratègia · customer journey", desc: "Dissenyo el customer journey optimitzat: upsells, bundles i els punts de conversió prioritzats per impacte en vendes.", artifact: <StoreTemplate /> },
  { label: "Implementació", meta: "Setmana 2-5", title: "Implementació", tag: "implementació · sobre el teu stack", desc: "Sobre la teva plataforma actual: SEO tècnic, CRO, agent de vendes i automatització. Codi net, mesurable i tot teu.", artifact: <N8nFlow /> },
  { label: "Seguiment", meta: "continu", title: "Seguiment", tag: "seguiment · resultats", desc: "Mesuro i optimitzo amb dades reals. Itero mes a mes: el sistema no s'atura.", artifact: <ConversionChart /> },
]
function Methodology() {
  return (
    <ScrollSteps
      id="metodo"
      title="La meva metodologia: del diagnòstic a vendre més, amb dades a cada pas"
      subtitle="Quatre etapes i un únic responsable. Les teves dades guien cada decisió."
      steps={METHOD_STEPS}
    />
  )
}


/* ---------- Problemas (bento con artefactos reales) ---------- */
function ProblemCard({ title, desc, children }: { title: string; desc: string; children?: React.ReactNode }) {
  return (
    <Reveal>
      <Box sx={{ p: 3, borderRadius: 3, border: `1px solid ${tokens.line}`, height: "100%", display: "flex", flexDirection: "column", gap: 2 }}>
        {children}
        <Box>
          <Typography variant="h6" component="h3" sx={{ fontSize: 18, color: tokens.ink, mb: 0.75 }}>{title}</Typography>
          <Typography variant="body2" sx={{ color: tokens.muted }}>{desc}</Typography>
        </Box>
      </Box>
    </Reveal>
  )
}
function Problems() {
  return (
    <Box component="section" sx={{ py: { xs: 8, md: 12 }, borderBottom: `1px solid ${tokens.lineSoft}` }}>
      <Container>
        {/* Cabecera con foto: el dueño desbordado, el dolor con cara humana */}
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1.1fr 0.9fr" }, gap: { xs: 4, md: 7 }, alignItems: "center", mb: { xs: 5, md: 7 } }}>
          <Reveal>
            <Typography variant="h2" sx={{ fontSize: { xs: 28, md: 40 }, color: tokens.ink, maxWidth: 620 }}>
              Els problemes que fan que la teva botiga perdi diners cada dia.
            </Typography>
          </Reveal>
          <Reveal delay={0.1}>
            <Box sx={{ position: "relative", borderRadius: 3, overflow: "hidden", border: `1px solid ${tokens.line}`, aspectRatio: "16 / 9" }}>
              <Image src="/assets/gen/photo-dueno.png" alt="Propietari d'una botiga en línia gestionant comandes a última hora" fill sizes="(max-width: 900px) 100vw, 44vw" style={{ objectFit: "cover" }} />
            </Box>
          </Reveal>
        </Box>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "1fr 1fr 1fr" }, gap: 2.5 }}>
          <ProblemCard title="Una plantilla genèrica" desc="No està pensada per al teu client real: tens una cosa genèrica que no et diferencia de la competència.">
            <ArtifactWindow tag="botiga · plantilla" ratio="4 / 3"><StoreTemplate /></ArtifactWindow>
          </ProblemCard>
          <ProblemCard title="Canvis sense saber si funcionen" desc="Modifiques colors, botons i textos per intuïció, sense dades d'on estàs perdent diners. Per això la teva botiga en línia no ven el que hauria de vendre.">
            <ArtifactWindow tag="canvis · a cegues" ratio="4 / 3"><DatosIntuicion /></ArtifactWindow>
          </ProblemCard>
          <ProblemCard title="Aplicacions innecessàries" desc="Apps de tercers que et cobren cada mes, alenteixen la teva web i no s'integren entre elles. Pots prescindir del 90%.">
            <ArtifactWindow tag="apps · tercers" ratio="4 / 3"><UnnecessaryApps /></ArtifactWindow>
          </ProblemCard>
          <ProblemCard title="Inverteixes més i no guanyes més" desc="El CAC puja i el retorn baixa. Hi poses diners en ads però els números ja no quadren.">
            <ArtifactWindow tag="roas · 12 mesos" ratio="4 / 3"><RoasChart /></ArtifactWindow>
          </ProblemCard>
          <ProblemCard title="Una botiga en línia lenta" desc="Cada segon de càrrega de més és una venda que se'n va. Core Web Vitals en vermell és abandonament.">
            <ArtifactWindow tag="core web vitals" ratio="4 / 3"><Gauge /></ArtifactWindow>
          </ProblemCard>
          <ProblemCard title="Estoc desquadrat" desc="El magatzem diu 3 i la web diu 12: vens el que no tens i acabes anul·lant comandes.">
            <ArtifactWindow tag="estoc · magatzem vs botiga" ratio="4 / 3"><StockDesync /></ArtifactWindow>
          </ProblemCard>
        </Box>
      </Container>
    </Box>
  )
}

/* ---------- Soluciones (artefactos ricos) ---------- */
function Stage({ children }: { children: React.ReactNode }) {
  return (
    <Box sx={{ flexShrink: 0, borderRadius: 2.5, border: `1px solid ${tokens.lineSoft}`, bgcolor: "#F3F4F1", aspectRatio: "4 / 3", overflow: "hidden", p: 1.5, display: "grid", placeItems: "center" }}>
      {children}
    </Box>
  )
}
// height:100% + texto flexible dejan el Stage siempre abajo, así los artefactos
// cuadran en la fila aunque los títulos/descripciones ocupen distinto alto.
function SolutionCard({ artifact, title, desc }: { artifact: React.ReactNode; title: string; desc: string }) {
  return (
    <Reveal>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2, height: "100%" }}>
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="h5" component="h3" sx={{ fontSize: 20, lineHeight: 1.25, color: tokens.ink, mb: 0.75 }}>{title}</Typography>
          <Typography variant="body2" sx={{ color: tokens.muted, lineHeight: 1.5 }}>{desc}</Typography>
        </Box>
        <Stage>{artifact}</Stage>
      </Box>
    </Reveal>
  )
}
const fill = (n: React.ReactNode) => <Box sx={{ width: "100%", height: "100%" }}>{n}</Box>
function Solutions() {
  return (
    <Box component="section" id="solucion" sx={{ py: { xs: 8, md: 12 }, borderBottom: `1px solid ${tokens.lineSoft}`, scrollMarginTop: 72 }}>
      <Container>
        <Reveal>
          <Typography variant="h2" sx={{ fontSize: { xs: 28, md: 40 }, color: tokens.ink, maxWidth: 680, mb: 1.5 }}>
            Sé com augmentar les vendes de la teva botiga sense que gastis més.
          </Typography>
          <Typography variant="body1" sx={{ color: tokens.muted, mb: 6, maxWidth: 520 }}>
            {"Portar trànsit que compra, convertir millor qui ja entra i que l'operativa funcioni sola."}
          </Typography>
        </Reveal>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "repeat(3, 1fr)" }, gap: 2.5, mb: 3 }}>
          <SolutionCard artifact={fill(<Funnel />)} title="Més vendes amb el mateix trànsit" desc="Trec fricció i optimitzo el user journey: cada punt de decisió, de la landing al checkout." />
          <SolutionCard artifact={fill(<AovOrbit />)} title="Clients que compren més per comanda" desc="Cross-sells, bundles natius i estratègies d'enviament que fan pujar el tiquet mitjà." />
          <SolutionCard artifact={<Box sx={{ transform: "scale(.66)" }}><ShopifyPhone /></Box>} title="Que tornin a comprar" desc="Postcompra i recurrència: una web que posa fàcil repetir genera més comandes sense esforç." />
        </Box>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "repeat(3, 1fr)" }, gap: 2.5 }}>
          <SolutionCard artifact={fill(<ConversionChart />)} title="Més ingressos, mateix trànsit" desc="Mesuro i optimitzo la conversió: els ingressos pugen encara que les sessions no creixin." />
          <SolutionCard artifact={fill(<GeoAnswer />)} title="Que la IA et citi (GEO)" desc="GEO, el SEO dels cercadors d'IA: hi apareixes citat quan algú pregunta a ChatGPT o Perplexity què comprar." />
          <SolutionCard artifact={fill(<N8nFlow />)} title="Automatització que corre sola" desc="n8n orquestrant codi propi: cistella, estoc, comandes i postcompra sense feina manual." />
        </Box>
      </Container>
    </Box>
  )
}

/* ---------- Agente de ventas: chat + texto ---------- */
function AgentShowcase() {
  const bullets = [
    "Recomana producte segons el que busca el client.",
    "No s'inventa preus ni estoc: ancorat al teu catàleg real.",
    "Funciona a la teva web i a WhatsApp, 24/7.",
    "Si no ho sap, ho diu i ho escala a una persona.",
  ]
  return (
    <Box component="section" id="agente" sx={{ py: { xs: 8, md: 12 }, borderBottom: `1px solid ${tokens.lineSoft}`, scrollMarginTop: 72 }}>
      <Container>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap: { xs: 5, md: 8 }, alignItems: "center" }}>
          <Box>
            <Reveal>
              <Typography variant="h2" sx={{ fontSize: { xs: 28, md: 42 }, color: tokens.ink, mb: 3 }}>
                Un assistent que ven, no un xatbot que molesta.
              </Typography>
              <Stack spacing={1.5} sx={{ mb: 4 }}>
                {bullets.map((b) => (
                  <Stack key={b} direction="row" spacing={1.25} sx={{ alignItems: "flex-start" }}>
                    <Box component="span" sx={{ color: tokens.bronze, fontWeight: 800, lineHeight: 1.6 }}>✓</Box>
                    <Typography variant="body1" sx={{ color: tokens.body }}>{b}</Typography>
                  </Stack>
                ))}
              </Stack>
              <Button component={Link} href="/servicios/agente-ventas-ia" sx={{ color: tokens.ink, fontWeight: 700, px: 0, "&:hover": { bgcolor: "transparent", color: tokens.petrol } }}>
                {"Coneix l'agent de vendes"} <Box component="span" sx={{ color: tokens.petrol, ml: 0.5 }}>→</Box>
              </Button>
            </Reveal>
          </Box>
          <Reveal delay={0.1}><AgentChatRich /></Reveal>
        </Box>
      </Container>
    </Box>
  )
}

/* ---------- Plataformas (interactivo) ---------- */
function PlatformsBlock() {
  const cards = [
    { anchor: "Agència Shopify", path: siShopify.path, hex: siShopify.hex, href: "/agencia-shopify" },
    { anchor: "Agència WooCommerce", path: siWoocommerce.path, hex: siWoocommerce.hex, href: "/agencia-woocommerce" },
  ]
  return (
    <Box component="section" sx={{ py: { xs: 8, md: 12 }, borderBottom: `1px solid ${tokens.lineSoft}` }}>
      <Container>
        <Reveal>
          <Typography variant="h2" sx={{ fontSize: { xs: 28, md: 40 }, color: tokens.ink, maxWidth: 640, mb: 1.5 }}>
            Treballo sobre la teva plataforma. No et faig migrar.
          </Typography>
          <Typography variant="body1" sx={{ color: tokens.body, mb: { xs: 4, md: 5 }, maxWidth: 580 }}>
            {"M'integro sobre el que ja tens. Estic especialitzat en les dues plataformes que mouen l'ecommerce a Espanya:"}
          </Typography>
        </Reveal>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" }, gap: 2.5 }}>
          {cards.map((c, i) => (
            <Reveal key={c.anchor} delay={i * 0.06}>
              <Paper
                component={Link}
                href={c.href}
                elevation={0}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2.5,
                  height: "100%",
                  textDecoration: "none",
                  p: { xs: 3, md: 3.5 },
                  borderRadius: 3,
                  border: `1px solid ${tokens.line}`,
                  bgcolor: tokens.win,
                  transition: "transform .25s, box-shadow .25s, border-color .25s",
                  "&:hover": { transform: "translateY(-4px)", boxShadow: "0 24px 50px -32px rgba(27,30,34,.35)", borderColor: `${tokens.petrol}55` },
                  "&:hover .plat-arrow": { transform: "translateX(3px)" },
                }}
              >
                <Box component="svg" viewBox="0 0 24 24" sx={{ width: 42, height: 42, flexShrink: 0 }} aria-hidden>
                  <path d={c.path} fill={`#${c.hex}`} />
                </Box>
                <Box sx={{ flex: 1, minWidth: 0 }}>
                  <Typography component="span" sx={{ display: "block", fontFamily: fonts.serif, fontSize: { xs: 21, md: 25 }, fontWeight: 600, color: tokens.ink }}>{c.anchor}</Typography>
                  <Typography component="span" sx={{ display: "block", fontSize: 14, color: tokens.body }}>SEO tècnic, GEO i CRO sobre el teu tema actual.</Typography>
                </Box>
                <Box className="plat-arrow" component="span" sx={{ color: tokens.petrol, fontFamily: fonts.mono, fontSize: 17, flexShrink: 0, transition: "transform .2s" }}>→</Box>
              </Paper>
            </Reveal>
          ))}
        </Box>
        <Reveal>
          <Typography variant="body2" sx={{ color: tokens.muted, mt: 2.5, maxWidth: 640 }}>
            <Box component={Link} href="/agencia-magento" sx={{ color: tokens.ink, fontWeight: 600, textDecoration: "underline", textDecorationColor: tokens.line, "&:hover": { textDecorationColor: tokens.petrol } }}>Magento</Box> o una altra plataforma? {"L'"}
            <Box component={Link} href="/servicios/auditoria-seo-geo" sx={{ color: tokens.ink, fontWeight: 600, textDecoration: "underline", textDecorationColor: tokens.line, "&:hover": { textDecorationColor: tokens.petrol } }}>auditoria SEO/GEO</Box>{" "}
            {"i l'automatització treballen sobre qualsevol stack."}
          </Typography>
        </Reveal>
        <Reveal delay={0.05}><Box sx={{ mt: { xs: 5, md: 7 } }}><PlatformsInteractive /></Box></Reveal>
      </Container>
    </Box>
  )
}

// Dónde trabajo: las páginas locales, enlazadas desde la home. Seis enlaces y
// no treinta pueblos: un bloque con decenas de enlaces a páginas finas es lo
// que Google describe como doorway. El resto de municipios vive dentro de
// sus hubs (Maresme y Vallès Oriental).
const ZONAS = [
  { t: "SEO a Barcelona", d: "SEO local, Google Maps i botigues en línia a la ciutat.", href: "/consultor-seo-barcelona" },
  { t: "SEO al Maresme", d: "Tota la comarca, de Montgat a Malgrat de Mar.", href: "/agencia-seo-maresme" },
  { t: "SEO al Vallès Oriental", d: "Granollers, Mollet, Cardedeu i la resta de la comarca.", href: "/consultor-seo-valles-oriental" },
  { t: "SEO a Mataró", d: "Capital del Maresme: a Google, al mapa i a ChatGPT.", href: "/consultor-seo-mataro" },
  { t: "SEO a Premià de Mar", d: "On tinc la base, al Maresme.", href: "/consultor-seo-premia-de-mar" },
  { t: "SEO a Granollers", d: "Comerç, serveis i indústria del Vallès.", href: "/consultor-seo-granollers" },
]

function DondeTrabajo() {
  const linkSx = { color: tokens.ink, fontWeight: 600, textDecoration: "underline", textDecorationColor: tokens.line, "&:hover": { textDecorationColor: tokens.petrol } }
  return (
    <Box component="section" sx={{ py: { xs: 8, md: 12 }, borderBottom: `1px solid ${tokens.lineSoft}` }}>
      <Container>
        <Reveal>
          <Typography variant="h2" sx={{ fontSize: { xs: 28, md: 40 }, color: tokens.ink, maxWidth: 680, mb: 1.5 }}>
            Consultor SEO a Barcelona, el Maresme i el Vallès.
          </Typography>
          <Typography variant="body1" sx={{ color: tokens.body, mb: { xs: 4, md: 5 }, maxWidth: 600 }}>
            Treballo des de Premià de Mar per a botigues en línia i negocis locals. Que et trobin a Google, al mapa i a ChatGPT quan busquen el que fas a prop seu.
          </Typography>
        </Reveal>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "repeat(3, 1fr)" }, gap: 2 }}>
          {ZONAS.map((z, i) => (
            <Reveal key={z.href} delay={(i % 3) * 0.05}>
              <Paper
                component={Link}
                href={z.href}
                elevation={0}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  height: "100%",
                  textDecoration: "none",
                  p: { xs: 2.5, md: 3 },
                  borderRadius: 3,
                  border: `1px solid ${tokens.line}`,
                  bgcolor: tokens.win,
                  transition: "transform .25s, box-shadow .25s, border-color .25s",
                  "&:hover": { transform: "translateY(-3px)", boxShadow: "0 24px 50px -32px rgba(27,30,34,.35)", borderColor: `${tokens.petrol}55` },
                  "&:hover .zona-arrow": { transform: "translateX(3px)" },
                  "@media (prefers-reduced-motion: reduce)": { transition: "none", "&:hover": { transform: "none" } },
                }}
              >
                <Box sx={{ flex: 1, minWidth: 0 }}>
                  <Typography component="span" sx={{ display: "block", fontFamily: fonts.serif, fontSize: { xs: 20, md: 22 }, fontWeight: 600, color: tokens.ink }}>
                    {z.t}
                  </Typography>
                  <Typography component="span" sx={{ display: "block", fontSize: 14, color: tokens.body }}>{z.d}</Typography>
                </Box>
                <Box className="zona-arrow" component="span" sx={{ color: tokens.petrol, fontFamily: fonts.mono, fontSize: 17, flexShrink: 0, transition: "transform .2s" }}>→</Box>
              </Paper>
            </Reveal>
          ))}
        </Box>
        <Reveal>
          <Typography variant="body2" sx={{ color: tokens.muted, mt: 2.5, maxWidth: 680 }}>
            I a{" "}
            <Box component={Link} href="/seo-catalunya" sx={linkSx}>tota Catalunya</Box>. Si el que vols és que ChatGPT i Google AI citin la teva marca, mira el{" "}
            <Box component={Link} href="/posicionamiento-geo" sx={linkSx}>posicionament GEO</Box>.
          </Typography>
        </Reveal>
      </Container>
    </Box>
  )
}

/* ---------- ROI calculator (MUI) ---------- */
function RoiCalc() {
  const [v, setV] = useState(20000)
  const [cvr, setCvr] = useState(1.5)
  const [aov, setAov] = useState(60)
  const eur = (n: number) => n.toLocaleString("ca-ES")
  const current = Math.round(v * (cvr / 100) * aov)
  const improved = Math.round(v * ((cvr * 1.3) / 100) * aov) // estimación: +30% de conversión
  const delta = improved - current
  return (
    <Box component="section" sx={{ py: { xs: 8, md: 12 }, borderBottom: `1px solid ${tokens.lineSoft}` }}>
      <Container>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap: { xs: 4, md: 8 }, alignItems: "center" }}>
          <Box>
            <Typography variant="h2" sx={{ fontSize: { xs: 28, md: 40 }, color: tokens.ink, mb: 2 }}>
              Quant et costa no optimitzar?
            </Typography>
            <Stack spacing={3} sx={{ maxWidth: 420 }}>
              {[
                { l: "Visites al mes", val: v, set: setV, min: 1000, max: 200000, step: 1000, fmt: (n: number) => eur(n) },
                { l: "Conversió (%)", val: cvr, set: setCvr, min: 0.3, max: 6, step: 0.1, fmt: (n: number) => `${n.toFixed(1)}%` },
                { l: "Tiquet mitjà (AOV €)", val: aov, set: setAov, min: 15, max: 300, step: 5, fmt: (n: number) => `${n}€` },
              ].map((s) => (
                <Box key={s.l}>
                  <Stack direction="row" sx={{ justifyContent: "space-between", mb: 0.5 }}>
                    <Typography sx={{ fontFamily: fonts.mono, fontSize: 12, color: tokens.muted }}>{s.l}</Typography>
                    <Typography sx={{ fontFamily: fonts.mono, fontSize: 13, color: tokens.ink, fontWeight: 600 }}>{s.fmt(s.val)}</Typography>
                  </Stack>
                  <Slider
                    value={s.val}
                    min={s.min}
                    max={s.max}
                    step={s.step}
                    onChange={(_, n) => s.set(n as number)}
                    // La etiqueta visible de arriba no está asociada al input, así
                    // que sin esto el control llega sin nombre al árbol de
                    // accesibilidad (y a los agentes que leen la página).
                    aria-label={s.l}
                    getAriaValueText={(n) => `${s.l}: ${s.fmt(n)}`}
                    sx={{ color: tokens.ink, "& .MuiSlider-thumb": { boxShadow: "none" } }}
                  />
                </Box>
              ))}
            </Stack>
          </Box>
          <Paper elevation={2} sx={{ p: 4, borderRadius: 3, border: `1px solid ${tokens.lineSoft}` }}>
            <Typography sx={{ fontFamily: fonts.mono, fontSize: 12, color: tokens.muted }}>Ingressos anuals estimats avui</Typography>
            <Typography sx={{ fontFamily: fonts.serif, fontSize: 32, fontWeight: 600, color: tokens.ink, mb: 2 }}>{eur(current * 12)}€</Typography>
            <Box sx={{ borderRadius: 2, bgcolor: `${tokens.teal}0e`, border: `1px solid ${tokens.teal}33`, p: 2 }}>
              <Typography sx={{ fontFamily: fonts.mono, fontSize: 12, color: tokens.teal }}>Escenari: +30% de conversió</Typography>
              <Typography sx={{ fontFamily: fonts.serif, fontSize: 34, fontWeight: 700, color: tokens.teal }}>+{eur(delta * 12)}€/any</Typography>
            </Box>
            <Typography sx={{ fontFamily: fonts.mono, fontSize: 10.5, color: tokens.muted, mt: 2 }}>
              {"Suposició visible, no un benchmark citat ni una promesa. El +30% és un escenari il·lustratiu; la teva xifra real surt del diagnòstic, amb dades de la teva botiga."}
            </Typography>
            <Button component="a" href="#diagnostico" variant="contained" color="primary" fullWidth sx={{ mt: 2, borderRadius: 2 }}>
              Reserva el teu diagnòstic <Box component="span" sx={{ ml: 0.75 }}>→</Box>
            </Button>
          </Paper>
        </Box>
      </Container>
    </Box>
  )
}

/* ---------- FAQ (MUI accordion) + testimonios ---------- */
const FAQS = [
  { q: "He de migrar la meva botiga?", a: "No. Treballo sobre la teva plataforma actual, sigui Shopify o WooCommerce. I si estàs en una altra, l'auditoria et diu igualment on estàs deixant vendes." },
  { q: "La IA s'inventa coses? L'agent pot donar preus falsos?", a: "L'agent està ancorat al teu catàleg real per RAG: només respon amb les teves dades de producte, preu i estoc. Si no sap alguna cosa, ho diu i ho escala a una persona." },
  { q: "Treballes sol? Podràs amb el meu projecte?", a: "Sí. Treballo sol i expressament: parles sempre amb qui implementa, sense gestors de compte pel mig. I bona part de l'operativa funciona automatitzada, així que el meu temps va al teu projecte." },
  { q: "Quant costa?", a: "Cada botiga és diferent, així que no hi ha tarifes de catàleg: el preu surt del diagnòstic, amb un pla prioritzat perquè sàpigues què pagues i per què." },
  { q: "Què inclou el diagnòstic?", a: "Quatre respostes ràpides per part teva i una anàlisi de la teva botiga per part meva: on se t'escapen les vendes i un pla de trànsit, conversió i automatització. En 24-48 h i sense compromís." },
]
function Faq() {
  return (
    <Box component="section" sx={{ py: { xs: 8, md: 12 }, borderBottom: `1px solid ${tokens.lineSoft}` }}>
      <Container sx={{ maxWidth: 760 }}>
        <Reveal>
          <Typography variant="h2" sx={{ fontSize: { xs: 28, md: 40 }, color: tokens.ink, mb: 5 }}>El que sempre em pregunten.</Typography>
        </Reveal>
        {FAQS.map((f, i) => (
          <Accordion key={i} disableGutters elevation={0} square sx={{ bgcolor: "transparent", borderBottom: `1px solid ${tokens.line}`, "&:before": { display: "none" } }}>
            <AccordionSummary sx={{ px: 0, "& .MuiAccordionSummary-content": { my: 2 } }} expandIcon={<Box sx={{ color: tokens.bronze, fontSize: 22, fontWeight: 300 }}>+</Box>}>
              <Typography sx={{ fontWeight: 700, fontSize: 17, color: tokens.ink }}>{f.q}</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ px: 0, pb: 2 }}>
              <Typography variant="body2" sx={{ color: tokens.body }}>{f.a}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Container>
    </Box>
  )
}

export default function HomeMuiCa() {
  return (
    <Box sx={{ bgcolor: tokens.paper, color: tokens.body, fontFamily: fonts.sans }}>
      <SiteHeader />
      {/* TOFU · atención: promesa y confianza mínima; la oferta entra pronto */}
      <Hero />
      <ClientShowcase />
      <Services />
      {/* MOFU · consideración: dolor → solución → plataforma → palanca estrella → método */}
      <Problems />
      <Solutions />
      <PlatformsBlock />
      <DondeTrabajo />
      <AgentShowcase />
      <Methodology />
      {/* BOFU · decisión: prueba real → herramienta de decisión → objeciones → manifiesto → único CTA */}
      <FeaturedCases id="casos" title="Botigues que creixen sobre la seva pròpia plataforma." slugs={["marea-es", "farmacia-garcia-del-cerro", "totfinestra"]} />
      <RoiCalc />
      <Faq />
      <StatementBand title="Enginyeria, no fum. Al servei de fer que la teva botiga vengui més." photo="/assets/gen/photo-estudio.png" />
      <DiagnosticoCTA />
      <SiteFooter />
    </Box>
  )
}
