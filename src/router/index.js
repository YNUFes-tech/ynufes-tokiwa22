import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import EventDetailView from '../views/EventDetailView'
import EventListView from '../views/EventListView'
import KaraokeView from "@/views/KaraokeView";
import EventsByLocation from "@/views/EventsByLocation";
import ContestViwe from "@/views/ContestViwe";

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
  },
  {
    path:'/sp/karaoke',
    name: '',
    component: KaraokeView
  },
  {
    path:'/sp/contest',
    name: '',
    component: ContestViwe
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
