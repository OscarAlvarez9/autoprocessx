import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Auditoría SEO y GEO para ecommerce: qué incluye y cuánto cuesta | SEOscar" },
  description:
    "Auditoría SEO técnica y GEO de tu tienda online: qué incluye, qué te llevas y cuánto cuesta. Un documento con todo lo que aplicar, priorizado por impacto en ventas.",
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
    title: "Auditoría SEO y GEO para ecommerce: qué incluye y cuánto cuesta | SEOscar",
    description:
      "Auditoría SEO técnica y GEO de tu tienda online: qué incluye, qué te llevas y cuánto cuesta. Un documento con todo lo que aplicar, priorizado por impacto en ventas.",
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
