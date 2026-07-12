import { defineConfig } from 'astro/config';

const [environmentOwner = '', repository = ''] = (process.env.GITHUB_REPOSITORY ?? '').split('/');
const owner = environmentOwner || 'zaroc-dev';
const pagesOrigin = `https://${owner.toLowerCase()}.github.io`;
const isUserSite = repository.toLowerCase() === `${owner.toLowerCase()}.github.io`;
const inferredBase = repository && !isUserSite ? `/${repository}` : '/';

export default defineConfig({
  site: process.env.SITE_URL || pagesOrigin,
  base: process.env.BASE_PATH || (process.env.GITHUB_ACTIONS === 'true' ? inferredBase : '/'),
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
