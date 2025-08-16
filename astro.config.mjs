// @ts-check
import tailwindcss from '@tailwindcss/vite'
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

import db from '@astrojs/db';

// https://astro.build/config
export default defineConfig({
  site: 'https://heroes.inklusif.id',
  output: "server",
  integrations: [
    mdx(),
    sitemap(),
    tailwindcss(),
    react(),
    db(),
  ],

  vite: {
    plugins: [tailwindcss()],
  },

  adapter: vercel(),
});