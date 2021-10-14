<template>
  <div class="posts">
    <h1>This is posts page</h1>
    <Post v-for="post in posts" v-bind:key="post.id" v-bind:post="post" />
    <router-view />
  </div>
</template>
<script>
import Post from "@/components/Post";
export default {
  components: {
    Post,
  },
  data() {
    return {
      posts: [
        {
          title: "Post by Elon Musk",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed at ducimus nisi maiores? Expedita atque laborum accusamus, facere consequatur tempore necessitatibus alias consectetur numquam similique doloremque magnam dolore incidunt distinctio!",
          id: 0,
          userId: 1,
        },
        {
          title: "Post by Bill Gates",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed at ducimus nisi maiores? Expedita atque laborum accusamus, facere consequatur tempore necessitatibus alias consectetur numquam similique doloremque magnam dolore incidunt distinctio!",
          id: 1,
          userId: 2,
        },
        {
          title: "Post by some guy on reddit",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed at ducimus nisi maiores? Expedita atque laborum accusamus, facere consequatur tempore necessitatibus alias consectetur numquam similique doloremque magnam dolore incidunt distinctio!",
          id: 2,
          userId: 3,
        },
      ],
    };
  },
};
</script>

<style></style>
