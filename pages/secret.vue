<script setup>
definePageMeta({
 middleware: ["auth"],
});
const firebaseUser = useFirebaseUser();
const postTitle = ref("");
const postContent = ref("");

const { pending, data: userPosts } = await useFetch("/api/get/get-posts", {
 lazy: true,
});
async function createPost() {
 if (postTitle.value && postContent.value && firebaseUser) {
  const post = await $fetch("/api/post/create-post", {
   method: "post",
   body: {
    uid: firebaseUser.value.uid,
    postTitle: postTitle.value,
    postContent: postContent.value,
   },
  });
  //   alert(post.post_id);
  return navigateTo(`/viewPost/${post.post_id}`);
 }
}
</script>

<template>
 <NuxtLayout name="custom">
  <div class="h-1/6 lg:w-3/4 self-center w-full">
   <div
    class="bg-white border-2 border-b-4 border-r-4 border-back rounded-lg p-1 border-slate-400 text-gray-400 self-center w-full h-fit"
   >
    <!-- You can open the modal using ID.showModal() method -->
    <CreatePostModal
     class=""
     id="createPost"
     :disabled="!firebaseUser"
     title="Create Post"
    >
     <h3 class="font-bold text-base">Create Post</h3>
     <form class="flex-col space-y-5" @submit.prevent="createPost">
      <div class="form-control w-full">
       <label class="label">
        <span class="label-text text-base">Title Your Post</span>
       </label>
       <input
        type="text"
        placeholder="Type here"
        class="p-2 bold-border focus:border-black w-full max-w-full"
        v-model="postTitle"
       />
      </div>
      <div class="form-control">
       <textarea
        class="p-2 bold-border focus:border-black h-24"
        placeholder="Type Here"
        v-model="postContent"
       ></textarea>
      </div>
      <input type="submit" class="btn" />
     </form>
    </CreatePostModal>
   </div>
  </div>
  <div class="" v-if="pending">pending</div>
  <main
   class="flex flex-col space-y-3 py-5 px-1 md:w-3/4 self-center overflow-auto h-5/6"
   v-else
  >
   <article
    v-for="i in userPosts.posts"
    class="bold-border rounded-lg"
    :key="i"
   >
    <UserPosts :uid="i.id" :title="i.title">
     {{ i.content }}
    </UserPosts>
   </article>
  </main>
 </NuxtLayout>
</template>
