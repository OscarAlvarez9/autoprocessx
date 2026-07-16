import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ArrowRight, Check, ExternalLink, Search, Zap, Link as LinkIcon } from "lucide-react"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import Breadcrumbs from "@/components/Breadcrumbs"
import JsonLd from "@/components/JsonLd"
import { projectColor, type BlogPoint, type Project } from "@/lib/projects"
import { ORG_ID, SITE_URL } from "@/lib/seo"

const pointIcon: Record<BlogPoint["icon"], typeof Search> = {
  Search,
  Zap,
  Link: LinkIcon,
}

export default function ProjectDetail({ project: p }: { project: Project }) {
  const c = projectColor[p.color]

  const caseSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: p.title,
    description: p.summary,
    image: p.cover_image,
    url: `${SITE_URL}/casos-de-exito/${p.slug}`,
    author: { "@id": ORG_ID },
    publisher: { "@id": ORG_ID },
    about: p.client,
  }

  return (
    <main className="min-h-screen bg-[#FAFAFA] text-[#09090B] selection:bg-[#B4975A]/30">
      <Navigation />
      <JsonLd data={caseSchema} />

      {/* 1 · HERO */}
      <section className="relative pt-28 pb-12 md:pt-36 md:pb-16 border-b border-[#E4E4E7] overflow-hidden">
        <div className={`absolute top-0 right-0 w-[600px] h-[420px] ${c.bg} blur-[160px] rounded-full pointer-events-none`} aria-hidden />
        <div className="container relative z-10 px-6 mx-auto max-w-5xl">
          <Breadcrumbs items={[{ label: "Casos de éxito", href: "/casos-de-exito" }, { label: p.client }]} className="mb-8" />
          <Link href="/casos-de-exito" className="inline-flex items-center gap-1.5 font-mono text-xs text-zinc-500 hover:text-[#B4975A] transition-colors mb-8">
            <ArrowLeft className="h-3.5 w-3.5" aria-hidden /> Volver a Casos de éxito
          </Link>

          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 border text-[11px] font-bold uppercase tracking-wide ${c.text} ${c.border} ${c.bg}`}>
              <span className={`h-1.5 w-1.5 rounded-full ${c.dot}`} aria-hidden />
              {p.client}
            </span>
            {p.tags.map((t) => (
              <span key={t} className="inline-flex items-center rounded-full bg-white border border-[#E4E4E7] px-3 py-1 text-[10px] font-mono uppercase tracking-wide text-zinc-500">
                {t}
              </span>
            ))}
          </div>

          <h1 className="text-[clamp(2rem,5vw,3.5rem)] font-black tracking-tighter leading-[1.05] text-balance mb-5">{p.title}</h1>
          <p className="text-zinc-600 text-base md:text-lg leading-relaxed max-w-2xl mb-6">{p.summary}</p>
          <Link href={p.website} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-mono text-sm text-zinc-700 hover:text-[#B4975A] transition-colors">
            {p.website.replace(/^https?:\/\//, "")}
            <ExternalLink className="h-3.5 w-3.5" aria-hidden />
          </Link>

          <div className="relative aspect-[16/9] rounded-2xl overflow-hidden border border-[#E4E4E7] bg-zinc-100 mt-10">
            <Image src={p.cover_image} alt={`${p.client} — ${p.title}`} fill priority sizes="(max-width: 1024px) 100vw, 1024px" className="object-cover" />
          </div>
        </div>
      </section>

      {/* 2 · CONTEXTO Y DESAFÍO */}
      <section className="py-14 md:py-20 border-b border-[#E4E4E7]">
        <div className="container px-6 mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14">
          <div>
            <span className={`text-[11px] font-mono font-medium uppercase tracking-wide ${c.text}`}>El contexto</span>
            <p className="text-[#09090B] text-base md:text-lg leading-relaxed mt-4">{p.about.description}</p>
          </div>
          <div>
            <span className={`text-[11px] font-mono font-medium uppercase tracking-wide ${c.text}`}>El desafío</span>
            <p className="text-zinc-600 text-base md:text-lg leading-relaxed mt-4">{p.about.challenge}</p>
          </div>
        </div>
      </section>

      {/* 3 · ESTRATEGIA (ROADMAP) */}
      <section className="py-14 md:py-20 border-b border-[#E4E4E7]">
        <div className="container px-6 mx-auto max-w-5xl">
          <div className="mb-10 flex items-center gap-3">
            <span className={`text-[11px] font-mono font-medium uppercase tracking-wide ${c.text}`}>La estrategia</span>
            <div className="h-px flex-1 bg-[#E4E4E7]" />
          </div>
          <h2 className="text-2xl md:text-4xl font-black tracking-tighter leading-tight mb-10 max-w-3xl">{p.strategy.title}</h2>
          <ol className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
            {p.strategy.steps.map((step, i) => (
              <li key={i} className="relative rounded-2xl border border-[#E4E4E7] bg-white p-6">
                <span className={`font-mono text-2xl font-bold ${c.text}`}>{String(i + 1).padStart(2, "0")}</span>
                <h3 className="text-lg font-semibold tracking-tight mt-3 mb-2">{step.title}</h3>
                <p className="text-zinc-600 text-sm leading-relaxed">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 4 · WEB SHOWCASE */}
      {p.web_showcase && (
        <section className="py-14 md:py-20 border-b border-[#E4E4E7]">
          <div className="container px-6 mx-auto max-w-5xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
              <div>
                <span className={`text-[11px] font-mono font-medium uppercase tracking-wide ${c.text}`}>Web &amp; producto</span>
                <h2 className="text-2xl md:text-3xl font-black tracking-tighter leading-tight mt-3 mb-4">{p.web_showcase.title}</h2>
                <p className="text-zinc-600 text-base leading-relaxed mb-6">{p.web_showcase.description}</p>
                <ul className="space-y-3">
                  {p.web_showcase.features.map((f, i) => (
                    <li key={i} className="flex gap-3">
                      <span className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${c.bg} ${c.text}`}>
                        <Check className="h-3 w-3" aria-hidden />
                      </span>
                      <span className="text-[#09090B] text-sm leading-relaxed">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="grid grid-cols-1 gap-4">
                {p.web_showcase.images.map((img, i) => (
                  <div key={i} className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-[#E4E4E7] bg-zinc-100">
                    <Image src={img} alt={`${p.client} — captura ${i + 1}`} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 5 · ESTRATEGIA DE CONTENIDO (fondo oscuro) */}
      {p.blog_strategy && (
        <section className="py-16 md:py-24 bg-[#09090B] text-white">
          <div className="container px-6 mx-auto max-w-5xl">
            <span className={`text-[11px] font-mono font-medium uppercase tracking-wide ${c.text}`}>Estrategia de contenido</span>
            <h2 className="text-2xl md:text-4xl font-black tracking-tighter leading-tight mt-3 mb-4 max-w-3xl">{p.blog_strategy.title}</h2>
            <p className="text-white/60 text-base leading-relaxed max-w-2xl mb-12">{p.blog_strategy.description}</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
              {p.blog_strategy.points.map((pt, i) => {
                const Icon = pointIcon[pt.icon]
                return (
                  <div key={i} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                    <span className={`inline-flex h-10 w-10 items-center justify-center rounded-xl ${c.bg} ${c.text}`}>
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <h3 className="text-lg font-semibold tracking-tight mt-4 mb-2">{pt.title}</h3>
                    <p className="text-white/60 text-sm leading-relaxed">{pt.text}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      )}

      {/* 6 · TECH STACK + GALERÍA */}
      <section className="py-14 md:py-20 border-b border-[#E4E4E7]">
        <div className="container px-6 mx-auto max-w-5xl">
          <span className={`text-[11px] font-mono font-medium uppercase tracking-wide ${c.text}`}>Stack &amp; ejecución</span>
          <div className="flex flex-wrap gap-2 mt-5 mb-10">
            {p.tech_stack.map((t) => (
              <span key={t} className="inline-flex items-center rounded-lg bg-white border border-[#E4E4E7] px-3 py-1.5 text-sm font-mono text-zinc-700">
                {t}
              </span>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {p.company_images.map((img, i) => (
              <div key={i} className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-[#E4E4E7] bg-zinc-100">
                <Image src={img} alt={`${p.client} — galería ${i + 1}`} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7 · RESULTADOS */}
      <section className="py-14 md:py-20 border-b border-[#E4E4E7]">
        <div className="container px-6 mx-auto max-w-5xl">
          <div className="mb-10 flex items-center gap-3">
            <span className={`text-[11px] font-mono font-medium uppercase tracking-wide ${c.text}`}>Los resultados</span>
            <div className="h-px flex-1 bg-[#E4E4E7]" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 mb-10">
            {p.results.metrics.map((m, i) => (
              <div key={i} className="rounded-2xl border border-[#E4E4E7] bg-white p-7">
                <p className={`text-4xl md:text-5xl font-black tracking-tighter ${c.text}`}>{m.value}</p>
                <p className="text-[#09090B] font-semibold tracking-tight mt-3">{m.label}</p>
                <p className="text-zinc-500 text-sm leading-relaxed mt-1">{m.note}</p>
              </div>
            ))}
          </div>
          <p className="text-zinc-600 text-lg md:text-xl leading-relaxed max-w-3xl border-l-2 border-[#B4975A] pl-5 md:pl-6">
            {p.results.summary}
          </p>
        </div>
      </section>

      {/* 8 · CTA FINAL */}
      <section className="py-16 md:py-24">
        <div className="container px-6 mx-auto max-w-4xl">
          <div className="rounded-3xl border border-[#1f1f23] bg-[#09090B] text-white p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-4xl font-black tracking-tighter leading-tight mb-4 text-balance">
              ¿Listo para escribir tu <span className="text-[#B4975A]">caso de éxito</span>?
            </h2>
            <p className="text-white/60 text-base leading-relaxed max-w-xl mx-auto mb-8">
              Analizamos tu proyecto y te decimos, sin compromiso, qué podemos conseguir y cómo.
            </p>
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 h-12 px-6 rounded-xl bg-[#B4975A] text-[#09090B] text-sm font-bold uppercase tracking-wide hover:bg-[#a3854a] transition-colors"
            >
              Solicitar Auditoría Gratuita
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
