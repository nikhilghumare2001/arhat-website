// ============================================================
// ESLINT CONFIGURATION
// ============================================================

// ESLint's recommended JavaScript rules.
// These rules help us find common JavaScript errors.
import js from "@eslint/js";

// Provides global variables used by the browser,
// such as window, document, console, etc.
import globals from "globals";

// React Hooks rules.
// Helps us use React Hooks correctly.
import reactHooks from "eslint-plugin-react-hooks";

// React Refresh rules.
// Helps make sure the Vite/React Fast Refresh works correctly.
import reactRefresh from "eslint-plugin-react-refresh";

// Functions used to create the ESLint configuration.
import { defineConfig, globalIgnores } from "eslint/config";


// ============================================================
// ESLINT CONFIGURATION
// ============================================================

export default defineConfig([

  // ==========================================================
  // IGNORE FOLDERS
  // ==========================================================

  // ESLint will ignore the "dist" folder.
  //
  // The dist folder contains the final production files
  // created after running "npm run build".
  globalIgnores(["dist"]),


  // ==========================================================
  // JAVASCRIPT AND REACT FILES
  // ==========================================================

  {
    // ESLint will check all .js and .jsx files
    // inside the project.
    files: ["**/*.{js,jsx}"],


    // ========================================================
    // ESLINT RULES
    // ========================================================

    extends: [

      // Recommended JavaScript rules.
      // Helps find common coding mistakes.
      js.configs.recommended,

      // Recommended rules for React Hooks.
      // Helps prevent incorrect use of useState,
      // useEffect, useRef, etc.
      reactHooks.configs.flat.recommended,

      // Rules recommended for React projects
      // using Vite and React Fast Refresh.
      reactRefresh.configs.vite,
    ],


    // ========================================================
    // JAVASCRIPT SETTINGS
    // ========================================================

    languageOptions: {

      // Tell ESLint that this project runs in a browser.
      // This allows variables such as window and document.
      globals: globals.browser,

      // Tell ESLint that our JavaScript files
      // can contain JSX code.
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
  },
]);