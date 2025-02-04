// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devServer: {
        port: 8000,
    },
    css: ["~/assets/css/main.css"],
    modules: ["@nuxtjs/tailwindcss"],

    tailwindcss: {
        // Options
    },
    runtimeConfig: {
        public: {
            apiURL: "",
        },
    },
    compatibilityDate: "2024-12-13",
});
