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
                                    Development Goals.</span> </a> <br>
                            I have a passion for the environment and for technology.<br>
                        </p>
                        <hr>
                        <p>
                            From May 9 to 17 2024 I participated in the <a href="http://www.freewat.eu/"
                                target="_blank"><span class="txt_primary color_txt_link">FREEWAT</span></a> online
                            course for groundwater resource modeling through the plugin <a
                                href="https://plugins.qgis.org/plugins/freewat/" target="_blank"><span
                                    class="txt_primary color_txt_link">FREEWAT-Q3</span></a> for QGIS held by <a
                                href="http://www.freewat.eu/partners/scuola-superiore-santanna-sssa"
                                target="_blank"><span class="txt_primary color_txt_link">Scuola
                                    Universitaria Superiore di Pisa.</span></a>
                        </p>
                        <div class="col-12 text-center mb-3">
                            <a href="https://ec.europa.eu/eurostat/web/main/home"><img class="eurostat_logo"
                                    src="../assets/img/dec/eurostat.svg" alt=""></a>
                        </div>


                        <p>
                            On this site you can get started with FREEWAT-Q3 through a video tutorial that will show you
                            how to install the plugin and how to build an initial numerical model.
                        </p>
                        <p>
                            If you want to know more about the FREEWAT project click the button below.
                        </p>

                        <div class="link_lucas text-center py-2">
                            <a href="http://www.freewat.eu/" class="btn text-light zoom-effect lucas_link"
                                target="_blank"><strong>FREEWAT
                                    website</strong></a>
                        </div>
                    </div>

                    <div class="col-12 col-lg-4 d-flex flex-wrap goals mx-4 col_goals_onu">
                        <div class="col-3 text-center p-2" v-for="goal in goalsArray" :key="goal.img">
                            <a :href="goal.link" target="_blank">
                                <img class="rounded-4 zoom-effect-goals" :src="getImagePath(goal.img)" alt="Goal Image">
                            </a>
                        </div>
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