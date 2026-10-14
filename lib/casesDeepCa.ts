// Versió en català de la capa "cas en profunditat" (lib/casesDeep.ts).
// Mateixes claus i mateixa estructura que casosDeep; només canvia el text.
// Rutes d'imatge, URL, href, mides i xifres són idèntiques a l'original.

import type { CasoDeep } from "./casesDeep"

export const casosDeepCa: Record<string, CasoDeep> = {
  "marea-es": {
    logo: "/assets/casos/marea-logo.jpg",
    shot: "/assets/casos/marea-home.png",
    shotCaption: "marea.es en producció.",
    kpis: [
      {
        title: "A Google, primera setmana en producció",
        note: "Search Console, del 7 al 13 de setembre de 2026",
        items: [
          { value: "3.060", label: "clics", note: "trànsit orgànic a la botiga" },
          { value: "22.500", label: "impressions", note: "presència als resultats" },
          { value: "13,6 %", label: "CTR mitjà", note: "d'impressió a visita" },
          { value: "5,6", label: "posició mitjana", note: "primera pàgina" },
        ],
      },
      {
        title: "L'enginyeria que hi ha darrere",
        note: "informe de treball sobre el catàleg",
        items: [
          { value: "19", label: "automatitzacions a n8n", note: "cicle de vida complet del producte" },
          { value: "9.500", label: "escriptures verificades", note: "amb simulació prèvia i rollback" },
          { value: "2.293", label: "referències al catàleg", note: "rellotges, smartwatch i joieria" },
          { value: "0", label: "errors en passades massives", note: "totes les tandes" },
        ],
      },
    ],
    evidencia: [
      {
        src: "/assets/casos/marea-gsc-lanzamiento.png",
        w: 2000,
        h: 1012,
        alt: "Search Console de marea.es del 29 de juny al 13 de setembre de 2026, amb la línia vertical que marca el llançament de la web nova",
        caption: "La línia negra marca el llançament de la web nova i de l'estratègia. Abans, clics i impressions feia dos mesos que estaven plans. Després, les dues corbes pugen alhora. La finestra completa suma 22.500 clics i 189.000 impressions, amb un 11,9 % de CTR i posició mitjana 6,7.",
      },
      {
        src: "/assets/casos/marea-gsc-semana1.png",
        w: 2000,
        h: 785,
        alt: "Search Console de marea.es en la primera setmana: 3,06 mil clics i 22,5 mil impressions",
        caption: "Search Console, primera setmana després de la sortida a producció: 3.060 clics, 22.500 impressions, un 13,6 % de CTR i posició mitjana 5,6.",
      },
      {
        src: "/assets/casos/marea-gsc-ia.png",
        w: 2000,
        h: 771,
        alt: "Impressions de marea.es a les funcions d'IA de la Cerca de Google, del 8 al 14 de setembre de 2026",
        caption: "Primera setmana a AI Search: 3.610 impressions a les respostes generatives de Google. La botiga no només surt al llistat blau, també dins del que respon la IA.",
      },
      {
        src: "/assets/casos/marea-catalogo.png",
        w: 2000,
        h: 1389,
        alt: "Catàleg de rellotges d'home de marea.es amb els filtres operatius",
        caption: "El catàleg en producció, amb els filtres de la barra lateral funcionant sobre 1.174 rellotges.",
      },
    ],
    contexto: [
      "Marea és una marca de rellotges, smartwatches i joieria d'acer i plata amb més de 2.200 referències. El catàleg es gestionava a mà des dels fulls de càlcul del proveïdor, i la web acabava de migrar a producció.",
      "El problema no era la manca de dades, era que les dades no arribaven a la web. Les fitxes es creaven una a una, les fotos es pujaven a mà des de Dropbox, i la informació que l'equip de producte mantenia als sheets no es reflectia a la botiga.",
      "A això s'hi afegia un bloqueig tècnic: el hosting havia vetat permanentment la IP de la instància de n8n al núvol, així que tota l'automatització es va haver de reconstruir contra una instància local.",
    ],
    queHiceIntro:
      "Vaig muntar un ecosistema de 19 automatitzacions a n8n que cobreix el cicle de vida complet d'un producte, des que el proveïdor el posa al seu full de càlcul fins que està publicat a la botiga amb fotos, categories, estoc i SEO. A més de la feina d'estructura i disseny sobre la mateixa web. Aquests són els sis circuits.",
    capitulos: [
      {
        n: "01",
        title: "Alta de producte",
        body: "Tres circuits de càrrega massiva (rellotges, smartwatches, joieria) que llegeixen el sheet del proveïdor, comproven si la referència ja existeix, generen la descripció llarga i la meta description amb IA, calculen les categories segons gènere, tipus, material i col·lecció, creen el producte en esborrany i retornen l'ID al sheet.",
      },
      {
        n: "02",
        title: "Imatges",
        body: "Un circuit que creua l'EAN de cada producte amb Dropbox, descarrega les fotos, les puja a la biblioteca de WordPress i les assigna en ordre. Només actua sobre productes sense fotos, així que és idempotent: es pot llançar mil vegades sense duplicar res.",
      },
      {
        n: "03",
        title: "Publicació controlada",
        body: "Un workflow que només treu d'esborrany els productes que ja tenen imatges, i acotat per llista d'ID. No publica mai res per accident.",
      },
      {
        n: "04",
        title: "Estoc",
        body: "Sincronització des del sheet de producte amb un llindar de reserva configurable, per poder guardar unitats per a la botiga física.",
      },
      {
        n: "05",
        title: "Noms, categories i variants",
        body: "Circuits per mantenir el nom literal del sheet, reclassificar referències quan el proveïdor canvia de criteri, i sincronitzar la categoria Novetats de manera bidireccional.",
      },
      {
        n: "06",
        title: "SEO on page",
        body: "Generació de meta title i meta description amb Rank Math, a més de la feina d'estructura i disseny sobre la mateixa botiga.",
      },
    ],
    verificado: {
      intro:
        "Prop de 9.500 escriptures verificades sobre el catàleg, totes amb simulació prèvia, CSV de rollback i verificació posterior contra la botiga.",
      filas: [
        { value: "2.144", label: "noms alineats amb el sheet", note: "zero discrepàncies" },
        { value: "910", label: "productes amb inventari real", note: "segona passada: zero canvis pendents" },
        { value: "2.290", label: "productes amb el seu EAN al camp natiu", note: "identificables per a Google Shopping i assistents d'IA" },
        { value: "23", label: "rellotges nous publicats en un sol dia", note: "amb fotos, categories i descripcions" },
        { value: "285", label: "grups de variacions vinculades", note: "les variants de color es veuen com a miniatures" },
      ],
      cierre: "Zero errors en totes les passades massives.",
    },
    tecnico: {
      title: "La troballa que ningú no havia vist",
      body: [
        "La web tenia deu filtres configurats a la barra lateral (gènere, tipus de rellotge, material, colors, resistència a l'aigua) i cap no funcionava.",
        "El motiu: WooCommerce només pot filtrar per atributs globals, i els 2.200 productes tenien les seves característiques com a atributs locals, que no apareixen a cap filtre. El filtre de Gènere oferia 22 rellotges quan n'hi havia gairebé mil. Els clients no podien filtrar res.",
        "Es van migrar amb normalització de vocabulari, que era la meitat de la feina: el sheet tenia \"5 ATM\" i \"5 ATM.\" com a valors diferents, 47 colors d'esfera incloent-hi errates, i materials amb la traducció anglesa enganxada.",
      ],
      tabla: [
        { label: "Filtres operatius en rellotges", antes: "0 de 10", despues: "7 sobre 1.174 productes" },
        { label: "Filtres operatius en joieria", antes: "0 de 10", despues: "5 sobre 1.038 productes" },
        { label: "Valors de color", antes: "47 i 53 variants", despues: "paletes de 17 i 18" },
        { label: "Mides de diàmetre", antes: "51 mides soltes", despues: "4 rangs" },
      ],
    },
    hallazgos: {
      title: "El que va aparèixer sense buscar-ho",
      intro: "Treballar amb el catàleg sencer va destapar problemes que ningú no havia detectat.",
      items: [
        {
          value: "997",
          title: "productes que comparteixen nom",
          body: "261 noms repetits, i 699 casos entre famílies completament diferents: 53 productes anomenats exactament \"reloj de mujer con correa de acero y esfera plateada\". Contingut duplicat per a Google i un client que no els pot distingir.",
        },
        {
          value: "142",
          title: "slugs amb sufix de duplicat",
          body: "L'auditoria n'havia detectat 9. L'escombratge complet en va trobar 142, i va canviar el diagnòstic: els SKU eren diferents, així que no hi havia ni un sol duplicat real per redirigir. Eren referències diferents amb el mateix nom, i la solució va ser posar la referència a l'slug, amb el 301 automàtic de WordPress.",
        },
        {
          value: "10",
          title: "files amb dades corrompudes",
          body: "Deu files del sheet tenien dues columnes entrellaçades lletra a lletra: \"rMuboysquetón\" era \"ruby\" més \"Mosquetón\" alternant caràcters, per un desfasament de columnes en importar. Es van recuperar buscant el terme com a subseqüència.",
        },
        {
          value: "1",
          title: "duplicat que va confirmar el mateix WooCommerce",
          body: "Un anell tenia dues fitxes, una amb tres variacions que compartien el mateix SKU. En omplir els EAN, WooCommerce va rebutjar el duplicat per violar la unicitat del codi de barres. El sistema va donar la prova que faltava.",
        },
        {
          value: "2.293",
          title: "fitxes sense ni un sol encapçalament",
          body: "Cap producte no té un H2 a la descripció, i les 50 categories no tenen ni una paraula de text. Els dos únics H2 de la web són el títol del popup de newsletter, duplicat. Diagnosticat i amb la solució preparada.",
        },
      ],
    },
    cta: {
      title: "Això és creixement ecommerce fet per dins.",
      body: "Catàleg que arriba sol del proveïdor a la botiga, filtres que funcionen i fitxes que Google entén. Sobre la teva plataforma actual, sense migrar res.",
      label: "Veure el pack Creixement",
      href: "/servicios/crecimiento-ecommerce",
    },
    metodo: {
      title: "Com es va treballar",
      intro: "Tres regles expliquen el zero d'errors.",
      reglas: [
        {
          title: "Simulació abans d'escriure",
          body: "Tota passada massiva s'executa primer en mode lectura i produeix un CSV amb el que canviaria. Es revisa, i només després s'escriu.",
        },
        {
          title: "Rollback sempre",
          body: "Abans de cada escriptura es desa l'estat anterior en CSV. Cap operació no és irreversible.",
        },
        {
          title: "Ritme respectuós amb el hosting",
          body: "Lots de 10 peticions cada 8 segons, timeout de 90 segons, un sol reintent i aturada en sec si alguna cosa falla dues vegades. Aquest ritme es va calibrar mesurant: amb lots de 25 seguits el servidor retornava 503 i es perdien escriptures en silenci.",
        },
      ],
    },
  },
  "opoai-plataforma-estudio-oposiciones": {
    shot: "/assets/casos/opoai-home.png",
    shotCaption: "opoai.ai en producció.",
    kpis: [
      {
        title: "Creixement orgànic en un mes",
        note: "Search Console, del 17 de jul. al 15 d'ag. davant del 16 d'ag. al 14 de set. de 2026",
        items: [
          { value: "+112 %", label: "clics orgànics", note: "de 56 a 119" },
          { value: "+209 %", label: "impressions", note: "d'1.314 a 4.066" },
          { value: "x5", label: "clics a pàgines de contingut", note: "de 12 a 65" },
          { value: "13-16", label: "posició mitjana", note: "venia de 25-35 al juliol" },
        ],
      },
      {
        title: "La plataforma per dins",
        note: "dades de producte a 16 de setembre de 2026",
        items: [
          { value: "133.889", label: "fragments del temari indexats", note: "131 temes oficials, 3 cossos" },
          { value: "10.419", label: "preguntes d'exàmens reals", note: "base pròpia, no generada" },
          { value: "8.988", label: "preguntes contestades", note: "per opositors des del llançament" },
          { value: "4.169", label: "converses amb el tutor", note: "la IA cita l'article, no improvisa" },
        ],
      },
    ],
    evidencia: [
      {
        src: "/assets/casos/opoai-gsc-total.png",
        w: 2000,
        h: 791,
        alt: "Search Console d'opoai.ai des del canvi de domini: 216 clics i 6,47 mil impressions",
        caption: "Des del canvi de domini (15 de juny) fins al 13 de setembre: 216 clics i 6.470 impressions. La corba comença plana perquè Google comença de zero amb el domini nou, i s'enlaira a partir d'agost.",
      },
      {
        src: "/assets/casos/opoai-gsc-mes.png",
        w: 2000,
        h: 765,
        alt: "Search Console d'opoai.ai en els darrers 28 dies: 114 clics i 3,92 mil impressions",
        caption: "Els darrers 28 dies concentren 114 d'aquests 216 clics i 3.920 de les 6.470 impressions. Més de la meitat de tot l'històric del domini, en un sol mes.",
      },
      {
        src: "/assets/casos/opoai-ai-28dias.png",
        w: 2000,
        h: 776,
        alt: "Impressions d'opoai.ai a AI Search durant 28 dies: 765",
        caption: "765 impressions a AI Search en 28 dies. Google cita OpoAI dins de converses: a Search Console hi apareixen torns de xat, no cerques, del tipus \"cuándo se abre el plazo\" o \"cuánto cuesta al mes\".",
      },
      {
        src: "/assets/casos/opoai-ai-total.png",
        w: 2000,
        h: 766,
        alt: "Impressions acumulades d'opoai.ai a AI Search des de juny: 1,05 mil",
        caption: "La mateixa mètrica des de juny: 1.050 impressions acumulades a AI Search, gairebé totes d'agost endavant. És la corba que deixa veure que la feina de GEO està funcionant.",
      },
    ],
    contexto: [
      "OpoAI és una plataforma de preparació d'oposicions de Justícia amb un tutor jurídic que cita l'article exacte del BOE, banc de preguntes oficials, simulacres amb la penalització real, flashcards i planificador.",
      "Competeix en una categoria que ha passat de dos actors a vint en un any, la majoria amb la mateixa proposta (\"IA per a oposicions\") i la mateixa estètica. El projecte va arrencar el març de 2026 i al juny va migrar al domini definitiu, opoai.ai.",
      "En aquell moment el trànsit orgànic era gairebé tot de marca: de les 25 consultes amb clics del domini antic, 5 eren variants d'\"opoai\" i sumaven el 95 % dels clics. La web era una landing de producte, sense res que capturés el que busca un opositor.",
    ],
    queHiceIntro:
      "Vaig construir una estructura paral·lela a la web de producte, organitzada pel que busca un opositor abans de decidir com preparar l'oposició. Quatre decisions, 41 URL, i un enfocament de contingut pensat alhora per a Google i per als models de llenguatge.",
    capitulos: [
      {
        n: "01",
        title: "Arquitectura per cos i per intenció",
        body: "En lloc d'organitzar la web al voltant de les funcions del producte (tutor, tests, flashcards), la vaig organitzar al voltant de la intenció de cerca. Cada cos té el seu clúster: la pàgina del cos per a \"oposiciones X\", el seu temari per a \"temario X 2026\", el seu sou per a \"cuánto cobra un X\", i les pàgines de recursos per a les preguntes concretes de l'any de convocatòria: data d'examen, nota de tall, penalització, estructura de l'examen.",
      },
      {
        n: "02",
        title: "Contingut ancorat a la font legal",
        body: "Cada pàgina de temari i de sou porta entre 1.000 i 1.300 paraules, esquema de preguntes i respostes, referència a l'ordre de convocatòria concreta i enllaços creuats entre els tres cossos. Tota dada remet al BOE, a l'ordre o als Pressupostos Generals. És la mateixa promesa que fa la IA del producte, aplicada al SEO.",
      },
      {
        n: "03",
        title: "Preparar la web perquè la citin els models",
        body: "Vaig publicar un llms.txt amb la descripció estructurada de la plataforma i els seus modes, i dades estructurades d'Organization, SoftwareApplication, Product, FAQPage i EducationalOrganization. El robots.txt no bloqueja cap rastrejador d'IA. El resultat és mesurable: Google cita OpoAI dins de converses d'AI Mode, en posicions de l'1 al 10 de les fonts.",
      },
      {
        n: "04",
        title: "La campanya de producte com a ham de cerca",
        body: "Del 25 d'agost al 3 d'octubre, data de l'examen de Justícia, la plataforma és gratuïta. Vaig reescriure la home, el title i les pàgines de producte al voltant d'aquesta data, amb compte enrere i sense targeta. Una campanya comercial convertida en argument de cerca per al mes en què tothom busca.",
      },
      {
        n: "05",
        title: "Higiene tècnica com a requisit previ",
        body: "Migració de domini amb redirecció global, sitemap únic amb les 41 URL, canonicals i propietat de domini a Search Console. Sense això, el contingut no hauria tingut on recolzar-se: el domini nou començava de zero i calia consolidar tots els senyals com més aviat millor.",
      },
    ],
    verificado: {
      intro:
        "Pàgines que han entrat a primera i segona pàgina sense ni un sol enllaç extern, a 17 de setembre de 2026.",
      filas: [
        { value: "17", label: "Temari de Tramitació Processal", note: "posició mitjana" },
        { value: "17", label: "Guia de temaris", note: "posició mitjana" },
        { value: "22", label: "Sou de Gestió Processal", note: "posició mitjana" },
        { value: "24", label: "Temari d'Auxili Judicial", note: "404 impressions en 14 dies" },
        { value: "2", label: "Consulta de marca \"opoai\"", note: "43 % dels clics identificats" },
      ],
      cierre: "La dependència de marca ha baixat del 95 % al 60 % en tres mesos.",
    },
    tecnico: {
      title: "El que va canviar en tres mesos",
      body: [
        "El domini nou partia de zero al juny: Google oblida l'antic i cal reconstruir tots els senyals. Per això juny i juliol tenen posicions dolentes encara que el trànsit ja creixia.",
        "A partir d'aquí, el que es mou no és una mètrica solta, és el conjunt: les pàgines informatives entren a l'índex, guanyen posició i comencen a restar pes a la marca.",
        "Les consultes amb volum ja són al radar: \"temario auxilio judicial\" (246 impressions), \"temario gestión procesal\" (114), \"temario tramitación procesal 2026\" (94), \"gestor procesal sueldo\" (52). Són en posicions on gairebé ningú no fa clic encara. Quan pugin, els clics es multipliquen sense tocar res més.",
      ],
      tabla: [
        { label: "Dependència de la marca", antes: "95 % dels clics", despues: "60 %" },
        { label: "Posició mitjana del domini nou", antes: "~50 al juny", despues: "~15 al setembre" },
        { label: "Impressions al dia", antes: "44 al juliol", despues: "174 al setembre" },
        { label: "Clics a pàgines de contingut", antes: "12 al mes", despues: "65 al mes" },
      ],
    },
    hallazgos: {
      title: "El que va aparèixer revisant",
      intro: "La revisió quinzenal és la que troba els errors que cap eina no assenyala.",
      items: [
        {
          value: "650",
          title: "impressions amb el nom equivocat",
          body: "Dues pàgines estaven optimitzades per a \"Auxiliar Judicial\" quan el cos es diu \"Auxilio Judicial\". Són dues coses diferents i l'opositor busca la segona. Mitja hora de correcció sobre més de mil impressions mensuals.",
        },
        {
          value: "1",
          title: "error de plantilla als titles de sou",
          body: "Una errada heretada de la plantilla afectava el title de totes les pàgines de sou alhora. Detectada en la mateixa revisió i corregida en bloc.",
        },
        {
          value: "62 %",
          title: "d'un mes ho va fer un sol usuari",
          body: "El juliol suma 6.657 preguntes contestades, però 4.101 són d'una sola persona. Sense aquest usuari, el juliol són 2.556, que continua sent el millor mes amb diferència. Ho explico perquè la xifra bruta, sola, enganya.",
        },
        {
          value: "3",
          title: "registres arribats des de ChatGPT",
          body: "Al setembre van entrar tres altes amb referència de chatgpt.com. No és trànsit de Google: és un model recomanant la plataforma directament. És exactament el que persegueix la feina de llms.txt i dades estructurades.",
        },
      ],
    },
    cta: {
      title: "I si també et citen les respostes d'IA?",
      body: "Aquest cas és contingut ancorat a la font i una web preparada perquè la llegeixin els models. És exactament el que mesura una auditoria de SEO i GEO.",
      label: "Veure l'auditoria SEO i GEO",
      href: "/servicios/auditoria-seo-geo",
    },
    metodo: {
      title: "Com es treballa això",
      intro: "Una sola rutina explica les troballes de dalt.",
      reglas: [
        {
          title: "Revisió quinzenal, per pàgina i per consulta",
          body: "Cada quinze dies comparo períodes a Search Console pàgina a pàgina i consulta a consulta, mai per posició mitjana global. La mitjana global barreja pàgines noves amb velles i amaga tant les pèrdues reals com les millores.",
        },
        {
          title: "Separar marca de no marca sempre",
          body: "Mirar els clics totals d'un producte amb marca pròpia dona una foto falsa. Comptant la marca a part es veu l'única cosa que importa a un any vista: si el contingut informatiu comença a portar gent que no et coneixia.",
        },
        {
          title: "Publicar abans de necessitar-ho",
          body: "Les URL dels cossos nous es publiquen dues setmanes abans del rellançament perquè Google les tingui indexades el dia que importa. L'antiguitat d'indexació no es pot comprar el mateix dia.",
        },
      ],
    },
  },
  "pelican-catchy-infraestructura-ia": {
    shot: "/assets/casos/pelican-estrategia.png",
    shotFrame: "plain",
    shotTag: "n8n · estratègia anual · 112 nodes",
    shotCaption: "El workflow que converteix les transcripcions de l'onboarding en el document d'estratègia anual.",
    kpis: [
      {
        title: "La infraestructura, en xifres",
        note: "instància pròpia del client a n8n cloud",
        items: [
          { value: "8", label: "workflows en producció", note: "cinc sistemes d'agència" },
          { value: "187", label: "nodes orquestrats", note: "112 només a la peça central" },
          { value: "12", label: "serveis integrats", note: "d'Anthropic a Meta WhatsApp" },
          { value: "122", label: "pàgines per execució", note: "el document d'estratègia anual" },
        ],
      },
      {
        title: "La peça central: el generador d'estratègia",
        note: "de les transcripcions de l'onboarding al Google Doc acabat",
        items: [
          { value: "35.000", label: "paraules objectiu", note: "repartides en cinc seccions" },
          { value: "5", label: "editors independents", note: "un per secció, més un editor en cap" },
          { value: "32.000", label: "tokens de sortida per editor", note: "revisió completa, no per trossos" },
          { value: "3", label: "branques en paral·lel", note: "briefing, competència i autoritat de domini" },
        ],
      },
    ],
    evidenciaTitulo: "Els sistemes, per dins",
    evidenciaIntro:
      "Els workflows reals a la instància del client. Es poden obrir a mida completa per llegir-los node a node.",
    evidencia: [
      {
        src: "/assets/casos/pelican-estrategia.png",
        w: 2156,
        h: 570,
        alt: "Workflow de n8n del generador d'estratègia anual de Pelican Catchy, amb 112 nodes",
        caption: "El generador d'estratègia anual. Arrenca llegint la carpeta de transcripcions, obre tres branques en paral·lel (Claude per al briefing, Perplexity per a la competència, DataForSEO per a l'autoritat), les uneix en un Merge real, escriu secció a secció en bucle i passa cadascuna pel seu editor abans d'assemblar el Google Doc.",
      },
      {
        src: "/assets/casos/pelican-alertas.png",
        w: 2230,
        h: 780,
        alt: "Workflow de l'alerta setmanal de projectes de Pelican Catchy a n8n",
        caption: "L'alerta setmanal, els dijous a les nou. L'API d'Asana no retorna la jerarquia completa en una crida, així que el flux la reconstrueix per nivells: portfolio, client, projecte i tasca, aplanant a cada salt. Si un client no té projectes en curs, la branca mor sense trencar l'execució.",
      },
      {
        src: "/assets/casos/pelican-recaps-drive.png",
        w: 2220,
        h: 570,
        alt: "Workflow de recaps de reunió amb creació de tasques a Asana",
        caption: "Els recaps de reunió. Llegeix els documents des de Drive, retorna resum executiu, punts clau i accions, i converteix cada acció en una tasca real al tauler d'Asana, amb responsable i document d'origen a les notes.",
      },
      {
        src: "/assets/casos/pelican-redes.png",
        w: 2198,
        h: 648,
        alt: "Workflow de generació de copys de LinkedIn sobre Metricool",
        caption: "El flux de xarxes. Descarrega de Metricool els posts ja programats que encara no tenen text, genera el copy de LinkedIn amb el to de marca definit a la configuració i l'escriu de tornada al calendari de publicació.",
      },
    ],
    contexto: [
      "Pelican Catchy és una agència de comunicació especialitzada en sectors crítics: cadena de subministrament, seguretat física i electrònica, fintech i robòtica industrial.",
      "La seva feina vivia repartida en quatre eines que no es parlaven entre si. Asana per als projectes, Gmail per als clients, Google Drive per als documents i Metricool per a les xarxes. Cada entregable estratègic, cada recap de reunió i cada peça de contingut sortia d'hores de feina manual d'un equip petit.",
      "L'encàrrec no va ser connectar aplicacions. Va ser convertir cinc processos d'agència en sistemes que s'executen sols i deixen el resultat acabat allà on algú l'obrirà.",
    ],
    queHiceIntro:
      "Cinc sistemes sobre la instància pròpia del client, vuit workflows i 187 nodes. Cap no demana entrar a n8n a recollir res: el resultat apareix a Drive, a Gmail, a Asana o a Metricool, que és on l'equip ja treballa.",
    capitulos: [
      {
        n: "01",
        title: "Generador d'estratègia anual",
        body: "Tres workflows i 112 nodes. A partir de les transcripcions de la reunió d'onboarding produeix el document d'estratègia anual: cinc seccions macro i unes 122 pàgines. Llegeix una carpeta de Drive acceptant Google Docs, Word i PDF amb una extracció diferent per format, obre tres branques en paral·lel, enriqueix el briefing amb la recerca, escriu secció a secció en bucle i passa cadascuna pel seu editor abans de crear el Google Doc a la carpeta del client.",
      },
      {
        n: "02",
        title: "Recaps de reunió amb tasques a Asana",
        body: "Vint nodes. Llegeix els documents d'una reunió i retorna resum executiu, punts clau, accions amb responsable i propers passos. Surt per correu, i cada acció es converteix en una tasca real al tauler del client. Els Word no es poden llegir directament, així que el flux els copia com a Google Doc temporal, n'exporta el text i esborra la còpia.",
      },
      {
        n: "03",
        title: "Alerta setmanal de projectes",
        body: "Onze nodes amb cron els dijous a les nou. Recorre els dos portfolios de l'agència, baixa a cada client i a cada projecte en curs, recull les tasques i envia un resum agrupat a l'equip. Reconstrueix per nivells una jerarquia que l'API d'Asana no retorna sencera.",
      },
      {
        n: "04",
        title: "Triatge de correu i agenda",
        body: "Tretze nodes amb trigger de Gmail. Cada correu entrant passa per Claude, que retorna prioritat, resum, acció requerida, si el remitent és client i si el missatge conté un esdeveniment amb data. El que és urgent s'avisa per WhatsApp amb l'API de Meta, els esdeveniments es creen a Google Calendar, i tot queda registrat en un full de càlcul per poder auditar què va classificar el model.",
      },
      {
        n: "05",
        title: "Contingut: blog, premsa i xarxes",
        body: "Dos workflows i 31 nodes. El primer agafa la següent fila pendent del calendari editorial, Perplexity aporta dades fresques del sector, Claude escriu l'article, gpt-image-1 genera la capçalera i tot es compon amb la plantilla corporativa. El segon treballa sobre Metricool generant els copys de LinkedIn amb el to de marca.",
      },
    ],
    verificado: {
      intro:
        "El que produeix una sola execució del generador d'estratègia, amb l'objectiu de paraules fixat a la configuració per a cada secció.",
      filas: [
        { value: "9.000", label: "Mercat i posicionament", note: "paraules objectiu" },
        { value: "6.000", label: "Caracterització sectorial", note: "paraules objectiu" },
        { value: "4.500", label: "Diagnòstic de comunicació", note: "paraules objectiu" },
        { value: "12.000", label: "Pla de comunicació", note: "paraules objectiu" },
        { value: "3.500", label: "Conclusions i recomanacions", note: "paraules objectiu" },
      ],
      cierre: "Unes 122 pàgines assemblades i lliurades com a Google Doc a la carpeta del client.",
    },
    tecnico: {
      title: "L'errada que s'enduia dues branques per davant",
      body: [
        "El generador obre tres branques en paral·lel: Claude extreu el briefing, Perplexity investiga els competidors i DataForSEO en mesura l'autoritat de domini. Al principi el punt d'unió era un node Code.",
        "n8n executava aquest Code tan bon punt arribava la primera branca, i les altres dues es perdien en silenci. Sense error, sense avís: el document sortia amb un terç de la recerca. Un node Merge espera les tres entrades, un Code no.",
        "Aquest tipus d'obstacle és el que decideix si un sistema funciona amb els fitxers i les API que hi ha de debò, i no només a la demo.",
      ],
      tabla: [
        { label: "Unió de les tres branques de recerca", antes: "node Code, s'executa amb la primera", despues: "node Merge, espera les tres" },
        { label: "Fitxers Word a Drive", antes: "il·legibles directament", despues: "còpia temporal a Google Doc i esborrat" },
        { label: "Jerarquia de portfolios a Asana", antes: "no ve en una sola crida", despues: "reconstruïda per nivells" },
        { label: "Límit d'execució de n8n cloud", antes: "un workflow que no hi cabia", despues: "dos encadenats, capítols 1-3 i 4-6" },
      ],
    },
    cta: {
      title: "La teva operativa, en sistemes que s'executen sols.",
      body: "Vuit workflows que converteixen cinc processos d'agència en feina acabada, lliurada allà on l'equip ja treballa. Això és el que fa el servei d'automatització.",
      label: "Veure automatitzacions",
      href: "/servicios/automatizaciones",
    },
    metodo: {
      title: "Decisions que sostenen el sistema",
      intro: "Sis criteris que expliquen per què això continua funcionant sense que ningú ho vigili.",
      reglas: [
        {
          title: "Claude per HTTP Request, no per node natiu",
          body: "Control total de model, tokens i format de sortida a cada pas, i llibertat per canviar de versió sense esperar que s'actualitzi el node.",
        },
        {
          title: "Un model per tasca",
          body: "Opus on cal extreure i redactar, Sonnet on cal editar i classificar. El cost segueix la dificultat real del pas, no a l'inrevés.",
        },
        {
          title: "Sortida en JSON amb parseig defensiu",
          body: "Cada node de parseig tolera blocs markdown i respostes parcials, així que una resposta estranya degrada el resultat en lloc de tombar l'execució sencera.",
        },
        {
          title: "Tota la configuració en un sol node",
          body: "Client, carpeta, to i estructura del document es canvien en un sol lloc. Donar d'alta un client nou no obliga a tocar la lògica.",
        },
        {
          title: "Estat a staticData durant els bucles",
          body: "Les seccions escrites s'acumulen entre iteracions sense dependre de l'ordre d'arribada, que en un bucle llarg mai no està garantit.",
        },
        {
          title: "Lliurament a l'eina de l'equip",
          body: "El resultat apareix a Drive, Gmail, Asana o Metricool. Ningú no entra a n8n a recollir la seva feina, que és la diferència entre una automatització i un sistema que es fa servir.",
        },
      ],
    },
  },
  "seoscar-os-plataforma-propia": {
    shot: "/assets/casos/seoscaros-prospeccion.png",
    shotFrame: "plain",
    shotTag: "SEOscar OS · prospecció",
    shotCaption: "La cua de leads qualificats, amb la seva puntuació i la seva evidència.",
    kpis: [
      {
        title: "Vuit subscripcions, substituïdes",
        note: "preus de llista a setembre de 2026",
        items: [
          { value: "521 $", label: "al mes que es deixen de pagar", note: "6.254 $ l'any" },
          { value: "8", label: "eines en una de sola", note: "de Semrush a Holded" },
          { value: "8,60 $", label: "gastats en dades", note: "en set setmanes d'ús real" },
          { value: "0 $", label: "de quota fixa", note: "el cost segueix la feina feta" },
        ],
      },
      {
        title: "El que hi ha construït",
        note: "en ús real i en evolució contínua des d'agost de 2026",
        items: [
          { value: "20.805", label: "línies de codi propi", note: "escrites i mantingudes en solitari" },
          { value: "496", label: "tests automàtics", note: "en 45 fitxers" },
          { value: "51", label: "taules a la base de dades", note: "37 migracions versionades" },
          { value: "49", label: "pantalles", note: "i 35 rutes d'API" },
        ],
      },
    ],
    evidenciaTitulo: "La plataforma, per dins",
    evidenciaIntro:
      "Captures de l'entorn real en ús. Els noms de clients estan difuminats expressament.",
    evidencia: [
      {
        src: "/assets/casos/seoscaros-prospeccion.png",
        w: 2000,
        h: 1144,
        alt: "Pantalla de prospecció de SEOscar OS amb la cua de leads qualificats",
        caption: "Prospecció. La cua només admet leads de 70 punts o més, i cada execució mostra la despesa del dia davant del límit configurat. El sistema produeix la cua i l'evidència, però no envia res: el correu l'escriu una persona.",
      },
      {
        src: "/assets/casos/seoscaros-analisis.png",
        w: 2000,
        h: 1145,
        alt: "Pantalla d'anàlisi SEO de SEOscar OS amb el rastrejador propi",
        caption: "Anàlisi SEO. Rastrejador propi, analitzador de keywords, trànsit estimat i mesurador de visibilitat a les respostes d'IA. Aquestes quatre pestanyes són les que substitueixen Screaming Frog, mitja suite de recerca i l'eina de 95 $ al mes.",
      },
      {
        src: "/assets/casos/seoscaros-agentes.png",
        w: 2000,
        h: 1138,
        alt: "Pantalla d'agents d'IA de SEOscar OS",
        caption: "Agents. Vuit assistents especialitzats, cadascun amb la seva instrucció, el seu model preferit i el seu límit de tokens. A baix a la dreta es veu el cost per milió de tokens del model actiu, i a dalt el saldo restant.",
      },
      {
        src: "/assets/casos/seoscaros-facturacion.png",
        w: 2000,
        h: 1145,
        alt: "Facturació trimestral de SEOscar OS",
        caption: "Facturació. Trimestres amb base, IVA, IRPF i exportació en CSV, que és el que substitueix el programa de facturació espanyola. Els noms de client i els imports estan pixelats.",
      },
      {
        src: "/assets/casos/seoscaros-propuestas.png",
        w: 2000,
        h: 1141,
        alt: "Pantalla de propostes comercials de SEOscar OS",
        caption: "Propostes. Quatre plantilles ja redactades que surten en PDF descarregable. Juntament amb clients, agenda i facturació espanyola, és la part que substitueix el CRM i el programa de facturació.",
      },
    ],
    galeriaIntro: "La resta de la plataforma, secció a secció.",
    galeria: [
      {
        src: "/assets/casos/seoscaros-agenda.png",
        w: 2000,
        h: 1132,
        alt: "Tauler d'agenda de SEOscar OS amb tasques per columna",
        caption: "Agenda. Tauler per estat amb prioritat i hores estimades, filtrable per client.",
      },
      {
        src: "/assets/casos/seoscaros-calendario.png",
        w: 2000,
        h: 1149,
        alt: "Vista de calendari de l'agenda de SEOscar OS",
        caption: "La mateixa agenda en calendari, amb les tasques publicades a Google Calendar.",
      },
      {
        src: "/assets/casos/seoscaros-facturacion.png",
        w: 2000,
        h: 1145,
        alt: "Facturació trimestral de SEOscar OS amb exportació CSV",
        caption: "Facturació espanyola per trimestres, amb IVA, retenció d'IRPF i exportació en CSV.",
      },
      {
        src: "/assets/casos/seoscaros-factura-nueva.png",
        w: 2000,
        h: 1143,
        alt: "Formulari de factura nova de SEOscar OS",
        caption: "Alta de factura amb conceptes, IVA al 21 % i retenció configurable.",
      },
      {
        src: "/assets/casos/seoscaros-correos.png",
        w: 2000,
        h: 1135,
        alt: "Pantalla de correus de SEOscar OS amb comprovació de lliurabilitat",
        caption: "Correus des del Gmail propi, amb comprovació d'SPF, DKIM i DMARC abans d'enviar.",
      },
      {
        src: "/assets/casos/seoscaros-archivo.png",
        w: 2000,
        h: 1131,
        alt: "Arxiu de notes i documents de SEOscar OS",
        caption: "Arxiu de notes i documents per carpetes, el que substitueix Notion.",
      },
      {
        src: "/assets/casos/seoscaros-hoja.png",
        w: 2000,
        h: 1140,
        alt: "Editor de full de càlcul de SEOscar OS",
        caption: "Fulls de càlcul propis: s'enganxa una taula des d'Excel, Sheets o un CSV i s'omple sola.",
      },
    ],
    contexto: [
      "Un consultor independent que treballa botigues en línia necessita, com a mínim, vuit eines: una suite de recerca SEO, un rastrejador tècnic, alguna cosa que mesuri la seva visibilitat a les respostes d'IA, prospecció en fred, un CRM, facturació espanyola i un lloc on escriure.",
      "A preus de llista de setembre de 2026 són 521,20 $ al mes, 6.254 $ l'any. Però el problema no era només el preu. Era que les dades vivien en vuit llocs que no es parlen entre si: la botiga que trobes en una eina no és la mateixa fitxa que qualifiques en una altra, ni la que factures a la tercera.",
    ],
    queHiceIntro:
      "Deu seccions organitzades pel cicle del negoci, no per tipus de fitxer: captar, lliurar i eines. Cada empresa té una sola fitxa identificada pel seu domini, que reuneix la cerca que la va trobar, la seva qualificació amb evidència, els rastrejos de la seva web, els correus enviats i, si va signar, les seves factures i tasques.",
    capitulos: [
      {
        n: "01",
        title: "El motor de qualificació de leads",
        body: "La peça central, amb un principi al darrere: no mana la capacitat de llistar, mana la capacitat d'analitzar. Val més una cua curta de leads molt bons que una llista llarga de mediocres. Tres capes sobre cada domini: elegibilitat com a filtre binari, dolor de 0 a 60 punts i capacitat i timing de 0 a 40. Amb 70 o més entra a la cua amb la fitxa completa.",
      },
      {
        n: "02",
        title: "Comprovar del més barat al més car",
        body: "L'elegibilitat es comprova per etapes per no pagar abans de descartar: tombar un domini per plataforma costa 0,012 $ en lloc dels 0,047 $ que costaria comprovar-ho tot. Cada lead surt amb la seva evidència numèrica verificable a mà, una frase de dada per fer servir com a ham i la URL exacta de la captura que cal fer.",
      },
      {
        n: "03",
        title: "Una sola porta de sortida per a la IA",
        body: "Tota la IA del producte surt per OpenRouter amb una única clau. Cada crida envia una llista ordenada de models i una ruta de reserva: si el proveïdor preferit falla o aplica un límit, la passarel·la passa al següent sense que l'aplicació se n'assabenti. Cada resposta retorna quin model ha contestat, quants tokens ha consumit i quant ha costat, i això es desa.",
      },
      {
        n: "04",
        title: "Vuit assistents, no un xat genèric",
        body: "Cada assistent té la seva instrucció, el seu model preferit i el seu límit de tokens segons el tipus de feina: Claude Sonnet on cal redactar de cara al client, Gemini Flash on cal cerca web, Kimi per classificar i resumir en massa. Les instruccions comparteixen tres regles: prohibit inventar dades, obligació de separar el fet verificat de l'estimació, i primera persona sense plural corporatiu.",
      },
      {
        n: "05",
        title: "Eines reals, no només text",
        body: "Els agents poden cridar quatre funcions i encadenar fins a quatre voltes abans de respondre: llistar propietats de Search Console, consultar clics, impressions i posició real, inspeccionar l'estat d'indexació d'una URL i generar un PDF descarregable. Se li pot preguntar pel rendiment d'un client i respon amb dades de Google, no amb una estimació.",
      },
      {
        n: "06",
        title: "Context del client amb pressupost",
        body: "En obrir un projecte de client, la plataforma construeix el context llegint de la base: fitxa, fitxers, tasques obertes, notes, factures i converses anteriors. Va ordenat per utilitat i es retalla pel final quan no cap al pressupost de tokens, de manera que l'imprescindible, que és qui és el client, no es perd mai per culpa de les notes.",
      },
      {
        n: "07",
        title: "El mesurador de visibilitat en IA",
        body: "La funció que substitueix una eina de 95 $ al mes. Es defineix una marca amb les seves variants i els seus competidors i una llista de preguntes de comprador. Cada pregunta es llança contra tres models de famílies diferents, amb la cerca web activada, per no mesurar el biaix d'un sol proveïdor. De cada resposta s'extreu si la marca hi apareix, en quin ordre davant dels competidors i quines fonts cita el model.",
      },
    ],
    verificado: {
      intro: "Volum real processat per la plataforma fins avui.",
      filas: [
        { value: "918", label: "pàgines rastrejades", note: "rastrejador propi" },
        { value: "356", label: "empreses localitzades", note: "cerca per sector i ciutat" },
        { value: "310", label: "dominis descoberts", note: "deduplicats per domini" },
        { value: "61", label: "dominis qualificats amb puntuació", note: "amb evidència verificable" },
        { value: "411", label: "consultes d'enriquiment desades", note: "memòria cau de 30 dies" },
      ],
      cierre: "Tot això per 8,60 $ de dades, sobre infraestructura en pla gratuït.",
    },
    tecnico: {
      title: "Set decisions que expliquen per què funciona amb tan poc",
      body: [
        "Next.js amb App Router, TypeScript, Supabase sobre Postgres i desplegament a Vercel. Sense capa d'API per a la interfície: cada pantalla consulta Postgres directament al servidor i cada formulari invoca una funció de servidor, així que no hi ha estat duplicat per mantenir sincronitzat.",
        "Les feines llargues no caben en una petició HTTP. En lloc de muntar Redis i workers, cada feina avança en tandes de 40 segons que el mateix navegador demana en bucle, amb un pany perquè dues pestanyes obertes no dupliquin la feina ni la despesa.",
        "I es completa el que el proveïdor no dona: DataForSEO no reconeix la plataforma de la majoria de botigues espanyoles petites, així que la plataforma llegeix pel seu compte la portada i el sitemap de cada botiga, de franc, i combina les dues lectures.",
      ],
      tabla: [
        { label: "Cost de les eines", antes: "521,20 $ al mes fixos", despues: "pagament per ús, 8,60 $ en set setmanes" },
        { label: "Fitxa d'una empresa", antes: "repartida en quatre taules", despues: "una de sola, per domini" },
        { label: "Feines llargues", antes: "Redis i workers", despues: "tandes de 40 s des del navegador" },
        { label: "Consultes a l'API de pagament", antes: "es paguen cada vegada", despues: "memòria cau de 30 dies i límit diari" },
      ],
    },
    hallazgos: {
      title: "El que va fallar",
      intro: "Un cas d'èxit sense això no és creïble.",
      items: [
        {
          value: "0",
          title: "leads a la primera execució real",
          body: "Cinquanta dominis, 3,67 $ gastats i 34 descartats per \"sense plataforma ecommerce\" quan moltes eren parafarmàcies perfectament vàlides. Tres causes: el proveïdor no reconeixia PrestaShop en botigues petites, Cloudflare retornava 403 al lector de sitemaps, i PrestaShop embolcalla les URL en blocs CDATA que el lector no interpretava. Corregides les tres, i canviat l'ordre de comprovació per no pagar abans de descartar.",
        },
        {
          value: "4",
          title: "vegades existia la mateixa botiga",
          body: "Trobada en un lloc, qualificada en un altre, contactada en un tercer i facturada en un quart, sense cap relació entre les quatre files. Es va resoldre amb una fitxa única per domini, que és el que avui sosté el cercador global.",
        },
        {
          value: "2",
          title: "llistes d'exclusió separades, i una fuita legal",
          body: "Hi havia una llista de baixes per mòdul. Qui es donava de baixa des d'un correu no quedava bloquejat al pipeline de prospecció, així que podia tornar a aparèixer a la cua. Ara qualsevol baixa escriu a totes dues i descarta el domini en el moment, que és el que promet el document d'interès legítim.",
        },
        {
          value: "1",
          title: "comprovació ingènua que donava falsos positius",
          body: "El mesurador de visibilitat en IA donava per esmentada \"Marea\" dins de la paraula \"mareado\". La detecció va passar a buscar la paraula completa i sense accents.",
        },
      ],
    },
    metodo: {
      title: "Com es treballa",
      intro: "Tres pràctiques que fan sostenible mantenir això en solitari.",
      reglas: [
        {
          title: "Verificar abans de donar res per fet",
          body: "Cada canvi passa per tipatge estricte, lint, els 496 tests i una compilació de producció. I abans d'integrar qualsevol endpoint de pagament se'n comprova el nom i els camps a la documentació i se'n mesura el cost real amb una crida petita. Així es va saber que l'històric de rànquings costa 0,138 $ per domini.",
        },
        {
          title: "Desenvolupament assistit, criteri propi",
          body: "El codi s'escriu amb un agent de programació que llegeix el repositori, executa ordres, consulta la base i llança els tests abans de donar res per bo. Accelera la feina i abarateix mantenir una base d'aquesta mida en solitari, però les decisions de producte i d'arquitectura són meves.",
        },
        {
          title: "n8n orquestra, la plataforma executa",
          body: "La plataforma exposa un únic webhook autenticat amb dotze accions: crear tasques i notes, donar d'alta clients, canviar l'estat d'una factura, consultar pendents i cinc per al pipeline de leads. La regla és no duplicar automatitzacions als dos llocs.",
        },
      ],
    },
    cta: {
      title: "El mateix que faig per a mi, per al teu negoci.",
      body: "Quan l'stack estàndard no arriba, la sortida és construir la peça que falta. Aquesta plataforma és la prova que surt a compte i de com se sosté.",
      label: "Veure aplicacions a mida",
      href: "/servicios/a-medida",
    },
  },
  "clinica-de-la-ansiedad": {
    shot: "/assets/casos/clinica-home.png",
    shotUrl: "www.clinicadelansiedad.com/es",
    shotCaption: "clinicadelansiedad.com en producció.",
    kpis: [
      {
        title: "Primer mes amb l'estratègia assentada",
        note: "GA4, esdeveniments propis de reserva, de setembre a octubre de 2026",
        items: [
          { value: "1 de cada 5", label: "visitants prem Reservar", note: "11 de 51 usuaris, un 21,6 %" },
          { value: "17", label: "clics per demanar cita", note: "15 a Reservar i 2 a WhatsApp" },
          { value: "51", label: "usuaris", note: "106 sessions i 171 pàgines vistes" },
          { value: "2", label: "conversions mesurades", note: "clic a Reservar i a WhatsApp; abans, cap" },
        ],
      },
      {
        title: "Tres mesos després de la migració",
        note: "Search Console, juny davant de setembre de 2026",
        items: [
          { value: "27 → 17", label: "posició mitjana", note: "de tercera pàgina a segona, la mateixa web" },
          { value: "×3", label: "CTR", note: "del 0,5 % a l'1,5 % d'impressió a visita" },
          { value: "36 → 77", label: "clics al mes", note: "recuperació completa després del sotrac de la migració" },
          { value: "−4.500", label: "impressions irrellevants al mes", note: "Google va deixar d'ensenyar la web on no tocava" },
        ],
      },
      {
        title: "El que es va construir",
        note: "informe de treball del projecte",
        items: [
          { value: "0", label: "eines de mesura en començar", note: "ni Search Console ni analítica" },
          { value: "2", label: "idiomes en mirall", note: "castellà i català amb hreflang i x-default" },
          { value: "3", label: "credencials en dades estructurades", note: "titulació, centre de formació, teràpies" },
          { value: "8,6", label: "posició del primer article del pla", note: "als 30 dies de publicar-se" },
        ],
      },
    ],
    contexto: [
      "Clínica de la Ansiedad és una consulta privada de psicoanàlisi al Maresme. Tenia una web en WordPress que no funcionava com a canal: no estava donada d'alta a Search Console, no tenia analítica i no hi arribaven pacients per aquí. Per a Google, la clínica gairebé no existia.",
      "En salut mental Google és especialment exigent. És contingut que afecta decisions delicades, i sense senyals clars de qui signa, amb quina titulació i on atén, una web no surt per res que no sigui el seu propi nom.",
      "El primer va ser mesurar. El segon, construir una web que pogués posicionar i convertir. El tercer, migrar sense perdre el poc que hi havia i muntar un blog que creixés sense treure temps a la clínica.",
    ],
    queHiceIntro:
      "Web nova en React, refeta des de zero, més ràpida i dissenyada per convertir, amb la reserva i el WhatsApp sempre a mà. A sobre, una estratègia de contingut completa: pàgines de servei orientades al que busquen els pacients i un blog automatitzat amb pla editorial propi. I tot mesurat: cada clic a Reservar i a WhatsApp queda registrat.",
    capitulos: [
      {
        n: "01",
        title: "Mesura",
        body: "Alta de la propietat de domini a Search Console i de GA4 amb Consent Mode v2: el consentiment es denega per defecte i només es mesura qui accepta. Esdeveniments propis per a cada clic a Reservar i a WhatsApp, per saber quina pàgina porta a demanar cita i quina no.",
      },
      {
        n: "02",
        title: "Web nova, pensada per convertir",
        body: "Refeta des de zero en React (Next.js), més ràpida que el WordPress anterior i amb la reserva i el WhatsApp sempre a mà, a qualsevol pàgina i al mòbil. Castellà i català com a rutes en mirall, amb hreflang i x-default, perquè Google serveixi l'idioma correcte sense tractar les dues versions com a contingut duplicat. Pàgines locals per zona del Maresme, que són les que capten qui busca a prop.",
      },
      {
        n: "03",
        title: "Dades estructurades de salut",
        body: "MedicalClinic per al centre i Person per al professional, amb titulació, centre on es va formar i teràpies que ofereix. Horari de consulta i adreça al mateix bloc. És el que converteix una web de psicologia en una entitat que Google es pot refiar d'ensenyar.",
      },
      {
        n: "04",
        title: "Migració",
        body: "Redireccions 301 de cada URL antiga al seu equivalent, canonicals a totes les pàgines i sitemap net. El sotrac de juny és el preu normal d'una migració; la recuperació en tres mesos és la prova que es va fer bé.",
      },
      {
        n: "05",
        title: "Títols i descripcions",
        body: "Reescriptura del title i la meta description de la home i de les pàgines de servei per dir què és la clínica i on és, no només com es diu. La home va doblar els clics i va triplicar el CTR el mes següent al canvi.",
      },
      {
        n: "06",
        title: "Blog automatitzat",
        body: "Pla editorial propi sobre problemes concrets: què és, com es manifesta, quan demanar ajuda, enllaç al servei. El blog s'escriu sol: d'una fila del calendari a un article llest a Contentful, sense treure temps a la clínica, i cada article va signat per un psicòleg col·legiat amb pàgina d'autor. El primer, sobre gelosia patològica, va entrar en posició 8,6 als 30 dies.",
      },
    ],
    tecnico: {
      title: "La migració, en xifres",
      body: [
        "Migrar una web és perdre trànsit durant unes setmanes i recuperar-lo amb interessos si es fa bé. Això és el que va passar entre juny, el mes del canvi, i setembre.",
        "Les impressions baixen i els clics pugen. És el senyal que Google va deixar d'ensenyar la web en consultes que no eren seves i va començar a ensenyar-la en les que sí.",
        "I tot això és mes i mig després de deixar l'estratègia acabada i assentada. El blog continua publicant i cada article triga mesos a posicionar del tot, així que el que és esperable és que les visites i les reserves continuïn creixent els propers mesos.",
      ],
      tabla: [
        { label: "Clics al mes", antes: "36", despues: "77" },
        { label: "Posició mitjana", antes: "27", despues: "17" },
        { label: "CTR", antes: "0,5 %", despues: "1,5 %" },
        { label: "Impressions al mes", antes: "8.160", despues: "5.090" },
        { label: "Clics de la home (28 dies)", antes: "13", despues: "26" },
        { label: "CTR de la home", antes: "0,3 %", despues: "1,2 %" },
      ],
    },
    hallazgos: {
      title: "El que va aparèixer sense buscar-ho",
      intro: "Donar d'alta la mesura va destapar coses que ningú no havia vist.",
      items: [
        {
          value: "304",
          title: "impressions en 30 dies d'un sol article",
          body: "El primer article del pla editorial, sobre gelosia patològica, és la tercera pàgina més vista del lloc al cap d'un mes de publicar-se. El blog funciona quan es publica.",
        },
        {
          value: "1",
          title: "URL antiga que Google continua preferint",
          body: "Després de la migració, Google va continuar mostrant la URL http antiga per a les cerques de marca durant mesos. No és un error: és el temps que triga a traslladar la confiança. Es resol sol.",
        },
      ],
    },
    relacionado: {
      title: "El blog que s'escriu sol",
      body: "Cada article del pla editorial surt d'un workflow a n8n: hi entra una fila del calendari i un article complet, revisat i amb imatge, arriba a Contentful. Com està muntat, en el seu propi cas.",
      label: "Veure el cas d'automatització",
      href: "/casos-de-exito/clinica-de-la-ansiedad-blog-automatizado",
      image: {
        src: "/assets/casos/clinica-blog-workflow.png",
        alt: "Workflow de n8n que genera els articles del blog de Clínica de la Ansiedad",
        w: 2226,
        h: 414,
      },
    },
    metodo: {
      title: "Mètode",
      intro: "",
      reglas: [
        {
          title: "Mesurar abans de tocar",
          body: "Sense Search Console ni esdeveniments de reserva no hi ha un abans, i sense un abans no hi ha manera de saber si alguna cosa ha funcionat. Avui es veu cada cita que comença a la web.",
        },
        {
          title: "Migrar amb xarxa",
          body: "Cada URL vella té el seu destí, cada pàgina el seu canonical, i el sitemap només porta el que s'ha d'indexar.",
        },
        {
          title: "Signar el contingut",
          body: "En salut, un article sense autor identificable posiciona pitjor que cap. Nom, número de col·legiat i pàgina d'autor a cada peça.",
        },
        {
          title: "Que el contingut no depengui de l'agenda",
          body: "El creixement d'una consulta petita depèn del contingut, i una clínica no té temps per escriure. Per això el blog publica sol, sobre un pla editorial tancat.",
        },
      ],
    },
    cta: {
      title: "La teva web porta clients i no ho saps?",
      body: "El primer que faig en qualsevol projecte és mesurar. El segon, dir-te què està passant de debò.",
      label: "Demana un diagnòstic",
      href: "/diagnostico",
    },
  },
  "clinica-de-la-ansiedad-blog-automatizado": {
    shot: "/assets/casos/clinica-blog-workflow.png",
    shotFrame: "plain",
    shotTag: "n8n · blog automatitzat · 27 nodes",
    shotCaption: "El workflow a n8n, del calendari editorial a l'entrada a Contentful",
    kpis: [
      {
        title: "El workflow",
        note: "n8n cloud, estat a 10 d'octubre de 2026",
        items: [
          { value: "27", label: "nodes", note: "del calendari a l'entrada a Contentful" },
          { value: "96", label: "articles planificats", note: "48 setmanes, dos per setmana" },
          { value: "~3 min", label: "per article", note: "el redactor és el més lent" },
          { value: "8", label: "articles fets", note: "els dos últims, marcats ja pel mateix workflow" },
        ],
      },
      {
        title: "L'últim article",
        note: "sortida real de l'1 d'octubre de 2026",
        items: [
          { value: "1.723", label: "paraules", note: "seguint l'estructura del briefing" },
          { value: "35", label: "blocs de Rich Text", note: "en el format propi de Contentful" },
          { value: "6", label: "preguntes freqüents", note: "també com a FAQPage en JSON-LD" },
          { value: "154", label: "caràcters de meta description", note: "dins de rang, ajustada pel mateix flux" },
        ],
      },
    ],
    evidenciaTitulo: "El workflow, sencer",
    evidenciaIntro: "Captura del llenç de n8n tal com està en producció.",
    evidencia: [
      {
        src: "/assets/casos/clinica-blog-workflow.png",
        w: 2226,
        h: 414,
        alt: "Llenç de n8n amb els 27 nodes del workflow del blog de Clínica de la Ansiedad",
        caption: "D'esquerra a dreta: lectura del calendari, bucle per article, redactor (Opus) i editor (Sonnet), Rich Text, imatge, pujada a Contentful en cinc passos i marca al Sheet només si l'entrada s'ha creat.",
      },
    ],
    contexto: [
      "L'estratègia SEO de Clínica de la Ansiedad es recolza en el contingut: articles sobre el que de debò porta algú a teràpia. El pla són 96 articles en 48 setmanes, dos per setmana. Una consulta petita no pot escriure a aquest ritme.",
      "I en salut mental no val qualsevol text. Cada article ha de seguir una estructura pensada per a la cerca, portar la seva categoria i el seu autor, i arribar amb imatge, metadades i preguntes freqüents marcades per als cercadors.",
      "La idea va ser que el calendari editorial fos l'únic lloc on es decideix alguna cosa. Tota la resta, des de la redacció fins a l'entrada a Contentful, ho fa el workflow.",
    ],
    queHiceIntro:
      "Un workflow a n8n que converteix una fila d'un Google Sheet en un article complet a Contentful: text, imatge de capçalera, metadades SEO, categoria i autor. Sense intervenció manual entremig.",
    capitulos: [
      {
        n: "01",
        title: "El calendari mana",
        body: "Un Google Sheet amb tretze columnes: categoria, títol, keywords, intenció, URL, estructura d'H1 i H2, i una casella de completat. Aquesta casella és tot l'estat del sistema. No hi ha base de dades: el workflow llegeix les files, es queda amb les pendents i marca les que acaba. Es pot llançar tantes vegades com calgui i no duplica mai; per refer un article n'hi ha prou de buidar-ne la cel·la.",
      },
      {
        n: "02",
        title: "El brief",
        body: "Un node compon l'encàrrec amb tot el que hi ha a la fila: tema, keywords, intenció, l'estructura del briefing i la URL. La IA redacta sobre aquest encàrrec, però no decideix de què escriure ni on es publica: la URL surt del calendari, així que un article refet no canvia mai d'adreça.",
      },
      {
        n: "03",
        title: "Redactor i editor",
        body: "Claude Opus escriu i retorna l'article en JSON estructurat mitjançant una eina: títol, meta title, meta description, una resposta directa inicial, els blocs del cos, les FAQ i la descripció de la imatge. Després Claude Sonnet el revisa i el retorna corregit amb la llista de canvis. És un segon parell d'ulls, no una reescriptura.",
      },
      {
        n: "04",
        title: "Del JSON a Contentful",
        body: "El node més dens: converteix els blocs al Rich Text de Contentful, genera el JSON-LD de FAQPage perquè els cercadors n'extreguin les preguntes, ajusta la meta description al seu rang i tradueix la categoria a la seva entrada real a Contentful.",
      },
      {
        n: "05",
        title: "La imatge",
        body: "gpt-image-1 genera la capçalera a 1536 per 1024. El prompt té una part fixa que dona coherència visual a tot el blog i una escena variable per article o per categoria. La pujada a Contentful va en cinc passos, amb una espera obligatòria: Contentful processa el fitxer de manera asíncrona, i si l'entrada es crea abans, la imatge no està llesta.",
      },
      {
        n: "06",
        title: "Tancar el cicle",
        body: "Es crea l'entrada amb tots els camps i un interruptor decideix si es publica o queda en esborrany. Només si l'entrada existeix es marca la fila; si alguna cosa falla, la fila continua pendent i el bucle passa al següent article. Avui va en mode conservador: un article per execució i en esborrany, perquè la clínica el llegeixi abans de publicar-lo. En acabar, un resum diu quants se n'han creat, els avisos i l'enllaç a cada entrada.",
      },
    ],
    hallazgos: {
      title: "El que es va trencar i com es va arreglar",
      intro: "Un workflow en producció ensenya les seves errades. Aquestes dues eren silencioses.",
      items: [
        {
          value: "1",
          title: "fila perduda per marcar-la en fallar",
          body: "Al principi la fila es marcava com a completada també quan l'article fallava, i aquell article ja no es tornava a intentar mai més. Ara només es marca quan Contentful confirma l'entrada.",
        },
        {
          value: "0",
          title: "articles a l'informe, sempre",
          body: "El node que escriu al Sheet no arrossega les dades de l'article, així que el resum final comptava sempre zero. Un node al darrere recupera l'article i l'informe ja compta el que ha passat.",
        },
      ],
    },
    relacionado: {
      title: "Per a què serveix aquest blog",
      body: "Aquests articles formen part de l'estratègia SEO de la clínica: web nova, contingut i mesura. El primer mes amb l'estratègia assentada, 1 de cada 5 visitants va prémer Reservar.",
      label: "Veure el cas de SEO",
      href: "/casos-de-exito/clinica-de-la-ansiedad",
    },
    cta: {
      title: "El teu contingut depèn que algú tingui temps?",
      body: "Si hi ha un procés que es repeteix igual cada setmana, es pot muntar perquè es faci sol i es pugui revisar.",
      label: "Veure automatitzacions",
      href: "/servicios/automatizaciones",
    },
  },
}
