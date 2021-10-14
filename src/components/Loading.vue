<template>
  <span class="mdi mdi-loading mdi-48px"></span>
</template>

<script>
export default {};
</script>

<style scoped>
.mdi-loading::before {
  animation: spin 1s linear infinite;
}
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
