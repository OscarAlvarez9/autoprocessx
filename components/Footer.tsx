"use client"

import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="py-24 bg-[#05070F] border-t border-white/5 text-white/40">
      <div className="container px-6 mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-12 mb-20">
          <Link href="/" className="flex items-center gap-3 group cursor-pointer">
            <div className="relative w-12 h-12 overflow-hidden rounded-xl border border-white/10 group-hover:border-accent/40 transition-all bg-[#0F1424]">
              <div className="absolute inset-0 bg-accent/20 blur-md opacity-0 group-hover:opacity-60 transition-opacity duration-500 -z-10" />
              <Image
                src="/logo-square.png"
                alt="AutoProcessX"
                fill
                sizes="48px"
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="flex items-center">
              <span className="text-2xl md:text-3xl font-black tracking-tighter text-white uppercase italic">
                AutoProcess
              </span>
              <span className="text-2xl md:text-3xl font-black tracking-tighter text-accent ml-0.5 group-hover:scale-110 transition-transform origin-left uppercase italic">
                X
              </span>
            </div>
          </Link>
          
          <div className="flex flex-wrap justify-center gap-8 md:gap-12 text-[10px] font-black uppercase tracking-[0.3em]">
            <Link href="/sobre-nosotros" className="hover:text-accent transition-colors">Engineering</Link>
            <Link href="/tecnologia" className="hover:text-accent transition-colors">Stack</Link>
            <Link href="/casos-de-exito" className="hover:text-accent transition-colors">Registry</Link>
            <Link href="/blog" className="hover:text-accent transition-colors">Blog</Link>
            <Link href="/contacto" className="hover:text-accent transition-colors">Contacto</Link>
          </div>

          <div className="flex gap-6">
            <a 
              href="https://www.linkedin.com/in/oscar-alvarez-romani-7882302b3" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center text-white/40 hover:border-accent/50 hover:bg-accent/10 hover:text-accent transition-all cursor-pointer group/sm"
              aria-label="LinkedIn"
            >
              <svg 
                viewBox="0 0 24 24" 
                className="w-5 h-5 fill-current" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
          </div>
        </div>
        
        <div className="text-center text-[9px] font-black uppercase tracking-[0.4em] border-t border-white/5 pt-12 opacity-20 leading-relaxed italic">
          © {new Date().getFullYear()} AutoProcessX Deployment Suite — Enterprise-Grade Infrastructure in Barcelona
        </div>
      </div>
    </footer>
  )
}
