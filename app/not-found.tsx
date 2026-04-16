import Link from "next/link"
import { Button } from "@/components/ui/button"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Página no encontrada | AutoProcessX",
  description: "La página que buscas no existe. Vuelve al inicio de AutoProcessX, agencia de inteligencia artificial en Barcelona.",
  robots: { index: false, follow: false },
}

export default function NotFound() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation />

      <div className="container px-4 mx-auto flex flex-col items-center justify-center min-h-[80vh] text-center">
        <span className="text-[120px] md:text-[180px] font-black tracking-tighter leading-none text-foreground/5 select-none mb-0">
          404
        </span>

        <div className="-mt-8 md:-mt-16 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-widest mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            AutoProcessX · Página no encontrada
          </div>

          <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 leading-tight">
            Esta página no <br />
            <span className="text-primary italic">existe.</span>
          </h1>

          <p className="text-foreground/50 text-lg font-medium max-w-md mx-auto mb-12 leading-relaxed">
            La URL que buscas no está disponible. Puede que haya sido movida, eliminada o que la dirección tenga un error.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/">
              <Button className="bg-primary hover:bg-primary/90 text-white h-14 px-10 rounded-2xl font-black text-base shadow-xl shadow-primary/20 border-none transition-all hover:scale-[1.02]">
                Volver al inicio
              </Button>
            </Link>
            <Link href="/servicios/aplicaciones-ia">
              <Button variant="outline" className="h-14 px-10 rounded-2xl font-black text-base border-2 hover:bg-muted/50 transition-all">
                Ver servicios
              </Button>
            </Link>
          </div>

          <div className="mt-16 flex flex-wrap justify-center gap-6 text-xs font-black uppercase tracking-widest text-foreground/30">
            <Link href="/servicios/automatizaciones" className="hover:text-primary transition-colors">Automatizaciones</Link>
            <Link href="/servicios/aplicaciones-ia" className="hover:text-primary transition-colors">Aplicaciones IA</Link>
            <Link href="/servicios/ai-chatbot" className="hover:text-primary transition-colors">AI Chatbot</Link>
            <Link href="/casos-de-exito" className="hover:text-primary transition-colors">Casos de Éxito</Link>
            <Link href="/sobre-nosotros" className="hover:text-primary transition-colors">Sobre Nosotros</Link>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
