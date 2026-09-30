import type { Metadata } from "next";
import { ORG_ID } from "@/lib/seo";

const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "Sobre SEOscar",
  url: "https://www.seoscar.com/sobre-nosotros",
  description: "SEOscar es la consultoría SEO para ecommerce de Óscar Álvarez, en Barcelona y el Maresme. Hago que las tiendas online vendan más con SEO técnico, GEO, CRO, agente de ventas IA y automatización, sobre su plataforma actual y con el código en su propiedad.",
  // Una sola entidad Organization en toda la web: la del layout raíz. Aquí
  // solo se referencia; antes había una copia inline sin @id y un Person
  // duplicado ("Oscar" sin acento), que para Google eran entidades distintas.
  mainEntity: { "@id": ORG_ID },
};


export const metadata: Metadata = {
  title: { absolute: "Quién hay detrás: Óscar, Roger y Sam, ecommerce | SEOscar" },
  description: "Detrás de SEOscar: Óscar, Roger y Sam, en Barcelona. Hago que las tiendas online vendan más con SEO, agente de ventas IA y automatización. El código es tuyo.",
  keywords: ["estudio IA ecommerce Barcelona", "consultor SEO ecommerce", "especialistas n8n", "sobre SEOscar", "sistemas de IA tiendas online", "Óscar Álvarez consultor SEO"],
  openGraph: {
            images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Óscar Álvarez, consultor SEO para ecommerce · SEOscar" }],
    title: "Quién hay detrás: Óscar, Roger y Sam, ecommerce | SEOscar",
    description: "Detrás de SEOscar: Óscar, Roger y Sam, en Barcelona. Hago que las tiendas online vendan más con SEO, agente de ventas IA y automatización. El código es tuyo.",
    type: "website",
    locale: "es_ES",
    url: "https://www.seoscar.com/sobre-nosotros",
  },
  alternates: {
    canonical: "https://www.seoscar.com/sobre-nosotros",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />
      {children}
    </>
  );
}
