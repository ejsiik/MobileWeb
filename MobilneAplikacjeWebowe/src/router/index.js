import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AddTaskPanel from '../components/AddTaskPanel.vue'
import RunningTasks from '../components/RunningTasks.vue'
import Raports from '../components/Raports.vue'
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
      component: AddTaskPanel
    },
    {
      path: '/tasks',
      name: 'tasks',
      component: RunningTasks
    },
    {
      path: '/raports',
      name: 'raports',
      component: Raports
    }
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
