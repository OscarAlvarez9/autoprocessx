// Flujos reales de n8n que gestionan el catálogo de marea.es, generados a partir
// de su exportación (Desktop/n8n expertg/export_n8n_marea) con un script. Solo
// se conservan nombre de nodo, tipo y conexiones: sin credenciales, URLs ni
// parámetros. Los nodos van en orden de ejecución, y la columna y el carril
// salen de una maquetación por capas para que el flujo se lea limpio.
// No editar a mano: regenerar desde la exportación si cambian los flujos.

export type FlowNodeKind = "trigger" | "code" | "sheets" | "if" | "loop" | "wait" | "ai" | "dropbox" | "woo" | "wp" | "http" | "other"

export interface MareaFlow {
  id: string
  /** Nombre del workflow tal cual está en n8n. */
  name: string
  /** n: nombre, k: tipo, c: columna (capa), l: carril (rama). */
  nodes: { n: string; k: FlowNodeKind; c: number; l: number }[]
  /** Conexiones [origen, destino] por índice de nodo. */
  edges: [number, number][]
}

export const MAREA_FLOWS: MareaFlow[] = [
  {
    "id": "alta",
    "name": "Carga masiva JOYAS (acero/plata) → WooCommerce",
    "nodes": [
      {
        "n": "Ejecutar",
        "k": "trigger",
        "c": 0,
        "l": 0
      },
      {
        "n": "Config",
        "k": "code",
        "c": 1,
        "l": 0
      },
      {
        "n": "Leer Sheet",
        "k": "sheets",
        "c": 2,
        "l": 0
      },
      {
        "n": "Validar y Preparar",
        "k": "code",
        "c": 3,
        "l": 0
      },
      {
        "n": "Fetch Categorías",
        "k": "woo",
        "c": 4,
        "l": 0
      },
      {
        "n": "Guardar Árbol",
        "k": "code",
        "c": 5,
        "l": 0
      },
      {
        "n": "Cargar Productos",
        "k": "code",
        "c": 6,
        "l": 0
      },
      {
        "n": "Loop Productos",
        "k": "loop",
        "c": 7,
        "l": 0
      },
      {
        "n": "Buscar SKU",
        "k": "woo",
        "c": 8,
        "l": 0
      },
      {
        "n": "¿Existe ya?",
        "k": "code",
        "c": 9,
        "l": 0
      },
      {
        "n": "¿Existe?",
        "k": "if",
        "c": 10,
        "l": 0
      },
      {
        "n": "Marcar Existente",
        "k": "code",
        "c": 11,
        "l": -1
      },
      {
        "n": "Preparar Prompt IA",
        "k": "code",
        "c": 11,
        "l": 0
      },
      {
        "n": "Claude: Descripciones",
        "k": "ai",
        "c": 12,
        "l": 0
      },
      {
        "n": "Parsear IA",
        "k": "code",
        "c": 13,
        "l": 0
      },
      {
        "n": "Construir Producto",
        "k": "code",
        "c": 14,
        "l": 0
      },
      {
        "n": "Crear Producto WC",
        "k": "woo",
        "c": 15,
        "l": 0
      },
      {
        "n": "Verificar",
        "k": "code",
        "c": 16,
        "l": 0
      },
      {
        "n": "¿Variable?",
        "k": "if",
        "c": 17,
        "l": 0
      },
      {
        "n": "Crear Variaciones",
        "k": "woo",
        "c": 18,
        "l": 1
      },
      {
        "n": "Filas Sheet",
        "k": "code",
        "c": 19,
        "l": 0
      },
      {
        "n": "Escribir en Sheet",
        "k": "sheets",
        "c": 20,
        "l": 0
      },
      {
        "n": "Pausa",
        "k": "wait",
        "c": 21,
        "l": 0
      },
      {
        "n": "Resumen",
        "k": "code",
        "c": 8,
        "l": -1
      }
    ],
    "edges": [
      [
        0,
        1
      ],
      [
        1,
        2
      ],
      [
        2,
        3
      ],
      [
        3,
        4
      ],
      [
        4,
        5
      ],
      [
        5,
        6
      ],
      [
        6,
        7
      ],
      [
        7,
        8
      ],
      [
        7,
        23
      ],
      [
        8,
        9
      ],
      [
        9,
        10
      ],
      [
        10,
        11
      ],
      [
        10,
        12
      ],
      [
        11,
        21
      ],
      [
        12,
        13
      ],
      [
        13,
        14
      ],
      [
        14,
        15
      ],
      [
        15,
        16
      ],
      [
        16,
        17
      ],
      [
        17,
        18
      ],
      [
        18,
        19
      ],
      [
        18,
        20
      ],
      [
        19,
        20
      ],
      [
        20,
        21
      ],
      [
        21,
        22
      ],
      [
        22,
        7
      ]
    ]
  },
  {
    "id": "fotos",
    "name": "Carga masiva imágenes → WooCommerce (Marea)",
    "nodes": [
      {
        "n": "Ejecutar",
        "k": "trigger",
        "c": 0,
        "l": 0
      },
      {
        "n": "Config",
        "k": "code",
        "c": 1,
        "l": 0
      },
      {
        "n": "Productos WC",
        "k": "woo",
        "c": 2,
        "l": 0
      },
      {
        "n": "Dropbox: Listar",
        "k": "dropbox",
        "c": 3,
        "l": 0
      },
      {
        "n": "Cruzar EAN↔Imagen",
        "k": "code",
        "c": 4,
        "l": 0
      },
      {
        "n": "Loop Imágenes",
        "k": "loop",
        "c": 5,
        "l": 0
      },
      {
        "n": "Descargar de Dropbox",
        "k": "dropbox",
        "c": 6,
        "l": -1
      },
      {
        "n": "Subir a WP Media",
        "k": "wp",
        "c": 7,
        "l": -1
      },
      {
        "n": "Guardar Media",
        "k": "code",
        "c": 8,
        "l": -1
      },
      {
        "n": "Agrupar por Producto",
        "k": "code",
        "c": 6,
        "l": 0
      },
      {
        "n": "Loop Productos",
        "k": "loop",
        "c": 7,
        "l": 0
      },
      {
        "n": "Asignar Imágenes al Producto",
        "k": "woo",
        "c": 8,
        "l": 1
      },
      {
        "n": "Resumen",
        "k": "code",
        "c": 8,
        "l": 0
      }
    ],
    "edges": [
      [
        0,
        1
      ],
      [
        1,
        2
      ],
      [
        2,
        3
      ],
      [
        3,
        4
      ],
      [
        4,
        5
      ],
      [
        5,
        6
      ],
      [
        5,
        9
      ],
      [
        6,
        7
      ],
      [
        7,
        8
      ],
      [
        8,
        5
      ],
      [
        9,
        10
      ],
      [
        10,
        11
      ],
      [
        10,
        12
      ],
      [
        11,
        10
      ]
    ]
  },
  {
    "id": "publicar",
    "name": "Publicar borradores con imágenes (Marea)",
    "nodes": [
      {
        "n": "Ejecutar",
        "k": "trigger",
        "c": 0,
        "l": 0
      },
      {
        "n": "Config",
        "k": "code",
        "c": 1,
        "l": 0
      },
      {
        "n": "Listar Borradores",
        "k": "woo",
        "c": 2,
        "l": 0
      },
      {
        "n": "Filtrar y Agrupar",
        "k": "code",
        "c": 3,
        "l": 0
      },
      {
        "n": "Publicar Batch",
        "k": "woo",
        "c": 4,
        "l": 0
      },
      {
        "n": "Resumen",
        "k": "code",
        "c": 5,
        "l": 0
      }
    ],
    "edges": [
      [
        0,
        1
      ],
      [
        1,
        2
      ],
      [
        2,
        3
      ],
      [
        3,
        4
      ],
      [
        4,
        5
      ]
    ]
  },
  {
    "id": "nombres",
    "name": "Marea · Nombres de producto desde el sheet (DESCRIPCIÓN CORTA)",
    "nodes": [
      {
        "n": "Ejecutar",
        "k": "trigger",
        "c": 0,
        "l": 0
      },
      {
        "n": "Config",
        "k": "code",
        "c": 1,
        "l": 0
      },
      {
        "n": "Listar hojas",
        "k": "code",
        "c": 2,
        "l": 0
      },
      {
        "n": "Leer hoja",
        "k": "sheets",
        "c": 3,
        "l": 0
      },
      {
        "n": "Consolidar",
        "k": "code",
        "c": 4,
        "l": 0
      },
      {
        "n": "Catálogo WC",
        "k": "woo",
        "c": 5,
        "l": 0
      },
      {
        "n": "Calcular",
        "k": "code",
        "c": 6,
        "l": 0
      },
      {
        "n": "Lotes",
        "k": "code",
        "c": 7,
        "l": 0
      },
      {
        "n": "¿Aplicar?",
        "k": "if",
        "c": 8,
        "l": 0
      },
      {
        "n": "Aplicar",
        "k": "woo",
        "c": 9,
        "l": -1
      },
      {
        "n": "Resumen",
        "k": "code",
        "c": 10,
        "l": 0
      }
    ],
    "edges": [
      [
        0,
        1
      ],
      [
        1,
        2
      ],
      [
        2,
        3
      ],
      [
        3,
        4
      ],
      [
        4,
        5
      ],
      [
        5,
        6
      ],
      [
        6,
        7
      ],
      [
        7,
        8
      ],
      [
        8,
        9
      ],
      [
        8,
        10
      ],
      [
        9,
        10
      ]
    ]
  },
  {
    "id": "reclasificar",
    "name": "Marea · Collar → Cadena (desde sheet ACERO)",
    "nodes": [
      {
        "n": "Ejecutar",
        "k": "trigger",
        "c": 0,
        "l": 0
      },
      {
        "n": "Config",
        "k": "code",
        "c": 1,
        "l": 0
      },
      {
        "n": "Leer hoja",
        "k": "sheets",
        "c": 2,
        "l": 0
      },
      {
        "n": "Consolidar",
        "k": "code",
        "c": 3,
        "l": 0
      },
      {
        "n": "Categorías WC",
        "k": "woo",
        "c": 4,
        "l": 0
      },
      {
        "n": "Resolver categorías",
        "k": "code",
        "c": 5,
        "l": 0
      },
      {
        "n": "¿Crear categorías?",
        "k": "if",
        "c": 6,
        "l": 0
      },
      {
        "n": "Crear categorías",
        "k": "woo",
        "c": 7,
        "l": -1
      },
      {
        "n": "Guardar categorías",
        "k": "code",
        "c": 8,
        "l": 0
      },
      {
        "n": "Productos por SKU",
        "k": "woo",
        "c": 9,
        "l": 0
      },
      {
        "n": "Padres pendientes",
        "k": "code",
        "c": 10,
        "l": 0
      },
      {
        "n": "¿Faltan padres?",
        "k": "if",
        "c": 11,
        "l": 0
      },
      {
        "n": "Padres por ID",
        "k": "woo",
        "c": 12,
        "l": -1
      },
      {
        "n": "Calcular",
        "k": "code",
        "c": 13,
        "l": 0
      },
      {
        "n": "¿Textos con IA?",
        "k": "if",
        "c": 14,
        "l": 0
      },
      {
        "n": "Claude: collar → cadena",
        "k": "ai",
        "c": 15,
        "l": 0
      },
      {
        "n": "Parsear IA",
        "k": "code",
        "c": 16,
        "l": 0
      },
      {
        "n": "Montar cambios",
        "k": "code",
        "c": 17,
        "l": 0
      },
      {
        "n": "Lotes",
        "k": "code",
        "c": 18,
        "l": 0
      },
      {
        "n": "¿Aplicar?",
        "k": "if",
        "c": 19,
        "l": 0
      },
      {
        "n": "Aplicar",
        "k": "woo",
        "c": 20,
        "l": -1
      },
      {
        "n": "Resumen",
        "k": "code",
        "c": 21,
        "l": 0
      }
    ],
    "edges": [
      [
        0,
        1
      ],
      [
        1,
        2
      ],
      [
        2,
        3
      ],
      [
        3,
        4
      ],
      [
        4,
        5
      ],
      [
        5,
        6
      ],
      [
        6,
        7
      ],
      [
        6,
        8
      ],
      [
        7,
        8
      ],
      [
        8,
        9
      ],
      [
        9,
        10
      ],
      [
        10,
        11
      ],
      [
        11,
        12
      ],
      [
        11,
        13
      ],
      [
        12,
        13
      ],
      [
        13,
        14
      ],
      [
        14,
        15
      ],
      [
        14,
        17
      ],
      [
        15,
        16
      ],
      [
        16,
        17
      ],
      [
        17,
        18
      ],
      [
        18,
        19
      ],
      [
        19,
        20
      ],
      [
        19,
        21
      ],
      [
        20,
        21
      ]
    ]
  },
  {
    "id": "seo",
    "name": "SEO Rank Math: title + meta description (Marea)",
    "nodes": [
      {
        "n": "Ejecutar",
        "k": "trigger",
        "c": 0,
        "l": 0
      },
      {
        "n": "Config",
        "k": "code",
        "c": 1,
        "l": 0
      },
      {
        "n": "Listar Productos",
        "k": "woo",
        "c": 2,
        "l": 0
      },
      {
        "n": "Agrupar para IA",
        "k": "code",
        "c": 3,
        "l": 0
      },
      {
        "n": "Claude SEO",
        "k": "ai",
        "c": 4,
        "l": 0
      },
      {
        "n": "Mapear y Validar",
        "k": "code",
        "c": 5,
        "l": 0
      },
      {
        "n": "Chunk Update",
        "k": "code",
        "c": 6,
        "l": 0
      },
      {
        "n": "Update Batch",
        "k": "woo",
        "c": 7,
        "l": 0
      },
      {
        "n": "Resumen",
        "k": "code",
        "c": 8,
        "l": 0
      }
    ],
    "edges": [
      [
        0,
        1
      ],
      [
        1,
        2
      ],
      [
        2,
        3
      ],
      [
        3,
        4
      ],
      [
        4,
        5
      ],
      [
        5,
        6
      ],
      [
        6,
        7
      ],
      [
        7,
        8
      ]
    ]
  }
]
