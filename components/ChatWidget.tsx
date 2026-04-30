"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageCircle, X } from "lucide-react"

const STORAGE_KEY = "apx_chat_open"

export default function ChatWidget() {
    const [open, setOpen] = useState(false)
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        try {
            if (window.localStorage.getItem(STORAGE_KEY) === "1") setOpen(true)
        } catch {}
        setMounted(true)
    }, [])

    useEffect(() => {
        if (!mounted) return
        try {
            window.localStorage.setItem(STORAGE_KEY, open ? "1" : "0")
        } catch {}
    }, [open, mounted])

    // Cierra con tecla Escape
    useEffect(() => {
        if (!open) return
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") setOpen(false)
        }
        window.addEventListener("keydown", onKey)
        return () => window.removeEventListener("keydown", onKey)
    }, [open])

    return (
        <>
            {/* Chat window */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        key="chat-panel"
                        initial={{ opacity: 0, y: 20, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.96 }}
                        transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                        role="dialog"
                        aria-label="Chat con Aria, asistente de AutoProcessX"
                        className="fixed z-[9998] right-6 bottom-24 max-md:inset-0 max-md:right-0 max-md:bottom-0"
                        style={{
                            width: "400px",
                            height: "600px",
                            maxWidth: "calc(100vw - 48px)",
                            maxHeight: "calc(100vh - 120px)",
                        }}
                    >
                        <div
                            className="w-full h-full overflow-hidden rounded-2xl border border-amber-400/20 bg-[#0F1424] max-md:rounded-none max-md:border-0"
                            style={{
                                boxShadow:
                                    "0 24px 60px -12px rgba(0,0,0,0.6), 0 0 40px -8px rgba(251,191,36,0.25)",
                            }}
                        >
                            <iframe
                                src="https://chatbot-autoprocessx.onrender.com/widget"
                                title="Aria · Asistente AutoProcessX"
                                allow="clipboard-write"
                                loading="lazy"
                                className="w-full h-full block bg-transparent"
                                style={{ border: "none" }}
                            />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Toggle button */}
            <motion.button
                aria-label={open ? "Cerrar chat con Aria" : "Abrir chat con Aria"}
                aria-expanded={open}
                onClick={() => setOpen((v) => !v)}
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="fixed z-[9999] right-6 bottom-6 h-[60px] w-[60px] rounded-full flex items-center justify-center bg-amber-400 hover:bg-amber-300 text-[#05070F] transition-colors"
                style={{
                    boxShadow: "0 8px 28px -4px rgba(251,191,36,0.5)",
                }}
            >
                {/* Halo pulsante cuando está cerrado */}
                {!open && (
                    <span
                        className="absolute inset-0 rounded-full bg-amber-400 pointer-events-none"
                        style={{
                            opacity: 0.5,
                            animation: "aria-pulse 2.4s cubic-bezier(0,0,0.2,1) infinite",
                            zIndex: -1,
                        }}
                    />
                )}

                <AnimatePresence mode="wait">
                    {open ? (
                        <motion.span
                            key="close"
                            initial={{ rotate: -90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: 90, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="relative flex"
                        >
                            <X className="h-[26px] w-[26px]" strokeWidth={2.5} />
                        </motion.span>
                    ) : (
                        <motion.span
                            key="open"
                            initial={{ rotate: 90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: -90, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="relative flex"
                        >
                            <MessageCircle className="h-[26px] w-[26px]" strokeWidth={2.5} />
                        </motion.span>
                    )}
                </AnimatePresence>

                {/* Online dot — solo visible cuando está cerrado */}
                {!open && (
                    <span
                        aria-hidden="true"
                        className="absolute bottom-0.5 right-0.5 h-3 w-3 rounded-full bg-emerald-400"
                        style={{ border: "2px solid #FBBF24" }}
                    />
                )}
            </motion.button>

            {/* Keyframe del halo — inyectado solo si el componente se monta */}
            <style jsx global>{`
                @keyframes aria-pulse {
                    0%, 100% { transform: scale(1); opacity: 0.5; }
                    50% { transform: scale(1.4); opacity: 0; }
                }
                @media (prefers-reduced-motion: reduce) {
                    [data-aria-chat] * { animation: none !important; transition: none !important; }
                }
            `}</style>
        </>
    )
}
