import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://zaroc.de',
  base: '/',
  output: 'static',
  i18n: {
    locales: ['en', 'de'],
    defaultLocale: 'en',
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: false,
    },
  },
  build: {
    format: 'directory',
  },
});
