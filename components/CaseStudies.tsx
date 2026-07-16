"use client"

import { motion } from "framer-motion"
import { ArrowUpRight, Globe } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

import { caseStudies } from "@/lib/cases"
import { projects } from "@/lib/projects"
import DarkBackground from "@/components/DarkBackground"

type Item = { slug: string; client: string; title: string; metric: string; image: string; isPhoto: boolean }

const fromProject = (slug: string): Item | null => {
  const p = projects.find((x) => x.slug === slug)
  if (!p) return null
  const m = p.results.metrics[0]
  return { slug: p.slug, client: p.client, title: p.title, metric: m ? `${m.value} · ${m.label}` : "", image: p.cover_image, isPhoto: true }
}
const fromCase = (slug: string): Item | null => {
  const c = caseStudies.find((x) => x.slug === slug)
  if (!c) return null
  const isPhoto = c.logo.includes("platform") || c.logo.includes("dashboard")
  return { slug: c.slug, client: c.client, title: c.title, metric: c.metric, image: c.logo, isPhoto }
}

const ecommerce = ["marea-es", "garcia-del-cerro"].map(fromProject).filter(Boolean) as Item[]
const propia = ["business-suite-ia-plataforma-corporativa", "opoai-plataforma-estudio-oposiciones"].map(fromCase).filter(Boolean) as Item[]
const automatizaciones = ["pelican-catchy-infraestructura-ia"].map(fromCase).filter(Boolean) as Item[]

function CaseCard({ item }: { item: Item }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group flex flex-row items-stretch h-full rounded-2xl overflow-hidden bg-[#FFFFFF] border border-[#E4E4E7] hover:border-oro-400/50 transition-all"
    >
      <div className="relative shrink-0 w-24 md:w-28 overflow-hidden bg-zinc-100">
        <Image
          src={item.image}
          alt={`${item.client} — ${item.title}`}
          fill
          sizes="112px"
          className={`${item.isPhoto ? "object-cover" : "object-contain p-3 bg-white"} group-hover:scale-105 transition-transform duration-500 ease-out`}
        />
      </div>
      <div className="flex flex-col flex-1 min-w-0 p-4">
        <span className="text-[9px] font-black uppercase tracking-[0.2em] text-zinc-500 truncate">{item.client}</span>
        <h3 className="text-sm font-black tracking-tight leading-tight line-clamp-1 mt-1 text-ink-900">{item.title}</h3>
        {item.metric && <p className="font-mono text-xs font-bold tracking-tight text-oro-600 mt-1 mb-1">{item.metric}</p>}
        <Link
          href={`/casos-de-exito/${item.slug}`}
          className="mt-auto inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-[0.25em] text-ink-600 hover:text-ink-700 transition-colors"
        >
          Ver caso
          <ArrowUpRight className="h-3 w-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </Link>
      </div>
    </motion.div>
  )
}

function Group({ label, items }: { label: string; items: Item[] }) {
  return (
    <div>
      <div className="flex items-center gap-2.5 mb-4">
        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-oro-600">{label}</span>
        <div className="flex-1 h-[1px] bg-gradient-to-r from-oro-400/40 to-transparent" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {items.map((item) => (
          <CaseCard key={item.slug} item={item} />
        ))}
      </div>
    </div>
  )
}

export default function CaseStudies() {
  return (
    <section id="casos" className="py-20 md:py-24 text-ink-900 overflow-hidden relative">
      <DarkBackground accent="neutral" secondaryAccent="accent" intensity="soft" />

      <div className="container relative z-10 px-6 mx-auto max-w-6xl">
        {/* Header */}
        <div className="max-w-2xl mb-10 md:mb-12">
          <span className="text-[11px] font-mono font-medium uppercase tracking-wide text-oro-600">Casos de éxito</span>
          <h2 className="text-3xl md:text-5xl font-black text-ink-900 tracking-tighter leading-[1.05] mt-3 mb-3">
            Proyectos reales, en producción, <span className="text-oro-500">sobre stacks reales.</span>
          </h2>
          <p className="text-zinc-600 text-sm md:text-base leading-relaxed">
            Tiendas online creciendo sobre su propia plataforma — sin migraciones forzadas.
          </p>
        </div>

        <div className="space-y-10 md:space-y-12">
          <Group label="E-commerce" items={ecommerce} />
          <Group label="Producción propia" items={propia} />
          <Group label="Automatizaciones" items={automatizaciones} />
        </div>

        {/* Señal de credibilidad */}
        <p className="text-zinc-500 text-sm leading-relaxed mt-8 max-w-2xl">
          Trabajo sobre <span className="text-ink-900 font-semibold">Magento, Shopify y WooCommerce</span>. Me adapto a lo que ya tienes — no te obligo a rehacer tu tienda.
        </p>

        {/* Registry CTA */}
        <div className="mt-12 md:mt-16 text-center">
          <Link href="/casos-de-exito">
            <Button className="h-12 px-7 rounded-xl bg-ink-600 text-white hover:bg-ink-700 text-sm font-black tracking-wide shadow-lg shadow-ink-900/20 transition-all active:scale-95">
              <span className="flex items-center gap-2">
                Ver todos los casos
                <Globe className="h-4 w-4" />
              </span>
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
