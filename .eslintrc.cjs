module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended", "plugin:vue/vue3-essential"],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parser: "vue-eslint-parser",
  parserOptions: {
    ecmaVersion: "latest",
    parser: "@typescript-eslint/parser",
    sourceType: "module",
  },
  plugins: ["@typescript-eslint", "vue"],
  rules: {
    quotes: ["error", "double"], // 必须用双引号
    semi: ["error", "always"], // 必须使用分号结尾
    "vue/multi-word-component-names": "off", // 禁用组件名称规则
    "@typescript-eslint/no-explicit-any": "off", // 解除any类型限制
  },
};
