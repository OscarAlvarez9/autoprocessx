"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight, Clock } from "lucide-react"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { formatDate, getCategory, type BlogPost } from "@/lib/blog"
import { cn } from "@/lib/utils"

const accentMap: Record<string, { dot: string; text: string; tint: string; border: string; glow: string; ringHover: string }> = {
    pink: {
        dot: "bg-pink-500",
        text: "text-pink-600",
        tint: "from-pink-500/10",
        border: "hover:border-pink-400/50",
        glow: "hover:shadow-[0_10px_40px_-18px_rgba(236,72,153,0.45)]",
        ringHover: "group-hover:text-pink-600",
    },
    emerald: {
        dot: "bg-emerald-500",
        text: "text-emerald-600",
        tint: "from-emerald-500/10",
        border: "hover:border-emerald-400/50",
        glow: "hover:shadow-[0_10px_40px_-18px_rgba(16,185,129,0.45)]",
        ringHover: "group-hover:text-emerald-600",
    },
    orange: {
        dot: "bg-orange-500",
        text: "text-orange-600",
        tint: "from-orange-500/10",
        border: "hover:border-orange-400/50",
        glow: "hover:shadow-[0_10px_40px_-18px_rgba(249,115,22,0.45)]",
        ringHover: "group-hover:text-orange-600",
    },
    red: {
        dot: "bg-red-500",
        text: "text-red-600",
        tint: "from-red-500/10",
        border: "hover:border-red-400/50",
        glow: "hover:shadow-[0_10px_40px_-18px_rgba(239,68,68,0.45)]",
        ringHover: "group-hover:text-red-600",
    },
    blue: {
        dot: "bg-blue-500",
        text: "text-blue-600",
        tint: "from-blue-500/10",
        border: "hover:border-blue-400/50",
        glow: "hover:shadow-[0_10px_40px_-18px_rgba(59,130,246,0.45)]",
        ringHover: "group-hover:text-blue-600",
    },
}

export default function BlogCard({
    post,
    index = 0,
    featured = false,
}: {
    post: BlogPost
    index?: number
    featured?: boolean
}) {
    const cat = getCategory(post.category)
    const a = accentMap[cat?.accent ?? "pink"]

    return (
        <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: index * 0.05 }}
            className={featured ? "md:col-span-2" : ""}
        >
            <Card
                className={cn(
                    "group h-full flex bg-[#FEFDF9] border-[#E1DCCB] text-[#14201D] rounded-2xl overflow-hidden hover:bg-[#F1EEE1] transition-all p-0 shadow-none",
                    a.border,
                    a.glow,
                    featured ? "md:flex-row" : "flex-col"
                )}
            >
                {/* Cover */}
                <Link
                    href={`/blog/${post.slug}`}
                    aria-label={post.title}
                    className={cn(
                        "relative shrink-0 overflow-hidden bg-gradient-to-br via-[#FAF8F0] to-[#FEFDF9]",
                        a.tint,
                        featured ? "md:w-1/2 aspect-[16/10] md:aspect-auto" : "aspect-[16/10]"
                    )}
                >
                    {post.cover ? (
                        <>
                            <Image
                                src={post.cover}
                                alt={post.title}
                                fill
                                sizes={featured ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 100vw, 33vw"}
                                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                            />
                            {/* sutil oscurecido arriba para legibilidad del badge */}
                            <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-transparent" />
                        </>
                    ) : (
                        <>
                            {/* grid fino (líneas oscuras, visibles sobre claro) */}
                            <div
                                className="absolute inset-0 opacity-[0.5]"
                                style={{
                                    backgroundImage:
                                        "linear-gradient(to right, rgba(9,9,11,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(9,9,11,0.04) 1px, transparent 1px)",
                                    backgroundSize: "28px 28px",
                                    maskImage:
                                        "radial-gradient(ellipse 70% 60% at 50% 50%, black 30%, transparent 100%)",
                                    WebkitMaskImage:
                                        "radial-gradient(ellipse 70% 60% at 50% 50%, black 30%, transparent 100%)",
                                }}
                            />
                            {/* glow de acento sutil */}
                            <div className={cn("absolute -top-10 -right-10 w-48 h-48 rounded-full blur-3xl opacity-20", a.dot)} />
                            {/* tipografía fantasma (acento tintado) */}
                            <div className="absolute inset-0 flex items-center justify-center p-6 z-0">
                                <span
                                    className={cn(
                                        "text-5xl md:text-7xl font-black tracking-tight opacity-[0.12] uppercase group-hover:opacity-[0.18] transition-opacity",
                                        a.text
                                    )}
                                >
                                    {cat?.shortName}
                                </span>
                            </div>
                        </>
                    )}

                    {/* category badge — always on top */}
                    <div className="absolute top-3 left-3 z-10">
                        <Badge
                            variant="outline"
                            className={cn(
                                "bg-[#FEFDF9]/90 backdrop-blur-md border-[#E1DCCB] gap-1.5 px-2.5 py-1 rounded-full text-[9px] font-black uppercase tracking-[0.25em] shadow-sm",
                                a.text
                            )}
                        >
                            <span className={cn("h-1.5 w-1.5 rounded-full animate-pulse", a.dot)} />
                            {cat?.shortName}
                        </Badge>
                    </div>
                </Link>

                {/* Content */}
                <div className="flex flex-col flex-1 min-w-0">
                    <CardHeader className={cn("space-y-3 pt-5 px-5 md:px-6 pb-0", featured && "md:pt-7 md:px-8")}>
                        <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.25em] text-[#5E6B63]">
                            <time dateTime={post.date}>{formatDate(post.date)}</time>
                            <span className="h-1 w-1 rounded-full bg-[#E1DCCB]" />
                            <span className="flex items-center gap-1.5">
                                <Clock className="h-3 w-3" />
                                {post.readingMinutes} min
                            </span>
                        </div>

                        <Link href={`/blog/${post.slug}`}>
                            <CardTitle
                                className={cn(
                                    "font-[family-name:var(--font-fraunces)] font-semibold tracking-tight leading-[1.15] text-[#14201D] transition-colors",
                                    a.ringHover,
                                    featured ? "text-2xl md:text-3xl" : "text-base md:text-lg"
                                )}
                            >
                                {post.title}
                            </CardTitle>
                        </Link>
                    </CardHeader>

                    <CardContent className={cn("flex-1 px-5 md:px-6 py-4", featured && "md:px-8")}>
                        <CardDescription
                            className={cn(
                                "text-[#26332F] font-medium leading-relaxed",
                                featured ? "text-sm md:text-base line-clamp-3" : "text-xs md:text-sm line-clamp-2"
                            )}
                        >
                            {post.excerpt}
                        </CardDescription>

                        {post.tags.length > 0 && (
                            <div className="flex flex-wrap gap-1.5 mt-4">
                                {post.tags.slice(0, featured ? 4 : 3).map((tag) => (
                                    <Badge
                                        key={tag}
                                        variant="outline"
                                        className="bg-[#F1EEE1] border-[#E1DCCB] text-[#5E6B63] px-2 py-0.5 rounded text-[9px] font-black uppercase tracking-[0.2em]"
                                    >
                                        {tag}
                                    </Badge>
                                ))}
                            </div>
                        )}
                    </CardContent>

                    <CardFooter
                        className={cn(
                            "mt-auto pt-4 px-5 md:px-6 pb-5 border-t border-[#E1DCCB] flex items-center justify-between",
                            featured && "md:px-8 md:pb-6"
                        )}
                    >
                        <span className="text-[10px] font-black uppercase tracking-[0.25em] text-[#5E6B63]">
                            {post.author}
                        </span>
                        <Link
                            href={`/blog/${post.slug}`}
                            className={cn(
                                "inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-[0.25em] hover:text-[#14201D] transition-colors",
                                a.text
                            )}
                        >
                            Leer
                            <ArrowUpRight className="h-3 w-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </Link>
                    </CardFooter>
                </div>
            </Card>
        </motion.div>
    )
}
