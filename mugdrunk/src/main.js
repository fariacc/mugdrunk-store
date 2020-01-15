import Vue from 'vue'
import App from './App.vue'
import 'babel-polyfill'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import { routes } from './routes'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import FBSignInButton from 'vue-facebook-signin-button'
// Imports para o tour
//https://github.com/pulsardev/vue-tour
import VueTour from 'vue-tour'
require('vue-tour/dist/vue-tour.css')

Vue.use(VueResource)
Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.use(Vuetify)
Vue.use(FBSignInButton)
Vue.use(VueTour)

const router = new VueRouter({
  routes: routes,
  mode: 'history'
})

new Vue({
  el: '#app',
  router: router,
  vuetify: new Vuetify(),
  render: h => h(App)
})