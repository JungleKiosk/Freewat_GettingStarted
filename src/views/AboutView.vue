<script>
import { goalsArray } from "../data/goalsOnuGrid.js"
import Footer from '../components/Footer.vue';


export default {
    name: "Home",
    data() {
        return {
            goalsArray
        }
    },
    components: {
        Footer
    },
    methods: {
        getImagePath: function (name) {
            return new URL(`../assets/img/${name}`, import.meta.url).href
        }
    }
}


</script>


<template>
    <main>
        <section class="jumbotron">
            <div class="container">
                <div class="row justify-content-center mb-5">
                    <div class="col-12 col-lg-6 bg_row_img py-5 my-2 align-content-center introduce">
                        <h1><strong>Hi, I'm </strong><span class="txt_title_thin">FRA</span></h1>
                        <p>
                            I have a master's degree in Planning and Management of Agro-Territorial, Forest and
                            Landscape:
                            <a href="https://corsi.unibo.it/2cycle/LandscapePlanningManagement" target="_blank"><span
                                    class="txt_primary color_txt_link"> PROGESA</span> </a><br>
                            The study program contribute to the pursuit of the <br>
                            <a href="https://www.un.org/sustainabledevelopment/" target="_blank"><span
                                    class="txt_primary color_txt_link" target="_blank">UN 2030 Agenda for Sustainable
                                    Development Goals.</span> </a> <br>I have a passion for the environment and for
                            technology.<br>
                        </p>


                    </div>
                    <!-- qui -->
                    <div class="col-12 col-lg-4 d-flex flex-wrap goals mx-4 col_goals_onu mb-5">
                        <div class="col-3 text-center p-2" v-for="goal in goalsArray" :key="goal.img">
                            <a :href="goal.link" target="_blank">
                                <img class="rounded-4 zoom-effect-goals" :src="getImagePath(goal.img)" alt="Goal Image">
                            </a>
                        </div>
                    </div>
                    <hr>
                    <p>
                        I'm working on the <a href="https://prima-med.org/what-we-do/nexus/" target="_blank"><span
                                class="txt_primary color_txt_link">PRIMAProgram</span> </a> <a
                            href="https://prima-nexus-ness.org/" target="_blank"><span
                                class="txt_primary color_txt_link">NEXUS-NESS</span> </a> project as a research fellow
                        in hydrogeological modeling and social media manager.</p>
                    <div class="col-12">
                        <img class="img_card rounded-4" src="../assets/img/join.png" alt="">
                    </div>


                </div>
            </div>
        </section>
    </main>
    <Footer></Footer>
</template>

<style>
.img_card {
    width: 50%;
}

.eurostat_logo {
    width: 50%;
}
</style>