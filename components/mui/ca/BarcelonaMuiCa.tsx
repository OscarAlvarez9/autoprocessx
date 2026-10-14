"use client"

import Link from "@/components/LocaleLink"
import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import Accordion from "@mui/material/Accordion"
import AccordionSummary from "@mui/material/AccordionSummary"
import AccordionDetails from "@mui/material/AccordionDetails"
import { motion, useReducedMotion } from "motion/react"
import { tokens, fonts } from "@/lib/mui/theme"
import { SiteHeader, SiteFooter, StatementBand, DiagnosticoCTA, Reveal, HeroReveal, Crumbs, Blueprint, ArtifactWindow, PrimaryCTA } from "@/components/mui/shared"
import FeaturedCases from "@/components/mui/FeaturedCases"

const linkSx = { color: tokens.ink, fontWeight: 600, textDecoration: "underline", textDecorationColor: tokens.line, "&:hover": { textDecorationColor: tokens.petrol } } as const

// Mock ilustrativo del pack local: sin valoraciones ni distancias inventadas.
const PACK = [
  { name: "El teu negoci", meta: "fitxa completa · ressenyes respostes", rank: "1r", top: true },
  { name: "La competència", meta: "fitxa a mitges", rank: "2n", top: false },
  { name: "Un altre del sector", meta: "sense fotos ni horari", rank: "3r", top: false },
]

const DIFERENCIA: [string, string][] = [
  [
    "Parles amb qui fa la feina",
    "Treballo sol. No hi ha cap comercial que et vengui el projecte i després el passi a una altra persona: qui t'escolta a la primera trucada és qui analitza el teu web i fa els canvis.",
  ],
  [
    "Decideixes amb dades, no amb un informe estàndard",
    "Miro el teu Search Console, la teva analítica i la teva competència real a Barcelona. Cada proposta arriba amb el perquè i amb el que n'espero, perquè decideixis tu amb els números al davant.",
  ],
  [
    "Sense paquets tancats",
    "No et venc hores ni un pla igual per a tothom. Començo pel que més mou l'agulla al teu negoci, i si alguna cosa no té sentit per a tu, t'ho dic abans de cobrar-la.",
  ],
]

const SERVICIOS: { t: string; d: string; href: string; cta: string }[] = [
  {
    t: "SEO per a ecommerce",
    d: "La meva especialitat. Categories i fitxes de producte que posicionen i venen, SEO tècnic de la botiga i contingut que respon al que busca el teu client.",
    href: "/servicios/crecimiento-ecommerce",
    cta: "Creixement ecommerce",
  },
  {
    t: "Auditoria SEO i GEO",
    d: "El mapa complet abans de tocar res: què frena el teu web a Google i als assistents d'IA, i en quin ordre ho arreglaria.",
    href: "/servicios/auditoria-seo-geo",
    cta: "Auditoria SEO i GEO",
  },
  {
    t: "Posicionament a ChatGPT i Google AI",
    d: "Cada vegada més gent pregunta a ChatGPT o a Perplexity qui contractar o què comprar. Treballo perquè la teva marca aparegui també en aquestes respostes.",
    href: "/posicionamiento-geo",
    cta: "Posicionament GEO",
  },
  {
    t: "Shopify i WooCommerce",
    d: "Treballo sobre la plataforma que ja tens, sense migrar. Conec com posiciona cadascuna i on sol perdre vendes.",
    href: "/agencia-shopify",
    cta: "Shopify",
  },
]

const LOCAL: [string, string][] = [
  ["Google Business Profile", "Categories, serveis, horaris, fotos i publicacions ben treballats, perquè la teva fitxa sigui la que inspira confiança."],
  ["Ressenyes", "Un sistema senzill per demanar-les i respondre-les, perquè al mapa pesen tant per a Google com per a qui tria."],
  ["Pàgines de barri i de servei", "Contingut al teu web que connecta el que fas amb on ho fas, sense pàgines clonades que Google ignora."],
  ["Dades de negoci coherents", "El mateix nom, adreça i telèfon al teu web, a la teva fitxa i als directoris, perquè Google no dubti de qui ets."],
]

const METODO: [string, string][] = [
  ["Diagnòstic", "Analitzo el teu web amb les teves dades reals i et dic on se t'escapen clients. El tens en 24-48 h."],
  ["Estratègia", "Què tocar, en quin ordre i per què, prioritzat per impacte al teu negoci."],
  ["Implementació", "Els canvis els faig jo, sobre el teu web i la teva plataforma actual."],
  ["Seguiment", "Mesuro amb les teves dades contra el pla i ajusto mes a mes."],
]

const FAQS: [string, React.ReactNode][] = [
  [
    "Quant costa un consultor SEO a Barcelona?",
    "Depèn del teu web, del teu sector i d'on parteixis, així que no treballo amb tarifes de catàleg. Treballo amb preu tancat després del diagnòstic: saps què pagues abans de començar, sense sorpreses a mig projecte.",
  ],
  [
    "Quina diferència hi ha entre un consultor SEO i una agència SEO a Barcelona?",
    "Amb una agència sols parlar amb un comercial i la feina la fa una altra persona. Amb mi parles amb qui analitza el teu web i fa els canvis, perquè treballo sol. Les decisions es prenen amb les teves dades damunt la taula, no amb un informe estàndard.",
  ],
  [
    "Treballes només amb botigues en línia?",
    "No. L'ecommerce és la meva especialitat, però també treballo el SEO de negocis locals, serveis i professionals de Barcelona, inclòs el SEO local a Google Maps.",
  ],
  [
    "Quant triga el diagnòstic?",
    <>El tens en 24-48 h. És gratuït i et dic què faria amb el teu web i en quin ordre, tant si continuem junts com si no. <Box component={Link} href="/diagnostico" sx={linkSx}>Reserva&apos;l aquí</Box>.</>,
  ],
  [
    "També em pots ajudar a sortir a ChatGPT?",
    <>Sí. És el que s&apos;anomena <Box component={Link} href="/posicionamiento-geo" sx={linkSx}>GEO</Box>: treballar el teu web i la teva marca perquè els assistents com ChatGPT, Perplexity o les respostes amb IA de Google et mencionin quan algú pregunta pel que vens.</>,
  ],
]

function Pin() {
  return (
    <Box component="svg" viewBox="0 0 24 24" sx={{ width: 13, height: 13, flexShrink: 0 }} fill="none" stroke={tokens.petrol} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M12 21s-6-5.6-6-10.5a6 6 0 1 1 12 0C18 15.4 12 21 12 21z" /><circle cx="12" cy="10.5" r="2.2" />
    </Box>
  )
}

// Pack local de Google en Barcelona: tu negocio arriba cuando te buscan cerca.
function LocalPack() {
  const reduce = useReducedMotion()
  return (
    <ArtifactWindow tag="google maps · barcelona" ratio="4 / 3">
      <Box sx={{ height: "100%", display: "flex", flexDirection: "column", gap: 1.25 }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1, border: `1px solid ${tokens.line}`, borderRadius: 999, bgcolor: tokens.win, px: 1.5, py: 0.9 }}>
          <Box component="svg" viewBox="0 0 24 24" sx={{ width: 14, height: 14, flexShrink: 0 }} fill="none" stroke={tokens.muted} strokeWidth={2} strokeLinecap="round" aria-hidden>
            <circle cx="10.5" cy="10.5" r="6.5" /><path d="M20 20l-4.5-4.5" />
          </Box>
          <Typography sx={{ fontSize: 13, color: tokens.body }}>fisioterapeuta a prop meu</Typography>
        </Box>
        <Stack spacing={1} sx={{ flex: 1, minHeight: 0 }}>
          {PACK.map((r, i) => (
            <Box key={r.name} component={motion.div}
              initial={reduce ? false : { opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 + i * 0.12, duration: 0.35 }}
              sx={{ display: "flex", alignItems: "center", gap: 1.25, borderRadius: 2, px: 1.25, py: 1, border: `1px solid ${r.top ? `${tokens.petrol}44` : tokens.lineSoft}`, bgcolor: r.top ? `${tokens.petrol}0d` : tokens.win }}>
              <Box sx={{ width: 30, height: 30, flexShrink: 0, borderRadius: 1.25, bgcolor: r.top ? tokens.petrol : tokens.surface, display: "grid", placeItems: "center" }}>
                <Typography sx={{ fontFamily: fonts.mono, fontSize: 12, fontWeight: 700, color: r.top ? tokens.paper : tokens.muted }}>{r.rank}</Typography>
              </Box>
              <Box sx={{ flex: 1, minWidth: 0 }}>
                <Typography sx={{ fontSize: 13, fontWeight: r.top ? 700 : 600, color: tokens.ink, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{r.name}</Typography>
                <Stack direction="row" spacing={0.6} sx={{ alignItems: "center", mt: 0.15 }}>
                  {r.top && <Pin />}
                  <Typography sx={{ fontFamily: fonts.mono, fontSize: 10.5, color: tokens.muted, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{r.meta}</Typography>
                </Stack>
              </Box>
            </Box>
          ))}
        </Stack>
        <Typography sx={{ fontFamily: fonts.mono, fontSize: 9.5, color: tokens.muted }}>el pack local de Google · on es decideix la trucada</Typography>
      </Box>
    </ArtifactWindow>
  )
}

function Hero() {
  return (
    <Box component="section" sx={{ position: "relative", overflow: "hidden", borderBottom: `1px solid ${tokens.lineSoft}` }}>
      <Blueprint />
      <Container sx={{ position: "relative", zIndex: 1, pt: { xs: 5, md: 6 }, pb: { xs: 8, md: 11 } }}>
        <Crumbs items={[{ label: "SEO a Catalunya", href: "/seo-catalunya" }, { label: "Consultor SEO a Barcelona" }]} />
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1.08fr 0.92fr" }, gap: { xs: 5, md: 8 }, alignItems: "center", mt: { xs: 2, md: 3 } }}>
          <HeroReveal>
            <Box>
              <Typography variant="h1" sx={{ fontSize: { xs: 34, sm: 46, md: 56 }, letterSpacing: "-0.025em", color: tokens.ink, mb: 3 }}>
                Consultor SEO a <Box component="em" sx={{ fontStyle: "italic", color: tokens.petrol }}>Barcelona</Box>
              </Typography>
              <Typography variant="body1" sx={{ fontSize: { xs: 16, md: 18 }, color: tokens.body, maxWidth: 530, mb: 3.5 }}>
                Soc l&apos;Òscar, consultor SEO freelance. Ajudo botigues en línia i negocis de Barcelona a aconseguir més clients des de Google i a aparèixer també a ChatGPT. Sense intermediaris: parles amb mi, la feina la faig jo i decideixes amb dades reals.
              </Typography>
              <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ alignItems: { sm: "center" }, flexWrap: "wrap", rowGap: 1 }}>
                <Button component={Link} href="/diagnostico" variant="contained" color="primary" sx={{ borderRadius: 2, width: { xs: "100%", sm: "auto" } }}>
                  Reserva el teu diagnòstic <Box component="span" sx={{ ml: 0.75 }}>→</Box>
                </Button>
                <Typography variant="body2" sx={{ color: tokens.muted }}>Gratuït, en 24-48 h.</Typography>
              </Stack>
            </Box>
          </HeroReveal>
          <Reveal delay={0.1}>
            <LocalPack />
          </Reveal>
        </Box>
      </Container>
    </Box>
  )
}

// Consultor frente a agencia: filas editoriales con hairline.
function Diferencia() {
  return (
    <Box component="section" sx={{ py: { xs: 8, md: 12 }, borderBottom: `1px solid ${tokens.lineSoft}` }}>
      <Container sx={{ maxWidth: 860 }}>
        <Reveal>
          <Typography variant="h2" sx={{ fontSize: { xs: 28, md: 40 }, color: tokens.ink, mb: 2, maxWidth: 680 }}>
            Què canvia amb un consultor i no amb una agència SEO a Barcelona.
          </Typography>
          <Typography variant="body1" sx={{ fontSize: { xs: 16, md: 18 }, color: tokens.body, mb: { xs: 4, md: 6 }, maxWidth: 640 }}>
            A Barcelona hi ha moltes agències de SEO, i algunes ho fan molt bé. El que jo ofereixo és una altra manera de treballar: un expert SEO que porta el teu projecte de principi a fi.
          </Typography>
        </Reveal>
        <Stack>
          {DIFERENCIA.map(([t, d], i) => (
            <Reveal key={t} delay={i * 0.05}>
              <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "0.9fr 1.1fr" }, gap: { xs: 1, sm: 4 }, py: { xs: 3, md: 3.5 }, borderTop: i === 0 ? "none" : `1px solid ${tokens.lineSoft}` }}>
                <Typography component="h3" sx={{ fontFamily: fonts.serif, fontSize: { xs: 20, md: 23 }, fontWeight: 600, color: tokens.ink }}>{t}</Typography>
                <Typography variant="body1" sx={{ color: tokens.body }}>{d}</Typography>
              </Box>
            </Reveal>
          ))}
        </Stack>
      </Container>
    </Box>
  )
}

// Servicios en rejilla 2x2 con enlace a cada página.
function Servicios() {
  return (
    <Box component="section" sx={{ py: { xs: 8, md: 12 }, borderBottom: `1px solid ${tokens.lineSoft}` }}>
      <Container>
        <Reveal>
          <Typography variant="h2" sx={{ fontSize: { xs: 28, md: 40 }, color: tokens.ink, mb: 2, maxWidth: 640 }}>
            Posicionament SEO a Barcelona: en què t&apos;ajudo.
          </Typography>
          <Typography variant="body1" sx={{ fontSize: { xs: 16, md: 18 }, color: tokens.body, maxWidth: 620, mb: { xs: 5, md: 7 } }}>
            Quatre fronts amb un mateix objectiu: que et trobin els qui ja busquen el que vens, i que acabin comprant o trucant.
          </Typography>
        </Reveal>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap: { xs: 4, md: 5 } }}>
          {SERVICIOS.map((s, i) => (
            <Reveal key={s.t} delay={(i % 2) * 0.06}>
              <Box sx={{ borderTop: `2px solid ${tokens.line}`, pt: 2.5 }}>
                <Typography sx={{ fontFamily: fonts.mono, fontSize: 12, color: tokens.petrol, mb: 1 }}>{`0${i + 1}`}</Typography>
                <Typography component="h3" sx={{ fontFamily: fonts.serif, fontSize: 21, fontWeight: 600, color: tokens.ink, mb: 1 }}>{s.t}</Typography>
                <Typography variant="body1" sx={{ color: tokens.body, maxWidth: 480, mb: 1.5 }}>{s.d}</Typography>
                {s.href === "/agencia-shopify" ? (
                  <Typography variant="body2">
                    <Box component={Link} href="/agencia-shopify" sx={linkSx}>Shopify</Box>
                    <Box component="span" sx={{ color: tokens.muted }}> · </Box>
                    <Box component={Link} href="/agencia-woocommerce" sx={linkSx}>WooCommerce</Box>
                  </Typography>
                ) : (
                  <Typography variant="body2">
                    <Box component={Link} href={s.href} sx={linkSx}>{s.cta}</Box>
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

function Local() {
  return (
    <Box component="section" sx={{ py: { xs: 8, md: 12 }, borderBottom: `1px solid ${tokens.lineSoft}` }}>
      <Container sx={{ maxWidth: 860 }}>
        <Reveal>
          <Typography variant="h2" sx={{ fontSize: { xs: 28, md: 40 }, color: tokens.ink, mb: 2, maxWidth: 640 }}>
            SEO local a Barcelona: sortir a Google Maps.
          </Typography>
          <Typography variant="body1" sx={{ fontSize: { xs: 16, md: 18 }, color: tokens.body, mb: { xs: 4, md: 6 }, maxWidth: 640 }}>
            Si tens un negoci amb clients a la ciutat, bona part de les trucades es decideix al mapa, abans que ningú entri al teu web. En una ciutat amb tanta competència per barri, no n&apos;hi ha prou de tenir la fitxa: cal treballar-la.
          </Typography>
        </Reveal>
        <Stack>
          {LOCAL.map(([t, d], i) => (
            <Reveal key={t} delay={i * 0.05}>
              <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "0.9fr 1.1fr" }, gap: { xs: 1, sm: 4 }, py: { xs: 3, md: 3.5 }, borderTop: i === 0 ? "none" : `1px solid ${tokens.lineSoft}` }}>
                <Typography component="h3" sx={{ fontFamily: fonts.serif, fontSize: { xs: 20, md: 23 }, fontWeight: 600, color: tokens.ink }}>{t}</Typography>
                <Typography variant="body1" sx={{ color: tokens.body }}>{d}</Typography>
              </Box>
            </Reveal>
          ))}
        </Stack>
      </Container>
    </Box>
  )
}

// Resumen del método: índice numerado, enlaza a /metodo para el detalle.
function Metodo() {
  return (
    <Box component="section" sx={{ py: { xs: 8, md: 12 }, borderBottom: `1px solid ${tokens.lineSoft}` }}>
      <Container>
        <Reveal>
          <Typography variant="h2" sx={{ fontSize: { xs: 28, md: 40 }, color: tokens.ink, mb: 2, maxWidth: 620 }}>
            Com treballo.
          </Typography>
          <Typography variant="body1" sx={{ fontSize: { xs: 16, md: 18 }, color: tokens.body, mb: { xs: 5, md: 7 }, maxWidth: 620 }}>
            Quatre fases, sempre amb les teves dades reals. Tens el detall de cadascuna al <Box component={Link} href="/metodo" sx={linkSx}>meu mètode de treball</Box>.
          </Typography>
        </Reveal>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "repeat(4, 1fr)" }, gap: { xs: 4, md: 4 } }}>
          {METODO.map(([t, d], i) => (
            <Reveal key={t} delay={i * 0.07}>
              <Box>
                <Typography aria-hidden sx={{ fontFamily: fonts.serif, fontStyle: "italic", fontSize: { xs: 34, md: 44 }, lineHeight: 1, color: tokens.petrol, opacity: 0.85, mb: 1.5 }}>{`0${i + 1}`}</Typography>
                <Typography component="h3" sx={{ fontFamily: fonts.serif, fontSize: { xs: 20, md: 22 }, fontWeight: 600, color: tokens.ink, mb: 1 }}>{t}</Typography>
                <Typography variant="body1" sx={{ color: tokens.body }}>{d}</Typography>
              </Box>
            </Reveal>
          ))}
        </Box>
        <Box sx={{ mt: { xs: 5, md: 6 } }}>
          <PrimaryCTA variant="text" />
        </Box>
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
            Preguntes freqüents.
          </Typography>
        </Reveal>
        {FAQS.map(([q, a], i) => (
          <Accordion key={i} disableGutters elevation={0} sx={{ bgcolor: "transparent", borderBottom: `1px solid ${tokens.lineSoft}`, "&:before": { display: "none" } }}>
            <AccordionSummary sx={{ px: 0 }}>
              <Typography component="h3" sx={{ fontFamily: fonts.serif, fontSize: { xs: 17, md: 19 }, fontWeight: 600, color: tokens.ink }}>{q}</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ px: 0, pb: 3 }}>
              <Typography variant="body1" sx={{ color: tokens.body }}>{a}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Container>
    </Box>
  )
}

export default function BarcelonaMuiCa() {
  return (
    <Box sx={{ bgcolor: tokens.paper, color: tokens.body, fontFamily: fonts.sans }}>
      <SiteHeader />
      <Hero />
      <Diferencia />
      <Servicios />
      <Local />
      <StatementBand as="p" title="Quan algú a Barcelona busca el que vens, o surts tu o surt la teva competència." photo="/assets/gen/photo-catalunya.png" />
      <FeaturedCases
        title="Casos reals."
        sub="Projectes amb el que vaig fer i el resultat que van tenir. Cadascun enllaça a la seva fitxa."
        slugs={["marea-es", "farmacia-garcia-del-cerro", "clinica-de-la-ansiedad"]}
      />
      <Metodo />
      <Faq />
      <DiagnosticoCTA />
      <SiteFooter />
    </Box>
  )
}
