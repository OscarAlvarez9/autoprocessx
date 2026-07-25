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
  { name: "Oscar Álvarez", role: "Fundador e ingeniería", sketch: "oscar" as const, bio: "Diseña y construye los sistemas: SEO, conversión, agentes y automatización. Es quien se sienta contigo en el diagnóstico.", linkedin: LINKEDIN_OSCAR },
  { name: "Roger", role: "Desarrollo backend", sketch: "roger" as const, bio: "Levanta la infraestructura que sostiene todo: APIs, datos y workflows que aguantan en producción." },
  { name: "Sam", role: "Guardián de la empresa", sketch: "sam" as const, bio: "El único del equipo con cuatro patas. Vigila la oficina y supervisa cada release desde la alfombra." },
]

// Retratos sketch dibujados a mano, provisionales hasta tener las fotos reales.
// Line-art en la lengua de los artefactos: tinta para el trazo principal, muted
// para lo secundario y un toque de pino (auriculares, collar). Bustos genéricos
// a propósito: son un hueco con carácter, no un parecido.
function PersonSketch({ who }: { who: "oscar" | "roger" | "sam" }) {
  const common = { fill: "none", stroke: tokens.ink, strokeWidth: 2.4, strokeLinecap: "round" as const, strokeLinejoin: "round" as const }
  return (
    <Box component="svg" viewBox="0 0 96 96" sx={{ width: "58%", height: "58%" }} aria-hidden>
      {who !== "sam" && (
        <>
          {/* hombros y cuello */}
          <path d="M14 88 Q17 68 34 64 L40 62 M82 88 Q79 68 62 64 L56 62" {...common} />
          <path d="M41 52 L41 62 M55 52 L55 62" {...common} stroke={tokens.muted} strokeWidth={2} />
          {/* cuello de la camiseta */}
          <path d="M40 63 Q48 69 56 63" {...common} stroke={tokens.muted} strokeWidth={2} />
          {/* cabeza */}
          <path d="M48 12 Q67 12 67 33 Q67 54 48 56 Q29 54 29 33 Q29 12 48 12 Z" {...common} fill={tokens.win} />
          {/* orejas */}
          <path d="M29 34 Q26 34 27 38 Q28 41 30 40 M67 34 Q70 34 69 38 Q68 41 66 40" {...common} strokeWidth={2} />
          {/* ojos y cejas */}
          <circle cx="41" cy="33" r="1.8" fill={tokens.ink} stroke="none" />
          <circle cx="55" cy="33" r="1.8" fill={tokens.ink} stroke="none" />
          <path d="M37.5 28 Q41 26.5 44 28 M52 28 Q55 26.5 58.5 28" {...common} strokeWidth={1.8} />
          {/* nariz y sonrisa */}
          <path d="M48 34 L47 40 Q47.5 41 49 40.5" {...common} strokeWidth={1.8} stroke={tokens.muted} />
          <path d="M42 46 Q48 50 54 46" {...common} strokeWidth={2} />
        </>
      )}
      {who === "oscar" && (
        <>
          {/* pelo corto con trazos sueltos */}
          <path d="M30 30 Q29 13 48 13 Q67 13 66 30 Q62 19 48 19 Q34 19 30 30 Z" fill={tokens.ink} stroke="none" opacity="0.85" />
          <path d="M35 15 Q37 13 40 12.5 M56 12.5 Q59 13 61 15" {...common} strokeWidth={1.6} />
        </>
      )}
      {who === "roger" && (
        <>
          {/* pelo con más onda */}
          <path d="M30 31 Q27 12 48 12 Q69 12 66 31 Q66 24 60 21 Q61 25 56 23 Q57 19 50 20 Q44 20 42 18 Q42 22 36 22 Q32 24 30 31 Z" fill={tokens.ink} stroke="none" opacity="0.85" />
          {/* auriculares de backend: banda y cazoletas en pino */}
          <path d="M27 34 Q26 10 48 10 Q70 10 69 34" fill="none" stroke={tokens.petrol} strokeWidth={3} strokeLinecap="round" />
          <rect x="22" y="31" width="8" height="13" rx="3" fill={tokens.petrol} stroke="none" />
          <rect x="66" y="31" width="8" height="13" rx="3" fill={tokens.petrol} stroke="none" />
        </>
      )}
      {who === "sam" && (
        <>
          {/* orejas caídas */}
          <path d="M28 22 Q18 24 18 40 Q18 50 25 48 Q29 46 30 40 M68 22 Q78 24 78 40 Q78 50 71 48 Q67 46 66 40" {...common} fill={tokens.win} />
          {/* cabeza */}
          <path d="M48 16 Q68 16 68 38 Q68 58 48 58 Q28 58 28 38 Q28 16 48 16 Z" {...common} fill={tokens.win} />
          {/* ojos y cejas expresivas */}
          <circle cx="40" cy="35" r="2" fill={tokens.ink} stroke="none" />
          <circle cx="56" cy="35" r="2" fill={tokens.ink} stroke="none" />
          <path d="M36.5 29.5 Q40 28 43 29.5 M53 29.5 Q56 28 59.5 29.5" {...common} strokeWidth={1.8} />
          {/* hocico, trufa y lengua */}
          <path d="M48 40 L48 46 M48 46 Q44 49 41.5 46.5 M48 46 Q52 49 54.5 46.5" {...common} strokeWidth={2} />
          <ellipse cx="48" cy="40" rx="3" ry="2.2" fill={tokens.ink} stroke="none" />
          <path d="M45 48.5 Q48 54 51 48.5 Q49.5 50.5 48 50.5 Q46.5 50.5 45 48.5 Z" fill={tokens.red} stroke="none" opacity="0.75" />
          {/* collar en pino con chapa */}
          <path d="M34 56 Q48 63 62 56 L62 61 Q48 68 34 61 Z" fill={tokens.petrol} stroke="none" />
          <circle cx="48" cy="66" r="3" fill="none" stroke={tokens.petrol} strokeWidth={2} />
        </>
      )}
    </Box>
  )
}

function TeamAvatar({ m }: { m: (typeof TEAM)[number] }) {
  return (
    <Box sx={{ position: "relative", aspectRatio: "1 / 1", borderRadius: 3, bgcolor: tokens.surface, border: `1px solid ${tokens.line}`, display: "grid", placeItems: "center", overflow: "hidden" }}>
      <Blueprint />
      <Box sx={{ position: "relative", zIndex: 1, width: "100%", height: "100%", display: "grid", placeItems: "center" }}>
        <PersonSketch who={m.sketch} />
      </Box>
      <Box sx={{ position: "absolute", zIndex: 1, bottom: 8, left: 8, bgcolor: `${tokens.win}cc`, border: `1px solid ${tokens.lineSoft}`, borderRadius: 1, px: 0.75, py: 0.25 }}>
        <Typography sx={{ fontFamily: fonts.mono, fontSize: 9.5, color: tokens.muted }}>[[ foto ]] · retrato provisional</Typography>
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
            Una agencia pequeña donde construyo como si la tienda fuera mía.
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

// Fortalezas del fundador: la especialidad (SEO/GEO), la base de datos, la capa
// de estrategia y el método. Sin cifras inventadas: lo que hay es formación y
// años de trabajo, y así se cuenta.
function Fortalezas() {
  const ITEMS: [string, React.ReactNode][] = [
    [
      "SEO y GEO, mi especialidad",
      "Llevo más de 4 años trabajando el posicionamiento, en paralelo con un máster de Big Data. La visibilidad en Google y en los buscadores de IA es mi terreno: fichas que posicionan, tiendas que las IAs citan.",
    ],
    [
      "Datos, no intuición",
      "Todo lo baso en datos: nunca invento rutas. Cada decisión sale de tu analítica real, y si el dato no existe, primero lo mido y después toco. Por eso puedes auditar cada paso que doy.",
    ],
    [
      "Estrategia de producto y marca",
      "Tengo estudios paralelos de marketing digital y redes sociales. Eso me deja bajar la estrategia al detalle: enfocarla en productos específicos, crear campañas de marca desde cero o potenciar las que ya te funcionan.",
    ],
    [
      "Un método que se repite porque funciona",
      <>
        Sigo siempre los mismos pasos, los que funcionan, adaptados a las necesidades y objetivos de tu empresa. Ni experimentos con tu tienda ni recetas congeladas:{" "}
        <Box component={Link} href="/metodo" sx={{ color: tokens.ink, fontWeight: 600, textDecoration: "underline", textDecorationColor: tokens.line, "&:hover": { textDecorationColor: tokens.petrol } }}>el método está publicado</Box>{" "}
        y lo puedes leer antes de trabajar conmigo.
      </>,
    ],
    [
      "Desarrollo de inteligencia artificial",
      <>
        Estudio machine learning, prompting y arquitectura de agentes desde que salió ChatGPT, y no me quedo en la teoría:{" "}
        <Box component={Link} href="/casos-de-exito" sx={{ color: tokens.ink, fontWeight: 600, textDecoration: "underline", textDecorationColor: tokens.line, "&:hover": { textDecorationColor: tokens.petrol } }}>tengo productos propios de IA en producción</Box>.
        Todo se apoya en ingeniería real: código en Node y Python, flujos n8n y agentes anclados a tus datos, con Roger en backend cuando el proyecto lo pide.
      </>,
    ],
  ]
  const FICHA: [string, string][] = [
    ["seo / geo", "más de 4 años"],
    ["formación", "máster Big Data · marketing digital"],
    ["ia", "ML, prompting y agentes desde ChatGPT"],
    ["productos", "IA propia en producción"],
    ["base", "datos, nunca rutas inventadas"],
  ]
  return (
    <Box component="section" sx={{ py: { xs: 8, md: 12 }, borderBottom: `1px solid ${tokens.lineSoft}` }}>
      <Container>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "0.85fr 1.15fr" }, gap: { xs: 5, md: 9 }, alignItems: "start" }}>
          {/* Izquierda sticky: titular + ficha técnica mono */}
          <Box sx={{ position: { md: "sticky" }, top: 96 }}>
            <Reveal>
              <Typography variant="h2" sx={{ fontSize: { xs: 28, md: 40 }, color: tokens.ink, mb: 2 }}>En qué soy fuerte.</Typography>
              <Typography variant="body1" sx={{ fontSize: { xs: 16, md: 18 }, color: tokens.body, mb: 4, maxWidth: 380 }}>
                Sin lista de siglas: cinco cosas concretas que llevo años entrenando.
              </Typography>
              {/* ficha técnica, el patrón de specs de la casa */}
              <Box sx={{ borderRadius: 2.5, border: `1px solid ${tokens.line}`, bgcolor: tokens.win, overflow: "hidden", maxWidth: 400 }}>
                <Box sx={{ px: 2, py: 1.1, borderBottom: `1px solid ${tokens.lineSoft}`, display: "flex", alignItems: "center", gap: 1 }}>
                  <Stack direction="row" spacing={0.55}>
                    {[0, 1, 2].map((d) => <Box key={d} sx={{ width: 7, height: 7, borderRadius: 999, bgcolor: "#D8DAD6" }} />)}
                  </Stack>
                  <Typography sx={{ fontFamily: fonts.mono, fontSize: 10.5, color: tokens.muted }}>ficha · oscar álvarez</Typography>
                </Box>
                {FICHA.map(([k, v], i) => (
                  <Box key={k} sx={{ display: "flex", justifyContent: "space-between", gap: 2, px: 2, py: 1.1, borderBottom: i < FICHA.length - 1 ? `1px solid ${tokens.lineSoft}` : "none" }}>
                    <Typography sx={{ fontFamily: fonts.mono, fontSize: 11.5, color: tokens.muted, whiteSpace: "nowrap" }}>{k}</Typography>
                    <Typography sx={{ fontFamily: fonts.mono, fontSize: 11.5, fontWeight: 600, color: tokens.ink, textAlign: "right" }}>{v}</Typography>
                  </Box>
                ))}
              </Box>
            </Reveal>
          </Box>
          {/* Derecha: índice editorial con numeral serif grande */}
          <Box>
            {ITEMS.map(([t, d], i) => (
              <Reveal key={t} delay={i * 0.05}>
                <Box sx={{ display: "grid", gridTemplateColumns: { xs: "44px 1fr", md: "72px 1fr" }, gap: { xs: 2, md: 3 }, py: { xs: 3, md: 3.5 }, borderTop: i === 0 ? "none" : `1px solid ${tokens.lineSoft}` }}>
                  <Typography aria-hidden sx={{ fontFamily: fonts.serif, fontStyle: "italic", fontSize: { xs: 26, md: 40 }, lineHeight: 1, color: tokens.petrol, opacity: 0.85, mt: 0.25 }}>
                    {`0${i + 1}`}
                  </Typography>
                  <Box>
                    <Typography sx={{ fontFamily: fonts.serif, fontSize: { xs: 20, md: 23 }, fontWeight: 600, color: tokens.ink, mb: 1 }}>{t}</Typography>
                    <Typography variant="body1" sx={{ color: tokens.body, maxWidth: 560 }}>{d}</Typography>
                  </Box>
                </Box>
              </Reveal>
            ))}
          </Box>
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
              <Typography variant="body1" sx={{ color: tokens.body, mb: 2, maxWidth: 460 }}>
                Trabajo con tiendas de toda España, en remoto y con reuniones cuando toca. Cerca para lo importante, sin peaje de oficina para lo demás.
              </Typography>
              <Typography variant="body1" sx={{ color: tokens.body, mb: 3, maxWidth: 460 }}>
                ¿Negocio local catalán? También hago <Box component={Link} href="/seo-catalunya" sx={{ color: tokens.ink, fontWeight: 600, textDecoration: "underline", textDecorationColor: tokens.line, "&:hover": { textDecorationColor: tokens.petrol } }}>SEO local en Catalunya</Box>, del Maresme a Barcelona.
              </Typography>
              <Typography sx={{ fontSize: 13, fontWeight: 700, color: tokens.ink, mb: 1.5 }}>Stack y plataformas</Typography>
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
      <Crumbs items={[{ label: "Quién hay detrás" }]} />
      <Hero />
      <FounderNote />
      <Fortalezas />
      <Principios />
      {/* <Equipo /> oculta hasta tener las fotos reales del equipo */}
      <Donde />
      <DiagnosticoCTA />
      <SiteFooter />
    </Box>
  )
}
