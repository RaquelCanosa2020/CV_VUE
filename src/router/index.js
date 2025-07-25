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
    path: '/practices',
    name: 'Practices',
    component: Home
  },
  
  {
    path: '/about',
    name: 'About',
   
    component: function () {
      return import('../views/About.vue')
    }
  }
]

const router = new VueRouter({
  mode:'history',
  routes,
  scrollBehavior() {
     return new Promise((resolve) => {
      setTimeout(() => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth' // ¡scroll animado!
        })
        resolve()
      }, 300) // espera pequeña para asegurar que el DOM se haya actualizado
    })
  }

  })

export default router
