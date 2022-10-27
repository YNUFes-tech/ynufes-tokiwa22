import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import EventDetailView from '../views/EventDetailView'
import EventListView from '../views/EventListView'
import UnderConstruction from "@/views/UnderConstruction";
// eslint-disable-next-line no-unused-vars
import EventsAndStage from "@/views/EventsAndStage";
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
    component: UnderConstruction,
    // component: () => import(/* webpackChunkName: "contest" */ '@/views/ContestView.vue')
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
    name: "Map",
    component: UnderConstruction,
  },
  {
    path: "/time-table",
    name: "",
    component: UnderConstruction,
  },
  {
    path: "/events-and-stage",
    name: "",
    component: UnderConstruction,
    // component: EventsAndStage,
  },
  {
    path: "/pamphlet",
    name: "PamphletPage",
    component: () => import(/* webpackChunkName: "pamphlet-page" */ '@/views/PamphletView.vue'),
  },
  {
    path: "/sponsors",
    name: "Sponsors",
    // component: UnderConstruction,
    component: () => import(/* webpackChunkName: "sponsor-page" */ '@/views/SponsorPage.vue'),
  },
  {
    path: "/others",
    name: "Others",
    component: UnderConstruction
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
