<script setup>
const credentials = ref();
const id = ref();

const firebaseUser = useFirebaseUser();

const signIn = async () => {
 credentials.value = await signInUser(email, password);
 console.log(credentials.value);
};
</script>
<template>
 <NuxtLayout name="default"> Test </NuxtLayout>
</template>

<style>
a {
 @apply cursor-pointer;
}
</style>
