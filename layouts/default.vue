<template>
 <main class="">
  layout
  <slot />
 </main>
</template>

<style>
* {
 @apply font-bold;
}
.bold-border {
 @apply border-black border-2 border-b-4 border-r-4 font-bold rounded-lg px-2 py-1   transition-all ease-in text-black;
}
.btn {
 @apply hover:border-2;
}
</style>
