"use client"

import Link from "next/link"
import Image from "next/image"
import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import { tokens, fonts } from "@/lib/mui/theme"
import { SiteHeader, SiteFooter, DiagnosticoCTA, Blueprint, Reveal, Crumbs } from "@/components/mui/shared"
import type { BlogPost, BlogCategory } from "@/lib/blog"

function fmtDate(iso: string) {
  return new Date(iso).toLocaleDateString("es-ES", { day: "numeric", month: "short", year: "numeric" })
}

// Portada: imagen real cuando el post la tiene (con zoom suave al hover), y un
// fallback sobrio de marca (lienzo blueprint + etiqueta de categoría) cuando no,
// en vez de una letra suelta. Sin imágenes autogeneradas.
function Cover({ post, catName, ratio = "16 / 10" }: { post: BlogPost; catName?: string; ratio?: string }) {
  return (
    <Box sx={{ position: "relative", aspectRatio: ratio, overflow: "hidden", bgcolor: tokens.surface }}>
      {post.cover ? (
        <Box className="cover-img" sx={{ position: "absolute", inset: 0, transition: "transform .6s cubic-bezier(.22,1,.36,1)" }}>
          <Image src={post.cover} alt="" fill sizes="(max-width: 900px) 100vw, 33vw" style={{ objectFit: "cover" }} />
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

/* ---------- first view: masthead editorial + destacado ---------- */

function Masthead({ count, categories, activeName }: { count: number; categories: BlogCategory[]; activeName?: string }) {
  return (
    <Box component="section" sx={{ position: "relative", overflow: "hidden", borderBottom: `1px solid ${tokens.lineSoft}` }}>
      <Blueprint />
      <Container sx={{ position: "relative", zIndex: 1, pt: { xs: 5, md: 8 }, pb: { xs: 4, md: 6 } }}>
        <Reveal>
          <Typography sx={{ fontFamily: fonts.mono, fontSize: 12, color: tokens.muted, mb: { xs: 2, md: 2.5 } }}>
            {count} {count === 1 ? "artículo" : "artículos"}
          </Typography>
          <Typography variant="h1" sx={{ fontSize: { xs: 38, sm: 52, md: 66 }, letterSpacing: "-0.025em", lineHeight: 1.05, color: tokens.ink, maxWidth: 920, mb: 3 }}>
            Lo que aprendo construyendo, contado sin humo.
          </Typography>
          <Typography variant="body1" sx={{ fontSize: { xs: 16, md: 18 }, color: tokens.body, maxWidth: 560 }}>
            n8n en producción, RAG que no alucina, SEO que vende. Análisis desde proyectos reales, no refritos.
          </Typography>
        </Reveal>
        <Reveal delay={0.08}>
          <Stack direction="row" sx={{ flexWrap: "wrap", gap: { xs: 2, md: 3 }, mt: { xs: 4, md: 5 }, pt: { xs: 3, md: 3.5 }, borderTop: `1px solid ${tokens.line}` }}>
            <CatLink href="/blog" label="Todos" active={!activeName} />
            {categories.map((c) => <CatLink key={c.slug} href={`/blog/categoria/${c.slug}`} label={c.name} active={activeName === c.name} />)}
          </Stack>
        </Reveal>
      </Container>
    </Box>
  )
}

// Enlace de categoría editorial: texto con subrayado petróleo al hover/activo, no una pastilla.
function CatLink({ href, label, active }: { href: string; label: string; active?: boolean }) {
  return (
    <Box component={Link} href={href} sx={{ textDecoration: "none", position: "relative", pb: 0.5 }}>
      <Typography sx={{ fontSize: 14, fontWeight: 600, color: active ? tokens.ink : tokens.muted, transition: "color .2s", "&:hover": { color: tokens.ink } }}>{label}</Typography>
      <Box sx={{ position: "absolute", left: 0, bottom: 0, height: 2, borderRadius: 999, bgcolor: tokens.petrol, width: active ? "100%" : 0, transition: "width .25s" }} />
    </Box>
  )
}

function Destacado({ post, catName }: { post: BlogPost; catName?: string }) {
  return (
    <Box component="section" sx={{ py: { xs: 5, md: 8 }, borderBottom: `1px solid ${tokens.lineSoft}` }}>
      <Container>
        <Reveal>
          <Box component={Link} href={`/blog/${post.slug}`}
            sx={{
              display: "grid", gridTemplateColumns: { xs: "1fr", md: "1.05fr 0.95fr" }, gap: { xs: 3, md: 6 }, alignItems: "center", textDecoration: "none",
              "&:hover .cover-img": { transform: "scale(1.04)" },
              "&:hover .feat-title": { color: tokens.petrol },
              "&:hover .feat-arrow": { transform: "translate(3px,-3px)" },
            }}>
            <Box sx={{ borderRadius: 4, overflow: "hidden", border: `1px solid ${tokens.line}`, order: { xs: 1, md: 2 } }}>
              <Cover post={post} catName={catName} ratio="16 / 10" />
            </Box>
            <Box sx={{ order: { xs: 2, md: 1 } }}>
              <Stack direction="row" spacing={1.5} sx={{ alignItems: "center", mb: 2 }}>
                <Typography sx={{ fontFamily: fonts.mono, fontSize: 11, fontWeight: 700, color: tokens.petrol, border: `1px solid ${tokens.petrol}44`, borderRadius: 999, px: 1, py: 0.35 }}>destacado</Typography>
                <Meta post={post} catName={catName} />
              </Stack>
              <Typography className="feat-title" variant="h2" sx={{ fontSize: { xs: 28, md: 40 }, lineHeight: 1.1, color: tokens.ink, mb: 2, transition: "color .2s" }}>{post.title}</Typography>
              <Typography variant="body1" sx={{ fontSize: { xs: 16, md: 17 }, color: tokens.body, mb: 3, maxWidth: 520, display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical", overflow: "hidden" }}>{post.excerpt}</Typography>
              <Stack direction="row" spacing={0.75} sx={{ alignItems: "center", color: tokens.ink }}>
                <Typography sx={{ fontFamily: fonts.mono, fontSize: 13, fontWeight: 600 }}>Leer el artículo</Typography>
                <Box className="feat-arrow" component="span" sx={{ color: tokens.petrol, transition: "transform .2s" }}>↗</Box>
              </Stack>
            </Box>
          </Box>
        </Reveal>
      </Container>
    </Box>
  )
}

/* ---------- clusters: índice editorial numerado ---------- */

function Clusters({ categories, counts }: { categories: BlogCategory[]; counts: Record<string, number> }) {
  return (
    <Box component="section" sx={{ py: { xs: 7, md: 11 }, borderBottom: `1px solid ${tokens.lineSoft}` }}>
      <Container>
        <Reveal>
          <Box sx={{ display: "flex", flexWrap: "wrap", alignItems: "baseline", justifyContent: "space-between", gap: 2, mb: { xs: 4, md: 6 } }}>
            <Typography variant="h2" sx={{ fontSize: { xs: 26, md: 36 }, color: tokens.ink }}>Explora por tema.</Typography>
            <Typography sx={{ fontFamily: fonts.mono, fontSize: 12, color: tokens.muted }}>{categories.length} clusters</Typography>
          </Box>
        </Reveal>
        <Box sx={{ borderTop: `1px solid ${tokens.line}` }}>
          {categories.map((c, i) => (
            <Reveal key={c.slug} delay={(i % 2) * 0.05}>
              <Box component={Link} href={`/blog/categoria/${c.slug}`}
                sx={{
                  display: "grid", gridTemplateColumns: { xs: "auto 1fr auto", md: "56px 1.1fr 1.4fr auto" }, gap: { xs: 2, md: 3 }, alignItems: { xs: "center", md: "baseline" },
                  textDecoration: "none", py: { xs: 2.5, md: 3.25 }, borderBottom: `1px solid ${tokens.line}`, transition: "background-color .2s",
                  "&:hover": { bgcolor: tokens.surface },
                  "&:hover .cl-name": { color: tokens.petrol },
                  "&:hover .cl-arrow": { transform: "translate(3px,-3px)" },
                }}>
                <Typography sx={{ fontFamily: fonts.mono, fontSize: { xs: 13, md: 15 }, color: tokens.muted }}>{`0${i + 1}`}</Typography>
                <Typography className="cl-name" sx={{ fontFamily: fonts.serif, fontSize: { xs: 21, md: 26 }, fontWeight: 600, color: tokens.ink, transition: "color .2s" }}>{c.name}</Typography>
                <Typography variant="body2" sx={{ color: tokens.body, display: { xs: "none", md: "block" }, maxWidth: 460 }}>{c.description}</Typography>
                <Stack direction="row" spacing={1.25} sx={{ alignItems: "center", justifySelf: "end" }}>
                  <Typography sx={{ fontFamily: fonts.mono, fontSize: 12, color: tokens.muted }}>{counts[c.slug] ?? 0}</Typography>
                  <Box className="cl-arrow" component="span" sx={{ color: tokens.petrol, fontFamily: fonts.mono, fontSize: 14, transition: "transform .2s" }}>↗</Box>
                </Stack>
              </Box>
            </Reveal>
          ))}
        </Box>
      </Container>
    </Box>
  )
}

/* ---------- rejilla de artículos ---------- */

function PostCard({ post, catName, delay }: { post: BlogPost; catName?: string; delay: number }) {
  return (
    <Reveal delay={delay}>
      <Box component={Link} href={`/blog/${post.slug}`}
        sx={{
          display: "flex", flexDirection: "column", height: "100%", textDecoration: "none",
          "&:hover .cover-img": { transform: "scale(1.04)" },
          "&:hover .pc-title": { color: tokens.petrol },
        }}>
        <Box sx={{ borderRadius: 3, overflow: "hidden", border: `1px solid ${tokens.line}`, mb: 2 }}>
          <Cover post={post} catName={catName} />
        </Box>
        <Meta post={post} catName={catName} />
        <Typography className="pc-title" sx={{ fontFamily: fonts.serif, fontSize: 20, fontWeight: 600, lineHeight: 1.25, color: tokens.ink, mt: 1, mb: 1, transition: "color .2s" }}>{post.title}</Typography>
        <Typography variant="body2" sx={{ color: tokens.body, display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>{post.excerpt}</Typography>
      </Box>
    </Reveal>
  )
}

export default function BlogMui({ posts, categories, featuredSlug }: { posts: BlogPost[]; categories: BlogCategory[]; featuredSlug?: string }) {
  const catName = (slug: string) => categories.find((c) => c.slug === slug)?.shortName ?? categories.find((c) => c.slug === slug)?.name
  const featured = posts.find((p) => p.slug === featuredSlug) ?? posts[0]
  const rest = posts.filter((p) => p.slug !== featured?.slug)
  const counts = posts.reduce<Record<string, number>>((acc, p) => { acc[p.category] = (acc[p.category] ?? 0) + 1; return acc }, {})

  return (
    <Box sx={{ bgcolor: tokens.paper, color: tokens.body, fontFamily: fonts.sans }}>
      <SiteHeader />
      <Crumbs items={[{ label: "Blog" }]} />
      <Masthead count={posts.length} categories={categories} />
      {featured && <Destacado post={featured} catName={catName(featured.category)} />}
      <Clusters categories={categories} counts={counts} />
      <Box component="section" sx={{ py: { xs: 7, md: 11 }, borderBottom: `1px solid ${tokens.lineSoft}` }}>
        <Container>
          <Reveal>
            <Typography variant="h2" sx={{ fontSize: { xs: 24, md: 32 }, color: tokens.ink, mb: { xs: 4, md: 6 } }}>Últimos artículos.</Typography>
          </Reveal>
          {rest.length > 0 ? (
            <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "repeat(3, 1fr)" }, gap: { xs: 4, md: 5 } }}>
              {rest.map((p, i) => <PostCard key={p.slug} post={p} catName={catName(p.category)} delay={(i % 3) * 0.06} />)}
            </Box>
          ) : (
            <Typography sx={{ fontFamily: fonts.mono, fontSize: 12, color: tokens.muted, textAlign: "center", py: 4 }}>Más artículos en camino.</Typography>
          )}
        </Container>
      </Box>
      <DiagnosticoCTA />
      <SiteFooter />
    </Box>
  )
}
