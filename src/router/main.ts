import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  { path: '/', redirect: '/home' },
  { path: '/home', component: () => import('@/page/home/main.vue') },
  { path: '/login', component: () => import('@/page/login/main.vue') }
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router