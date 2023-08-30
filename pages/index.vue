<script setup>
const credentials = ref();
const firebaseUser = useFirebaseUser();

const signIn = async () => {
 const email = "uwuowo10800@gmail.com";
 const password = "123456";

 credentials.value = await signInUser(email, password);
 console.log(credentials.value);
};

const signOut = async () => {
 credentials.value = await signOutUser();
};
</script>
<template>
 <div>
  <NuxtLink to="/secret" :class="firebaseUser ? 'block' : 'hidden'"
   >Secret</NuxtLink
  >
  <button
   class="border-2 border-black p-2 m-1"
   v-if="!firebaseUser"
   @click="signIn"
  >
   Sign In
  </button>
  <button class="border-2 border-black p-2 m-1" v-else @click="signOut">
   Sign Out
  </button>
  <div v-if="firebaseUser">
   <pre>
  {{ firebaseUser }}
  </pre
   >
  </div>
  <div v-else>User Signout</div>
 </div>
</template>
