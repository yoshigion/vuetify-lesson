import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/enterprise',
    name: 'Enterprise',
    component: () => import('../views/Enterprise.vue')
  },
  {
    path: '/consulting-and-support',
    name: 'Consulting and Suppourt',
    component: () => import('../views/Enterprise.vue')
  },
  {
    path: '/discord-community',
    name: 'Discord Community',
    component: () => import('../views/Enterprise.vue')
  },
  {
    path: '/report-a-bug',
    name: 'Report a Bug',
    component: () => import('../views/Enterprise.vue')
  },
  {
    path: '/github-issue-board',
    name: 'Github Issue Board',
    component: () => import('../views/Enterprise.vue')
  },
  {
    path: '/stack-overflow',
    name: 'Stack Overflow',
    component: () => import('../views/Enterprise.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
