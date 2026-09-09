import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://www.cso-frankfurt.de/",
  // Preserve Astro 5/6 HTML whitespace behavior during the Astro 7 upgrade.
  compressHTML: true,
  // trailingSlash: 'always',
  integrations: [sitemap()]
});