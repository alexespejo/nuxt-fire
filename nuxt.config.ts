// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
 modules: ["@nuxtjs/tailwindcss"],
 devtools: { enabled: true },
 runtimeConfig: {
  // Private config that is only available on the server
  apiSecret: "123",
  // Keys within public, will be also exposed to the client-side
  public: {
   firebaseAPIKEY: process.env.NUXT_FIREBASE_API_KEY,
  },
 },
});
