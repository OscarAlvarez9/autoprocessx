"use client"

import Link from "next/link"
import Image from "next/image"
import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import Tabs from "@mui/material/Tabs"
import Tab from "@mui/material/Tab"
import { tokens, fonts } from "@/lib/mui/theme"
import { SiteHeader, SiteFooter, DiagnosticoCTA, Blueprint, Reveal, Crumbs } from "@/components/mui/shared"
import type { BlogPost, BlogCategory } from "@/lib/blog"

function fmtDate(iso: string) {
  return new Date(iso).toLocaleDateString("es-ES", { day: "numeric", month: "short", year: "numeric" })
}

function fmtDateLarga(iso: string) {
  return new Date(iso).toLocaleDateString("es-ES", { weekday: "long", day: "numeric", month: "long", year: "numeric" })
}

// Portada: imagen real cuando el post la tiene (con zoom suave al hover), y un
// fallback sobrio de marca (lienzo blueprint + etiqueta de categoría) cuando no,
// en vez de una letra suelta. Sin imágenes autogeneradas.
function Cover({ post, catName, ratio = "16 / 10", sizes = "(max-width: 900px) 100vw, 33vw" }: { post: BlogPost; catName?: string; ratio?: string; sizes?: string }) {
  return (
    <Box sx={{ position: "relative", aspectRatio: ratio, overflow: "hidden", bgcolor: tokens.surface }}>
      {post.cover ? (
        <Box className="cover-img" sx={{ position: "absolute", inset: 0, transition: "transform .6s cubic-bezier(.22,1,.36,1)" }}>
          <Image src={post.cover} alt="" fill sizes={sizes} style={{ objectFit: "cover" }} />
        </Box>
      ) : (
        <>
          <Blueprint />
          <Box sx={{ position: "absolute", inset: 0, p: 2.5, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <Typography sx={{ fontFamily: fonts.mono, fontSize: 11, color: tokens.petrol, fontWeight: 600 }}>{catName ?? "artículo"}</Typography>
            <Box sx={{ width: 26, height: 2, borderRadius: 999, bgcolor: `${tokens.petrol}55` }} />
          </Box>
        </>
      )}
    </Box>
  )
}

function Meta({ post, catName, showCat = true }: { post: BlogPost; catName?: string; showCat?: boolean }) {
  return (
    <Stack direction="row" spacing={1} sx={{ alignItems: "center", flexWrap: "wrap", rowGap: 0.5 }}>
      {showCat && catName && (
        <>
          <Typography sx={{ fontFamily: fonts.mono, fontSize: 11, color: tokens.petrol, fontWeight: 600 }}>{catName}</Typography>
          <Box sx={{ width: 3, height: 3, borderRadius: 999, bgcolor: tokens.line }} />
        </>
      )}
      <Typography sx={{ fontFamily: fonts.mono, fontSize: 11, color: tokens.muted }}>{fmtDate(post.date)} · {post.readingMinutes} min</Typography>
    </Stack>
  )
}

/* ---------------------------------------------------- cabecera de diario --- */

// Cabecera compacta, al modo de un diario: una sola línea de identidad con la
// fecha de la última edición y el número de piezas. Antes ocupaba una pantalla
// entera para decir lo mismo.
function Cabecera({ posts, activeName }: { posts: BlogPost[]; activeName?: string }) {
  const ultima = posts[0]?.date
  return (
    <Box component="section" sx={{ position: "relative", overflow: "hidden" }}>
      <Blueprint />
      <Container sx={{ position: "relative", zIndex: 1, pt: { xs: 4, md: 6 }, pb: { xs: 3, md: 4 } }}>
        <Reveal>
          <Box sx={{ borderTop: `2px solid ${tokens.ink}`, pt: { xs: 2, md: 2.5 } }}>
            <Typography sx={{ fontFamily: fonts.mono, fontSize: 11.5, color: tokens.muted, mb: 1.5 }}>
              {ultima ? fmtDateLarga(ultima) : ""} · {posts.length} {posts.length === 1 ? "artículo" : "artículos"}
            </Typography>
            <Typography
              component="h1"
              sx={{ fontFamily: fonts.serif, fontSize: { xs: 32, sm: 42, md: 52 }, fontWeight: 600, letterSpacing: "-0.02em", color: tokens.ink, lineHeight: 1.06, maxWidth: 780 }}
            >
              {activeName ?? "Lo que aprendo construyendo, contado sin humo."}
            </Typography>
          </Box>
        </Reveal>
      </Container>
    </Box>
  )
}

/* ------------------------------------------------------------- secciones --- */

// Las categorías, una sola vez y como control de verdad. Antes salían dos
// veces: como enlaces aquí arriba y otra vez como sección a pantalla completa.
// Son enlaces reales a /blog/categoria/... para no romper esas URLs.
function Secciones({ categories, counts, activeSlug }: { categories: BlogCategory[]; counts: Record<string, number>; activeSlug?: string }) {
  // Una categoría sin artículos no se enseña: antes "SEO y Ecommerce" ocupaba
  // una fila entera con un 0 al lado.
  const conPosts = categories.filter((c) => (counts[c.slug] ?? 0) > 0)
  const valor = activeSlug && conPosts.some((c) => c.slug === activeSlug) ? activeSlug : "todos"
  return (
    <Box
      component="nav"
      aria-label="Secciones del blog"
      sx={{
        position: "sticky",
        // El header flotante mide 54-58 px y va a 8-14 px del borde. Sin este
        // desplazamiento, las pestañas se quedaban escondidas detrás.
        top: { xs: 70, md: 80 },
        zIndex: 20,
        bgcolor: `${tokens.paper}f2`,
        backdropFilter: "blur(8px)",
        borderTop: `1px solid ${tokens.line}`,
        borderBottom: `1px solid ${tokens.line}`,
      }}
    >
      <Container>
        <Tabs
          value={valor}
          variant="scrollable"
          scrollButtons="auto"
          allowScrollButtonsMobile
          sx={{
            minHeight: 46,
            "& .MuiTabs-indicator": { backgroundColor: tokens.petrol, height: 2 },
            "& .MuiTab-root": {
              minHeight: 46,
              px: 0,
              mr: 3.5,
              minWidth: 0,
              fontFamily: fonts.mono,
              fontSize: 12.5,
              textTransform: "none",
              color: tokens.muted,
              "&.Mui-selected": { color: tokens.ink, fontWeight: 600 },
            },
          }}
        >
          <Tab value="todos" label="Todo" component={Link} href="/blog" />
          {conPosts.map((c) => (
            <Tab
              key={c.slug}
              value={c.slug}
              component={Link}
              href={`/blog/categoria/${c.slug}`}
              label={`${c.shortName ?? c.name} (${counts[c.slug]})`}
            />
          ))}
        </Tabs>
      </Container>
    </Box>
  )
}

/* ------------------------------------------------------------- portada ----- */

// Portada de diario: una pieza de apertura grande y dos de acompañamiento en
// columna. Da jerarquía de verdad en vez de veinte tarjetas iguales.
function Portada({ lead, laterales, catName }: { lead: BlogPost; laterales: BlogPost[]; catName: (s: string) => string | undefined }) {
  return (
    <Box component="section" sx={{ py: { xs: 4, md: 6 }, borderBottom: `1px solid ${tokens.line}` }}>
      <Container>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1.55fr 1fr" }, gap: { xs: 4, md: 6 } }}>
          <Reveal>
            <Box
              component={Link}
              href={`/blog/${lead.slug}`}
              sx={{ display: "block", textDecoration: "none", "&:hover .cover-img": { transform: "scale(1.03)" }, "&:hover .lead-title": { color: tokens.petrol } }}
            >
              <Box sx={{ borderRadius: 2, overflow: "hidden", mb: 2.5 }}>
                <Cover post={lead} catName={catName(lead.category)} ratio="16 / 9" sizes="(max-width: 900px) 100vw, 62vw" />
              </Box>
              <Meta post={lead} catName={catName(lead.category)} />
              <Typography
                className="lead-title"
                component="h2"
                sx={{ fontFamily: fonts.serif, fontSize: { xs: 27, md: 38 }, fontWeight: 600, lineHeight: 1.12, color: tokens.ink, mt: 1, mb: 1.25, transition: "color .2s" }}
              >
                {lead.title}
              </Typography>
              <Typography variant="body1" sx={{ color: tokens.body, maxWidth: 620 }}>{lead.excerpt}</Typography>
            </Box>
          </Reveal>

          <Stack divider={<Box sx={{ borderTop: `1px solid ${tokens.lineSoft}` }} />} spacing={0}>
            {laterales.map((p, i) => (
              <Reveal key={p.slug} delay={0.06 + i * 0.05}>
                <Box
                  component={Link}
                  href={`/blog/${p.slug}`}
                  sx={{
                    display: "grid",
                    gridTemplateColumns: "1fr 92px",
                    gap: 2,
                    alignItems: "start",
                    py: { xs: 2.5, md: 3 },
                    textDecoration: "none",
                    "&:first-of-type": { pt: 0 },
                    "&:hover .sec-title": { color: tokens.petrol },
                    "&:hover .cover-img": { transform: "scale(1.05)" },
                  }}
                >
                  <Box sx={{ minWidth: 0 }}>
                    <Meta post={p} catName={catName(p.category)} />
                    <Typography
                      className="sec-title"
                      component="h3"
                      sx={{ fontFamily: fonts.serif, fontSize: { xs: 18, md: 20 }, fontWeight: 600, lineHeight: 1.22, color: tokens.ink, mt: 0.75, transition: "color .2s" }}
                    >
                      {p.title}
                    </Typography>
                  </Box>
                  <Box sx={{ borderRadius: 1.5, overflow: "hidden", flexShrink: 0 }}>
                    <Cover post={p} catName={catName(p.category)} ratio="1 / 1" sizes="92px" />
                  </Box>
                </Box>
              </Reveal>
            ))}
          </Stack>
        </Box>
      </Container>
    </Box>
  )
}

/* --------------------------------------------------------------- índice ---- */

// El resto, como el índice de un diario: filas densas con filete. Aquí es donde
// se recupera el scroll que antes se iba en portadas gigantes y vacías.
function Indice({ posts, catName, titulo }: { posts: BlogPost[]; catName: (s: string) => string | undefined; titulo: string }) {
  if (posts.length === 0) {
    return (
      <Box component="section" sx={{ py: { xs: 6, md: 9 } }}>
        <Container>
          <Typography sx={{ fontFamily: fonts.mono, fontSize: 12, color: tokens.muted, textAlign: "center" }}>Más artículos en camino.</Typography>
        </Container>
      </Box>
    )
  }
  return (
    <Box component="section" sx={{ py: { xs: 5, md: 7 }, borderBottom: `1px solid ${tokens.lineSoft}` }}>
      <Container>
        <Reveal>
          <Typography
            component="h2"
            sx={{ fontFamily: fonts.mono, fontSize: 11.5, letterSpacing: "0.08em", color: tokens.muted, textTransform: "uppercase", pb: 1.5, borderBottom: `2px solid ${tokens.ink}`, mb: 0.5 }}
          >
            {titulo}
          </Typography>
        </Reveal>
        <Box>
          {posts.map((p, i) => (
            <Reveal key={p.slug} delay={Math.min(i, 5) * 0.03}>
              <Box
                component={Link}
                href={`/blog/${p.slug}`}
                sx={{
                  display: "grid",
                  gridTemplateColumns: { xs: "1fr", md: "104px 1fr 1.1fr" },
                  gap: { xs: 0.75, md: 3 },
                  alignItems: "baseline",
                  py: { xs: 2.5, md: 2.75 },
                  borderBottom: `1px solid ${tokens.lineSoft}`,
                  textDecoration: "none",
                  transition: "background-color .2s",
                  "&:hover": { bgcolor: tokens.surface },
                  "&:hover .idx-title": { color: tokens.petrol },
                }}
              >
                <Typography sx={{ fontFamily: fonts.mono, fontSize: 11, color: tokens.muted, whiteSpace: "nowrap" }}>
                  {fmtDate(p.date)}
                </Typography>
                <Box sx={{ minWidth: 0 }}>
                  <Typography
                    className="idx-title"
                    component="h3"
                    sx={{ fontFamily: fonts.serif, fontSize: { xs: 19, md: 21 }, fontWeight: 600, lineHeight: 1.22, color: tokens.ink, transition: "color .2s" }}
                  >
                    {p.title}
                  </Typography>
                  <Stack direction="row" spacing={1} sx={{ alignItems: "center", mt: 0.5 }}>
                    <Typography sx={{ fontFamily: fonts.mono, fontSize: 10.5, color: tokens.petrol, fontWeight: 600 }}>{catName(p.category)}</Typography>
                    <Box sx={{ width: 3, height: 3, borderRadius: 999, bgcolor: tokens.line }} />
                    <Typography sx={{ fontFamily: fonts.mono, fontSize: 10.5, color: tokens.muted }}>{p.readingMinutes} min</Typography>
                  </Stack>
                </Box>
                <Typography
                  variant="body2"
                  sx={{ color: tokens.body, display: { xs: "none", md: "-webkit-box" }, WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}
                >
                  {p.excerpt}
                </Typography>
              </Box>
            </Reveal>
          ))}
        </Box>
      </Container>
    </Box>
  )
}

export default function BlogMui({ posts, categories, featuredSlug, activeSlug }: { posts: BlogPost[]; categories: BlogCategory[]; featuredSlug?: string; activeSlug?: string }) {
  const catName = (slug: string) => categories.find((c) => c.slug === slug)?.shortName ?? categories.find((c) => c.slug === slug)?.name
  const activa = categories.find((c) => c.slug === activeSlug)
  const featured = posts.find((p) => p.slug === featuredSlug) ?? posts[0]
  const resto = posts.filter((p) => p.slug !== featured?.slug)
  const laterales = resto.slice(0, 3)
  const indice = resto.slice(3)
  const counts = posts.reduce<Record<string, number>>((acc, p) => { acc[p.category] = (acc[p.category] ?? 0) + 1; return acc }, {})

  return (
    <Box sx={{ bgcolor: tokens.paper, color: tokens.body, fontFamily: fonts.sans }}>
      <SiteHeader />
      <Crumbs items={activa ? [{ label: "Blog", href: "/blog" }, { label: activa.name }] : [{ label: "Blog" }]} />
      <Cabecera posts={posts} activeName={activa?.name} />
      <Secciones categories={categories} counts={counts} activeSlug={activeSlug} />
      {featured && <Portada lead={featured} laterales={laterales} catName={catName} />}
      <Indice posts={indice} catName={catName} titulo={indice.length > 0 ? "Todos los artículos" : ""} />
      <DiagnosticoCTA />
      <SiteFooter />
    </Box>
  )
}
