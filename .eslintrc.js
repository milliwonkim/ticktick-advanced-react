module.exports = {
  parser: "babel-eslint",
  extends: "react",
  env: {
    browser: true,
    node: true,
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    "quote-props": "off",
    "space-before-function-paren": ["error", "never"],
    indent: ["error", 2],
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
  },
};
