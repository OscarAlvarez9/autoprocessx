"use client"

import { REOPEN_EVENT } from "@/components/CookieConsent"

/** Re-opens the cookie consent banner so the user can change their choice. */
export default function CookiePreferencesButton() {
    return (
        <button
            onClick={() => window.dispatchEvent(new Event(REOPEN_EVENT))}
            className="h-11 px-5 rounded-xl border border-accent/40 bg-accent/10 text-accent hover:bg-accent/20 text-xs font-black uppercase tracking-[0.15em] transition-all"
        >
            Cambiar mis preferencias de cookies
        </button>
    )
}
