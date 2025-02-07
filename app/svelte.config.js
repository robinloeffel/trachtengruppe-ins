import adapter from "@sveltejs/adapter-vercel";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

/** @type {import('@sveltejs/kit').Config} */
export default {
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter(),
    prerender: {
      entries: ["/"]
    },
    typescript: {
      config: (config) => {
        config.include = [
          ...config.include,
          "../tasks/**/*.ts"
        ];

        return config;
      }
    },
    alias: {
      $styles: "./src/lib/styles",
      $components: "./src/lib/components/index.ts",
      $cms: "./src/lib/cms/index.ts",
      $utils: "./src/lib/utils/index.ts",
      $generated: "./src/lib/generated"
    }
  }
};
