"use client"

import { useEffect, useRef } from "react"
import { motion, AnimatePresence, useReducedMotion } from "framer-motion"
import Link from "next/link"
import { X } from "lucide-react"
import { useContactDrawer } from "@/context/ContactDrawerContext"
import ContactForm from "@/components/ContactForm"
import CalendlyInline from "@/components/CalendlyInline"
import JsonLd from "@/components/JsonLd"
import { ORG_ID, SITE_URL } from "@/lib/seo"

const LINKEDIN = "https://www.linkedin.com/in/oscar-alvarez-romani-7882302b3"

const founderSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${SITE_URL}/#founder`,
  name: "Óscar Álvarez",
  jobTitle: "Fundador e ingeniero",
  worksFor: { "@id": ORG_ID },
  sameAs: [LINKEDIN],
}

/* Mini-bloque founder (card oscura + acento oro). TODO Oscar: foto real. */
function FounderStrip() {
  return (
    <div className="flex items-center gap-4 rounded-2xl border border-[#1f1f23] bg-[#09090B] p-4">
      {/* TODO Oscar: foto real (next/image, alt="Óscar Álvarez, fundador de SEOscar") */}
      <div className="h-12 w-12 rounded-xl border border-primary/30 bg-primary/10 flex items-center justify-center shrink-0">
        <span className="text-base font-black text-primary">ÓA</span>
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-white font-bold text-sm leading-tight">Te responde Óscar en 24h</p>
        <p className="text-white/50 text-xs font-mono truncate">Fundador · ingeniero</p>
      </div>
      <Link
        href={LINKEDIN}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[11px] font-mono uppercase tracking-wide text-white/70 hover:text-primary transition-colors shrink-0"
      >
        LinkedIn
      </Link>
    </div>
  )
}

export default function ContactDrawer() {
  const { isOpen, mode, closeDrawer } = useContactDrawer()
  const panelRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLElement | null>(null)
  const reduce = useReducedMotion()

  useEffect(() => {
    if (!isOpen) return
    triggerRef.current = document.activeElement as HTMLElement

    const focus = setTimeout(() => {
      const el = panelRef.current?.querySelector<HTMLElement>(
        'input:not([tabindex="-1"]),textarea,button,a[href],[tabindex]:not([tabindex="-1"])'
      )
      el?.focus()
    }, 60)

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeDrawer()
        return
      }
      if (e.key !== "Tab" || !panelRef.current) return
      const nodes = panelRef.current.querySelectorAll<HTMLElement>(
        'input,textarea,button,a[href],select,[tabindex]:not([tabindex="-1"])'
      )
      const list = Array.from(nodes).filter((el) => !el.hasAttribute("disabled") && el.offsetParent !== null)
      if (list.length === 0) return
      const first = list[0]
      const last = list[list.length - 1]
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }

    document.addEventListener("keydown", onKey)
    document.body.style.overflow = "hidden"
    return () => {
      clearTimeout(focus)
      document.removeEventListener("keydown", onKey)
      document.body.style.overflow = ""
      triggerRef.current?.focus?.()
    }
  }, [isOpen, closeDrawer])

  const title = mode === "calendar" ? "Agenda una llamada" : "Solicita tu auditoría"

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={reduce ? { duration: 0 } : undefined}
            onClick={closeDrawer}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100]"
            aria-hidden
          />

          <motion.div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-drawer-title"
            initial={reduce ? { opacity: 0 } : { x: "100%" }}
            animate={reduce ? { opacity: 1 } : { x: 0 }}
            exit={reduce ? { opacity: 0 } : { x: "100%" }}
            transition={reduce ? { duration: 0 } : { type: "spring", damping: 26, stiffness: 220 }}
            className="fixed inset-0 sm:inset-y-0 sm:right-0 sm:left-auto sm:w-[480px] bg-[#FAFAFA] z-[101] shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 md:px-7 py-4 border-b border-[#E4E4E7] bg-[#FAFAFA]">
              <h2 id="contact-drawer-title" className="text-lg md:text-xl font-bold tracking-tight text-[#09090B]">
                {title}
              </h2>
              <button
                onClick={closeDrawer}
                aria-label="Cerrar"
                className="h-11 w-11 -mr-2 flex items-center justify-center rounded-xl hover:bg-zinc-100 text-zinc-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 transition-colors"
              >
                <X className="h-5 w-5" aria-hidden />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-5 md:p-7 space-y-6">
              <JsonLd data={founderSchema} />
              <FounderStrip />

              {mode === "calendar" ? (
                <div className="rounded-2xl border border-[#E4E4E7] bg-white overflow-hidden">
                  {/* CalendlyInline solo se monta aquí → carga lazy (no en el render inicial de la página) */}
                  <CalendlyInline height={620} />
                </div>
              ) : (
                <ContactForm location="drawer" />
              )}
            </div>

            {/* Footer trust */}
            <div className="px-5 md:px-7 py-3 border-t border-[#E4E4E7] bg-white">
              <p className="text-[10px] font-mono uppercase tracking-wide text-zinc-400 text-center">
                Datos cifrados · servidores UE · sin SaaS de terceros
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
