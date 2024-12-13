// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["~/assets/css/main.css"],
  modules: ["@nuxtjs/tailwindcss"],

  tailwindcss: {
      // Options
  },

  compatibilityDate: "2024-12-13",
});