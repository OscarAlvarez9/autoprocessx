// Preguntas frecuentes de /posicionamiento-geo. Un solo origen para el texto
// visible (GeoMui) y para el FAQPage JSON-LD (page.tsx), así nunca divergen.
// Sin cifras ni promesas de resultado; único plazo, el del diagnóstico.

export const GEO_FAQS: { q: string; a: string }[] = [
  {
    q: "¿Qué diferencia hay entre GEO y SEO?",
    a: "El SEO trabaja para que tu web aparezca en la lista de resultados de Google. El GEO trabaja para que los asistentes de IA (ChatGPT, Perplexity, Claude o los AI Overviews de Google) te mencionen y te enlacen cuando responden. Comparten base técnica, pero el GEO añade dos condiciones: que los bots de IA puedan leer tu web y que tu contenido se pueda citar tal cual.",
  },
  {
    q: "Si ya hago SEO, ¿ya estoy haciendo GEO?",
    a: "En parte. Una web bien rastreable y con buen contenido tiene medio camino hecho. Pero el SEO clásico no revisa si tu servidor o tu firewall bloquean a GPTBot, ClaudeBot o PerplexityBot, ni si tus páginas dan respuestas directas que una IA pueda citar. Eso es lo que añade el posicionamiento GEO.",
  },
  {
    q: "Uso Cloudflare. ¿Puede estar bloqueando a ChatGPT?",
    a: "Puede, y pasa a menudo: las protecciones anti-bot bloquean por defecto a los rastreadores de IA. Lo verifico contra tu dominio real y, si están bloqueados, se permite el paso a los bots legítimos de IA sin bajar la guardia frente al scraping malicioso.",
  },
  {
    q: "¿Qué es llms.txt y lo necesito?",
    a: "Es un archivo en la raíz de tu web que resume, en un formato fácil de leer para un modelo de lenguaje, qué haces y cuáles son tus páginas importantes. Es una propuesta de estándar, no una garantía de nada, así que lo trato como una pieza más: lo publico junto al acceso de bots, el schema y el contenido citable, que son lo que más pesa.",
  },
  {
    q: "¿Sirve solo para tiendas online?",
    a: "No. En tiendas online el foco son fichas, categorías y FAQs de compra. En un negocio local, que tu ficha, tus servicios y tu zona estén claros y sean consistentes para que una IA pueda recomendarte cuando alguien pregunta por lo que haces cerca de él.",
  },
  {
    q: "¿Cuánto cuesta el posicionamiento GEO?",
    a: "Depende de lo que salga del diagnóstico: no es lo mismo una web que solo necesita abrir el acceso a los bots que una que hay que reestructurar. Por eso no hay tarifa pública: precio cerrado tras el diagnóstico, que es gratis y te llega en 24-48 h.",
  },
]
