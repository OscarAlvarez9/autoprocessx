"use client"

import Link from "next/link"
import Image from "next/image"
import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import { tokens, fonts } from "@/lib/mui/theme"
import { SiteHeader, SiteFooter, DiagnosticoCTA, Blueprint, Reveal, ArtifactWindow, Crumbs } from "@/components/mui/shared"
import { CaseVisualBox } from "@/components/mui/CasosMui"
import StackChips from "@/components/mui/StackChips"
import type { Caso } from "@/lib/casesEcom"
import { getCasoDeep, type CasoDeep } from "@/lib/casesDeep"

/* ---------------------------------------------------------------- hero ---- */

// Marco de navegador para las capturas reales de la tienda del cliente. Es una
// captura de verdad, no un mockup dibujado: por eso lleva barra de URL.
function BrowserFrame({ src, alt, url, ratio = "16 / 10" }: { src: string; alt: string; url: string; ratio?: string }) {
  return (
    <Box sx={{ border: `1px solid ${tokens.line}`, borderRadius: 3, overflow: "hidden", bgcolor: tokens.win, boxShadow: "0 30px 60px -40px rgba(20,32,29,.45)" }}>
      <Stack direction="row" spacing={1} sx={{ alignItems: "center", px: 1.5, py: 1, borderBottom: `1px solid ${tokens.lineSoft}`, bgcolor: tokens.surface }}>
        <Stack direction="row" spacing={0.6}>
          {[0, 1, 2].map((d) => <Box key={d} sx={{ width: 8, height: 8, borderRadius: 999, bgcolor: "#D8DAD6" }} />)}
        </Stack>
        <Box sx={{ flex: 1, minWidth: 0, bgcolor: tokens.win, border: `1px solid ${tokens.lineSoft}`, borderRadius: 999, px: 1.25, py: 0.35 }}>
          <Typography sx={{ fontFamily: fonts.mono, fontSize: 10.5, color: tokens.muted, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{url}</Typography>
        </Box>
      </Stack>
      <Box sx={{ position: "relative", aspectRatio: ratio, bgcolor: tokens.surface }}>
        <Image src={src} alt={alt} fill sizes="(max-width: 900px) 100vw, 55vw" style={{ objectFit: "cover", objectPosition: "top center" }} />
      </Box>
    </Box>
  )
}

function Hero({ c, deep }: { c: Caso; deep?: CasoDeep }) {
  return (
    <Box component="section" sx={{ position: "relative", overflow: "hidden", borderBottom: `1px solid ${tokens.lineSoft}` }}>
      <Blueprint />
      <Container sx={{ position: "relative", zIndex: 1, py: { xs: 6, md: 10 } }}>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", lg: "0.85fr 1.15fr" }, gap: { xs: 5, lg: 8 }, alignItems: "center" }}>
          <Box>
            <Reveal>
              {deep?.logo && (
                <Box sx={{ mb: 3, display: "inline-flex", bgcolor: tokens.win, border: `1px solid ${tokens.lineSoft}`, borderRadius: 2, px: 2, py: 1.25 }}>
                  <Image src={deep.logo} alt={`Logotipo de ${c.client}`} width={150} height={40} style={{ height: 34, width: "auto", objectFit: "contain" }} />
                </Box>
              )}
              <Typography variant="h1" sx={{ fontSize: { xs: 34, sm: 44, lg: 52 }, lineHeight: 1.08, color: tokens.ink, mb: 2.5 }}>{c.client}</Typography>
              <Typography variant="body1" sx={{ fontSize: { xs: 16, md: 18 }, color: tokens.body, maxWidth: 520, mb: 3.5 }}>{c.summary}</Typography>
              <Stack direction="row" sx={{ flexWrap: "wrap", gap: 1 }}>
                {[c.sector.split("·")[0].trim(), c.platform].map((t) => (
                  <Box key={t} sx={{ border: `1px solid ${tokens.line}`, borderRadius: 999, px: 1.5, py: 0.45 }}>
                    <Typography sx={{ fontFamily: fonts.mono, fontSize: 11.5, color: tokens.petrol }}>{t}</Typography>
                  </Box>
                ))}
              </Stack>
            </Reveal>
          </Box>
          <Reveal delay={0.1}>
            {deep?.shot && deep.shotFrame === "plain" ? (
              <Box sx={{ border: `1px solid ${tokens.line}`, borderRadius: 3, overflow: "hidden", bgcolor: tokens.win, boxShadow: "0 30px 60px -40px rgba(20,32,29,.45)" }}>
                {deep.shotTag && (
                  <Stack direction="row" spacing={1} sx={{ alignItems: "center", px: 1.75, py: 1.1, borderBottom: `1px solid ${tokens.lineSoft}`, bgcolor: tokens.surface }}>
                    <Box sx={{ width: 7, height: 7, borderRadius: 999, bgcolor: tokens.green, flexShrink: 0 }} />
                    <Typography sx={{ fontFamily: fonts.mono, fontSize: 11, color: tokens.muted }}>{deep.shotTag}</Typography>
                  </Stack>
                )}
                <Box sx={{ p: { xs: 1, md: 1.5 } }}>
                  <Image src={deep.shot} alt={deep.shotCaption ?? c.client} width={2156} height={570} sizes="(max-width: 900px) 100vw, 55vw" style={{ width: "100%", height: "auto", display: "block" }} />
                </Box>
              </Box>
            ) : deep?.shot ? (
              <BrowserFrame src={deep.shot} alt={deep.shotCaption ?? `${c.client} en producción`} url={`https://${c.client.replace(/^www\./, "")}`} />
            ) : (
              <ArtifactWindow tag={`${c.client} · en producción`} ratio="4 / 3">
                <CaseVisualBox caso={c} />
              </ArtifactWindow>
            )}
          </Reveal>
        </Box>
      </Container>
    </Box>
  )
}

/* ----------------------------------------------------------- cifras ------- */

// Primera banda sobre pino: es lo que tiene que entrar por los ojos nada más
// pasar el hero. Las siguientes van sobre crema para no cansar.
function KpiBands({ deep }: { deep: CasoDeep }) {
  return (
    <>
      {deep.kpis.map((band, bi) => {
        const dark = bi === 0
        return (
          <Box
            key={band.title}
            component="section"
            sx={{
              py: { xs: 6, md: 9 },
              bgcolor: dark ? tokens.petrol : "transparent",
              borderBottom: `1px solid ${dark ? "transparent" : tokens.lineSoft}`,
            }}
          >
            <Container>
              <Reveal>
                <Typography
                  component="h2"
                  sx={{ fontFamily: fonts.serif, fontSize: { xs: 22, md: 28 }, fontWeight: 600, color: dark ? tokens.paper : tokens.ink, mb: 0.75 }}
                >
                  {band.title}
                </Typography>
                {band.note && (
                  <Typography sx={{ fontFamily: fonts.mono, fontSize: 11.5, color: dark ? tokens.onDarkMuted : tokens.muted, mb: { xs: 4, md: 5 } }}>
                    {band.note}
                  </Typography>
                )}
              </Reveal>
              <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr 1fr", md: `repeat(${Math.min(band.items.length, 4)}, 1fr)` }, gap: { xs: 3, md: 0 } }}>
                {band.items.map((k, i) => (
                  <Reveal key={k.label} delay={i * 0.06}>
                    <Box
                      sx={{
                        px: { md: 3 },
                        borderLeft: { xs: "none", md: i === 0 ? "none" : `1px solid ${dark ? "rgba(250,248,240,.18)" : tokens.lineSoft}` },
                      }}
                    >
                      <Typography sx={{ fontFamily: fonts.serif, fontSize: { xs: 38, md: 54 }, fontWeight: 600, lineHeight: 1, letterSpacing: "-0.02em", color: dark ? tokens.accentSoft : tokens.petrol }}>
                        {k.value}
                      </Typography>
                      <Typography sx={{ fontSize: { xs: 13.5, md: 15 }, fontWeight: 700, color: dark ? tokens.paper : tokens.ink, mt: 1.25 }}>{k.label}</Typography>
                      {k.note && (
                        <Typography sx={{ fontFamily: fonts.mono, fontSize: 11, color: dark ? tokens.onDarkMuted : tokens.muted, mt: 0.5 }}>{k.note}</Typography>
                      )}
                    </Box>
                  </Reveal>
                ))}
              </Box>
            </Container>
          </Box>
        )
      })}
    </>
  )
}

/* --------------------------------------------------------- evidencia ------ */

function Evidencia({ deep }: { deep: CasoDeep }) {
  if (!deep.evidencia?.length) return null
  return (
    <Box component="section" sx={{ py: { xs: 7, md: 11 }, borderBottom: `1px solid ${tokens.lineSoft}` }}>
      <Container>
        <Reveal>
          <Typography variant="h2" sx={{ fontSize: { xs: 24, md: 34 }, color: tokens.ink, mb: 1.5 }}>{deep.evidenciaTitulo ?? "La prueba"}</Typography>
          <Typography variant="body1" sx={{ color: tokens.body, maxWidth: 640, mb: { xs: 4, md: 6 } }}>
            {deep.evidenciaIntro ?? "Capturas directas de los paneles del cliente. Las cifras de arriba salen de aquí."}
          </Typography>
        </Reveal>
        <Stack spacing={{ xs: 4, md: 6 }}>
          {deep.evidencia.map((e, i) => (
            <Reveal key={e.src} delay={i * 0.06}>
              <Box>
                <Box
                  component="a"
                  href={e.src}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    display: "block",
                    border: `1px solid ${tokens.line}`,
                    borderRadius: 3,
                    overflow: "hidden",
                    bgcolor: tokens.win,
                    p: { xs: 1, md: 1.5 },
                    transition: "border-color .2s",
                    "&:hover": { borderColor: tokens.petrol },
                  }}
                >
                  <Image
                    src={e.src}
                    alt={e.alt}
                    width={e.w}
                    height={e.h}
                    sizes="(max-width: 900px) 100vw, 1100px"
                    style={{ width: "100%", height: "auto", display: "block", borderRadius: 6 }}
                  />
                </Box>
                <Stack direction="row" spacing={1.5} sx={{ mt: 1.5, alignItems: "baseline", flexWrap: "wrap", rowGap: 0.5 }}>
                  <Typography sx={{ fontFamily: fonts.mono, fontSize: 11.5, color: tokens.muted, maxWidth: 760 }}>{e.caption}</Typography>
                  <Typography
                    component="a"
                    href={e.src}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ fontFamily: fonts.mono, fontSize: 11, color: tokens.petrol, textDecoration: "none", whiteSpace: "nowrap", "&:hover": { textDecoration: "underline" } }}
                  >
                    ver a tamaño completo ↗
                  </Typography>
                </Stack>
              </Box>
            </Reveal>
          ))}
        </Stack>
      </Container>
    </Box>
  )
}

/* ------------------------------------------------------------ relato ------ */

function Contexto({ deep }: { deep: CasoDeep }) {
  return (
    <Box component="section" sx={{ py: { xs: 7, md: 11 }, borderBottom: `1px solid ${tokens.lineSoft}` }}>
      <Container sx={{ maxWidth: 820 }}>
        <Reveal>
          <Typography variant="h2" sx={{ fontSize: { xs: 24, md: 34 }, color: tokens.ink, mb: { xs: 3, md: 4 } }}>El punto de partida</Typography>
          {deep.contexto.map((p, i) => (
            <Typography
              key={p.slice(0, 24)}
              component="p"
              sx={
                i === 0
                  ? { fontFamily: fonts.serif, fontSize: { xs: 20, md: 26 }, lineHeight: 1.45, color: tokens.ink, mb: 2.5, letterSpacing: "-0.01em" }
                  : { fontSize: { xs: 16, md: 18 }, color: tokens.body, mb: 2 }
              }
            >
              {p}
            </Typography>
          ))}
        </Reveal>
      </Container>
    </Box>
  )
}

// Sección protagonista de la ficha: es lo que de verdad se vende. Por eso va
// a ancho completo, con numeración grande y una fila por bloque, en vez de
// apretada en un grid de dos columnas.
function QueHice({ deep }: { deep: CasoDeep }) {
  return (
    <Box component="section" sx={{ py: { xs: 8, md: 14 }, borderBottom: `1px solid ${tokens.lineSoft}` }}>
      <Container>
        <Reveal>
          <Typography variant="h2" sx={{ fontSize: { xs: 32, md: 52 }, lineHeight: 1.05, color: tokens.ink, mb: 2.5, maxWidth: 760 }}>
            Qué hice
          </Typography>
          {deep.queHiceIntro && (
            <Typography variant="body1" sx={{ fontSize: { xs: 17, md: 20 }, color: tokens.body, maxWidth: 720, mb: { xs: 5, md: 8 } }}>
              {deep.queHiceIntro}
            </Typography>
          )}
        </Reveal>
        <Box>
          {deep.capitulos.map((cap, i) => (
            <Reveal key={cap.n} delay={Math.min(i, 3) * 0.05}>
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: { xs: "1fr", md: "84px 0.9fr 1.3fr" },
                  gap: { xs: 1.5, md: 4 },
                  alignItems: "start",
                  py: { xs: 4, md: 5 },
                  borderTop: `1px solid ${tokens.line}`,
                  "&:last-of-type": { borderBottom: `1px solid ${tokens.line}` },
                }}
              >
                <Typography sx={{ fontFamily: fonts.serif, fontSize: { xs: 26, md: 40 }, fontWeight: 600, color: tokens.petrol, lineHeight: 1 }}>{cap.n}</Typography>
                <Typography component="h3" sx={{ fontFamily: fonts.serif, fontSize: { xs: 22, md: 27 }, fontWeight: 600, color: tokens.ink, lineHeight: 1.2 }}>{cap.title}</Typography>
                <Typography variant="body1" sx={{ fontSize: { xs: 16, md: 17.5 }, color: tokens.body }}>{cap.body}</Typography>
              </Box>
            </Reveal>
          ))}
        </Box>
      </Container>
    </Box>
  )
}

// Stack con los logos oficiales de cada herramienta, a ancho completo.
function StackSection({ items }: { items: string[] }) {
  return (
    <Box component="section" sx={{ py: { xs: 7, md: 10 }, borderBottom: `1px solid ${tokens.lineSoft}` }}>
      <Container>
        <Reveal>
          <Typography variant="h2" sx={{ fontSize: { xs: 24, md: 34 }, color: tokens.ink, mb: { xs: 3, md: 4 } }}>Stack</Typography>
          <StackChips items={items} />
        </Reveal>
      </Container>
    </Box>
  )
}

function Verificado({ deep }: { deep: CasoDeep }) {
  if (!deep.verificado) return null
  const { intro, filas, cierre } = deep.verificado
  return (
    <Box component="section" sx={{ py: { xs: 7, md: 11 }, borderBottom: `1px solid ${tokens.lineSoft}` }}>
      <Container>
        <Reveal>
          <Typography variant="h2" sx={{ fontSize: { xs: 24, md: 34 }, color: tokens.ink, mb: 1.5 }}>Resultados medibles</Typography>
          <Typography variant="body1" sx={{ color: tokens.body, maxWidth: 680, mb: { xs: 4, md: 5 } }}>{intro}</Typography>
        </Reveal>
        <Box>
          {filas.map((f, i) => (
            <Reveal key={f.label} delay={i * 0.05}>
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: { xs: "auto 1fr", md: "160px 1fr auto" },
                  gap: { xs: 2, md: 3 },
                  alignItems: "baseline",
                  py: { xs: 2.5, md: 3 },
                  borderTop: `1px solid ${tokens.lineSoft}`,
                  "&:last-of-type": { borderBottom: `1px solid ${tokens.lineSoft}` },
                }}
              >
                <Typography sx={{ fontFamily: fonts.serif, fontSize: { xs: 30, md: 40 }, fontWeight: 600, color: tokens.petrol, lineHeight: 1 }}>{f.value}</Typography>
                <Typography sx={{ fontSize: { xs: 15, md: 17 }, fontWeight: 600, color: tokens.ink }}>{f.label}</Typography>
                <Typography sx={{ fontFamily: fonts.mono, fontSize: 11.5, color: tokens.muted, gridColumn: { xs: "2", md: "auto" } }}>{f.note}</Typography>
              </Box>
            </Reveal>
          ))}
        </Box>
        {cierre && (
          <Reveal>
            <Stack direction="row" spacing={1.25} sx={{ mt: 4, alignItems: "center" }}>
              <Box sx={{ width: 8, height: 8, borderRadius: 999, bgcolor: tokens.green, flexShrink: 0 }} />
              <Typography sx={{ fontSize: { xs: 16, md: 18 }, fontWeight: 700, color: tokens.ink }}>{cierre}</Typography>
            </Stack>
          </Reveal>
        )}
      </Container>
    </Box>
  )
}

function Tecnico({ deep }: { deep: CasoDeep }) {
  if (!deep.tecnico) return null
  const { title, body, tabla } = deep.tecnico
  return (
    <Box component="section" sx={{ py: { xs: 7, md: 11 }, borderBottom: `1px solid ${tokens.lineSoft}` }}>
      <Container>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap: { xs: 5, md: 8 }, alignItems: "start" }}>
          <Reveal>
            <Box>
              <Typography variant="h2" sx={{ fontSize: { xs: 24, md: 34 }, color: tokens.ink, mb: 2.5 }}>{title}</Typography>
              {body.map((p) => (
                <Typography key={p.slice(0, 24)} variant="body1" sx={{ color: tokens.body, mb: 2 }}>{p}</Typography>
              ))}
            </Box>
          </Reveal>
          <Reveal delay={0.08}>
            <Box sx={{ bgcolor: tokens.win, border: `1px solid ${tokens.line}`, borderRadius: 3, p: { xs: 2.5, md: 3.5 } }}>
              {tabla.map((t, i) => (
                <Box key={t.label} sx={{ py: 2, borderTop: i === 0 ? "none" : `1px solid ${tokens.lineSoft}` }}>
                  <Typography sx={{ fontSize: 14, fontWeight: 700, color: tokens.ink, mb: 1 }}>{t.label}</Typography>
                  <Stack direction="row" spacing={1.5} sx={{ alignItems: "center", flexWrap: "wrap", rowGap: 0.75 }}>
                    <Typography sx={{ fontFamily: fonts.mono, fontSize: 12.5, color: tokens.red }}>{t.antes}</Typography>
                    <Box component="span" sx={{ color: tokens.muted, fontSize: 13 }}>→</Box>
                    <Typography sx={{ fontFamily: fonts.mono, fontSize: 12.5, fontWeight: 600, color: tokens.green }}>{t.despues}</Typography>
                  </Stack>
                </Box>
              ))}
            </Box>
          </Reveal>
        </Box>
      </Container>
    </Box>
  )
}

function Hallazgos({ deep }: { deep: CasoDeep }) {
  if (!deep.hallazgos) return null
  const { title, intro, items } = deep.hallazgos
  return (
    <Box component="section" sx={{ py: { xs: 7, md: 11 }, borderBottom: `1px solid ${tokens.lineSoft}`, bgcolor: tokens.surface }}>
      <Container>
        <Reveal>
          <Typography variant="h2" sx={{ fontSize: { xs: 24, md: 34 }, color: tokens.ink, mb: 1.5 }}>{title}</Typography>
          <Typography variant="body1" sx={{ color: tokens.body, maxWidth: 620, mb: { xs: 4, md: 6 } }}>{intro}</Typography>
        </Reveal>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap: { xs: 3, md: 4 } }}>
          {items.map((h, i) => (
            <Reveal key={h.title} delay={(i % 2) * 0.06}>
              <Box sx={{ bgcolor: tokens.win, border: `1px solid ${tokens.lineSoft}`, borderRadius: 3, p: { xs: 2.5, md: 3 }, height: "100%" }}>
                <Stack direction="row" spacing={1.5} sx={{ alignItems: "baseline", mb: 1.25 }}>
                  <Typography sx={{ fontFamily: fonts.serif, fontSize: { xs: 28, md: 34 }, fontWeight: 600, color: tokens.petrol, lineHeight: 1 }}>{h.value}</Typography>
                  <Typography component="h3" sx={{ fontSize: { xs: 15, md: 16 }, fontWeight: 700, color: tokens.ink }}>{h.title}</Typography>
                </Stack>
                <Typography variant="body2" sx={{ color: tokens.body, fontSize: 14.5 }}>{h.body}</Typography>
              </Box>
            </Reveal>
          ))}
        </Box>
      </Container>
    </Box>
  )
}

function Metodo({ deep }: { deep: CasoDeep }) {
  if (!deep.metodo) return null
  const { title, intro, reglas } = deep.metodo
  return (
    <Box component="section" sx={{ py: { xs: 7, md: 11 }, borderBottom: `1px solid ${tokens.lineSoft}` }}>
      <Container>
        <Reveal>
          <Typography variant="h2" sx={{ fontSize: { xs: 24, md: 34 }, color: tokens.ink, mb: 1.5 }}>{title}</Typography>
          <Typography variant="body1" sx={{ color: tokens.body, maxWidth: 620, mb: { xs: 4, md: 6 } }}>{intro}</Typography>
        </Reveal>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" }, gap: { xs: 3.5, md: 4 } }}>
          {reglas.map((r, i) => (
            <Reveal key={r.title} delay={i * 0.06}>
              <Box sx={{ borderTop: `2px solid ${tokens.petrol}`, pt: 2.5 }}>
                <Typography sx={{ fontFamily: fonts.mono, fontSize: 12, color: tokens.petrol, mb: 1 }}>{`0${i + 1}`}</Typography>
                <Typography component="h3" sx={{ fontFamily: fonts.serif, fontSize: 20, fontWeight: 600, color: tokens.ink, mb: 1 }}>{r.title}</Typography>
                <Typography variant="body1" sx={{ color: tokens.body }}>{r.body}</Typography>
              </Box>
            </Reveal>
          ))}
        </Box>
      </Container>
    </Box>
  )
}

/* ------------------------------------------- versión corta (resto casos) --- */

function RetoSolucion({ c }: { c: Caso }) {
  return (
    <Box component="section" sx={{ py: { xs: 8, md: 12 }, borderBottom: `1px solid ${tokens.lineSoft}` }}>
      <Container>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap: { xs: 5, md: 8 } }}>
          <Reveal>
            <Box>
              <Typography sx={{ fontFamily: fonts.mono, fontSize: 12, color: tokens.petrol, mb: 1.5 }}>{`// el reto`}</Typography>
              <Typography variant="body1" sx={{ fontSize: { xs: 16, md: 18 }, color: tokens.ink }}>{c.reto}</Typography>
            </Box>
          </Reveal>
          <Reveal delay={0.08}>
            <Box>
              <Typography sx={{ fontFamily: fonts.mono, fontSize: 12, color: tokens.petrol, mb: 1.5 }}>{`// la solución`}</Typography>
              <Typography variant="body1" sx={{ fontSize: { xs: 16, md: 18 }, color: tokens.ink }}>{c.solucion}</Typography>
            </Box>
          </Reveal>
        </Box>
      </Container>
    </Box>
  )
}

function Detalle({ c }: { c: Caso }) {
  return (
    <Box component="section" sx={{ py: { xs: 8, md: 13 }, borderBottom: `1px solid ${tokens.lineSoft}` }}>
      <Container>
        <Reveal>
          <Typography variant="h2" sx={{ fontSize: { xs: 30, md: 46 }, lineHeight: 1.06, color: tokens.ink, mb: { xs: 4, md: 7 }, maxWidth: 700 }}>
            Qué hice
          </Typography>
        </Reveal>
        <Box sx={{ mb: { xs: 6, md: 9 } }}>
          {(c.didDetail ?? c.did.map((d) => ({ title: d, text: "" }))).map((d, i) => (
            <Reveal key={d.title} delay={Math.min(i, 3) * 0.05}>
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: { xs: "44px 1fr", md: d.text ? "84px 0.9fr 1.3fr" : "84px 1fr" },
                  gap: { xs: 1.5, md: 4 },
                  alignItems: "start",
                  py: { xs: 3, md: 4.5 },
                  borderTop: `1px solid ${tokens.line}`,
                  "&:last-of-type": { borderBottom: `1px solid ${tokens.line}` },
                }}
              >
                <Typography sx={{ fontFamily: fonts.serif, fontSize: { xs: 24, md: 38 }, fontWeight: 600, color: tokens.petrol, lineHeight: 1 }}>{`0${i + 1}`}</Typography>
                <Typography
                  component="h3"
                  sx={{
                    fontFamily: d.text ? fonts.serif : fonts.sans,
                    fontSize: { xs: d.text ? 21 : 16.5, md: d.text ? 26 : 19 },
                    fontWeight: d.text ? 600 : 400,
                    color: tokens.ink,
                    lineHeight: 1.22,
                    gridColumn: { xs: "2", md: "auto" },
                  }}
                >
                  {d.title}
                </Typography>
                {d.text && (
                  <Typography variant="body1" sx={{ fontSize: { xs: 16, md: 17.5 }, color: tokens.body, gridColumn: { xs: "2", md: "auto" } }}>{d.text}</Typography>
                )}
              </Box>
            </Reveal>
          ))}
        </Box>
        <Reveal>
          <Typography variant="h2" sx={{ fontSize: { xs: 22, md: 28 }, color: tokens.ink, mb: 3 }}>Resultados</Typography>
          <Stack spacing={2.5} sx={{ mb: { xs: 5, md: 7 } }}>
            {c.metrics.map((m) => (
              <Box key={m.label}>
                <Typography sx={{ fontFamily: fonts.serif, fontSize: 38, fontWeight: 600, color: tokens.petrol, lineHeight: 1 }}>{m.value ?? "[[ dato real ]]"}</Typography>
                <Typography variant="body2" sx={{ color: tokens.ink, fontWeight: 600, mt: 0.5 }}>{m.label}</Typography>
                <Typography sx={{ fontFamily: fonts.mono, fontSize: 11, color: tokens.muted }}>{m.note}</Typography>
              </Box>
            ))}
          </Stack>
          {c.metrics.some((m) => !m.value) && (
            <Typography sx={{ fontFamily: fonts.mono, fontSize: 11, color: tokens.muted }}>
              {`// publico la cifra cuando ${c.client} la confirma, no antes`}
            </Typography>
          )}
        </Reveal>
      </Container>
    </Box>
  )
}

// Cierre del caso. Cada proyecto enlaza al servicio que de verdad demuestra:
// un caso de automatización no puede terminar vendiendo el pack de ecommerce.
// Prioridad: CTA propio del caso, y si no, el servicio de su categoría.
const CTA_POR_SERVICIO: Record<Caso["service"], { title: string; body: string; label: string; href: string }> = {
  crecimiento: {
    title: "Esto es el pack Crecimiento en acción.",
    body: "Más tráfico que compra y más visitas que convierten, sobre tu propia plataforma.",
    label: "Ver el pack Crecimiento",
    href: "/servicios/crecimiento-ecommerce",
  },
  // Los casos de SEO no son tiendas (peritaje, estudios, climatización...), así
  // que no pueden cerrar vendiendo el pack de ecommerce.
  seo: {
    title: "Esto es posicionamiento que trae clientes.",
    body: "Visibilidad en Google y en los buscadores de IA para la gente que ya está buscando lo que haces.",
    label: "Ver la auditoría SEO y GEO",
    href: "/servicios/auditoria-seo-geo",
  },
  automatizacion: {
    title: "Tu operativa, en sistemas que se ejecutan solos.",
    body: "n8n orquestando el trabajo repetitivo que hoy le come el día a tu equipo.",
    label: "Ver automatizaciones",
    href: "/servicios/automatizaciones",
  },
  amedida: {
    title: "Cuando el stack estándar no llega.",
    body: "Plataformas propias construidas de cero, de la idea a producción.",
    label: "Ver aplicaciones a medida",
    href: "/servicios/a-medida",
  },
}

function CrossLinks({ c, deep }: { c: Caso; deep?: CasoDeep }) {
  const base = CTA_POR_SERVICIO[c.service]
  const href = deep?.cta?.href ?? base.href
  const title = deep?.cta?.title ?? base.title
  const body = deep?.cta?.body ?? base.body
  const label = deep?.cta?.label ?? base.label
  return (
    <Box component="section" sx={{ py: { xs: 8, md: 11 } }}>
      <Container sx={{ textAlign: "center", maxWidth: 700 }}>
        <Reveal>
          <Typography variant="h2" sx={{ fontSize: { xs: 24, md: 32 }, color: tokens.ink, mb: 2 }}>
            {title}
          </Typography>
          <Typography variant="body1" sx={{ color: tokens.body, mb: 4 }}>
            {body}
          </Typography>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ justifyContent: "center" }}>
            <Button component={Link} href={href} variant="outlined" sx={{ borderRadius: 2, borderColor: tokens.line, color: tokens.ink, fontWeight: 700, "&:hover": { borderColor: tokens.petrol, bgcolor: "transparent" } }}>
              {label} <Box component="span" sx={{ color: tokens.petrol, ml: 0.75 }}>↗</Box>
            </Button>
            <Button component={Link} href="/casos-de-exito" sx={{ color: tokens.ink, fontWeight: 700, "&:hover": { bgcolor: "transparent", color: tokens.petrol } }}>
              Ver más casos
            </Button>
          </Stack>
        </Reveal>
      </Container>
    </Box>
  )
}

export default function CasoDetalleMui({ caso }: { caso: Caso }) {
  const deep = getCasoDeep(caso.slug)
  return (
    <Box sx={{ bgcolor: tokens.paper, color: tokens.body, fontFamily: fonts.sans }}>
      <SiteHeader />
      <Crumbs items={[{ label: "Casos de éxito", href: "/casos-de-exito" }, { label: caso.client }]} />
      <Hero c={caso} deep={deep} />
      {deep ? (
        <>
          <KpiBands deep={deep} />
          <Evidencia deep={deep} />
          <Contexto deep={deep} />
          <QueHice deep={deep} />
          <Verificado deep={deep} />
          <Tecnico deep={deep} />
          <Hallazgos deep={deep} />
          <Metodo deep={deep} />
          <StackSection items={caso.stack} />
        </>
      ) : (
        <>
          <RetoSolucion c={caso} />
          <Detalle c={caso} />
          <StackSection items={caso.stack} />
        </>
      )}
      <CrossLinks c={caso} deep={deep} />
      <DiagnosticoCTA />
      <SiteFooter />
    </Box>
  )
}
