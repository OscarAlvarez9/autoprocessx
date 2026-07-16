"use client"

import { useId, useRef, useState } from "react"
import emailjs from "@emailjs/browser"
import { Mail, CheckCircle2, Loader2, ArrowRight } from "lucide-react"
import { gtagEvent } from "@/lib/gtag"

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const EMAILJS = {
  service: "service_yqv95mt",
  template: "template_4tp4wat",
  publicKey: "WGplfo4snkyBY6ZQo",
}

export default function NewsletterCTA() {
  const uid = useId()
  const [email, setEmail] = useState("")
  const [error, setError] = useState("")
  const [submitting, setSubmitting] = useState(false)
  const [done, setDone] = useState(false)
  const honeypot = useRef<HTMLInputElement>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (honeypot.current?.value) { setDone(true); return }
    if (!EMAIL_RE.test(email.trim())) { setError("Introduce un email válido."); return }
    setError("")
    setSubmitting(true)
    try {
      await emailjs.send(
        EMAILJS.service,
        EMAILJS.template,
        { name: "Newsletter", email: email.trim(), message: "Alta en la newsletter del blog (apuntes de ingeniería)." },
        EMAILJS.publicKey
      )
      gtagEvent("sign_up", { event_category: "newsletter", event_label: "blog_newsletter", method: "email" })
      setDone(true)
    } catch {
      setError("No se pudo completar el alta. Inténtalo de nuevo.")
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section className="py-14 md:py-20">
      <div className="container px-6 mx-auto max-w-4xl">
        <div className="rounded-3xl border border-[#1f1f23] bg-[#09090B] text-white p-8 md:p-10 flex flex-col md:flex-row md:items-center gap-6 md:gap-10">
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 text-primary mb-3">
              <Mail className="h-4 w-4" aria-hidden />
              <span className="text-[10px] font-mono font-medium uppercase tracking-wide">Apuntes de ingeniería</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-2">Recibe el análisis técnico, no el ruido.</h2>
            <p className="text-white/60 text-sm leading-relaxed">
              Arquitecturas reales, RAG, n8n y GEO. Un email cuando publicamos algo que merece la pena. Sin spam.
            </p>
          </div>

          <div className="w-full md:w-[340px] shrink-0">
            {done ? (
              <div role="status" aria-live="polite" className="flex items-center gap-3 text-emerald-400">
                <CheckCircle2 className="h-5 w-5" aria-hidden />
                <p className="text-sm font-medium">Listo. Te avisamos en el próximo artículo.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-2">
                <div aria-hidden style={{ position: "absolute", left: "-9999px" }}>
                  <label htmlFor={`${uid}-hp`}>No rellenar</label>
                  <input ref={honeypot} id={`${uid}-hp`} type="text" tabIndex={-1} autoComplete="off" />
                </div>
                <label htmlFor={`${uid}-email`} className="sr-only">Tu email</label>
                <div className="flex gap-2">
                  <input
                    id={`${uid}-email`}
                    type="email"
                    inputMode="email"
                    autoComplete="email"
                    required
                    placeholder="tu@email.com"
                    value={email}
                    onChange={(e) => { setEmail(e.target.value); if (error) setError("") }}
                    aria-invalid={!!error}
                    aria-describedby={error ? `${uid}-err` : undefined}
                    className="flex-1 h-11 px-4 rounded-xl bg-white/[0.06] border border-white/15 text-base text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50"
                  />
                  <button
                    type="submit"
                    disabled={submitting}
                    aria-label="Suscribirme"
                    className="h-11 w-11 shrink-0 rounded-xl bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/90 disabled:opacity-70 transition-colors"
                  >
                    {submitting ? <Loader2 className="h-4 w-4 animate-spin motion-reduce:animate-none" aria-hidden /> : <ArrowRight className="h-4 w-4" aria-hidden />}
                  </button>
                </div>
                {error && <p id={`${uid}-err`} className="text-xs text-red-400">{error}</p>}
                <p className="text-[10px] font-mono text-white/40">Sin spam · baja cuando quieras</p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
