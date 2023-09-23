// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
 css: ["~/assets/css/global.css"],
 modules: ["@nuxtjs/tailwindcss", "nuxt-icon"],
 devtools: { enabled: true },
 runtimeConfig: {
  // Private config that is only available on the server
  firebaseAPIKEY: process.env.NUXT_FIREBASE_API_KEY,
  firebaseAuthDomain: process.env.NUXT_FIREBASE_AUTH_DOMAIN,
  firebaseprojectId: process.env.NUXT_FIREBASE_PROJECT_ID,
  firebasestorageBucket: process.env.NUXT_FIREBASE_STORAGE_BUCKET,
  firebasemessagingSenderId: process.env.NUXT_FIREBASE_MESSAGING_SENDER_ID,
  firebaseappId: process.env.NUXT_FIREBASE_APP_ID,
  // Keys within public, will be also exposed to the client-side
  public: {
   firebaseAPIKEY: process.env.NUXT_FIREBASE_API_KEY,
   firebaseAuthDomain: process.env.NUXT_FIREBASE_AUTH_DOMAIN,
   firebaseprojectId: process.env.NUXT_FIREBASE_PROJECT_ID,
   firebasestorageBucket: process.env.NUXT_FIREBASE_STORAGE_BUCKET,
   firebasemessagingSenderId: process.env.NUXT_FIREBASE_MESSAGING_SENDER_ID,
   firebaseappId: process.env.NUXT_FIREBASE_APP_ID,
  },
 },
});
