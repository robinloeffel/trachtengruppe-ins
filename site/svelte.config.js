import adapter from "@sveltejs/adapter-vercel";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import { defineConfig } from "svelte-define-config";

export default defineConfig({
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter(),
		alias: {
			$styles: "./src/lib/styles"
		},
		typescript: {
			config: config => {
				config.include = [ ...config.include, "../markuplint.config.ts" ];
				return config;
			}
		}
	}
});
