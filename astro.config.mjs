import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import alpinejs from '@astrojs/alpinejs';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://gracemidwiferycollective.com',
  integrations: [
    alpinejs({ entrypoint: '/src/entrypoint' }),
    sitemap(),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
