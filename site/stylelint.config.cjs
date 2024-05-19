const { defineConfig } = require("stylelint-define-config");

module.exports = defineConfig({
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
