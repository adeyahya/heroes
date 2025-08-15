// @ts-check
import tailwindcss from '@tailwindcss/vite'
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import swup from '@swup/astro';
import vercel from '@astrojs/vercel';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://heroes.inklusif.id',
  output: "server",
  integrations: [
    mdx(),
    sitemap(),
    tailwindcss(),
    swup(),
  ],

  vite: {
    plugins: [tailwindcss()],
  },

  adapter: vercel({
    includeFiles: ["./src/assets/gallery"]
  }),
});