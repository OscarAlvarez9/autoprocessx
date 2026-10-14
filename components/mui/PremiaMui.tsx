"use client"

import Link from "@/components/LocaleLink"
import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import Accordion from "@mui/material/Accordion"
import AccordionSummary from "@mui/material/AccordionSummary"
import AccordionDetails from "@mui/material/AccordionDetails"
import { tokens, fonts } from "@/lib/mui/theme"
import { SiteHeader, SiteFooter, DiagnosticoCTA, PrimaryCTA, Reveal, HeroReveal, Crumbs, Blueprint, ArtifactWindow } from "@/components/mui/shared"

const linkSx = { color: tokens.ink, fontWeight: 600, textDecoration: "underline", textDecorationColor: tokens.line, "&:hover": { textDecorationColor: tokens.petrol } } as const

// Fuente de todas las cifras: Idescat, El municipio en cifras, código 081727
// (Premià de Mar). Comprobadas en la API de Idescat el 14/10/2026.
const IDESCAT = "https://www.idescat.cat/emex/?id=081727&lang=es"

// Densidad de población 2025, hab./km².
const DENSIDAD = [
  { label: "Premià de Mar", value: 13909, txt: "13.909" },
  { label: "Maresme", value: 1197.8, txt: "1.197,8" },
  { label: "Cataluña", value: 253, txt: "253" },
]

const CIFRAS: { n: string; t: string }[] = [
  { n: "29.348", t: "habitantes en 2025" },
  { n: "2,11 km²", t: "de término municipal" },
  { n: "1.900", t: "autónomos dados de alta (junio 2026, provisional)" },
  { n: "47 %", t: "del empleo asalariado está en cuentas de hasta 9 trabajadores" },
]

const PASOS: [string, string][] = [
  ["Diagnóstico", "Reviso tu web, tu ficha de Google y las búsquedas que te interesan. En 24-48 h tienes qué haría y en qué orden."],
  ["Plan corto", "Pocas acciones, priorizadas por lo que más puede mover tus contactos. Con precio cerrado tras el diagnóstico."],
  ["Trabajo hecho", "Los cambios los hago yo sobre tu web y tu ficha. Tú los ves aplicados y te explico qué ha cambiado."],
]

function DensityChart() {
  const max = DENSIDAD[0].value
  return (
    <ArtifactWindow tag="habitantes por km² · 2025" ratio="4 / 3">
      <Box sx={{ height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", gap: 2 }}>
        <Typography sx={{ fontFamily: fonts.serif, fontSize: { xs: 18, md: 20 }, fontWeight: 600, color: tokens.ink, lineHeight: 1.25 }}>
          Premià de Mar tiene casi doce veces la densidad media del Maresme
        </Typography>
        <Box sx={{ display: "flex", alignItems: "flex-end", gap: { xs: 2, md: 3 }, flex: 1, minHeight: 120, borderBottom: `1px solid ${tokens.line}`, px: 1 }}>
          {DENSIDAD.map((d, i) => (
            <Box key={d.label} sx={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-end", height: "100%" }}>
              <Typography sx={{ fontFamily: fonts.mono, fontSize: 11.5, fontWeight: 700, color: i === 0 ? tokens.petrol : tokens.body, mb: 0.75 }}>{d.txt}</Typography>
              <Box sx={{ width: "70%", height: `${Math.max((d.value / max) * 100, 2.5)}%`, bgcolor: i === 0 ? tokens.petrol : `${tokens.petrol}55`, borderRadius: "6px 6px 0 0" }} />
            </Box>
          ))}
        </Box>
        <Stack direction="row" sx={{ gap: { xs: 2, md: 3 }, px: 1 }}>
          {DENSIDAD.map((d) => (
            <Typography key={d.label} sx={{ flex: 1, textAlign: "center", fontSize: 12, color: tokens.muted }}>{d.label}</Typography>
          ))}
        </Stack>
        <Typography component="a" href={IDESCAT} target="_blank" rel="noopener" sx={{ fontFamily: fonts.mono, fontSize: 10, color: tokens.muted, textDecoration: "underline", textDecorationColor: tokens.line }}>
          fuente: Idescat, El municipio en cifras
        </Typography>
      </Box>
    </ArtifactWindow>
  )
}

function Hero() {
  return (
    <Box component="section" sx={{ position: "relative", overflow: "hidden", borderBottom: `1px solid ${tokens.lineSoft}` }}>
      <Blueprint />
      <Box sx={{ position: "relative", zIndex: 1 }}>
        <Crumbs items={[{ label: "SEO en el Maresme", href: "/agencia-seo-maresme" }, { label: "Consultor SEO en Premià de Mar" }]} />
        <Container sx={{ pt: { xs: 3, md: 4 }, pb: { xs: 8, md: 11 } }}>
          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "0.95fr 1.05fr" }, gap: { xs: 5, md: 8 }, alignItems: "center" }}>
            <HeroReveal>
              <Box>
                <Typography variant="h1" sx={{ fontSize: { xs: 34, sm: 46, md: 54 }, letterSpacing: "-0.025em", color: tokens.ink, mb: 3 }}>
                  Consultor SEO en <Box component="em" sx={{ fontStyle: "italic", color: tokens.petrol }}>Premià de Mar</Box>
                </Typography>
                <Typography variant="body1" sx={{ fontSize: { xs: 16, md: 18 }, color: tokens.body, maxWidth: 520, mb: 3.5 }}>
                  Premià de Mar es mi base. Desde aquí ayudo a autónomos, comercios y pequeñas empresas a que los encuentren cuando alguien busca lo que hacen, en Google, en el mapa y en ChatGPT. Sin intermediarios: el trabajo lo hago yo.
                </Typography>
                <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ alignItems: { sm: "center" }, flexWrap: "wrap", rowGap: 1 }}>
                  <PrimaryCTA />
                  <Typography variant="body2" sx={{ color: tokens.muted }}>Sin compromiso, respuesta en 24-48 h.</Typography>
                </Stack>
              </Box>
            </HeroReveal>
            <Reveal delay={0.1}>
              <DensityChart />
            </Reveal>
          </Box>
        </Container>
      </Box>
    </Box>
  )
}

// Cifras grandes en fila: familia de layout distinta a las demás secciones.
function Cifras() {
  return (
    <Box component="section" sx={{ py: { xs: 8, md: 12 }, borderBottom: `1px solid ${tokens.lineSoft}` }}>
      <Container>
        <Reveal>
          <Typography variant="h2" sx={{ fontSize: { xs: 28, md: 40 }, color: tokens.ink, mb: 2, maxWidth: 700 }}>
            Un municipio pequeño, muy denso y de negocio pequeño
          </Typography>
          <Typography variant="body1" sx={{ fontSize: { xs: 16, md: 18 }, color: tokens.body, mb: { xs: 5, md: 7 }, maxWidth: 680 }}>
            En Premià de Mar casi no hay grandes empresas: según Idescat, ninguna cuenta de cotización del municipio tiene 250 trabajadores o más. Lo que hay son autónomos y microempresas, la mayoría en servicios, en muy poco territorio.
          </Typography>
        </Reveal>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr 1fr", md: "repeat(4, 1fr)" }, gap: { xs: 3, md: 4 } }}>
          {CIFRAS.map((c, i) => (
            <Reveal key={c.t} delay={i * 0.05}>
              <Box sx={{ borderLeft: `2px solid ${tokens.petrol}`, pl: 2 }}>
                <Typography sx={{ fontFamily: fonts.serif, fontSize: { xs: 28, md: 38 }, fontWeight: 600, color: tokens.ink, lineHeight: 1.1, mb: 0.75 }}>{c.n}</Typography>
                <Typography variant="body2" sx={{ color: tokens.body }}>{c.t}</Typography>
              </Box>
            </Reveal>
          ))}
        </Box>
        <Typography variant="body2" sx={{ color: tokens.muted, mt: { xs: 4, md: 5 } }}>
          Datos de <Box component="a" href={IDESCAT} target="_blank" rel="noopener" sx={linkSx}>Idescat, El municipio en cifras: Premià de Mar</Box>. De los 2.800 empleos asalariados en empresas del municipio, 2.435 son de servicios (87 %), y de los 1.900 autónomos, 1.545 (81 %).
        </Typography>
      </Container>
    </Box>
  )
}

function Pequeno() {
  return (
    <Box component="section" sx={{ py: { xs: 8, md: 12 }, borderBottom: `1px solid ${tokens.lineSoft}`, bgcolor: tokens.surface }}>
      <Container sx={{ maxWidth: 820 }}>
        <Reveal>
          <Typography variant="h2" sx={{ fontSize: { xs: 28, md: 40 }, color: tokens.ink, mb: 3 }}>
            Qué significa eso para tu SEO
          </Typography>
        </Reveal>
        <Reveal delay={0.05}>
          <Typography variant="body1" sx={{ fontSize: { xs: 16, md: 18 }, color: tokens.body, mb: 2.5 }}>
            Cuando un negocio es de una o dos personas, nadie tiene tiempo de escribir artículos cada semana ni de pelearse con la web. Por eso empiezo por lo que da más con menos esfuerzo: la ficha de Google Business completa, con las categorías bien elegidas, fotos reales y respuesta a cada reseña.
          </Typography>
        </Reveal>
        <Reveal delay={0.1}>
          <Typography variant="body1" sx={{ fontSize: { xs: 16, md: 18 }, color: tokens.body, mb: 2.5 }}>
            Con un término municipal de 2,11 km², quien busca desde Premià también ve negocios de los pueblos de al lado. En el diagnóstico compruebo para qué búsquedas apareces tú y para cuáles aparece otro, y si tu web deja claro a qué zona das servicio.
          </Typography>
        </Reveal>
        <Reveal delay={0.15}>
          <Typography variant="body1" sx={{ fontSize: { xs: 16, md: 18 }, color: tokens.body }}>
            Si además vendes online, el trabajo cambia: fichas de producto, categorías y velocidad. Es mi especialidad, en <Box component={Link} href="/agencia-woocommerce" sx={linkSx}>WooCommerce</Box> y en <Box component={Link} href="/agencia-shopify" sx={linkSx}>Shopify</Box>.
          </Typography>
        </Reveal>
      </Container>
    </Box>
  )
}

function Cercano() {
  return (
    <Box component="section" sx={{ py: { xs: 8, md: 12 }, borderBottom: `1px solid ${tokens.lineSoft}` }}>
      <Container>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap: { xs: 3, md: 8 }, alignItems: "start" }}>
          <Reveal>
            <Typography variant="h2" sx={{ fontSize: { xs: 28, md: 38 }, color: tokens.ink }}>
              Un proyecto de aquí al lado, en Canet de Mar
            </Typography>
          </Reveal>
          <Reveal delay={0.08}>
            <Box>
              <Typography variant="body1" sx={{ color: tokens.body, mb: 2 }}>
                La Clínica de la Ansiedad tenía una web que no traía pacientes y que ni siquiera estaba dada de alta en Search Console. Le hice web nueva, páginas pensadas para lo que buscan los pacientes, un blog con plan editorial y medición de cada clic en Reservar y en WhatsApp.
              </Typography>
              <Typography variant="body1" sx={{ color: tokens.body, mb: 2.5 }}>
                En el primer mes con la estrategia asentada, 11 de 51 visitantes pulsaron Reservar.
              </Typography>
              <Box component={Link} href="/casos-de-exito/clinica-de-la-ansiedad" sx={linkSx}>Ver el caso completo</Box>
            </Box>
          </Reveal>
        </Box>
      </Container>
    </Box>
  )
}

function Pasos() {
  return (
    <Box component="section" sx={{ py: { xs: 8, md: 12 }, borderBottom: `1px solid ${tokens.lineSoft}` }}>
      <Container>
        <Reveal>
          <Typography variant="h2" sx={{ fontSize: { xs: 28, md: 40 }, color: tokens.ink, mb: { xs: 4, md: 6 }, maxWidth: 640 }}>
            Cómo empezamos
          </Typography>
        </Reveal>
        <Box component="ol" sx={{ listStyle: "none", p: 0, m: 0, display: "grid", gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" }, gap: { xs: 3, md: 0 } }}>
          {PASOS.map(([t, d], i) => (
            <Reveal key={t} delay={i * 0.06}>
              <Box component="li" sx={{ pr: { md: 4 }, pl: { md: i === 0 ? 0 : 4 }, borderLeft: { md: i === 0 ? "none" : `1px solid ${tokens.lineSoft}` }, height: "100%" }}>
                <Typography aria-hidden sx={{ fontFamily: fonts.mono, fontSize: 12, fontWeight: 700, color: tokens.petrol, mb: 1 }}>{`paso ${i + 1}`}</Typography>
                <Typography component="h3" sx={{ fontFamily: fonts.serif, fontSize: { xs: 20, md: 22 }, fontWeight: 600, color: tokens.ink, mb: 1 }}>{t}</Typography>
                <Typography variant="body1" sx={{ color: tokens.body }}>{d}</Typography>
              </Box>
            </Reveal>
          ))}
        </Box>
      </Container>
    </Box>
  )
}

function Faq({ faqs }: { faqs: [string, string][] }) {
  return (
    <Box component="section" sx={{ py: { xs: 8, md: 12 }, borderBottom: `1px solid ${tokens.lineSoft}` }}>
      <Container sx={{ maxWidth: 760 }}>
        <Reveal>
          <Typography variant="h2" sx={{ fontSize: { xs: 28, md: 40 }, color: tokens.ink, mb: { xs: 4, md: 6 } }}>
            Dudas habituales
          </Typography>
        </Reveal>
        {faqs.map(([q, a]) => (
          <Accordion key={q} disableGutters elevation={0} sx={{ bgcolor: "transparent", borderBottom: `1px solid ${tokens.lineSoft}`, "&:before": { display: "none" } }}>
            <AccordionSummary sx={{ px: 0 }}>
              <Typography component="h3" sx={{ fontFamily: fonts.serif, fontSize: { xs: 17, md: 19 }, fontWeight: 600, color: tokens.ink }}>{q}</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ px: 0, pb: 3 }}>
              <Typography variant="body1" sx={{ color: tokens.body }}>{a}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
        <Typography variant="body1" sx={{ color: tokens.body, mt: { xs: 5, md: 6 } }}>
          ¿Tu negocio está en otro municipio? Tengo páginas para <Box component={Link} href="/consultor-seo-mataro" sx={linkSx}>Mataró</Box>, para el <Box component={Link} href="/agencia-seo-maresme" sx={linkSx}>resto del Maresme</Box> y para <Box component={Link} href="/consultor-seo-barcelona" sx={linkSx}>Barcelona</Box>.
        </Typography>
      </Container>
    </Box>
  )
}

export default function PremiaMui({ faqs }: { faqs: [string, string][] }) {
  return (
    <Box sx={{ bgcolor: tokens.paper, color: tokens.body, fontFamily: fonts.sans }}>
      <SiteHeader />
      <Box component="main">
        <Hero />
        <Cifras />
        <Pequeno />
        <Cercano />
        <Pasos />
        <Faq faqs={faqs} />
        <DiagnosticoCTA />
      </Box>
      <SiteFooter />
    </Box>
  )
}
