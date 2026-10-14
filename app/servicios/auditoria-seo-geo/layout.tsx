import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Auditoría SEO para ecommerce: SEO, GEO y CRO | SEOscar" },
  description:
    "Auditoría SEO técnica, GEO y CRO de tu tienda: un plan priorizado por impacto en ventas y sesión de entrega en directo. Precio cerrado antes de empezar.",
  keywords: [
    "auditoría SEO",
    "auditoría SEO ecommerce",
    "precio auditoría SEO",
    "auditoría SEO profesional",
    "auditoría GEO",
    "auditoría técnica SEO",
    "auditoría SEO tienda online",
    "fugas de conversión",
  ],
  openGraph: {
            images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "SEOscar, agencia de ecommerce en Barcelona" }],
    title: "Auditoría SEO para ecommerce: SEO, GEO y CRO | SEOscar",
    description:
      "Auditoría SEO técnica, GEO y CRO de tu tienda: un plan priorizado por impacto en ventas y sesión de entrega en directo. Precio cerrado antes de empezar.",
    type: "website",
    locale: "es_ES",
    url: "https://www.seoscar.com/servicios/auditoria-seo-geo",
  },
  alternates: {
    canonical: "https://www.seoscar.com/servicios/auditoria-seo-geo",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
