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
            <div class="project-card p-2 my-2 rounded-4 d-flex flex-column align-items-center justify-content-center">
              <img :src="getImagePath(project.image)" alt="project image" class="img-fluid rounded-4 mb-2"/>
              <h4 class="mb-1">{{ tutorial.title }}</h4>
              <p class="text-center">{{ tutorial.desc }}</p>
              <a :href="tutorial.video_url" target="_blank" class="btn btn-primary">Watch Video</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.project-card {
  background-color: #f8f9fa;
  border: 1px solid #dee2e6;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
  padding: 20px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.project-card img {
  max-height: 150px;
  object-fit: cover;
  margin-bottom: 10px;
}
.project-card h4 {
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 10px;
}
.project-card p {
  font-size: 1rem;
  color: #6c757d;
  white-space: pre-wrap; /* Gestisce correttamente i ritorni a capo nel testo */
}
</style>
