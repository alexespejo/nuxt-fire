<script setup>
const welcomeMessage = ref("Welcome \nto STEM Connect!");
</script>

<template>
 <NuxtLayout name="network">
  <div
   class="flex justify-center items-center flex-col bg-white/80 space-y-5 p-4 md:border-2 rounded-xl shadow-sm md:w-1/2"
  >
   <h1 class="w-fit text-4xl text-center sm:text-5xl">
    <span
     v-for="letter in welcomeMessage.split('')"
     :key="letter"
     class="hover:text-blue-300"
    >
     {{ letter }}
    </span>
   </h1>
   <div class="flex flex-col space-y-2 text-xs md:text-sm overflow-auto">
    <p class="text-center">
     🚀 Welcome aboard the hub for Orange Coast College's STEM enthusiasts! 🌟
    </p>
    <p>
     At STEM Connect, we're thrilled to have you join our vibrant community of
     budding scientists, engineers, mathematicians, and tech aficionados. Here,
     you'll find a world of knowledge, collaboration, and endless possibilities.
    </p>
    <ul class="flex flex-col space-y-1">
     <li>
      🔍 Dive into insightful discussions, ask burning questions, and share your
      expertise.
     </li>
     <li>📚 Explore a treasure trove of resources and expand your horizons.</li>
     <li>
      🤝 Connect with like-minded peers, form study groups, and embark on
      exciting projects.
     </li>
     <li>
      📣 Stay in the loop with STEM-related events, workshops, and
      opportunities.
     </li>
    </ul>
    <p>
     Your journey through the world of STEM starts right here. Let's learn,
     grow, and achieve together! 🌐🔬🔗 Happy exploring!
    </p>
   </div>

   <a href="/login" class="btn-bordered bg-white text-2xl"> Get Started! </a>
  </div>
 </NuxtLayout>
</template>
