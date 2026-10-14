import ThemeRegistry from "@/components/mui/ThemeRegistry"
import LegalMui from "@/components/mui/LegalMui"

interface LegalShellProps {
    title: string
    /** Short subtitle shown under the H1 */
    intro: string
    /** ISO date of last update, shown as a small note */
    updatedAt: string
    children: React.ReactNode
}

/**
 * Shared shell for legal pages (aviso legal, privacidad, cookies).
 * Usa la cabecera y el pie de la web actual (MUI); antes tiraba de la
 * Navigation y el Footer de AutoProcessX.
 */
export default function LegalShell({ title, intro, updatedAt, children }: LegalShellProps) {
    return (
        <ThemeRegistry>
            <LegalMui title={title} intro={intro} updatedAt={updatedAt}>
                {children}
            </LegalMui>
        </ThemeRegistry>
    )
}
