<template>
  <div id="app" class="container-fluid">
    <navigation />
    <router-view></router-view>
     
    <Footer />

  </div>
</template>

<script>
import Navigation from './components/Navigation.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Navigation,
    Footer
  },
  metaInfo: {
      title: 'Home',
      titleTemplate: '%s | The TABLE'
    }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

html, body {
  //overflow-x: hidden;
}

body {
  //position: relative;
  background-color: #f7f7f7;
  
}
</style>
