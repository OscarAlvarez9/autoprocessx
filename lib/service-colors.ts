export type ServiceKey = "automation" | "ai-apps" | "chatbot"

export type ServiceColor = {
    key: ServiceKey
    name: string
    hex: string
    text: string
    bg: string
    bgSoft: string
    border: string
    borderHover: string
    dot: string
    ring: string
    glow: string
    hoverBg: string
    hoverText: string
    hoverBorder: string
}

export const serviceColors: Record<ServiceKey, ServiceColor> = {
    automation: {
        key: "automation",
        name: "Automatización de Procesos",
        hex: "#10B981",
        text: "text-emerald-400",
        bg: "bg-emerald-500",
        bgSoft: "bg-emerald-500/10",
        border: "border-emerald-500/30",
        borderHover: "hover:border-emerald-500/50",
        dot: "bg-emerald-400",
        ring: "ring-emerald-500/30",
        glow: "bg-emerald-500/15",
        hoverBg: "hover:bg-emerald-500",
        hoverText: "hover:text-emerald-400",
        hoverBorder: "hover:border-emerald-500",
    },
    "ai-apps": {
        key: "ai-apps",
        name: "Aplicaciones IA Corporativas",
        hex: "#22d3ee",
        text: "text-cyan-400",
        bg: "bg-cyan-400",
        bgSoft: "bg-cyan-400/10",
        border: "border-cyan-400/30",
        borderHover: "hover:border-cyan-400/50",
        dot: "bg-cyan-400",
        ring: "ring-cyan-400/30",
        glow: "bg-cyan-400/15",
        hoverBg: "hover:bg-cyan-400",
        hoverText: "hover:text-cyan-400",
        hoverBorder: "hover:border-cyan-400",
    },
    chatbot: {
        key: "chatbot",
        name: "AI Chatbot & Agents",
        hex: "#FBBF24",
        text: "text-accent",
        bg: "bg-accent",
        bgSoft: "bg-accent/10",
        border: "border-accent/30",
        borderHover: "hover:border-accent/50",
        dot: "bg-accent",
        ring: "ring-accent/30",
        glow: "bg-accent/15",
        hoverBg: "hover:bg-accent",
        hoverText: "hover:text-accent",
        hoverBorder: "hover:border-accent",
    },
}
