<script>
import { ref } from "vue";
import { useRoute } from "vue-router";
import projectsData from "../data/data_projects.json";

export default {
  name: "ProjectsView",
  setup() {
    const route = useRoute();
    const projectId = route.params.id;
    const project = ref(projectsData.find(p => p.id === parseInt(projectId)));
    
    return {
      project,
    };
  },
  methods: {
    getImagePath: function (name) {
      return new URL(`../assets/img/${name}`, import.meta.url).href;
    },
  },
};
</script>

<template>
  <div class="container p-5">
    <div class="row align-items-center justify-content-center">
      <div class="col-lg-12 text-center">
        <h1 class="txt_title">{{ project.name }}</h1>
        <p class="txt_proj">{{ project.desc_card }}</p>
        <div class="row py-5 justify-content-center">
          <div
            class="col-lg-3 col-md-4 col-sm-6"
            v-for="tutorial in project.tutorials"
            :key="tutorial.id"
          >
          <div class="card text-left rounded-5">
            <img :src="getImagePath(project.image)" alt="project image" class="img_cards rounded-top-5"/>
            <div class="card-body">
              <a :href="tutorial.video_url" target="_blank" class="btn btn-primary">Watch Video</a>
              <h4 class="card-title">Title</h4>
              <p class="card-text">Body</p>
            </div>
          </div>
           
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.img_cards{
    width: 100%;
}
</style>
