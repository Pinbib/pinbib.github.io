<script>
import axios from "axios";

import Header from "@/components/Header.vue";
import Main from "@/components/Main.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    Header,
    Main,
    Footer
  },
  created() {
    this.getBio().then(() => {
      this.getRepos().then(this.loaded).catch(this.error);
    }).catch(this.error);
  },
  methods: {
    async getBio() {
      const response = await axios.get("https://api.github.com/users/Pinbib");
      this.bio = response.data.bio;
    },
    async getRepos() {
      let response = await axios.get("https://api.github.com/users/Pinbib/repos");
      response = response.data.sort((a, b) => new Date(b.pushed_at) - new Date(a.pushed_at)).filter((repo) => {
        if (repo.private) {
          return false;
        }

        if (repo.size === 0) {
          return false;
        }

        return !/^(\.)|(\.github\.com)$/gm.test(repo.name);
      });

      this.repos = response.map((repo) => {
        return {
          name: repo.name,
          url: repo.html_url,
          lang: repo.language,
          desc: repo.description,
          has_pages: repo.has_pages
        };
      });
    },
    loaded() {
      this.loading = false;
    },
    error(e) {
      document.getElementById("loadingLog").innerHTML = "<span style='color: var(--error); cursor: pointer;'>ERROR</span>";
      document.getElementById("loadingLog").addEventListener("click", () => location.reload());
      console.log(e);
    }
  },
  data() {
    return {
      loading: true,
      bio: "",
      repos: []
    };
  }
};
</script>

<template>
  <div v-if="!loading">
    <Header :description="$data.bio" title="PinBib"/>
    <Main :repos="$data.repos"/>
    <Footer/>
  </div>
  <div v-else class="loading">
    <div class="spinner"></div>
    <p id="loadingLog">Loading...</p>
  </div>
</template>

<style scoped>
.loading {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  flex-direction: column;
}
</style>