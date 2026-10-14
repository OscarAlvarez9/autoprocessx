import type { Metadata } from "next"
import { i18nAlternates } from "@/lib/i18n"
import Link from "@/components/LocaleLink"
import LegalShell from "@/components/LegalShell"

export const metadata: Metadata = {
    title: { absolute: "Política de privadesa i protecció de dades | SEOscar" },
    description: "Com tractem les teves dades a SEOscar: finalitat, base legal, terminis de conservació i els teus drets d'accés, d'acord amb el RGPD i la LOPDGDD vigents.",
    alternates: i18nAlternates("/privacidad", "ca"),
    robots: { index: true, follow: true },
}

// TODO (dades reals de l'empresa): els mateixos buits que la versió castellana
// (identitat del responsable, encarregats reals i terminis concrets).

export default function PrivadesaPageCa() {
    return (
        <LegalShell
            title="Política de privadesa"
            intro="Com tractem les teves dades personals d'acord amb el RGPD (UE 2016/679) i la LOPDGDD."
            updatedAt="14 d'octubre de 2026"
        >
            <section>
                <h2>1. Responsable del tractament</h2>
                <ul>
                    <li><strong>Responsable:</strong> {/* TODO: raó social / nom */} —</li>
                    <li><strong>NIF / CIF:</strong> {/* TODO */} —</li>
                    <li><strong>Domicili:</strong> {/* TODO */} —</li>
                    <li><strong>Correu electrònic:</strong> contacta@seoscar.com</li>
                </ul>
            </section>

            <section>
                <h2>2. Dades que tractem i finalitat</h2>
                <p>Tractem les dades que ens facilites voluntàriament a través de:</p>
                <ul>
                    <li><strong>Formularis de contacte:</strong> nom, correu electrònic i missatge, per atendre la teva consulta i enviar-te informació comercial relacionada.</li>
                    <li><strong>Programació de reunions (Calendly):</strong> dades de contacte per gestionar la cita.</li>
                    <li><strong>Navegació:</strong> dades analítiques i tècniques, només si acceptes les galetes corresponents.</li>
                </ul>
            </section>

            <section>
                <h2>3. Legitimació</h2>
                <p>
                    La base jurídica és el teu <strong>consentiment</strong> (art. 6.1.a RGPD) en
                    enviar un formulari o acceptar galetes, i l&apos;<strong>interès legítim</strong>{" "}
                    a respondre les teves sol·licituds i mantenir la seguretat del lloc.
                </p>
            </section>

            <section>
                <h2>4. Conservació</h2>
                <p>
                    Conservem les dades mentre duri la relació comercial i, després, durant
                    els terminis legals aplicables. {/* TODO: detallar terminis concrets */}
                </p>
            </section>

            <section>
                <h2>5. Destinataris i encarregats del tractament</h2>
                <p>
                    No cedim les teves dades a tercers llevat d&apos;obligació legal. Fem servir
                    proveïdors que actuen com a encarregats del tractament {/* TODO: llistar els reals: hosting, correu, CRM, Google */}:
                    allotjament web, correu electrònic, programació de cites i analítica. Alguns
                    poden fer transferències internacionals amb garanties adequades.
                </p>
            </section>

            <section>
                <h2>6. Els teus drets</h2>
                <p>
                    Pots exercir els teus drets d&apos;accés, rectificació, supressió, oposició,
                    limitació i portabilitat escrivint a <a href="mailto:contacta@seoscar.com">contacta@seoscar.com</a>.
                    També pots presentar una reclamació davant l&apos;Agència Espanyola de Protecció de Dades
                    (<a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer">aepd.es</a>).
                </p>
            </section>

            <section>
                <h2>7. Galetes</h2>
                <p>
                    Aquest lloc fa servir galetes. Consulta la <Link href="/cookies">política de galetes</Link> per
                    a més detall i per gestionar el teu consentiment.
                </p>
            </section>
        </LegalShell>
    )
}
