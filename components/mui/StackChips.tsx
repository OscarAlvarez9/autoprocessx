"use client"

import Box from "@mui/material/Box"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import * as si from "simple-icons"
import { tokens, fonts } from "@/lib/mui/theme"

type Icon = { path: string; hex: string; title: string }

// Mapa de etiqueta de stack al icono oficial de la marca. Lo que no es una
// herramienta con logo (CRO, RAG, SEO local...) se queda como texto: es más
// honesto que inventarle un icono genérico.
const ICONS: Record<string, Icon | undefined> = {
  "woocommerce": si.siWoocommerce,
  "n8n": si.siN8n,
  "claude": si.siClaude,
  "google sheets": si.siGooglesheets,
  "dropbox": si.siDropbox,
  "shopify": si.siShopify,
  "next.js": si.siNextdotjs,
  "wordpress": si.siWordpress,
  "mysql": si.siMysql,
  "postgresql + prisma": si.siPostgresql,
  "postgresql + pgvector": si.siPostgresql,
  "react": si.siReact,
  "contentful": si.siContentful,
  "google analytics 4": si.siGoogleanalytics,
  "google search console": si.siGooglesearchconsole,
  "search console": si.siGooglesearchconsole,
  "tailwind css": si.siTailwindcss,
  "sass": si.siSass,
  "semrush": si.siSemrush,
  "make": si.siMake,
  "asana api": si.siAsana,
  "whatsapp business api": si.siWhatsapp,
  "gemini ai (local)": si.siGooglegemini,
}

function iconFor(label: string): Icon | undefined {
  return ICONS[label.trim().toLowerCase()]
}

export default function StackChips({ items, size = "md" }: { items: string[]; size?: "sm" | "md" }) {
  const px = size === "sm" ? 1.4 : 1.75
  const py = size === "sm" ? 0.7 : 0.9
  const fs = size === "sm" ? 12.5 : 13.5
  const glyph = size === "sm" ? 15 : 18
  return (
    <Stack direction="row" sx={{ flexWrap: "wrap", gap: { xs: 1, md: 1.25 } }}>
      {items.map((s) => {
        const ic = iconFor(s)
        return (
          <Stack
            key={s}
            direction="row"
            spacing={1}
            sx={{
              alignItems: "center",
              border: `1px solid ${tokens.line}`,
              borderRadius: 999,
              px,
              py,
              bgcolor: tokens.win,
              transition: "border-color .2s",
              "&:hover": { borderColor: tokens.petrol },
            }}
          >
            {ic ? (
              <Box component="svg" viewBox="0 0 24 24" aria-hidden sx={{ width: glyph, height: glyph, flexShrink: 0 }}>
                <path d={ic.path} fill={`#${ic.hex}`} />
              </Box>
            ) : (
              <Box sx={{ width: 6, height: 6, borderRadius: 999, bgcolor: tokens.petrol, flexShrink: 0 }} />
            )}
            <Typography sx={{ fontFamily: fonts.mono, fontSize: fs, color: tokens.ink, whiteSpace: "nowrap" }}>{s}</Typography>
          </Stack>
        )
      })}
    </Stack>
  )
}
