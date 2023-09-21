<script setup>
const credentials = ref();

const email = ref("");
const password = ref("");
const reTypePassword = ref("");

const firebaseUser = useFirebaseUser();

watch(firebaseUser, async () => {
 return navigateTo("/secret");
});

const create = async () => {
 if (
  password.value === reTypePassword.value &&
  password.value !== "" &&
  reTypePassword.value !== ""
 ) {
  credentials.value = await createUser(email.value, password.value);
 } else {
  alert("Sorry your passwords do not match :(");
 }
};
</script>
<template>
 <main class="h-screen w-screen flex justify-center items-center">
  <form
   @submit="create"
   class="flex flex-col space-y-4 border-4 border-b-8 border-r-8 rounded-2xl border-black p-5 max-w-lg min-w-sm"
  >
   <h4 class="text-xl p- pb-0.5 border-b">Register</h4>
   <InputField label="Email">
    <input
     type="text"
     placeholder="Type here"
     :class="`bold-border p-2 text-lg w-72 ${
      email.length !== 0 ? 'border-black' : ''
     }`"
     v-model="email"
    />
   </InputField>

   <InputField label="Password">
    <input
     type="password"
     placeholder="Password"
     :class="`bold-border p-2 text-lg w-72 ${
      password.length !== 0 ? 'border-black' : ''
     }`"
     v-model="password"
    />
   </InputField>

   <InputField label="Re-enter Password">
    <input
     type="password"
     placeholder="Password"
     :class="`bold-border p-2 text-lg w-72 ${
      password === reTypePassword
       ? reTypePassword === ''
         ? ''
         : 'border-green-500'
       : 'border-red-500'
     }`"
     v-model="reTypePassword"
    />
   </InputField>

   <div class="">
    <button
     @submit="create"
     :class="`btn-bordered ml-auto`"
     :disabled="password !== reTypePassword"
    >
     Register
    </button>
    <div class="flex items-center justify-center pt-1">
     <NuxtLink
      to="/login/signin"
      class="font-normal underline hover:text-blue-300"
     >
      Sign In?
     </NuxtLink>
    </div>
   </div>
  </form>
 </main>
</template>

<style>
/* .bold-border {
  @apply border-black border-2 border-b-4 border-r-4 font-bold rounded-lg px-2 py-1 transition-all ease-in text-black;
  } */
</style>
