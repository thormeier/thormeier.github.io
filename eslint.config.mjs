import antfu from '@antfu/eslint-config'

export default antfu({
  vue: true,
  typescript: true,
  formatters: {
    css: true,
    html: true,
    json: true,
    markdown: 'prettier',
  },
  stylistic: {
    indent: 2,
    quotes: 'single',
    semi: false,
  },
}, {
  rules: {
    // 'no-undef': 0,
    // 'vue/multi-word-component-names': 0,
    'unused-imports/no-unused-vars': 1,
    'vue/block-order': ['error', { order: ['template', 'script', 'style'] }],
  },
})
