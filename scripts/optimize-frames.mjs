#!/usr/bin/env node
/**
 * Recomprime los 4 sets de frames con sharp (mozjpeg internamente).
 * Genera dos variantes por frame:
 *   - {dir}_opt/  → 1280×720 quality 78 (desktop/tablet)
 *   - {dir}_sm/   → 768×432  quality 76 (mobile)
 *
 * Uso:
 *   node scripts/optimize-frames.mjs
 *   node scripts/optimize-frames.mjs --replace   # sustituye originales por opt (preservando _sm aparte)
 */

import { readdir, mkdir, stat, copyFile, rm } from "node:fs/promises"
import { existsSync } from "node:fs"
import { join, basename } from "node:path"
import sharp from "sharp"

const ROOT = "public/assets"
const DIRS = ["robot_frames", "automation_frames", "chatbot_frames", "aplicaciones_frames"]
// Aggressive compression — frames are seen for ~12ms each during scroll, quality artifacts invisible.
const QUALITY_DESKTOP = 62
const QUALITY_MOBILE = 58
const WIDTH_DESKTOP = 960
const WIDTH_MOBILE = 540

const args = process.argv.slice(2)
const replace = args.includes("--replace")

const fmt = (bytes) => {
    if (bytes >= 1024 * 1024) return `${(bytes / 1024 / 1024).toFixed(2)} MB`
    if (bytes >= 1024) return `${(bytes / 1024).toFixed(1)} KB`
    return `${bytes} B`
}

const dirSize = async (dir) => {
    if (!existsSync(dir)) return 0
    const files = await readdir(dir)
    let total = 0
    for (const f of files) {
        const s = await stat(join(dir, f))
        total += s.size
    }
    return total
}

async function processDir(dir) {
    const src = join(ROOT, dir)
    const optDir = join(ROOT, `${dir}_opt`)
    const smDir = join(ROOT, `${dir}_sm`)

    await mkdir(optDir, { recursive: true })
    await mkdir(smDir, { recursive: true })

    const entries = (await readdir(src)).filter((f) => f.endsWith(".jpg")).sort()
    const total = entries.length

    console.log(`\n→ ${dir}: ${total} frames`)
    const beforeSize = await dirSize(src)

    let processed = 0
    for (const file of entries) {
        const input = join(src, file)
        const outOpt = join(optDir, file)
        const outSm = join(smDir, file)

        await Promise.all([
            sharp(input)
                .resize({ width: WIDTH_DESKTOP, withoutEnlargement: true })
                .jpeg({
                    quality: QUALITY_DESKTOP,
                    progressive: false,
                    chromaSubsampling: "4:2:0",
                    mozjpeg: true,
                })
                .toFile(outOpt),
            sharp(input)
                .resize({ width: WIDTH_MOBILE, withoutEnlargement: true })
                .jpeg({
                    quality: QUALITY_MOBILE,
                    progressive: false,
                    chromaSubsampling: "4:2:0",
                    mozjpeg: true,
                })
                .toFile(outSm),
        ])

        processed++
        if (processed % 40 === 0 || processed === total) {
            process.stdout.write(`  ${processed}/${total}\r`)
        }
    }

    const optSize = await dirSize(optDir)
    const smSize = await dirSize(smDir)

    console.log(
        `  original ${fmt(beforeSize)} → opt ${fmt(optSize)} (${(((beforeSize - optSize) / beforeSize) * 100).toFixed(0)}% smaller) · sm ${fmt(smSize)}`
    )

    return { dir, before: beforeSize, opt: optSize, sm: smSize }
}

async function maybeReplace(dir) {
    const src = join(ROOT, dir)
    const optDir = join(ROOT, `${dir}_opt`)
    const backup = join(ROOT, `${dir}_backup`)

    if (!existsSync(optDir)) return
    if (existsSync(backup)) {
        console.log(`  ${dir}: backup ya existe, no sobrescribo`)
        return
    }

    // Move original → backup, opt → original
    await mkdir(backup, { recursive: true })
    const files = await readdir(src)
    for (const f of files) {
        await copyFile(join(src, f), join(backup, f))
    }
    await rm(src, { recursive: true, force: true })
    await mkdir(src, { recursive: true })
    const optFiles = await readdir(optDir)
    for (const f of optFiles) {
        await copyFile(join(optDir, f), join(src, f))
    }
    await rm(optDir, { recursive: true, force: true })
    console.log(`  ${dir}: replaced (backup en ${dir}_backup)`)
}

async function main() {
    console.log("Optimizing frames with mozjpeg via sharp…")
    console.log(`  Desktop: ${WIDTH_DESKTOP}px wide, q${QUALITY_DESKTOP}`)
    console.log(`  Mobile:  ${WIDTH_MOBILE}px wide, q${QUALITY_MOBILE}`)

    const results = []
    for (const dir of DIRS) {
        const r = await processDir(dir)
        results.push(r)
    }

    console.log("\n=== TOTAL ===")
    const totalBefore = results.reduce((a, r) => a + r.before, 0)
    const totalOpt = results.reduce((a, r) => a + r.opt, 0)
    const totalSm = results.reduce((a, r) => a + r.sm, 0)
    console.log(`Original (4 dirs): ${fmt(totalBefore)}`)
    console.log(`Optimized:         ${fmt(totalOpt)} (${(((totalBefore - totalOpt) / totalBefore) * 100).toFixed(0)}% reduction)`)
    console.log(`Mobile variant:    ${fmt(totalSm)}`)

    if (replace) {
        console.log("\nReplacing originals…")
        for (const dir of DIRS) await maybeReplace(dir)
        console.log("Done. Backups en *_backup/")
    } else {
        console.log("\nDry run finished. Para sustituir originales:")
        console.log("  node scripts/optimize-frames.mjs --replace")
    }
}

main().catch((err) => {
    console.error(err)
    process.exit(1)
})
