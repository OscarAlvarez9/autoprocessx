// Preguntes freqüents de /ca/posicionamiento-geo. Versió catalana de
// lib/geoFaqs.ts: un sol origen per al text visible (GeoMuiCa) i per al
// FAQPage JSON-LD (app/(ca)/ca/posicionamiento-geo/page.tsx).

export const GEO_FAQS_CA: { q: string; a: string }[] = [
  {
    q: "Quina diferència hi ha entre GEO i SEO?",
    a: "El SEO treballa perquè la teva web aparegui a la llista de resultats de Google. El GEO treballa perquè els assistents d'IA (ChatGPT, Perplexity, Claude o els AI Overviews de Google) et mencionin i t'enllacin quan responen. Comparteixen base tècnica, però el GEO hi afegeix dues condicions: que els bots d'IA puguin llegir la teva web i que el teu contingut es pugui citar tal qual.",
  },
  {
    q: "Si ja faig SEO, ja estic fent GEO?",
    a: "En part. Una web ben rastrejable i amb bon contingut té mig camí fet. Però el SEO clàssic no revisa si el teu servidor o el teu firewall bloquegen GPTBot, ClaudeBot o PerplexityBot, ni si les teves pàgines donen respostes directes que una IA pugui citar. Això és el que hi afegeix el posicionament GEO.",
  },
  {
    q: "Faig servir Cloudflare. Pot estar bloquejant ChatGPT?",
    a: "Pot ser, i passa sovint: les proteccions anti-bot bloquegen per defecte els rastrejadors d'IA. Ho verifico contra el teu domini real i, si estan bloquejats, es deixa passar els bots legítims d'IA sense abaixar la guàrdia davant del scraping maliciós.",
  },
  {
    q: "Què és llms.txt i el necessito?",
    a: "És un arxiu a l'arrel de la teva web que resumeix, en un format fàcil de llegir per a un model de llenguatge, què fas i quines són les teves pàgines importants. És una proposta d'estàndard, no una garantia de res, així que el tracto com una peça més: el publico juntament amb l'accés de bots, el schema i el contingut citable, que és el que més pesa.",
  },
  {
    q: "Serveix només per a botigues en línia?",
    a: "No. En botigues en línia el focus són les fitxes, les categories i les FAQ de compra. En un negoci local, que la teva fitxa, els teus serveis i la teva zona siguin clars i coherents perquè una IA et pugui recomanar quan algú pregunta per allò que fas a prop seu.",
  },
  {
    q: "Quant costa el posicionament GEO?",
    a: "Depèn del que surti del diagnòstic: no és el mateix una web que només necessita obrir l'accés als bots que una que cal reestructurar. Per això no hi ha tarifa pública: preu tancat després del diagnòstic, que és gratuït i el reps en 24-48 h.",
  },
]
