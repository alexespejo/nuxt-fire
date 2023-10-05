<script setup>
// definePageMeta({
//  middleware: ["loadingUser"],
// });
const route = useRoute();
const { data: user } = await useFetch(`/api/get-user-data/${route.params.id}`);
</script>
<template>
 <NuxtLayout name="custom">
  <main>
   <ul>
    <li>Major: {{ user.major }}</li>
    <li>Graduation Year: {{ user.year }}</li>
    <li>About Me: {{ user.biograph }}</li>
   </ul>
  </main>
 </NuxtLayout>
</template>
