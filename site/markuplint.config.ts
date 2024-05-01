import type { Config } from "@markuplint/ml-config";

export default {
  parser: {
    ".svelte$": "@markuplint/svelte-parser",
    ".html$": "@markuplint/svelte-parser/kit"
  }
} satisfies Config;
