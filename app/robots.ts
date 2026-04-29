import type { MetadataRoute } from 'next'

const SITE_URL = 'https://www.autoprocessx.com'

export default function robots(): MetadataRoute.Robots {
  // Paths we don't want indexed by anyone
  const disallowAll = [
    '/api/',
    '/_next/',
    '/admin',
    '/admin/',
    '/draft',
    '/draft/',
    '/preview',
    '/preview/',
    '/*?*preview=*',
    '/404',
    '/500',
  ]

  return {
    rules: [
      // Default — every other crawler / scraper
      {
        userAgent: '*',
        allow: '/',
        disallow: disallowAll,
      },

      // Search engines
      { userAgent: 'Googlebot', allow: '/', disallow: disallowAll },
      { userAgent: 'Googlebot-Image', allow: '/', disallow: disallowAll },
      { userAgent: 'Bingbot', allow: '/', disallow: disallowAll },
      { userAgent: 'DuckDuckBot', allow: '/', disallow: disallowAll },
      { userAgent: 'YandexBot', allow: '/', disallow: disallowAll },

      // OpenAI
      { userAgent: 'GPTBot', allow: '/', disallow: disallowAll },
      { userAgent: 'ChatGPT-User', allow: '/', disallow: disallowAll },
      { userAgent: 'OAI-SearchBot', allow: '/', disallow: disallowAll },

      // Google AI Overviews / Gemini
      { userAgent: 'Google-Extended', allow: '/', disallow: disallowAll },

      // Anthropic / Claude
      { userAgent: 'ClaudeBot', allow: '/', disallow: disallowAll },
      { userAgent: 'anthropic-ai', allow: '/', disallow: disallowAll },
      { userAgent: 'Claude-Web', allow: '/', disallow: disallowAll },

      // Perplexity
      { userAgent: 'PerplexityBot', allow: '/', disallow: disallowAll },
      { userAgent: 'Perplexity-User', allow: '/', disallow: disallowAll },

      // Other AI / search agents
      { userAgent: 'Applebot', allow: '/', disallow: disallowAll },
      { userAgent: 'Applebot-Extended', allow: '/', disallow: disallowAll },
      { userAgent: 'CCBot', allow: '/', disallow: disallowAll }, // Common Crawl — feeds many LLMs
      { userAgent: 'cohere-ai', allow: '/', disallow: disallowAll },
      { userAgent: 'YouBot', allow: '/', disallow: disallowAll },

      // Aggressive scrapers we want to block
      { userAgent: 'AhrefsBot', disallow: '/' },
      { userAgent: 'SemrushBot', disallow: '/' },
      { userAgent: 'MJ12bot', disallow: '/' },
      { userAgent: 'DotBot', disallow: '/' },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  }
}
