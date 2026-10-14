"use client"

import Link from "next/link"
import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import { tokens, fonts } from "@/lib/mui/theme"
import { SiteHeader, SiteFooter, DiagnosticoCTA, PrimaryCTA, Reveal, HeroReveal, Crumbs, Blueprint } from "@/components/mui/shared"
import { RankClimb } from "@/components/mui/growthArtifacts"

const linkSx = { color: tokens.ink, fontWeight: 600, textDecoration: "underline", textDecorationColor: tokens.line, "&:hover": { textDecorationColor: tokens.petrol } } as const

const emex = (id: string) => `https://www.idescat.cat/emex/?id=${id}`

// Un dato por municipio, comprobado en Idescat (El municipio en cifras).
// Si un municipio no tiene dato verificado, no lleva bloque: va a la lista simple.
type Muni = { name: string; id: string; dato: string; text: string; href?: string }

const MUNICIPIOS: Muni[] = [
  {
    name: "Granollers",
    id: "080961",
    dato: "65.123 habitantes (2025)",
    text: "Es el municipio más poblado de esta lista, y eso se nota en Google: para casi cualquier sector hay varios negocios peleando por las mismas tres posiciones del mapa.",
    href: "/consultor-seo-granollers",
  },
  {
    name: "Mollet del Vallès",
    id: "081249",
    dato: "52.759 habitantes (2025)",
    text: "En una ciudad de este tamaño tu ficha de Google compite con negocios del mismo sector a pocas calles. Categorías bien elegidas, horarios al día y reseñas respondidas son lo que inclina la balanza.",
  },
  {
    name: "Sant Celoni",
    id: "082021",
    dato: "65,23 km² de término municipal (2025)",
    text: "Es el término más extenso de esta lista. Si das servicio a domicilio, a Google le tiene que quedar claro hasta dónde llegas, no solo dónde está tu local.",
  },
  {
    name: "Cardedeu",
    id: "080462",
    dato: "19.050 habitantes (2025)",
    text: "Quien busca un negocio aquí compara opciones en el móvil antes de llamar. Lo que ve en esa comparación (fotos, reseñas, si contestas) decide a quién llama.",
  },
  {
    name: "La Garriga",
    id: "080885",
    dato: "6 hoteles con 386 plazas (2025)",
    text: "Para alojamientos, restaurantes y comercio que vive del visitante, la clave es salir cuando alguien busca dónde dormir o dónde comer en la zona, y que tu ficha convenza en cinco segundos.",
  },
  {
    name: "Les Franqueses del Vallès",
    id: "080863",
    dato: "20.855 habitantes (2025)",
    text: "Aquí trabajo tanto las búsquedas que incluyen el nombre del municipio como las de tipo “cerca de mí”, que son las que más se escapan si la ficha no está bien montada.",
  },
  {
    name: "Canovelles",
    id: "080410",
    dato: "2.619,4 habitantes por km² (2025)",
    text: "Mucha gente en poco espacio significa búsquedas de proximidad pura: lo que cuenta es aparecer cuando alguien busca a pocos minutos de tu puerta.",
  },
  {
    name: "Parets del Vallès",
    id: "081593",
    dato: "18.899 habitantes (2025)",
    text: "El punto de partida suele ser el mismo: una ficha de Google con la categoría correcta, fotos reales y una web que responda a lo que la gente pregunta antes de contratarte.",
  },
  {
    name: "Montmeló",
    id: "081350",
    dato: "4 km² de término municipal (2025)",
    text: "Es el término más pequeño de esta lista. Parte de tus clientes te buscarán desde los municipios de al lado, y tu web debería responder también a esas búsquedas.",
  },
  {
    name: "Montornès del Vallès",
    id: "081363",
    dato: "17.062 habitantes (2025)",
    text: "Mi propuesta aquí: combinar SEO local con contenido útil sobre tu servicio, para captar a quien busca cerca y también a quien todavía está comparando opciones.",
  },
  {
    name: "La Roca del Vallès",
    id: "081810",
    dato: "298,7 habitantes por km² (2025)",
    text: "Con la población repartida en un término amplio, muchas búsquedas no incluyen el nombre del pueblo. Tu ficha y tu web tienen que dejar claro a qué zonas das servicio.",
  },
  {
    name: "Llinars del Vallès",
    id: "081069",
    dato: "179 viviendas iniciadas (2025)",
    text: "Si trabajas en reformas, instalaciones, mobiliario o inmobiliaria, cada vivienda nueva es un cliente que buscará en Google antes de pedir presupuesto.",
  },
  {
    name: "Sant Fost de Campsentelles",
    id: "082093",
    dato: "10,4 % de viviendas principales en alquiler (2021)",
    text: "Si ofreces servicios para la casa, como reformas, jardinería o instalaciones, tu web debería hablarle a quien vive en su propia vivienda y busca a alguien de confianza.",
  },
  {
    name: "Caldes de Montbui",
    id: "080333",
    dato: "4 hoteles con 350 plazas (2025)",
    text: "Cuando alguien planifica una escapada lo hace desde el móvil, y cada vez más preguntando a ChatGPT. Trabajo para que tu negocio salga en Google y también en esas respuestas.",
  },
]

const HAGO: [string, React.ReactNode][] = [
  ["Google y el mapa", "Ficha de Google Business optimizada, reseñas trabajadas y una web que posiciona para lo que la gente busca en tu municipio, no solo para tu nombre."],
  ["ChatGPT y las respuestas de IA", <>Cada vez más gente pregunta a ChatGPT o Perplexity a quién contratar. Trabajo para que ahí también aparezcas tú: es lo que llamo <Box component={Link} href="/blog/que-es-geo" sx={linkSx}>GEO</Box>.</>],
  ["Tiendas online", <>Si además vendes online, es mi especialidad: <Box component={Link} href="/agencia-woocommerce" sx={linkSx}>WooCommerce</Box> y <Box component={Link} href="/agencia-shopify" sx={linkSx}>Shopify</Box>, con fichas y categorías que posicionan y venden.</>],
]

function Hero() {
  return (
    <Box component="section" sx={{ position: "relative", overflow: "hidden", borderBottom: `1px solid ${tokens.lineSoft}` }}>
      <Blueprint />
      <Container sx={{ position: "relative", zIndex: 1, pt: { xs: 5, md: 6 }, pb: { xs: 8, md: 11 } }}>
        <Crumbs items={[{ label: "SEO en Catalunya", href: "/seo-catalunya" }, { label: "SEO en el Vallès Oriental" }]} />
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1.08fr 0.92fr" }, gap: { xs: 5, md: 8 }, alignItems: "center", mt: { xs: 2, md: 3 } }}>
          <HeroReveal>
            <Box>
              <Typography variant="h1" sx={{ fontSize: { xs: 34, sm: 46, md: 56 }, letterSpacing: "-0.025em", color: tokens.ink, mb: 3 }}>
                Consultor SEO en el <Box component="em" sx={{ fontStyle: "italic", color: tokens.petrol }}>Vallès Oriental</Box>
              </Typography>
              <Typography variant="body1" sx={{ fontSize: { xs: 16, md: 18 }, color: tokens.body, maxWidth: 540, mb: 3.5 }}>
                Soy Óscar, consultor SEO independiente. Ayudo a negocios y tiendas online de Granollers, Mollet, Sant Celoni, Cardedeu y el resto de la comarca a salir en Google, en el mapa y en las respuestas de ChatGPT. Sin intermediarios: hablas conmigo y el trabajo lo hago yo.
              </Typography>
              <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ alignItems: { sm: "center" }, flexWrap: "wrap", rowGap: 1 }}>
                <PrimaryCTA />
                <Typography variant="body2" sx={{ color: tokens.muted }}>Gratis, y en 24-48 h te digo qué haría con tu web.</Typography>
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
            Qué hago por los negocios del Vallès Oriental.
          </Typography>
          <Typography variant="body1" sx={{ fontSize: { xs: 16, md: 18 }, color: tokens.body, mb: { xs: 4, md: 6 }, maxWidth: 620 }}>
            Empiezo por lo que más mueve la aguja en tu negocio, sin paquetes cerrados. Cómo lo hago, paso a paso, lo tienes en <Box component={Link} href="/metodo" sx={linkSx}>mi método de trabajo</Box>.
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
            SEO en cada municipio de la comarca.
          </Typography>
          <Typography variant="body1" sx={{ fontSize: { xs: 16, md: 18 }, color: tokens.body, mb: { xs: 5, md: 7 }, maxWidth: 640 }}>
            Cada municipio tiene su tamaño, su competencia y su forma de buscar. Un dato de cada uno, con su fuente oficial, y lo que eso significa para tu SEO.
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
                    Fuente:{" "}
                    <Box component="a" href={emex(m.id)} target="_blank" rel="noopener noreferrer" sx={{ color: tokens.muted, textDecoration: "underline", textDecorationColor: tokens.line, "&:hover": { color: tokens.petrol } }}>
                      Idescat, El municipio en cifras
                    </Box>
                  </Typography>
                  {m.href && (
                    <Typography variant="body2">
                      <Box component={Link} href={m.href} sx={linkSx}>SEO en {m.name} →</Box>
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

export default function VallesMui() {
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
