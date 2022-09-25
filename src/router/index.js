import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
// eslint-disable-next-line no-unused-vars
import EventDetailView from '../views/EventDetailView'
import EventListView from '../views/EventListView'
import EventsByLocation from "@/views/EventsByLocation";

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/events',
    name: 'EventListView',
    component: EventListView
  },
  {
    path: '/event/:id',
    name: 'EventDetailView',
    component: EventDetailView,
    props: route => {
      return {...route.params, eventId: parseInt(route.params.id)}
    },
  },
  {
    path: '/search/location',
    name: 'SearchByLocation',
    component: EventsByLocation
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
