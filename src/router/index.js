import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/resume',
    name: 'resume',
    component: () => import('../views/ResumeView.vue')
  },
  {
    path: '/chose-job',
    name: 'choseJob',
    component: () => import('../views/ChooseResume.vue')
  }  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
