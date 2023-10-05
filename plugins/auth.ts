export default defineNuxtPlugin(() => {
 addRouteMiddleware("auth", async () => {
  const { $auth } = useNuxtApp();

  //   console.log("coming from auth", $auth?.currentUser.uid);
  if (!$auth?.currentUser?.uid) {
   return navigateTo("/login");
  }

  const checkIfUserSignIn = await $fetch(
   `/api/signup-user/${$auth?.currentUser.uid}`
  );

  if (!checkIfUserSignIn) {
   return navigateTo("/newUser");
  }
 });
});
