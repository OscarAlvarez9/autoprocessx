import { NextRequest, NextResponse } from "next/server"

const BACKEND_URL = "https://chatbot-autoprocessx-4vgt.onrender.com/chat"

export async function POST(req: NextRequest) {
    let body: { mensaje?: string; session_id?: string }

    try {
        body = await req.json()
    } catch {
        return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 })
    }

    const { mensaje, session_id } = body

    if (!mensaje || !session_id) {
        return NextResponse.json(
            { error: "Missing required fields: mensaje, session_id" },
            { status: 400 }
        )
    }

    try {
        const backendRes = await fetch(BACKEND_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ mensaje, session_id }),
        })

        if (!backendRes.ok) {
            const text = await backendRes.text()
            console.error("[api/chat] backend error:", backendRes.status, text)
            return NextResponse.json(
                { error: "Backend error", detail: text },
                { status: backendRes.status }
            )
        }

        const data = await backendRes.json()
        return NextResponse.json(data)
    } catch (err) {
        console.error("[api/chat] fetch failed:", err)
        return NextResponse.json({ error: "Could not reach backend" }, { status: 502 })
    }
}
