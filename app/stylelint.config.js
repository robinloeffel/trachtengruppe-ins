/** @type {import("stylelint").Config} */
export default {
  extends: "stylelint-config-sweet",
  rules: {
    "@stylistic/indentation": 2,
    "selector-pseudo-class-no-unknown": [true, {
      ignorePseudoClasses: ["global"]
    }]
  }
};
