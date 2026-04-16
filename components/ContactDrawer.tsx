"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useContactDrawer } from "@/context/ContactDrawerContext"
import { X, MessageCircle, Mail, ArrowRight, Send, CheckCircle2, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import emailjs from '@emailjs/browser'
import { gtagEvent } from "@/lib/gtag"

export default function ContactDrawer() {
  const { isOpen, closeDrawer } = useContactDrawer()
  const [activeTab, setActiveTab] = useState<"whatsapp" | "email">("email")
  const [view, setView] = useState<"form" | "success">("form")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      await emailjs.send(
        'service_yqv95mt',
        'template_4tp4wat',
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        'WGplfo4snkyBY6ZQo'
      )

      // GA4 — Formulario de email enviado con éxito
      gtagEvent('click_mail', {
        event_category: 'contact',
        event_label: 'email_form_submit',
        method: 'email',
      })

      setView("success")
      setTimeout(() => {
        closeDrawer()
        setTimeout(() => {
          setView("form")
          setFormData({ name: "", email: "", message: "" })
        }, 500)
      }, 3000)
    } catch (error: any) {
      console.error("Error enviando email:", error.text || error.status || error)
      alert(`Hubo un error al enviar el mensaje: ${error.text || 'Error desconocido'}`)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeDrawer}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full sm:w-[500px] bg-background z-[101] shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-[#25D366]/5 rounded-full blur-3xl pointer-events-none" />

            {/* Header */}
            <div className="p-8 flex items-center justify-between border-b bg-background/50 backdrop-blur-md relative z-10">
              <h2 className="text-2xl font-black tracking-tighter uppercase italic text-foreground">
                {view === "form" ? "Hablemos de escala" : "¡En marcha!"}
              </h2>
              <button 
                onClick={closeDrawer}
                className="p-2 hover:bg-muted rounded-full transition-colors"
              >
                <X className="w-6 h-6 text-foreground" />
              </button>
            </div>

            {/* Tab Selector Area */}
            {view === "form" && (
                <div className="px-8 pt-8 relative z-10">
                    <div className="flex bg-muted p-1.5 rounded-2xl relative border">
                        <motion.div 
                            className="absolute inset-y-1 left-1 bg-background rounded-xl shadow-md z-0"
                            initial={false}
                            animate={{ 
                                x: activeTab === "email" ? 0 : "100%",
                                width: "calc(50% - 1.5px)"
                            }}
                            transition={{ type: "spring", bounce: 0.15, duration: 0.6 }}
                        />
                        <button 
                            onClick={() => setActiveTab("email")}
                            className={`flex-1 flex items-center justify-center gap-2 py-3 text-[10px] font-black uppercase tracking-widest relative z-10 transition-all ${activeTab === "email" ? "text-primary scale-105" : "text-foreground/30 hover:text-foreground/50"}`}
                        >
                            <Mail className="w-4 h-4" /> Email
                        </button>
                        <button 
                            onClick={() => setActiveTab("whatsapp")}
                            className={`flex-1 flex items-center justify-center gap-2 py-3 text-[10px] font-black uppercase tracking-widest relative z-10 transition-all ${activeTab === "whatsapp" ? "text-[#25D366] scale-105" : "text-foreground/30 hover:text-foreground/50"}`}
                        >
                            <MessageCircle className="w-4 h-4" /> WhatsApp
                        </button>
                    </div>
                </div>
            )}

            {/* Content Container */}
            <div className="flex-1 overflow-y-auto relative z-10">
              <AnimatePresence mode="wait">
                {view === "form" && (
                  <motion.div 
                    key={activeTab}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    className="p-8 space-y-8"
                  >
                    {activeTab === "email" ? (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="space-y-2 group">
                                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-foreground/40 ml-4 group-focus-within:text-primary transition-colors italic">¿A quién saludamos?</label>
                                <input 
                                    required
                                    type="text" 
                                    placeholder="Ej: Óscar Jiménez"
                                    value={formData.name}
                                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                                    className="w-full h-16 px-6 rounded-2xl bg-gray-50 border border-transparent focus:border-primary/20 focus:bg-white focus:ring-4 focus:ring-primary/5 transition-all text-foreground font-medium placeholder:text-gray-300"
                                />
                            </div>
                            <div className="space-y-2 group">
                                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-foreground/40 ml-4 group-focus-within:text-primary transition-colors italic">Email Corporativo</label>
                                <input 
                                    required
                                    type="email" 
                                    placeholder="ejemplo@empresa.com"
                                    value={formData.email}
                                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                                    className="w-full h-16 px-6 rounded-2xl bg-gray-50 border border-transparent focus:border-primary/20 focus:bg-white focus:ring-4 focus:ring-primary/5 transition-all text-foreground font-medium placeholder:text-gray-300"
                                />
                            </div>
                            <div className="space-y-2 group">
                                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-foreground/40 ml-4 group-focus-within:text-primary transition-colors italic">¿Qué proceso vamos a automatizar?</label>
                                <textarea 
                                    required
                                    rows={4}
                                    placeholder="Describe brevemente el cuello de botella o tu visión..."
                                    value={formData.message}
                                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                                    className="w-full p-6 rounded-2xl bg-muted border border-transparent focus:border-primary/20 focus:bg-background focus:ring-4 focus:ring-primary/5 transition-all text-foreground font-medium resize-none placeholder:text-gray-300"
                                />
                            </div>

                            <Button 
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full h-18 bg-primary text-white font-black text-lg rounded-full shadow-2xl shadow-primary/30 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3 group disabled:opacity-70 disabled:hover:scale-100"
                            >
                                {isSubmitting ? (
                                    <>Enviando... <Loader2 className="w-5 h-5 animate-spin" /></>
                                ) : (
                                    <>
                                        Iniciar Transformación
                                        <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                    </>
                                )}
                            </Button>
                        </form>
                    ) : (
                        <div className="flex flex-col items-start space-y-8 py-4">
                            <p className="text-lg text-foreground/50 font-medium italic leading-relaxed">
                                Prefieres algo más directo. Estamos listos para chatear y resolver tus dudas técnicas en tiempo real.
                            </p>
                            
                            <div className="p-8 rounded-[40px] bg-[#25D366]/5 border border-[#25D366]/20 space-y-6 w-full">
                                <div className="h-16 w-16 rounded-2xl bg-[#25D366] flex items-center justify-center shadow-xl shadow-[#25D366]/20">
                                    <MessageCircle className="w-10 h-10 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-3xl font-black tracking-tight mb-2 text-foreground">Canal Directo</h3>
                                    <p className="text-sm text-foreground/40 font-bold uppercase tracking-widest italic">Hablarás con un especialista, no con un bot.</p>
                                </div>
                                <a 
                                    href="https://wa.me/34619355972?text=Consulta%20servicios%20IA" 
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block"
                                    onClick={() =>
                                      gtagEvent('cta_click', {
                                        event_category: 'contact',
                                        event_label: 'whatsapp_button',
                                        method: 'whatsapp',
                                      })
                                    }
                                >
                                    <Button 
                                        className="w-full h-18 bg-[#25D366] text-white font-black text-lg rounded-full shadow-xl shadow-[#25D366]/20 hover:scale-[1.02] transition-all flex items-center justify-center gap-3"
                                    >
                                        Ir a WhatsApp <ArrowRight className="w-6 h-6" />
                                    </Button>
                                </a>
                            </div>

                            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-foreground/30 px-4">
                                Horario de atención: 09:00 - 19:00 (CET)
                            </p>
                        </div>
                    )}
                  </motion.div>
                )}

                {view === "success" && (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-8 flex flex-col items-center justify-center h-full text-center space-y-6"
                  >
                    <div className="h-24 w-24 rounded-full bg-green-500/10 flex items-center justify-center text-green-500 mb-4">
                        <CheckCircle2 className="w-12 h-12" />
                    </div>
                    <h3 className="text-3xl font-black tracking-tighter text-foreground">¡Mensaje Recibido!</h3>
                    <p className="text-foreground/50 font-medium italic">Un arquitecto de soluciones revisará tu caso personalmente. Hablamos pronto.</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Security Footer */}
            <div className="p-8 bg-muted border-t">
              <div className="flex items-center justify-center gap-4 mb-4 grayscale opacity-40">
                <div className="text-[8px] font-black tracking-widest uppercase py-1 px-2 border border-black rounded">ISO 27001</div>
                <div className="text-[8px] font-black tracking-widest uppercase py-1 px-2 border border-black rounded">AES-256</div>
              </div>
              <p className="text-[10px] font-medium text-foreground/30 text-center uppercase tracking-[0.2em]">
                Normalmente respondemos en menos de 2 horas.
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
