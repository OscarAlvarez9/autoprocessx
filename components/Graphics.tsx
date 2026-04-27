"use client"

import { motion } from "framer-motion"
import dynamic from "next/dynamic"

const ParticleBackground = dynamic(() => import("@/components/ParticleBackground"), { ssr: false })

// ============================================================
// 1. CHATBOT HERO — AI Conversation Visual
//    Animated message bubbles + neural pulse center
// ============================================================
export const ChatbotHeroGraphic = () => {
    return (
        <div className="relative w-full aspect-square flex items-center justify-center overflow-hidden">
            <ParticleBackground variant="network" />

            {/* Central AI Core — pulsing gradient orb */}
            <div className="relative z-10">
                <motion.div
                    animate={{ scale: [1, 1.15, 1] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="relative"
                >
                    {/* Outer glow ring */}
                    <div className="absolute -inset-8 bg-primary/10 rounded-full blur-3xl" />
                    <div className="absolute -inset-4 bg-primary/5 rounded-full blur-xl" />
                    
                    {/* Core orb */}
                    <div className="w-28 h-28 rounded-full bg-gradient-to-br from-primary via-primary/80 to-[#1a5fd4] shadow-[0_0_60px_rgba(15,71,175,0.4)] flex items-center justify-center">
                        <svg className="w-12 h-12 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 2a7 7 0 0 1 7 7c0 3-2 5.5-4 7l-3 3-3-3c-2-1.5-4-4-4-7a7 7 0 0 1 7-7z" />
                            <circle cx="12" cy="9" r="2" />
                        </svg>
                    </div>
                </motion.div>

                {/* Orbital rings */}
                {[1, 2, 3].map((ring) => (
                    <motion.div
                        key={ring}
                        animate={{ rotate: ring % 2 === 0 ? 360 : -360 }}
                        transition={{ duration: 12 + ring * 8, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0 flex items-center justify-center"
                        style={{ width: `${ring * 100 + 120}px`, height: `${ring * 100 + 120}px`, top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
                    >
                        <div className="absolute w-full h-full rounded-full" style={{ border: `1px solid rgba(15,71,175,${0.12 - ring * 0.03})` }} />
                        <div className="absolute w-3 h-3 rounded-full bg-primary/40 shadow-[0_0_12px_rgba(15,71,175,0.5)]" style={{ top: 0, left: '50%', transform: 'translateX(-50%)' }} />
                    </motion.div>
                ))}
            </div>

            {/* Floating message bubbles — different positions and timings */}
            {[
                { x: -120, y: -80, delay: 0, w: 80, align: "left" },
                { x: 100, y: -50, delay: 1.5, w: 60, align: "right" },
                { x: -90, y: 70, delay: 3, w: 70, align: "left" },
                { x: 110, y: 90, delay: 2, w: 50, align: "right" },
            ].map((bubble, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{
                        opacity: [0, 0.7, 0.7, 0],
                        scale: [0.8, 1, 1, 0.9],
                        y: [bubble.y, bubble.y - 10, bubble.y - 10, bubble.y + 5],
                    }}
                    transition={{ duration: 5, delay: bubble.delay, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute z-20"
                    style={{ left: `calc(50% + ${bubble.x}px)`, top: `calc(50% + ${bubble.y}px)` }}
                >
                    <div className={`rounded-2xl ${bubble.align === "left" ? "rounded-bl-sm bg-white/[0.06]" : "rounded-br-sm bg-primary/10"} backdrop-blur-sm border border-white/[0.08] px-4 py-2.5`} style={{ width: bubble.w }}>
                        <div className="flex flex-col gap-1.5">
                            <div className="h-1 rounded-full bg-white/10 w-full" />
                            <div className="h-1 rounded-full bg-white/10 w-3/4" />
                        </div>
                    </div>
                </motion.div>
            ))}

            {/* Status indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.06] backdrop-blur-sm">
                <div className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.6)]" />
                <span className="text-[10px] font-semibold text-white/30 uppercase tracking-[0.15em]">AI Active</span>
            </div>
        </div>
    )
}


// ============================================================
// 2. SALES CONVERSION — Growth Engine Visual
//    Animated SVG chart + revenue indicators
// ============================================================
export const SalesConversionGraphic = () => {
    return (
        <div className="relative w-full aspect-square flex items-center justify-center overflow-hidden p-8">
            {/* SVG Growth Chart */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400" fill="none">
                <defs>
                    <linearGradient id="chartGrad" x1="0%" y1="100%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#0F47AF" stopOpacity="0" />
                        <stop offset="40%" stopColor="#0F47AF" stopOpacity="0.15" />
                        <stop offset="100%" stopColor="#059669" stopOpacity="0.25" />
                    </linearGradient>
                    <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#0F47AF" stopOpacity="0.3" />
                        <stop offset="50%" stopColor="#0F47AF" />
                        <stop offset="100%" stopColor="#059669" />
                    </linearGradient>
                </defs>
                
                {/* Grid lines */}
                {[100, 150, 200, 250, 300].map((y) => (
                    <line key={y} x1="60" y1={y} x2="360" y2={y} stroke="white" strokeOpacity="0.03" strokeWidth="1" />
                ))}
                {[100, 160, 220, 280, 340].map((x) => (
                    <line key={x} x1={x} y1="80" x2={x} y2="320" stroke="white" strokeOpacity="0.03" strokeWidth="1" />
                ))}

                {/* Filled area under curve */}
                <motion.path
                    d="M 80 300 Q 130 290 160 270 T 220 220 T 280 170 T 340 100 L 340 320 L 80 320 Z"
                    fill="url(#chartGrad)"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2 }}
                />

                {/* Main trend line */}
                <motion.path
                    d="M 80 300 Q 130 290 160 270 T 220 220 T 280 170 T 340 100"
                    stroke="url(#lineGrad)"
                    strokeWidth="2.5"
                    fill="none"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2.5, ease: "easeOut" }}
                />
                
                {/* Data points with glow */}
                {[
                    { cx: 160, cy: 270 },
                    { cx: 220, cy: 220 },
                    { cx: 280, cy: 170 },
                    { cx: 340, cy: 100 },
                ].map((pt, i) => (
                    <motion.g key={i} initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.8 + i * 0.3 }}>
                        <circle cx={pt.cx} cy={pt.cy} r="12" fill="#0F47AF" fillOpacity="0.1" />
                        <circle cx={pt.cx} cy={pt.cy} r="4" fill="#0F47AF" />
                        <circle cx={pt.cx} cy={pt.cy} r="2" fill="white" />
                    </motion.g>
                ))}
            </svg>

            {/* Floating metrics */}
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2 }}
                className="absolute top-12 left-10 z-10"
            >
                <div className="flex flex-col gap-1 px-4 py-3 rounded-2xl bg-white/[0.03] border border-white/[0.06] backdrop-blur-sm">
                    <span className="text-[9px] font-semibold text-white/25 uppercase tracking-[0.15em]">Automatización</span>
                    <span className="text-2xl font-black text-primary tracking-tighter">Activa</span>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.5 }}
                className="absolute top-12 right-10 z-10"
            >
                <div className="flex flex-col gap-1 px-4 py-3 rounded-2xl bg-white/[0.03] border border-white/[0.06] backdrop-blur-sm">
                    <span className="text-[9px] font-semibold text-white/25 uppercase tracking-[0.15em]">Revenue</span>
                    <div className="flex items-center gap-1.5">
                        <span className="text-2xl font-black text-emerald-400 tracking-tighter">↑</span>
                        <span className="text-lg font-black text-emerald-400 tracking-tighter">3.2x</span>
                    </div>
                </div>
            </motion.div>

            {/* Animated deal closed badges */}
            {[
                { x: "70%", y: "35%", delay: 3 },
                { x: "80%", y: "55%", delay: 5 },
            ].map((pos, i) => (
                <motion.div
                    key={i}
                    animate={{ opacity: [0, 1, 1, 0], y: [0, -8, -8, -15] }}
                    transition={{ duration: 3, delay: pos.delay, repeat: Infinity, repeatDelay: 4 }}
                    className="absolute z-20"
                    style={{ left: pos.x, top: pos.y }}
                >
                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 backdrop-blur-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                        <span className="text-[9px] font-bold text-emerald-400 uppercase tracking-wider">Closed</span>
                    </div>
                </motion.div>
            ))}
        </div>
    )
}


// ============================================================
// 3. RAG PIPELINE — Data Processing Visual
//    Document flow → processing → AI response
// ============================================================
export const RAGPipelineGraphic = () => {
    const stages = [
        { label: "Datos", gradient: "from-blue-500/20 to-blue-600/10", icon: (
            <svg className="w-7 h-7 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="4" y="4" width="16" height="16" rx="2" /><path d="M9 9h6M9 13h4" /></svg>
        )},
        { label: "Embeddings", gradient: "from-primary/20 to-primary/10", icon: (
            <svg className="w-7 h-7 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="3" /><path d="M12 2v4M12 18v4M2 12h4M18 12h4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" /></svg>
        )},
        { label: "AI", gradient: "from-emerald-500/20 to-emerald-600/10", icon: (
            <svg className="w-7 h-7 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" /></svg>
        )},
    ]

    return (
        <div className="relative w-full aspect-square flex items-center justify-center overflow-hidden">
            <ParticleBackground variant="constellation" color="#0F47AF" />

            <div className="relative z-10 flex flex-col items-center gap-2 w-full px-8">
                {stages.map((stage, i) => (
                    <div key={i} className="flex flex-col items-center w-full">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.4, duration: 0.6 }}
                            className={`w-full max-w-[200px] p-5 rounded-3xl bg-gradient-to-br ${stage.gradient} border border-white/[0.06] backdrop-blur-sm flex items-center gap-4`}
                        >
                            <div className="w-12 h-12 rounded-2xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center flex-shrink-0">
                                {stage.icon}
                            </div>
                            <span className="text-xs font-bold text-white/40 uppercase tracking-[0.15em]">{stage.label}</span>
                        </motion.div>

                        {/* Connector */}
                        {i < stages.length - 1 && (
                            <div className="relative h-10 flex items-center justify-center">
                                <div className="w-px h-full bg-gradient-to-b from-white/10 to-white/[0.03]" />
                                <motion.div
                                    animate={{ y: [0, 30, 0] }}
                                    transition={{ duration: 2, delay: i * 0.5, repeat: Infinity }}
                                    className="absolute w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_rgba(15,71,175,0.5)]"
                                />
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* Tech label */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.06]">
                <div className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                <span className="text-[9px] font-semibold text-white/20 uppercase tracking-[0.15em]">RAG Pipeline</span>
            </div>
        </div>
    )
}


// ============================================================
// 3.b PLATFORM RESOURCES — Dashboard-style Resource Grid
//      Sidebar + resource tiles + activity feed
// ============================================================
export const AIPlatformGraphic = () => {
    const resources = [
        { label: "Knowledge Base", value: "12.4k docs", color: "#0F47AF" },
        { label: "Vector Index", value: "Active", color: "#8B5CF6" },
        { label: "Agents", value: "7 online", color: "#059669" },
        { label: "API Tokens", value: "1.2M / día", color: "#F59E0B" },
    ]

    const activity = [
        { user: "Agent-RAG", action: "Indexó 240 documentos", t: "12s" },
        { user: "Agent-Sales", action: "Generó propuesta cliente", t: "45s" },
        { user: "Agent-Ops", action: "Sincronizó base de datos", t: "1m" },
    ]

    return (
        <div className="relative w-full aspect-square flex items-center justify-center overflow-hidden p-4">
            <ParticleBackground variant="ambient" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative z-10 w-full max-w-[420px] rounded-2xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-md overflow-hidden shadow-2xl"
            >
                {/* Window chrome */}
                <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/[0.06] bg-black/30">
                    <div className="flex items-center gap-1.5">
                        <div className="h-2 w-2 rounded-full bg-red-500/40" />
                        <div className="h-2 w-2 rounded-full bg-amber-500/40" />
                        <div className="h-2 w-2 rounded-full bg-emerald-500/40" />
                    </div>
                    <span className="text-[9px] font-black uppercase tracking-[0.3em] text-white/30">
                        AI · Resource Platform
                    </span>
                    <div className="flex items-center gap-1.5">
                        <div className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        <span className="text-[9px] font-black uppercase tracking-widest text-emerald-400/70">Live</span>
                    </div>
                </div>

                {/* Body: sidebar + content */}
                <div className="grid grid-cols-[80px_1fr]">
                    {/* Sidebar */}
                    <div className="border-r border-white/[0.05] p-3 flex flex-col gap-2 bg-black/20">
                        {[
                            { active: true, dot: "#0F47AF" },
                            { active: false, dot: "#8B5CF6" },
                            { active: false, dot: "#059669" },
                            { active: false, dot: "#F59E0B" },
                            { active: false, dot: "#64748B" },
                        ].map((it, i) => (
                            <div
                                key={i}
                                className={`h-9 rounded-lg flex items-center gap-2 px-2 ${
                                    it.active ? "bg-white/[0.05] border border-white/[0.08]" : ""
                                }`}
                            >
                                <div className="h-2 w-2 rounded-full" style={{ backgroundColor: it.dot, boxShadow: `0 0 6px ${it.dot}` }} />
                                <div className="h-1 flex-1 rounded-full bg-white/[0.06]" />
                            </div>
                        ))}
                    </div>

                    {/* Content */}
                    <div className="p-4 space-y-3">
                        {/* Stat header */}
                        <div className="flex items-end justify-between">
                            <div>
                                <div className="text-[8px] font-black uppercase tracking-[0.25em] text-white/30 mb-1">Recursos activos</div>
                                <div className="text-2xl font-black text-white tracking-tighter">24 / 32</div>
                            </div>
                            <div className="text-[9px] font-black uppercase tracking-widest text-emerald-400/70">+18%</div>
                        </div>

                        {/* Resource tiles grid */}
                        <div className="grid grid-cols-2 gap-2">
                            {resources.map((r, i) => (
                                <motion.div
                                    key={r.label}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.2 + i * 0.1 }}
                                    className="rounded-xl bg-white/[0.03] border border-white/[0.06] p-2.5"
                                >
                                    <div className="flex items-center gap-1.5 mb-1.5">
                                        <div className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: r.color }} />
                                        <span className="text-[8px] font-black uppercase tracking-widest text-white/30 truncate">{r.label}</span>
                                    </div>
                                    <div className="text-[10px] font-black text-white tracking-tight">{r.value}</div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Activity feed */}
                        <div className="rounded-xl bg-black/30 border border-white/[0.05] p-2.5 space-y-2">
                            <div className="text-[8px] font-black uppercase tracking-[0.25em] text-white/30">Activity</div>
                            {activity.map((a, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -8 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.6 + i * 0.2 }}
                                    className="flex items-center gap-2"
                                >
                                    <div className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center gap-1.5">
                                            <span className="text-[9px] font-black text-white/80 truncate">{a.user}</span>
                                            <span className="text-[8px] font-medium text-white/30 truncate">{a.action}</span>
                                        </div>
                                    </div>
                                    <span className="text-[8px] font-black text-white/30 shrink-0">{a.t}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
        </div>
    )
}


// ============================================================
// 4. SECURITY SHIELD — Compliance Visual
//    Layered shields + floating compliance tags
// ============================================================
export const SecurityShieldGraphic = () => {
    return (
        <div className="relative w-full aspect-square flex items-center justify-center overflow-hidden">
            {/* Central shield SVG */}
            <div className="relative z-10">
                <motion.div
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                >
                    {/* Shield glow */}
                    <div className="absolute -inset-10 bg-emerald-500/8 rounded-full blur-3xl" />

                    <svg className="w-36 h-36" viewBox="0 0 120 140" fill="none">
                        <defs>
                            <linearGradient id="shieldGrad" x1="50%" y1="0%" x2="50%" y2="100%">
                                <stop offset="0%" stopColor="#059669" stopOpacity="0.3" />
                                <stop offset="100%" stopColor="#059669" stopOpacity="0.05" />
                            </linearGradient>
                        </defs>
                        {/* Shield shape */}
                        <motion.path
                            d="M60 10 L105 30 L105 75 Q105 110 60 130 Q15 110 15 75 L15 30 Z"
                            fill="url(#shieldGrad)"
                            stroke="#059669"
                            strokeWidth="1.5"
                            strokeOpacity="0.4"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 2 }}
                        />
                        {/* Inner shield */}
                        <path d="M60 30 L90 43 L90 72 Q90 98 60 112 Q30 98 30 72 L30 43 Z" fill="none" stroke="#059669" strokeWidth="0.5" strokeOpacity="0.15" />
                        {/* Checkmark */}
                        <motion.path
                            d="M42 68 L54 80 L78 56"
                            stroke="#059669"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            fill="none"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ delay: 1.5, duration: 0.8 }}
                        />
                    </svg>
                </motion.div>

                {/* Scanning ring */}
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute -inset-12 rounded-full border border-emerald-500/10"
                >
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-emerald-400/50 shadow-[0_0_10px_rgba(52,211,153,0.4)]" />
                </motion.div>
            </div>

            {/* Floating compliance badges */}
            {[
                { label: "GDPR", x: "15%", y: "20%", delay: 0 },
                { label: "ISO 27001", x: "70%", y: "15%", delay: 1 },
                { label: "SOC 2", x: "10%", y: "75%", delay: 2 },
                { label: "AES-256", x: "75%", y: "70%", delay: 1.5 },
            ].map((tag, i) => (
                <motion.div
                    key={i}
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 4, delay: tag.delay, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute z-20"
                    style={{ left: tag.x, top: tag.y }}
                >
                    <div className="px-3 py-1.5 rounded-xl bg-white/[0.03] border border-white/[0.06] backdrop-blur-sm">
                        <span className="text-[9px] font-bold text-white/25 uppercase tracking-[0.15em]">{tag.label}</span>
                    </div>
                </motion.div>
            ))}
        </div>
    )
}


// ============================================================
// 5. AUTOMATION HERO — Workflow Engine Visual
//    Connected nodes with data flowing between them
// ============================================================
export const AutomationHeroGraphic = () => {
    const nodes = [
        { label: "Trigger", x: 70, y: 80, color: "#0F47AF" },
        { label: "Process", x: 200, y: 60, color: "#0F47AF" },
        { label: "Logic", x: 330, y: 100, color: "#059669" },
        { label: "Enrich", x: 130, y: 200, color: "#8B5CF6" },
        { label: "Output", x: 270, y: 220, color: "#059669" },
    ]

    const connections = [
        [0, 1], [1, 2], [0, 3], [3, 4], [1, 4], [2, 4]
    ]

    return (
        <div className="relative w-full aspect-[4/3] flex items-center justify-center overflow-hidden">
            <ParticleBackground variant="ambient" />

            <svg className="absolute inset-0 w-full h-full z-10" viewBox="0 0 400 300" fill="none">
                {/* Connection lines */}
                {connections.map(([from, to], i) => (
                    <g key={i}>
                        <line
                            x1={nodes[from].x} y1={nodes[from].y}
                            x2={nodes[to].x} y2={nodes[to].y}
                            stroke="white" strokeOpacity="0.06" strokeWidth="1"
                        />
                        {/* Animated data pulse along line */}
                        <motion.circle
                            r="3"
                            fill="#0F47AF"
                            fillOpacity="0.6"
                            filter="url(#glow)"
                            animate={{
                                cx: [nodes[from].x, nodes[to].x],
                                cy: [nodes[from].y, nodes[to].y],
                            }}
                            transition={{ duration: 2 + i * 0.5, repeat: Infinity, ease: "linear", delay: i * 0.8 }}
                        />
                    </g>
                ))}

                {/* Glow filter */}
                <defs>
                    <filter id="glow">
                        <feGaussianBlur stdDeviation="4" result="blur" />
                        <feMerge>
                            <feMergeNode in="blur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                </defs>

                {/* Nodes */}
                {nodes.map((node, i) => (
                    <motion.g
                        key={i}
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.15, duration: 0.5 }}
                    >
                        {/* Node glow */}
                        <circle cx={node.x} cy={node.y} r="24" fill={node.color} fillOpacity="0.06" />
                        {/* Node body */}
                        <rect x={node.x - 18} y={node.y - 18} width="36" height="36" rx="12" fill="white" fillOpacity="0.03" stroke="white" strokeOpacity="0.08" strokeWidth="1" />
                        {/* Inner dot */}
                        <circle cx={node.x} cy={node.y} r="4" fill={node.color} fillOpacity="0.7" />
                        {/* Label */}
                        <text x={node.x} y={node.y + 32} textAnchor="middle" fill="white" fillOpacity="0.2" fontSize="8" fontWeight="700" letterSpacing="0.1em" style={{ textTransform: 'uppercase' }}>
                            {node.label}
                        </text>
                    </motion.g>
                ))}
            </svg>

            {/* Status bar */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/[0.03] border border-white/[0.06] backdrop-blur-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.5)]" />
                <span className="text-[9px] font-semibold text-white/25 uppercase tracking-[0.15em]">5 Nodes Active</span>
                <div className="w-px h-3 bg-white/10" />
                <span className="text-[9px] font-semibold text-emerald-400/50 uppercase tracking-[0.15em]">Running</span>
            </div>
        </div>
    )
}


// ============================================================
// 6. INFRASTRUCTURE — Cloud/System Visual
//    Server stack with pulse connections
// ============================================================
export const InfrastructureGraphic = () => {
    const layers = [
        { label: "API Gateway", color: "#0F47AF", width: "85%" },
        { label: "AI Engine", color: "#8B5CF6", width: "70%" },
        { label: "Database", color: "#059669", width: "55%" },
    ]

    return (
        <div className="relative w-full aspect-square flex items-center justify-center overflow-hidden p-10">
            <div className="relative z-10 flex flex-col items-center gap-4 w-full">
                {layers.map((layer, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.3, duration: 0.6 }}
                        className="relative flex items-center justify-center"
                        style={{ width: layer.width }}
                    >
                        <div className="w-full py-5 px-6 rounded-2xl bg-white/[0.03] border border-white/[0.06] backdrop-blur-sm flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: layer.color, boxShadow: `0 0 10px ${layer.color}40` }} />
                                <span className="text-[10px] font-bold text-white/30 uppercase tracking-[0.12em]">{layer.label}</span>
                            </div>
                            {/* Activity bar */}
                            <div className="flex gap-0.5">
                                {[...Array(8)].map((_, j) => (
                                    <motion.div
                                        key={j}
                                        animate={{ opacity: [0.1, 0.5, 0.1] }}
                                        transition={{ duration: 1.5, delay: j * 0.15 + i * 0.3, repeat: Infinity }}
                                        className="w-1 h-3 rounded-full"
                                        style={{ backgroundColor: layer.color + "60" }}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Connector to next layer */}
                        {i < layers.length - 1 && (
                            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2">
                                <motion.div
                                    animate={{ opacity: [0.2, 0.6, 0.2] }}
                                    transition={{ duration: 2, delay: i * 0.5, repeat: Infinity }}
                                    className="w-px h-4 bg-gradient-to-b from-white/10 to-transparent"
                                />
                            </div>
                        )}
                    </motion.div>
                ))}
            </div>

            {/* Background subtle glow */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-48 h-48 bg-primary/5 rounded-full blur-[80px]" />
        </div>
    )
}
