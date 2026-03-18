module.exports = {
  // ─── Environment ────────────────────────────────────────────
  // Tells ESLint what global variables are available
  root: true,
  env: {
    browser: true, // allows window, document, etc.
    es2020: true, // allows modern JS syntax
    node: true, // allows process, module, etc.
    jest: true, // allows describe, test, expect, etc. in test files
  },

  // ─── Extends ────────────────────────────────────────────────
  // Pre-built rule sets we inherit from (order matters — later ones override earlier)
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended', // React rules
    'plugin:react-hooks/recommended', // Rules for useEffect, useState, etc.
    'plugin:prettier/recommended', // Prettier rules (must be LAST)
  ],

  // ─── Ignore patterns ────────────────────────────────────────
  // Files ESLint will skip completely
  ignorePatterns: [
    'dist',
    'storybook-static',
    'coverage',
    'node_modules',
    '*.config.js',
    '*.config.ts',
    'babel.config.json',
    '.storybook',
  ],

  // ─── Parser ─────────────────────────────────────────────────
  // Tells ESLint to understand TypeScript syntax
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true, // enables JSX parsing
    },
  },

  // ─── Plugins ────────────────────────────────────────────────
  // The actual rule packages
  plugins: [
    '@typescript-eslint', // TypeScript-specific rules
    'react', // React-specific rules
    'react-hooks', // React hooks rules
    'prettier', // Runs Prettier as an ESLint rule
  ],

  // ─── Rules ──────────────────────────────────────────────────
  // Custom rule overrides
  rules: {
    // React 17+ doesn't need React imported in every file
    'react/react-in-jsx-scope': 'off',

    // We use TypeScript for prop types instead of PropTypes
    'react/prop-types': 'off',

    // Warn on unused variables but allow ones starting with _
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],

    // Warn on 'any' type usage but don't block the commit
    '@typescript-eslint/no-explicit-any': 'warn',

    // Makes Prettier formatting violations show as ESLint errors
    // This is what actually blocks commits when formatting is wrong
    'prettier/prettier': 'error',
  },

  // ─── Settings ───────────────────────────────────────────────
  settings: {
    // Automatically detect the React version
    react: {
      version: 'detect',
    },
  },
};
