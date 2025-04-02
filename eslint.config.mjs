import { defineConfig } from "eslint/config";
import globals from "globals";
import js from "@eslint/js";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"], // Apply to all JavaScript files
    languageOptions: {
      globals: {
        ...globals.browser, // Default browser globals
        chai: true, // Global for Chai assertions like 'expect' and 'assert'
      },
    },
    plugins: {
      js,
      mocha: "eslint-plugin-mocha", // Add Mocha plugin
    },
    extends: [
      "eslint:recommended", // Basic ESLint recommendations
      "airbnb-base", // Airbnb style guide
      "plugin:mocha/recommended", // Mocha plugin rules
    ],
    rules: {
      // Custom rules can go here
      "no-unused-expressions": "off",  // Allow Chai assertions like `expect(foo).to.be.ok`
      "func-names": "off",  // Allow anonymous functions (commonly used in tests)
      "prefer-arrow-callback": "off", // Disable the rule that requires arrow functions in callbacks
    },
  },
]);
