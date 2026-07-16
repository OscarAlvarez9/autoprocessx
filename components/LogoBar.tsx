"use client"

// Tira de autoridad JUSTO DEBAJO del hero — carrusel continuo (auto-scroll por
// requestAnimationFrame), monocromo y discreto. Se pausa al pasar el ratón y
// respeta prefers-reduced-motion. Paleta: tokens (base / ink / zinc).
//
// TODO Oscar: cuando subas los logos a /public/logos/ (totfinestra.png,
// offbeat.png, garciacerro.png…), pon USE_LOGOS = true y los que tengan `logo`
// se mostrarán como <Image> en grayscale → color al hover; el resto, texto.
import { useEffect, useRef } from "react"
import Image from "next/image"

const USE_LOGOS = false // ← activar cuando existan los archivos en /public/logos/
const SPEED = 0.6 // px por frame (~36px/s)

type Company = { name: string; logo: string | null }

const carouselCompanies: Company[] = [
  { name: "Totfinestra", logo: "/logos/totfinestra.png" },
  { name: "Offbeat", logo: "/logos/offbeat.png" },
  { name: "Garcia del Cerro", logo: "/logos/garciacerro.png" },
  { name: "GrowMyBiss", logo: null },
  { name: "Regálalo.io", logo: null },
  { name: "ControlTemp", logo: null },
  { name: "Diomento Homelift", logo: null },
  { name: "Salvador Mendoza", logo: null },
  { name: "Peritando", logo: null },
]

function Item({ c }: { c: Company }) {
  if (USE_LOGOS && c.logo) {
    return (
      <Image
        src={c.logo}
        alt={c.name}
        width={120}
        height={32}
        className="h-7 w-auto opacity-60 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0"
      />
    )
  }
  return (
    <span className="text-lg md:text-xl font-black tracking-tight text-zinc-400 hover:text-ink-900 transition-colors duration-300 whitespace-nowrap cursor-default">
      {c.name}
    </span>
  )
}

export default function LogoBar({ caption = "Empresas con las que he trabajado" }: { caption?: string | null }) {
  const trackRef = useRef<HTMLDivElement>(null)
  const paused = useRef(false)
  // Lista duplicada para un bucle continuo sin saltos.
  const loop = [...carouselCompanies, ...carouselCompanies]

  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    let raf = 0
    let x = 0
    const step = () => {
      if (!paused.current) {
        x -= SPEED
        const half = track.scrollWidth / 2
        if (half > 0 && -x >= half) x += half
        track.style.transform = `translateX(${x}px)`
      }
      raf = requestAnimationFrame(step)
    }
    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [])

  return (
    <section className="w-full bg-base border-b border-zinc-200 py-10 overflow-hidden">
      {caption && (
        <p className="mb-7 text-center text-xs uppercase tracking-[0.1em] text-zinc-400">{caption}</p>
      )}

      <div
        className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]"
        onMouseEnter={() => { paused.current = true }}
        onMouseLeave={() => { paused.current = false }}
      >
        <div ref={trackRef} className="flex w-max items-center will-change-transform">
          {loop.map((c, i) => (
            <div key={`${c.name}-${i}`} className="flex items-center justify-center px-8 shrink-0" aria-hidden={i >= carouselCompanies.length || undefined}>
              <Item c={c} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
