<script setup>
const props = defineProps(["class", "uid", "title"]);
const { data: user } = await useFetch(`/api/get-user-data/${props.uid}`);
</script>

<template>
 <div class="bg-white">
  <div class="flex items-center justify-between border-b-2 py-1 px-3">
   <h4 class="text-base">{{ props.title }}</h4>
   <div class="flex items-center space-x-1">
    <h6 class="text-xs">{{ user.username }}</h6>
    <img :src="user.photoURL" alt="" class="w-6 h-6 rounded-full" />
   </div>
  </div>
  <p class="py-2 px-4 text-xs"><slot /></p>
 </div>
</template>
