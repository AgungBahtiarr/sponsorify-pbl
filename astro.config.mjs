import { defineConfig } from 'astro/config';
import node from "@astrojs/node";
import clerk from "astro-clerk-auth";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

import db from "@astrojs/db";

// https://astro.build/config
export default defineConfig({
  integrations: [clerk(), tailwind(), react(), db()],
  output: 'server',
  adapter: node({
    mode: "standalone"
  })
});