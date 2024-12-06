<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  }
};
</script>

<template>
  <div id="header">
    <h1>{{ title }}</h1>
    <h2>{{ description }}</h2>
  </div>
</template>

<style scoped>
#header {
  width: 100vw;
  margin-top: 1vh;
}

h1 {
  margin: 0 auto;
  width: 20vw;

  text-align: center;

  font-size: 4rem;
}

@media (max-width: 945px) {
  h1 {
    width: 25vw;

    font-size: 3rem;
  }
}

@media (max-width: 640px) {
  h1 {
    width: 27vw;

    font-size: 2.5rem;
  }
}

@media (max-width: 412px) {
  h1 {
    width: 30vw;

    font-size: 2rem;
  }
}

h2 {
  margin: 0 auto;
  width: 30vw;

  text-align: center;

  color: var(--d-color);

  font-size: 2rem;
}

@media (max-width: 945px) {
  h2 {
    width: 35vw;

    font-size: 1.5rem;
  }
}

@media (max-width: 640px) {
  h2 {
    width: 37vw;

    font-size: 1rem;
  }
}

@media (max-width: 412px) {
  h2 {
    width: 40vw;
  }
}
</style>