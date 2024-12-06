<script>
import GitHub from "@/components/icons/GitHub.vue";

export default {
  props: {
    desc: String,
    has_pages: Boolean,
    lang: String,
    name: String,
    url: String
  },
  components: {
    GitHub
  }
};
</script>

<template>
  <div class="repo">
    <div class="hero">
      <div class="iconContainer">
        <a :href="url" target="_blank">
          <GitHub class="icon"/>
        </a>
      </div>
      <h1 class="title">{{ name }}</h1>
      <h3 class="desc">{{ desc }}</h3>
    </div>
    <div class="buttons">
      <div v-if="has_pages" class="buttonContainer">
        <a :href="'https://pinbib.github.io/'+name" target="_blank">
          <button class="button">Open</button>
        </a>
      </div>
      <div v-else class="buttonContainer">
        <a :href="url" target="_blank">
          <button class="button">Open</button>
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.repo {
  height: 100%;
  width: 100%;
  padding: 2%;
  border: 2px solid var(--color);
  border-radius: 5%;
  position: relative;
}

.iconContainer {
  width: 100%;
  display: flex;
  justify-content: center;
}

.icon {
  height: 50px;
  width: 50px;
}

.title, .desc {
  display: flex;
  justify-content: center;
}

h1 {
  font-size: 2rem;
}

h3 {
  margin: 0 auto;
  width: 30vw;

  text-align: center;

  color: var(--d-color);

  font-size: 2rem;
}

.buttons {
  width: 100%;
  position: absolute;
  bottom: 5vh;
  left: 0;
  right: 0;
}

.buttonContainer {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 5vh;
  width: 100%;
  padding: 0;
}

.button {
  color: var(--color);
  background-color: var(--b-color);
  height: 5vh;
  width: 35vw;

  font-weight: 600;
  font-size: 1rem;
  border: 0;
  border-radius: 0.357rem;

  transition: background-color 1s ease-in-out;
}

.button:hover {
  background-image: linear-gradient(140deg, rgba(0, 0, 0, 0), var(--b-color-hover), rgba(0, 0, 0, 0), var(--b-color-hover), rgba(0, 0, 0, 0));
  opacity: 0.95;
}

@media (max-width: 945px) {
  h3 {
    width: 35vw;

    font-size: 1.5rem;
  }
}

@media (max-width: 640px) {
  h3 {
    width: 37vw;

    font-size: 1rem;
  }
}

@media (max-width: 412px) {
  h3 {
    width: 40vw;
  }
}

@media (max-width: 945px) {
  .title {
    font-size: 2rem;
  }
}

@media (max-width: 640px) {
  .title {
    font-size: 1.5rem;
  }
}

@media (max-width: 412px) {
  .title {
    font-size: 1rem;
  }
}

@media (max-width: 768px) {
  .icon {
    height: 40px;
    width: 40px;
  }
}

@media (max-width: 400px) {
  .icon {
    height: 30px;
    width: 30px;
  }
}
</style>