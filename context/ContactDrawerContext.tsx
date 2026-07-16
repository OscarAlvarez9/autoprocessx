"use client"

import React, { createContext, useContext, useState } from "react"

export type ContactMode = "form" | "calendar"

type ContactDrawerContextType = {
  isOpen: boolean
  mode: ContactMode
  /** Abre el panel. mode="form" (Solicitar auditoría) | "calendar" (Agendar llamada). */
  openDrawer: (mode?: ContactMode) => void
  closeDrawer: () => void
}

const ContactDrawerContext = createContext<ContactDrawerContextType | undefined>(undefined)

export function ContactDrawerProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const [mode, setMode] = useState<ContactMode>("form")

  const openDrawer = (m: ContactMode = "form") => {
    setMode(m)
    setIsOpen(true)
  }
  const closeDrawer = () => setIsOpen(false)

  return (
    <ContactDrawerContext.Provider value={{ isOpen, mode, openDrawer, closeDrawer }}>
      {children}
    </ContactDrawerContext.Provider>
  )
}

export function useContactDrawer() {
  const context = useContext(ContactDrawerContext)
  if (context === undefined) {
    throw new Error("useContactDrawer must be used within a ContactDrawerProvider")
  }
  return context
}
