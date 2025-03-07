import vercel from "@sveltejs/adapter-vercel";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import { toMerged } from "es-toolkit/compat";

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
      $styles: "./src/lib/styles",
      $icons: "./src/lib/icons",
      $components: "./src/lib/components/index.ts",
      $cms: "./src/lib/cms/index.ts",
      $utils: "./src/lib/utils/index.ts",
      $generated: "./src/lib/generated"
    }
  }
};
