// Preguntas frecuentes de /servicios/automatizacion-gestion-productos. Un solo
// origen para el texto visible (GestionProductosMui) y para el FAQPage JSON-LD
// (page.tsx), así nunca divergen. Sin promesas de resultado; las únicas cifras
// son las verificadas del catálogo de marea.es (lib/casesDeep.ts).

export const GESTION_PRODUCTOS_FAQS: { q: string; a: string }[] = [
  {
    q: "¿Qué parte de la gestión de productos automatiza el sistema?",
    a: "Todo el trabajo operativo del ciclo de vida de un producto: el alta a partir de la hoja del proveedor, la descripción y la meta description, las fotos, las categorías y los atributos de filtro, las variantes, el stock y la publicación. Tu equipo deja de cargar fichas y pasa a revisar lo que el sistema ha preparado.",
  },
  {
    q: "¿El sistema publica productos sin que nadie los vea?",
    a: "No. Cada producto nuevo se crea en borrador y solo sale a la tienda cuando está completo y dentro de la lista que se ha aprobado. La revisión y la decisión de qué se publica siguen siendo de tu equipo; lo que desaparece es el trabajo de preparar la ficha.",
  },
  {
    q: "¿Tengo que cambiar de plataforma, de ERP o de forma de trabajar con el proveedor?",
    a: "No. El sistema se monta sobre lo que ya usas: la hoja de cálculo o el ERP de donde salen los datos, la carpeta donde están las fotos y tu tienda. Hoy funciona en producción sobre WooCommerce; en Shopify o Magento cambian los conectores, no la lógica.",
  },
  {
    q: "¿Qué pasa si la hoja del proveedor viene con errores?",
    a: "Es lo habitual, y el sistema está pensado para ello. Normaliza el vocabulario (valores repetidos con otra grafía, erratas, traducciones pegadas), detecta referencias duplicadas o con datos corruptos y las separa para revisión en lugar de subirlas tal cual.",
  },
  {
    q: "¿Y si una actualización masiva sale mal?",
    a: "Ninguna escritura sobre el catálogo se hace a ciegas. Primero se simula y se genera un listado de lo que cambiaría, se revisa, se guarda una copia del estado anterior para poder deshacer y, después de escribir, se verifica contra la tienda. En marea.es fueron cerca de 9.500 escrituras con cero errores.",
  },
  {
    q: "¿Quién lo mantiene?",
    a: "Yo, en retainer: vigilo los flujos, los ajusto cuando cambia el proveedor o tu catálogo y añado circuitos nuevos cuando hacen falta. El sistema corre en n8n con código propio, sin cuota por ejecución, y el código es tuyo.",
  },
  {
    q: "¿Cuánto cuesta el sistema?",
    a: "Depende de cuántas fuentes de datos, tipos de producto y plataformas haya que conectar. Por eso no hay tarifa pública: precio cerrado tras el diagnóstico, que es gratis y te llega en 24-48 h.",
  },
]
