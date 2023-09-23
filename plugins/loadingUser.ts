export default defineNuxtPlugin(() => {
 addRouteMiddleware("loadingUser", () => {
  const { $auth } = useNuxtApp();

  console.log($auth?.currentUser);

  if (!$auth?.currentUser?.uid) {
   return navigateTo("/user/loading");
  }
 });
});
