import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "" */ '../views/Home.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/areas',
    name: 'Areas',
    component: () => import(/* webpackChunkName: "areas" */ '../views/Areas.vue')
  },
  {
    path: '/proyectos',
    name: 'Proyectos',
    component: () => import(/* webpackChunkName: "proyectos" */ '../views/Proyectos.vue')
  },
  {
    path: '/productos',
    name: 'Productos',
    component: () => import(/* webpackChunkName: "productos" */ '../views/Productos.vue')
  },
  {
    path: '/proxEventos',
    name: 'ProximosEventos',
    component: () => import(/* webpackChunkName: "proxeventos" */ '../views/ProxEvent.vue')
  },
  {
    path: '/addEventos',
    name: 'AgregarEventos',
    component: () => import(/* webpackChunkName: "addEventos" */ '../views/AddEvent.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
