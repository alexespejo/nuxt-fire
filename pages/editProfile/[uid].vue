<script setup>
definePageMeta({
 middleware: ["auth"],
});

const route = useRoute();
const { data: user } = await useFetch(`/api/get-user-data/${route.params.uid}`);
const userData = reactive({
 username: "",
 bio: "",
 major: "",
 socials: {
  github: "",
  linkedin: "",
 },
});
const majors = ref([
 "Computer Science",
 "Engineering",
 "Biology",
 "Chemistry",
 "Physics",
 "Mathmatics",
 "Other",
]);
onMounted(() => {
 userData.bio = user.biography;
 userData.userame = user.username;
 userData.major = user.major;
 userData.socials.github = user.socialLinks.github;
 userData.socials.linkedin = user.socialLinks.linkedin;
});
</script>
<template>
 <NuxtLayout name="custom">
  {{ userData }}
  <main class="p-4 flex flex-col items-center justify-center">
   <div class="bg-white bold-border border-black p-5 w-full md:w-3/5">
    <h1 class="text-3xl text-gray-400">Edit Profile</h1>
    <div class="divider"></div>
    <form action="bold-border">
     <div class="form-control">
      <label class="label">
       <span class="label-text">Username</span>
      </label>
      <input
       type="text"
       class="input input-bordered"
       placeholder="Username"
       v-model="userData.username"
      />
     </div>
     <div class="form-control">
      <label class="label">
       <span class="label-text">Select your Major</span>
      </label>
      <select class="select select-bordered">
       <option v-if="user" :value="user.major" selected disabled>
        {{ user.major }}
       </option>
       <option v-else disabled selected class="text-gray-400">Pick one</option>
       <option v-for="(i, index) in majors" :key="index" :value="i">
        <span v-if="user && i !== user.major">{{ i }}</span>
       </option>
      </select>
      <div class="form-control">
       <label class="label">
        <span class="label-text text-gray-400">Biography</span>
       </label>
       <div class="relative w-full">
        <!-- <span class="absolute bottom-2 right-2 text-gray-400">{{
        biography.length
       }}</span> -->
        <textarea
         v-model="userData.bio"
         class="textarea textarea-bordered h-24 w-full"
         placeholder="Type here"
        >
        </textarea>
       </div>
      </div>
     </div>
    </form>
   </div>
  </main>
 </NuxtLayout>
</template>

<style scoped>
label > span {
 @apply text-gray-400;
}
</style>
