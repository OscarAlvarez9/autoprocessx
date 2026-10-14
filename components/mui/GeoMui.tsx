"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, useReducedMotion } from "motion/react"
import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import Accordion from "@mui/material/Accordion"
import AccordionSummary from "@mui/material/AccordionSummary"
import AccordionDetails from "@mui/material/AccordionDetails"
import { tokens, fonts } from "@/lib/mui/theme"
import { SiteHeader, SiteFooter, DiagnosticoCTA, ServiceHero, Reveal, ArtifactWindow, Crumbs } from "@/components/mui/shared"
import { BlockGlyph, type GlyphName } from "@/components/mui/landingGlyphs"
import { GEO_FAQS } from "@/app/posicionamiento-geo/faqs"

const linkSx = { color: tokens.ink, fontWeight: 600, textDecoration: "underline", textDecorationColor: tokens.line, "&:hover": { textDecorationColor: tokens.petrol } } as const

/* ---------- artefacto: chequeo GEO de un dominio ---------- */

// Lista de comprobación ilustrativa: tres bots de IA contra el servidor, y las
// tres piezas de la web que deciden si una IA puede citarte. Un bot alterna
// entre bloqueado y abierto para contar el problema típico del WAF/CDN.
function GeoCheckArt() {
  const reduce = useReducedMotion()
  const [open, setOpen] = useState(false)
  useEffect(() => {
    if (reduce) return
    const t = setInterval(() => setOpen((o) => !o), 3000)
    return () => clearInterval(t)
  }, [reduce])
  const bots: [string, boolean][] = [["GPTBot", true], ["ClaudeBot", true], ["PerplexityBot", open]]
  const piezas: [string, string][] = [["llms.txt", "publicado"], ["schema", "Organization · Product · FAQPage"], ["contenido", "respuestas directas"]]
  const rowSx = { display: "flex", alignItems: "center", justifyContent: "space-between", gap: 1, bgcolor: tokens.win, border: `1px solid ${tokens.lineSoft}`, borderRadius: 1.5, px: 1, py: 0.65 } as const
  return (
    <ArtifactWindow tag="chequeo GEO · tu dominio" ratio="16 / 11">
      <Box sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
        <Typography sx={{ fontFamily: fonts.mono, fontSize: 9.5, color: tokens.muted, mb: 0.75 }}>acceso de bots de IA · respuesta del servidor</Typography>
        <Stack spacing={0.6}>
          {bots.map(([name, ok]) => (
            <Box key={name} sx={rowSx}>
              <Typography sx={{ fontFamily: fonts.mono, fontSize: { xs: 10, md: 11 }, fontWeight: 700, color: tokens.ink }}>{name}</Typography>
              <Box component={motion.div} key={ok ? "ok" : "ko"} initial={reduce ? false : { opacity: 0, y: 3 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}
                sx={{ display: "inline-flex", alignItems: "center", gap: 0.5, borderRadius: 999, px: 0.9, py: 0.2, bgcolor: ok ? `${tokens.teal}16` : `${tokens.red}14`, border: `1px solid ${ok ? `${tokens.teal}44` : `${tokens.red}44`}` }}>
                <Box sx={{ width: 5, height: 5, borderRadius: 999, bgcolor: ok ? tokens.teal : tokens.red }} />
                <Typography sx={{ fontFamily: fonts.mono, fontSize: 9.5, fontWeight: 700, color: ok ? tokens.teal : tokens.red }}>{ok ? "200 OK" : "403 WAF"}</Typography>
              </Box>
            </Box>
          ))}
        </Stack>
        <Typography sx={{ fontFamily: fonts.mono, fontSize: 9.5, color: tokens.muted, mt: 1.25, mb: 0.75 }}>lo que la IA lee y puede citar</Typography>
        <Stack spacing={0.6}>
          {piezas.map(([k, v]) => (
            <Box key={k} sx={rowSx}>
              <Typography sx={{ fontFamily: fonts.mono, fontSize: { xs: 10, md: 11 }, fontWeight: 700, color: tokens.petrol }}>{k}</Typography>
              <Typography sx={{ fontFamily: fonts.mono, fontSize: 9.5, color: tokens.muted, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{v}</Typography>
            </Box>
          ))}
        </Stack>
        <Typography sx={{ fontFamily: fonts.mono, fontSize: 9, color: tokens.muted, mt: "auto", pt: 1 }}>
          esquema ilustrativo · el estado real de tu web sale del diagnóstico
        </Typography>
      </Box>
    </ArtifactWindow>
  )
}

/* ---------- datos ---------- */

const REVISO: readonly (readonly [string, string, GlyphName])[] = [
  ["Que los bots de IA puedan entrar", "Verifico que GPTBot, ClaudeBot y PerplexityBot reciben un 200 de tu servidor. Las protecciones anti-bot del hosting, del WAF o de Cloudflare los bloquean por defecto con frecuencia, y nadie se entera. Si están bloqueados, se permite el paso a los bots legítimos de IA sin bajar la guardia frente al scraping malicioso.", "bot-block"],
  ["llms.txt publicado", "Publico tu llms.txt: un archivo en la raíz de la web que resume para un modelo de lenguaje qué haces y cuáles son tus páginas importantes. Es una pieza más, no la que decide, y por eso va junto al resto.", "code-theme"],
  ["Datos estructurados (schema)", "Reviso y completo el schema de marca, producto, servicio y FAQs. Un schema básico o roto resta resultados enriquecidos en Google y resta citabilidad cuando una IA busca qué recomendar.", "schema"],
  ["Contenido citable", "Una IA cita lo que responde bien a una pregunta. Estructuro las páginas que importan con respuestas directas, FAQs reales, fichas completas y categorías claras, para que sean citables y no solo indexables.", "ai-cite"],
]

const COMPARA: [string, string, string][] = [
  ["dónde apareces", "lista de resultados de Google", "respuesta de ChatGPT, Perplexity o los AI Overviews"],
  ["quién te lee", "Googlebot", "GPTBot, ClaudeBot, PerplexityBot y Google"],
  ["qué se gana", "un clic desde la lista", "una mención o una cita con enlace"],
  ["qué pesa más", "relevancia y autoridad", "acceso, claridad y respuestas citables"],
]

/* ---------- secciones ---------- */

function Hero() {
  return (
    <ServiceHero
      title="Posicionamiento GEO. Que ChatGPT y Google AI citen tu marca."
      sub="Cada vez más gente pregunta a ChatGPT, Perplexity o Google AI antes de comprar o de contratar. Trabajo para que tu marca esté en esas respuestas: que los bots de IA puedan leer tu web, que la entiendan y que tengan algo claro que citar."
      specs={[
        ["buscadores", "ChatGPT · Perplexity · Google AI"],
        ["qué reviso", "bots · llms.txt · schema · contenido"],
        ["precio", "precio cerrado tras el diagnóstico"],
      ]}
      note="Es posicionamiento en la IA: que te citen a ti, no a tu competencia."
      artifact={<GeoCheckArt />}
    />
  )
}

function QueEsGeo() {
  return (
    <Box component="section" sx={{ py: { xs: 8, md: 12 }, borderBottom: `1px solid ${tokens.lineSoft}` }}>
      <Container>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "0.95fr 1.05fr" }, gap: { xs: 5, md: 8 }, alignItems: "start" }}>
          <Reveal>
            <Box>
              <Typography variant="h2" sx={{ fontSize: { xs: 28, md: 40 }, color: tokens.ink, mb: 2 }}>
                Qué es el GEO y en qué se diferencia del SEO.
              </Typography>
              <Typography variant="body1" sx={{ fontSize: { xs: 16, md: 18 }, color: tokens.body, mb: 2 }}>
                GEO (Generative Engine Optimization) es el SEO para IA: el trabajo para que los asistentes de IA que responden preguntas mencionen y enlacen tu marca. El SEO te pone en la lista de resultados; el GEO te pone dentro de la respuesta.
              </Typography>
              <Typography variant="body1" sx={{ fontSize: { xs: 16, md: 18 }, color: tokens.body, mb: 2 }}>
                No sustituye al SEO, se apoya en él. Por eso lo trabajo como GEO SEO: misma base técnica, más dos condiciones propias de la IA. Que sus bots puedan entrar en tu web y que tu contenido se pueda citar tal cual.
              </Typography>
              <Typography variant="body1" sx={{ color: tokens.body }}>
                Lo explico con más calma en{" "}
                <Box component={Link} href="/blog/que-es-geo" sx={linkSx}>qué es el GEO</Box>.
              </Typography>
            </Box>
          </Reveal>
          <Reveal delay={0.08}>
            <Box sx={{ border: `1px solid ${tokens.line}`, borderRadius: 3, bgcolor: tokens.win, overflow: "hidden" }}>
              <Box sx={{ display: "grid", gridTemplateColumns: "0.8fr 1fr 1fr", bgcolor: tokens.surface, borderBottom: `1px solid ${tokens.line}` }}>
                {["", "SEO", "GEO"].map((h, i) => (
                  <Typography key={i} sx={{ fontFamily: fonts.mono, fontSize: 12, fontWeight: 700, color: i === 2 ? tokens.petrol : tokens.ink, px: { xs: 1.25, md: 2 }, py: 1.25 }}>{h}</Typography>
                ))}
              </Box>
              {COMPARA.map(([k, seo, geo], i) => (
                <Box key={k} sx={{ display: "grid", gridTemplateColumns: "0.8fr 1fr 1fr", borderTop: i === 0 ? "none" : `1px solid ${tokens.lineSoft}` }}>
                  <Typography sx={{ fontFamily: fonts.mono, fontSize: 11, color: tokens.muted, px: { xs: 1.25, md: 2 }, py: 1.5 }}>{k}</Typography>
                  <Typography sx={{ fontSize: { xs: 13, md: 14 }, color: tokens.body, px: { xs: 1.25, md: 2 }, py: 1.5 }}>{seo}</Typography>
                  <Typography sx={{ fontSize: { xs: 13, md: 14 }, fontWeight: 600, color: tokens.ink, px: { xs: 1.25, md: 2 }, py: 1.5 }}>{geo}</Typography>
                </Box>
              ))}
            </Box>
          </Reveal>
        </Box>
      </Container>
    </Box>
  )
}

function QueReviso() {
  return (
    <Box component="section" sx={{ py: { xs: 8, md: 12 }, borderBottom: `1px solid ${tokens.lineSoft}` }}>
      <Container>
        <Reveal>
          <Box sx={{ maxWidth: 640, mb: { xs: 5, md: 7 } }}>
            <Typography variant="h2" sx={{ fontSize: { xs: 28, md: 40 }, color: tokens.ink, mb: 2 }}>Qué reviso para que la IA te cite.</Typography>
            <Typography variant="body1" sx={{ fontSize: { xs: 16, md: 18 }, color: tokens.body }}>
              Cuatro frentes, en este orden. Si los bots no pueden entrar, lo demás no sirve; si entran y no encuentran respuestas claras, tampoco te citan.
            </Typography>
          </Box>
        </Reveal>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap: { xs: 3, md: 4 } }}>
          {REVISO.map(([t, d, g], i) => (
            <Reveal key={t} delay={(i % 2) * 0.06}>
              <Box sx={{ borderTop: `2px solid ${tokens.line}`, pt: 2.5 }}>
                <Stack direction="row" spacing={1.5} sx={{ alignItems: "center", mb: 1.75 }}>
                  <BlockGlyph name={g} />
                  <Typography sx={{ fontFamily: fonts.mono, fontSize: 12, color: tokens.petrol }}>{`0${i + 1}`}</Typography>
                </Stack>
                <Typography variant="h3" sx={{ fontFamily: fonts.serif, fontSize: 21, fontWeight: 600, color: tokens.ink, mb: 1 }}>{t}</Typography>
                <Typography variant="body1" sx={{ color: tokens.body, maxWidth: 480 }}>{d}</Typography>
              </Box>
            </Reveal>
          ))}
        </Box>
        <Reveal delay={0.1}>
          <Typography variant="body2" sx={{ color: tokens.muted, mt: { xs: 6, md: 8 }, textAlign: "center", maxWidth: 640, mx: "auto" }}>
            Si quieres el mapa completo, SEO y GEO juntos en un único documento, eso es la{" "}
            <Box component={Link} href="/servicios/auditoria-seo-geo" sx={linkSx}>auditoría SEO y GEO</Box>.
          </Typography>
        </Reveal>
      </Container>
    </Box>
  )
}

function ParaQuien() {
  const plataformas: [string, string][] = [
    ["Shopify", "/agencia-shopify"],
    ["WooCommerce", "/agencia-woocommerce"],
    ["Magento", "/agencia-magento"],
  ]
  const zonas: [string, string][] = [
    ["Maresme", "/agencia-seo-maresme"],
    ["Catalunya", "/seo-catalunya"],
  ]
  const chip = (label: string, href: string) => (
    <Box key={href} component={Link} href={href} sx={{ textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 0.5, border: `1px solid ${tokens.line}`, borderRadius: 999, px: 1.5, py: 0.6, bgcolor: tokens.win, "&:hover": { borderColor: tokens.petrol }, "&:hover .rel-arrow": { transform: "translate(2px,-2px)" } }}>
      <Typography sx={{ fontSize: 13.5, fontWeight: 600, color: tokens.ink }}>{label}</Typography>
      <Box className="rel-arrow" component="span" sx={{ color: tokens.petrol, fontFamily: fonts.mono, fontSize: 12, transition: "transform .2s", "@media (prefers-reduced-motion: reduce)": { transition: "none" } }}>↗</Box>
    </Box>
  )
  const cardSx = { p: { xs: 3, md: 3.5 }, borderRadius: 3, border: `1px solid ${tokens.line}`, bgcolor: tokens.win, height: "100%", display: "flex", flexDirection: "column" } as const
  return (
    <Box component="section" sx={{ py: { xs: 8, md: 12 }, borderBottom: `1px solid ${tokens.lineSoft}` }}>
      <Container>
        <Reveal>
          <Typography variant="h2" sx={{ fontSize: { xs: 28, md: 40 }, color: tokens.ink, mb: { xs: 5, md: 7 }, maxWidth: 620 }}>
            GEO para tiendas online y para negocios locales.
          </Typography>
        </Reveal>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap: { xs: 3, md: 4 } }}>
          <Reveal>
            <Box sx={cardSx}>
              <Typography variant="h3" sx={{ fontFamily: fonts.serif, fontSize: 22, fontWeight: 600, color: tokens.ink, mb: 1.25 }}>Tiendas online</Typography>
              <Typography variant="body1" sx={{ color: tokens.body, mb: 2 }}>
                Cuando alguien pregunta a una IA dónde comprar lo tuyo, tu tienda tiene que estar en la respuesta. Aquí el trabajo se concentra en fichas de producto, categorías y FAQs que respondan preguntas de compra reales, con su schema de producto completo.
              </Typography>
              <Typography variant="body1" sx={{ color: tokens.body, mb: 2.5 }}>
                Va incluido en el{" "}
                <Box component={Link} href="/servicios/crecimiento-ecommerce" sx={linkSx}>pack Crecimiento ecommerce</Box>, junto al SEO técnico y el CRO. Cada plataforma tiene sus particularidades:
              </Typography>
              <Stack direction="row" sx={{ flexWrap: "wrap", gap: 1, mt: "auto" }}>
                {plataformas.map(([l, h]) => chip(l, h))}
              </Stack>
            </Box>
          </Reveal>
          <Reveal delay={0.08}>
            <Box sx={cardSx}>
              <Typography variant="h3" sx={{ fontFamily: fonts.serif, fontSize: 22, fontWeight: 600, color: tokens.ink, mb: 1.25 }}>Negocios locales</Typography>
              <Typography variant="body1" sx={{ color: tokens.body, mb: 2.5 }}>
                También se pregunta a la IA por un servicio cerca de casa. Para que te recomiende, tu negocio tiene que estar descrito de forma clara y consistente: qué haces, dónde y para quién, con su schema de negocio local y respuestas a lo que tus clientes preguntan antes de llamarte. Lo trabajo junto al SEO local.
              </Typography>
              <Stack direction="row" sx={{ flexWrap: "wrap", gap: 1, mt: "auto" }}>
                {zonas.map(([l, h]) => chip(l, h))}
              </Stack>
            </Box>
          </Reveal>
        </Box>
      </Container>
    </Box>
  )
}

function MetodoLink() {
  return (
    <Box component="section" sx={{ py: { xs: 7, md: 10 }, borderBottom: `1px solid ${tokens.lineSoft}` }}>
      <Container sx={{ textAlign: "center", maxWidth: 680 }}>
        <Reveal>
          <Typography variant="h2" sx={{ fontSize: { xs: 24, md: 32 }, color: tokens.ink, mb: 2 }}>
            Mismo método, mismo responsable.
          </Typography>
          <Typography variant="body1" sx={{ color: tokens.body, mb: 3 }}>
            Hablas directamente con quien revisa e implementa, no con un gestor de cuenta. Diagnóstico con tus datos, plan priorizado por impacto y ejecución sobre tu web.
          </Typography>
          <Button component={Link} href="/metodo" sx={{ color: tokens.ink, fontWeight: 700, px: 0, "&:hover": { bgcolor: "transparent", color: tokens.petrol } }}>
            Ver el método completo <Box component="span" sx={{ color: tokens.petrol, ml: 0.5 }}>↗</Box>
          </Button>
        </Reveal>
      </Container>
    </Box>
  )
}

function Faq() {
  return (
    <Box component="section" sx={{ py: { xs: 8, md: 12 }, borderBottom: `1px solid ${tokens.lineSoft}` }}>
      <Container sx={{ maxWidth: 760 }}>
        <Reveal>
          <Typography variant="h2" sx={{ fontSize: { xs: 28, md: 40 }, color: tokens.ink, mb: { xs: 4, md: 6 } }}>
            Preguntas frecuentes sobre posicionamiento GEO.
          </Typography>
        </Reveal>
        {GEO_FAQS.map((f, i) => (
          <Accordion key={i} disableGutters elevation={0} sx={{ bgcolor: "transparent", borderBottom: `1px solid ${tokens.lineSoft}`, "&:before": { display: "none" } }}>
            <AccordionSummary sx={{ px: 0 }}>
              <Typography sx={{ fontFamily: fonts.serif, fontSize: { xs: 17, md: 19 }, fontWeight: 600, color: tokens.ink }}>{f.q}</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ px: 0, pb: 3 }}>
              <Typography variant="body1" sx={{ color: tokens.body }}>{f.a}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Container>
    </Box>
  )
}

export default function GeoMui() {
  return (
    <Box sx={{ bgcolor: tokens.paper, color: tokens.body, fontFamily: fonts.sans }}>
      <SiteHeader />
      <Crumbs items={[{ label: "Servicios" }, { label: "Posicionamiento GEO" }]} />
      <Hero />
      <QueEsGeo />
      <QueReviso />
      <ParaQuien />
      <MetodoLink />
      <Faq />
      <DiagnosticoCTA />
      <SiteFooter />
    </Box>
  )
}
