import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: [
    '~/assets/css/fonts.css',
    '~/assets/css/tailwind.css',
  ],
  modules: ['nuxt-svgo', '@vueuse/nuxt', '@nuxtjs/i18n'],
  svgo: {
    autoImportPath: './assets/svg/',
    customComponent: 'SvgIcon',
  },
  i18n: {
    locales: [
      { code: 'en', language: 'en', file: 'en.json' },
      { code: 'de', language: 'de', file: 'de.json' },
    ],
    langDir: 'locales',
    strategy: 'prefix_except_default',
    defaultLocale: 'en',
  },
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
})
