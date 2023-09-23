<script setup>
definePageMeta({
 middleware: ["auth"],
});
const credentials = ref();

const signOut = async () => {
 credentials.value = await signOutUser();

 return navigateTo("/login/signin");
};
</script>

<template>
 <NuxtLayout name="custom">
  <div
   class="bg-white border-2 border-b-4 border-r-4 border-back rounded-lg p-1 border-slate-400"
  ></div>
 </NuxtLayout>
</template>

<style></style>
