<script setup>
const firebaseUser = useFirebaseUser();
watch(firebaseUser, async () => {
 //  if (firebaseUser.uid !== undefined) {
 //   alert("success");
 //   return navigateTo(`/users/${firebaseUser.uid}`);
 //  }
 alert("somethign happend", typeof firebaseUser.uid);
});
</script>
<template>
 <div class="text-5xl">
  LET ME COOK {{ firebaseUser ? firebaseUser.uid : "" }}
  <!-- <NuxtLink :to="`/user/${firebaseUser.uid}`">Click</NuxtLink> -->
 </div>
</template>
