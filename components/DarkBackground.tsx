"use client"

import { motion } from "framer-motion"

type AccentKey = "accent" | "cyan" | "secondary" | "primary" | "neutral"

const accentRgb: Record<AccentKey, string> = {
    accent: "251, 191, 36",
    cyan: "34, 211, 238",
    secondary: "245, 158, 11",
    primary: "251, 191, 36",
    neutral: "120, 120, 140",
}

type Props = {
    accent?: AccentKey
    secondaryAccent?: AccentKey
    intensity?: "soft" | "medium" | "strong"
    grid?: boolean
    beam?: boolean
}

export default function DarkBackground({
    accent = "accent",
    secondaryAccent,
    intensity = "medium",
    grid = false,
    beam = false,
}: Props) {
    const rgb = accentRgb[accent]
    const rgb2 = secondaryAccent ? accentRgb[secondaryAccent] : rgb

    const alphaTop =
        intensity === "soft" ? 0.1 : intensity === "strong" ? 0.24 : 0.16
    const alphaSide =
        intensity === "soft" ? 0.06 : intensity === "strong" ? 0.14 : 0.09

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Base — deep navy, never black */}
            <div
                className="absolute inset-0"
                style={{ background: "#05070F" }}
            />

            {/* Animated primary orb — slow drift + breath */}
            <motion.div
                className="absolute rounded-full blur-[120px]"
                style={{
                    width: "50vw",
                    height: "50vw",
                    background: `rgba(${rgb}, ${alphaTop})`,
                    top: "-15%",
                    left: "10%",
                }}
                animate={{
                    x: ["0%", "30%", "-10%", "0%"],
                    y: ["0%", "15%", "25%", "0%"],
                    scale: [1, 1.15, 0.9, 1],
                }}
                transition={{
                    duration: 26,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            {/* Animated secondary orb — opposite drift */}
            <motion.div
                className="absolute rounded-full blur-[140px]"
                style={{
                    width: "45vw",
                    height: "45vw",
                    background: `rgba(${rgb2}, ${alphaSide * 1.2})`,
                    bottom: "-20%",
                    right: "5%",
                }}
                animate={{
                    x: ["0%", "-25%", "15%", "0%"],
                    y: ["0%", "-20%", "10%", "0%"],
                    scale: [1, 0.85, 1.2, 1],
                }}
                transition={{
                    duration: 32,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            {/* Animated tertiary orb — center breath */}
            <motion.div
                className="absolute rounded-full blur-[160px]"
                style={{
                    width: "40vw",
                    height: "40vw",
                    background: `rgba(${rgb}, ${alphaSide * 0.8})`,
                    top: "40%",
                    left: "-10%",
                }}
                animate={{
                    x: ["0%", "40%", "20%", "0%"],
                    y: ["0%", "-15%", "20%", "0%"],
                    opacity: [0.6, 1, 0.7, 0.6],
                }}
                transition={{
                    duration: 40,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            {/* Aurora sweep — slow diagonal gradient shift */}
            <motion.div
                className="absolute inset-0 opacity-40"
                style={{
                    background: `conic-gradient(from 0deg at 50% 50%, transparent 0%, rgba(${rgb}, ${alphaSide * 0.6}) 25%, transparent 50%, rgba(${rgb2}, ${alphaSide * 0.5}) 75%, transparent 100%)`,
                    filter: "blur(80px)",
                }}
                animate={{ rotate: [0, 360] }}
                transition={{
                    duration: 90,
                    repeat: Infinity,
                    ease: "linear",
                }}
            />

            {/* Fine grid — faded, double fade via mask */}
            {grid && (
                <div
                    className="absolute inset-0 opacity-[0.05]"
                    style={{
                        backgroundImage:
                            "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
                        backgroundSize: "64px 64px",
                        maskImage:
                            "radial-gradient(ellipse 80% 70% at 50% 50%, black 40%, transparent 100%)",
                        WebkitMaskImage:
                            "radial-gradient(ellipse 80% 70% at 50% 50%, black 40%, transparent 100%)",
                    }}
                />
            )}

            {/* Slow scanning beam */}
            {beam && (
                <motion.div
                    className="absolute left-0 right-0 h-[1px] opacity-30"
                    style={{
                        background: `linear-gradient(90deg, transparent, rgba(${rgb}, 0.8), transparent)`,
                        boxShadow: `0 0 20px rgba(${rgb}, 0.3)`,
                    }}
                    animate={{ top: ["-5%", "105%"] }}
                    transition={{
                        duration: 14,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                />
            )}

            {/* Noise texture — SVG turbulence */}
            <div
                className="absolute inset-0 opacity-[0.04] mix-blend-overlay"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
                    backgroundSize: "200px 200px",
                }}
            />

        </div>
    )
}
