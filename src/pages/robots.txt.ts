import type { APIRoute } from 'astro';
import { SITE } from '../config';

export const GET: APIRoute = async () => {
  const sitemapUrl = new URL('sitemap-index.xml', SITE.website).toString();

  return new Response(`User-agent: *\nAllow: /\n\nSitemap: ${sitemapUrl}\n`, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
};
