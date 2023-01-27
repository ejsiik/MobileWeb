import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { connection } from '../backend-connection/connection'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/menu',
      name: 'menu',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/MenuView.vue')
    },
    {
      path: '/addTask',
      name: 'addTask',
      component: () => import('../views/AddTaskView.vue')
    },
    {
      path: '/tasks',
      name: 'tasks',
      component: () => import('../views/RunningTasksView.vue')
    },
    {
      path: '/choose',
      name: 'raportsChoose',
      component: () => import("../views/RaportsChooseView.vue")
    },
    {
      path: '/choose/category',
      name: 'raportsCategory',
      component: () => import("../views/RaportsCategoryView.vue")
    },
    {
      path: '/choose/all',
      name: 'raportsAll',
      component: () => import("../views/RaportsAllView.vue")
    },
  ]
})

router.beforeEach((to, from) => {
  if (to.path !== "/") {
    if (!connection.authToken) {
      return { path: "/" }
    }
    return true;
  }
  return true;
});

export default router
