<template>
 <div>
  <!-- Open the modal using ID.showModal() method -->
  <button
   class="p-1 font-mono rounded-lg border-2 boder-red-500 bg-red-200 text-red-500 animate-pulse bottom-0 right-0 self-end"
   onclick="demo_notice.showModal()"
  >
   version <span class="underline">demo</span>
  </button>
  <dialog id="demo_notice" class="modal">
   <div class="modal-box">
    <h3 class="font-bold text-lg">Hello!</h3>
    <p class="py-4">
     STEM Connect is currently in it's demo stage, many of the common features
     you would find in a modern social media application are currently under
     development. This demo is just to provide a glimpse of the app's current
     progress. Keep checking in to see some updates :)
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
