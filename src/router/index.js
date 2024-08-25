import { createRouter, createWebHistory } from 'vue-router'
import Landing from '@/components/landing.vue'
import Port from '@/components/portfolio.vue'
import News from '@/components/news.vue'
import Blog from '@/components/blog.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Landing',
      component: Landing
    },
    {
      path: '/news',
      name: 'News',
      component: News
    },
    {
      path: '/blog',
      name: 'Blog',
      component: Blog
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import('../views/AboutView.vue')
      component: Port
    }
  ]
})

export default router
