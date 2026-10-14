"use client"

import { forwardRef } from "react"
import NextLink from "next/link"
import { useLocale } from "@/components/LocaleProvider"
import { localizePath } from "@/lib/i18n"

type Props = React.ComponentProps<typeof NextLink>

// next/link que pone el prefijo /ca cuando la página está en catalán. Los
// componentes escriben siempre la ruta en castellano ("/metodo") y este Link
// la lleva a "/ca/metodo" si toca. El blog y los enlaces externos no cambian.
const LocaleLink = forwardRef<HTMLAnchorElement, Props>(function LocaleLink({ href, ...rest }, ref) {
  const locale = useLocale()
  const to = typeof href === "string" ? localizePath(href, locale) : href
  return <NextLink ref={ref} href={to} {...rest} />
})

export default LocaleLink
