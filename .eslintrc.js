module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  extends: [
    // '@nuxtjs',
    // 'plugin:nuxt/recommended'
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  plugins: [
  ],
  // add your custom rules here
  rules: {
    'import/no-extraneous-dependencies': ['error', {
      devDependencies: true, // devDependenciesのimportを許可
    }],
    'no-shadow': ['error', { allow: ['state'] }], // storeのstateでlintエラーが出るので許可
  },
  settings: {
    'import/core-modules': ['vuex'], // vuexのimportを行なった際のlintエラー回避
  },
};
