"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useReducedMotion } from "motion/react"
import Box from "@mui/material/Box"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import Paper from "@mui/material/Paper"
import { siShopify, siWoocommerce, siPrestashop, siBigcommerce, siWhatsapp } from "simple-icons"
import { tokens, fonts } from "@/lib/mui/theme"

const WA = "#25D366" // verde WhatsApp, solo dentro del mockup de ese canal

/* ============================================================
   Helpers compartidos
   ============================================================ */

// Reloj dibujado a mano (marea.es es relojería).
function WatchGlyph({ size = 26, hand = tokens.bronze }: { size?: number; hand?: string }) {
  return (
    <Box component="svg" viewBox="0 0 40 40" sx={{ width: size, height: size }} aria-hidden>
      <circle cx="20" cy="20" r="10" fill="#fff" stroke={tokens.ink} strokeWidth="2" />
      <rect x="17" y="4" width="6" height="4" rx="1" fill={tokens.muted} />
      <rect x="17" y="32" width="6" height="4" rx="1" fill={tokens.muted} />
      <line x1="20" y1="20" x2="20" y2="14" stroke={tokens.ink} strokeWidth="1.6" strokeLinecap="round" />
      <line x1="20" y1="20" x2="24" y2="22" stroke={hand} strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="31" cy="20" r="1.6" fill={tokens.muted} />
    </Box>
  )
}

// Ventana de artefacto autocontenida (barra + tag + slot derecho opcional).
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

function Dots() {
  const reduce = useReducedMotion()
  return (
    <Stack direction="row" spacing={0.5} sx={{ px: 1.5, py: 1.25 }}>
      {[0, 1, 2].map((d) => (
        <Box
          key={d}
          component={motion.span}
          animate={reduce ? {} : { opacity: [0.3, 1, 0.3], y: [0, -2, 0] }}
          transition={{ duration: 0.9, repeat: Infinity, delay: d * 0.15 }}
          sx={{ width: 6, height: 6, borderRadius: 999, bgcolor: tokens.muted }}
        />
      ))}
    </Stack>
  )
}

const CATALOG = [
  { id: "acero", n: "Automático Acero", p: "249€", stock: "3 uds", ok: true },
  { id: "crono", n: "Cronógrafo Piel", p: "199€", stock: "7 uds", ok: true },
  { id: "diver", n: "Diver 200m", p: "320€", stock: "2 uds", ok: true },
  { id: "minimal", n: "Minimal 38mm", p: "agotado", stock: "0 uds", ok: false },
]
const byId = (id: string) => CATALOG.find((c) => c.id === id)!

function ProductCard({ id }: { id: string }) {
  const p = byId(id)
  return (
    <Stack direction="row" spacing={1.25} sx={{ alignItems: "center", bgcolor: tokens.win, border: `1px solid ${tokens.lineSoft}`, borderRadius: 2, p: 0.75 }}>
      <Box sx={{ width: 36, height: 36, borderRadius: 1.5, bgcolor: "#E7EAE6", display: "grid", placeItems: "center", flexShrink: 0 }}>
        <WatchGlyph size={26} />
      </Box>
      <Box sx={{ flex: 1, minWidth: 0 }}>
        <Typography sx={{ fontSize: 12.5, fontWeight: 700, color: tokens.ink, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{p.n}</Typography>
        <Typography sx={{ fontFamily: fonts.mono, fontSize: 10.5, color: tokens.muted }}>{p.p}</Typography>
      </Box>
      <Box sx={{ border: `1px solid ${tokens.red}`, color: tokens.red, borderRadius: 1.5, px: 1, py: 0.35 }}>
        <Typography sx={{ fontFamily: fonts.mono, fontSize: 10.5, fontWeight: 700 }}>Añadir</Typography>
      </Box>
    </Stack>
  )
}

function Bubble({ side, tint, children }: { side: "user" | "agent"; tint?: "wa"; children: React.ReactNode }) {
  const isUser = side === "user"
  const bg = tint === "wa" ? (isUser ? "#DCF8C6" : "#fff") : isUser ? "#EEF0EC" : "#F4FAF7"
  const border = tint === "wa" ? `1px solid ${tokens.lineSoft}` : isUser ? "none" : `1px solid ${tokens.teal}22`
  return (
    <Box
      sx={{
        alignSelf: isUser ? "flex-end" : "flex-start", maxWidth: "86%",
        bgcolor: bg, border, borderRadius: isUser ? "14px 14px 4px 14px" : "14px 14px 14px 4px",
        px: 1.5, py: 1.1, width: "fit-content",
      }}
    >
      {children}
    </Box>
  )
}

/* ============================================================
   5.1 · AgentChatSimulator (pieza estrella del hero)
   ============================================================ */

type Step = { k: "user" | "agent" | "typing" | "cart"; text?: string; products?: string[] }

const SCRIPT: Step[] = [
  { k: "user", text: "Busco un reloj automático para el día a día, sobre 250€." },
  { k: "typing" },
  { k: "agent", text: "Automáticos en ese rango, te van estos dos:", products: ["acero", "crono"] },
  { k: "user", text: "¿Y para regalo? Algo con más presencia." },
  { k: "typing" },
  { k: "agent", text: "Para regalo luce mucho el Cronógrafo Piel, con caja premium.", products: ["crono"] },
  { k: "cart", text: "Añadido al carrito" },
  { k: "typing" },
  { k: "agent", text: "Te lo dejo listo en el carrito. Envío en 24h, ¿seguimos?" },
]

export function AgentChatSimulator() {
  const reduce = useReducedMotion()
  const [i, setI] = useState(reduce ? SCRIPT.length : 1)
  const [paused, setPaused] = useState(false)
  const scRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (reduce || paused) return
    const t = setInterval(() => setI((v) => (v >= SCRIPT.length ? 1 : v + 1)), 1350)
    return () => clearInterval(t)
  }, [reduce, paused])

  useEffect(() => {
    if (scRef.current) scRef.current.scrollTop = scRef.current.scrollHeight
  }, [i])

  const shown = reduce ? SCRIPT.filter((s) => s.k !== "typing") : SCRIPT.slice(0, i)
  const cart = shown.filter((s) => s.k === "cart").length

  const cartBadge = (
    <Stack direction="row" spacing={0.75} sx={{ alignItems: "center" }}>
      <Box component="span" sx={{ fontSize: 13 }}>🛒</Box>
      {cart > 0 && (
        <Box component={motion.span} key={cart} initial={reduce ? false : { scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ type: "spring", stiffness: 400, damping: 18 }}
          sx={{ minWidth: 16, height: 16, px: 0.5, borderRadius: 999, bgcolor: tokens.red, color: "#fff", fontFamily: fonts.mono, fontSize: 10, fontWeight: 700, display: "grid", placeItems: "center" }}>
          {cart}
        </Box>
      )}
    </Stack>
  )

  return (
    <Box onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <Frame tag="agente · marea.es" right={cartBadge} minH={0}>
        <Box ref={scRef} sx={{ height: { xs: 300, sm: 340 }, overflowY: "auto", p: 2, display: "flex", flexDirection: "column", gap: 1.1 }}>
          {shown.map((s, idx) => {
            if (s.k === "typing") {
              if (idx !== shown.length - 1) return null
              return <Bubble key="typing" side="agent"><Dots /></Bubble>
            }
            if (s.k === "cart") {
              return (
                <Box key={idx} component={motion.div} initial={reduce ? false : { scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
                  sx={{ alignSelf: "center", display: "inline-flex", alignItems: "center", gap: 0.75, bgcolor: tokens.teal, color: "#fff", borderRadius: 1.5, px: 1.25, py: 0.5 }}>
                  <Typography sx={{ fontSize: 11, fontWeight: 700 }}>✓ {s.text}</Typography>
                </Box>
              )
            }
            return (
              <Box key={idx} component={motion.div} initial={reduce ? false : { opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }} sx={{ display: "flex", flexDirection: "column", alignItems: s.k === "user" ? "flex-end" : "flex-start" }}>
                <Bubble side={s.k === "user" ? "user" : "agent"}>
                  <Typography sx={{ fontSize: 13.5, color: tokens.ink, mb: s.products ? 1 : 0 }}>{s.text}</Typography>
                  {s.products && (
                    <Stack spacing={0.75}>
                      {s.products.map((pid) => <ProductCard key={pid} id={pid} />)}
                    </Stack>
                  )}
                </Bubble>
              </Box>
            )
          })}
        </Box>
        <Box sx={{ borderTop: `1px solid ${tokens.lineSoft}`, px: 2, py: 1 }}>
          <Typography sx={{ fontFamily: fonts.mono, fontSize: 10, color: tokens.muted }}>
            {`// anclado al catálogo · si no sé el stock, lo digo`}
          </Typography>
        </Box>
      </Frame>
    </Box>
  )
}

/* ============================================================
   5.2 · GroundingViz (el diferenciador: no se lo inventa)
   ============================================================ */

export function GroundingViz() {
  const reduce = useReducedMotion()
  const [mode, setMode] = useState<"in" | "out">("in")
  const usedId = "acero"

  return (
    <Frame tag="grounding · respuesta anclada al catálogo">
      <Box sx={{ p: 2 }}>
        <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
          {(["in", "out"] as const).map((m) => (
            <Button key={m} onClick={() => setMode(m)} disableRipple
              sx={{ px: { xs: 1, sm: 1.5 }, py: 0.5, borderRadius: 999, minWidth: 0, fontFamily: fonts.mono, fontSize: { xs: 10.5, sm: 11.5 }, fontWeight: 600, textTransform: "none",
                color: mode === m ? "#fff" : tokens.body, bgcolor: mode === m ? tokens.petrol : "transparent", border: `1px solid ${mode === m ? tokens.petrol : tokens.line}`,
                "&:hover": { bgcolor: mode === m ? tokens.petrol : tokens.surface } }}>
              {m === "in" ? "En catálogo" : "Fuera de catálogo"}
            </Button>
          ))}
        </Stack>

        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1.1fr 1fr" }, gap: 1.5, alignItems: "center" }}>
          {/* Pregunta */}
          <Bubble side="user">
            <Typography sx={{ fontSize: 13, color: tokens.ink }}>
              {mode === "in" ? "¿Tenéis un automático de acero sobre 250€?" : "¿Tenéis correas de titanio?"}
            </Typography>
          </Bubble>

          {/* Catálogo */}
          <Box sx={{ border: `1px solid ${tokens.line}`, borderRadius: 2, overflow: "hidden" }}>
            <Typography sx={{ fontFamily: fonts.mono, fontSize: 10, color: tokens.muted, px: 1.25, py: 0.75, borderBottom: `1px solid ${tokens.lineSoft}`, bgcolor: tokens.surface }}>catálogo · tiempo real</Typography>
            {CATALOG.map((c) => {
              const on = mode === "in" && c.id === usedId
              return (
                <Box key={c.id} component={motion.div} animate={on && !reduce ? { backgroundColor: ["rgba(14,122,95,0)", "rgba(14,122,95,0.10)"] } : {}} transition={{ duration: 0.6 }}
                  sx={{ display: "flex", alignItems: "center", gap: 1, px: 1.25, py: 0.85, borderBottom: `1px solid ${tokens.lineSoft}`, borderLeft: `2px solid ${on ? tokens.teal : "transparent"}` }}>
                  <WatchGlyph size={18} />
                  <Typography sx={{ fontSize: 11.5, color: tokens.ink, flex: 1 }}>{c.n}</Typography>
                  <Typography sx={{ fontFamily: fonts.mono, fontSize: 11, color: tokens.body }}>{c.p}</Typography>
                  <Typography sx={{ fontFamily: fonts.mono, fontSize: 10, color: c.ok ? tokens.teal : tokens.muted, width: 42, textAlign: "right" }}>{c.stock}</Typography>
                </Box>
              )
            })}
          </Box>

          {/* Respuesta */}
          {mode === "in" ? (
            <Bubble side="agent">
              <Typography sx={{ fontSize: 13, color: tokens.ink }}>
                Sí: el <b>Automático Acero</b> a 249€, quedan 3 uds. Te lo dejo en el carrito.
              </Typography>
              <Typography sx={{ fontFamily: fonts.mono, fontSize: 9.5, color: tokens.teal, mt: 0.75 }}>fuente: catálogo · fila usada</Typography>
            </Bubble>
          ) : (
            <Box>
              <Bubble side="agent">
                <Typography sx={{ fontSize: 13, color: tokens.ink }}>
                  No tengo ese dato ahora mismo. Te lo confirmo con el equipo antes de prometerte nada.
                </Typography>
                <Typography sx={{ fontFamily: fonts.mono, fontSize: 9.5, color: tokens.muted, mt: 0.75 }}>sin coincidencia en catálogo · no inventa</Typography>
              </Bubble>
              <Box sx={{ mt: 1, display: "inline-flex", alignItems: "center", gap: 0.75, border: `1px solid ${tokens.petrol}`, color: tokens.petrol, borderRadius: 1.5, px: 1, py: 0.5 }}>
                <Typography sx={{ fontFamily: fonts.mono, fontSize: 10.5, fontWeight: 700 }}>→ derivar a humano</Typography>
              </Box>
            </Box>
          )}
        </Box>
      </Box>
    </Frame>
  )
}

/* ============================================================
   5.3 · DualChannel (web ↔ WhatsApp, mismo agente)
   ============================================================ */

const DUAL_MSGS = [
  { side: "user" as const, text: "¿El Automático Acero llega antes del viernes?" },
  { side: "agent" as const, text: "Sí, pedido hoy lo tienes el jueves. Quedan 3 uds." },
]

export function DualChannel() {
  const [ch, setCh] = useState<"web" | "wa">("web")
  const reduce = useReducedMotion()
  const wa = ch === "wa"
  return (
    <Frame
      tag={wa ? "canal · WhatsApp" : "canal · web"}
      right={
        <Stack direction="row" spacing={0.5} sx={{ bgcolor: tokens.surface, borderRadius: 999, p: 0.4 }}>
          {(["web", "wa"] as const).map((c) => (
            <Button key={c} onClick={() => setCh(c)} disableRipple sx={{ minWidth: 0, px: 1.25, py: 0.25, borderRadius: 999, fontFamily: fonts.mono, fontSize: 10.5, fontWeight: 600, textTransform: "none", color: ch === c ? "#fff" : tokens.muted, bgcolor: ch === c ? (c === "wa" ? WA : tokens.petrol) : "transparent" }}>
              {c === "web" ? "Web" : "WhatsApp"}
            </Button>
          ))}
        </Stack>
      }
    >
      <Box sx={{ p: 2, display: "grid", placeItems: "center" }}>
        <Box
          component={motion.div}
          key={ch}
          initial={reduce ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          sx={{ width: "100%", maxWidth: wa ? 300 : { xs: "100%", sm: 420 }, borderRadius: wa ? 5 : 2, border: `1px solid ${tokens.line}`, overflow: "hidden", bgcolor: wa ? "#ECE5DD" : tokens.win }}
        >
          {/* cabecera del "traje" del canal */}
          <Stack direction="row" spacing={1} sx={{ alignItems: "center", px: 1.5, py: 1, bgcolor: wa ? WA : tokens.surface, borderBottom: `1px solid ${tokens.lineSoft}` }}>
            <Box sx={{ width: 22, height: 22, borderRadius: 999, bgcolor: wa ? "#ffffff33" : tokens.win, display: "grid", placeItems: "center" }}>
              <WatchGlyph size={15} />
            </Box>
            <Typography sx={{ fontSize: 12, fontWeight: 700, color: wa ? "#fff" : tokens.ink }}>marea.es</Typography>
            <Typography sx={{ fontFamily: fonts.mono, fontSize: 9.5, color: wa ? "#ffffffcc" : tokens.muted, ml: "auto" }}>{wa ? "en línea" : "asistente · web"}</Typography>
          </Stack>
          <Stack spacing={1} sx={{ p: 1.5, minHeight: 150 }}>
            {DUAL_MSGS.map((m, k) => (
              <Box key={k} sx={{ alignSelf: m.side === "user" ? "flex-end" : "flex-start", maxWidth: "88%" }}>
                <Box sx={{ px: 1.25, py: 0.85, borderRadius: 2, bgcolor: wa ? (m.side === "user" ? "#DCF8C6" : "#fff") : (m.side === "user" ? "#EEF0EC" : "#F4FAF7"), border: wa ? "none" : `1px solid ${m.side === "user" ? "transparent" : `${tokens.teal}22`}` }}>
                  <Typography sx={{ fontSize: 12.5, color: tokens.ink }}>{m.text}</Typography>
                  <Stack direction="row" spacing={0.5} sx={{ justifyContent: "flex-end", alignItems: "center", mt: 0.25 }}>
                    <Typography sx={{ fontFamily: fonts.mono, fontSize: 8.5, color: tokens.muted }}>{k === 0 ? "12:04" : "12:04"}</Typography>
                    {wa && m.side === "user" && <Box component="span" sx={{ fontSize: 10, color: "#34B7F1", lineHeight: 1 }}>✓✓</Box>}
                  </Stack>
                </Box>
              </Box>
            ))}
          </Stack>
        </Box>
        <Typography sx={{ fontFamily: fonts.mono, fontSize: 10, color: tokens.muted, mt: 1.5 }}>{`// mismo cerebro, dos canales`}</Typography>
      </Box>
    </Frame>
  )
}

/* ============================================================
   5.4 · AovLiftMeter / CvrMeter (impacto en ventas, ilustrativo)
   ============================================================ */

function Meter({ tag, before, after, lift, fill }: { tag: string; before: string; after: string; lift: string; fill: number }) {
  const reduce = useReducedMotion()
  return (
    <Frame tag={tag}>
      <Box sx={{ p: 3 }}>
        <Stack direction="row" spacing={1.5} sx={{ alignItems: "baseline", mb: 2 }}>
          <Typography sx={{ fontFamily: fonts.serif, fontSize: 26, color: tokens.muted }}>{before}</Typography>
          <Box component="span" sx={{ color: tokens.petrol }}>→</Box>
          <Typography sx={{ fontFamily: fonts.serif, fontSize: 34, fontWeight: 600, color: tokens.ink }}>{after}</Typography>
          <Box sx={{ ml: "auto", bgcolor: `${tokens.teal}18`, color: tokens.teal, borderRadius: 999, px: 1, py: 0.35 }}>
            <Typography sx={{ fontFamily: fonts.mono, fontSize: 12.5, fontWeight: 700 }}>{lift}</Typography>
          </Box>
        </Stack>
        <Box sx={{ height: 8, borderRadius: 999, bgcolor: tokens.surface, overflow: "hidden" }}>
          <Box component={motion.div} initial={reduce ? false : { width: 0 }} whileInView={{ width: `${fill}%` }} viewport={{ once: true }} transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }} sx={{ height: "100%", bgcolor: tokens.teal }} />
        </Box>
        <Typography sx={{ fontFamily: fonts.mono, fontSize: 10, color: tokens.muted, mt: 1.5 }}>{`// ilustrativo, no una promesa · dato real en el diagnóstico`}</Typography>
      </Box>
    </Frame>
  )
}

export function AovLiftMeter() {
  return <Meter tag="ticket medio (AOV)" before="[[ AOV antes ]]" after="[[ AOV después ]]" lift="+[[ % ]] ticket" fill={74} />
}
export function CvrMeter() {
  return <Meter tag="conversión de la tienda" before="[[ CVR antes ]]" after="[[ CVR después ]]" lift="+[[ % ]] ventas" fill={66} />
}

/* ============================================================
   5.5 · CartRecovery (recuperación de carrito)
   ============================================================ */

const RECOVERY = [
  { side: "sys" as const, text: "Carrito abandonado · Automático Acero (249€)", t: "18:40" },
  { side: "agent" as const, text: "Vi que dejaste el Automático Acero en el carrito. Quedan 3 uds, ¿te lo guardo?", t: "19:10" },
  { side: "user" as const, text: "Sí, porfa. ¿Envío en 24h?", t: "19:12" },
  { side: "agent" as const, text: "Hecho. Pedido listo, llega mañana.", t: "19:12" },
]

export function CartRecovery() {
  const reduce = useReducedMotion()
  return (
    <Frame tag="recuperación de carrito">
      <Box sx={{ p: 2, display: "flex", flexDirection: "column", gap: 1.1, minHeight: 260 }}>
        {RECOVERY.map((m, k) => {
          if (m.side === "sys") {
            return (
              <Box key={k} component={motion.div} initial={reduce ? false : { opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: k * 0.5 }}
                sx={{ alignSelf: "center", bgcolor: tokens.surface, border: `1px solid ${tokens.lineSoft}`, borderRadius: 1.5, px: 1.25, py: 0.5 }}>
                <Typography sx={{ fontFamily: fonts.mono, fontSize: 10.5, color: tokens.muted }}>{m.text}</Typography>
              </Box>
            )
          }
          return (
            <Box key={k} component={motion.div} initial={reduce ? false : { opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: k * 0.5 }}
              sx={{ alignSelf: m.side === "user" ? "flex-end" : "flex-start", maxWidth: "86%" }}>
              <Box sx={{ px: 1.5, py: 1, borderRadius: m.side === "user" ? "14px 14px 4px 14px" : "14px 14px 14px 4px", bgcolor: m.side === "user" ? "#EEF0EC" : "#F4FAF7", border: m.side === "user" ? "none" : `1px solid ${tokens.teal}22` }}>
                <Typography sx={{ fontSize: 13, color: tokens.ink }}>{m.text}</Typography>
                <Typography sx={{ fontFamily: fonts.mono, fontSize: 8.5, color: tokens.muted, textAlign: "right", mt: 0.25 }}>{m.t}</Typography>
              </Box>
            </Box>
          )
        })}
        <Box component={motion.div} initial={reduce ? false : { scale: 0.8, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }} transition={{ delay: RECOVERY.length * 0.5, type: "spring", stiffness: 300, damping: 16 }}
          sx={{ alignSelf: "center", mt: 0.5, display: "inline-flex", alignItems: "center", gap: 0.75, bgcolor: tokens.teal, color: "#fff", borderRadius: 999, px: 1.5, py: 0.6 }}>
          <Typography sx={{ fontSize: 11.5, fontWeight: 700 }}>✓ Pedido recuperado</Typography>
        </Box>
      </Box>
    </Frame>
  )
}

/* ============================================================
   5.6 · MissedSalesTimeline (agitación: sin el agente)
   ============================================================ */

const MISSED = [
  { text: "Hola, ¿el Diver 200m lo tenéis en negro?", t: "23:14" },
  { text: "¿Sigue disponible? Lo quiero para el finde", t: "01:02" },
  { text: "¿Hacéis envío exprés?", t: "08:47" },
]

export function MissedSalesTimeline() {
  const reduce = useReducedMotion()
  return (
    <Frame tag="fuera de horario · sin agente">
      <Box sx={{ p: 2, display: "flex", flexDirection: "column", gap: 1.1, minHeight: 240 }}>
        {MISSED.map((m, k) => (
          <Box key={k} component={motion.div} initial={reduce ? false : { opacity: 0, x: -8 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: k * 0.4 }}
            sx={{ alignSelf: "flex-start", maxWidth: "86%" }}>
            <Box sx={{ px: 1.5, py: 1, borderRadius: "14px 14px 14px 4px", bgcolor: tokens.surface, border: `1px solid ${tokens.lineSoft}` }}>
              <Typography sx={{ fontSize: 13, color: tokens.ink }}>{m.text}</Typography>
              <Stack direction="row" spacing={0.75} sx={{ alignItems: "center", mt: 0.35 }}>
                <Typography sx={{ fontFamily: fonts.mono, fontSize: 8.5, color: tokens.muted }}>{m.t}</Typography>
                <Typography sx={{ fontFamily: fonts.mono, fontSize: 8.5, color: tokens.brick }}>· visto, sin respuesta</Typography>
              </Stack>
            </Box>
          </Box>
        ))}
        <Box component={motion.div} initial={reduce ? false : { opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: MISSED.length * 0.4 }}
          sx={{ mt: 1, borderTop: `1px dashed ${tokens.line}`, pt: 1.5 }}>
          <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
            <Box sx={{ flex: 1, height: 6, borderRadius: 999, bgcolor: tokens.surface, overflow: "hidden" }}>
              <Box component={motion.div} initial={reduce ? false : { width: "90%" }} whileInView={{ width: "22%" }} viewport={{ once: true }} transition={{ duration: 1.2, delay: MISSED.length * 0.4 }} sx={{ height: "100%", bgcolor: tokens.brick }} />
            </Box>
            <Typography sx={{ fontFamily: fonts.mono, fontSize: 10, color: tokens.brick }}>carrito enfriándose</Typography>
          </Stack>
        </Box>
      </Box>
    </Frame>
  )
}

/* ============================================================
   5.7 · IntegrationRail (Simple Icons, gris)
   ============================================================ */

const RAIL = [
  { icon: siShopify, label: "Shopify" },
  { icon: siWoocommerce, label: "WooCommerce" },
  { icon: siPrestashop, label: "PrestaShop" },
  { icon: siBigcommerce, label: "BigCommerce" },
  { icon: siWhatsapp, label: "WhatsApp" },
]

export function IntegrationRail() {
  return (
    <Stack direction="row" spacing={{ xs: 3, md: 5 }} sx={{ alignItems: "center", justifyContent: { xs: "flex-start", md: "center" }, flexWrap: "wrap", rowGap: 2 }}>
      {RAIL.map((b) => (
        <Stack key={b.label} direction="row" spacing={1} sx={{ alignItems: "center" }}>
          <Box component="svg" role="img" aria-label={b.label} viewBox="0 0 24 24" sx={{ width: 22, height: 22 }}>
            <path d={b.icon.path} fill={`#${b.icon.hex}`} />
          </Box>
          <Typography sx={{ fontSize: 13, fontWeight: 600, color: tokens.ink }}>{b.label}</Typography>
        </Stack>
      ))}
    </Stack>
  )
}

/* ============================================================
   6 · AgentDemo (pruébalo · demo guiada honesta)
   ============================================================ */

const DEMO_QA = [
  { q: "¿Qué reloj automático me recomiendas por 250€?", a: "El Automático Acero a 249€ es el más equilibrado. Quedan 3 uds.", src: "catálogo" },
  { q: "¿Tenéis algo para regalo con caja premium?", a: "El Cronógrafo Piel (199€) viene con caja premium. Buena opción para regalo.", src: "catálogo" },
  { q: "¿Tenéis correas de titanio?", a: "No tengo ese dato ahora mismo, te lo confirmo. ¿Te derivo con el equipo?", src: "sin coincidencia" },
]

export function AgentDemo() {
  const reduce = useReducedMotion()
  const [msgs, setMsgs] = useState<{ side: "user" | "agent"; text: string; src?: string }[]>([
    { side: "agent", text: "Hola, soy el agente de marea.es. Pregúntame por un reloj y te ayudo a elegir." },
  ])
  const scRef = useRef<HTMLDivElement>(null)
  useEffect(() => { if (scRef.current) scRef.current.scrollTop = scRef.current.scrollHeight }, [msgs])

  const ask = (qa: (typeof DEMO_QA)[number]) => {
    setMsgs((m) => [...m, { side: "user", text: qa.q }])
    setTimeout(() => setMsgs((m) => [...m, { side: "agent", text: qa.a, src: qa.src }]), reduce ? 0 : 550)
  }

  return (
    <Frame tag="demo · pruébalo" right={<Typography sx={{ fontFamily: fonts.mono, fontSize: 10, color: tokens.muted }}>[[ endpoint RAG ]]</Typography>}>
      <Box ref={scRef} sx={{ height: 260, overflowY: "auto", p: 2, display: "flex", flexDirection: "column", gap: 1.1 }}>
        {msgs.map((m, k) => (
          <Box key={k} component={motion.div} initial={reduce ? false : { opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} sx={{ display: "flex", flexDirection: "column", alignItems: m.side === "user" ? "flex-end" : "flex-start" }}>
            <Bubble side={m.side}>
              <Typography sx={{ fontSize: 13.5, color: tokens.ink }}>{m.text}</Typography>
              {m.src && <Typography sx={{ fontFamily: fonts.mono, fontSize: 9.5, color: m.src === "catálogo" ? tokens.teal : tokens.muted, mt: 0.5 }}>fuente: {m.src}</Typography>}
            </Bubble>
          </Box>
        ))}
      </Box>
      <Box sx={{ borderTop: `1px solid ${tokens.lineSoft}`, p: 1.5 }}>
        <Stack direction="row" spacing={1} sx={{ flexWrap: "wrap", gap: 1 }}>
          {DEMO_QA.map((qa) => (
            <Button key={qa.q} onClick={() => ask(qa)} disableRipple sx={{ textTransform: "none", borderRadius: 999, border: `1px solid ${tokens.line}`, color: tokens.body, fontFamily: fonts.sans, fontSize: 12, px: 1.5, py: 0.5, "&:hover": { borderColor: tokens.petrol, bgcolor: "transparent", color: tokens.ink } }}>
              {qa.q}
            </Button>
          ))}
        </Stack>
        <Typography sx={{ fontFamily: fonts.mono, fontSize: 10, color: tokens.muted, mt: 1.5 }}>
          {`// demo guiada · la versión real se conecta a tu catálogo`}
        </Typography>
      </Box>
    </Frame>
  )
}
