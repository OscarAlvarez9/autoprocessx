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
import Accordion from "@mui/material/Accordion"
import AccordionSummary from "@mui/material/AccordionSummary"
import AccordionDetails from "@mui/material/AccordionDetails"
import { tokens, fonts } from "@/lib/mui/theme"
import { RoasChart, StoreTemplate, Funnel, Gauge, DatosIntuicion, StockDesync, N8nFlow, ConversionChart, UnnecessaryApps, ToolsScatter } from "@/components/mui/artifacts"
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
            SEO y optimización para <Box component="em" sx={{ fontStyle: "italic", color: tokens.petrol }}>tiendas online</Box>, del dato a la implementación.
          </Typography>
          <Typography variant="body1" sx={{ fontSize: { xs: 16, md: 18 }, color: tokens.body, maxWidth: 620, mx: "auto", mb: 4 }}>
            Soy Óscar Álvarez, analista de datos y consultor SEO de ecommerce. Analizo dónde pierde oportunidades tu tienda y trabajo el posicionamiento, la conversión y el catálogo, desde el diagnóstico hasta la implementación y sobre tu plataforma actual.
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


// Automatización: un flujo que corre solo. Pipeline horizontal con logos
// oficiales, pulso viajando entre nodos y log de ejecución con checks.
function AutoArt() {
  const reduce = useReducedMotion()
  const NODES = [
    { path: siShopify.path, hex: siShopify.hex, label: "Shopify", sub: "pedido" },
    { path: null as string | null, hex: null as string | null, label: "código", sub: "Node/Python" },
    { path: siWoocommerce.path, hex: siWoocommerce.hex, label: "WooCommerce", sub: "stock" },
  ]
  const LOG = ["stock sincronizado en las dos tiendas", "fichas nuevas creadas en borrador"]
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
        <Typography sx={{ fontFamily: fonts.mono, fontSize: 9.5, color: tokens.muted }}>corre solo, el código es tuyo</Typography>
      </Stack>
    </MiniWindow>
  )
}

// Auditoría: un informe con hallazgos priorizados por impacto. Rojo urgente,
// gris menor. Es la personalidad de "documento con todo lo que mejorar".
function AuditArt() {
  const reduce = useReducedMotion()
  const FINDINGS = [
    { t: "Ficha de producto sin schema", tag: "alto", sev: tokens.red },
    { t: "Un paso de más en el checkout", tag: "fuga", sev: tokens.red },
    { t: "Sin eventos en el carrito", tag: "medio", sev: tokens.muted },
    { t: "Landing lenta en móvil", tag: "medio", sev: tokens.muted },
  ]
  return (
    <MiniWindow tag="auditoría · informe" right={<Typography sx={{ fontFamily: fonts.mono, fontSize: 10, color: tokens.muted }}>priorizado</Typography>}>
      <Stack spacing={0.6} sx={{ width: "100%" }}>
        <Typography sx={{ fontFamily: fonts.mono, fontSize: 9.5, color: tokens.muted }}>hallazgos por impacto en ventas</Typography>
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


/* ---------- Tres áreas de trabajo ---------- */
// Lo que antes eran cinco cards por pack ahora son las tres necesidades del
// cliente. Los packs y servicios siguen existiendo: cada área enlaza a su
// página, y las herramientas (agente, automatización, a medida) se nombran
// debajo como medios, no como titulares.
type Area = { result: string; badge: string; how: string; chips: string[]; cta: string; href: string; artifact: React.ReactNode; meta?: string }
function FunnelMini() {
  return (
    <MiniWindow tag="conversión · embudo" right={<Typography sx={{ fontFamily: fonts.mono, fontSize: 10, color: tokens.muted }}>medido</Typography>}>
      <Box sx={{ width: "100%", height: "100%" }}><Funnel /></Box>
    </MiniWindow>
  )
}
const AREAS: Area[] = [
  { badge: "01", result: "Visibilidad", how: "Que Google entienda y posicione tus categorías y fichas: SEO técnico, arquitectura de la tienda y contenidos que responden a lo que busca tu cliente.", chips: ["SEO técnico", "Arquitectura y categorías", "Fichas y contenidos", "Buscadores con IA"], cta: "Empezar por la auditoría", href: "/servicios/auditoria-seo-geo", artifact: <AuditArt /> },
  { badge: "02", result: "Conversión", how: "Encontrar dónde se pierde la venta y corregirlo: medición fiable, detección de fricciones en ficha, carrito y checkout, y mejoras de la experiencia de compra.", chips: ["Analítica y eventos", "Fricciones", "UX/UI de compra", "Medición antes y después"], cta: "Ver crecimiento ecommerce", href: "/servicios/crecimiento-ecommerce", artifact: <FunnelMini /> },
  { badge: "03", result: "Operativa de catálogo", how: "Datos de producto limpios y procesos que no dependen de cargar fichas a mano: altas, fotos, variantes, categorías y stock.", chips: ["Calidad de datos", "Gestión de productos", "Automatizaciones", "Integraciones"], cta: "Ver el sistema de catálogo", href: "/servicios/automatizacion-gestion-productos", artifact: <AutoArt /> },
]

// Card de servicio: misma anatomía en todas, tamaño según jerarquía comercial.
function ServiceCard({ s, featured }: { s: Area; featured?: boolean }) {
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
        aria-label="Áreas de trabajo"
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

function Areas() {
  const [vis, conv, cat] = AREAS
  const linkSx = { color: tokens.ink, fontWeight: 600, textDecoration: "underline", textDecorationColor: tokens.line, "&:hover": { textDecorationColor: tokens.petrol } }
  return (
    <Box component="section" id="areas" sx={{ py: { xs: 8, md: 12 }, borderBottom: `1px solid ${tokens.lineSoft}`, scrollMarginTop: 72 }}>
      <Container>
        <Reveal>
          <Box sx={{ maxWidth: 680, mb: { xs: 5, md: 7 } }}>
            <Typography variant="h2" sx={{ fontSize: { xs: 28, md: 40 }, color: tokens.ink, mb: 2 }}>
              Tres frentes donde una tienda online gana o pierde ventas.
            </Typography>
            <Typography variant="body1" sx={{ color: tokens.body }}>
              Trabajo los tres con el mismo método y, si hace falta, a la vez. Por dónde empezar lo deciden tus datos, no una lista de servicios.
            </Typography>
          </Box>
        </Reveal>
        <Stack spacing={2.5}>
          {/* Móvil: carrusel snap con las tres áreas. */}
          <Reveal>
            <LooseCarousel items={[
              <ServiceCard key="vis" s={vis} />,
              <ServiceCard key="conv" s={conv} />,
              <ServiceCard key="cat" s={cat} />,
            ]} />
          </Reveal>
          {/* Desktop: fila de tres columnas. */}
          <Box sx={{ display: { xs: "none", sm: "grid" }, gridTemplateColumns: { sm: "1fr 1fr", md: "1fr 1fr 1fr" }, gap: 2.5 }}>
            <Reveal delay={0.06}><ServiceCard s={vis} /></Reveal>
            <Reveal delay={0.12}><ServiceCard s={conv} /></Reveal>
            <Reveal delay={0.18}><ServiceCard s={cat} /></Reveal>
          </Box>
          <Reveal delay={0.1}>
            <Typography variant="body2" sx={{ color: tokens.muted, maxWidth: 760, pt: 1 }}>
              Para implementar, uso lo que el problema pide:{" "}
              <Box component={Link} href="/servicios/automatizaciones" sx={linkSx}>automatizaciones</Box>, integraciones con el ERP o el proveedor, un{" "}
              <Box component={Link} href="/servicios/agente-ventas-ia" sx={linkSx}>agente de ventas conectado al catálogo</Box> o una{" "}
              <Box component={Link} href="/servicios/a-medida" sx={linkSx}>aplicación a medida</Box>. Son herramientas para resolver uno de estos tres frentes, no un fin en sí mismas.
            </Typography>
          </Reveal>
        </Stack>
      </Container>
    </Box>
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
// Seis problemas concretos, dos por cada área de trabajo (visibilidad,
// conversión y catálogo), en ese orden.
function Problems() {
  return (
    <Box component="section" sx={{ py: { xs: 8, md: 12 }, borderBottom: `1px solid ${tokens.lineSoft}` }}>
      <Container>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1.1fr 0.9fr" }, gap: { xs: 4, md: 7 }, alignItems: "center", mb: { xs: 5, md: 7 } }}>
          <Reveal>
            <Box>
              <Typography variant="h2" sx={{ fontSize: { xs: 28, md: 40 }, color: tokens.ink, maxWidth: 620, mb: 2 }}>
                Dónde suele perder ventas una tienda online.
              </Typography>
              <Typography variant="body1" sx={{ color: tokens.body, maxWidth: 520 }}>
                Casi nunca es un solo problema. Suele ser una mezcla de páginas que Google no entiende, fricciones al comprar y un catálogo que cuesta mantener.
              </Typography>
            </Box>
          </Reveal>
          <Reveal delay={0.1}>
            <Box sx={{ position: "relative", borderRadius: 3, overflow: "hidden", border: `1px solid ${tokens.line}`, aspectRatio: "16 / 9" }}>
              <Image src="/assets/gen/photo-dueno.png" alt="Dueño de tienda online gestionando pedidos a última hora" fill sizes="(max-width: 900px) 100vw, 44vw" style={{ objectFit: "cover" }} />
            </Box>
          </Reveal>
        </Box>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "1fr 1fr 1fr" }, gap: 2.5 }}>
          <ProblemCard title="Categorías y fichas que no posicionan" desc="Contenido duplicado, filtros que generan URLs sin fin o fichas sin datos estructurados. Google no sabe qué página enseñar.">
            <ArtifactWindow tag="tienda · fichas" ratio="4 / 3"><StoreTemplate /></ArtifactWindow>
          </ProblemCard>
          <ProblemCard title="Depender cada mes de los anuncios" desc="Si casi todas las ventas llegan pagando, cada subida del coste por clic se come el margen. El tráfico orgánico no se paga por visita.">
            <ArtifactWindow tag="roas · 12 meses" ratio="4 / 3"><RoasChart /></ArtifactWindow>
          </ProblemCard>
          <ProblemCard title="Una tienda lenta en el móvil" desc="Las páginas pesadas posicionan peor y hacen que el cliente se vaya antes de ver el producto.">
            <ArtifactWindow tag="core web vitals" ratio="4 / 3"><Gauge /></ArtifactWindow>
          </ProblemCard>
          <ProblemCard title="Cambios hechos sin datos" desc="Se tocan textos, colores y botones por intuición, sin medir dónde se abandona: en la ficha, en el carrito o en el checkout.">
            <ArtifactWindow tag="cambios · a ciegas" ratio="4 / 3"><DatosIntuicion /></ArtifactWindow>
          </ProblemCard>
          <ProblemCard title="Stock y datos de producto descuadrados" desc="El almacén dice una cosa y la web otra. Se venden productos sin existencias y hay que anular pedidos.">
            <ArtifactWindow tag="stock · almacén vs tienda" ratio="4 / 3"><StockDesync /></ArtifactWindow>
          </ProblemCard>
          <ProblemCard title="Apps y plugins que se solapan" desc="Varias apps de pago que hacen casi lo mismo, frenan la web y no se hablan entre sí.">
            <ArtifactWindow tag="apps · terceros" ratio="4 / 3"><UnnecessaryApps /></ArtifactWindow>
          </ProblemCard>
        </Box>
      </Container>
    </Box>
  )
}


/* ---------- Método ---------- */
const METHOD_STEPS: ScrollStep[] = [
  { label: "Analizar", meta: "con tus datos", title: "Analizar", tag: "análisis · tus datos", desc: "Reviso tu tienda con tus datos reales: Search Console, analítica, mapas de calor y el propio catálogo. Busco dónde se pierden visitas, ventas y horas de trabajo.", artifact: <ToolsScatter /> },
  { label: "Priorizar", meta: "por impacto", title: "Priorizar", tag: "plan · por impacto", desc: "Ordeno lo que encuentro por impacto y esfuerzo. Sales con un plan claro de qué hacer primero, sigamos trabajando juntos o no.", artifact: <AuditArt /> },
  { label: "Implementar", meta: "sobre tu plataforma", title: "Implementar", tag: "implementación · tu plataforma", desc: "Hago yo los cambios sobre tu plataforma actual: SEO técnico, mejoras de conversión, automatizaciones de catálogo o integraciones. El código queda en tu poder.", artifact: <N8nFlow /> },
  { label: "Medir", meta: "y ajustar", title: "Medir", tag: "medición · antes y después", desc: "Compruebo con datos si cada cambio ha funcionado y ajusto lo que no. Te digo qué está medido y qué sigue siendo un objetivo.", artifact: <ConversionChart /> },
]
function Methodology() {
  return (
    <ScrollSteps
      id="metodo"
      title="Mi método: analizar, priorizar, implementar y medir."
      subtitle="Un único responsable de principio a fin. Hablas siempre con quien hace el trabajo."
      steps={METHOD_STEPS}
    />
  )
}


/* ---------- Plataformas (interactivo) ---------- */
function PlatformsBlock() {
  const cards = [
    { anchor: "Agencia Shopify", path: siShopify.path, hex: siShopify.hex, href: "/agencia-shopify" },
    { anchor: "Agencia WooCommerce", path: siWoocommerce.path, hex: siWoocommerce.hex, href: "/agencia-woocommerce" },
  ]
  return (
    <Box component="section" sx={{ py: { xs: 8, md: 12 }, borderBottom: `1px solid ${tokens.lineSoft}` }}>
      <Container>
        <Reveal>
          <Typography variant="h2" sx={{ fontSize: { xs: 28, md: 40 }, color: tokens.ink, maxWidth: 640, mb: 1.5 }}>
            Trabajo sobre tu plataforma. No te hago migrar.
          </Typography>
          <Typography variant="body1" sx={{ color: tokens.body, mb: { xs: 4, md: 5 }, maxWidth: 580 }}>
            Me integro sobre lo que ya tienes. Estoy especializado en las dos plataformas que mueven el ecommerce en España:
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
                  <Typography component="span" sx={{ display: "block", fontSize: 14, color: tokens.body }}>SEO técnico, GEO y CRO sobre tu tema actual.</Typography>
                </Box>
                <Box className="plat-arrow" component="span" sx={{ color: tokens.petrol, fontFamily: fonts.mono, fontSize: 17, flexShrink: 0, transition: "transform .2s" }}>→</Box>
              </Paper>
            </Reveal>
          ))}
        </Box>
        <Reveal>
          <Typography variant="body2" sx={{ color: tokens.muted, mt: 2.5, maxWidth: 640 }}>
            ¿<Box component={Link} href="/agencia-magento" sx={{ color: tokens.ink, fontWeight: 600, textDecoration: "underline", textDecorationColor: tokens.line, "&:hover": { textDecorationColor: tokens.petrol } }}>Magento</Box> u otra plataforma? La{" "}
            <Box component={Link} href="/servicios/auditoria-seo-geo" sx={{ color: tokens.ink, fontWeight: 600, textDecoration: "underline", textDecorationColor: tokens.line, "&:hover": { textDecorationColor: tokens.petrol } }}>auditoría SEO/GEO</Box>{" "}
            y la automatización trabajan sobre cualquier stack.
          </Typography>
        </Reveal>
      </Container>
    </Box>
  )
}

// Dónde trabajo: las páginas locales, enlazadas desde la home. Seis enlaces y
// no treinta pueblos: un bloque con decenas de enlaces a páginas finas es lo
// que Google describe como doorway. El resto de municipios vive dentro de
// sus hubs (Maresme y Vallès Oriental).
const ZONAS = [
  { t: "Barcelona", d: "SEO local, Google Maps y tiendas online en la ciudad.", href: "/consultor-seo-barcelona" },
  { t: "el Maresme", d: "Toda la comarca, de Montgat a Malgrat de Mar.", href: "/agencia-seo-maresme" },
  { t: "el Vallès Oriental", d: "Granollers, Mollet, Cardedeu y el resto de la comarca.", href: "/consultor-seo-valles-oriental" },
  { t: "Mataró", d: "Capital del Maresme: en Google, en el mapa y en ChatGPT.", href: "/consultor-seo-mataro" },
  { t: "Premià de Mar", d: "Donde tengo la base, en el Maresme.", href: "/consultor-seo-premia-de-mar" },
  { t: "Granollers", d: "Comercio, servicios e industria del Vallès.", href: "/consultor-seo-granollers" },
]

function DondeTrabajo() {
  const linkSx = { color: tokens.ink, fontWeight: 600, textDecoration: "underline", textDecorationColor: tokens.line, "&:hover": { textDecorationColor: tokens.petrol } }
  return (
    <Box component="section" sx={{ py: { xs: 8, md: 12 }, borderBottom: `1px solid ${tokens.lineSoft}` }}>
      <Container>
        <Reveal>
          <Typography variant="h2" sx={{ fontSize: { xs: 28, md: 40 }, color: tokens.ink, maxWidth: 680, mb: 1.5 }}>
            Consultor SEO en Barcelona, el Maresme y el Vallès.
          </Typography>
          <Typography variant="body1" sx={{ color: tokens.body, mb: { xs: 4, md: 5 }, maxWidth: 600 }}>
            Trabajo desde Premià de Mar para tiendas online y negocios locales. Que te encuentren en Google, en el mapa y en ChatGPT cuando buscan lo que haces cerca de ellos.
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
                    SEO en {z.t}
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
            Y en{" "}
            <Box component={Link} href="/seo-catalunya" sx={linkSx}>toda Catalunya</Box>. Si lo que quieres es que ChatGPT y Google AI citen tu marca, mira el{" "}
            <Box component={Link} href="/posicionamiento-geo" sx={linkSx}>posicionamiento GEO</Box>.
          </Typography>
        </Reveal>
      </Container>
    </Box>
  )
}

/* ---------- Sobre Óscar ---------- */
// Solo hechos publicados en el portfolio (máster, base en Premià). Sin años ni
// cifras nuevas.
function SobreMi() {
  const filas: [string, string][] = [
    ["formación", "Analista de datos, con un máster en Big Data."],
    ["trabajo", "SEO, analítica, CRO y desarrollo de automatizaciones e integraciones."],
    ["cómo", "Solo, sin gestores de cuenta: hablas con quien implementa."],
    ["dónde", "Desde Premià de Mar, para tiendas de toda España."],
  ]
  return (
    <Box component="section" id="sobre-mi" sx={{ py: { xs: 8, md: 12 }, borderBottom: `1px solid ${tokens.lineSoft}`, scrollMarginTop: 72 }}>
      <Container>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1.1fr 0.9fr" }, gap: { xs: 4, md: 8 }, alignItems: "start" }}>
          <Reveal>
            <Box>
              <Typography variant="h2" sx={{ fontSize: { xs: 28, md: 40 }, color: tokens.ink, mb: 2.5 }}>
                Datos, SEO y la capacidad de implementarlo.
              </Typography>
              <Typography variant="body1" sx={{ color: tokens.body, mb: 2, maxWidth: 560 }}>
                Soy analista de datos y consultor especializado en ecommerce. Combino SEO, analítica y desarrollo para detectar problemas e implementar soluciones.
              </Typography>
              <Typography variant="body1" sx={{ color: tokens.body, mb: 3.5, maxWidth: 560 }}>
                No me quedo en la auditoría ni en una lista de recomendaciones. Si el problema es técnico, de conversión o de catálogo, puedo desarrollar e implantar la mejora o el sistema que hace falta, y medir después si ha funcionado.
              </Typography>
              <Button component={Link} href="/portfolio-oscar-alvarez" sx={{ color: tokens.ink, fontWeight: 700, px: 0, "&:hover": { bgcolor: "transparent", color: tokens.petrol } }}>
                Ver mi portfolio <Box component="span" sx={{ color: tokens.petrol, ml: 0.5 }}>↗</Box>
              </Button>
            </Box>
          </Reveal>
          <Reveal delay={0.08}>
            <Box component="dl" sx={{ m: 0, borderTop: `1px solid ${tokens.line}` }}>
              {filas.map(([k, v]) => (
                <Box key={k} sx={{ display: "grid", gridTemplateColumns: "96px 1fr", gap: 2, py: 2, borderBottom: `1px solid ${tokens.line}` }}>
                  <Typography component="dt" sx={{ fontFamily: fonts.mono, fontSize: 12.5, color: tokens.muted, pt: 0.3 }}>{k}</Typography>
                  <Typography component="dd" sx={{ m: 0, color: tokens.ink, fontWeight: 600 }}>{v}</Typography>
                </Box>
              ))}
            </Box>
          </Reveal>
        </Box>
      </Container>
    </Box>
  )
}


/* ---------- FAQ ---------- */
const FAQS = [
  { q: "¿Solo haces auditorías o también lo implementas?", a: "Las dos cosas. El diagnóstico te dice qué falla y en qué orden atacarlo. Si quieres, después lo implemento yo: cambios técnicos de SEO, mejoras de conversión o automatizaciones del catálogo." },
  { q: "¿Tengo que migrar mi tienda?", a: "No. Trabajo sobre tu plataforma actual, sea Shopify o WooCommerce. Si estás en otra, el diagnóstico te dice igualmente dónde estás dejando ventas." },
  { q: "¿Me garantizas posiciones o ventas?", a: "No. Las posiciones y las ventas dependen de tu mercado, tu competencia y tu punto de partida. Lo que sí hago es medir antes y después de cada cambio y enseñarte qué ha funcionado y qué no." },
  { q: "¿Trabajas solo? ¿Podrás con mi proyecto?", a: "Sí. Trabajo solo y a propósito: hablas siempre con quien implementa, sin gestores de cuenta por medio. Si un proyecto necesita más manos de las que tengo, te lo digo antes de empezar." },
  { q: "¿Cuánto cuesta?", a: "Cada tienda es distinta, así que no hay tarifas de catálogo: el precio sale del diagnóstico, con un plan priorizado para que sepas qué pagas y por qué." },
  { q: "¿Qué incluye el diagnóstico?", a: "Cuatro respuestas rápidas por tu parte y un análisis de tu tienda por la mía: dónde se te escapan visitas y ventas, y qué haría primero en visibilidad, conversión y catálogo. En 24 a 48 horas y sin compromiso." },
]

function Faq() {
  return (
    <Box component="section" sx={{ py: { xs: 8, md: 12 }, borderBottom: `1px solid ${tokens.lineSoft}` }}>
      <Container sx={{ maxWidth: 760 }}>
        <Reveal>
          <Typography variant="h2" sx={{ fontSize: { xs: 28, md: 40 }, color: tokens.ink, mb: 5 }}>Lo que me preguntan siempre.</Typography>
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

export default function HomeMui() {
  return (
    <Box sx={{ bgcolor: tokens.paper, color: tokens.body, fontFamily: fonts.sans }}>
      <SiteHeader />
      <Hero />
      <ClientShowcase />
      <Problems />
      <Areas />
      <PlatformsBlock />
      <Methodology />
      <FeaturedCases id="casos" title="Proyectos reales, con lo que se hizo y lo que se midió." slugs={["marea-es", "farmacia-garcia-del-cerro", "totfinestra"]} />
      <SobreMi />
      <Faq />
      <DondeTrabajo />
      <StatementBand title="Del dato a la implementación, con un único responsable." photo="/assets/gen/photo-estudio.png" />
      <DiagnosticoCTA />
      <SiteFooter />
    </Box>
  )
}
