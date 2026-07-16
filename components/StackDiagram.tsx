import { Globe, Cpu, Brain, Database, Lock } from "lucide-react"

const layers = [
  { layer: "L1", name: "Frontend · Next.js", desc: "Interfaz responsive, App Router, RSC", icon: <Globe className="h-4 w-4" /> },
  { layer: "L2", name: "API & Agentes", desc: "Node.js · Webhooks · n8n self-hosted", icon: <Cpu className="h-4 w-4" /> },
  { layer: "L3", name: "Cognición LLM", desc: "Claude · GPT · Gemini", icon: <Brain className="h-4 w-4" /> },
  { layer: "L4", name: "Vector DB", desc: "pgvector · Pinecone · embeddings propios", icon: <Database className="h-4 w-4" /> },
  { layer: "L5", name: "Storage cifrado", desc: "PostgreSQL · AES-256 · backups diarios", icon: <Lock className="h-4 w-4" /> },
]

/**
 * Diagrama del stack por capas (L1-L5) bajo el firewall del cliente.
 * Componente estático reutilizable (hero + cualquier sección). Sin animación
 * para poder usarse también en Server Components.
 */
export default function StackDiagram({ className = "" }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <div className="absolute -inset-10 bg-accent/10 blur-[120px] rounded-full pointer-events-none" aria-hidden />
      <div className="relative rounded-3xl md:rounded-[40px] bg-zinc-50 border border-[#E4E4E7] p-6 md:p-8 backdrop-blur-xl">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-1.5" aria-hidden>
            <div className="h-2 w-2 rounded-full bg-red-500/40" />
            <div className="h-2 w-2 rounded-full bg-[#B4975A]/40" />
            <div className="h-2 w-2 rounded-full bg-emerald-500/40" />
          </div>
          <span className="text-[9px] font-black uppercase tracking-[0.3em] text-zinc-400">tu_infraestructura</span>
          <div className="flex items-center gap-1.5">
            <div className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse motion-reduce:animate-none" aria-hidden />
            <span className="text-[9px] font-black uppercase tracking-widest text-accent">Private</span>
          </div>
        </div>

        <div className="space-y-3">
          {layers.map((row) => (
            <div
              key={row.layer}
              className="flex items-center gap-3 md:gap-4 p-3 md:p-4 rounded-xl bg-zinc-50 border border-[#E4E4E7] hover:border-accent/30 transition-all"
            >
              <span className="text-[9px] font-black uppercase tracking-widest text-accent/70 shrink-0 w-6">{row.layer}</span>
              <div className="h-8 w-8 md:h-9 md:w-9 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent shrink-0" aria-hidden>
                {row.icon}
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-xs md:text-sm font-black text-[#09090B] truncate">{row.name}</div>
                <div className="text-[10px] font-medium text-zinc-500 truncate">{row.desc}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-center gap-2 text-[9px] font-black uppercase tracking-[0.3em] text-zinc-400">
          <Lock className="h-3 w-3 text-accent" aria-hidden />
          Nada sale de tu perímetro
        </div>
      </div>
    </div>
  )
}
