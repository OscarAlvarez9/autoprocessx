import ThemeRegistry from "@/components/mui/ThemeRegistry"
import WooMui from "@/components/mui/WooMui"
import JsonLd from "@/components/JsonLd"
import { ORG_ID, SITE_URL } from "@/lib/seo"

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${SITE_URL}/agencia-woocommerce/#service`,
  name: "Agencia WooCommerce: SEO, CRO e IA para ecommerce",
  description:
    "Optimización de tiendas WooCommerce sobre WordPress: SEO técnico, limpieza de plugins y rendimiento, visibilidad en buscadores de IA (GEO), CRO y automatización, sobre la instalación actual y sin migrar.",
  serviceType: "Optimización de tiendas WooCommerce",
  provider: { "@id": ORG_ID },
  areaServed: [{ "@type": "Country", name: "España" }],
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿WooCommerce es peor para el SEO que Shopify?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Bien configurado, WooCommerce da más control SEO que ninguna otra plataforma: URLs, schema, rastreo, todo es editable. Su fama de peor viene de instalaciones descuidadas, no de la plataforma. La contrapartida es que ese control hay que ejercerlo con criterio.",
      },
    },
    {
      "@type": "Question",
      name: "¿Por qué mi tienda WooCommerce va lenta?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Casi siempre por una combinación de hosting justo, plugins acumulados, un tema o maquetador pesado y una base de datos sin mantenimiento. En el diagnóstico mido cada capa por separado y te digo cuál pesa más en tu caso concreto, con números.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuántos plugins son demasiados?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No es cuestión de número sino de coste: hay plugins ligeros y plugins que hunden la tienda ellos solos. La pregunta correcta es qué aporta cada uno a la venta y cuánto cuesta en rendimiento. Esa tabla sale de la auditoría.",
      },
    },
    {
      "@type": "Question",
      name: "Uso Cloudflare. ¿Puede estar bloqueando a ChatGPT?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Puede, y pasa a menudo: las protecciones anti-bot bloquean por defecto a los rastreadores de IA. Lo verifico contra tu dominio real y, si están bloqueados, se permite el paso a los bots legítimos de IA sin bajar la guardia frente al scraping malicioso.",
      },
    },
    {
      "@type": "Question",
      name: "¿Tengo que migrar de WooCommerce para crecer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Si tu tienda ya factura en Woo, migrar es el camino largo y caro. El corto es afinar lo que tienes: velocidad, rastreo, conversión y visibilidad en IA sobre tu instalación actual.",
      },
    },
  ],
}

export default function AgenciaWooCommercePage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />
      <ThemeRegistry>
        <WooMui />
      </ThemeRegistry>
    </>
  )
}
