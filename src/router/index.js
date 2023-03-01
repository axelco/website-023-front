import { createRouter, createWebHistory } from 'vue-router'

const routes = [

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
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/ContactView.vue')
  },  
  {
    path: '/:pathMatch(.*)*',
    redirect: '/resume',
  },   
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass : "active",
  scrollBehavior() {
    // always scroll to top
    return { top: 0 }
  },    
})

export default router
