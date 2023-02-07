// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: ['/assets/styles.css', "vuetify/lib/styles/main.sass"],
  build: {
    transpile: ['vuetify', 'gsap'],
  },
});
