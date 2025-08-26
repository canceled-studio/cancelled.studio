// @ts-check
import tailwindcss from '@tailwindcss/vite';
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@': new URL('./src', import.meta.url).pathname,
      },
    },
  },

  experimental: {
    fonts: [
      {
        provider: fontProviders.google(),
        name: 'Urbanist',
        cssVariable: '--font-urbanist',
        weights: ['100 900'],
      },
    ],
  },
});
