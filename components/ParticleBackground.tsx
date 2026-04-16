"use client"

import { useEffect, useState, useCallback } from "react"
import Particles, { initParticlesEngine } from "@tsparticles/react"
import { loadSlim } from "@tsparticles/slim"
import type { ISourceOptions } from "@tsparticles/engine"

interface ParticleBackgroundProps {
    variant?: "network" | "constellation" | "ambient"
    color?: string
    className?: string
}

const presets: Record<string, ISourceOptions> = {
    network: {
        fullScreen: { enable: false },
        fpsLimit: 60,
        particles: {
            number: { value: 40, density: { enable: true } },
            color: { value: "#0F47AF" },
            opacity: { value: { min: 0.1, max: 0.4 } },
            size: { value: { min: 1, max: 2.5 } },
            move: { enable: true, speed: 0.6, direction: "none", outModes: { default: "bounce" } },
            links: { enable: true, color: "#0F47AF", opacity: 0.08, distance: 150, width: 1 },
        },
        interactivity: {
            events: { onHover: { enable: true, mode: "grab" } },
            modes: { grab: { distance: 180, links: { opacity: 0.2 } } },
        },
        detectRetina: true,
    },
    constellation: {
        fullScreen: { enable: false },
        fpsLimit: 60,
        particles: {
            number: { value: 25, density: { enable: true } },
            color: { value: "#059669" },
            opacity: { value: { min: 0.05, max: 0.3 } },
            size: { value: { min: 1, max: 3 } },
            move: { enable: true, speed: 0.3, direction: "none", outModes: { default: "out" } },
            links: { enable: true, color: "#059669", opacity: 0.06, distance: 200, width: 0.5 },
        },
        detectRetina: true,
    },
    ambient: {
        fullScreen: { enable: false },
        fpsLimit: 60,
        particles: {
            number: { value: 15 },
            color: { value: "#ffffff" },
            opacity: { value: { min: 0.02, max: 0.08 } },
            size: { value: { min: 1, max: 4 } },
            move: { enable: true, speed: 0.2, direction: "none", outModes: { default: "out" } },
            links: { enable: false },
        },
        detectRetina: true,
    },
}

export default function ParticleBackground({ variant = "network", color, className = "" }: ParticleBackgroundProps) {
    const [init, setInit] = useState(false)

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine)
        }).then(() => setInit(true))
    }, [])

    const options = { ...presets[variant] }
    if (color && options.particles) {
        (options.particles as any).color = { value: color };
        if ((options.particles as any).links) {
            (options.particles as any).links.color = color
        }
    }

    if (!init) return null

    return (
        <Particles
            className={`absolute inset-0 z-0 ${className}`}
            options={options}
        />
    )
}
