import Link from "next/link"
import JsonLd from "@/components/JsonLd"
import { ORG_ID, SITE_URL } from "@/lib/seo"

/*
 * Bloque Founder — presencia humana / E-E-A-T. Estilo editorial claro (no card
 * oscura, sin glow). TODO Oscar: foto real, nombre completo y cita en 1ª persona.
 */

// TODO Oscar: confirmar nombre completo y cargo exactos.
const FOUNDER = {
  name: "Óscar Álvarez",
  role: "Fundador · SEO, IA y ecommerce",
  linkedin: "https://www.linkedin.com/in/oscar-alvarez-romani-7882302b3",
}

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${SITE_URL}/#founder`,
  name: FOUNDER.name,
  jobTitle: "Fundador e ingeniero",
  worksFor: { "@id": ORG_ID },
  sameAs: [FOUNDER.linkedin],
}

export default function FounderBlock({ className = "" }: { className?: string }) {
  return (
    <section className={`py-16 md:py-24 bg-base ${className}`}>
      <JsonLd data={personSchema} />
      <div className="container px-6 mx-auto max-w-5xl">
        <div className="mb-8 flex items-center gap-3">
          <span className="text-[11px] font-mono font-medium uppercase tracking-wide text-oro-600">Quién está detrás</span>
          <div className="h-px flex-1 bg-[#E4E4E7]" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-8 md:gap-12 items-center">
          {/* Foto — TODO Oscar: sustituir el avatar por foto real (next/image, alt="Óscar Álvarez, fundador de SEOscar") */}
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-[#E4E4E7] bg-zinc-100">
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-6xl font-black tracking-tight text-zinc-300">ÓA</span>
            </div>
            <span className="absolute bottom-3 left-3 font-mono text-[10px] uppercase tracking-wide text-zinc-400">{/* TODO Oscar: foto */}Foto pendiente</span>
          </div>

          {/* Copy */}
          <div>
            <blockquote className="border-l-2 border-oro-400 pl-5 md:pl-6">
              <p className="text-xl md:text-2xl font-semibold tracking-tight leading-snug text-ink-900">
                <span className="text-oro-400" aria-hidden>«</span>No vendo humo de IA. Construyo los mismos sistemas que uso en mis propios productos.<span className="text-oro-400" aria-hidden>»</span>
              </p>
            </blockquote>

            <p className="text-zinc-600 text-base leading-relaxed mt-6">
              Llevo 4 años haciendo crecer ecommerce como especialista en SEO y, desde la llegada de la IA, construyendo agentes y automatización que funcionan en producción. Máster en Machine Learning y en Big Data. He gestionado tiendas en Magento operando en +5 países, montado una farmacia entera en Shopify, y construido OpoAI, una plataforma de IA que uso a diario. Cuando trabajas conmigo, tratas directamente con quien ejecuta.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-[#E4E4E7]">
              <div>
                <p className="font-bold tracking-tight text-ink-900">{FOUNDER.name}</p>
                <p className="text-sm text-zinc-500 font-mono">{FOUNDER.role}</p>
              </div>
              <Link
                href={FOUNDER.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 h-10 px-4 rounded-xl border border-[#E4E4E7] bg-white hover:border-ink-600/40 hover:text-ink-600 text-zinc-700 text-xs font-bold uppercase tracking-[0.15em] transition-colors"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
                LinkedIn
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
