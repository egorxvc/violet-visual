import { defineConfig } from 'astro/config';

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: 'https://egorxvc.github.io',
  base: '/violet-visual',
  integrations: [react()]
});