// Preguntes freqüents de /ca/servicios/automatizacion-gestion-productos. Versió
// catalana de lib/gestionProductosFaqs.ts: un sol origen per al text visible
// (GestionProductosMuiCa) i per al FAQPage JSON-LD (page.tsx). Sense promeses de
// resultat; les úniques xifres són les verificades del catàleg de marea.es.

export const GESTION_PRODUCTOS_FAQS_CA: { q: string; a: string }[] = [
  {
    q: "Quina part de la gestió de productes automatitza el sistema?",
    a: "Tota la feina operativa del cicle de vida d'un producte: l'alta a partir del full del proveïdor, la descripció i la meta description, les fotos, les categories i els atributs de filtre, les variants, l'estoc i la publicació. El teu equip deixa de carregar fitxes i passa a revisar el que el sistema ha preparat.",
  },
  {
    q: "El sistema publica productes sense que ningú els vegi?",
    a: "No. Cada producte nou es crea en esborrany i només surt a la botiga quan està complet i dins de la llista que s'ha aprovat. La revisió i la decisió de què es publica continuen sent del teu equip; el que desapareix és la feina de preparar la fitxa.",
  },
  {
    q: "He de canviar de plataforma, d'ERP o de manera de treballar amb el proveïdor?",
    a: "No. El sistema es munta sobre el que ja fas servir: el full de càlcul o l'ERP d'on surten les dades, la carpeta on hi ha les fotos i la teva botiga. Avui funciona en producció sobre WooCommerce; a Shopify o Magento canvien els connectors, no la lògica.",
  },
  {
    q: "Què passa si el full del proveïdor arriba amb errors?",
    a: "És el més habitual, i el sistema està pensat per a això. Normalitza el vocabulari (valors repetits amb una altra grafia, errates, traduccions enganxades), detecta referències duplicades o amb dades corruptes i les separa per revisar-les en lloc de pujar-les tal qual.",
  },
  {
    q: "I si una actualització massiva surt malament?",
    a: "Cap escriptura sobre el catàleg es fa a cegues. Primer se simula i es genera un llistat del que canviaria, es revisa, es desa una còpia de l'estat anterior per poder desfer i, després d'escriure, es verifica contra la botiga. A marea.es van ser prop de 9.500 escriptures amb zero errors.",
  },
  {
    q: "Qui el manté?",
    a: "Jo, en retainer: vigilo els fluxos, els ajusto quan canvia el proveïdor o el teu catàleg i hi afegeixo circuits nous quan cal. El sistema funciona a n8n amb codi propi, sense quota per execució, i el codi és teu.",
  },
  {
    q: "Quant costa el sistema?",
    a: "Depèn de quantes fonts de dades, tipus de producte i plataformes calgui connectar. Per això no hi ha tarifa pública: preu tancat després del diagnòstic, que és gratuït i t'arriba en 24-48 h.",
  },
]
