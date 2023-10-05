<script setup>
const credentials = ref();
const firebaseUser = useFirebaseUser();

const signOut = async () => {
 credentials.value = await signOutUser();

 return navigateTo("/login");
};
const showModal = () => {
 my_modal_1.showModal();
};
</script>
<template>
 <main class="relative h-screen w-screen overflow-auto">
  <nav
   class="flex items-center justify-between bg-white shadow-lg sticky top-0 px-1"
  >
   <NuxtLink to="/secret" class="btn btn-ghost">
    <div class="flex flex-col items-start">
     <h1 class="md:text-xl text-lg">STEM Connect</h1>
     <h6 class="text-xs hidden lg:block text-gray-400">
      Brought to you by the OCC Computer Science club
     </h6>
    </div>
   </NuxtLink>
   <div class="flex items-center">
    <div class="flex flex-col p-1">
     <h3 class="text-sm hidden md:block">Welcome</h3>
     <h3 class="text-sm hidden md:block">
      {{ firebaseUser ? firebaseUser.displayName : "" }}
     </h3>
    </div>

    <div class="dropdown dropdown-end p-2">
     <label
      tabindex="0"
      class="cursor-pointer flex items-center hover:bg-gray-200 p-1 rounded-xl"
     >
      <img
       v-if="firebaseUser"
       :src="firebaseUser.photoURL"
       alt=""
       :class="`rounded-lg w-10 h-10 md:h-12 md:w-12`"
      />
      <div
       class="rounded-lg w-10 h-10 md:h-12 md:w-12 pulse bg-slate-200"
       v-else
      ></div>
      <Icon name="gridicons:dropdown" class="text-2xl" />
      <!-- <Icon icon="ic:baseline-arrow-drop-down" /> -->
     </label>
     <ul
      tabindex="0"
      class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 border-2 border-base-300"
     >
      <li>
       <NuxtLink :to="`/user/${firebaseUser ? firebaseUser.uid : ''}`"
        >Profile</NuxtLink
       >
      </li>
      <!-- <li>
       <NuxtLink :to="`/editProfile/${firebaseUser ? firebaseUser.uid : ''}`"
        >Edit Profile</NuxtLink
       >
      </li> -->
      <li><button @click="showModal">Sign out</button></li>
     </ul>
    </div>
   </div>
  </nav>
  <dialog id="my_modal_1" class="modal">
   <div class="modal-box">
    <h3 class="font-bold text-lg">Hol'up pal!</h3>
    <p class="py-4">Are You sure you want sign out?</p>
    <div class="flex justify-between">
     <button class="btn btn-error" @click="signOut">Yes! Sign Out</button>
     <form method="dialog ">
      <!-- if there is a button in form, it will close the modal -->
      <button class="btn">Cancel</button>
     </form>
    </div>
   </div>
  </dialog>
  <div class="md:px-28 md:pt-3">
   <slot />
  </div>
 </main>
</template>
