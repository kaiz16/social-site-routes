import { createRouter, createWebHistory } from "vue-router";
import UsersPage from "../views/UsersPage.vue";
import PostsPage from "../views/PostsPage.vue";
import PhotosPage from "../views/PhotosPage.vue";
import PostPage from "../views/PostPage.vue";
import PostsIndexPage from "../views/PostsIndexPage.vue";
const routes = [
  {
    path: "/",
    name: "UsersPage",
    component: UsersPage,
  },
  {
    path: "/posts",
    component: PostsIndexPage,
    children: [
      // /posts
      {
        path: "",
        name: "PostsPage",
        component: PostsPage,
      },
      // /posts/2
      {
        path: ":id",
        name: "PostPage",
        component: PostPage,
      },
    ],
  },
  {
    path: "/photos",
    name: "PhotosPage",
    component: PhotosPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
