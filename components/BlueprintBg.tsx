// Textura de "blueprint" técnico para los heroes — grid finísimo de líneas ink
// al ~5% con máscara radial. Sustituye a los glows/orbes (tell de slop IA).
// Server component, sin coste. Úsalo dentro de una <section className="relative overflow-hidden">.
export default function BlueprintBg({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{
        backgroundImage:
          "linear-gradient(rgba(10,24,38,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(10,24,38,0.05) 1px, transparent 1px)",
        backgroundSize: "28px 28px",
        maskImage: "radial-gradient(ellipse 75% 60% at 28% 42%, black 18%, transparent 88%)",
        WebkitMaskImage: "radial-gradient(ellipse 75% 60% at 28% 42%, black 18%, transparent 88%)",
      }}
    />
  )
}
