import { createWebHistory, createRouter } from "vue-router";
import SimpleList from './components/SimpleList.vue'
import addEntry from './components/addEntry.vue';

const routes =  [
  {
    path: "/",
    alias: "/shoppinglist",
    name: "shoppinglist",
    component: SimpleList
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