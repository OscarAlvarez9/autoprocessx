"use client"

import { useCallback, useState } from "react"
import {
    Conversation,
    ConversationContent,
    ConversationScrollButton,
} from "@/components/ai-elements/conversation"
import { Message, MessageContent, MessageResponse } from "@/components/ai-elements/message"
import {
    PromptInput,
    PromptInputBody,
    PromptInputFooter,
    type PromptInputMessage,
    PromptInputSubmit,
    PromptInputTextarea,
    PromptInputTools,
} from "@/components/ai-elements/prompt-input"
import { Suggestion, Suggestions } from "@/components/ai-elements/suggestion"

interface ChatMsg {
    id: string
    from: "user" | "assistant"
    content: string
}

const initialMessages: ChatMsg[] = [
    {
        id: "welcome",
        from: "assistant",
        content:
            "Hola, soy **Aria**, el asistente de AutoProcessX. ¿En qué te ayudo — automatizar procesos, montar un asistente IA con vuestros datos, o un chatbot para web/WhatsApp?",
    },
]

const suggestions = [
    "Quiero automatizar procesos con n8n",
    "Necesito un chatbot para WhatsApp",
    "¿Cómo funciona el RAG sobre mis datos?",
    "¿Cuánto cuesta?",
]

type ChatStatus = "submitted" | "streaming" | "ready" | "error"

interface ChatbotProps {
    /** Endpoint que devuelve la respuesta del asistente (idealmente streaming). */
    apiEndpoint?: string
}

export function Chatbot({ apiEndpoint = "/api/chat" }: ChatbotProps) {
    const [text, setText] = useState("")
    const [status, setStatus] = useState<ChatStatus>("ready")
    const [messages, setMessages] = useState<ChatMsg[]>(initialMessages)

    const sendMessage = useCallback(
        async (userText: string) => {
            const userMsg: ChatMsg = {
                id: `user-${Date.now()}`,
                from: "user",
                content: userText,
            }
            const assistantId = `assistant-${Date.now()}`
            const placeholder: ChatMsg = { id: assistantId, from: "assistant", content: "" }

            setMessages((prev) => [...prev, userMsg, placeholder])
            setStatus("submitted")

            try {
                const res = await fetch(apiEndpoint, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        messages: [...messages, userMsg].map((m) => ({
                            role: m.from === "user" ? "user" : "assistant",
                            content: m.content,
                        })),
                    }),
                })

                if (!res.ok || !res.body) {
                    throw new Error(`Chat API ${res.status}`)
                }

                setStatus("streaming")
                const reader = res.body.getReader()
                const decoder = new TextDecoder()
                let acc = ""

                while (true) {
                    const { done, value } = await reader.read()
                    if (done) break
                    acc += decoder.decode(value, { stream: true })
                    setMessages((prev) =>
                        prev.map((m) => (m.id === assistantId ? { ...m, content: acc } : m))
                    )
                }

                setStatus("ready")
            } catch (err) {
                console.error("[chatbot] error:", err)
                setMessages((prev) =>
                    prev.map((m) =>
                        m.id === assistantId
                            ? {
                                  ...m,
                                  content:
                                      "Algo ha fallado de mi lado. Si necesitas hablar con el equipo, te dejo el calendario: [agendar llamada de 20 min](https://calendly.com).",
                              }
                            : m
                    )
                )
                setStatus("error")
            }
        },
        [apiEndpoint, messages]
    )

    const handleSubmit = (message: PromptInputMessage) => {
        const value = (message.text ?? "").trim()
        if (!value) return
        sendMessage(value)
        setText("")
    }

    const handleSuggestion = (s: string) => {
        sendMessage(s)
    }

    return (
        <div className="flex h-full flex-col overflow-hidden bg-[#0F1424] text-white">
            <Conversation className="min-h-0 flex-1">
                <ConversationContent>
                    {messages.map((msg) => (
                        <Message from={msg.from} key={msg.id}>
                            <MessageContent>
                                <MessageResponse>{msg.content || (msg.from === "assistant" && status === "submitted" ? "..." : "")}</MessageResponse>
                            </MessageContent>
                        </Message>
                    ))}
                </ConversationContent>
                <ConversationScrollButton />
            </Conversation>

            <div className="shrink-0 space-y-3 border-t border-white/10 bg-[#0F1424] px-4 py-3">
                {messages.length <= 1 && (
                    <Suggestions>
                        {suggestions.map((s) => (
                            <Suggestion key={s} onClick={() => handleSuggestion(s)} suggestion={s} />
                        ))}
                    </Suggestions>
                )}

                <PromptInput onSubmit={handleSubmit}>
                    <PromptInputBody>
                        <PromptInputTextarea
                            placeholder="Escribe tu pregunta…"
                            onChange={(e) => setText(e.target.value)}
                            value={text}
                        />
                    </PromptInputBody>
                    <PromptInputFooter>
                        <PromptInputTools />
                        <PromptInputSubmit
                            disabled={!text.trim() || status === "streaming"}
                            status={status}
                        />
                    </PromptInputFooter>
                </PromptInput>
            </div>
        </div>
    )
}

export default Chatbot
