import Vue from "vue";
import Router from "vue-router";
import Home from "./components/Home.vue";
import Biography from "./components/Biography";
import Contact from "./components/Contact";

// Installs Router
Vue.use(Router);

export default new Router({

    routes: [
        {
            path: "/",
            name: "home",
            component: Home,
            meta: {
                title: 'Home - The Table'
            },            
        },
        {
            path: "/Bio",
            name: "biography",
            component: Biography,
            meta: {
                title: 'Biography - The Table'
            },
        },
        {
            path: "/Contact",
            name: "contact",
            component: Contact,
            meta: {
                title: 'Contact - The Table'
            }
        }
    ],
    
})

