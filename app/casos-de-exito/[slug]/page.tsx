import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { allCaseSlugs, casePhoto, getCase } from "@/lib/casesEcom"
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
  const headline = `${caso.client}: ${caso.sector.split("·")[0].trim()}`
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
      provider: { "@id": ORG_ID },
    },
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
