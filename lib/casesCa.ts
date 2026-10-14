// Versión catalana de los textos visibles de cada caso (tarjeta, ficha corta,
// title y description). Las claves son los slugs de lib/casesEcom.ts y de
// lib/projects.ts. Lo que no aparece aquí (stack, fotos, fechas, visual) es
// igual en los dos idiomas y sale del caso castellano.
//
// Mismas reglas que el castellano: ninguna cifra nueva, todas las de aquí son
// las mismas que en casesEcom.ts / projects.ts.

import type { Caso, ServiceKey } from "./casesEcom"

export type CasoTexto = Partial<
  Pick<Caso, "client" | "sector" | "platform" | "summary" | "reto" | "solucion" | "did" | "didDetail" | "metrics">
>

/** Los casos que vienen de lib/projects montan solución y pasos con su estrategia. */
function estrategia(title: string, steps: { title: string; text: string }[]): Pick<CasoTexto, "solucion" | "did" | "didDetail"> {
  return {
    solucion: `${title}. ${steps[0]?.text ?? ""}`.trim(),
    did: steps.map((s) => s.title),
    didDetail: steps,
  }
}

export const SERVICES_CA: Record<ServiceKey, { label: string; blurb: string }> = {
  crecimiento: { label: "Creixement ecommerce", blurb: "Més trànsit que compra i més visites que converteixen." },
  seo: { label: "SEO i posicionament", blurb: "Trànsit orgànic i visibilitat que porten clients que compren." },
  automatizacion: { label: "Automatització", blurb: "n8n orquestrant l'operativa que et menja el dia." },
  amedida: { label: "Aplicacions a mida", blurb: "Plataformes pròpies quan l'stack estàndard no arriba." },
}

export const casesCa: Record<string, CasoTexto> = {
  // ---------- Creixement ecommerce ----------
  "marea-es": {
    sector: "Rellotgeria · ecommerce",
    summary: "Automatització del catàleg complet i estratègia SEO de venda sobre WooCommerce: 2.293 referències que ara arriben soles del proveïdor a la botiga.",
    reto: "Un catàleg de més de 2.200 referències gestionat a mà des de fulls de càlcul del proveïdor. Les fitxes es creaven una a una i les fotos es pujaven a mà, de manera que les dades que l'equip de producte mantenia al full no arribaven mai a la botiga. A més, els deu filtres de la barra lateral no funcionaven: WooCommerce només filtra per atributs globals i tot el catàleg els tenia com a locals.",
    solucion: "Un ecosistema de 19 automatitzacions a n8n que cobreix tot el cicle de vida del producte, des de l'alta amb descripció i meta generades amb IA fins a les fotos, l'estoc i la publicació controlada. En paral·lel, migració dels atributs a globals amb normalització del vocabulari per deixar els filtres operatius, i feina d'estructura i disseny sobre la mateixa botiga.",
    did: [
      "19 automatitzacions a n8n: alta de producte, imatges, estoc, noms, categories i variants.",
      "Descripció llarga i meta description generades amb IA a partir del full del proveïdor.",
      "Migració d'atributs locals a globals amb normalització del vocabulari: filtres operatius per fi.",
      "Estructura i disseny de la botiga, i sanejament de slugs per tallar la canibalització.",
    ],
    metrics: [
      { value: "3.060", label: "clics des de Google", note: "primera setmana en producció" },
      { value: "13,6 %", label: "CTR mitjà a Search Console", note: "posició mitjana 5,6" },
    ],
  },
  "farmacia-garcia-del-cerro": {
    sector: "Salut i parafarmàcia · ecommerce",
    summary: "Botiga construïda des de zero sobre Shopify que avui ven de manera independent, sostinguda per l'estratègia SEO i un motor de contingut automatitzat.",
    reto: "Una farmàcia amb equip assistencial a temps complet i sense departament de màrqueting. El contingut digital era esporàdic, sense pla editorial ni keywords objectiu, i el trànsit orgànic no creixia.",
    solucion: "Vaig construir un motor de contingut autònom que investiga temes amb volum real, redacta amb to professional sanitari i publica al CMS amb els camps SEO a punt. L'equip només revisa abans de publicar i manté el control editorial.",
    did: [
      "Calendari editorial SEO anual orientat a la intenció de compra.",
      "Pipeline de contingut amb LLM ancorat a dades reals de cerca.",
      "Publicació automatitzada al CMS amb Schema i meta a punt.",
      "Monitoratge continu de posicions amb Search Console.",
    ],
    metrics: [
      { value: "TOP 20", label: "farmàcies d'Espanya", note: "visibilitat orgànica" },
      { value: "+5.000", label: "referències al catàleg", note: "abast nacional" },
    ],
  },
  totfinestra: {
    sector: "Finestres d'alumini a mida · B2C",
    summary: "Web de finestres a mida enfocada a captar i qualificar sol·licituds de pressupost.",
    reto: "Un negoci de finestres a mida on la venda no és una cistella, sinó un pressupost. La web havia de transmetre ofici i convertir la visita en una sol·licitud qualificada.",
    solucion: "Vaig refer la web per deixar clara la proposta (finestres d'alumini a mida) i guiar cap al pressupost, amb SEO local per captar la demanda de la zona. Tot sobre una base ràpida i mesurable.",
    did: [
      "Web enfocada a la sol·licitud de pressupost com a conversió principal.",
      "SEO local per captar la demanda de proximitat.",
      "Base tècnica ràpida i mesurable (Core Web Vitals en verd).",
    ],
    metrics: [
      { value: "+70 %", label: "clients potencials", note: "captació des de la web" },
      { value: "+10 %", label: "facturació anual", note: "primer any amb la web nova" },
    ],
  },

  // ---------- Automatització ----------
  "pelican-catchy-infraestructura-ia": {
    sector: "Màrqueting digital · agència",
    summary: "Arquitectura multiagent que automatitza 8 processos de màrqueting en paral·lel: estratègia, SEO, publicació, tasques i reporting.",
    reto: "Vuit processos manuals desconnectats entre si, amb dades duplicades, retards en el repartiment de tasques i un equip saturat de feina operativa de poc valor.",
    solucion: "Arquitectura d'agents paral·lels a n8n que processen alhora l'estratègia de contingut, les descripcions SEO, la publicació a xarxes, la gestió de tasques a Asana i les notificacions d'estat a l'equip.",
    did: [
      "Mapatge dels 8 processos manuals i de les seves dependències.",
      "Arquitectura multiagent amb fluxos independents que se sincronitzen en punts de control.",
      "Integració de Metricool, Asana i WhatsApp amb els models LLM.",
      "Panell d'estat amb alertes automàtiques davant d'errors o retards.",
    ],
    metrics: [
      { value: "187", label: "nodes en producció", note: "8 workflows, 5 sistemes" },
      { value: "122", label: "pàgines d'estratègia per execució", note: "de la transcripció al Google Doc" },
    ],
  },
  "clinica-de-la-ansiedad-blog-automatizado": {
    sector: "Automatització · blog",
    summary: "Entra una fila del calendari editorial i en surt un article complet a Contentful: text revisat, imatge de capçalera, metadades SEO, categoria i autor.",
    reto: "Una consulta petita no té temps per escriure, i en salut mental el contingut és el que fa créixer la web. El pla editorial tenia 96 articles per a 48 setmanes: impossible de sostenir a mà sense treure hores a la clínica.",
    solucion: "Un workflow a n8n que llegeix el calendari de Google Sheets, encarrega l'article a un redactor (Claude Opus), el passa per un editor (Claude Sonnet), genera la imatge, el munta en el format de Contentful amb les seves FAQ en dades estructurades i marca la fila com a feta. El calendari és l'únic estat del sistema: es pot tornar a llançar tantes vegades com calgui i no duplica mai.",
    did: [
      "Calendari editorial a Google Sheets com a única font de veritat: tema, keywords, estructura i URL.",
      "Dos models amb papers diferents: Claude Opus redacta i Claude Sonnet revisa.",
      "Imatge de capçalera amb gpt-image-1 i pujada a Contentful en cinc passos, amb espera de processament.",
      "Rich Text de Contentful, FAQPage en JSON-LD i meta description ajustada al seu rang.",
    ],
    metrics: [
      { value: "27", label: "nodes al workflow", note: "del calendari a l'entrada a Contentful" },
      { value: "~3 min", label: "per article", note: "redacció, revisió, imatge i publicació" },
    ],
  },

  // ---------- Aplicacions a mida ----------
  "seoscar-os-plataforma-propia": {
    sector: "Producte propi · SaaS intern",
    summary: "Plataforma pròpia que cobreix el cicle complet d'un consultor SEO independent i substitueix vuit subscripcions de 521 $ al mes.",
    reto: "Un consultor que treballa botigues en línia necessita vuit eines per operar: recerca SEO, rastrejador, mesura de visibilitat en IA, prospecció, CRM, facturació espanyola i un lloc on escriure. Són 521,20 $ al mes, però el problema de fons era pitjor: les dades vivien en vuit llocs que no es parlen entre si, de manera que la mateixa botiga existia per duplicat a cada eina.",
    solucion: "Una plataforma interna amb deu seccions organitzades pel cicle del negoci, no pel tipus d'arxiu: captar, lliurar i eines. Cada empresa té una sola fitxa identificada pel seu domini, que reuneix la cerca que la va trobar, la seva qualificació amb evidència, els rastrejos, els correus i les factures.",
    did: [
      "Motor de qualificació de leads en tres capes, amb evidència verificable i llindars editables.",
      "Rastrejador propi, analitzador de keywords i mesurador de visibilitat en respostes d'IA.",
      "Vuit assistents d'IA especialitzats sobre una sola passarel·la, amb eines reals de Search Console.",
      "CRM, agenda i facturació espanyola amb PDF i exportació trimestral.",
    ],
    metrics: [
      { value: "521 $/mes", label: "en subscripcions substituïdes", note: "vuit eines, 6.254 $ l'any" },
      { value: "20.805", label: "línies de codi propi", note: "amb 496 tests automàtics" },
    ],
  },
  "opoai-plataforma-estudio-oposiciones": {
    sector: "EdTech · legal",
    summary: "Plataforma SaaS d'oposicions de Justícia amb tutor jurídic que cita el BOE, i l'estratègia de contingut i GEO que l'està traient de dependre de la seva pròpia marca.",
    reto: "Una categoria que va passar de dos actors a vint en un any, tots amb la mateixa proposta i la mateixa estètica. Després de migrar de domini al juny, Google començava de zero i el 95 % dels clics venien de cercar la marca: la web era una landing de producte, sense res que capturés el que cerca un opositor.",
    solucion: "Plataforma full-stack amb RAG sobre el temari oficial i un tutor que cita la font a cada resposta, més una arquitectura de contingut paral·lela organitzada per cos i intenció de cerca (41 URL), ancorada al BOE i preparada perquè la citin els models de llenguatge.",
    did: [
      "Ingesta i vectorització del temari oficial: 133.889 fragments de 131 temes.",
      "Tutor IA conversacional ancorat, amb citació obligatòria de l'article.",
      "Arquitectura de contingut per cos i intenció, amb 41 URL al sitemap.",
      "Feina de GEO: llms.txt, dades estructurades i rastreig d'IA sense bloquejar.",
    ],
    metrics: [
      { value: "+209 %", label: "impressions en un mes", note: "de 1.314 a 4.066" },
      { value: "765", label: "impressions a AI Search", note: "en 28 dies" },
    ],
  },

  // ---------- SEO i posicionament ----------
  "clinica-de-la-ansiedad": {
    sector: "Salut mental · consulta privada",
    summary: "1 de cada 5 visitants demana cita el primer mes de la nova estratègia. Web nova, contingut, blog automatitzat i mesura de conversions des de zero.",
    reto: "La clínica tenia una web a WordPress que no funcionava com a canal. No estava donada d'alta a Search Console, no tenia analítica i no li arribaven pacients per aquesta via. Per a Google, la clínica gairebé no existia.",
    solucion: "Web nova en React, refeta des de zero i dissenyada per convertir, amb la reserva i el WhatsApp sempre a mà. A sobre, una estratègia de contingut completa amb un blog que publica sol i la mesura de cada clic a \"Reservar\" i a WhatsApp. El primer mes amb l'estratègia assentada, 11 dels 51 visitants van prémer \"Reservar\". I només fa mes i mig que l'estratègia està acabada: el que cal esperar és que continuï creixent els propers mesos.",
    did: [
      "Web nova en React, més ràpida i amb la reserva i el WhatsApp sempre a mà.",
      "Pàgines de servei orientades al que cerquen els pacients i blog amb pla editorial propi.",
      "Blog automatitzat que publica de manera constant sense treure temps a la clínica.",
      "Search Console i mesura de conversions: cada clic a Reservar i a WhatsApp queda registrat.",
    ],
    metrics: [
      { value: "1 de cada 5", label: "visitants prem Reservar", note: "11 de 51 usuaris el primer mes amb l'estratègia assentada. GA4, de setembre a octubre de 2026" },
      { value: "17", label: "clics per demanar cita en un mes", note: "15 a Reservar i 2 a WhatsApp, en una web que abans no portava pacients" },
    ],
  },

  // Casos que vienen de lib/projects (projectToCaso).
  "regalalo-io": {
    sector: "Intel·ligència artificial · posicionament",
    summary: "Vaig digitalitzar i llançar un recomanador de regals basat en IA. Estratègia de prellançament viral i posicionament Top 3 des del primer dia.",
    reto: "El client necessitava més que una web; necessitava un 'cervell' digital. El repte era desenvolupar una IA capaç d'entendre contextos complexos (Gemini AI entrenada en local) i embolcallar-la en una interfície intuïtiva, tot generant tracció de mercat fins i tot abans d'escriure la primera línia de codi.",
    ...estrategia("Desenvolupament IA + prellançament viral", [
      { title: "Entrenament IA en local", text: "Vaig implementar i entrenar models Gemini AI en local per afinar la qualitat de les recomanacions sense costos d'API desorbitats." },
      { title: "Estratègia de prellançament", text: "Vaig dissenyar una campanya d'expectació que va captar 1900 usuaris actius els dos primers dies de vida." },
      { title: "Posicionament immediat", text: "Arquitectura SEO optimitzada per atacar intencions de cerca transaccionals, amb un Top 3 de mitjana des de l'inici." },
    ]),
    metrics: [
      { value: "1.900", label: "Usuaris en 2 dies", note: "Èxit rotund del prellançament" },
      { value: "Top 3", label: "Posició mitjana", note: "SEO efectiu des del primer dia" },
    ],
  },
  "peritando-es": {
    sector: "Estratègia SEO · posicionament",
    summary: "Redisseny estructural i estratègia de continguts per maximitzar el CTR i el posicionament orgànic en el sector pericial.",
    reto: "La web existent era genèrica i no estava enfocada a serveis concrets. Només generaven 2 leads al mes des de la web. Necessitaven una refactorització completa, tant tècnica com de contingut, per posicionar-se en cerques transaccionals de cada tipus de peritatge.",
    ...estrategia("Refactorització integral: tècnica + contingut", [
      { title: "Auditoria tècnica completa", text: "Anàlisi exhaustiva de l'arquitectura web, el rendiment, la indexació i els problemes tècnics que llastaven el posicionament." },
      { title: "Arquitectura de serveis", text: "Reestructuració completa amb landing pages específiques per a cada tipus de peritatge, atacant keywords transaccionals." },
      { title: "Estratègia de contingut", text: "Pla editorial enfocat a resoldre dubtes reals de clients potencials: 'Quant costa un peritatge?', 'Tipus d'informes pericials', etc." },
    ]),
    metrics: [
      { value: "x4", label: "Leads mensuals", note: "De 2 a 8 leads/mes en només 3 mesos" },
      { value: "+45%", label: "Millora del CTR", note: "Optimització de fragments enriquits" },
    ],
  },
  "quad-studios": {
    sector: "SEO local · posicionament",
    summary: "Domini del mercat local amb la creació i l'optimització avançada de la fitxa de negoci per a la captació directa.",
    reto: "Sense una fitxa de Google My Business optimitzada, els clients potencials que cercaven estudis de producció a la seva zona no els trobaven. Necessitaven posicionar-se al Local Pack de Google per captar leads qualificats de la seva àrea d'influència.",
    ...estrategia("Domini de l'ecosistema local de Google", [
      { title: "Creació de la fitxa GMB", text: "Configuració professional de la fitxa de Google My Business amb tota la informació optimitzada, categories precises i atributs rellevants." },
      { title: "Optimització avançada", text: "Estratègia de ressenyes, publicacions periòdiques a GMB, fotos professionals de l'estudi i treballs de motion graphics." },
      { title: "SEO local on-page", text: "Alineació de la web amb senyals locals: NAP coherent, pàgines de servei localitzades i Schema LocalBusiness." },
    ]),
    metrics: [
      { value: "TOP 3", label: "Local Pack", note: "Posició a Google Maps" },
      { value: "+8", label: "Leads/mes", note: "Nous clients potencials cada mes" },
    ],
  },
  bebubbleibiza: {
    sector: "Luxe · posicionament",
    summary: "Estratègia de SEO local per captar clients d'alt nivell a Eivissa a través de Google Business Profile.",
    reto: "En un mercat tan competitiu i estacional com Eivissa, necessitaven dominar les cerques locals a Google Maps per captar clients high-ticket que busquen serveis premium directament des del mòbil.",
    ...estrategia("Posicionament premium al paradís", [
      { title: "Fitxa de Google optimitzada", text: "Creació i optimització completa de la fitxa de Google Business Profile amb fotografies professionals, categories de luxe i atributs premium." },
      { title: "Estratègia de ressenyes", text: "Sistema de captació de ressenyes de clients VIP per construir una prova social d'altíssima qualitat a Google." },
      { title: "Contingut estacional", text: "Publicacions i actualitzacions a GMB planificades segons la temporada turística per maximitzar la visibilitat els mesos clau." },
    ]),
    metrics: [
      { value: "Premium", label: "Qualitat del lead", note: "Captació de perfil high-ticket" },
      { value: "Top 3", label: "Visibilitat a Maps", note: "Cerques locals a Eivissa" },
    ],
  },
  "salvador-mendoza": {
    sector: "Marca personal · posicionament",
    summary: "Potenciant la marca personal i la captació de leads amb una estratègia de SEO local i autoritat de continguts.",
    reto: "Sense fitxa de Google My Business ni presència local optimitzada, en Salvador era invisible per als clients que cercaven els seus serveis a Google. Competia contra empreses consolidades amb marques fortes i pressupostos més grans.",
    ...estrategia("D'invisible a referent local", [
      { title: "Google Business Profile", text: "Creació i optimització completa de la fitxa de negoci amb categories precises, horaris, fotos professionals i una descripció optimitzada." },
      { title: "Marca personal digital", text: "Estratègia de continguts que posiciona en Salvador com a autoritat al seu sector, combinant la fitxa local amb presència a les xarxes." },
      { title: "Ressenyes i reputació", text: "Sistema de sol·licitud de ressenyes a clients satisfets per construir una prova social que converteix visitants en contactes." },
    ]),
    metrics: [
      { value: "Top 3", label: "Posició local", note: "En cerques de serveis a la seva zona" },
      { value: "Autoritat", label: "Marca personal", note: "Reconegut com a referent local" },
    ],
  },
  growmybiss: {
    sector: "Keywords d'IA · posicionament",
    summary: "Creació d'una web completa, estructura i estratègia integral de posicionament per dominar termes d'IA i Growth Marketing.",
    reto: "Partien de zero: sense web, sense posicionament i sense infraestructura digital. Necessitaven crear tot l'ecosistema des de la base (web, arquitectura SEO, estratègia de continguts) i començar a generar trànsit orgànic qualificat ràpidament.",
    ...estrategia("De 0 a 100: construcció de l'ecosistema digital", [
      { title: "Arquitectura web completa", text: "Disseny i desenvolupament de la web des de zero amb una arquitectura d'URL optimitzada per al SEO, estructura de sitges temàtiques i navegació pensada per a la conversió." },
      { title: "Estratègia de keywords d'IA", text: "Recerca exhaustiva de keywords relacionades amb IA, Growth Marketing i automatització. Pla d'atac per posicionar +30 termes estratègics." },
      { title: "Motor de contingut", text: "Creació de clústers de contingut pilar que ataquen keywords transaccionals i informacionals i generen autoritat temàtica progressiva." },
    ]),
    metrics: [
      { value: "+30", label: "Keywords al Top 5", note: "Posicionades a la primera pàgina" },
      { value: "100", label: "Visites/mes", note: "Trànsit orgànic qualificat" },
    ],
  },
  controltemp: {
    sector: "Industrial · posicionament",
    summary: "Refactorització web completa i estratègia de contingut enfocada a serveis industrials específics per a la captació B2B internacional.",
    reto: "La web estava desactualitzada, era genèrica i només generava 2 leads al mes. Necessitaven una refactorització completa, tant tècnica com de contingut, enfocada als serveis industrials específics que oferien, per captar clients B2B a escala nacional i internacional.",
    ...estrategia("Industrialització digital: de local a internacional", [
      { title: "Refactorització web completa", text: "Redisseny tècnic total de la web: nova arquitectura, rendiment optimitzat i disseny professional d'acord amb el sector industrial." },
      { title: "Contingut per servei", text: "Creació de pàgines de servei específiques per a cada solució industrial, atacant keywords transaccionals del sector B2B." },
      { title: "Internacionalització", text: "Estructura multilingüe i optimització per captar mercats internacionals: Espanya, Portugal i Llatinoamèrica." },
    ]),
    metrics: [
      { value: "x4", label: "Leads mensuals", note: "De 2 a 8 leads/mes en 3 mesos" },
      { value: "3", label: "Nous països", note: "Expansió internacional aconseguida" },
    ],
  },
  "dimonte-homelift": {
    sector: "Luxe · posicionament",
    summary: "Estratègia completa de contingut SEO i arquitectura web per posicionar ascensors domèstics de gamma alta.",
    reto: "Competir en un nínxol ultraespecialitzat contra marques internacionals consolidades. Necessitaven una estratègia de contingut SEO i una arquitectura web que transmetés exclusivitat i captés leads high-ticket de qualitat.",
    ...estrategia("Arquitectura premium per a un producte high-ticket", [
      { title: "Arquitectura web de luxe", text: "Disseny de tota l'estructura web pensada per al buyer journey del client d'alta gamma: des de la inspiració fins a la sol·licitud de pressupost personalitzat." },
      { title: "Estratègia de contingut SEO", text: "Creació de continguts que ataquen totes les fases del funnel: comparatives, guies d'instal·lació, galeries de projectes i preguntes freqüents." },
      { title: "Percepció de marca premium", text: "Optimització del disseny visual i de la UX per transmetre la mateixa exclusivitat que el producte físic. Cada píxel comunica qualitat." },
    ]),
    metrics: [
      { value: "Premium", label: "Percepció de marca", note: "Posicionament com a referent de luxe" },
      { value: "+60%", label: "Leads qualificats", note: "Increment de sol·licituds high-ticket" },
    ],
  },
}

/** Title de cada ficha en catalán (≤ 60 caracteres). */
export const CASE_TITLES_CA: Record<string, string> = {
  "bebubbleibiza": "Cas BebubbleIbiza: SEO local de luxe a Eivissa | SEOscar",
  "quad-studios": "Cas Quad Studios: SEO local amb Google Business | SEOscar",
  "peritando-es": "Cas Peritando.es: SEO per al sector pericial | SEOscar",
  "dimonte-homelift": "Cas Dimonte Homelift: SEO per a ascensors | SEOscar",
  "growmybiss": "Cas GrowMyBiss: web i SEO per a termes d'IA | SEOscar",
  "opoai-plataforma-estudio-oposiciones": "Cas OpoAI: SaaS d'oposicions amb IA i GEO | SEOscar",
  "marea-es": "Cas marea.es: Pack Creixement ecommerce | SEOscar",
  "salvador-mendoza": "Cas Salvador Mendoza: SEO de marca personal | SEOscar",
  "regalalo-io": "Cas Regalalo.io: recomanador de regals amb IA | SEOscar",
  "seoscar-os-plataforma-propia": "Cas SEOscar OS: 8 eines SEO en una plataforma",
  "farmacia-garcia-del-cerro": "Cas Farmacia García del Cerro: Shopify des de zero",
  "pelican-catchy-infraestructura-ia": "Cas Pelican Catchy: màrqueting multiagent | SEOscar",
  "totfinestra": "Cas Totfinestra: web de finestres a mida | SEOscar",
  "controltemp": "Cas ControlTemp: SEO B2B industrial | SEOscar",
  "clinica-de-la-ansiedad": "Clínica de la Ansiedad: 1 de cada 5 visites demana cita",
  "clinica-de-la-ansiedad-blog-automatizado": "Clínica de la Ansiedad: del calendari a Contentful amb n8n",
}

/** Meta description de cada ficha en catalán (≤ 155 caracteres). */
export const CASE_DESCRIPTIONS_CA: Record<string, string> = {
  "farmacia-garcia-del-cerro": "Botiga Shopify feta des de zero que avui ven de manera independent gràcies a l'estratègia SEO, el calendari editorial i el seguiment a Search Console.",
  "marea-es": "Pack Creixement ecommerce sobre WooCommerce: estratègia SEO de venda i catàleg de 2.293 referències que arriben soles del proveïdor a la botiga.",
  "opoai-plataforma-estudio-oposiciones": "SaaS d'oposicions de Justícia amb tutor jurídic que cita el BOE, i l'estratègia de contingut i GEO perquè deixi de dependre de la seva marca.",
  "quad-studios": "SEO local per a Quad Studios: creació i optimització avançada de la fitxa de Google Business Profile per captar clients de la seva zona.",
  "growmybiss": "Web completa, arquitectura i estratègia SEO per posicionar GrowMyBiss en cerques d'IA i Growth Marketing.",
  "regalalo-io": "Digitalització i llançament d'un recomanador de regals basat en IA, amb estratègia de prellançament i posicionament des del primer dia.",
  "totfinestra": "Web de finestres d'alumini a mida dissenyada per captar i qualificar sol·licituds de pressupost.",
  "clinica-de-la-ansiedad": "D'una web que no portava pacients a una en què 1 de cada 5 visitants prem Reservar el primer mes. Web nova, contingut i mesura.",
  "clinica-de-la-ansiedad-blog-automatizado": "Workflow a n8n que porta cada fila del calendari editorial a Contentful amb imatge, SEO i autor, i deixa el text a punt per revisar abans de publicar.",
}
