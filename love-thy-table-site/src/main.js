import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import App from './App.vue'
// Import Router files
import VueRouter from 'vue-router'
import router from './router.js'




Vue.config.productionTip = false



// Installs Router
Vue.use(VueRouter)
new Vue({
  router: router,
  components : {App},
  el: "#app",
  render: h => h(App),
}).$mount('#app')

// Installs BootstrapVue
Vue.use(BootstrapVue)
// Optionally installs the BootstrapVue icon components plugin
Vue.use(IconsPlugin)