import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import EventDetailView from '../views/EventDetailView'
import EventListView from '../views/EventListView'
import UnderConstruction from "@/views/UnderConstruction";
import NotFound from "@/views/NotFound"

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: '/events',
    name: 'EventListView',
    component: EventListView,
  },
  {
    path: "/event/:id",
    name: "EventDetailView",
    component: EventDetailView,
    props: (route) => {
      return { ...route.params, eventId: parseInt(route.params.id) };
    },
  },
  {
    path: "/events/location",
    name: "SearchByLocation",
    // component: EventsByLocation,
    component: UnderConstruction
  },
  {
    path: "/sp/karaoke",
    name: "",
    component: () => import(/* webpackChunkName: "karaoke" */ '@/views/KaraokeView.vue'),
  },
  {
    path:'/sp/contest',
    name: '',
    component: () => import(/* webpackChunkName: "contest" */ '@/views/ContestView.vue')
  },
  {
    path: "/poster",
    name: "",
    // component: UnderConstruction
    component: () => import(/* webpackChunkName: "poster-view" */ '@/views/PosterView.vue'),
  },
  {
    path: "/access",
    name: "AccessPage",
    // component: UnderConstruction,
    component: () => import(/* webpackChunkName: "access-page" */ '@/views/AccessPage.vue'),
  },
  {
    path: "/reservation",
    name: "ReservationInfo",
    component: () => import(/* webpackChunkName: "reservation-info" */ '@/views/ReservationInfo.vue'),
  },
  {
    path: "/map",
    name: "MapPage",
    component: ()=> import(/* webpackChunkName: "reservation-info" */ '@/views/MapPage.vue'),
  },
  {
    path: "/time-table",
    name: "",
    component: UnderConstruction,
  },
  {
    path: "/stages",
    name: "",
    // component: UnderConstruction,
    component: () => import(/* webpackChunkName: "stages" */ '@/views/EventStages.vue'),
  },
  {
    path: "/pamphlet",
    name: "PamphletPage",
    component: () => import(/* webpackChunkName: "pamphlet-page" */ '@/views/PamphletView.vue'),
  },
  {
    path: "/sponsors",
    name: "Sponsors",
    component: () => import(/* webpackChunkName: "sponsor-page" */ '@/views/SponsorPage.vue'),
  },
  {
    path: "/others",
    name: "Others",
    component: () => import(/* webpackChunkName: "others-page" */ '@/views/OthersView.vue'),
    // component: Other
  },
  {path: '/404', component: NotFound},
  {path: '/:pathMatch(.*)*', redirect: '/404'},
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return {
        top: 0,
      };
    }
  },
});

export default router;
