"use client"

import { useEffect, useRef, useState, useSyncExternalStore } from "react"
import { motion, useReducedMotion } from "motion/react"
import Box from "@mui/material/Box"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import Paper from "@mui/material/Paper"
import ButtonBase from "@mui/material/ButtonBase"
import { siGooglesheets, siWoocommerce, siWordpress, siDropbox, siClaude, siN8n } from "simple-icons"
import { tokens, fonts } from "@/lib/mui/theme"
import { useLocale } from "@/components/LocaleProvider"
import { MAREA_FLOWS, type FlowNodeKind } from "@/lib/flujosMarea"

// Visor de los flujos reales de marea.es. El lienzo se dibuja con los nodos y
// las conexiones de la exportación de n8n (lib/flujosMarea.ts): no es una
// captura ni un esquema inventado, es el flujo tal cual, sin credenciales ni
// direcciones, maquetado por capas para que se lea limpio. Cada nodo lleva su
// nombre real y su número, que casa con la lista en orden de ejecución.

const TXT = {
  es: {
    tabs: {
      alta: ["Alta de producto", "Lee la hoja del proveedor, descarta lo que ya existe, escribe las descripciones con IA, crea el producto y sus variaciones y devuelve el ID a la hoja."],
      fotos: ["Fotos por EAN", "Cruza cada EAN con las imágenes de Dropbox, las sube a WordPress y las asigna al producto en orden."],
      publicar: ["Publicación controlada", "Lista los borradores, se queda solo con los que tienen fotos y los publica por lotes."],
      nombres: ["Nombres desde la hoja", "Compara el nombre de cada producto con el de la hoja del proveedor y corrige solo lo que no cuadra."],
      reclasificar: ["Reclasificación", "Cuando el proveedor cambia de criterio, recalcula categorías, crea las que faltan y reescribe los textos afectados."],
      seo: ["SEO de ficha", "Genera meta title y meta description para Rank Math, las valida y las escribe por lotes."],
    } as Record<string, [string, string]>,
    kinds: { trigger: "inicio", code: "código", sheets: "Google Sheets", if: "condición", loop: "bucle", wait: "pausa", ai: "IA · Claude", dropbox: "Dropbox", woo: "WooCommerce", wp: "WordPress", http: "HTTP", other: "nodo" } as Record<FlowNodeKind, string>,
    nodes: "nodos", links: "conexiones",
    listTitle: "Nodo a nodo, en orden de ejecución",
    note: "Dibujado desde la exportación real de n8n: mismos nodos y conexiones, ordenados para leerse de izquierda a derecha. Sin credenciales ni direcciones.",
    aria: (name: string, n: number) => `Diagrama del flujo de n8n "${name}", con ${n} nodos`,
    tablist: "Flujos de n8n de marea.es",
    back: (n: number) => `↩ vuelve a ${String(n).padStart(2, "0")}`,
    scroll: "desliza →",
  },
  ca: {
    tabs: {
      alta: ["Alta de producte", "Llegeix el full del proveïdor, descarta el que ja existeix, escriu les descripcions amb IA, crea el producte i les seves variacions i retorna l'ID al full."],
      fotos: ["Fotos per EAN", "Creua cada EAN amb les imatges de Dropbox, les puja a WordPress i les assigna al producte en ordre."],
      publicar: ["Publicació controlada", "Llista els esborranys, es queda només amb els que tenen fotos i els publica per lots."],
      nombres: ["Noms des del full", "Compara el nom de cada producte amb el del full del proveïdor i corregeix només el que no quadra."],
      reclasificar: ["Reclassificació", "Quan el proveïdor canvia de criteri, recalcula categories, crea les que falten i reescriu els textos afectats."],
      seo: ["SEO de fitxa", "Genera meta title i meta description per a Rank Math, les valida i les escriu per lots."],
    } as Record<string, [string, string]>,
    kinds: { trigger: "inici", code: "codi", sheets: "Google Sheets", if: "condició", loop: "bucle", wait: "pausa", ai: "IA · Claude", dropbox: "Dropbox", woo: "WooCommerce", wp: "WordPress", http: "HTTP", other: "node" } as Record<FlowNodeKind, string>,
    nodes: "nodes", links: "connexions",
    listTitle: "Node a node, en ordre d'execució",
    note: "Dibuixat des de l'exportació real de n8n: els mateixos nodes i connexions, ordenats per llegir-se d'esquerra a dreta. Sense credencials ni adreces.",
    aria: (name: string, n: number) => `Diagrama del flux de n8n "${name}", amb ${n} nodes`,
    tablist: "Fluxos de n8n de marea.es",
    back: (n: number) => `↩ torna a ${String(n).padStart(2, "0")}`,
    scroll: "llisca →",
  },
}

const BRAND: Partial<Record<FlowNodeKind, { path: string; hex: string }>> = {
  sheets: siGooglesheets,
  woo: siWoocommerce,
  wp: siWordpress,
  dropbox: siDropbox,
  ai: siClaude,
}
const kindColor = (k: FlowNodeKind) => (BRAND[k] ? `#${BRAND[k]!.hex}` : k === "trigger" ? tokens.petrol : tokens.muted)

/** Medida del contenedor para repartir columnas y filas. */
function useWidth<T extends HTMLElement>(initial: number) {
  const ref = useRef<T>(null)
  const [w, setW] = useState(initial)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const ro = new ResizeObserver(([e]) => setW(Math.round(e.contentRect.width)))
    ro.observe(el)
    return () => ro.disconnect()
  }, [])
  return [ref, w] as const
}

const MONO = "var(--font-mono-plex), monospace"
const SANS = "var(--font-sans-body), var(--font-geist-sans), system-ui, sans-serif"
const EDGE = "rgba(20,32,29,.30)"

// Glifos dibujados a mano para los nodos sin marca, centrados en 0,0.
function KindIcon({ k }: { k: FlowNodeKind }) {
  // WooCommerce: su logo completo no se lee a este tamaño; burbuja "Woo" como el nodo de n8n
  if (k === "woo") return (
    <g>
      <rect x={-15} y={-10} width={30} height={18} rx={4} fill={`#${siWoocommerce.hex}`} />
      <path d="M2,8 L7,13 L6,8 Z" fill={`#${siWoocommerce.hex}`} />
      <text y={-1} textAnchor="middle" dominantBaseline="central" fontFamily={SANS} fontWeight={800} fontSize={10} fill="#fff">Woo</text>
    </g>
  )
  const b = BRAND[k]
  if (b) {
    const sz = 22
    return <path d={b.path} fill={`#${b.hex}`} transform={`translate(${-sz / 2} ${-sz / 2}) scale(${sz / 24})`} />
  }
  const line = { fill: "none", stroke: tokens.ink, strokeWidth: 1.8, strokeLinecap: "round" as const, strokeLinejoin: "round" as const }
  switch (k) {
    case "trigger":
      return <path d="M-4,-7 L7,0 L-4,7 Z" fill={tokens.petrol} />
    case "code":
      return <text textAnchor="middle" dominantBaseline="central" fontFamily={MONO} fontWeight={700} fontSize={14} fill={tokens.ink}>{"{ }"}</text>
    case "if":
      return <g {...line}><path d="M-9,0 H-3 C1,0 1,-6 5,-6 H8 M-3,0 C1,0 1,6 5,6 H8" /><path d="M5.5,-8.5 L8,-6 L5.5,-3.5 M5.5,3.5 L8,6 L5.5,8.5" /></g>
    case "loop":
      return <g {...line}><path d="M7,-2 A7.5,7.5 0 1 0 6,4.5" /><path d="M7.5,-8.5 V-2 H1" /></g>
    case "wait":
      return <g fill={tokens.ink}><rect x={-6} y={-7} width={4} height={14} rx={1} /><rect x={2} y={-7} width={4} height={14} rx={1} /></g>
    default:
      return <g {...line}><path d="M-5,5 L5,-5 M-1,-5 H5 V1" /></g>
  }
}

/** Nombre en dos líneas como mucho, cortando por palabras. */
function wrap(text: string, max: number): string[] {
  const lines: string[] = []
  let cur = ""
  for (const w of text.split(/\s+/)) {
    const next = cur ? `${cur} ${w}` : w
    if (next.length <= max || !cur) cur = next
    else { lines.push(cur); cur = w }
  }
  if (cur) lines.push(cur)
  if (lines.length > 2) return [lines[0], `${lines.slice(1).join(" ").slice(0, max - 1)}…`]
  return lines
}

/** Polilínea ortogonal con esquinas redondeadas. */
function ortho(pts: [number, number][], r = 9) {
  const p = pts.filter((q, i) => i === 0 || q[0] !== pts[i - 1][0] || q[1] !== pts[i - 1][1])
  let d = `M${p[0][0]},${p[0][1]}`
  for (let i = 1; i < p.length - 1; i++) {
    const [x0, y0] = p[i - 1], [x, y] = p[i], [x2, y2] = p[i + 1]
    const d1 = Math.hypot(x - x0, y - y0), d2 = Math.hypot(x2 - x, y2 - y)
    const rr = Math.min(r, d1 / 2, d2 / 2)
    d += ` L${x - ((x - x0) / d1) * rr},${y - ((y - y0) / d1) * rr} Q${x},${y} ${x + ((x2 - x) / d2) * rr},${y + ((y2 - y) / d2) * rr}`
  }
  const last = p[p.length - 1]
  return `${d} L${last[0]},${last[1]}`
}

const NS = 46 // lado del nodo
const LANE = 104 // alto de carril: nodo, nombre en dos líneas y aire
const GAP = 22 // aire bajo la fila para las vueltas de bucle
const PAD = 20
const MIN_COL = 116

// Una sola fila, como el lienzo de n8n: si el flujo no cabe, se desliza en
// horizontal en vez de crecer hacia abajo.
function useLayout(flowIndex: number, view: number) {
  const flow = MAREA_FLOWS[flowIndex]
  const cols = Math.max(...flow.nodes.map((n) => n.c)) + 1
  const colW = Math.min(170, Math.max(MIN_COL, (view - PAD * 2) / cols))
  const width = Math.max(view, cols * colW + PAD * 2)
  const offX = (width - cols * colW) / 2
  const minL = Math.min(...flow.nodes.map((n) => n.l))
  const maxL = Math.max(...flow.nodes.map((n) => n.l))
  const top = PAD + 6
  const bottom = [top + (maxL - minL + 1) * LANE - 8]
  const hasBack = flow.edges.some(([a, b]) => b <= a)
  const pos = flow.nodes.map((n) => ({ r: 0, x: offX + n.c * colW + colW / 2, y: top + (n.l - minL) * LANE + NS / 2 + 4 }))
  return { flow, pos, colW, bottom, width, height: bottom[0] + (hasBack ? GAP : 0) + PAD - 6 }
}

function Canvas({ flowIndex, active, setActive, onMore }: { flowIndex: number; active: number | null; setActive: (i: number | null) => void; onMore: (more: boolean) => void }) {
  const reduce = useReducedMotion()
  const t = TXT[useLocale() === "ca" ? "ca" : "es"]
  const [ref, view] = useWidth<HTMLDivElement>(960)
  const { flow, pos, colW, bottom, width, height } = useLayout(flowIndex, view)
  const maxChars = Math.floor((colW - 10) / 6.4)
  let backN = 0

  // desplazamiento: fundido en los bordes, pista de "desliza" y arrastre con el ratón
  const [edge, setEdge] = useState({ start: true, end: true })
  const sync = () => {
    const el = ref.current
    if (!el) return
    const next = { start: el.scrollLeft < 4, end: el.scrollLeft + el.clientWidth >= el.scrollWidth - 4 }
    setEdge(next)
    onMore(!next.end)
  }
  useEffect(() => {
    if (ref.current) ref.current.scrollLeft = 0
    sync()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [flowIndex, view])
  const drag = useRef<{ x: number; left: number } | null>(null)
  const fade = (side: "left" | "right") => ({
    position: "absolute" as const, top: 0, bottom: 0, [side]: 0, width: 48, pointerEvents: "none" as const,
    background: `linear-gradient(to ${side === "left" ? "right" : "left"}, ${tokens.win}, transparent)`,
  })

  return (
    <Box sx={{ position: "relative" }}>
    <Box ref={ref} onScroll={sync}
      onPointerDown={(e) => { if (e.pointerType === "mouse" && ref.current) drag.current = { x: e.clientX, left: ref.current.scrollLeft } }}
      onPointerMove={(e) => { if (drag.current && ref.current) ref.current.scrollLeft = drag.current.left - (e.clientX - drag.current.x) }}
      onPointerUp={() => { drag.current = null }} onPointerLeave={() => { drag.current = null }}
      sx={{ width: "100%", overflowX: "auto", overflowY: "hidden", cursor: edge.start && edge.end ? "default" : "grab", "&:active": { cursor: edge.start && edge.end ? "default" : "grabbing" }, userSelect: "none", scrollbarWidth: "thin", scrollbarColor: `${tokens.line} transparent`, backgroundImage: "radial-gradient(rgba(20,32,29,.10) 1px, transparent 1px)", backgroundSize: "18px 18px", borderRadius: 2 }}>
      <svg width={width} height={height} role="img" aria-label={t.aria(flow.name, flow.nodes.length)} style={{ display: "block", maxWidth: "none" }}>
        {flow.edges.map(([a, b], k) => {
          const p = pos[a], q = pos[b]
          const x1 = p.x + NS / 2, x2 = q.x - NS / 2
          const xv = x2 - 16 // bajada justo antes del nodo destino, en el hueco entre columnas
          let d: string
          if (p.r === q.r && q.x > p.x) {
            const span = Math.round((q.x - p.x) / colW)
            if (p.y === q.y) d = `M${x1},${p.y} L${x2},${q.y}`
            else if (span <= 1) {
              const dx = Math.max(18, (x2 - x1) / 2)
              d = `M${x1},${p.y} C${x1 + dx},${p.y} ${x2 - dx},${q.y} ${x2},${q.y}`
            } else d = ortho([[x1, p.y], [xv, p.y], [xv, q.y], [x2, q.y]])
          } else if (q.r > p.r) {
            // salto de fila: baja por el canal y entra por la izquierda
            const yc = bottom[p.r] + GAP / 2
            d = ortho([[x1, p.y], [x1 + 14, p.y], [x1 + 14, yc], [xv, yc], [xv, q.y], [x2, q.y]])
          } else if (q.r < p.r) {
            // vuelta de bucle a una fila anterior: en vez de cruzar el lienzo, una etiqueta
            // a la derecha del nodo si cabe; si no, debajo del nombre
            const W = 82
            const right = x1 + 14 + W <= width - 6
            const lx = right ? x1 + 14 + W / 2 : x1 + 14, ly = right ? p.y : p.y + NS / 2 + 44
            const on = active === a || active === b
            return (
              <g key={`${flowIndex}-${k}`}>
                <path d={right ? `M${x1},${p.y} L${lx - W / 2},${p.y}` : ortho([[x1, p.y], [x1 + 14, p.y], [x1 + 14, ly - 9]])} fill="none" stroke={on ? tokens.petrol : EDGE} strokeWidth={on ? 2 : 1.5} />
                <rect x={lx - W / 2} y={ly - 9} width={W} height={18} rx={9} fill={tokens.win} stroke={on ? tokens.petrol : EDGE} />
                <text x={lx} y={ly + 0.5} textAnchor="middle" dominantBaseline="central" fontFamily={MONO} fontSize={9.5} fill={on ? tokens.petrol : tokens.muted}>{t.back(b + 1)}</text>
              </g>
            )
          } else {
            // vuelta de bucle en la misma fila: por debajo y de vuelta a la entrada
            const yc = bottom[p.r] + 4 + (backN++ % 3) * 6
            d = ortho([[x1, p.y], [x1 + 14, p.y], [x1 + 14, yc], [xv, yc], [xv, q.y], [x2, q.y]])
          }
          const on = active === a || active === b
          return (
            <motion.path key={`${flowIndex}-${k}`} d={d} fill="none" stroke={on ? tokens.petrol : EDGE} strokeWidth={on ? 2 : 1.5}
              initial={reduce ? false : { opacity: 0 }} animate={{ opacity: 1 }}
              transition={{ duration: 0.35, delay: reduce ? 0 : Math.min(a, 24) * 0.025 }} />
          )
        })}
        {flow.nodes.map((n, i) => {
          const { x, y } = pos[i]
          const on = active === i
          const h = NS / 2
          const shape = n.k === "trigger"
            ? `M0,${-h} H${h - 10} Q${h},${-h} ${h},${-h + 10} V${h - 10} Q${h},${h} ${h - 10},${h} H0 A${h},${h} 0 0 1 0,${-h} Z`
            : `M${-h + 10},${-h} H${h - 10} Q${h},${-h} ${h},${-h + 10} V${h - 10} Q${h},${h} ${h - 10},${h} H${-h + 10} Q${-h},${h} ${-h},${h - 10} V${-h + 10} Q${-h},${-h} ${-h + 10},${-h} Z`
          const lines = wrap(n.n, maxChars)
          return (
            <motion.g key={`${flowIndex}-${i}`} initial={reduce ? false : { opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: reduce ? 0 : Math.min(i, 24) * 0.025 }}
              onMouseEnter={() => setActive(i)} onMouseLeave={() => setActive(null)}>
              <g transform={`translate(${x} ${y})`}>
                <text x={-h} y={-h - 7} fontFamily={MONO} fontSize={9.5} fill={on ? tokens.petrol : tokens.muted}>{String(i + 1).padStart(2, "0")}</text>
                <path d={shape} fill={tokens.win} stroke={on ? tokens.petrol : "rgba(20,32,29,.22)"} strokeWidth={on ? 2 : 1.2} />
                <KindIcon k={n.k} />
                {n.k !== "trigger" && <circle cx={-h} cy={0} r={3.5} fill={tokens.win} stroke="rgba(20,32,29,.35)" strokeWidth={1.2} />}
                <circle cx={h} cy={0} r={3.5} fill={tokens.win} stroke="rgba(20,32,29,.35)" strokeWidth={1.2} />
                <text textAnchor="middle" y={h + 16} fontFamily={SANS} fontSize={11.5} fontWeight={600} fill={on ? tokens.petrol : tokens.ink}>
                  {lines.map((l, j) => <tspan key={j} x={0} dy={j === 0 ? 0 : 14}>{l}</tspan>)}
                </text>
              </g>
            </motion.g>
          )
        })}
      </svg>
    </Box>
    {!edge.start && <Box sx={fade("left")} />}
    {!edge.end && <Box sx={fade("right")} />}
    </Box>
  )
}

function subscribeHash(cb: () => void) {
  window.addEventListener("hashchange", cb)
  return () => window.removeEventListener("hashchange", cb)
}

export default function MareaFlowViewer() {
  const t = TXT[useLocale() === "ca" ? "ca" : "es"]
  // enlace directo a un flujo (#flujo-fotos, #flujo-seo...); un clic en una pestaña manda
  const hash = useSyncExternalStore(subscribeHash, () => window.location.hash, () => "")
  const fromHash = MAREA_FLOWS.findIndex((f) => `#flujo-${f.id}` === hash)
  const [picked, setSel] = useState<number | null>(null)
  const sel = picked ?? Math.max(0, fromHash)
  const [active, setActive] = useState<number | null>(null)
  const [more, setMore] = useState(false)
  const flow = MAREA_FLOWS[sel]
  const [title, desc] = t.tabs[flow.id] ?? [flow.name, ""]

  return (
    <Box>
      <Stack direction="row" role="tablist" aria-label={t.tablist} sx={{ flexWrap: "wrap", gap: 1, mb: { xs: 2.5, md: 3 } }}>
        {MAREA_FLOWS.map((f, i) => {
          const on = i === sel
          return (
            <ButtonBase key={f.id} role="tab" aria-selected={on} id={`flow-tab-${f.id}`} aria-controls="flow-panel"
              onClick={() => { setSel(i); setActive(null) }}
              sx={{ borderRadius: 999, px: 1.75, py: 0.8, border: `1px solid ${on ? tokens.ink : tokens.line}`, bgcolor: on ? tokens.ink : tokens.win, color: on ? tokens.paper : tokens.ink, fontSize: 14, fontWeight: 600, transition: "background-color .2s, color .2s", "&:hover": { borderColor: tokens.ink }, "&.Mui-focusVisible": { outline: `2px solid ${tokens.petrol}`, outlineOffset: 2 }, "@media (prefers-reduced-motion: reduce)": { transition: "none" } }}>
              {t.tabs[f.id]?.[0] ?? f.name}
            </ButtonBase>
          )
        })}
      </Stack>

      <Paper id="flow-panel" role="tabpanel" aria-labelledby={`flow-tab-${flow.id}`} elevation={2} sx={{ borderRadius: 3, overflow: "hidden", border: `1px solid ${tokens.lineSoft}`, bgcolor: tokens.win }}>
        <Stack direction="row" spacing={1.25} sx={{ alignItems: "center", px: 2, py: 1.25, borderBottom: `1px solid ${tokens.lineSoft}`, minWidth: 0 }}>
          <Box component="svg" viewBox="0 0 24 24" aria-hidden sx={{ width: 16, height: 16, flexShrink: 0 }}><path d={siN8n.path} fill={`#${siN8n.hex}`} /></Box>
          <Typography sx={{ fontFamily: fonts.mono, fontSize: 11.5, color: tokens.ink, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", minWidth: 0 }}>{flow.name}</Typography>
          <Typography sx={{ fontFamily: fonts.mono, fontSize: 11, color: tokens.muted, ml: "auto !important", whiteSpace: "nowrap", display: { xs: "none", sm: "block" } }}>
            {flow.nodes.length} {t.nodes} · {flow.edges.length} {t.links}
          </Typography>
          {more && (
            <Typography aria-hidden sx={{ fontFamily: fonts.mono, fontSize: 10.5, fontWeight: 700, color: tokens.petrol, border: `1px solid ${tokens.line}`, borderRadius: 999, px: 1, py: 0.2, whiteSpace: "nowrap", ml: { xs: "auto !important", sm: 1.25 } }}>
              {t.scroll}
            </Typography>
          )}
        </Stack>

        <Box sx={{ px: { xs: 1, md: 2 }, pt: { xs: 1.5, md: 2 } }}>
          <Canvas flowIndex={sel} active={active} setActive={setActive} onMore={setMore} />
        </Box>

        <Box sx={{ px: { xs: 2, md: 3 }, py: { xs: 2.5, md: 3 }, borderTop: `1px solid ${tokens.lineSoft}` }}>
          <Typography variant="h3" sx={{ fontFamily: fonts.serif, fontSize: 20, fontWeight: 600, color: tokens.ink, mb: 0.5 }}>{title}</Typography>
          <Typography variant="body1" sx={{ color: tokens.body, fontSize: 15, mb: 2.5, maxWidth: 720 }}>{desc}</Typography>
          <Typography sx={{ fontFamily: fonts.mono, fontSize: 11, color: tokens.muted, mb: 1 }}>{t.listTitle}</Typography>
          <Box component="ol" sx={{ listStyle: "none", p: 0, m: 0, columnCount: { xs: 1, sm: 2, md: 3 }, columnGap: 4 }}>
            {flow.nodes.map((n, i) => {
              const on = active === i
              return (
                <Box component="li" key={`${flow.id}-${i}`} onMouseEnter={() => setActive(i)} onMouseLeave={() => setActive(null)}
                  sx={{ breakInside: "avoid", display: "grid", gridTemplateColumns: "26px 1fr auto", alignItems: "baseline", gap: 1, py: 0.6, px: 0.75, mx: -0.75, borderRadius: 1, bgcolor: on ? tokens.surface : "transparent" }}>
                  <Typography sx={{ fontFamily: fonts.mono, fontSize: 11, fontWeight: 700, color: on ? tokens.petrol : tokens.muted }}>{String(i + 1).padStart(2, "0")}</Typography>
                  <Typography sx={{ fontSize: 14, fontWeight: 600, color: tokens.ink, minWidth: 0 }}>{n.n}</Typography>
                  <Stack direction="row" spacing={0.6} sx={{ alignItems: "center" }}>
                    <Box sx={{ width: 6, height: 6, borderRadius: 999, bgcolor: kindColor(n.k), flexShrink: 0 }} />
                    <Typography sx={{ fontFamily: fonts.mono, fontSize: 10, color: tokens.muted, whiteSpace: "nowrap" }}>{t.kinds[n.k]}</Typography>
                  </Stack>
                </Box>
              )
            })}
          </Box>
        </Box>
      </Paper>
      <Typography sx={{ fontFamily: fonts.mono, fontSize: 11, color: tokens.muted, mt: 1.5 }}>{t.note}</Typography>
    </Box>
  )
}
