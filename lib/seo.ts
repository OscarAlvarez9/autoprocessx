export const SITE_URL = "https://www.seoscar.com"
export const ORG_ID = `${SITE_URL}/#organization`
export const FOUNDER_ID = `${SITE_URL}/#founder`

/** Perfil del negocio. La ficha de Google es la señal local más fuerte. */
export const ORG_PROFILES = [
  "https://maps.app.goo.gl/4DiyPoE85C2G1JKn8",
]

/** Perfiles verificados de la persona. Solo los que existen y responden. */
export const FOUNDER_PROFILES = [
  "https://www.linkedin.com/in/oscar-alvarez-romani-7882302b3",
  "https://github.com/OscarAlvarez9",
]

/**
 * La persona detrás de SEOscar, en una sola definición. Va en el layout, así
 * que existe en todas las páginas y no solo en /sobre-nosotros: es lo que
 * permite a Google unir la marca con la persona, que es la entidad que nadie
 * más puede registrar.
 */
export const founderSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": FOUNDER_ID,
  name: "Óscar Álvarez",
  jobTitle: "Consultor SEO",
  description: "Consultor SEO para ecommerce. Máster en Machine Learning y en Big Data. Creador de OpoAI.",
  worksFor: { "@id": ORG_ID },
  address: { "@type": "PostalAddress", addressLocality: "Premià de Mar", addressRegion: "Barcelona", addressCountry: "ES" },
  url: `${SITE_URL}/sobre-nosotros`,
  sameAs: FOUNDER_PROFILES,
}

interface ServiceSchemaArgs {
    slug: string
    name: string
    description: string
    serviceType: string
    offers: { name: string; url?: string }[]
}

export function buildServiceSchema({ slug, name, description, serviceType, offers }: ServiceSchemaArgs) {
    const url = `${SITE_URL}${slug}`
    return {
        "@context": "https://schema.org",
        "@type": "Service",
        "@id": `${url}#service`,
        name,
        description,
        serviceType,
        url,
        provider: { "@id": ORG_ID },
        areaServed: [
            { "@type": "Country", name: "España" },
            { "@type": "AdministrativeArea", name: "Unión Europea" },
        ],
        availableLanguage: ["Spanish", "English"],
        hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: `Modalidades de ${name}`,
            itemListElement: offers.map((o) => ({
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: o.name,
                    ...(o.url ? { url: `${SITE_URL}${o.url}` } : {}),
                },
            })),
        },
    }
}
