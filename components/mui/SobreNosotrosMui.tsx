"use client"

import Image from "next/image"
import Link from "next/link"
import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import { tokens, fonts } from "@/lib/mui/theme"
import { SiteHeader, SiteFooter, DiagnosticoCTA, Blueprint, Reveal, PrimaryCTA, Crumbs } from "@/components/mui/shared"

// Mapa de Barcelona dibujado a mano, en la paleta de marca: mar, costa, la
// trama del Eixample y un pin. Nada de embed crudo de Google.
function BarcelonaMap() {
  const cols = 7, rows = 5, cell = 30, ox = 44, oy = 62
  const blocks: [number, number][] = []
  for (let r = 0; r < rows; r++) for (let c = 0; c < cols; c++) blocks.push([ox + c * cell, oy + r * cell])
  return (
    <Box sx={{ position: "relative", height: "100%", bgcolor: tokens.win, overflow: "hidden" }}>
      <Box component="svg" viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" sx={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}>
        <defs>
          <clipPath id="bcn-land"><path d="M0,0 L332,0 L152,300 L0,300 Z" /></clipPath>
        </defs>
        {/* mar */}
        <path d="M332,0 L400,0 L400,300 L152,300 Z" fill={`${tokens.teal}12`} />
        {/* costa */}
        <path d="M332,0 L152,300" fill="none" stroke={`${tokens.teal}66`} strokeWidth="2" />
        {/* trama del Eixample, recortada a tierra */}
        <g clipPath="url(#bcn-land)">
          <g transform="rotate(-16 190 150)">
            {blocks.map(([x, y], i) => (
              <rect key={i} x={x} y={y} width={cell - 7} height={cell - 7} rx="2.5" fill="none" stroke={`${tokens.petrol}30`} strokeWidth="1.3" />
            ))}
          </g>
          {/* avenida Diagonal */}
          <line x1="34" y1="248" x2="320" y2="48" stroke={`${tokens.petrol}55`} strokeWidth="2.5" strokeLinecap="round" />
        </g>
        {/* pin */}
        <path d="M196,110 C210,110 221,121 221,136 C221,156 196,184 196,184 C196,184 171,156 171,136 C171,121 182,110 196,110 Z" fill={tokens.petrol} />
        <circle cx="196" cy="135" r="7" fill={tokens.win} />
      </Box>
      <Box sx={{ position: "absolute", left: 14, bottom: 14 }}>
        <Typography sx={{ fontFamily: fonts.serif, fontSize: 22, fontWeight: 700, color: tokens.ink, lineHeight: 1 }}>Barcelona</Typography>
        <Typography sx={{ fontFamily: fonts.mono, fontSize: 10.5, color: tokens.muted, mt: 0.5 }}>41.39° N · 2.16° E</Typography>
      </Box>
      <Box component={Link} href="https://www.google.com/maps/place/Barcelona" target="_blank" rel="noopener"
        sx={{ position: "absolute", top: 12, right: 12, display: "inline-flex", alignItems: "center", gap: 0.5, textDecoration: "none", bgcolor: `${tokens.win}dd`, border: `1px solid ${tokens.lineSoft}`, borderRadius: 999, px: 1.1, py: 0.4, "&:hover": { borderColor: tokens.petrol } }}>
        <Typography sx={{ fontFamily: fonts.mono, fontSize: 10.5, fontWeight: 600, color: tokens.ink }}>abrir en Maps</Typography>
        <Box component="span" sx={{ color: tokens.petrol, fontSize: 11 }}>↗</Box>
      </Box>
    </Box>
  )
}

const PRINCIPIOS = [
  { t: "El código es tuyo", d: "No te alquilo una caja negra. Te entrego infraestructura que puedes auditar, mantener y llevarte. Sin lock-in." },
  { t: "Sobre tu plataforma, sin migrar", d: "Trabajo donde ya vendes (Shopify, WooCommerce, tu web). No te muevo de sitio para venderte una migración." },
  { t: "Sin métricas infladas", d: "Publico una cifra cuando el cliente la confirma. Lo demás son huecos honestos, no promesas de marketing." },
  { t: "Hecho a mano, no generado", d: "Cada pieza está construida y medida para tu caso, no sacada de una plantilla. Se nota cuando lo ves funcionar." },
]

const LINKEDIN_OSCAR = "https://www.linkedin.com/in/oscar-alvarez-romani-7882302b3"

const TEAM = [
  { name: "Oscar Álvarez", role: "Fundador e ingeniería", initials: "OÁ", bio: "Diseña y construye los sistemas: SEO, conversión, agentes y automatización. Es quien se sienta contigo en el diagnóstico.", linkedin: LINKEDIN_OSCAR },
  { name: "Roger", role: "Desarrollo backend", initials: "R", bio: "Levanta la infraestructura que sostiene todo: APIs, datos y workflows que aguantan en producción." },
  { name: "Sam", role: "Guardián de la empresa", initials: "S", dog: true, bio: "El único del equipo con cuatro patas. Vigila la oficina y supervisa cada release desde la alfombra." },
]

function DogGlyph() {
  return (
    <Box component="svg" viewBox="0 0 48 48" sx={{ width: 44, height: 44 }} aria-hidden>
      <path d="M13 14 L10 24 Q10 27 13 26 Z" fill="none" stroke={tokens.muted} strokeWidth="2.2" strokeLinejoin="round" />
      <path d="M35 14 L38 24 Q38 27 35 26 Z" fill="none" stroke={tokens.muted} strokeWidth="2.2" strokeLinejoin="round" />
      <path d="M24 15 Q34 15 34 26 Q34 36 24 36 Q14 36 14 26 Q14 15 24 15 Z" fill="none" stroke={tokens.ink} strokeWidth="2.2" />
      <circle cx="20" cy="25" r="1.7" fill={tokens.ink} />
      <circle cx="28" cy="25" r="1.7" fill={tokens.ink} />
      <path d="M24 29 L24 31 M24 31 Q21 32 20 30 M24 31 Q27 32 28 30" fill="none" stroke={tokens.ink} strokeWidth="1.8" strokeLinecap="round" />
      <ellipse cx="24" cy="29" rx="2.2" ry="1.6" fill={tokens.bronze} />
    </Box>
  )
}

function TeamAvatar({ m }: { m: (typeof TEAM)[number] }) {
  return (
    <Box sx={{ position: "relative", aspectRatio: "1 / 1", borderRadius: 3, bgcolor: tokens.surface, border: `1px solid ${tokens.line}`, display: "grid", placeItems: "center", overflow: "hidden" }}>
      <Blueprint />
      <Box sx={{ position: "relative", zIndex: 1, display: "grid", placeItems: "center" }}>
        {m.dog ? <DogGlyph /> : <Typography sx={{ fontFamily: fonts.serif, fontSize: 40, fontWeight: 600, color: tokens.muted }}>{m.initials}</Typography>}
      </Box>
      <Box sx={{ position: "absolute", zIndex: 1, bottom: 8, left: 8, bgcolor: `${tokens.win}cc`, border: `1px solid ${tokens.lineSoft}`, borderRadius: 1, px: 0.75, py: 0.25 }}>
        <Typography sx={{ fontFamily: fonts.mono, fontSize: 9.5, color: tokens.muted }}>[[ foto ]]</Typography>
      </Box>
    </Box>
  )
}

function Hero() {
  return (
    <Box component="section" sx={{ position: "relative", overflow: "hidden", borderBottom: `1px solid ${tokens.lineSoft}` }}>
      <Blueprint />
      <Container sx={{ position: "relative", zIndex: 1, py: { xs: 8, md: 13 } }}>
        <Reveal>
          <Typography variant="h1" sx={{ fontSize: { xs: 34, sm: 46, lg: 58 }, color: tokens.ink, mb: 3, maxWidth: 820 }}>
            Un estudio pequeño donde construyo como si la tienda fuera mía.
          </Typography>
          <Typography variant="body1" sx={{ fontSize: { xs: 17, md: 19 }, color: tokens.body, maxWidth: 560, mb: 4 }}>
            Sistemas de IA para ecommerce, hechos a mano en Barcelona. Sin plantillas, sin humo y sin ataduras: lo que monto es tuyo.
          </Typography>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={2.5} sx={{ alignItems: { sm: "center" } }}>
            <PrimaryCTA />
          </Stack>
        </Reveal>
      </Container>
    </Box>
  )
}

function FounderNote() {
  return (
    <Box component="section" sx={{ py: { xs: 8, md: 12 }, borderBottom: `1px solid ${tokens.lineSoft}` }}>
      <Container sx={{ maxWidth: 820 }}>
        <Reveal>
          <Typography component="p" sx={{ fontFamily: fonts.serif, fontSize: { xs: 22, md: 30 }, lineHeight: 1.4, color: tokens.ink, mb: 3, letterSpacing: "-0.01em" }}>
            Monté SEOscar porque me cansé de ver tiendas pagando un SaaS que no controlan y agencias que prometen números que no pueden sostener.
          </Typography>
          <Typography variant="body1" sx={{ fontSize: { xs: 16, md: 18 }, color: tokens.body, maxWidth: 680, mb: 2.5 }}>
            Aquí lo hago al revés: prefiero enseñarte un flujo funcionando que un PDF con promesas. Construyo sobre tu plataforma, te dejo el código, y mido con tus datos reales. Si algo no lo sé, te lo digo. Si un dato no lo tengo, no me lo invento.
          </Typography>
          <Typography variant="body1" sx={{ fontSize: { xs: 16, md: 18 }, color: tokens.body, maxWidth: 680, mb: 4 }}>
            No quiero ser tu proveedor de humo con siglas. Quiero ser el técnico que hace que tu tienda venda más, con Roger levantando la infraestructura y procesos que corren solos detrás, y que puedas mirar por dentro cuando quieras.
          </Typography>
          <Stack direction="row" spacing={2} sx={{ alignItems: "center" }}>
            <Box sx={{ width: 44, height: 44, borderRadius: 999, bgcolor: tokens.surface, border: `1px solid ${tokens.line}`, display: "grid", placeItems: "center" }}>
              <Typography sx={{ fontFamily: fonts.serif, fontSize: 18, fontWeight: 600, color: tokens.muted }}>OÁ</Typography>
            </Box>
            <Box>
              <Typography sx={{ fontWeight: 700, color: tokens.ink }}>Oscar Álvarez</Typography>
              <Typography sx={{ fontFamily: fonts.mono, fontSize: 12, color: tokens.muted }}>fundador · SEOscar</Typography>
            </Box>
          </Stack>
        </Reveal>
      </Container>
    </Box>
  )
}

function Principios() {
  return (
    <Box component="section" sx={{ py: { xs: 8, md: 12 }, borderBottom: `1px solid ${tokens.lineSoft}` }}>
      <Container>
        <Reveal>
          <Typography variant="h2" sx={{ fontSize: { xs: 28, md: 40 }, color: tokens.ink, mb: { xs: 5, md: 7 }, maxWidth: 560 }}>
            En qué creo, y qué me niego a hacer.
          </Typography>
        </Reveal>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap: { xs: 3, md: 4 } }}>
          {PRINCIPIOS.map((p, i) => (
            <Reveal key={p.t} delay={i * 0.05}>
              <Box sx={{ borderTop: `2px solid ${tokens.line}`, pt: 2.5, position: "relative" }}>
                <Box aria-hidden sx={{ position: "absolute", top: "-5px", left: 0, width: 8, height: 8, borderRadius: 999, bgcolor: tokens.petrol }} />
                <Typography sx={{ fontFamily: fonts.mono, fontSize: 12, color: tokens.petrol, mb: 1 }}>{`0${i + 1}`}</Typography>
                <Typography sx={{ fontFamily: fonts.serif, fontSize: 22, fontWeight: 600, color: tokens.ink, mb: 1 }}>{p.t}</Typography>
                <Typography variant="body1" sx={{ color: tokens.body, maxWidth: 460 }}>{p.d}</Typography>
              </Box>
            </Reveal>
          ))}
        </Box>
      </Container>
    </Box>
  )
}

function Equipo() {
  return (
    <Box component="section" sx={{ py: { xs: 8, md: 12 }, borderBottom: `1px solid ${tokens.lineSoft}` }}>
      <Container>
        <Reveal>
          <Box sx={{ maxWidth: 620, mb: { xs: 5, md: 7 } }}>
            <Typography variant="h2" sx={{ fontSize: { xs: 28, md: 40 }, color: tokens.ink, mb: 2 }}>
              Pocos, técnicos y con perro.
            </Typography>
            <Typography variant="body1" sx={{ fontSize: { xs: 16, md: 18 }, color: tokens.body }}>
              No somos una plantilla de cuarenta personas. Somos quien de verdad toca tu proyecto: tú hablas con quien lo construye.
            </Typography>
          </Box>
        </Reveal>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "repeat(3, 1fr)" }, gap: { xs: 4, md: 4 } }}>
          {TEAM.map((m, i) => (
            <Reveal key={m.name} delay={i * 0.08}>
              <Box>
                <TeamAvatar m={m} />
                <Typography sx={{ fontFamily: fonts.serif, fontSize: 22, fontWeight: 600, color: tokens.ink, mt: 2.5 }}>{m.name}</Typography>
                <Typography sx={{ fontFamily: fonts.mono, fontSize: 12, color: tokens.petrol, mb: 1 }}>{m.role}</Typography>
                <Typography variant="body2" sx={{ color: tokens.body }}>{m.bio}</Typography>
                {m.linkedin && (
                  <Typography component="a" href={m.linkedin} target="_blank" rel="noopener noreferrer" sx={{ display: "inline-block", mt: 1.25, fontFamily: fonts.mono, fontSize: 12, fontWeight: 600, color: tokens.ink, textDecoration: "none", "&:hover": { color: tokens.petrol } }}>
                    LinkedIn <Box component="span" sx={{ color: tokens.petrol }}>↗</Box>
                  </Typography>
                )}
              </Box>
            </Reveal>
          ))}
        </Box>
      </Container>
    </Box>
  )
}

function Donde() {
  return (
    <Box component="section" sx={{ py: { xs: 8, md: 11 } }}>
      <Container sx={{ maxWidth: 820 }}>
        <Reveal>
          <Box sx={{ position: "relative", borderRadius: 3, overflow: "hidden", border: `1px solid ${tokens.line}`, aspectRatio: "21 / 9", mb: { xs: 4, md: 6 } }}>
            <Image src="/assets/gen/photo-estudio.png" alt="El estudio de SEOscar trabajando" fill sizes="(max-width: 820px) 100vw, 820px" style={{ objectFit: "cover" }} />
            <Box sx={{ position: "absolute", bottom: 10, left: 10, bgcolor: `${tokens.win}cc`, border: `1px solid ${tokens.lineSoft}`, borderRadius: 1, px: 0.75, py: 0.25 }}>
              <Typography sx={{ fontFamily: fonts.mono, fontSize: 9.5, color: tokens.muted }}>ambiente de estudio · fotos reales del equipo, pronto</Typography>
            </Box>
          </Box>
        </Reveal>
        <Reveal>
          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "0.95fr 1.05fr" }, gap: { xs: 4, md: 6 }, alignItems: "center" }}>
            {/* mapa de Barcelona, hecho a mano */}
            <Box sx={{ borderRadius: 3, overflow: "hidden", border: `1px solid ${tokens.line}`, aspectRatio: "4 / 3" }}>
              <BarcelonaMap />
            </Box>
            {/* dónde estoy + fortalezas */}
            <Box>
              <Typography variant="h3" sx={{ fontSize: { xs: 22, md: 30 }, color: tokens.ink, mb: 1.5 }}>Barcelona, y a un clic de tu tienda.</Typography>
              <Typography variant="body1" sx={{ color: tokens.body, mb: 3, maxWidth: 460 }}>
                Trabajo con tiendas de toda España, en remoto y con reuniones cuando toca. Cerca para lo importante, sin peaje de oficina para lo demás.
              </Typography>
              <Typography sx={{ fontSize: 13, fontWeight: 700, color: tokens.ink, mb: 1.5 }}>En qué soy fuerte</Typography>
              <Stack direction="row" sx={{ flexWrap: "wrap", gap: 1 }}>
                {["n8n self-hosted", "RAG anclado", "SEO y GEO", "CRO", "Node / Python", "Shopify · WooCommerce"].map((s) => (
                  <Box key={s} sx={{ border: `1px solid ${tokens.line}`, borderRadius: 999, px: 1.5, py: 0.5 }}>
                    <Typography sx={{ fontFamily: fonts.mono, fontSize: 12, color: tokens.body }}>{s}</Typography>
                  </Box>
                ))}
              </Stack>
            </Box>
          </Box>
        </Reveal>
      </Container>
    </Box>
  )
}

export default function SobreNosotrosMui() {
  return (
    <Box sx={{ bgcolor: tokens.paper, color: tokens.body, fontFamily: fonts.sans }}>
      <SiteHeader />
      <Crumbs items={[{ label: "Sobre nosotros" }]} />
      <Hero />
      <FounderNote />
      <Principios />
      <Equipo />
      <Donde />
      <DiagnosticoCTA />
      <SiteFooter />
    </Box>
  )
}
