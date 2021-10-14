<template>
  <div class="post">
    <p>Title - {{ post.title }}</p>
    <p>Content - {{ post.content }}</p>
    <p v-on:click="redirectToPost">ID - {{ post.id }}</p>
    <p v-on:click="redirectToUser">User ID - {{ post.userId }}</p>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  methods: {
    redirectToPost() {
      this.$router.push("/posts/" + this.post.id);
    },
    redirectToUser() {
      this.$router.push("/users/" + this.post.userId);
    },
  },
};
</script>

<style scoped>
.post {
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.75);
  padding: 10px;
  width: 50%;
  margin: 50px auto;
  transition: all 0.5s ease;
  cursor: pointer;
}

.post:hover {
  transform: scale(0.8);
}
</style>
