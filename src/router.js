import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Loading from './views/Loading.vue'
import ErrorScene from './views/Error.vue'
import Success from './views/Success.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/loading',
      name: 'loading',
      component: Loading
    },
    {
      path: '/error',
      name: 'error',
      component: ErrorScene
    },
    {
      path: '/success',
      name: 'success',
      component: Success
    }
  ]
})
