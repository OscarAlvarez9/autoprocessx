"use client"

import Link from "next/link"
import { ChevronRight, Home } from "lucide-react"

export interface BreadcrumbItem {
    label: string
    href?: string
}

interface BreadcrumbsProps {
    items: BreadcrumbItem[]
    className?: string
}

const SITE_URL = "https://www.autoprocessx.com"

export default function Breadcrumbs({ items, className = "" }: BreadcrumbsProps) {
    const trail: BreadcrumbItem[] = [{ label: "Inicio", href: "/" }, ...items]

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: trail.map((item, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: item.label,
            ...(item.href ? { item: `${SITE_URL}${item.href}` } : {}),
        })),
    }

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <nav aria-label="Breadcrumb" className={`flex items-center ${className}`}>
                <ol className="flex flex-wrap items-center gap-1.5 text-[10px] font-black uppercase tracking-[0.3em]">
                    {trail.map((item, i) => {
                        const isLast = i === trail.length - 1
                        return (
                            <li key={`${item.label}-${i}`} className="flex items-center gap-1.5">
                                {i > 0 && <ChevronRight className="h-3 w-3 text-white/30" />}
                                {isLast || !item.href ? (
                                    <span
                                        aria-current={isLast ? "page" : undefined}
                                        className="text-white truncate max-w-[200px] md:max-w-none"
                                    >
                                        {i === 0 && <Home className="h-3 w-3 inline-block mr-1.5 -mt-0.5" />}
                                        {item.label}
                                    </span>
                                ) : (
                                    <Link
                                        href={item.href}
                                        className="text-white/45 hover:text-accent transition-colors flex items-center gap-1.5"
                                    >
                                        {i === 0 && <Home className="h-3 w-3" />}
                                        {item.label}
                                    </Link>
                                )}
                            </li>
                        )
                    })}
                </ol>
            </nav>
        </>
    )
}
