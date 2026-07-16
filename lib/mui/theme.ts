"use client"
import { createTheme } from "@mui/material/styles"

// Tokens de marca — paleta v4 "cobalto editorial": UN color propietario (cobalto
// eléctrico = acción, links, detalle de marca) sobre hueso cálido, con rojo y
// verde liberados para semántica pura (problema / dato positivo). Las claves
// heredadas (petrol/bronze/brick/teal) se conservan repunteadas para no tocar
// sus ~1.500 usos.
/*
 * PRESETS GUARDADOS (restaurar copiando los valores):
 *
 * v4 "cobalto editorial":
 *   paper: "#F2EFE9"   surface: "#E9E5DC"   win: "#FDFDFB"
 *   cobalt: "#2438E0"  cobaltD: "#1B2BB5"   accentSoft: "#A9B3FF"
 *   ink: "#1B1E22"     body: "#2A2E33"      muted: "#6A7078"
 *   line: rgba(27,30,34,.12) / .06 / .04
 *   petrol/bronze → cobalto · primary.contrastText: "#FFFFFF"
 *
 * v5theme "pino y mantequilla sobre blanco roto" (la más potente hasta ahora):
 *   paper: "#F7F5EE"   surface: "#EDEAE0"   win: "#FDFCF8"
 *   cobalt: "#013E37"  cobaltD: "#012A25"   accentSoft: "#FFE58A"
 *   ink: "#14201D"     body: "#26332F"      muted: "#5E6B63"
 *   line: rgba(20,32,29,.16) / .08 / .05
 *   petrol/bronze → pino · primary.contrastText: "#FFEFB3" (texto mantequilla en CTA)
 */
// PALETA ACTIVA · v5theme "pino y mantequilla sobre blanco roto": base de trabajo.
export const tokens = {
  paper: "#FAF8F0", // base, blanco crema muy ligero
  surface: "#F1EEE1", // superficie: cards, bloques suaves
  ink: "#14201D", // tinta verde-negro para casar con el pino
  body: "#26332F", // cuerpo
  muted: "#5E6B63", // secundario
  // VERDE PINO = el color de la marca: CTA, links, filetes, activos.
  cobalt: "#013E37",
  cobaltD: "#012A25",
  accentSoft: "#FFE58A", // mantequilla clara para superficies oscuras (banda/footer)
  onDarkMuted: "rgba(250,248,240,.74)", // texto atenuado (crema) sobre fondo pino · AA sobre #013E37 (~6.9:1)
  petrol: "#013E37", // alias heredado → verde pino
  bronze: "#013E37", // alias heredado → verde pino
  // Rojo = SOLO problema / error (semántico, no es el CTA).
  red: "#D2422B",
  redD: "#B23A24",
  brick: "#D2422B", // alias heredado → rojo semántico
  // Verde = crecimiento / dato positivo.
  green: "#0F8A5E",
  greenD: "#0B6E4A",
  teal: "#0F8A5E", // alias heredado → verde
  line: "rgba(20,32,29,.16)",
  lineSoft: "rgba(20,32,29,.08)",
  grid: "rgba(20,32,29,.05)",
  win: "#FEFDF9", // ventanas casi blancas con calidez: flotan sobre el crema ligero
}

const serif = "var(--font-fraunces), Georgia, serif"
const sans = "var(--font-sans-body), var(--font-geist-sans), system-ui, sans-serif"
const mono = "var(--font-mono-plex), var(--font-geist-mono), monospace"

export const theme = createTheme({
  cssVariables: true,
  palette: {
    mode: "light",
    primary: { main: tokens.cobalt, dark: tokens.cobaltD, contrastText: "#FFEFB3" }, // marca / acción (pino con texto mantequilla)
    secondary: { main: tokens.ink, contrastText: "#F7F6F2" },
    success: { main: tokens.green, dark: tokens.greenD }, // crecimiento / dato
    error: { main: tokens.red }, // problema, solo semántico
    background: { default: tokens.paper, paper: tokens.win },
    text: { primary: tokens.ink, secondary: tokens.muted },
    divider: tokens.line,
  },
  shape: { borderRadius: 12 },
  typography: {
    fontFamily: sans,
    h1: { fontFamily: serif, fontWeight: 600, letterSpacing: "-0.02em", lineHeight: 1.05 },
    h2: { fontFamily: serif, fontWeight: 600, letterSpacing: "-0.015em", lineHeight: 1.1 },
    h3: { fontFamily: serif, fontWeight: 600, letterSpacing: "-0.01em", lineHeight: 1.15 },
    h4: { fontFamily: serif, fontWeight: 600, lineHeight: 1.2 },
    h5: { fontFamily: sans, fontWeight: 700 },
    h6: { fontFamily: sans, fontWeight: 700 },
    body1: { color: tokens.body, lineHeight: 1.65 },
    body2: { color: tokens.body, lineHeight: 1.6 },
    button: { textTransform: "none", fontWeight: 700, letterSpacing: 0 },
    overline: { fontFamily: mono, fontWeight: 500, letterSpacing: "0.04em", textTransform: "none" },
    caption: { fontFamily: mono },
  },
  shadows: [
    "none",
    "0 1px 2px rgba(27,30,34,.04)",
    "0 8px 30px -18px rgba(27,30,34,.20)", // ventanas de artefacto
    ...Array(22).fill("0 8px 30px -18px rgba(27,30,34,.20)"),
  ] as unknown as import("@mui/material/styles").Theme["shadows"],
  components: {
    MuiPaper: { styleOverrides: { root: { backgroundImage: "none" } } },
    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: {
        root: { borderRadius: 8, paddingInline: 22, paddingBlock: 11 },
      },
    },
    MuiContainer: { defaultProps: { maxWidth: false }, styleOverrides: { root: { maxWidth: 1120 } } },
    MuiCssBaseline: { styleOverrides: { body: { backgroundColor: tokens.paper } } },
  },
})

export const fonts = { serif, sans, mono }
