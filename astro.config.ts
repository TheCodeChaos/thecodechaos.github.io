import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import { SITE } from './src/config';

export default defineConfig({
  site: SITE.website,
  base: process.env.BASE_PATH ?? '/',
  integrations: [sitemap()],
});
