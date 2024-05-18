import adapter from "@sveltejs/adapter-vercel";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import { defineConfig } from "svelte-define-config";

export default defineConfig({
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter(),
		alias: {
			$styles: "./src/lib/styles",
			$components: "./src/lib/components/index.ts",
			$sanity: "./src/lib/sanity/index.ts",
			$utils: "./src/lib/utils/index.ts"
		}
	}
});
