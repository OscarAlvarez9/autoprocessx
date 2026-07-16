export type ProjectColor = "blue" | "purple" | "slate" | "cyan" | "orange" | "emerald"

export interface ProjectStep {
  title: string
  text: string
}
export interface BlogPoint {
  icon: "Search" | "Zap" | "Link"
  title: string
  text: string
}
export interface ProjectMetric {
  value: string
  label: string
  note: string
}

export interface Project {
  slug: string
  client: string
  website: string
  title: string
  summary: string
  cover_image: string
  color: ProjectColor
  about: { description: string; challenge: string }
  strategy: { title: string; steps: ProjectStep[] }
  web_showcase?: { title: string; description: string; features: string[]; images: string[] }
  blog_strategy?: { title: string; description: string; points: BlogPoint[] }
  results: { metrics: ProjectMetric[]; summary: string }
  tags: string[]
  tech_stack: string[]
  company_images: string[]
}

/** Clases de acento por color de proyecto (Flagship Light). */
export const projectColor: Record<ProjectColor, { text: string; bg: string; border: string; dot: string }> = {
  blue: { text: "text-blue-600", bg: "bg-blue-500/10", border: "border-blue-500/30", dot: "bg-blue-500" },
  purple: { text: "text-violet-600", bg: "bg-violet-500/10", border: "border-violet-500/30", dot: "bg-violet-500" },
  slate: { text: "text-slate-600", bg: "bg-slate-500/10", border: "border-slate-500/30", dot: "bg-slate-500" },
  cyan: { text: "text-cyan-600", bg: "bg-cyan-500/10", border: "border-cyan-500/30", dot: "bg-cyan-500" },
  orange: { text: "text-orange-600", bg: "bg-orange-500/10", border: "border-orange-500/30", dot: "bg-orange-500" },
  emerald: { text: "text-emerald-600", bg: "bg-emerald-500/10", border: "border-emerald-500/30", dot: "bg-emerald-500" },
}

export const projects: Project[] = [
  {
    slug: "totfinestra",
    client: "Totfinestra",
    website: "https://totfinestra.com",
    title: "Digitalización Total y Salto al B2C Nacional",
    summary: "De depender de constructoras a facturar directo a cliente final. Web nativa con CMS a medida.",
    cover_image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=80",
    color: "blue",
    about: {
      description:
        "Totfinestra es una empresa familiar con décadas de experiencia en la instalación de ventanas de aluminio y PVC. Su excelencia técnica era indiscutible, pero su canal de ventas era totalmente 'analógico'.",
      challenge:
        "Su facturación dependía casi exclusivamente de subcontratas para grandes constructoras y jefes de obra. Esto significaba márgenes apretados, pagos a 90 días y cero control sobre su flujo de trabajo. Necesitaban romper esa dependencia y captar al cliente final (particulares) directamente.",
    },
    strategy: {
      title: "Roadmap hacia la Independencia Digital",
      steps: [
        { title: "Identidad Digital", text: "Definir una marca que transmitiera confianza al particular, alejándose de la imagen de 'subcontrata industrial'." },
        { title: "Canal Propio", text: "Crear un activo digital (web) que fuera propiedad 100% del cliente, sin depender de plataformas de terceros." },
        { title: "Captación Local", text: "Atacar búsquedas transaccionales (ej: 'ventanas aluminio sabadell') en todos los municipios objetivo." },
      ],
    },
    web_showcase: {
      title: "Ingeniería Visual y CMS a Medida",
      description:
        "No querían un WordPress lento y vulnerable. Desarrollamos una web nativa (Next.js) ultrarrápida con un panel de administración personalizado.",
      features: [
        "Carga instantánea (99/100 PageSpeed) para mejorar conversión móvil.",
        "Módulo de 'Proyectos Realizados' autogestionable: suben fotos de las obras desde el móvil y la web crea automáticamente una página SEO optimizada.",
        "Diseño UX enfocado a la solicitud de presupuesto en menos de 3 clics.",
      ],
      images: [
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=80",
        "https://images.unsplash.com/photo-1448630360428-65ff2c0257e1?w=1200&q=80",
      ],
    },
    blog_strategy: {
      title: "El Motor de Atracción Automático",
      description:
        "Implementamos una estrategia de contenidos programada para responder a todas las dudas del comprador antes de que contacte.",
      points: [
        { icon: "Search", title: "Respuesta a Preguntas Reales", text: "Artículos como '¿PVC o Aluminio? Comparativa real' atacan el bottom-of-funnel." },
        { icon: "Zap", title: "Automatización de Publicación", text: "Dejamos programado un calendario editorial de 6 meses que se publica solo, manteniendo la web 'viva' para Google." },
        { icon: "Link", title: "Interlinking Inteligente", text: "Cada artículo redirige tráfico sutilmente hacia las páginas de servicio y contacto." },
      ],
    },
    results: {
      metrics: [
        { value: "+10%", label: "Facturación Anual", note: "En el primer año de vida del proyecto" },
        { value: "+70%", label: "Clientes Potenciales", note: "Leads directos de particulares (B2C)" },
        { value: "100%", label: "Independencia", note: "Control total de su canal de ventas" },
      ],
      summary:
        "Totfinestra ha pasado de esperar a que suene el teléfono de la constructora a tener que filtrar solicitudes de particulares. Ahora eligen qué obras quieren hacer.",
    },
    tags: ["Web Nativa", "CMS a Medida", "Estrategia SEO"],
    tech_stack: ["Next.js", "Google Analytics 4", "Google Search Console", "Screaming Frog", "Make", "Tailwind CSS"],
    company_images: [
      "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80",
      "https://images.unsplash.com/photo-1600607686527-6fb886090705?w=800&q=80",
    ],
  },
  {
    slug: "regalalo-io",
    client: "Regalalo.io",
    website: "https://regalalo.io",
    title: "Recomendador de Regalos IA: De 0 a 1900 Usuarios en 48h",
    summary:
      "Digitalizamos y lanzamos una recomendadora de regalos basada en IA. Estrategia de pre-lanzamiento viral y posicionamiento Top 3 desde el día uno.",
    cover_image: "https://images.unsplash.com/photo-1512909006721-3d6018887383?w=1200&q=80",
    color: "purple",
    about: {
      description:
        "Regalalo.io es una plataforma inteligente que elimina el estrés de regalar. Utilizando Inteligencia Artificial avanzada, analiza perfiles y gustos para sugerir el regalo perfecto en segundos.",
      challenge:
        "El cliente necesitaba más que una web; necesitaba un 'cerebro' digital. El reto era desarrollar una IA capaz de entender contextos complejos (Gemini AI entrenada localmente) y envolverla en una interfaz intuitiva, todo mientras se generaba tracción de mercado antes incluso de escribir la primera línea de código.",
    },
    strategy: {
      title: "Desarrollo IA + Pre-Lanzamiento Viral",
      steps: [
        { title: "Entrenamiento IA Local", text: "Implementamos y entrenamos modelos Gemini AI en local para afinar la calidad de las recomendaciones sin costes de API desorbitados." },
        { title: "Estrategia Pre-Lanzamiento", text: "Diseñamos una campaña de expectación que captó 1900 usuarios activos en los dos primeros días de vida." },
        { title: "Posicionamiento Inmediato", text: "Arquitectura SEO optimizada para atacar intenciones de búsqueda transaccionales, logrando un Top 3 medio desde el inicio." },
      ],
    },
    web_showcase: {
      title: "React + Next.js + Gemini AI",
      description:
        "Una Single Page Application (SPA) ultrarrápida construida con React y Next.js, respaldada por una base de datos MySQL robusta y un motor de IA propietario.",
      features: [
        "Motor de Recomendación IA basado en Gemini (Fine-tuning local).",
        "Interfaz conversacional fluida con respuesta en tiempo real.",
        "Arquitectura escalable para soportar picos de tráfico viral.",
      ],
      images: [
        "https://images.unsplash.com/photo-1512909006721-3d6018887383?w=1200&q=80",
        "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=1200&q=80",
      ],
    },
    blog_strategy: {
      title: "Autoridad Temática",
      description: "Creamos clusters de contenido alrededor de 'ideas de regalo' para dominar las SERPs en categorías específicas.",
      points: [
        { icon: "Search", title: "Top 3 Google", text: "Posicionamiento medio en primera página para keywords de alta intención." },
        { icon: "Zap", title: "Intención de Búsqueda", text: "Contenidos que responden exactamente a lo que el usuario busca ('regalo barato', 'regalo original')." },
        { icon: "Link", title: "Funnel de Conversión", text: "Tráfico orgánico redirigido eficientemente hacia el recomendador IA." },
      ],
    },
    results: {
      metrics: [
        { value: "1.900", label: "Usuarios en 2 Días", note: "Éxito rotundo del pre-lanzamiento" },
        { value: "Top 3", label: "Posición Media", note: "SEO efectivo desde el primer día" },
        { value: "IA Local", label: "Tecnología Propia", note: "Gemini AI Fine-tuned" },
      ],
      summary:
        "Regalalo.io demuestra que una ejecución técnica impecable (Next.js, MySQL, Gemini) sumada a una estrategia de lanzamiento agresiva puede romper el mercado en 48 horas.",
    },
    tags: ["Inteligencia Artificial", "React", "Next.js", "MySQL", "Gemini AI"],
    tech_stack: ["Next.js", "React", "MySQL", "Dbrave", "Gemini AI (Local)"],
    company_images: [
      "https://images.unsplash.com/photo-1556740758-90de374c12ad?w=800&q=80",
      "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800&q=80",
    ],
  },
  {
    slug: "garcia-del-cerro",
    client: "García del Cerro",
    website: "https://farmaciagraciadelcerro.com",
    title: "Digitalización de Farmacia García del Cerro",
    summary: "Digitalización 360º de Farmacia local. Ecommerce Shopify con SEO de producto que vende en todo el país.",
    cover_image: "https://images.unsplash.com/photo-1586015555751-63bb77f4322a?w=1200&q=80",
    color: "slate",
    about: {
      description:
        "Farmacia García del Cerro era un referente local en su barrio de Barcelona, pero su alcance terminaba donde acababa la calle. Querían dejar de depender del tráfico peatonal y competir en las grandes ligas de la parafarmacia online.",
      challenge:
        "Transformar un negocio tradicional físico en un e-commerce nacional sin perder la esencia de 'consejo farmacéutico'. El reto técnico: gestionar miles de referencias y competir con gigantes establecidos como PromoFarma.",
    },
    strategy: {
      title: "Receta para la Expansión Nacional",
      steps: [
        { title: "Digitalización Total", text: "Creación de ecosistema digital desde cero: Branding, UX/UI y Fotografía de producto propia para diferenciarse." },
        { title: "Plataforma Robusta", text: "Implementación de Shopify Plus para gestionar stock complejo y logística de envíos a toda la península." },
        { title: "SEO Transaccional", text: "Atacar keywords de producto específicas ('comprar [marca] en oferta') y automatizar contenidos de salud." },
      ],
    },
    web_showcase: {
      title: "Farmacia 2.0: Confianza y Rapidez",
      description:
        "Diseñamos una experiencia de compra limpia y clínica que transmite la seguridad de una bata blanca pero con la velocidad de Amazon.",
      features: [
        "Fotografía de producto editada in-house para garantizar uniformidad visual.",
        "Buscador avanzado con filtrado por dolencias y categorías.",
        "Fichas de producto enriquecidas con consejos de uso (cross-selling).",
      ],
      images: [
        "https://images.unsplash.com/photo-1586015555751-63bb77f4322a?w=1200&q=80",
        "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=1200&q=80",
      ],
    },
    results: {
      metrics: [
        { value: "TOP 20", label: "Farmacias España", note: "Ranking nacional por tráfico orgánico" },
        { value: "100%", label: "Alcance Nacional", note: "Ventas en todas las provincias" },
        { value: "+5k", label: "Referencias", note: "Catálogo subido y optimizado" },
      ],
      summary:
        "Han pasado de ser 'la farmacia del barrio' a enviar pedidos diariamente a Galicia, Madrid y Andalucía. El SEO de producto les mantiene en la élite nacional.",
    },
    tags: ["Shopify", "SEO E-commerce", "Foto Producto"],
    tech_stack: ["Shopify", "React", "Sass", "Google Analytics 4", "Semrush"],
    company_images: [
      "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=800&q=80",
      "https://images.unsplash.com/photo-1628771065518-0d82f1938462?w=800&q=80",
    ],
  },
  {
    slug: "peritando-es",
    client: "Peritando.es",
    website: "https://peritando.es",
    title: "Estrategia SEO y Arquitectura de Servicios",
    summary: "Rediseño estructural y estrategia de contenidos para maximizar el CTR y el posicionamiento orgánico en el sector pericial.",
    cover_image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&q=80",
    color: "slate",
    about: {
      description:
        "Peritando.es es una empresa de servicios periciales que ofrece informes técnicos y valoraciones para particulares y empresas. Su equipo de peritos cualificados cubría múltiples especialidades, pero su presencia digital no reflejaba su experiencia real.",
      challenge:
        "La web existente era genérica y no estaba enfocada a servicios específicos. Solo generaban 2 leads al mes desde la web. Necesitaban una refactorización completa tanto técnica como de contenido para posicionarse en búsquedas transaccionales de cada tipo de peritaje.",
    },
    strategy: {
      title: "Refactorización Integral: Técnica + Contenido",
      steps: [
        { title: "Auditoría Técnica Completa", text: "Análisis exhaustivo de la arquitectura web, rendimiento, indexación y problemas técnicos que lastraban el posicionamiento." },
        { title: "Arquitectura de Servicios", text: "Reestructuración completa creando landing pages específicas para cada tipo de peritaje, atacando keywords transaccionales." },
        { title: "Estrategia de Contenido", text: "Plan editorial enfocado en resolver dudas reales de potenciales clientes: '¿Cuánto cuesta un peritaje?', 'Tipos de informes periciales', etc." },
      ],
    },
    web_showcase: {
      title: "Arquitectura Web Orientada a Conversión",
      description:
        "Rediseñamos toda la web con una arquitectura de URLs limpia, páginas de servicio específicas para cada tipo de peritaje y CTAs optimizados para maximizar la tasa de conversión.",
      features: [
        "Landing pages individuales por especialidad pericial con SEO on-page optimizado.",
        "Fragmentos enriquecidos (Schema FAQ y Service) para mejorar el CTR en SERPs.",
        "Formularios inteligentes adaptados por tipo de servicio para cualificar leads.",
      ],
      images: [
        "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&q=80",
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80",
      ],
    },
    blog_strategy: {
      title: "Contenido que Convierte Dudas en Clientes",
      description: "Implementamos una estrategia de contenidos basada en las preguntas reales que los usuarios hacen antes de contratar un perito.",
      points: [
        { icon: "Search", title: "Keywords Transaccionales", text: "Posicionamiento en búsquedas de alta intención: 'perito judicial', 'informe pericial precio', 'perito tasador'." },
        { icon: "Zap", title: "Optimización de CTR", text: "Mejora del +45% en CTR mediante títulos, meta descripciones y fragmentos enriquecidos optimizados." },
        { icon: "Link", title: "Interlinking Estratégico", text: "Red de enlaces internos que dirige el tráfico informacional hacia las páginas de servicio y contacto." },
      ],
    },
    results: {
      metrics: [
        { value: "x4", label: "Leads Mensuales", note: "De 2 a 8 leads/mes en solo 3 meses" },
        { value: "+45%", label: "Mejora CTR", note: "Optimización de Fragmentos Enriquecidos" },
        { value: "TOP 3", label: "Keywords Clave", note: "Servicios Periciales Nacionales" },
      ],
      summary:
        "En solo 3 meses, Peritando.es pasó de generar 2 leads mensuales a 8 desde la web. La refactorización técnica y de contenido transformó su web en una máquina de captación de clientes cualificados.",
    },
    tags: ["Estrategia SEO", "UX/UI", "Arquitectura Web"],
    tech_stack: ["Next.js", "Google Search Console", "Screaming Frog", "Semrush", "Schema.org", "Google Analytics 4"],
    company_images: [
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
    ],
  },
  {
    slug: "quad-studios",
    client: "Quan Studios",
    website: "https://quanstudios.com",
    title: "Optimización de SEO Local & Google Business",
    summary: "Dominio del mercado local mediante la creación y optimización avanzada de la ficha de negocio para captación directa.",
    cover_image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=1200&q=80",
    color: "purple",
    about: {
      description:
        "Quad Studios es un estudio creativo especializado en producción audiovisual y animación motion graphics. Su trabajo era de nivel premium, pero su visibilidad local era prácticamente nula en Google Maps y búsquedas locales.",
      challenge:
        "Sin ficha de Google My Business optimizada, los potenciales clientes que buscaban estudios de producción en su zona no los encontraban. Necesitaban posicionarse en el Local Pack de Google para captar leads cualificados de su área de influencia.",
    },
    strategy: {
      title: "Dominio del Ecosistema Local Google",
      steps: [
        { title: "Creación de Ficha GMB", text: "Configuración profesional de la ficha de Google My Business con toda la información optimizada, categorías precisas y atributos relevantes." },
        { title: "Optimización Avanzada", text: "Estrategia de reseñas, publicaciones periódicas en GMB, fotos profesionales del estudio y trabajos de motion graphics." },
        { title: "SEO Local On-Page", text: "Alineación de la web con señales locales: NAP consistente, páginas de servicio localizadas y Schema LocalBusiness." },
      ],
    },
    web_showcase: {
      title: "Portfolio Motion que Enamora en Google",
      description:
        "Optimizamos la presencia digital del estudio para que su trabajo visual hablara por sí solo, tanto en la web como en la ficha de Google Business.",
      features: [
        "Galería de proyectos motion graphics integrada con la ficha de Google Business.",
        "Vídeos de portfolio optimizados con YouTube SEO para reforzar la presencia en búsquedas.",
        "Página de servicios con pricing transparente y CTAs directos a WhatsApp.",
      ],
      images: [
        "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=1200&q=80",
        "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=1200&q=80",
      ],
    },
    results: {
      metrics: [
        { value: "TOP 3", label: "Local Pack", note: "Posición en Google Maps" },
        { value: "+8", label: "Leads/Mes", note: "Nuevos potenciales clientes mensuales" },
        { value: "X2", label: "Llamadas Directas", note: "Desde la ficha de Google" },
      ],
      summary:
        "Quad Studios pasó de ser invisible en Google Maps a ocupar el Top 3 del Local Pack. Con su portfolio de animaciones motion como carta de presentación, ahora reciben 8 leads potenciales adicionales cada mes directamente desde Google.",
    },
    tags: ["SEO Local", "Google Business", "Reputación"],
    tech_stack: ["Google Business Profile", "Google Search Console", "LocalRanking", "Canva", "Google Analytics 4"],
    company_images: [
      "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&q=80",
      "https://images.unsplash.com/photo-1535016120720-40c646be5580?w=800&q=80",
    ],
  },
  {
    slug: "bebubbleibiza",
    client: "BebubbleIbiza",
    website: "https://bebubbleibiza.com",
    title: "Posicionamiento Local en el Sector Lujo",
    summary: "Estrategia de SEO Local para captación de clientes de alto nivel en Ibiza a través de Google Business Profile.",
    cover_image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1200&q=80",
    color: "cyan",
    about: {
      description:
        "BebubbleIbiza ofrece experiencias premium en la isla: servicios de lujo, eventos exclusivos y lifestyle de alto standing. Su público objetivo son turistas internacionales y residentes de alto poder adquisitivo.",
      challenge:
        "En un mercado tan competitivo y estacional como Ibiza, necesitaban dominar las búsquedas locales en Google Maps para captar clientes high-ticket que buscan servicios premium directamente desde el móvil.",
    },
    strategy: {
      title: "Posicionamiento Premium en el Paraíso",
      steps: [
        { title: "Ficha Google Optimizada", text: "Creación y optimización completa de la ficha de Google Business Profile con fotografías profesionales, categorías de lujo y atributos premium." },
        { title: "Estrategia de Reseñas", text: "Sistema de captación de reseñas de clientes VIP para construir prueba social de altísima calidad en Google." },
        { title: "Contenido Estacional", text: "Publicaciones y actualizaciones en GMB planificadas según la temporada turística para maximizar la visibilidad en los meses clave." },
      ],
    },
    web_showcase: {
      title: "Presencia Digital que Respira Lujo",
      description:
        "Alineamos toda la presencia digital de BebubbleIbiza con la imagen premium de la marca, asegurando que cada punto de contacto digital reflejara la exclusividad de sus servicios.",
      features: [
        "Fotografías profesionales HDR optimizadas para Google Business y búsquedas visuales.",
        "Ficha multilingüe (ES/EN/DE) para captar turismo internacional premium.",
        "Integración de reservas directas desde la ficha de Google para reducir fricción.",
      ],
      images: [
        "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1200&q=80",
        "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=1200&q=80",
      ],
    },
    results: {
      metrics: [
        { value: "Premium", label: "Lead Quality", note: "Captación de perfil High-Ticket" },
        { value: "Top 3", label: "Visibilidad Maps", note: "Búsquedas locales en Ibiza" },
        { value: "Multi", label: "Idiomas", note: "ES, EN, DE para mercado internacional" },
      ],
      summary:
        "BebubbleIbiza domina ahora las búsquedas locales premium en Ibiza. La optimización de su ficha Google Business les permite captar directamente clientes high-ticket internacionales que buscan experiencias de lujo desde el móvil.",
    },
    tags: ["Lujo", "SEO Local", "Turismo"],
    tech_stack: ["Google Business Profile", "Google Search Console", "Google Analytics 4", "Canva Pro"],
    company_images: [
      "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=800&q=80",
      "https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=800&q=80",
    ],
  },
  {
    slug: "salvador-mendoza",
    client: "Salvador Mendoza",
    website: "https://salvadormendoza.es",
    title: "SEO de Servicios y Visibilidad de Autor",
    summary: "Potenciando la marca personal y la captación de leads mediante estrategia de SEO local y autoridad de contenidos.",
    cover_image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1200&q=80",
    color: "orange",
    about: {
      description:
        "Salvador Mendoza es un profesional independiente que ofrecía sus servicios de consultoría, pero su presencia digital se limitaba a un perfil de LinkedIn. Necesitaba una estrategia integral que le posicionara como referente en su zona.",
      challenge:
        "Sin ficha de Google My Business ni presencia local optimizada, Salvador era invisible para los clientes que buscaban sus servicios en Google. Competía contra empresas establecidas con marcas fuertes y presupuestos superiores.",
    },
    strategy: {
      title: "De Invisible a Referente Local",
      steps: [
        { title: "Google Business Profile", text: "Creación y optimización completa de la ficha de negocio con categorías precisas, horarios, fotos profesionales y descripción optimizada." },
        { title: "Marca Personal Digital", text: "Estrategia de contenidos que posiciona a Salvador como autoridad en su sector, combinando la ficha local con presencia en redes." },
        { title: "Reseñas y Reputación", text: "Sistema de solicitud de reseñas a clientes satisfechos para construir prueba social que convierte visitantes en contactos." },
      ],
    },
    web_showcase: {
      title: "Tu Nombre en lo Alto de Google",
      description:
        "Transformamos la presencia digital de Salvador de cero a referente local, asegurando que cualquier búsqueda relacionada con sus servicios en su zona mostrara su ficha en las primeras posiciones.",
      features: [
        "Ficha Google Business optimizada con información completa y actualizada semanalmente.",
        "Estrategia de publicaciones y novedades en GMB para mantener la ficha activa.",
        "Respuesta profesional a todas las reseñas para maximizar la tasa de conversión.",
      ],
      images: [
        "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1200&q=80",
        "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200&q=80",
      ],
    },
    results: {
      metrics: [
        { value: "Top 3", label: "Posición Local", note: "En búsquedas de servicios en su zona" },
        { value: "Autoridad", label: "Marca Personal", note: "Reconocido como referente local" },
        { value: "Growth", label: "Consultas Mensuales", note: "Crecimiento sostenido de contactos" },
      ],
      summary:
        "Salvador Mendoza pasó de la invisibilidad digital a ser el profesional de referencia en su zona. Su ficha de Google Business es ahora su principal canal de captación de clientes.",
    },
    tags: ["Marca Personal", "SEO Local", "Servicios"],
    tech_stack: ["Google Business Profile", "Google Search Console", "Google Analytics 4"],
    company_images: [
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
    ],
  },
  {
    slug: "growmybiss",
    client: "GrowMyBiss",
    website: "https://growmybiss.com",
    title: "Consultoría SEO & Growth Partner",
    summary: "Creación de web completa, estructura y estrategia integral de posicionamiento para dominar términos de IA y Growth Marketing.",
    cover_image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
    color: "blue",
    about: {
      description:
        "GrowMyBiss es una agencia de Growth Marketing especializada en estrategias de crecimiento basadas en IA y datos. Necesitaban una presencia digital que reflejara su expertise y atrajera a empresas que buscan escalar sus negocios.",
      challenge:
        "Partían de cero: sin web, sin posicionamiento y sin infraestructura digital. Necesitaban crear todo el ecosistema desde la base — web, arquitectura SEO, estrategia de contenidos — y empezar a generar tráfico orgánico cualificado rápidamente.",
    },
    strategy: {
      title: "De 0 a 100: Construcción del Ecosistema Digital",
      steps: [
        { title: "Arquitectura Web Completa", text: "Diseño y desarrollo de la web desde cero con arquitectura de URLs optimizada para SEO, estructura de silos temáticos y navegación pensada para la conversión." },
        { title: "Estrategia de Keywords IA", text: "Investigación exhaustiva de keywords relacionadas con IA, Growth Marketing y automatización. Plan de ataque para posicionar +30 términos estratégicos." },
        { title: "Motor de Contenido", text: "Creación de clusters de contenido pilares que atacan keywords transaccionales e informacionales, generando autoridad temática progresiva." },
      ],
    },
    web_showcase: {
      title: "Web Nativa con ADN de Growth",
      description:
        "Desarrollamos una web moderna y ultrarrápida que actúa como la pieza central de toda la estrategia de captación. Cada página está diseñada para posicionar y convertir.",
      features: [
        "Arquitectura de silos temáticos: IA, Growth Marketing, Automatización y Analítica.",
        "Blog estratégico con clusters de contenido interconectados para dominar las SERPs.",
        "Landing pages de servicio optimizadas con CTAs diseñados para maximizar conversiones.",
      ],
      images: [
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
      ],
    },
    blog_strategy: {
      title: "Autoridad Temática en IA y Growth",
      description:
        "Construimos una máquina de contenido que ha posicionado a GrowMyBiss como referente en keywords de IA y Growth Marketing, generando tráfico cualificado de forma constante.",
      points: [
        { icon: "Search", title: "+30 Keywords Top 5", text: "Dominamos más de 30 keywords estratégicas en las primeras 5 posiciones de Google." },
        { icon: "Zap", title: "100 Visitas/Mes", text: "Flujo constante de tráfico cualificado que llega buscando exactamente los servicios que ofrece GrowMyBiss." },
        { icon: "Link", title: "Posición Media 15", text: "Media general del sitio en posición 15, con tendencia ascendente mes a mes." },
      ],
    },
    results: {
      metrics: [
        { value: "+30", label: "Keywords Top 5", note: "Posicionadas en primera página" },
        { value: "100", label: "Visitas/Mes", note: "Tráfico orgánico cualificado" },
        { value: "Pos. 15", label: "Media General", note: "Con tendencia ascendente" },
      ],
      summary:
        "GrowMyBiss pasó de no existir digitalmente a dominar +30 keywords en el top 5 de Google. Con una posición media de 15 y 100 visitas cualificadas mensuales, su web se ha convertido en su principal motor de captación.",
    },
    tags: ["IA Keywords", "Growth Partner", "SEO Masivo"],
    tech_stack: ["Next.js", "React", "Google Search Console", "Semrush", "Google Analytics 4", "Tailwind CSS"],
    company_images: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800&q=80",
    ],
  },
  {
    slug: "controltemp",
    client: "ControlTemp",
    website: "https://controltemp.com",
    title: "Liderazgo en Sector Industrial",
    summary: "Refactorización web completa y estrategia de contenido enfocada a servicios industriales específicos para captación B2B internacional.",
    cover_image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&q=80",
    color: "orange",
    about: {
      description:
        "ControlTemp es una empresa industrial especializada en sistemas de control de temperatura y climatización para entornos industriales. Con décadas de experiencia técnica, su reputación offline era impecable, pero su web no reflejaba ese nivel.",
      challenge:
        "La web estaba desactualizada, era genérica y solo generaba 2 leads mensuales. Necesitaban una refactorización completa tanto técnica como de contenido, enfocada a los servicios industriales específicos que ofrecían, para captar clientes B2B a nivel nacional e internacional.",
    },
    strategy: {
      title: "Industrialización Digital: De Local a Internacional",
      steps: [
        { title: "Refactorización Web Completa", text: "Rediseño técnico total de la web: nueva arquitectura, rendimiento optimizado y diseño profesional acorde al sector industrial." },
        { title: "Contenido por Servicio", text: "Creación de páginas de servicio específicas para cada solución industrial, atacando keywords transaccionales del sector B2B." },
        { title: "Internacionalización", text: "Estructura multilingüe y optimización para captar mercados internacionales: España, Portugal y Latinoamérica." },
      ],
    },
    web_showcase: {
      title: "Web Industrial de Nueva Generación",
      description:
        "Transformamos la presencia digital de ControlTemp en una web industrial moderna que transmite la confianza y profesionalidad que sus clientes B2B esperan.",
      features: [
        "Páginas de servicio técnicas con especificaciones detalladas y CTAs para solicitud de presupuesto.",
        "Catálogo digital de soluciones industriales con fichas técnicas descargables.",
        "Formularios segmentados por tipo de industria para cualificar leads automáticamente.",
      ],
      images: [
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&q=80",
        "https://images.unsplash.com/photo-1565043666747-69f6646db940?w=1200&q=80",
      ],
    },
    blog_strategy: {
      title: "Autoridad Técnica en Control Industrial",
      description:
        "Estrategia de contenido técnico que posiciona a ControlTemp como referente del sector, atrayendo a responsables de compras y directores de planta.",
      points: [
        { icon: "Search", title: "Keywords Industriales", text: "Posicionamiento en búsquedas B2B de alta intención: 'control temperatura industrial', 'climatización naves'." },
        { icon: "Zap", title: "Contenido Técnico", text: "Artículos y guías técnicas que resuelven dudas reales de ingenieros y jefes de planta." },
        { icon: "Link", title: "Lead Magnets", text: "Fichas técnicas descargables que captan emails cualificados de responsables de compras." },
      ],
    },
    results: {
      metrics: [
        { value: "x4", label: "Leads Mensuales", note: "De 2 a 8 leads/mes en 3 meses" },
        { value: "3", label: "Nuevos Países", note: "Expansión internacional conseguida" },
        { value: "+200%", label: "Presupuestos", note: "Solicitudes desde la web" },
      ],
      summary:
        "ControlTemp multiplicó por 4 sus leads mensuales en solo 3 meses. La refactorización web y la estrategia de contenido enfocada a servicios específicos transformó su web en un canal de captación B2B internacional.",
    },
    tags: ["Industrial", "Internacionalización", "B2B"],
    tech_stack: ["Next.js", "Google Search Console", "Screaming Frog", "Semrush", "Google Analytics 4", "Schema.org"],
    company_images: [
      "https://images.unsplash.com/photo-1565043666747-69f6646db940?w=800&q=80",
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&q=80",
    ],
  },
  {
    slug: "diomento-homelift",
    client: "Dimonte Homelift",
    website: "https://diomontehomelift.com",
    title: "Ascensores de Lujo: Branding & Conversión",
    summary: "Estrategia completa de contenido SEO y arquitectura web para posicionar ascensores domésticos de gama alta.",
    cover_image: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=1200&q=80",
    color: "emerald",
    about: {
      description:
        "Dimonte Homelift fabrica e instala ascensores domésticos de lujo, elevadores privativos para viviendas unifamiliares de alto standing. Su producto es premium, con precios que superan los 30.000€, y su público objetivo es muy específico.",
      challenge:
        "Competir en un nicho ultra-especializado contra marcas internacionales establecidas. Necesitaban una estrategia de contenido SEO y una arquitectura web que transmitiera exclusividad y captara leads high-ticket de calidad.",
    },
    strategy: {
      title: "Arquitectura Premium para Producto High-Ticket",
      steps: [
        { title: "Arquitectura Web de Lujo", text: "Diseño de la estructura web completa pensada para el buyer journey del cliente de alta gama: desde la inspiración hasta la solicitud de presupuesto personalizado." },
        { title: "Estrategia de Contenido SEO", text: "Creación de contenidos que atacan todas las fases del funnel: comparativas, guías de instalación, galerías de proyectos y preguntas frecuentes." },
        { title: "Percepción de Marca Premium", text: "Optimización del diseño visual y UX para transmitir la misma exclusividad que el producto físico. Cada pixel comunica calidad." },
      ],
    },
    web_showcase: {
      title: "Donde el Lujo se Encuentra con el SEO",
      description:
        "Diseñamos una arquitectura web que combina la estética premium que el producto exige con una estructura técnica optimizada para posicionar en Google y convertir visitantes en leads cualificados.",
      features: [
        "Páginas de producto con galerías inmersivas y especificaciones técnicas detalladas.",
        "Blog de contenido aspiracional: 'Hogares con ascensor privado', 'Tendencias en diseño residencial'.",
        "Configurador de presupuesto online que cualifica y segmenta leads automáticamente.",
      ],
      images: [
        "https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=1200&q=80",
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80",
      ],
    },
    blog_strategy: {
      title: "Contenido que Vende Aspiración",
      description:
        "Estrategia editorial que posiciona a Dimonte como la opción premium del mercado, atacando tanto keywords informacionales como transaccionales del nicho.",
      points: [
        { icon: "Search", title: "Nicho High-Ticket", text: "Posicionamiento en keywords de alta intención y ticket elevado: 'ascensor doméstico', 'elevador privado hogar'." },
        { icon: "Zap", title: "Contenido Aspiracional", text: "Artículos y galerías que inspiran al comprador premium: proyectos realizados, tendencias de diseño residencial." },
        { icon: "Link", title: "Funnel de Lujo", text: "Cada contenido guía sutilmente hacia la solicitud de presupuesto personalizado, el paso previo a la venta consultiva." },
      ],
    },
    results: {
      metrics: [
        { value: "Premium", label: "Percepción Marca", note: "Posicionamiento como referente de lujo" },
        { value: "+60%", label: "Leads Cualificados", note: "Incremento de solicitudes high-ticket" },
        { value: "High", label: "Ticket Medio", note: "Ventas por encima de 30.000€" },
      ],
      summary:
        "Dimonte Homelift se ha posicionado como la referencia en ascensores domésticos de lujo en España. Su estrategia de contenido SEO y arquitectura web premium genera un flujo constante de leads cualificados de alto valor.",
    },
    tags: ["Lujo", "High-Ticket", "Diseño Web"],
    tech_stack: ["Next.js", "Google Search Console", "Semrush", "Google Analytics 4", "Schema.org", "Tailwind CSS"],
    company_images: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    ],
  },
  {
    slug: "marea-es",
    client: "marea.es",
    website: "https://marea.es",
    title: "Ecommerce WooCommerce en optimización activa",
    summary: "Tienda online sobre WooCommerce en optimización continua: SEO técnico y mejora de conversión, sin migraciones.",
    cover_image: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?w=1200&q=80",
    color: "emerald",
    about: {
      description:
        "marea.es es un ecommerce que opera sobre WooCommerce. El proyecto está en optimización activa: mejora continua de SEO técnico y de la tasa de conversión sobre la tienda existente, sin rehacer la plataforma.",
      challenge:
        "Crecer en tráfico orgánico cualificado y convertir mejor las visitas sin migrar de plataforma. El reto: trabajar sobre el WooCommerce real del cliente —su catálogo, su stack— optimizando de forma iterativa.",
    },
    strategy: {
      title: "Optimización continua sobre WooCommerce",
      steps: [
        { title: "Auditoría técnica", text: "Análisis de rendimiento, indexación y arquitectura de la tienda WooCommerce actual." },
        { title: "SEO de catálogo", text: "Optimización de fichas, categorías y contenido para captar búsquedas transaccionales." },
        { title: "Mejora de conversión", text: "Iteración sobre UX y embudo de compra para subir la tasa de conversión." },
      ],
    },
    // TODO Oscar: métricas reales de marea.es (tráfico, conversión) y detalle completo del caso.
    results: {
      metrics: [
        { value: "WooCommerce", label: "Stack del cliente", note: "Sin migración forzada" },
        { value: "En curso", label: "Optimización activa", note: "SEO + conversión iterativos" },
        { value: "SEO + CRO", label: "Palancas", note: "Tráfico y conversión" },
      ],
      summary:
        "marea.es está en optimización continua sobre su propio WooCommerce: subimos tráfico orgánico y mejoramos la conversión sin obligar a rehacer la tienda.",
    },
    tags: ["WooCommerce", "SEO E-commerce", "CRO"],
    tech_stack: ["WooCommerce", "WordPress", "Google Search Console", "Google Analytics 4", "Semrush"],
    company_images: [
      "https://images.unsplash.com/photo-1556741533-6e6a62bd8b49?w=800&q=80",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    ],
  },
]

export const getProject = (slug: string) => projects.find((p) => p.slug === slug)
