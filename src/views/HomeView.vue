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
                    <div class="col-12 text-center mt-5">
                        <img src="../assets/img/fw_logo.svg" class="text-center" alt="">
                    </div>
                    <div class="col-12 col-lg-8 bg_row_img py-5 my-2 align-content-center introduce">

                        <div class="link_lucas text-center py-2">
                            <a href="http://www.freewat.eu/" class="btn txt_title_thin zoom-effect lucas_link"
                                target="_blank"><strong>FREEWAT
                                    website</strong></a>
                        </div>
                        <hr>
                        <p>
                            As part of the <a href="https://prima-med.org/what-we-do/nexus/" target="_blank"><span
                                    class="txt_primary color_txt_link">PRIMAProgram</span> </a> <a
                                href="https://prima-nexus-ness.org/" target="_blank"><span
                                    class="txt_primary color_txt_link">NEXUS-NESS</span> </a> project, an online course
                            on the
                            <a href="http://www.freewat.eu/" target="_blank"><span
                                    class="txt_primary color_txt_link">FREEWAT-Q3</span></a> plugin for QGIS, organized
                            by the <a href="https://www.santannapisa.it/it/istituto/produzioni-vegetali"
                                target="_blank"><span class="txt_primary color_txt_link">Scuola Superiore Sant’Anna –
                                    Institute of Crop Science</span> </a> from May 9 to
                            17. <br>
                        </p>
                        <div class="link_lucas text-center py-2">
                            <a href="http://www.freewat.eu/" class="btn txt_title_thin zoom-effect lucas_link"
                                target="_blank"><strong>FREEWAT for NEXUS-NESS</strong></a>
                        </div>

                        <p class="mt-3">
                            On this site you can get started with FREEWAT-Q3 through a video tutorials that will show you
                            how to install the plugin and how to build an initial numerical model.
                        </p>
                        <p class="text-center">
                            <a target="_blank"
                                href="https://prima-nexus-ness.org/2024/05/31/freewat-q3-course-empowering-groundwater-resource-management/">Go
                                to
                                NEXUS-NESS News</a>
                                or 
                            <a target="_blank"
                                href="https://www.linkedin.com/feed/update/urn:li:activity:7198342938693636097">Go to
                                Linkedin Post</a>
                        </p>
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

.icon_social {
    width: 10%;
}


@media (max-width: 786px) {
    .icon_social {
        width: 20%;
    }
}
</style>