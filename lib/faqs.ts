export interface FAQItem {
    q: string
    a: string
}

export const homeFaqs: FAQItem[] = [
    {
        q: "¿Qué hace AutoProcessX exactamente?",
        a: "Diseñamos y desplegamos infraestructura IA propia para tu empresa: automatizaciones (n8n), plataformas corporativas con agentes y chatbots conversacionales — todo bajo tu propiedad, sin SaaS ni licencias mensuales por usuario.",
    },
    {
        q: "¿Cuál es la diferencia frente a un SaaS multinacional?",
        a: "Un SaaS es alquiler perpetuo: pagas por usuario y tus datos viven en su cloud. Nosotros entregamos un sistema en pago único que se despliega bajo tu firewall — sin techos por uso, escalable y 100% tuyo.",
    },
    {
        q: "¿Cuánto cuesta y cómo se factura?",
        a: "Un proyecto típico es pago único de implementación + hosting predecible (servidor propio o tu cuenta cloud). Sin coste por tarea, sin coste por usuario y sin sorpresas a fin de mes.",
    },
    {
        q: "¿Cuánto se tarda en desplegar un sistema?",
        a: "Una automatización aislada se despliega en 10-15 días. Una plataforma corporativa con módulos integrados (CRM, agentes, RAG) requiere 4-6 semanas. Te entregamos un plan de despliegue tras una auditoría inicial de 48h.",
    },
    {
        q: "¿Y si nuestro equipo no es técnico?",
        a: "Nos encargamos de toda la ingeniería end-to-end. Tras el despliegue te formamos en cómo usar y supervisar el sistema. El código y la documentación quedan en tu repositorio para que puedas mantenerlo o evolucionarlo internamente.",
    },
    {
        q: "¿Cómo es la auditoría inicial gratuita?",
        a: "Llamada de 30 minutos donde mapeamos los procesos críticos de tu operativa. En 48h te enviamos un diagnóstico con cuellos de botella detectados, oportunidades de automatización y un plan de despliegue priorizado por ROI.",
    },
]

export const automationsFaqs: FAQItem[] = [
    {
        q: "¿Por qué n8n y no Zapier o Make?",
        a: "n8n permite autohospedaje, control total del código y orquestación compleja sin límites de tareas. Zapier y Make cobran por ejecución y dependes de su cloud — n8n se despliega en tu servidor y escala sin coste por tarea.",
    },
    {
        q: "¿Qué procesos podemos automatizar?",
        a: "Cualquier proceso repetitivo con APIs disponibles: triaje de leads, reporting, generación de contenido SEO, integraciones CRM/ERP, alertas, secretaría autónoma, sincronización entre apps y orquestación multi-agente con LLMs.",
    },
    {
        q: "¿Qué pasa si una automatización falla en producción?",
        a: "Cada workflow incluye lógica de reintentos, manejo de errores y alertas a Slack/WhatsApp ante fallos. Mantenemos un dashboard de estado con trazabilidad completa de ejecuciones para garantizar entregas sin supervisión humana.",
    },
    {
        q: "¿Necesito un servidor propio para n8n?",
        a: "Sí. Configuramos n8n en un servidor dedicado bajo tu firewall (on-premise o tu cuenta cloud). Tus datos nunca pasan por servidores compartidos y el coste de ejecución es 0€ por tarea.",
    },
    {
        q: "¿Cuánto cuesta una automatización típica?",
        a: "Una automatización aislada arranca desde implementación de pago único + hosting. El coste depende de la complejidad: número de integraciones, lógica condicional, agentes IA involucrados y SLA requerido. Auditoría sin compromiso para presupuesto exacto.",
    },
    {
        q: "¿Pueden integrar la automatización con mis sistemas existentes?",
        a: "Sí. n8n soporta más de 400 integraciones nativas (Google Workspace, Slack, HubSpot, Notion, Airtable, WhatsApp, Stripe, etc.) y cualquier API REST/GraphQL. También conectamos sistemas legacy mediante webhooks o conectores custom.",
    },
]

export const chatbotFaqs: FAQItem[] = [
    {
        q: "¿Qué diferencia un chatbot IA de un chatbot tradicional?",
        a: "Los tradicionales siguen árboles de decisión rígidos. Los nuestros usan LLMs (Claude, GPT) entrenados con tu base de conocimiento mediante RAG semántico — entienden contexto, responden con tu tono y resuelven consultas reales sin scripts.",
    },
    {
        q: "¿En qué canales puedo desplegar el chatbot?",
        a: "Web (widget embebido), WhatsApp Business, Instagram, Telegram, Email, Slack y voz. Un mismo agente unificado responde en todos los canales con contexto compartido del cliente.",
    },
    {
        q: "¿Cómo evita el chatbot inventarse respuestas?",
        a: "Implementamos RAG con tu documentación oficial (PDFs, web, base de datos). El agente solo responde basándose en datos verificados de tu empresa y, si no encuentra contexto suficiente, escala a un humano en lugar de alucinar.",
    },
    {
        q: "¿El chatbot puede vender o solo responder dudas?",
        a: "Ambas cosas. Configuramos dos arquitecturas: agente vendedor (cualifica leads, supera objeciones, agenda demos) y agente Q&A (resuelve dudas técnicas, gestiona postventa). Pueden coexistir en el mismo canal con routing inteligente.",
    },
    {
        q: "¿Se integra con mi CRM y mi calendario?",
        a: "Sí. El chatbot crea tickets en HubSpot/Salesforce, agenda reuniones en Google Calendar/Setmore, actualiza Pipedrive y notifica a tu equipo por Slack o WhatsApp en tiempo real.",
    },
    {
        q: "¿Cuánto cuesta operar el chatbot al mes?",
        a: "El coste recurrente son las llamadas a los modelos LLM (Claude/GPT) — típicamente entre 30-150€/mes según volumen. La infraestructura corre en tu servidor sin costes adicionales.",
    },
]

export const platformFaqs: FAQItem[] = [
    {
        q: "¿Qué es una plataforma IA empresarial?",
        a: "Un entorno corporativo unificado que reúne CRM, pipeline, tareas, propuestas, agentes IA y RAG sobre tus datos en una sola interfaz — sustituyendo el ecosistema fragmentado de SaaS por un sistema propio integrado y bajo tu control.",
    },
    {
        q: "¿Por qué construir una plataforma propia en vez de usar HubSpot, Notion o Monday?",
        a: "SaaS genéricos cobran por usuario, fragmentan tus datos y no soportan agentes IA nativos. Una plataforma propia integra todos los módulos, los agentes acceden directamente a la base de datos y el coste no escala con el equipo.",
    },
    {
        q: "¿Qué módulos podemos incluir?",
        a: "Dashboard ejecutivo, CRM 360º, pipeline kanban, tareas, calendario, propuestas, agentes autónomos, RAG sobre documentación, simulacros (e-learning), analytics y gamificación. Cualquier módulo empresarial es desarrollable a medida.",
    },
    {
        q: "¿Cómo funcionan los agentes autónomos en la plataforma?",
        a: "Los agentes (Claude/GPT) tienen acceso directo a tus módulos: crean tareas, actualizan el CRM, generan propuestas, asignan recursos y reportan al calendario sin intervención humana. Operan bajo reglas de negocio definidas por ti.",
    },
    {
        q: "¿Dónde se aloja la plataforma?",
        a: "En tu propia infraestructura: servidor on-premise, AWS/GCP/Azure de tu cuenta o un VPS dedicado. Toda la base de datos vive bajo tu firewall y cumple con tu política de cumplimiento (RGPD, ISO 27001, etc.).",
    },
    {
        q: "¿Puedo evolucionar la plataforma con el tiempo?",
        a: "Sí. El código fuente y la documentación quedan en tu repositorio. Puedes contratar nuestro mantenimiento o evolucionar la plataforma con tu equipo interno — es 100% tuya.",
    },
]

export const aboutFaqs: FAQItem[] = [
    {
        q: "¿Quién está detrás de AutoProcessX?",
        a: "Un equipo boutique de ingenieros con experiencia previa en arquitectura de plataformas, big data e IA aplicada. El arquitecto que diseña tu sistema es el mismo que lo despliega — sin capas de gestión ni subcontratas.",
    },
    {
        q: "¿Dónde estáis ubicados?",
        a: "Sede en Barcelona. Operamos remotamente con clientes en toda España y Europa, y desplazamiento on-site para discovery o despliegues críticos cuando aplica.",
    },
    {
        q: "¿Cuál es vuestra filosofía de trabajo?",
        a: "Producción real, no prototipos. Soberanía técnica: el código y los datos son del cliente. Stack moderno (Next.js, n8n, Claude, PostgreSQL) y compromiso con sistemas que operan 24/7 sin nuestra intervención.",
    },
    {
        q: "¿Trabajáis con startups o solo empresas grandes?",
        a: "Trabajamos con cualquier empresa que tenga procesos críticos repetitivos y voluntad de tener su propia infraestructura. Hemos desplegado tanto en startups como en pymes consolidadas y agencias con cartera de clientes.",
    },
    {
        q: "¿Tenéis casos de éxito públicos?",
        a: "Sí. Puedes auditar Farmacia García del Cerro, Pelican Catchy, Business Suite IA, OpoAI y SEOscar en nuestro registro de casos. Cada uno con stack técnico, fases de despliegue y métricas reales.",
    },
]

export const techFaqs: FAQItem[] = [
    {
        q: "¿Qué stack tecnológico utilizáis?",
        a: "Next.js + TypeScript para frontends, PostgreSQL/Prisma para datos, n8n como motor de orquestación, Claude 3.5 Sonnet y GPT-4o como LLMs, arquitecturas RAG con vector DB (pgvector/Pinecone) y despliegue en AWS/GCP o servidor on-premise.",
    },
    {
        q: "¿Qué LLMs usáis y por qué?",
        a: "Por defecto Claude 3.5 Sonnet (Anthropic) por calidad de razonamiento y baja tasa de alucinación. GPT-4o para tareas multimodales. Para casos sensibles, modelos open-source (Llama, Mistral) en servidor propio sin enviar datos a APIs externas.",
    },
    {
        q: "¿Cómo garantizáis la seguridad de los datos?",
        a: "Despliegue bajo tu firewall, cifrado AES-256 en reposo y TLS 1.3 en tránsito, Zero Retention policies con proveedores LLM, backups cifrados, acceso SSH bajo control y auditoría completa de logs.",
    },
    {
        q: "¿Cómo es la arquitectura RAG que implementáis?",
        a: "Pipeline de ingesta (chunking semántico + embeddings), vector DB para recuperación, re-ranking con cross-encoder, prompt construction con context window optimizado y guardrails para prevenir alucinaciones. Todo medible y trazable.",
    },
    {
        q: "¿Soportáis ejecución en local sin cloud?",
        a: "Sí. Para clientes con requisitos estrictos de privacidad desplegamos toda la stack on-premise: n8n, vector DB y modelos open-source corren en tu servidor sin salida a internet. Coste por inferencia: 0€.",
    },
    {
        q: "¿Cómo monitorizáis los sistemas en producción?",
        a: "Stack de observabilidad con métricas de ejecución, latencia LLM, tasa de éxito de workflows, alertas a Slack/WhatsApp ante fallos y dashboard de salud accesible 24/7. Acuerdo de operación documentado por proyecto.",
    },
]

export const casesFaqs: FAQItem[] = [
    {
        q: "¿Qué tipo de proyectos aparecen en el registro?",
        a: "Casos en producción real: automatizaciones n8n (Farmacia García del Cerro, Pelican Catchy, SEOscar), plataformas corporativas (Business Suite IA), aplicaciones edTech con IA (OpoAI). Todos desplegados y operativos.",
    },
    {
        q: "¿Puedo ver el stack técnico de cada caso?",
        a: "Sí. Cada ficha incluye stack completo, fases de despliegue, retos resueltos, solución implementada y métricas de impacto. Diseñado para que un CTO pueda auditar la arquitectura antes de hablar con nosotros.",
    },
    {
        q: "¿Estos casos son reales o ejemplos?",
        a: "100% reales y en producción activa. Para clientes con NDA cambiamos el nombre comercial pero el stack y los resultados son auténticos. Si necesitas referencias verificables, las facilitamos bajo solicitud.",
    },
    {
        q: "¿Puedo replicar uno de estos sistemas para mi empresa?",
        a: "Sí. Cada arquitectura está diseñada para ser adaptable. Si tu operativa se parece a alguno de los casos, podemos partir de esa base y personalizarla — reduce tiempos de despliegue y coste.",
    },
    {
        q: "¿Cómo entro en el registro como nuevo caso?",
        a: "Solicita una auditoría técnica. Tras el despliegue, si los resultados son significativos, te incluimos en el registro como caso de referencia (con tu autorización) — beneficio mutuo de visibilidad y validación.",
    },
]
