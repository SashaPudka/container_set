import js from "@eslint/js";

export default [
  js.configs.recommended,
  {
    rules: {
      semi: ["warn", "always"]
    },
  }
];

