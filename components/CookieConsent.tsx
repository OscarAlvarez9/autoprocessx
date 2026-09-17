"use client"

import { useEffect, useRef, useState } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import Script from "next/script"

const STORAGE_KEY = "apx-cookie-consent"
const GTM_ID = "GTM-WS2K2D8W"
const GA_ID = "G-P9MZJ98X97"

type Consent = "granted" | "denied" | null

/** Event other components can dispatch to reopen the banner (e.g. /cookies page). */
export const REOPEN_EVENT = "apx:cookie-reopen"

/**
 * Envía un page_view por cada cambio de ruta dentro de la SPA. El primero ya
 * lo manda el `gtag('config', ...)` de carga inicial (comportamiento por
 * defecto de gtag.js); este componente solo cubre la navegación posterior,
 * que el App Router resuelve con la History API y gtag.js no ve solo.
 * Ojo: si el contenedor de GTM tiene su propia etiqueta de configuración GA4
 * con un disparador de "Cambio de historial", esto puede duplicar el
 * page_view. Revisar en tagmanager.google.com antes de dar esto por cerrado.
 */
function PageViewTracker() {
    const pathname = usePathname()
    const isFirstRender = useRef(true)

    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false
            return
        }
        const w = window as unknown as { gtag?: (...args: unknown[]) => void }
        if (typeof w.gtag === "function") {
            w.gtag("event", "page_view", {
                page_path: pathname,
                page_location: window.location.href,
                page_title: document.title,
            })
        }
    }, [pathname])

    return null
}

/**
 * RGPD-compliant cookie consent. Analytics/marketing scripts (GTM + GA) are NOT
 * loaded until the user explicitly accepts, nothing fires on first paint.
 */
export default function CookieConsent() {
    // undefined = not yet read from storage (avoids SSR/hydration flash)
    const [consent, setConsent] = useState<Consent | undefined>(undefined)

    useEffect(() => {
        const stored = (typeof window !== "undefined"
            ? window.localStorage.getItem(STORAGE_KEY)
            : null) as Consent
        setConsent(stored === "granted" || stored === "denied" ? stored : null)

        const reopen = () => setConsent(null)
        window.addEventListener(REOPEN_EVENT, reopen)
        return () => window.removeEventListener(REOPEN_EVENT, reopen)
    }, [])

    const decide = (value: Exclude<Consent, null>) => {
        window.localStorage.setItem(STORAGE_KEY, value)
        setConsent(value)
    }

    const loadAnalytics = consent === "granted"
    const showBanner = consent === null
    const sans = "var(--font-sans-body), var(--font-geist-sans), system-ui, sans-serif"

    return (
        <>
            {loadAnalytics && (
                <>
                    {/* Google Tag Manager */}
                    <Script id="gtm-init" strategy="afterInteractive">
                        {`window.dataLayer = window.dataLayer || [];window.dataLayer.push({'gtm.start': new Date().getTime(), event: 'gtm.js'});`}
                    </Script>
                    <Script
                        id="gtm-script"
                        src={`https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`}
                        strategy="afterInteractive"
                    />
                    {/* Google Analytics */}
                    <Script
                        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
                        strategy="afterInteractive"
                    />
                    <Script id="google-analytics" strategy="afterInteractive">
                        {`window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', '${GA_ID}');`}
                    </Script>
                    <PageViewTracker />
                </>
            )}

            {showBanner && (
                <div
                    role="dialog"
                    aria-label="Consentimiento de cookies"
                    style={{ fontFamily: sans }}
                    className="fixed inset-x-0 bottom-0 z-[100] p-4 md:p-6"
                >
                    <div
                        className="mx-auto max-w-3xl rounded-2xl p-5 md:p-6 backdrop-blur-md"
                        style={{
                            background: "rgba(254,253,249,.97)",
                            border: "1px solid rgba(20,32,29,.16)",
                            boxShadow: "0 -8px 40px -12px rgba(20,32,29,.25)",
                        }}
                    >
                        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                            <p className="text-sm leading-relaxed" style={{ color: "#26332F" }}>
                                Uso cookies propias y de terceros para analítica. No se activan
                                hasta que las aceptas. Consulta la{" "}
                                <Link
                                    href="/cookies"
                                    className="font-semibold underline underline-offset-4 transition-colors"
                                    style={{ color: "#14201D", textDecorationColor: "rgba(20,32,29,.32)" }}
                                >
                                    política de cookies
                                </Link>
                                .
                            </p>
                            <div className="flex shrink-0 gap-2.5">
                                <button
                                    onClick={() => decide("denied")}
                                    className="h-10 px-5 rounded-xl text-sm font-semibold transition-colors"
                                    style={{ border: "1px solid rgba(20,32,29,.16)", color: "#14201D", background: "transparent" }}
                                    onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#013E37"; e.currentTarget.style.color = "#013E37" }}
                                    onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(20,32,29,.16)"; e.currentTarget.style.color = "#14201D" }}
                                >
                                    Rechazar
                                </button>
                                <button
                                    onClick={() => decide("granted")}
                                    className="h-10 px-5 rounded-xl text-sm font-semibold transition-colors"
                                    style={{ background: "#013E37", color: "#FFEFB3" }}
                                    onMouseEnter={(e) => { e.currentTarget.style.background = "#012A25" }}
                                    onMouseLeave={(e) => { e.currentTarget.style.background = "#013E37" }}
                                >
                                    Aceptar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
