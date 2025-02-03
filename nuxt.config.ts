import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: [
    '~/assets/css/fonts.css',
    '~/assets/css/tailwind.css',
  ],
  modules: [
    'nuxt-svgo',
    '@vueuse/nuxt',
  ],
  svgo: {
    autoImportPath: './assets/svg/',
    customComponent: 'SvgIcon',
  },
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
})
