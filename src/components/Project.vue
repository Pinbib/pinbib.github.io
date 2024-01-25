<script>
export default {
  props: {
    title: String,
    description: String,
    url: String,
    status: String | undefined
  }
};
</script>

<template>
  <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">{{ title }}</h5>
      <p class="card-text">
        {{ description }}
      </p>
      <a :href="url" class="btn btn-primary">Open</a>
    </div>
  </div>
</template>

<style scoped>
.card {
  background-color: rgba(28, 30, 33, 0.06);
  border: solid rgba(240, 248, 255, 0.34) 1px;
  color: aliceblue;
}
</style>