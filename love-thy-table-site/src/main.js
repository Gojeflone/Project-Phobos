import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import App from './App.vue'
// Import Router files
import VueRouter from 'vue-router'
import router from './router.js'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faTshirt } from '@fortawesome/free-solid-svg-icons'

library.add(faFacebook)
library.add(faInstagram)
library.add(faTwitter)
library.add(faTshirt)
 
Vue.component('font-awesome-icon', FontAwesomeIcon)


Vue.config.productionTip = false



// Installs Router
Vue.use(VueRouter)
// Installs BootstrapVue
Vue.use(BootstrapVue)
// Optionally installs the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
new Vue({
  router: router,
  components : {
    app: App
  },
  el: "#app",
  render: h => h('app'),
})

