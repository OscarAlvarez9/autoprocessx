"use client"

import { useEffect, useState } from "react"

/**
 * Decide qué set de frames cargar (full-size vs _sm) según el viewport.
 * Devuelve la base path correspondiente — ej. `/assets/robot_frames` o `/assets/robot_frames_sm`.
 *
 * Para evitar mismatches de SSR, en el primer render siempre devuelve el path full
 * (usuarios desktop son la mayoría). Tras montar, si el viewport es < breakpoint
 * cambia al variante sm. Como el cambio ocurre antes de que se ejecute el preload
 * en useEffect, no hay descarga doble.
 */
export function useFrameBasePath(baseDir: string, breakpoint = 768): string {
    const fullPath = `/assets/${baseDir}`
    const smPath = `/assets/${baseDir}_sm`
    const [path, setPath] = useState(fullPath)

    useEffect(() => {
        const mq = window.matchMedia(`(max-width: ${breakpoint - 1}px)`)
        if (mq.matches) setPath(smPath)
        // No listener para cambios de viewport en runtime — el preload ya empezó
        // y cambiar de variante a media animación reproduciría errores.
    }, [smPath])

    return path
}
