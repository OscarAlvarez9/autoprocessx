"use client"

// Sección "Lo que suele frenar las ventas en X" de las landings de plataforma.
// Mismo ritmo texto/artefacto que la Home y Crecimiento: dos filas con artefacto
// (alternando lado), una fila de dos columnas de texto con glifo, y un statement
// de cierre a todo el ancho (resuelve la celda huérfana del grid antiguo).

import type { ReactNode } from "react"
import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import { tokens, fonts } from "@/lib/mui/theme"
import { Reveal } from "@/components/mui/shared"
import { BlockGlyph, type GlyphName } from "@/components/mui/landingGlyphs"

type FrenoItem = { t: string; d: string; g: GlyphName }

export function FrenosSection({ title, intro, rows, pair, closing }: {
  title: string
  intro: string
  rows: { t: string; d: string; artifact: ReactNode }[]
  pair: [FrenoItem, FrenoItem]
  closing: { t: string; d: string }
}) {
  return (
    <Box component="section" sx={{ py: { xs: 8, md: 12 }, borderBottom: `1px solid ${tokens.lineSoft}` }}>
      <Container>
        <Reveal>
          <Box sx={{ maxWidth: 620, mb: { xs: 5, md: 7 } }}>
            <Typography variant="h2" sx={{ fontSize: { xs: 28, md: 40 }, color: tokens.ink, mb: 2 }}>{title}</Typography>
            <Typography variant="body1" sx={{ fontSize: { xs: 16, md: 18 }, color: tokens.body }}>{intro}</Typography>
          </Box>
        </Reveal>

        <Stack spacing={{ xs: 5, md: 9 }}>
          {rows.map((r, i) => {
            const artLeft = i % 2 === 1 // filas impares: artefacto a la izquierda en desktop
            return (
              <Box key={r.t} sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap: { xs: 3, md: 6 }, alignItems: "center" }}>
                <Box sx={{ order: { md: artLeft ? 2 : 1 } }}>
                  <Reveal>
                    <Box>
                      <Typography sx={{ fontFamily: fonts.serif, fontSize: { xs: 22, md: 26 }, fontWeight: 600, color: tokens.ink, mb: 1.5 }}>{r.t}</Typography>
                      <Typography variant="body1" sx={{ fontSize: { xs: 16, md: 17 }, color: tokens.body, maxWidth: 480 }}>{r.d}</Typography>
                    </Box>
                  </Reveal>
                </Box>
                <Box sx={{ order: { md: artLeft ? 1 : 2 } }}>
                  <Reveal delay={0.08}>{r.artifact}</Reveal>
                </Box>
              </Box>
            )
          })}
        </Stack>

        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap: { xs: 3, md: 4 }, mt: { xs: 5, md: 9 } }}>
          {pair.map((p) => (
            <Reveal key={p.t}>
              <Box sx={{ borderTop: `2px solid ${tokens.line}`, pt: 2.5 }}>
                <Box sx={{ mb: 1.75 }}><BlockGlyph name={p.g} /></Box>
                <Typography sx={{ fontFamily: fonts.serif, fontSize: 21, fontWeight: 600, color: tokens.ink, mb: 1 }}>{p.t}</Typography>
                <Typography variant="body1" sx={{ color: tokens.body }}>{p.d}</Typography>
              </Box>
            </Reveal>
          ))}
        </Box>

        <Reveal>
          <Box sx={{ mt: { xs: 5, md: 9 }, borderTop: `2px solid ${tokens.petrol}`, pt: { xs: 3, md: 4 } }}>
            <Typography sx={{ fontFamily: fonts.serif, fontSize: { xs: 24, md: 32 }, fontWeight: 600, color: tokens.ink, mb: 1.5, maxWidth: 760, lineHeight: 1.15 }}>{closing.t}</Typography>
            <Typography variant="body1" sx={{ fontSize: { xs: 16, md: 18 }, color: tokens.body, maxWidth: 720 }}>{closing.d}</Typography>
          </Box>
        </Reveal>
      </Container>
    </Box>
  )
}
