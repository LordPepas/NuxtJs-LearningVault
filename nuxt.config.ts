export default defineNuxtConfig({
  devtools: { enabled: true },
  alias: {
    css: "/<rootDir>/assets/css",
  },
  css: ["@/assets/css/main.css"],
  dir: {
    assets: "assets",
    layouts: "layouts",
    middleware: "middleware",
    pages: "pages",
    static: "static",
  },
  modules: [
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
    [
      "@nuxtjs/i18n",
      {
        vueI18n: "./i18n",
      },
    ],
  ],
});
