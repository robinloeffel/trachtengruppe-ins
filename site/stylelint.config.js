import { defineConfig } from "stylelint-define-config";

export default defineConfig({
	extends: "stylelint-config-sweet",
	rules: {
		"selector-pseudo-class-no-unknown": [
      true,
      {
        ignorePseudoClasses: [ "global" ]
      }
    ]
	}
});
