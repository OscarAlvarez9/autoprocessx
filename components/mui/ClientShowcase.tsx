"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { useReducedMotion } from "motion/react"
import Box from "@mui/material/Box"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import { siShopify, siWoocommerce, siGoogleanalytics, siGooglesearchconsole, siClaude } from "simple-icons"
import { tokens, fonts } from "@/lib/mui/theme"
import BrandCaseCard from "@/components/mui/BrandCaseCard"
import { allCaseSlugs, getCase, casePhoto, caseVertical, type Caso } from "@/lib/casesEcom"

const AUTO_SPEED = 100 // px/s del desfile automático

const PLATFORMS: { name: string; path: string | null; hex: string; href?: string }[] = [
  { name: "Shopify", path: siShopify.path, hex: siShopify.hex, href: "/agencia-shopify" },
  { name: "WooCommerce", path: siWoocommerce.path, hex: siWoocommerce.hex, href: "/agencia-woocommerce" },
]

// Fila de plataformas con sus logos en color oficial. Solo las dos plataformas
// con proyectos reales y landing propia: Shopify y WooCommerce, cada una
// enlazada a su página de agencia.
function PlatformLogos() {
  return (
    <Stack direction="row" spacing={{ xs: 2.5, md: 4 }} sx={{ alignItems: "center", justifyContent: "center", flexWrap: "wrap", rowGap: 1.5 }}>
      {PLATFORMS.map((p) => (
        <Stack key={p.name} direction="row" spacing={1}
          {...(p.href ? { component: Link, href: p.href } : {})}
          sx={{ alignItems: "center", textDecoration: "none", ...(p.href ? { "&:hover .plat-name": { color: tokens.ink } } : {}) }}>
          {p.path ? (
            <Box component="svg" viewBox="0 0 24 24" sx={{ width: { xs: 18, md: 24 }, height: { xs: 18, md: 24 } }} aria-hidden>
              <path d={p.path} fill={`#${p.hex}`} />
            </Box>
          ) : (
            <Typography aria-hidden sx={{ fontFamily: fonts.mono, fontSize: { xs: 11, md: 14 }, fontWeight: 700, color: `#${p.hex}`, border: `1.6px solid #${p.hex}`, borderRadius: 0.75, px: 0.55, lineHeight: 1.4 }}>M</Typography>
          )}
          <Typography className="plat-name" sx={{ fontSize: { xs: 13, md: 15 }, fontWeight: 600, color: tokens.body, transition: "color .2s" }}>{p.name}</Typography>
        </Stack>
      ))}
    </Stack>
  )
}

const CREDENTIALS = [
  { name: "Google Analytics Partner", path: siGoogleanalytics.path, hex: siGoogleanalytics.hex },
  { name: "Google Search Console Partner", path: siGooglesearchconsole.path, hex: siGooglesearchconsole.hex },
  { name: "Ingeniero certificado en Claude", path: siClaude.path, hex: siClaude.hex },
]

// Certificaciones del estudio, con el logo oficial de cada programa.
function CredentialRow() {
  return (
    <Stack direction="row" spacing={{ xs: 2, md: 3 }} sx={{ alignItems: "center", justifyContent: "center", flexWrap: "wrap", rowGap: 1 }}>
      {CREDENTIALS.map((c) => (
        <Stack key={c.name} direction="row" spacing={0.75} sx={{ alignItems: "center" }}>
          <Box component="svg" viewBox="0 0 24 24" sx={{ width: { xs: 14, md: 16 }, height: { xs: 14, md: 16 } }} aria-hidden>
            <path d={c.path} fill={`#${c.hex}`} />
          </Box>
          <Typography sx={{ fontSize: { xs: 11.5, md: 12.5 }, fontWeight: 600, color: tokens.body }}>{c.name}</Typography>
        </Stack>
      ))}
    </Stack>
  )
}

// Carrusel de todas las empresas con las que hemos trabajado. Mismo patrón en
// desktop y móvil: desfile automático en bucle que se pausa al interactuar,
// con arrastre nativo. La lista va duplicada para que el bucle sea continuo;
// la copia queda oculta a lectores de pantalla.
export default function ClientShowcase() {
  const reduce = useReducedMotion()
  const trackRef = useRef<HTMLDivElement>(null)
  const pausedRef = useRef(false)
  const resumeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  // Orden: primero tiendas ecommerce, después plataformas a medida.
  const ORDER = [
    "marea-es", "farmacia-garcia-del-cerro", "totfinestra", "pelican-catchy-infraestructura-ia",
    "bebubbleibiza", "salvador-mendoza", "controltemp", "diomento-homelift",
    "business-suite-ia-plataforma-corporativa", "opoai-plataforma-estudio-oposiciones",
    "regalalo-io", "peritando-es", "quad-studios", "growmybiss",
  ]
  const known = new Set(allCaseSlugs())
  const casos = ORDER.filter((s) => known.has(s)).map(getCase).filter(Boolean) as Caso[]

  // Ancho de un set completo (distancia entre una card y su duplicado).
  const setWidth = () => {
    const el = trackRef.current
    const loopStart = el?.querySelector<HTMLElement>("[data-loop-start]")
    const first = el?.querySelector<HTMLElement>("[data-card]")
    return loopStart && first ? loopStart.offsetLeft - first.offsetLeft : 0
  }

  useEffect(() => {
    if (reduce) return
    const el = trackRef.current
    if (!el) return
    let raf = 0
    let last = performance.now()
    // Posición flotante propia: asignar scrollLeft fraccional en cada frame da
    // un desfile subpíxel fluido, sin el tembleque de avanzar de 1px en 1px.
    let pos = el.scrollLeft
    const tick = (now: number) => {
      const dt = Math.min(now - last, 80) / 1000
      last = now
      if (pausedRef.current) {
        pos = el.scrollLeft
      } else {
        pos += AUTO_SPEED * dt
        const w = setWidth()
        if (w > 0 && pos >= w) pos -= w
        el.scrollLeft = pos
      }
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [reduce])

  const pause = () => {
    if (resumeTimer.current) clearTimeout(resumeTimer.current)
    pausedRef.current = true
  }
  const resumeSoon = (ms = 1800) => {
    if (resumeTimer.current) clearTimeout(resumeTimer.current)
    resumeTimer.current = setTimeout(() => { pausedRef.current = false }, ms)
  }
  useEffect(() => () => { if (resumeTimer.current) clearTimeout(resumeTimer.current) }, [])

  const renderCards = (hidden: boolean) =>
    casos.map((c, i) => (
      <Box
        key={hidden ? `dup-${c.slug}` : c.slug}
        data-card={hidden ? undefined : ""}
        data-loop-start={hidden && i === 0 ? "" : undefined}
        aria-hidden={hidden || undefined}
        inert={hidden || undefined}
        sx={{ flexShrink: 0, width: { xs: "74vw", sm: 340, md: 300 } }}
      >
        <BrandCaseCard name={c.client} vertical={caseVertical(c)} href={`/casos-de-exito/${c.slug}`} photo={casePhoto(c)} footer={false} />
      </Box>
    ))

  return (
    <Box component="section" sx={{ py: { xs: 5, md: 7 }, borderBottom: `1px solid ${tokens.lineSoft}` }}>
      <Box sx={{ mb: { xs: 4, md: 5 }, px: { xs: 3, md: "max(24px, calc((100vw - 1120px) / 2 + 24px))" } }}>
        <PlatformLogos />
        <Box sx={{ mt: { xs: 1.5, md: 2 } }}>
          <CredentialRow />
        </Box>
      </Box>
      <Box sx={{ mb: { xs: 2.5, md: 3 }, px: { xs: 3, md: "max(24px, calc((100vw - 1120px) / 2 + 24px))" } }}>
        <Typography variant="h2" sx={{ fontSize: { xs: 24, md: 32 }, color: tokens.ink }}>Proyectos</Typography>
        <Typography variant="body1" sx={{ color: tokens.body, mt: 1 }}>Tiendas y plataformas donde ya corre esta ingeniería.</Typography>
      </Box>
      <Box
        ref={trackRef}
        onPointerEnter={pause}
        onPointerLeave={() => resumeSoon(600)}
        onTouchStart={pause}
        onTouchEnd={() => resumeSoon(2200)}
        onFocusCapture={pause}
        onBlurCapture={() => resumeSoon(1200)}
        sx={{
          display: "flex",
          gap: 2,
          px: { xs: 3, md: "max(24px, calc((100vw - 1120px) / 2 + 24px))" },
          overflowX: "auto",
          pb: 1,
          scrollbarWidth: "none",
          "&::-webkit-scrollbar": { display: "none" },
        }}
      >
        {renderCards(false)}
        {renderCards(true)}
      </Box>
    </Box>
  )
}
