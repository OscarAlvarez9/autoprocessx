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
    logoOverlay?: string
    image: string
    metricsArray: CaseMetric[]
    theme: string
    result?: string
    resultLabel?: string
    stack: { name: string; role: string }[]
    phases: { phase: string; title: string; description: string; image?: string }[]
    /** Expanded long-form content sections for SEO (1000-1500 words per case) */
    clientContext?: string
    previousState?: string
    architecture?: string
    verifiedMetrics?: string
    lessonsLearned?: string
    /** Optional testimonial — populate when client confirms */
    testimonial?: { quote: string; author: string; role: string }
    /** Service this case is an example of (for Article.about Schema) */
    serviceType?: "automatizaciones" | "aplicaciones-ia" | "ai-chatbot"
    /** Public client URL (used in Article.mentions). Optional — leave empty if NDA. */
    clientUrl?: string
    /** ISO date when case was deployed/published */
    publishedAt?: string
    /** Highlight metric — la card amber destacada en "Audit de Rendimiento Técnico" */
    highlightMetric?: { label: string; value: string }
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
        image: "/assets/farmacia_garcia_del_cerro_logo.png",
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
        ],
        serviceType: "automatizaciones",
        publishedAt: "2025-09-15",
        highlightMetric: { label: "Tráfico orgánico", value: "+120%" },
        clientContext: "Farmacia García del Cerro es una farmacia comunitaria de proximidad en España con un equipo asistencial reducido y una audiencia local recurrente que combina público de barrio con búsquedas digitales sobre patologías, medicamentos OTC, dermofarmacia y consejos de salud preventiva. Su buyer persona principal es una persona adulta entre 35 y 65 años que utiliza Google para resolver dudas concretas de salud antes de visitar la farmacia presencial — un patrón de consulta que multiplica el valor del posicionamiento orgánico frente a la inversión publicitaria. El sector de la farmacia local opera con márgenes ajustados, regulación estricta sobre comunicación de productos sanitarios y una competencia digital creciente por parte de cadenas e e-commerce de parafarmacia. La farmacia entendió que mantener visibilidad orgánica era una palanca crítica de captación, pero el equipo carece estructuralmente de un departamento de marketing dedicado: la titular y los técnicos farmacéuticos trabajan a tiempo completo en el mostrador. El contenido digital había quedado relegado a publicaciones esporádicas, sin plan editorial, sin keywords objetivo y sin medición de impacto. La oportunidad estaba clara: convertir el conocimiento técnico-farmacéutico interno en un activo orgánico recurrente que trabajara 24/7 sin sumar carga operativa al equipo.",
        previousState: "Antes del despliegue, todo el flujo de contenido era manual. Cada artículo del blog requería entre 90 y 120 minutos de trabajo distribuido entre investigación de tema, redacción, optimización SEO básica, búsqueda de imágenes y publicación. La cadencia real era de 1-2 publicaciones por mes — muy por debajo del umbral mínimo que Google premia para mantener autoridad temática en un nicho especializado como el sanitario. Sin calendario editorial, los temas dependían de la inspiración puntual o de tendencias percibidas, no de keyword research real. Los artículos publicados no incluían meta descripciones optimizadas, schema markup ni estructura H1/H2/H3 coherente. La indexación en Google Search Console mostraba impresiones bajas, posiciones medias por encima del top 30 y un CTR orgánico inferior al 1 %. La acumulación de tareas operativas en mostrador hacía que delegar la publicación a un freelance externo costara entre 200 € y 400 € por artículo, con cadencia irregular y sin control sobre la calidad técnica del contenido sanitario — un riesgo reputacional claro en un sector donde la precisión informativa es regulatoria.",
        architecture: "El sistema está construido sobre Make.com como motor de orquestación, con un flujo de cinco etapas encadenadas. La primera etapa es un módulo de scheduling que dispara el workflow en fechas predefinidas según el calendario editorial anual (52 artículos repartidos por temas estacionales, patologías prevalentes y picos de búsqueda). La segunda etapa consulta Google Search Console y DataForSEO para validar que la keyword objetivo del artículo mantiene volumen real y para extraer las preguntas relacionadas que aparecen en SERP. La tercera etapa invoca a GPT-4o para generar la estructura jerárquica del artículo: H1 optimizado, esquema H2/H3, snippets para featured results, FAQ section con preguntas reales del PAA de Google. La cuarta etapa pasa esa estructura a Claude 3.5 Sonnet, que es el modelo que mejor mantiene tono profesional sanitario sin caer en el lenguaje genérico de marketing — Claude redacta el cuerpo completo del artículo respetando las directrices E-E-A-T, citando referencias verificables y manteniendo un disclaimer farmacéutico estándar al pie. La quinta etapa publica directamente en Contentful (CMS headless): cada artículo se inyecta como entry de tipo blogPost con todos los campos SEO rellenos — titulo, slug auto-generado, metadescripcion bajo 160 caracteres, fecha programada de publicación, categoría, imagen destacada y rich text del cuerpo. Contentful sirve el contenido vía Delivery API a la web pública, que regenera estáticamente las URLs afectadas con ISR. Una sexta etapa de monitorización ejecuta consultas semanales a Search Console para detectar qué artículos están subiendo posiciones y disparar reescrituras automáticas para los que se estancan.",
        verifiedMetrics: "Tras 90 días de operación continua y publicación de 26 artículos automatizados, los datos extraídos directamente de Google Search Console y Google Analytics 4 mostraron un crecimiento del tráfico orgánico del 40 % comparado con el trimestre anterior. El tiempo total dedicado por el equipo a tareas de contenido bajó un 73 % — de aproximadamente 16 horas mensuales a 4,3 horas (que ahora se invierten exclusivamente en revisión final humana antes de publicar, manteniendo el control editorial farmacéutico). El ROI a 3 meses fue de 4,2x considerando coste de implementación + hosting frente al ahorro generado: la farmacia dejó de pagar a un freelance externo y el equipo recuperó capacidad operativa equivalente a aproximadamente 25.000 € anuales en tiempo asistencial recuperado. Las posiciones medias en SERP para keywords objetivo pasaron del top 30 al top 12 en 75 días. El CTR orgánico subió del 0,8 % al 2,4 % gracias a meta descripciones generadas con intención clara y snippets enriquecidos.",
        lessonsLearned: "Tres lecciones técnicas marcaron el resultado. Primero: la calidad del prompt sistémico pesa más que el modelo elegido — invertimos dos semanas iterando el prompt de Claude con un farmacéutico colegiado validando cada output, y el ratio de aprobación humana subió del 60 % al 92 %. Segundo: separar GPT-4o (estructura) y Claude (redacción) funciona mejor que usar un solo modelo end-to-end — GPT es más fiable analizando SERP y generando esquemas; Claude es más natural en prosa sostenida. Tercero: Contentful como CMS desacoplado permitió escalar a múltiples canales sin reescribir el flujo (próxima fase: republicación automática en LinkedIn y newsletter). Las extensiones planificadas para 2026 incluyen generación automatizada de imágenes con Gemini Imagen para featured images únicas, traducción a catalán para captura de tráfico local en zonas catalanoparlantes, y un módulo de respuesta automática a comentarios del blog con escalado a humano cuando la consulta toca prescripción.",
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
        ],
        serviceType: "automatizaciones",
        publishedAt: "2025-11-10",
        highlightMetric: { label: "Ahorro operativo", value: "45k€/mes" },
        clientContext: "Pelican Catchy es una agencia de marketing digital especializada con cartera de clientes B2B y B2C en sectores variados — e-commerce, servicios profesionales, hospitality y SaaS. La agencia trabaja con un modelo de retainer mensual donde cada cliente recibe estrategia de contenido, gestión de redes sociales, copywriting SEO, reporting y atención de cuentas. El equipo combina perfiles creativos (estrategas de contenido, copywriters) con cuentas (account managers que gestionan la relación cliente). Su buyer persona interno es un account manager que gestiona simultáneamente entre 4 y 8 cuentas y necesita responder con agilidad a peticiones del cliente sin perder visibilidad sobre el estado global de cada cartera. El negocio había crecido más rápido que la operativa: en 18 meses pasaron de 5 a 14 clientes activos sin reestructurar los procesos internos, lo que generó una saturación operativa que empezaba a comprometer la calidad del servicio. La dirección entendió que escalar a 25-30 clientes con la operativa existente requería contratar 2-3 perfiles adicionales o automatizar agresivamente las tareas operativas de bajo valor para liberar al equipo para creatividad y relación cliente — la apuesta estratégica fue la segunda.",
        previousState: "Antes del despliegue, la agencia gestionaba ocho procesos clave con herramientas desconectadas entre sí. La estrategia anual de contenido se elaboraba en Notion con sesiones manuales de brainstorming que consumían 8-10 horas por cliente cada trimestre. Las descripciones SEO de productos y landing pages se escribían a mano en Google Docs y se copiaban manualmente al CMS del cliente. La programación de publicaciones en redes sociales se hacía en Metricool pero sin sincronización con el calendario editorial — múltiples versiones de verdad provocaban duplicidades y olvidos. Las tareas se asignaban en Asana mediante triggers manuales tras videoreuniones internas, generando un retraso medio de 36-48 horas entre la decisión y la ejecución. Los reportes de estado se elaboraban manualmente cada semana exportando datos de Metricool, Google Analytics y Asana a una hoja de cálculo, con 6 horas semanales dedicadas solo a consolidación. Los account managers reportaban verbalmente a la dirección por WhatsApp sin estructura, lo que dificultaba detectar problemas a tiempo. El coste oculto era enorme: aproximadamente 60 horas semanales del equipo se dedicaban a tareas operativas de bajo valor en lugar de creativas y de cliente.",
        architecture: "La solución es una arquitectura multi-agente desplegada en n8n self-hosted donde ocho workflows operan en paralelo con puntos de sincronización compartidos. El motor central recibe disparadores de tres fuentes: scheduling cron (workflows recurrentes), eventos de Asana (cambios de estado en tareas) y mensajes en un canal Slack interno (peticiones ad-hoc). El primer workflow genera la estrategia anual de contenido por cliente: Claude 3.5 Sonnet recibe el brief del cliente, su histórico de KPIs y benchmark competitivo, y produce un calendario editorial trimestral estructurado con temas, formatos, canales y fechas tentativas. El segundo workflow elabora descripciones SEO masivas: dado un listado de páginas, Claude genera meta titles, meta descriptions y H1 optimizados respetando límites de caracteres y keyword targets. El tercer workflow gestiona la publicación en redes: integración con Metricool API para programar contenido pre-aprobado, con verificación automática de que cada cliente respeta su guía de marca (tono, hashtags, frecuencia). El cuarto workflow distribuye tareas en Asana mediante reglas declarativas — qué tipo de petición va a qué proyecto, con qué prioridad, asignada a qué cuenta. El quinto workflow envía notificaciones operativas a WhatsApp Business API: cada account manager recibe un resumen diario de su cartera, alertas en tiempo real cuando un cliente envía un mensaje urgente y reportes semanales auto-generados con KPIs por cuenta. Los workflows 6, 7 y 8 cubren reporting consolidado, gestión de aprobaciones cliente (loop con email + link único) y monitorización de menciones en redes sociales con análisis de sentimiento por Claude.",
        verifiedMetrics: "Tras seis meses de operación, la eficiencia operativa medida en tareas completadas por hora-equipo aumentó un 160 % respecto al periodo previo al despliegue. Los ocho procesos automatizados representan colectivamente unas 50 horas semanales recuperadas — capacidad que la agencia redirigió a creatividad y desarrollo de nuevos clientes. El retraso medio entre decisión y ejecución de una tarea bajó de 36-48 horas a menos de 30 minutos para tareas estandarizables. Los reportes semanales de cliente se generan automáticamente en menos de 4 minutos por cuenta (vs 35-45 minutos manuales). El ahorro operativo aproximado equivale a 45.000 €/mes en coste de personal evitado, considerando la equivalencia en horas/equipo recuperadas más el coste de contratación adicional que ya no fue necesario para escalar a 22 clientes activos (objetivo de crecimiento alcanzado sin headcount adicional).",
        lessonsLearned: "La arquitectura paralela fue la decisión técnica que más impacto tuvo: tratar cada proceso como workflow independiente con sincronización solo en puntos de control evitó cuellos de botella y permite escalar workflows individualmente sin tocar el resto. La integración WhatsApp Business API resultó crítica para adoption — el equipo está constantemente en WhatsApp; mover las notificaciones a Slack o email habría reducido el uso real. Tres extensiones planificadas: módulo de aprobación cliente con firma digital integrada para acelerar el ciclo creativo, generación automatizada de mockups visuales con DALL-E para propuestas de contenido, y un agente IA conversacional embebido en el portal interno que responda preguntas operativas (\"¿qué clientes tienen reporte pendiente esta semana?\") consultando directamente la base de datos de Asana y Metricool.",
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
        logo: "/assets/businessoslogo.jpeg",
        image: "/assets/businessoslogo.jpeg",
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
        ],
        serviceType: "aplicaciones-ia",
        publishedAt: "2026-01-20",
        highlightMetric: { label: "SaaS reemplazado", value: "0€/mes" },
        clientContext: "Business Suite IA es nuestra propia plataforma corporativa interna, construida para gestionar la operativa completa de AutoProcessX como empresa: comercial, entrega de proyectos, facturación interna y coordinación de agentes autónomos. La decidimos construir como producto propio por dos razones estratégicas. Primera: un equipo técnico especializado no debe estar pagando suscripciones SaaS que consumen márgenes y fragmentan los datos de cliente entre cinco herramientas distintas — si vendemos plataformas IA propias a clientes, lo coherente es operar nosotros mismos sobre una. Segunda: tener una plataforma propia en producción 24/7 es la prueba más sólida de capacidad técnica frente a un cliente potencial que duda si una agencia pequeña puede entregar infraestructura empresarial real. Business Suite IA es a la vez nuestro sistema operativo y nuestra demo permanente. La operamos diariamente nosotros mismos: cada lead entra al CRM, cada propuesta se genera con agentes Claude, cada tarea se ejecuta orquestada por n8n y cada métrica se consolida en el dashboard ejecutivo. La filosofía es 'dogfooding' técnico: si la plataforma falla en producción, lo notamos antes que ningún cliente.",
        previousState: "Antes de Business Suite IA, AutoProcessX operaba con la stack típica que vemos en el 80 % de las pymes que nos contactan: HubSpot CRM Free para gestión de contactos, Notion para documentación interna y plantillas de propuestas, Trello para tareas, Google Calendar para agendado, Stripe para facturación y un Google Sheets central donde manualmente consolidábamos KPIs financieros. Cada herramienta es buena en su silo, pero los datos vivían en cinco bases de datos distintas sin foreign keys. Cambiar el estado de un lead implicaba actualizar HubSpot, mover la tarjeta en Trello, marcar la tarea en Notion y notificar manualmente por Slack. La fricción operativa era alta y, peor aún, la información para tomar decisiones — cuántas propuestas tenemos abiertas por encima de 5k €, cuál es el tiempo medio de cierre, qué cliente está en riesgo de churn — requería exportar manualmente cada herramienta y crucificar los datos en Excel. El coste mensual agregado de los SaaS rondaba los 280 €/mes en plan starter, sabiendo que escalar a planes business multiplicaba la factura por 4-5x. Más crítico: los agentes IA que queríamos desplegar para cualificar leads o generar propuestas no podían operar nativamente sobre HubSpot/Notion/Trello sin middleware costoso (Zapier, Make) que añadía latencia, costes por ejecución y un punto adicional de fallo.",
        architecture: "Business Suite IA es una aplicación full-stack monolítica desplegada en AWS, construida con Next.js 16 (App Router) en el frontend y API Routes con Server Actions para la lógica de servidor. La base de datos es PostgreSQL 16 gestionada en AWS RDS con réplicas read-only para queries de reporting. Prisma actúa como ORM con migraciones versionadas en Git. El esquema relacional unifica los siete módulos: tabla `clients` (CRM), `deals` (pipeline con foreign keys a clientes), `tasks` (con FK a deal y assignee), `calendar_events` (con FK a task o deal opcional), `proposals` (con FK a deal y template), `agent_runs` (histórico de ejecuciones de agentes IA) y `audit_log` (trazabilidad completa). Cada módulo expone Server Actions tipadas con Zod para validación en boundary. El motor de agentes autónomos es n8n self-hosted en una instancia EC2 separada, conectada a la base de datos PostgreSQL vía connection pool. Los agentes son workflows n8n que invocan a Claude 3.5 Sonnet con tool calling: cada agente tiene un set de tools definidas (createTask, updateDeal, generateProposal, sendCalendarInvite) que se traducen a operaciones SQL transaccionales con logging completo. Cuando un agente actúa, queda registrado en `agent_runs` con timestamp, prompt, tools llamadas, resultado y duración. La autenticación es Auth.js con multi-tenant ready (preparada para servir a clientes externos en el futuro). El despliegue corre en EC2 t3.medium con auto-scaling a t3.large bajo carga, RDS en multi-AZ y CloudFront delante para assets estáticos. CI/CD vía GitHub Actions con lint + typecheck + tests + Prisma migrations + zero-downtime deployment.",
        verifiedMetrics: "Business Suite IA opera en producción 24/7 desde el despliegue inicial sin downtime planificado más allá de ventanas de migración de schema. Los siete módulos están activos y procesando tráfico real diario: CRM con la cartera completa de clientes y leads, pipeline con todos los deals activos, tareas con histórico completo del equipo, calendario sincronizado bidireccionalmente con Google Calendar, propuestas auto-generadas por agentes Claude (97 % de las propuestas comerciales se generan automáticamente), y dashboard ejecutivo consolidado en tiempo real. El ahorro operativo frente al stack SaaS anterior es directo: 0 € de suscripciones mensuales recurrentes (pagamos hosting AWS y modelos LLM por uso, ~80 €/mes total). El tiempo medio de generación de una propuesta comercial pasó de 90-120 minutos manuales a menos de 8 minutos automatizados con revisión humana. La automatización interna alcanza el 100 % en tareas estandarizables (creación de deals desde formulario web, envío de emails de seguimiento, recordatorios de calendario, reporting semanal).",
        lessonsLearned: "La decisión arquitectónica más acertada fue mantener un único monolito en lugar de microservicios — para un equipo boutique, la simplicidad operativa de un solo deploy supera con creces los beneficios teóricos de servicios desacoplados. Server Actions de Next.js eliminaron la necesidad de mantener una capa REST separada, reduciendo la superficie de código en aproximadamente un 30 %. La integración n8n + tool calling de Claude resultó más robusta que escribir el orchestrador desde cero: n8n da observabilidad gratis (cada ejecución es inspeccionable, retry-able y debuggable visualmente). Las extensiones planificadas para 2026 incluyen: módulo de facturación electrónica integrada con Verifactu (regulación española), agente vendedor proactivo que detecta leads inactivos y genera secuencias de re-engagement, módulo de gestión de partners para sub-contratistas técnicos, y la apertura del producto a clientes externos en modo white-label como SaaS independiente — convirtiendo la plataforma interna en un producto comercial.",
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
        logo: "/assets/opoai_logo.png",
        image: "/assets/opoai_logo.png",
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
        ],
        serviceType: "aplicaciones-ia",
        clientUrl: "https://opoai.es",
        publishedAt: "2025-12-05",
        highlightMetric: { label: "Disponibilidad", value: "24/7" },
        clientContext: "OpoAI es una plataforma EdTech vertical especializada en la preparación de oposiciones públicas en España, un mercado con un volumen anual aproximado de 250.000 candidatos activos solo en convocatorias estatales. El sector de las academias de oposiciones está dominado por modelos tradicionales: clases presenciales, manuales impresos, tests fotocopiados y un seguimiento personal del opositor por parte del preparador. Los precios mensuales oscilan entre 100 € y 300 € según especialidad, con duraciones de preparación de 12 a 36 meses. El buyer persona tipo es una persona entre 22 y 38 años con titulación universitaria que afronta la oposición en paralelo a un trabajo o cuidado familiar, con disponibilidad fragmentada de estudio (mañanas tempranas, tardes-noches, fines de semana) y una alta sensibilidad al feedback rápido sobre su rendimiento. La tasa de abandono histórica en oposiciones es altísima — superior al 60 % en las primeras 12 semanas — debido a la falta de feedback inmediato, la sensación de aislamiento y la imposibilidad de medir progreso real. OpoAI nació para atacar exactamente ese problema: convertir el material oficial estático (BOE, temarios, jurisprudencia) en una experiencia interactiva, adaptativa y cuantificable que mantenga al opositor enganchado y mida su evolución técnica con la misma precisión que un examen real.",
        previousState: "El estado previo del mercado al que OpoAI llega es el modelo tradicional de academia. El opositor se enfrenta a un temario impreso de entre 800 y 2.500 páginas según especialidad, sin estructura de aprendizaje espaciada, sin sistema de flashcards integrado, sin generación dinámica de tests adaptados a sus puntos débiles. Los simulacros se hacen en papel o en plataformas LMS genéricas con bancos de preguntas estáticos que se memorizan en pocos meses, perdiendo valor pedagógico. El feedback al opositor llega con retraso: el preparador corrige tests en bloques semanales o quincenales y los temas débiles se identifican demasiado tarde para corregir el plan de estudio antes del examen oficial. Sin métricas comparativas con otros opositores, la sensación subjetiva domina sobre el dato — muchos abandonan creyendo que van peor que la media cuando en realidad están en posiciones de top 30 %. Las academias online existentes resuelven parte del problema (acceso flexible, vídeos grabados) pero arrastran las mismas limitaciones técnicas: bancos cerrados de preguntas, sin generación adaptativa, sin tutoría conversacional disponible 24/7.",
        architecture: "OpoAI está construida como una aplicación full-stack en Next.js 16 con App Router, desplegada en infraestructura europea con base de datos PostgreSQL gestionada y motor de búsqueda vectorial integrado mediante pgvector. El núcleo técnico es el sistema RAG (Retrieval-Augmented Generation) que ingesta el temario oficial completo: cada bloque temático se procesa mediante chunking semántico (no por longitud arbitraria, sino respetando estructura jerárquica del temario — artículo, apartado, subapartado), se embedded con OpenAI text-embedding-3-large y se indexa en pgvector con metadata estructurada (bloque, tema, artículo de referencia, fecha de actualización legal). El tutor IA conversacional invoca a Claude 3.5 Sonnet con un system prompt que fuerza al modelo a operar exclusivamente sobre los chunks recuperados — no permite al modelo responder con conocimiento general que pueda estar desactualizado o ser incorrecto en el contexto legal específico. Cada respuesta del tutor cita explícitamente el artículo o apartado del temario donde se fundamenta. El modo Opolingo es un sistema de spaced repetition basado en el algoritmo SM-2 modificado que genera flashcards dinámicamente desde el chunk semántico que el usuario está estudiando — sin banco preconstruido. El motor de simulacros usa Claude para generar tests con el formato exacto de la convocatoria oficial (número de preguntas, tipo de respuestas, estructura de distractores) y con dificultad calibrada al nivel del usuario detectado por su histórico de aciertos. n8n orquesta los flujos asíncronos: vectorización nocturna de actualizaciones legales del BOE, generación batch de simulacros para optimizar coste de inferencia, y consolidación diaria del ranking entre usuarios.",
        verifiedMetrics: "OpoAI tiene nueve módulos en producción activa: dashboard del usuario, temario navegable, tutor IA conversacional, modo flashcards Opolingo, motor de simulacros, ranking comparativo, sistema de flashcards favoritas, módulo de notas personales y dashboard de progreso por bloque. La precisión de los simulacros generados respecto al formato oficial es del 100 %: cada simulacro respeta número exacto de preguntas, tiempo, formato de respuestas, estructura de distractores y nivel de dificultad media de la convocatoria real. El sistema RAG mantiene tasa de alucinación cercana a cero gracias al system prompt restrictivo y a la citación obligatoria del artículo de referencia en cada respuesta. La plataforma opera con costes de inferencia LLM optimizados mediante caching de embeddings y batch processing nocturno, manteniendo un coste por usuario activo mensual sostenible para el modelo de negocio EdTech.",
        lessonsLearned: "La lección técnica más relevante fue invertir tiempo en el chunking jerárquico del temario en lugar de usar chunking por longitud — la calidad del retrieval mejoró sustancialmente cuando los chunks respetaban la estructura legal del documento. Forzar al modelo a citar fuente en cada respuesta no solo mejoró la precisión percibida sino que es legalmente importante en un sector donde una respuesta incorrecta puede afectar al rendimiento de un opositor en un examen real. La gamificación del modo Opolingo (rachas, niveles, flashcards diarias) generó una retención superior a la del módulo de simulacros tradicionales — confirmación empírica de que el spaced repetition con feedback inmediato bate al test bombing como estrategia pedagógica. Las extensiones planificadas: añadir generación de mapas mentales por tema con DALL-E, incorporar transcripción y análisis de audios oficiales (sentencias, vistas) para oposiciones jurídicas, abrir un módulo de comunidad con preguntas verificadas por preparadores humanos, e integrar un agente de coaching emocional que detecte signos de burnout en patrones de uso (descenso de engagement, aumento de errores) y proponga descansos o cambios de plan.",
    },
    {
        id: "05",
        slug: "seoscar-automatizacion-mercado-keywords",
        title: "SEOscar · Automatización de Mercado & Keywords SEO",
        client: "SEOscar",
        sector: "SEO & Marketing Digital",
        result: "3",
        resultLabel: "Workflows en producción",
        desc: "Stack de automatización SEO end-to-end para SEOscar: investigación de keywords, enriquecimiento con datos reales de mercado y reporting ejecutivo mensual orquestado en n8n.",
        longDesc: "Construimos para SEOscar un sistema autónomo que sustituye horas de investigación manual y elaboración de informes por una capa de orquestación con n8n y agentes Claude. La plataforma idea keywords de nicho, valida volúmenes con DataForSEO, fusiona análisis de competidores con expansión semántica y entrega informes ejecutivos auto-generados desde GSC y GA4 — todo recurrente, auditado y sin intervención humana.",
        challenge: "El equipo dedicaba decenas de horas mensuales a tres procesos repetitivos: ideación y enriquecimiento de keywords, fusión de inteligencia competitiva con datos de SERP y elaboración de reportings de cliente. La operación no escalaba sin contratar más analistas.",
        solution: "Tres workflows n8n encadenados sobre el catálogo de automatizaciones AutoProcessX: Generador SEO & Data Enrichment para descubrir keywords rentables, Mega-Estrategia SEO Full-Scale como orquestador paralelo de competidores y SERP, y Reporting SEO Autónomo que genera informes mensuales por dominio con datos reales de Google Search Console y Analytics.",
        metric: "3 workflows en producción",
        secondaryMetric: "Operación 100% autónoma",
        tags: ["n8n", "Claude", "DataForSEO", "Google Sheets", "GA4", "GSC"],
        logo: "/assets/seoscar_logo.png",
        image: "/assets/seoscar_logo.png",
        metricsArray: [
            { label: "Workflows desplegados", value: "3", icon: <Layers className="h-4 w-4 text-primary" /> },
            { label: "Reducción tiempo manual", value: "-90%", icon: <Zap className="h-4 w-4 text-primary" /> }
        ],
        theme: "light",
        stack: [
            { name: "n8n", role: "Motor de orquestación de los tres workflows SEO" },
            { name: "Anthropic Claude", role: "Ideación de keywords, expansión semántica y redacción de informes" },
            { name: "DataForSEO", role: "Volúmenes reales, dificultad SEO y datos de SERP" },
            { name: "Google Sheets", role: "Capa de almacenamiento y exportación de keywords enriquecidas" },
            { name: "Google Analytics 4", role: "Métricas de tráfico orgánico y comportamiento por dominio" },
            { name: "Google Search Console", role: "Datos de impresiones, clics y posiciones para reporting" },
        ],
        phases: [
            { phase: "01", title: "Generador SEO & Data Enrichment", description: "Claude idea cientos de keywords de nicho, DataForSEO inyecta volúmenes reales y dificultad, y el sistema filtra el Top 50 más rentable exportándolo automáticamente a Google Sheets.", image: "/assets/n8n_seo_keywords.png" },
            { phase: "02", title: "Mega-Estrategia SEO Full-Scale", description: "Orquestador en paralelo que ejecuta análisis de competidores, expansión semántica, validación de volúmenes y scraping de SERP — fusionados en un informe maestro listo para producción.", image: "/assets/n8n_seo_strategy.png" },
            { phase: "03", title: "Reporting SEO Autónomo", description: "A fin de mes recorre la cartera de clientes, extrae analítica de GSC y GA4, y Claude redacta un informe ejecutivo personalizado por dominio en HTML listo para enviar.", image: "/assets/n8n_seo_report.png" },
            { phase: "04", title: "Monitorización & retry", description: "Cada workflow incluye lógica de reintentos, alertas a Slack ante fallos y trazabilidad completa de ejecuciones para garantizar entregas sin supervisión humana." },
        ],
        serviceType: "automatizaciones",
        publishedAt: "2026-02-15",
        highlightMetric: { label: "Capacidad", value: "30+ cuentas" },
        clientContext: "SEOscar es una consultora de SEO técnico especializada en empresas B2B y e-commerce de mercado europeo. La operación combina servicios recurrentes de optimización on-page, link building y content strategy con auditorías técnicas puntuales y consultoría de growth orgánico. El buyer persona es un Head of Marketing o Growth Manager de empresa entre 50 y 500 empleados que necesita acelerar el crecimiento orgánico sin construir un equipo SEO interno. La cartera activa de SEOscar mantiene entre 8 y 15 cuentas simultáneas con compromisos de reporting mensual estructurado, lo que genera un volumen de trabajo analítico recurrente intenso. El sector SEO ha vivido en los últimos 18 meses una transformación radical: la llegada de AI Overviews de Google, la expansión de Perplexity y ChatGPT Search como motores de descubrimiento alternativos al SERP tradicional, y la presión de modelos LLM que necesitan ser citados como fuente convirtieron el GEO (Generative Engine Optimization) en una capa adicional crítica. Los analistas SEO ya no pueden mantenerse productivos haciendo manualmente keyword research, análisis de competencia y reporting — la cantidad de datos a procesar por cliente y mes supera la capacidad humana. SEOscar identificó la automatización inteligente como la palanca para escalar de 15 a 30+ cuentas sin contratar 4-5 analistas adicionales.",
        previousState: "Antes del despliegue, los tres procesos automatizados se ejecutaban manualmente con un coste agregado de 35-45 horas de analista por mes y por cliente. La ideación de keywords se hacía en bloques de 3-4 horas usando una combinación de Ahrefs, SEMrush y brainstorming manual; el output típico era una hoja de cálculo con 80-150 keywords sin volúmenes validados que requerían un segundo pase manual para enriquecer con DataForSEO. La estrategia SEO completa por cliente — análisis de competidores, expansión semántica, validación de SERP, oportunidades de contenido — consumía entre 6 y 10 horas mensuales por cuenta y se entregaba en formato Word con datos copiados manualmente desde múltiples herramientas. El reporting mensual era el proceso más doloroso: extraer datos de Google Search Console, cruzarlos con Google Analytics 4, validar tendencias contra el mes previo, redactar el informe en plantilla, generar gráficos y entregarlo en PDF maquetado. Por cliente, el reporting consumía 4-6 horas mensuales. Multiplicado por 12 cuentas, suponía aproximadamente 60-70 horas mensuales solo en reporting, sin valor añadido analítico real — solo consolidación y formato.",
        architecture: "El stack está construido sobre n8n self-hosted como motor central de orquestación, con tres workflows independientes que comparten una capa común de credenciales, almacenamiento (Google Sheets como persistencia operativa) y notificaciones. El primer workflow — Generador SEO & Data Enrichment — recibe como input un nicho temático y un dominio cliente, invoca a Claude 3.5 Sonnet para idear entre 200 y 400 keywords semánticamente relevantes con razonamiento explícito sobre la intención de búsqueda de cada una, consulta DataForSEO en batch para enriquecer cada keyword con volumen de búsqueda mensual, dificultad SEO y CPC, calcula un score compuesto de oportunidad (volumen × inverso de dificultad × intent commercial) y filtra el Top 50 a una hoja de Google Sheets compartida con el cliente. El segundo workflow — Mega-Estrategia SEO Full-Scale — opera en paralelo: lanza simultáneamente cuatro sub-procesos (análisis de competidores con scraping de top 10 SERP, expansión semántica con Claude, validación de volúmenes con DataForSEO y mapping de oportunidades de contenido) y los fusiona en un informe maestro estructurado en HTML. El tercer workflow — Reporting SEO Autónomo — se ejecuta automáticamente el día 1 de cada mes: itera sobre la cartera completa de clientes, extrae datos de Google Search Console (impresiones, clics, CTR, posición media por query y por página) y de Google Analytics 4 (sesiones orgánicas, conversiones, comportamiento), calcula deltas vs mes anterior y vs trimestre, redacta con Claude un informe ejecutivo personalizado por cliente en HTML maquetado y lo envía vía email con PDF adjunto. La capa de monitorización incluye reintentos exponenciales ante fallos transitorios de APIs externas, alertas a Slack ante errores persistentes y un dashboard de salud accesible 24/7 con métricas de éxito por workflow.",
        verifiedMetrics: "Los tres workflows operan en producción mensual sin intervención humana en el flujo principal — el equipo SEOscar solo revisa outputs antes de enviar al cliente, función que toma minutos en lugar de horas. La reducción de tiempo manual agregada en los tres procesos es del 90 %: lo que antes consumía 35-45 horas por cliente y mes ahora se ejecuta en menos de 4 horas de revisión final. El coste de inferencia de los workflows está controlado mediante batching y caching: el coste mensual total de Claude + DataForSEO por cliente representa un porcentaje de margen perfectamente sostenible para el modelo de negocio. La capacidad operativa de la consultora pasó del techo de 15 cuentas máximas a una proyección de 30+ cuentas con el mismo headcount, manteniendo o mejorando la calidad del output entregado.",
        lessonsLearned: "La decisión de usar Google Sheets como capa de persistencia (en lugar de una base de datos relacional dedicada) fue clave para adoption — el equipo SEO trabaja en hojas de cálculo nativamente; forzar una UI nueva habría reducido el uso real. Los workflows en paralelo del segundo proceso (Mega-Estrategia) demostraron que la latencia total de un análisis SEO no es la suma de pasos sino el max() — paralelizar competidores, semántica, volúmenes y SERP redujo el tiempo de ejecución de 12-15 minutos secuenciales a 3-4 minutos. La citación obligatoria de fuente en cada insight del informe (qué query, qué fecha, qué fuente de datos) blindó al cliente ante cuestionamientos sobre métricas. Las extensiones en roadmap incluyen: agente proactivo que detecta caídas anómalas de tráfico orgánico y dispara investigación automática (cambio de algoritmo, pérdida de backlinks, problema técnico), módulo de generación automatizada de briefs de contenido a partir del Top 10 SERP de una keyword objetivo, y un workflow de auditoría técnica continua que monitoriza Core Web Vitals, schema markup y status codes con alertas en tiempo real.",
    },
]
