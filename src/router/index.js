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
    path: '/realisations',
    name: 'Realisations',
    component: () => import(/* webpackChunkName: "about" */ '../views/Realisations.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import(/* webpackChunkName: "about" */ '../components/Contact.vue')
  },
  {
    path: '/abouts',
    name: 'Abouts',
    component: () => import(/* webpackChunkName: "about" */ '../views/Abouts.vue')
  }
  ,
  {
    path: '/devis',
    name: 'Devis',
    component: () => import(/* webpackChunkName: "about" */ '../views/Devis.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
