// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: ["~/assets/scss/default.scss", ],
  vite:{
    css:{
      preprocessorOptions: {
        scss:{
          additionalData: '@use "~/assets/scss/_variables.scss" as *;',
        }
      }
    }
  },
  routeRules:{
    '/': {prerender: true},
    '/about':{swr: 2000},
  }
})
