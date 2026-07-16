import { ImageResponse } from "next/og"

// Imagen OG por defecto de todo el sitio (1200x630). Se puede sobreescribir por
// sección añadiendo otro opengraph-image en su carpeta. JSX satori-safe: todo
// contenedor con varios hijos es display:flex y cada texto va en su span.
export const alt = "SEOscar · Agencia de ecommerce en Barcelona"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

const PINE = "#013E37"
const CREAM = "#FAF8F0"
const BUTTER = "#FFE58A"
const BODY = "#4A5551"
const DOT = "#C7CEC9"

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: CREAM,
          padding: "72px 80px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", fontSize: 34, fontWeight: 800, letterSpacing: -1 }}>
          <span style={{ color: "#B08D3C" }}>SEO</span>
          <span style={{ color: PINE }}>scar</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "6px 16px", fontSize: 68, fontWeight: 800, color: PINE, letterSpacing: -2, maxWidth: 1000 }}>
            <span>Hacemos que tu</span>
            <span style={{ display: "flex", background: BUTTER, borderRadius: 12, padding: "2px 16px", color: PINE }}>ecommerce</span>
            <span>venda más.</span>
          </div>
          <div style={{ display: "flex", marginTop: 28, fontSize: 30, color: BODY, maxWidth: 940, lineHeight: 1.3 }}>
            <span>Agencia de ecommerce en Barcelona. SEO y GEO, CRO y agente de ventas IA, sobre tu propia tienda.</span>
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 22, color: PINE, fontWeight: 600 }}>
          <span>SEO y GEO</span>
          <span style={{ color: DOT }}>·</span>
          <span>Conversión</span>
          <span style={{ color: DOT }}>·</span>
          <span>Agente de ventas IA</span>
          <span style={{ color: DOT }}>·</span>
          <span>Automatización</span>
        </div>
      </div>
    ),
    { ...size }
  )
}
