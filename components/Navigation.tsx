"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { X, Menu, ChevronDown } from "lucide-react"

import { useContactDrawer } from "@/context/ContactDrawerContext"

const navLinks = [
  {
    label: "Servicios",
    children: [
      { href: "/servicios/automatizaciones", label: "Automatizaciones IA", sub: "Infraestructura completa y agentes autónomos." },
      { href: "/servicios/aplicaciones-ia", label: "Aplicaciones IA (RAG)", sub: "Entrenamiento con documentos propios." },
      { href: "/servicios/ai-chatbot", label: "AI Chatbot", sub: "Chat online para web y WhatsApp 24/7." },
    ],
  },
  { label: "Casos", href: "/casos-de-exito" },
  { label: "Stack", href: "/tecnologia" },
  { label: "Empresa", href: "/sobre-nosotros" },
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
        className={`fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-500 w-[calc(100%-1.5rem)] max-w-6xl ${
          scrolled ? "top-3" : "top-5"
        }`}
      >
        <div
          className={`
            mx-auto flex items-center justify-between px-4 sm:px-6 py-2.5 
            rounded-full border border-white/40 
            bg-background/70 backdrop-blur-xl
            shadow-[0_8px_32px_0_rgba(0,0,0,0.05)]
            transition-all duration-500
            ${scrolled ? "bg-background/90 shadow-lg border-white/60" : ""}
          `}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group shrink-0" onClick={closeMobile}>
            <div className="relative w-8 h-8 flex items-center justify-center">
              <div className="absolute inset-0 bg-primary/20 rounded-lg blur-md group-hover:bg-primary/30 transition-all" />
              <svg className="w-6 h-6 text-primary relative z-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 4L4 12L12 20L20 12L12 4Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 9L9 12L12 15L15 12L12 9Z" fill="currentColor"/>
              </svg>
            </div>
            <div className="flex items-center">
              <span className="text-xl font-black tracking-tight text-foreground">AutoProcess</span>
              <span className="text-xl font-black tracking-tight text-primary ml-0.5 group-hover:scale-110 inline-block transition-transform origin-left">X</span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6 text-[11px] font-bold uppercase tracking-wider text-foreground/80">
            <div className="relative group">
              <button className="hover:text-primary transition-colors flex items-center gap-1">
                Servicios
                <ChevronDown className="w-3 h-3 mt-0.5" />
              </button>
              <div className="absolute top-full -left-4 pt-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
                <div className="bg-background/95 backdrop-blur-xl border border-muted rounded-3xl p-2 w-64 shadow-2xl">
                  {navLinks[0].children!.map((item) => (
                    <Link key={item.href} href={item.href} className="block p-4 hover:bg-muted rounded-2xl transition-colors group/item">
                      <p className="text-foreground font-bold text-[11px] mb-1 group-hover/item:text-primary transition-colors uppercase">{item.label}</p>
                      <p className="text-[10px] text-foreground/40 normal-case leading-relaxed font-normal">{item.sub}</p>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <Link href="/casos-de-exito" className="hover:text-primary transition-colors">Casos</Link>
            <Link href="/tecnologia" className="hover:text-primary transition-colors">Stack</Link>
            <Link href="/sobre-nosotros" className="hover:text-primary transition-colors">Empresa</Link>
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-2">
            <Button
              onClick={() => { openDrawer(); closeMobile() }}
              className="hidden sm:flex bg-primary hover:bg-primary/90 text-[10px] font-black uppercase tracking-widest text-white rounded-full px-5 py-5 shadow-lg shadow-primary/20 transition-all hover:scale-105 active:scale-95"
            >
              Contactar
            </Button>

            {/* Hamburger button — mobile only */}
            <button
              onClick={() => setMobileOpen((v) => !v)}
              aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
              className="md:hidden flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary transition-all active:scale-95"
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
              transition={{ duration: 0.25 }}
              className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 md:hidden"
              onClick={closeMobile}
            />

            {/* Panel */}
            <motion.div
              key="panel"
              initial={{ opacity: 0, y: -20, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.97 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="fixed top-0 left-0 right-0 z-50 md:hidden bg-background/98 backdrop-blur-2xl border-b border-border shadow-2xl pt-24 pb-8 px-6 overflow-y-auto max-h-screen"
            >
              {/* Logo close row */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-[calc(100%-1.5rem)] flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 group" onClick={closeMobile}>
                  <div className="relative w-8 h-8 flex items-center justify-center">
                    <div className="absolute inset-0 bg-primary/20 rounded-lg blur-md" />
                    <svg className="w-6 h-6 text-primary relative z-10" viewBox="0 0 24 24" fill="none">
                      <path d="M12 4L4 12L12 20L20 12L12 4Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 9L9 12L12 15L15 12L12 9Z" fill="currentColor"/>
                    </svg>
                  </div>
                  <span className="text-xl font-black tracking-tight text-foreground">AutoProcess<span className="text-primary">X</span></span>
                </Link>
                <button
                  onClick={closeMobile}
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Nav Items */}
              <nav className="flex flex-col gap-1">
                {/* Servicios accordion */}
                <div>
                  <button
                    onClick={() => setServicesOpen((v) => !v)}
                    className="w-full flex items-center justify-between py-4 px-2 text-base font-black uppercase tracking-widest text-foreground border-b border-border/50"
                  >
                    Servicios
                    <motion.div animate={{ rotate: servicesOpen ? 180 : 0 }} transition={{ duration: 0.25 }}>
                      <ChevronDown className="w-4 h-4 text-primary" />
                    </motion.div>
                  </button>
                  <AnimatePresence>
                    {servicesOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <div className="py-2 pl-4 flex flex-col gap-1">
                          {navLinks[0].children!.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              onClick={closeMobile}
                              className="block py-3 px-3 rounded-2xl hover:bg-muted active:bg-muted transition-colors"
                            >
                              <p className="text-foreground font-bold text-[11px] uppercase tracking-widest">{item.label}</p>
                              <p className="text-[10px] text-foreground/40 mt-0.5">{item.sub}</p>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {[
                  { href: "/casos-de-exito", label: "Casos de Éxito" },
                  { href: "/tecnologia", label: "Stack Tecnológico" },
                  { href: "/sobre-nosotros", label: "Empresa" },
                ].map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={closeMobile}
                    className="py-4 px-2 text-base font-black uppercase tracking-widest text-foreground border-b border-border/50 hover:text-primary active:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              {/* CTA */}
              <div className="mt-8">
                <Button
                  onClick={() => { openDrawer(); closeMobile() }}
                  className="w-full bg-primary hover:bg-primary/90 text-sm font-black uppercase tracking-widest text-white rounded-2xl h-14 shadow-lg shadow-primary/20 transition-all active:scale-95"
                >
                  Contactar Ahora
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
