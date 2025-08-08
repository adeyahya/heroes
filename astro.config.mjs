// @ts-check
import tailwindcss from '@tailwindcss/vite'
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://heroes.inklusif.id',
  integrations: [mdx(), sitemap(), tailwindcss()],

  vite: {
    plugins: [tailwindcss()],
  },
});