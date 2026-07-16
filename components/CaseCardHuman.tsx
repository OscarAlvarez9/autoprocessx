import Link from "next/link"
import { ArrowRight } from "lucide-react"

export interface CaseCardHumanData {
  slug: string
  client: string
  sector: string
  title: string
  desc: string
  /* TODO Oscar: imagen real del caso (next/image). De momento placeholder visual. */
  image?: string
  /* Cifras YA presentes en el código (no inventadas). */
  metrics: { label: string; value: string }[]
}

/*
 * Variante "human" de la tarjeta de caso: imagen (placeholder) con chips de
 * métrica flotando encima (estilo +142%/10x). Cifras = las que decida Oscar.
 */
export default function CaseCardHuman({ caso }: { caso: CaseCardHumanData }) {
  return (
    <Link
      href={`/casos-de-exito/${caso.slug}`}
      className="group flex flex-col rounded-2xl border border-[#E4E4E7] bg-white overflow-hidden hover:border-primary transition-colors"
    >
      {/* Media + chips */}
      <div className="relative aspect-[16/10] bg-zinc-100 border-b border-[#E4E4E7] overflow-hidden">
        {/* TODO Oscar: foto real del caso (next/image con width/height). Placeholder mientras: */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-mono text-xs uppercase tracking-wide text-zinc-400">{caso.client}</span>
        </div>

        {/* Chips de métrica flotando (cifras del código, no inventadas) */}
        <div className="absolute left-3 bottom-3 flex flex-wrap gap-2">
          {caso.metrics.slice(0, 2).map((m) => (
            <span
              key={m.label}
              className="inline-flex items-baseline gap-1.5 rounded-lg bg-[#09090B]/90 backdrop-blur-sm px-2.5 py-1.5 border border-white/10"
            >
              <span className="font-mono text-sm font-bold text-primary tabular-nums">{m.value}</span>
              <span className="text-[9px] font-medium uppercase tracking-wide text-white/60">{m.label}</span>
            </span>
          ))}
        </div>
        <div className="absolute right-3 top-3 px-2.5 py-1 rounded-full bg-white/90 border border-[#E4E4E7]">
          <span className="text-[9px] font-mono uppercase tracking-wide text-zinc-500">{caso.sector}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-lg font-bold tracking-tight text-[#09090B] mb-2 group-hover:text-primary transition-colors">
          {caso.title}
        </h3>
        <p className="text-zinc-600 text-sm leading-relaxed line-clamp-3 mb-5">{caso.desc}</p>
        <span className="mt-auto inline-flex items-center gap-1.5 font-mono text-xs text-zinc-500 group-hover:text-primary transition-colors">
          Ver caso completo
          <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" aria-hidden />
        </span>
      </div>
    </Link>
  )
}
