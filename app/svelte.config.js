import vercel from "@sveltejs/adapter-vercel";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import { toMerged } from "es-toolkit";

/** @type {import('@sveltejs/kit').Config} */
export default {
  preprocess: vitePreprocess(),
  kit: {
    adapter: vercel(),
    prerender: {
      entries: ["/"]
    },
    typescript: {
      config: config => toMerged(config, {
        include: ["../tasks/**/*.ts"]
      })
    },
    alias: {
      $cms: "./src/lib/cms/index.ts",
      $components: "./src/lib/components/index.ts",
      $generated: "./src/lib/generated",
      $styles: "./src/lib/styles",
      $utils: "./src/lib/utils/index.ts"
    }
  }
};
