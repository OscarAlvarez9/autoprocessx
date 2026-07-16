"use client"

import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="py-20 md:py-24 bg-ink-900 border-t border-white/10 text-white/60">
      <div className="container px-6 mx-auto">
        {/* CTA diagnóstico */}
        <div className="mb-16 flex flex-col sm:flex-row items-center justify-between gap-6 rounded-2xl border border-white/10 bg-white/[0.04] p-6 md:p-8">
          <div>
            <p className="text-white font-black text-lg md:text-xl tracking-tight">¿Hacemos crecer tu ecommerce?</p>
            <p className="text-white/55 text-sm mt-1">Empieza por el diagnóstico: un plan claro de tráfico, conversión y automatización.</p>
          </div>
          <Link
            href="/contacto"
            className="shrink-0 inline-flex items-center justify-center h-12 px-7 rounded-xl bg-oro-400 text-ink-900 hover:bg-oro-500 text-[10px] font-black uppercase tracking-[0.25em] transition-colors"
          >
            Solicita tu diagnóstico
          </Link>
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-center gap-12 mb-16">
          <Link href="/" className="flex items-center gap-3 group cursor-pointer">
            <div className="relative w-12 h-12 overflow-hidden rounded-xl border border-white/10 group-hover:border-oro-400/40 transition-all bg-white/5">
              <Image
                src="/logo-square.png"
                alt="SEOscar"
                fill
                sizes="48px"
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="flex items-center">
              <span className="text-2xl md:text-3xl font-black tracking-tighter text-white uppercase italic">
                AutoProcess
              </span>
              <span className="text-2xl md:text-3xl font-black tracking-tighter text-oro-400 ml-0.5 group-hover:scale-110 transition-transform origin-left uppercase italic">
                X
              </span>
            </div>
          </Link>

          <div className="flex flex-wrap justify-center gap-8 md:gap-12 text-[10px] font-black uppercase tracking-[0.3em]">
            <Link href="/sobre-nosotros" className="hover:text-oro-400 transition-colors">Equipo</Link>
            <Link href="/tecnologia" className="hover:text-oro-400 transition-colors">Tecnología</Link>
            <Link href="/casos-de-exito" className="hover:text-oro-400 transition-colors">Casos</Link>
            <Link href="/casos-de-exito/opoai-plataforma-estudio-oposiciones" className="hover:text-oro-400 transition-colors">OpoAI</Link>
            <Link href="/blog" className="hover:text-oro-400 transition-colors">Blog</Link>
            <Link href="/contacto" className="hover:text-oro-400 transition-colors">Contacto</Link>
          </div>

          <div className="flex gap-6">
            <a
              href="https://www.linkedin.com/in/oscar-alvarez-romani-7882302b3"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:border-oro-400/50 hover:bg-oro-400/10 hover:text-oro-400 transition-all cursor-pointer"
              aria-label="LinkedIn"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 pt-10 flex flex-col items-center gap-6">
          <div className="flex flex-wrap justify-center gap-6 md:gap-8 text-[10px] font-black uppercase tracking-[0.3em]">
            <Link href="/aviso-legal" className="hover:text-oro-400 transition-colors">Aviso legal</Link>
            <Link href="/privacidad" className="hover:text-oro-400 transition-colors">Privacidad</Link>
            <Link href="/cookies" className="hover:text-oro-400 transition-colors">Cookies</Link>
          </div>
          <div className="text-center text-[9px] font-black uppercase tracking-[0.4em] text-white/25 leading-relaxed italic">
            © {new Date().getFullYear()} SEOscar · Sistemas de IA para ecommerce · Barcelona
          </div>
        </div>
      </div>
    </footer>
  )
}
