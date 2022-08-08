import { createWebHistory, createRouter } from "vue-router";
import Hotels from "@/pages/Hotels.vue";

const routes = [
    {
        path: "/",
        name: "Hotels",
        component: Hotels,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;