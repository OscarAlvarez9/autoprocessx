import type { Metadata } from "next"
import LegalShell from "@/components/LegalShell"

export const metadata: Metadata = {
    title: { absolute: "Aviso legal y condiciones de uso del sitio | SEOscar" },
    description: "Aviso legal de SEOscar: titularidad del sitio web, condiciones de uso, propiedad intelectual y legislación aplicable conforme a la LSSI-CE española vigente.",
    alternates: { canonical: "https://www.seoscar.com/aviso-legal" },
    robots: { index: true, follow: true },
}

// TODO (datos reales de empresa): rellenar razón social, NIF/CIF, domicilio
// social, datos de inscripción registral (si aplica) y email de contacto.
// No publicar hasta que el titular confirme estos datos.

export default function AvisoLegalPage() {
    return (
        <LegalShell
            title="Aviso legal"
            intro="Condiciones generales de acceso y uso de este sitio web."
            updatedAt="TODO: fecha de publicación"
        >
            <section>
                <h2>1. Datos identificativos del titular</h2>
                <p>
                    En cumplimiento del artículo 10 de la Ley 34/2002, de Servicios de la
                    Sociedad de la Información y Comercio Electrónico (LSSI-CE), se informa:
                </p>
                <ul>
                    <li><strong>Titular:</strong> {/* TODO: razón social / nombre del autónomo */} —</li>
                    <li><strong>NIF / CIF:</strong> {/* TODO */} —</li>
                    <li><strong>Domicilio:</strong> {/* TODO: dirección fiscal completa */} —</li>
                    <li><strong>Email de contacto:</strong> contacta@seoscar.com</li>
                    <li><strong>Datos registrales:</strong> {/* TODO: si está inscrito en Registro Mercantil */} —</li>
                </ul>
            </section>

            <section>
                <h2>2. Objeto</h2>
                <p>
                    El presente aviso legal regula el uso del sitio web seoscar.com,
                    titularidad del titular indicado, que pone a disposición de los usuarios
                    información sobre sus servicios de inteligencia artificial y automatización.
                </p>
            </section>

            <section>
                <h2>3. Condiciones de uso</h2>
                <p>
                    El acceso al sitio web es gratuito y atribuye la condición de usuario, que
                    se compromete a hacer un uso lícito de los contenidos. El titular se reserva
                    el derecho a modificar la información del sitio sin previo aviso.
                </p>
            </section>

            <section>
                <h2>4. Propiedad intelectual e industrial</h2>
                <p>
                    Todos los contenidos del sitio (textos, imágenes, marcas, código fuente y
                    diseño) son titularidad del titular o de terceros que han autorizado su uso,
                    y están protegidos por la normativa de propiedad intelectual e industrial.
                </p>
            </section>

            <section>
                <h2>5. Responsabilidad</h2>
                <p>
                    El titular no se hace responsable de los daños derivados del uso indebido
                    del sitio ni de la presencia de virus u otros elementos que puedan alterar
                    los sistemas informáticos del usuario.
                </p>
            </section>

            <section>
                <h2>6. Legislación aplicable</h2>
                <p>
                    Este aviso legal se rige por la legislación española. Para la resolución de
                    conflictos las partes se someten a los juzgados y tribunales del domicilio
                    del titular, salvo que la normativa de consumidores establezca otro fuero.
                </p>
            </section>
        </LegalShell>
    )
}
