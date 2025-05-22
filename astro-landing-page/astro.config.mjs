import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  output: 'static', // Required for GitHub Pages
  integrations: [react(), tailwind()],
  // If your repo is not at the root, set base: '/REPO_NAME/', e.g. base: '/astro-landing-page/'
  base: '/astro-landing-page/'
});