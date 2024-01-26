import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ExperimentView from '../views/ExperimentView.vue'
import PlanView from '../views/PlanView.vue'
import NewsView from '../views/News.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/experiment',
    name: 'experiment',
    component: ExperimentView
  },
  {
    path: '/plan',
    name: 'plan',
    component: PlanView
  },
  {
    path: '/news',
    name: "news",
    component: NewsView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
