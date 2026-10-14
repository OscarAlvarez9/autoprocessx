import type { Metadata } from "next"
import { i18nAlternates } from "@/lib/i18n"
import Link from "@/components/LocaleLink"
import LegalShell from "@/components/LegalShell"
import CookiePreferencesButton from "@/components/CookiePreferencesButton"

export const metadata: Metadata = {
    title: { absolute: "Política de galetes: ús i com gestionar-les | SEOscar" },
    description: "Quines galetes fa servir el web de SEOscar i per a què, i com acceptar-les, rebutjar-les o retirar el consentiment quan vulguis des del navegador.",
    alternates: i18nAlternates("/cookies", "ca"),
    robots: { index: true, follow: true },
}

// TODO (dades reals): el mateix que la versió castellana, confirmar el llistat
// de galetes i proveïdors reals i els seus terminis de caducitat.

export default function GaletesPageCa() {
    return (
        <LegalShell
            title="Política de galetes"
            intro="Quines galetes fem servir, per a què, i com les pots acceptar o rebutjar."
            updatedAt="14 d'octubre de 2026"
        >
            <section>
                <h2>1. Què són les galetes</h2>
                <p>
                    Les galetes (cookies) són petits fitxers que s&apos;emmagatzemen al teu
                    dispositiu quan visites un lloc web. Serveixen per recordar la teva
                    activitat i les teves preferències.
                </p>
            </section>

            <section>
                <h2>2. Galetes que fem servir</h2>
                <ul>
                    <li><strong>Tècniques (necessàries):</strong> imprescindibles per al funcionament del lloc i per recordar la teva elecció sobre les galetes. No requereixen consentiment.</li>
                    <li><strong>Analítiques i de màrqueting:</strong> Google Tag Manager i Google Analytics (Google Ireland Ltd.), que mesuren l&apos;ús del lloc. <strong>Només s&apos;activen si les acceptes.</strong></li>
                </ul>
            </section>

            <section>
                <h2>3. Consentiment</h2>
                <p>
                    La primera vegada que hi entres et mostrem un avís per acceptar o rebutjar
                    les galetes no necessàries. Mentre no les acceptis, <strong>no es carrega cap
                    script d&apos;analítica ni de màrqueting</strong>. Pots canviar la teva decisió en qualsevol moment:
                </p>
                <div className="mt-5">
                    <CookiePreferencesButton />
                </div>
            </section>

            <section>
                <h2>4. Com gestionar-les al navegador</h2>
                <p>
                    A més, pots bloquejar o eliminar les galetes des de la configuració del teu
                    navegador (Chrome, Firefox, Safari, Edge). Tingues en compte que algunes
                    funcions se&apos;n podrien veure afectades.
                </p>
            </section>

            <section>
                <h2>5. Més informació</h2>
                <p>
                    Consulta també la nostra <Link href="/privacidad">política de privadesa</Link>.
                </p>
            </section>
        </LegalShell>
    )
}
