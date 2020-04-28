import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import App from './App.vue'



Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

// Installs BootstrapVue
Vue.use(BootstrapVue)
// Optionally installs the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
