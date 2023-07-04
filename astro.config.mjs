import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://www.cso-frankfurt.de/",
  // trailingSlash: 'always',
  integrations: [sitemap()]
});