"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Script from "next/script"

const STORAGE_KEY = "apx-cookie-consent"
const GTM_ID = "GTM-WD6GMRVN"
const GA_ID = "G-P9MZJ98X97"

type Consent = "granted" | "denied" | null

/** Event other components can dispatch to reopen the banner (e.g. /cookies page). */
export const REOPEN_EVENT = "apx:cookie-reopen"

/**
 * RGPD-compliant cookie consent. Analytics/marketing scripts (GTM + GA) are NOT
 * loaded until the user explicitly accepts — nothing fires on first paint.
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
                </>
            )}

            {showBanner && (
                <div
                    role="dialog"
                    aria-label="Consentimiento de cookies"
                    className="fixed inset-x-0 bottom-0 z-[100] p-4 md:p-6"
                >
                    <div className="mx-auto max-w-3xl rounded-2xl border border-[#E4E4E7] bg-[#FFFFFF]/95 backdrop-blur-md p-5 md:p-6 shadow-[0_-8px_40px_-12px_rgba(0,0,0,0.6)]">
                        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                            <p className="text-sm text-zinc-600 font-medium leading-relaxed">
                                Usamos cookies propias y de terceros para analítica. No se activan
                                hasta que las aceptas. Consulta la{" "}
                                <Link href="/cookies" className="text-accent underline underline-offset-4">
                                    política de cookies
                                </Link>
                                .
                            </p>
                            <div className="flex shrink-0 gap-2.5">
                                <button
                                    onClick={() => decide("denied")}
                                    className="h-10 px-4 rounded-xl border border-[#E4E4E7] text-zinc-600 hover:text-[#09090B] hover:border-[#E4E4E7] text-xs font-black uppercase tracking-[0.15em] transition-all"
                                >
                                    Rechazar
                                </button>
                                <button
                                    onClick={() => decide("granted")}
                                    className="h-10 px-4 rounded-xl border border-accent/40 bg-accent/10 text-accent hover:bg-accent/20 text-xs font-black uppercase tracking-[0.15em] transition-all"
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
