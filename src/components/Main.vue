<script>
import Container from "@/components/Container.vue";

export default {
  components: {Container},
  props: {
    repos: Array
  }
};
</script>

<template>
  <div class="repos">
    <Container :items="repos"/>
  </div>
</template>

<style scoped>
.repos {
  margin-top: 2vh;
  justify-content: center;
  display: flex;
  height: 40vh;
}

@media (max-width: 768px) {
  .repos {
    height: 30vh;
  }
}

@media (max-width: 400px) {
  .repos {
    height: 20vh;
  }
}
</style>