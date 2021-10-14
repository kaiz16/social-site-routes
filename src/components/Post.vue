<template>
  <div class="post">
    <p>Title - {{ post.title }}</p>
    <p>Content - {{ post.content }}</p>
    <p>ID - {{ post.id }}</p>
    <p>User ID - {{ post.userId }}</p>
  </div>
  <hr>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style></style>
