"use client"

import { useEffect, useState } from "react"
import { motion, useReducedMotion } from "motion/react"
import Box from "@mui/material/Box"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import Paper from "@mui/material/Paper"
import { siNodedotjs, siPython, siShopify, siWoocommerce, siGooglesheets, siWhatsapp, siMeta, siGoogle } from "simple-icons"
import { tokens, fonts } from "@/lib/mui/theme"

/* ---------- helpers ---------- */
function Frame({ tag, right, minH, children }: { tag: string; right?: React.ReactNode; minH?: number; children: React.ReactNode }) {
  return (
    <Paper elevation={2} sx={{ borderRadius: 3, overflow: "hidden", border: `1px solid ${tokens.lineSoft}`, bgcolor: tokens.win }}>
      <Stack direction="row" spacing={1.25} sx={{ alignItems: "center", px: 2, py: 1.25, borderBottom: `1px solid ${tokens.lineSoft}` }}>
        <Stack direction="row" spacing={0.75}>
          {[0, 1, 2].map((d) => <Box key={d} sx={{ width: 9, height: 9, borderRadius: 999, bgcolor: "#D8DAD6" }} />)}
        </Stack>
        <Typography sx={{ fontFamily: fonts.mono, fontSize: 11.5, color: tokens.muted }}>{tag}</Typography>
        {right && <Box sx={{ ml: "auto" }}>{right}</Box>}
      </Stack>
      <Box sx={{ minHeight: minH }}>{children}</Box>
    </Paper>
  )
}

function LivePill({ label = "en vivo" }: { label?: string }) {
  const reduce = useReducedMotion()
  return (
    <Stack direction="row" spacing={0.75} sx={{ alignItems: "center" }}>
      <Box component={motion.span} animate={reduce ? {} : { opacity: [1, 0.35, 1] }} transition={{ duration: 1.4, repeat: Infinity }} sx={{ width: 7, height: 7, borderRadius: 999, bgcolor: tokens.teal }} />
      <Typography sx={{ fontFamily: fonts.mono, fontSize: 10.5, color: tokens.muted }}>{label}</Typography>
    </Stack>
  )
}

/* ============================================================
   FlowRunSimulator · canvas n8n + log en vivo (hero)
   ============================================================ */

const NODES = [
  { label: "Webhook", sub: "pedido", x: 12, y: 22 },
  { label: "Validar", sub: "código", x: 40, y: 22 },
  { label: "ERP", sub: "stock -1", x: 70, y: 22 },
  { label: "Stock", sub: "sync tienda", x: 70, y: 74 },
  { label: "WhatsApp", sub: "cliente", x: 40, y: 74 },
  { label: "Informe", sub: "añade fila", x: 12, y: 74 },
]
const EDGES: [number, number][] = [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5]]
const LOGLINES = [
  "09:41:02  webhook   pedido #1042",
  "09:41:02  validar   reglas de negocio · ok",
  "09:41:03  erp       stock -1 · ref SKU-1042",
  "09:41:03  tienda    142 SKUs sincronizados",
  "09:41:04  whatsapp  confirmación enviada",
  "09:41:04  informe   fila añadida · ok",
]

export function FlowRunSimulator() {
  const reduce = useReducedMotion()
  const [active, setActive] = useState(reduce ? NODES.length : 0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (reduce || paused) return
    const t = setInterval(() => setActive((a) => (a >= NODES.length ? 0 : a + 1)), 850)
    return () => clearInterval(t)
  }, [reduce, paused])

  return (
    <Box onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <Frame tag="workflow · n8n + código propio" right={<LivePill label="ejecutando" />}>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1.7fr 1fr" } }}>
          {/* canvas */}
          <Box sx={{ position: "relative", aspectRatio: "16 / 11", p: { xs: 1.5, sm: 2.5 }, borderRight: { sm: `1px solid ${tokens.lineSoft}` }, borderBottom: { xs: `1px solid ${tokens.lineSoft}`, sm: "none" }, bgcolor: "#FAFBFB" }}>
            <Box component="svg" viewBox="0 0 100 100" preserveAspectRatio="none" sx={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}>
              {EDGES.map(([a, b], i) => (
                <line key={i} x1={NODES[a].x} y1={NODES[a].y} x2={NODES[b].x} y2={NODES[b].y}
                  stroke={active > i ? tokens.teal : tokens.line} strokeWidth={0.6} />
              ))}
            </Box>
            {NODES.map((n, i) => {
              const done = i < active
              const on = i === active && active < NODES.length
              return (
                <Box key={n.label} component={motion.div}
                  animate={on && !reduce ? { scale: [1, 1.06, 1] } : { scale: 1 }}
                  transition={{ duration: 0.85, repeat: on ? Infinity : 0 }}
                  sx={{ position: "absolute", left: `${n.x}%`, top: `${n.y}%`, transform: "translate(-50%,-50%)", width: { xs: 72, sm: 92 }, px: 1, py: 0.75, borderRadius: 1.5, bgcolor: tokens.win, border: `1.5px solid ${done ? tokens.teal : on ? tokens.petrol : tokens.line}`, boxShadow: "0 4px 14px -10px rgba(27,30,34,.4)" }}>
                  <Stack direction="row" spacing={0.5} sx={{ alignItems: "center" }}>
                    <Box sx={{ width: 6, height: 6, borderRadius: 999, bgcolor: done ? tokens.teal : on ? tokens.petrol : tokens.line, flexShrink: 0 }} />
                    <Typography sx={{ fontSize: { xs: 9.5, sm: 10.5 }, fontWeight: 700, color: tokens.ink, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{n.label}</Typography>
                  </Stack>
                  <Typography sx={{ fontFamily: fonts.mono, fontSize: { xs: 8, sm: 8.5 }, color: done ? tokens.teal : tokens.muted, mt: 0.15 }}>{done ? "ok" : n.sub}</Typography>
                </Box>
              )
            })}
          </Box>
          {/* log */}
          <Box sx={{ bgcolor: "#0F1922", p: 1.5, minHeight: { xs: 120, sm: 150 } }}>
            <Stack spacing={0.4}>
              {LOGLINES.slice(0, active).map((l, i) => (
                <Box key={i} component={motion.div} initial={reduce ? false : { opacity: 0 }} animate={{ opacity: 1 }}
                  sx={{ fontFamily: fonts.mono, fontSize: { xs: 9, sm: 9.5 }, color: i === active - 1 ? "#C9D0D6" : "#8A97A3", whiteSpace: "pre" }}>
                  {l}
                </Box>
              ))}
              {active > 0 && active >= NODES.length && (
                <Typography sx={{ fontFamily: fonts.mono, fontSize: { xs: 9, sm: 9.5 }, color: tokens.teal, mt: 0.5 }}>run completado · 0 errores</Typography>
              )}
            </Stack>
          </Box>
        </Box>
        <Box sx={{ borderTop: `1px solid ${tokens.lineSoft}`, px: 2, py: 1 }}>
          <Typography sx={{ fontFamily: fonts.mono, fontSize: 10, color: tokens.muted }}>{`// se ejecuta solo, en tu servidor · hecho a mano, no generado`}</Typography>
        </Box>
      </Frame>
    </Box>
  )
}

/* ============================================================
   ManualOpsStrip · las horas que se van (agitación)
   ============================================================ */

const MANUAL = [
  { t: "Copiar pedidos al ERP a mano", h: "[[ h ]]" },
  { t: "Cuadrar el stock entre web y almacén", h: "[[ h ]]" },
  { t: "Montar el informe semanal en Excel", h: "[[ h ]]" },
  { t: "Corregir un descuadre a las 23:00", h: "[[ h ]]" },
]

export function ManualOpsStrip() {
  const reduce = useReducedMotion()
  return (
    <Frame tag="tareas a mano · cada semana">
      <Box sx={{ p: 2 }}>
        <Stack>
          {MANUAL.map((r, i) => (
            <Box key={r.t} component={motion.div} initial={reduce ? false : { opacity: 0, x: -8 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12 }}
              sx={{ display: "flex", alignItems: "center", gap: 1.5, py: 1.5, borderTop: i === 0 ? "none" : `1px solid ${tokens.lineSoft}` }}>
              <Box sx={{ width: 8, height: 8, borderRadius: 999, bgcolor: tokens.brick, flexShrink: 0 }} />
              <Typography sx={{ fontSize: 13.5, color: tokens.ink, flex: 1 }}>{r.t}</Typography>
              <Box sx={{ border: `1px solid ${tokens.brick}66`, color: tokens.brick, borderRadius: 1.5, px: 1, py: 0.25 }}>
                <Typography sx={{ fontFamily: fonts.mono, fontSize: 12, fontWeight: 700 }}>{r.h}</Typography>
              </Box>
            </Box>
          ))}
        </Stack>
        <Box sx={{ mt: 2, pt: 2, borderTop: `1px dashed ${tokens.line}`, display: "flex", alignItems: "baseline", justifyContent: "space-between" }}>
          <Typography sx={{ fontFamily: fonts.mono, fontSize: 11, color: tokens.muted }}>total a la semana</Typography>
          <Typography sx={{ fontFamily: fonts.serif, fontSize: 26, fontWeight: 600, color: tokens.brick }}>[[ X ]] h</Typography>
        </Box>
      </Box>
    </Frame>
  )
}

/* ============================================================
   CodeNodeReveal · el diferenciador (código dentro del flujo)
   ============================================================ */

const SNIPPET = [
  "// regla: envío gratis solo si el margen > 18%",
  "export function decidirEnvio(pedido) {",
  "  const coste = pedido.items.reduce(",
  "    (s, i) => s + i.coste * i.cantidad, 0)",
  "  const margen = (pedido.total - coste) / pedido.total",
  "  if (margen < 0.18)",
  "    return { envio: 'estandar', gratis: false }",
  "  if (pedido.pais !== 'ES')",
  "    return { envio: 'internacional', gratis: false }",
  "  return { envio: 'express', gratis: true }",
  "}",
]

export function CodeNodeReveal() {
  const reduce = useReducedMotion()
  const [code, setCode] = useState(true)

  const Node = ({ label, state }: { label: string; state: "ok" | "block" | "plain" }) => (
    <Box sx={{ px: 1.25, py: 0.75, borderRadius: 1.5, bgcolor: tokens.win, border: `1.5px solid ${state === "ok" ? tokens.teal : state === "block" ? tokens.brick : tokens.line}`, textAlign: "center", minWidth: 78 }}>
      <Typography sx={{ fontSize: 11.5, fontWeight: 700, color: tokens.ink, whiteSpace: "nowrap" }}>{label}</Typography>
    </Box>
  )

  return (
    <Frame
      tag="lógica · código propio en el flujo"
      right={
        <Stack direction="row" spacing={0.5} sx={{ bgcolor: tokens.surface, borderRadius: 999, p: 0.4 }}>
          {[["solo nodos", false], ["nodos + código", true]].map(([lb, v]) => (
            <Button key={String(v)} onClick={() => setCode(v as boolean)} disableRipple
              sx={{ minWidth: 0, px: { xs: 1, sm: 1.25 }, py: 0.25, borderRadius: 999, fontFamily: fonts.mono, fontSize: { xs: 9.5, sm: 10.5 }, fontWeight: 600, textTransform: "none", color: code === v ? "#fff" : tokens.muted, bgcolor: code === v ? tokens.petrol : "transparent" }}>
              {lb as string}
            </Button>
          ))}
        </Stack>
      }
    >
      <Box sx={{ p: 2 }}>
        <Stack direction="row" spacing={1.5} sx={{ alignItems: "center", justifyContent: "center", mb: 2, flexWrap: "wrap", gap: 1 }}>
          <Node label="Pedido" state="plain" />
          <Box component="span" sx={{ color: tokens.petrol }}>→</Box>
          <Node label={code ? "código propio" : "regla compleja"} state={code ? "ok" : "block"} />
          <Box component="span" sx={{ color: code ? tokens.teal : tokens.muted }}>→</Box>
          <Node label={code ? "Envío resuelto" : "bloqueado"} state={code ? "ok" : "block"} />
        </Stack>

        {code ? (
          <Box key="code" component={motion.div} initial={reduce ? false : { opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
            sx={{ bgcolor: tokens.ink, borderRadius: 2, p: 2, overflow: "auto" }}>
            {SNIPPET.map((ln, i) => (
              <Typography key={i} sx={{ fontFamily: fonts.mono, fontSize: 11.5, lineHeight: 1.7, whiteSpace: "pre", color: ln.trim().startsWith("//") ? "#6E8B84" : "#CFD6DC" }}>
                <Box component="span" sx={{ color: "#3E4A54", mr: 1.5, userSelect: "none" }}>{String(i + 1).padStart(2, "0")}</Box>{ln}
              </Typography>
            ))}
          </Box>
        ) : (
          <Box key="plain" component={motion.div} initial={reduce ? false : { opacity: 0 }} animate={{ opacity: 1 }}
            sx={{ bgcolor: tokens.surface, borderRadius: 2, p: 3, textAlign: "center", border: `1px solid ${tokens.line}` }}>
            <Typography sx={{ fontFamily: fonts.mono, fontSize: 12, color: tokens.brick, mb: 1 }}>no soportado</Typography>
            <Typography variant="body2" sx={{ color: tokens.body, maxWidth: 420, mx: "auto" }}>
              Arrastrar nodos no resuelve una regla de negocio real (márgenes, condiciones de envío, casos límite). Sin código, el flujo se queda a medias.
            </Typography>
          </Box>
        )}
        <Typography sx={{ fontFamily: fonts.mono, fontSize: 10, color: tokens.muted, mt: 1.5 }}>{`// la mayoría de agencias no escriben una línea · aquí la lógica va en Node/Python`}</Typography>
      </Box>
    </Frame>
  )
}

/* ============================================================
   StockSyncDiff · sync ERP ↔ tienda
   ============================================================ */

const SKUS = [
  { sku: "SKU-1042", erp: 142, web: 142 },
  { sku: "SKU-2087", erp: 8, web: 8 },
  { sku: "SKU-3311", erp: 51, web: 51 },
  { sku: "SKU-4590", erp: 0, web: 0 },
]

export function StockSyncDiff() {
  const reduce = useReducedMotion()
  const [tick, setTick] = useState(0)
  useEffect(() => {
    if (reduce) return
    const t = setInterval(() => setTick((v) => v + 1), 2200)
    return () => clearInterval(t)
  }, [reduce])
  const changedRow = tick % SKUS.length
  const newVal = 142 - (tick % 5) - 1

  return (
    <Frame tag="sync · ERP ↔ tienda" right={<Box sx={{ bgcolor: `${tokens.teal}25`, borderRadius: 999, px: 1.25, py: 0.35 }}><Typography sx={{ fontFamily: fonts.mono, fontSize: 11.5, fontWeight: 700, color: tokens.teal }}>0 descuadres</Typography></Box>}>
      <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 0 }}>
        {(["ERP", "Tienda"] as const).map((side) => (
          <Box key={side} sx={{ p: 1.5, borderRight: side === "ERP" ? `1px solid ${tokens.lineSoft}` : "none" }}>
            <Typography sx={{ fontFamily: fonts.mono, fontSize: 10, color: tokens.muted, mb: 1 }}>{side}</Typography>
            {SKUS.map((r, i) => {
              const hot = !reduce && i === changedRow
              const val = i === changedRow ? newVal : r.erp
              return (
                <Box key={r.sku} component={motion.div} animate={hot ? { backgroundColor: ["rgba(14,122,95,0)", "rgba(14,122,95,0.12)", "rgba(14,122,95,0)"] } : {}} transition={{ duration: 1.6 }}
                  sx={{ display: "flex", alignItems: "center", gap: 1, py: 0.75, px: 0.5, borderRadius: 1 }}>
                  <Typography sx={{ fontFamily: fonts.mono, fontSize: 11, color: tokens.ink, flex: 1 }}>{r.sku}</Typography>
                  <Typography sx={{ fontFamily: fonts.mono, fontSize: 11, fontWeight: 700, color: hot ? tokens.teal : tokens.body }}>{val}</Typography>
                  {side === "Tienda" && hot && <Box component="span" sx={{ color: tokens.teal, fontSize: 11 }}>✓</Box>}
                </Box>
              )
            })}
          </Box>
        ))}
      </Box>
    </Frame>
  )
}

/* ============================================================
   FeedBuilder · feeds de producto
   ============================================================ */

export function FeedBuilder() {
  const reduce = useReducedMotion()
  return (
    <Frame tag="feeds · catálogo → destinos">
      <Box sx={{ p: 2, display: "grid", gridTemplateColumns: "1fr auto 1fr", alignItems: "center", gap: { xs: 1, sm: 1.5 }, minHeight: 150 }}>
        <Stack spacing={0.75}>
          {["Producto A", "Producto B", "Producto C"].map((p, i) => (
            <Box key={p} component={motion.div} initial={reduce ? false : { opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}
              sx={{ border: `1px solid ${tokens.lineSoft}`, borderRadius: 1, px: 1, py: 0.6 }}>
              <Typography sx={{ fontFamily: fonts.mono, fontSize: 10.5, color: tokens.body }}>{p}</Typography>
            </Box>
          ))}
        </Stack>
        <Box sx={{ textAlign: "center" }}>
          <Box sx={{ border: `1.5px solid ${tokens.petrol}`, borderRadius: 1.5, px: 1, py: 0.75 }}>
            <Typography sx={{ fontFamily: fonts.mono, fontSize: 10, fontWeight: 700, color: tokens.petrol, whiteSpace: "nowrap" }}>transformar</Typography>
            <Typography sx={{ fontFamily: fonts.mono, fontSize: 8.5, color: tokens.muted }}>código</Typography>
          </Box>
        </Box>
        <Stack spacing={1} sx={{ alignItems: "flex-start" }}>
          {[siGoogle, siShopify, siWhatsapp].map((ic, i) => (
            <Box key={i} component={motion.div} initial={reduce ? false : { opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.5 + i * 0.12 }}
              sx={{ display: "flex", alignItems: "center", gap: 0.75 }}>
              <Box component="svg" viewBox="0 0 24 24" sx={{ width: 15, height: 15 }}><path d={ic.path} fill={tokens.muted} /></Box>
              <Typography sx={{ fontFamily: fonts.mono, fontSize: { xs: 8.5, sm: 9.5 }, color: tokens.muted }}>{i === 0 ? "Google Shopping" : i === 1 ? "Shopify" : "Catálogo WA"}</Typography>
            </Box>
          ))}
        </Stack>
      </Box>
    </Frame>
  )
}

/* ============================================================
   PostPurchaseFlow · post-compra
   ============================================================ */

const POST = ["Pedido confirmado", "Confirmación por WhatsApp", "Seguimiento del envío", "Reseña a los 7 días"]

export function PostPurchaseFlow() {
  const reduce = useReducedMotion()
  return (
    <Frame tag="post-compra · secuencia">
      <Box sx={{ p: 2, minHeight: 150 }}>
        {POST.map((s, i) => (
          <Stack key={s} direction="row" spacing={1.5} component={motion.div} initial={reduce ? false : { opacity: 0, y: 6 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.25 }}
            sx={{ alignItems: "center", py: 0.9 }}>
            <Box sx={{ width: 20, height: 20, borderRadius: 999, bgcolor: `${tokens.teal}18`, display: "grid", placeItems: "center", flexShrink: 0 }}>
              <Box component="span" sx={{ color: tokens.teal, fontSize: 11 }}>✓</Box>
            </Box>
            <Typography sx={{ fontSize: 13, color: tokens.ink }}>{s}</Typography>
          </Stack>
        ))}
      </Box>
    </Frame>
  )
}

/* ============================================================
   ReportSnippet · reporting automático
   ============================================================ */

export function ReportSnippet() {
  const reduce = useReducedMotion()
  const pts = [12, 18, 15, 22, 19, 26, 24]
  const d = pts.map((p, i) => `${(i / (pts.length - 1)) * 100},${30 - p}`).join(" ")
  return (
    <Frame tag="reporting · llega solo">
      <Box sx={{ p: 2, minHeight: 150 }}>
        <Typography sx={{ fontFamily: fonts.mono, fontSize: 10.5, color: tokens.petrol, mb: 1 }}>{`// informe semanal · ventas y stock`}</Typography>
        <Stack spacing={0.6} sx={{ mb: 2 }}>
          {["Pedidos procesados: [[ n ]]", "SKUs sin stock: [[ n ]]", "Carritos recuperados: [[ n ]]"].map((l) => (
            <Typography key={l} sx={{ fontSize: 12.5, color: tokens.body }}>{l}</Typography>
          ))}
        </Stack>
        <Box component="svg" viewBox="0 0 100 32" preserveAspectRatio="none" sx={{ width: "100%", height: 44 }}>
          <motion.polyline
            points={d} fill="none" stroke={tokens.teal} strokeWidth={1.4} strokeLinejoin="round" strokeLinecap="round"
            initial={reduce ? false : { pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 1.2 }}
          />
        </Box>
      </Box>
    </Frame>
  )
}

/* ============================================================
   RunLogConsole · cuando algo falla (fiabilidad)
   ============================================================ */

const RUNLOG = [
  { t: "09:41:02", m: "webhook · pedido #1042", st: "ok" },
  { t: "09:41:03", m: "ERP · sincronizando stock", st: "ok" },
  { t: "09:41:05", m: "ERROR · timeout ERP", st: "err" },
  { t: "09:41:05", m: "retry 1/3", st: "warn" },
  { t: "09:41:07", m: "ERP · stock sincronizado", st: "ok" },
  { t: "09:41:07", m: "alerta enviada a [[ canal ]]", st: "info" },
]

export function RunLogConsole() {
  const reduce = useReducedMotion()
  const [n, setN] = useState(reduce ? RUNLOG.length : 0)
  useEffect(() => {
    if (reduce) return
    const t = setInterval(() => setN((v) => (v >= RUNLOG.length ? 0 : v + 1)), 800)
    return () => clearInterval(t)
  }, [reduce])
  const col = (st: string) => (st === "ok" ? tokens.teal : st === "err" ? tokens.brick : st === "warn" ? tokens.bronze : "#8A97A3")
  return (
    <Frame tag="ejecución · monitorización" right={<LivePill label="reintentos + alertas" />}>
      <Box sx={{ p: 2, bgcolor: "#0F1922", minHeight: 210 }}>
        <Stack spacing={0.4}>
          {RUNLOG.slice(0, n).map((l, i) => (
            <Box key={i} component={motion.div} initial={reduce ? false : { opacity: 0 }} animate={{ opacity: 1 }}
              sx={{ display: "flex", gap: 1.5, fontFamily: fonts.mono, fontSize: 11.5 }}>
              <Box component="span" sx={{ color: "#5C6773" }}>{l.t}</Box>
              <Box component="span" sx={{ color: col(l.st), flex: 1 }}>{l.m}</Box>
            </Box>
          ))}
        </Stack>
      </Box>
    </Frame>
  )
}

/* ============================================================
   BulkProductSim · inyección de stock + descripciones en masa
   ============================================================ */

const BULK = [
  { n: "Automático Acero", stock: "3 uds" },
  { n: "Cronógrafo Piel", stock: "7 uds" },
  { n: "Diver 200m", stock: "2 uds" },
  { n: "Minimal 38mm", stock: "12 uds" },
  { n: "Clásico Oro 40mm", stock: "5 uds" },
  { n: "Deportivo GMT", stock: "9 uds" },
]

export function BulkProductSim() {
  const reduce = useReducedMotion()
  const [i, setI] = useState(reduce ? BULK.length : 0)
  useEffect(() => {
    if (reduce) return
    const t = setInterval(() => setI((v) => (v >= BULK.length ? 0 : v + 1)), 720)
    return () => clearInterval(t)
  }, [reduce])
  const pct = Math.round((i / BULK.length) * 100)
  return (
    <Frame tag="marea.es · enriquecido masivo" right={<LivePill label={`${i}/${BULK.length}`} />}>
      <Box sx={{ p: 2 }}>
        <Box sx={{ height: 8, borderRadius: 999, bgcolor: tokens.surface, overflow: "hidden", mb: 2 }}>
          <Box component={motion.div} animate={{ width: `${pct}%` }} transition={{ duration: 0.5 }} sx={{ height: "100%", bgcolor: tokens.teal }} />
        </Box>
        <Box sx={{ display: "grid", gridTemplateColumns: "1.5fr 0.7fr 1fr", px: 1, pb: 0.75, borderBottom: `1px solid ${tokens.lineSoft}` }}>
          {["producto", "stock", "descripción"].map((h) => <Typography key={h} sx={{ fontFamily: fonts.mono, fontSize: 10, color: tokens.muted }}>{h}</Typography>)}
        </Box>
        {BULK.map((r, k) => {
          const done = k < i
          const now = k === i
          return (
            <Box key={r.n} sx={{ display: "grid", gridTemplateColumns: "1.5fr 0.7fr 1fr", alignItems: "center", px: 1, py: 0.9, borderBottom: `1px solid ${tokens.lineSoft}` }}>
              <Typography sx={{ fontSize: 12.5, color: done ? tokens.ink : tokens.muted }}>{r.n}</Typography>
              <Typography sx={{ fontFamily: fonts.mono, fontSize: 11, color: done ? tokens.teal : tokens.muted }}>{done ? r.stock : "·"}</Typography>
              <Typography sx={{ fontFamily: fonts.mono, fontSize: 10.5, color: done ? tokens.teal : now ? tokens.bronze : tokens.muted }}>{done ? "✓ generada" : now ? "generando…" : "en cola"}</Typography>
            </Box>
          )
        })}
      </Box>
      <Box sx={{ borderTop: `1px solid ${tokens.lineSoft}`, px: 2, py: 1 }}>
        <Typography sx={{ fontFamily: fonts.mono, fontSize: 10, color: tokens.muted }}>{`// inyección de stock + descripciones IA, todo el catálogo en lote`}</Typography>
      </Box>
    </Frame>
  )
}

/* ============================================================
   AutomationRail · stack (Simple Icons, gris) + n8n
   ============================================================ */

const RAIL = [
  { icon: siNodedotjs, label: "Node.js" },
  { icon: siPython, label: "Python" },
  { icon: siShopify, label: "Shopify" },
  { icon: siWoocommerce, label: "WooCommerce" },
  { icon: siGooglesheets, label: "Sheets" },
  { icon: siGoogle, label: "Google Shopping" },
  { icon: siWhatsapp, label: "WhatsApp" },
  { icon: siMeta, label: "Meta" },
]

const N8N_PINK = "#EA4B71" // color oficial de n8n

export function AutomationRail() {
  return (
    <Stack direction="row" spacing={{ xs: 2.5, md: 3.5 }} sx={{ alignItems: "center", justifyContent: { xs: "flex-start", md: "center" }, flexWrap: "wrap", rowGap: 2 }}>
      <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
        <Box sx={{ px: 0.75, py: 0.15, borderRadius: 1, border: `1px solid ${N8N_PINK}55` }}>
          <Typography sx={{ fontFamily: fonts.mono, fontSize: 12, fontWeight: 700, color: N8N_PINK }}>n8n</Typography>
        </Box>
        <Typography sx={{ fontSize: 13, fontWeight: 600, color: tokens.ink }}>orquestación</Typography>
      </Stack>
      {RAIL.map((b) => (
        <Stack key={b.label} direction="row" spacing={1} sx={{ alignItems: "center" }}>
          <Box component="svg" role="img" aria-label={b.label} viewBox="0 0 24 24" sx={{ width: 20, height: 20 }}>
            <path d={b.icon.path} fill={`#${b.icon.hex}`} />
          </Box>
          <Typography sx={{ fontSize: 13, fontWeight: 600, color: tokens.ink }}>{b.label}</Typography>
        </Stack>
      ))}
    </Stack>
  )
}
