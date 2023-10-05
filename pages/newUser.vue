<script setup>
const firebaseUser = useFirebaseUser();

const toggleLinkedIn = ref(false);
const toggleGithub = ref(false);
const username = ref("");
const biography = ref("");
const major = ref("");

watch(username, async () => {
 if (username.value.length > 30) {
  username.value = username.value.substring(0, 30);
 }
});
watch(biography, async () => {
 if (biography.value.length > 150) {
  biography.value = biography.value.substring(0, 150);
 }
});
const socialLinks = reactive({ linkedin: "", github: "" });
const majors = ref([
 "Computer Science",
 "Mathmatics",
 "Chemistry",
 "Biology",
 "Engineering",
 "Other",
]);
function registerUser() {
 const createUserData = $fetch("/api/post/create-user", {
  method: "post",
  body: {
   uid: firebaseUser.value.uid,
   displayName: firebaseUser.value.displayName,
   username: username.value,
   biography: biography.value,
   major: major.value,
   socialLinks: {
    github: socialLinks.github,
    linkedin: socialLinks.linkedin,
   },
  },
 });
 if (createUserData) {
  return navigateTo("/secret");
 }
 alert("uh oh something went wrong");
}
</script>

<template>
 <NuxtLayout>
  <main
   class="flex flex-col justify-center items-center w-full h-screen bg-slate-200/30"
  >
   <div
    class="bold-border border-black bg-slate-100 md:w-1/2 lg:w-1/3 px-5 py-3 shadow-xl"
    v-if="firebaseUser"
   >
    <h1 class="text-lg md:text-xl">
     Welcome in!
     <span class="text-blue-500 underline">{{ firebaseUser.displayName }}</span>
    </h1>
    <p class="text-xs md:text-sm mt-1">lets get you all setup :)</p>

    <form
     action=""
     class="flex flex-col space-y-3"
     @submit.prevent="registerUser"
    >
     <div class="form-control w-full">
      <label class="label">
       <span class="label-text"
        >Username
        <span class="ml-auto text-xs self-center"
         >{{ username.length }}/30 characters</span
        >
       </span>
      </label>
      <input
       type="text"
       placeholder="Type here"
       class="input input-bordered w-full"
       v-model="username"
      />
     </div>
     <div class="form-control w-full max-w-xs">
      <label class="label">
       <span class="label-text">Major</span>
      </label>
      <select class="select select-bordered" v-model="major">
       <option disabled selected value="">Pick one</option>
       <option v-for="(m, index) in majors" :value="m" :key="index">
        {{ m }}
       </option>
      </select>
     </div>

     <div class="form-control">
      <label class="label">
       <span class="label-text"
        >Your bio
        <span class="ml-auto text-xs self-center"
         >{{ biography.length }}/150 characters</span
        ></span
       >
      </label>
      <textarea
       class="textarea textarea-bordered h-36"
       placeholder="Bio"
       v-model="biography"
      ></textarea>

      <div class="form-control">
       <h3 class="label">
        <span class="label-text">Socials</span>
       </h3>
       <div class="form-control">
        <label class="label cursor-pointer">
         <span class="label-text text-sm">LinkedIn</span>

         <input type="checkbox" class="toggle" v-model="toggleLinkedIn" />
        </label>
        <input
         type=""
         class="input input-bordered input-xs md:w-1/2"
         v-if="toggleLinkedIn"
         placeholder="Linkedin link"
         v-model="socialLinks.linkedin"
        />
       </div>
       <div class="form-control">
        <label class="label cursor-pointer">
         <span class="label-text text-sm">Github</span>

         <input type="checkbox" class="toggle" v-model="toggleGithub" />
        </label>
        <input
         type="text"
         class="input input-bordered input-xs md:w-1/2"
         v-if="toggleGithub"
         placeholder="Github link"
         v-model="socialLinks.github"
        />
       </div>
      </div>
     </div>
     <input
      type="submit"
      class="btn btn-success ml-auto"
      :disabled="!username && !major"
     />
    </form>
   </div>
  </main>
 </NuxtLayout>
</template>

<style scoped>
.label-text {
 @apply text-base;
}
/* .label {
 @apply w-1/2;
} */

.input-bordered,
.textarea-bordered {
 @apply border-gray-400 border-dashed;
}
</style>
