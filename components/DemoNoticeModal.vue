<template>
 <div>
  <!-- Open the modal using ID.showModal() method -->
  <button
   class="p-1 font-mono absolute rounded-lg border-2 boder-red-500 bg-red-200 text-red-500 animate-pulse bottom-0 right-0"
   onclick="demo_notice.showModal()"
  >
   version <span class="underline">demo</span>
  </button>
  <dialog id="demo_notice" class="modal">
   <div class="modal-box">
    <h3 class="font-bold text-lg">Hello!</h3>
    <p class="py-4">
     This project is current in a demo stage. Many of the common features you
     would find in social media apps like Twitter or forum sites like Reddit or
     Quora
    </p>
   </div>
   <form method="dialog" class="modal-backdrop">
    <button>close</button>
   </form>
  </dialog>
 </div>
</template>

<style scoped>
button {
 font-size: 0.6rem;
}
</style>
