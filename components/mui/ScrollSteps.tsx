"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useReducedMotion } from "motion/react"
import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import { tokens, fonts } from "@/lib/mui/theme"
import { ArtifactWindow } from "@/components/mui/shared"

export interface ScrollStep {
  label: string
  title: string
  meta?: string
  tag: string
  desc: string
  artifact: React.ReactNode
}

/**
 * Scrollytelling: lista sticky a la izquierda + artefactos que van bajando a la
 * derecha, con la etapa activa resaltada vía IntersectionObserver. Es el patrón
 * de "Nuestra metodología" de la home, parametrizado por props para reusarlo.
 */
export default function ScrollSteps({
  id, kicker, title, subtitle, steps,
}: {
  id?: string
  kicker?: string
  title: string
  subtitle: string
  steps: ScrollStep[]
}) {
  const [active, setActive] = useState(0)
  const refs = useRef<(HTMLDivElement | null)[]>([])
  const reduce = useReducedMotion()

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) setActive(Number(e.target.getAttribute("data-i"))) }),
      { rootMargin: "-45% 0px -45% 0px" }
    )
    refs.current.forEach((el) => el && obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <Box component="section" id={id} sx={{ py: { xs: 8, md: 12 }, borderBottom: `1px solid ${tokens.lineSoft}`, scrollMarginTop: 72 }}>
      <Container>
        {/* Desktop: índice sticky + artefactos en scroll (sin cambios) */}
        <Box sx={{ display: { xs: "none", md: "grid" }, gridTemplateColumns: "0.85fr 1.15fr", gap: 8, alignItems: "start" }}>
          {/* Izquierda sticky */}
          <Box sx={{ position: { md: "sticky" }, top: 96, alignSelf: "start" }}>
            <Typography variant="h2" sx={{ fontSize: { xs: 30, md: 44 }, color: tokens.ink, mb: 2 }}>{title}</Typography>
            <Typography variant="body1" sx={{ color: tokens.muted, mb: 4, maxWidth: 380 }}>{subtitle}</Typography>
            <Stack spacing={1}>
              {steps.map((s, i) => {
                const on = i === active
                return (
                  <Box key={s.label} onClick={() => refs.current[i]?.scrollIntoView({ behavior: "smooth", block: "center" })}
                    sx={{ cursor: "pointer", display: "flex", alignItems: "center", gap: 1.5, px: 2, py: 1.5, borderRadius: 2, transition: "all .2s", border: `1px solid ${on ? tokens.line : "transparent"}`, bgcolor: on ? tokens.win : "transparent", boxShadow: on ? "0 6px 20px -14px rgba(27,30,34,.35)" : "none" }}>
                    <Typography sx={{ fontFamily: fonts.mono, fontSize: 12, color: on ? tokens.bronze : tokens.muted, width: 22 }}>0{i + 1}</Typography>
                    <Typography sx={{ fontWeight: 700, fontSize: 16, color: on ? tokens.ink : tokens.muted }}>{s.label}</Typography>
                  </Box>
                )
              })}
            </Stack>
          </Box>
          {/* Derecha scroll */}
          <Stack spacing={{ xs: 6, md: 10 }}>
            {steps.map((s, i) => (
              <Box key={s.label} ref={(el: HTMLDivElement | null) => { refs.current[i] = el }} data-i={i} sx={{ scrollMarginTop: 100 }}>
                <Typography variant="h3" sx={{ fontSize: { xs: 22, md: 28 }, color: tokens.ink, mb: 1 }}>
                  {s.title}{s.meta && <Box component="span" sx={{ color: tokens.muted, fontFamily: fonts.mono, fontSize: "0.6em", fontWeight: 400 }}> ({s.meta})</Box>}
                </Typography>
                <Typography variant="body1" sx={{ color: tokens.body, mb: 3, maxWidth: 480 }}>{s.desc}</Typography>
                <ArtifactWindow tag={s.tag} ratio="16 / 10">{s.artifact}</ArtifactWindow>
              </Box>
            ))}
          </Stack>
        </Box>

        {/* Móvil: timeline vertical, los cuatro pasos siempre visibles */}
        <Box sx={{ display: { xs: "block", md: "none" } }}>
          <Typography variant="h2" sx={{ fontSize: 30, color: tokens.ink, mb: 2 }}>{title}</Typography>
          <Typography variant="body1" sx={{ color: tokens.muted, mb: 4 }}>{subtitle}</Typography>
          <Box>
            {steps.map((s, i) => {
              const last = i === steps.length - 1
              return (
                <Box key={s.label} component={motion.div}
                  initial={reduce ? false : { opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-8% 0px" }}
                  transition={{ duration: 0.4 }}
                  sx={{ display: "grid", gridTemplateColumns: "34px 1fr", columnGap: 2 }}>
                  {/* nodo + línea conectora */}
                  <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <Box sx={{ width: 34, height: 34, borderRadius: 999, border: `1.5px solid ${tokens.petrol}`, bgcolor: tokens.win, display: "grid", placeItems: "center", flexShrink: 0 }}>
                      <Typography sx={{ fontFamily: fonts.mono, fontSize: 12, fontWeight: 700, color: tokens.petrol }}>0{i + 1}</Typography>
                    </Box>
                    {!last && <Box sx={{ flexGrow: 1, width: "2px", bgcolor: `${tokens.petrol}33`, mt: 0.5 }} />}
                  </Box>
                  {/* contenido del paso */}
                  <Box sx={{ pb: last ? 0 : 5 }}>
                    <Typography variant="h3" component="h3" sx={{ fontFamily: fonts.serif, fontSize: 22, color: tokens.ink, mb: 0.5, mt: 0.25 }}>
                      {s.title}{s.meta && <Box component="span" sx={{ color: tokens.muted, fontFamily: fonts.mono, fontSize: "0.6em", fontWeight: 400 }}> ({s.meta})</Box>}
                    </Typography>
                    <Typography variant="body1" sx={{ color: tokens.body, mb: s.artifact ? 2.5 : 0 }}>{s.desc}</Typography>
                    {s.artifact && <ArtifactWindow tag={s.tag} ratio="16 / 10">{s.artifact}</ArtifactWindow>}
                  </Box>
                </Box>
              )
            })}
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
