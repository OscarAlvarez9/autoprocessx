"use client"

import { useRef, useState } from "react"
import { usePathname } from "next/navigation"
import { useLocale } from "@/components/LocaleProvider"
import { hasCatalan, localizePath, stripLocale, type Locale } from "@/lib/i18n"
import Link from "@/components/LocaleLink"
import NextLink from "next/link"
import Image from "next/image"
import { AnimatePresence, motion, useReducedMotion } from "motion/react"
import emailjs from "@emailjs/browser"
import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import Paper from "@mui/material/Paper"
import TextField from "@mui/material/TextField"
import MenuItem from "@mui/material/MenuItem"
import Menu from "@mui/material/Menu"
import AppBar from "@mui/material/AppBar"
import Drawer from "@mui/material/Drawer"
import IconButton from "@mui/material/IconButton"
import List from "@mui/material/List"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemText from "@mui/material/ListItemText"
import Divider from "@mui/material/Divider"
import { tokens, fonts } from "@/lib/mui/theme"

/* ---------- textos de las partes comunes, en castellano y catalán ---------- */

const T = {
  es: {
    home: "Inicio", crumbsAria: "Migas de pan", logoAria: "SEOscar · inicio",
    cta: "Reserva tu diagnóstico", services: "Servicios", servicesMobile: "// servicios",
    navAria: "Navegación principal", openMenu: "Abrir menú de navegación", closeMenu: "Cerrar menú de navegación",
    packs: [
      { label: "Crecimiento ecommerce", href: "/servicios/crecimiento-ecommerce", tag: "el pack que lo une todo" },
      { label: "Posicionamiento GEO", href: "/posicionamiento-geo", tag: "que ChatGPT y Google AI te citen" },
      { label: "Agente de ventas IA", href: "/servicios/agente-ventas-ia", tag: "anclado a tu catálogo, también suelto" },
      { label: "Automatización", href: "/servicios/automatizaciones", tag: "n8n y código propio, también suelta" },
      { label: "Auditoría SEO/GEO", href: "/servicios/auditoria-seo-geo", tag: "con fugas de conversión, para empezar" },
    ],
    nav: [
      { label: "Casos", href: "/casos-de-exito" },
      { label: "Método", href: "/metodo" },
      { label: "Blog", href: "/blog" },
      { label: "Quién hay detrás", href: "/sobre-nosotros" },
    ],
    frenos: [
      { v: "Entra tráfico pero no compra", d: "conversión" },
      { v: "Llega poca gente a la tienda", d: "tráfico y visibilidad" },
      { v: "Tareas manuales que me comen el día", d: "operativa" },
      { v: "El ticket medio se queda corto", d: "ingreso por pedido" },
      { v: "Aún no lo tengo claro", d: "lo vemos juntos" },
    ],
    facturacion: ["Menos de 10k€/mes", "10-50k€/mes", "50-200k€/mes", "Más de 200k€/mes"],
    questions: ["¿Qué es lo que más te frena hoy?", "¿Cuánto factura tu tienda al mes, más o menos?", "¿Cuál es tu tienda?", "¿Dónde te enviamos el diagnóstico?"],
    doneTag: "diagnóstico reservado", doneTitle: "Recibido. Te respondo yo, Óscar.",
    doneBody: "En 24-48 h. Miro tu tienda antes de escribirte, no es una respuesta automática.",
    step: (n: number, t: number) => `Paso ${n} de ${t}`, back: "← Atrás",
    webPlaceholder: "mitienda.com", next: "Continuar", webHelp: "Pega la URL o el nombre. Miro la tienda antes de la llamada.",
    emailPlaceholder: "tu@email.com", emailError: "Revisa el email, algo no cuadra.", sending: "Enviando…",
    emailHelp: "Respuesta en 24-48 h, sin compromiso. Sin spam, solo tu diagnóstico.",
    ctaTitle: "Hagamos que tu tienda facture más.",
    ctaBody: "Cuatro respuestas rápidas y te digo dónde se te escapan las ventas, con un plan claro de tráfico, conversión y automatización. Sin rellenar formularios eternos y sin promesas de precio por email.",
    footServices: [
      ["Crecimiento ecommerce", "/servicios/crecimiento-ecommerce"],
      ["Agente de ventas IA", "/servicios/agente-ventas-ia"],
      ["Automatización", "/servicios/automatizaciones"],
      ["Auditoría SEO/GEO", "/servicios/auditoria-seo-geo"],
      ["Posicionamiento GEO", "/posicionamiento-geo"],
      ["Plataformas internas a medida", "/servicios/a-medida"],
    ] as [string, string][],
    footCompany: [
      ["Agencia Shopify", "/agencia-shopify"],
      ["Agencia WooCommerce", "/agencia-woocommerce"],
      ["Agencia Magento", "/agencia-magento"],
      ["SEO local en Catalunya", "/seo-catalunya"],
      ["SEO en Barcelona", "/consultor-seo-barcelona"],
      ["SEO en el Maresme", "/agencia-seo-maresme"],
      ["SEO en el Vallès Oriental", "/consultor-seo-valles-oriental"],
      ["Método", "/metodo"],
      ["Casos de éxito", "/casos-de-exito"],
      ["Blog", "/blog"],
      ["Quién hay detrás", "/sobre-nosotros"],
    ] as [string, string][],
    footLegal: [["Aviso legal", "/aviso-legal"], ["Privacidad", "/privacidad"], ["Cookies", "/cookies"]] as [string, string][],
    footTagline: "Consultor SEO para ecommerce y negocios locales. Hago que tu tienda venda más sin migrar de plataforma.",
    footCtaTitle: "¿Dónde estás dejando ventas?",
    footCtaBody: "Diagnóstico gratis de tu tienda, con datos reales y respuesta en 24 a 48h.",
    footServicesTitle: "Servicios", footCompanyTitle: "Plataformas y empresa",
    madeByHand: "Hecho a mano, no generado.",
    langSwitch: "Versió en català", langLabel: "CA",
  },
  ca: {
    home: "Inici", crumbsAria: "Fil d'Ariadna", logoAria: "SEOscar · inici",
    cta: "Reserva el teu diagnòstic", services: "Serveis", servicesMobile: "// serveis",
    navAria: "Navegació principal", openMenu: "Obre el menú de navegació", closeMenu: "Tanca el menú de navegació",
    packs: [
      { label: "Creixement ecommerce", href: "/servicios/crecimiento-ecommerce", tag: "el pack que ho uneix tot" },
      { label: "Posicionament GEO", href: "/posicionamiento-geo", tag: "que ChatGPT i Google AI et citin" },
      { label: "Agent de vendes IA", href: "/servicios/agente-ventas-ia", tag: "ancorat al teu catàleg, també per separat" },
      { label: "Automatització", href: "/servicios/automatizaciones", tag: "n8n i codi propi, també per separat" },
      { label: "Auditoria SEO/GEO", href: "/servicios/auditoria-seo-geo", tag: "amb fuites de conversió, per començar" },
    ],
    nav: [
      { label: "Casos", href: "/casos-de-exito" },
      { label: "Mètode", href: "/metodo" },
      { label: "Blog", href: "/blog" },
      { label: "Qui hi ha darrere", href: "/sobre-nosotros" },
    ],
    frenos: [
      { v: "Entra trànsit però no compra", d: "conversió" },
      { v: "Arriba poca gent a la botiga", d: "trànsit i visibilitat" },
      { v: "Tasques manuals que em mengen el dia", d: "operativa" },
      { v: "El tiquet mitjà es queda curt", d: "ingrés per comanda" },
      { v: "Encara no ho tinc clar", d: "ho mirem junts" },
    ],
    facturacion: ["Menys de 10k€/mes", "10-50k€/mes", "50-200k€/mes", "Més de 200k€/mes"],
    questions: ["Què és el que més et frena avui?", "Quant factura la teva botiga al mes, més o menys?", "Quina és la teva botiga?", "On t'enviem el diagnòstic?"],
    doneTag: "diagnòstic reservat", doneTitle: "Rebut. Et responc jo, l'Òscar.",
    doneBody: "En 24-48 h. Miro la teva botiga abans d'escriure't, no és una resposta automàtica.",
    step: (n: number, t: number) => `Pas ${n} de ${t}`, back: "← Enrere",
    webPlaceholder: "lamevabotiga.com", next: "Continua", webHelp: "Enganxa l'URL o el nom. Miro la botiga abans de la trucada.",
    emailPlaceholder: "el.teu@correu.com", emailError: "Revisa el correu, alguna cosa no quadra.", sending: "Enviant…",
    emailHelp: "Resposta en 24-48 h, sense compromís. Sense correu brossa, només el teu diagnòstic.",
    ctaTitle: "Fem que la teva botiga facturi més.",
    ctaBody: "Quatre respostes ràpides i et dic on se t'escapen les vendes, amb un pla clar de trànsit, conversió i automatització. Sense formularis eterns i sense promeses de preu per correu.",
    footServices: [
      ["Creixement ecommerce", "/servicios/crecimiento-ecommerce"],
      ["Agent de vendes IA", "/servicios/agente-ventas-ia"],
      ["Automatització", "/servicios/automatizaciones"],
      ["Auditoria SEO/GEO", "/servicios/auditoria-seo-geo"],
      ["Posicionament GEO", "/posicionamiento-geo"],
      ["Plataformes internes a mida", "/servicios/a-medida"],
    ] as [string, string][],
    footCompany: [
      ["Agència Shopify", "/agencia-shopify"],
      ["Agència WooCommerce", "/agencia-woocommerce"],
      ["Agència Magento", "/agencia-magento"],
      ["SEO local a Catalunya", "/seo-catalunya"],
      ["SEO a Barcelona", "/consultor-seo-barcelona"],
      ["SEO al Maresme", "/agencia-seo-maresme"],
      ["SEO al Vallès Oriental", "/consultor-seo-valles-oriental"],
      ["Mètode", "/metodo"],
      ["Casos d'èxit", "/casos-de-exito"],
      ["Blog (en castellà)", "/blog"],
      ["Qui hi ha darrere", "/sobre-nosotros"],
    ] as [string, string][],
    footLegal: [["Avís legal", "/aviso-legal"], ["Privadesa", "/privacidad"], ["Galetes", "/cookies"]] as [string, string][],
    footTagline: "Consultor SEO per a ecommerce i negocis locals. Faig que la teva botiga vengui més sense migrar de plataforma.",
    footCtaTitle: "On estàs deixant vendes?",
    footCtaBody: "Diagnòstic gratuït de la teva botiga, amb dades reals i resposta en 24-48 h.",
    footServicesTitle: "Serveis", footCompanyTitle: "Plataformes i empresa",
    madeByHand: "Fet a mà, no generat.",
    langSwitch: "Versión en castellano", langLabel: "ES",
  },
}

/** Textos de las partes comunes en el idioma de la página. */
function useT() {
  return T[useLocale()]
}

// Enlace a la misma página en el otro idioma. Si la página no tiene versión
// en catalán (el blog), no se muestra.
function LangSwitch({ onClick }: { onClick?: () => void }) {
  const locale = useLocale()
  const t = useT()
  const path = usePathname() || "/"
  const base = stripLocale(path)
  if (!hasCatalan(base)) return null
  const other: Locale = locale === "es" ? "ca" : "es"
  return (
    // NextLink y no Link: Link volvería a poner la ruta en el idioma actual.
    <Box
      component={NextLink}
      href={localizePath(base, other)}
      hrefLang={other}
      lang={other}
      aria-label={t.langSwitch}
      title={t.langSwitch}
      onClick={onClick}
      sx={{ fontFamily: fonts.mono, fontSize: 12, fontWeight: 700, color: tokens.body, textDecoration: "none", border: `1px solid ${tokens.line}`, borderRadius: 999, px: 1, py: 0.35, "&:hover": { color: tokens.ink, borderColor: tokens.petrol } }}
    >
      {t.langLabel}
    </Box>
  )
}

export const EMAILJS = { service: "service_yqv95mt", template: "template_4tp4wat", publicKey: "WGplfo4snkyBY6ZQo" }
export const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

/* ---------- primitivas compartidas ---------- */

export function Blueprint() {
  return (
    <Box
      aria-hidden
      sx={{
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
        backgroundImage: `linear-gradient(${tokens.grid} 1px, transparent 1px), linear-gradient(90deg, ${tokens.grid} 1px, transparent 1px)`,
        backgroundSize: "34px 34px",
        WebkitMaskImage: "radial-gradient(ellipse 78% 62% at 30% 40%, black 18%, transparent 90%)",
        maskImage: "radial-gradient(ellipse 78% 62% at 30% 40%, black 18%, transparent 90%)",
      }}
    />
  )
}

// Banda de enunciado a todo ancho: tinta sólida + grid blueprint sutil, el
// mismo lenguaje gráfico hecho a mano del resto del sitio. Con photo, la foto
// va debajo de un scrim de tinta para mantener el texto legible.
export function StatementBand({ title, photo, as = "h2" }: { title: string; photo?: string; as?: "h2" | "p" }) {
  return (
    <Box
      component="section"
      sx={{
        position: "relative", overflow: "hidden", bgcolor: tokens.ink, borderBottom: `1px solid ${tokens.lineSoft}`,
        ...(photo ? { minHeight: { xs: 320, md: 420 }, display: "flex", alignItems: "center" } : null),
      }}
    >
      {photo && (
        <>
          <Box aria-hidden sx={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
            <Image src={photo} alt="" fill sizes="100vw" style={{ objectFit: "cover", objectPosition: "center" }} />
          </Box>
          <Box
            aria-hidden
            sx={{
              position: "absolute", inset: 0, pointerEvents: "none",
              background: `linear-gradient(90deg, ${tokens.ink}f2 0%, ${tokens.ink}cc 45%, ${tokens.ink}66 100%)`,
            }}
          />
        </>
      )}
      <Box
        aria-hidden
        sx={{
          position: "absolute", inset: 0, pointerEvents: "none",
          backgroundImage: `linear-gradient(rgba(244,246,247,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(244,246,247,.05) 1px, transparent 1px)`,
          backgroundSize: "34px 34px",
          WebkitMaskImage: "radial-gradient(ellipse 75% 70% at 75% 45%, black 12%, transparent 88%)",
          maskImage: "radial-gradient(ellipse 75% 70% at 75% 45%, black 12%, transparent 88%)",
        }}
      />
      <Container sx={{ position: "relative", zIndex: 1, py: { xs: 8, md: 12 } }}>
        <Box sx={{ maxWidth: 720 }}>
          <Typography variant="h2" component={as} sx={{ fontSize: { xs: 28, md: 44 }, color: "#F4F6F7", lineHeight: 1.12 }}>{title}</Typography>
        </Box>
      </Container>
    </Box>
  )
}

// Hero editorial de página de servicio, tipo "ficha técnica": titular serif a
// todo lo ancho, franja de specs entre hairlines con el CTA dentro, y el
// artefacto descentrado con anotaciones mono al margen. Nada de split simétrico.
export function ServiceHero({ title, sub, specs, note, artifact }: {
  title: React.ReactNode
  sub: string
  specs: [string, string][]
  note: string
  artifact: React.ReactNode
}) {
  return (
    <Box component="section" sx={{ position: "relative", overflow: "hidden", borderBottom: `1px solid ${tokens.lineSoft}` }}>
      <Blueprint />
      <Container sx={{ position: "relative", zIndex: 1, pt: { xs: 6, md: 9 }, pb: { xs: 7, md: 10 } }}>
        <HeroReveal>
          <Typography variant="h1" sx={{ fontSize: { xs: 34, sm: 54, md: 70 }, letterSpacing: "-0.025em", color: tokens.ink, maxWidth: 1000, mb: { xs: 3.5, md: 5 } }}>
            {title}
          </Typography>
        </HeroReveal>
        {/* franja técnica: el sub y el CTA viven entre hairlines, no flotando */}
        <Reveal delay={0.06}>
          <Box sx={{ borderTop: `1px solid ${tokens.line}`, borderBottom: `1px solid ${tokens.line}`, py: { xs: 2.5, md: 3 }, display: "grid", gridTemplateColumns: { xs: "1fr", md: "1.25fr auto" }, gap: { xs: 2.5, md: 5 }, alignItems: "center" }}>
            <Typography variant="body1" sx={{ fontSize: { xs: 16, md: 17 }, color: tokens.body, maxWidth: 560 }}>{sub}</Typography>
            <PrimaryCTA />
          </Box>
        </Reveal>
        {/* composición asimétrica: specs al margen izquierdo, artefacto dominando la derecha */}
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "0.8fr 1.2fr" }, gap: { xs: 4, md: 8 }, alignItems: "start", mt: { xs: 4, md: 6 } }}>
          <Reveal delay={0.12}>
            <Box sx={{ pt: { md: 3 }, order: { xs: 2, md: 1 } }}>
              {specs.map(([k, v], i) => (
                <Box key={k} sx={{ py: 1.75, borderTop: i === 0 ? "none" : `1px solid ${tokens.lineSoft}` }}>
                  <Typography sx={{ fontFamily: fonts.mono, fontSize: 11, color: tokens.muted, mb: 0.4 }}>{k}</Typography>
                  <Typography sx={{ fontSize: 14.5, fontWeight: 600, color: tokens.ink }}>{v}</Typography>
                </Box>
              ))}
              <Typography sx={{ fontFamily: fonts.mono, fontSize: 11, color: tokens.muted, mt: 2.5 }}>{note}</Typography>
            </Box>
          </Reveal>
          <Reveal delay={0.18}>
            <Box sx={{ order: { xs: 1, md: 2 }, minWidth: 0 }}>{artifact}</Box>
          </Reveal>
        </Box>
      </Container>
    </Box>
  )
}

// Migas de pan: visual discreto + BreadcrumbList JSON-LD. Un item sin href
// (p. ej. "Servicios", que no tiene página propia) se muestra como texto.
export function Crumbs({ items }: { items: { label: string; href?: string }[] }) {
  const t = useT()
  const locale = useLocale()
  const trail = [{ label: t.home, href: "/" }, ...items]
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.label,
      ...(c.href ? { item: `https://www.seoscar.com${localizePath(c.href, locale) === "/" ? "" : localizePath(c.href, locale)}` } : {}),
    })),
  }
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Container component="nav" aria-label={t.crumbsAria} sx={{ pt: { xs: 2, md: 2.5 } }}>
        <Stack direction="row" spacing={0.75} sx={{ alignItems: "center", flexWrap: "wrap", rowGap: 0.5 }}>
          {trail.map((c, i) => {
            const last = i === trail.length - 1
            return (
              <Stack key={`${c.label}-${i}`} direction="row" spacing={0.75} sx={{ alignItems: "center" }}>
                {i > 0 && <Box component="span" aria-hidden sx={{ fontSize: 11, color: tokens.muted }}>/</Box>}
                {c.href && !last ? (
                  <Typography component={Link} href={c.href} sx={{ fontSize: 12.5, color: tokens.muted, textDecoration: "none", "&:hover": { color: tokens.petrol } }}>
                    {c.label}
                  </Typography>
                ) : (
                  <Typography aria-current={last ? "page" : undefined} sx={{ fontSize: 12.5, color: last ? tokens.ink : tokens.muted, fontWeight: last ? 600 : 400 }}>
                    {c.label}
                  </Typography>
                )}
              </Stack>
            )
          })}
        </Stack>
      </Container>
    </>
  )
}

// Variante para lo que se ve al cargar (titular de cabecera, captura del
// hero). Reveal pinta con opacidad 0 desde el servidor y no enseña nada hasta
// que hidrata framer-motion: en móvil eso retrasaba el titular ~4 s y era el
// LCP de casi todas las páginas. Esta es solo CSS y nunca oculta el contenido:
// se ve en el primer pintado y hace una subida corta.
export function HeroReveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <Box
      sx={{
        "@keyframes heroRise": { from: { transform: "translateY(10px)" }, to: { transform: "none" } },
        animation: `heroRise .6s cubic-bezier(.22,1,.36,1) ${delay}s both`,
        "@media (prefers-reduced-motion: reduce)": { animation: "none" },
      }}
    >
      {children}
    </Box>
  )
}

export function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const reduce = useReducedMotion()
  if (reduce) return <>{children}</>
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

export function Kicker({ children, centered }: { children: React.ReactNode; centered?: boolean }) {
  return (
    <Typography component="p" sx={{ fontFamily: fonts.mono, fontSize: 12, color: tokens.bronze, letterSpacing: "0.04em", mb: 2, textAlign: centered ? "center" : "left" }}>
      {`// `}{children}
    </Typography>
  )
}

export function PrimaryCTA({ variant = "solid", href = "/diagnostico" }: { variant?: "solid" | "text"; href?: string }) {
  const t = useT()
  if (variant === "text") {
    return (
      <Button component={Link} href={href} sx={{ color: tokens.ink, fontWeight: 700, px: 0, "&:hover": { bgcolor: "transparent", color: tokens.bronze } }}>
        {t.cta} <Box component="span" sx={{ color: tokens.bronze, ml: 0.5 }}>↗</Box>
      </Button>
    )
  }
  return (
    <Button component={Link} href={href} variant="contained" color="primary" sx={{ borderRadius: 2, width: { xs: "100%", sm: "auto" } }}>
      {t.cta} <Box component="span" sx={{ ml: 0.75 }}>↗</Box>
    </Button>
  )
}

/* ---------- ventana de artefacto ---------- */

export function ArtifactWindow({ tag, children, ratio = "4 / 3" }: { tag: string; children: React.ReactNode; ratio?: string }) {
  return (
    <Paper elevation={2} sx={{ borderRadius: 3, overflow: "hidden", border: `1px solid ${tokens.lineSoft}`, bgcolor: tokens.win }}>
      <Stack direction="row" spacing={1.25} sx={{ alignItems: "center", px: 2, py: 1.25, borderBottom: `1px solid ${tokens.lineSoft}` }}>
        <Stack direction="row" spacing={0.75}>
          {[0, 1, 2].map((d) => <Box key={d} sx={{ width: 9, height: 9, borderRadius: 999, bgcolor: "#D8DAD6" }} />)}
        </Stack>
        <Typography sx={{ fontFamily: fonts.mono, fontSize: 11.5, color: tokens.muted }}>{tag}</Typography>
      </Stack>
      <Box sx={{ aspectRatio: ratio, p: 2 }}>{children}</Box>
    </Paper>
  )
}

/* ---------- navbar compartido ---------- */

// Servicios y enlaces del menú: viven en T (castellano y catalán).

function Logo() {
  const t = useT()
  return (
    <Box component={Link} href="/" aria-label={t.logoAria} sx={{ display: "inline-flex", alignItems: "center", "&:focus-visible": { outline: `2px solid ${tokens.petrol}`, outlineOffset: 3, borderRadius: 1 } }}>
      <Image src="/logo-seoscar.png" alt="SEOscar" width={380} height={112} priority style={{ height: 30, width: "auto" }} />
    </Box>
  )
}

// Link de desktop con subrayado petróleo animado (microinteracción, no rojo = acción).
function NavLink({ href, label }: { href: string; label: string }) {
  return (
    <Button
      component={Link}
      href={href}
      disableRipple
      sx={{
        color: tokens.body, fontWeight: 600, fontSize: 15, px: 1.25, py: 0.75, borderRadius: 1.5, position: "relative",
        "&:hover": { bgcolor: "transparent", color: tokens.ink },
        "&::after": { content: '""', position: "absolute", left: 10, right: 10, bottom: 6, height: "1.5px", bgcolor: tokens.petrol, transformOrigin: "left", transform: "scaleX(0)", transition: "transform .22s ease" },
        "&:hover::after": { transform: "scaleX(1)" },
      }}
    >
      {label}
    </Button>
  )
}

// Dropdown "Servicios" de desktop con los 3 packs (MUI Menu, accesible).
function ServicesMenu() {
  const t = useT()
  const [anchor, setAnchor] = useState<null | HTMLElement>(null)
  const open = Boolean(anchor)
  return (
    <>
      <Button
        id="servicios-btn"
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls={open ? "servicios-menu" : undefined}
        onClick={(e) => setAnchor(e.currentTarget)}
        disableRipple
        sx={{
          color: open ? tokens.ink : tokens.body, fontWeight: 600, fontSize: 15, px: 1.25, py: 0.75, borderRadius: 1.5,
          "&:hover": { bgcolor: "transparent", color: tokens.ink },
        }}
      >
        {t.services}
        <Box component="span" sx={{ ml: 0.5, fontSize: 10, color: tokens.petrol, transition: "transform .2s", transform: open ? "rotate(180deg)" : "none" }}>▾</Box>
      </Button>
      <Menu
        id="servicios-menu"
        anchorEl={anchor}
        open={open}
        onClose={() => setAnchor(null)}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        transformOrigin={{ vertical: "top", horizontal: "left" }}
        slotProps={{
          list: { "aria-labelledby": "servicios-btn", sx: { py: 1 } },
          paper: { elevation: 2, sx: { mt: 1, borderRadius: 2, border: `1px solid ${tokens.line}`, minWidth: 268 } },
        }}
      >
        {t.packs.map((p) => (
          <MenuItem key={p.href} component={Link} href={p.href} onClick={() => setAnchor(null)} sx={{ py: 1.15, px: 2, display: "block" }}>
            <Typography sx={{ fontFamily: fonts.sans, fontWeight: 700, fontSize: 14.5, color: tokens.ink }}>{p.label}</Typography>
            <Typography sx={{ fontFamily: fonts.mono, fontSize: 11, color: tokens.muted, mt: 0.25 }}>{p.tag}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </>
  )
}

// Hamburguesa → X con motion (respeta prefers-reduced-motion).
function MenuToggleIcon({ open }: { open: boolean }) {
  const reduce = useReducedMotion()
  const t = { duration: reduce ? 0 : 0.22, ease: "easeInOut" as const }
  const bar = { position: "absolute" as const, left: 3, right: 3, height: "2px", borderRadius: 2, bgcolor: tokens.ink }
  return (
    <Box sx={{ position: "relative", width: 22, height: 16 }} aria-hidden>
      <Box component={motion.span} animate={open ? { top: 7, rotate: 45 } : { top: 0, rotate: 0 }} transition={t} sx={{ ...bar, top: 0 }} />
      <Box component={motion.span} animate={{ opacity: open ? 0 : 1 }} transition={t} sx={{ ...bar, top: 7 }} />
      <Box component={motion.span} animate={open ? { top: 7, rotate: -45 } : { top: 14, rotate: 0 }} transition={t} sx={{ ...bar, top: 14 }} />
    </Box>
  )
}

export function SiteHeader() {
  const t = useT()
  const [open, setOpen] = useState(false)
  const reduce = useReducedMotion()
  const close = () => setOpen(false)
  return (
    <>
      <AppBar
        position="sticky"
        color="transparent"
        elevation={0}
        component="header"
        sx={{ top: { xs: 8, md: 14 }, bgcolor: "transparent", boxShadow: "none", px: { xs: 1.5, md: 3 }, pointerEvents: "none" }}
      >
        {/* cápsula flotante: despegada del borde, cristal sutil y sombra tonal */}
        <Box
          sx={{
            pointerEvents: "auto",
            maxWidth: 1072,
            mx: "auto",
            display: "flex",
            alignItems: "center",
            gap: 1.5,
            height: { xs: 54, md: 58 },
            px: { xs: 2, md: 2.5 },
            borderRadius: 999,
            bgcolor: `${tokens.win}e8`,
            backdropFilter: "blur(14px) saturate(1.35)",
            border: `1px solid ${tokens.line}`,
            boxShadow: "0 18px 44px -26px rgba(27,30,34,.35), inset 0 1px 0 rgba(255,255,255,.6)",
            color: tokens.ink,
          }}
        >
          <Logo />
          <Stack
            component="nav"
            aria-label={t.navAria}
            direction="row"
            spacing={0.25}
            sx={{ display: { xs: "none", md: "flex" }, mx: "auto", alignItems: "center" }}
          >
            <ServicesMenu />
            {t.nav.map((l) => <NavLink key={l.href} href={l.href} label={l.label} />)}
          </Stack>
          <Stack direction="row" spacing={1.25} sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}>
            <LangSwitch />
            <Button
              component={Link}
              href="/diagnostico"
              variant="contained"
              color="primary"
              sx={{ borderRadius: 999, px: 2.25, py: 0.9, fontSize: 13.5, whiteSpace: "nowrap" }}
            >
              {t.cta} <Box component="span" sx={{ ml: 0.6 }}>↗</Box>
            </Button>
          </Stack>
          <IconButton
            edge="end"
            onClick={() => setOpen(true)}
            aria-label={t.openMenu}
            aria-expanded={open}
            aria-controls="mobile-nav-drawer"
            sx={{ display: { md: "none" }, ml: "auto", color: tokens.ink }}
          >
            <MenuToggleIcon open={open} />
          </IconButton>
        </Box>
      </AppBar>

      <Drawer
        id="mobile-nav-drawer"
        anchor="right"
        open={open}
        onClose={close}
        keepMounted
        slotProps={{ paper: { sx: { width: "min(84vw, 340px)", bgcolor: tokens.paper, borderLeft: `1px solid ${tokens.line}`, px: 3, py: 2.5, display: "flex", flexDirection: "column" } } }}
      >
        <Stack direction="row" sx={{ alignItems: "center", justifyContent: "space-between", mb: 2 }}>
          <Logo />
          <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
          <LangSwitch onClick={close} />
          <IconButton onClick={close} aria-label={t.closeMenu} sx={{ color: tokens.ink }}>
            <MenuToggleIcon open />
          </IconButton>
          </Stack>
        </Stack>
        <Divider sx={{ borderColor: tokens.lineSoft, mb: 1 }} />
        <List sx={{ py: 0 }}>
          <Typography sx={{ fontFamily: fonts.mono, fontSize: 11, color: tokens.muted, px: 2, pt: 1, pb: 0.5 }}>{t.servicesMobile}</Typography>
          {t.packs.map((p, i) => (
            <Box
              key={p.href}
              component={motion.div}
              initial={reduce ? false : { opacity: 0, x: 18 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: reduce ? 0 : 0.06 + i * 0.05, duration: 0.24 }}
            >
              <ListItemButton component={Link} href={p.href} onClick={close} sx={{ borderRadius: 2, py: 1 }}>
                <ListItemText primary={p.label} slotProps={{ primary: { sx: { fontFamily: fonts.serif, fontSize: 18, fontWeight: 600, color: tokens.ink } } }} />
                <Box component="span" sx={{ color: tokens.petrol, fontFamily: fonts.mono, fontSize: 14 }}>↗</Box>
              </ListItemButton>
            </Box>
          ))}
          <Divider sx={{ borderColor: tokens.lineSoft, my: 1 }} />
          {t.nav.map((l, i) => (
            <Box
              key={l.href}
              component={motion.div}
              initial={reduce ? false : { opacity: 0, x: 18 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: reduce ? 0 : 0.06 + (t.packs.length + i) * 0.05, duration: 0.24 }}
            >
              <ListItemButton component={Link} href={l.href} onClick={close} sx={{ borderRadius: 2, py: 1 }}>
                <ListItemText primary={l.label} slotProps={{ primary: { sx: { fontFamily: fonts.serif, fontSize: 18, fontWeight: 600, color: tokens.ink } } }} />
                <Box component="span" sx={{ color: tokens.petrol, fontFamily: fonts.mono, fontSize: 14 }}>↗</Box>
              </ListItemButton>
            </Box>
          ))}
        </List>
        <Button component={Link} href="/diagnostico" onClick={close} variant="contained" color="primary" fullWidth sx={{ mt: 3, borderRadius: 2 }}>
          {t.cta} <Box component="span" sx={{ ml: 0.75 }}>↗</Box>
        </Button>
      </Drawer>
    </>
  )
}


/* ---------- campos de formulario: label encima, error debajo ---------- */

const fieldSx = {
  "& .MuiOutlinedInput-root": {
    bgcolor: tokens.win,
    borderRadius: 2,
    "& fieldset": { borderColor: tokens.line },
    "&:hover fieldset": { borderColor: tokens.muted },
    "&.Mui-focused fieldset": { borderColor: tokens.cobalt, borderWidth: "1.5px" },
    "&.Mui-error fieldset": { borderColor: tokens.red },
  },
  "& .MuiOutlinedInput-input::placeholder": { color: tokens.muted, opacity: 0.8 },
}

/* ---------- diagnóstico (único CTA del sitio) ---------- */

// Botón de respuesta clicable: en los pasos de opción, un clic responde y avanza.
function ChoiceButton({ label, sub, onClick }: { label: string; sub?: string; onClick: () => void }) {
  return (
    <Box
      component="button"
      type="button"
      onClick={onClick}
      sx={{
        width: "100%", textAlign: "left", cursor: "pointer", font: "inherit",
        display: "flex", alignItems: "center", gap: 1.5, px: 2, py: 1.5, borderRadius: 2,
        bgcolor: tokens.win, border: `1px solid ${tokens.line}`, transition: "all .18s",
        "&:hover": { borderColor: tokens.cobalt, bgcolor: tokens.surface, transform: "translateY(-1px)" },
        "&:hover .cb-arrow": { opacity: 1, transform: "translateX(0)" },
      }}
    >
      <Box sx={{ flex: 1, minWidth: 0 }}>
        <Typography sx={{ fontSize: 14.5, fontWeight: 600, color: tokens.ink }}>{label}</Typography>
        {sub && <Typography sx={{ fontFamily: fonts.mono, fontSize: 11, color: tokens.muted, mt: 0.25 }}>{sub}</Typography>}
      </Box>
      <Box className="cb-arrow" component="span" sx={{ color: tokens.cobalt, fontFamily: fonts.mono, fontSize: 14, opacity: 0.4, transform: "translateX(-3px)", transition: "all .18s", flexShrink: 0 }}>↗</Box>
    </Box>
  )
}

const TOTAL_PASOS = 4

// Diagnóstico conversacional: una pregunta por pantalla, respuestas clicables
// donde se puede, email al final (pedimos el contacto cuando ya han invertido
// tres respuestas). Reutilizable en la sección inline y en la página /diagnostico.
export function DiagnosticoFlow() {
  const t = useT()
  const locale = useLocale()
  const reduce = useReducedMotion()
  const [form, setForm] = useState({ web: "", email: "", facturacion: "", freno: "" })
  const [step, setStep] = useState(0)
  const [dir, setDir] = useState(1)
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle")
  const hp = useRef<HTMLInputElement>(null)

  const go = (n: number) => { setDir(n > step ? 1 : -1); setStatus("idle"); setStep(n) }
  const choose = (k: "freno" | "facturacion", v: string) => { setForm((f) => ({ ...f, [k]: v })); go(step + 1) }
  const set = (k: "web" | "email") => (e: React.ChangeEvent<HTMLInputElement>) => setForm((f) => ({ ...f, [k]: e.target.value }))

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (hp.current?.value) { setStatus("done"); return }
    if (!EMAIL_RE.test(form.email.trim())) { setStatus("error"); return }
    setStatus("sending")
    try {
      await emailjs.send(EMAILJS.service, EMAILJS.template, {
        name: form.web || "Diagnóstico ecommerce",
        email: form.email.trim(),
        message: `Web/plataforma: ${form.web}\nFacturación aprox: ${form.facturacion}\nQué le frena: ${form.freno}\nIdioma: ${locale === "ca" ? "catalán" : "castellano"}`,
      }, EMAILJS.publicKey)
      setStatus("done")
    } catch { setStatus("error") }
  }

  // Respuestas ya dadas, clicables para volver a un paso concreto.
  const recap = [
    form.freno && step > 0 ? { label: form.freno, at: 0 } : null,
    form.facturacion && step > 1 ? { label: form.facturacion, at: 1 } : null,
    form.web && step > 2 ? { label: form.web, at: 2 } : null,
  ].filter(Boolean) as { label: string; at: number }[]

  const question = t.questions[step]

  return (
    <Paper elevation={2} sx={{ position: "relative", p: { xs: 3, md: 4 }, borderRadius: 3, border: `1px solid ${tokens.lineSoft}`, minHeight: { md: 360 }, display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <Box aria-hidden sx={{ position: "absolute", left: -9999 }}><input ref={hp} tabIndex={-1} autoComplete="off" /></Box>
            {status === "done" ? (
              <Box sx={{ textAlign: "center", py: 2 }}>
                <Typography sx={{ fontFamily: fonts.mono, fontSize: 12, color: tokens.teal, mb: 1 }}>{t.doneTag}</Typography>
                <Typography variant="h5" component="p" sx={{ fontFamily: fonts.serif, color: tokens.ink, mb: 1 }}>{t.doneTitle}</Typography>
                <Typography sx={{ color: tokens.body }}>{t.doneBody}</Typography>
              </Box>
            ) : (
              <>
                {/* progreso: cada paso completado es un microcompromiso a la vista */}
                <Stack direction="row" sx={{ alignItems: "center", justifyContent: "space-between", mb: 1.25 }}>
                  <Typography sx={{ fontFamily: fonts.mono, fontSize: 11.5, color: tokens.muted }}>{t.step(step + 1, TOTAL_PASOS)}</Typography>
                  {step > 0 && (
                    <Box component="button" type="button" onClick={() => go(step - 1)} sx={{ font: "inherit", cursor: "pointer", bgcolor: "transparent", border: "none", p: 0, fontFamily: fonts.mono, fontSize: 11.5, color: tokens.muted, "&:hover": { color: tokens.ink } }}>
                      {t.back}
                    </Box>
                  )}
                </Stack>
                <Box sx={{ height: 4, borderRadius: 999, bgcolor: tokens.surface, overflow: "hidden", mb: 2.5 }}>
                  <Box component={motion.div} animate={{ width: `${((step + 1) / TOTAL_PASOS) * 100}%` }} transition={{ duration: reduce ? 0 : 0.4, ease: [0.22, 1, 0.36, 1] }} sx={{ height: "100%", bgcolor: tokens.cobalt, borderRadius: 999 }} />
                </Box>

                {recap.length > 0 && (
                  <Stack direction="row" spacing={0.75} sx={{ flexWrap: "wrap", rowGap: 0.75, mb: 2 }}>
                    {recap.map((r) => (
                      <Box key={r.at} component="button" type="button" onClick={() => go(r.at)}
                        sx={{ font: "inherit", cursor: "pointer", display: "inline-flex", alignItems: "center", gap: 0.5, maxWidth: 200, px: 1, py: 0.35, borderRadius: 999, border: `1px solid ${tokens.lineSoft}`, bgcolor: tokens.win, "&:hover": { borderColor: tokens.cobalt } }}>
                        <Typography sx={{ fontFamily: fonts.mono, fontSize: 10.5, color: tokens.body, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{r.label}</Typography>
                        <Box component="span" sx={{ fontFamily: fonts.mono, fontSize: 10.5, color: tokens.muted }}>✎</Box>
                      </Box>
                    ))}
                  </Stack>
                )}

                <AnimatePresence mode="wait" custom={dir}>
                  <Box
                    key={step}
                    component={motion.div}
                    custom={dir}
                    initial={reduce ? false : { opacity: 0, x: dir * 26 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={reduce ? { opacity: 0 } : { opacity: 0, x: dir * -26 }}
                    transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Typography variant="h5" component="p" sx={{ fontFamily: fonts.serif, fontSize: { xs: 20, md: 23 }, color: tokens.ink, mb: 2 }}>{question}</Typography>

                    {step === 0 && (
                      <Stack spacing={1}>
                        {t.frenos.map((f) => <ChoiceButton key={f.v} label={f.v} sub={f.d} onClick={() => choose("freno", f.v)} />)}
                      </Stack>
                    )}

                    {step === 1 && (
                      <Stack spacing={1}>
                        {t.facturacion.map((r) => <ChoiceButton key={r} label={r} onClick={() => choose("facturacion", r)} />)}
                      </Stack>
                    )}

                    {step === 2 && (
                      <Stack component="form" spacing={1.5} onSubmit={(e) => { e.preventDefault(); if (form.web.trim()) go(step + 1) }}>
                        <TextField id="diag-web" hiddenLabel autoFocus placeholder={t.webPlaceholder} value={form.web} onChange={set("web")} size="small" fullWidth sx={fieldSx} />
                        <Button type="submit" variant="contained" color="primary" disabled={!form.web.trim()} sx={{ borderRadius: 2, py: 1.15 }}>
                          {t.next} <Box component="span" sx={{ ml: 0.75 }}>→</Box>
                        </Button>
                        <Typography sx={{ fontSize: 12, color: tokens.muted, textAlign: "center" }}>{t.webHelp}</Typography>
                      </Stack>
                    )}

                    {step === 3 && (
                      <Stack component="form" spacing={1.5} onSubmit={submit} noValidate>
                        <TextField id="diag-email" hiddenLabel autoFocus placeholder={t.emailPlaceholder} type="email" value={form.email} onChange={set("email")} size="small" fullWidth error={status === "error"} sx={fieldSx} />
                        {status === "error" && <Typography role="alert" sx={{ fontSize: 12, color: tokens.red }}>{t.emailError}</Typography>}
                        <Button type="submit" variant="contained" color="primary" disabled={status === "sending"} sx={{ borderRadius: 2, py: 1.25 }}>
                          {status === "sending" ? t.sending : <>{t.cta} <Box component="span" sx={{ ml: 0.75 }}>↗</Box></>}
                        </Button>
                        <Typography sx={{ fontSize: 12, color: tokens.muted, textAlign: "center" }}>{t.emailHelp}</Typography>
                      </Stack>
                    )}
                  </Box>
                </AnimatePresence>
              </>
            )}
    </Paper>
  )
}

// Sección inline de diagnóstico al fondo de las páginas (conserva el ancla #diagnostico).
// title/body opcionales: las páginas locales no hablan solo de tiendas.
export function DiagnosticoCTA({ title, body }: { title?: string; body?: string } = {}) {
  const t = useT()
  return (
    <Box component="section" id="diagnostico" sx={{ position: "relative", overflow: "hidden", py: { xs: 9, md: 14 }, scrollMarginTop: 72 }}>
      <Blueprint />
      <Container sx={{ position: "relative", zIndex: 1 }}>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap: { xs: 5, md: 8 }, alignItems: "center" }}>
          <Box>
            <Typography variant="h2" sx={{ fontSize: { xs: 30, md: 46 }, color: tokens.ink, mb: 2 }}>
              {title ?? t.ctaTitle}
            </Typography>
            <Typography variant="body1" sx={{ color: tokens.body, maxWidth: 460 }}>
              {body ?? t.ctaBody}
            </Typography>
          </Box>
          <DiagnosticoFlow />
        </Box>
      </Container>
    </Box>
  )
}

/* ---------- footer ---------- */

// Footer del sitio (chrome compartido, aparece en todas las páginas). Fondo
// pino: texto crema y su variante atenuada, mono en meta/legal, sans en enlaces.
// Móvil apila en orden marca, CTA, servicios, plataformas (el orden del DOM
// coincide con el visual y con el foco de teclado); desktop reordena con `order`.
export function SiteFooter() {
  const cream = tokens.paper
  const t = useT()
  const SERVICIOS = t.footServices
  const EMPRESA = t.footCompany
  const LEGAL = t.footLegal
  const focus = { "&:focus-visible": { outline: `2px solid ${cream}`, outlineOffset: 2, borderRadius: 2 } }
  const linkSx = { color: cream, textDecoration: "none", fontSize: 14, lineHeight: 2.1, transition: "color .15s", "&:hover": { color: tokens.accentSoft }, ...focus }
  const colTitleSx = { fontFamily: fonts.mono, fontSize: 11, fontWeight: 700, letterSpacing: ".08em", textTransform: "uppercase" as const, color: tokens.onDarkMuted, mb: 1.5 }
  const linkCol = (links: [string, string][]) => (
    <Stack>
      {links.map(([l, h]) => (
        <Typography key={h} component={Link} href={h} sx={linkSx}>{l}</Typography>
      ))}
    </Stack>
  )
  return (
    <Box component="footer" sx={{ bgcolor: tokens.petrol, color: cream, py: { xs: 7, md: 9 } }}>
      <Container>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "1.5fr 1fr 1.1fr 1.2fr" }, gap: { xs: 5, md: 5 } }}>
          {/* Columna 1 · marca y contacto (NAP) */}
          <Box sx={{ order: { md: 1 } }}>
            <Box component={Link} href="/" aria-label={t.logoAria} sx={{ display: "inline-flex", alignItems: "center", ...focus }}>
              <Image src="/logo-seoscar-cream.png" alt="SEOscar" width={380} height={112} style={{ height: 32, width: "auto" }} />
            </Box>
            <Typography sx={{ color: tokens.onDarkMuted, fontSize: 14, mt: 1.5, maxWidth: 320, lineHeight: 1.6 }}>
              {t.footTagline}
            </Typography>
            <Stack spacing={0.75} sx={{ mt: 2.5 }}>
              <Typography sx={{ fontFamily: fonts.mono, fontSize: 12.5, color: tokens.onDarkMuted }}>Premià de Mar, Barcelona</Typography>
              <Typography component="a" href="mailto:contacta@seoscar.com" sx={{ fontFamily: fonts.mono, fontSize: 12.5, color: cream, textDecoration: "none", width: "fit-content", transition: "color .15s", "&:hover": { color: tokens.accentSoft }, ...focus }}>contacta@seoscar.com</Typography>
            </Stack>
          </Box>

          {/* Columna 4 · CTA de cierre (segundo en móvil, no puede quedar enterrado) */}
          <Box sx={{ order: { md: 4 } }}>
            <Typography component="p" sx={{ fontFamily: fonts.serif, fontSize: { xs: 22, md: 24 }, fontWeight: 600, color: cream, mb: 1.25, lineHeight: 1.2 }}>{t.footCtaTitle}</Typography>
            <Typography sx={{ color: tokens.onDarkMuted, fontSize: 14, mb: 2.5, maxWidth: 300, lineHeight: 1.6 }}>{t.footCtaBody}</Typography>
            <Button component={Link} href="/diagnostico" disableElevation sx={{ bgcolor: tokens.accentSoft, color: tokens.petrol, fontWeight: 700, borderRadius: 2, px: 2.5, py: 1, textTransform: "none", "&:hover": { bgcolor: "#FFDA5C" }, "&:focus-visible": { outline: `2px solid ${cream}`, outlineOffset: 2 } }}>
              {t.cta} <Box component="span" sx={{ ml: 0.75 }}>→</Box>
            </Button>
          </Box>

          {/* Columna 2 · servicios (tercero en móvil) */}
          <Box sx={{ order: { md: 2 } }}>
            <Typography sx={colTitleSx}>{t.footServicesTitle}</Typography>
            {linkCol(SERVICIOS)}
          </Box>

          {/* Columna 3 · plataformas y empresa (cuarto en móvil) */}
          <Box sx={{ order: { md: 3 } }}>
            <Typography sx={colTitleSx}>{t.footCompanyTitle}</Typography>
            {linkCol(EMPRESA)}
          </Box>
        </Box>

        {/* Barra inferior */}
        <Box sx={{ mt: { xs: 5, md: 7 }, pt: 3, borderTop: `1px solid ${tokens.paper}1f`, display: "flex", flexDirection: { xs: "column", sm: "row" }, gap: 2, justifyContent: "space-between", alignItems: { sm: "center" } }}>
          <Typography sx={{ fontFamily: fonts.mono, fontSize: 12, color: tokens.onDarkMuted }}>
            {`${t.madeByHand} © ${new Date().getFullYear()} SEOscar`}
          </Typography>
          <Stack direction="row" spacing={2.5} sx={{ flexWrap: "wrap" }}>
            {LEGAL.map(([l, h]) => (
              <Typography key={h} component={Link} href={h} sx={{ fontFamily: fonts.mono, fontSize: 12, color: tokens.onDarkMuted, textDecoration: "none", transition: "color .15s", "&:hover": { color: tokens.accentSoft }, ...focus }}>{l}</Typography>
            ))}
          </Stack>
        </Box>
      </Container>
    </Box>
  )
}
