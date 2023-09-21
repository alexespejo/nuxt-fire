import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

export default defineNuxtPlugin((nuxtApp) => {
 const config = useRuntimeConfig();
 const firebaseConfig = {
  apiKey: config.public.firebaseAPIKEY,
  authDomain: config.public.firebaseAuthDomain,
  projectId: config.public.firebaseprojectId,
  storageBucket: config.public.firebasestorageBucket,
  messagingSenderId: config.public.firebasemessagingSenderId,
  appId: config.public.firebaseappId,
 };

 const app = initializeApp(firebaseConfig);
 initUser();
 const auth = getAuth();

 nuxtApp.vueApp.provide("auth", auth);
 nuxtApp.provide("auth", auth);
});
