"use client"

import { useState, useEffect } from "react"
import Link from "@/components/LocaleLink"
import { motion, useReducedMotion } from "motion/react"
import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import Accordion from "@mui/material/Accordion"
import AccordionSummary from "@mui/material/AccordionSummary"
import AccordionDetails from "@mui/material/AccordionDetails"
import { tokens, fonts } from "@/lib/mui/theme"
import { SiteHeader, SiteFooter, DiagnosticoCTA, ServiceHero, Reveal, ArtifactWindow, Crumbs } from "@/components/mui/shared"
import { casosDeepCa } from "@/lib/casesDeepCa"
import { GESTION_PRODUCTOS_FAQS_CA } from "@/lib/gestionProductosFaqsCa"
import MareaFlowViewer from "@/components/mui/MareaFlowViewer"
import BrandCaseCard from "@/components/mui/BrandCaseCard"
import { getCase, casePhoto, caseVertical } from "@/lib/casesEcom"

// Versió catalana de GestionProductosMui. Mateixa estructura; només canvia el
// text. Les xifres de marea.es surten de lib/casesDeepCa.ts (mateixos valors
// que lib/casesDeep.ts, etiquetes en català).

const linkSx = { color: tokens.ink, fontWeight: 600, textDecoration: "underline", textDecorationColor: tokens.line, "&:hover": { textDecorationColor: tokens.petrol } } as const

/* ---------- artefacte: safata de revisió ---------- */

// Productes preparats pel sistema en esborrany, a l'espera que l'equip els
// aprovi. Noms genèrics: és un esquema, no una captura.
const COLA = [
  "Rellotge d'acer, esfera blava",
  "Polsera de plata trenada",
  "Smartwatch, corretja de silicona",
  "Anell de plata amb zircònia",
]
const CHECKS = ["fitxa", "fotos", "estoc", "SEO"]
const REGISTRO: [string, string][] = [
  ["07:00", "full del proveïdor llegit · 4 referències noves"],
  ["07:02", "fitxes creades en esborrany · descripció i SEO"],
  ["07:05", "fotos trobades per EAN i assignades en ordre"],
  ["07:06", "estoc sincronitzat · reserva de botiga física"],
]

function RevisionQueueArt() {
  const reduce = useReducedMotion()
  // nre. de productes ja aprovats; amb moviment reduït es queda a mitges
  const [ok, setOk] = useState(reduce ? 2 : 0)
  useEffect(() => {
    if (reduce) return
    const t = setInterval(() => setOk((v) => (v >= COLA.length ? 0 : v + 1)), 1600)
    return () => clearInterval(t)
  }, [reduce])
  const pend = COLA.length - ok
  return (
    <ArtifactWindow tag="safata de revisió · productes nous" ratio="16 / 11">
      <Box sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
        <Stack direction="row" sx={{ alignItems: "baseline", justifyContent: "space-between", mb: 1 }}>
          <Typography sx={{ fontFamily: fonts.mono, fontSize: 9.5, color: tokens.muted }}>preparat pel sistema · en esborrany</Typography>
          <Typography sx={{ fontFamily: fonts.mono, fontSize: 9.5, fontWeight: 700, color: pend ? tokens.ink : tokens.teal }}>
            {pend ? `${pend} per revisar` : "tot revisat"}
          </Typography>
        </Stack>
        <Stack spacing={0.6}>
          {COLA.map((name, i) => {
            const done = i < ok
            return (
              <Box key={name} sx={{ display: "grid", gridTemplateColumns: { xs: "1fr auto", sm: "1fr auto auto" }, alignItems: "center", gap: 1, bgcolor: tokens.win, border: `1px solid ${done ? `${tokens.teal}44` : tokens.lineSoft}`, borderRadius: 1.5, px: 1, py: 0.7, transition: "border-color .3s", "@media (prefers-reduced-motion: reduce)": { transition: "none" } }}>
                <Typography sx={{ fontSize: { xs: 11, md: 12 }, fontWeight: 600, color: tokens.ink, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{name}</Typography>
                <Stack direction="row" spacing={0.5} sx={{ display: { xs: "none", sm: "flex" } }}>
                  {CHECKS.map((c) => (
                    <Typography key={c} sx={{ fontFamily: fonts.mono, fontSize: 8.5, color: tokens.teal, border: `1px solid ${tokens.teal}33`, borderRadius: 999, px: 0.6, py: 0.1 }}>✓ {c}</Typography>
                  ))}
                </Stack>
                <Box component={motion.div} key={done ? "ok" : "rev"} initial={reduce ? false : { opacity: 0, y: 3 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}
                  sx={{ minWidth: 64, textAlign: "center", borderRadius: 999, px: 0.9, py: 0.2, bgcolor: done ? tokens.teal : "transparent", border: `1px solid ${done ? tokens.teal : tokens.line}` }}>
                  <Typography sx={{ fontFamily: fonts.mono, fontSize: 9, fontWeight: 700, color: done ? tokens.win : tokens.ink, whiteSpace: "nowrap" }}>{done ? "aprovat" : "revisar"}</Typography>
                </Box>
              </Box>
            )
          })}
        </Stack>
        <Box sx={{ mt: 1.25, pt: 1, borderTop: `1px dashed ${tokens.line}`, display: "flex", justifyContent: "space-between", gap: 1 }}>
          <Typography sx={{ fontFamily: fonts.mono, fontSize: 9.5, color: tokens.muted }}>només es publica el que està aprovat i complet</Typography>
          <Typography sx={{ fontFamily: fonts.mono, fontSize: 9.5, fontWeight: 700, color: tokens.teal }}>{ok} a la botiga</Typography>
        </Box>
        <Box sx={{ mt: 1.5, bgcolor: tokens.surface, borderRadius: 1.5, px: 1.25, py: 1 }}>
          <Typography sx={{ fontFamily: fonts.mono, fontSize: 9.5, color: tokens.muted, mb: 0.5 }}>el que el sistema ja ha fet avui</Typography>
          {REGISTRO.map(([h, t]) => (
            <Stack key={h} direction="row" spacing={1.25} sx={{ py: 0.25 }}>
              <Typography sx={{ fontFamily: fonts.mono, fontSize: { xs: 9, md: 10 }, color: tokens.muted, flexShrink: 0 }}>{h}</Typography>
              <Typography sx={{ fontFamily: fonts.mono, fontSize: { xs: 9, md: 10 }, color: tokens.ink, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{t}</Typography>
            </Stack>
          ))}
        </Box>
        <Typography sx={{ fontFamily: fonts.mono, fontSize: 9, color: tokens.muted, mt: "auto", pt: 1 }}>
          esquema il·lustratiu · el sistema prepara, el teu equip decideix
        </Typography>
      </Box>
    </ArtifactWindow>
  )
}

/* ---------- datos ---------- */

const SISTEMA = [
  "Dona d'alta cada producte a partir del full del proveïdor",
  "Escriu la descripció i la meta description",
  "Troba les fotos per EAN i les puja en ordre",
  "Assigna categories i atributs de filtre",
  "Agrupa les variants de color i talla",
  "Manté l'estoc al dia, amb reserva per a la botiga física",
  "Deixa cada fitxa en esborrany, a punt per revisar",
]

const EQUIPO = [
  "Revisar el que s'ha preparat i decidir què surt",
  "Assortiment, col·leccions i novetats",
  "Preus, marges i promocions",
  "Campanyes i accions comercials",
  "Negociació amb proveïdors",
  "Atendre i vendre",
]

const MODULOS: [string, string][] = [
  ["Alta de producte", "Llegeix el full del proveïdor, comprova si la referència ja existeix, genera la descripció llarga i la meta description, en calcula les categories i crea el producte en esborrany. Retorna l'ID al full perquè tot quedi traçat."],
  ["Fotos", "Creua l'EAN de cada producte amb la carpeta d'imatges, les descarrega, les puja a la botiga i les assigna en ordre. Només actua sobre productes sense fotos, així que es pot tornar a llançar sense duplicar res."],
  ["Categories, atributs i filtres", "Classifica per tipus, gènere, material o col·lecció amb regles fixes, i normalitza el vocabulari del proveïdor perquè els filtres de la botiga funcionin de debò."],
  ["Variants i noms", "Vincula les variants perquè es vegin com una sola fitxa amb les seves opcions, manté el nom fidel al full i reclassifica quan el proveïdor canvia de criteri."],
  ["Estoc", "Sincronitza l'inventari des de l'origen amb un llindar de reserva configurable, per guardar unitats per a la botiga física sense vendre el que no hi ha."],
  ["SEO de cada fitxa", "Meta title i meta description de cada producte, EAN al seu camp natiu per a Google Shopping i assistents d'IA, i noms i URL sense duplicats."],
]

const PASOS: [string, string, string][] = [
  ["El proveïdor actualitza el seu full", "O el teu ERP. Productes nous, canvis d'estoc, una col·lecció que entra. El sistema ho detecta.", "origen"],
  ["El sistema prepara", "Crea els productes en esborrany amb les seves fotos, categories, variants, estoc i SEO. Els canvis massius, primer en simulació.", "sistema"],
  ["El teu equip revisa", "Una llista amb el que és nou i el que canvia, no fitxes una a una. Aprova, corregeix o descarta.", "el teu equip"],
  ["Surt a la botiga", "Només es publica el que està aprovat i complet. El que no té fotos o dades es queda en esborrany.", "sistema"],
]

const GARANTIAS: [string, string][] = [
  ["Esborrany per defecte", "No surt res de nou a la botiga sense passar pel teu equip. La publicació es limita a la llista aprovada."],
  ["Simulació abans d'escriure", "Cada passada massiva s'executa primer en mode lectura i genera el llistat del que canviaria."],
  ["Còpia per desfer", "Abans de cada escriptura es desa l'estat anterior. Cap operació no és irreversible."],
  ["Verificació després", "El que s'ha escrit es compara amb la botiga. Si alguna cosa no quadra, es veu, no es descobreix setmanes després."],
  ["S'atura davant d'un error", "Tandes petites, un sol reintent i aturada en sec si alguna cosa falla dues vegades, per no perdre canvis en silenci."],
  ["Es pot tornar a llançar", "Cada circuit actua només sobre el que falta. Llançar-lo dues vegades no duplica productes ni fotos."],
]

/* ---------- secciones ---------- */

function Hero() {
  return (
    <ServiceHero
      title="Sistema per automatitzar tota la gestió de productes"
      sub="Alta, fotos, categories, variants, estoc i SEO surten sols del full del proveïdor i arriben a la teva botiga. El teu equip deixa de carregar fitxes: revisa el que prepara el sistema i dedica el temps a les decisions d'estratègia, comercials i de venda."
      specs={[
        ["automatitza", "alta · fotos · categories · variants · estoc · SEO"],
        ["el teu equip", "revisa, aprova i decideix"],
        ["motor", "n8n + codi propi, sobre la teva botiga actual"],
      ]}
      note="No es publica res sense revisió. No s'escriu res sense simulació prèvia."
      artifact={<RevisionQueueArt />}
    />
  )
}

function Reparto() {
  const item = (t: string, dark: boolean) => (
    <Stack key={t} direction="row" spacing={1.25} sx={{ alignItems: "baseline", py: 1.1, borderTop: `1px solid ${dark ? "rgba(250,248,240,.14)" : tokens.lineSoft}` }}>
      <Box component="span" sx={{ fontFamily: fonts.mono, fontSize: 12, color: dark ? tokens.accentSoft : tokens.teal, flexShrink: 0 }}>{dark ? "→" : "✓"}</Box>
      <Typography sx={{ fontSize: { xs: 15, md: 16 }, color: dark ? tokens.paper : tokens.body }}>{t}</Typography>
    </Stack>
  )
  const cardSx = { p: { xs: 3, md: 4 }, borderRadius: 3, height: "100%" } as const
  return (
    <Box component="section" sx={{ py: { xs: 8, md: 12 }, borderBottom: `1px solid ${tokens.lineSoft}` }}>
      <Container>
        <Reveal>
          <Box sx={{ maxWidth: 700, mb: { xs: 5, md: 7 } }}>
            <Typography variant="h2" sx={{ fontSize: { xs: 28, md: 40 }, color: tokens.ink, mb: 2 }}>
              El sistema fa la feina de producte. El teu equip, la que fa vendre.
            </Typography>
            <Typography variant="body1" sx={{ fontSize: { xs: 16, md: 18 }, color: tokens.body }}>
              A la majoria de botigues, la gent que millor coneix el producte i el client es passa el dia copiant dades d&apos;un full a la fitxa, pujant fotos i quadrant l&apos;estoc. És una feina necessària, però no és feina de criteri. El sistema es queda aquesta part i retorna al teu equip la que no es pot automatitzar.
            </Typography>
          </Box>
        </Reveal>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap: { xs: 3, md: 4 } }}>
          <Reveal>
            <Box sx={{ ...cardSx, border: `1px solid ${tokens.line}`, bgcolor: tokens.win }}>
              <Typography variant="h3" sx={{ fontFamily: fonts.serif, fontSize: 22, fontWeight: 600, color: tokens.ink, mb: 2 }}>El que fa el sistema</Typography>
              {SISTEMA.map((t) => item(t, false))}
            </Box>
          </Reveal>
          <Reveal delay={0.08}>
            <Box sx={{ ...cardSx, bgcolor: tokens.ink }}>
              <Typography variant="h3" sx={{ fontFamily: fonts.serif, fontSize: 22, fontWeight: 600, color: tokens.paper, mb: 2 }}>El que queda a les mans del teu equip</Typography>
              {EQUIPO.map((t) => item(t, true))}
            </Box>
          </Reveal>
        </Box>
      </Container>
    </Box>
  )
}

function Modulos() {
  return (
    <Box component="section" sx={{ py: { xs: 8, md: 12 }, borderBottom: `1px solid ${tokens.lineSoft}` }}>
      <Container>
        <Reveal>
          <Box sx={{ maxWidth: 640, mb: { xs: 5, md: 7 } }}>
            <Typography variant="h2" sx={{ fontSize: { xs: 28, md: 40 }, color: tokens.ink, mb: 2 }}>Què automatitza, del full del proveïdor a la fitxa publicada.</Typography>
            <Typography variant="body1" sx={{ fontSize: { xs: 16, md: 18 }, color: tokens.body }}>
              Sis mòduls que cobreixen el cicle de vida complet d&apos;un producte. Es munten junts o començant pel que avui treu més hores al teu equip.
            </Typography>
          </Box>
        </Reveal>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr 1fr" }, gap: { xs: 3, md: 4 } }}>
          {MODULOS.map(([t, d], i) => (
            <Reveal key={t} delay={(i % 3) * 0.05}>
              <Box sx={{ borderTop: `2px solid ${tokens.line}`, pt: 2.5 }}>
                <Typography sx={{ fontFamily: fonts.mono, fontSize: 12, color: tokens.petrol, mb: 1.25 }}>{`0${i + 1}`}</Typography>
                <Typography variant="h3" sx={{ fontFamily: fonts.serif, fontSize: 21, fontWeight: 600, color: tokens.ink, mb: 1 }}>{t}</Typography>
                <Typography variant="body1" sx={{ color: tokens.body }}>{d}</Typography>
              </Box>
            </Reveal>
          ))}
        </Box>
      </Container>
    </Box>
  )
}

function FlujosReales() {
  return (
    <Box component="section" sx={{ py: { xs: 8, md: 12 }, borderBottom: `1px solid ${tokens.lineSoft}` }}>
      <Container>
        <Reveal>
          <Box sx={{ maxWidth: 680, mb: { xs: 4, md: 6 } }}>
            <Typography variant="h2" sx={{ fontSize: { xs: 28, md: 40 }, color: tokens.ink, mb: 2 }}>Així són els fluxos per dins.</Typography>
            <Typography variant="body1" sx={{ fontSize: { xs: 16, md: 18 }, color: tokens.body }}>
              Sis dels 25 fluxos de n8n que gestionen avui el catàleg de marea.es, amb els seus nodes reals. És el que es munta a la teva botiga, adaptat als teus proveïdors i al teu catàleg.
            </Typography>
          </Box>
        </Reveal>
        <Reveal delay={0.06}>
          <MareaFlowViewer />
        </Reveal>
      </Container>
    </Box>
  )
}

function ComoFunciona() {
  return (
    <Box component="section" sx={{ py: { xs: 8, md: 12 }, borderBottom: `1px solid ${tokens.lineSoft}`, bgcolor: tokens.surface }}>
      <Container>
        <Reveal>
          <Typography variant="h2" sx={{ fontSize: { xs: 28, md: 40 }, color: tokens.ink, mb: { xs: 5, md: 7 }, maxWidth: 640 }}>
            Com entra un producte a la teva botiga amb el sistema.
          </Typography>
        </Reveal>
        <Box component="ol" sx={{ listStyle: "none", p: 0, m: 0, display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "repeat(4, 1fr)" }, gap: { xs: 3, md: 0 } }}>
          {PASOS.map(([t, d, quien], i) => {
            const equipo = quien === "el teu equip"
            return (
              <Box component="li" key={t} sx={{ pr: { md: 3 }, pl: { md: i === 0 ? 0 : 3 }, borderLeft: { md: i === 0 ? "none" : `1px solid ${tokens.line}` } }}>
                <Reveal delay={i * 0.06}>
                  <Stack direction="row" spacing={1} sx={{ alignItems: "center", mb: 1.5 }}>
                    <Typography sx={{ fontFamily: fonts.serif, fontSize: 30, fontWeight: 600, lineHeight: 1, color: tokens.petrol }}>{i + 1}</Typography>
                    <Box sx={{ borderRadius: 999, px: 1, py: 0.2, bgcolor: equipo ? tokens.ink : "transparent", border: `1px solid ${equipo ? tokens.ink : tokens.line}` }}>
                      <Typography sx={{ fontFamily: fonts.mono, fontSize: 10.5, fontWeight: 700, color: equipo ? tokens.accentSoft : tokens.muted }}>{quien}</Typography>
                    </Box>
                  </Stack>
                  <Typography variant="h3" sx={{ fontFamily: fonts.serif, fontSize: 19, fontWeight: 600, color: tokens.ink, mb: 0.75 }}>{t}</Typography>
                  <Typography variant="body1" sx={{ color: tokens.body, fontSize: 15 }}>{d}</Typography>
                </Reveal>
              </Box>
            )
          })}
        </Box>
      </Container>
    </Box>
  )
}

function Control() {
  return (
    <Box component="section" sx={{ py: { xs: 8, md: 12 }, borderBottom: `1px solid ${tokens.lineSoft}` }}>
      <Container>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "0.8fr 1.2fr" }, gap: { xs: 5, md: 8 }, alignItems: "start" }}>
          <Reveal>
            <Box sx={{ position: { md: "sticky" }, top: { md: 96 } }}>
              <Typography variant="h2" sx={{ fontSize: { xs: 28, md: 40 }, color: tokens.ink, mb: 2 }}>
                Revisar és ràpid perquè el sistema no improvisa.
              </Typography>
              <Typography variant="body1" sx={{ fontSize: { xs: 16, md: 18 }, color: tokens.body }}>
                Perquè el teu equip es pugui refiar del que aprova, el sistema treballa amb regles fixes i deixa rastre de tot el que toca. Aquestes són les sis que no se salta mai.
              </Typography>
            </Box>
          </Reveal>
          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" }, columnGap: 4 }}>
            {GARANTIAS.map(([t, d], i) => (
              <Reveal key={t} delay={(i % 2) * 0.05}>
                <Box sx={{ borderTop: `1px solid ${tokens.line}`, py: 2.5 }}>
                  <Typography variant="h3" sx={{ fontFamily: fonts.serif, fontSize: 19, fontWeight: 600, color: tokens.ink, mb: 0.75 }}>{t}</Typography>
                  <Typography variant="body1" sx={{ color: tokens.body, fontSize: 15 }}>{d}</Typography>
                </Box>
              </Reveal>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

// Caso de éxito de Marea: card de marca (la misma del resto de servicios),
// las cifras de ingeniería verificadas y enlace al caso completo.
function EnProduccion() {
  const marea = casosDeepCa["marea-es"]
  const caso = getCase("marea-es", "ca")
  const cifras = marea?.kpis[1]?.items ?? []
  if (!cifras.length || !caso) return null
  return (
    <Box component="section" sx={{ py: { xs: 8, md: 11 }, borderBottom: `1px solid ${tokens.lineSoft}` }}>
      <Container>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "0.85fr 1.15fr" }, gap: { xs: 4, md: 7 }, alignItems: "center" }}>
          <Reveal>
            <BrandCaseCard name={caso.client} vertical={caseVertical(caso, "ca")} href="/casos-de-exito/marea-es" photo={casePhoto(caso)} ratio="1 / 1" />
          </Reveal>
          <Reveal delay={0.08}>
            <Box>
              <Typography variant="h2" sx={{ fontSize: { xs: 28, md: 38 }, color: tokens.ink, mb: 2 }}>
                Ja gestiona un catàleg de rellotges i joieria en producció.
              </Typography>
              <Typography variant="body1" sx={{ fontSize: { xs: 16, md: 17 }, color: tokens.body, mb: { xs: 3.5, md: 4.5 }, maxWidth: 560 }}>
                A marea.es el producte arriba sol des dels fulls del proveïdor fins a la botiga, amb totes les escriptures simulades, amb còpia de seguretat i verificades.
              </Typography>
              <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", rowGap: 3.5 }}>
                {cifras.map((m, i) => (
                  <Box key={m.label} sx={{ pl: i % 2 === 0 ? 0 : 3, borderLeft: i % 2 === 0 ? "none" : `1px solid ${tokens.lineSoft}` }}>
                    <Typography sx={{ fontFamily: fonts.serif, fontSize: { xs: 34, md: 42 }, fontWeight: 600, lineHeight: 1, color: tokens.petrol }}>{m.value}</Typography>
                    <Typography sx={{ fontSize: 14.5, fontWeight: 700, color: tokens.ink, mt: 1 }}>{m.label}</Typography>
                    {m.note && <Typography sx={{ fontFamily: fonts.mono, fontSize: 11, color: tokens.muted, mt: 0.4 }}>{m.note}</Typography>}
                  </Box>
                ))}
              </Box>
              <Button component={Link} href="/casos-de-exito/marea-es" sx={{ color: tokens.ink, fontWeight: 700, px: 0, mt: { xs: 3.5, md: 4.5 }, "&:hover": { bgcolor: "transparent", color: tokens.petrol } }}>
                {"Veure el cas d'èxit de Marea"} <Box component="span" sx={{ color: tokens.petrol, ml: 0.5 }}>↗</Box>
              </Button>
            </Box>
          </Reveal>
        </Box>
      </Container>
    </Box>
  )
}

function SobreTuTienda() {
  const cols: { title: string; body: string; items: [string, string?][] }[] = [
    { title: "D'on surten les dades", body: "El full de càlcul del proveïdor, un Excel o CSV que t'envien, o el teu ERP.", items: [["Google Sheets"], ["Excel i CSV"], ["ERP"]] },
    { title: "On són les fotos", body: "La carpeta compartida del proveïdor o la teva, identificades per EAN o referència.", items: [["Dropbox"], ["Google Drive"]] },
    { title: "On es publica", body: "Avui en producció sobre WooCommerce. A Shopify o Magento canvien els connectors, no la lògica.", items: [["WooCommerce", "/agencia-woocommerce"], ["Shopify", "/agencia-shopify"], ["Magento", "/agencia-magento"]] },
  ]
  const chip = ([label, href]: [string, string?]) => {
    const sx = { textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 0.5, border: `1px solid ${tokens.line}`, borderRadius: 999, px: 1.5, py: 0.6, bgcolor: tokens.win } as const
    const text = <Typography sx={{ fontSize: 13.5, fontWeight: 600, color: tokens.ink }}>{label}</Typography>
    if (!href) return <Box key={label} sx={sx}>{text}</Box>
    return (
      <Box key={label} component={Link} href={href} sx={{ ...sx, "&:hover": { borderColor: tokens.petrol }, "&:hover .rel-arrow": { transform: "translate(2px,-2px)" } }}>
        {text}
        <Box className="rel-arrow" component="span" sx={{ color: tokens.petrol, fontFamily: fonts.mono, fontSize: 12, transition: "transform .2s", "@media (prefers-reduced-motion: reduce)": { transition: "none" } }}>↗</Box>
      </Box>
    )
  }
  return (
    <Box component="section" sx={{ py: { xs: 8, md: 12 }, borderBottom: `1px solid ${tokens.lineSoft}` }}>
      <Container>
        <Reveal>
          <Box sx={{ maxWidth: 640, mb: { xs: 5, md: 7 } }}>
            <Typography variant="h2" sx={{ fontSize: { xs: 28, md: 40 }, color: tokens.ink, mb: 2 }}>Sobre el que ja fas servir, sense migrar res.</Typography>
            <Typography variant="body1" sx={{ fontSize: { xs: 16, md: 18 }, color: tokens.body }}>
              Ni el teu proveïdor ni el teu equip han de canviar d&apos;eines. El sistema es connecta allà on ja hi ha les dades i a la botiga que ja tens.
            </Typography>
          </Box>
        </Reveal>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" }, gap: { xs: 3, md: 4 } }}>
          {cols.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.06}>
              <Box sx={{ p: { xs: 3, md: 3.5 }, borderRadius: 3, border: `1px solid ${tokens.line}`, bgcolor: tokens.win, height: "100%", display: "flex", flexDirection: "column" }}>
                <Typography variant="h3" sx={{ fontFamily: fonts.serif, fontSize: 21, fontWeight: 600, color: tokens.ink, mb: 1 }}>{c.title}</Typography>
                <Typography variant="body1" sx={{ color: tokens.body, mb: 2.5 }}>{c.body}</Typography>
                <Stack direction="row" sx={{ flexWrap: "wrap", gap: 1, mt: "auto" }}>{c.items.map(chip)}</Stack>
              </Box>
            </Reveal>
          ))}
        </Box>
        <Reveal delay={0.1}>
          <Typography variant="body2" sx={{ color: tokens.muted, mt: { xs: 6, md: 8 }, textAlign: "center", maxWidth: 640, mx: "auto" }}>
            Si a més vols automatitzar comandes, feeds o reporting, això és l&apos;
            <Box component={Link} href="/servicios/automatizaciones" sx={linkSx}>automatització de l&apos;operativa</Box>. I si busques trànsit i conversió sobre aquest catàleg, el{" "}
            <Box component={Link} href="/servicios/crecimiento-ecommerce" sx={linkSx}>pack Creixement ecommerce</Box>.
          </Typography>
        </Reveal>
      </Container>
    </Box>
  )
}

function Faq() {
  return (
    <Box component="section" sx={{ py: { xs: 8, md: 12 }, borderBottom: `1px solid ${tokens.lineSoft}` }}>
      <Container sx={{ maxWidth: 760 }}>
        <Reveal>
          <Typography variant="h2" sx={{ fontSize: { xs: 28, md: 40 }, color: tokens.ink, mb: { xs: 4, md: 6 } }}>
            Preguntes freqüents sobre automatitzar la gestió de productes.
          </Typography>
        </Reveal>
        {GESTION_PRODUCTOS_FAQS_CA.map((f, i) => (
          <Accordion key={i} disableGutters elevation={0} sx={{ bgcolor: "transparent", borderBottom: `1px solid ${tokens.lineSoft}`, "&:before": { display: "none" } }}>
            <AccordionSummary sx={{ px: 0 }}>
              <Typography sx={{ fontFamily: fonts.serif, fontSize: { xs: 17, md: 19 }, fontWeight: 600, color: tokens.ink }}>{f.q}</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ px: 0, pb: 3 }}>
              <Typography variant="body1" sx={{ color: tokens.body }}>{f.a}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Container>
    </Box>
  )
}

export default function GestionProductosMuiCa() {
  return (
    <Box sx={{ bgcolor: tokens.paper, color: tokens.body, fontFamily: fonts.sans }}>
      <SiteHeader />
      <Crumbs items={[{ label: "Serveis" }, { label: "Automatització", href: "/servicios/automatizaciones" }, { label: "Gestió de productes" }]} />
      <Hero />
      <Reparto />
      <Modulos />
      <FlujosReales />
      <ComoFunciona />
      <Control />
      <EnProduccion />
      <SobreTuTienda />
      <Faq />
      <DiagnosticoCTA
        title="Retorna al teu equip les hores de carregar fitxes."
        body="Quatre respostes ràpides i et dic quina part de la teva gestió de productes es pot automatitzar primer, sobre la teva botiga i els teus proveïdors actuals. Sense formularis eterns i sense promeses de preu per correu."
      />
      <SiteFooter />
    </Box>
  )
}
