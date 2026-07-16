import Link from "next/link"
import { ShieldCheck, Lock, GitBranch, ArrowRight, Server, MessageSquare, Workflow, Search, ShoppingCart, ShoppingBag, Store, Layers, Code2 } from "lucide-react"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import FAQ from "@/components/FAQ"
import { techFaqs } from "@/lib/faqs"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"

const pillars = [
  {
    decision: "TypeScript estricto",
    impact: "Menos errores en producción. En una tienda, un fallo en el checkout es una venta perdida; los tipos se validan antes de desplegar, no en mitad de una compra.",
  },
  {
    decision: "Despliegue serverless o servidor propio",
    impact: "Aguanta los picos sin sorpresas. Black Friday o una campaña que escala: nube gestionada o tu servidor bajo tu firewall, tú eliges, y el coste no se dispara.",
  },
  {
    decision: "Bases de datos vectoriales propias",
    impact: "Privacidad absoluta. Tu catálogo, tus precios y los datos de tus clientes nunca entrenan modelos públicos de terceros.",
  },
  {
    decision: "Arquitectura desacoplada",
    impact: 'Cero licencias "por usuario". El sistema es un activo de tu tienda, no un alquiler perpetuo que crece con tu equipo.',
  },
]

// Capa 1 — la plataforma que el dueño reconoce.
const platforms = [
  { icon: <ShoppingCart className="h-4 w-4" />, name: "Magento / Adobe Commerce", note: "Catálogos grandes y multipaís" },
  { icon: <ShoppingBag className="h-4 w-4" />, name: "Shopify", note: "Tiendas completas, de cero a producción" },
  { icon: <Store className="h-4 w-4" />, name: "WooCommerce", note: "WordPress ecommerce a medida" },
  { icon: <ShoppingBag className="h-4 w-4" />, name: "PrestaShop", note: "Ecommerce open-source" },
  { icon: <Store className="h-4 w-4" />, name: "BigCommerce", note: "Plataforma SaaS escalable" },
  { icon: <Layers className="h-4 w-4" />, name: "Headless (Contentful, Strapi, Sanity)", note: "Arquitecturas desacopladas" },
  { icon: <Code2 className="h-4 w-4" />, name: "A medida", note: "Cuando el stack estándar no llega" },
]

// Capa 2 — la ingeniería que el técnico valida.
const serviceStacks = [
  {
    value: "seo",
    icon: <Search className="h-4 w-4" />,
    label: "SEO técnico & conversión",
    stack: ["Schema de producto", "Core Web Vitals", "Crawl budget & facetado", "Scripts Node.js", "Optimización de fichas y checkout"],
    why: "Catálogos de miles de productos que rankean y cargan rápido — la velocidad reduce el abandono, y el abandono es venta perdida. Auditamos a escala con scripts propios en Node.js, no solo con herramientas estándar, y optimizamos la ficha y el checkout para que el tráfico no solo llegue: compre.",
  },
  {
    value: "agente",
    icon: <MessageSquare className="h-4 w-4" />,
    label: "Agente de ventas IA",
    stack: ["RAG anclado al catálogo", "Vector DB (pgvector / Pinecone)", "Embeddings", "Server Components", "Vercel AI SDK"],
    why: "El agente responde solo con tu catálogo y tu stock reales. Recomienda producto y empuja al checkout sin inventarse precios ni disponibilidad — y si no lo sabe, lo dice. Ese anclaje es lo que lo separa de un chatbot genérico.",
  },
  {
    value: "automatizacion",
    icon: <Workflow className="h-4 w-4" />,
    label: "Automatización con n8n + programación",
    stack: ["n8n self-hosted", "Node.js / Python", "Route Handlers", "PostgreSQL / Prisma", "Feeds & APIs"],
    why: "n8n orquestando código propio, no arrastrando cajitas. La mayoría de «agencias de automatización IA» solo conectan nodos y no escriben una línea de código; aquí n8n es el orquestador y la lógica de verdad va en Node.js/Python propio. Recuperación de carrito, sincronización de stock y pedidos, feeds de producto, reporting — workflows que corren solos sobre tu infraestructura.",
  },
]

export default function Tecnologia() {
  return (
    <main className="min-h-screen bg-base text-ink-900 selection:bg-oro-500/20">
      <Navigation />

      {/* 1 · HERO — asimétrico, textura blueprint, artefacto de código (sin glow) */}
      <section className="relative pt-32 pb-16 md:pt-44 md:pb-20 border-b border-[#E4E4E7] overflow-hidden">
        {/* Grid de blueprint finísimo (líneas ink ~5%), no gradiente */}
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(10,24,38,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(10,24,38,0.05) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
            maskImage: "radial-gradient(ellipse 75% 60% at 28% 42%, black 18%, transparent 88%)",
            WebkitMaskImage: "radial-gradient(ellipse 75% 60% at 28% 42%, black 18%, transparent 88%)",
          }}
        />

        <div className="container relative z-10 px-6 mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Copy */}
            <div>
              <Badge variant="outline" className="border-[#E4E4E7] bg-white text-zinc-600 font-mono px-3 py-1 text-[11px] normal-case tracking-normal">
                // stack · v2026
              </Badge>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.05] text-ink-900 mt-6">
                Todas las{" "}
                <span className="relative whitespace-nowrap">
                  tecnologías
                  <span className="absolute left-0 right-0 -bottom-1 h-[3px] bg-oro-400" aria-hidden />
                </span>{" "}
                con las que trabajamos.
              </h1>

              <p className="text-zinc-600 text-base md:text-lg font-normal leading-relaxed max-w-lg mt-6">
                Sistemas de IA para mejorar tu conversión y SEO para ecommerce — construidos como infraestructura propia, no alquilados como SaaS.
              </p>

              <div className="flex flex-col sm:flex-row sm:items-center gap-3 mt-9">
                <Link href="/contacto">
                  <Button className="group h-12 px-7 text-sm font-bold tracking-wide bg-ink-600 text-white hover:bg-ink-700 rounded-xl">
                    Hablar con el fundador
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link href="/casos-de-exito" className="inline-flex items-center gap-1.5 font-mono text-sm text-zinc-500 hover:text-ink-900 transition-colors px-2">
                  Ver casos en producción <ArrowRight className="h-3.5 w-3.5" aria-hidden />
                </Link>
              </div>

              <p className="mt-7 font-mono text-[11px] text-zinc-400">// hecho a mano · no generado</p>
            </div>

            {/* Artefacto de código real (prueba, no decoración) */}
            <Card className="rounded-2xl border-[#E4E4E7] bg-white shadow-sm overflow-hidden p-0 font-mono">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-[#E4E4E7] bg-zinc-50">
                <span className="flex gap-1.5" aria-hidden>
                  <span className="h-2.5 w-2.5 rounded-full bg-zinc-300" />
                  <span className="h-2.5 w-2.5 rounded-full bg-zinc-300" />
                  <span className="h-2.5 w-2.5 rounded-full bg-zinc-300" />
                </span>
                <span className="text-[11px] text-zinc-500">app/servicios/[pack]/page.tsx</span>
              </div>
              <div className="p-4 md:p-5 text-[12px] md:text-[13px] leading-relaxed space-y-1 text-ink-900">
                <p><span className="text-zinc-300 select-none mr-3">1</span><span className="text-oro-600">export const</span> revalidate = <span className="text-emerald-600">300</span> <span className="text-zinc-400">// ISR</span></p>
                <p><span className="text-zinc-300 select-none mr-3">2</span><span className="text-oro-600">const</span> ctx = <span className="text-emerald-600">await</span> retrieve(query) <span className="text-zinc-400">// RAG anclado</span></p>
                <p><span className="text-zinc-300 select-none mr-3">3</span><span className="text-oro-600">return</span> answer(ctx).<span className="text-emerald-600">withSource</span>() <span className="text-zinc-400">// cita fuente</span></p>
              </div>
              <Separator className="bg-[#E4E4E7]" />
              <div className="px-4 md:px-5 py-3 text-[11px] leading-relaxed space-y-1 bg-zinc-50/60">
                <p className="text-emerald-600">✓ build · ISR 42ms</p>
                <p className="text-emerald-600">✓ RAG anclado · cita la fuente · 0 alucinación</p>
                <p className="text-emerald-600">✓ tsc · strict · 0 errors</p>
                <p className="text-ink-900 flex items-center">▸&nbsp;<span className="inline-block w-1.5 h-3.5 bg-ink-900 animate-pulse motion-reduce:animate-none" aria-hidden /></p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* 2 · Cuatro pilares técnicos */}
      <section className="py-16 md:py-24 bg-base border-b border-[#E4E4E7]">
        <div className="container px-6 mx-auto max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight leading-tight mb-3">Cuatro líneas rojas de ingeniería.</h2>
          <p className="text-zinc-600 text-base font-normal leading-relaxed mb-8">Las decisiones que no negociamos — y lo que significan para tu tienda.</p>
          <div className="rounded-2xl border border-[#E4E4E7] bg-white overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="border-[#E4E4E7] hover:bg-transparent">
                  <TableHead className="text-oro-600 text-[10px] font-mono font-medium uppercase tracking-wide py-4 px-5">Decisión arquitectónica</TableHead>
                  <TableHead className="text-zinc-500 text-[10px] font-mono font-medium uppercase tracking-wide py-4 px-5">El impacto real en tu negocio</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {pillars.map((p) => (
                  <TableRow key={p.decision} className="border-[#E4E4E7]">
                    <TableCell className="py-4 px-5 align-top text-sm font-semibold text-ink-900 w-[40%]">{p.decision}</TableCell>
                    <TableCell className="py-4 px-5 align-top text-sm font-normal text-zinc-600 leading-relaxed">{p.impact}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </section>

      {/* 3 · El stack, en dos capas */}
      <section className="py-16 md:py-24 bg-base border-b border-[#E4E4E7]">
        <div className="container px-6 mx-auto max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight leading-tight mb-3">El stack, en dos capas.</h2>
          <p className="text-zinc-600 text-base font-normal leading-relaxed mb-10">Dos pruebas para dos lectores: la plataforma que ya usas, y la ingeniería que hay debajo.</p>

          {/* Capa 1 — sobre tu plataforma */}
          <div className="mb-14 md:mb-16">
            <div className="flex items-center gap-3 mb-5">
              <span className="font-mono text-sm font-bold text-oro-600">01</span>
              <h3 className="text-lg md:text-xl font-semibold tracking-tight text-ink-900">Trabajo sobre tu plataforma. No te hago migrar.</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {platforms.map((p) => (
                <div key={p.name} className="flex items-start gap-3 rounded-2xl border border-[#E4E4E7] bg-white p-4">
                  <span className="h-9 w-9 rounded-lg bg-zinc-50 border border-[#E4E4E7] flex items-center justify-center text-ink-900 shrink-0">{p.icon}</span>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-ink-900 leading-tight">{p.name}</p>
                    <p className="text-xs text-zinc-500 mt-0.5 leading-snug">{p.note}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-zinc-600 text-sm leading-relaxed mt-5 max-w-2xl">
              Sea cual sea tu plataforma, me adapto a lo que ya tienes. Conecto el SEO, la conversión, el agente y la automatización sobre tu tienda actual, sin rehacerla.
            </p>
          </div>

          {/* Capa 2 — la ingeniería detrás (Tabs) */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="font-mono text-sm font-bold text-oro-600">02</span>
              <h3 className="text-lg md:text-xl font-semibold tracking-tight text-ink-900">Y por debajo, ingeniería de verdad.</h3>
            </div>
            <Tabs defaultValue="seo" className="w-full">
              <TabsList className="bg-white border border-[#E4E4E7] h-auto p-1.5 rounded-xl mb-8 flex flex-wrap">
                {serviceStacks.map((s) => (
                  <TabsTrigger key={s.value} value={s.value} className="rounded-lg px-3.5 py-2 text-[11px] font-bold uppercase tracking-wide text-zinc-500 data-[state=active]:bg-oro-400/15 data-[state=active]:text-oro-700 flex items-center gap-1.5">
                    {s.icon}{s.label}
                  </TabsTrigger>
                ))}
              </TabsList>
              {serviceStacks.map((s) => (
                <TabsContent key={s.value} value={s.value}>
                  <div className="rounded-2xl border border-[#E4E4E7] bg-white p-6 md:p-8">
                    <p className="text-[10px] font-mono font-medium uppercase tracking-wide text-zinc-500 mb-3">El stack</p>
                    <div className="flex flex-wrap gap-2 mb-7">
                      {s.stack.map((t) => (
                        <Badge key={t} variant="outline" className="border-[#E4E4E7] text-ink-900 font-mono px-2.5 py-1 text-[11px] normal-case tracking-normal">
                          {t}
                        </Badge>
                      ))}
                    </div>
                    <p className="text-[10px] font-mono font-medium uppercase tracking-wide text-oro-600 mb-2">El porqué</p>
                    <p className="text-zinc-600 text-base font-normal leading-relaxed">{s.why}</p>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
            <p className="text-zinc-500 text-sm leading-relaxed mt-6 font-mono">
              // ¿plataformas internas a medida? React Server Actions, Auth.js y Prisma, bajo demanda.
            </p>
          </div>
        </div>
      </section>

      {/* 4 · Soberanía y privacidad */}
      <section className="py-16 md:py-24 bg-base border-b border-[#E4E4E7]">
        <div className="container px-6 mx-auto max-w-3xl">
          <div className="rounded-3xl border border-[#E4E4E7] bg-white p-8 md:p-10">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight leading-tight mb-6">Soberanía y privacidad.</h2>
            <ul className="space-y-4">
              {[
                { icon: <Lock className="h-5 w-5" />, t: "Cifrado AES-256 en reposo", d: "Tus datos se almacenan cifrados de extremo a extremo." },
                { icon: <ShieldCheck className="h-5 w-5" />, t: "Cumplimiento RGPD en la UE", d: "Despliegue en servidores de la Unión Europea, con aislamiento de datos por cliente." },
                { icon: <GitBranch className="h-5 w-5" />, t: "Entrega completa del repositorio", d: "Al finalizar el desarrollo recibes todo el código en tu Git. La propiedad es tuya." },
              ].map((item) => (
                <li key={item.t} className="flex items-start gap-4">
                  <span className="h-10 w-10 rounded-xl bg-oro-400/10 border border-oro-400/30 flex items-center justify-center text-oro-600 shrink-0">{item.icon}</span>
                  <div>
                    <p className="text-ink-900 font-semibold mb-0.5">{item.t}</p>
                    <p className="text-zinc-600 text-sm font-normal leading-relaxed">{item.d}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 5 · CTA técnico — al mismo embudo de diagnóstico */}
      <section className="py-16 md:py-24 bg-base border-b border-[#E4E4E7]">
        <div className="container px-6 mx-auto max-w-3xl text-center">
          <Server className="h-6 w-6 text-oro-600 mx-auto mb-5" />
          <h2 className="text-2xl md:text-4xl font-semibold tracking-tight leading-tight mb-6">
            ¿Tu equipo técnico exige requisitos específicos?
          </h2>
          <Link href="/contacto">
            <Button size="lg" className="h-13 px-8 py-3 text-sm font-bold tracking-wide bg-ink-600 text-white hover:bg-ink-700 rounded-xl">
              Revisar requerimientos con el fundador
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      <FAQ
        items={techFaqs}
        eyebrow="Tecnología · FAQ"
        title="Dudas sobre el"
        titleAccent="stack y la arquitectura"
        description="Dónde se ejecuta el código, qué modelos usamos y cómo protegemos tus datos."
      />

      <Footer />
    </main>
  )
}
