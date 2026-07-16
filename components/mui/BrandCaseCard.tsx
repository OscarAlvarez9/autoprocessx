"use client"

import Link from "next/link"
import Image from "next/image"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import { tokens, fonts } from "@/lib/mui/theme"

// Card universal de caso: foto de ambiente de marca a sangre + wordmark blanco
// centrado + vertical en mono (ocultable con footer={false}, p. ej. en el
// carrusel de la home). La foto es ambientación generada; el resto es real.
export default function BrandCaseCard({ name, vertical, href, photo, ratio = "4 / 5", footer = true }: {
  name: string
  vertical: string
  href: string
  photo: string
  ratio?: string
  footer?: boolean
}) {
  return (
    <Box
      component={Link}
      href={href}
      sx={{
        position: "relative", display: "block", textDecoration: "none", overflow: "hidden",
        borderRadius: 4, aspectRatio: ratio, bgcolor: tokens.ink, border: `1px solid ${tokens.line}`,
        "&:hover .brand-photo": { transform: "scale(1.045)" },
        "&:hover .brand-arrow": { opacity: 1, transform: "translate(0,0)" },
      }}
    >
      <Box className="brand-photo" sx={{ position: "absolute", inset: 0, transition: "transform .5s cubic-bezier(.22,1,.36,1)" }}>
        <Image src={photo} alt="" fill sizes="(max-width: 900px) 74vw, 25vw" style={{ objectFit: "cover" }} />
      </Box>
      {/* scrim para legibilidad del wordmark */}
      <Box sx={{ position: "absolute", inset: 0, background: `linear-gradient(180deg, ${tokens.ink}26 0%, ${tokens.ink}08 40%, ${tokens.ink}b8 100%)` }} />
      {/* wordmark centrado */}
      <Box sx={{ position: "absolute", inset: 0, display: "grid", placeItems: "center", px: 2 }}>
        <Typography sx={{ fontFamily: fonts.serif, fontWeight: 700, fontSize: { xs: 24, md: 27 }, lineHeight: 1.12, color: "#F7F8F8", textAlign: "center", letterSpacing: "-0.015em", textShadow: "0 2px 18px rgba(0,0,0,.45)" }}>
          {name}
        </Typography>
      </Box>
      {/* pie: vertical + flecha */}
      {footer && (
        <Box sx={{ position: "absolute", left: 0, right: 0, bottom: 0, px: 2, py: 1.6, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 1 }}>
          <Typography sx={{ fontFamily: fonts.mono, fontSize: 10.5, color: "#C9D0D6" }}>{vertical}</Typography>
          <Box className="brand-arrow" component="span" sx={{ color: "#F7F8F8", fontSize: 14, opacity: 0.55, transform: "translate(-2px,2px)", transition: "all .25s", flexShrink: 0 }}>↗</Box>
        </Box>
      )}
    </Box>
  )
}
