import Vue from 'vue'
import Router from 'vue-router'
import RandomShow from '@/components/RandomShow'
import LandingPage from '@/components/LandingPage'
Vue.use(Router)

export default new Router({
    routes: [
      {
        path: '/',
        name: 'LandingPage',
        component: LandingPage
      },
      {
        path: '/random-show',
        name: 'RandomShow',
        component: RandomShow
      }
    ]
  });