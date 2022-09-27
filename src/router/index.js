import { createRouter, createWebHistory } from "vue-router";
import FreeComponent from "@/user/login/pages/free.component.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: FreeComponent,
      redirect: "/login",
      props: true,
      children: [
        {
          path: "/login",
          name: "Login",
          component: () => import("../user/login/pages/login.component.vue")
        },
        {
          path: "/register",
          name: "Register",
          component: () => import("../user/login/pages/register.component.vue"),
          children: [
            {
              path: "/register",
              name: "FirstStep",
              props: true,
              component: () => import("../user/register/pages/first-step.component.vue")
            },
            {
              path: "/register/secondstep",
              name: "SecondStep",
              props: true,
              component: () => import("../user/register/pages/second-step.component.vue")
            },
            {
              path: "/register/laststep",
              name: "LastStep",
              props: true,
              component: () => import("../user/register/pages/last-step.component.vue")
            }
          ]
        }
      ]
    },
    {
      path: "/mycars",
      name: "cars",
      component: () => import("../user/mycars/pages/mycars.component.vue")
    },
    {
      path: "/search-auto",
      name: "SearchAuto",
      component: () => import("../user/search-auto/pages/search-auto.component.vue")
    },
    {
      path: "/profile",
      name: "Profile",
      component: () => import("../user/profile/pages/profile.component.vue")
    },
    {
      path: "/favourite",
      name: "Favourite",
      component: () => import("../user/favourites/pages/my-favourites.component.vue")
    }
  ],
});

export default router;
