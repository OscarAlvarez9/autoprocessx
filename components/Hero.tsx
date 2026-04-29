"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react"
import Link from "next/link"
import { useContactDrawer } from "@/context/ContactDrawerContext"
import { gtagEvent } from "@/lib/gtag"

const FRAME_COUNT = 240
const framePath = (i: number) =>
    `/assets/robot_frames/ezgif-frame-${String(i).padStart(3, "0")}.jpg`

const trustItems = [
    "Sistemas en producción 24/7",
    "Código y datos bajo tu propiedad",
    "Setup en 2-4 semanas",
]

export default function Hero() {
    const { openDrawer } = useContactDrawer()
    const sectionRef = useRef<HTMLDivElement>(null)
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const imagesRef = useRef<HTMLImageElement[]>([])
    const currentFrameRef = useRef(0)
    const targetFrameRef = useRef(0)
    const rafRef = useRef<number | null>(null)
    const [ready, setReady] = useState(false)
    const [progress, setProgress] = useState(0)
    const [scrollProgress, setScrollProgress] = useState(0)

    // Preload frames
    useEffect(() => {
        const images: HTMLImageElement[] = new Array(FRAME_COUNT)
        let loaded = 0
        let firstReady = false

        for (let i = 0; i < FRAME_COUNT; i++) {
            const img = new window.Image()
            img.src = framePath(i + 1)
            img.onload = () => {
                loaded++
                setProgress(loaded / FRAME_COUNT)
                if (!firstReady && i === 0) {
                    firstReady = true
                    setReady(true)
                    drawFrame(0)
                }
            }
            images[i] = img
        }
        imagesRef.current = images
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const drawFrame = (frame: number) => {
        const canvas = canvasRef.current
        const img = imagesRef.current[frame]
        if (!canvas || !img || !img.complete || img.naturalWidth === 0) return
        const ctx = canvas.getContext("2d", { alpha: false })
        if (!ctx) return

        const dpr = Math.min(window.devicePixelRatio || 1, 2.5)
        const cw = canvas.clientWidth
        const ch = canvas.clientHeight
        if (canvas.width !== cw * dpr || canvas.height !== ch * dpr) {
            canvas.width = cw * dpr
            canvas.height = ch * dpr
        }

        ctx.imageSmoothingEnabled = true
        ctx.imageSmoothingQuality = "high"

        // cover fit, biased right so robot stays anchored on right side
        const iw = img.naturalWidth
        const ih = img.naturalHeight
        const canvasRatio = (cw * dpr) / (ch * dpr)
        const imageRatio = iw / ih
        let sx = 0, sy = 0, sw = iw, sh = ih
        if (imageRatio > canvasRatio) {
            sw = ih * canvasRatio
            sx = (iw - sw) * 0.5
        } else {
            sh = iw / canvasRatio
            sy = (ih - sh) / 2
        }
        ctx.drawImage(img, sx, sy, sw, sh, 0, 0, canvas.width, canvas.height)
    }

    // Scroll-driven frame advance with smooth interpolation
    useEffect(() => {
        const onScroll = () => {
            const section = sectionRef.current
            if (!section) return
            const rect = section.getBoundingClientRect()
            const total = rect.height - window.innerHeight
            const scrolled = total > 0 ? Math.max(0, Math.min(1, -rect.top / total)) : 1
            targetFrameRef.current = scrolled * (FRAME_COUNT - 1)
            setScrollProgress(scrolled)
            if (rafRef.current == null) rafRef.current = requestAnimationFrame(tick)
        }

        const tick = () => {
            rafRef.current = null
            const target = targetFrameRef.current
            const current = currentFrameRef.current
            const next = current + (target - current) * 0.18
            currentFrameRef.current = next
            const idx = Math.max(0, Math.min(FRAME_COUNT - 1, Math.round(next)))
            drawFrame(idx)
            if (Math.abs(target - next) > 0.05) {
                rafRef.current = requestAnimationFrame(tick)
            }
        }

        const onResize = () => drawFrame(Math.round(currentFrameRef.current))

        window.addEventListener("scroll", onScroll, { passive: true })
        window.addEventListener("resize", onResize)
        onScroll()
        return () => {
            window.removeEventListener("scroll", onScroll)
            window.removeEventListener("resize", onResize)
            if (rafRef.current) cancelAnimationFrame(rafRef.current)
        }
    }, [])

    return (
        <section
            ref={sectionRef}
            className="relative h-[300vh] bg-[#05070F]"
        >
            <div className="sticky top-0 h-screen w-full overflow-hidden">
                {/* Frame sequence canvas */}
                <canvas
                    ref={canvasRef}
                    className={`absolute inset-0 w-full h-full transition-opacity duration-700 ${
                        ready ? "opacity-100" : "opacity-0"
                    }`}
                />

                {/* Cinematic vignettes for legibility */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#05070F]/95 via-[#05070F]/55 via-35% to-transparent pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#05070F] via-transparent to-transparent pointer-events-none" />
                <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#05070F]/80 via-[#05070F]/40 to-transparent pointer-events-none" />

                {/* Amber ambient glows */}
                <div className="absolute right-[10%] top-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-amber-500/15 blur-[180px] rounded-full pointer-events-none" />
                <div className="absolute right-[20%] top-1/3 w-[300px] h-[300px] bg-amber-300/10 blur-[100px] rounded-full pointer-events-none" />

                {/* Subtle grain overlay */}
                <div
                    className="absolute inset-0 opacity-[0.04] mix-blend-overlay pointer-events-none"
                    style={{
                        backgroundImage:
                            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
                    }}
                />

                {/* Loading state */}
                {!ready && (
                    <div className="absolute inset-0 flex items-center justify-center z-20">
                        <div className="flex flex-col items-center gap-3">
                            <div className="h-1 w-40 rounded-full bg-white/10 overflow-hidden">
                                <div
                                    className="h-full bg-amber-400 transition-[width] duration-300"
                                    style={{ width: `${Math.round(progress * 100)}%` }}
                                />
                            </div>
                            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40">
                                Booting AutoProcessX
                            </span>
                        </div>
                    </div>
                )}

                {/* Text overlay */}
                <div className="relative z-10 h-full flex items-center">
                    <div className="container mx-auto px-6 lg:px-12">
                        <div className="max-w-2xl relative">
                            {/* Vertical accent bar */}
                            <motion.div
                                initial={{ scaleY: 0 }}
                                animate={{ scaleY: ready ? 1 : 0 }}
                                transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                                className="absolute -left-4 lg:-left-8 top-2 bottom-2 w-[1px] bg-gradient-to-b from-transparent via-amber-400/50 to-transparent origin-center hidden lg:block"
                            />
                            {/* Eyebrow */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: ready ? 1 : 0, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.1 }}
                                className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/[0.04] border border-amber-400/20 backdrop-blur-md mb-8"
                            >
                                <span className="relative flex h-2 w-2">
                                    <span className="absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75 animate-ping" />
                                    <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-400" />
                                </span>
                                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/85">
                                    AutoProcessX · Agencia IA Barcelona
                                </span>
                            </motion.div>

                            {/* Headline */}
                            <motion.h1
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: ready ? 1 : 0, y: 0 }}
                                transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                                className="text-5xl md:text-7xl lg:text-[92px] font-black tracking-[-0.025em] leading-[0.95] text-white mb-7"
                                style={{ textShadow: "0 4px 40px rgba(0,0,0,0.6)" }}
                            >
                                Creamos plataformas para hacerte el día a día{" "}
                                <span className="relative inline-block">
                                    <span
                                        className="relative z-10 bg-gradient-to-br from-amber-200 via-amber-300 to-amber-500 bg-clip-text text-transparent"
                                        style={{ filter: "drop-shadow(0 0 24px rgba(251,191,36,0.35))" }}
                                    >
                                        más fácil
                                    </span>
                                    <motion.span
                                        initial={{ scaleX: 0 }}
                                        animate={{ scaleX: ready ? 1 : 0 }}
                                        transition={{ delay: 1, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                                        className="absolute -bottom-1 left-0 right-0 h-2 md:h-3 bg-amber-400/40 origin-left blur-[4px]"
                                    />
                                </span>
                                .
                            </motion.h1>

                            {/* Subheadline (amber, single line) */}
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: ready ? 1 : 0, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                                className="text-amber-300/90 text-base md:text-lg font-medium mb-3 flex items-center gap-2"
                            >
                                <Sparkles className="h-4 w-4 shrink-0" />
                                <span>Asistentes · Automatizaciones · Plataformas IA en producción</span>
                            </motion.p>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: ready ? 1 : 0, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.5 }}
                                className="text-white/55 text-sm md:text-base font-medium leading-relaxed max-w-lg mb-10"
                            >
                                Orquestamos tu empresa con agentes que conocen tu negocio. Menos tareas mecánicas, más tiempo para lo que importa.
                            </motion.p>

                            {/* CTA glassmorphism amber */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: ready ? 1 : 0, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.6 }}
                                className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-10"
                            >
                                <Button
                                    size="lg"
                                    onClick={() => {
                                        gtagEvent("click_cta_to_form", {
                                            event_category: "cta",
                                            event_label: "hero_auditoria",
                                            location: "hero_primary",
                                        })
                                        openDrawer()
                                    }}
                                    className="group h-14 px-8 text-sm font-black tracking-wide bg-amber-400/10 hover:bg-amber-400/20 text-amber-200 hover:text-white border border-amber-400/40 hover:border-amber-300 backdrop-blur-md shadow-[0_0_30px_-5px_rgba(251,191,36,0.4)] hover:shadow-[0_0_40px_-5px_rgba(251,191,36,0.6)] transition-all rounded-xl active:scale-95"
                                >
                                    Auditar mi empresa gratis
                                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                </Button>
                                <Link href="#servicios" className="w-full sm:w-auto">
                                    <Button
                                        size="lg"
                                        variant="outline"
                                        className="h-14 px-8 text-sm font-black tracking-wide border border-white/15 text-white bg-white/[0.03] backdrop-blur-md hover:bg-white/[0.06] transition-all rounded-xl w-full sm:w-auto active:scale-95"
                                    >
                                        Ver qué hacemos
                                    </Button>
                                </Link>
                            </motion.div>

                            {/* Trust strip */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: ready ? 1 : 0 }}
                                transition={{ duration: 0.8, delay: 0.8 }}
                                className="flex flex-wrap items-center gap-x-5 gap-y-2"
                            >
                                {trustItems.map((item, i) => (
                                    <div key={item} className="flex items-center gap-2">
                                        <CheckCircle2 className="h-3.5 w-3.5 text-amber-400 shrink-0" />
                                        <span className="text-xs text-white/55 font-medium">{item}</span>
                                        {i < trustItems.length - 1 && (
                                            <span className="hidden sm:inline-block h-3 w-[1px] bg-white/10 ml-3" />
                                        )}
                                    </div>
                                ))}
                            </motion.div>
                        </div>
                    </div>
                </div>

                {/* Top progress bar — scroll position through sequence */}
                <div className="absolute top-0 inset-x-0 h-[2px] bg-white/[0.04] z-20 pointer-events-none">
                    <div
                        className="h-full bg-gradient-to-r from-amber-300 via-amber-400 to-amber-200 shadow-[0_0_12px_rgba(251,191,36,0.6)]"
                        style={{ width: `${scrollProgress * 100}%` }}
                    />
                </div>

                {/* Frame counter — bottom right */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: ready ? 1 : 0 }}
                    transition={{ delay: 1.2, duration: 0.8 }}
                    className="absolute bottom-8 right-8 z-10 hidden md:flex items-center gap-3 pointer-events-none"
                >
                    <span className="text-[9px] font-black uppercase tracking-[0.4em] text-white/40">
                        Frame
                    </span>
                    <span className="text-xs font-black text-amber-300 tabular-nums">
                        {String(Math.round(scrollProgress * (FRAME_COUNT - 1)) + 1).padStart(3, "0")}
                        <span className="text-white/30"> / {FRAME_COUNT}</span>
                    </span>
                </motion.div>

                {/* Soft fade-out at bottom for seamless transition */}
                <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-[#05070F] pointer-events-none" />
            </div>
        </section>
    )
}
