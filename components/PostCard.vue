<script setup>
const props = defineProps(["id"]);
const { data: post } = await useFetch(
 `/api/get/get-single-post?postID=${props.id}`
);
</script>
<template>
 <article class="bg-white w-full p-2 self-center bold-border">
  <div class="flex justify-between">
   <h4 class="text-base">{{ post.post.title }}</h4>
   <h4 class="text-xs self-center">{{ post.user.username }}</h4>
  </div>
  <p class="p-3 text-sm">{{ post.post.content }}</p>
 </article>
</template>
