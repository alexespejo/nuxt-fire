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
 <NuxtLayout name="">
  <main class="h-screen w-screen flex justify-center items-center">
   <div
    class="flex flex-col justify-center items-center space-y-4 border-4 border-b-8 border-r-8 rounded-2xl border-black p-5 min-w-fit bg-white"
   >
    <h4 class="text-2xl pb-0.5 border-b text-center">Welcome!</h4>
    <p class="block text-sm w-60 text-center">
     For this early demo we're requiring users to create an account to access
     STEM Connect. To get started feel free to user either your school or
     personal email.
    </p>

    <div class="">
     <button @click="signInWithGoogle" class="btn-bordered ml-auto text-xl">
      Use Google
     </button>
    </div>
   </div>
  </main>
 </NuxtLayout>
</template>
