import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/todo',
    name: 'Todo',
    component: () => import('../views/TodoView.vue')
  },
  {
    path: '/example1',
    name: 'Bài 1',
    component: () => import('../views/ExampleView1.vue')
  },
  {
    path: '/example2',
    name: 'Bài 2',
    component: () => import('../views/ExampleView2.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
