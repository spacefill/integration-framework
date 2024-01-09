/* eslint-env node */
module.exports = {
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', "plugin:import/errors", 'prettier'],
  ignorePatterns: ["src/api/spacefill-api-openapi.d.ts"],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  root: true,
  settings: {
    "import/ignore": [
      "node_modules"
    ]
  },
  rules: {
    "import/order": [
      "error",
      {
        "groups": [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index"
        ],
        "newlines-between": "always"
      },
    ]
  },
};
