<script setup>
const route = useRoute();
const { data: post } = await useFetch(
 `/api/get/get-single-post?postID=${route.params.postID}`
);
</script>
<template>
 <NuxtLayout name="custom">
  <article
   class="bg-white w-full md:w-3/4 p-2 self-center bold-border flex flex-col"
  >
   <div class="flex justify-between">
    <h4 class="text-xl">{{ post.post.title }}</h4>
    <h4 class="text-sm self-center">{{ post.user.username }}</h4>
   </div>
   <p class="p-3">{{ post.post.content }}</p>
   <NuxtLink to="/secret" class="btn ml-auto btn-success">Return </NuxtLink>
  </article>
 </NuxtLayout>
</template>
