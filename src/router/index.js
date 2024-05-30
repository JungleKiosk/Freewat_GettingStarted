import { createRouter, createWebHistory } from "vue-router";

import HomeView from "../views/HomeView.vue"
import GetStartView from "../views/GetStartView.vue"
import AboutView from "../views/AboutView.vue"
/* ------------------------------------------------- */

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomeView
        },
        {
            path: "/GetStart",
            name: "getstart",
            component: GetStartView
        },
        {
            path: "/About",
            name: "about",
            component: AboutView
        }
    ]
})

export default router