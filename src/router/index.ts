import { createWebHistory, createRouter } from "vue-router";
import Home from '../components/Home.vue';
import Item from '../components/Item.vue';

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/item/:name",
    name: "Item",
    component: Item,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
