import Image from "next/image"
import Link from "next/link"
import { documentToReactComponents, type Options } from "@contentful/rich-text-react-renderer"
import {
    BLOCKS,
    INLINES,
    MARKS,
    type Document,
    type Block,
    type Inline,
} from "@contentful/rich-text-types"
import type { ReactNode } from "react"

interface RichTextProps {
    document?: Document
}

const options: Options = {
    renderMark: {
        [MARKS.BOLD]: (children) => <strong className="font-black text-white">{children}</strong>,
        [MARKS.ITALIC]: (children) => <em className="italic">{children}</em>,
        [MARKS.UNDERLINE]: (children) => <span className="underline">{children}</span>,
        [MARKS.CODE]: (children) => (
            <code className="px-1.5 py-0.5 rounded bg-white/[0.06] border border-white/10 text-amber-300 text-[0.9em] font-mono">
                {children}
            </code>
        ),
    },
    renderNode: {
        [BLOCKS.PARAGRAPH]: (_node, children) => (
            <p className="text-white/70 text-base md:text-lg font-medium leading-relaxed mb-5">
                {children}
            </p>
        ),
        [BLOCKS.HEADING_1]: (_node, children) => (
            <h1 className="text-3xl md:text-4xl font-black text-white tracking-tight mt-12 mb-5">
                {children}
            </h1>
        ),
        [BLOCKS.HEADING_2]: (_node, children) => (
            <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight mt-10 mb-4">
                {children}
            </h2>
        ),
        [BLOCKS.HEADING_3]: (_node, children) => (
            <h3 className="text-xl md:text-2xl font-black text-white tracking-tight mt-8 mb-3">
                {children}
            </h3>
        ),
        [BLOCKS.HEADING_4]: (_node, children) => (
            <h4 className="text-lg md:text-xl font-black text-white tracking-tight mt-6 mb-3">
                {children}
            </h4>
        ),
        [BLOCKS.UL_LIST]: (_node, children) => (
            <ul className="list-disc list-outside pl-6 space-y-2 mb-6 text-white/70 marker:text-amber-400">
                {children}
            </ul>
        ),
        [BLOCKS.OL_LIST]: (_node, children) => (
            <ol className="list-decimal list-outside pl-6 space-y-2 mb-6 text-white/70 marker:text-amber-400 marker:font-black">
                {children}
            </ol>
        ),
        [BLOCKS.LIST_ITEM]: (_node, children) => (
            <li className="text-white/70 leading-relaxed [&>p]:mb-0">{children}</li>
        ),
        [BLOCKS.QUOTE]: (_node, children) => (
            <blockquote className="my-8 pl-5 border-l-2 border-amber-400 italic text-white/80 [&>p]:text-lg [&>p]:font-medium">
                {children}
            </blockquote>
        ),
        [BLOCKS.HR]: () => <hr className="my-10 border-white/10" />,
        [BLOCKS.EMBEDDED_ASSET]: (node: Block | Inline) => {
            const file = (node.data?.target?.fields as Record<string, unknown>)?.file as
                | { url?: string; details?: { image?: { width?: number; height?: number } } }
                | undefined
            const title = (node.data?.target?.fields as Record<string, unknown>)?.title as string | undefined
            const description = (node.data?.target?.fields as Record<string, unknown>)?.description as
                | string
                | undefined
            const url = file?.url
            if (!url) return null
            const src = url.startsWith("//") ? `https:${url}` : url
            const width = file.details?.image?.width ?? 1200
            const height = file.details?.image?.height ?? 700
            return (
                <figure className="my-8 rounded-2xl overflow-hidden border border-white/10 bg-[#0F1424]">
                    <Image
                        src={src}
                        alt={description ?? title ?? ""}
                        width={width}
                        height={height}
                        className="w-full h-auto object-contain"
                    />
                    {description && (
                        <figcaption className="px-5 py-3 text-xs text-white/50 font-medium border-t border-white/10">
                            {description}
                        </figcaption>
                    )}
                </figure>
            )
        },
        [INLINES.HYPERLINK]: (node, children) => {
            const href = (node.data as { uri?: string })?.uri ?? "#"
            const isExternal = href.startsWith("http")
            return isExternal ? (
                <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-300 underline-offset-4 hover:underline"
                >
                    {children as ReactNode}
                </a>
            ) : (
                <Link href={href} className="text-amber-300 underline-offset-4 hover:underline">
                    {children as ReactNode}
                </Link>
            )
        },
    },
}

export default function RichText({ document }: RichTextProps) {
    if (!document) return null
    return <>{documentToReactComponents(document, options)}</>
}
