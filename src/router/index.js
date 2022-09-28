import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import EventDetailView from '../views/EventDetailView'
import EventListView from '../views/EventListView'
import KaraokeView from "@/views/KaraokeView";
import PosterView from "@/views/PosterView";

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
    }
  },
  {
    path:'/sp/karaoke',
    name: '',
    component: KaraokeView
  },
  {
    path: '/poster',
    name: '',
    component: PosterView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
