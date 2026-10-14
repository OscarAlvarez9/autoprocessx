"use client"

import Image from "next/image"
import Link from "@/components/LocaleLink"
import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import { tokens, fonts } from "@/lib/mui/theme"
import { SiteHeader, SiteFooter, DiagnosticoCTA, Blueprint, Reveal, HeroReveal, PrimaryCTA, Crumbs } from "@/components/mui/shared"

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
        <Typography sx={{ fontFamily: fonts.mono, fontSize: 10.5, fontWeight: 600, color: tokens.ink }}>obrir a Maps</Typography>
        <Box component="span" sx={{ color: tokens.petrol, fontSize: 11 }}>↗</Box>
      </Box>
    </Box>
  )
}

const PRINCIPIOS = [
  { t: "El codi és teu", d: "No et llogo una caixa negra. T'entrego infraestructura que pots auditar, mantenir i endur-te. Sense lock-in." },
  { t: "Sobre la teva plataforma, sense migrar", d: "Treballo on ja vens (Shopify, WooCommerce, la teva web). No et canvio de lloc per vendre't una migració." },
  { t: "Sense mètriques inflades", d: "Publico una xifra quan el client la confirma. La resta són buits honestos, no promeses de màrqueting." },
  { t: "Fet a mà, no generat", d: "Cada peça està construïda i mesurada per al teu cas, no treta d'una plantilla. Es nota quan la veus funcionar." },
]


// Line-art en la lengua de los artefactos: tinta para el trazo principal, muted
// para lo secundario y un toque de pino (auriculares, collar). Bustos genéricos
// a propósito: son un hueco con carácter, no un parecido.


function Hero() {
  return (
    <Box component="section" sx={{ position: "relative", overflow: "hidden", borderBottom: `1px solid ${tokens.lineSoft}` }}>
      <Blueprint />
      <Container sx={{ position: "relative", zIndex: 1, py: { xs: 8, md: 13 } }}>
        <HeroReveal>
          <Typography variant="h1" sx={{ fontSize: { xs: 34, sm: 46, lg: 58 }, color: tokens.ink, mb: 3, maxWidth: 820 }}>
            Una agència petita on construeixo com si la botiga fos meva.
          </Typography>
          <Typography variant="body1" sx={{ fontSize: { xs: 17, md: 19 }, color: tokens.body, maxWidth: 560, mb: 4 }}>
            Sistemes d&apos;IA per a ecommerce, fets a mà a Barcelona. Sense plantilles, sense fum i sense lligams: el que munto és teu.
          </Typography>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={2.5} sx={{ alignItems: { sm: "center" } }}>
            <PrimaryCTA />
          </Stack>
        </HeroReveal>
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
            Vaig muntar SEOscar perquè em vaig cansar de veure botigues pagant un SaaS que no controlen i agències que prometen números que no poden sostenir.
          </Typography>
          <Typography variant="body1" sx={{ fontSize: { xs: 16, md: 18 }, color: tokens.body, maxWidth: 680, mb: 2.5 }}>
            Aquí ho faig al revés: prefereixo ensenyar-te un flux funcionant que un PDF amb promeses. Construeixo sobre la teva plataforma, et deixo el codi i mesuro amb les teves dades reals. Si hi ha alguna cosa que no sé, t&apos;ho dic. Si no tinc una dada, no me la invento.
          </Typography>
          <Typography variant="body1" sx={{ fontSize: { xs: 16, md: 18 }, color: tokens.body, maxWidth: 680, mb: 4 }}>
            No vull ser el teu proveïdor de fum amb sigles. Vull ser el tècnic que fa que la teva botiga vengui més, amb processos que funcionen sols al darrere i que puguis mirar per dins quan vulguis.
          </Typography>
          <Stack direction="row" spacing={2} sx={{ alignItems: "center" }}>
            <Box sx={{ width: 44, height: 44, borderRadius: 999, bgcolor: tokens.surface, border: `1px solid ${tokens.line}`, display: "grid", placeItems: "center" }}>
              <Typography sx={{ fontFamily: fonts.serif, fontSize: 18, fontWeight: 600, color: tokens.muted }}>OÁ</Typography>
            </Box>
            <Box>
              <Typography sx={{ fontWeight: 700, color: tokens.ink }}>Òscar Álvarez</Typography>
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
            En què crec, i què em nego a fer.
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


// Fortalezas del fundador: la especialidad (SEO/GEO), la base de datos, la capa
// de estrategia y el método. Sin cifras inventadas: lo que hay es formación y
// años de trabajo, y así se cuenta.
function Fortalezas() {
  const ITEMS: [string, React.ReactNode][] = [
    [
      "SEO i GEO, la meva especialitat",
      "Fa més de 4 anys que treballo el posicionament, en paral·lel amb un màster de Big Data. La visibilitat a Google i als cercadors d'IA és el meu terreny: fitxes que posicionen, botigues que les IA citen.",
    ],
    [
      "Dades, no intuïció",
      "Tot ho baso en dades: mai no invento rutes. Cada decisió surt de la teva analítica real, i si la dada no existeix, primer la mesuro i després toco. Per això pots auditar cada pas que faig.",
    ],
    [
      "Estratègia de producte i marca",
      "Tinc estudis paral·lels de màrqueting digital i xarxes socials. Això em permet baixar l'estratègia al detall: enfocar-la en productes específics, crear campanyes de marca des de zero o potenciar les que ja et funcionen.",
    ],
    [
      "Un mètode que es repeteix perquè funciona",
      <>
        Segueixo sempre els mateixos passos, els que funcionen, adaptats a les necessitats i els objectius de la teva empresa. Ni experiments amb la teva botiga ni receptes congelades:{" "}
        <Box component={Link} href="/metodo" sx={{ color: tokens.ink, fontWeight: 600, textDecoration: "underline", textDecorationColor: tokens.line, "&:hover": { textDecorationColor: tokens.petrol } }}>el mètode està publicat</Box>{" "}
        i el pots llegir abans de treballar amb mi.
      </>,
    ],
    [
      "Desenvolupament d'intel·ligència artificial",
      <>
        Estudio machine learning, prompting i arquitectura d&apos;agents des que va sortir ChatGPT, i no em quedo en la teoria:{" "}
        <Box component={Link} href="/casos-de-exito" sx={{ color: tokens.ink, fontWeight: 600, textDecoration: "underline", textDecorationColor: tokens.line, "&:hover": { textDecorationColor: tokens.petrol } }}>tinc productes propis d&apos;IA en producció</Box>.
        Tot es recolza en enginyeria real: codi en Node i Python, fluxos n8n i agents ancorats a les teves dades.
      </>,
    ],
  ]
  const FICHA: [string, string][] = [
    ["seo / geo", "més de 4 anys"],
    ["formació", "màster Big Data · màrqueting digital"],
    ["ia", "ML, prompting i agents des de ChatGPT"],
    ["productes", "IA pròpia en producció"],
    ["base", "dades, mai rutes inventades"],
  ]
  return (
    <Box component="section" sx={{ py: { xs: 8, md: 12 }, borderBottom: `1px solid ${tokens.lineSoft}` }}>
      <Container>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "0.85fr 1.15fr" }, gap: { xs: 5, md: 9 }, alignItems: "start" }}>
          {/* Izquierda sticky: titular + ficha técnica mono */}
          <Box sx={{ position: { md: "sticky" }, top: 96 }}>
            <Reveal>
              <Typography variant="h2" sx={{ fontSize: { xs: 28, md: 40 }, color: tokens.ink, mb: 2 }}>En què soc fort.</Typography>
              <Typography variant="body1" sx={{ fontSize: { xs: 16, md: 18 }, color: tokens.body, mb: 4, maxWidth: 380 }}>
                Sense llista de sigles: cinc coses concretes que fa anys que entreno.
              </Typography>
              {/* ficha técnica, el patrón de specs de la casa */}
              <Box sx={{ borderRadius: 2.5, border: `1px solid ${tokens.line}`, bgcolor: tokens.win, overflow: "hidden", maxWidth: 400 }}>
                <Box sx={{ px: 2, py: 1.1, borderBottom: `1px solid ${tokens.lineSoft}`, display: "flex", alignItems: "center", gap: 1 }}>
                  <Stack direction="row" spacing={0.55}>
                    {[0, 1, 2].map((d) => <Box key={d} sx={{ width: 7, height: 7, borderRadius: 999, bgcolor: "#D8DAD6" }} />)}
                  </Stack>
                  <Typography sx={{ fontFamily: fonts.mono, fontSize: 10.5, color: tokens.muted }}>fitxa · òscar álvarez</Typography>
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
            <Image src="/assets/gen/photo-estudio.png" alt="L'estudi de SEOscar treballant" fill sizes="(max-width: 820px) 100vw, 820px" style={{ objectFit: "cover" }} />
            <Box sx={{ position: "absolute", bottom: 10, left: 10, bgcolor: `${tokens.win}cc`, border: `1px solid ${tokens.lineSoft}`, borderRadius: 1, px: 0.75, py: 0.25 }}>
              <Typography sx={{ fontFamily: fonts.mono, fontSize: 9.5, color: tokens.muted }}>ambient d&apos;estudi · foto real, aviat</Typography>
            </Box>
          </Box>
        </Reveal>
        <Reveal>
          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "0.95fr 1.05fr" }, gap: { xs: 4, md: 6 }, alignItems: "center" }}>
            {/* mapa de Barcelona, fet a mà */}
            <Box sx={{ borderRadius: 3, overflow: "hidden", border: `1px solid ${tokens.line}`, aspectRatio: "4 / 3" }}>
              <BarcelonaMap />
            </Box>
            {/* dónde estoy + fortalezas */}
            <Box>
              <Typography variant="h3" sx={{ fontSize: { xs: 22, md: 30 }, color: tokens.ink, mb: 1.5 }}>Barcelona, i a un clic de la teva botiga.</Typography>
              <Typography variant="body1" sx={{ color: tokens.body, mb: 2, maxWidth: 460 }}>
                Treballo amb botigues de tot Espanya, en remot i amb reunions quan toca. A prop per al que és important, sense peatge d&apos;oficina per a la resta.
              </Typography>
              <Typography variant="body1" sx={{ color: tokens.body, mb: 3, maxWidth: 460 }}>
                Tens un negoci local a Catalunya? També faig <Box component={Link} href="/seo-catalunya" sx={{ color: tokens.ink, fontWeight: 600, textDecoration: "underline", textDecorationColor: tokens.line, "&:hover": { textDecorationColor: tokens.petrol } }}>SEO local a Catalunya</Box>, del Maresme a Barcelona.
              </Typography>
              <Typography sx={{ fontSize: 13, fontWeight: 700, color: tokens.ink, mb: 1.5 }}>Stack i plataformes</Typography>
              <Stack direction="row" sx={{ flexWrap: "wrap", gap: 1 }}>
                {["n8n self-hosted", "RAG ancorat", "SEO i GEO", "CRO", "Node / Python", "Shopify · WooCommerce"].map((s) => (
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

export default function SobreNosotrosMuiCa() {
  return (
    <Box sx={{ bgcolor: tokens.paper, color: tokens.body, fontFamily: fonts.sans }}>
      <SiteHeader />
      <Crumbs items={[{ label: "Qui hi ha darrere" }]} />
      <Hero />
      <FounderNote />
      <Fortalezas />
      <Principios />
      <Donde />
      <DiagnosticoCTA />
      <SiteFooter />
    </Box>
  )
}
