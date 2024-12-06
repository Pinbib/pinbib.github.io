<script>
export default {
  props: {
    direction: "left" | "right"
  }
};
</script>

<template>
  <svg v-if="direction==='right'" class="arrow arrowRight" fill="#fafafa" height="512px"
       style="enable-background:new 0 0 512 512;"
       version="1.1" viewBox="0 0 512 512"
       width="512px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><polygon points="352,128.4 319.7,96 160,256 160,256 160,256 319.7,416 352,383.6 224.7,256 "/></svg>
  <svg v-else class="arrow" fill="#fafafa" height="512px" style="enable-background:new 0 0 512 512;"
       version="1.1" viewBox="0 0 512 512"
       width="512px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><polygon points="352,128.4 319.7,96 160,256 160,256 160,256 319.7,416 352,383.6 224.7,256 "/></svg>


</template>

<style scoped>
.arrow {
  width: 15vw;
  height: 15vh;
  cursor: pointer;

  transition: height 0.5s, width 0.5s ease-in-out;
}

.arrow:hover {
  width: 20vw;
  height: 20vh;
}

.arrowRight {
  transform: rotate(180deg);
}
</style>