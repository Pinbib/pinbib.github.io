<script>
import Arrow from "@/components/icons/Arrow.vue";
import Repo from "@/components/Repo.vue";

export default {
  components: {
    Arrow, Repo
  },
  props: {
    items: Array
  },
  data() {
    return {
      index: 0,
      slider: null
    };
  },
  methods: {
    next() {
      this.animate(() => {
        if (this.index < this.items.length - 1) {
          this.index++;
        } else {
          this.index = 0;
        }
      });
    },
    prev() {
      this.animate(() => {
        if (this.index > 0) {
          this.index--;
        } else {
          this.index = this.items.length - 1;
        }
      });
    },
    animate(callback) {
      const items = this.$el.querySelector('.items');
      items.classList.add('animate');
      setTimeout(() => {
        callback();
        items.classList.remove('animate');
      }, 500);
    }
  },
  mounted() {
    this.$data.slider = setInterval(this.next, 5000);

    this.$el.querySelector("#items").addEventListener('mouseover', () => {
      clearInterval(this.$data.slider);
    });
    this.$el.querySelector("#items").addEventListener('mouseout', () => {
      this.$data.slider = setInterval(this.next, 5000);
    });
  }
};
</script>

<template>
  <div class="container">
    <div id="left">
      <Arrow @click="prev"/>
    </div>
    <div id="items" class="items">
      <Repo :desc="items[index].desc" :has_pages="items[index].has_pages" :lang="items[index].lang"
            :name="items[index].name"
            :url="items[index].url"/>
    </div>
    <div id="right">
      <Arrow direction="right" @click="next"/>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: inline-grid;
  grid-template-columns: 30vw 40vw 30vw;
  width: 100vw;
  padding: 0;
  margin: 0;
}

#left, #right {
  display: flex;
  align-items: center;
}

#left {
  justify-content: left;
}

#right {
  justify-content: right;
}

.items {
  transition: opacity 0.5s cubic-bezier(0, 0.91, 0.64, 0.76);
}

.items.animate {
  opacity: 0;
}

@media (max-width: 460px) {
  .items {
    height: 35vh;
  }
}
</style>