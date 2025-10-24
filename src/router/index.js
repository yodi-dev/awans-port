import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import News from '@/components/news.vue'
import DevLog from '@/views/DevLog.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/news',
      name: 'News',
      component: News
    },
    { path: '/devlog', component: DevLog }
  ]
})

export default router
