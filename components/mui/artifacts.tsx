"use client"

// Artefactos "reales" hechos a mano con SVG + motion. La gracia no es una
// librería mágica: es craft con motion (Framer Motion) sobre lienzo claro.
import { useState } from "react"
import { motion, useReducedMotion } from "motion/react"
import Box from "@mui/material/Box"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import Paper from "@mui/material/Paper"
import { siShopify, siWoocommerce } from "simple-icons"
import { tokens, fonts } from "@/lib/mui/theme"
import { ArtifactWindow } from "@/components/mui/shared"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const draw = (reduce: boolean | null): any =>
  reduce
    ? { initial: { pathLength: 1 }, animate: { pathLength: 1 } }
    : { initial: { pathLength: 0 }, whileInView: { pathLength: 1 }, viewport: { once: true }, transition: { duration: 1.4, ease: "easeInOut" } }

/* ---- Chart ROAS: inversión sube, retorno baja (se dibuja) ---- */
export function RoasChart() {
  const reduce = useReducedMotion()
  return (
    <Box sx={{ position: "relative", height: "100%" }}>
      <Box component="svg" viewBox="0 0 320 190" sx={{ width: "100%", height: "100%", overflow: "visible" }}>
        {[40, 80, 120, 160].map((y) => (
          <line key={y} x1="0" y1={y} x2="320" y2={y} stroke={tokens.grid} strokeWidth="1" />
        ))}
        {/* inversión (sube) */}
        <motion.path d="M4,150 C90,140 150,120 316,44" fill="none" stroke="#3D4248" strokeWidth="3" strokeLinecap="round" {...draw(reduce)} />
        {/* retorno (baja) */}
        <motion.path d="M4,58 C90,70 150,120 316,158" fill="none" stroke={tokens.brick} strokeWidth="3" strokeLinecap="round" {...draw(reduce)} />
        <motion.circle cx="316" cy="158" r="4" fill={tokens.brick} initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ delay: 1.2 }} />
      </Box>
      <Stack direction="row" spacing={1.5} sx={{ position: "absolute", top: 6, left: 0 }}>
        <Legend color={tokens.muted} label="inversión en ads" />
        <Legend color={tokens.brick} label="retorno real" />
      </Stack>
      <Box sx={{ position: "absolute", right: 4, bottom: 26, px: 1, py: 0.25, borderRadius: 1.5, bgcolor: `${tokens.brick}12`, border: `1px solid ${tokens.brick}33` }}>
        <Typography sx={{ fontFamily: fonts.mono, fontSize: 11, color: tokens.brick, fontWeight: 600 }}>ROAS ↓</Typography>
      </Box>
    </Box>
  )
}
function Legend({ color, label }: { color: string; label: string }) {
  return (
    <Stack direction="row" spacing={0.5} sx={{ alignItems: "center" }}>
      <Box sx={{ width: 14, height: 2.5, borderRadius: 2, bgcolor: color }} />
      <Typography sx={{ fontFamily: fonts.mono, fontSize: 10, color: tokens.muted }}>{label}</Typography>
    </Stack>
  )
}

/* ---- Stock descuadrado: almacén vs tienda (Shopify/Woo), sync rota ---- */
export function StockDesync() {
  const reduce = useReducedMotion()
  const rows = [
    { sku: "SKU-1042", alm: "8", web: "8", bad: false },
    { sku: "SKU-2087", alm: "3", web: "12", bad: true },
    { sku: "SKU-3311", alm: "0", web: "5", bad: true },
  ]
  const Panel = ({ side }: { side: "alm" | "web" }) => (
    <Box sx={{ flex: 1, border: `1px solid ${tokens.lineSoft}`, borderRadius: 1.5, overflow: "hidden", bgcolor: tokens.win }}>
      <Stack direction="row" spacing={0.75} sx={{ alignItems: "center", px: 1, py: 0.6, borderBottom: `1px solid ${tokens.lineSoft}`, bgcolor: "#E8EBEA" }}>
        {side === "alm" ? (
          <Typography sx={{ fontFamily: fonts.mono, fontSize: 9, color: tokens.muted }}>almacén</Typography>
        ) : (
          <>
            {[siShopify, siWoocommerce].map((ic, i) => (
              <Box key={i} component="svg" viewBox="0 0 24 24" sx={{ width: 11, height: 11 }} aria-hidden>
                <path d={ic.path} fill={`#${ic.hex}`} />
              </Box>
            ))}
            {/* Magento no está en simple-icons: monograma a su naranja oficial */}
            <Typography aria-hidden sx={{ fontFamily: fonts.mono, fontSize: 8, fontWeight: 700, color: "#EE672F", border: "1.2px solid #EE672F", borderRadius: 0.5, px: 0.35, lineHeight: 1.3 }}>M</Typography>
            <Typography sx={{ fontFamily: fonts.mono, fontSize: 9, color: tokens.muted }}>tienda</Typography>
          </>
        )}
      </Stack>
      {rows.map((r) => (
        <Stack key={r.sku} direction="row" sx={{ justifyContent: "space-between", px: 1, py: 0.55, borderBottom: `1px solid ${tokens.lineSoft}` }}>
          <Typography sx={{ fontFamily: fonts.mono, fontSize: 9, color: tokens.muted }}>{r.sku}</Typography>
          <Typography sx={{ fontFamily: fonts.mono, fontSize: 9.5, fontWeight: 700, color: r.bad ? (side === "web" ? tokens.brick : tokens.ink) : tokens.ink }}>
            {side === "alm" ? r.alm : r.web}
          </Typography>
        </Stack>
      ))}
    </Box>
  )
  return (
    <Box sx={{ position: "relative", height: "100%", display: "flex", alignItems: "center", gap: 1.5, p: 1 }}>
      <Panel side="alm" />
      {/* enlace de sincronización roto */}
      <Box sx={{ position: "relative", width: 26, flexShrink: 0, display: "grid", placeItems: "center" }}>
        <Box sx={{ position: "absolute", left: -8, right: -8, top: "50%", borderTop: `1.5px dashed ${tokens.line}` }} />
        <Box
          component={motion.div}
          animate={reduce ? {} : { opacity: [1, 0.35, 1] }}
          transition={{ duration: 1.3, repeat: Infinity }}
          sx={{ position: "relative", width: 20, height: 20, borderRadius: 999, bgcolor: `${tokens.brick}14`, border: `1.5px solid ${tokens.brick}`, display: "grid", placeItems: "center" }}
        >
          <Typography sx={{ fontSize: 10, color: tokens.brick, lineHeight: 1, fontWeight: 700 }}>!</Typography>
        </Box>
      </Box>
      <Panel side="web" />
    </Box>
  )
}

/* ---- Mock de tienda-plantilla con cursor que se mueve ---- */
export function StoreTemplate() {
  const reduce = useReducedMotion()
  return (
    <Box sx={{ position: "relative", height: "100%", bgcolor: "#FBFBF9", borderRadius: 1.5, overflow: "hidden", border: `1px solid ${tokens.lineSoft}`, p: 1.25 }}>
      {/* nav */}
      <Stack direction="row" spacing={1} sx={{ mb: 1 }}>
        {["Home", "Shop", "About"].map((n) => <Box key={n} sx={{ height: 6, width: 24, borderRadius: 1, bgcolor: "#E4E6E1" }} />)}
      </Stack>
      {/* hero categorías con marco de selección */}
      <Box sx={{ position: "relative", border: `1.5px solid ${tokens.teal}`, borderRadius: 1, p: 0.75, mb: 1 }}>
        <Typography sx={{ fontFamily: fonts.mono, fontSize: 8, color: tokens.muted, mb: 0.5 }}>Categories</Typography>
        <Stack direction="row" spacing={0.75}>
          {[0, 1, 2].map((i) => <Box key={i} sx={{ flex: 1, height: 34, borderRadius: 1, bgcolor: `${tokens.teal}14`, border: `1px solid ${tokens.teal}33` }} />)}
        </Stack>
      </Box>
      <Box sx={{ textAlign: "center", mb: 1 }}>
        <Box sx={{ height: 8, width: 90, mx: "auto", borderRadius: 1, bgcolor: "#D2D5D0", mb: 0.5 }} />
        <Box sx={{ height: 4, width: 130, mx: "auto", borderRadius: 1, bgcolor: "#E4E6E1" }} />
      </Box>
      <Stack direction="row" spacing={0.75} sx={{ justifyContent: "center" }}>
        {[44, 60, 44].map((h, i) => <Box key={i} sx={{ width: 46, height: h, borderRadius: 1, bgcolor: "#DCDFDA" }} />)}
      </Stack>
      {/* cursor */}
      <motion.div
        style={{ position: "absolute", top: 40, left: 60 }}
        initial={{ x: 0, y: 0 }}
        whileInView={reduce ? {} : { x: [0, 120, 40], y: [0, -6, 30] }}
        viewport={{ once: true }}
        transition={{ duration: 2.4, ease: "easeInOut", times: [0, 0.5, 1] }}
      >
        <Box component="svg" viewBox="0 0 24 24" sx={{ width: 18, height: 18, filter: "drop-shadow(0 1px 2px rgba(0,0,0,.3))" }}>
          <path d="M4 2l14 8-6 1 3 7-3 1-3-7-5 4z" fill="#fff" stroke={tokens.ink} strokeWidth="1.4" strokeLinejoin="round" />
        </Box>
      </motion.div>
    </Box>
  )
}

/* ---- Móvil con pedidos estilo Shopify (reutilizable) ---- */
export function ShopifyPhone() {
  const orders = [
    { id: "#16657", name: "Clara Jiménez", total: "41,80€", tag: "Comprador frecuente" },
    { id: "#16656", name: "Patricia Romero", total: "72,60€", tag: "Comprador frecuente" },
    { id: "#16655", name: "Diego Santos", total: "29,90€", tag: null as string | null },
  ]
  return (
    <Box sx={{ mx: "auto", width: 210, borderRadius: 4, border: `1px solid ${tokens.line}`, bgcolor: tokens.win, boxShadow: "0 18px 50px -24px rgba(27,30,34,.45)", overflow: "hidden" }}>
      {/* status bar */}
      <Stack direction="row" sx={{ justifyContent: "space-between", alignItems: "center", px: 2, pt: 1.25, pb: 0.5 }}>
        <Typography sx={{ fontFamily: fonts.mono, fontSize: 10, color: tokens.ink }}>19:02</Typography>
        <Typography sx={{ fontFamily: fonts.mono, fontSize: 10, color: tokens.muted }}>● ● ●</Typography>
      </Stack>
      <Box sx={{ px: 2, pb: 2 }}>
        <Stack direction="row" sx={{ justifyContent: "space-between", alignItems: "center", mb: 1 }}>
          <Typography sx={{ fontWeight: 800, fontSize: 15, color: tokens.ink }}>Orders</Typography>
          <Box component="svg" viewBox="0 0 24 24" sx={{ width: 14, height: 14 }} aria-hidden>
            <circle cx="10.5" cy="10.5" r="6" fill="none" stroke={tokens.ink} strokeWidth="2" />
            <line x1="15.2" y1="15.2" x2="20" y2="20" stroke={tokens.ink} strokeWidth="2" strokeLinecap="round" />
          </Box>
        </Stack>
        <Stack direction="row" spacing={0.5} sx={{ mb: 1 }}>
          {["All", "Unfulfilled", "Open"].map((f, i) => (
            <Box key={f} sx={{ bgcolor: i === 0 ? tokens.ink : tokens.surface, border: `1px solid ${i === 0 ? tokens.ink : tokens.lineSoft}`, borderRadius: 999, px: 0.9, py: 0.2 }}>
              <Typography sx={{ fontSize: 9, fontWeight: 600, color: i === 0 ? "#fff" : tokens.body }}>{f}</Typography>
            </Box>
          ))}
        </Stack>
        <Typography sx={{ fontSize: 9, color: tokens.muted, mb: 0.5 }}>Today</Typography>
        <Stack spacing={0.75}>
          {orders.map((o, i) => (
            <motion.div
              key={o.id}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 + i * 0.12 }}
            >
              <Box sx={{ borderBottom: `1px solid ${tokens.lineSoft}`, pb: 0.75 }}>
                <Stack direction="row" sx={{ justifyContent: "space-between" }}>
                  <Typography sx={{ fontSize: 11, fontWeight: 700, color: tokens.ink }}>{o.id}</Typography>
                  <Typography sx={{ fontSize: 11, fontWeight: 700, color: tokens.ink }}>{o.total}</Typography>
                </Stack>
                <Typography sx={{ fontSize: 9.5, color: tokens.muted }}>{o.name} · 1 item</Typography>
                <Stack direction="row" spacing={0.5} sx={{ mt: 0.4 }}>
                  <Box sx={{ display: "inline-flex", alignItems: "center", gap: 0.4, bgcolor: "#7AB55C22", borderRadius: 1, px: 0.6, py: 0.1 }}>
                    <Box sx={{ width: 5, height: 5, borderRadius: 999, bgcolor: `#${siShopify.hex}` }} />
                    <Typography sx={{ fontSize: 8.5, fontWeight: 700, color: `#${siShopify.hex}` }}>Paid</Typography>
                  </Box>
                  {o.tag && (
                    <Box sx={{ display: "inline-block", bgcolor: `${tokens.teal}18`, color: tokens.teal, borderRadius: 1, px: 0.6, py: 0.1 }}>
                      <Typography sx={{ fontSize: 8.5, fontWeight: 700 }}>{o.tag}</Typography>
                    </Box>
                  )}
                </Stack>
              </Box>
            </motion.div>
          ))}
        </Stack>
      </Box>
    </Box>
  )
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <Box sx={{ bgcolor: `${tokens.teal}12`, border: `1px solid ${tokens.teal}33`, borderRadius: 1.5, px: 0.9, py: 0.2 }}>
      <Typography sx={{ fontFamily: fonts.mono, fontSize: 10.5, color: tokens.teal, fontWeight: 600 }}>{children}</Typography>
    </Box>
  )
}

/* ---- Órbita AOV: tienda central + satélites girando ---- */
export function AovOrbit() {
  const reduce = useReducedMotion()
  const rings = [72, 116, 158]
  return (
    <Box sx={{ position: "relative", height: "100%", display: "grid", placeItems: "center" }}>
      {rings.map((r, i) => (
        <motion.div
          key={r}
          style={{ position: "absolute", width: r, height: r, borderRadius: "50%", border: `1px solid ${tokens.ink}1F` }}
          animate={reduce ? undefined : { rotate: 360 }}
          transition={{ duration: 16 + i * 7, repeat: Infinity, ease: "linear" }}
        >
          <Box sx={{ position: "absolute", top: -6, left: "50%", ml: "-6px", width: 12, height: 12, borderRadius: "50%", bgcolor: tokens.surface, border: `1px solid ${tokens.line}` }} />
          {i === 2 && (
            <Box sx={{ position: "absolute", bottom: -6, left: "50%", ml: "-6px", width: 12, height: 12, borderRadius: "50%", bgcolor: tokens.surface, border: `1px solid ${tokens.line}` }} />
          )}
        </motion.div>
      ))}
      <Box sx={{ width: 56, height: 56, borderRadius: "50%", bgcolor: "#fff", border: `1px solid ${tokens.line}`, display: "grid", placeItems: "center", boxShadow: "0 10px 26px -14px rgba(27,30,34,.35)" }}>
        <Box component="svg" viewBox="0 0 24 24" sx={{ width: 28, height: 28 }} aria-hidden>
          <path d={siShopify.path} fill={`#${siShopify.hex}`} />
        </Box>
      </Box>
      <Box sx={{ position: "absolute", bottom: 2, display: "inline-flex", alignItems: "center", gap: 0.6, bgcolor: `${tokens.teal}14`, border: `1px solid ${tokens.teal}33`, borderRadius: 999, px: 1.1, py: 0.3 }}>
        <Box sx={{ width: 6, height: 6, borderRadius: "50%", bgcolor: tokens.teal }} />
        <Typography sx={{ fontFamily: fonts.mono, fontSize: 11, color: tokens.teal, fontWeight: 700 }}>AOV ↑</Typography>
      </Box>
    </Box>
  )
}

/* ---- Gauge "problema detectado" con aguja ---- */
export function Gauge() {
  const reduce = useReducedMotion()
  return (
    <Box sx={{ position: "relative", height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 1.5 }}>
      <Box component="svg" viewBox="0 0 200 116" sx={{ width: "82%" }}>
        <path d="M18,108 A82,82 0 0,1 182,108" fill="none" stroke="#D0D4D1" strokeWidth="13" strokeLinecap="round" />
        <path d="M18,108 A82,82 0 0,1 92,30" fill="none" stroke={tokens.brick} strokeWidth="13" strokeLinecap="round" />
        <path d="M92,30 A82,82 0 0,1 150,44" fill="none" stroke="#D9A441" strokeWidth="13" />
        <path d="M150,44 A82,82 0 0,1 182,108" fill="none" stroke={tokens.teal} strokeWidth="13" strokeLinecap="round" />
        <motion.line
          x1="100" y1="108" x2="100" y2="44" stroke={tokens.ink} strokeWidth="4" strokeLinecap="round"
          style={{ transformOrigin: "100px 108px" }}
          initial={{ rotate: -76 }} whileInView={reduce ? undefined : { rotate: -56 }} viewport={{ once: true }} transition={{ duration: 1, ease: "easeOut" }}
        />
        <circle cx="100" cy="108" r="6" fill={tokens.ink} />
      </Box>
      <Box sx={{ display: "inline-flex", alignItems: "center", gap: 0.75, bgcolor: `${tokens.brick}10`, border: `1px solid ${tokens.brick}33`, borderRadius: 999, px: 1.25, py: 0.4 }}>
        <Box sx={{ width: 6, height: 6, borderRadius: "50%", bgcolor: tokens.brick }} />
        <Typography sx={{ fontFamily: fonts.mono, fontSize: 11, color: tokens.brick, fontWeight: 600 }}>Problema detectado · tienda lenta</Typography>
      </Box>
    </Box>
  )
}

/* ---- Funnel: tráfico que desemboca en badge Shopify (color oficial) ---- */
export function Funnel() {
  const reduce = useReducedMotion()
  const dots = [
    { x: 46, c: tokens.petrol, delay: 0 },
    { x: 86, c: tokens.teal, delay: 0.6 },
    { x: 134, c: tokens.muted, delay: 1.2 },
    { x: 174, c: tokens.ink, delay: 1.8 },
  ]
  return (
    <Box sx={{ position: "relative", height: "100%" }}>
      <Box component="svg" viewBox="0 0 220 200" sx={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}>
        {/* paredes del embudo: relleno tonal + hairlines marcadas */}
        <path d="M20,22 L200,22 L130,112 L90,112 Z" fill={`${tokens.ink}0A`} stroke={`${tokens.ink}26`} strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M90,112 L130,112 L122,136 L98,136 Z" fill={`${tokens.ink}14`} stroke={`${tokens.ink}26`} strokeWidth="1.5" strokeLinejoin="round" />
        {[46, 86, 134, 174].map((x, i) => (
          <line key={i} x1={x} y1="22" x2="110" y2="134" stroke={`${tokens.ink}14`} strokeWidth="1" />
        ))}
        {/* puntos (visitas) cayendo hacia el badge; reduced-motion: estado final */}
        {dots.map((d, i) =>
          reduce ? (
            <circle key={i} cx={97 + i * 9} cy={132} r="4" fill={d.c} opacity={0.85} />
          ) : (
            <motion.circle
              key={i}
              r="4.5"
              fill={d.c}
              initial={{ cx: d.x, cy: 14, opacity: 0 }}
              animate={{ cx: [d.x, (d.x + 110) / 2, 110], cy: [14, 78, 137], opacity: [0, 1, 0] }}
              transition={{ duration: 2.4, repeat: Infinity, delay: d.delay, ease: "easeIn" }}
            />
          )
        )}
        {/* badge circular blanco con el logo WooCommerce a su color oficial */}
        <circle cx="110" cy="166" r="26" fill="#fff" stroke={`${tokens.ink}26`} strokeWidth="1.5" />
        <g transform="translate(98.5, 154.5) scale(0.9583)">
          <path d={siWoocommerce.path} fill={`#${siWoocommerce.hex}`} />
        </g>
      </Box>
    </Box>
  )
}

/* ---- Toggle DATOS/INTUICIÓN interactivo ---- */
export function DatosIntuicion() {
  const [datos, setDatos] = useState(true)
  return (
    <Box sx={{ position: "relative", height: "100%" }}>
      <Stack direction="row" spacing={0.5} sx={{ position: "absolute", inset: 0, alignItems: "flex-end", p: 1.25, opacity: datos ? 0.55 : 0.16, transition: "opacity .3s" }}>
        {[30, 55, 40, 72, 50, 82, 60].map((h, i) => <Box key={i} sx={{ flex: 1, height: `${h}%`, bgcolor: "#C9CEC4", borderRadius: 0.5 }} />)}
      </Stack>
      <Box
        onClick={() => setDatos((v) => !v)} role="switch" aria-checked={datos} tabIndex={0}
        onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") setDatos((v) => !v) }}
        sx={{ position: "absolute", top: "42%", left: "50%", transform: "translate(-50%,-50%)", cursor: "pointer", display: "inline-flex", alignItems: "center", gap: 1, bgcolor: tokens.win, border: `1px solid ${tokens.line}`, borderRadius: 999, p: 0.5, boxShadow: "0 6px 20px -10px rgba(10,24,38,.3)" }}
      >
        <Typography sx={{ fontFamily: fonts.mono, fontSize: 11, fontWeight: 700, color: datos ? tokens.teal : tokens.muted, px: 1 }}>DATOS</Typography>
        <Box sx={{ width: 40, height: 22, borderRadius: 999, bgcolor: datos ? tokens.teal : "#CBD0CB", position: "relative", transition: "background .25s" }}>
          <motion.div animate={{ left: datos ? 3 : 21 }} transition={{ type: "spring", stiffness: 500, damping: 30 }} style={{ position: "absolute", top: 3, width: 16, height: 16, borderRadius: "50%", background: "#fff" }} />
        </Box>
        <Typography sx={{ fontFamily: fonts.mono, fontSize: 11, fontWeight: 700, color: datos ? tokens.muted : tokens.brick, px: 1 }}>INTUICIÓN</Typography>
      </Box>
    </Box>
  )
}

/* ---- Flujo n8n (nodos + edges que se dibujan) ---- */
export function N8nFlow() {
  const reduce = useReducedMotion()
  const nodes = [{ x: 8, y: 60, l: "Trigger" }, { x: 96, y: 22, l: "HTTP" }, { x: 96, y: 98, l: "IF" }, { x: 186, y: 60, l: "Set" }]
  return (
    <Box sx={{ position: "relative", height: "100%", bgcolor: "#FBFBF9", borderRadius: 1.5, border: `1px solid ${tokens.lineSoft}` }}>
      <Box component="svg" viewBox="0 0 260 150" sx={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}>
        <motion.path d="M56,72 C80,72 72,34 122,34" fill="none" stroke={tokens.bronze} strokeWidth="1.5" {...draw(reduce)} />
        <motion.path d="M56,72 C80,72 72,110 122,110" fill="none" stroke={tokens.line} strokeWidth="1.5" {...draw(reduce)} />
        <motion.path d="M170,34 C206,34 200,72 226,72" fill="none" stroke={tokens.bronze} strokeWidth="1.5" {...draw(reduce)} />
        {nodes.map((n, i) => (
          <g key={i}>
            <rect x={n.x} y={n.y - 12} width="52" height="24" rx="6" fill={tokens.win} stroke={tokens.line} />
            <text x={n.x + 26} y={n.y + 4} textAnchor="middle" fill={tokens.ink} fontFamily={fonts.mono} fontSize="10">{n.l}</text>
          </g>
        ))}
      </Box>
      <Box sx={{ position: "absolute", bottom: 6, right: 8, display: "inline-flex", alignItems: "center", gap: 0.5 }}>
        <Box sx={{ width: 6, height: 6, borderRadius: "50%", bgcolor: tokens.teal }} />
        <Typography sx={{ fontFamily: fonts.mono, fontSize: 9.5, color: tokens.muted }}>running</Typography>
      </Box>
    </Box>
  )
}

/* ---- Chart de conversión: sesiones planas, ingresos suben ---- */
export function ConversionChart() {
  const reduce = useReducedMotion()
  return (
    <Box sx={{ position: "relative", height: "100%" }}>
      <Box component="svg" viewBox="0 0 320 190" sx={{ width: "100%", height: "100%", overflow: "visible" }}>
        {[50, 100, 150].map((y) => <line key={y} x1="0" y1={y} x2="320" y2={y} stroke={tokens.grid} strokeWidth="1" />)}
        <motion.path d="M4,120 C120,118 200,116 316,112" fill="none" stroke="#3D4248" strokeWidth="3" strokeLinecap="round" {...draw(reduce)} />
        <motion.path d="M4,150 C120,140 200,88 316,38" fill="none" stroke={tokens.teal} strokeWidth="3" strokeLinecap="round" {...draw(reduce)} />
      </Box>
      <Stack direction="row" spacing={1.5} sx={{ position: "absolute", top: 6, left: 0 }}>
        <Legend color={tokens.muted} label="sesiones" />
        <Legend color={tokens.teal} label="ingresos" />
      </Stack>
      <Stack direction="row" spacing={1} sx={{ position: "absolute", bottom: 2, right: 2 }}>
        <Pill>+[[ X ]]% pedidos</Pill>
        <Pill>AOV [[ €→€ ]]</Pill>
      </Stack>
    </Box>
  )
}

/* ---- Respuesta de IA que cita la tienda (GEO) ---- */
export function GeoAnswer() {
  const reduce = useReducedMotion()
  return (
    <Box sx={{ height: "100%", display: "flex", flexDirection: "column", gap: 1, justifyContent: "center" }}>
      {/* pregunta del usuario a la IA */}
      <Box sx={{ alignSelf: "flex-start", display: "flex", alignItems: "center", gap: 0.75, border: `1px solid ${tokens.line}`, borderRadius: 999, px: 1.25, py: 0.5, bgcolor: tokens.win }}>
        <Box component="svg" viewBox="0 0 24 24" sx={{ width: 11, height: 11, flexShrink: 0 }} aria-hidden>
          <path d="M12 2l1.8 6.2L20 10l-6.2 1.8L12 18l-1.8-6.2L4 10l6.2-1.8z" fill={tokens.petrol} />
        </Box>
        <Typography sx={{ fontFamily: fonts.mono, fontSize: 10.5, color: tokens.body }}>¿qué reloj automático me recomiendas?</Typography>
      </Box>
      {/* respuesta con la marca citada y subrayado que se dibuja */}
      <Box sx={{ border: `1px solid ${tokens.lineSoft}`, borderRadius: 2, bgcolor: tokens.win, px: 1.5, py: 1.25 }}>
        <Typography sx={{ fontFamily: fonts.mono, fontSize: 9.5, color: tokens.muted, mb: 0.75 }}>{"respuesta de IA · simulación de cómo se ve una citación"}</Typography>
        <Typography sx={{ fontSize: 13, color: tokens.body, lineHeight: 1.6 }}>
          Para un automático con buena relación calidad-precio en España,{" "}
          <Box component="span" sx={{ position: "relative", color: tokens.ink, fontWeight: 700, whiteSpace: "nowrap" }}>
            marea.es
            <Box
              component={motion.span}
              initial={reduce ? { scaleX: 1 } : { scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              sx={{ position: "absolute", left: 0, right: 0, bottom: -1, height: "2px", bgcolor: tokens.teal, transformOrigin: "left", display: "block" }}
            />
          </Box>{" "}
          destaca por catálogo y envío en 24h.
        </Typography>
      </Box>
      {/* fuentes citadas */}
      <Stack direction="row" spacing={0.75} sx={{ alignItems: "center", flexWrap: "wrap", rowGap: 0.75 }}>
        <Typography sx={{ fontFamily: fonts.mono, fontSize: 9.5, color: tokens.muted }}>fuentes:</Typography>
        {[{ c: "marea.es", hot: true }, { c: "catálogo", hot: false }, { c: "envíos", hot: false }].map(({ c, hot }, i) => (
          <Box
            key={c}
            component={motion.div}
            initial={reduce ? false : { opacity: 0, y: 5 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 + i * 0.12 }}
            sx={{ display: "flex", alignItems: "center", gap: 0.5, border: `1px solid ${hot ? tokens.teal : tokens.line}`, bgcolor: hot ? `${tokens.teal}0D` : "transparent", borderRadius: 1.5, px: 0.9, py: 0.25 }}
          >
            {hot && <Box sx={{ width: 5, height: 5, borderRadius: 999, bgcolor: tokens.teal }} />}
            <Typography sx={{ fontFamily: fonts.mono, fontSize: 9.5, color: hot ? tokens.teal : tokens.muted, fontWeight: hot ? 700 : 400 }}>{c}</Typography>
          </Box>
        ))}
      </Stack>
    </Box>
  )
}

/* ---- Apps de terceros que cobran y ralentizan ---- */
// Lista de apps/plugins que se acumulan y pesan. Parametrizable para reutilizar
// en las landings (apps de Shopify, plugins de Woo). Con `bare` pierde su marco
// propio para vivir dentro de una ArtifactWindow.
export function UnnecessaryApps({
  tag = "apps instaladas · 14",
  items = [
    { n: "Upsell Pro", meta: "19€/mes", c: "#E76F51" },
    { n: "Reviews+", meta: "12€/mes", c: "#2A9D8F" },
    { n: "Popup Boost", meta: "18€/mes", c: "#E9C46A" },
  ],
  more = "+ 11 más…",
  loadTag = "carga +2,4s",
  total = "−340€/mes",
  bare = false,
}: {
  tag?: string
  items?: { n: string; meta: string; c: string }[]
  more?: string
  loadTag?: string
  total?: string
  bare?: boolean
} = {}) {
  return (
    <Box sx={{ position: "relative", height: "100%", ...(bare ? {} : { bgcolor: "#FBFBF9", borderRadius: 1.5, border: `1px solid ${tokens.lineSoft}`, p: 1.25 }), display: "flex", flexDirection: "column", gap: 0.75 }}>
      <Typography sx={{ fontFamily: fonts.mono, fontSize: 9.5, color: tokens.muted }}>{tag}</Typography>
      {items.map((a, i) => (
        <motion.div key={a.n} initial={{ opacity: 0, x: 10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12 }}>
          <Stack direction="row" spacing={1} sx={{ alignItems: "center", justifyContent: "space-between", bgcolor: tokens.win, border: `1px solid ${tokens.lineSoft}`, borderRadius: 1.5, px: 1, py: 0.6 }}>
            <Stack direction="row" spacing={0.75} sx={{ alignItems: "center", minWidth: 0 }}>
              <Box sx={{ width: 16, height: 16, borderRadius: 1, bgcolor: a.c, flexShrink: 0 }} />
              <Typography sx={{ fontSize: 11.5, fontWeight: 600, color: tokens.ink, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{a.n}</Typography>
            </Stack>
            <Typography sx={{ fontFamily: fonts.mono, fontSize: 11, color: tokens.brick, fontWeight: 600, whiteSpace: "nowrap", flexShrink: 0 }}>{a.meta}</Typography>
          </Stack>
        </motion.div>
      ))}
      <Typography sx={{ fontSize: 10, color: tokens.muted, textAlign: "center" }}>{more}</Typography>
      <Stack direction="row" spacing={1} sx={{ mt: "auto", justifyContent: "space-between", alignItems: "center" }}>
        <Box sx={{ display: "inline-flex", alignItems: "center", gap: 0.5, bgcolor: `${tokens.brick}10`, border: `1px solid ${tokens.brick}33`, borderRadius: 999, px: 1, py: 0.3 }}>
          <Typography sx={{ fontFamily: fonts.mono, fontSize: 10.5, color: tokens.brick, fontWeight: 700 }}>{loadTag}</Typography>
        </Box>
        <Typography sx={{ fontFamily: fonts.mono, fontSize: 12, color: tokens.brick, fontWeight: 700 }}>{total}</Typography>
      </Stack>
    </Box>
  )
}

// Panel de auditoría con hallazgos priorizados por impacto. Reutiliza el
// lenguaje del informe de la Home; rojo solo para lo alto/bloqueante, gris para
// lo medio. `foot` es el disclaimer en mono al pie.
export function AuditFindings({
  tag = "auditoría · informe",
  findings,
  foot,
}: {
  tag?: string
  findings: { t: string; tag: string; red?: boolean }[]
  foot: string
}) {
  const reduce = useReducedMotion()
  return (
    <ArtifactWindow tag={tag} ratio="16 / 10">
      <Box sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
        <Typography sx={{ fontFamily: fonts.mono, fontSize: 10.5, color: tokens.muted, mb: 1.25 }}>hallazgos por impacto en ventas</Typography>
        <Stack spacing={0.9} sx={{ flex: 1, minHeight: 0 }}>
          {findings.map((f, i) => {
            const sev = f.red ? tokens.red : tokens.muted
            return (
              <Box key={f.t} component={motion.div} initial={reduce ? false : { opacity: 0, x: -8 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.09, duration: 0.3 }}
                sx={{ display: "flex", alignItems: "center", gap: 1.25, bgcolor: tokens.win, border: `1px solid ${tokens.lineSoft}`, borderRadius: 1.5, px: 1.25, py: 0.85 }}>
                <Box sx={{ width: 8, height: 8, borderRadius: 999, bgcolor: sev, flexShrink: 0 }} />
                <Typography sx={{ fontSize: { xs: 12, md: 13 }, color: tokens.ink, flex: 1, minWidth: 0, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{f.t}</Typography>
                <Typography sx={{ fontFamily: fonts.mono, fontSize: 9.5, fontWeight: 700, color: sev, bgcolor: `${sev}18`, borderRadius: 999, px: 0.9, py: 0.2, flexShrink: 0 }}>{f.tag}</Typography>
              </Box>
            )
          })}
        </Stack>
        <Typography sx={{ fontFamily: fonts.mono, fontSize: 9.5, color: tokens.muted, mt: 1.25 }}>{foot}</Typography>
      </Box>
    </ArtifactWindow>
  )
}

/* ---- Selector interactivo de plataformas ---- */
function PIcon({ path, size = 18, color }: { path: string; size?: number; color?: string }) {
  return (
    <Box component="svg" viewBox="0 0 24 24" sx={{ width: size, height: size, fill: color ?? "currentColor", flexShrink: 0 }} aria-hidden>
      <path d={path} />
    </Box>
  )
}
const PLATS: { name: string; path: string | null; hex: string | null; points: [string, string][] }[] = [
  {
    name: "Shopify", path: siShopify.path, hex: siShopify.hex,
    points: [
      ["storefront", "Agente embebido en tu theme, sin apps de pago que lastren la tienda"],
      ["Admin API", "Stock, pedidos y clientes sincronizados en tiempo real"],
      ["SEO", "Schema de producto y metafields sobre tu theme actual"],
    ],
  },
  {
    name: "WooCommerce", path: siWoocommerce.path, hex: siWoocommerce.hex,
    points: [
      ["WordPress", "Plugin ligero en tu instalación, sin hincharla de dependencias"],
      ["REST API", "Stock y pedidos sincronizados con tu ERP y el agente"],
      ["SEO", "Schema de producto y Core Web Vitals sobre tu WP"],
    ],
  },
]

export function PlatformsInteractive() {
  const reduce = useReducedMotion()
  const [sel, setSel] = useState(0)
  const cur = PLATS[sel]
  return (
    <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "0.85fr 1.15fr" }, gap: { xs: 3, md: 6 }, alignItems: "start" }}>
      {/* selector con iconos reales */}
      <Stack direction={{ xs: "row", md: "column" }} sx={{ flexWrap: { xs: "wrap", md: "nowrap" }, gap: 1 }}>
        {PLATS.map((p, i) => {
          const active = i === sel
          return (
            <Box
              key={p.name} onClick={() => setSel(i)} role="button" tabIndex={0} aria-pressed={active}
              onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") setSel(i) }}
              sx={{
                display: "inline-flex", alignItems: "center", gap: 0.9, cursor: "pointer", userSelect: "none",
                px: 1.5, py: 1, borderRadius: 2, transition: "all .18s",
                border: `1px solid ${active ? `${tokens.petrol}88` : tokens.line}`,
                bgcolor: active ? tokens.win : "transparent",
                color: active ? tokens.ink : tokens.muted,
                "&:hover": { color: tokens.ink, borderColor: `${tokens.petrol}66` },
              }}
            >
              {p.path ? <PIcon path={p.path} color={p.hex ? `#${p.hex}` : undefined} /> : (
                <Typography sx={{ fontFamily: fonts.mono, fontSize: 10, fontWeight: 700, color: "#EE672F", border: "1.5px solid #EE672F", borderRadius: 0.75, px: 0.4, lineHeight: 1.4 }}>M</Typography>
              )}
              <Typography sx={{ fontSize: 13, fontWeight: 700 }}>{p.name}</Typography>
            </Box>
          )
        })}
      </Stack>

      {/* mapa de integración: tu tienda ⇄ SEOscar + puntos concretos */}
      <Box key={sel} component={motion.div} initial={reduce ? false : { opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}
        sx={{ border: `1px solid ${tokens.lineSoft}`, borderRadius: 3, bgcolor: tokens.win, overflow: "hidden" }}>
        {/* diagrama */}
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: { xs: 1, sm: 2 }, px: 2, py: 2.5, borderBottom: `1px solid ${tokens.lineSoft}`, bgcolor: "#FAFBFB" }}>
          <Stack sx={{ alignItems: "center", gap: 0.5, minWidth: { xs: 64, sm: 86 } }}>
            <Box sx={{ width: { xs: 36, sm: 44 }, height: { xs: 36, sm: 44 }, borderRadius: 2, border: `1px solid ${tokens.line}`, bgcolor: tokens.win, display: "grid", placeItems: "center", color: tokens.ink }}>
              {cur.path ? <PIcon path={cur.path} size={24} color={cur.hex ? `#${cur.hex}` : undefined} /> : <Typography sx={{ fontFamily: fonts.serif, fontSize: 18, fontWeight: 700, color: "#EE672F" }}>M</Typography>}
            </Box>
            <Typography sx={{ fontFamily: fonts.mono, fontSize: { xs: 8.5, sm: 9.5 }, color: tokens.muted }}>tu tienda</Typography>
          </Stack>
          <Box sx={{ position: "relative", flex: 1, maxWidth: 150, height: 2, bgcolor: tokens.line, borderRadius: 999 }}>
            <Box
              component={motion.div}
              animate={reduce ? {} : { left: ["0%", "86%", "0%"] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
              sx={{ position: "absolute", top: -3, left: 0, width: 8, height: 8, borderRadius: 999, bgcolor: tokens.petrol }}
            />
          </Box>
          <Stack sx={{ alignItems: "center", gap: 0.5, minWidth: { xs: 64, sm: 86 } }}>
            <Box sx={{ width: { xs: 36, sm: 44 }, height: { xs: 36, sm: 44 }, borderRadius: 2, border: `1.5px solid ${tokens.petrol}`, bgcolor: `${tokens.petrol}0D`, display: "grid", placeItems: "center" }}>
              <Typography sx={{ fontFamily: fonts.sans, fontSize: 15, fontWeight: 800, color: tokens.petrol }}>SO</Typography>
            </Box>
            <Typography sx={{ fontFamily: fonts.mono, fontSize: { xs: 8.5, sm: 9.5 }, color: tokens.muted }}>capa SEOscar</Typography>
          </Stack>
        </Box>
        {/* puntos de integración en la terminología de la plataforma */}
        <Box sx={{ p: 2 }}>
          {cur.points.map(([k, v], i) => (
            <Box key={k} component={motion.div} initial={reduce ? false : { opacity: 0, x: -6 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 + i * 0.08 }}
              sx={{ display: "flex", gap: 1.5, py: 1.1, borderTop: i === 0 ? "none" : `1px solid ${tokens.lineSoft}`, alignItems: "baseline" }}>
              <Typography sx={{ fontFamily: fonts.mono, fontSize: { xs: 10, sm: 11 }, fontWeight: 700, color: tokens.petrol, width: { xs: 76, sm: 96 }, flexShrink: 0 }}>{k}</Typography>
              <Typography sx={{ fontSize: 13, color: tokens.body }}>{v}</Typography>
            </Box>
          ))}
          <Typography sx={{ fontFamily: fonts.mono, fontSize: 10, color: tokens.muted, mt: 1.5 }}>
            {"Sin migrar. El código que añado es tuyo."}
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}

/* ---- Chat del agente enriquecido (typing, toggle canal, follow-up de stock) ---- */
function TypingDots() {
  return (
    <Stack direction="row" spacing={0.5} sx={{ alignItems: "center", py: 0.5 }}>
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          style={{ width: 6, height: 6, borderRadius: 999, background: tokens.muted, display: "inline-block" }}
          animate={{ opacity: [0.25, 1, 0.25] }}
          transition={{ duration: 1, repeat: Infinity, delay: i * 0.18 }}
        />
      ))}
    </Stack>
  )
}
export function AgentChatRich() {
  const [ch, setCh] = useState<"web" | "whatsapp">("web")
  const reduce = useReducedMotion()
  const bubble = (i: number) => reduce ? {} : { initial: { opacity: 0, y: 8 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { delay: 0.2 + i * 0.25 } }
  return (
    <Paper elevation={2} sx={{ borderRadius: 3, overflow: "hidden", border: `1px solid ${tokens.lineSoft}`, bgcolor: tokens.win }}>
      <Stack direction="row" sx={{ alignItems: "center", justifyContent: "space-between", px: 2, py: 1.25, borderBottom: `1px solid ${tokens.lineSoft}` }}>
        <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
          <Box sx={{ width: 26, height: 26, borderRadius: "50%", bgcolor: tokens.teal, display: "grid", placeItems: "center" }}>
            <Typography sx={{ color: "#fff", fontWeight: 800, fontSize: 12, fontFamily: fonts.serif }}>m</Typography>
          </Box>
          <Box>
            <Typography sx={{ fontSize: 12.5, fontWeight: 700, color: tokens.ink, lineHeight: 1.1 }}>agente · marea.es</Typography>
            <Stack direction="row" spacing={0.5} sx={{ alignItems: "center" }}>
              <Box sx={{ width: 6, height: 6, borderRadius: "50%", bgcolor: tokens.teal }} />
              <Typography sx={{ fontFamily: fonts.mono, fontSize: 10, color: tokens.muted }}>en línea</Typography>
            </Stack>
          </Box>
        </Stack>
        <Stack direction="row" sx={{ bgcolor: "#F1F3EF", borderRadius: 999, p: 0.4 }}>
          {(["web", "whatsapp"] as const).map((c) => (
            <Box key={c} onClick={() => setCh(c)} role="button" tabIndex={0} onKeyDown={(e) => { if (e.key === "Enter") setCh(c) }}
              sx={{ cursor: "pointer", px: 1.1, py: 0.3, borderRadius: 999, fontFamily: fonts.mono, fontSize: 10.5, fontWeight: 700, color: ch === c ? tokens.ink : tokens.muted, bgcolor: ch === c ? tokens.win : "transparent", boxShadow: ch === c ? "0 1px 3px rgba(10,24,38,.12)" : "none", textTransform: "capitalize" }}>
              {c === "whatsapp" ? "WhatsApp" : "Web"}
            </Box>
          ))}
        </Stack>
      </Stack>

      <Stack spacing={1.25} sx={{ p: 2 }}>
        <motion.div {...bubble(0)}>
          <Box sx={{ alignSelf: "flex-end", ml: "auto", maxWidth: "80%", bgcolor: "#EEF0EC", borderRadius: "14px 14px 4px 14px", px: 1.5, py: 1, width: "fit-content" }}>
            <Typography sx={{ fontSize: 13.5, color: tokens.ink }}>Busco un reloj automático para el día a día, sobre 250€.</Typography>
          </Box>
        </motion.div>

        <motion.div {...bubble(1)}>
          <Box sx={{ maxWidth: "88%", bgcolor: "#F4FAF7", border: `1px solid ${tokens.teal}22`, borderRadius: "14px 14px 14px 4px", px: 1.5, py: 1.25 }}>
            <Typography sx={{ fontSize: 13.5, color: tokens.ink, mb: 1 }}>Automáticos en ese rango, te van estos dos:</Typography>
            <Stack spacing={0.75}>
              {[{ n: "Automático Acero", p: "249€" }, { n: "Cronógrafo Piel", p: "199€" }].map((prod) => (
                <Stack key={prod.n} direction="row" spacing={1.25} sx={{ alignItems: "center", bgcolor: tokens.win, border: `1px solid ${tokens.lineSoft}`, borderRadius: 2, p: 0.75 }}>
                  <Box sx={{ width: 34, height: 34, borderRadius: 1.5, bgcolor: "#E7EAE6", display: "grid", placeItems: "center", flexShrink: 0 }}>
                    <Box component="svg" viewBox="0 0 40 40" sx={{ width: 26, height: 26 }} aria-hidden>
                      <circle cx="20" cy="20" r="10" fill="#fff" stroke={tokens.ink} strokeWidth="2" />
                      <rect x="17" y="4" width="6" height="4" rx="1" fill={tokens.muted} />
                      <rect x="17" y="32" width="6" height="4" rx="1" fill={tokens.muted} />
                      <line x1="20" y1="20" x2="20" y2="14" stroke={tokens.ink} strokeWidth="1.6" strokeLinecap="round" />
                      <line x1="20" y1="20" x2="24" y2="22" stroke={tokens.bronze} strokeWidth="1.6" strokeLinecap="round" />
                      <circle cx="31" cy="20" r="1.6" fill={tokens.muted} />
                    </Box>
                  </Box>
                  <Typography sx={{ fontSize: 12.5, fontWeight: 700, color: tokens.ink, flex: 1 }}>{prod.n}</Typography>
                  <Typography sx={{ fontFamily: fonts.mono, fontSize: 12.5, color: tokens.teal, fontWeight: 600 }}>{prod.p}</Typography>
                </Stack>
              ))}
            </Stack>
          </Box>
        </motion.div>

        <motion.div {...bubble(2)}>
          <Box sx={{ alignSelf: "flex-end", ml: "auto", maxWidth: "80%", bgcolor: "#EEF0EC", borderRadius: "14px 14px 4px 14px", px: 1.5, py: 1, width: "fit-content" }}>
            <Typography sx={{ fontSize: 13.5, color: tokens.ink }}>¿La primera la tenéis disponible ya?</Typography>
          </Box>
        </motion.div>

        <motion.div {...bubble(3)}>
          <Box sx={{ maxWidth: "88%", bgcolor: "#F4FAF7", border: `1px solid ${tokens.teal}22`, borderRadius: "14px 14px 14px 4px", px: 1.5, py: 1.25 }}>
            <Typography sx={{ fontSize: 13.5, color: tokens.ink }}>Sí, quedan <b>3 uds</b> en almacén. Te la puedo dejar en el carrito.</Typography>
            <Box sx={{ mt: 1, display: "inline-flex", alignItems: "center", gap: 0.75, bgcolor: tokens.teal, color: "#fff", borderRadius: 1.5, px: 1, py: 0.5 }}>
              <Typography sx={{ fontSize: 11, fontWeight: 700 }}>→ Añadir al carrito</Typography>
            </Box>
            <Typography sx={{ fontFamily: fonts.mono, fontSize: 9.5, color: tokens.muted, mt: 0.75 }}>fuente: catálogo · stock en tiempo real</Typography>
          </Box>
        </motion.div>
      </Stack>

      <Box sx={{ px: 2, py: 1, borderTop: `1px solid ${tokens.lineSoft}`, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <TypingDots />
        <Typography sx={{ fontFamily: fonts.mono, fontSize: 10, color: tokens.muted }}>
          {ch === "whatsapp" ? "vía WhatsApp" : "en tu web"} · 0 alucinación
        </Typography>
      </Box>
    </Paper>
  )
}

/* ---- Scatter de herramientas (diagnóstico) ---- */
export function ToolsScatter() {
  const reduce = useReducedMotion()
  const tools = [
    { l: "Google Analytics 4", top: "12%", left: "6%", r: -6 },
    { l: "Search Console", top: "60%", left: "4%", r: 5 },
    { l: "Klaviyo", top: "14%", left: "62%", r: 7 },
    { l: "Clarity", top: "58%", left: "66%", r: -7 },
    { l: "Semrush", top: "78%", left: "34%", r: 3 },
  ]
  const chip = (l: string) => (
    <Box sx={{ display: "inline-flex", alignItems: "center", gap: 0.75, bgcolor: tokens.win, border: `1px solid ${tokens.line}`, borderRadius: 1.5, px: 1, py: 0.6, boxShadow: "0 6px 18px -12px rgba(10,24,38,.4)" }}>
      <Box sx={{ width: 10, height: 10, borderRadius: 0.5, bgcolor: tokens.bronze, opacity: 0.7 }} />
      <Typography sx={{ fontFamily: fonts.mono, fontSize: 10.5, color: tokens.ink, whiteSpace: "nowrap" }}>{l}</Typography>
    </Box>
  )
  const store = (
    <Box sx={{ display: "inline-flex", alignItems: "center", gap: 0.75, bgcolor: tokens.win, border: `1px solid ${tokens.line}`, borderRadius: 1.5, px: 1.25, py: 0.75, boxShadow: "0 8px 22px -12px rgba(10,24,38,.4)" }}>
      <Box component="svg" viewBox="0 0 24 24" sx={{ width: 18, height: 18, fill: tokens.ink }}><path d={siShopify.path} /></Box>
      <Typography sx={{ fontWeight: 800, fontSize: 13, color: tokens.ink }}>tu tienda</Typography>
    </Box>
  )
  return (
    <>
      {/* Móvil y tablet (<900px): composición ordenada, nada se solapa */}
      <Box sx={{ display: { xs: "flex", md: "none" }, height: "100%", flexDirection: "column", alignItems: "center", justifyContent: "space-between", gap: 1.25, py: 0.5 }}>
        <Box sx={{ bgcolor: tokens.win, border: `1px solid ${tokens.line}`, borderRadius: 2, px: 2, py: 0.75 }}>
          <Typography sx={{ fontFamily: fonts.mono, fontSize: 12, color: tokens.muted }}>Investigo con…</Typography>
        </Box>
        <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center", gap: 1.25 }}>
          {tools.map((t, i) => (
            <Box key={t.l} component={motion.div}
              initial={reduce ? false : { opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: 0.05 + i * 0.07, duration: 0.3 }}>
              <Box sx={{ transform: `rotate(${t.r * 0.5}deg)` }}>{chip(t.l)}</Box>
            </Box>
          ))}
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 0.5 }}>
          <Box component="svg" viewBox="0 0 24 24" sx={{ width: 15, height: 15 }} fill="none" stroke={tokens.muted} strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M12 4v13M6 13l6 6 6-6" /></Box>
          {store}
        </Box>
      </Box>

      {/* Desktop (>=900px): scatter flotante */}
      <Box sx={{ display: { xs: "none", md: "block" }, position: "relative", height: "100%" }}>
        <Box sx={{ position: "absolute", top: "12%", left: "50%", transform: "translateX(-50%)", bgcolor: tokens.win, border: `1px solid ${tokens.line}`, borderRadius: 2, px: 2, py: 1 }}>
          <Typography sx={{ fontFamily: fonts.mono, fontSize: 12, color: tokens.muted }}>Investigo con…</Typography>
        </Box>
        {tools.map((t, i) => (
          <motion.div
            key={t.l}
            style={{ position: "absolute", top: t.top, left: t.left }}
            initial={{ opacity: 0, scale: 0.85, rotate: t.r * 2 }}
            whileInView={{ opacity: 1, scale: 1, rotate: t.r }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 + i * 0.1, type: "spring", stiffness: 260, damping: 20 }}
          >
            {chip(t.l)}
          </motion.div>
        ))}
        <Box sx={{ position: "absolute", bottom: "6%", left: "50%", transform: "translateX(-50%)" }}>{store}</Box>
      </Box>
    </>
  )
}

/* ---- Mock storefront WooCommerce (marea.es · surf) ---- */
export function MareaMock() {
  const prods = [
    { n: "Automático Acero", p: "249€" },
    { n: "Cronógrafo Piel", p: "199€" },
    { n: "Diver 200m", p: "320€" },
    { n: "Minimal 38mm", p: "129€" },
  ]
  return (
    <Box sx={{ height: "100%", width: "100%", bgcolor: tokens.win, borderRadius: 1.5, border: `1px solid ${tokens.lineSoft}`, overflow: "hidden", display: "flex", flexDirection: "column" }}>
      <Stack direction="row" spacing={1} sx={{ alignItems: "center", px: 1.5, py: 1, borderBottom: `1px solid ${tokens.lineSoft}`, bgcolor: "#FBFBF9" }}>
        <Stack direction="row" spacing={0.5}>{[0, 1, 2].map((d) => <Box key={d} sx={{ width: 7, height: 7, borderRadius: 999, bgcolor: "#D8DAD6" }} />)}</Stack>
        <Box sx={{ flex: 1, textAlign: "center" }}>
          <Typography sx={{ fontFamily: fonts.mono, fontSize: 10.5, color: tokens.muted }}>marea.es</Typography>
        </Box>
        <Stack direction="row" spacing={0.5} sx={{ alignItems: "center" }}>
          <Box component="svg" viewBox="0 0 24 24" sx={{ width: 13, height: 13 }} aria-hidden><path d={siWoocommerce.path} fill={`#${siWoocommerce.hex}`} /></Box>
        </Stack>
      </Stack>
      <Box sx={{ p: 1.5, flex: 1, display: "flex", flexDirection: "column" }}>
        <Typography sx={{ fontFamily: fonts.serif, fontSize: 15, fontWeight: 700, color: tokens.ink, mb: 1 }}>Relojes para cada momento.</Typography>
        <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 1 }}>
          {prods.map((pr, i) => (
            <motion.div key={pr.n} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 + i * 0.08 }}>
              <Box sx={{ border: `1px solid ${tokens.lineSoft}`, borderRadius: 1.5, overflow: "hidden" }}>
                <Box sx={{ aspectRatio: "16 / 9", bgcolor: "#EEF0EC", display: "grid", placeItems: "center" }}>
                  <Box component="svg" viewBox="0 0 40 40" sx={{ width: 26, height: 26 }} aria-hidden>
                    <line x1="20" y1="5" x2="20" y2="9" stroke={tokens.muted} strokeWidth="3" strokeLinecap="round" />
                    <line x1="20" y1="31" x2="20" y2="35" stroke={tokens.muted} strokeWidth="3" strokeLinecap="round" />
                    <circle cx="20" cy="20" r="11" fill="#fff" stroke={tokens.muted} strokeWidth="2" />
                    <line x1="31" y1="18" x2="34" y2="18" stroke={tokens.muted} strokeWidth="2.5" strokeLinecap="round" />
                    <line x1="20" y1="20" x2="20" y2="14" stroke={tokens.ink} strokeWidth="1.6" strokeLinecap="round" />
                    <line x1="20" y1="20" x2="25" y2="22" stroke={tokens.bronze} strokeWidth="1.6" strokeLinecap="round" />
                    <circle cx="20" cy="20" r="1.4" fill={tokens.ink} />
                  </Box>
                </Box>
                <Box sx={{ p: 0.75 }}>
                  <Typography sx={{ fontSize: 10.5, fontWeight: 700, color: tokens.ink, lineHeight: 1.2 }}>{pr.n}</Typography>
                  <Typography sx={{ fontFamily: fonts.mono, fontSize: 10.5, color: tokens.ink, fontWeight: 700 }}>{pr.p}</Typography>
                </Box>
              </Box>
            </motion.div>
          ))}
        </Box>
      </Box>
    </Box>
  )
}

/* ---- Mock web de ventanas a medida (Totfinestra) ---- */
export function TotfinestraMock() {
  return (
    <Box sx={{ height: "100%", width: "100%", bgcolor: tokens.win, borderRadius: 1.5, border: `1px solid ${tokens.lineSoft}`, overflow: "hidden", display: "flex", flexDirection: "column" }}>
      <Stack direction="row" spacing={1} sx={{ alignItems: "center", px: 1.5, py: 1, borderBottom: `1px solid ${tokens.lineSoft}`, bgcolor: "#FBFBF9" }}>
        <Stack direction="row" spacing={0.5}>{[0, 1, 2].map((d) => <Box key={d} sx={{ width: 7, height: 7, borderRadius: 999, bgcolor: "#D8DAD6" }} />)}</Stack>
        <Box sx={{ flex: 1, textAlign: "center" }}><Typography sx={{ fontFamily: fonts.mono, fontSize: 10.5, color: tokens.muted }}>totfinestra.com</Typography></Box>
        <Typography sx={{ fontFamily: fonts.mono, fontSize: 9, color: tokens.bronze }}>Web nativa</Typography>
      </Stack>
      <Box sx={{ p: 1.5, flex: 1, display: "flex", flexDirection: "column", gap: 1.25 }}>
        <Stack direction="row" spacing={1.5} sx={{ alignItems: "center" }}>
          <Box sx={{ flex: 1 }}>
            <Typography sx={{ fontFamily: fonts.serif, fontSize: 15, fontWeight: 700, color: tokens.ink, lineHeight: 1.15 }}>Ventanas de aluminio a medida.</Typography>
            <motion.div initial={{ opacity: 0, y: 6 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
              <Box sx={{ mt: 1, display: "inline-flex", alignItems: "center", gap: 0.5, bgcolor: tokens.bronze, color: "#fff", borderRadius: 1.5, px: 1, py: 0.5 }}>
                <Typography sx={{ fontSize: 10, fontWeight: 700 }}>Pedir presupuesto →</Typography>
              </Box>
            </motion.div>
          </Box>
          {/* ventana (aluminio) */}
          <Box component="svg" viewBox="0 0 60 60" sx={{ width: 66, height: 66, flexShrink: 0 }}>
            <rect x="4" y="4" width="52" height="52" rx="2" fill="#EEF0EC" stroke={tokens.muted} strokeWidth="2" />
            <line x1="30" y1="4" x2="30" y2="56" stroke={tokens.muted} strokeWidth="2" />
            <line x1="4" y1="30" x2="56" y2="30" stroke={tokens.muted} strokeWidth="2" />
          </Box>
        </Stack>
        <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 0.75, mt: "auto" }}>
          {[0, 1, 2].map((i) => (
            <motion.div key={i} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.15 + i * 0.1 }}>
              <Box sx={{ aspectRatio: "4 / 3", borderRadius: 1, bgcolor: "#EEF0EC", border: `1px solid ${tokens.lineSoft}`, display: "grid", placeItems: "center" }}>
                <Box component="svg" viewBox="0 0 40 40" sx={{ width: 22, height: 22 }} aria-hidden>
                  <rect x="7" y="6" width="26" height="28" rx="1.5" fill="#fff" stroke={tokens.muted} strokeWidth="2" />
                  <line x1="20" y1="6" x2="20" y2="34" stroke={tokens.muted} strokeWidth="1.5" />
                  <line x1="7" y1="20" x2="33" y2="20" stroke={tokens.muted} strokeWidth="1.5" />
                </Box>
              </Box>
            </motion.div>
          ))}
        </Box>
        <Typography sx={{ fontFamily: fonts.mono, fontSize: 9, color: tokens.muted }}>proyectos realizados · autogestionable</Typography>
      </Box>
    </Box>
  )
}
