"use client"

import { createContext, useContext } from "react"
import type { Locale } from "@/lib/i18n"

const LocaleContext = createContext<Locale>("es")

export default function LocaleProvider({ locale, children }: { locale: Locale; children: React.ReactNode }) {
  return <LocaleContext.Provider value={locale}>{children}</LocaleContext.Provider>
}

/** Idioma de la página actual ("es" o "ca"). */
export function useLocale(): Locale {
  return useContext(LocaleContext)
}
