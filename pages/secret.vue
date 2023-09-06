<script setup>
definePageMeta({
 middleware: ["auth"],
});
const credentials = ref();
const firebaseUser = useFirebaseUser();

const signOut = async () => {
 credentials.value = await signOutUser();
 return navigateTo("/login/signin");
};
</script>

<template>
 <div>
  <button @click="signOut">Sign Out</button>
  <div>Secret</div>
  {{ firebaseUser.email }}
 </div>
</template>

<style></style>
