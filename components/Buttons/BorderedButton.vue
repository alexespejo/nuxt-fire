<script setup>
const props = defineProps(["action"]);
</script>
<template>
 <button @click="props.action" class="bold-border"><slot /></button>
</template>
