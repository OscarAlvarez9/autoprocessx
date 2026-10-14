"use client"

import Link from "@/components/LocaleLink"
import Image from "next/image"
import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import Paper from "@mui/material/Paper"
import Accordion from "@mui/material/Accordion"
import AccordionSummary from "@mui/material/AccordionSummary"
import AccordionDetails from "@mui/material/AccordionDetails"
import { tokens, fonts } from "@/lib/mui/theme"
import { AUDITORIA_FAQS_CA, AUDITORIA_LINK_TEXT_CA } from "@/lib/serviciosFaqsCa"
import { SiteHeader, SiteFooter, DiagnosticoCTA, ServiceHero, StatementBand, Reveal, ArtifactWindow, Crumbs } from "@/components/mui/shared"
import FeaturedCases from "@/components/mui/FeaturedCases"
import { GeoAnswer, Gauge, StoreTemplate, DatosIntuicion } from "@/components/mui/artifacts"
import { RankClimb, FunnelLeakFix } from "@/components/mui/growthArtifacts"

/* ---------- datos ---------- */

const SEO_GEO = [
  { t: "Landing i categories", d: "Com indexen i posicionen les teves pàgines d'aterratge i categories: arquitectura, contingut i intenció de cerca. Quines pàgines sobren, quines falten i quines es trepitgen entre elles." },
  { t: "Fitxes de producte", d: "Títol, contingut, Schema de producte i senyals de compra. Que la fitxa posicioni i vengui, no només una de les dues coses." },
  { t: "GEO · AI Search", d: "Si ChatGPT, Perplexity o els AI Overviews citen la teva botiga quan algú pregunta què comprar, i què et falta perquè ho facin: dades de marca estructurades i contingut citable." },
]

const FUNNEL = [
  { n: "01", t: "Fitxa de producte", d: "Dubtes sense resposta, fotos que no venen, botó de compra que no es veu. La venda comença a perdre's aquí." },
  { n: "02", t: "Cistella", d: "Costos sorpresa, passos de més, distraccions que treuen el comprador del camí." },
  { n: "03", t: "Checkout", d: "Formularis eterns, mètodes de pagament que falten, errors que ningú no vigila." },
]

const TRACKING = [
  { t: "Esdeveniments i conversions a GA4", d: "Què es mesura, què es mesura dues vegades i què no es mesura gens." },
  { t: "Píxels de campanyes", d: "Que cada euro invertit en publicitat es pugui atribuir a alguna cosa real." },
  { t: "Embut mesurable de punta a punta", d: "De la fitxa a la compra, cada pas amb la seva dada. Sense això, tota la resta és opinió." },
]

const ENTREGABLES = [
  { n: "01", t: "El document complet", d: "Tot el que he trobat a les quatre àrees, explicat amb claredat i amb exemples de la teva pròpia botiga. Res de bolcats d'eina." },
  { n: "02", t: "Pla prioritzat per impacte", d: "Cada millora ordenada pel que aporta a la venda, no pel fàcil que és. Saps per on començar i per què." },
  { n: "03", t: "Revisió de disseny accionable", d: "Recomanacions concretes de jerarquia, fricció i confiança, a punt per passar a qui toqui la teva botiga." },
  { n: "04", t: "Sessió de lliurament", d: "T'ho explico en directe i resolc dubtes, perquè el document no es quedi en un PDF sense obrir." },
]

const linkSx = { color: tokens.ink, fontWeight: 600, textDecoration: "underline", textDecorationColor: tokens.line, "&:hover": { textDecorationColor: tokens.petrol } } as const

// Mateix origen que el FAQPage JSON-LD; l'última resposta porta l'enllaç a
// #medicion sobre el text AUDITORIA_LINK_TEXT_CA.
const FAQS: { q: string; a: React.ReactNode }[] = AUDITORIA_FAQS_CA.map((f) => {
  if (!f.a.includes(AUDITORIA_LINK_TEXT_CA)) return f
  const [before, after] = f.a.split(AUDITORIA_LINK_TEXT_CA)
  return {
    q: f.q,
    a: (
      <>
        {before}
        <Box component={Link} href="#medicion" sx={linkSx}>{AUDITORIA_LINK_TEXT_CA}</Box>
        {after}
      </>
    ),
  }
})

/* ---------- secciones ---------- */

function Hero() {
  return (
    <ServiceHero
      title={
        <>
          Auditoria SEO i GEO del teu ecommerce, més les <Box component="em" sx={{ fontStyle: "italic", color: tokens.petrol }}>fugues</Box> de conversió
        </>
      }
      sub="Una auditoria SEO completa de la teva botiga, de la cerca al checkout: què frena el teu posicionament a Google, si la IA et cita quan algú pregunta què comprar i on se t'escapa la conversió. Tot en un document, ordenat per impacte en vendes."
      specs={[
        ["abast", "SEO/GEO + CRO + disseny + mesurament"],
        ["lliurable", "un document amb tot el que cal aplicar i millorar"],
        ["format", "producte tancat, sense pack ni permanència"],
      ]}
      note="Si després contractes el pack Creixement, el pla ja està fet."
      artifact={
        <ArtifactWindow tag="auditoria · estat real de la botiga" ratio="16 / 10">
          <Gauge />
        </ArtifactWindow>
      }
    />
  )
}

// El concepto central: un único documento accionable, no una lista de errores.
function Documento() {
  return (
    <Box component="section" sx={{ py: { xs: 8, md: 12 }, borderBottom: `1px solid ${tokens.lineSoft}` }}>
      <Container>
        <Reveal>
          <Paper elevation={0} sx={{ bgcolor: tokens.surface, border: `1px solid ${tokens.line}`, borderRadius: 4, overflow: "hidden" }}>
            <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1.15fr 0.85fr" }, alignItems: "stretch" }}>
              <Box sx={{ p: { xs: 4, md: 7 } }}>
                <Typography variant="h2" sx={{ fontSize: { xs: 26, md: 36 }, color: tokens.ink, mb: 3, maxWidth: 620 }}>
                  Tot en un document. Res a l&apos;aire.
                </Typography>
                <Typography variant="body1" sx={{ fontSize: { xs: 16, md: 18 }, color: tokens.body, maxWidth: 640 }}>
                  El resultat no és una llista d&apos;errors ni un bolcat d&apos;eina. És <Box component="span" sx={{ color: tokens.ink, fontWeight: 700 }}>un únic document amb tot el que cal aplicar i millorar al teu ecommerce</Box>, explicat amb claredat i ordenat per impacte en vendes: què corregir primer, per què i com. L&apos;executes amb mi, amb el teu equip o amb qui vulguis.
                </Typography>
              </Box>
              <Box sx={{ position: "relative", minHeight: { xs: 220, md: "auto" }, borderLeft: { md: `1px solid ${tokens.line}` }, borderTop: { xs: `1px solid ${tokens.line}`, md: "none" } }}>
                <Image src="/assets/gen/photo-pizarra.png" alt="Pla de treball d'una botiga en línia esquematitzat en una pissarra" fill sizes="(max-width: 900px) 100vw, 38vw" style={{ objectFit: "cover" }} />
              </Box>
            </Box>
          </Paper>
        </Reveal>
      </Container>
    </Box>
  )
}

function BlockHead({ num, title }: { num: string; title: string }) {
  return (
    <Reveal>
      <Stack direction="row" spacing={2.5} sx={{ alignItems: "baseline", mb: 4 }}>
        <Typography aria-hidden sx={{ fontFamily: fonts.serif, fontSize: { xs: 40, md: 52 }, lineHeight: 1, color: `${tokens.petrol}66` }}>{num}</Typography>
        <Typography variant="h3" sx={{ fontSize: { xs: 24, md: 32 }, color: tokens.ink }}>{title}</Typography>
      </Stack>
    </Reveal>
  )
}

// Bloque 1: artefactos apilados a la izquierda, lista entre hairlines a la derecha.
function BlockSeoGeo() {
  return (
    <Box sx={{ mb: { xs: 8, md: 12 } }}>
      <BlockHead num="01" title="SEO/GEO de landing i fitxes de producte" />
      <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "0.92fr 1.08fr" }, gap: { xs: 4, md: 7 }, alignItems: "center" }}>
        <Reveal>
          <Stack spacing={3}>
            <RankClimb />
            <ArtifactWindow tag="geo · et citen les IA" ratio="16 / 9">
              <GeoAnswer />
            </ArtifactWindow>
          </Stack>
        </Reveal>
        <Reveal delay={0.08}>
          <Stack>
            {SEO_GEO.map((s, i) => (
              <Box key={s.t} sx={{ py: 2.5, borderTop: i === 0 ? "none" : `1px solid ${tokens.lineSoft}` }}>
                <Typography component="h4" sx={{ fontFamily: fonts.serif, fontSize: 19, fontWeight: 600, color: tokens.ink, mb: 0.75 }}>{s.t}</Typography>
                <Typography variant="body2" sx={{ color: tokens.body, maxWidth: 460 }}>{s.d}</Typography>
              </Box>
            ))}
            <Typography variant="body2" sx={{ color: tokens.muted, pt: 2.5, borderTop: `1px solid ${tokens.lineSoft}`, maxWidth: 460 }}>
              La teva botiga és d&apos;una plataforma concreta? El detall és al <Box component={Link} href="/agencia-shopify" sx={linkSx}>SEO per a Shopify</Box> i al <Box component={Link} href="/agencia-woocommerce" sx={linkSx}>SEO per a WooCommerce</Box>.
            </Typography>
          </Stack>
        </Reveal>
      </Box>
    </Box>
  )
}

// Bloque 2: timeline del recorrido de compra + funnel animado que sella la fuga.
function BlockFugas() {
  return (
    <Box sx={{ mb: { xs: 8, md: 12 } }}>
      <BlockHead num="02" title="Fugues de conversió al funnel" />
      <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1.05fr 0.95fr" }, gap: { xs: 4, md: 7 }, alignItems: "center" }}>
        <Box>
          <Reveal>
            <Typography variant="body1" sx={{ color: tokens.body, maxWidth: 520, mb: 4 }}>
              Seguim el recorregut complet d&apos;una compra a la teva botiga i anotem on cau la gent. Cada fuga entra al document amb la seva causa i la seva correcció.
            </Typography>
          </Reveal>
          {FUNNEL.map((p, i) => (
            <Reveal key={p.n} delay={i * 0.05}>
              <Stack direction="row" spacing={{ xs: 2, md: 3 }} sx={{ pb: i === FUNNEL.length - 1 ? 0 : 4 }}>
                <Stack sx={{ alignItems: "center" }}>
                  <Box sx={{ width: 40, height: 40, flexShrink: 0, borderRadius: 999, border: `1px solid ${tokens.line}`, bgcolor: tokens.win, display: "grid", placeItems: "center" }}>
                    <Typography sx={{ fontFamily: fonts.mono, fontSize: 13, fontWeight: 600, color: tokens.petrol }}>{p.n}</Typography>
                  </Box>
                  {i !== FUNNEL.length - 1 && <Box sx={{ flex: 1, width: "1px", bgcolor: tokens.lineSoft, mt: 1 }} />}
                </Stack>
                <Box sx={{ pt: 0.5 }}>
                  <Typography component="h4" sx={{ fontFamily: fonts.serif, fontSize: 19, fontWeight: 600, color: tokens.ink, mb: 0.5 }}>{p.t}</Typography>
                  <Typography variant="body2" sx={{ color: tokens.body }}>{p.d}</Typography>
                </Box>
              </Stack>
            </Reveal>
          ))}
        </Box>
        <Reveal delay={0.1}>
          <FunnelLeakFix />
        </Reveal>
      </Box>
    </Box>
  )
}

// Bloque 3: panel entintado a todo ancho, mock de tienda + texto.
function BlockDiseno() {
  return (
    <Box sx={{ mb: { xs: 8, md: 12 } }}>
      <BlockHead num="03" title="Landing i disseny orientat a CRO" />
      <Reveal>
        <Paper elevation={0} sx={{ bgcolor: `${tokens.petrol}0D`, border: `1px solid ${tokens.petrol}33`, borderRadius: 4, p: { xs: 3, md: 5 } }}>
          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "0.95fr 1.05fr" }, gap: { xs: 4, md: 7 }, alignItems: "center" }}>
            <ArtifactWindow tag="ux · revisió de la botiga" ratio="4 / 3">
              <StoreTemplate />
            </ArtifactWindow>
            <Box>
              <Typography variant="body1" sx={{ color: tokens.body, mb: 2.5, maxWidth: 520 }}>
                Revisió UX/UI de la botiga amb ulls de comprador: <Box component="span" sx={{ color: tokens.ink, fontWeight: 700 }}>jerarquia</Box> (què es veu primer i si és el que ven), <Box component="span" sx={{ color: tokens.ink, fontWeight: 700 }}>fricció</Box> (quins passos i clics sobren) i <Box component="span" sx={{ color: tokens.ink, fontWeight: 700 }}>confiança</Box> (els senyals que fan que algú hi deixi la targeta).
              </Typography>
              <Typography variant="body1" sx={{ color: tokens.body, maxWidth: 520 }}>
                Cada troballa va al document com una recomanació concreta de disseny, no com una opinió. A punt per passar a qui toqui la teva botiga.
              </Typography>
            </Box>
          </Box>
        </Paper>
      </Reveal>
    </Box>
  )
}

// Bloque 4: texto a la izquierda, artefacto datos vs intuición a la derecha.
function BlockMedicion() {
  return (
    <Box id="medicion" sx={{ scrollMarginTop: 90 }}>
      <BlockHead num="04" title="Mesurament i seguiment" />
      <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1.05fr 0.95fr" }, gap: { xs: 4, md: 7 }, alignItems: "center" }}>
        <Reveal>
          <Box>
            <Typography variant="body1" sx={{ color: tokens.body, maxWidth: 520, mb: 3 }}>
              No pots optimitzar el que mesures malament. Audito la teva analítica perquè les decisions que prenguis després, amb mi o sense mi, surtin de dades i no d&apos;intuïció.
            </Typography>
            <Stack>
              {TRACKING.map((s, i) => (
                <Box key={s.t} sx={{ py: 2, borderTop: i === 0 ? "none" : `1px solid ${tokens.lineSoft}` }}>
                  <Typography component="h4" sx={{ fontFamily: fonts.serif, fontSize: 18, fontWeight: 600, color: tokens.ink, mb: 0.5 }}>{s.t}</Typography>
                  <Typography variant="body2" sx={{ color: tokens.body, maxWidth: 460 }}>{s.d}</Typography>
                </Box>
              ))}
            </Stack>
          </Box>
        </Reveal>
        <Reveal delay={0.1}>
          <ArtifactWindow tag="analítica · dades, no intuïció" ratio="16 / 10">
            <DatosIntuicion />
          </ArtifactWindow>
        </Reveal>
      </Box>
    </Box>
  )
}

function QueAuditamos() {
  return (
    <Box component="section" sx={{ py: { xs: 8, md: 12 }, borderBottom: `1px solid ${tokens.lineSoft}` }}>
      <Container>
        <Reveal>
          <Typography variant="h2" sx={{ fontSize: { xs: 28, md: 40 }, color: tokens.ink, mb: 2, maxWidth: 640 }}>
            Què audito.
          </Typography>
          <Typography variant="body1" sx={{ color: tokens.body, maxWidth: 600, mb: { xs: 6, md: 9 } }}>
            Quatre àrees, un mateix objectiu: trobar tot el que et costa vendes i consolidar-ho al document, ordenat per impacte.
          </Typography>
        </Reveal>
        <BlockSeoGeo />
        <BlockFugas />
        <BlockDiseno />
        <BlockMedicion />
      </Container>
    </Box>
  )
}

function QueTeLlevas() {
  return (
    <Box component="section" sx={{ py: { xs: 8, md: 12 }, borderBottom: `1px solid ${tokens.lineSoft}` }}>
      <Container>
        <Reveal>
          <Typography variant="h2" sx={{ fontSize: { xs: 28, md: 40 }, color: tokens.ink, mb: { xs: 5, md: 8 }, maxWidth: 560 }}>
            Què t&apos;emportes.
          </Typography>
        </Reveal>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "repeat(4, 1fr)" }, gap: { xs: 4, md: 3 } }}>
          {ENTREGABLES.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.06}>
              <Box sx={{ position: "relative", pt: 3, borderTop: `2px solid ${tokens.line}` }}>
                <Box aria-hidden sx={{ position: "absolute", top: "-5px", left: 0, width: 8, height: 8, borderRadius: 999, bgcolor: tokens.petrol }} />
                <Typography sx={{ fontFamily: fonts.mono, fontSize: 12, color: tokens.petrol, mb: 1 }}>{s.n}</Typography>
                <Typography component="h3" sx={{ fontFamily: fonts.serif, fontSize: 20, fontWeight: 600, color: tokens.ink, mb: 1 }}>{s.t}</Typography>
                <Typography variant="body2" sx={{ color: tokens.body }}>{s.d}</Typography>
              </Box>
            </Reveal>
          ))}
        </Box>
        <Reveal delay={0.2}>
          <Typography sx={{ fontFamily: fonts.mono, fontSize: 12, color: tokens.muted, mt: { xs: 4, md: 6 } }}>
            El document és teu. L&apos;executes amb mi, amb el teu equip o amb qui vulguis.
          </Typography>
        </Reveal>
      </Container>
    </Box>
  )
}

// Bloque de precio: captura el clúster "auditoría seo precio". El [[precio desde]]
// lo rellena Óscar con una cifra real antes de publicar; sin número, la sección
// no compite por esas keywords.
function Precio() {
  const FACTORES: [string, string][] = [
    ["La mida del catàleg.", "Auditar 300 fitxes de producte i auditar-ne 30.000 no és la mateixa feina. L'estructura de categories, els filtres i les variants són on més es trenca el SEO d'un ecommerce, i això escala amb el catàleg."],
    ["Quantes plataformes cal tocar.", "Una botiga Shopify és una feina. Una botiga Shopify més un WordPress corporatiu més un blog en un altre domini en són tres."],
    ["Quants idiomes o mercats.", "Cada versió d'idioma afegeix hreflang, canonicals creuats i la seva pròpia estratègia de contingut."],
  ]
  return (
    <Box component="section" id="precio" sx={{ py: { xs: 8, md: 12 }, borderBottom: `1px solid ${tokens.lineSoft}`, scrollMarginTop: 90 }}>
      <Container sx={{ maxWidth: 760 }}>
        <Reveal>
          <Typography variant="h2" sx={{ fontSize: { xs: 28, md: 40 }, color: tokens.ink, mb: 3 }}>
            Quant costa una auditoria SEO
          </Typography>
          <Typography variant="body1" sx={{ fontSize: { xs: 16, md: 18 }, color: tokens.body, mb: 2.5, maxWidth: 680 }}>
            T&apos;ho dic directament, perquè buscar el preu d&apos;una auditoria SEO i trobar &laquo;depèn, contacta&raquo; és perdre el temps de tothom.
          </Typography>
          <Typography variant="body1" sx={{ fontSize: { xs: 16, md: 18 }, color: tokens.body, mb: 4, maxWidth: 680 }}>
            Una auditoria SEO i GEO d&apos;ecommerce amb mi comença a <Box component="span" sx={{ color: tokens.ink, fontWeight: 700 }}>500€</Box>. Aquest és el terra: catàleg estàndard, una plataforma, un idioma. A partir d&apos;aquí puja segons tres coses concretes, i només aquestes tres:
          </Typography>
          <Stack sx={{ mb: 4 }}>
            {FACTORES.map(([t, d], i) => (
              <Box key={t} sx={{ py: 2.5, borderTop: `1px solid ${tokens.lineSoft}`, ...(i === FACTORES.length - 1 ? { borderBottom: `1px solid ${tokens.lineSoft}` } : {}) }}>
                <Typography variant="body1" sx={{ color: tokens.body, maxWidth: 640 }}>
                  <Box component="span" sx={{ color: tokens.ink, fontWeight: 700 }}>{t}</Box> {d}
                </Typography>
              </Box>
            ))}
          </Stack>
          <Typography variant="body1" sx={{ color: tokens.body, maxWidth: 680 }}>
            El que no canvia el preu: el sector, la urgència o com de bé vagi el negoci. El preu és tancat i el saps abans de començar. Sense bossa d&apos;hores, sense ampliacions a mig camí, sense permanència. I si després treballes{" "}
            <Box component={Link} href="/servicios/crecimiento-ecommerce" sx={linkSx}>el pack Creixement</Box>, aquest pla ja està fet.
          </Typography>
        </Reveal>
      </Container>
    </Box>
  )
}

// Bloque "auditoría gratis": encauza esa búsqueda al diagnóstico, que es el
// activo real de captación. Sin inventar nada.
function Gratis() {
  return (
    <Box component="section" id="gratis" sx={{ py: { xs: 8, md: 12 }, borderBottom: `1px solid ${tokens.lineSoft}`, scrollMarginTop: 90 }}>
      <Container sx={{ maxWidth: 760 }}>
        <Reveal>
          <Typography variant="h2" sx={{ fontSize: { xs: 28, md: 40 }, color: tokens.ink, mb: 3 }}>
            I l&apos;auditoria SEO gratuïta?
          </Typography>
          <Typography variant="body1" sx={{ fontSize: { xs: 16, md: 18 }, color: tokens.body, mb: 2.5, maxWidth: 680 }}>
            Existeix, i és{" "}
            <Box component={Link} href="/diagnostico" sx={linkSx}>el diagnòstic gratuït de la teva botiga</Box>. Respons quatre preguntes, jo miro la teva botiga i en 24-48 h et dic les tres o quatre coses que més vendes et costen ara mateix. Gratuït i sense compromís.
          </Typography>
          <Typography variant="body1" sx={{ fontSize: { xs: 16, md: 18 }, color: tokens.body, mb: 2.5, maxWidth: 680 }}>
            El que no és: un informe automàtic de 40 pàgines generat per una eina. Aquests els pots treure tu mateix a Ahrefs o a SEOptimer en dos minuts i et diran que tens 1.400 errors, la majoria irrellevants. Un PDF de colors no és una auditoria, és un bolcat.
          </Typography>
          <Typography variant="body1" sx={{ fontSize: { xs: 16, md: 18 }, color: tokens.body, mb: 4, maxWidth: 680 }}>
            La diferència entre el diagnòstic gratuït i l&apos;auditoria completa és d&apos;abast, no de qualitat: el gratuït t&apos;orienta, l&apos;auditoria et dona el pla sencer amb les quatre àrees cobertes i l&apos;ordre d&apos;execució.
          </Typography>
          <Button component={Link} href="/diagnostico" variant="contained" color="primary" sx={{ borderRadius: 2 }}>
            Reserva el teu diagnòstic gratuït <Box component="span" sx={{ ml: 0.75 }}>→</Box>
          </Button>
        </Reveal>
      </Container>
    </Box>
  )
}

function MetodoLink() {
  return (
    <Box component="section" sx={{ py: { xs: 7, md: 10 }, borderBottom: `1px solid ${tokens.lineSoft}` }}>
      <Container sx={{ textAlign: "center", maxWidth: 680 }}>
        <Reveal>
          <Typography variant="h2" sx={{ fontSize: { xs: 24, md: 32 }, color: tokens.ink, mb: 2 }}>
            Mateix mètode, mateix responsable.
          </Typography>
          <Typography variant="body1" sx={{ color: tokens.body, mb: 3 }}>
            L&apos;auditoria segueix el mateix mètode que tota la resta: dades reals de la teva botiga, abast tancat abans de començar i lliurables que s&apos;entenen.
          </Typography>
          <Button component={Link} href="/metodo" sx={{ color: tokens.ink, fontWeight: 700, px: 0, "&:hover": { bgcolor: "transparent", color: tokens.petrol } }}>
            Veure el mètode complet <Box component="span" sx={{ color: tokens.petrol, ml: 0.5 }}>↗</Box>
          </Button>
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
            Preguntes freqüents.
          </Typography>
        </Reveal>
        {FAQS.map((f, i) => (
          <Accordion key={i} disableGutters elevation={0} sx={{ bgcolor: "transparent", borderBottom: `1px solid ${tokens.lineSoft}`, "&:before": { display: "none" } }}>
            <AccordionSummary sx={{ px: 0 }}>
              <Typography component="h3" sx={{ fontFamily: fonts.serif, fontSize: { xs: 17, md: 19 }, fontWeight: 600, color: tokens.ink }}>{f.q}</Typography>
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

export default function AuditoriaMuiCa() {
  return (
    <Box sx={{ bgcolor: tokens.paper, color: tokens.body, fontFamily: fonts.sans }}>
      <SiteHeader />
      <Crumbs items={[{ label: "Serveis" }, { label: "Auditoria SEO/GEO" }]} />
      <Hero />
      <Documento />
      <QueAuditamos />
      <StatementBand as="p" title="No pots arreglar el que no has mesurat." photo="/assets/gen/photo-analitica.png" />
      <QueTeLlevas />
      <Precio />
      <Gratis />
      <MetodoLink />
      <FeaturedCases
        title="Botigues que ja han passat per aquí."
        sub="Cada cas enllaça a la seva fitxa amb el que vaig fer i el resultat."
        slugs={["marea-es", "totfinestra", "farmacia-garcia-del-cerro"]}
      />
      <Faq />
      <DiagnosticoCTA />
      <SiteFooter />
    </Box>
  )
}
