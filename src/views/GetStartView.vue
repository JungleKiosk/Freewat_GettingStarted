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
            <div class="col-lg-12 text-center">
                <h1 class="txt_title">Tutorials</h1>

                <p class="txt_proj">
                    Click on a tutorials, go to the summary and view the video
                </p>


                <div class="row py-5 justify-content-center">
                    <div :to="`/project/${project.id}`" class="col-lg-8 col-md-4 col-sm-6" v-for="project in projects"
                        :key="project.id" @click="router.push(`/project/${project.id}`)">
                        <div class="card rounded-5 my-4">
                            <img :src="getImagePath(project.image)" alt="project image" class="img_cards rounded-top-5"/>
                            <div class="card-body">
                                <h4 class="card-title">{{ project.tutorial }}</h4>
                                <h1 class="card-title">{{ project.name }}</h1>
                                <!-- <p class="card-text">Click on</p> -->
                                <p class="card-text">{{ project.desc_card }}</p>
                            </div>
                        </div>

                    </div>
                </div>


            </div>
        </div>
    </div>
    <Footer></Footer>
</template>

<style scoped>
.img_cards{
    width: 100%;
}
</style>