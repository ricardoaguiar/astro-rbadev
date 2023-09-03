import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import solidJs from '@astrojs/solid-js';

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  output: 'hybrid',
  site: 'https://astro-fem-rbadev.netlify.app/',
  integrations: [react(), solidJs()],
  adapter: cloudflare()
});