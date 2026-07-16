import type { Metadata } from "next"
import Link from "next/link"
import LegalShell from "@/components/LegalShell"
import CookiePreferencesButton from "@/components/CookiePreferencesButton"

export const metadata: Metadata = {
    title: { absolute: "Política de cookies: uso y cómo gestionarlas | SEOscar" },
    description: "Qué cookies utiliza el sitio de SEOscar y con qué finalidad, y cómo aceptarlas, rechazarlas o retirar tu consentimiento cuando quieras desde tu navegador.",
    alternates: { canonical: "https://www.seoscar.com/cookies" },
    robots: { index: true, follow: true },
}

// TODO (datos reales): confirmar el listado de cookies/proveedores reales y sus
// plazos de caducidad cuando se cierre el stack de analítica/marketing.

export default function CookiesPage() {
    return (
        <LegalShell
            title="Política de cookies"
            intro="Qué cookies usamos, para qué, y cómo puedes aceptarlas o rechazarlas."
            updatedAt="TODO: fecha de publicación"
        >
            <section>
                <h2>1. Qué son las cookies</h2>
                <p>
                    Las cookies son pequeños archivos que se almacenan en tu dispositivo al
                    visitar un sitio web. Sirven para recordar tu actividad y preferencias.
                </p>
            </section>

            <section>
                <h2>2. Cookies que utilizamos</h2>
                <ul>
                    <li><strong>Técnicas (necesarias):</strong> imprescindibles para el funcionamiento del sitio y para recordar tu elección sobre cookies. No requieren consentimiento.</li>
                    <li><strong>Analíticas y de marketing:</strong> Google Tag Manager y Google Analytics (Google Ireland Ltd.), que miden el uso del sitio. <strong>Solo se activan si las aceptas.</strong></li>
                </ul>
            </section>

            <section>
                <h2>3. Consentimiento</h2>
                <p>
                    Al entrar por primera vez te mostramos un aviso para aceptar o rechazar las
                    cookies no necesarias. Mientras no aceptes, <strong>no se carga ningún script
                    de analítica ni marketing</strong>. Puedes cambiar tu decisión en cualquier momento:
                </p>
                <div className="mt-5">
                    <CookiePreferencesButton />
                </div>
            </section>

            <section>
                <h2>4. Cómo gestionarlas en tu navegador</h2>
                <p>
                    Además, puedes bloquear o eliminar las cookies desde la configuración de tu
                    navegador (Chrome, Firefox, Safari, Edge). Ten en cuenta que algunas funciones
                    podrían verse afectadas.
                </p>
            </section>

            <section>
                <h2>5. Más información</h2>
                <p>
                    Consulta también nuestra <Link href="/privacidad">política de privacidad</Link>.
                </p>
            </section>
        </LegalShell>
    )
}
