import { createRouter, createWebHistory } from 'vue-router'

const routes = [

  {
    path: '/resume',
    name: 'resume',
    meta : {
      title : 'CV'
    },
    component: () => import('../views/ResumeView.vue')
  },
  {
    path: '/choose-job',
    name: 'chooseJobContext',
    meta : {
      title : 'Choix du job recherché'
    },    
    component: () => import('../views/ChooseResume.vue')
  },
  {
    path: '/job/:id',
    name: 'singleJob',
    meta : {
      title : 'Détail d\'un job'
    },        
    component: () => import('../views/JobView.vue')
  },  
  {
    path: '/contact',
    name: 'contact',
    meta : {
      title : 'Me contacer'
    },          
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

router.beforeEach((to, from, next) => {
  const title = to.meta.title || null
  const afterTitle = "Alexandre Rozec"
  
  document.title = title !== null ? `${title} - ${afterTitle}` : afterTitle;
  next();
});

export default router
