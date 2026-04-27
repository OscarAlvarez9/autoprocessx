export const SITE_URL = "https://www.autoprocessx.com"
export const ORG_ID = `${SITE_URL}/#organization`

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
