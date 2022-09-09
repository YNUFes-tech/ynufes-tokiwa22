import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
// eslint-disable-next-line no-unused-vars
import EventDetailView from '../views/EventDetailView'
import EventListView from '../views/EventListView'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/events',
    name: '',
    component: EventListView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
