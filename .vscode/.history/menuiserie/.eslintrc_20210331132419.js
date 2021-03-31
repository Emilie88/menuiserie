module.exports = {
  env: {
    node: true,
  },
  extends: [
    "plugin:vue/recommended",
    "eslint:recommended",
    "@vue/prettier",
    // "plugin:security/recommended",
    // "plugin:no-unsanitized/DOM",
    // "plugin:json/recommended",
    // "plugin:jest/recommended",
    // "plugin:jest-formatting/recommended",
  ],
  globals: {
    appConfig: "readonly",
  },
  overrides: [
    {
      env: {
        jest: true,
      },
      files: [
        "**/__tests__/*.{j,t}s?(x)",
        "**/tests/unit/**/*.spec.{j,t}s?(x)",
      ],
    },
  ],
  parserOptions: {
    parser: "babel-eslint",
  },
  plugins: ["security", "xss", "scanjs-rules", "jest", "jest-formatting"],
  root: true,
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
        trailingComma: "all",
      },
    ],

    /** ScanJS rules **/
    "scanjs-rules/accidental_assignment": 1,
    "scanjs-rules/assign_to_hostname": 1,
    "scanjs-rules/assign_to_href": 1,
    "scanjs-rules/assign_to_location": 1,
    "scanjs-rules/assign_to_onmessage": 1,
    "scanjs-rules/assign_to_pathname": 1,
    "scanjs-rules/assign_to_protocol": 1,
    "scanjs-rules/assign_to_search": 1,
  },
};
