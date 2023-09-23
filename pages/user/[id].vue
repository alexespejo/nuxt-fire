<script setup>
definePageMeta({
 middleware: ["loadingUser"],
});
const route = useRoute();
const userData = useFirebaseUserData();
const { data: user } = await useFetch(`/api/get-user-data/${route.params.id}`);
</script>
<template>
 <NuxtLayout name="custom">
  <main>
   data
   {{ user }}
  </main>
 </NuxtLayout>
</template>
