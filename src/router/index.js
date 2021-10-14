import { createRouter, createWebHistory } from "vue-router";
import Users from "../views/Users.vue";
import Posts from "../views/Posts.vue";
import Photos from "../views/Photos.vue";
import Post from "../views/Post.vue";
import PostsIndex from "../views/PostsIndex.vue";
const routes = [
  {
    path: "/",
    name: "Users",
    component: Users,
  },
  {
    path: "/posts",
    component: PostsIndex,
    children: [
      // /posts
      {
        path: "",
        name: "Posts",
        component: Posts,
      },
      // /posts/2
      {
        path: ":id",
        name: "Post",
        component: Post,
      },
    ],
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
