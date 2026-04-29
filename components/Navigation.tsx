"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { X, Menu, ChevronDown, Activity } from "lucide-react"

import { useContactDrawer } from "@/context/ContactDrawerContext"

const navLinks = [
  {
    label: "Sistemas",
    children: [
      { href: "/servicios/automatizaciones", label: "Automatizaciones IA", sub: "Infraestructura completa y agentes autónomos." },
      { href: "/servicios/aplicaciones-ia", label: "Aplicaciones IA (RAG)", sub: "Entrenamiento con documentos propios." },
      { href: "/servicios/ai-chatbot", label: "AI Chatbot", sub: "Chat online para web y WhatsApp 24/7." },
    ],
  },
  { label: "Registro", href: "/casos-de-exito" },
  { label: "Stack", href: "/tecnologia" },
  { label: "Blog", href: "/blog" },
  { label: "Firma", href: "/sobre-nosotros" },
]

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const { openDrawer } = useContactDrawer()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [mobileOpen])

  const closeMobile = () => {
    setMobileOpen(false)
    setServicesOpen(false)
  }

  return (
    <>
      <header
        className={`fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-700 w-[calc(100%-2rem)] max-w-7xl ${
          scrolled ? "top-4" : "top-8"
        }`}
      >
        <div
          className={`
            mx-auto flex items-center justify-between px-8 py-3
            rounded-2xl border border-white/10
            bg-[#0F1424]/70 backdrop-blur-3xl
            transition-all duration-700
            ${scrolled ? "shadow-[0_8px_30px_-12px_rgba(251,191,36,0.25)] border-accent/20 bg-[#0F1424]/90" : ""}
          `}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group shrink-0" onClick={closeMobile}>
            <div className="relative w-10 h-10 overflow-hidden rounded-xl border border-white/10 group-hover:border-accent/50 transition-all bg-[#0F1424]">
              <Image
                src="/logo-square.png"
                alt="AutoProcessX"
                fill
                sizes="40px"
                priority
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute -inset-1 bg-accent/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-black tracking-tight text-white uppercase italic leading-none">AutoProcess<span className="text-accent ml-0.5">X</span></span>
              <span className="text-[7px] font-black tracking-[0.4em] text-white/30 uppercase mt-1">Platform Engineering</span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-10 text-[10px] font-black uppercase tracking-[0.2em] text-white/60">
            <div className="relative group">
              <button className="hover:text-accent transition-colors flex items-center gap-2 uppercase tracking-[0.3em]">
                Sistemas
                <ChevronDown className="w-3 h-3 text-accent group-hover:text-accent transition-colors" />
              </button>
              <div className="absolute top-full -left-10 pt-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
                <div className="bg-[#05070F] border border-white/10 rounded-[32px] p-2 w-80 shadow-[0_0_50px_-12px_rgba(0,0,0,0.5)] backdrop-blur-3xl">
                  {navLinks[0].children!.map((item) => (
                    <Link key={item.href} href={item.href} className="block p-4 hover:bg-white/[0.03] rounded-[24px] transition-all group/item border border-transparent hover:border-white/5">
                      <p className="text-white font-black text-[10px] tracking-[0.2em] mb-1 group-hover/item:text-accent transition-colors uppercase italic">{item.label}</p>
                      <p className="text-[9px] text-white/30 normal-case leading-tight font-medium italic">{item.sub}</p>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            {navLinks.slice(1).map((link) => (
              <Link key={link.href} href={link.href!} className="hover:text-accent transition-colors tracking-[0.3em]">{link.label}</Link>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full bg-[#0F1424] border border-white/5">
                <Activity className="h-3 w-3 text-accent animate-pulse" />
                <span className="text-[9px] font-black text-white/40 uppercase tracking-[0.2em] italic">Live Status</span>
            </div>

            <Button
              onClick={() => { openDrawer(); closeMobile() }}
              className="hidden sm:flex bg-white text-black hover:bg-accent h-12 rounded-xl px-10 text-[9px] font-black uppercase tracking-[0.3em] transition-all hover:scale-105 active:scale-95 shadow-2xl"
            >
              Contactar
            </Button>

            {/* Hamburger button — mobile only */}
            <button
              onClick={() => setMobileOpen((v) => !v)}
              aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
              className="lg:hidden flex items-center justify-center w-12 h-12 rounded-xl bg-[#0F1424] text-white border border-white/5 transition-all active:scale-95"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="fixed inset-0 bg-black/90 backdrop-blur-2xl z-[60] lg:hidden"
              onClick={closeMobile}
            />

            {/* Panel */}
            <motion.div
              key="panel"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="fixed top-0 right-0 bottom-0 w-full md:w-[450px] z-[70] lg:hidden bg-[#05070F] border-l border-white/5 pt-32 pb-12 px-10 flex flex-col"
            >
              <div className="absolute top-10 left-10 flex items-center gap-3">
                 <div className="relative w-8 h-8 overflow-hidden rounded-lg border border-white/10 bg-[#0F1424]">
                    <Image src="/logo-square.png" alt="AutoProcessX" fill sizes="32px" className="object-cover" />
                 </div>
                 <span className="text-xl font-black italic uppercase text-white">Registry Access</span>
              </div>

              <button
                onClick={closeMobile}
                className="absolute top-8 right-8 flex items-center justify-center w-14 h-14 rounded-2xl bg-[#0F1424] text-white border border-white/5"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Nav Items */}
              <nav className="flex flex-col gap-2 mt-12">
                <div>
                  <button
                    onClick={() => setServicesOpen((v) => !v)}
                    className="w-full flex items-center justify-between py-6 text-2xl font-black uppercase tracking-tighter text-white border-b border-white/5 italic"
                  >
                    Sistemas
                    <motion.div animate={{ rotate: servicesOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
                      <ChevronDown className="w-6 h-6 text-accent" />
                    </motion.div>
                  </button>
                  <AnimatePresence>
                    {servicesOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        className="overflow-hidden"
                      >
                        <div className="py-4 flex flex-col gap-2 pl-6">
                          {navLinks[0].children!.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              onClick={closeMobile}
                              className="block py-4 border-l-2 border-white/5 pl-6 hover:border-accent group"
                            >
                              <p className="text-white font-black text-[11px] uppercase tracking-widest group-hover:text-accent transition-colors">{item.label}</p>
                              <p className="text-[10px] text-white/30 mt-1 italic leading-tight">{item.sub}</p>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {[
                  { href: "/casos-de-exito", label: "Registro de Despliegue" },
                  { href: "/tecnologia", label: "Stack Tecnológico" },
                  { href: "/blog", label: "Blog" },
                  { href: "/sobre-nosotros", label: "Sobre la Firma" },
                ].map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={closeMobile}
                    className="py-6 text-2xl font-black uppercase tracking-tighter text-white border-b border-white/5 hover:text-accent transition-colors italic text-left"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              <div className="mt-auto">
                <Button
                  onClick={() => { openDrawer(); closeMobile() }}
                  className="w-full bg-accent text-black hover:bg-white text-xs font-black uppercase tracking-[0.3em] rounded-2xl h-20 shadow-2xl transition-all active:scale-95"
                >
                  Iniciar Protocolo
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
