# Migración a seoscar.com · estado y mapa de redirecciones

Corte atómico de la web nueva (este repo) a `www.seoscar.com`, con 301 desde
`seoscar.com` (viejo, mismo dominio) y desde `autoprocessx.com` (host distinto).

## Qué está hecho en el repo (código)

- **`next.config.ts` · `redirects()`**: implementado el mapa verificado de las
  tablas 1 y 2 del runbook. Orden: canónico apex→www, bloque APX (host
  condicionado, específicas → catch-all a home), y bloque seoscar viejo→nuevo.
- Correcciones frente al runbook:
  - `/proyectos` → **`/casos-de-exito`** (la ruta real; no existe `/casos`).
  - Añadidos `/servicios/automatizacion` → `/servicios/automatizaciones` (singular→plural)
    y `/terminos` → `/aviso-legal`.
- Blog de Framer: **lista explícita** al listado, nunca catch-all `/blog/:slug`
  (mataría los `/blog/<slug>` nuevos de Contentful). Acentos en unicode porque
  Next casa el pathname decodificado.

## Pendiente · NO es código (operativo / CMS / dashboard)

1. **Exports de GSC** (Indexación + Rendimiento 12m) de `seoscar.com` y
   `autoprocessx.com`, y crawl de respaldo. Guardar los CSV en esta carpeta:
   `seoscar-gsc.csv`, `apx-gsc.csv`, `seoscar-crawl.csv`, `apx-crawl.csv`.
2. **Slugs APX por tema** (chatbot/agente, automatización/n8n, rag/plataformas)
   y blog no migrado: salen del export. Añadirlos al `TODO` del bloque APX en
   `next.config.ts`, SIEMPRE antes del catch-all a home.
3. **Migrar a Contentful** los posts `que-es-geo` y `que-es-rag` desde APX ANTES
   del corte (si no, el 301 aterriza en 404). Reescribir marca AutoProcessX →
   SEOscar, reorientar ejemplos a ecommerce, y revisar el dato "23% → 2-4% de
   alucinaciones": si no es defendible, dejarlo como `[[ dato real ]]`.
4. **Vercel**: adjuntar `www.seoscar.com`, `seoscar.com`, `autoprocessx.com` y
   `www.autoprocessx.com` al proyecto nuevo. Hasta entonces los redirects APX no
   actúan.
5. **GSC**: cambio de dirección `autoprocessx.com` → `seoscar.com`. En
   `seoscar.com` (mismo dominio) no hay cambio de dirección: enviar sitemap.
6. **Google Business**: cambiar solo la web (las reseñas se mantienen).
7. Rotar `OPENAI_API_KEY` (pendiente desde la estrategia).

## Decisiones abiertas (sección 7 del runbook)

- **Nombre del cliente del carrusel**: conviven "Dimonte" (propuestas),
  "Diomonte" (home) y "Diomento" (web vieja; slug `diomento-homelift`).
  Confirmar con el cliente y unificar en repo/casos/ficha. Requiere confirmación,
  no se toca a ciegas.
- **seoscar.io** (SaaS de auditorías en inglés): decidir si es propio (enlazar
  desde `/tecnologia`) o es colisión de marca a vigilar.

## Verificación pre-corte (sobre la URL de preview)

```bash
# seoscar viejo → nuevo (mismo dominio): 308 y destino directo, sin cadenas
curl -sI https://<preview>/servicios/seo            | grep -i "location\|HTTP"
curl -sI https://<preview>/servicios/automatizacion | grep -i "location\|HTTP"
curl -sI https://<preview>/proyectos                | grep -i "location\|HTTP"
curl -sI https://<preview>/terminos                 | grep -i "location\|HTTP"

# APX → seoscar (host simulado)
curl -sI -H "Host: autoprocessx.com" https://<preview>/blog/que-es-geo | grep -i "location\|HTTP"
curl -sI -H "Host: autoprocessx.com" https://<preview>/cualquier-cosa   | grep -i "location\|HTTP"

# Bots de IA contra el dominio real tras el corte
for ua in GPTBot ClaudeBot PerplexityBot; do curl -sI -A "$ua" https://www.seoscar.com/ | head -1; done
```

Criterio: cada redirección resuelve en UN salto (viejo → nuevo directo), sin
cadenas. Blog nuevo `/blog/<slug>` responde 200 (no lo captura ninguna regla).
