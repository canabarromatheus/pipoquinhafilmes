import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Vuesax from 'vuesax'
import VueMask from 'v-mask'
import 'boxicons'

import Home from './components/Home.vue'
import About from './components/About.vue'
import Movie from './components/Movie.vue'
import Client from './components/Client.vue'
import RegisterMovie from './components/RegisterMovie.vue'
import RegisterClient from './components/RegisterClient.vue'
import 'vuesax/dist/vuesax.css'

Vue.config.productionTip = false

Vue.use(VueRouter);

Vue.use(VueMask);

Vue.use(Vuesax, {
    // options here
  })

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/home',
      component: Home,
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/client',
      component: Client
    },
    {
      path: '/registerClient',
      component: RegisterClient
    },
    {
      path: '/movie',
      component: Movie
    },
    {
      path: '/registerMovie',
      component: RegisterMovie
    },
    {
      path: '/about',
      component: About
    }
  ]
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
