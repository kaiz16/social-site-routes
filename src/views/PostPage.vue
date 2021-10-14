<template>
  <Loading v-if="loading" />
  <div v-if="post">
    <p>Title - {{ post.title }}</p>
    <p>Content - {{ post.body }}</p>
    <p>ID - {{ post.id }}</p>
    <p>User ID - {{ post.userId }}</p>
  </div>
</template>

<script>
import Loading from "../components/Loading.vue";
export default {
  components: {
    Loading,
  },
  data() {
    return {
      post: null,
      loading: false,
    };
  },
  mounted() {
    this.loading = true;
    fetch(
      "https://jsonplaceholder.typicode.com/posts/" + this.$route.params.id
    ).then((data) => {
      data.json().then((json) => {
        this.post = json;
        this.loading = false;
      });
    });
  },
};
</script>

<style></style>
