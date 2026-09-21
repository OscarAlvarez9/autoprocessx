// Capa opcional de "caso en profundidad". Solo la usan los casos que tienen
// material real suficiente para sostener una ficha larga (marea.es es el
// primero). El resto de casos siguen con el modelo corto de casesEcom.ts y
// la ficha se degrada sola: si no hay entrada aquí, no se renderiza nada.
//
// Honestidad: todas las cifras de este fichero salen del informe de trabajo
// real del proyecto o de GA4. Ninguna es estimada. Si una cifra no está
// verificada, no entra.

export interface KPI {
  value: string
  label: string
  note?: string
}

/** Grupo de cifras con su propio encabezado (ej. "En Google" vs "Ingeniería"). */
export interface KPIBand {
  title: string
  note?: string
  items: KPI[]
}

/** Captura real que respalda las cifras (panel de GA4, GSC, la propia tienda). */
export interface Evidencia {
  src: string
  alt: string
  caption: string
  /** Dimensiones reales: las capturas de paneles se muestran enteras, sin recortar. */
  w: number
  h: number
}

export interface Capitulo {
  n: string
  title: string
  body: string
}

export interface FilaVerificada {
  value: string
  label: string
  note: string
}

export interface AntesDespues {
  label: string
  antes: string
  despues: string
}

export interface Hallazgo {
  value: string
  title: string
  body: string
}

export interface Regla {
  title: string
  body: string
}

export interface CasoDeep {
  /** Logo del cliente para la primera vista (ruta en /public). */
  logo?: string
  /** Captura real del sitio en producción. */
  shot?: string
  shotCaption?: string
  /** "browser" (por defecto) enmarca como navegador; "plain" para lo que no es una web. */
  shotFrame?: "browser" | "plain"
  /** Etiqueta del marco cuando shotFrame es "plain". */
  shotTag?: string
  /** Bandas de cifras grandes. */
  kpis: KPIBand[]
  /** Capturas que respaldan las cifras. */
  evidencia?: Evidencia[]
  /** Título y entradilla de la sección de evidencia. */
  evidenciaTitulo?: string
  evidenciaIntro?: string
  /** Capturas secundarias, en rejilla compacta bajo las principales. */
  galeria?: Evidencia[]
  galeriaIntro?: string
  /** Párrafos del punto de partida. */
  contexto: string[]
  /** Entradilla de la sección "Qué hice". */
  queHiceIntro?: string
  /** Bloques de lo que se construyó. */
  capitulos: Capitulo[]
  /** Escrituras verificadas sobre el catálogo. */
  verificado?: { intro: string; filas: FilaVerificada[]; cierre?: string }
  /** Trabajo de SEO técnico con comparativa antes/después. */
  tecnico?: { title: string; body: string[]; tabla: AntesDespues[] }
  /** Problemas que aparecieron al trabajar el catálogo entero. */
  hallazgos?: { title: string; intro: string; items: Hallazgo[] }
  /** Reglas de método que explican el cero de errores. */
  metodo?: { title: string; intro: string; reglas: Regla[] }
  /** Cierre del caso: enlaza al servicio que este proyecto demuestra. */
  cta?: { title: string; body: string; label: string; href: string }
}

export const casosDeep: Record<string, CasoDeep> = {
  "marea-es": {
    logo: "/assets/casos/marea-logo.jpg",
    shot: "/assets/casos/marea-home.png",
    shotCaption: "marea.es en producción.",
    kpis: [
      {
        title: "En Google, primera semana en producción",
        note: "Search Console, 7 al 13 de septiembre de 2026",
        items: [
          { value: "3.060", label: "clics", note: "tráfico orgánico a la tienda" },
          { value: "22.500", label: "impresiones", note: "presencia en resultados" },
          { value: "13,6 %", label: "CTR medio", note: "de impresión a visita" },
          { value: "5,6", label: "posición media", note: "primera página" },
        ],
      },
      {
        title: "La ingeniería que hay detrás",
        note: "informe de trabajo sobre el catálogo",
        items: [
          { value: "19", label: "automatizaciones en n8n", note: "ciclo de vida completo del producto" },
          { value: "9.500", label: "escrituras verificadas", note: "con simulación previa y rollback" },
          { value: "2.293", label: "referencias en catálogo", note: "relojes, smartwatch y joyería" },
          { value: "0", label: "errores en pasadas masivas", note: "todas las tandas" },
        ],
      },
    ],
    evidencia: [
      {
        src: "/assets/casos/marea-gsc-lanzamiento.png",
        w: 2000,
        h: 1012,
        alt: "Search Console de marea.es del 29 de junio al 13 de septiembre de 2026, con la línea vertical que marca el lanzamiento de la web nueva",
        caption: "La línea negra marca el lanzamiento de la web nueva y de la estrategia. Antes, clics e impresiones llevaban dos meses planos. Después, las dos curvas suben a la vez. La ventana completa suma 22.500 clics y 189.000 impresiones, con 11,9 % de CTR y posición media 6,7.",
      },
      {
        src: "/assets/casos/marea-gsc-semana1.png",
        w: 2000,
        h: 785,
        alt: "Search Console de marea.es en su primera semana: 3,06 mil clics y 22,5 mil impresiones",
        caption: "Search Console, primera semana tras la salida a producción: 3.060 clics, 22.500 impresiones, 13,6 % de CTR y posición media 5,6.",
      },
      {
        src: "/assets/casos/marea-gsc-ia.png",
        w: 2000,
        h: 771,
        alt: "Impresiones de marea.es en las funciones de IA de la Búsqueda de Google, del 8 al 14 de septiembre de 2026",
        caption: "Primera semana en AI Search: 3.610 impresiones en las respuestas generativas de Google. La tienda no solo aparece en el listado azul, también dentro de lo que la IA responde.",
      },
      {
        src: "/assets/casos/marea-catalogo.png",
        w: 2000,
        h: 1389,
        alt: "Catálogo de relojes de hombre de marea.es con los filtros operativos",
        caption: "El catálogo en producción, con los filtros de la barra lateral funcionando sobre 1.174 relojes.",
      },
    ],
    contexto: [
      "Marea es una marca de relojes, smartwatches y joyería de acero y plata con más de 2.200 referencias. El catálogo se gestionaba a mano desde hojas de cálculo del proveedor, y la web acababa de migrar a producción.",
      "El problema no era la falta de datos, era que los datos no llegaban a la web. Las fichas se creaban una a una, las fotos se subían a mano desde Dropbox, y la información que producto mantenía en los sheets no se reflejaba en la tienda.",
      "A eso se sumaba un bloqueo técnico: el hosting había baneado permanentemente la IP de la instancia de n8n en la nube, así que toda la automatización tuvo que reconstruirse contra una instancia local.",
    ],
    queHiceIntro:
      "Monté un ecosistema de 19 automatizaciones en n8n que cubre el ciclo de vida completo de un producto, desde que el proveedor lo pone en su hoja de cálculo hasta que está publicado en la tienda con fotos, categorías, stock y SEO. Además del trabajo de estructura y diseño sobre la propia web. Estos son los seis circuitos.",
    capitulos: [
      {
        n: "01",
        title: "Alta de producto",
        body: "Tres circuitos de carga masiva (relojes, smartwatches, joyería) que leen el sheet del proveedor, comprueban si la referencia ya existe, generan la descripción larga y la meta description con IA, calculan las categorías según género, tipo, material y colección, crean el producto en borrador y devuelven el ID al sheet.",
      },
      {
        n: "02",
        title: "Imágenes",
        body: "Un circuito que cruza el EAN de cada producto contra Dropbox, descarga las fotos, las sube a la biblioteca de WordPress y las asigna en orden. Solo actúa sobre productos sin fotos, así que es idempotente: se puede lanzar mil veces sin duplicar nada.",
      },
      {
        n: "03",
        title: "Publicación controlada",
        body: "Un workflow que solo saca de borrador los productos que ya tienen imágenes, y acotado por lista de IDs. Nunca publica nada por accidente.",
      },
      {
        n: "04",
        title: "Stock",
        body: "Sincronización desde el sheet de producto con umbral de reserva configurable, para poder guardar unidades para la tienda física.",
      },
      {
        n: "05",
        title: "Nombres, categorías y variantes",
        body: "Circuitos para mantener el nombre literal del sheet, reclasificar referencias cuando el proveedor cambia de criterio, y sincronizar la categoría Novedades de forma bidireccional.",
      },
      {
        n: "06",
        title: "SEO on page",
        body: "Generación de meta title y meta description con Rank Math, además del trabajo de estructura y diseño sobre la propia tienda.",
      },
    ],
    verificado: {
      intro:
        "Cerca de 9.500 escrituras verificadas sobre el catálogo, todas con simulación previa, CSV de rollback y verificación posterior contra la tienda.",
      filas: [
        { value: "2.144", label: "nombres alineados con el sheet", note: "cero discrepancias" },
        { value: "910", label: "productos con inventario real", note: "segunda pasada: cero cambios pendientes" },
        { value: "2.290", label: "productos con su EAN en el campo nativo", note: "identificables para Google Shopping y asistentes de IA" },
        { value: "23", label: "relojes nuevos publicados en un solo día", note: "con fotos, categorías y descripciones" },
        { value: "285", label: "grupos de variaciones vinculadas", note: "las variantes de color se ven como miniaturas" },
      ],
      cierre: "Cero errores en todas las pasadas masivas.",
    },
    tecnico: {
      title: "El hallazgo que nadie había visto",
      body: [
        "La web tenía diez filtros configurados en la barra lateral (género, tipo de reloj, material, colores, resistencia al agua) y ninguno funcionaba.",
        "El motivo: WooCommerce solo puede filtrar por atributos globales, y los 2.200 productos tenían sus características como atributos locales, que no aparecen en ningún filtro. El filtro de Género ofrecía 22 relojes cuando había casi mil. Los clientes no podían filtrar nada.",
        "Se migraron con normalización de vocabulario, que era la mitad del trabajo: el sheet tenía \"5 ATM\" y \"5 ATM.\" como valores distintos, 47 colores de esfera incluyendo erratas, y materiales con la traducción inglesa pegada.",
      ],
      tabla: [
        { label: "Filtros operativos en relojes", antes: "0 de 10", despues: "7 sobre 1.174 productos" },
        { label: "Filtros operativos en joyería", antes: "0 de 10", despues: "5 sobre 1.038 productos" },
        { label: "Valores de color", antes: "47 y 53 variantes", despues: "paletas de 17 y 18" },
        { label: "Medidas de diámetro", antes: "51 medidas sueltas", despues: "4 rangos" },
      ],
    },
    hallazgos: {
      title: "Lo que apareció sin buscarlo",
      intro: "Trabajar con el catálogo entero destapó problemas que nadie había detectado.",
      items: [
        {
          value: "997",
          title: "productos compartiendo nombre",
          body: "261 nombres repetidos, y 699 casos entre familias completamente distintas: 53 productos llamados exactamente \"reloj de mujer con correa de acero y esfera plateada\". Contenido duplicado para Google y un cliente que no puede distinguirlos.",
        },
        {
          value: "142",
          title: "slugs con sufijo de duplicado",
          body: "La auditoría había detectado 9. El barrido completo encontró 142, y cambió el diagnóstico: los SKU eran distintos, así que no había ni un duplicado real que redirigir. Eran referencias diferentes con el mismo nombre, y la solución fue meter la referencia en el slug, con el 301 automático de WordPress.",
        },
        {
          value: "10",
          title: "filas con datos corrompidos",
          body: "Diez filas del sheet tenían dos columnas entrelazadas letra a letra: \"rMuboysquetón\" era \"ruby\" más \"Mosquetón\" alternando caracteres, por un desfase de columnas al importar. Se recuperaron buscando el término como subsecuencia.",
        },
        {
          value: "1",
          title: "duplicado que confirmó el propio WooCommerce",
          body: "Un anillo tenía dos fichas, una con tres variaciones compartiendo el mismo SKU. Al rellenar los EAN, WooCommerce rechazó el duplicado por violar la unicidad del código de barras. El sistema dio la prueba que faltaba.",
        },
        {
          value: "2.293",
          title: "fichas sin un solo encabezado",
          body: "Ni un producto tiene un H2 en su descripción, y las 50 categorías no tienen una sola palabra de texto. Los dos únicos H2 de la web son el título del popup de newsletter, duplicado. Diagnosticado y con la solución preparada.",
        },
      ],
    },
    cta: {
      title: "Esto es crecimiento ecommerce hecho por dentro.",
      body: "Catálogo que llega solo del proveedor a la tienda, filtros que funcionan y fichas que Google entiende. Sobre tu plataforma actual, sin migrar nada.",
      label: "Ver el pack Crecimiento",
      href: "/servicios/crecimiento-ecommerce",
    },
    metodo: {
      title: "Cómo se trabajó",
      intro: "Tres reglas explican el cero de errores.",
      reglas: [
        {
          title: "Simulación antes de escribir",
          body: "Toda pasada masiva se ejecuta primero en modo lectura y produce un CSV con lo que cambiaría. Se revisa, y solo después se escribe.",
        },
        {
          title: "Rollback siempre",
          body: "Antes de cada escritura se guarda el estado anterior en CSV. Ninguna operación es irreversible.",
        },
        {
          title: "Ritmo respetuoso con el hosting",
          body: "Lotes de 10 peticiones cada 8 segundos, timeout de 90 segundos, un solo reintento y parada en seco si algo falla dos veces. Ese ritmo se calibró midiendo: con lotes de 25 seguidos el servidor devolvía 503 y se perdían escrituras en silencio.",
        },
      ],
    },
  },
  "opoai-plataforma-estudio-oposiciones": {
    shot: "/assets/casos/opoai-home.png",
    shotCaption: "opoai.ai en producción.",
    kpis: [
      {
        title: "Crecimiento orgánico en un mes",
        note: "Search Console, 17 jul al 15 ago frente a 16 ago al 14 sep de 2026",
        items: [
          { value: "+112 %", label: "clics orgánicos", note: "de 56 a 119" },
          { value: "+209 %", label: "impresiones", note: "de 1.314 a 4.066" },
          { value: "x5", label: "clics en páginas de contenido", note: "de 12 a 65" },
          { value: "13-16", label: "posición media", note: "venía de 25-35 en julio" },
        ],
      },
      {
        title: "La plataforma por dentro",
        note: "datos de producto a 16 de septiembre de 2026",
        items: [
          { value: "133.889", label: "fragmentos del temario indexados", note: "131 temas oficiales, 3 cuerpos" },
          { value: "10.419", label: "preguntas de exámenes reales", note: "base propia, no generada" },
          { value: "8.988", label: "preguntas contestadas", note: "por opositores desde el lanzamiento" },
          { value: "4.169", label: "conversaciones con el tutor", note: "la IA cita el artículo, no improvisa" },
        ],
      },
    ],
    evidencia: [
      {
        src: "/assets/casos/opoai-gsc-total.png",
        w: 2000,
        h: 791,
        alt: "Search Console de opoai.ai desde el cambio de dominio: 216 clics y 6,47 mil impresiones",
        caption: "Desde el cambio de dominio (15 de junio) al 13 de septiembre: 216 clics y 6.470 impresiones. La curva arranca plana porque Google empieza de cero con el dominio nuevo, y despega a partir de agosto.",
      },
      {
        src: "/assets/casos/opoai-gsc-mes.png",
        w: 2000,
        h: 765,
        alt: "Search Console de opoai.ai en los últimos 28 días: 114 clics y 3,92 mil impresiones",
        caption: "Los últimos 28 días concentran 114 de esos 216 clics y 3.920 de las 6.470 impresiones. Más de la mitad de todo el histórico del dominio, en un solo mes.",
      },
      {
        src: "/assets/casos/opoai-ai-28dias.png",
        w: 2000,
        h: 776,
        alt: "Impresiones de opoai.ai en AI Search durante 28 días: 765",
        caption: "765 impresiones en AI Search en 28 días. Google cita a OpoAI dentro de conversaciones: en Search Console aparecen turnos de chat, no búsquedas, del tipo \"cuándo se abre el plazo\" o \"cuánto cuesta al mes\".",
      },
      {
        src: "/assets/casos/opoai-ai-total.png",
        w: 2000,
        h: 766,
        alt: "Impresiones acumuladas de opoai.ai en AI Search desde junio: 1,05 mil",
        caption: "La misma métrica desde junio: 1.050 impresiones acumuladas en AI Search, casi todas de agosto en adelante. Es la curva que deja ver que el trabajo de GEO está funcionando.",
      },
    ],
    contexto: [
      "OpoAI es una plataforma de preparación de oposiciones de Justicia con un tutor jurídico que cita el artículo exacto del BOE, banco de preguntas oficiales, simulacros con la penalización real, flashcards y planificador.",
      "Compite en una categoría que ha pasado de dos actores a veinte en un año, la mayoría con la misma propuesta (\"IA para oposiciones\") y la misma estética. El proyecto arrancó en marzo de 2026 y en junio migró al dominio definitivo, opoai.ai.",
      "En ese momento el tráfico orgánico era casi todo de marca: de las 25 consultas con clics del dominio antiguo, 5 eran variantes de \"opoai\" y sumaban el 95 % de los clics. La web era una landing de producto, sin nada que capturase lo que busca un opositor.",
    ],
    queHiceIntro:
      "Construí una estructura paralela a la web de producto, organizada por lo que busca un opositor antes de decidir cómo preparar la oposición. Cuatro decisiones, 41 URLs, y un enfoque de contenido pensado a la vez para Google y para los modelos de lenguaje.",
    capitulos: [
      {
        n: "01",
        title: "Arquitectura por cuerpo y por intención",
        body: "En vez de organizar la web alrededor de las funciones del producto (tutor, tests, flashcards), la organicé alrededor de la intención de búsqueda. Cada cuerpo tiene su clúster: la página del cuerpo para \"oposiciones X\", su temario para \"temario X 2026\", su sueldo para \"cuánto cobra un X\", y las páginas de recursos para las preguntas concretas del año de convocatoria: fecha de examen, nota de corte, penalización, estructura del examen.",
      },
      {
        n: "02",
        title: "Contenido anclado a la fuente legal",
        body: "Cada página de temario y sueldo lleva entre 1.000 y 1.300 palabras, esquema de preguntas y respuestas, referencia a la orden de convocatoria concreta y enlaces cruzados entre los tres cuerpos. Todo dato remite al BOE, a la orden o a los Presupuestos Generales. Es la misma promesa que hace la IA del producto, aplicada al SEO.",
      },
      {
        n: "03",
        title: "Preparar la web para que la citen los modelos",
        body: "Publiqué un llms.txt con la descripción estructurada de la plataforma y sus modos, y datos estructurados de Organization, SoftwareApplication, Product, FAQPage y EducationalOrganization. El robots.txt no bloquea ningún rastreador de IA. El resultado es medible: Google cita a OpoAI dentro de conversaciones de AI Mode, en posiciones 1 a 10 de las fuentes.",
      },
      {
        n: "04",
        title: "La campaña de producto como gancho de búsqueda",
        body: "Del 25 de agosto al 3 de octubre, fecha del examen de Justicia, la plataforma es gratuita. Reescribí la home, el title y las páginas de producto alrededor de esa fecha, con cuenta atrás y sin tarjeta. Una campaña comercial convertida en argumento de búsqueda para el mes en el que todo el mundo busca.",
      },
      {
        n: "05",
        title: "Higiene técnica como prerrequisito",
        body: "Migración de dominio con redirección global, sitemap único con las 41 URLs, canonicals y propiedad de dominio en Search Console. Sin esto, el contenido no habría tenido dónde apoyarse: el dominio nuevo empezaba de cero y había que consolidar todas las señales cuanto antes.",
      },
    ],
    verificado: {
      intro:
        "Páginas que han entrado en primera y segunda página sin un solo enlace externo, a 17 de septiembre de 2026.",
      filas: [
        { value: "17", label: "Temario de Tramitación Procesal", note: "posición media" },
        { value: "17", label: "Guía de temarios", note: "posición media" },
        { value: "22", label: "Sueldo de Gestión Procesal", note: "posición media" },
        { value: "24", label: "Temario de Auxilio Judicial", note: "404 impresiones en 14 días" },
        { value: "2", label: "Consulta de marca \"opoai\"", note: "43 % de los clics identificados" },
      ],
      cierre: "La dependencia de marca ha bajado del 95 % al 60 % en tres meses.",
    },
    tecnico: {
      title: "Lo que cambió en tres meses",
      body: [
        "El dominio nuevo partía de cero en junio: Google olvida el antiguo y hay que reconstruir todas las señales. Por eso junio y julio tienen posiciones malas aunque el tráfico ya creciera.",
        "A partir de ahí, lo que se mueve no es una métrica suelta, es el conjunto: las páginas informativas entran en el índice, ganan posición y empiezan a restar peso a la marca.",
        "Las consultas con volumen ya están en el radar: \"temario auxilio judicial\" (246 impresiones), \"temario gestión procesal\" (114), \"temario tramitación procesal 2026\" (94), \"gestor procesal sueldo\" (52). Están en posiciones donde casi nadie hace clic todavía. Cuando suban, los clics se multiplican sin tocar nada más.",
      ],
      tabla: [
        { label: "Dependencia de la marca", antes: "95 % de los clics", despues: "60 %" },
        { label: "Posición media del dominio nuevo", antes: "~50 en junio", despues: "~15 en septiembre" },
        { label: "Impresiones al día", antes: "44 en julio", despues: "174 en septiembre" },
        { label: "Clics en páginas de contenido", antes: "12 al mes", despues: "65 al mes" },
      ],
    },
    hallazgos: {
      title: "Lo que apareció revisando",
      intro: "La revisión quincenal es la que encuentra los errores que ninguna herramienta señala.",
      items: [
        {
          value: "650",
          title: "impresiones con el nombre equivocado",
          body: "Dos páginas estaban optimizadas para \"Auxiliar Judicial\" cuando el cuerpo se llama \"Auxilio Judicial\". Son dos cosas distintas y el opositor busca la segunda. Media hora de corrección sobre más de mil impresiones mensuales.",
        },
        {
          value: "1",
          title: "error de plantilla en los titles de sueldo",
          body: "Un fallo heredado de la plantilla afectaba al title de todas las páginas de sueldo a la vez. Detectado en la misma revisión y corregido en bloque.",
        },
        {
          value: "62 %",
          title: "de un mes lo hizo un solo usuario",
          body: "Julio suma 6.657 preguntas contestadas, pero 4.101 son de una sola persona. Sin ese usuario, julio son 2.556, que sigue siendo el mejor mes con diferencia. Lo cuento porque la cifra bruta, sola, engaña.",
        },
        {
          value: "3",
          title: "registros llegados desde ChatGPT",
          body: "En septiembre entraron tres altas con referencia de chatgpt.com. No es tráfico de Google: es un modelo recomendando la plataforma directamente. Es exactamente lo que persigue el trabajo de llms.txt y datos estructurados.",
        },
      ],
    },
    cta: {
      title: "¿Y si te citan también las respuestas de IA?",
      body: "Este caso es contenido anclado a la fuente y una web preparada para que la lean los modelos. Es exactamente lo que mide una auditoría de SEO y GEO.",
      label: "Ver la auditoría SEO y GEO",
      href: "/servicios/auditoria-seo-geo",
    },
    metodo: {
      title: "Cómo se trabaja esto",
      intro: "Una sola rutina explica los hallazgos de arriba.",
      reglas: [
        {
          title: "Revisión quincenal, por página y por consulta",
          body: "Cada quince días comparo periodos en Search Console página a página y consulta a consulta, nunca por posición media global. La media global mezcla páginas nuevas con viejas y esconde tanto las pérdidas reales como las mejoras.",
        },
        {
          title: "Separar marca de no marca siempre",
          body: "Mirar los clics totales de un producto con marca propia da una foto falsa. Contando la marca aparte se ve lo único que importa a un año: si el contenido informativo está empezando a traer gente que no te conocía.",
        },
        {
          title: "Publicar antes de necesitarlo",
          body: "Las URLs de los cuerpos nuevos se publican dos semanas antes del relanzamiento para que Google las tenga indexadas el día que importa. La antigüedad de indexación no se puede comprar el mismo día.",
        },
      ],
    },
  },
  "pelican-catchy-infraestructura-ia": {
    shot: "/assets/casos/pelican-estrategia.png",
    shotFrame: "plain",
    shotTag: "n8n · estrategia anual · 112 nodos",
    shotCaption: "El workflow que convierte las transcripciones del onboarding en el documento de estrategia anual.",
    kpis: [
      {
        title: "La infraestructura, en números",
        note: "instancia propia del cliente en n8n cloud",
        items: [
          { value: "8", label: "workflows en producción", note: "cinco sistemas de agencia" },
          { value: "187", label: "nodos orquestados", note: "112 solo en la pieza central" },
          { value: "12", label: "servicios integrados", note: "de Anthropic a Meta WhatsApp" },
          { value: "122", label: "páginas por ejecución", note: "el documento de estrategia anual" },
        ],
      },
      {
        title: "La pieza central: el generador de estrategia",
        note: "de las transcripciones del onboarding al Google Doc terminado",
        items: [
          { value: "35.000", label: "palabras objetivo", note: "repartidas en cinco secciones" },
          { value: "5", label: "editores independientes", note: "uno por sección, más un editor jefe" },
          { value: "32.000", label: "tokens de salida por editor", note: "revisión completa, no por trozos" },
          { value: "3", label: "ramas en paralelo", note: "briefing, competencia y autoridad de dominio" },
        ],
      },
    ],
    evidenciaTitulo: "Los sistemas, por dentro",
    evidenciaIntro:
      "Los workflows reales en la instancia del cliente. Se pueden abrir a tamaño completo para leer nodo a nodo.",
    evidencia: [
      {
        src: "/assets/casos/pelican-estrategia.png",
        w: 2156,
        h: 570,
        alt: "Workflow de n8n del generador de estrategia anual de Pelican Catchy, con 112 nodos",
        caption: "El generador de estrategia anual. Arranca leyendo la carpeta de transcripciones, abre tres ramas en paralelo (Claude para el briefing, Perplexity para competencia, DataForSEO para autoridad), las une en un Merge real, escribe sección a sección en bucle y pasa cada una por su editor antes de ensamblar el Google Doc.",
      },
      {
        src: "/assets/casos/pelican-alertas.png",
        w: 2230,
        h: 780,
        alt: "Workflow de la alerta semanal de proyectos de Pelican Catchy en n8n",
        caption: "La alerta semanal, los jueves a las nueve. La API de Asana no devuelve la jerarquía completa en una llamada, así que el flujo la reconstruye por niveles: portfolio, cliente, proyecto y tarea, aplanando en cada salto. Si un cliente no tiene proyectos en curso, la rama muere sin romper la ejecución.",
      },
      {
        src: "/assets/casos/pelican-recaps-drive.png",
        w: 2220,
        h: 570,
        alt: "Workflow de recaps de reunión con creación de tareas en Asana",
        caption: "Los recaps de reunión. Lee los documentos desde Drive, devuelve resumen ejecutivo, puntos clave y acciones, y convierte cada acción en una tarea real en el tablero de Asana, con responsable y documento de origen en las notas.",
      },
      {
        src: "/assets/casos/pelican-redes.png",
        w: 2198,
        h: 648,
        alt: "Workflow de generación de copys de LinkedIn sobre Metricool",
        caption: "El flujo de redes. Descarga de Metricool los posts ya programados que aún no tienen texto, genera el copy de LinkedIn con el tono de marca definido en configuración y lo escribe de vuelta en el calendario de publicación.",
      },
    ],
    contexto: [
      "Pelican Catchy es una agencia de comunicación especializada en sectores críticos: cadena de suministro, seguridad física y electrónica, fintech y robótica industrial.",
      "Su trabajo vivía repartido en cuatro herramientas que no se hablaban entre sí. Asana para proyectos, Gmail para clientes, Google Drive para documentos y Metricool para redes. Cada entregable estratégico, cada recap de reunión y cada pieza de contenido salía de horas de trabajo manual de un equipo pequeño.",
      "El encargo no fue conectar aplicaciones. Fue convertir cinco procesos de agencia en sistemas que se ejecutan solos y dejan el resultado terminado donde alguien lo va a abrir.",
    ],
    queHiceIntro:
      "Cinco sistemas sobre la instancia propia del cliente, ocho workflows y 187 nodos. Ninguno pide entrar en n8n a recoger nada: el resultado aparece en Drive, en Gmail, en Asana o en Metricool, que es donde el equipo ya trabaja.",
    capitulos: [
      {
        n: "01",
        title: "Generador de estrategia anual",
        body: "Tres workflows y 112 nodos. A partir de las transcripciones de la reunión de onboarding produce el documento de estrategia anual: cinco secciones macro y unas 122 páginas. Lee una carpeta de Drive aceptando Google Docs, Word y PDF con extracción distinta por formato, abre tres ramas en paralelo, enriquece el briefing con la investigación, escribe sección a sección en bucle y pasa cada una por su editor antes de crear el Google Doc en la carpeta del cliente.",
      },
      {
        n: "02",
        title: "Recaps de reunión con tareas en Asana",
        body: "Veinte nodos. Lee los documentos de una reunión y devuelve resumen ejecutivo, puntos clave, acciones con responsable y próximos pasos. Sale por correo, y cada acción se convierte en una tarea real en el tablero del cliente. Los Word no se pueden leer directamente, así que el flujo los copia como Google Doc temporal, exporta el texto y borra la copia.",
      },
      {
        n: "03",
        title: "Alerta semanal de proyectos",
        body: "Once nodos con cron los jueves a las nueve. Recorre los dos portfolios de la agencia, baja a cada cliente y a cada proyecto en curso, recoge las tareas y envía un resumen agrupado al equipo. Reconstruye por niveles una jerarquía que la API de Asana no devuelve entera.",
      },
      {
        n: "04",
        title: "Triaje de correo y agenda",
        body: "Trece nodos con trigger de Gmail. Cada correo entrante pasa por Claude, que devuelve prioridad, resumen, acción requerida, si el remitente es cliente y si el mensaje contiene un evento con fecha. Lo urgente se avisa por WhatsApp con la API de Meta, los eventos se crean en Google Calendar, y todo queda registrado en una hoja de cálculo para poder auditar qué clasificó el modelo.",
      },
      {
        n: "05",
        title: "Contenido: blog, prensa y redes",
        body: "Dos workflows y 31 nodos. El primero toma la siguiente fila pendiente del calendario editorial, Perplexity aporta datos frescos del sector, Claude escribe el artículo, gpt-image-1 genera la cabecera y todo se compone con la plantilla corporativa. El segundo trabaja sobre Metricool generando los copys de LinkedIn con el tono de marca.",
      },
    ],
    verificado: {
      intro:
        "Lo que produce una sola ejecución del generador de estrategia, con el objetivo de palabras fijado en configuración para cada sección.",
      filas: [
        { value: "9.000", label: "Mercado y posicionamiento", note: "palabras objetivo" },
        { value: "6.000", label: "Caracterización sectorial", note: "palabras objetivo" },
        { value: "4.500", label: "Diagnóstico de comunicación", note: "palabras objetivo" },
        { value: "12.000", label: "Plan de comunicación", note: "palabras objetivo" },
        { value: "3.500", label: "Conclusiones y recomendaciones", note: "palabras objetivo" },
      ],
      cierre: "Unas 122 páginas ensambladas y entregadas como Google Doc en la carpeta del cliente.",
    },
    tecnico: {
      title: "El fallo que se llevaba dos ramas por delante",
      body: [
        "El generador abre tres ramas en paralelo: Claude extrae el briefing, Perplexity investiga a los competidores y DataForSEO mide su autoridad de dominio. Al principio el punto de unión era un nodo Code.",
        "n8n ejecutaba ese Code en cuanto llegaba la primera rama, y las otras dos se perdían en silencio. Sin error, sin aviso: el documento salía con un tercio de la investigación. Un nodo Merge espera a las tres entradas, un Code no.",
        "Esa clase de obstáculo es la que decide si un sistema funciona con los archivos y las APIs que hay de verdad, y no solo en la demo.",
      ],
      tabla: [
        { label: "Unión de las tres ramas de investigación", antes: "nodo Code, se ejecuta con la primera", despues: "nodo Merge, espera a las tres" },
        { label: "Archivos Word en Drive", antes: "ilegibles directamente", despues: "copia temporal a Google Doc y borrado" },
        { label: "Jerarquía de portfolios en Asana", antes: "no viene en una sola llamada", despues: "reconstruida por niveles" },
        { label: "Límite de ejecución de n8n cloud", antes: "un workflow que no cabía", despues: "dos encadenados, capítulos 1-3 y 4-6" },
      ],
    },
    cta: {
      title: "Tu operativa, en sistemas que se ejecutan solos.",
      body: "Ocho workflows que convierten cinco procesos de agencia en trabajo terminado, entregado donde el equipo ya trabaja. Esto es lo que hace el servicio de automatización.",
      label: "Ver automatizaciones",
      href: "/servicios/automatizaciones",
    },
    metodo: {
      title: "Decisiones que sostienen el sistema",
      intro: "Seis criterios que explican por qué esto sigue funcionando sin que nadie lo vigile.",
      reglas: [
        {
          title: "Claude por HTTP Request, no por nodo nativo",
          body: "Control total de modelo, tokens y formato de salida en cada paso, y libertad para cambiar de versión sin esperar a que se actualice el nodo.",
        },
        {
          title: "Un modelo por tarea",
          body: "Opus donde hay que extraer y redactar, Sonnet donde hay que editar y clasificar. El coste sigue a la dificultad real del paso, no al revés.",
        },
        {
          title: "Salida en JSON con parseo defensivo",
          body: "Cada nodo de parseo tolera bloques markdown y respuestas parciales, así que una respuesta rara degrada el resultado en vez de tumbar la ejecución entera.",
        },
        {
          title: "Toda la configuración en un solo nodo",
          body: "Cliente, carpeta, tono y estructura del documento se cambian en un sitio. Dar de alta un cliente nuevo no obliga a tocar la lógica.",
        },
        {
          title: "Estado en staticData durante los bucles",
          body: "Las secciones escritas se acumulan entre iteraciones sin depender del orden de llegada, que en un bucle largo nunca está garantizado.",
        },
        {
          title: "Entrega en la herramienta del equipo",
          body: "El resultado aparece en Drive, Gmail, Asana o Metricool. Nadie entra en n8n a recoger su trabajo, que es la diferencia entre una automatización y un sistema que se usa.",
        },
      ],
    },
  },
  "seoscar-os-plataforma-propia": {
    shot: "/assets/casos/seoscaros-prospeccion.png",
    shotFrame: "plain",
    shotTag: "SEOscar OS · prospección",
    shotCaption: "La cola de leads cualificados, con su puntuación y su evidencia.",
    kpis: [
      {
        title: "Ocho suscripciones, sustituidas",
        note: "precios de lista a septiembre de 2026",
        items: [
          { value: "521 $", label: "al mes que deja de pagarse", note: "6.254 $ al año" },
          { value: "8", label: "herramientas en una sola", note: "de Semrush a Holded" },
          { value: "8,60 $", label: "gastado en datos", note: "en siete semanas de uso real" },
          { value: "0 $", label: "de cuota fija", note: "el coste sigue al trabajo hecho" },
        ],
      },
      {
        title: "Lo que hay construido",
        note: "en uso real y en evolución continua desde agosto de 2026",
        items: [
          { value: "20.805", label: "líneas de código propio", note: "escritas y mantenidas en solitario" },
          { value: "496", label: "tests automáticos", note: "en 45 ficheros" },
          { value: "51", label: "tablas en base de datos", note: "37 migraciones versionadas" },
          { value: "49", label: "pantallas", note: "y 35 rutas de API" },
        ],
      },
    ],
    evidenciaTitulo: "La plataforma, por dentro",
    evidenciaIntro:
      "Capturas del entorno real en uso. Los nombres de clientes van difuminados a propósito.",
    evidencia: [
      {
        src: "/assets/casos/seoscaros-prospeccion.png",
        w: 2000,
        h: 1144,
        alt: "Pantalla de prospección de SEOscar OS con la cola de leads cualificados",
        caption: "Prospección. La cola solo admite leads de 70 puntos o más, y cada ejecución muestra el gasto del día contra el tope configurado. El sistema produce la cola y la evidencia, pero no envía nada: el correo lo escribe una persona.",
      },
      {
        src: "/assets/casos/seoscaros-analisis.png",
        w: 2000,
        h: 1145,
        alt: "Pantalla de análisis SEO de SEOscar OS con el rastreador propio",
        caption: "Análisis SEO. Rastreador propio, analizador de keywords, tráfico estimado y medidor de visibilidad en las respuestas de IA. Estas cuatro pestañas son las que sustituyen a Screaming Frog, a media suite de investigación y a la herramienta de 95 $ al mes.",
      },
      {
        src: "/assets/casos/seoscaros-agentes.png",
        w: 2000,
        h: 1138,
        alt: "Pantalla de agentes de IA de SEOscar OS",
        caption: "Agentes. Ocho asistentes especializados, cada uno con su instrucción, su modelo preferido y su tope de tokens. Abajo a la derecha se ve el coste por millón de tokens del modelo activo, y arriba el saldo restante.",
      },
      {
        src: "/assets/casos/seoscaros-facturacion.png",
        w: 2000,
        h: 1145,
        alt: "Facturación trimestral de SEOscar OS",
        caption: "Facturación. Trimestres con base, IVA, IRPF y exportación en CSV, que es lo que sustituye al programa de facturación española. Los nombres de cliente y los importes van pixelados.",
      },
      {
        src: "/assets/casos/seoscaros-propuestas.png",
        w: 2000,
        h: 1141,
        alt: "Pantalla de propuestas comerciales de SEOscar OS",
        caption: "Propuestas. Cuatro plantillas ya redactadas que salen en PDF descargable. Junto con clientes, agenda y facturación española, es la parte que sustituye al CRM y al programa de facturación.",
      },
    ],
    galeriaIntro: "El resto de la plataforma, sección a sección.",
    galeria: [
      {
        src: "/assets/casos/seoscaros-agenda.png",
        w: 2000,
        h: 1132,
        alt: "Tablero de agenda de SEOscar OS con tareas por columna",
        caption: "Agenda. Tablero por estado con prioridad y horas estimadas, filtrable por cliente.",
      },
      {
        src: "/assets/casos/seoscaros-calendario.png",
        w: 2000,
        h: 1149,
        alt: "Vista de calendario de la agenda de SEOscar OS",
        caption: "La misma agenda en calendario, con las tareas publicadas en Google Calendar.",
      },
      {
        src: "/assets/casos/seoscaros-facturacion.png",
        w: 2000,
        h: 1145,
        alt: "Facturación trimestral de SEOscar OS con exportación CSV",
        caption: "Facturación española por trimestres, con IVA, retención de IRPF y exportación en CSV.",
      },
      {
        src: "/assets/casos/seoscaros-factura-nueva.png",
        w: 2000,
        h: 1143,
        alt: "Formulario de nueva factura de SEOscar OS",
        caption: "Alta de factura con conceptos, IVA al 21 % y retención configurable.",
      },
      {
        src: "/assets/casos/seoscaros-correos.png",
        w: 2000,
        h: 1135,
        alt: "Pantalla de correos de SEOscar OS con comprobación de entregabilidad",
        caption: "Correos desde el Gmail propio, con comprobación de SPF, DKIM y DMARC antes de enviar.",
      },
      {
        src: "/assets/casos/seoscaros-archivo.png",
        w: 2000,
        h: 1131,
        alt: "Archivo de notas y documentos de SEOscar OS",
        caption: "Archivo de notas y documentos por carpetas, lo que sustituye a Notion.",
      },
      {
        src: "/assets/casos/seoscaros-hoja.png",
        w: 2000,
        h: 1140,
        alt: "Editor de hoja de cálculo de SEOscar OS",
        caption: "Hojas de cálculo propias: se pega una tabla desde Excel, Sheets o un CSV y se rellena sola.",
      },
    ],
    contexto: [
      "Un consultor independiente que trabaja tiendas online necesita, como mínimo, ocho herramientas: una suite de investigación SEO, un rastreador técnico, algo que mida su visibilidad en las respuestas de IA, prospección en frío, un CRM, facturación española y un sitio donde escribir.",
      "A precios de lista de septiembre de 2026 son 521,20 $ al mes, 6.254 $ al año. Pero el problema no era solo el precio. Era que los datos vivían en ocho sitios que no se hablan entre sí: la tienda que encuentras en una herramienta no es la misma ficha que cualificas en otra, ni la que facturas en la tercera.",
      "Y sobre todo, ninguna de las ocho soportaba el método de trabajo real, que es prospección manual e individualizada: analizar cada tienda, localizar un fallo concreto, hacer una captura y escribir el correo a mano.",
    ],
    queHiceIntro:
      "Diez secciones organizadas por el ciclo del negocio, no por tipo de archivo: captar, entregar y herramientas. Cada empresa tiene una sola ficha identificada por su dominio, que reúne la búsqueda que la encontró, su cualificación con evidencia, los rastreos de su web, los correos enviados y, si firmó, sus facturas y tareas.",
    capitulos: [
      {
        n: "01",
        title: "El motor de cualificación de leads",
        body: "La pieza central, con un principio detrás: la capacidad de listar no manda, manda la capacidad de analizar. Vale más una cola corta de leads muy buenos que una lista larga de mediocres. Tres capas sobre cada dominio: elegibilidad como filtro binario, dolor de 0 a 60 puntos y capacidad y timing de 0 a 40. Con 70 o más entra en la cola con ficha completa.",
      },
      {
        n: "02",
        title: "Comprobar de lo barato a lo caro",
        body: "La elegibilidad se comprueba por etapas para no pagar antes de descartar: tumbar un dominio por plataforma cuesta 0,012 $ en vez de los 0,047 $ que costaría comprobarlo todo. Cada lead sale con su evidencia numérica verificable a mano, una frase de dato para usar como gancho y la URL exacta de la captura que hay que hacer.",
      },
      {
        n: "03",
        title: "Una sola puerta de salida para la IA",
        body: "Toda la IA del producto sale por OpenRouter con una única clave. Cada llamada envía una lista ordenada de modelos y una ruta de reserva: si el proveedor preferido falla o aplica un límite, la pasarela pasa al siguiente sin que la aplicación se entere. Cada respuesta devuelve qué modelo contestó, cuántos tokens consumió y cuánto costó, y eso se guarda.",
      },
      {
        n: "04",
        title: "Ocho asistentes, no un chat genérico",
        body: "Cada asistente tiene su instrucción, su modelo preferido y su tope de tokens según el tipo de trabajo: Claude Sonnet donde hay que redactar de cara al cliente, Gemini Flash donde hace falta búsqueda web, Kimi para clasificar y resumir en masa. Las instrucciones comparten tres reglas: prohibido inventar datos, obligación de separar el hecho verificado de la estimación, y primera persona sin plural corporativo.",
      },
      {
        n: "05",
        title: "Herramientas reales, no solo texto",
        body: "Los agentes pueden llamar a cuatro funciones y encadenar hasta cuatro vueltas antes de responder: listar propiedades de Search Console, consultar clics, impresiones y posición real, inspeccionar el estado de indexación de una URL y generar un PDF descargable. Se le puede preguntar por el rendimiento de un cliente y responde con datos de Google, no con una estimación.",
      },
      {
        n: "06",
        title: "Contexto del cliente con presupuesto",
        body: "Al abrir un proyecto de cliente, la plataforma construye el contexto leyendo de la base: ficha, ficheros, tareas abiertas, notas, facturas y conversaciones anteriores. Va ordenado por utilidad y se recorta por el final cuando no cabe en el presupuesto de tokens, de modo que lo imprescindible, que es quién es el cliente, nunca se pierde por culpa de las notas.",
      },
      {
        n: "07",
        title: "El medidor de visibilidad en IA",
        body: "La función que sustituye a una herramienta de 95 $ al mes. Se define una marca con sus variantes y sus competidores y una lista de preguntas de comprador. Cada pregunta se lanza contra tres modelos de familias distintas, con búsqueda web activada, para no medir el sesgo de un solo proveedor. De cada respuesta se extrae si la marca aparece, en qué orden frente a los competidores y qué fuentes cita el modelo.",
      },
    ],
    verificado: {
      intro: "Volumen real procesado por la plataforma hasta hoy.",
      filas: [
        { value: "918", label: "páginas rastreadas", note: "rastreador propio" },
        { value: "356", label: "empresas localizadas", note: "búsqueda por sector y ciudad" },
        { value: "310", label: "dominios descubiertos", note: "deduplicados por dominio" },
        { value: "61", label: "dominios cualificados con puntuación", note: "con evidencia verificable" },
        { value: "411", label: "consultas de enriquecimiento guardadas", note: "caché de 30 días" },
      ],
      cierre: "Todo eso por 8,60 $ de datos, sobre infraestructura en plan gratuito.",
    },
    tecnico: {
      title: "Siete decisiones que explican por qué funciona con tan poco",
      body: [
        "Next.js con App Router, TypeScript, Supabase sobre Postgres y despliegue en Vercel. Sin capa de API para la interfaz: cada pantalla consulta Postgres directamente en el servidor y cada formulario invoca una función de servidor, así que no hay estado duplicado que mantener sincronizado.",
        "Los trabajos largos no caben en una petición HTTP. En vez de montar Redis y workers, cada trabajo avanza en tandas de 40 segundos que el propio navegador pide en bucle, con un cerrojo para que dos pestañas abiertas no dupliquen el trabajo ni el gasto.",
        "Y se completa lo que el proveedor no da: DataForSEO no reconoce la plataforma de la mayoría de tiendas españolas pequeñas, así que la plataforma lee por su cuenta la portada y el sitemap de cada tienda, gratis, y combina ambas lecturas.",
      ],
      tabla: [
        { label: "Coste de las herramientas", antes: "521,20 $ al mes fijos", despues: "pago por uso, 8,60 $ en siete semanas" },
        { label: "Ficha de una empresa", antes: "repartida en cuatro tablas", despues: "una sola, por dominio" },
        { label: "Trabajos largos", antes: "Redis y workers", despues: "tandas de 40 s desde el navegador" },
        { label: "Consultas a la API de pago", antes: "se pagan cada vez", despues: "caché de 30 días y tope diario" },
      ],
    },
    hallazgos: {
      title: "Lo que falló",
      intro: "Un caso de éxito sin esto no es creíble.",
      items: [
        {
          value: "0",
          title: "leads en la primera ejecución real",
          body: "Cincuenta dominios, 3,67 $ gastados y 34 descartados por \"sin plataforma ecommerce\" cuando muchos eran parafarmacias perfectamente válidas. Tres causas: el proveedor no reconocía PrestaShop en tiendas pequeñas, Cloudflare devolvía 403 al lector de sitemaps, y PrestaShop envuelve las URLs en bloques CDATA que el lector no interpretaba. Corregidas las tres, y cambiado el orden de comprobación para no pagar antes de descartar.",
        },
        {
          value: "4",
          title: "veces existía la misma tienda",
          body: "Encontrada en un sitio, cualificada en otro, contactada en un tercero y facturada en un cuarto, sin ninguna relación entre las cuatro filas. Se resolvió con una ficha única por dominio, que es lo que hoy sostiene el buscador global.",
        },
        {
          value: "2",
          title: "listas de exclusión separadas, y una fuga legal",
          body: "Había una lista de bajas por módulo. Quien se daba de baja desde un correo no quedaba bloqueado en el pipeline de prospección, así que podía reaparecer en la cola. Ahora cualquier baja escribe en ambas y descarta el dominio en el momento, que es lo que el documento de interés legítimo promete.",
        },
        {
          value: "1",
          title: "comprobación ingenua que daba falsos positivos",
          body: "El medidor de visibilidad en IA daba por mencionada a \"Marea\" dentro de la palabra \"mareado\". La detección pasó a buscar palabra completa y sin acentos.",
        },
      ],
    },
    metodo: {
      title: "Cómo se trabaja",
      intro: "Tres prácticas que hacen sostenible mantener esto en solitario.",
      reglas: [
        {
          title: "Verificar antes de dar nada por hecho",
          body: "Cada cambio pasa por tipado estricto, lint, los 496 tests y una compilación de producción. Y antes de integrar cualquier endpoint de pago se comprueba su nombre y sus campos en la documentación y se mide su coste real con una llamada pequeña. Así se supo que el histórico de rankings cuesta 0,138 $ por dominio.",
        },
        {
          title: "Desarrollo asistido, criterio propio",
          body: "El código se escribe con un agente de programación que lee el repositorio, ejecuta comandos, consulta la base y lanza los tests antes de dar nada por bueno. Acelera el trabajo y abarata mantener una base de este tamaño en solitario, pero las decisiones de producto y de arquitectura son mías.",
        },
        {
          title: "n8n orquesta, la plataforma ejecuta",
          body: "La plataforma expone un único webhook autenticado con doce acciones: crear tareas y notas, dar de alta clientes, cambiar el estado de una factura, consultar pendientes y cinco para el pipeline de leads. La regla es no duplicar automatizaciones en los dos sitios.",
        },
      ],
    },
    cta: {
      title: "Lo mismo que hago para mí, para tu negocio.",
      body: "Cuando el stack estándar no llega, la salida es construir la pieza que falta. Esta plataforma es la prueba de que sale a cuenta y de cómo se sostiene.",
      label: "Ver aplicaciones a medida",
      href: "/servicios/a-medida",
    },
  },
}

export function getCasoDeep(slug: string): CasoDeep | undefined {
  return casosDeep[slug]
}
