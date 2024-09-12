// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  extends: [
    '../base',
  ],
  modules: [
    'nuxt-swiper',
  ],
})
