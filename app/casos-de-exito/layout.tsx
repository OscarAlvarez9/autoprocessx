import type { Metadata } from "next";



export const metadata: Metadata = {
  title: { absolute: "Casos de éxito SEO y ecommerce: resultados reales" },
  description: "Casos reales en Shopify, WooCommerce y web a medida: SEO que trae tráfico que compra, CRO, automatización y chatbot de ventas. El código, del cliente.",
  keywords: ["casos de éxito ecommerce", "crecimiento tienda online", "agente de ventas IA caso", "SEO ecommerce resultados", "CRO tienda online", "casos IA ecommerce Barcelona"],
  openGraph: {
            images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "SEOscar, agencia de ecommerce en Barcelona" }],
    title: "Casos de éxito SEO y ecommerce: resultados reales",
    description: "Casos reales en Shopify, WooCommerce y web a medida: SEO que trae tráfico que compra, CRO, automatización y chatbot de ventas. El código, del cliente.",
    type: "website",
    locale: "es_ES",
    url: "https://www.seoscar.com/casos-de-exito",
  },
  alternates: {
    canonical: "https://www.seoscar.com/casos-de-exito",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  // El ItemList de casos vivía aquí y se heredaba a las 15 fichas. Ahora está
  // solo en app/casos-de-exito/page.tsx, generado a partir de los casos.
  return children;
}
