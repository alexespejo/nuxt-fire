<script setup>
const credentials = ref();


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
   class="flex flex-col justify-center items-center space-y-4 border-4 border-b-8 border-r-8 rounded-2xl border-black p-5 max-w-lg min-w-sm bg-white"
  >
   <h4 class="text-2xl p- pb-0.5 border-b">
    Welcome in!
    <span class="block">To begin, login or signup using your email!</span>
   </h4>

   <div class="">
    <button @click="signInWithGoogle" class="btn-bordered ml-auto text-xl">
     Use Google
    </button>
   </div>
  </div>
 </main>
</template>
