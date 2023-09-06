<script setup>
const props = defineProps(["action"]);
</script>
<template>
 <button @click="props.action" class="bold-border"><slot /></button>
</template>

<style scoped>
.bold-border {
 @apply border-black border-2 border-b-4 border-r-4 font-bold rounded-lg px-2 py-1   transition-all ease-in-out hover:bg-orange-300;
}
</style>
