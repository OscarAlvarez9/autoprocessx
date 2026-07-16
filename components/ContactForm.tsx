"use client"

import { useId, useRef, useState } from "react"
import Link from "next/link"
import emailjs from "@emailjs/browser"
import { CheckCircle2, Loader2, ArrowRight } from "lucide-react"
import { gtagEvent } from "@/lib/gtag"

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

// Credenciales emailjs ya existentes en el proyecto
const EMAILJS = {
  service: "service_yqv95mt",
  template: "template_4tp4wat",
  publicKey: "WGplfo4snkyBY6ZQo",
}

interface ContactFormProps {
  location?: string
}

export default function ContactForm({ location = "contact_page" }: ContactFormProps) {
  const uid = useId()
  const ids = {
    name: `${uid}-name`,
    email: `${uid}-email`,
    company: `${uid}-company`,
    message: `${uid}-message`,
    consent: `${uid}-consent`,
  }

  const [data, setData] = useState({ name: "", email: "", company: "", message: "", consent: false })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [submitting, setSubmitting] = useState(false)
  const [serverError, setServerError] = useState("")
  const [success, setSuccess] = useState(false)
  const honeypot = useRef<HTMLInputElement>(null)

  const validate = (field: string): string => {
    switch (field) {
      case "name":
        return data.name.trim() ? "" : "Dinos cómo te llamas."
      case "email":
        return EMAIL_RE.test(data.email.trim()) ? "" : "Introduce un email válido."
      case "message":
        return data.message.trim() ? "" : "Cuéntanos brevemente qué necesitas."
      case "consent":
        return data.consent ? "" : "Necesitamos tu consentimiento para responderte."
      default:
        return ""
    }
  }

  const onBlur = (field: string) => {
    const msg = validate(field)
    setErrors((e) => {
      const next = { ...e }
      if (msg) next[field] = msg
      else delete next[field]
      return next
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setServerError("")

    // Honeypot: si está relleno, es bot → fingimos éxito y descartamos.
    if (honeypot.current?.value) { setSuccess(true); return }

    const newErrors: Record<string, string> = {}
    for (const f of ["name", "email", "message", "consent"]) {
      const m = validate(f)
      if (m) newErrors[f] = m
    }
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setSubmitting(true)
    try {
      await emailjs.send(
        EMAILJS.service,
        EMAILJS.template,
        {
          name: data.name,
          email: data.email,
          message: `Empresa: ${data.company || "—"}\n\n${data.message}`,
        },
        EMAILJS.publicKey
      )
      gtagEvent("generate_lead", { event_category: "contact", event_label: "contact_form_submit", method: "email", location })
      setSuccess(true)
    } catch {
      setServerError("No se pudo enviar. Inténtalo de nuevo o escríbenos a contacta@seoscar.com.")
    } finally {
      setSubmitting(false)
    }
  }

  if (success) {
    return (
      <div role="status" aria-live="polite" className="flex flex-col items-start gap-4 py-4">
        <div className="h-14 w-14 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-600">
          <CheckCircle2 className="h-7 w-7" aria-hidden />
        </div>
        <h3 className="text-xl font-bold tracking-tight text-[#09090B]">Recibido. Gracias.</h3>
        <p className="text-zinc-600 text-sm leading-relaxed">
          Óscar revisa cada solicitud en persona. Te respondemos en menos de 24h con un primer diagnóstico o una propuesta de llamada.
        </p>
      </div>
    )
  }

  const inputBase =
    "w-full h-12 px-4 rounded-xl bg-zinc-50 border text-base text-[#09090B] placeholder:text-zinc-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/40 transition-colors"

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      {/* Honeypot anti-spam (invisible, no CAPTCHA) */}
      <div aria-hidden style={{ position: "absolute", left: "-9999px" }}>
        <label htmlFor={`${uid}-company-url`}>No rellenar</label>
        <input ref={honeypot} id={`${uid}-company-url`} type="text" name="company_url" tabIndex={-1} autoComplete="off" />
      </div>

      {/* Nombre */}
      <div className="space-y-1.5">
        <label htmlFor={ids.name} className="block text-[11px] font-mono font-medium uppercase tracking-wide text-zinc-600">Nombre</label>
        <input
          id={ids.name} name="name" type="text" autoComplete="name" enterKeyHint="next" required
          placeholder="Ej: Óscar Jiménez"
          value={data.name}
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? `${ids.name}-err` : undefined}
          onChange={(e) => setData({ ...data, name: e.target.value })}
          onBlur={() => onBlur("name")}
          className={`${inputBase} ${errors.name ? "border-red-400" : "border-transparent"}`}
        />
        {errors.name && <p id={`${ids.name}-err`} className="text-xs text-red-600">{errors.name}</p>}
      </div>

      {/* Email */}
      <div className="space-y-1.5">
        <label htmlFor={ids.email} className="block text-[11px] font-mono font-medium uppercase tracking-wide text-zinc-600">Email de trabajo</label>
        <input
          id={ids.email} name="email" type="email" inputMode="email" autoComplete="email" enterKeyHint="next" required
          placeholder="tu@empresa.com"
          value={data.email}
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? `${ids.email}-err` : undefined}
          onChange={(e) => setData({ ...data, email: e.target.value })}
          onBlur={() => onBlur("email")}
          className={`${inputBase} ${errors.email ? "border-red-400" : "border-transparent"}`}
        />
        {errors.email && <p id={`${ids.email}-err`} className="text-xs text-red-600">{errors.email}</p>}
      </div>

      {/* Empresa (opcional) */}
      <div className="space-y-1.5">
        <label htmlFor={ids.company} className="block text-[11px] font-mono font-medium uppercase tracking-wide text-zinc-600">
          Empresa <span className="text-zinc-400 normal-case">(opcional)</span>
        </label>
        <input
          id={ids.company} name="company" type="text" autoComplete="organization"
          placeholder="Nombre de tu empresa"
          value={data.company}
          onChange={(e) => setData({ ...data, company: e.target.value })}
          className={`${inputBase} border-transparent`}
        />
      </div>

      {/* Mensaje */}
      <div className="space-y-1.5">
        <label htmlFor={ids.message} className="block text-[11px] font-mono font-medium uppercase tracking-wide text-zinc-600">¿Qué necesitas?</label>
        <textarea
          id={ids.message} name="message" rows={4} required
          placeholder="El cuello de botella o el sistema que tienes en mente…"
          value={data.message}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? `${ids.message}-err` : undefined}
          onChange={(e) => setData({ ...data, message: e.target.value })}
          onBlur={() => onBlur("message")}
          className={`w-full p-4 rounded-xl bg-zinc-50 border text-base text-[#09090B] placeholder:text-zinc-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/40 transition-colors resize-none ${errors.message ? "border-red-400" : "border-transparent"}`}
        />
        {errors.message && <p id={`${ids.message}-err`} className="text-xs text-red-600">{errors.message}</p>}
      </div>

      {/* RGPD — sin premarcar */}
      <div className="flex items-start gap-3">
        <input
          id={ids.consent} name="consent" type="checkbox" required
          checked={data.consent}
          aria-invalid={!!errors.consent}
          aria-describedby={errors.consent ? `${ids.consent}-err` : undefined}
          onChange={(e) => { setData({ ...data, consent: e.target.checked }); if (e.target.checked) setErrors((er) => { const n = { ...er }; delete n.consent; return n }) }}
          onBlur={() => onBlur("consent")}
          className="mt-0.5 h-5 w-5 shrink-0 rounded border-zinc-300 accent-[#B4975A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
        />
        <label htmlFor={ids.consent} className="text-xs text-zinc-600 leading-relaxed">
          Acepto que traten mis datos para responder a esta consulta, según la{" "}
          <Link href="/privacidad" className="text-primary underline underline-offset-2">política de privacidad</Link>.
        </label>
      </div>
      {errors.consent && <p id={`${ids.consent}-err`} className="text-xs text-red-600 -mt-2">{errors.consent}</p>}

      <div aria-live="assertive">
        {serverError && <p className="text-sm text-red-600">{serverError}</p>}
      </div>

      <div>
        <button
          type="submit"
          disabled={submitting}
          className="w-full h-12 rounded-xl bg-primary text-primary-foreground font-bold text-sm tracking-wide hover:bg-primary/90 active:scale-[0.99] transition-all flex items-center justify-center gap-2 disabled:opacity-70 motion-reduce:active:scale-100"
        >
          {submitting ? (
            <>Enviando… <Loader2 className="h-4 w-4 animate-spin motion-reduce:animate-none" aria-hidden /></>
          ) : (
            <>Solicitar diagnóstico <ArrowRight className="h-4 w-4" aria-hidden /></>
          )}
        </button>
        <p className="mt-3 text-center text-[11px] font-mono text-zinc-500">
          Respuesta en 24h · sin compromiso · tus datos no se comparten
        </p>
      </div>
    </form>
  )
}
