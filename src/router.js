import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import SobreMi from './views/SobreMi.vue'
import Contacto from './views/Contacto.vue'
import Blog from './views/Blog.vue'
import NotFound from './views/NotFound.vue'

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
      path: '/sobremi',
      name: 'SobreMi',
      component: SobreMi
    },
    {
      path: '/contacto',
      name: 'Contacto',
      component: Contacto
    },
    {
      path: '/post/:num',
      name: 'Blog',
      component: Blog
    },
    {
      path: '/*',
      name: 'NotFound',
      component: NotFound
    }
  ]
})
