import { createRouter, createWebHistory } from "vue-router";

import alimentosViews from "@/views/alimentosViews.vue";
import HomeView from "@/views/HomeView.vue";
import AlimentosViews from "@/views/alimentosViews.vue";
import 

const routes = [
    {path: '/', component: HomeView},
    {path: '/alimentos', component: AlimentosViews},
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router