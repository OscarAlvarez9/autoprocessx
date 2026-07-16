"use client"

import Link from "next/link"
import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import { tokens, fonts } from "@/lib/mui/theme"
import { Reveal } from "@/components/mui/shared"
import BrandCaseCard from "@/components/mui/BrandCaseCard"
import { getCase, casePhoto, caseVertical, type Caso } from "@/lib/casesEcom"

// Sección de casos destacados: cards de marca (foto + wordmark) enlazadas a su
// ficha. Es el formato universal de caso en todo el sitio.
export default function FeaturedCases({ id, title, sub, slugs }: {
  id?: string
  title: string
  sub?: string
  slugs: string[]
}) {
  const casos = slugs.map(getCase).filter(Boolean) as Caso[]
  if (casos.length === 0) return null
  return (
    <Box component="section" id={id} sx={{ py: { xs: 8, md: 12 }, borderBottom: `1px solid ${tokens.lineSoft}`, scrollMarginTop: 72 }}>
      <Container>
        <Reveal>
          <Box sx={{ display: "flex", flexWrap: "wrap", alignItems: "baseline", justifyContent: "space-between", gap: 2, mb: sub ? 2 : { xs: 4, md: 5 } }}>
            <Typography variant="h2" sx={{ fontSize: { xs: 28, md: 40 }, color: tokens.ink, maxWidth: 640 }}>{title}</Typography>
            <Typography component={Link} href="/casos-de-exito" sx={{ fontFamily: fonts.mono, fontSize: 12.5, fontWeight: 600, color: tokens.ink, textDecoration: "none", whiteSpace: "nowrap", "&:hover": { color: tokens.petrol } }}>
              Ver todos los casos <Box component="span" sx={{ color: tokens.petrol }}>↗</Box>
            </Typography>
          </Box>
          {sub && <Typography variant="body1" sx={{ color: tokens.body, maxWidth: 560, mb: { xs: 4, md: 5 } }}>{sub}</Typography>}
        </Reveal>
      </Container>
      {/* xs/sm: carrusel snap horizontal a sangre; md+: grid original (mismo ancho que Container via px calculado) */}
      <Box
        sx={{
          display: { xs: "flex", md: "grid" },
          gridTemplateColumns: { md: `repeat(${casos.length}, 1fr)` },
          gap: { xs: 2, md: 2.5 },
          px: { xs: 3, md: "max(24px, calc((100vw - 1120px) / 2 + 24px))" },
          overflowX: { xs: "auto", md: "visible" },
          scrollSnapType: { xs: "x mandatory", md: "none" },
          pb: { xs: 1, md: 0 },
          scrollbarWidth: "none",
          "&::-webkit-scrollbar": { display: "none" },
        }}
      >
        {casos.map((c, i) => (
          <Box key={c.slug} sx={{ scrollSnapAlign: "start", flexShrink: 0, width: { xs: "74vw", sm: 340, md: "auto" }, minWidth: { md: 0 }, flex: { md: "initial" } }}>
            <Reveal delay={i * 0.07}>
              <BrandCaseCard name={c.client} vertical={caseVertical(c)} href={`/casos-de-exito/${c.slug}`} photo={casePhoto(c)} />
            </Reveal>
          </Box>
        ))}
      </Box>
    </Box>
  )
}
