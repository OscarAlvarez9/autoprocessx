import type { Metadata } from "next"
import ThemeRegistry from "@/components/mui/ThemeRegistry"
import MetodoMui from "@/components/mui/MetodoMui"
import JsonLd from "@/components/JsonLd"
import { ORG_ID, SITE_URL } from "@/lib/seo"

export const metadata: Metadata = {
  title: { absolute: "Mi método: del diagnóstico a vender más, con datos | SEOscar" },
  description:
    "Cómo trabajo: diagnóstico con datos reales, plan priorizado por impacto, implementación sobre tu tienda sin migrar y seguimiento mensual. El código es tuyo.",
  keywords: ["método agencia ecommerce", "diagnóstico ecommerce", "cómo trabajamos", "proceso agencia IA", "auditoría tienda online", "plan de crecimiento ecommerce"],
  openGraph: {
    title: "Mi método: del diagnóstico a vender más, con datos | SEOscar",
    description: "Cómo trabajo: diagnóstico con datos reales, plan priorizado por impacto, implementación sobre tu tienda sin migrar y seguimiento mensual. El código es tuyo.",
    type: "website",
    locale: "es_ES",
    url: `${SITE_URL}/metodo`,
  },
  alternates: { canonical: `${SITE_URL}/metodo` },
}

// HowTo: las 4 etapas del método, citables por buscadores y motores de IA.
const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "@id": `${SITE_URL}/metodo#metodo`,
  name: "Método SEOscar para hacer crecer un ecommerce",
  description:
    "Proceso en cuatro etapas: diagnóstico con datos reales, estrategia de conversión priorizada, implementación sobre la plataforma actual del cliente y seguimiento continuo con datos.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Diagnóstico",
      text: "Análisis de la tienda con datos reales (GA4, Search Console, Clarity, catálogo y checkout) para localizar dónde se escapan las ventas. Entrega: plan priorizado por impacto.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Estrategia de conversión",
      text: "Diseño del customer journey y del backlog de acciones (SEO, agente de ventas IA, automatización) ordenado por impacto esperado en ventas.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Implementación",
      text: "Construcción sobre la plataforma actual, sin migrar: SEO técnico, agente de ventas IA y automatización con n8n y código propio, en propiedad del cliente.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Seguimiento",
      text: "Medición mensual contra el plan con datos reales, informe automático y ajuste continuo de las palancas.",
    },
  ],
  publisher: { "@id": ORG_ID },
}

export default function MetodoPage() {
  return (
    <>
      <JsonLd data={howToSchema} />
      <ThemeRegistry>
        <MetodoMui />
      </ThemeRegistry>
    </>
  )
}
