<template>
  <div id="app">
    <!--<img src="./assets/logo.png"/>-->
    <router-view/>
  </div>
</template>
<script>
import BootstrapVue from 'bootstrap-vue'
import Vue from 'vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Vuex from 'vuex'

export default {
    name: 'App'
}
Vue.use(BootstrapVue)
Vue.use(Vuex)
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}


</style>


