import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/travel",
    name: "travel",

    component: () =>
      import(/* webpackChunkName: "about" */ "../views/TravelView.vue"),
  },
  {
    path: "/safety",
    name: "safety",

    component: () =>
      import(/* webpackChunkName: "about" */ "../views/SafetyView.vue"),
  },
  {
    path: "/activities",
    name: "activities",

    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ActivitiesView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;