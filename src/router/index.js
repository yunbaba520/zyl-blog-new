import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('../views/home.vue')
    },
    {
      path: '/article',
      name: 'article',
      component: () => import('../views/article.vue')
    },
    // 404
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('../views/error/404.vue')
    }
  ]
})

export default router
