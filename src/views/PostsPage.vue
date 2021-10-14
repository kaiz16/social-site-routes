<template>
  <div class="posts">
    <h1>This is posts page</h1>
    <Loading v-if="loading" />
    <Post v-for="post in posts" v-bind:key="post.id" v-bind:post="post" />
    <router-view />
  </div>
</template>
<script>
import Post from "@/components/Post";
import Loading from '../components/Loading.vue';
export default {
  components: {
    Post,
    Loading
  },
  data() {
    return {
      posts: [],
      loading: false,
    };
  },
  mounted() {
    this.loading = true;
    fetch("https://jsonplaceholder.typicode.com/posts").then((data) => {
      data.json().then((json) => {
        this.posts = json;
        this.loading = false;
      });
    });
  },
};
</script>
