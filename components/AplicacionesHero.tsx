"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, Layers } from "lucide-react"
import Link from "next/link"
import { useContactDrawer } from "@/context/ContactDrawerContext"
import { gtagEvent } from "@/lib/gtag"

const FRAME_COUNT = 240
const framePath = (i: number) =>
    `/assets/aplicaciones_frames/ezgif-frame-${String(i).padStart(3, "0")}.jpg`

const phaseLabels = [
    { range: [0, 0.33], label: "Fase 01 · Núcleo activo" },
    { range: [0.33, 0.66], label: "Fase 02 · Ecosistema en flujo" },
    { range: [0.66, 1.01], label: "Fase 03 · Activación total" },
]

export default function AplicacionesHero() {
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

    const activePhase = phaseLabels.find(
        (p) => scrollProgress >= p.range[0] && scrollProgress < p.range[1]
    )?.label ?? phaseLabels[0].label

    return (
        <section
            ref={sectionRef}
            className="relative h-[300vh] bg-[#0a0f1e]"
        >
            <div className="sticky top-0 h-screen w-full overflow-hidden">
                <canvas
                    ref={canvasRef}
                    className={`absolute inset-0 w-full h-full transition-opacity duration-700 ${
                        ready ? "opacity-100" : "opacity-0"
                    }`}
                />

                <div className="absolute inset-0 bg-gradient-to-r from-[#0a0f1e]/95 via-[#0a0f1e]/55 via-35% to-transparent pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1e] via-transparent to-transparent pointer-events-none" />
                <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#0a0f1e]/80 via-[#0a0f1e]/40 to-transparent pointer-events-none" />

                {/* Amber volumetric glows around core */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[760px] h-[760px] bg-amber-500/14 blur-[210px] rounded-full pointer-events-none" />
                <div className="absolute right-[18%] top-1/3 w-[300px] h-[300px] bg-amber-300/10 blur-[110px] rounded-full pointer-events-none" />

                {/* Floating particles */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    {Array.from({ length: 18 }).map((_, i) => (
                        <motion.span
                            key={i}
                            className="absolute h-[3px] w-[3px] rounded-full bg-amber-300/60"
                            style={{
                                left: `${10 + (i * 5.3) % 85}%`,
                                top: `${(i * 9.4) % 100}%`,
                                boxShadow: "0 0 8px rgba(251,191,36,0.7)",
                            }}
                            animate={{ y: [-20, -260], opacity: [0, 1, 0] }}
                            transition={{
                                duration: 9 + (i % 5),
                                repeat: Infinity,
                                ease: "linear",
                                delay: i * 0.5,
                            }}
                        />
                    ))}
                </div>

                {/* Grain */}
                <div
                    className="absolute inset-0 opacity-[0.04] mix-blend-overlay pointer-events-none"
                    style={{
                        backgroundImage:
                            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
                    }}
                />

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
                                Sincronizando ecosistema
                            </span>
                        </div>
                    </div>
                )}

                <div className="relative z-10 h-full flex items-center">
                    <div className="container mx-auto px-6 lg:px-12">
                        <div className="max-w-xl lg:max-w-[44%] relative">
                            <motion.div
                                initial={{ scaleY: 0 }}
                                animate={{ scaleY: ready ? 1 : 0 }}
                                transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                                className="absolute -left-4 lg:-left-8 top-2 bottom-2 w-[1px] bg-gradient-to-b from-transparent via-amber-400/50 to-transparent origin-center hidden lg:block"
                            />

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: ready ? 1 : 0, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.1 }}
                                className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/[0.04] border border-amber-400/20 backdrop-blur-md mb-7"
                            >
                                <Layers className="h-3 w-3 text-amber-400" />
                                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/85">
                                    Plataforma IA · RAG · Agentes
                                </span>
                            </motion.div>

                            <motion.h1
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: ready ? 1 : 0, y: 0 }}
                                transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                                className="text-4xl md:text-6xl lg:text-[64px] font-medium tracking-[-0.025em] leading-[1.02] text-white mb-6"
                                style={{ textShadow: "0 4px 40px rgba(0,0,0,0.6)" }}
                            >
                                Tu empresa aprende.
                                <br />
                                <span className="relative inline-block">
                                    <span
                                        className="relative z-10 bg-gradient-to-br from-amber-200 via-amber-300 to-amber-500 bg-clip-text text-transparent"
                                        style={{ filter: "drop-shadow(0 0 24px rgba(251,191,36,0.35))" }}
                                    >
                                        Tu empresa actúa
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

                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: ready ? 1 : 0, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                                className="text-white/70 text-sm md:text-base font-medium leading-relaxed max-w-xl mb-9"
                            >
                                <span className="inline-flex items-center gap-2 text-amber-300/90 font-bold mr-1">
                                    <Sparkles className="h-4 w-4 shrink-0" />
                                </span>
                                <span className="text-white/85 font-bold">Plataforma de inteligencia artificial con arquitectura RAG</span> para empresas. Agentes IA que consultan tu base de conocimiento y toman decisiones en tiempo real.
                            </motion.h2>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: ready ? 1 : 0, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.6 }}
                                className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3"
                            >
                                <Button
                                    size="lg"
                                    onClick={() => {
                                        gtagEvent("click_cta_to_form", {
                                            event_category: "cta",
                                            event_label: "aplicaciones_hero",
                                            location: "aplicaciones_primary",
                                        })
                                        openDrawer()
                                    }}
                                    className="group h-14 px-8 text-sm font-black tracking-wide bg-amber-400/10 hover:bg-amber-400/20 text-amber-200 hover:text-white border border-amber-400/40 hover:border-amber-300 backdrop-blur-md shadow-[0_0_30px_-5px_rgba(251,191,36,0.4)] hover:shadow-[0_0_40px_-5px_rgba(251,191,36,0.6)] transition-all rounded-xl active:scale-95"
                                >
                                    Explorar la plataforma
                                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                </Button>
                                <Link href="#modulos" className="w-full sm:w-auto">
                                    <Button
                                        size="lg"
                                        variant="outline"
                                        className="h-14 px-8 text-sm font-black tracking-wide border border-white/15 text-white bg-white/[0.03] backdrop-blur-md hover:bg-white/[0.06] transition-all rounded-xl w-full sm:w-auto active:scale-95"
                                    >
                                        Ver módulos
                                    </Button>
                                </Link>
                            </motion.div>
                        </div>
                    </div>
                </div>

                <div className="absolute top-0 inset-x-0 h-[2px] bg-white/[0.04] z-20 pointer-events-none">
                    <div
                        className="h-full bg-gradient-to-r from-amber-300 via-amber-400 to-amber-200 shadow-[0_0_12px_rgba(251,191,36,0.6)]"
                        style={{ width: `${scrollProgress * 100}%` }}
                    />
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: ready ? 1 : 0 }}
                    transition={{ delay: 1.2, duration: 0.8 }}
                    className="absolute bottom-8 right-8 z-10 hidden md:flex items-center gap-3 pointer-events-none"
                >
                    <span className="h-1.5 w-1.5 rounded-full bg-amber-400 animate-pulse" />
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-amber-300">
                        {activePhase}
                    </span>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: ready && scrollProgress < 0.05 ? 1 : 0 }}
                    transition={{ delay: 1.4, duration: 0.6 }}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 pointer-events-none"
                >
                    <span className="text-[9px] font-black uppercase tracking-[0.4em] text-white/40">
                        Scroll para activar el ecosistema
                    </span>
                    <motion.div
                        animate={{ y: [0, 6, 0] }}
                        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                        className="h-8 w-[1px] bg-gradient-to-b from-amber-400/60 to-transparent"
                    />
                </motion.div>

                <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-[#0a0f1e] pointer-events-none" />
            </div>
        </section>
    )
}
