import sweet from "eslint-config-sweet";
import svelte from "eslint-plugin-svelte";
import { defineConfig } from "eslint/config";
import ts from "typescript-eslint";
import svelteConfig from "./svelte.config.js";

export default defineConfig(
  sweet,
  {
    files: ["**/*.svelte", "**/*.svelte.ts"],
    extends: [svelte.configs.recommended],
    languageOptions: {
      parserOptions: {
        parser: ts.parser,
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
        extraFileExtensions: [".svelte"],
        svelteConfig
      }
    },
    rules: {
      "no-underscore-dangle": "off",
      "unicorn/prevent-abbreviations": "off",
      "@typescript-eslint/init-declarations": "off",

      "svelte/no-target-blank": "error",
      "svelte/button-has-type": "error",
      "svelte/prefer-const": "error",
      "svelte/block-lang": [
        "error",
        {
          script: "ts",
          style: "scss"
        }
      ],
      "svelte/indent": "error",
      "svelte/first-attribute-linebreak": "error",
      "svelte/html-closing-bracket-new-line": "error",
      "svelte/html-closing-bracket-spacing": "error",
      "svelte/html-quotes": "error",
      "svelte/html-self-closing": "error",
      "svelte/mustache-spacing": "error",
      "svelte/no-add-event-listener": "error",
      "svelte/no-extra-reactive-curlies": "error",
      "svelte/no-navigation-without-resolve": "off",
      "svelte/no-spaces-around-equal-signs-in-attribute": "error",
      "svelte/no-top-level-browser-globals": "error",
      "svelte/prefer-class-directive": "error",
      "svelte/prefer-style-directive": "error",
      "svelte/require-event-prefix": "error",
      "svelte/require-optimized-style-attribute": "error",
      "svelte/shorthand-attribute": "error",
      "svelte/shorthand-directive": "error",
      "svelte/sort-attributes": "error",
      "svelte/spaced-html-comment": "error",
      "svelte/valid-compile": "error",
      "svelte/valid-style-parse": "error"
    }
  },
  {
    ignores: ["src/lib/generated"]
  }
);
