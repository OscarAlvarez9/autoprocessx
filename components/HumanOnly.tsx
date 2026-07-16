"use client"

import { Suspense } from "react"
import { useSearchParams } from "next/navigation"

function Gate({ children }: { children: React.ReactNode }) {
  const params = useSearchParams()
  return params.get("variant") === "human" ? <>{children}</> : null
}

/**
 * Renderiza children solo cuando la URL lleva `?variant=human` (A/B test).
 * Isla cliente envuelta en Suspense (requisito de useSearchParams).
 */
export default function HumanOnly({ children }: { children: React.ReactNode }) {
  return (
    <Suspense fallback={null}>
      <Gate>{children}</Gate>
    </Suspense>
  )
}
