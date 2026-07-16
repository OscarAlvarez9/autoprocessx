/*
 * Nota firmada en 1ª persona — capa de voz humana sobre el "nosotros" técnico.
 * TODO Oscar: escribir/aprobar el texto. No inventado.
 */
export default function FounderNote({ className = "" }: { className?: string }) {
  return (
    <div className={`rounded-2xl border-l-2 border-primary bg-white border border-[#E4E4E7] p-6 md:p-8 ${className}`}>
      <div className="flex items-center gap-2 mb-3 text-primary">
        <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden />
        <span className="text-[10px] font-mono font-medium uppercase tracking-wide">Nota del fundador</span>
      </div>
      {/* TODO Oscar: nota en 1ª persona + línea de filosofía de ingeniería (placeholder). */}
      <p className="text-zinc-700 text-base md:text-lg font-medium leading-relaxed">
        «{/* TODO Oscar */}No vendo plantillas: diseño y escribo el código que va a producción, y te lo entrego. Si algo no se puede sostener en el tiempo, no lo despliego.»
      </p>
      <p className="mt-4 text-sm font-mono text-zinc-500">— Óscar Álvarez, fundador {/* TODO Oscar: firma/cargo final */}</p>
    </div>
  )
}
