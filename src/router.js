import Vue from 'vue';
import VueRouter from "vue-router";
import About from "./views/About";
import App from "@/App";

Vue.use(VueRouter);

const router = new VueRouter({
    mode: "history",
    routes: [
        {path: "/", component: App},
        {path: "/about", component: About}
    ]
});

export default router;