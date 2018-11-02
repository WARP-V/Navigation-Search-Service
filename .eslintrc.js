module.exports = {
  "extends": "airbnb",
  rules: {
    // Rules here will override the 'hackreactor' configuration
    // http://eslint.org/docs/rules/
  },
  "plugins": [
    "react",
    "jsx-a11y",
    "import"
  ],
  "rules": {
    "no-console": 0
  },
  "env": {
    "browser": true,
    "jest": true
  }
};