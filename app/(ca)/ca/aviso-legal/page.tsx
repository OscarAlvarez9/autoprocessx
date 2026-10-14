import type { Metadata } from "next"
import { i18nAlternates } from "@/lib/i18n"
import LegalShell from "@/components/LegalShell"

export const metadata: Metadata = {
    title: { absolute: "Avís legal i condicions d'ús del lloc web | SEOscar" },
    description: "Avís legal de SEOscar: titularitat del lloc web, condicions d'ús, propietat intel·lectual i legislació aplicable d'acord amb la LSSI-CE espanyola vigent.",
    alternates: i18nAlternates("/aviso-legal", "ca"),
    robots: { index: true, follow: true },
}

// TODO (dades reals de l'empresa): els mateixos buits que la versió castellana
// (raó social, NIF/CIF, domicili, dades registrals). S'omplen alhora que allà.

export default function AvisLegalPageCa() {
    return (
        <LegalShell
            title="Avís legal"
            intro="Condicions generals d'accés i d'ús d'aquest lloc web."
            updatedAt="14 d'octubre de 2026"
        >
            <section>
                <h2>1. Dades identificatives del titular</h2>
                <p>
                    En compliment de l&apos;article 10 de la Llei 34/2002, de serveis de la
                    societat de la informació i de comerç electrònic (LSSI-CE), s&apos;informa:
                </p>
                <ul>
                    <li><strong>Titular:</strong> {/* TODO: raó social / nom de l'autònom */} —</li>
                    <li><strong>NIF / CIF:</strong> {/* TODO */} —</li>
                    <li><strong>Domicili:</strong> {/* TODO: adreça fiscal completa */} —</li>
                    <li><strong>Correu electrònic de contacte:</strong> contacta@seoscar.com</li>
                    <li><strong>Dades registrals:</strong> {/* TODO: si està inscrit al Registre Mercantil */} —</li>
                </ul>
            </section>

            <section>
                <h2>2. Objecte</h2>
                <p>
                    Aquest avís legal regula l&apos;ús del lloc web seoscar.com, de titularitat
                    del titular indicat, que posa a disposició dels usuaris informació sobre
                    els seus serveis d&apos;intel·ligència artificial i automatització.
                </p>
            </section>

            <section>
                <h2>3. Condicions d&apos;ús</h2>
                <p>
                    L&apos;accés al lloc web és gratuït i atribueix la condició d&apos;usuari, que es
                    compromet a fer un ús lícit dels continguts. El titular es reserva el dret
                    de modificar la informació del lloc sense avís previ.
                </p>
            </section>

            <section>
                <h2>4. Propietat intel·lectual i industrial</h2>
                <p>
                    Tots els continguts del lloc (textos, imatges, marques, codi font i
                    disseny) són de titularitat del titular o de tercers que n&apos;han autoritzat
                    l&apos;ús, i estan protegits per la normativa de propietat intel·lectual i
                    industrial.
                </p>
            </section>

            <section>
                <h2>5. Responsabilitat</h2>
                <p>
                    El titular no es fa responsable dels danys derivats de l&apos;ús indegut del
                    lloc ni de la presència de virus o altres elements que puguin alterar els
                    sistemes informàtics de l&apos;usuari.
                </p>
            </section>

            <section>
                <h2>6. Legislació aplicable</h2>
                <p>
                    Aquest avís legal es regeix per la legislació espanyola. Per a la resolució
                    de conflictes, les parts se sotmeten als jutjats i tribunals del domicili
                    del titular, llevat que la normativa de consumidors estableixi un altre fur.
                </p>
            </section>
        </LegalShell>
    )
}
