import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
// eslint-disable-next-line no-unused-vars
import EventDetailView from "../views/EventDetailView";
// eslint-disable-next-line no-unused-vars
import EventListView from "../views/EventListView";
// eslint-disable-next-line no-unused-vars
import KaraokeView from "@/views/KaraokeView";
import PosterView from "@/views/PosterView";
// eslint-disable-next-line no-unused-vars
import EventsByLocation from "@/views/EventsByLocation";
// eslint-disable-next-line no-unused-vars
import AccessPage from "@/views/AccessPage";
import ReservationInfo from "@/views/ReservationInfo";
import UnderConstruction from "@/views/UnderConstruction";
// eslint-disable-next-line no-unused-vars
import EventsAndStage from "@/views/EventsAndStage";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/events",
    name: "EventListView",
    // component:UnderConstruction
    component: EventListView,
  },
  {
    path: "/event/:id",
    name: "EventDetailView",
    component: EventDetailView,
    props: (route) => {
      return { ...route.params, eventId: parseInt(route.params.id) };
    },
    // component: UnderConstruction
  },
  {
    path: "/events/location",
    name: "SearchByLocation",
    component: EventsByLocation,
    // component: UnderConstruction
  },
  {
    path: "/sp/karaoke",
    name: "",
    component: KaraokeView,
  },
  {
    path: "/poster",
    name: "",
    // component: UnderConstruction
    component: PosterView,
  },
  {
    path: "/access",
    name: "AccessPage",
    component: AccessPage,
    // component: UnderConstruction
  },
  {
    path: "/reservation",
    name: "ReservationInfo",
    component: ReservationInfo,
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
    // component: EventsAndStage,
    component: UnderConstruction,
  },
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
