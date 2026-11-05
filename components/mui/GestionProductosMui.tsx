"use client"

import { useState, useEffect } from "react"
import Link from "@/components/LocaleLink"
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
import { casosDeep } from "@/lib/casesDeep"
import { GESTION_PRODUCTOS_FAQS } from "@/lib/gestionProductosFaqs"
import MareaFlowViewer from "@/components/mui/MareaFlowViewer"

// Página de producto del sistema de gestión de productos. El argumento no es
// "mira este caso", es el reparto del trabajo: el sistema prepara cada
// producto y el equipo del cliente solo revisa y decide. marea.es aparece una
// vez, como prueba breve, con sus cifras verificadas de lib/casesDeep.ts.

const linkSx = { color: tokens.ink, fontWeight: 600, textDecoration: "underline", textDecorationColor: tokens.line, "&:hover": { textDecorationColor: tokens.petrol } } as const

/* ---------- artefacto: bandeja de revisión ---------- */

// Productos preparados por el sistema en borrador, a la espera de que el
// equipo los apruebe. Nombres genéricos: es un esquema, no una captura.
const COLA = [
  "Reloj de acero, esfera azul",
  "Pulsera de plata trenzada",
  "Smartwatch, correa de silicona",
  "Anillo de plata con circonita",
]
const CHECKS = ["ficha", "fotos", "stock", "SEO"]
const REGISTRO: [string, string][] = [
  ["07:00", "hoja del proveedor leída · 4 referencias nuevas"],
  ["07:02", "fichas creadas en borrador · descripción y SEO"],
  ["07:05", "fotos encontradas por EAN y asignadas en orden"],
  ["07:06", "stock sincronizado · reserva de tienda física"],
]

function RevisionQueueArt() {
  const reduce = useReducedMotion()
  // nº de productos ya aprobados; con movimiento reducido se queda a medias
  const [ok, setOk] = useState(reduce ? 2 : 0)
  useEffect(() => {
    if (reduce) return
    const t = setInterval(() => setOk((v) => (v >= COLA.length ? 0 : v + 1)), 1600)
    return () => clearInterval(t)
  }, [reduce])
  const pend = COLA.length - ok
  return (
    <ArtifactWindow tag="bandeja de revisión · productos nuevos" ratio="16 / 11">
      <Box sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
        <Stack direction="row" sx={{ alignItems: "baseline", justifyContent: "space-between", mb: 1 }}>
          <Typography sx={{ fontFamily: fonts.mono, fontSize: 9.5, color: tokens.muted }}>preparado por el sistema · en borrador</Typography>
          <Typography sx={{ fontFamily: fonts.mono, fontSize: 9.5, fontWeight: 700, color: pend ? tokens.ink : tokens.teal }}>
            {pend ? `${pend} por revisar` : "todo revisado"}
          </Typography>
        </Stack>
        <Stack spacing={0.6}>
          {COLA.map((name, i) => {
            const done = i < ok
            return (
              <Box key={name} sx={{ display: "grid", gridTemplateColumns: { xs: "1fr auto", sm: "1fr auto auto" }, alignItems: "center", gap: 1, bgcolor: tokens.win, border: `1px solid ${done ? `${tokens.teal}44` : tokens.lineSoft}`, borderRadius: 1.5, px: 1, py: 0.7, transition: "border-color .3s", "@media (prefers-reduced-motion: reduce)": { transition: "none" } }}>
                <Typography sx={{ fontSize: { xs: 11, md: 12 }, fontWeight: 600, color: tokens.ink, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{name}</Typography>
                <Stack direction="row" spacing={0.5} sx={{ display: { xs: "none", sm: "flex" } }}>
                  {CHECKS.map((c) => (
                    <Typography key={c} sx={{ fontFamily: fonts.mono, fontSize: 8.5, color: tokens.teal, border: `1px solid ${tokens.teal}33`, borderRadius: 999, px: 0.6, py: 0.1 }}>✓ {c}</Typography>
                  ))}
                </Stack>
                <Box component={motion.div} key={done ? "ok" : "rev"} initial={reduce ? false : { opacity: 0, y: 3 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}
                  sx={{ minWidth: 64, textAlign: "center", borderRadius: 999, px: 0.9, py: 0.2, bgcolor: done ? tokens.teal : "transparent", border: `1px solid ${done ? tokens.teal : tokens.line}` }}>
                  <Typography sx={{ fontFamily: fonts.mono, fontSize: 9, fontWeight: 700, color: done ? tokens.win : tokens.ink, whiteSpace: "nowrap" }}>{done ? "aprobado" : "revisar"}</Typography>
                </Box>
              </Box>
            )
          })}
        </Stack>
        <Box sx={{ mt: 1.25, pt: 1, borderTop: `1px dashed ${tokens.line}`, display: "flex", justifyContent: "space-between", gap: 1 }}>
          <Typography sx={{ fontFamily: fonts.mono, fontSize: 9.5, color: tokens.muted }}>se publica solo lo aprobado y completo</Typography>
          <Typography sx={{ fontFamily: fonts.mono, fontSize: 9.5, fontWeight: 700, color: tokens.teal }}>{ok} en tienda</Typography>
        </Box>
        <Box sx={{ mt: 1.5, bgcolor: tokens.surface, borderRadius: 1.5, px: 1.25, py: 1 }}>
          <Typography sx={{ fontFamily: fonts.mono, fontSize: 9.5, color: tokens.muted, mb: 0.5 }}>lo que el sistema ya ha hecho hoy</Typography>
          {REGISTRO.map(([h, t]) => (
            <Stack key={h} direction="row" spacing={1.25} sx={{ py: 0.25 }}>
              <Typography sx={{ fontFamily: fonts.mono, fontSize: { xs: 9, md: 10 }, color: tokens.muted, flexShrink: 0 }}>{h}</Typography>
              <Typography sx={{ fontFamily: fonts.mono, fontSize: { xs: 9, md: 10 }, color: tokens.ink, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{t}</Typography>
            </Stack>
          ))}
        </Box>
        <Typography sx={{ fontFamily: fonts.mono, fontSize: 9, color: tokens.muted, mt: "auto", pt: 1 }}>
          esquema ilustrativo · el sistema prepara, tu equipo decide
        </Typography>
      </Box>
    </ArtifactWindow>
  )
}

/* ---------- datos ---------- */

const SISTEMA = [
  "Da de alta cada producto a partir de la hoja del proveedor",
  "Escribe la descripción y la meta description",
  "Encuentra las fotos por EAN y las sube en orden",
  "Asigna categorías y atributos de filtro",
  "Agrupa las variantes de color y talla",
  "Mantiene el stock al día, con reserva para tienda física",
  "Deja cada ficha en borrador, lista para revisar",
]

const EQUIPO = [
  "Revisar lo preparado y decidir qué sale",
  "Surtido, colecciones y novedades",
  "Precios, márgenes y promociones",
  "Campañas y acciones comerciales",
  "Negociación con proveedores",
  "Atender y vender",
]

const MODULOS: [string, string][] = [
  ["Alta de producto", "Lee la hoja del proveedor, comprueba si la referencia ya existe, genera la descripción larga y la meta description, calcula sus categorías y crea el producto en borrador. Devuelve el ID a la hoja para que todo quede trazado."],
  ["Fotos", "Cruza el EAN de cada producto con la carpeta de imágenes, las descarga, las sube a la tienda y las asigna en orden. Solo actúa sobre productos sin fotos, así que se puede relanzar sin duplicar nada."],
  ["Categorías, atributos y filtros", "Clasifica por tipo, género, material o colección con reglas fijas, y normaliza el vocabulario del proveedor para que los filtros de la tienda funcionen de verdad."],
  ["Variantes y nombres", "Vincula las variantes para que se vean como una sola ficha con sus opciones, mantiene el nombre fiel a la hoja y reclasifica cuando el proveedor cambia de criterio."],
  ["Stock", "Sincroniza el inventario desde la fuente con un umbral de reserva configurable, para guardar unidades para la tienda física sin vender lo que no hay."],
  ["SEO de cada ficha", "Meta title y meta description de cada producto, EAN en su campo nativo para Google Shopping y asistentes de IA, y nombres y URLs sin duplicados."],
]

const PASOS: [string, string, string][] = [
  ["El proveedor actualiza su hoja", "O tu ERP. Productos nuevos, cambios de stock, una colección que entra. El sistema lo detecta.", "fuente"],
  ["El sistema prepara", "Crea los productos en borrador con sus fotos, categorías, variantes, stock y SEO. Los cambios masivos, primero en simulación.", "sistema"],
  ["Tu equipo revisa", "Una lista con lo nuevo y lo que cambia, no fichas una a una. Aprueba, corrige o descarta.", "tu equipo"],
  ["Sale a la tienda", "Se publica solo lo aprobado y completo. Lo que no tiene fotos o datos se queda en borrador.", "sistema"],
]

const GARANTIAS: [string, string][] = [
  ["Borrador por defecto", "Nada nuevo sale a la tienda sin pasar por tu equipo. La publicación va acotada a la lista aprobada."],
  ["Simulación antes de escribir", "Cada pasada masiva se ejecuta primero en modo lectura y produce el listado de lo que cambiaría."],
  ["Copia para deshacer", "Antes de cada escritura se guarda el estado anterior. Ninguna operación es irreversible."],
  ["Verificación después", "Lo escrito se compara contra la tienda. Si algo no cuadra, se ve, no se descubre semanas después."],
  ["Se para ante un fallo", "Lotes pequeños, un solo reintento y parada en seco si algo falla dos veces, para no perder cambios en silencio."],
  ["Se puede relanzar", "Cada circuito actúa solo sobre lo que falta. Lanzarlo dos veces no duplica productos ni fotos."],
]

/* ---------- secciones ---------- */

function Hero() {
  return (
    <ServiceHero
      title="Sistema para automatizar toda la gestión de productos"
      sub="Alta, fotos, categorías, variantes, stock y SEO salen solos de la hoja del proveedor y llegan a tu tienda. Tu equipo deja de cargar fichas: revisa lo que el sistema prepara y dedica su tiempo a las decisiones de estrategia, comerciales y de venta."
      specs={[
        ["automatiza", "alta · fotos · categorías · variantes · stock · SEO"],
        ["tu equipo", "revisa, aprueba y decide"],
        ["motor", "n8n + código propio, sobre tu tienda actual"],
      ]}
      note="Nada se publica sin revisión. Nada se escribe sin simulación previa."
      artifact={<RevisionQueueArt />}
    />
  )
}

function Reparto() {
  const item = (t: string, dark: boolean) => (
    <Stack key={t} direction="row" spacing={1.25} sx={{ alignItems: "baseline", py: 1.1, borderTop: `1px solid ${dark ? "rgba(250,248,240,.14)" : tokens.lineSoft}` }}>
      <Box component="span" sx={{ fontFamily: fonts.mono, fontSize: 12, color: dark ? tokens.accentSoft : tokens.teal, flexShrink: 0 }}>{dark ? "→" : "✓"}</Box>
      <Typography sx={{ fontSize: { xs: 15, md: 16 }, color: dark ? tokens.paper : tokens.body }}>{t}</Typography>
    </Stack>
  )
  const cardSx = { p: { xs: 3, md: 4 }, borderRadius: 3, height: "100%" } as const
  return (
    <Box component="section" sx={{ py: { xs: 8, md: 12 }, borderBottom: `1px solid ${tokens.lineSoft}` }}>
      <Container>
        <Reveal>
          <Box sx={{ maxWidth: 700, mb: { xs: 5, md: 7 } }}>
            <Typography variant="h2" sx={{ fontSize: { xs: 28, md: 40 }, color: tokens.ink, mb: 2 }}>
              El sistema hace el trabajo de producto. Tu equipo, el que hace vender.
            </Typography>
            <Typography variant="body1" sx={{ fontSize: { xs: 16, md: 18 }, color: tokens.body }}>
              En la mayoría de tiendas, la gente que mejor conoce el producto y al cliente pasa el día copiando datos de una hoja a la ficha, subiendo fotos y cuadrando stock. Es trabajo necesario, pero no es trabajo de criterio. El sistema se queda con esa parte y le devuelve a tu equipo la que no se puede automatizar.
            </Typography>
          </Box>
        </Reveal>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap: { xs: 3, md: 4 } }}>
          <Reveal>
            <Box sx={{ ...cardSx, border: `1px solid ${tokens.line}`, bgcolor: tokens.win }}>
              <Typography variant="h3" sx={{ fontFamily: fonts.serif, fontSize: 22, fontWeight: 600, color: tokens.ink, mb: 2 }}>Lo que hace el sistema</Typography>
              {SISTEMA.map((t) => item(t, false))}
            </Box>
          </Reveal>
          <Reveal delay={0.08}>
            <Box sx={{ ...cardSx, bgcolor: tokens.ink }}>
              <Typography variant="h3" sx={{ fontFamily: fonts.serif, fontSize: 22, fontWeight: 600, color: tokens.paper, mb: 2 }}>Lo que queda en manos de tu equipo</Typography>
              {EQUIPO.map((t) => item(t, true))}
            </Box>
          </Reveal>
        </Box>
      </Container>
    </Box>
  )
}

function Modulos() {
  return (
    <Box component="section" sx={{ py: { xs: 8, md: 12 }, borderBottom: `1px solid ${tokens.lineSoft}` }}>
      <Container>
        <Reveal>
          <Box sx={{ maxWidth: 640, mb: { xs: 5, md: 7 } }}>
            <Typography variant="h2" sx={{ fontSize: { xs: 28, md: 40 }, color: tokens.ink, mb: 2 }}>Qué automatiza, de la hoja del proveedor a la ficha publicada.</Typography>
            <Typography variant="body1" sx={{ fontSize: { xs: 16, md: 18 }, color: tokens.body }}>
              Seis módulos que cubren el ciclo de vida completo de un producto. Se montan juntos o empezando por el que más horas le quita hoy a tu equipo.
            </Typography>
          </Box>
        </Reveal>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr 1fr" }, gap: { xs: 3, md: 4 } }}>
          {MODULOS.map(([t, d], i) => (
            <Reveal key={t} delay={(i % 3) * 0.05}>
              <Box sx={{ borderTop: `2px solid ${tokens.line}`, pt: 2.5 }}>
                <Typography sx={{ fontFamily: fonts.mono, fontSize: 12, color: tokens.petrol, mb: 1.25 }}>{`0${i + 1}`}</Typography>
                <Typography variant="h3" sx={{ fontFamily: fonts.serif, fontSize: 21, fontWeight: 600, color: tokens.ink, mb: 1 }}>{t}</Typography>
                <Typography variant="body1" sx={{ color: tokens.body }}>{d}</Typography>
              </Box>
            </Reveal>
          ))}
        </Box>
      </Container>
    </Box>
  )
}

function FlujosReales() {
  return (
    <Box component="section" sx={{ py: { xs: 8, md: 12 }, borderBottom: `1px solid ${tokens.lineSoft}` }}>
      <Container>
        <Reveal>
          <Box sx={{ maxWidth: 680, mb: { xs: 4, md: 6 } }}>
            <Typography variant="h2" sx={{ fontSize: { xs: 28, md: 40 }, color: tokens.ink, mb: 2 }}>Así son los flujos por dentro.</Typography>
            <Typography variant="body1" sx={{ fontSize: { xs: 16, md: 18 }, color: tokens.body }}>
              Seis de los 25 flujos de n8n que gestionan hoy el catálogo de marea.es, con sus nodos reales. Es lo que se monta en tu tienda, adaptado a tus proveedores y a tu catálogo.
            </Typography>
          </Box>
        </Reveal>
        <Reveal delay={0.06}>
          <MareaFlowViewer />
        </Reveal>
      </Container>
    </Box>
  )
}

function ComoFunciona() {
  return (
    <Box component="section" sx={{ py: { xs: 8, md: 12 }, borderBottom: `1px solid ${tokens.lineSoft}`, bgcolor: tokens.surface }}>
      <Container>
        <Reveal>
          <Typography variant="h2" sx={{ fontSize: { xs: 28, md: 40 }, color: tokens.ink, mb: { xs: 5, md: 7 }, maxWidth: 640 }}>
            Cómo entra un producto en tu tienda con el sistema.
          </Typography>
        </Reveal>
        <Box component="ol" sx={{ listStyle: "none", p: 0, m: 0, display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "repeat(4, 1fr)" }, gap: { xs: 3, md: 0 } }}>
          {PASOS.map(([t, d, quien], i) => {
            const equipo = quien === "tu equipo"
            return (
              <Box component="li" key={t} sx={{ pr: { md: 3 }, pl: { md: i === 0 ? 0 : 3 }, borderLeft: { md: i === 0 ? "none" : `1px solid ${tokens.line}` } }}>
                <Reveal delay={i * 0.06}>
                  <Stack direction="row" spacing={1} sx={{ alignItems: "center", mb: 1.5 }}>
                    <Typography sx={{ fontFamily: fonts.serif, fontSize: 30, fontWeight: 600, lineHeight: 1, color: tokens.petrol }}>{i + 1}</Typography>
                    <Box sx={{ borderRadius: 999, px: 1, py: 0.2, bgcolor: equipo ? tokens.ink : "transparent", border: `1px solid ${equipo ? tokens.ink : tokens.line}` }}>
                      <Typography sx={{ fontFamily: fonts.mono, fontSize: 10.5, fontWeight: 700, color: equipo ? tokens.accentSoft : tokens.muted }}>{quien}</Typography>
                    </Box>
                  </Stack>
                  <Typography variant="h3" sx={{ fontFamily: fonts.serif, fontSize: 19, fontWeight: 600, color: tokens.ink, mb: 0.75 }}>{t}</Typography>
                  <Typography variant="body1" sx={{ color: tokens.body, fontSize: 15 }}>{d}</Typography>
                </Reveal>
              </Box>
            )
          })}
        </Box>
      </Container>
    </Box>
  )
}

function Control() {
  return (
    <Box component="section" sx={{ py: { xs: 8, md: 12 }, borderBottom: `1px solid ${tokens.lineSoft}` }}>
      <Container>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "0.8fr 1.2fr" }, gap: { xs: 5, md: 8 }, alignItems: "start" }}>
          <Reveal>
            <Box sx={{ position: { md: "sticky" }, top: { md: 96 } }}>
              <Typography variant="h2" sx={{ fontSize: { xs: 28, md: 40 }, color: tokens.ink, mb: 2 }}>
                Revisar es rápido porque el sistema no improvisa.
              </Typography>
              <Typography variant="body1" sx={{ fontSize: { xs: 16, md: 18 }, color: tokens.body }}>
                Para que tu equipo pueda fiarse de lo que aprueba, el sistema trabaja con reglas fijas y deja rastro de todo lo que toca. Estas son las seis que no se saltan nunca.
              </Typography>
            </Box>
          </Reveal>
          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" }, columnGap: 4 }}>
            {GARANTIAS.map(([t, d], i) => (
              <Reveal key={t} delay={(i % 2) * 0.05}>
                <Box sx={{ borderTop: `1px solid ${tokens.line}`, py: 2.5 }}>
                  <Typography variant="h3" sx={{ fontFamily: fonts.serif, fontSize: 19, fontWeight: 600, color: tokens.ink, mb: 0.75 }}>{t}</Typography>
                  <Typography variant="body1" sx={{ color: tokens.body, fontSize: 15 }}>{d}</Typography>
                </Box>
              </Reveal>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

// Prueba breve, no ficha de caso: las cifras de ingeniería verificadas de
// marea.es y un enlace al caso para quien quiera el detalle.
function EnProduccion() {
  const marea = casosDeep["marea-es"]
  const cifras = marea?.kpis[1]?.items ?? []
  if (!cifras.length) return null
  return (
    <Box component="section" sx={{ py: { xs: 8, md: 11 }, borderBottom: `1px solid ${tokens.lineSoft}` }}>
      <Container>
        <Reveal>
          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr auto" }, gap: { xs: 2, md: 6 }, alignItems: "end", mb: { xs: 4, md: 6 } }}>
            <Box sx={{ maxWidth: 640 }}>
              <Typography variant="h2" sx={{ fontSize: { xs: 28, md: 40 }, color: tokens.ink, mb: 2 }}>
                Ya gestiona un catálogo de relojes y joyería en producción.
              </Typography>
              <Typography variant="body1" sx={{ fontSize: { xs: 16, md: 18 }, color: tokens.body }}>
                En marea.es el producto llega solo desde las hojas del proveedor hasta la tienda, con todas las escrituras simuladas, respaldadas y verificadas.
              </Typography>
            </Box>
            <Button component={Link} href="/casos-de-exito/marea-es" sx={{ color: tokens.ink, fontWeight: 700, px: 0, justifyContent: "flex-start", "&:hover": { bgcolor: "transparent", color: tokens.petrol } }}>
              Ver el caso de marea.es <Box component="span" sx={{ color: tokens.petrol, ml: 0.5 }}>↗</Box>
            </Button>
          </Box>
        </Reveal>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr 1fr", md: "repeat(4, 1fr)" }, rowGap: 4 }}>
          {cifras.map((m, i) => (
            <Reveal key={m.label} delay={i * 0.05}>
              <Box sx={{ pl: { xs: i % 2 === 0 ? 0 : 2.5, md: i === 0 ? 0 : 3 }, borderLeft: { xs: i % 2 === 0 ? "none" : `1px solid ${tokens.lineSoft}`, md: i === 0 ? "none" : `1px solid ${tokens.lineSoft}` } }}>
                <Typography sx={{ fontFamily: fonts.serif, fontSize: { xs: 36, md: 48 }, fontWeight: 600, lineHeight: 1, color: tokens.petrol }}>{m.value}</Typography>
                <Typography sx={{ fontSize: 14.5, fontWeight: 700, color: tokens.ink, mt: 1 }}>{m.label}</Typography>
                {m.note && <Typography sx={{ fontFamily: fonts.mono, fontSize: 11, color: tokens.muted, mt: 0.4 }}>{m.note}</Typography>}
              </Box>
            </Reveal>
          ))}
        </Box>
      </Container>
    </Box>
  )
}

function SobreTuTienda() {
  const cols: { title: string; body: string; items: [string, string?][] }[] = [
    { title: "De dónde salen los datos", body: "La hoja de cálculo del proveedor, un Excel o CSV que te envían, o tu ERP.", items: [["Google Sheets"], ["Excel y CSV"], ["ERP"]] },
    { title: "Dónde están las fotos", body: "La carpeta compartida del proveedor o la tuya, identificadas por EAN o referencia.", items: [["Dropbox"], ["Google Drive"]] },
    { title: "Dónde se publica", body: "En producción hoy sobre WooCommerce. En Shopify o Magento cambian los conectores, no la lógica.", items: [["WooCommerce", "/agencia-woocommerce"], ["Shopify", "/agencia-shopify"], ["Magento", "/agencia-magento"]] },
  ]
  const chip = ([label, href]: [string, string?]) => {
    const sx = { textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 0.5, border: `1px solid ${tokens.line}`, borderRadius: 999, px: 1.5, py: 0.6, bgcolor: tokens.win } as const
    const text = <Typography sx={{ fontSize: 13.5, fontWeight: 600, color: tokens.ink }}>{label}</Typography>
    if (!href) return <Box key={label} sx={sx}>{text}</Box>
    return (
      <Box key={label} component={Link} href={href} sx={{ ...sx, "&:hover": { borderColor: tokens.petrol }, "&:hover .rel-arrow": { transform: "translate(2px,-2px)" } }}>
        {text}
        <Box className="rel-arrow" component="span" sx={{ color: tokens.petrol, fontFamily: fonts.mono, fontSize: 12, transition: "transform .2s", "@media (prefers-reduced-motion: reduce)": { transition: "none" } }}>↗</Box>
      </Box>
    )
  }
  return (
    <Box component="section" sx={{ py: { xs: 8, md: 12 }, borderBottom: `1px solid ${tokens.lineSoft}` }}>
      <Container>
        <Reveal>
          <Box sx={{ maxWidth: 640, mb: { xs: 5, md: 7 } }}>
            <Typography variant="h2" sx={{ fontSize: { xs: 28, md: 40 }, color: tokens.ink, mb: 2 }}>Sobre lo que ya usas, sin migrar nada.</Typography>
            <Typography variant="body1" sx={{ fontSize: { xs: 16, md: 18 }, color: tokens.body }}>
              Ni tu proveedor ni tu equipo tienen que cambiar de herramientas. El sistema se conecta a donde ya están los datos y a la tienda que ya tienes.
            </Typography>
          </Box>
        </Reveal>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" }, gap: { xs: 3, md: 4 } }}>
          {cols.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.06}>
              <Box sx={{ p: { xs: 3, md: 3.5 }, borderRadius: 3, border: `1px solid ${tokens.line}`, bgcolor: tokens.win, height: "100%", display: "flex", flexDirection: "column" }}>
                <Typography variant="h3" sx={{ fontFamily: fonts.serif, fontSize: 21, fontWeight: 600, color: tokens.ink, mb: 1 }}>{c.title}</Typography>
                <Typography variant="body1" sx={{ color: tokens.body, mb: 2.5 }}>{c.body}</Typography>
                <Stack direction="row" sx={{ flexWrap: "wrap", gap: 1, mt: "auto" }}>{c.items.map(chip)}</Stack>
              </Box>
            </Reveal>
          ))}
        </Box>
        <Reveal delay={0.1}>
          <Typography variant="body2" sx={{ color: tokens.muted, mt: { xs: 6, md: 8 }, textAlign: "center", maxWidth: 640, mx: "auto" }}>
            Si además quieres automatizar pedidos, feeds o reporting, eso es la{" "}
            <Box component={Link} href="/servicios/automatizaciones" sx={linkSx}>automatización de la operativa</Box>. Y si buscas tráfico y conversión sobre ese catálogo, el{" "}
            <Box component={Link} href="/servicios/crecimiento-ecommerce" sx={linkSx}>pack Crecimiento ecommerce</Box>.
          </Typography>
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
            Preguntas frecuentes sobre automatizar la gestión de productos.
          </Typography>
        </Reveal>
        {GESTION_PRODUCTOS_FAQS.map((f, i) => (
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

export default function GestionProductosMui() {
  return (
    <Box sx={{ bgcolor: tokens.paper, color: tokens.body, fontFamily: fonts.sans }}>
      <SiteHeader />
      <Crumbs items={[{ label: "Servicios" }, { label: "Automatización", href: "/servicios/automatizaciones" }, { label: "Gestión de productos" }]} />
      <Hero />
      <Reparto />
      <Modulos />
      <FlujosReales />
      <ComoFunciona />
      <Control />
      <EnProduccion />
      <SobreTuTienda />
      <Faq />
      <DiagnosticoCTA
        title="Devuélvele a tu equipo las horas de cargar fichas."
        body="Cuatro respuestas rápidas y te digo qué parte de tu gestión de productos se puede automatizar primero, sobre tu tienda y tus proveedores actuales. Sin formularios eternos y sin promesas de precio por email."
      />
      <SiteFooter />
    </Box>
  )
}
