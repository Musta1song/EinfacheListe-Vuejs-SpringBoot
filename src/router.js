import { createWebHistory, createRouter } from "vue-router";
import EinfacheListe from './components/EinfacheListe.vue';
import addEntry from './components/addEntry.vue';

const routes =  [
  {
    path: "/",
    alias: "/shoppinglist",
    name: "shoppinglist",
    component: EinfacheListe
  },

  {
    path: "/add",
    name: "add",
    component: addEntry
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;