<script>
export default {
  props: {
    title: String,
    url: String
  }
};
</script>

<template>
  <div class="card" style="width: 18rem;">
    <div class="card-body d-inline-flex">
      <h5 class="card-title">{{ title }}</h5>
      <a :href="url" class="btn btn-primary" style="margin-left: 50%;">Open</a>
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