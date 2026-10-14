"use client"

import Link from "@/components/LocaleLink"
import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import { tokens, fonts } from "@/lib/mui/theme"
import { SiteHeader, SiteFooter, DiagnosticoCTA, PrimaryCTA, Reveal, HeroReveal, Crumbs, Blueprint } from "@/components/mui/shared"
import { RankClimb } from "@/components/mui/growthArtifacts"

const linkSx = { color: tokens.ink, fontWeight: 600, textDecoration: "underline", textDecorationColor: tokens.line, "&:hover": { textDecorationColor: tokens.petrol } } as const

const emex = (id: string) => `https://www.idescat.cat/emex/?id=${id}&lang=ca`

// Un dato por municipio, comprobado en Idescat (El municipio en cifras).
// Si un municipio no tiene dato verificado, no lleva bloque: va a la lista simple.
type Muni = { name: string; id: string; dato: string; text: string; href?: string }

const MUNICIPIOS: Muni[] = [
  {
    name: "Granollers",
    id: "080961",
    dato: "65.123 habitants (2025)",
    text: "És el municipi més poblat d'aquesta llista, i això es nota a Google: gairebé per a qualsevol sector hi ha diversos negocis lluitant per les mateixes tres posicions del mapa.",
    href: "/consultor-seo-granollers",
  },
  {
    name: "Mollet del Vallès",
    id: "081249",
    dato: "52.759 habitants (2025)",
    text: "En una ciutat d'aquesta mida la teva fitxa de Google competeix amb negocis del mateix sector a pocs carrers. Categories ben triades, horaris al dia i ressenyes respostes són el que decanta la balança.",
  },
  {
    name: "Sant Celoni",
    id: "082021",
    dato: "65,23 km² de terme municipal (2025)",
    text: "És el terme més extens d'aquesta llista. Si dones servei a domicili, a Google li ha de quedar clar fins on arribes, no només on és el teu local.",
  },
  {
    name: "Cardedeu",
    id: "080462",
    dato: "19.050 habitants (2025)",
    text: "Qui busca un negoci aquí compara opcions al mòbil abans de trucar. El que veu en aquesta comparació (fotos, ressenyes, si contestes) decideix a qui truca.",
  },
  {
    name: "La Garriga",
    id: "080885",
    dato: "6 hotels amb 386 places (2025)",
    text: "Per a allotjaments, restaurants i comerç que viuen del visitant, la clau és sortir quan algú busca on dormir o on menjar a la zona, i que la teva fitxa convenci en cinc segons.",
  },
  {
    name: "Les Franqueses del Vallès",
    id: "080863",
    dato: "20.855 habitants (2025)",
    text: "Aquí treballo tant les cerques que inclouen el nom del municipi com les del tipus “a prop meu”, que són les que més s'escapen si la fitxa no està ben muntada.",
  },
  {
    name: "Canovelles",
    id: "080410",
    dato: "2.619,4 habitants per km² (2025)",
    text: "Molta gent en poc espai vol dir cerques de proximitat pura: el que compta és aparèixer quan algú busca a pocs minuts de la teva porta.",
  },
  {
    name: "Parets del Vallès",
    id: "081593",
    dato: "18.899 habitants (2025)",
    text: "El punt de partida sol ser el mateix: una fitxa de Google amb la categoria correcta, fotos reals i un web que respongui al que la gent pregunta abans de contractar-te.",
  },
  {
    name: "Montmeló",
    id: "081350",
    dato: "4 km² de terme municipal (2025)",
    text: "És el terme més petit d'aquesta llista. Part dels teus clients et buscaran des dels municipis veïns, i el teu web també hauria de respondre a aquestes cerques.",
  },
  {
    name: "Montornès del Vallès",
    id: "081363",
    dato: "17.062 habitants (2025)",
    text: "La meva proposta aquí: combinar SEO local amb contingut útil sobre el teu servei, per captar qui busca a prop i també qui encara està comparant opcions.",
  },
  {
    name: "La Roca del Vallès",
    id: "081810",
    dato: "298,7 habitants per km² (2025)",
    text: "Amb la població repartida en un terme ampli, moltes cerques no inclouen el nom del poble. La teva fitxa i el teu web han de deixar clar a quines zones dones servei.",
  },
  {
    name: "Llinars del Vallès",
    id: "081069",
    dato: "179 habitatges iniciats (2025)",
    text: "Si treballes en reformes, instal·lacions, mobiliari o immobiliària, cada habitatge nou és un client que buscarà a Google abans de demanar pressupost.",
  },
  {
    name: "Sant Fost de Campsentelles",
    id: "082093",
    dato: "10,4 % d'habitatges principals de lloguer (2021)",
    text: "Si ofereixes serveis per a la casa, com ara reformes, jardineria o instal·lacions, el teu web hauria de parlar a qui viu al seu propi habitatge i busca algú de confiança.",
  },
  {
    name: "Caldes de Montbui",
    id: "080333",
    dato: "4 hotels amb 350 places (2025)",
    text: "Quan algú planifica una escapada ho fa des del mòbil, i cada vegada més preguntant a ChatGPT. Treballo perquè el teu negoci surti a Google i també en aquestes respostes.",
  },
]

const HAGO: [string, React.ReactNode][] = [
  ["Google i el mapa", "Fitxa de Google Business optimitzada, ressenyes treballades i un web que posiciona per al que la gent busca al teu municipi, no només pel teu nom."],
  ["ChatGPT i les respostes d'IA", <>Cada vegada més gent pregunta a ChatGPT o a Perplexity qui contractar. Treballo perquè també hi aparegui el teu negoci: és el que anomeno <Box component={Link} href="/blog/que-es-geo" sx={linkSx}>GEO</Box>.</>],
  ["Botigues en línia", <>Si a més vens en línia, és la meva especialitat: <Box component={Link} href="/agencia-woocommerce" sx={linkSx}>WooCommerce</Box> i <Box component={Link} href="/agencia-shopify" sx={linkSx}>Shopify</Box>, amb fitxes i categories que posicionen i venen.</>],
]

function Hero() {
  return (
    <Box component="section" sx={{ position: "relative", overflow: "hidden", borderBottom: `1px solid ${tokens.lineSoft}` }}>
      <Blueprint />
      <Container sx={{ position: "relative", zIndex: 1, pt: { xs: 5, md: 6 }, pb: { xs: 8, md: 11 } }}>
        <Crumbs items={[{ label: "SEO a Catalunya", href: "/seo-catalunya" }, { label: "SEO al Vallès Oriental" }]} />
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1.08fr 0.92fr" }, gap: { xs: 5, md: 8 }, alignItems: "center", mt: { xs: 2, md: 3 } }}>
          <HeroReveal>
            <Box>
              <Typography variant="h1" sx={{ fontSize: { xs: 34, sm: 46, md: 56 }, letterSpacing: "-0.025em", color: tokens.ink, mb: 3 }}>
                Consultor SEO al <Box component="em" sx={{ fontStyle: "italic", color: tokens.petrol }}>Vallès Oriental</Box>
              </Typography>
              <Typography variant="body1" sx={{ fontSize: { xs: 16, md: 18 }, color: tokens.body, maxWidth: 540, mb: 3.5 }}>
                Soc l&apos;Òscar, consultor SEO independent. Ajudo negocis i botigues en línia de Granollers, Mollet, Sant Celoni, Cardedeu i la resta de la comarca a sortir a Google, al mapa i a les respostes de ChatGPT. Sense intermediaris: parles amb mi i la feina la faig jo.
              </Typography>
              <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ alignItems: { sm: "center" }, flexWrap: "wrap", rowGap: 1 }}>
                <PrimaryCTA />
                <Typography variant="body2" sx={{ color: tokens.muted }}>Gratuït, i en 24-48 h et dic què faria amb el teu web.</Typography>
              </Stack>
            </Box>
          </HeroReveal>
          <Reveal delay={0.1}>
            <RankClimb />
          </Reveal>
        </Box>
      </Container>
    </Box>
  )
}

function Hago() {
  return (
    <Box component="section" sx={{ py: { xs: 8, md: 12 }, borderBottom: `1px solid ${tokens.lineSoft}` }}>
      <Container sx={{ maxWidth: 860 }}>
        <Reveal>
          <Typography variant="h2" sx={{ fontSize: { xs: 28, md: 40 }, color: tokens.ink, mb: 2, maxWidth: 620 }}>
            Què faig pels negocis del Vallès Oriental.
          </Typography>
          <Typography variant="body1" sx={{ fontSize: { xs: 16, md: 18 }, color: tokens.body, mb: { xs: 4, md: 6 }, maxWidth: 620 }}>
            Començo pel que més mou l&apos;agulla al teu negoci, sense paquets tancats. Com ho faig, pas a pas, ho tens al <Box component={Link} href="/metodo" sx={linkSx}>meu mètode de treball</Box>.
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

function Municipios() {
  return (
    <Box component="section" sx={{ py: { xs: 8, md: 12 }, borderBottom: `1px solid ${tokens.lineSoft}` }}>
      <Container>
        <Reveal>
          <Typography variant="h2" sx={{ fontSize: { xs: 28, md: 40 }, color: tokens.ink, mb: 2, maxWidth: 680 }}>
            SEO a cada municipi de la comarca.
          </Typography>
          <Typography variant="body1" sx={{ fontSize: { xs: 16, md: 18 }, color: tokens.body, mb: { xs: 5, md: 7 }, maxWidth: 640 }}>
            Cada municipi té la seva mida, la seva competència i la seva manera de buscar. Una dada de cadascun, amb la seva font oficial, i el que això significa per al teu SEO.
          </Typography>
        </Reveal>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, columnGap: { md: 6 }, rowGap: { xs: 4, md: 5 } }}>
          {MUNICIPIOS.map((m, i) => (
            <Reveal key={m.id} delay={(i % 2) * 0.05}>
              <Box component="article" sx={{ borderTop: `2px solid ${tokens.line}`, pt: 2.5 }}>
                <Typography component="h3" sx={{ fontFamily: fonts.serif, fontSize: { xs: 21, md: 23 }, fontWeight: 600, color: tokens.ink, mb: 1 }}>{m.name}</Typography>
                <Typography sx={{ fontFamily: fonts.mono, fontSize: 13, color: tokens.petrol, mb: 1.25 }}>{m.dato}</Typography>
                <Typography variant="body1" sx={{ color: tokens.body, mb: 1.25, maxWidth: 520 }}>{m.text}</Typography>
                <Stack direction="row" spacing={2} sx={{ flexWrap: "wrap", rowGap: 0.5, alignItems: "baseline" }}>
                  <Typography variant="body2" sx={{ color: tokens.muted }}>
                    Font:{" "}
                    <Box component="a" href={emex(m.id)} target="_blank" rel="noopener noreferrer" sx={{ color: tokens.muted, textDecoration: "underline", textDecorationColor: tokens.line, "&:hover": { color: tokens.petrol } }}>
                      Idescat, El municipi en xifres
                    </Box>
                  </Typography>
                  {m.href && (
                    <Typography variant="body2">
                      <Box component={Link} href={m.href} sx={linkSx}>SEO a {m.name} →</Box>
                    </Typography>
                  )}
                </Stack>
              </Box>
            </Reveal>
          ))}
        </Box>
      </Container>
    </Box>
  )
}

export default function VallesMuiCa() {
  return (
    <Box sx={{ bgcolor: tokens.paper, color: tokens.body, fontFamily: fonts.sans }}>
      <SiteHeader />
      <Hero />
      <Hago />
      <Municipios />
      <DiagnosticoCTA />
      <SiteFooter />
    </Box>
  )
}
