<script setup>
const credentials = ref();

const email = ref("");
const password = ref("");

const firebaseUser = useFirebaseUser();
watch(firebaseUser, async () => {
 return navigateTo("/secret");
});

const signIn = async () => {
 credentials.value = await signInUser(email.value, password.value);
 console.log(credentials.value);
};

const signInWithGoogle = async () => {
 googleLogin();
};
const signOut = async () => {
 credentials.value = await signOutUser();
};
</script>
<template>
 <main class="h-screen w-screen flex justify-center items-center">
  <div
   class="flex flex-col space-y-4 border-4 border-b-8 border-r-8 rounded-2xl border-black p-5 max-w-lg min-w-sm bg-white"
  >
   <h4 class="text-xl p- pb-0.5 border-b">Sign In</h4>

   <InputField label="Email">
    <input
     type="text"
     placeholder="Type here"
     :class="`bold-border p-2 text-lg w-72 focus:border-black ${
      email ? 'border-black' : ''
     }`"
     v-model="email"
    />
   </InputField>

   <InputField label="Password">
    <input
     type="password"
     placeholder="Password"
     class="bold-border p-2 text-lg w-72 focus:border-black"
     v-model="password"
    />
   </InputField>
   <div class="">
    <button @click="signIn" class="btn-bordered ml-auto">Sign In</button>
    <button @click="signInWithGoogle" class="btn-bordered ml-auto">
     Google
    </button>
    <div class="flex items-center justify-center pt-1">
     <NuxtLink
      to="/login/signup"
      class="font-normal underline hover:text-blue-300"
     >
      New User?
     </NuxtLink>
    </div>
   </div>
  </div>
 </main>
</template>
