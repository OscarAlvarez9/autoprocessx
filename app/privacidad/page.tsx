import type { Metadata } from "next"
import Link from "next/link"
import LegalShell from "@/components/LegalShell"

export const metadata: Metadata = {
    title: { absolute: "Política de privacidad y protección de datos | SEOscar" },
    description: "Cómo tratamos tus datos en SEOscar: finalidad, base legal, plazos de conservación y tus derechos de acceso, conforme al RGPD y a la LOPDGDD española vigente.",
    alternates: { canonical: "https://www.seoscar.com/privacidad" },
    robots: { index: true, follow: true },
}

// TODO (datos reales de empresa): rellenar identidad del responsable del
// tratamiento (razón social, NIF, domicilio), encargados de tratamiento reales
// (hosting, email, CRM, analítica) y plazos de conservación concretos.

export default function PrivacidadPage() {
    return (
        <LegalShell
            title="Política de privacidad"
            intro="Cómo tratamos tus datos personales conforme al RGPD (UE 2016/679) y la LOPDGDD."
            updatedAt="TODO: fecha de publicación"
        >
            <section>
                <h2>1. Responsable del tratamiento</h2>
                <ul>
                    <li><strong>Responsable:</strong> {/* TODO: razón social / nombre */} —</li>
                    <li><strong>NIF / CIF:</strong> {/* TODO */} —</li>
                    <li><strong>Domicilio:</strong> {/* TODO */} —</li>
                    <li><strong>Email:</strong> contacta@seoscar.com</li>
                </ul>
            </section>

            <section>
                <h2>2. Datos que tratamos y finalidad</h2>
                <p>Tratamos los datos que nos facilitas voluntariamente a través de:</p>
                <ul>
                    <li><strong>Formularios de contacto:</strong> nombre, email y mensaje, para atender tu consulta y enviarte información comercial relacionada.</li>
                    <li><strong>Agendado de reuniones (Calendly):</strong> datos de contacto para gestionar la cita.</li>
                    <li><strong>Navegación:</strong> datos analíticos y técnicos, solo si aceptas las cookies correspondientes.</li>
                </ul>
            </section>

            <section>
                <h2>3. Legitimación</h2>
                <p>
                    La base jurídica es tu <strong>consentimiento</strong> (art. 6.1.a RGPD) al
                    enviar un formulario o aceptar cookies, y el <strong>interés legítimo</strong>
                    en responder a tus solicitudes y mantener la seguridad del sitio.
                </p>
            </section>

            <section>
                <h2>4. Conservación</h2>
                <p>
                    Conservamos los datos mientras dure la relación comercial y, después, durante
                    los plazos legales aplicables. {/* TODO: detallar plazos concretos */}
                </p>
            </section>

            <section>
                <h2>5. Destinatarios y encargados de tratamiento</h2>
                <p>
                    No cedemos tus datos a terceros salvo obligación legal. Usamos proveedores que
                    actúan como encargados de tratamiento {/* TODO: listar reales: hosting, email, CRM, Google */}:
                    alojamiento web, correo electrónico, agendado de citas y analítica. Algunos
                    pueden realizar transferencias internacionales con garantías adecuadas.
                </p>
            </section>

            <section>
                <h2>6. Tus derechos</h2>
                <p>
                    Puedes ejercer tus derechos de acceso, rectificación, supresión, oposición,
                    limitación y portabilidad escribiendo a <a href="mailto:contacta@seoscar.com">contacta@seoscar.com</a>.
                    También puedes reclamar ante la Agencia Española de Protección de Datos
                    (<a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer">aepd.es</a>).
                </p>
            </section>

            <section>
                <h2>7. Cookies</h2>
                <p>
                    Este sitio usa cookies. Consulta la <Link href="/cookies">política de cookies</Link> para
                    más detalle y para gestionar tu consentimiento.
                </p>
            </section>
        </LegalShell>
    )
}
