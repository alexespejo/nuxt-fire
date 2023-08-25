<script setup>
const credentials = ref();

const signIn = async () => {
 const email = "uwuowo10800@gmail.com";
 const password = "123456";
 credentials.value = await signInUser(email, password);
 console.log(credentials.value);
};
const signOut = async () => {
 credentials.value = await signOutUser();
};
const config = useRuntimeConfig();
onMounted(async () => {
 console.log(config.public.firebaseAPIKEY);
});
</script>
<template>
 <div>
  <button class="border-2 rounded-full border-black p-2" @click="signIn">
   Sign In
  </button>
  <button class="border-2 rounded-full border-black p-2" @click="signOut">
   Sign Out
  </button>
  <pre>
  {{ credentials }}
 </pre
  >
 </div>
</template>
