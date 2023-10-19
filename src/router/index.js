import { createRouter, createWebHistory } from "vue-router";
import TableView from "../views/TableView.vue";
// import ChartView from "../views/ChartView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "table",
      component: TableView,
      props: true,
    },
    {
      path: "/chart",
      name: "chart",
      component: () => import("../views/ChartView.vue"),
      props: true,
    },
  ],
});

export default router;
