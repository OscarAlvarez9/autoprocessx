"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Plus, MessageCircleQuestion } from "lucide-react"
import { homeFaqs, type FAQItem } from "@/lib/faqs"

interface FAQProps {
    items?: FAQItem[]
    eyebrow?: string
    title?: string
    titleAccent?: string
    description?: string
}

export default function FAQ({
    items = homeFaqs,
    eyebrow = "Preguntas frecuentes",
    title = "Resolvemos las",
    titleAccent = "dudas habituales",
    description = "Lo que nos preguntan antes de firmar. Si tienes una pregunta que no está aquí, escríbenos.",
}: FAQProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(0)

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: items.map((item) => ({
            "@type": "Question",
            name: item.q,
            acceptedAnswer: {
                "@type": "Answer",
                text: item.a,
            },
        })),
    }

    return (
        <section id="faq" className="relative py-20 md:py-28 bg-[#FAFAFA] overflow-hidden">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* Ambient amber glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#B4975A]/[0.06] blur-[140px] rounded-full pointer-events-none" />

            <div className="container relative z-10 px-6 mx-auto max-w-4xl">
                {/* Header — centered like Comparison */}
                <div className="text-center mb-12 md:mb-16 max-w-3xl mx-auto">
                    <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-[10px] font-black uppercase tracking-[0.3em] mb-6">
                        <MessageCircleQuestion className="h-3.5 w-3.5" />
                        {eyebrow}
                    </div>
                    <h2 className="text-3xl md:text-5xl font-black text-[#09090B] mb-5 leading-[1.05] tracking-tight">
                        {title} <span className="text-accent">{titleAccent}</span>.
                    </h2>
                    <p className="text-zinc-600 text-base md:text-lg font-medium leading-relaxed max-w-2xl mx-auto">
                        {description}
                    </p>
                </div>

                {/* Accordion */}
                <div className="space-y-3">
                    {items.map((item, i) => {
                        const isOpen = openIndex === i
                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 12 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.04 }}
                                className={`rounded-2xl border transition-all overflow-hidden ${
                                    isOpen
                                        ? "border-accent/40 bg-gradient-to-br from-accent/[0.04] to-transparent shadow-[0_0_40px_-12px_rgba(180,151,90,0.25)]"
                                        : "border-[#E4E4E7] bg-[#FFFFFF] hover:border-[#E4E4E7]"
                                }`}
                            >
                                <h3 className="m-0">
                                    <button
                                        onClick={() => setOpenIndex(isOpen ? null : i)}
                                        className="w-full flex items-center gap-4 md:gap-6 px-5 md:px-7 py-5 md:py-6 text-left group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-[#FAFAFA] rounded-2xl"
                                        aria-expanded={isOpen}
                                        aria-controls={`faq-answer-${i}`}
                                        id={`faq-question-${i}`}
                                    >
                                        <span
                                            className={`text-xs font-black tabular-nums shrink-0 transition-colors ${
                                                isOpen ? "text-accent" : "text-zinc-500 group-hover:text-accent"
                                            }`}
                                        >
                                            {String(i + 1).padStart(2, "0")}
                                        </span>
                                        <span
                                            className={`flex-1 text-sm md:text-base font-black tracking-tight transition-colors ${
                                                isOpen ? "text-[#09090B]" : "text-zinc-700 group-hover:text-[#09090B]"
                                            }`}
                                        >
                                            {item.q}
                                        </span>
                                        <span
                                            aria-hidden
                                            className={`h-8 w-8 rounded-lg flex items-center justify-center shrink-0 transition-all motion-reduce:transition-none ${
                                                isOpen
                                                    ? "bg-accent text-black rotate-45"
                                                    : "bg-zinc-100 text-zinc-600 group-hover:bg-accent/20 group-hover:text-accent"
                                            }`}
                                        >
                                            <Plus className="h-4 w-4" />
                                        </span>
                                    </button>
                                </h3>

                                {/* Panel siempre en el DOM (colapsa por CSS grid-rows; respeta prefers-reduced-motion) */}
                                <div
                                    id={`faq-answer-${i}`}
                                    role="region"
                                    aria-labelledby={`faq-question-${i}`}
                                    className={`grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none ${
                                        isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                                    }`}
                                >
                                    <div className="overflow-hidden">
                                        <div className="px-5 md:px-7 pb-6 md:pb-7">
                                            <div className="ml-7 md:ml-10 pt-4 border-t border-[#E4E4E7]">
                                                <p className="text-zinc-600 text-sm md:text-base font-medium leading-relaxed m-0">
                                                    {item.a}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        )
                    })}
                </div>

                {/* Footer cta */}
                <div className="mt-10 md:mt-12 text-center">
                    <p className="text-xs md:text-sm text-zinc-500 font-medium">
                        ¿No encuentras lo que buscas?{" "}
                        <a
                            href="#contacto"
                            className="text-accent font-black hover:text-[#B4975A] transition-colors"
                        >
                            Habla directamente con ingeniería →
                        </a>
                    </p>
                </div>
            </div>
        </section>
    )
}
