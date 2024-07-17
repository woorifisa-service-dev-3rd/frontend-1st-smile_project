import globals from "globals";

export default [
  {
    files: ["**/*.{js,mjs}"],
    languageOptions: { globals: globals.browser },
    // pluginJs.configs.recommended,
    rules: {
      "no-var": "warn",
      "id-length": "warn",
      "dot-notation": "warn",
    },
  },
];
