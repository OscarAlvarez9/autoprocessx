"use client"

import Link from "@/components/LocaleLink"
import Image from "next/image"
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
import { SiteHeader, SiteFooter, StatementBand, DiagnosticoCTA, Reveal, HeroReveal, Crumbs, Blueprint, ArtifactWindow } from "@/components/mui/shared"
import FeaturedCases from "@/components/mui/FeaturedCases"

const linkSx = { color: tokens.ink, fontWeight: 600, textDecoration: "underline", textDecorationColor: tokens.line, "&:hover": { textDecorationColor: tokens.petrol } } as const

const PACK = [
  { name: "El teu negoci", meta: "a 400 m · obert ara", rating: "4,9", rank: "1r", top: true },
  { name: "La competència", meta: "a 1,3 km", rating: null, rank: "2n", top: false },
  { name: "Un altre del sector", meta: "a 2,1 km", rating: null, rank: "3r", top: false },
]

const HAGO: [string, React.ReactNode][] = [
  [
    "SEO local: que et trobin al teu poble",
    "Fitxa de Google Business optimitzada, les cerques de “a prop meu” i les ressenyes treballades, perquè surtis tu quan algú busca el que fas al teu poble, i no el del carrer del costat.",
  ],
  [
    "SEO per a botigues en línia",
    <>La meva especialitat: <Box component={Link} href="/agencia-woocommerce" sx={linkSx}>WooCommerce</Box> i <Box component={Link} href="/agencia-shopify" sx={linkSx}>Shopify</Box>, fitxes de producte i categories que posicionen i venen, no que simplement existeixen.</>,
  ],
  [
    "Aparèixer també a ChatGPT i a les IA",
    <>Cada vegada més gent pregunta a ChatGPT o a Perplexity què comprar o qui contractar. Treballo perquè també hi surtis tu: és el que anomeno <Box component={Link} href="/blog/que-es-geo" sx={linkSx}>GEO, i t&apos;ho explico aquí</Box>.</>,
  ],
]

const TRABAJO: [string, React.ReactNode][] = [
  [
    "Primer auditoria, després proposta",
    <>Començo mirant el teu web de debò, amb captures i dades concretes, no una plantilla. D&apos;aquí surt què faria i en quin ordre. És una <Box component={Link} href="/servicios/auditoria-seo-geo" sx={linkSx}>auditoria real</Box>, no un informe genèric.</>,
  ],
  [
    "Treballo dins del teu web, no des de fora",
    "No et lliuro un PDF de recomanacions perquè les apliquis tu. Els canvis els faig jo, sobre el teu web, i els veus fets.",
  ],
  [
    "Sense permanència i sense argot",
    "Contractes clars, sense lligams, i tot explicat per a propietaris de negoci, no per a SEO. Si alguna cosa no s'entén, és que l'he explicada malament.",
  ],
]

const FAQS: [string, React.ReactNode][] = [
  [
    "Quant costa un consultor SEO al Maresme?",
    <>Depèn del negoci i del punt de partida. Una <Box component={Link} href="/servicios/auditoria-seo-geo" sx={linkSx}>auditoria completa</Box> comença en 500 €, preu tancat que saps abans de començar. L&apos;acompanyament continu s&apos;ajusta a l&apos;abast del teu cas, i la xifra exacta surt del diagnòstic gratuït, sense sorpreses per correu.</>,
  ],
  [
    "Treballes només amb botigues en línia?",
    "No. També treballo amb negoci local: comerços, serveis i professionals de la comarca. L'ecommerce és la meva especialitat, però el SEO local d'un negoci de Mataró o de Premià el faig igual de a fons.",
  ],
  [
    "En quant de temps es veuen resultats?",
    "En mesos, no en setmanes. El SEO no és un anunci que encens i apagues: els primers moviments es noten cap al segon o tercer mes i el que és sòlid arriba cap als sis, segons la competència del teu sector i d'on parteixis. Qui et prometi la primera posició en dues setmanes t'està mentint.",
  ],
  [
    "Ens podem veure en persona?",
    "Sí. Soc a Premià de Mar i em moc per la comarca, així que per al que és important ens veiem. I si ho prefereixes, tot per videotrucada, que el SEO no necessita cotxe.",
  ],
]

function Star() {
  return (
    <Box component="svg" viewBox="0 0 12 12" sx={{ width: 11, height: 11, flexShrink: 0 }} aria-hidden>
      <path d="M6 1 L7.4 4.4 L11 4.7 L8.2 7.1 L9.1 10.6 L6 8.7 L2.9 10.6 L3.8 7.1 L1 4.7 L4.6 4.4 Z" fill={tokens.petrol} />
    </Box>
  )
}

// Mock del pack local de Google: tu negocio el primero cuando te buscan cerca.
// Mismo lenguaje que el resto de artefactos del sitio (chat del agente, tienda).
function LocalPack() {
  const reduce = useReducedMotion()
  return (
    <ArtifactWindow tag="google · resultats locals" ratio="4 / 3">
      <Box sx={{ height: "100%", display: "flex", flexDirection: "column", gap: 1.25 }}>
        {/* barra de búsqueda */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1, border: `1px solid ${tokens.line}`, borderRadius: 999, bgcolor: tokens.win, px: 1.5, py: 0.9 }}>
          <Box component="svg" viewBox="0 0 24 24" sx={{ width: 14, height: 14, flexShrink: 0 }} fill="none" stroke={tokens.muted} strokeWidth={2} strokeLinecap="round" aria-hidden>
            <circle cx="10.5" cy="10.5" r="6.5" /><path d="M20 20l-4.5-4.5" />
          </Box>
          <Typography sx={{ fontSize: 13, color: tokens.body }}>reformes al Maresme</Typography>
        </Box>
        {/* pack de 3 resultados; el primero, tu negocio */}
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
                  {r.rating && <Star />}
                  <Typography sx={{ fontFamily: fonts.mono, fontSize: 10.5, color: tokens.muted, whiteSpace: "nowrap" }}>{r.rating ? `${r.rating} · ${r.meta}` : r.meta}</Typography>
                </Stack>
              </Box>
              {r.top && (
                <Box sx={{ flexShrink: 0, bgcolor: `${tokens.petrol}14`, border: `1px solid ${tokens.petrol}33`, borderRadius: 999, px: 1, py: 0.3 }}>
                  <Typography sx={{ fontFamily: fonts.mono, fontSize: 9.5, fontWeight: 700, color: tokens.petrol }}>al mapa</Typography>
                </Box>
              )}
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
        <Crumbs items={[{ label: "SEO local a Catalunya", href: "/seo-catalunya" }, { label: "Maresme" }]} />
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1.08fr 0.92fr" }, gap: { xs: 5, md: 8 }, alignItems: "center", mt: { xs: 2, md: 3 } }}>
          <HeroReveal>
            <Box>
              <Typography variant="h1" sx={{ fontSize: { xs: 34, sm: 46, md: 56 }, letterSpacing: "-0.025em", color: tokens.ink, mb: 3 }}>
                Consultor SEO al <Box component="em" sx={{ fontStyle: "italic", color: tokens.petrol }}>Maresme</Box>.
              </Typography>
              <Typography variant="body1" sx={{ fontSize: { xs: 16, md: 18 }, color: tokens.body, maxWidth: 520, mb: 3.5 }}>
                Soc l&apos;Òscar, consultor SEO independent. Visc i treballo al Maresme. Ajudo negocis i botigues en línia de la comarca a sortir a Google i a vendre més. Sense intermediaris: parles amb mi i la feina la faig jo.
              </Typography>
              <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ alignItems: { sm: "center" }, flexWrap: "wrap", rowGap: 1 }}>
                <Button component={Link} href="/diagnostico" variant="contained" color="primary" sx={{ borderRadius: 2, width: { xs: "100%", sm: "auto" } }}>
                  Reserva el teu diagnòstic <Box component="span" sx={{ ml: 0.75 }}>→</Box>
                </Button>
                <Typography variant="body2" sx={{ color: tokens.muted }}>Gratuït, i et dic què faria amb el teu web.</Typography>
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

// Sección editorial de filas con hairline: NO tres tarjetas iguales.
function Hago() {
  return (
    <Box component="section" sx={{ py: { xs: 8, md: 12 }, borderBottom: `1px solid ${tokens.lineSoft}` }}>
      <Container sx={{ maxWidth: 860 }}>
        <Reveal>
          <Typography variant="h2" sx={{ fontSize: { xs: 28, md: 40 }, color: tokens.ink, mb: 2, maxWidth: 620 }}>
            Què faig pels negocis del Maresme.
          </Typography>
          <Typography variant="body1" sx={{ fontSize: { xs: 16, md: 18 }, color: tokens.body, mb: { xs: 4, md: 6 }, maxWidth: 620 }}>
            Tres fronts, un objectiu: que et trobin i que et contractin. Sense paquets tancats, començo pel que més mou l&apos;agulla al teu negoci.
          </Typography>
        </Reveal>
        <Stack>
          {HAGO.map(([t, d], i) => (
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

// Índice numerado grande: familia de layout distinta a la anterior.
function Trabajo() {
  return (
    <Box component="section" sx={{ py: { xs: 8, md: 12 }, borderBottom: `1px solid ${tokens.lineSoft}` }}>
      <Container>
        <Reveal>
          <Typography variant="h2" sx={{ fontSize: { xs: 28, md: 40 }, color: tokens.ink, mb: 2, maxWidth: 620 }}>
            Com treballo.
          </Typography>
          <Typography variant="body1" sx={{ fontSize: { xs: 16, md: 18 }, color: tokens.body, mb: { xs: 5, md: 7 }, maxWidth: 620 }}>
            Res de fum ni d&apos;informes que acaben en un calaix. Així és treballar amb mi, de principi a fi.
          </Typography>
        </Reveal>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr 1fr" }, gap: { xs: 4, md: 5 } }}>
          {TRABAJO.map(([t, d], i) => (
            <Reveal key={t} delay={i * 0.07}>
              <Box>
                <Typography aria-hidden sx={{ fontFamily: fonts.serif, fontStyle: "italic", fontSize: { xs: 34, md: 44 }, lineHeight: 1, color: tokens.petrol, opacity: 0.85, mb: 1.5 }}>{`0${i + 1}`}</Typography>
                <Typography component="h3" sx={{ fontFamily: fonts.serif, fontSize: { xs: 20, md: 22 }, fontWeight: 600, color: tokens.ink, mb: 1 }}>{t}</Typography>
                <Typography variant="body1" sx={{ color: tokens.body, maxWidth: 420 }}>{d}</Typography>
              </Box>
            </Reveal>
          ))}
        </Box>
      </Container>
    </Box>
  )
}

// Un dato por municipio, comprobado en Idescat (El municipio en cifras).
// Página publicada: solo cifras verificadas en la fuente. Sin dato, sin bloque.
const emex = (id: string) => `https://www.idescat.cat/emex/?id=${id}&lang=ca`

const MUNICIPIOS: { name: string; id: string; dato: string; text: string }[] = [
  { name: "Vilassar de Mar", id: "082191", dato: "21.234 habitants (2025)", text: "Amb més de vint mil veïns, gairebé en qualsevol sector competeixes amb diversos negocis al mapa: guanya qui té la fitxa de Google més completa i les ressenyes més ben treballades." },
  { name: "Vilassar de Dalt", id: "082140", dato: "9.433 habitants (2025)", text: "En un poble d'aquesta mida et coneixen pel boca-orella, però qui hi arriba de nou et busca a Google. La teva fitxa ha d'estar a l'altura de la teva reputació." },
  { name: "El Masnou", id: "081189", dato: "7.294,1 habitants per km² (2025)", text: "Amb tanta densitat, les cerques són de proximitat pura: el que compta és sortir quan algú busca a pocs carrers del teu negoci." },
  { name: "Alella", id: "080039", dato: "10.251 habitants (2025)", text: "Qui ja et coneix et troba pel nom. El repte és que et trobi qui no et coneix i busca pel que fas." },
  { name: "Teià", id: "082819", dato: "6.894 habitants (2025)", text: "Amb un mercat local petit, el web t'ha d'ajudar a captar clients dels municipis veïns, no només del teu." },
  { name: "Montgat", id: "081265", dato: "2,91 km² de terme municipal (2025)", text: "El terme més petit d'aquesta llista. Part dels teus clients et buscaran des dels municipis del costat, i el teu web hauria de respondre també a aquestes cerques." },
  { name: "Arenys de Mar", id: "080060", dato: "16.982 habitants (2025)", text: "Si el teu negoci fa anys que funciona pel boca-orella, el primer salt sol ser portar aquest prestigi a Google: ressenyes, fotos i un web que s'entengui al mòbil." },
  { name: "Canet de Mar", id: "080403", dato: "15.191 habitants (2025)", text: "El teu web ha de fer d'aparador: horaris, què ofereixes i un botó per trucar o reservar sense haver-lo de buscar." },
  { name: "Pineda de Mar", id: "081635", dato: "30.071 habitants (2025)", text: "El municipi més poblat d'aquesta llista. Amb tanta oferta a cada sector, posicionar-te per servei concret, i no només per “Pineda”, és el que et separa de la resta." },
  { name: "Calella", id: "080351", dato: "43 hotels amb 10.845 places (2025)", text: "Per a la restauració, l'oci i el comerç que viuen del turista, la clau és sortir quan algú busca des de l'hotel on menjar o què fer, també en diversos idiomes." },
  { name: "Malgrat de Mar", id: "081108", dato: "4.821 places de càmping (2025)", text: "Molts visitants arriben sense conèixer la zona i busquen al mòbil. Una fitxa de Google ben muntada és el que els porta fins a la teva porta." },
  { name: "Sant Andreu de Llavaneres", id: "081976", dato: "11.910 habitants (2025)", text: "Si ofereixes serveis professionals o per a la llar, el teu web ha de transmetre confiança abans de la primera trucada: casos, ressenyes i explicacions clares." },
  { name: "Argentona", id: "080095", dato: "25,40 km² de terme municipal (2025)", text: "El terme més extens d'aquesta llista. Si el teu negoci és fora del centre, el primer és que la teva ubicació al mapa sigui exacta i fàcil de trobar." },
  { name: "Cabrils", id: "080305", dato: "7.755 habitants (2025)", text: "Cada vegada més gent pregunta a ChatGPT o a Perplexity per un bon professional de la zona. Que et mencionin depèn del que es diu de tu al teu web i fora d'ell." },
  { name: "Premià de Dalt", id: "082303", dato: "10.601 habitants (2025)", text: "Moltes cerques es fan sense el nom del poble, del tipus “a prop meu”. És aquí on una fitxa de Google ben muntada marca la diferència." },
]

function Comarca() {
  return (
    <Box component="section" sx={{ py: { xs: 8, md: 12 }, borderBottom: `1px solid ${tokens.lineSoft}` }}>
      <Container>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1.05fr 0.95fr" }, gap: { xs: 4, md: 7 }, alignItems: "center", mb: { xs: 6, md: 8 } }}>
          <Reveal>
            <Box>
              <Typography variant="h2" sx={{ fontSize: { xs: 28, md: 40 }, color: tokens.ink, mb: 2.5, maxWidth: 560 }}>
                Treballo a tot el Maresme.
              </Typography>
              <Typography variant="body1" sx={{ fontSize: { xs: 16, md: 18 }, color: tokens.body, mb: 2.5, maxWidth: 520 }}>
                Viure aquí no és un detall de màrqueting: és saber com compra la gent de la comarca, què busca i qui ja coneix. Aquest avantatge es nota a cada projecte, tant si tens una botiga a peu de carrer a Mataró com si vens a tot Espanya des d&apos;un local a Vilassar.
              </Typography>
              <Typography variant="body1" sx={{ fontSize: { xs: 16, md: 18 }, color: tokens.body, maxWidth: 520 }}>
                Treballo amb negocis de <Box component={Link} href="/consultor-seo-mataro" sx={linkSx}>Mataró</Box> i de <Box component={Link} href="/consultor-seo-premia-de-mar" sx={linkSx}>Premià de Mar</Box>, on visc, i de la resta de la comarca. A sota, una dada de cada municipi amb la seva font oficial, i el que significa per al teu SEO.
              </Typography>
            </Box>
          </Reveal>
          <Reveal delay={0.1}>
            <Box sx={{ position: "relative", borderRadius: 3, overflow: "hidden", border: `1px solid ${tokens.line}`, aspectRatio: "4 / 3" }}>
              <Image src="/assets/gen/photo-maresme-negocio.png" alt="Propietari d'un petit negoci del Maresme a la porta de la seva botiga" fill sizes="(max-width: 900px) 100vw, 44vw" style={{ objectFit: "cover" }} />
            </Box>
          </Reveal>
        </Box>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "repeat(3, 1fr)" }, columnGap: { sm: 4, md: 5 }, rowGap: { xs: 4, md: 5 } }}>
          {MUNICIPIOS.map((m) => (
            <Box key={m.id} component="article" sx={{ borderTop: `2px solid ${tokens.line}`, pt: 2.5 }}>
              <Typography component="h3" sx={{ fontFamily: fonts.serif, fontSize: { xs: 20, md: 21 }, fontWeight: 600, color: tokens.ink, mb: 0.75 }}>{m.name}</Typography>
              <Typography sx={{ fontFamily: fonts.mono, fontSize: 12.5, color: tokens.petrol, mb: 1 }}>{m.dato}</Typography>
              <Typography variant="body2" sx={{ color: tokens.body, mb: 1 }}>{m.text}</Typography>
              <Typography variant="body2" sx={{ color: tokens.muted }}>
                Font:{" "}
                <Box component="a" href={emex(m.id)} target="_blank" rel="noopener noreferrer" sx={{ color: tokens.muted, textDecoration: "underline", textDecorationColor: tokens.line, "&:hover": { color: tokens.petrol } }}>
                  Idescat, El municipi en xifres
                </Box>
              </Typography>
            </Box>
          ))}
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

export default function MaresmeMuiCa() {
  return (
    <Box sx={{ bgcolor: tokens.paper, color: tokens.body, fontFamily: fonts.sans }}>
      <SiteHeader />
      <Hero />
      <Hago />
      <Trabajo />
      <StatementBand as="p" title="Quan algú de la teva zona busca el que vens, o surts tu o surt la teva competència." photo="/assets/gen/photo-maresme.png" />
      <FeaturedCases
        title="Casos reals de la comarca."
        sub="Projectes amb el que vaig fer i el seu resultat. Cadascun enllaça a la seva fitxa."
        slugs={["totfinestra", "marea-es"]}
      />
      <Comarca />
      <Faq />
      <DiagnosticoCTA />
      <SiteFooter />
    </Box>
  )
}
