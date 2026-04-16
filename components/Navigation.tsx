"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"

import { useContactDrawer } from "@/context/ContactDrawerContext"

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const { openDrawer } = useContactDrawer()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header 
      className={`fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-500 w-[calc(100%-2rem)] max-w-6xl ${
        scrolled ? "top-4" : "top-8"
      }`}
    >
      <div className={`
        mx-auto flex items-center justify-between px-6 py-2.5 
        rounded-full border border-white/40 
        bg-background/70 backdrop-blur-xl
        shadow-[0_8px_32px_0_rgba(0,0,0,0.05)]
        transition-all duration-500
        ${scrolled ? "bg-background/90 shadow-lg border-white/60" : ""}
      `}>
        <Link href="/" className="flex items-center gap-2 group shrink-0">
          <div className="relative w-8 h-8 flex items-center justify-center">
            <div className="absolute inset-0 bg-primary/20 rounded-lg blur-md group-hover:bg-primary/30 transition-all" />
            <svg className="w-6 h-6 text-primary relative z-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 4L4 12L12 20L20 12L12 4Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 9L9 12L12 15L15 12L12 9Z" fill="currentColor"/>
            </svg>
          </div>
          <div className="flex items-center">
            <span className="text-xl font-black tracking-tight text-foreground">
              AutoProcess
            </span>
            <span className="text-xl font-black tracking-tight text-primary ml-0.5 group-hover:scale-110 inline-block transition-transform origin-left">
              X
            </span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-[11px] font-bold uppercase tracking-wider text-foreground/80">
          <div className="relative group">
            <button className="hover:text-primary transition-colors flex items-center gap-1">
              Servicios
              <svg className="w-3 h-3 pt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="absolute top-full -left-4 pt-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
              <div className="bg-background/95 backdrop-blur-xl border border-muted rounded-3xl p-2 w-64 shadow-2xl">
                <Link href="/servicios/automatizaciones" className="block p-4 hover:bg-muted rounded-2xl transition-colors group/item">
                  <p className="text-foreground font-bold text-[11px] mb-1 group-hover/item:text-primary transition-colors uppercase">Automatizaciones IA</p>
                  <p className="text-[10px] text-foreground/40 normal-case leading-relaxed font-normal">Infraestructura completa y agentes autónomos.</p>
                </Link>
                <Link href="/servicios/aplicaciones-ia" className="block p-4 hover:bg-muted rounded-2xl transition-colors group/item">
                  <p className="text-foreground font-bold text-[11px] mb-1 group-hover/item:text-primary transition-colors uppercase">Aplicaciones IA (RAG)</p>
                  <p className="text-[10px] text-foreground/40 normal-case leading-relaxed font-normal">Entrenamiento con documentos propios.</p>
                </Link>
                <Link href="/servicios/ai-chatbot" className="block p-4 hover:bg-muted rounded-2xl transition-colors group/item">
                  <p className="text-foreground font-bold text-[11px] mb-1 group-hover/item:text-primary transition-colors uppercase">AI Chatbot</p>
                  <p className="text-[10px] text-foreground/40 normal-case leading-relaxed font-normal">Chat online para web y WhatsApp 24/7.</p>
                </Link>
              </div>
            </div>
          </div>
          <Link href="/casos-de-exito" className="hover:text-primary transition-colors">Casos</Link>
          <Link href="/tecnologia" className="hover:text-primary transition-colors">Stack</Link>
          <Link href="/sobre-nosotros" className="hover:text-primary transition-colors">Empresa</Link>
        </nav>

        <div className="flex items-center gap-3">
          <Button 
            onClick={openDrawer}
            className="bg-primary hover:bg-primary/90 text-[10px] font-black uppercase tracking-widest text-white rounded-full px-5 py-5 shadow-lg shadow-primary/20 transition-all hover:scale-105 active:scale-95"
          >
            Contactar
          </Button>
        </div>
      </div>
    </header>
  )
}
