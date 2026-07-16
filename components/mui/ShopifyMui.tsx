"use client"

import { useState, useEffect } from "react"
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
import { siShopify } from "simple-icons"
import { tokens, fonts } from "@/lib/mui/theme"
import { SiteHeader, SiteFooter, DiagnosticoCTA, ServiceHero, StatementBand, Reveal, ArtifactWindow, Crumbs } from "@/components/mui/shared"
import { BlockGlyph, EsNoMark, type GlyphName } from "@/components/mui/landingGlyphs"
import { FrenosSection } from "@/components/mui/landingSections"
import { UnnecessaryApps, AuditFindings } from "@/components/mui/artifacts"

/* ---------- artefacto: ficha con schema en verde y velocidad ---------- */

function SchemaSpeed() {
  const reduce = useReducedMotion()
  const checks = [["precio", "12,90 €"], ["disponibilidad", "en stock"], ["valoración", "4,8 / 5"]]
  return (
    <ArtifactWindow tag="ficha · schema en verde + velocidad" ratio="16 / 10">
      <Box sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
        <Box sx={{ flex: 1, minHeight: 0, display: "grid", gridTemplateColumns: "0.9fr 1.1fr", gap: 1.5 }}>
          {/* ficha de producto */}
          <Stack spacing={0.75} sx={{ border: `1px solid ${tokens.lineSoft}`, borderRadius: 2, bgcolor: tokens.win, p: 1.25, minWidth: 0 }}>
            <Box sx={{ aspectRatio: "4 / 3", borderRadius: 1.5, bgcolor: "#E7EAE6", display: "grid", placeItems: "center" }}>
              <Box component="svg" viewBox="0 0 24 24" sx={{ width: 26, height: 26 }} aria-hidden>
                <path d="M3 17l5-5 4 4 3-3 6 6M4 4h16v16H4z" fill="none" stroke={tokens.muted} strokeWidth="1.4" strokeLinejoin="round" />
              </Box>
            </Box>
            <Typography sx={{ fontSize: 12, fontWeight: 700, color: tokens.ink }}>Producto</Typography>
            <Typography sx={{ fontFamily: fonts.mono, fontSize: 12, fontWeight: 700, color: tokens.teal }}>12,90 €</Typography>
            <Box sx={{ mt: 0.25, textAlign: "center", borderRadius: 1.25, bgcolor: `#${siShopify.hex}`, py: 0.5 }}>
              <Typography sx={{ fontSize: 11, fontWeight: 700, color: "#fff" }}>Añadir</Typography>
            </Box>
          </Stack>
          {/* schema validado + velocidad */}
          <Stack spacing={1} sx={{ minWidth: 0 }}>
            <Typography sx={{ fontFamily: fonts.mono, fontSize: 10, color: tokens.muted }}>datos estructurados</Typography>
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
                <Typography sx={{ fontFamily: fonts.mono, fontSize: 10, color: tokens.muted }}>velocidad móvil</Typography>
                <Typography sx={{ fontFamily: fonts.mono, fontSize: 10.5, fontWeight: 700, color: tokens.teal }}>rápida</Typography>
              </Stack>
              <Box sx={{ height: 6, borderRadius: 999, bgcolor: tokens.surface, overflow: "hidden" }}>
                <Box component={motion.div} initial={reduce ? { width: "88%" } : { width: 0 }} whileInView={{ width: "88%" }} viewport={{ once: true }} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                  sx={{ height: "100%", borderRadius: 999, bgcolor: tokens.teal }} />
              </Box>
            </Box>
          </Stack>
        </Box>
        <Typography sx={{ fontFamily: fonts.mono, fontSize: 9.5, color: tokens.muted, mt: 1 }}>
          esquema ilustrativo · el estado real de tu ficha sale del diagnóstico
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
    <ArtifactWindow tag="URLs · autoridad repartida" ratio="16 / 11">
      <Box sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
        <Stack spacing={0.6}>
          <Box sx={rowSx}>
            <Typography sx={{ fontFamily: fonts.mono, fontSize: { xs: 9.5, md: 10.5 }, color: tokens.muted, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>/collections/relojes/products/automatico-acero</Typography>
            <Typography sx={{ fontFamily: fonts.mono, fontSize: 8.5, color: tokens.muted, bgcolor: tokens.surface, borderRadius: 999, px: 0.7, py: 0.15, whiteSpace: "nowrap", flexShrink: 0 }}>enlazada desde el tema</Typography>
          </Box>
          <Stack direction="row" spacing={0.6} sx={{ alignItems: "center", pl: 0.5 }}>
            <Box component="svg" viewBox="0 0 24 24" sx={{ width: 13, height: 13 }} fill="none" stroke={tokens.petrol} strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M12 4v13M7 12l5 5 5-5" /></Box>
            <Typography sx={{ fontFamily: fonts.mono, fontSize: 8.5, color: tokens.petrol }}>canonical</Typography>
          </Stack>
          <Box sx={{ ...rowSx, borderColor: `${tokens.petrol}44` }}>
            <Typography sx={{ fontFamily: fonts.mono, fontSize: { xs: 9.5, md: 10.5 }, color: tokens.petrol, fontWeight: 700, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>/products/automatico-acero</Typography>
            <Typography sx={{ fontFamily: fonts.mono, fontSize: 8.5, color: tokens.petrol, bgcolor: `${tokens.petrol}12`, borderRadius: 999, px: 0.7, py: 0.15, whiteSpace: "nowrap", flexShrink: 0 }}>canónica</Typography>
          </Box>
        </Stack>
        <Box sx={{ mt: "auto", pt: 1.5 }}>
          <Stack direction="row" sx={{ justifyContent: "space-between", alignItems: "baseline", mb: 0.5 }}>
            <Typography sx={{ fontFamily: fonts.mono, fontSize: 9.5, color: tokens.muted }}>autoridad de enlace</Typography>
            <Typography sx={{ fontFamily: fonts.mono, fontSize: 9.5, fontWeight: 700, color: fixed ? tokens.teal : tokens.muted }}>{fixed ? "consolidada" : "repartida"}</Typography>
          </Stack>
          <Box sx={{ display: "flex", gap: 0.5, height: 10, borderRadius: 999, bgcolor: tokens.surface, overflow: "hidden", p: "1px" }}>
            <Box component={motion.div} animate={{ width: fixed ? "0%" : "52%" }} transition={{ duration: reduce ? 0 : 0.7, ease: [0.22, 1, 0.36, 1] }} sx={{ height: "100%", borderRadius: 999, bgcolor: tokens.muted }} />
            <Box component={motion.div} animate={{ width: fixed ? "100%" : "40%" }} transition={{ duration: reduce ? 0 : 0.7, ease: [0.22, 1, 0.36, 1] }} sx={{ height: "100%", borderRadius: 999, bgcolor: tokens.petrol }} />
          </Box>
        </Box>
        <Typography sx={{ fontFamily: fonts.mono, fontSize: 9, color: tokens.muted, mt: 1.25 }}>el canonical apunta bien, la autoridad se reparte igual · se corrige en el tema</Typography>
      </Box>
    </ArtifactWindow>
  )
}

// Reutiliza el artefacto de apps de la Home, con cifras en hueco [[ dato ]].
function AppsArtifact() {
  return (
    <ArtifactWindow tag="apps · coste real" ratio="4 / 3">
      <Box sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
        <Box sx={{ flex: 1, minHeight: 0 }}>
          <UnnecessaryApps bare tag="apps instaladas · [[ dato ]]" more="+ [[ dato ]] más…" loadTag="carga +2,4s" total="[[ dato ]]€/mes" />
        </Box>
        <Typography sx={{ fontFamily: fonts.mono, fontSize: 9, color: tokens.muted, mt: 1 }}>ejemplo ilustrativo · el coste y la carga reales salen del diagnóstico</Typography>
      </Box>
    </ArtifactWindow>
  )
}

const AUDIT_FINDINGS: { t: string; tag: string; red?: boolean }[] = [
  { t: "Enlazado interno a URL de colección", tag: "alto", red: true },
  { t: "Schema de producto sin offers", tag: "alto", red: true },
  { t: "Apps sin uso cargando JS", tag: "medio" },
  { t: "Colecciones de tag indexadas", tag: "medio" },
]

/* ---------- datos ---------- */

const FRENOS: readonly (readonly [string, string, GlyphName])[] = [
  ["URLs duplicadas de colección y producto", "Shopify genera dos rutas para el mismo producto: la limpia (/products/) y la que arrastra la colección (/collections/.../products/). El canonical apunta bien, pero el enlazado interno de la mayoría de temas reparte la autoridad entre las dos versiones. Se corrige en el tema, no con una app.", "fork-urls"],
  ["Apps que se acumulan y frenan la tienda", "Cada app inyecta su JavaScript, y muchas dejan código huérfano al desinstalarse. El resultado es una tienda que carga lenta en móvil, justo donde ocurren la mayoría de tus visitas. La solución no es un tema nuevo: es limpiar lo que sobra y medir lo que queda.", "apps-weight"],
  ["Datos estructurados incompletos", "Muchos temas traen un schema de producto básico o roto: sin precio visible para Google, sin disponibilidad, sin valoraciones. Eso te resta resultados enriquecidos en Google y te resta citabilidad cuando una IA busca qué recomendar.", "schema"],
  ["Páginas de tag y colecciones thin", "Las etiquetas de producto generan páginas de colección filtrada con poco contenido que compiten entre sí. Bien gestionadas son long-tail; sin gestionar son ruido que diluye el rastreo.", "thin-pages"],
  ["Un checkout que no puedes tocar, y lo que sí puedes", "En los planes estándar el checkout de Shopify no se personaliza a nivel de código. La conversión se gana antes: ficha de producto, carrito, confianza, velocidad y un Shop Pay bien aprovechado. Ahí es donde el CRO tiene recorrido real.", "checkout-lock"],
]

const TRABAJO: readonly (readonly [string, string, GlyphName])[] = [
  ["SEO técnico sobre tu tema", "La auditoría entra en el Liquid de tu tema: enlazado interno hacia URLs canónicas, jerarquía de colecciones, metafields para enriquecer fichas, robots.txt.liquid afinado, schema de producto completo y velocidad real en móvil. Trabajo sobre tu tema actual y documento cada cambio.", "code-theme"],
  ["Que la IA te cite (GEO)", "Cada vez más clientes preguntan a ChatGPT o Perplexity dónde comprar. Shopify renderiza en servidor, así que los bots de IA leen tu tienda sin problema si nadie los bloquea. Verifico el acceso de GPTBot, ClaudeBot y PerplexityBot, publico tu llms.txt y estructuro fichas y FAQs para que sean citables, no solo indexables.", "ai-cite"],
  ["CRO donde Shopify sí lo permite", "El trabajo de conversión se concentra donde tienes control total: ficha de producto, carrito, propuestas de valor, señales de confianza y fricción de formularios. Hipótesis medibles sobre tus datos, no rediseños por gusto.", "cro-funnel"],
  ["Agente de ventas IA y automatización", "El agente responde dudas de producto, recomienda y acompaña hasta el checkout, conectado a tu catálogo real de Shopify. Y los procesos que te comen horas (avisos de stock, seguimiento de carritos, sincronización con tu CRM) pasan a correr solos con flujos que quedan en tu propiedad.", "agent-flow"],
]

const FAQS = [
  { q: "¿Se puede hacer SEO avanzado en Shopify o está limitado?", a: "Se puede. Shopify tiene límites conocidos (estructura de URLs fija, robots parcialmente editable), pero el 90% del SEO que mueve ventas (enlazado interno, contenido de colección, schema, velocidad, arquitectura) se trabaja perfectamente desde el tema. La limitación real suele ser el tema, no la plataforma." },
  { q: "¿Las apps están frenando mi tienda?", a: "Probablemente alguna sí. Cada app añade peso y varias dejan restos al desinstalarse. En el diagnóstico mido cuánto pesa cada script y qué aporta cada app a la venta. Lo habitual es poder eliminar varias sin perder ninguna función." },
  { q: "¿Necesito Shopify Plus para mejorar la conversión?", a: "Para la mayoría de tiendas, no. Plus desbloquea la personalización del checkout, pero casi todo el margen de conversión está antes del checkout: ficha, carrito, confianza y velocidad. Primero se exprime eso; Plus se plantea cuando los números lo justifican." },
  { q: "¿Puede ChatGPT recomendar mi tienda Shopify?", a: "Sí, si puede leerla y entenderla. Shopify sirve HTML renderizado, así que la base es buena. Falta que ningún firewall bloquee a los bots de IA, que tus fichas respondan preguntas reales y que la información de tu marca sea consistente. Eso es lo que trabajo en la parte de GEO." },
  { q: "¿Tengo que migrar de plataforma para crecer?", a: "No. Una migración es cara, arriesgada para el SEO y casi nunca es el cuello de botella. Mi trabajo es exactamente el contrario: sacar más ventas de la plataforma y el tráfico que ya tienes." },
]

/* ---------- secciones ---------- */

function Hero() {
  return (
    <ServiceHero
      title="Agencia Shopify: más ventas sobre la tienda que ya tienes."
      sub="Trabajo tiendas Shopify que ya facturan y quieren facturar más sin cambiar de plataforma. Nada de migraciones ni de rehacer la tienda: SEO técnico, IA, conversión y automatización sobre tu tema actual."
      specs={[
        ["plataforma", "Shopify y Shopify Plus"],
        ["enfoque", "SEO técnico · GEO · CRO"],
        ["propiedad", "tu tema y tus flujos, tuyos"],
      ]}
      note="El camino más corto no es migrar: es exprimir lo que ya funciona."
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
    ["Agente de ventas IA", "/servicios/agente-ventas-ia"],
    ["Automatización", "/servicios/automatizaciones"],
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
                No te voy a proponer salir de Shopify. Si tu tienda factura ahí, el camino más corto es optimizar lo que ya funciona. Todo lo que toco queda documentado y es tuyo: el tema, los flujos de automatización y los datos. Si mañana dejamos de trabajar juntos, no pierdes nada.
              </Typography>
            </Box>
          </Reveal>
          <Reveal delay={0.1}>
            <Box sx={{ position: "relative", borderRadius: 3, overflow: "hidden", border: `1px solid ${tokens.line}`, aspectRatio: "16 / 11" }}>
              <Image src="/assets/gen/photo-shopify.png" alt="Optimizando una tienda Shopify sobre su tema actual" fill sizes="(max-width: 900px) 100vw, 44vw" style={{ objectFit: "cover" }} />
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
                Tu tienda Shopify ya vende y notas que el techo no es el producto sino la ejecución: tráfico que no convierte, fichas que no posicionan, apps que nadie controla. También si facturas bien pero cada mejora depende de un freelance distinto y nada queda documentado.
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
                Buscas montar la tienda desde cero, quieres resultados en dos semanas o lo que necesitas es más tráfico de pago sin tocar la tienda. Para eso hay perfiles mejores que yo, y te lo diré en el diagnóstico sin hacerte perder tiempo.
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
                <Typography sx={{ fontFamily: fonts.mono, fontSize: 12.5, color: tokens.muted, textAlign: "center" }}>{`[[ caso Shopify: marca + métrica real confirmada ]]`}</Typography>
              </Box>
            </Reveal>
          ))}
        </Box>
        <Reveal>
          <Button component={Link} href="/casos-de-exito" sx={{ color: tokens.ink, fontWeight: 700, px: 0, "&:hover": { bgcolor: "transparent", color: tokens.petrol } }}>
            El detalle de cada trabajo está en los casos de éxito <Box component="span" sx={{ color: tokens.petrol, ml: 0.5 }}>↗</Box>
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
            En cada proyecto hablas directamente con el experto en Shopify que implementa, no con un gestor de cuenta. Diagnóstico con tus datos, plan priorizado por impacto y ejecución sobre tu tienda, con Roger en backend cuando el proyecto lo pide.
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
            Preguntas frecuentes sobre SEO y CRO en Shopify.
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

export default function ShopifyMui() {
  return (
    <Box sx={{ bgcolor: tokens.paper, color: tokens.body, fontFamily: fonts.sans }}>
      <SiteHeader />
      <Crumbs items={[{ label: "Agencia Shopify" }]} />
      <Hero />
      <FrenosSection
        title="Lo que suele frenar las ventas en Shopify."
        intro="Después de auditar tiendas Shopify se repiten los mismos patrones. Te los cuento sin humo, porque casi ninguno se resuelve instalando otra app."
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
      <Bloques title="Cómo optimizo tu tienda Shopify." intro="El Pack Crecimiento ecommerce aplicado a Shopify une cuatro frentes. Cada pieza funciona sola, juntas se multiplican." items={TRABAJO} numbered
        closing={<AuditFindings tag="auditoría Shopify · ejemplo" findings={AUDIT_FINDINGS} foot="hallazgos de ejemplo · los tuyos salen del diagnóstico" />} />
      <Relacionados />
      <SinMigrar />
      <ParaQuien />
      <StatementBand title="La limitación real casi nunca es Shopify. Es el tema, las apps y que nadie lo trabaja." photo="/assets/gen/photo-shopify.png" />
      <Resultados />
      <MetodoLink />
      <Faq />
      <DiagnosticoCTA />
      <SiteFooter />
    </Box>
  )
}
