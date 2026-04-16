import { notFound } from "next/navigation"
import { caseStudies } from "@/lib/cases"
import CaseSpecsContent from "@/components/CaseSpecsContent"
import type { Metadata } from "next"

interface Props {
    params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
    return caseStudies.map((c) => ({ slug: c.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params
    const caso = caseStudies.find((c) => c.slug === slug)
    if (!caso) return {}
    return {
        title: `Specs: ${caso.title} — AutoProcessX`,
        description: `Especificaciones técnicas y arquitectura de la solución desplegada para ${caso.client}.`,
        alternates: {
            canonical: `https://www.autoprocessx.com/casos-de-exito/${slug}`,
        },
    }
}

export default async function CasoSpecs({ params }: Props) {
    const { slug } = await params
    const caso = caseStudies.find((c) => c.slug === slug)
    if (!caso) notFound()

    return <CaseSpecsContent caso={caso} />
}
