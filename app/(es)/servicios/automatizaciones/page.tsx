import ThemeRegistry from "@/components/mui/ThemeRegistry"
import AutomatizacionMui from "@/components/mui/AutomatizacionMui"
import JsonLd from "@/components/JsonLd"

// FAQ citable (GEO): las mismas objeciones que responde la página.
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Se puede contratar la automatización suelta, sin el pack Crecimiento?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. La automatización se contrata suelta, empezando por el proceso que más tiempo consume. El pack Crecimiento la incluye junto a SEO, conversión y el agente de ventas IA.",
      },
    },
    {
      "@type": "Question",
      name: "¿En qué se diferencia de conectar nodos en n8n?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La mayoría de agencias solo arrastran nodos y se quedan a medias en cuanto hay una regla de negocio real. Aquí la lógica vive en código propio (Node y Python) dentro del propio flujo, así que resuelve casos que un flujo de solo nodos no puede.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué pasa si un flujo de automatización falla?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Los flujos reintentan solos y, si no se resuelve, avisan al momento por Slack o WhatsApp. Te enteras al segundo, no al cierre de mes con un descuadre.",
      },
    },
    {
      "@type": "Question",
      name: "¿Dónde vive n8n y quién lo mantiene?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Self-hosted en tu infraestructura o en la nuestra, sin cuota por ejecución. Lo mantenemos nosotros en retainer y te dejamos el código, para que no dependas de nadie.",
      },
    },
    {
      "@type": "Question",
      name: "¿Se rompe si cambio de ERP o de plataforma?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No te atamos a un proveedor. Si cambias de ERP adaptamos los conectores sin rehacer todo, porque la lógica vive en código propio y no en una configuración cerrada.",
      },
    },
  ],
}

export default function AutomatizacionesPage() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <ThemeRegistry>
        <AutomatizacionMui />
      </ThemeRegistry>
    </>
  )
}
