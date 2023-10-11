<script setup>
const props = defineProps(["class", "uid", "title"]);
const { data: user } = await useFetch(`/api/get-user-data/${props.uid}`);
</script>

<template>
 <div class="bg-white">
  <div class="flex items-center justify-between border-b-2 py-1 px-3">
   <h4 class="text-sm w-3/4">{{ props.title }}</h4>
   <div class="flex items-center space-x-1">
    <NuxtLink :to="`/user/${props.uid}`" class="flex items-center space-x-2">
     <h6 class="hidden sm:block text-xs">{{ user.username }}</h6>
     <img :src="user.photoURL" alt="" class="w-6 h-6 rounded-full" />
    </NuxtLink>
   </div>
  </div>
  <p class="py-2 px-4 text-xs"><slot /></p>
 </div>
</template>
