import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { allCaseSlugs, casePhoto, getCase, SERVICES } from "@/lib/casesEcom"
import { getCasoDeep } from "@/lib/casesDeep"
import { ORG_ID, SITE_URL } from "@/lib/seo"
import JsonLd from "@/components/JsonLd"
import ThemeRegistry from "@/components/mui/ThemeRegistry"
import CasoDetalleMui from "@/components/mui/CasoDetalleMui"

interface Props {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return allCaseSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const caso = getCase(slug)
  if (!caso) return {}
  const title = `Caso ${caso.client} · ${caso.platform} | SEOscar`
  return {
    title: `Caso ${caso.client} · ${caso.sector.split(" · ")[0]}`,
    description: caso.summary,
    alternates: { canonical: `${SITE_URL}/casos-de-exito/${caso.slug}` },
    openGraph: {
            images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "SEOscar, agencia de ecommerce en Barcelona" }],
      title,
      description: caso.summary,
      type: "article",
      url: `${SITE_URL}/casos-de-exito/${caso.slug}`,
    },
  }
}

export default async function CasoDetallePage({ params }: Props) {
  const { slug } = await params
  const caso = getCase(slug)
  if (!caso) notFound()

  const url = `${SITE_URL}/casos-de-exito/${caso.slug}`
  // Schema recomienda titular corto. Recortamos el resumen por palabra hasta
  // unos 80 caracteres, que da un titular informativo en vez del sector suelto.
  const resumenCorto = (() => {
    const limpio = caso.summary.replace(/\s+/g, " ").trim()
    if (limpio.length <= 80) return limpio.replace(/\.$/, "")
    let corte = limpio.slice(0, 80)
    corte = corte.slice(0, corte.lastIndexOf(" "))
    // Sin palabras huérfanas al final (artículos, preposiciones, una cifra suelta).
    const huerfanas = /\s+(?:y|o|de|del|la|el|los|las|un|una|con|en|para|que|sobre|a|al|su|sus|[\d.,]+)$/i
    while (huerfanas.test(corte)) corte = corte.replace(huerfanas, "")
    return corte.replace(/[,;:.]$/, "")
  })()
  const headline = `${caso.client}: ${resumenCorto}`
  const deep = getCasoDeep(caso.slug)
  const servicio = SERVICES.find((s) => s.key === caso.service)

  // Las cifras del caso, en formato que una máquina pueda leer. Un modelo que
  // cita esta página necesita poder sacar el dato sin interpretar el maquetado.
  const cifras = [
    ...caso.metrics.filter((m) => m.value).map((m) => ({ label: m.label, value: m.value as string, note: m.note })),
    ...(deep?.kpis.flatMap((b) => b.items) ?? []).map((k) => ({ label: k.label, value: k.value, note: k.note })),
  ]

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${url}/#article`,
    headline,
    description: caso.summary,
    datePublished: caso.publishedAt,
    inLanguage: "es-ES",
    image: `${SITE_URL}${casePhoto(caso)}`,
    author: { "@id": ORG_ID },
    publisher: { "@id": ORG_ID },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    about: {
      "@type": "Service",
      name: servicio?.label ?? "Crecimiento ecommerce",
      serviceType: servicio?.label,
      description: servicio?.blurb,
      provider: { "@id": ORG_ID },
      areaServed: "ES",
    },
    keywords: caso.stack.join(", "),
    articleSection: servicio?.label,
    mentions: caso.stack.map((tecnologia) => ({
      "@type": "Thing",
      name: tecnologia,
    })),
    ...(cifras.length > 0 && {
      // Resultados como propiedades adicionales: nombre, valor y matiz.
      additionalProperty: cifras.map((c) => ({
        "@type": "PropertyValue",
        name: c.label,
        value: c.value,
        ...(c.note && { description: c.note }),
      })),
    }),
  }

  return (
    <>
      <JsonLd data={articleSchema} />
      <ThemeRegistry>
        <CasoDetalleMui caso={caso} />
      </ThemeRegistry>
    </>
  )
}
