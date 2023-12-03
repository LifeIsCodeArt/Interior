import { createRouter, createWebHistory } from 'vue-router'
import interiorMain from '../views/interiorMain.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
     {
       path: '/',
       name: 'home',
       component: interiorMain
     },

  ]
})

export default router
