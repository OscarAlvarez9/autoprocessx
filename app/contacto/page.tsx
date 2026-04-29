import type { Metadata } from "next"
import Link from "next/link"
import { Mail, MapPin, MessageCircle, Clock, Sparkles, ShieldCheck, Workflow } from "lucide-react"

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
)
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import Breadcrumbs from "@/components/Breadcrumbs"
import ContactForm from "@/components/ContactForm"
import JsonLd from "@/components/JsonLd"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ORG_ID, SITE_URL } from "@/lib/seo"

export const metadata: Metadata = {
    title: "Contacto · Auditoría gratuita en 48h",
    description:
        "Contacta con AutoProcessX. Auditoría gratuita en 48h y plan de despliegue con automatizaciones IA, plataformas RAG y chatbots para tu empresa.",
    alternates: {
        canonical: `${SITE_URL}/contacto`,
    },
    openGraph: {
        title: "Contacto · AutoProcessX",
        description:
            "Auditoría gratuita en 48h. Plan de despliegue con automatizaciones IA, plataformas RAG y chatbots para tu empresa.",
        type: "website",
        url: `${SITE_URL}/contacto`,
    },
}

const contactPageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": `${SITE_URL}/contacto#page`,
    name: "Contacto AutoProcessX",
    url: `${SITE_URL}/contacto`,
    description:
        "Página de contacto de AutoProcessX. Auditoría gratuita de operativa en 48h.",
    isPartOf: { "@id": `${SITE_URL}/#website` },
    about: { "@id": ORG_ID },
    mainEntity: {
        "@id": ORG_ID,
    },
}

const guarantees = [
    {
        icon: <Clock className="h-4 w-4" />,
        title: "Respuesta en 24h",
        desc: "Tras enviar el formulario respondemos en menos de un día hábil.",
    },
    {
        icon: <Sparkles className="h-4 w-4" />,
        title: "Auditoría gratuita 48h",
        desc: "Diagnóstico de operativa con cuellos de botella y plan priorizado por ROI.",
    },
    {
        icon: <ShieldCheck className="h-4 w-4" />,
        title: "Sin compromiso",
        desc: "La auditoría es gratis. Solo trabajamos juntos si tiene sentido para tu negocio.",
    },
    {
        icon: <Workflow className="h-4 w-4" />,
        title: "Sistema unificado",
        desc: "Automatizaciones, plataformas IA y chatbots desplegados como un solo sistema.",
    },
]

export default function ContactoPage() {
    return (
        <main className="min-h-screen bg-[#05070F] text-white selection:bg-amber-400/30">
            <Navigation />
            <JsonLd data={contactPageSchema} />

            {/* Hero */}
            <section className="relative pt-28 pb-12 md:pt-36 md:pb-16 overflow-hidden">
                <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-amber-500/[0.07] blur-[180px] rounded-full pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-amber-300/[0.05] blur-[140px] rounded-full pointer-events-none" />

                <div className="container relative z-10 px-6 mx-auto max-w-6xl">
                    <Breadcrumbs items={[{ label: "Contacto" }]} className="mb-10 md:mb-14" />

                    <div className="text-center max-w-3xl mx-auto">
                        <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/40 backdrop-blur-md mb-7">
                            <span className="relative flex h-2 w-2">
                                <span className="absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75 animate-ping" />
                                <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-400" />
                            </span>
                            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-amber-200">
                                Auditoría · 48h · Sin compromiso
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-[-0.025em] leading-[1] mb-6">
                            Hablemos de tu{" "}
                            <span
                                className="relative inline-block bg-gradient-to-br from-amber-200 via-amber-300 to-amber-500 bg-clip-text text-transparent"
                                style={{ filter: "drop-shadow(0 0 24px rgba(251,191,36,0.35))" }}
                            >
                                infraestructura IA
                            </span>
                            .
                        </h1>

                        <p className="text-base md:text-lg text-white/65 font-medium leading-relaxed max-w-2xl mx-auto">
                            Cuéntanos qué procesos quieres automatizar. En 48h te enviamos un diagnóstico con cuellos de botella detectados y un plan de despliegue priorizado por ROI.
                        </p>
                    </div>
                </div>
            </section>

            {/* Form + contact info split */}
            <section className="relative pb-20 md:pb-24">
                <div className="container px-6 mx-auto max-w-6xl">
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 md:gap-8">
                        {/* Form */}
                        <div className="lg:col-span-3">
                            <Card className="bg-[#0F1424] border-white/10 rounded-2xl shadow-[0_0_40px_-15px_rgba(251,191,36,0.15)]">
                                <CardContent className="p-6 md:p-10">
                                    <div className="mb-8">
                                        <Badge
                                            variant="outline"
                                            className="bg-amber-400/10 border-amber-400/30 text-amber-200 mb-4 px-3 py-1 text-[10px] font-black uppercase tracking-[0.3em]"
                                        >
                                            Formulario
                                        </Badge>
                                        <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight leading-tight">
                                            Solicita tu auditoría.
                                        </h2>
                                        <p className="text-white/55 text-sm font-medium mt-2 leading-relaxed">
                                            Cuanto más concreto seas con los procesos, más útil será el diagnóstico.
                                        </p>
                                    </div>

                                    <ContactForm />
                                </CardContent>
                            </Card>
                        </div>

                        {/* Contact info */}
                        <div className="lg:col-span-2 flex flex-col gap-4">
                            {/* Direct contacts */}
                            <Card className="bg-[#0F1424] border-white/10 rounded-2xl shadow-none">
                                <CardContent className="p-6">
                                    <Badge
                                        variant="outline"
                                        className="bg-transparent border-white/10 text-white/60 mb-4 px-3 py-1 text-[10px] font-black uppercase tracking-[0.3em]"
                                    >
                                        Otros canales
                                    </Badge>

                                    <div className="space-y-1">
                                        <a
                                            href="mailto:contacta@autoprocessx.com"
                                            className="flex items-center gap-4 p-3 -mx-3 rounded-xl hover:bg-white/[0.03] transition-colors group"
                                        >
                                            <span className="h-10 w-10 rounded-xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-300 shrink-0">
                                                <Mail className="h-4 w-4" />
                                            </span>
                                            <div className="flex-1 min-w-0">
                                                <div className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40 mb-0.5">
                                                    Email directo
                                                </div>
                                                <div className="text-sm font-bold text-white group-hover:text-amber-300 transition-colors truncate">
                                                    contacta@autoprocessx.com
                                                </div>
                                            </div>
                                        </a>

                                        <a
                                            href="https://wa.me/34600000000"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-4 p-3 -mx-3 rounded-xl hover:bg-white/[0.03] transition-colors group"
                                        >
                                            <span className="h-10 w-10 rounded-xl bg-emerald-400/10 border border-emerald-400/30 flex items-center justify-center text-emerald-300 shrink-0">
                                                <MessageCircle className="h-4 w-4" />
                                            </span>
                                            <div className="flex-1 min-w-0">
                                                <div className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40 mb-0.5">
                                                    WhatsApp
                                                </div>
                                                <div className="text-sm font-bold text-white group-hover:text-emerald-300 transition-colors">
                                                    Chat directo con ingeniería
                                                </div>
                                            </div>
                                        </a>

                                        <a
                                            href="https://www.linkedin.com/in/oscar-alvarez-romani-7882302b3"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-4 p-3 -mx-3 rounded-xl hover:bg-white/[0.03] transition-colors group"
                                        >
                                            <span className="h-10 w-10 rounded-xl bg-blue-400/10 border border-blue-400/30 flex items-center justify-center text-blue-300 shrink-0">
                                                <LinkedinIcon className="h-4 w-4" />
                                            </span>
                                            <div className="flex-1 min-w-0">
                                                <div className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40 mb-0.5">
                                                    LinkedIn
                                                </div>
                                                <div className="text-sm font-bold text-white group-hover:text-blue-300 transition-colors">
                                                    Conecta con el fundador
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Location quick card */}
                            <Card className="bg-[#0F1424] border-white/10 rounded-2xl shadow-none">
                                <CardContent className="p-6">
                                    <div className="flex items-start gap-4">
                                        <span className="h-10 w-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-amber-300 shrink-0">
                                            <MapPin className="h-4 w-4" />
                                        </span>
                                        <div className="flex-1 min-w-0">
                                            <div className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40 mb-1">
                                                Sede
                                            </div>
                                            <div className="text-sm font-bold text-white mb-1">Premià de Mar · Barcelona</div>
                                            <div className="text-xs text-white/50 font-medium leading-relaxed">
                                                Operamos remoto en toda España y Europa. Desplazamiento on-site para discovery o despliegues críticos.
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Quick CTA */}
                            <Card className="bg-gradient-to-br from-amber-400/[0.08] via-[#0F1424] to-[#0F1424] border-amber-400/25 rounded-2xl shadow-[0_0_40px_-15px_rgba(251,191,36,0.3)]">
                                <CardContent className="p-6">
                                    <h3 className="text-base font-black text-white tracking-tight mb-2">
                                        ¿Prefieres ver lo que ya hemos desplegado?
                                    </h3>
                                    <p className="text-white/55 text-xs font-medium mb-4 leading-relaxed">
                                        Cada caso del registro incluye stack técnico completo, fases de despliegue y métricas reales.
                                    </p>
                                    <Link
                                        href="/casos-de-exito"
                                        className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.25em] text-amber-300 hover:text-amber-200 transition-colors"
                                    >
                                        Ver registro completo →
                                    </Link>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            {/* Guarantees strip */}
            <section className="relative py-16 md:py-20 border-t border-white/5">
                <div className="container px-6 mx-auto max-w-6xl">
                    <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12">
                        <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-[10px] font-black uppercase tracking-[0.3em] mb-6">
                            Cómo trabajamos
                        </div>
                        <h2 className="text-3xl md:text-5xl font-black text-white mb-4 leading-[1.05] tracking-tight">
                            Sin sorpresas. <span className="text-accent">Sin retainers.</span>
                        </h2>
                        <p className="text-white/65 text-base font-medium leading-relaxed max-w-2xl mx-auto">
                            Cuatro garantías que aplican a cualquier proyecto que arrancamos juntos.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {guarantees.map((g) => (
                            <Card
                                key={g.title}
                                className="bg-[#0F1424] border-white/10 hover:border-amber-400/30 rounded-2xl shadow-none transition-all"
                            >
                                <CardContent className="p-6">
                                    <div className="h-10 w-10 rounded-xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-300 mb-4">
                                        {g.icon}
                                    </div>
                                    <h3 className="text-base font-black text-white tracking-tight mb-2">
                                        {g.title}
                                    </h3>
                                    <p className="text-white/55 text-xs md:text-sm font-medium leading-relaxed">
                                        {g.desc}
                                    </p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Location section with map */}
            <section className="relative py-16 md:py-24 border-t border-white/5 bg-[#05070F]">
                <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[400px] h-[400px] bg-amber-500/[0.05] blur-[140px] rounded-full pointer-events-none" />

                <div className="container px-6 mx-auto max-w-6xl relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
                        <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-[10px] font-black uppercase tracking-[0.3em] mb-6">
                            <MapPin className="h-3.5 w-3.5" />
                            Dónde estamos
                        </div>
                        <h2 className="text-3xl md:text-5xl font-black text-white mb-4 leading-[1.05] tracking-tight">
                            Premià de Mar, <span className="text-accent">Barcelona</span>.
                        </h2>
                        <p className="text-white/65 text-base font-medium leading-relaxed max-w-2xl mx-auto">
                            A 25 minutos del centro de Barcelona por la C-31. Operamos remoto en toda España y Europa, con desplazamiento on-site para discovery o despliegues críticos.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
                        {/* Map */}
                        <div className="lg:col-span-2">
                            <Card className="bg-[#0F1424] border-white/10 rounded-2xl shadow-none overflow-hidden p-0">
                                <div className="relative aspect-[16/10] md:aspect-[16/9]">
                                    <iframe
                                        src="https://www.google.com/maps?q=Premi%C3%A0+de+Mar,+Barcelona&output=embed"
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0, filter: "invert(0.92) hue-rotate(180deg) saturate(0.5) brightness(0.85)" }}
                                        loading="lazy"
                                        allowFullScreen
                                        referrerPolicy="no-referrer-when-downgrade"
                                        title="Ubicación AutoProcessX — Premià de Mar, Barcelona"
                                    />
                                </div>
                            </Card>
                        </div>

                        {/* Location details */}
                        <div className="flex flex-col gap-4">
                            <Card className="bg-[#0F1424] border-white/10 rounded-2xl shadow-none flex-1">
                                <CardContent className="p-6">
                                    <Badge
                                        variant="outline"
                                        className="bg-transparent border-white/10 text-white/60 mb-4 px-3 py-1 text-[10px] font-black uppercase tracking-[0.3em]"
                                    >
                                        Sede principal
                                    </Badge>
                                    <div className="space-y-3 text-sm">
                                        <div>
                                            <div className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40 mb-1">
                                                Localidad
                                            </div>
                                            <div className="text-white font-bold">Premià de Mar</div>
                                        </div>
                                        <div>
                                            <div className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40 mb-1">
                                                Provincia
                                            </div>
                                            <div className="text-white font-bold">Barcelona, Cataluña</div>
                                        </div>
                                        <div>
                                            <div className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40 mb-1">
                                                País
                                            </div>
                                            <div className="text-white font-bold">España</div>
                                        </div>
                                        <div>
                                            <div className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40 mb-1">
                                                Zona horaria
                                            </div>
                                            <div className="text-white font-bold">CET / CEST · UTC+1</div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            <a
                                href="https://www.google.com/maps?q=Premi%C3%A0+de+Mar,+Barcelona"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 h-12 rounded-xl bg-amber-400/10 border border-amber-400/40 hover:bg-amber-400/20 text-amber-200 hover:text-white font-black uppercase tracking-[0.2em] text-[11px] transition-all"
                            >
                                Abrir en Google Maps
                                <MapPin className="h-3.5 w-3.5" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
