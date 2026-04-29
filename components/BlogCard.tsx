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

const accentMap: Record<string, { dot: string; text: string; border: string; glow: string; ringHover: string }> = {
    pink: {
        dot: "bg-pink-400",
        text: "text-pink-300",
        border: "hover:border-pink-400/40",
        glow: "hover:shadow-[0_0_40px_-15px_rgba(244,114,182,0.4)]",
        ringHover: "group-hover:text-pink-300",
    },
    emerald: {
        dot: "bg-emerald-400",
        text: "text-emerald-300",
        border: "hover:border-emerald-400/40",
        glow: "hover:shadow-[0_0_40px_-15px_rgba(52,211,153,0.4)]",
        ringHover: "group-hover:text-emerald-300",
    },
    orange: {
        dot: "bg-orange-400",
        text: "text-orange-300",
        border: "hover:border-orange-400/40",
        glow: "hover:shadow-[0_0_40px_-15px_rgba(251,146,60,0.4)]",
        ringHover: "group-hover:text-orange-300",
    },
    red: {
        dot: "bg-red-400",
        text: "text-red-300",
        border: "hover:border-red-400/40",
        glow: "hover:shadow-[0_0_40px_-15px_rgba(248,113,113,0.4)]",
        ringHover: "group-hover:text-red-300",
    },
    blue: {
        dot: "bg-blue-400",
        text: "text-blue-300",
        border: "hover:border-blue-400/40",
        glow: "hover:shadow-[0_0_40px_-15px_rgba(96,165,250,0.4)]",
        ringHover: "group-hover:text-blue-300",
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
                    "group h-full flex bg-[#0F1424] border-white/10 text-white rounded-2xl overflow-hidden hover:bg-[#11162A] transition-all p-0 shadow-none",
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
                        "relative shrink-0 overflow-hidden bg-gradient-to-br from-[#0F1424] via-[#0a0d18] to-[#0F1424]",
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
                            {/* dark overlay for legibility */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0F1424]/80 via-[#0F1424]/20 to-transparent" />
                        </>
                    ) : (
                        <>
                            {/* grid pattern */}
                            <div
                                className="absolute inset-0 opacity-30"
                                style={{
                                    backgroundImage:
                                        "linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)",
                                    backgroundSize: "32px 32px",
                                    maskImage:
                                        "radial-gradient(ellipse 70% 60% at 50% 50%, black 30%, transparent 100%)",
                                }}
                            />
                            {/* accent glow */}
                            <div className={cn("absolute -top-10 -right-10 w-48 h-48 rounded-full blur-3xl opacity-30", a.dot)} />
                            {/* ghost typography */}
                            <div className="absolute inset-0 flex items-center justify-center p-6 z-0">
                                <span
                                    className={cn(
                                        "text-5xl md:text-7xl font-black tracking-tight opacity-[0.07] uppercase group-hover:opacity-[0.12] transition-opacity",
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
                                "bg-black/60 backdrop-blur-md border-white/10 gap-1.5 px-2.5 py-1 rounded-full text-[9px] font-black uppercase tracking-[0.25em]",
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
                        <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.25em] text-white/40">
                            <time dateTime={post.date}>{formatDate(post.date)}</time>
                            <span className="h-1 w-1 rounded-full bg-white/20" />
                            <span className="flex items-center gap-1.5">
                                <Clock className="h-3 w-3" />
                                {post.readingMinutes} min
                            </span>
                        </div>

                        <Link href={`/blog/${post.slug}`}>
                            <CardTitle
                                className={cn(
                                    "font-black tracking-tight leading-[1.15] text-white transition-colors",
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
                                "text-white/55 font-medium leading-relaxed",
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
                                        className="bg-white/[0.04] border-white/10 text-white/50 px-2 py-0.5 rounded text-[9px] font-black uppercase tracking-[0.2em]"
                                    >
                                        {tag}
                                    </Badge>
                                ))}
                            </div>
                        )}
                    </CardContent>

                    <CardFooter
                        className={cn(
                            "mt-auto pt-4 px-5 md:px-6 pb-5 border-t border-white/10 flex items-center justify-between",
                            featured && "md:px-8 md:pb-6"
                        )}
                    >
                        <span className="text-[10px] font-black uppercase tracking-[0.25em] text-white/40">
                            {post.author}
                        </span>
                        <Link
                            href={`/blog/${post.slug}`}
                            className={cn(
                                "inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-[0.25em] hover:text-white transition-colors",
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
