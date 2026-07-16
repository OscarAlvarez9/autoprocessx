"use client"

import Link from "next/link"
import Image from "next/image"
import { motion, useReducedMotion } from "motion/react"
import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import Accordion from "@mui/material/Accordion"
import AccordionSummary from "@mui/material/AccordionSummary"
import AccordionDetails from "@mui/material/AccordionDetails"
import { tokens, fonts } from "@/lib/mui/theme"
import { SiteHeader, SiteFooter, DiagnosticoCTA, ServiceHero, StatementBand, Reveal, ArtifactWindow, Crumbs } from "@/components/mui/shared"

/* ---------- artefacto: facetas del catálogo pasando por el embudo ---------- */

function FacetFunnel() {
  const reduce = useReducedMotion()
  const inRows = Array.from({ length: 9 }, (_, i) => 18 + i * 18)
  const outRows = [86, 96, 106]
  return (
    <ArtifactWindow tag="rastreo · facetas del catálogo" ratio="16 / 10">
      <Box sx={{ position: "relative", height: "100%", display: "flex", flexDirection: "column" }}>
        <Box component="svg" viewBox="0 0 320 176" sx={{ width: "100%", flex: 1, minHeight: 0 }}>
          {/* miles de URLs de filtro entrando */}
          {inRows.map((y, i) => (
            <line key={`in${i}`} x1="6" y1={y} x2="70" y2={y} stroke={tokens.line} strokeWidth={i % 3 === 0 ? 2 : 1.2} />
          ))}
          {/* embudo */}
          <path d="M78,10 L182,74 L182,102 L78,166 Z" fill={`${tokens.petrol}0D`} stroke={`${tokens.petrol}44`} strokeWidth="1.2" />
          <line x1="182" y1="74" x2="230" y2="86" stroke={`${tokens.petrol}44`} strokeWidth="1.2" />
          <line x1="182" y1="102" x2="230" y2="106" stroke={`${tokens.petrol}44`} strokeWidth="1.2" />
          {/* las que indexan, saliendo */}
          {outRows.map((y, i) => (
            <g key={`out${i}`}>
              <line x1="238" y1={y} x2="300" y2={y} stroke={tokens.teal} strokeWidth="2.2" />
              <path d={`M304,${y - 3} l2.5,2.5 l4,-5`} fill="none" stroke={tokens.teal} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </g>
          ))}
          {/* pulso que recorre el embudo */}
          {!reduce && (
            <motion.circle r="3.2" fill={tokens.teal}
              animate={{ cx: [70, 182, 300], cy: [88, 88, 96], opacity: [0, 1, 1, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, repeatDelay: 0.6, ease: "easeInOut" }} />
          )}
        </Box>
        <Stack direction="row" sx={{ justifyContent: "space-between", alignItems: "flex-end", mt: 1 }}>
          <Box>
            <Typography sx={{ fontFamily: fonts.mono, fontSize: 10.5, fontWeight: 700, color: tokens.ink }}>URLs de filtro</Typography>
            <Typography sx={{ fontFamily: fonts.mono, fontSize: 9.5, color: tokens.muted }}>miles, la mayoría vacías</Typography>
          </Box>
          <Box sx={{ textAlign: "right" }}>
            <Typography sx={{ fontFamily: fonts.mono, fontSize: 10.5, fontWeight: 700, color: tokens.teal }}>categorías y fichas que venden</Typography>
            <Typography sx={{ fontFamily: fonts.mono, fontSize: 9.5, color: tokens.muted }}>lo que indexa</Typography>
          </Box>
        </Stack>
        <Typography sx={{ fontFamily: fonts.mono, fontSize: 9.5, color: tokens.muted, mt: 1 }}>
          esquema ilustrativo · qué se indexa lo decide el diagnóstico
        </Typography>
      </Box>
    </ArtifactWindow>
  )
}

/* ---------- datos ---------- */

const FRENOS = [
  ["La navegación por capas descontrolada", "Con un catálogo grande, los filtros por atributo generan decenas de miles de combinaciones de URL. Sin estrategia de facetas, Google gasta el rastreo en filtros vacíos mientras tus categorías de dinero esperan cola. Es el problema de SEO número uno de Magento y el de mayor recorrido."],
  ["Metadatos imposibles de mantener a mano", "Nadie escribe títulos y descripciones para miles de referencias una a una. Magento permite plantillas y reglas por atributo para generarlos con lógica; la mayoría de tiendas no las aprovecha y convive con metas duplicados o vacíos a escala."],
  ["Rendimiento que depende de toda la máquina", "Caché de página completa, indexadores, crons, buscador y base de datos: en Magento la velocidad es un sistema, no un plugin. Un frontend pesado sobre una infraestructura justa da tiendas lentas donde más duele: el móvil."],
  ["Mantenimiento que se come el presupuesto", "Parches, actualizaciones de versión, módulos de pago que se renuevan cada año. Es el coste de la plataforma, pero cuando todo el presupuesto se va en mantener, no queda nada para crecer. Mi trabajo es que la parte de crecer vuelva a existir."],
] as const

const TRABAJO = [
  ["SEO técnico a escala de catálogo", "La auditoría define la estrategia de facetas (qué se indexa, qué se canonicaliza, qué se bloquea), plantillas de metadatos por reglas, schema de producto completo, arquitectura de categorías y un plan de rendimiento por capas: frontend, caché, indexadores e infraestructura. Prioridad por impacto en ventas."],
  ["Que la IA te cite (GEO)", "Verifico que GPTBot, ClaudeBot y PerplexityBot reciben respuesta de tu servidor (los WAF corporativos los bloquean con frecuencia), publico tu llms.txt y hago citables las páginas que importan: categorías de dinero, fichas clave y FAQs. En catálogos B2B esto vale doble: las IAs ya responden búsquedas de proveedor."],
  ["CRO sobre tu tema actual", "La conversión en Magento se trabaja en ficha, listado, carrito y un checkout cuya fricción sí es configurable. Hipótesis medibles sobre tus datos, cambios quirúrgicos, nada de rehacer el frontend salvo que los números lo pidan."],
  ["Agente de ventas IA y automatización", "El agente se conecta al catálogo real (atributos incluidos) y hace lo que un buscador interno no hace: entender la pregunta, recomendar y acompañar al pedido. Y los procesos pesados de operar Magento (stock, precios, exports, avisos) pasan a flujos automáticos documentados y en tu propiedad."],
] as const

const FAQS = [
  { q: "¿Magento es demasiada plataforma para mi tienda?", a: "Si tu catálogo es pequeño y tu operativa simple, probablemente sí y te lo diré. Pero si ya estás en Magento facturando, la pregunta útil no es esa sino cuánto más puede dar lo que ya tienes. Casi siempre es bastante." },
  { q: "¿Por qué mi Magento va lento?", a: "Porque en Magento la velocidad depende de todo el sistema: tema, caché de página completa, indexadores, base de datos e infraestructura. En el diagnóstico mido capa por capa y te digo dónde está el cuello de botella real antes de tocar nada." },
  { q: "¿Cómo se hace SEO con miles de referencias?", a: "Con reglas, no a mano: estrategia de facetas para el rastreo, plantillas de metadatos por atributo, schema generado desde el catálogo y prioridad absoluta a las categorías que venden. El SEO de Magento es un problema de ingeniería, y eso es una buena noticia." },
  { q: "¿Trabajas con Adobe Commerce y con Magento Open Source?", a: "Con los dos. La base técnica es común y el enfoque también: la diferencia está en qué funciones vienen de serie y cuáles se resuelven con desarrollo o automatización." },
  { q: "¿Puede una IA recomendar mi tienda si soy B2B?", a: "Sí, y es donde antes se nota. Las búsquedas de proveedor y producto técnico ya se hacen en ChatGPT y Perplexity. Si tu catálogo es legible para sus bots y tus páginas responden preguntas reales, tu tienda compite en esas respuestas; si no, ni apareces." },
]

/* ---------- secciones ---------- */

function Hero() {
  return (
    <ServiceHero
      title="Agencia Magento: más ventas de un catálogo que ya pesa."
      sub="Trabajo tiendas Magento y Adobe Commerce que ya facturan y quieren crecer sin cambiar de plataforma ni depender de presupuestos de integrador para cada ajuste."
      specs={[
        ["plataforma", "Magento y Adobe Commerce"],
        ["enfoque", "SEO técnico a escala · GEO · CRO"],
        ["propiedad", "todo documentado y tuyo"],
      ]}
      note="Ingeniería de crecimiento sobre lo que ya tienes, no una fábrica de proyectos de un año."
      artifact={<FacetFunnel />}
    />
  )
}

function Bloques({ title, intro, items, numbered }: { title: string; intro?: string; items: readonly (readonly [string, string])[]; numbered?: boolean }) {
  return (
    <Box component="section" sx={{ py: { xs: 8, md: 12 }, borderBottom: `1px solid ${tokens.lineSoft}` }}>
      <Container>
        <Reveal>
          <Box sx={{ maxWidth: 620, mb: { xs: 5, md: 7 } }}>
            <Typography variant="h2" sx={{ fontSize: { xs: 28, md: 40 }, color: tokens.ink, mb: intro ? 2 : 0 }}>{title}</Typography>
            {intro && <Typography variant="body1" sx={{ fontSize: { xs: 16, md: 18 }, color: tokens.body }}>{intro}</Typography>}
          </Box>
        </Reveal>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap: { xs: 3, md: 4 } }}>
          {items.map(([t, d], i) => (
            <Reveal key={t} delay={(i % 2) * 0.06}>
              <Box sx={{ borderTop: `2px solid ${tokens.line}`, pt: 2.5 }}>
                {numbered && <Typography sx={{ fontFamily: fonts.mono, fontSize: 12, color: tokens.petrol, mb: 1 }}>{`0${i + 1}`}</Typography>}
                <Typography sx={{ fontFamily: fonts.serif, fontSize: 21, fontWeight: 600, color: tokens.ink, mb: 1 }}>{t}</Typography>
                <Typography variant="body1" sx={{ color: tokens.body, maxWidth: 480 }}>{d}</Typography>
              </Box>
            </Reveal>
          ))}
        </Box>
      </Container>
    </Box>
  )
}

function SinMigrar() {
  return (
    <Box component="section" sx={{ py: { xs: 8, md: 12 }, borderBottom: `1px solid ${tokens.lineSoft}` }}>
      <Container>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1.05fr 0.95fr" }, gap: { xs: 4, md: 7 }, alignItems: "center" }}>
          <Reveal>
            <Box>
              <Typography variant="h2" sx={{ fontSize: { xs: 28, md: 40 }, color: tokens.ink, mb: 2 }}>
                Sin migrar y con el código en tu propiedad.
              </Typography>
              <Typography variant="body1" sx={{ fontSize: { xs: 16, md: 18 }, color: tokens.body, maxWidth: 520 }}>
                Si tu catálogo vive bien en Magento, migrar es un proyecto de un año para volver al punto de partida. Mi propuesta es la contraria: exprimir la plataforma que ya dominas. Todo cambio va versionado y documentado; no construyo dependencia, construyo activos tuyos.
              </Typography>
            </Box>
          </Reveal>
          <Reveal delay={0.1}>
            <Box sx={{ position: "relative", borderRadius: 3, overflow: "hidden", border: `1px solid ${tokens.line}`, aspectRatio: "16 / 11" }}>
              <Image src="/assets/gen/photo-codigo.png" alt="Trabajando el código de una tienda Magento sobre su propia plataforma" fill sizes="(max-width: 900px) 100vw, 44vw" style={{ objectFit: "cover" }} />
            </Box>
          </Reveal>
        </Box>
      </Container>
    </Box>
  )
}

function ParaQuien() {
  return (
    <Box component="section" sx={{ py: { xs: 8, md: 12 }, borderBottom: `1px solid ${tokens.lineSoft}` }}>
      <Container>
        <Reveal>
          <Typography variant="h2" sx={{ fontSize: { xs: 28, md: 40 }, color: tokens.ink, mb: { xs: 5, md: 7 }, maxWidth: 560 }}>
            Para quién es, y para quién no.
          </Typography>
        </Reveal>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap: { xs: 3, md: 4 } }}>
          <Reveal>
            <Box sx={{ p: { xs: 3, md: 3.5 }, borderRadius: 3, border: `1px solid ${tokens.teal}44`, bgcolor: `${tokens.teal}0A`, height: "100%" }}>
              <Typography sx={{ fontFamily: fonts.mono, fontSize: 12, fontWeight: 700, color: tokens.teal, mb: 1.5 }}>es para ti si</Typography>
              <Typography variant="body1" sx={{ color: tokens.body }}>
                Operas un catálogo grande en Magento o Adobe Commerce, el mantenimiento se come el presupuesto y hace tiempo que nadie trabaja el crecimiento: rastreo, metadatos a escala, conversión y visibilidad en IA. También si eres B2B y tus clientes ya preguntan a ChatGPT por proveedores.
              </Typography>
            </Box>
          </Reveal>
          <Reveal delay={0.08}>
            <Box sx={{ p: { xs: 3, md: 3.5 }, borderRadius: 3, border: `1px solid ${tokens.line}`, bgcolor: tokens.win, height: "100%" }}>
              <Typography sx={{ fontFamily: fonts.mono, fontSize: 12, fontWeight: 700, color: tokens.muted, mb: 1.5 }}>no es para ti si</Typography>
              <Typography variant="body1" sx={{ color: tokens.body }}>
                Tu catálogo cabe en una tienda más simple y lo que buscas es justificar la plataforma, o si necesitas un integrador para un desarrollo estructural enorme. Soy ingeniería de crecimiento sobre lo que ya tienes, no una fábrica de proyectos de un año. Si lo tuyo es una plataforma nueva a medida, eso es{" "}
                <Box component={Link} href="/servicios/a-medida" sx={{ color: tokens.ink, fontWeight: 600, textDecoration: "underline", textDecorationColor: tokens.line }}>otra cosa</Box>.
              </Typography>
            </Box>
          </Reveal>
        </Box>
      </Container>
    </Box>
  )
}

function Resultados() {
  return (
    <Box component="section" sx={{ py: { xs: 8, md: 12 }, borderBottom: `1px solid ${tokens.lineSoft}` }}>
      <Container>
        <Reveal>
          <Typography variant="h2" sx={{ fontSize: { xs: 28, md: 40 }, color: tokens.ink, mb: { xs: 5, md: 7 }, maxWidth: 560 }}>
            Resultados en tiendas como la tuya.
          </Typography>
        </Reveal>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" }, gap: { xs: 3, md: 4 }, mb: 4 }}>
          {[0, 1].map((i) => (
            <Reveal key={i} delay={i * 0.08}>
              <Box sx={{ aspectRatio: "16 / 9", borderRadius: 3, border: `1px dashed ${tokens.line}`, display: "grid", placeItems: "center", p: 3 }}>
                <Typography sx={{ fontFamily: fonts.mono, fontSize: 12.5, color: tokens.muted, textAlign: "center" }}>{`[[ caso Magento: marca + métrica real confirmada ]]`}</Typography>
              </Box>
            </Reveal>
          ))}
        </Box>
        <Reveal>
          <Button component={Link} href="/casos-de-exito" sx={{ color: tokens.ink, fontWeight: 700, px: 0, "&:hover": { bgcolor: "transparent", color: tokens.petrol } }}>
            El detalle está en los casos de éxito <Box component="span" sx={{ color: tokens.petrol, ml: 0.5 }}>↗</Box>
          </Button>
        </Reveal>
      </Container>
    </Box>
  )
}

function MetodoLink() {
  return (
    <Box component="section" sx={{ py: { xs: 7, md: 10 }, borderBottom: `1px solid ${tokens.lineSoft}` }}>
      <Container sx={{ textAlign: "center", maxWidth: 680 }}>
        <Reveal>
          <Typography variant="h2" sx={{ fontSize: { xs: 24, md: 32 }, color: tokens.ink, mb: 2 }}>
            Mismo método, mismo responsable.
          </Typography>
          <Typography variant="body1" sx={{ color: tokens.body, mb: 3 }}>
            Diagnóstico con tus datos, plan priorizado por impacto, implementación sobre tu Magento y seguimiento. Sin sorpresas de alcance a mitad de proyecto.
          </Typography>
          <Button component={Link} href="/metodo" sx={{ color: tokens.ink, fontWeight: 700, px: 0, "&:hover": { bgcolor: "transparent", color: tokens.petrol } }}>
            Ver el método completo <Box component="span" sx={{ color: tokens.petrol, ml: 0.5 }}>↗</Box>
          </Button>
        </Reveal>
      </Container>
    </Box>
  )
}

function Faq() {
  return (
    <Box component="section" sx={{ py: { xs: 8, md: 12 }, borderBottom: `1px solid ${tokens.lineSoft}` }}>
      <Container sx={{ maxWidth: 760 }}>
        <Reveal>
          <Typography variant="h2" sx={{ fontSize: { xs: 28, md: 40 }, color: tokens.ink, mb: { xs: 4, md: 6 } }}>
            Preguntas frecuentes sobre SEO y CRO en Magento.
          </Typography>
        </Reveal>
        {FAQS.map((f, i) => (
          <Accordion key={i} disableGutters elevation={0} sx={{ bgcolor: "transparent", borderBottom: `1px solid ${tokens.lineSoft}`, "&:before": { display: "none" } }}>
            <AccordionSummary sx={{ px: 0 }}>
              <Typography sx={{ fontFamily: fonts.serif, fontSize: { xs: 17, md: 19 }, fontWeight: 600, color: tokens.ink }}>{f.q}</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ px: 0, pb: 3 }}>
              <Typography variant="body1" sx={{ color: tokens.body }}>{f.a}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Container>
    </Box>
  )
}

export default function MagentoMui() {
  return (
    <Box sx={{ bgcolor: tokens.paper, color: tokens.body, fontFamily: fonts.sans }}>
      <SiteHeader />
      <Crumbs items={[{ label: "Agencia Magento" }]} />
      <Hero />
      <Bloques title="Lo que suele frenar las ventas en Magento." intro="Magento hace bien las cosas difíciles y complica algunas fáciles. Estos son los frenos que más se repiten en las auditorías." items={FRENOS} />
      <Bloques title="Cómo trabajo tu tienda Magento." intro="El Pack Crecimiento ecommerce aplicado a Magento está pensado para catálogos grandes: lo que se hace, se hace a escala." items={TRABAJO} numbered />
      <SinMigrar />
      <ParaQuien />
      <StatementBand title="El SEO de Magento es un problema de ingeniería. Esa es la buena noticia." photo="/assets/gen/photo-pizarra.png" />
      <Resultados />
      <MetodoLink />
      <Faq />
      <DiagnosticoCTA />
      <SiteFooter />
    </Box>
  )
}
