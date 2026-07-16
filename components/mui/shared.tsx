"use client"

import { useRef, useState } from "react"
import Link from "next/link"
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
        <Reveal>
          <Typography variant="h1" sx={{ fontSize: { xs: 34, sm: 54, md: 70 }, letterSpacing: "-0.025em", color: tokens.ink, maxWidth: 1000, mb: { xs: 3.5, md: 5 } }}>
            {title}
          </Typography>
        </Reveal>
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
  const trail = [{ label: "Inicio", href: "/" }, ...items]
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.label,
      ...(c.href ? { item: `https://www.seoscar.com${c.href === "/" ? "" : c.href}` } : {}),
    })),
  }
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Container component="nav" aria-label="Migas de pan" sx={{ pt: { xs: 2, md: 2.5 } }}>
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
  if (variant === "text") {
    return (
      <Button component={Link} href={href} sx={{ color: tokens.ink, fontWeight: 700, px: 0, "&:hover": { bgcolor: "transparent", color: tokens.bronze } }}>
        Reserva tu diagnóstico <Box component="span" sx={{ color: tokens.bronze, ml: 0.5 }}>↗</Box>
      </Button>
    )
  }
  return (
    <Button component={Link} href={href} variant="contained" color="primary" sx={{ borderRadius: 2, width: { xs: "100%", sm: "auto" } }}>
      Reserva tu diagnóstico <Box component="span" sx={{ ml: 0.75 }}>↗</Box>
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

// Los 3 packs bajo "Servicios".
const PACKS = [
  { label: "Crecimiento ecommerce", href: "/servicios/crecimiento-ecommerce", tag: "el pack que lo une todo" },
  { label: "Agente de ventas IA", href: "/servicios/agente-ventas-ia", tag: "anclado a tu catálogo, también suelto" },
  { label: "Automatización", href: "/servicios/automatizaciones", tag: "n8n y código propio, también suelta" },
  { label: "Auditoría SEO/GEO", href: "/servicios/auditoria-seo-geo", tag: "con fugas de conversión, para empezar" },
]

const NAV_LINKS = [
  { label: "Casos", href: "/casos-de-exito" },
  { label: "Método", href: "/metodo" },
  { label: "Blog", href: "/blog" },
  { label: "Nosotros", href: "/sobre-nosotros" },
]

function Logo() {
  return (
    <Typography component={Link} href="/" sx={{ textDecoration: "none", fontFamily: fonts.sans, fontWeight: 800, letterSpacing: "-0.02em", color: tokens.ink, fontSize: 20 }}>
      <Box component="span" sx={{ color: tokens.bronze }}>SEO</Box>scar
    </Typography>
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
        Servicios
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
        {PACKS.map((p) => (
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
            aria-label="Navegación principal"
            direction="row"
            spacing={0.25}
            sx={{ display: { xs: "none", md: "flex" }, mx: "auto", alignItems: "center" }}
          >
            <ServicesMenu />
            {NAV_LINKS.map((l) => <NavLink key={l.href} href={l.href} label={l.label} />)}
          </Stack>
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            <Button
              component={Link}
              href="/diagnostico"
              variant="contained"
              color="primary"
              sx={{ borderRadius: 999, px: 2.25, py: 0.9, fontSize: 13.5, whiteSpace: "nowrap" }}
            >
              Reserva tu diagnóstico <Box component="span" sx={{ ml: 0.6 }}>↗</Box>
            </Button>
          </Box>
          <IconButton
            edge="end"
            onClick={() => setOpen(true)}
            aria-label="Abrir menú de navegación"
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
          <IconButton onClick={close} aria-label="Cerrar menú de navegación" sx={{ color: tokens.ink }}>
            <MenuToggleIcon open />
          </IconButton>
        </Stack>
        <Divider sx={{ borderColor: tokens.lineSoft, mb: 1 }} />
        <List sx={{ py: 0 }}>
          <Typography sx={{ fontFamily: fonts.mono, fontSize: 11, color: tokens.muted, px: 2, pt: 1, pb: 0.5 }}>{`// servicios`}</Typography>
          {PACKS.map((p, i) => (
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
          {NAV_LINKS.map((l, i) => (
            <Box
              key={l.href}
              component={motion.div}
              initial={reduce ? false : { opacity: 0, x: 18 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: reduce ? 0 : 0.06 + (PACKS.length + i) * 0.05, duration: 0.24 }}
            >
              <ListItemButton component={Link} href={l.href} onClick={close} sx={{ borderRadius: 2, py: 1 }}>
                <ListItemText primary={l.label} slotProps={{ primary: { sx: { fontFamily: fonts.serif, fontSize: 18, fontWeight: 600, color: tokens.ink } } }} />
                <Box component="span" sx={{ color: tokens.petrol, fontFamily: fonts.mono, fontSize: 14 }}>↗</Box>
              </ListItemButton>
            </Box>
          ))}
        </List>
        <Button component={Link} href="/diagnostico" onClick={close} variant="contained" color="primary" fullWidth sx={{ mt: 3, borderRadius: 2 }}>
          Reserva tu diagnóstico <Box component="span" sx={{ ml: 0.75 }}>↗</Box>
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

const FRENOS = [
  { v: "Entra tráfico pero no compra", d: "conversión" },
  { v: "Llega poca gente a la tienda", d: "tráfico y visibilidad" },
  { v: "Tareas manuales que me comen el día", d: "operativa" },
  { v: "El ticket medio se queda corto", d: "ingreso por pedido" },
  { v: "Aún no lo tengo claro", d: "lo vemos juntos" },
]
const FACTURACION = ["Menos de 10k€/mes", "10-50k€/mes", "50-200k€/mes", "Más de 200k€/mes"]
const TOTAL_PASOS = 4

// Diagnóstico conversacional: una pregunta por pantalla, respuestas clicables
// donde se puede, email al final (pedimos el contacto cuando ya han invertido
// tres respuestas). Reutilizable en la sección inline y en la página /diagnostico.
export function DiagnosticoFlow() {
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
        message: `Web/plataforma: ${form.web}\nFacturación aprox: ${form.facturacion}\nQué le frena: ${form.freno}`,
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

  const question = ["¿Qué es lo que más te frena hoy?", "¿Cuánto factura tu tienda al mes, más o menos?", "¿Cuál es tu tienda?", "¿Dónde te enviamos el diagnóstico?"][step]

  return (
    <Paper elevation={2} sx={{ position: "relative", p: { xs: 3, md: 4 }, borderRadius: 3, border: `1px solid ${tokens.lineSoft}`, minHeight: { md: 360 }, display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <Box aria-hidden sx={{ position: "absolute", left: -9999 }}><input ref={hp} tabIndex={-1} autoComplete="off" /></Box>
            {status === "done" ? (
              <Box sx={{ textAlign: "center", py: 2 }}>
                <Typography sx={{ fontFamily: fonts.mono, fontSize: 12, color: tokens.teal, mb: 1 }}>diagnóstico reservado</Typography>
                <Typography variant="h5" component="p" sx={{ fontFamily: fonts.serif, color: tokens.ink, mb: 1 }}>Recibido. Te respondo yo, Óscar.</Typography>
                <Typography sx={{ color: tokens.body }}>Menos de 24h. Miro tu tienda antes de escribirte, no es una respuesta automática.</Typography>
              </Box>
            ) : (
              <>
                {/* progreso: cada paso completado es un microcompromiso a la vista */}
                <Stack direction="row" sx={{ alignItems: "center", justifyContent: "space-between", mb: 1.25 }}>
                  <Typography sx={{ fontFamily: fonts.mono, fontSize: 11.5, color: tokens.muted }}>Paso {step + 1} de {TOTAL_PASOS}</Typography>
                  {step > 0 && (
                    <Box component="button" type="button" onClick={() => go(step - 1)} sx={{ font: "inherit", cursor: "pointer", bgcolor: "transparent", border: "none", p: 0, fontFamily: fonts.mono, fontSize: 11.5, color: tokens.muted, "&:hover": { color: tokens.ink } }}>
                      ← Atrás
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
                    <Typography variant="h5" component="h3" sx={{ fontFamily: fonts.serif, fontSize: { xs: 20, md: 23 }, color: tokens.ink, mb: 2 }}>{question}</Typography>

                    {step === 0 && (
                      <Stack spacing={1}>
                        {FRENOS.map((f) => <ChoiceButton key={f.v} label={f.v} sub={f.d} onClick={() => choose("freno", f.v)} />)}
                      </Stack>
                    )}

                    {step === 1 && (
                      <Stack spacing={1}>
                        {FACTURACION.map((r) => <ChoiceButton key={r} label={r} onClick={() => choose("facturacion", r)} />)}
                      </Stack>
                    )}

                    {step === 2 && (
                      <Stack component="form" spacing={1.5} onSubmit={(e) => { e.preventDefault(); if (form.web.trim()) go(step + 1) }}>
                        <TextField id="diag-web" hiddenLabel autoFocus placeholder="mitienda.com" value={form.web} onChange={set("web")} size="small" fullWidth sx={fieldSx} />
                        <Button type="submit" variant="contained" color="primary" disabled={!form.web.trim()} sx={{ borderRadius: 2, py: 1.15 }}>
                          Continuar <Box component="span" sx={{ ml: 0.75 }}>→</Box>
                        </Button>
                        <Typography sx={{ fontSize: 12, color: tokens.muted, textAlign: "center" }}>Pega la URL o el nombre. Miro la tienda antes de la llamada.</Typography>
                      </Stack>
                    )}

                    {step === 3 && (
                      <Stack component="form" spacing={1.5} onSubmit={submit} noValidate>
                        <TextField id="diag-email" hiddenLabel autoFocus placeholder="tu@email.com" type="email" value={form.email} onChange={set("email")} size="small" fullWidth error={status === "error"} sx={fieldSx} />
                        {status === "error" && <Typography role="alert" sx={{ fontSize: 12, color: tokens.red }}>Revisa el email, algo no cuadra.</Typography>}
                        <Button type="submit" variant="contained" color="primary" disabled={status === "sending"} sx={{ borderRadius: 2, py: 1.25 }}>
                          {status === "sending" ? "Enviando…" : <>Reserva tu diagnóstico <Box component="span" sx={{ ml: 0.75 }}>↗</Box></>}
                        </Button>
                        <Typography sx={{ fontSize: 12, color: tokens.muted, textAlign: "center" }}>Respuesta en 24h, sin compromiso. Sin spam, solo tu diagnóstico.</Typography>
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
export function DiagnosticoCTA() {
  return (
    <Box component="section" id="diagnostico" sx={{ position: "relative", overflow: "hidden", py: { xs: 9, md: 14 }, scrollMarginTop: 72 }}>
      <Blueprint />
      <Container sx={{ position: "relative", zIndex: 1 }}>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap: { xs: 5, md: 8 }, alignItems: "center" }}>
          <Box>
            <Typography variant="h2" sx={{ fontSize: { xs: 30, md: 46 }, color: tokens.ink, mb: 2 }}>
              Hagamos que tu tienda facture más.
            </Typography>
            <Typography variant="body1" sx={{ color: tokens.body, maxWidth: 460 }}>
              Cuatro respuestas rápidas y te digo dónde se te escapan las ventas, con un plan claro de tráfico, conversión y automatización. Sin rellenar formularios eternos y sin promesas de precio por email.
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
  const SERVICIOS: [string, string][] = [
    ["Crecimiento ecommerce", "/servicios/crecimiento-ecommerce"],
    ["Agente de ventas IA", "/servicios/agente-ventas-ia"],
    ["Automatización", "/servicios/automatizaciones"],
    ["Auditoría SEO/GEO", "/servicios/auditoria-seo-geo"],
    ["Plataformas internas a medida", "/servicios/a-medida"],
  ]
  const EMPRESA: [string, string][] = [
    ["Agencia Shopify", "/agencia-shopify"],
    ["Agencia WooCommerce", "/agencia-woocommerce"],
    ["Agencia Magento", "/agencia-magento"],
    ["Método", "/metodo"],
    ["Casos de éxito", "/casos-de-exito"],
    ["Blog", "/blog"],
    ["Tecnología", "/tecnologia"],
    ["Conócenos", "/sobre-nosotros"],
  ]
  const LEGAL: [string, string][] = [
    ["Aviso legal", "/aviso-legal"],
    ["Privacidad", "/privacidad"],
    ["Cookies", "/cookies"],
  ]
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
            <Typography component={Link} href="/" sx={{ textDecoration: "none", fontFamily: fonts.sans, fontWeight: 800, letterSpacing: "-0.02em", fontSize: 22, color: cream, display: "inline-block", ...focus }}>
              <Box component="span" sx={{ color: tokens.accentSoft }}>SEO</Box>scar
            </Typography>
            <Typography sx={{ color: tokens.onDarkMuted, fontSize: 14, mt: 1.5, maxWidth: 320, lineHeight: 1.6 }}>
              Agencia de ecommerce en Barcelona. Hago que tu tienda venda más sin migrar de plataforma.
            </Typography>
            <Stack spacing={0.75} sx={{ mt: 2.5 }}>
              <Typography sx={{ fontFamily: fonts.mono, fontSize: 12.5, color: tokens.onDarkMuted }}>Premià de Mar, Barcelona</Typography>
              <Typography component="a" href="mailto:contacta@seoscar.com" sx={{ fontFamily: fonts.mono, fontSize: 12.5, color: cream, textDecoration: "none", width: "fit-content", transition: "color .15s", "&:hover": { color: tokens.accentSoft }, ...focus }}>contacta@seoscar.com</Typography>
            </Stack>
          </Box>

          {/* Columna 4 · CTA de cierre (segundo en móvil, no puede quedar enterrado) */}
          <Box sx={{ order: { md: 4 } }}>
            <Typography component="p" sx={{ fontFamily: fonts.serif, fontSize: { xs: 22, md: 24 }, fontWeight: 600, color: cream, mb: 1.25, lineHeight: 1.2 }}>¿Dónde estás dejando ventas?</Typography>
            <Typography sx={{ color: tokens.onDarkMuted, fontSize: 14, mb: 2.5, maxWidth: 300, lineHeight: 1.6 }}>Diagnóstico gratis de tu tienda, con datos reales y respuesta en 24 a 48h.</Typography>
            <Button component={Link} href="/diagnostico" disableElevation sx={{ bgcolor: tokens.accentSoft, color: tokens.petrol, fontWeight: 700, borderRadius: 2, px: 2.5, py: 1, textTransform: "none", "&:hover": { bgcolor: "#FFDA5C" }, "&:focus-visible": { outline: `2px solid ${cream}`, outlineOffset: 2 } }}>
              Reserva tu diagnóstico <Box component="span" sx={{ ml: 0.75 }}>→</Box>
            </Button>
          </Box>

          {/* Columna 2 · servicios (tercero en móvil) */}
          <Box sx={{ order: { md: 2 } }}>
            <Typography sx={colTitleSx}>Servicios</Typography>
            {linkCol(SERVICIOS)}
          </Box>

          {/* Columna 3 · plataformas y empresa (cuarto en móvil) */}
          <Box sx={{ order: { md: 3 } }}>
            <Typography sx={colTitleSx}>Plataformas y empresa</Typography>
            {linkCol(EMPRESA)}
          </Box>
        </Box>

        {/* Barra inferior */}
        <Box sx={{ mt: { xs: 5, md: 7 }, pt: 3, borderTop: `1px solid ${tokens.paper}1f`, display: "flex", flexDirection: { xs: "column", sm: "row" }, gap: 2, justifyContent: "space-between", alignItems: { sm: "center" } }}>
          <Typography sx={{ fontFamily: fonts.mono, fontSize: 12, color: tokens.onDarkMuted }}>
            {`Hecho a mano, no generado. © ${new Date().getFullYear()} SEOscar`}
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
