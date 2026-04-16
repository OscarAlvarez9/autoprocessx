import { BarChart3, ShieldCheck, Zap, Layers, BookOpen } from "lucide-react"

export interface CaseMetric {
    label: string
    value: string
    icon: React.ReactNode
}

export interface CaseStudy {
    id: string
    slug: string
    title: string
    client: string
    sector: string
    desc: string
    longDesc: string
    challenge: string
    solution: string
    metric: string
    secondaryMetric: string
    tags: string[]
    logo: string
    image: string
    metricsArray: CaseMetric[]
    theme: string
    result?: string
    resultLabel?: string
    stack: { name: string; role: string }[]
    phases: { phase: string; title: string; description: string }[]
}

export const caseStudies: CaseStudy[] = [
    {
        id: "01",
        slug: "farmacia-garcia-del-cerro",
        title: "Farmacia Garcia del Cerro",
        client: "Farmacia local",
        sector: "Salud & Farmacia",
        resultLabel: "Automatización de blog",
        desc: "Implementación de automatización de blog con calendario editorial SEO personalizado para todo el año en Contentful.",
        longDesc: "Farmacia García del Cerro necesitaba mejorar su presencia digital de forma escalable sin incrementar el equipo. Diseñamos e implementamos un motor de contenido completamente autónomo que genera, programa y publica artículos SEO-optimizados directamente en Contentful, con un calendario editorial ya preparado para posicionar.",
        challenge: "El equipo carecía de recursos para generar contenido constante de calidad. La publicación manual consumía 20+ horas semanales y los artículos no estaban optimizados para SEO.",
        solution: "Construimos un despliegue de agentes inteligentes en Make.com que procesan tendencias del sector, estructuran el contenido con ChatGPT-4o y redactan artículos con tono humano premium usando Claude 3.5 Sonnet, asegurando un posicionamiento SEO óptimo en Contentful.",
        metric: "ROI 4.2x en 3 meses",
        secondaryMetric: "Ahorro 25k€/mes",
        tags: ["Make.com", "Claude 3.5", "ChatGPT-4o", "Auto-SEO"],
        logo: "/assets/farmacia_garcia_del_cerro_logo.png",
        image: "/assets/make_workflow_real.png",
        metricsArray: [
            { label: "Crecimiento orgánico", value: "+40%", icon: <BarChart3 className="h-4 w-4 text-primary" /> },
            { label: "Reducción tiempo", value: "-73%", icon: <Zap className="h-4 w-4 text-primary" /> }
        ],
        theme: "dark",
        stack: [
            { name: "Make.com", role: "Orquestación del flujo completo" },
            { name: "ChatGPT (GPT-4o)", role: "Estructura y análisis de keywords" },
            { name: "Claude 3.5 Sonnet", role: "Redacción creativa y humana" },
            { name: "Contentful", role: "Headless CMS para gestión SEO" },
            { name: "Google Search Console", role: "Monitorización de rendimiento SEO" },
        ],
        phases: [
            { phase: "01", title: "Estrategia SEO & Calendario", description: "Definición del calendario editorial anual optimizado para keywords locales y de sector." },
            { phase: "02", title: "Motor de Contenido en Make", description: "Desarrollo del flujo en Make.com integrando ChatGPT e Claude para una redacción de alta calidad." },
            { phase: "03", title: "Integración Contentful", description: "Automatización de la ingesta de artículos en Contentful con campos SEO listos para publicar." },
            { phase: "04", title: "Monitorización y optimización", description: "Dashboard de rendimiento SEO conectado a Google Search Console." },
        ]
    },
    {
        id: "02",
        slug: "pelican-catchy-infraestructura-ia",
        title: "Infraestructura de automatizaciones para Pelican Catchy",
        client: "Pelican Catchy",
        sector: "Marketing Digital & SaaS",
        desc: "Arquitectura de procesos IA que automatiza 8 procesos paralelos para generar estrategia anual de marketing, descripciones SEO, gestión en Asana y reportes en WhatsApp.",
        longDesc: "Pelican Catchy gestionaba manualmente 8 procesos de marketing en herramientas desconectadas. Diseñamos una arquitectura multi-agente que unifica toda la operativa: desde la generación de estrategia con LLM hasta la distribución de tareas en Asana y el reporte en tiempo real vía WhatsApp.",
        challenge: "8 procesos manuales desconectados entre sí, con datos duplicados, retrasos en la distribución de tareas y un equipo saturado de trabajo operativo de bajo valor.",
        solution: "Arquitectura de agentes paralelos en n8n que procesan de forma simultánea: estrategia de contenido, descripciones SEO, publicación en redes, gestión de tareas en Asana y notificaciones de estado al equipo.",
        metric: "Eficiencia +160%",
        secondaryMetric: "Ahorro 45k€/mes",
        tags: ["RPA", "Computer Vision", "Infra"],
        logo: "/assets/pelican_catchy_logo.png",
        image: "/assets/pelican_catchy_logo.png",
        metricsArray: [
            { label: "Eficiencia operativa", value: "+160%", icon: <BarChart3 className="h-4 w-4 text-primary" /> },
            { label: "Procesos automatizados", value: "8", icon: <Zap className="h-4 w-4 text-primary" /> }
        ],
        theme: "light",
        stack: [
            { name: "n8n", role: "Motor de orquestación multi-proceso" },
            { name: "Claude 3.5 Sonnet", role: "Generación de estrategia y copywriting" },
            { name: "Metricool API", role: "Análisis y publicación en redes sociales" },
            { name: "Asana API", role: "Distribución automática de tareas" },
            { name: "WhatsApp Business API", role: "Notificaciones y reportes de estado" },
        ],
        phases: [
            { phase: "01", title: "Mapeo de procesos", description: "Identificación y documentación de los 8 procesos manuales y sus dependencias entre sí." },
            { phase: "02", title: "Diseño de arquitectura paralela", description: "Definición de la arquitectura multi-agente con flujos independientes que se sincronizan en puntos de control." },
            { phase: "03", title: "Desarrollo e integración", description: "Implementación de todos los conectores: Metricool, Asana, WhatsApp y los modelos LLM para generación de contenido." },
            { phase: "04", title: "Monitorización continua", description: "Dashboard de estado de todos los procesos con alertas automáticas ante fallos o retrasos." },
        ]
    },
    {
        id: "03",
        slug: "business-suite-ia-plataforma-corporativa",
        title: "Business Suite IA · Plataforma Corporativa",
        client: "Producto Propio",
        sector: "SaaS & Agencias",
        result: "7",
        resultLabel: "Módulos activos",
        desc: "Plataforma empresarial completa construida sobre agentes IA: gestión de clientes, pipeline de ventas, tareas, calendario, propuestas y agentes autónomos en una sola interfaz.",
        longDesc: "Desarrollamos nuestra propia plataforma corporativa para demostrar que la IA no es solo automatización de tareas sueltas, sino la columna vertebral de toda una operativa empresarial. Business Suite IA integra CRM, pipeline de ventas, gestión de tareas, calendario y agentes autónomos en un único entorno desplegado en producción.",
        challenge: "Las herramientas SaaS genéricas (HubSpot, Monday, Notion) no están diseñadas para operar con agentes IA de forma nativa. Cada integración requería middleware costoso y los datos quedaban fragmentados entre plataformas desconectadas.",
        solution: "Arquitectura full-stack propia con Next.js, PostgreSQL y n8n como motor de orquestación. Los agentes IA tienen acceso directo a todos los módulos: crean tareas, actualizan el CRM, generan propuestas y reportan al calendario sin intervención humana.",
        metric: "7 módulos integrados",
        secondaryMetric: "Producción activa",
        tags: ["Next.js", "n8n", "Claude", "PostgreSQL", "Agentes IA"],
        logo: "/assets/platform_dashboard.png",
        image: "/assets/platform_dashboard.png",
        metricsArray: [
            { label: "Módulos en producción", value: "7", icon: <Layers className="h-4 w-4 text-primary" /> },
            { label: "Automatización interna", value: "100%", icon: <ShieldCheck className="h-4 w-4 text-primary" /> }
        ],
        theme: "light",
        stack: [
            { name: "Next.js + TypeScript", role: "Frontend y API Routes de la plataforma" },
            { name: "PostgreSQL + Prisma", role: "Base de datos relacional y ORM" },
            { name: "n8n", role: "Motor de orquestación de agentes IA" },
            { name: "Claude 3.5 Sonnet", role: "Agentes autónomos y generación de propuestas" },
            { name: "AWS EC2 + RDS", role: "Infraestructura cloud en producción" },
        ],
        phases: [
            { phase: "01", title: "Arquitectura de datos", description: "Diseño del esquema de base de datos unificado que conecta CRM, pipeline, tareas y calendario en un modelo relacional coherente." },
            { phase: "02", title: "Módulos core: CRM & Pipeline", description: "Desarrollo de la gestión de clientes y el pipeline de ventas con actualización automática de etapas por agentes IA." },
            { phase: "03", title: "Motor de agentes autónomos", description: "Integración de agentes Claude con acceso a todos los módulos: crean propuestas, asignan tareas y notifican al calendario." },
            { phase: "04", title: "Despliegue enterprise en AWS", description: "Configuración de infraestructura cloud con EC2, RDS y CI/CD para garantizar disponibilidad 24/7 en producción." },
        ]
    },
    {
        id: "04",
        slug: "opoai-plataforma-estudio-oposiciones",
        title: "OpoAI · Plataforma de Estudio con IA",
        client: "Producto Propio",
        sector: "EdTech & Legal",
        result: "9",
        resultLabel: "Módulos activos",
        desc: "Plataforma de preparación de oposiciones potenciada por IA: temario adaptativo, tutor conversacional, simulacros reales, sistema de ranking y seguimiento de progreso en un solo entorno.",
        longDesc: "Desarrollamos OpoAI, una plataforma completa para opositores que sustituye los métodos de estudio tradicionales por un sistema inteligente y adaptativo. El tutor IA analiza el rendimiento del alumno en tiempo real, ajusta el plan de estudio y genera simulacros de examen con el mismo formato que las pruebas oficiales.",
        challenge: "Los opositores estudian con PDFs estáticos, apuntes desorganizados y tests genéricos que no se adaptan a sus puntos débiles. Sin feedback inmediato ni seguimiento de progreso, el ratio de abandono es altísimo.",
        solution: "Plataforma full-stack con temario estructurado por bloques, tutor IA conversacional entrenado con el contenido oficial, modo Opolingo para memorización gamificada, simulacros cronometrados y dashboard de progreso con ranking entre usuarios.",
        metric: "9 módulos integrados",
        secondaryMetric: "Producción activa",
        tags: ["Next.js", "Claude", "PostgreSQL", "n8n", "RAG"],
        logo: "/assets/opoai_dashboard.png",
        image: "/assets/opoai_dashboard.png",
        metricsArray: [
            { label: "Módulos en producción", value: "9", icon: <BookOpen className="h-4 w-4 text-primary" /> },
            { label: "Precisión simulacros", value: "100%", icon: <ShieldCheck className="h-4 w-4 text-primary" /> }
        ],
        theme: "light",
        stack: [
            { name: "Next.js + TypeScript", role: "Frontend y API Routes de la plataforma" },
            { name: "Claude 3.5 Sonnet", role: "Tutor IA conversacional y generación de tests" },
            { name: "PostgreSQL + Prisma", role: "Base de datos de usuarios, progreso y contenido" },
            { name: "n8n", role: "Orquestación de flujos de estudio adaptativos" },
            { name: "Arquitectura RAG", role: "Recuperación semántica del temario oficial" },
        ],
        phases: [
            { phase: "01", title: "Ingesta del temario oficial", description: "Procesamiento y vectorización de todo el contenido oficial de las oposiciones para alimentar el tutor IA con precisión documental." },
            { phase: "02", title: "Tutor IA & modo estudio", description: "Desarrollo del tutor conversacional con Claude y el modo Opolingo para memorización activa con flashcards generadas automáticamente." },
            { phase: "03", title: "Motor de simulacros", description: "Generación de exámenes tipo test cronometrados con el mismo formato y nivel de dificultad que las pruebas oficiales reales." },
            { phase: "04", title: "Dashboard de progreso y ranking", description: "Sistema de seguimiento de rendimiento por bloque temático, historial de simulacros y ranking comparativo entre usuarios." },
        ]
    },
]
