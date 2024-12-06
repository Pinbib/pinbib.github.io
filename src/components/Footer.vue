<script>
import Link from "@/components/Link.vue";

export default {
  components: {Link}
};
</script>

<template>
  <div id="footer">
    <div class="grid">
      <Link icon="github" label="GitHub" url="https://github.com/Pinbib"/>
      <Link icon="npm" label="NPM" url="https://www.npmjs.com/~pinbib"/>
      <Link icon="jsr" label="JSR" url="https://jsr.io/user/b6b4e18e-35c8-40cf-8357-bc55c54bac23"/>
      <Link icon="reddit" label="Reddit" url="https://reddit.com/u/PinBib"/>
      <Link icon="mastodon" label="Mastodon" url="https://mastodon.social/@pinbib"/>
      <Link icon="x" label="X" url="https://x.com/PinBibe"/>
    </div>
  </div>
</template>

<style scoped>
#footer {
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: center;
  width: 100vw;
  border-top: 1px solid var(--color);
}

.grid {
  max-width: 50vw;
  padding-top: 1%;

  display: inline-grid;
  grid-template-columns: repeat(6, auto);
  grid-gap: 1vw;
}
</style>