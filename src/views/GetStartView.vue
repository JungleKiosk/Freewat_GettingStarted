<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
import Footer from '../components/Footer.vue';

import projectsData from "../data/data_projects.json";

export default {
    name: "GetStart",
    components: {
        Footer,
    },
    setup() {
        const projects = ref(projectsData);
        const router = useRouter();
        return {
            projects,
            router,
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
    <div id="my_proj" class="container p-5">
        <div class="row align-items-center justify-content-center">
            <div class="col-8 text-center">
                <h1 class="txt_title_thin">Tutorials</h1>
                <p class="txt_proj">
                    Click on and go to the summary and video tutorials
                </p>
                <div class="row justify-content-center">
                    <div :to="`/project/${project.id}`" class="col-8" v-for="project in projects"
                        :key="project.id" @click="router.push(`/project/${project.id}`)">
                        <div class="card rounded-5 my-4 bg-dark text_cards shadow_cards">
                            <div class="card-body">
                                <h5 class="text-center">{{ project.num_tutorial }}</h5>
                                <h1 class="card-title">{{ project.name }}</h1>
                                <p class="card-text">{{ project.desc_card }}</p>
                            </div>
                            <img :src="getImagePath(project.image)" alt="project image"
                                class="img_cards rounded-bottom-5" />
                        </div>

                    </div>
                </div>


            </div>
        </div>
    </div>
    <Footer></Footer>
</template>

<style scoped>
.img_cards {
    width: 100%;
}
.text_cards{
    color:rgb(185, 253, 255)
}
</style>