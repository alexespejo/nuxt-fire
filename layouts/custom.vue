<script setup>
const credentials = ref();
const firebaseUser = useFirebaseUser();

const signOut = async () => {
 credentials.value = await signOutUser();

 return navigateTo("/login/signin");
};
</script>
<template>
 <main class="relative h-screen w-screen overflow-auto">
  <nav class="flex items-center bg-white shadow-lg sticky top-0 px-1">
   <NuxtLink to="/">
    <h1 class="md:text-xl">:P</h1>
   </NuxtLink>

   <div class="flex items-center space-x-2 ml-auto p-1">
    <h3 class="text-xl hidden md:block">{{ firebaseUser.displayName }}</h3>
   </div>

   <div class="dropdown dropdown-end p-2">
    <label tabindex="0" class="cursor-pointer">
     <img :src="firebaseUser.photoURL" alt="" class="rounded-lg w-10 md:w-12"
    /></label>
    <ul
     tabindex="0"
     class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 border-2 border-base-300"
    >
     <li><a>Profile</a></li>
     <li><button onclick="my_modal_1.showModal()">Sign out</button></li>
    </ul>
   </div>
  </nav>
  <dialog id="my_modal_1" class="modal">
   <div class="modal-box">
    <h3 class="font-bold text-lg">Hol'up pal!</h3>
    <p class="py-4">Are You sure you want sign out?</p>
    <div class="modal-action justify-between">
     <button class="btn btn-error" @click="signOut">Yes! Sign Out</button>
     <form method="dialog ">
      <!-- if there is a button in form, it will close the modal -->
      <button class="btn">Cancel</button>
     </form>
    </div>
   </div>
  </dialog>
  <div class="p-2">
   <slot />
  </div>
 </main>
</template>
