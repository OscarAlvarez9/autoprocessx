import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import Breadcrumbs from "@/components/Breadcrumbs"

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
 * Reuses the site-wide Navigation + Footer and a centered prose column.
 */
export default function LegalShell({ title, intro, updatedAt, children }: LegalShellProps) {
    return (
        <main className="min-h-screen bg-background text-foreground selection:bg-primary/20">
            <Navigation />

            <section className="relative pt-32 pb-16 md:pt-36 md:pb-24">
                <div className="container relative z-10 px-6 mx-auto max-w-3xl">
                    <Breadcrumbs items={[{ label: title }]} className="mb-10 md:mb-12" />

                    <h1 className="text-3xl md:text-5xl font-black tracking-[-0.025em] leading-[1.05] mb-5">
                        {title}
                    </h1>
                    <p className="text-base md:text-lg text-zinc-600 font-medium leading-relaxed mb-3">
                        {intro}
                    </p>
                    <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-zinc-500 mb-12">
                        Última actualización · {updatedAt}
                    </p>

                    <div className="space-y-8 text-zinc-600 text-sm md:text-base font-medium leading-relaxed [&_h2]:text-[#09090B] [&_h2]:font-black [&_h2]:text-lg [&_h2]:md:text-xl [&_h2]:tracking-tight [&_h2]:mb-3 [&_h2]:mt-2 [&_a]:text-accent [&_a]:underline [&_a]:underline-offset-4 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1.5 [&_strong]:text-[#09090B]">
                        {children}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
