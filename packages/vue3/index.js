module.exports = {
  parser: 'vue-eslint-parser',
  root: true,
  env: {
    node: true
  },
  extends: [
    '@aylaweb/eslint-config-typescript',
    'plugin:vue/vue3-recommended',
  ],
  rules: {
    'vue/max-attributes-per-line': [
      2,
      {
        singleline: {
          max: 5
        },
        multiline: {
          max: 1
        }
      }
    ],
    'vue/attribute-hyphenation': 0,
    'vue/html-self-closing': 0,
    'vue/component-name-in-template-casing': 0,
    'vue/html-closing-bracket-spacing': 0,
    'vue/singleline-html-element-content-newline': 0,
    'vue/no-unused-components': 0,
    'vue/multiline-html-element-content-newline': 0,
    'vue/no-use-v-if-with-v-for': 0,
    'vue/html-closing-bracket-newline': 0,
    'vue/no-parsing-error': 0,
    'vue/one-component-per-file': 'off', // 我觉得tsx的意义就在于可以写多个，但是vetur提示不允许
  },
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    ecmaFeatures: {
      tsx: true,
      jsx: true
    }
  }
}
