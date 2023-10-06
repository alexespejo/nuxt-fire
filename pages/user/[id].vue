<script setup>
// definePageMeta({
//  middleware: ["loadingUser"],
// });
const route = useRoute();
const { data: user } = await useFetch(`/api/get-user-data/${route.params.id}`);
</script>
<template>
 <NuxtLayout name="custom">
  <main
   class="bold-border bg-white border-black p-3 self-center w-3/4 h-full overflow-auto"
  >
   <div class="flex space-x-2 py-4">
    <img
     :src="user.photoURL"
     alt=""
     class="mask mask-squircle shadow-lg w-36 h-36"
    />
    <ul class="py-5">
     <li v-if="user.username" class="text-xl underline">{{ user.username }}</li>
     <li v-if="user.major">Major: {{ user.major }}</li>

     <li v-if="user.biography">About Me: {{ user.biography }}</li>
    </ul>
   </div>
   {{ user.posts }}
   <!-- <ul v-if="user.posts">
    <li v-for="(post, index) in user.posts" :key="index">
     <PostCard :id="post" />
    </li>
   </ul> -->
  </main>
 </NuxtLayout>
</template>
