<script>
import IconTitle from "@/components/IconTitle.vue";
import Project from "@/components/Project.vue";
import Subpage from "@/components/Subpage.vue";

class Subpage_ {
  constructor(title, url) {
    this.title = title;
    this.url = url;
  }
}

class Project_ extends Subpage_ {
  constructor(title, description, url, status = undefined) {
    super(title, url);
    this.description = description;
    if (status) {
      this.status = status;
    }
  }
}

export default {
  components: {Project, IconTitle, Subpage},
  data() {
    return {
      projects: [
        new Project_("DuScript", "The purpose of creating this language was an experiment to find out their strength. The peculiarity of this language is the modules unlimited by syntax.", "https://github.com/Pinbib/DuScript"),
        new Project_("QLore", "QLore is a tool for testing servers using simple scripts.", "https://github.com/Pinbib/QLore")
      ],
      subpages: [
        new Subpage_("QLore", "/.qlore"),
        new Subpage_("Search", "/search"),
        new Subpage_("QSub", "/QSub")
      ]
    };
  }
};
</script>

<template>
  <div class="container-fluid" style="margin-top: 5%">
    <IconTitle title="Hi, I'm <strong>PinBib!</strong>"/>
    <br>
  </div>
  <div class="projects-list">
    <Project v-for="project in projects" :description="project.description" :title="project.title"
             :url="project.url" class="d-inline-flex"/>
  </div>
  <div class="subpages">
    <h1 class="mx-auto text-center">SubPages</h1>
    <Subpage v-for="subpage in subpages" :title="subpage.title" :url="subpage.url" class="d-inline-flex"/>
  </div>
</template>
<style scoped>
.projects-list div {
  margin-left: 2%;
  margin-top: 1%;
}

.projects-list div:hover {
  border: solid #388e3c 1px;
  background-color: rgba(0, 105, 92, 0.02);
}

.subpages div {
  margin-left: 2%;
  margin-top: 1%;
}

.subpages div:hover {
  border: solid #388e3c 1px;
  background-color: rgba(0, 105, 92, 0.02);
}
</style>