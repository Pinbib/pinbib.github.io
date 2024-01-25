<script>
export default {
  props: {
    title: String
  }
};
</script>

<template>
  <div class="mx-auto text-center">
    <img alt="Icon" src="/favicon.png"><br>
    <span class="title" v-html="this.title"></span>
  </div>
</template>

<style scoped>
.title {
  font-size: 4rem;
  text-shadow: -1px 1px 2px rgba(255, 255, 255, 0.5)
}
</style>