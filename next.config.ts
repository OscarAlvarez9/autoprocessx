import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  async headers() {
    return [
      {
        // Frames de animación — nunca cambian, cache 1 año immutable.
        // Visita 2+ = 0 requests de red (servido desde caché del navegador).
        source: "/assets/:dir(robot_frames|robot_frames_sm|automation_frames|automation_frames_sm|chatbot_frames|chatbot_frames_sm|aplicaciones_frames|aplicaciones_frames_sm)/:file*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        // Otros assets estáticos — cache 30 días con revalidate
        source: "/assets/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=2592000, stale-while-revalidate=86400",
          },
        ],
      },
    ];
  },
  async redirects() {
    // Host del dominio de marca antiguo (AutoProcessX). Se resuelve a 301 solo
    // cuando autoprocessx.com esté adjunto al proyecto Vercel nuevo.
    const apxHost = [{ type: "host" as const, value: "(www\\.)?autoprocessx\\.com" }];
    return [
      // 1) Canónico: apex seoscar.com → www (Vercel también lo gestiona).
      {
        source: "/:path*",
        has: [{ type: "host", value: "seoscar.com" }],
        destination: "https://www.seoscar.com/:path*",
        permanent: true,
      },

      // 2) autoprocessx.com → seoscar.com. ESPECÍFICAS PRIMERO, catch-all al
      //    final (el orden importa: la primera regla que casa gana).
      //    Posts migrados: deben existir en Contentful ANTES del corte, o el
      //    301 aterriza en 404. Ver /docs/migracion/README.md.
      { source: "/blog/que-es-geo", has: apxHost, destination: "https://www.seoscar.com/blog/que-es-geo", permanent: true },
      { source: "/blog/que-es-rag", has: apxHost, destination: "https://www.seoscar.com/blog/que-es-rag", permanent: true },
      // TODO (del export de GSC de autoprocessx.com, aún pendiente): añadir aquí
      //   páginas de chatbot/agente     → https://www.seoscar.com/servicios/agente-ventas-ia
      //   páginas de automatización/n8n → https://www.seoscar.com/servicios/automatizaciones
      //   páginas de rag/plataformas    → https://www.seoscar.com/servicios/a-medida
      //   resto de blog sin equivalente → https://www.seoscar.com/blog (lista explícita)
      //   páginas compartidas que existan en APX (/contacto, /sobre-nosotros…) a su ruta.
      //   Todas ANTES del catch-all siguiente.
      { source: "/:path*", has: apxHost, destination: "https://www.seoscar.com/", permanent: true },

      // 3) seoscar.com viejo (agencia SEO) → nuevo (ecommerce), mismo dominio,
      //    sin condición de host. Evita 404 de lo ya indexado.
      { source: "/servicios/ai-chatbot", destination: "/servicios/agente-ventas-ia", permanent: true },
      { source: "/servicios/seo-geo", destination: "/servicios/crecimiento-ecommerce", permanent: true },
      { source: "/servicios/aplicaciones-ia", destination: "/servicios/a-medida", permanent: true },
      { source: "/servicios", destination: "/servicios/crecimiento-ecommerce", permanent: true },
      { source: "/servicios/seo", destination: "/servicios/crecimiento-ecommerce", permanent: true },
      { source: "/servicios/seo-local", destination: "/servicios/crecimiento-ecommerce", permanent: true },
      { source: "/servicios/posicionamiento-ia", destination: "/servicios/crecimiento-ecommerce", permanent: true },
      { source: "/servicios/linkbuilding", destination: "/servicios/crecimiento-ecommerce", permanent: true },
      { source: "/servicios/automatizacion", destination: "/servicios/automatizaciones", permanent: true },
      { source: "/proyectos", destination: "/casos-de-exito", permanent: true },
      { source: "/proyectos/bebubbleibiza", destination: "/casos-de-exito", permanent: true },
      { source: "/pricing", destination: "/diagnostico", permanent: true },
      { source: "/terminos", destination: "/aviso-legal", permanent: true },
      // Producto/plataforma del seoscar viejo: sin equivalente directo, la página
      // de tecnología es lo más afín.
      { source: "/plataforma", destination: "/tecnologia", permanent: true },
      { source: "/roadmap", destination: "/tecnologia", permanent: true },

      // Blog antiguo de Framer: LISTA EXPLÍCITA al listado. NUNCA un catch-all
      // /blog/:slug* (mataría los /blog/<slug> nuevos de Contentful). Next casa
      // el pathname CODIFICADO: los acentos van en %XX (verificado con curl; la
      // forma unicode no casa). Lista parcial; completar con el export de GSC.
      { source: "/blog/3MJucQsILqVS74NhRwmaBE", destination: "/blog", permanent: true },
      { source: "/blog/chatgpt-claude-gemini-o-perplexity-cual-elegir-segun-lo-que-necesites", destination: "/blog", permanent: true },
      { source: "/blog/como-implementar-mcp-con-claude-code-para-automatizacion-de-auditorias-en", destination: "/blog", permanent: true },
      { source: "/blog/que-es-es-seo-y-como-funciona", destination: "/blog", permanent: true },
      { source: "/blog/c%C3%B3mo-optimizar-tu-sitio-para-google-discover", destination: "/blog", permanent: true },
      { source: "/blog/t%C3%A9cnicas-avanzadas-de-seo-sem%C3%A1ntico-y-topic-clustering", destination: "/blog", permanent: true },
      { source: "/blog/seo-internacional-avanzado-hreflang-y-geolocalizaci%C3%B3n", destination: "/blog", permanent: true },
      // Verificados en GSC el 2026-07-17 (impresiones últimos 90 días, daban 404):
      { source: "/blog/3modzTbvbJX01DNniPS16p", destination: "/blog", permanent: true },
      { source: "/blog/claude-seo-es-tan-bueno-como-parece-o-nos-va-a-quitar-el-trabajo", destination: "/blog", permanent: true },
      { source: "/blog/arquitectura-seo-por-que-tu-web-es-un-laberinto-sin-salida-y-como", destination: "/blog", permanent: true },
      { source: "/blog/google-maps-no-es-un-desierto-por-que-tu-web-es-el-mando-a-distancia-de-tu", destination: "/blog", permanent: true },
      { source: "/blog/yoast-seo-por-que-obsesionarte-con-el-semaforo-verde-te-esta-haciendo-perder-dinero", destination: "/blog", permanent: true },
      // Post antiguo sobre Make: el nuevo n8n-vs-make-vs-zapier es equivalente directo.
      { source: "/blog/automatiza-o-muere-como-conectar-tus-formularios-a-make-para-no-perder-ni-un", destination: "/blog/n8n-vs-zapier-make-comparativa-real", permanent: true },
    ];
  },
};

export default nextConfig;
