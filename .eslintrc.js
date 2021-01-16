module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'prettier',
    'prettier/vue',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended',
  ],
  plugins: ['prettier'],
  // add your custom rules here
  rules: {
    // セミコロン禁止
    semi: [2, 'never'],
    // varは禁止
    'no-var': 2,
    // consoleを許可
    'no-console': 'off',
    'vue/max-attributes-per-line': 'off',
    // 使っていない変数を許可
    'no-unused-vars': 'off',
    // 空タグを許可する
    'vue/html-self-closing': 'off',
    // 無駄なスペースは削除
    'no-multi-spaces': 2,
    // 不要なカッコは消す
    'no-extra-parens': 1,
    // 不要な空白行は削除。2行開けてたらエラー
    'no-multiple-empty-lines': [2, { max: 1 }],
    // 関数とカッコはあけない(function hoge() {/** */})
    'func-call-spacing': [2, 'never'],
    // 文字列はシングルクオートのみ
    quotes: [2, 'single'],
    // かっこの中はスペースなし！違和感
    'space-in-parens': [2, 'never'],
    // カンマの前後にスペース入れる？
    'comma-spacing': 2,
    // 配列のindexには空白入れるな(hogehoge[ x ])
    'computed-property-spacing': 2,
    // キー
    'key-spacing': 2,
    // キーワードの前後には適切なスペースを
    'keyword-spacing': 2,
    // anyを許可する
    '@typescript-eslint/no-explicit-any': 0,
    // カンマエラーをオフにする
    'no-sequences': 'off',
    // v-htmlを許可する
    'vue/no-v-html': 'off',
  },
}
