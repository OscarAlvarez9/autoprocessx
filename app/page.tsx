import type { Metadata } from "next"
import Hero from "@/components/Hero"
import Navigation from "@/components/Navigation"
import CaseStudies from "@/components/CaseStudies"
import Services from "@/components/Services"
import Verticals from "@/components/Verticals"
import ROICalculator from "@/components/ROICalculator"
import Comparison from "@/components/Comparison"
import FAQ from "@/components/FAQ"
import FinalCTA from "@/components/FinalCTA"
import Footer from "@/components/Footer"

export const metadata: Metadata = {
  title: "AutoProcessX | Agencia IA Barcelona · Chatbot y Apps IA",
  description: "Agencia de inteligencia artificial en Barcelona. Automatización de procesos, chatbots personalizados y aplicaciones IA para empresas.",
  alternates: {
    canonical: "https://www.autoprocessx.com",
  },
}

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary/20">
      <Navigation />
      <Hero />
      <Comparison />

      <Services />
      <CaseStudies />
      <Verticals />
      <ROICalculator />
      <FinalCTA />
      <FAQ />
      <Footer />
    </main>
  )
}
