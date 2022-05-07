import Vue from 'vue'
import VueRouter from 'vue-router'
import AuthTrial from '@/components/pages/AuthTrial'
import TopPage from '@/components/pages/TopPage'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'TopPage',
    component: TopPage
  },
  {
    path: '/auth',
    name: 'AuthTrial',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    component: AuthTrial
  }
]

const router = new VueRouter({
  routes
})

export default router
