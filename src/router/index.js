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
    path: '/choose-job',
    name: 'chooseJobContext',
    component: () => import('../views/ChooseResume.vue')
  },
  {
    path: '/job/:id',
    name: 'singleJob',
    component: () => import('../views/JobView.vue')
  },  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
