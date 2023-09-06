<script setup>
const props = defineProps(["label"]);
</script>

<template>
 <div class="flex flex-col font-bold">
  <label :for="props.label" class="ml-1 mb-0.5 text-xl">{{
   props.label
  }}</label>
  <slot />
 </div>
</template>
