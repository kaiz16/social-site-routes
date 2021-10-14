import { createRouter, createWebHistory } from "vue-router";
import Users from "../views/Users.vue";
import Posts from "../views/Posts.vue";
import Photos from "../views/Photos.vue";

const routes = [
  {
    path: "/",
    name: "Users",
    component: Users,
  },
  {
    path: "/posts",
    name: "Posts",
    component: Posts,
  },
  {
    path: "/photos",
    name: "Photos",
    component: Photos,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
