<script setup>
definePageMeta({
 middleware: ["auth"],
});

const firebaseUser = useFirebaseUser();
</script>

<template>
 <div>
  <div>Secret</div>
 </div>
</template>

<style></style>
