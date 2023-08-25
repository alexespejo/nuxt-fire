import { initializeApp } from "firebase/app";
export default defineNuxtPlugin((nuxtApp) => {
 const config = useRuntimeConfig();
 const firebaseConfig = {
  apiKey: config.public.firebaseAPIKEY,
 };
 const app = initializeApp(firebaseConfig);

 console.log(app);
});
