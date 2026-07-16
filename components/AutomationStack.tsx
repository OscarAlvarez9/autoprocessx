/*
 * Stack de automatización — grid de tarjetas (icono + herramienta + rol).
 * Estilo Flagship Light, acento champagne.
 * TODO Oscar: confirma/ajusta la lista exacta de herramientas y nombres.
 */

type Tool = { name: string; role: string; emoji: string }

const TOOLS: Tool[] = [
  { name: "n8n", role: "Orquestación", emoji: "🔗" },
  { name: "Docker", role: "Contenedores", emoji: "🐳" },
  { name: "OrbStack", role: "Entorno local", emoji: "🛰️" },
  { name: "Node.js", role: "Runtime & APIs", emoji: "🟢" },
  { name: "PostgreSQL", role: "Base de datos", emoji: "🐘" },
  { name: "Redis", role: "Colas & caché", emoji: "🧱" },
  { name: "Qdrant", role: "Vector DB (RAG)", emoji: "🧠" },
  { name: "Supabase", role: "Backend & Auth", emoji: "⚡" },
  { name: "Nginx", role: "Reverse proxy", emoji: "🌐" },
  { name: "Cron", role: "Scheduling", emoji: "⏱️" },
  { name: "REST · Webhooks", role: "Integraciones", emoji: "🔌" },
  { name: "OpenAI · Claude", role: "LLMs", emoji: "🤖" },
]

export default function AutomationStack() {
  return (
    <section className="py-16 md:py-28 bg-[#FAFAFA] border-t border-[#E4E4E7] relative overflow-hidden">
      {/* FX de fondo sutil */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-accent/[0.05] rounded-full blur-[140px]" />
      </div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter leading-tight">
            Tecnología de <span className="text-accent">vanguardia</span>
          </h2>
          <p className="text-zinc-600 text-base md:text-lg leading-relaxed mt-4">
            El stack que desplegamos en producción para automatizar, orquestar e integrar tu operativa — self-hosted y sin coste por ejecución.
          </p>
        </div>

        {/* Grid de herramientas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {TOOLS.map((t) => (
            <div
              key={t.name}
              className="group flex items-center gap-4 rounded-2xl border border-[#E4E4E7] bg-white p-4 md:p-5 hover:border-accent/40 hover:shadow-[0_4px_20px_-12px_rgba(0,0,0,0.1)] transition-all"
            >
              <div className="h-12 w-12 shrink-0 rounded-xl bg-zinc-50 border border-[#E4E4E7] flex items-center justify-center text-xl group-hover:bg-accent/[0.08] transition-colors">
                {t.emoji}
              </div>
              <div className="min-w-0">
                <p className="font-bold tracking-tight text-[#09090B] leading-tight truncate">{t.name}</p>
                <p className="text-sm text-zinc-500 truncate">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
