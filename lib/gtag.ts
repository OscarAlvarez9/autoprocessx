// El ID de medición de GA4 vive en components/CookieConsent.tsx (única
// pieza que lo necesita, para inyectar el script tras el consentimiento).

type GtagEventParams = {
  event_category?: string
  event_label?: string
  value?: number
  [key: string]: string | number | boolean | undefined
}

/**
 * Fires a GA4 custom event via window.gtag.
 * @param action  - Event name shown in GA4 (e.g. 'cta_click')
 * @param params  - Optional additional parameters
 */
export function gtagEvent(action: string, params?: GtagEventParams) {
  if (typeof window !== 'undefined' && typeof (window as any).gtag === 'function') {
    ;(window as any).gtag('event', action, params)
  }
}
