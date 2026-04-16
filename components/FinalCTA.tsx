"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"
import { useContactDrawer } from "@/context/ContactDrawerContext"
import { gtagEvent } from "@/lib/gtag"

export default function FinalCTA() {
  const { openDrawer } = useContactDrawer()

  return (
    <section className="px-4 py-32 md:px-8 relative z-10">
      <div className="max-w-6xl mx-auto py-24 bg-primary text-white rounded-[48px] md:rounded-[80px] overflow-hidden relative shadow-2xl shadow-primary/30">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 z-0 text-white/5 pointer-events-none">
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-[120px]" />
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-secondary/10 rounded-full blur-[120px]" />
        </div>

        <div className="container relative z-10 px-4 mx-auto text-center">
          <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="max-w-4xl mx-auto"
          >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 mb-8">
                  <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                  <span className="text-[10px] font-black uppercase tracking-[0.2em]">Despliegue de IA Activo</span>
              </div>
              
              <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter leading-none italic">
                  Tu negocio, <br />más <span className="text-secondary">ligero</span>.
              </h2>
              
              <p className="text-white/70 text-lg md:text-xl font-medium mb-12 max-w-2xl mx-auto leading-tight">
                  Diseñamos la infraestructura técnica que necesitas para trabajar con mayor libertad. 
                  <span className="text-white block mt-4 font-black">Acompañamiento real y despliegue ágil adaptado a ti.</span>
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Button 
                      size="lg" 
                      onClick={() => {
                        gtagEvent('cta_click', {
                          event_category: 'cta',
                          event_label: 'auditoria_gratuita',
                          location: 'final_cta_section',
                        })
                        openDrawer()
                      }}
                      className="px-10 h-18 text-lg font-black bg-white text-primary hover:bg-white/90 transition-all rounded-full border-none shadow-2xl shadow-white/10 w-full sm:w-auto"
                  >
                      Auditoría Gratuita
                  </Button>
                  <Button 
                      size="lg" 
                      variant="ghost"
                      onClick={() => {
                        gtagEvent('cta_click', {
                          event_category: 'cta',
                          event_label: 'whatsapp_directo',
                          location: 'final_cta_section',
                        })
                        openDrawer()
                      }}
                      className="px-10 h-18 text-lg font-black border-2 border-white/50 text-white hover:bg-white/10 transition-all rounded-full w-full sm:w-auto flex items-center gap-3 backdrop-blur-md"
                  >
                      <MessageCircle className="h-5 w-5 text-secondary" />
                      WhatsApp Directo
                  </Button>
              </div>

              
              <p className="mt-10 text-white/40 text-[10px] font-black uppercase tracking-[0.4em]">
                  Disponibilidad inmediata para nuevos proyectos
              </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
