const { defineConfig } = require("eslint-define-config");

module.exports = defineConfig({
	extends: "sweet",
	rules: {
		"@stylistic/indent": [ "error", "tab" ]
	},
	overrides: [{
		files: "*.svelte",
		parser: "svelte-eslint-parser",
		parserOptions: {
			parser: "@typescript-eslint/parser"
		},
		extends: "plugin:svelte/recommended",
		rules: {
			"no-underscore-dangle": "off",
			"unicorn/no-null": "off",
			"@stylistic/indent": "off",
			"@typescript-eslint/init-declarations": "off",

			"svelte/block-lang": [ "error", {
				script: "ts",
				style: "scss"
			}],
			"svelte/button-has-type": "error",
			"svelte/derived-has-same-inputs-outputs": "error",
			"svelte/first-attribute-linebreak": "error",
			"svelte/html-closing-bracket-spacing": "error",
			"svelte/html-quotes": "error",
			"svelte/html-self-closing": [ "error", {
				normal: "never",
				component: "always",
				svelte: "always",
				void: "always"
			}],
			"svelte/indent": [ "error", {
				indent: "tab"
			}],
			"svelte/infinite-reactive-loop": "error",
			"svelte/mustache-spacing": "error",
			"svelte/no-dom-manipulating": "error",
			"svelte/no-dupe-on-directives": "error",
			"svelte/no-dupe-use-directives": "error",
			"svelte/no-export-load-in-svelte-module-in-kit-pages": "error",
			"svelte/no-extra-reactive-curlies": "error",
			"svelte/no-goto-without-base": "error",
			"svelte/no-ignored-unsubscribe": "error",
			"svelte/no-immutable-reactive-statements": "error",
			"svelte/no-inline-styles": "error",
			"svelte/no-reactive-functions": "error",
			"svelte/no-reactive-literals": "error",
			"svelte/no-reactive-reassign": "error",
			"svelte/no-spaces-around-equal-signs-in-attribute": "error",
			"svelte/no-store-async": "error",
			"svelte/no-svelte-internal": "error",
			"svelte/no-target-blank": "error",
			"svelte/no-unused-class-name": [ "error", {
				allowedClassNames: [ "sr-only", "no-scroll" ]
			}],
			"svelte/no-useless-mustaches": "error",
			"svelte/prefer-class-directive": "error",
			"svelte/prefer-destructured-store-props": "error",
			"svelte/prefer-style-directive": "error",
			"svelte/require-each-key": "error",
			"svelte/require-event-dispatcher-types": "error",
			"svelte/require-optimized-style-attribute": "error",
			"svelte/require-store-callbacks-use-set-param": "error",
			"svelte/require-stores-init": "error",
			"svelte/shorthand-attribute": "error",
			"svelte/shorthand-directive": "error",
			"svelte/sort-attributes": "error",
			"svelte/spaced-html-comment": "error",
			"svelte/valid-each-key": "error",
			"svelte/valid-prop-names-in-kit-pages": "error"
		}
	}],
	ignorePatterns: [
		"src/lib/generated"
	]
});
