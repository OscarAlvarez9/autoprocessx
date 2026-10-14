// Preguntes freqüents de les pàgines de serveis en català. Un sol origen per
// al text visible (components/mui/ca/*Ca.tsx) i per al FAQPage JSON-LD
// (app/(ca)/ca/servicios/*/page.tsx), així les preguntes coincideixen paraula
// per paraula.

export type FaqCa = { q: string; a: string }

export const AGENTE_FAQS_CA: FaqCa[] = [
  { q: "Puc contractar només l'agent, sense el pack?", a: "Sí. L'agent es contracta per separat i és l'entrada més ràpida: es connecta al teu catàleg i comença a vendre. Si després vols trànsit i conversió, el pack Creixement ho uneix tot." },
  { q: "L'agent s'inventa productes o preus?", a: "No. Està ancorat al teu catàleg real mitjançant RAG: respon amb els teus productes, preus i estoc. Si no té una dada, ho diu i deriva la conversa a una persona en lloc d'improvisar." },
  { q: "Fa servir el meu catàleg de debò?", a: "Sí. Sincronitzo el teu catàleg i la teva documentació (enviaments, devolucions, talles) en una base vectorial. Quan canvies un preu o un estoc, l'agent respon amb la dada nova a l'instant." },
  { q: "En què es diferencia d'un chatbot normal?", a: "Un chatbot normal segueix un guió: si la pregunta se'n surt, es trenca o s'inventa la resposta. Aquest agent està ancorat al teu catàleg real per RAG: respon amb els teus productes, els teus preus i el teu estoc, a la teva web i com a chatbot de WhatsApp. I quan no sap una cosa, ho diu i la passa a una persona en lloc d'improvisar." },
  { q: "En quins idiomes atén?", a: "Respon en l'idioma en què li escriu el client. Útil si vens fora o tens públic en diversos idiomes." },
  { q: "He de canviar de plataforma? Quant triga?", a: "No es migra res: es connecta sobre la teva botiga actual (Shopify, WooCommerce, PrestaShop o Magento) i sobre WhatsApp. El temps de posada en marxa depèn del teu catàleg; el concretem al diagnòstic." },
  { q: "I si una consulta és delicada?", a: "L'agent detecta quan cal escalar (devolucions complexes, incidències o dubtes fora de catàleg) i passa la conversa al teu equip amb el context del que s'ha parlat." },
]

export const AUTOMATIZACION_FAQS_CA: FaqCa[] = [
  { q: "Per què n8n i no Make o Zapier?", a: "Per tres raons que es noten a la factura i en el control. Una: n8n funciona self-hosted al teu servidor, així que les teves comandes i els teus clients no passen pel núvol d'un tercer. Dues: no pagues quota per tasca; amb el volum d'un ecommerce, Make i Zapier es tornen cars just quan més vens. I tres: quan el node no arriba, escric el codi en Node o Python dins del mateix flux, cosa que a les alternatives tancades no pots fer. Dit amb la mateixa honestedat: per a automatitzacions personals senzilles, Make o Zapier ja serveixen; per a l'operativa d'una botiga, no els recomano." },
  { q: "Puc contractar només l'automatització, sense el pack?", a: "Sí. L'automatització es contracta per separat: començo pel procés que més temps et menja i creixem a partir d'aquí. Si després vols trànsit i conversió, el pack Creixement ho uneix tot." },
  { q: "Es trenca si canvio d'ERP o de plataforma?", a: "No et lligo a cap proveïdor. La lògica viu en codi propi dins d'n8n; si canvies d'ERP, adapto els connectors sense refer-ho tot. Sense lock-in." },
  { q: "Qui el manté?", a: "Jo, en retainer. Hi ha fluxos que funcionen pel seu compte: els vigilo, els ajusto i els amplio a mesura que evoluciona la teva botiga. I et deixo el codi, perquè no depenguis de ningú." },
  { q: "On viu n8n?", a: "Self-hosted a la teva infraestructura o a la meva. Sense quota per execució que es dispara quan escales, i sense que les teves dades surtin cap a un SaaS de tercers." },
  { q: "Quant es triga a posar-ho en marxa?", a: "Depèn dels processos. Començo pel que més temps et menja perquè l'estalvi es noti aviat; ho concretem al diagnòstic." },
  { q: "I si el meu cas no és a la llista?", a: "La llista són exemples, no límits. Si és repetitiu, té regles i toca els teus sistemes, gairebé segur que es pot automatitzar. Ho veiem al diagnòstic." },
]

// L'última resposta es mostra amb un enllaç a #medicion sobre el text
// AUDITORIA_LINK_TEXT_CA (vegeu AuditoriaMuiCa).
export const AUDITORIA_LINK_TEXT_CA = "mesurament i seguiment"

export const AUDITORIA_FAQS_CA: FaqCa[] = [
  { q: "És el mateix que el diagnòstic gratuït?", a: "No. El diagnòstic és gratuït i et diu on mirar: les tres o quatre coses que més vendes et costen. L'auditoria és el document complet: tot el que cal aplicar a la teva botiga, en quin ordre i per què, amb SEO i GEO de fitxes i landing, fugues de conversió, disseny CRO i mesurament. El diagnòstic t'orienta; l'auditoria et dona el pla sencer." },
  { q: "He de contractar el pack Creixement després?", a: "No. El document és teu i el pots executar amb el teu equip o amb qui vulguis. Si després decideixes contractar el pack, el pla ja està fet i comences amb avantatge." },
  { q: "Sobre quines plataformes treballes?", a: "Shopify, WooCommerce, PrestaShop, Magento i webs a mida. L'auditoria es fa sobre la teva botiga tal com està, sense migrar res." },
  { q: "Quant costa l'auditoria?", a: "Comença a 500€ i puja segons la mida del catàleg, les plataformes implicades i els idiomes. És un preu tancat que saps abans de començar, i el document és teu tant si l'apliques amb mi com pel teu compte. El tens desglossat més amunt." },
  { q: "Quant triga una auditoria SEO?", a: "Unes dues setmanes, 14 dies, des que tinc els accessos. El rastreig i l'anàlisi de dades són la part ràpida; el que porta temps és revisar la teva botiga com a comprador i creuar el que veig amb el que diuen GA4 i Search Console. La sessió de lliurament l'agendem quan tanquem el document." },
  { q: "Quina diferència hi ha entre auditoria SEO i auditoria tècnica?", a: `L'auditoria tècnica és una part de l'auditoria SEO, no un sinònim. La part tècnica cobreix rastreig, indexació, velocitat, schema i errors de servidor: que Google pugui llegir la teva botiga. L'auditoria completa hi afegeix el que decideix si vens: intenció de cerca de les teves categories, qualitat de les fitxes, visibilitat als cercadors d'IA, les fugues de conversió del funnel i el ${AUDITORIA_LINK_TEXT_CA}. Una botiga pot estar tècnicament perfecta i no vendre res.` },
]
