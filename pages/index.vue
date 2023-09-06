<script setup>
// definePageMeta({
//  middleware: ["auth"],
// });
const credentials = ref();
// const email = ref("");
// const password = ref("");
const firebaseUser = useFirebaseUser();

const signIn = async () => {
 credentials.value = await signInUser(email, password);
 console.log(credentials.value);
};

const fun = () => {
 alert("hello world");
};
</script>
<template>
 <NuxtLayout name="default">
  <ButtonsBorderedButton :action="fun" />
 </NuxtLayout>
</template>

<style>
a {
 @apply cursor-pointer;
}
</style>
