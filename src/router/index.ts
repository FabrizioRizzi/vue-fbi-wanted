import { createWebHistory, createRouter } from "vue-router";
import Home from '../components/Home.vue';
import ItemDetails from '../components/ItemDetails.vue';

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/item",
    name: "Item",
    component: ItemDetails,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
