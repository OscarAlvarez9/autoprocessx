import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Auditoría SEO, GEO y CRO para tu ecommerce | SEOscar" },
  description:
    "Un documento con todo lo que aplicar en tu tienda: SEO y GEO de fichas y landing, fugas de conversión, diseño CRO y medición. Priorizado por impacto en ventas.",
  keywords: [
    "auditoría SEO ecommerce",
    "auditoría GEO",
    "visibilidad en ChatGPT y Perplexity",
    "auditoría CRO",
    "fugas de conversión",
    "auditoría tienda online",
    "optimización de checkout",
    "auditoría GA4 y píxeles",
  ],
  openGraph: {
    title: "Auditoría SEO, GEO y CRO para tu ecommerce | SEOscar",
    description:
      "Un documento con todo lo que aplicar en tu tienda: SEO y GEO de fichas y landing, fugas de conversión, diseño CRO y medición. Priorizado por impacto en ventas.",
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
