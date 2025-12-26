// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://amplifycreativelab.github.io",
  base: "/demo-business-brochure/",
  integrations: [sitemap()],
});
