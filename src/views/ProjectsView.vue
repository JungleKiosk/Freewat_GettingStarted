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
      <div class="col-lg-12">
        <h1 class="text-center mb-5">{{ project.name }}</h1>
        <p class="text-center">{{ project.num_tutorial }}</p>
        <p class="" v-html="project.recommendations"></p>
        <p class="" v-html="project.aims_tutorial"></p>
        <div class="row py-5 justify-content-center">
          <div class="col-12 col-lg-4 col-md-4 col-sm-6 mb-5" v-for="tutorial in project.tutorials" :key="tutorial.id">
            <div class="card text-left rounded-5 bg-dark text_cards">
              <img :src="getImagePath(tutorial.img_tutorial)" alt="tutorial image" class="img_cards rounded-top-5" />
              <div class="card-body">
                <h4 class="card-title">{{tutorial.title}}</h4>
                <a :href="tutorial.video_url" target="_blank" class="btn btn-danger">Watch Video</a>
                <!-- <p class="card-text">Body</p> -->
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
.text_cards{
    color:rgb(185, 253, 255)
}
</style>
