import { defineConfig } from 'astro/config';
import node from "@astrojs/node";
import clerk from "astro-clerk-auth";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import db from "@astrojs/db";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  integrations: [clerk(), tailwind({
    applyBaseStyles: false
  }), react({}), db()],
  output: 'server',
  adapter: netlify(
  )
});