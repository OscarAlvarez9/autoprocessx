import { notFound } from "next/navigation"
import { i18nAlternates } from "@/lib/i18n"
import type { Metadata } from "next"
import { allCaseSlugs, casePhoto, caseDescription, caseTitle, getCase, servicesFor } from "@/lib/casesEcom"
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
  const caso = getCase(slug, "ca")
  if (!caso) return {}
  const title = caseTitle(caso, "ca")
  const description = caseDescription(caso, "ca")
  return {
    title: { absolute: title },
    description,
    alternates: i18nAlternates(`/casos-de-exito/${caso.slug}`, "ca"),
    openGraph: {
      images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "SEOscar, agència d'ecommerce a Barcelona" }],
      title,
      description,
      type: "article",
      locale: "ca_ES",
      url: `${SITE_URL}/ca/casos-de-exito/${caso.slug}`,
    },
  }
}

export default async function CasoDetallePageCa({ params }: Props) {
  const { slug } = await params
  const caso = getCase(slug, "ca")
  if (!caso) notFound()

  const url = `${SITE_URL}/ca/casos-de-exito/${caso.slug}`
  // Mismo recorte que en castellano (unos 80 caracteres por palabra), con las
  // palabras huérfanas del catalán.
  const resumenCorto = (() => {
    const limpio = caso.summary.replace(/\s+/g, " ").trim()
    if (limpio.length <= 80) return limpio.replace(/\.$/, "")
    let corte = limpio.slice(0, 80)
    corte = corte.slice(0, corte.lastIndexOf(" "))
    const huerfanas = /\s+(?:i|o|de|del|dels|d'|la|el|els|les|l'|un|una|amb|en|per|que|sobre|a|al|als|seu|seva|seus|seves|[\d.,]+)$/i
    while (huerfanas.test(corte)) corte = corte.replace(huerfanas, "")
    return corte.replace(/[,;:.]$/, "")
  })()
  const headline = `${caso.client}: ${resumenCorto}`
  const deep = getCasoDeep(caso.slug, "ca")
  const servicio = servicesFor("ca").find((s) => s.key === caso.service)

  const cifras = deep?.kpis.length
    ? deep.kpis.flatMap((b) => b.items).map((k) => ({ label: k.label, value: k.value, note: k.note }))
    : caso.metrics.filter((m) => m.value).map((m) => ({ label: m.label, value: m.value as string, note: m.note }))

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${url}/#article`,
    headline,
    description: caso.summary,
    datePublished: caso.publishedAt,
    inLanguage: "ca",
    image: `${SITE_URL}${casePhoto(caso)}`,
    author: { "@id": ORG_ID },
    publisher: { "@id": ORG_ID },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    about: {
      "@type": "Service",
      name: servicio?.label ?? "Creixement ecommerce",
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
