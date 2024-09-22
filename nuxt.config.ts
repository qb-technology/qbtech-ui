// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  extends: [
    // '../base',
    'github:qb-technology/base-ui',
  ],
  modules: [
    'nuxt-swiper',
  ],
})
