import Vue from "vue";
import Router from "vue-router";
import App from "./App.vue";
import Home from "./components/Home.vue";
import Biography from "./components/Biography";

// Installs Router
Vue.use(Router);

export default new Router({
    routes: [
        {
            path: "/",
            name: "home",
            component: Home
        },
        {
            path: "/Bio",
            name: "biography",
            component: Biography
        },
        {
            path: "/Contact",
            name: "contact",
            component: App
        }
    ]
})