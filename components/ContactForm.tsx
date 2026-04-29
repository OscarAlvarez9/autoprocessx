"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import emailjs from "@emailjs/browser"
import { Button } from "@/components/ui/button"
import { Send, CheckCircle2, Loader2, ArrowRight } from "lucide-react"
import { gtagEvent } from "@/lib/gtag"

interface ContactFormProps {
    location?: string
}

export default function ContactForm({ location = "contact_page" }: ContactFormProps) {
    const [view, setView] = useState<"form" | "success">("form")
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [formData, setFormData] = useState({ name: "", email: "", company: "", message: "" })

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)
        try {
            await emailjs.send(
                "service_yqv95mt",
                "template_4tp4wat",
                {
                    name: formData.name,
                    email: formData.email,
                    message: `Empresa: ${formData.company || "—"}\n\n${formData.message}`,
                },
                "WGplfo4snkyBY6ZQo"
            )
            gtagEvent("click_mail", {
                event_category: "contact",
                event_label: "contact_page_submit",
                method: "email",
                location,
            })
            setView("success")
        } catch (err: unknown) {
            console.error("Email send error:", err)
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <div className="relative">
            <AnimatePresence mode="wait">
                {view === "form" ? (
                    <motion.form
                        key="form"
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -12 }}
                        onSubmit={handleSubmit}
                        className="space-y-5"
                    >
                        <div>
                            <label htmlFor="name" className="block text-[10px] font-black uppercase tracking-[0.3em] text-white/50 mb-2">
                                Nombre
                            </label>
                            <input
                                id="name"
                                type="text"
                                required
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                disabled={isSubmitting}
                                placeholder="Tu nombre"
                                className="w-full h-12 px-4 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-white/25 focus:outline-none focus:border-amber-400/50 focus:bg-white/[0.05] transition-all"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-[10px] font-black uppercase tracking-[0.3em] text-white/50 mb-2">
                                Email
                            </label>
                            <input
                                id="email"
                                type="email"
                                required
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                disabled={isSubmitting}
                                placeholder="tu@empresa.com"
                                className="w-full h-12 px-4 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-white/25 focus:outline-none focus:border-amber-400/50 focus:bg-white/[0.05] transition-all"
                            />
                        </div>

                        <div>
                            <label htmlFor="company" className="block text-[10px] font-black uppercase tracking-[0.3em] text-white/50 mb-2">
                                Empresa <span className="text-white/30 normal-case font-medium tracking-normal">· opcional</span>
                            </label>
                            <input
                                id="company"
                                type="text"
                                value={formData.company}
                                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                disabled={isSubmitting}
                                placeholder="Nombre de tu empresa"
                                className="w-full h-12 px-4 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-white/25 focus:outline-none focus:border-amber-400/50 focus:bg-white/[0.05] transition-all"
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-[10px] font-black uppercase tracking-[0.3em] text-white/50 mb-2">
                                ¿Qué quieres automatizar?
                            </label>
                            <textarea
                                id="message"
                                required
                                rows={5}
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                disabled={isSubmitting}
                                placeholder="Cuéntanos brevemente: procesos manuales que repites, dónde están los datos, integraciones que necesitas…"
                                className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-white/25 focus:outline-none focus:border-amber-400/50 focus:bg-white/[0.05] transition-all resize-none leading-relaxed"
                            />
                        </div>

                        <div className="pt-2">
                            <Button
                                type="submit"
                                disabled={isSubmitting}
                                className="group w-full h-14 rounded-xl bg-amber-400 hover:bg-amber-300 text-black font-black uppercase tracking-[0.2em] text-[11px] shadow-[0_0_40px_-8px_rgba(251,191,36,0.6)] hover:shadow-[0_0_60px_-8px_rgba(251,191,36,0.8)] transition-all active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                            >
                                {isSubmitting ? (
                                    <>
                                        <Loader2 className="h-4 w-4 animate-spin" />
                                        Enviando…
                                    </>
                                ) : (
                                    <>
                                        <Send className="h-4 w-4" />
                                        Solicitar auditoría gratuita
                                        <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                                    </>
                                )}
                            </Button>
                            <p className="text-[10px] text-white/40 text-center mt-3 font-medium">
                                Respuesta en 24h · Sin compromiso · Tus datos no se comparten
                            </p>
                        </div>
                    </motion.form>
                ) : (
                    <motion.div
                        key="success"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="py-10 text-center"
                    >
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-emerald-400/10 border border-emerald-400/30 mb-6">
                            <CheckCircle2 className="h-8 w-8 text-emerald-400" />
                        </div>
                        <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight mb-3">
                            Mensaje enviado.
                        </h3>
                        <p className="text-white/65 text-base font-medium leading-relaxed max-w-md mx-auto">
                            Te respondemos en menos de 24 horas con un plan inicial y, si encaja, agendamos la auditoría completa de 48h.
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
