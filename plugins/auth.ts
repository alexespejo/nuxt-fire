export default defineNuxtPlugin(() => {
 addRouteMiddleware("auth", () => {
  const { $auth } = useNuxtApp();

  console.log($auth?.currentUser);

  if (!$auth?.currentUser?.uid) {
   return navigateTo("/login/signin");
  }
  //   return navigateTo("/secret");
 });
});
