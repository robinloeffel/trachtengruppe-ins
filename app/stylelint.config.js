import { defineConfig } from "stylelint-define-config";

export default defineConfig({
	extends: "stylelint-config-sweet",
	rules: {
		"@stylistic/indentation": "tab",
		"selector-pseudo-class-no-unknown": [ true, {
			ignorePseudoClasses: [ "global" ]
		}]
	}
});
