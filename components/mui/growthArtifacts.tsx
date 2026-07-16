"use client"

import { useEffect, useState } from "react"
import { motion, useReducedMotion } from "motion/react"
import Box from "@mui/material/Box"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import Paper from "@mui/material/Paper"
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

/* ============================================================
   RankClimb · tu ficha sube posiciones en la SERP (SEO)
   ============================================================ */

const SERP_OTHERS = [
  "competidor-grande.com",
  "marketplace-generico.com",
  "blog-agregador.es",
  "directorio-tiendas.com",
]
const CLIMB_STEPS = [4, 3, 1, 0] // posición (índice) de tu tienda en cada paso

export function RankClimb() {
  const reduce = useReducedMotion()
  const [step, setStep] = useState(reduce ? CLIMB_STEPS.length - 1 : 0)

  useEffect(() => {
    if (reduce) return
    const t = setInterval(() => setStep((s) => (s + 1) % CLIMB_STEPS.length), 1600)
    return () => clearInterval(t)
  }, [reduce])

  const mine = CLIMB_STEPS[step]
  const rows: { label: string; me: boolean }[] = []
  let o = 0
  for (let i = 0; i < 5; i++) {
    if (i === mine) rows.push({ label: "tu-tienda.com", me: true })
    else rows.push({ label: SERP_OTHERS[o++], me: false })
  }

  return (
    <Frame tag="serp · tu ficha subiendo" right={
      <Box sx={{ bgcolor: `${tokens.teal}25`, borderRadius: 999, px: 1.25, py: 0.35 }}>
        <Typography sx={{ fontFamily: fonts.mono, fontSize: 12, fontWeight: 700, color: tokens.teal }}>pos. {mine + 1}</Typography>
      </Box>
    }>
      <Box sx={{ p: 2 }}>
        <Box sx={{ border: `1px solid ${tokens.lineSoft}`, borderRadius: 1.5, px: 1.25, py: 0.75, mb: 1.5, bgcolor: "#FAFBFB" }}>
          <Typography sx={{ fontFamily: fonts.mono, fontSize: 11, color: tokens.muted }}>🔍 comprar reloj automático</Typography>
        </Box>
        <Stack spacing={0.75}>
          {rows.map((r, i) => (
            <Box
              key={r.label}
              component={motion.div}
              layout={!reduce}
              transition={{ type: "spring", stiffness: 320, damping: 28 }}
              sx={{
                display: "flex", alignItems: "center", gap: 1.25, px: 1.25, py: 0.9, borderRadius: 1.5,
                border: `1px solid ${r.me ? tokens.teal : tokens.lineSoft}`,
                bgcolor: r.me ? `${tokens.teal}0D` : tokens.win,
              }}
            >
              <Typography sx={{ fontFamily: fonts.mono, fontSize: 10.5, color: r.me ? tokens.teal : tokens.muted, width: 14 }}>{i + 1}</Typography>
              <Box sx={{ flex: 1, minWidth: 0 }}>
                <Typography sx={{ fontSize: { xs: 11, sm: 12 }, fontWeight: r.me ? 700 : 500, color: r.me ? tokens.ink : tokens.muted, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{r.label}</Typography>
                <Box sx={{ height: 4, mt: 0.5, borderRadius: 999, width: r.me ? "72%" : "56%", bgcolor: r.me ? `${tokens.teal}33` : tokens.surface }} />
              </Box>
              {r.me && <Typography sx={{ fontFamily: fonts.mono, fontSize: 9.5, color: tokens.teal, flexShrink: 0, display: { xs: "none", sm: "inline" } }}>↑ tu ficha</Typography>}
            </Box>
          ))}
        </Stack>
        <Typography sx={{ fontFamily: fonts.mono, fontSize: 10, color: tokens.muted, mt: 1.5 }}>{`// SEO de producto + GEO · posiciones ilustrativas, el dato real sale del diagnóstico`}</Typography>
      </Box>
    </Frame>
  )
}

/* ============================================================
   FunnelLeakFix · la fuga del funnel se sella (CRO)
   ============================================================ */

const STAGES = [
  { label: "Visitas", wBefore: 100, wAfter: 100 },
  { label: "Ficha de producto", wBefore: 64, wAfter: 70 },
  { label: "Carrito", wBefore: 30, wAfter: 46 },
  { label: "Checkout", wBefore: 14, wAfter: 34 },
  { label: "Compra", wBefore: 8, wAfter: 26 },
]

export function FunnelLeakFix() {
  const reduce = useReducedMotion()
  const [fixed, setFixed] = useState(reduce)

  useEffect(() => {
    if (reduce) return
    const t = setInterval(() => setFixed((f) => !f), 2600)
    return () => clearInterval(t)
  }, [reduce])

  return (
    <Frame tag="funnel · antes ↔ después del CRO" right={
      <Box sx={{ bgcolor: fixed ? `${tokens.teal}25` : `${tokens.brick}22`, borderRadius: 999, px: 1.25, py: 0.35 }}>
        <Typography sx={{ fontFamily: fonts.mono, fontSize: 12, fontWeight: 700, color: fixed ? tokens.teal : tokens.brick }}>
          {fixed ? "fuga sellada" : "fuga detectada"}
        </Typography>
      </Box>
    }>
      <Box sx={{ p: 2.5 }}>
        <Stack spacing={1}>
          {STAGES.map((s, i) => {
            const w = fixed ? s.wAfter : s.wBefore
            const leak = !fixed && i >= 2
            return (
              <Box key={s.label}>
                <Stack direction="row" sx={{ justifyContent: "space-between", mb: 0.4 }}>
                  <Typography sx={{ fontSize: 11.5, fontWeight: 600, color: tokens.ink }}>{s.label}</Typography>
                  {leak && <Typography sx={{ fontFamily: fonts.mono, fontSize: 11, fontWeight: 700, color: tokens.brick }}>fuga</Typography>}
                </Stack>
                <Box sx={{ height: 12, borderRadius: 999, bgcolor: tokens.surface, overflow: "hidden" }}>
                  <Box
                    component={motion.div}
                    animate={{ width: `${w}%` }}
                    transition={{ duration: reduce ? 0 : 0.9, ease: [0.22, 1, 0.36, 1] }}
                    sx={{ height: "100%", borderRadius: 999, bgcolor: leak ? `${tokens.brick}88` : tokens.teal }}
                  />
                </Box>
              </Box>
            )
          })}
        </Stack>
        <Typography sx={{ fontFamily: fonts.mono, fontSize: 10, color: tokens.muted, mt: 2 }}>
          {`// fichas, carrito y checkout sin fricción · proporciones ilustrativas, no una promesa`}
        </Typography>
      </Box>
    </Frame>
  )
}
