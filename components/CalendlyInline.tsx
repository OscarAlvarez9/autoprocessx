"use client"

import Script from "next/script"

interface CalendlyInlineProps {
    url?: string
    height?: number
    /** primary accent color (hex sin #) — default amber del site */
    primaryColor?: string
    /** background color del widget (hex sin #) — default navy del site */
    backgroundColor?: string
    /** text color del widget (hex sin #) — default blanco */
    textColor?: string
}

export default function CalendlyInline({
    url = "https://calendly.com/contacta-autoprocessx/30min",
    height = 700,
    primaryColor = "fbbf24",
    backgroundColor = "0F1424",
    textColor = "ffffff",
}: CalendlyInlineProps) {
    const params = new URLSearchParams({
        primary_color: primaryColor,
        background_color: backgroundColor,
        text_color: textColor,
        hide_event_type_details: "0",
        hide_gdpr_banner: "1",
    })
    const fullUrl = `${url}?${params.toString()}`

    return (
        <>
            <div
                className="calendly-inline-widget w-full"
                data-url={fullUrl}
                style={{ minWidth: "320px", height: `${height}px` }}
            />
            <Script
                src="https://assets.calendly.com/assets/external/widget.js"
                strategy="lazyOnload"
            />
        </>
    )
}
