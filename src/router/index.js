import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Live from '../views/Live.vue'
import Bio from '../views/Bio.vue';
import Media from '../views/Media.vue'
import Press from '../views/Press.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/live',
    name: 'live',
    component: Live
  },
  {
    path: '/bio',
    name: 'bio',
    component: Bio
  },
  {
    path: '/media',
    name: 'media',
    component: Media
  },
  {
    path: '/press',
    name: 'press',
    component: Press
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
