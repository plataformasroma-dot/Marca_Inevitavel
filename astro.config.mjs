import { defineConfig } from 'astro/config';

const site =
  process.env.SITE_URL ??
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : undefined);

const normalizeBasePath = (basePath = '/') => {
  const trimmedBasePath = basePath.trim();

  if (!trimmedBasePath || trimmedBasePath === '/') {
    return '/';
  }

  return `/${trimmedBasePath.replace(/^\/+|\/+$/g, '')}/`;
};

const base = normalizeBasePath(process.env.BASE_PATH ?? process.env.PUBLIC_BASE_PATH ?? '/');

export default defineConfig({
  output: 'static',
  site,
  base
});
