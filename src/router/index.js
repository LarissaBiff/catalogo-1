import { createRouter, createWebHistory } from "vue-router";

import HigieneViews from "@/views/HigieneViews.vue";
import BrinquedosViews from "@/views/BrinquedosViews.vue";
import alimentosViews from "@/views/alimentosViews.vue";
import HomeView from "@/views/HomeView.vue";
import AlimentosViews from "@/views/alimentosViews.vue";


const routes = [
    {path: '/', component: HomeView},
    {path: '/alimentos', component: AlimentosViews},
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router