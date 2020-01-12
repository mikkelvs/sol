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
