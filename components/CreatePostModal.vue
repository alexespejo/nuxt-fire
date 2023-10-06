<script setup>
const props = defineProps(["class", "id", "disabled", "title"]);
</script>

<template>
 <div class="">
  <button
   class="border-2 border-dashed text-gray-400 border-gray-400 w-full text-left p-1 hover:bg-slate-100 hover:border-gray-300 text-base"
   onclick="createPost.showModal()"
   :disabled="props.disabled"
  >
   {{ props.title }}
  </button>
  <dialog id="createPost" class="modal text-black">
   <div class="modal-box bold-border">
    <form method="dialog">
     <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
      ✕
     </button>
    </form>
    <div>
     <slot />
    </div>
   </div>
  </dialog>
 </div>
</template>
