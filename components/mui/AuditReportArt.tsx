"use client"

import { motion, useReducedMotion } from "motion/react"
import Box from "@mui/material/Box"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import { tokens, fonts } from "@/lib/mui/theme"
import { ArtifactWindow } from "@/components/mui/shared"
import { useLocale } from "@/components/LocaleProvider"

// Hero de Auditoría: el entregable dibujado a mano. Un informe de ejemplo con
// hallazgos de SEO, GEO y conversión ordenados por impacto en ventas. Es un
// ejemplo genérico (rotulado), no la auditoría de ningún cliente.

type Sev = "alto" | "medio" | "bajo"
const SEV_COLOR: Record<Sev, string> = { alto: tokens.red, medio: "#C98A1B", bajo: tokens.muted }

const TXT = {
  es: {
    tag: "auditoría · ejemplo de informe",
    title: "Informe de auditoría",
    store: "tienda de ejemplo · Shopify",
    order: "ordenado por impacto en ventas",
    sev: { alto: "alto", medio: "medio", bajo: "bajo" } as Record<Sev, string>,
    groups: [
      { area: "SEO", items: [["Categorías que compiten por la misma búsqueda", "alto"], ["Fichas sin Schema de producto", "medio"]] },
      { area: "GEO", items: [["La IA no cita la tienda al preguntar qué comprar", "medio"]] },
      { area: "Conversión", items: [["Un paso de más en el checkout móvil", "alto"], ["Sin eventos de carrito en la analítica", "medio"]] },
    ] as { area: string; items: [string, Sev][] }[],
    foot: "cada hallazgo con su porqué y cómo arreglarlo",
    example: "ejemplo",
  },
  ca: {
    tag: "auditoria · exemple d'informe",
    title: "Informe d'auditoria",
    store: "botiga d'exemple · Shopify",
    order: "ordenat per impacte en vendes",
    sev: { alto: "alt", medio: "mitjà", bajo: "baix" } as Record<Sev, string>,
    groups: [
      { area: "SEO", items: [["Categories que competeixen per la mateixa cerca", "alto"], ["Fitxes sense Schema de producte", "medio"]] },
      { area: "GEO", items: [["La IA no cita la botiga quan es pregunta què comprar", "medio"]] },
      { area: "Conversió", items: [["Un pas de més al checkout mòbil", "alto"], ["Sense esdeveniments de cistella a l'analítica", "medio"]] },
    ] as { area: string; items: [string, Sev][] }[],
    foot: "cada troballa amb el perquè i com arreglar-la",
    example: "exemple",
  },
}

export default function AuditReportArt() {
  const locale = useLocale()
  const t = locale === "ca" ? TXT.ca : TXT.es
  const reduce = useReducedMotion()
  let row = 0
  return (
    <ArtifactWindow tag={t.tag} ratio="auto">
      <Stack spacing={1.5}>
        <Stack direction="row" sx={{ alignItems: "flex-end", justifyContent: "space-between", gap: 1.5, pb: 1.25, borderBottom: `1px solid ${tokens.lineSoft}` }}>
          <Box sx={{ minWidth: 0 }}>
            <Typography sx={{ fontFamily: fonts.serif, fontSize: { xs: 18, md: 21 }, fontWeight: 600, color: tokens.ink, lineHeight: 1.15 }}>{t.title}</Typography>
            <Typography sx={{ fontFamily: fonts.mono, fontSize: 10.5, color: tokens.muted, mt: 0.4 }}>{t.store}</Typography>
          </Box>
          <Typography sx={{ fontFamily: fonts.mono, fontSize: 10, color: tokens.muted, border: `1px dashed ${tokens.line}`, borderRadius: 999, px: 1, py: 0.25, flexShrink: 0 }}>{t.example}</Typography>
        </Stack>
        <Typography sx={{ fontFamily: fonts.mono, fontSize: 10, color: tokens.muted }}>{t.order}</Typography>
        {t.groups.map((g) => (
          <Box key={g.area}>
            <Typography sx={{ fontFamily: fonts.mono, fontSize: 10.5, fontWeight: 700, color: tokens.petrol, mb: 0.6 }}>{g.area}</Typography>
            <Stack spacing={0.6}>
              {g.items.map(([label, sev]) => {
                const i = row++
                return (
                  <Box
                    key={label}
                    component={motion.div}
                    initial={reduce ? false : { opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.15 + i * 0.07, duration: 0.3 }}
                    sx={{ display: "flex", alignItems: "center", gap: 1.1, bgcolor: tokens.paper, border: `1px solid ${tokens.lineSoft}`, borderRadius: 1.5, px: 1.25, py: 0.8 }}
                  >
                    <Box sx={{ width: 7, height: 7, borderRadius: 999, bgcolor: SEV_COLOR[sev], flexShrink: 0 }} />
                    <Typography sx={{ fontSize: { xs: 12.5, md: 13.5 }, color: tokens.ink, flex: 1, minWidth: 0 }}>{label}</Typography>
                    <Typography sx={{ fontFamily: fonts.mono, fontSize: 9.5, fontWeight: 700, color: SEV_COLOR[sev], bgcolor: `${SEV_COLOR[sev]}18`, borderRadius: 999, px: 0.8, py: 0.2, flexShrink: 0 }}>{t.sev[sev]}</Typography>
                  </Box>
                )
              })}
            </Stack>
          </Box>
        ))}
        <Typography sx={{ fontFamily: fonts.mono, fontSize: 10, color: tokens.muted, pt: 0.5 }}>{t.foot}</Typography>
      </Stack>
    </ArtifactWindow>
  )
}
